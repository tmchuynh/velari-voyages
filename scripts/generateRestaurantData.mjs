import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Basic usage (replaces all restaurant data, generates 5 restaurants per city):
// node scripts/generateRestaurantData.mjs

// Append mode (adds new restaurants to existing files):
// node scripts/generateRestaurantData.mjs --append
// node scripts/generateRestaurantData.mjs -a

// Specify number of restaurants to generate:
// node scripts/generateRestaurantData.mjs --count=10

// Combine options:
// node scripts/generateRestaurantData.mjs --append --count=3


// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const APPEND_MODE = args.includes('--append') || args.includes('-a');
const RESTAURANT_COUNT = parseInt(args.find(arg => arg.startsWith('--count='))?.split('=')[1] || '5', 10);
const DEBUG_MODE = args.includes('--debug') || args.includes('-d');

console.log(`Mode: ${APPEND_MODE ? 'Append' : 'Replace'} restaurants`);
console.log(`Generating ${RESTAURANT_COUNT} restaurants per city`);

// Get the list of all cities
const getCityFiles = () => {
  try {
    // Read the city.ts file as text
    const cityFilePath = path.join(
      __dirname,
      "..",
      "src",
      "lib",
      "constants",
      "info",
      "city.ts"
    );

    const fileContent = fs.readFileSync(cityFilePath, "utf8");

    // Extract city names using regex
    const cityArrayMatch = fileContent.match(
      /export const cityFiles = \[([\s\S]*?)\];/
    );
    if (!cityArrayMatch || !cityArrayMatch[1]) {
      console.error("Could not parse city files from city.ts");
      return [];
    }

    // Extract city names from the array string
    return cityArrayMatch[1]
      .split(",")
      .map((city) => city.trim().replace(/"/g, "").replace(/'/g, ""))
      .filter((city) => city.length > 0);
  } catch (error) {
    console.error("Error reading city files:", error);
    return [];
  }
};

// Generate restaurant data for a given city
const generateRestaurantsForCity = (cityName) => {
  // Create camelCase city name (e.g., "new-york-city" -> "newYorkCity")
  const camelCaseCityName = cityName
    .split("-")
    .map((part, index) =>
      index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join("");

  // Create file path for the restaurant data
  const filePath = path.join(
    __dirname,
    "..",
    "src",
    "lib",
    "constants",
    "cruises",
    "restaurants",
    cityName,
    "restaurants.ts"
  );

  // Create directory if it doesn't exist
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Check if file already exists and we're in append mode
  let existingRestaurants = [];
  if (APPEND_MODE && fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, "utf8");

      if (DEBUG_MODE) {
        console.log(`DEBUG: File content for ${cityName} (first 200 chars):`);
        console.log(content.substring(0, 200) + "...");
      }

      // Extract array from existing file using an improved regex
      // This pattern is more flexible with whitespace and formatting
      const match = content.match(
        /export\s+const\s+\w+Restaurants\s*:\s*Restaurant\[\]\s*=\s*(\[[\s\S]*?\]);/
      );

      if (match && match[1]) {
        const arrayContent = match[1];

        if (DEBUG_MODE) {
          console.log(`DEBUG: Extracted array content (first 100 chars):`);
          console.log(arrayContent.substring(0, 100) + "...");
        }

        try {
          // Preprocess the content to handle potential issues
          // This helps with trailing commas and TypeScript-specific syntax
          const processedContent = arrayContent
            .replace(/,\s*]/g, "]") // Remove trailing commas
            .replace(/\/\/.*$/gm, "") // Remove single-line comments
            .replace(/\/\*[\s\S]*?\*\//g, ""); // Remove multi-line comments

          // Parse the extracted array
          existingRestaurants = JSON.parse(processedContent);
          console.log(
            `Found ${existingRestaurants.length} existing restaurants for ${cityName}`
          );
        } catch (e) {
          console.error(
            `Error parsing existing restaurants for ${cityName}:`,
            e
          );
          console.error(
            `Failed JSON content (first 200 chars): ${match[1].substring(
              0,
              200
            )}...`
          );

          // Fall back to an alternative approach using eval in a controlled way
          // This is safer than raw eval since we're in a Node.js script context
          try {
            console.log("Attempting alternative parsing method...");
            // Use Function constructor instead of eval for slightly better safety
            const safeEval = new Function(`return ${arrayContent}`);
            existingRestaurants = safeEval();
            console.log(
              `Successfully recovered ${existingRestaurants.length} restaurants using alternative method`
            );
          } catch (evalError) {
            console.error("Alternative parsing also failed:", evalError);
            // If all parsing attempts fail, default to empty array for safety
            existingRestaurants = [];
          }
        }
      } else {
        console.warn(`No restaurant array found in ${filePath}`);
      }
    } catch (e) {
      console.error(
        `Error reading existing restaurant file for ${cityName}:`,
        e
      );
    }
  }

  // Generate new restaurants data for the city
  const newRestaurants = generateRandomRestaurants(cityName, RESTAURANT_COUNT);

  // Combine existing and new restaurants in append mode
  const restaurants = APPEND_MODE
    ? [...existingRestaurants, ...newRestaurants]
    : newRestaurants;

  // Validate we're actually appending if in append mode
  if (APPEND_MODE && existingRestaurants.length > 0) {
    console.log(
      `Append validation: ${existingRestaurants.length} existing + ${newRestaurants.length} new = ${restaurants.length} total`
    );
    if (
      restaurants.length !==
      existingRestaurants.length + newRestaurants.length
    ) {
      console.error(
        "WARNING: Final restaurant count doesn't match expected total. Append may not be working correctly!"
      );
    }
  }

  // Generate the file content
  const fileContent = `import { Restaurant } from "@/lib/types/types";

export const ${camelCaseCityName}Restaurants: Restaurant[] = ${JSON.stringify(
    restaurants,
    null,
    2
  )};
`;

  // Write the file
  fs.writeFileSync(filePath, fileContent);
  if (APPEND_MODE && existingRestaurants.length > 0) {
    console.log(
      `Updated restaurant data for ${cityName}: ${existingRestaurants.length} existing + ${newRestaurants.length} new = ${restaurants.length} total`
    );
  } else {
    console.log(
      `Generated restaurant data for ${cityName}: ${restaurants.length} restaurants`
    );
  }
};

// Function to generate random restaurant data for a city
const generateRandomRestaurants = (cityName, count = RESTAURANT_COUNT) => {
  // Define cuisine types appropriate for each city/region
  const cuisinesByRegion = {
    auckland: ["New Zealand", "Pacific", "Seafood", "Maori", "Australian"],
    amsterdam: ["Dutch", "Indonesian", "French", "Belgian", "Mediterranean"],
    barcelona: ["Spanish", "Catalan", "Mediterranean", "Seafood", "Fusion"],
    berlin: ["German", "Turkish", "Vietnamese", "Italian", "Mediterranean"],
    boston: ["American", "Seafood", "Italian", "Irish", "Mediterranean"],
    buenosAires: ["Argentinian", "Italian", "Spanish", "French", "Peruvian"],
    "cape-town": ["African", "Indian", "Seafood", "Mediterranean", "French"],
    charleston: ["American", "Southern", "Seafood", "Cajun", "Creole"],
    copenhagen: ["Scandinavian", "Danish", "Italian", "French", "Spanish"],
    dubai: [
      "Middle Eastern",
      "Lebanese",
      "Indian",
      "Mediterranean",
      "Japanese",
    ],
    dublin: ["Irish", "British", "Mediterranean", "Italian", "French"],
    florence: ["Italian", "Tuscan", "Mediterranean", "French", "Japanese"],
    "fort-lauderdale": [
      "American",
      "Seafood",
      "Caribbean",
      "Italian",
      "Mexican",
    ],
    galveston: ["American", "Seafood", "Mexican", "Cajun", "Italian"],
    "hong-kong": ["Chinese", "Cantonese", "Japanese", "Thai", "French"],
    kiel: ["German", "Scandinavian", "Italian", "French", "Mediterranean"],
    kyoto: ["Japanese", "Asian", "Italian", "French", "Chinese"],
    lisbon: ["Portuguese", "Mediterranean", "Seafood", "Italian", "Brazilian"],
    london: ["British", "Indian", "Italian", "French", "Chinese"],
    "los-angeles": [
      "American",
      "Mexican",
      "Japanese",
      "Korean",
      "Mediterranean",
    ],
    melbourne: ["Australian", "Italian", "Greek", "Chinese", "Vietnamese"],
    miami: ["Cuban", "American", "Caribbean", "Peruvian", "Italian"],
    milan: ["Italian", "Mediterranean", "French", "Japanese", "Fusion"],
    montreal: ["French", "Canadian", "Italian", "Mediterranean", "American"],
    "new-orleans": ["Cajun", "Creole", "American", "French", "Italian"],
    "new-york-city": ["American", "Italian", "Chinese", "Japanese", "French"],
    paris: ["French", "Italian", "Japanese", "Mediterranean", "Middle Eastern"],
    "quebec-city": [
      "French",
      "Canadian",
      "Italian",
      "American",
      "Mediterranean",
    ],
    "rio-de-janeiro": [
      "Brazilian",
      "Portuguese",
      "Italian",
      "Japanese",
      "Seafood",
    ],
    rome: ["Italian", "Mediterranean", "Roman", "Japanese", "French"],
    "san-francisco": ["American", "Chinese", "Mexican", "Japanese", "Italian"],
    "san-juan": ["Puerto Rican", "Caribbean", "Spanish", "American", "Seafood"],
    seattle: ["American", "Seafood", "Japanese", "Italian", "Thai"],
    singapore: ["Singaporean", "Chinese", "Malaysian", "Indian", "Japanese"],
    southampton: ["British", "Italian", "Indian", "French", "Mediterranean"],
    sydney: ["Australian", "Seafood", "Italian", "Asian", "Mediterranean"],
    tampa: ["American", "Cuban", "Seafood", "Italian", "Spanish"],
    tokyo: ["Japanese", "Italian", "French", "Chinese", "Korean"],
    toronto: ["Canadian", "Italian", "Chinese", "Indian", "Japanese"],
    vancouver: ["Canadian", "Asian", "Seafood", "Italian", "Mediterranean"],
    venice: ["Italian", "Venetian", "Mediterranean", "Seafood", "Japanese"],
    yokohama: ["Japanese", "Chinese", "Italian", "French", "American"],
  };

  const defaultCuisines = [
    "Italian",
    "Mediterranean",
    "American",
    "French",
    "Japanese",
  ];
  const cityCuisines = cuisinesByRegion[cityName] || defaultCuisines;

  // Restaurant names by region/city
  const namePrefix = {
    auckland: removeDuplicates([
      "Harbour",
      "Kiwi",
      "Maori",
      "Coromandel",
      "Pacific",
      "Auckland",
      "North Island",
      "Wellington",
      "Skyline",
      "Rotorua",
      "Tasman",
      "Waitemata",
      "Bay of Islands",
      "Northland",
      "Southern Cross",
      "Sky Tower",
      "Hauraki",
      "Seabreeze",
      "Island Hopping",
    ]),
    amsterdam: removeDuplicates([
      "Canal",
      "Dutch",
      "Amsterdam",
      "Tulip",
      "Rembrandt",
      "Grachten",
      "Windmill",
      "Van Gogh",
      "Anne Frank",
      "Holland",
      "Damrak",
      "Keizersgracht",
      "Bicycle",
      "Zaanse",
      "Red Light",
      "Gouda",
      "Netherlands",
      "Rijksmuseum",
    ]),
    barcelona: removeDuplicates([
      "Barcelona",
      "Catalonia",
      "Gaudi",
      "Modernista",
      "Mosaic",
      "Rambla",
      "Picasso",
      "Sagrada",
      "Mediterranean",
      "Tapas",
      "Barri Gòtic",
      "Montserrat",
      "Sunlit",
      "Cava",
      "Costa Brava",
      "Eixample",
      "Tibidabo",
    ]),
    berlin: removeDuplicates([
      "Berlin",
      "Brandenburg",
      "Rhine",
      "Bavarian",
      "Deutsche",
      "Reichstag",
      "Spree",
      "Unter den Linden",
      "Checkpoint",
      "Wall",
      "Tiergarten",
      "Prussian",
      "Museum Island",
      "Kreuzberg",
      "Charlottenburg",
      "Alexanderplatz",
    ]),
    boston: removeDuplicates([
      "Boston",
      "Harbor",
      "Colonial",
      "Atlantic",
      "Freedom",
      "Quincy",
      "Fenway",
      "Beacon",
      "Tea Party",
      "Cambridge",
      "Seaport",
      "Paul Revere",
      "Maritime",
      "Revolution",
      "Charles River",
      "New England",
    ]),
    "buenos-aires": removeDuplicates([
      "Buenos Aires",
      "Tango",
      "Gaucho",
      "San Telmo",
      "Pampas",
      "Evita",
      "Recoleta",
      "Río de la Plata",
      "La Boca",
      "Obelisco",
      "Argentina",
      "Plaza",
      "Estancia",
      "Andes",
      "Mate",
      "Carnaval",
      "Paraná",
    ]),
    "cape-town": removeDuplicates([
      "Cape",
      "Safari",
      "Table Mountain",
      "Vineyard",
      "Atlantic",
      "Winelands",
      "Seabreeze",
      "South Seas",
      "Penguin",
      "Robben Island",
      "Boulders",
      "Cape Point",
      "Western Cape",
      "Signal Hill",
      "Twelve Apostles",
      "Bo-Kaap",
      "Victoria Wharf",
    ]),
    charleston: removeDuplicates([
      "Charleston",
      "Palmetto",
      "Southern",
      "Magnolia",
      "Harbor",
      "Sea Island",
      "Spanish Moss",
      "Coastal",
      "Lowcountry",
      "Historic",
      "Battery",
      "Rainbow Row",
      "Sweet Tea",
      "Fort Sumter",
      "Ashley River",
      "Gullah",
    ]),
    copenhagen: removeDuplicates([
      "Copenhagen",
      "Viking",
      "Scandi",
      "Nyhavn",
      "Little Mermaid",
      "Tivoli",
      "Rosenborg",
      "Oresund",
      "Hygge",
      "Nordic",
      "Canal",
      "Baltic",
      "Frederik",
      "Carlsberg",
      "Amalienborg",
      "Cinnamon Roll",
      "Christiania",
    ]),
    dubai: removeDuplicates([
      "Dubai",
      "Gold",
      "Desert",
      "Emirates",
      "Palm",
      "Burj",
      "Arabian",
      "Marina",
      "Souk",
      "Spice",
      "Skyline",
      "Miracle",
      "Creek",
      "Dhow",
      "Sheikh Zayed",
      "Sands",
    ]),
    dublin: removeDuplicates([
      "Dublin",
      "Emerald",
      "Celtic",
      "Lone Star",
      "Liffey",
      "Shamrock",
      "Temple Bar",
      "Irish",
      "Cliffs",
      "Saint Patrick",
      "Guinness",
      "Trinity",
      "Wicklow",
      "Jameson",
      "Ha'penny",
      "Grafton",
      "Blarney",
      "Green Isle",
      "Fáilte",
    ]),
    florence: removeDuplicates([
      "Florence",
      "Tuscany",
      "Renaissance",
      "Piazza",
      "Michelangelo",
      "Villa",
      "Luxury",
      "Arno",
      "Medici",
      "Duomo",
      "Uffizi",
      "Chianti",
      "Ponte Vecchio",
      "David",
      "Firenze",
      "Artisan",
      "Oltrarno",
    ]),
    "fort-lauderdale": removeDuplicates([
      "Fort Lauderdale",
      "Sunshine",
      "Everglades",
      "Yacht",
      "Palm",
      "Intracoastal",
      "Beachfront",
      "Luxury",
      "Atlantic",
      "Cruise Port",
      "Gulfstream",
      "Broward",
      "Coral Ridge",
      "Oceanfront",
      "Tropical",
      "Marina Mile",
      "A1A",
    ]),
    galveston: removeDuplicates([
      "Galveston",
      "Texas",
      "Gulf",
      "Lone Star",
      "West Bay",
      "Cruiseport",
      "Seaside",
      "Island",
      "Port",
      "Historic Strand",
      "Pier",
      "Kemah",
      "Shrimp",
      "Surfside",
      "Bay",
      "Moody",
      "Bolivar",
    ]),
    "hong-kong": removeDuplicates([
      "Hong Kong",
      "Victoria",
      "Pearl",
      "Dynasty",
      "Harbor",
      "Junk Boat",
      "Dragon",
      "Kowloon",
      "Lantern",
      "Causeway",
      "Neon",
      "Lan Kwai",
      "Mid-Levels",
      "Lantau",
      "Dim Sum",
      "Canton",
      "Neon",
      "Star Ferry",
    ]),
    kiel: removeDuplicates([
      "Kiel",
      "Baltic",
      "Hanseatic",
      "Schleswig",
      "Fjord",
      "Harbor",
      "Marine",
      "Lighthouse",
      "Yachting",
      "Germany",
      "North Sea",
      "Cruise Gate",
      "Ostseekai",
      "Sailing",
      "Warft",
      "Laboe",
      "Navy",
    ]),
    kyoto: removeDuplicates([
      "Kyoto",
      "Zen",
      "Geisha",
      "Bamboo",
      "Temple",
      "Shrine",
      "Gion",
      "Pagoda",
      "Imperial",
      "Matcha",
      "Gion",
      "Torii",
      "Fushimi",
      "Kaiseki",
      "Kinkakuji",
      "Arashiyama",
      "Shrine",
      "Blossom",
      "Higashiyama",
      "Nishiki",
    ]),
    lisbon: removeDuplicates([
      "Lisbon",
      "Tagus",
      "Explorer",
      "Fado",
      "Port",
      "Tram",
      "Alfama",
      "Belém",
      "Atlantic",
      "Azulejo",
      "Belém",
      "Saudade",
      "Pastel",
      "Atlantic",
      "Castelo",
      "Miradouro",
      "Baixa",
    ]),
    london: removeDuplicates([
      "London",
      "Thames",
      "Royal",
      "Crown",
      "Piccadilly",
      "Britannia",
      "Big Ben",
      "Underground",
      "Westminster",
      "Tower Bridge",
      "Soho",
      "London Eye",
      "Camden",
      "Piccadilly",
      "Foggy",
      "Tea Time",
      "Kensington",
    ]),
    "los-angeles": removeDuplicates([
      "Los Angeles",
      "Hollywood",
      "Pacific",
      "Sunset",
      "Coastal",
      "Boardwalk",
      "Venice",
      "Santa Monica",
      "Beverly",
      "Malibu",
      "Palm Tree",
      "Rodeo",
      "LA Live",
      "Griffith",
      "Metro Goldwyn",
      "Baywatch",
    ]),
    melbourne: removeDuplicates([
      "Melbourne",
      "Victoria",
      "Yarra",
      "Laneway",
      "Down Under",
      "St Kilda",
      "Garden City",
      "Federation",
      "Art Scene",
      "Flinders",
      "Collins",
      "Botanic",
      "Coffee",
      "Sporting",
      "Skydeck",
      "Eureka",
      "Tram",
    ]),
    miami: removeDuplicates([
      "Miami",
      "Magic City",
      "Biscayne",
      "Art Deco",
      "Sunshine",
      "South Beach",
      "Sunshine",
      "Tropic",
      "Little Havana",
      "Cuban",
      "Ocean Drive",
      "Everglades",
      "Salsa",
      "Bayside",
      "Little Havana",
      "Coral Gables",
      "Tropical",
      "Bayfront",
    ]),
    milan: removeDuplicates([
      "Milan",
      "Fashion",
      "Duomo",
      "Lombardy",
      "Renaissance",
      "Galleria",
      "Scala",
      "Navigli",
      "Design",
      "Armani",
      "Galleria",
      "Navigli",
      "Italian",
      "Italian",
      "Brera",
      "Design",
      "Haute Couture",
      "Armani",
      "Mosaic",
      "Piazza",
    ]),
    montreal: removeDuplicates([
      "Montreal",
      "Quebec",
      "Saint Lawrence",
      "Maple",
      "Old Port",
      "Mount Royal",
      "French",
      "Poutine",
      "Winter",
      "Basilique",
      "Cultural",
      "Crescent",
      "French",
      "Poutine",
      "Notre-Dame",
      "Jazz",
      "Plateau",
      "Vieux-Montréal",
      "Winter City",
      "Bonsecours",
    ]),
    "new-orleans": removeDuplicates([
      "New Orleans",
      "Jazz",
      "Bourbon",
      "Crescent",
      "Creole",
      "French Quarter",
      "Voodoo",
      "Beignet",
      "French Quarter",
      "Mississippi",
      "Mardi Gras",
      "Riverboat",
      "Bayou",
      "Beignet",
      "Saints",
      "Garden District",
      "Treme",
      "Mississippi",
    ]),
    "new-york-city": removeDuplicates([
      "New York",
      "Empire",
      "Hudson",
      "Liberty",
      "Hudson",
      "Central Park",
      "Statue",
      "Liberty",
      "Wall Street",
      "Manhattan",
      "Times Square",
      "Broadway",
      "Central Park",
      "Brooklyn",
      "Wall Street",
      "Metropolitan",
      "SoHo",
      "Big Apple",
      "Statue",
      "Skyline",
    ]),
    paris: removeDuplicates([
      "Paris",
      "Seine",
      "Eiffel",
      "Louvre",
      "Champs-Élysées",
      "Montmartre",
      "Versailles",
      "Louvre",
      "Montmartre",
      "Cafe",
      "Amour",
      "Baguette",
      "Chic",
      "Left Bank",
      "Belle Époque",
      "Rive Gauche",
      "Baguette",
      "Amour",
      "Notre-Dame",
      "French",
      "Bohemian",
    ]),
    "quebec-city": removeDuplicates([
      "Quebec",
      "Château",
      "French",
      "Old Port",
      "Citadel",
      "St. Lawrence",
      "Fleur-de-lis",
      "Winter Carnival",
      "Ramparts",
      "Terrasse",
      "Petit Champlain",
      "Old Town",
      "Winter",
      "Maple",
      "Plains of Abraham",
      "Upper Town",
      "Cobblestone",
    ]),
    "rio-de-janeiro": removeDuplicates([
      "Rio",
      "Carnaval",
      "Copacabana",
      "Sugarloaf",
      "Ipanema",
      "Samba",
      "Christ the Redeemer",
      "Maracanã",
      "Favela",
      "Carioca",
      "Ipanema",
      "Brazilian",
      "Favela",
      "Corcovado",
      "Brazilian",
      "Atlantic",
      "Botafogo",
      "Corcovado",
      "Lapa",
    ]),
    rome: removeDuplicates([
      "Rome",
      "Eternal City",
      "Colosseum",
      "Vatican",
      "Tiber",
      "Pantheon",
      "Forum",
      "Trevi",
      "Forum",
      "Tiber",
      "Pantheon",
      "Seven Hills",
      "Piazza Navona",
      "Baroque",
      "Roman",
      "Trastevere",
      "Gelato",
      "Renaissance",
    ]),
    "san-francisco": removeDuplicates([
      "San Francisco",
      "Golden Gate",
      "Bay",
      "Alcatraz",
      "Cable Car",
      "Fisherman's Wharf",
      "Lombard",
      "Mission",
      "Coastal",
      "Mission",
      "Lombard",
      "Fog",
      "Chinatown",
      "Fog City",
      "Pier 39",
      "Twin Peaks",
      "Pacific",
      "Painted Ladies",
    ]),
    "san-juan": removeDuplicates([
      "San Juan",
      "Old Town",
      "Castillo",
      "Boricua",
      "El Morro",
      "Caribbean",
      "Taino",
      "Fortaleza",
      "Salsa",
      "Island",
      "Old Town",
      "Caribbean",
      "Isla Verde",
      "Reggaetón",
      "Coconut",
      "Puerto Rican",
      "Condado",
      "Plaza",
      "Isla Verde",
      "Viejo San Juan",
    ]),
    seattle: removeDuplicates([
      "Seattle",
      "Emerald",
      "Puget",
      "Rain City",
      "Space Needle",
      "Coffee",
      "Sound",
      "Pike Place",
      "Mount Rainier",
      "Bainbridge",
      "Olympic",
      "Space Needle",
      "Emerald",
      "Puget",
      "Brew",
      "Cascade",
      "Ferry",
      "Tech",
      "Chihuly",
      "Northwest",
    ]),
    singapore: removeDuplicates([
      "Singapore",
      "Lion City",
      "Marina Bay",
      "Merlion",
      "Orchard",
      "Sentosa",
      "SkyPark",
      "Botanic",
      "Sentosa",
      "Merlion",
      "Hawker",
      "Changi",
      "Bayfront",
      "Gardens",
      "Chinatown",
      "Multicultural",
      "Little India",
      "Bayfront",
      "Futuristic",
      "Hawker",
    ]),
    southampton: removeDuplicates([
      "Southampton",
      "Titanic",
      "Solent",
      "Port City",
      "Harbor",
      "Maritime",
      "Old Town",
      "Maritime",
      "Tudor",
      "Titanic",
      "Isle of Wight",
      "Royal",
      "Hampshire",
      "Port",
      "Ocean Village",
      "Docklands",
      "Hampshire",
      "Spinnaker",
      "Royal Pier",
      "Quayside",
      "SeaCity",
      "South Coast",
    ]),
    sydney: removeDuplicates([
      "Sydney",
      "Harbour",
      "Opera",
      "Darling",
      "Bondi",
      "Koala",
      "Blue Mountains",
      "Koala",
      "Surfer",
      "Manly",
      "Cove",
      "The Rocks",
      "Down Under",
      "Outback",
      "Circular Quay",
      "New South Wales",
      "Southern Cross",
      "Surf",
      "Botanic",
    ]),
    tampa: removeDuplicates([
      "Tampa",
      "Bay",
      "Ybor",
      "Gasparilla",
      "Sunshine",
      "Cigar",
      "Ybor",
      "Buccaneer",
      "Seaside",
      "Clearwater",
      "Riverwalk",
      "Harbor",
      "Pirate",
      "Historic",
      "Coastal",
      "Gulf",
      "Hillsborough",
      "Seabreeze",
      "Palms",
      "Florida",
    ]),
    tokyo: removeDuplicates([
      "Tokyo",
      "Sakura",
      "Fuji",
      "Imperial",
      "Ginza",
      "Harajuku",
      "Shibuya",
      "Akihabara",
      "Anime",
      "Shibuya",
      "Harajuku",
      "Ramen",
      "Sky Tree",
      "Sumo",
      "Robot",
      "Zen",
      "Neon",
      "Skytree",
      "Asakusa",
      "Cherry Blossom",
    ]),
    toronto: removeDuplicates([
      "Toronto",
      "CN Tower",
      "Ontario",
      "Maple",
      "Harbourfront",
      "Yonge",
      "Ontario",
      "Hockey",
      "Yonge",
      "SkyDome",
      "Distillery",
      "6ix",
      "Hockey",
      "Skyline",
      "Distillery",
      "Island",
      "Bloor",
      "Danforth",
      "Royal",
      "Canadian",
      "The Six",
    ]),
    vancouver: removeDuplicates([
      "Vancouver",
      "Pacific",
      "Granville",
      "Seawall",
      "Granville",
      "Seawall",
      "Whistler",
      "Gastown",
      "Burrard",
      "Gastown",
      "Stanley Park",
      "Mountains",
      "Yaletown",
      "Harbour",
      "SkyTrain",
      "West Coast",
      "Coal Harbour",
      "Capilano",
      "Burrard",
      "Rainforest",
    ]),
    venice: removeDuplicates([
      "Venice",
      "Lagoon",
      "Canal",
      "Gondola",
      "Rialto",
      "San Marco",
      "Carnival",
      "Lagoon",
      "Murano",
      "Carnevale",
      "Doge",
      "San Marco",
      "Bridge",
      "Rialto",
      "Island",
      "Mosaic",
      "Waterway",
      "Bridge of Sighs",
      "Murano",
      "Lido",
      "Venetian",
      "Vaporetto",
      "Adriatic",
      "Palazzo",
      "Glassworks",
    ]),
    yokohama: removeDuplicates([
      "Yokohama",
      "Bay",
      "Minato Mirai",
      "Chinatown",
      "Cosmo World",
      "Pacifico",
      "Seaside",
      "Sakuragicho",
      "Marine",
      "Nippon",
      "Cosmo",
      "Hamakko",
      "Sky Garden",
      "Chinatown",
      "Seaside",
      "Silk",
      "Sky Garden",
      "Red Brick",
      "Harbor",
      "Ramen",
      "Landmark",
      "Nippon Maru",
      "Kanagawa",
    ]),
  };

  const defaultPrefix = ["The", "Royal", "Blue", "Golden", "Grand"];
  const cityPrefix = namePrefix[cityName] || defaultPrefix;

  // Generic restaurant name suffixes
  const nameSuffix = [
    "Bistro",
    "Cafe",
    "Restaurant",
    "Grill",
    "Eatery",
    "Kitchen",
    "Table",
    "House",
    "Garden",
    "Terrace",
    "Brasserie",
    "Dining Room",
    "Tavern",
    "Bar & Kitchen",
    "Lounge",
    "Room",
    "Deli",
    "Cantina",
    "Saloon",
    "Trattoria",
    "Inn",
    "Cellar",
    "Bakery",
    "Gastropub",
    "Steakhouse",
    "Barbecue",
    "Ristorante",
    "Pizzeria",
    "Chophouse",
    "Buffet",
    "Canteen",
    "Snack Bar",
    "Taproom",
    "Coffee House",
    "Osteria",
    "Fish House",
    "Supper Club",
    "Nook",
    "Snack Shack",
    "Dining Hall",
  ];

  // Generate 'count' restaurants for this city instead of a random number
  const restaurants = [];

  // Helper functions
  const getRandomCuisine = () => {
    const cuisines = cityCuisines.length > 0 ? cityCuisines : defaultCuisines;
    return cuisines[Math.floor(Math.random() * cuisines.length)];
  };

  const getRandomRating = () => {
    return (Math.floor(Math.random() * 10) / 10 + 3.9).toFixed(1);
  };

  const getRandomPrice = () => {
    const prices = ["$", "$$", "$$$", "$$$$"];
    return prices[Math.floor(Math.random() * prices.length)];
  };

  const getRandomName = () => {
    const prefix = cityPrefix[Math.floor(Math.random() * cityPrefix.length)];
    const suffix = nameSuffix[Math.floor(Math.random() * nameSuffix.length)];
    return `${prefix} ${suffix}`;
  };

  const getRandomHours = () => {
    const days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    const hours = {};

    days.forEach((day) => {
      const isOpen = Math.random() > 0.1; // 90% chance of being open
      if (isOpen) {
        const openHour = Math.floor(Math.random() * 3) + 9; // 9am to 11am
        const closeHour = Math.floor(Math.random() * 4) + 19; // 7pm to 10pm
        hours[day] = `${openHour}:00-${closeHour}:00`;
      } else {
        hours[day] = "Closed";
      }
    });

    return hours;
  };

  const getRandomBool = (probability = 0.5) => {
    return Math.random() < probability;
  };

  // City-specific description elements
  const cityDescriptions = {
    auckland: {
      landmarks: [
        "Auckland Harbour Bridge",
        "Sky Tower",
        "Waitemata Harbour",
        "Rangitoto Island",
      ],
      features: [
        "harbor views",
        "Pacific-inspired decor",
        "Kiwi hospitality",
        "locally-sourced seafood",
        "Maori cultural influences",
      ],
      specialties: [
        "green-lipped mussels",
        "lamb dishes",
        "pavlova",
        "hangi",
        "manuka honey",
      ],
    },
    amsterdam: {
      landmarks: ["the canals", "Vondelpark", "Jordaan district", "Dam Square"],
      features: [
        "canal-side dining",
        "17th century building",
        "cozy brown café atmosphere",
        "Dutch design elements",
      ],
      specialties: [
        "stroopwafels",
        "bitterballen",
        "Dutch pancakes",
        "herring",
        "Gouda cheese",
      ],
    },
    barcelona: {
      landmarks: [
        "La Rambla",
        "Sagrada Familia",
        "Gothic Quarter",
        "Barceloneta Beach",
      ],
      features: [
        "Gaudi-inspired decor",
        "Catalonian charm",
        "mosaic details",
        "Mediterranean terrace",
      ],
      specialties: [
        "paella",
        "tapas",
        "jamón ibérico",
        "pan con tomate",
        "crema catalana",
      ],
    },
    berlin: {
      landmarks: [
        "Brandenburg Gate",
        "Museum Island",
        "Tiergarten",
        "East Side Gallery",
      ],
      features: [
        "industrial chic decor",
        "beer garden",
        "historic building",
        "avant-garde atmosphere",
      ],
      specialties: [
        "currywurst",
        "döner kebab",
        "schnitzel",
        "pretzels",
        "German beer",
      ],
    },
    boston: {
      landmarks: [
        "Faneuil Hall",
        "Boston Harbor",
        "Beacon Hill",
        "Fenway Park",
      ],
      features: [
        "historic setting",
        "New England charm",
        "waterfront views",
        "colonial architecture",
      ],
      specialties: [
        "clam chowder",
        "lobster rolls",
        "Boston cream pie",
        "oysters",
        "baked beans",
      ],
    },
    "buenos-aires": {
      landmarks: ["La Boca", "Recoleta", "Plaza de Mayo", "Puerto Madero"],
      features: [
        "tango shows",
        "parilla-style grill",
        "European elegance",
        "vibrant atmosphere",
      ],
      specialties: [
        "asado",
        "empanadas",
        "dulce de leche",
        "Malbec wine",
        "mate",
      ],
    },
    "cape-town": {
      landmarks: [
        "Table Mountain",
        "V&A Waterfront",
        "Robben Island",
        "Cape Peninsula",
      ],
      features: [
        "panoramic mountain views",
        "African-inspired decor",
        "vineyard setting",
        "ocean views",
      ],
      specialties: [
        "bobotie",
        "biltong",
        "Cape Malay curry",
        "Pinotage wine",
        "fresh seafood",
      ],
    },
    charleston: {
      landmarks: [
        "Rainbow Row",
        "Charleston Harbor",
        "The Battery",
        "French Quarter",
      ],
      features: [
        "Southern hospitality",
        "antebellum architecture",
        "courtyard dining",
        "plantation charm",
      ],
      specialties: [
        "shrimp and grits",
        "she-crab soup",
        "oysters",
        "biscuits",
        "sweet tea",
      ],
    },
    copenhagen: {
      landmarks: [
        "Nyhavn",
        "Tivoli Gardens",
        "The Little Mermaid",
        "Christiansborg Palace",
      ],
      features: [
        "hygge atmosphere",
        "Nordic design",
        "waterfront dining",
        "minimalist elegance",
      ],
      specialties: [
        "smørrebrød",
        "Danish pastries",
        "herring",
        "frikadeller",
        "new Nordic cuisine",
      ],
    },
    dubai: {
      landmarks: [
        "Burj Khalifa",
        "Palm Jumeirah",
        "Dubai Marina",
        "Dubai Mall",
      ],
      features: [
        "luxurious setting",
        "skyline views",
        "opulent decor",
        "air-conditioned terraces",
      ],
      specialties: [
        "mezze",
        "shawarma",
        "lamb ouzi",
        "date desserts",
        "camel milk specialties",
      ],
    },
    dublin: {
      landmarks: [
        "Temple Bar",
        "Trinity College",
        "Dublin Castle",
        "St. Stephen's Green",
      ],
      features: [
        "traditional Irish pub atmosphere",
        "live music",
        "historic stone walls",
        "cozy fireplaces",
      ],
      specialties: [
        "Irish stew",
        "boxty",
        "colcannon",
        "soda bread",
        "Guinness",
      ],
    },
    "hong-kong": {
      landmarks: ["Victoria Harbour", "The Peak", "Lan Kwai Fong", "Kowloon"],
      features: [
        "harbor views",
        "rooftop dining",
        "dim sum carts",
        "fusion of East and West",
      ],
      specialties: [
        "dim sum",
        "roast goose",
        "wonton noodles",
        "pineapple buns",
        "milk tea",
      ],
    },
    florence: {
      landmarks: [
        "Duomo",
        "Ponte Vecchio",
        "Uffizi Gallery",
        "Piazza della Signoria",
      ],
      features: [
        "Renaissance architecture",
        "terrace dining",
        "Tuscan countryside views",
        "historic palazzo setting",
      ],
      specialties: [
        "bistecca alla fiorentina",
        "ribollita",
        "pappardelle with wild boar",
        "Chianti wine",
        "cantucci",
      ],
    },
    "fort-lauderdale": {
      landmarks: [
        "Las Olas Boulevard",
        "Fort Lauderdale Beach",
        "Intracoastal Waterway",
        "Riverwalk",
      ],
      features: [
        "waterfront dining",
        "yacht views",
        "tropical ambiance",
        "outdoor patios",
      ],
      specialties: [
        "fresh seafood",
        "stone crab",
        "key lime pie",
        "tropical cocktails",
        "fusion cuisine",
      ],
    },
    galveston: {
      landmarks: [
        "Historic Pleasure Pier",
        "Galveston Seawall",
        "The Strand",
        "Moody Gardens",
      ],
      features: [
        "Gulf views",
        "Victorian architecture",
        "beachfront dining",
        "historic charm",
      ],
      specialties: [
        "Gulf shrimp",
        "oysters",
        "gumbo",
        "pecan pie",
        "fresh-caught fish",
      ],
    },
    kiel: {
      landmarks: [
        "Kiel Fjord",
        "Baltic Sea shore",
        "Kiel Canal",
        "Holstenstraße",
      ],
      features: [
        "maritime atmosphere",
        "harbor views",
        "nautical decor",
        "traditional German beer hall",
      ],
      specialties: [
        "Kieler Sprotte (smoked fish)",
        "Labskaus",
        "Baltic seafood",
        "Schleswig-Holstein beer",
        "marzipan",
      ],
    },
    kyoto: {
      landmarks: [
        "Fushimi Inari Shrine",
        "Arashiyama Bamboo Grove",
        "Kinkaku-ji",
        "Gion District",
      ],
      features: [
        "traditional tatami rooms",
        "zen garden views",
        "ryokan-style dining",
        "historic tea house setting",
      ],
      specialties: [
        "Kaiseki cuisine",
        "yudofu (tofu dishes)",
        "Kyo-wagashi (Kyoto sweets)",
        "matcha",
        "Kyo-tsukemono (pickles)",
      ],
    },
    lisbon: {
      landmarks: [
        "Belém Tower",
        "Alfama District",
        "Jerónimos Monastery",
        "São Jorge Castle",
      ],
      features: [
        "Fado music",
        "azulejo-tiled walls",
        "riverside terraces",
        "traditional taverna atmosphere",
      ],
      specialties: [
        "bacalhau (salt cod)",
        "pastéis de nata",
        "amêijoas à Bulhão Pato (clams)",
        "Port wine",
        "ginjinha",
      ],
    },
    "los-angeles": {
      landmarks: [
        "Hollywood Sign",
        "Venice Beach",
        "Griffith Observatory",
        "Santa Monica Pier",
      ],
      features: [
        "celebrity sightings",
        "palm-lined patios",
        "sunset views",
        "indoor-outdoor spaces",
      ],
      specialties: [
        "California fusion",
        "fish tacos",
        "avocado toast",
        "gourmet burgers",
        "craft cocktails",
      ],
    },
    melbourne: {
      landmarks: [
        "Federation Square",
        "Royal Botanic Gardens",
        "Queen Victoria Market",
        "Yarra River",
      ],
      features: [
        "laneway dining",
        "street art backdrops",
        "hidden speakeasy atmosphere",
        "multicultural influences",
      ],
      specialties: [
        "coffee culture",
        "Melbourne brunch",
        "lamb dishes",
        "artisanal pastries",
        "Victoria wine",
      ],
    },
    miami: {
      landmarks: [
        "South Beach",
        "Art Deco District",
        "Wynwood Walls",
        "Biscayne Bay",
      ],
      features: [
        "oceanfront dining",
        "neon lighting",
        "Latin influence",
        "tropical outdoor spaces",
      ],
      specialties: [
        "stone crabs",
        "Cuban sandwiches",
        "ceviche",
        "key lime pie",
        "mojitos",
      ],
    },
    milan: {
      landmarks: [
        "Duomo di Milano",
        "Galleria Vittorio Emanuele II",
        "La Scala",
        "Navigli canals",
      ],
      features: [
        "fashion-forward design",
        "elegant interiors",
        "courtyard dining",
        "aperitivo culture",
      ],
      specialties: [
        "risotto alla Milanese",
        "osso buco",
        "panettone",
        "cotoletta alla Milanese",
        "Negroni cocktails",
      ],
    },
    montreal: {
      landmarks: [
        "Old Montreal",
        "Mont Royal",
        "Notre-Dame Basilica",
        "St. Lawrence River",
      ],
      features: [
        "European charm",
        "stone architecture",
        "bilingual ambiance",
        "seasonal terrasses",
      ],
      specialties: [
        "poutine",
        "Montreal bagels",
        "smoked meat",
        "maple desserts",
        "tourtière",
      ],
    },
    "new-orleans": {
      landmarks: [
        "French Quarter",
        "Bourbon Street",
        "Garden District",
        "Jackson Square",
      ],
      features: [
        "jazz music",
        "courtyard dining",
        "wrought-iron balconies",
        "Creole architecture",
      ],
      specialties: [
        "gumbo",
        "jambalaya",
        "beignets",
        "po' boys",
        "crawfish étouffée",
      ],
    },
    "new-york-city": {
      landmarks: [
        "Empire State Building",
        "Statue of Liberty",
        "Central Park",
        "Times Square",
      ],
      features: [
        "skyline views",
        "24/7 dining",
        "rooftop bars",
        "Broadway proximity",
      ],
      specialties: [
        "New York-style pizza",
        "bagels",
        "cheesecake",
        "hot dogs",
        "pasta primavera",
      ],
    },
    paris: {
      landmarks: [
        "Eiffel Tower",
        "Louvre Museum",
        "Notre-Dame Cathedral",
        "Champs-Élysées",
      ],
      features: [
        "romantic ambiance",
        "sidewalk cafes",
        "artistic heritage",
        "historic architecture",
      ],
      specialties: [
        "croissants",
        "coq au vin",
        "ratatouille",
        "tarte tatin",
        "escargot",
      ],
    },
    "quebec-city": {
      landmarks: [
        "Old Quebec",
        "Château Frontenac",
        "Montmorency Falls",
        "Plains of Abraham",
      ],
      features: [
        "cobblestone streets",
        "European flair",
        "historic fortifications",
        "river views",
      ],
      specialties: [
        "poutine",
        "tourtière",
        "maple syrup",
        "cretons",
        "tire d'érable",
      ],
    },
    "rio-de-janeiro": {
      landmarks: [
        "Christ the Redeemer",
        "Copacabana Beach",
        "Sugarloaf Mountain",
        "Ipanema",
      ],
      features: [
        "beachfront dining",
        "samba music",
        "tropical atmosphere",
        "panoramic mountain-ocean views",
      ],
      specialties: [
        "feijoada",
        "churrasco",
        "pão de queijo",
        "caipirinha",
        "açaí bowls",
      ],
    },
    rome: {
      landmarks: ["Colosseum", "Roman Forum", "Vatican", "Trevi Fountain"],
      features: [
        "al fresco dining",
        "historic ambiance",
        "cobblestone streets",
        "traditional trattoria setting",
      ],
      specialties: [
        "pasta carbonara",
        "cacio e pepe",
        "supplì",
        "Roman-style pizza",
        "artichokes",
      ],
    },
    "san-francisco": {
      landmarks: [
        "Golden Gate Bridge",
        "Fisherman's Wharf",
        "Alcatraz",
        "Painted Ladies",
      ],
      features: [
        "bay views",
        "fog-wrapped patios",
        "historic Victorian setting",
        "farm-to-table approach",
      ],
      specialties: [
        "sourdough bread",
        "cioppino",
        "Dungeness crab",
        "Mission-style burritos",
        "California wine",
      ],
    },
    "san-juan": {
      landmarks: ["El Morro", "Old San Juan", "Condado Beach", "La Fortaleza"],
      features: [
        "colonial Spanish architecture",
        "cobblestone streets",
        "ocean breezes",
        "colorful buildings",
      ],
      specialties: [
        "mofongo",
        "lechón",
        "arroz con gandules",
        "piña coladas",
        "tostones",
      ],
    },
    seattle: {
      landmarks: [
        "Space Needle",
        "Pike Place Market",
        "Puget Sound",
        "Mount Rainier views",
      ],
      features: [
        "waterfront dining",
        "coffee house culture",
        "Pacific Northwest design",
        "rainy day coziness",
      ],
      specialties: [
        "Pacific salmon",
        "Dungeness crab",
        "artisanal coffee",
        "Washington apples",
        "craft beer",
      ],
    },
    singapore: {
      landmarks: [
        "Marina Bay Sands",
        "Gardens by the Bay",
        "Merlion Park",
        "Orchard Road",
      ],
      features: [
        "hawker center style",
        "colonial architecture",
        "cutting-edge design",
        "multicultural atmosphere",
      ],
      specialties: [
        "chili crab",
        "Hainanese chicken rice",
        "laksa",
        "satay",
        "kaya toast",
      ],
    },
    southampton: {
      landmarks: [
        "Southampton Water",
        "Bargate",
        "SeaCity Museum",
        "Mayflower Park",
      ],
      features: [
        "maritime history",
        "harbor views",
        "British pub atmosphere",
        "historic dockyards",
      ],
      specialties: [
        "fish and chips",
        "Sunday roast",
        "Hampshire cheeses",
        "cream tea",
        "local ales",
      ],
    },
    sydney: {
      landmarks: [
        "Sydney Opera House",
        "Harbour Bridge",
        "Bondi Beach",
        "Darling Harbour",
      ],
      features: [
        "harbor views",
        "alfresco dining",
        "beachside terraces",
        "cosmopolitan atmosphere",
      ],
      specialties: [
        "Sydney rock oysters",
        "barramundi",
        "meat pies",
        "Tim Tams",
        "flat white coffee",
      ],
    },
    tampa: {
      landmarks: [
        "Tampa Riverwalk",
        "Ybor City",
        "Bayshore Boulevard",
        "Busch Gardens",
      ],
      features: [
        "Cuban influence",
        "waterfront views",
        "historic cigar factory settings",
        "tropical gardens",
      ],
      specialties: [
        "Cuban sandwiches",
        "deviled crab",
        "grouper",
        "key lime pie",
        "craft beer",
      ],
    },
    toronto: {
      landmarks: [
        "CN Tower",
        "Lake Ontario",
        "Distillery District",
        "Royal Ontario Museum",
      ],
      features: [
        "multicultural ambiance",
        "lake views",
        "modern design",
        "historic victorian buildings",
      ],
      specialties: [
        "Toronto peameal bacon sandwich",
        "butter tarts",
        "multiculturally diverse cuisine",
        "Ontario wines",
        "craft beer",
      ],
    },
    vancouver: {
      landmarks: [
        "Stanley Park",
        "English Bay",
        "Granville Island",
        "Grouse Mountain",
      ],
      features: [
        "Pacific Ocean views",
        "mountain backdrop",
        "West Coast design",
        "nature-inspired elements",
      ],
      specialties: [
        "Pacific salmon",
        "spot prawns",
        "BC wine",
        "Nanaimo bars",
        "JapaDog fusion cuisine",
      ],
    },
    venice: {
      landmarks: [
        "Grand Canal",
        "St. Mark's Square",
        "Rialto Bridge",
        "Venetian lagoon",
      ],
      features: [
        "canal-side tables",
        "gondola views",
        "historic palazzo setting",
        "Venetian glass accents",
      ],
      specialties: [
        "seafood risotto",
        "cicchetti",
        "squid ink pasta",
        "tiramisu",
        "Bellini cocktails",
      ],
    },
    yokohama: {
      landmarks: [
        "Yokohama Bay",
        "Minato Mirai",
        "Chinatown",
        "Yamashita Park",
      ],
      features: [
        "harbor views",
        "historic port elements",
        "fusion of Japanese and Western aesthetics",
        "modern design",
      ],
      specialties: [
        "Yokohama ramen",
        "Japanese-Chinese fusion dishes",
        "seafood",
        "craft beer",
        "Yokohama curry",
      ],
    },
  };

  const defaultCityDesc = {
    landmarks: [
      "downtown",
      "the waterfront",
      "the historic district",
      "the main square",
    ],
    features: [
      "elegant atmosphere",
      "beautiful decor",
      "friendly service",
      "local ambiance",
    ],
    specialties: [
      "signature dishes",
      "local ingredients",
      "fresh produce",
      "artisanal creations",
    ],
  };

  // Get city-specific description or use default
  const cityDesc = cityDescriptions[cityName] || defaultCityDesc;

  // Function to generate varied descriptions based on city and cuisine
  const generateDescription = (cuisine, city) => {
    const landmark =
      cityDesc.landmarks[Math.floor(Math.random() * cityDesc.landmarks.length)];
    const feature =
      cityDesc.features[Math.floor(Math.random() * cityDesc.features.length)];
    const specialty =
      cityDesc.specialties[
        Math.floor(Math.random() * cityDesc.specialties.length)
      ];

    const templates = [
      `A charming ${cuisine} restaurant near ${landmark}, offering ${specialty} and other local favorites in a setting with ${feature}.`,
      `Experience authentic ${cuisine} cuisine with a local twist, featuring ${specialty} served in an atmosphere of ${feature} overlooking ${landmark}.`,
      `This popular ${cuisine} establishment combines traditional recipes and ${specialty}, all served in a unique setting with ${feature}.`,
      `Located close to ${landmark}, this ${cuisine} restaurant delights with its ${specialty} and ${feature}.`,
      `A culinary gem serving ${cuisine} specialties including ${specialty}, where guests enjoy ${feature} in the heart of the city.`,
    ];

    return templates[Math.floor(Math.random() * templates.length)];
  };

  // Generate restaurants for this city
  for (let i = 0; i < count; i++) {
    const cuisine = getRandomCuisine();

    restaurants.push({
      name: getRandomName(),
      description: generateDescription(cuisine, cityName),
      cuisine,
      priceRange: getRandomPrice(),
      rating: parseFloat(getRandomRating()),
      openingHours: getRandomHours(),
      contactInfo: {
        contactNumber: `+1-555-${Math.floor(Math.random() * 900) + 100}-${
          Math.floor(Math.random() * 9000) + 1000
        }`,
        contactEmail: `info@${cuisine
          .toLowerCase()
          .replace(/ /g, "")}${cityName}.com`,
      },
      isVegetarianFriendly: getRandomBool(0.7),
      isVeganFriendly: getRandomBool(0.5),
      isGlutenFreeFriendly: getRandomBool(0.4),
      isHalalFriendly: getRandomBool(0.3),
      isKosherFriendly: getRandomBool(0.2),
      isFineDining: getRandomBool(0.3),
      isAdultOnly: getRandomBool(0.1),
      isIndoorSeating: getRandomBool(0.9),
      isReservationsAccepted: getRandomBool(0.8),
      isRomantic: getRandomBool(0.4),
      isPopular: getRandomBool(0.6),
    });
  }

  return restaurants;
};

// Function to remove duplicates from arrays
const removeDuplicates = (array) => {
  return [...new Set(array)];
};

// Main execution
const cityFiles = getCityFiles();
console.log(`Found ${cityFiles.length} cities to process`);

// Process each city
for (const city of cityFiles) {
  generateRestaurantsForCity(city);
}

// Add summary at the end
console.log("\n=== Script Complete ===");
console.log(`Processed ${cityFiles.length} cities`);
console.log(`Mode: ${APPEND_MODE ? "Append" : "Replace"}`);
console.log(`Restaurants per city: ${RESTAURANT_COUNT}`);
console.log("Restaurant data generation completed for all cities");
console.log(`Debug mode: ${DEBUG_MODE ? "On" : "Off"}`);
