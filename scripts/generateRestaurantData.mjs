import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  // Generate restaurants data for the city
  const restaurants = generateRandomRestaurants(cityName);

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
  console.log(`Generated restaurant data for ${cityName}`);
};

// Function to generate random restaurant data for a city
const generateRandomRestaurants = (cityName) => {
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
    auckland: ["Harbour", "Kiwi", "Pacific", "Auckland", "Wellington"],
    amsterdam: ["Canal", "Dutch", "Amsterdam", "Tulip", "Windmill"],
    barcelona: ["Barcelona", "Catalonia", "Gaudi", "Rambla", "Picasso"],
    berlin: ["Berlin", "Brandenburg", "Rhine", "Bavarian", "Deutsche"],
    boston: ["Boston", "Harbor", "Colonial", "Atlantic", "Freedom"],
    buenosAires: ["Buenos Aires", "Tango", "Gaucho", "Pampas", "Evita"],
    "cape-town": ["Cape", "Safari", "Table Mountain", "Vineyard", "Atlantic"],
    charleston: ["Charleston", "Palmetto", "Southern", "Magnolia", "Coastal"],
    dubai: ["Dubai", "Gold", "Desert", "Emirates", "Palm"],
    "hong-kong": ["Hong Kong", "Victoria", "Pearl", "Dynasty", "Harbor"],
    tokyo: ["Tokyo", "Sakura", "Fuji", "Imperial", "Ginza"],
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
  ];

  // Generate 5-8 restaurants for each city
  const numRestaurants = Math.floor(Math.random() * 4) + 5;
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
    london: {
      landmarks: [
        "Big Ben",
        "The Thames",
        "Buckingham Palace",
        "Covent Garden",
      ],
      features: [
        "traditional pub setting",
        "afternoon tea service",
        "British elegance",
        "historic atmosphere",
      ],
      specialties: [
        "fish and chips",
        "Sunday roast",
        "bangers and mash",
        "sticky toffee pudding",
        "meat pies",
      ],
    },
    "new-york-city": {
      landmarks: [
        "Central Park",
        "Times Square",
        "Brooklyn Bridge",
        "Empire State Building",
      ],
      features: [
        "Art Deco design",
        "skyline views",
        "fast-paced atmosphere",
        "melting pot of cultures",
      ],
      specialties: [
        "New York pizza",
        "bagels",
        "cheesecake",
        "pastrami sandwiches",
        "hot dogs",
      ],
    },
    paris: {
      landmarks: [
        "Eiffel Tower",
        "Seine River",
        "Montmartre",
        "Champs-Élysées",
      ],
      features: [
        "romantic lighting",
        "classic bistro setting",
        "Parisian terrace",
        "elegant decor",
      ],
      specialties: [
        "coq au vin",
        "escargot",
        "croissants",
        "macarons",
        "crème brûlée",
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
    tokyo: {
      landmarks: [
        "Tokyo Tower",
        "Shibuya Crossing",
        "Senso-ji Temple",
        "Imperial Palace",
      ],
      features: [
        "minimalist design",
        "precision service",
        "tatami rooms",
        "high-tech elements",
      ],
      specialties: [
        "sushi",
        "ramen",
        "tempura",
        "wagyu beef",
        "matcha desserts",
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
  };

  // Default description elements for cities not specifically defined
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
  for (let i = 0; i < numRestaurants; i++) {
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

// Main execution
const cityFiles = getCityFiles();
console.log(`Found ${cityFiles.length} cities to process`);

// Process each city
for (const city of cityFiles) {
  generateRestaurantsForCity(city);
}

console.log("Restaurant data generation completed for all cities");
