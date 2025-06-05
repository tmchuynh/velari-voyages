import { formatTitleToCamelCase } from "@/lib/utils/format.ts";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Basic usage (only creates new restaurant data files, skips existing):
// node scripts/create-restaurant-data.mjs

// Append mode (adds new restaurants to existing files):
// node scripts/create-restaurant-data.mjs --append
// node scripts/create-restaurant-data.mjs -a

// Rewrite mode (overwrites existing restaurant files):
// node scripts/create-restaurant-data.mjs --rewrite
// node scripts/create-restaurant-data.mjs -r

// Specify number of restaurants to generate:
// node scripts/create-restaurant-data.mjs --count=10

// Specify number of restaurants to append:
// node scripts/create-restaurant-data.mjs --append --append-count=3
// node scripts/create-restaurant-data.mjs -a -ac=3

// Combine options:
// node scripts/create-restaurant-data.mjs --rewrite --count=15

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const APPEND_MODE = args.includes("--append") || args.includes("-a");
const REWRITE_MODE = args.includes("--rewrite") || args.includes("-r");
const RESTAURANT_COUNT = parseInt(
  args.find((arg) => arg.startsWith("--count="))?.split("=")[1] || "5",
  10
);
const APPEND_COUNT = parseInt(
  args.find((arg) => arg.startsWith("--append-count="))?.split("=")[1] ||
    args.find((arg) => arg.startsWith("-ac="))?.split("=")[1] ||
    RESTAURANT_COUNT.toString(),
  10
);
const DEBUG_MODE = args.includes("--debug") || args.includes("-d");

console.log(
  `Mode: ${
    APPEND_MODE ? "Append" : REWRITE_MODE ? "Rewrite" : "Create new only"
  }`
);
console.log(
  `${APPEND_MODE ? "Appending" : "Generating"} ${
    APPEND_MODE ? APPEND_COUNT : RESTAURANT_COUNT
  } restaurants per city`
);
console.log(
  `Will ${
    REWRITE_MODE
      ? "overwrite"
      : APPEND_MODE
      ? "append to"
      : "only create missing"
  } restaurant files`
);

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

  // Check if file exists and determine action based on flags
  if (fs.existsSync(filePath)) {
    if (!APPEND_MODE && !REWRITE_MODE) {
      console.log(
        `Skipping ${cityName} - restaurant file already exists. Use --append or --rewrite to modify.`
      );
      return;
    }
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

  // Generate new restaurants data for the city - use APPEND_COUNT in append mode
  const newRestaurants = generateRandomRestaurants(cityName, APPEND_COUNT);

  // Combine existing and new restaurants in append mode
  const restaurants = [...existingRestaurants, ...newRestaurants];

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

  // Helper function to write restaurant data to file
  const writeRestaurantFile = (
    filePath,
    camelCaseCityName,
    restaurants,
    existingCount,
    newCount
  ) => {
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

    if (existingCount > 0) {
      console.log(
        `Updated restaurant data for ${camelCaseCityName}: ${existingCount} existing + ${newCount} new = ${restaurants.length} total`
      );
    } else if (REWRITE_MODE) {
      console.log(
        `Rewrote restaurant data for ${camelCaseCityName}: ${restaurants.length} restaurants`
      );
    } else {
      console.log(
        `Created new restaurant data for ${camelCaseCityName}: ${restaurants.length} restaurants`
      );
    }
  };

  if (APPEND_MODE && existingRestaurants.length > 0) {
    // Generate and write the file content
    writeRestaurantFile(
      filePath,
      camelCaseCityName,
      restaurants,
      existingRestaurants.length,
      newRestaurants.length
    );
  } else {
    // Generate new restaurants with default count (either new file or rewrite mode)
    const restaurants = generateRandomRestaurants(cityName, RESTAURANT_COUNT);
    writeRestaurantFile(
      filePath,
      camelCaseCityName,
      restaurants,
      0,
      restaurants.length
    );
  }
};

// Function to generate random restaurant data for a city
const generateRandomRestaurants = (cityName, count) => {
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
    auckland: [
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
      "Pohutukawa",
      "Wairarapa",
      "Taupo",
      "Manuka",
      "Kauri",
      "Kea",
      "Hobbiton",
      "Pounamu",
      "Fiordland",
      "Whangarei",
      "Waikato",
    ],
    amsterdam: [
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
      "Herengracht",
      "Delft",
      "Stroopwafel",
      "Prinsengracht",
      "Polder",
      "Jordaan",
      "Heineken",
      "Leidseplein",
      "Vondelpark",
      "Amstel",
      "Houseboat",
      "Orange",
    ],
    barcelona: [
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
    ],
    berlin: [
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
    ],
    boston: [
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
    ],
    "buenos-aires": [
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
    ],
    "cape-town": [
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
    ],
    charleston: [
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
    ],
    copenhagen: [
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
    ],
    dubai: [
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
    ],
    dublin: [
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
    ],
    florence: [
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
    ],
    "fort-lauderdale": [
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
    ],
    galveston: [
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
    ],
    "hong-kong": [
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
    ],
    kiel: [
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
    ],
    kyoto: [
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
    ],
    lisbon: [
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
    ],
    london: [
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
      "Notting Hill",
      "Covent Garden",
      "Savoy",
      "Shoreditch",
      "Greenwich",
      "Hackney",
      "Mayfair",
      "Chelsea",
      "Marylebone",
      "Buckingham",
      "British Museum",
      "Abbey Road",
      "Hyde Park",
    ],
    "los-angeles": [
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
      "Silver Lake",
      "Echo Park",
      "Downtown",
      "Pasadena",
      "Brentwood",
      "Studio",
      "Angels",
      "Dodgers",
      "Westside",
      "Melrose",
      "Wilshire",
      "Mulholland",
      "Arts District",
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

  const defaultPrefix = ["The", "Royal", "Blue", "Golden", "Grand"];
  const cityPrefix = namePrefix[cityName] || defaultPrefix;

  // Generic restaurant name suffixes
  const nameSuffix = [
    // Classic suffixes
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

    // International cuisine suffixes
    "Izakaya",
    "Biergarten",
    "Bodega",
    "Taqueria",
    "Ramen-Ya",
    "Curry House",
    "Sushi Bar",
    "Enoteca",
    "Tapas Bar",
    "Brasserie",
    "Pho House",
    "Dim Sum Palace",
    "Tiki Lounge",
    "Cerveceria",
    "Wok",
    "Kebab House",
    "Noodle Bar",
    "Cevicheria",

    // Specialized & artisanal suffixes
    "Creperie",
    "Chocolatier",
    "Gelateria",
    "Raw Bar",
    "Wine Bar",
    "Tea House",
    "Juice Bar",
    "Salumeria",
    "Seafood Shack",
    "Patisserie",
    "Boulangerie",
    "Rotisserie",
    "Smokehouse",
    "Creamery",
    "Oyster Bar",
    "Charcuterie",

    // Contemporary & trendy suffixes
    "Social",
    "Local",
    "Collective",
    "Project",
    "Provisions",
    "Public House",
    "Workshop",
    "Marketplace",
    "Trading Co.",
    "Commissary",
    "Revival",
    "& Co.",
    "Artisan",
    "Craft",
    "& Sons",
    "Lab",
    "Society",
    "Experience",
    "Farm Table",
    "Harvest",
    "Cookhouse",
    "Eatery + Bar",
    "Fare",
    "Gathering",

    // Luxury & specialty suffixes
    "Fine Dining",
    "Gourmet",
    "Grand Cafe",
    "Chateau",
    "Epicurean",
    "Bouchon",
    "Culinary",
    "Atelier",
    "Maison",
    "Estate",
    "Mansion",
    "Parlor",
    "Club",
    "Gallery",
    "Pavilion",
    "Rooftop",
    "Hideaway",
    "Sanctuary",
    "Emporium",
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
        "Auckland Domain",
        "Mount Eden",
        "Viaduct Harbour",
        "Waiheke Island",
      ],
      features: [
        "harbor views",
        "Pacific-inspired decor",
        "Kiwi hospitality",
        "locally-sourced seafood",
        "Maori cultural influences",
        "outdoor dining",
        "lush native greenery",
        "laid-back coastal vibe",
      ],
      specialties: [
        "green-lipped mussels",
        "lamb dishes",
        "pavlova",
        "hangi",
        "manuka honey",
        "whitebait fritters",
        "Kina (sea urchin)",
        "seafood chowder",
      ],
    },
    amsterdam: {
      landmarks: [
        "the canals",
        "Vondelpark",
        "Jordaan district",
        "Dam Square",
        "Anne Frank House",
        "Rijksmuseum",
        "Royal Palace",
        "Amsterdam Central Station",
      ],
      features: [
        "canal-side dining",
        "17th century building",
        "cozy brown café atmosphere",
        "Dutch design elements",
        "bike-friendly streets",
        "artisanal markets",
        "historic courtyards",
        "colorful tulip displays",
      ],
      specialties: [
        "stroopwafels",
        "bitterballen",
        "Dutch pancakes",
        "herring",
        "Gouda cheese",
        "poffertjes",
        "licorice",
        "kibbeling (fried fish)",
      ],
    },
    barcelona: {
      landmarks: [
        "La Rambla",
        "Sagrada Familia",
        "Gothic Quarter",
        "Barceloneta Beach",
        "Park Güell",
        "Casa Batlló",
        "Montjuïc",
        "Magic Fountain",
      ],
      features: [
        "Gaudi-inspired decor",
        "Catalonian charm",
        "mosaic details",
        "Mediterranean terrace",
        "vibrant street art",
        "seaside promenades",
        "historic plazas",
        "open-air markets",
      ],
      specialties: [
        "paella",
        "tapas",
        "jamón ibérico",
        "pan con tomate",
        "crema catalana",
        "escalivada",
        "bombas",
        "cava",
      ],
    },
    berlin: {
      landmarks: [
        "Brandenburg Gate",
        "Museum Island",
        "Tiergarten",
        "East Side Gallery",
        "Berlin Wall Memorial",
        "Checkpoint Charlie",
        "Reichstag Building",
        "Alexanderplatz",
      ],
      features: [
        "industrial chic decor",
        "beer garden",
        "historic building",
        "avant-garde atmosphere",
        "street art culture",
        "modernist architecture",
        "techno club scene",
        "green parks",
      ],
      specialties: [
        "currywurst",
        "döner kebab",
        "schnitzel",
        "pretzels",
        "German beer",
        "Kartoffelsalat",
        "Berliner Pfannkuchen",
        "Eisbein",
      ],
    },
    boston: {
      landmarks: [
        "Faneuil Hall",
        "Boston Harbor",
        "Beacon Hill",
        "Fenway Park",
        "Boston Common",
        "Freedom Trail",
        "New England Aquarium",
        "Harvard University",
      ],
      features: [
        "historic setting",
        "New England charm",
        "waterfront views",
        "colonial architecture",
        "brick-lined streets",
        "seafood shacks",
        "old-world pubs",
        "academic ambiance",
      ],
      specialties: [
        "clam chowder",
        "lobster rolls",
        "Boston cream pie",
        "oysters",
        "baked beans",
        "scrod",
        "stuffed quahogs",
        "cranberry desserts",
      ],
    },
    "buenos-aires": {
      landmarks: [
        "La Boca",
        "Recoleta",
        "Plaza de Mayo",
        "Puerto Madero",
        "Teatro Colón",
        "Palermo Soho",
        "San Telmo Market",
        "Caminito Street",
      ],
      features: [
        "tango shows",
        "parilla-style grill",
        "European elegance",
        "vibrant atmosphere",
        "historic cafés",
        "art nouveau architecture",
        "street murals",
        "nightlife hotspots",
      ],
      specialties: [
        "asado",
        "empanadas",
        "dulce de leche",
        "Malbec wine",
        "mate",
        "choripán",
        "medialunas",
        "provoleta",
      ],
    },
    "cape-town": {
      landmarks: [
        "Table Mountain",
        "V&A Waterfront",
        "Robben Island",
        "Cape Peninsula",
        "Kirstenbosch Botanical Gardens",
        "Bo-Kaap",
        "Signal Hill",
        "Cape Winelands",
      ],
      features: [
        "panoramic mountain views",
        "African-inspired decor",
        "vineyard setting",
        "ocean views",
        "multicultural influences",
        "beachfront cafes",
        "artisan markets",
        "historic slave lodge",
      ],
      specialties: [
        "bobotie",
        "biltong",
        "Cape Malay curry",
        "Pinotage wine",
        "fresh seafood",
        "snoek fish",
        "malva pudding",
        "roosterkoek",
      ],
    },
    charleston: {
      landmarks: [
        "Rainbow Row",
        "Charleston Harbor",
        "The Battery",
        "French Quarter",
        "Fort Sumter",
        "Magnolia Plantation",
        "King Street",
        "Angel Oak Tree",
      ],
      features: [
        "Southern hospitality",
        "antebellum architecture",
        "courtyard dining",
        "plantation charm",
        "historic cobblestone streets",
        "oak-lined avenues",
        "waterfront promenades",
        "garden tours",
      ],
      specialties: [
        "shrimp and grits",
        "she-crab soup",
        "oysters",
        "biscuits",
        "sweet tea",
        "frogmore stew",
        "pecan pie",
        "Lowcountry boil",
      ],
    },
    copenhagen: {
      landmarks: [
        "Nyhavn",
        "Tivoli Gardens",
        "The Little Mermaid",
        "Christiansborg Palace",
        "Rosenborg Castle",
        "Frederiksborg Castle",
        "Amalienborg Palace",
        "Strøget",
      ],
      features: [
        "hygge atmosphere",
        "Nordic design",
        "waterfront dining",
        "minimalist elegance",
        "eco-friendly spaces",
        "bicycle culture",
        "artisan bakeries",
        "seasonal menus",
      ],
      specialties: [
        "smørrebrød",
        "Danish pastries",
        "herring",
        "frikadeller",
        "new Nordic cuisine",
        "rødgrød med fløde",
        "Æbleskiver",
        "flæskesteg",
      ],
    },
    dubai: {
      landmarks: [
        "Burj Khalifa",
        "Palm Jumeirah",
        "Dubai Marina",
        "Dubai Mall",
        "Burj Al Arab",
        "Dubai Creek",
        "Dubai Frame",
        "Al Fahidi Historic District",
      ],
      features: [
        "luxurious setting",
        "skyline views",
        "opulent decor",
        "air-conditioned terraces",
        "desert backdrop",
        "high-end shopping",
        "fusion cuisines",
        "modern architecture",
      ],
      specialties: [
        "mezze",
        "shawarma",
        "lamb ouzi",
        "date desserts",
        "camel milk specialties",
        "falafel",
        "kebabs",
        "saffron rice",
      ],
    },
    dublin: {
      landmarks: [
        "Temple Bar",
        "Trinity College",
        "Dublin Castle",
        "St. Stephen's Green",
        "Guinness Storehouse",
        "Phoenix Park",
        "Christ Church Cathedral",
        "Ha'penny Bridge",
      ],
      features: [
        "traditional Irish pub atmosphere",
        "live music",
        "historic stone walls",
        "cozy fireplaces",
        "literary heritage",
        "cobblestone alleys",
        "pub quizzes",
        "green parks",
      ],
      specialties: [
        "Irish stew",
        "boxty",
        "colcannon",
        "soda bread",
        "Guinness",
        "black pudding",
        "seafood chowder",
        "coddle",
      ],
    },
    "hong-kong": {
      landmarks: [
        "Victoria Harbour",
        "The Peak",
        "Lan Kwai Fong",
        "Kowloon",
        "Tian Tan Buddha",
        "Ngong Ping 360",
        "Star Ferry",
        "Temple Street Night Market",
      ],
      features: [
        "harbor views",
        "rooftop dining",
        "dim sum carts",
        "fusion of East and West",
        "neon-lit streets",
        "bustling markets",
        "skyscraper skyline",
        "urban parks",
      ],
      specialties: [
        "dim sum",
        "roast goose",
        "wonton noodles",
        "pineapple buns",
        "milk tea",
        "egg tarts",
        "congee",
        "snake soup",
      ],
    },
    florence: {
      landmarks: [
        "Duomo",
        "Ponte Vecchio",
        "Uffizi Gallery",
        "Piazza della Signoria",
        "Boboli Gardens",
        "Santa Croce",
        "Palazzo Pitti",
        "Michelangelo's David",
      ],
      features: [
        "Renaissance architecture",
        "terrace dining",
        "Tuscan countryside views",
        "historic palazzo setting",
        "artisan workshops",
        "cobblestone streets",
        "river views",
        "open-air markets",
      ],
      specialties: [
        "bistecca alla fiorentina",
        "ribollita",
        "pappardelle with wild boar",
        "Chianti wine",
        "cantucci",
        "truffle dishes",
        "lampredotto",
        "crostini",
      ],
    },
    "fort-lauderdale": {
      landmarks: [
        "Las Olas Boulevard",
        "Fort Lauderdale Beach",
        "Intracoastal Waterway",
        "Riverwalk",
        "Bonnet House Museum",
        "NSU Art Museum",
        "Hollywood Beach",
        "Everglades National Park",
      ],
      features: [
        "waterfront dining",
        "yacht views",
        "tropical ambiance",
        "outdoor patios",
        "boating culture",
        "vibrant nightlife",
        "palm-lined streets",
        "art deco elements",
      ],
      specialties: [
        "fresh seafood",
        "stone crab",
        "key lime pie",
        "tropical cocktails",
        "fusion cuisine",
        "conch fritters",
        "grouper sandwiches",
        "caribbean jerk",
      ],
    },
    galveston: {
      landmarks: [
        "Historic Pleasure Pier",
        "Galveston Seawall",
        "Moody Gardens",
        "Bishop's Palace",
        "The Strand Historic District",
        "Galveston Island State Park",
        "Schlitterbahn Waterpark",
        "Ocean Star Offshore Drilling Rig Museum",
      ],
      features: [
        "beach town vibe",
        "Victorian architecture",
        "boardwalk dining",
        "sea breeze",
        "family-friendly",
        "fishing piers",
        "maritime heritage",
        "colorful cottages",
      ],
      specialties: [
        "Gulf shrimp",
        "blackened fish",
        "shrimp gumbo",
        "pecan pie",
        "fried oysters",
        "red snapper",
        "cajun spices",
        "peach cobbler",
      ],
    },
    honolulu: {
      landmarks: [
        "Waikiki Beach",
        "Diamond Head",
        "Pearl Harbor",
        "Iolani Palace",
        "Hanauma Bay",
        "Punchbowl Crater",
        "Kahala",
        "Ala Moana Center",
      ],
      features: [
        "tropical gardens",
        "oceanfront views",
        "Polynesian decor",
        "surf culture",
        "luau events",
        "volcanic landscapes",
        "beachside cafes",
        "rainforest backdrop",
      ],
      specialties: [
        "poke",
        "kalua pork",
        "haupia",
        "shave ice",
        "spam musubi",
        "loco moco",
        "malasadas",
        "fresh coconut",
      ],
    },
  };

  const defaultCityDesc = {
    landmarks: [
      "downtown",
      "the waterfront",
      "the historic district",
      "the main square",
      "central park",
      "the city museum",
      "the old town walls",
      "the cultural center",
      "the river promenade",
      "the iconic clock tower",
    ],
    features: [
      "elegant atmosphere",
      "beautiful decor",
      "friendly service",
      "local ambiance",
      "charming streetscapes",
      "seasonal floral displays",
      "artisan markets",
      "live street performances",
      "ambient lighting",
      "boutique shops",
    ],
    specialties: [
      "signature dishes",
      "local ingredients",
      "fresh produce",
      "artisanal creations",
      "handcrafted desserts",
      "regional wines",
      "farm-to-table meals",
      "seasonal specialties",
      "heritage recipes",
      "gourmet street food",
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
        contactEmail: `info@${formatTitleToCamelCase(getRandomName())
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
console.log(
  `Mode: ${
    APPEND_MODE ? "Append" : REWRITE_MODE ? "Rewrite" : "Create new only"
  }`
);
console.log(
  `${APPEND_MODE ? "Appended" : "Generated"} ${
    APPEND_MODE ? APPEND_COUNT : RESTAURANT_COUNT
  } restaurants per city`
);
console.log("Restaurant data generation completed for all cities");
console.log(`Debug mode: ${DEBUG_MODE ? "On" : "Off"}`);
