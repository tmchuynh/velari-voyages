import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


// node create-city-cruise-files.mjs - Default behavior, adds 10 cruises per city
// node create-city-cruise-files.mjs --append 5 - Adds 5 cruises to each city file
// node create-city-cruise-files.mjs --rewrite - Rewrites all files with 10 cruises each
// node create-city-cruise-files.mjs --rewrite --append 15 - Rewrites all files with 15 cruises each
// node create-city-cruise-files.mjs --help - Shows help information

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command-line arguments
const args = process.argv.slice(2);
const CRUISES_PER_CITY = 10; // Default value
let cruisesToAppend = CRUISES_PER_CITY;
let forceRewrite = false;

// Process command-line arguments
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--append" || args[i] === "-a") {
    const value = parseInt(args[i + 1]);
    if (!isNaN(value) && value > 0) {
      cruisesToAppend = value;
      i++; // Skip the next argument (the number)
    }
  } else if (args[i] === "--rewrite" || args[i] === "-r") {
    forceRewrite = true;
  } else if (args[i] === "--help" || args[i] === "-h") {
    console.log(`
Usage: node create-city-cruise-files.mjs [options]

Options:
  --append, -a NUMBER  Append NUMBER of cruises to existing files
  --rewrite, -r        Rewrite all files, discarding existing cruises
  --help, -h           Display this help message
    `);
    process.exit(0);
  }
}

console.log(`Running with options:
- ${forceRewrite ? "Rewriting all files" : "Preserving existing files"}
- ${forceRewrite ? "Creating" : "Appending"} ${cruisesToAppend} cruises ${forceRewrite ? "per city" : "to each file"}
`);

// Function to convert kebab case to camelCase
function kebabToCamelCase(str) {
  return str
    .split("-")
    .map((part, index) =>
      index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join("");
}

// Function to capitalize first letter of each word
function capitalizeWords(str) {
  return str.replace(/-/g, " ").replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

// Import cruise categories - read from file
function getCruiseCategories() {
  try {
    const categoriesPath = path.join(
      __dirname,
      "..",
      "src",
      "lib",
      "constants",
      "info",
      "cruiseCategories.ts"
    );

    const content = fs.readFileSync(categoriesPath, "utf8");
    const categoryIdsMatch = content.matchAll(/id:\s*["']([^"']+)["']/g);

    return Array.from(categoryIdsMatch).map((match) => match[1]);
  } catch (error) {
    console.error("Error reading cruise categories:", error);
    return [
      "weekend-cruise",
      "fjords-tour",
      "repositioning-cruise",
      "luxury-cruise",
      "theme-cruise",
    ];
  }
}
const cruiseCategoryIds = getCruiseCategories();

// Base directory for cruise files
const cruisesDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises"
);

// Ensure the cruises directory exists
if (!fs.existsSync(cruisesDir)) {
  fs.mkdirSync(cruisesDir, { recursive: true });
}

// Read the city files array from the city.ts file
const cityFilePath = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "info",
  "city.ts"
);

// Country mapping for cities
const cityCountryMap = {
  auckland: "New Zealand",
  amsterdam: "Netherlands",
  barcelona: "Spain",
  berlin: "Germany",
  boston: "United States",
  "buenos-aires": "Argentina",
  "cape-town": "South Africa",
  charleston: "United States",
  copenhagen: "Denmark",
  dubai: "United Arab Emirates",
  dublin: "Ireland",
  florence: "Italy",
  "fort-lauderdale": "United States",
  galveston: "United States",
  "hong-kong": "China",
  kiel: "Germany",
  kyoto: "Japan",
  lisbon: "Portugal",
  london: "United Kingdom",
  "los-angeles": "United States",
  melbourne: "Australia",
  miami: "United States",
  milan: "Italy",
  montreal: "Canada",
  "new-orleans": "United States",
  "new-york-city": "United States",
  paris: "France",
  "quebec-city": "Canada",
  "rio-de-janeiro": "Brazil",
  rome: "Italy",
  "san-francisco": "United States",
  "san-juan": "Puerto Rico",
  seattle: "United States",
  singapore: "Singapore",
  southampton: "United Kingdom",
  sydney: "Australia",
  tampa: "United States",
  tokyo: "Japan",
  toronto: "Canada",
  vancouver: "Canada",
  venice: "Italy",
  yokohama: "Japan",
};

// Popular cruise destinations by region
const regionalDestinations = {
  Caribbean: [
    "Nassau",
    "San Juan",
    "St. Thomas",
    "Cozumel",
    "George Town",
    "Roatán",
    "Philipsburg",
  ],
  Mediterranean: [
    "Barcelona",
    "Rome",
    "Athens",
    "Santorini",
    "Mykonos",
    "Malta",
    "Dubrovnik",
  ],
  Alaska: [
    "Juneau",
    "Ketchikan",
    "Skagway",
    "Sitka",
    "Victoria",
    "Glacier Bay",
  ],
  "Asia Pacific": [
    "Tokyo",
    "Shanghai",
    "Singapore",
    "Bangkok",
    "Ho Chi Minh City",
    "Bali",
    "Sydney",
  ],
  "Northern Europe": [
    "Copenhagen",
    "Stockholm",
    "Helsinki",
    "Tallinn",
    "St. Petersburg",
    "Oslo",
  ],
  "South America": [
    "Rio de Janeiro",
    "Buenos Aires",
    "Montevideo",
    "Lima",
    "Santiago",
    "Cartagena",
  ],
};

// Map cities to nearby cruising regions
const cityToRegionMap = {
  auckland: "Asia Pacific",
  amsterdam: "Northern Europe",
  barcelona: "Mediterranean",
  berlin: "Northern Europe",
  boston: "East Coast USA",
  "buenos-aires": "South America",
  "cape-town": "Africa",
  charleston: "East Coast USA",
  copenhagen: "Northern Europe",
  dubai: "Middle East",
  dublin: "Northern Europe",
  florence: "Mediterranean",
  "fort-lauderdale": "Caribbean",
  galveston: "Caribbean",
  "hong-kong": "Asia Pacific",
  kiel: "Northern Europe",
  kyoto: "Asia Pacific",
  lisbon: "Mediterranean",
  london: "Northern Europe",
  "los-angeles": "West Coast USA",
  melbourne: "Asia Pacific",
  miami: "Caribbean",
  milan: "Mediterranean",
  montreal: "East Coast Canada",
  "new-orleans": "Caribbean",
  "new-york-city": "East Coast USA",
  paris: "Northern Europe",
  "quebec-city": "East Coast Canada",
  "rio-de-janeiro": "South America",
  rome: "Mediterranean",
  "san-francisco": "West Coast USA",
  "san-juan": "Caribbean",
  seattle: "Alaska",
  singapore: "Asia Pacific",
  southampton: "Northern Europe",
  sydney: "Asia Pacific",
  tampa: "Caribbean",
  tokyo: "Asia Pacific",
  toronto: "East Coast Canada",
  vancouver: "Alaska",
  venice: "Mediterranean",
  yokohama: "Asia Pacific",
  athens: "Mediterranean",
  stockholm: "Northern Europe",
};

const cityCoordinates = {
  auckland: { latitude: -36.848461, longitude: 174.763336 },
  amsterdam: { latitude: 52.377956, longitude: 4.89707 },
  barcelona: { latitude: 41.390205, longitude: 2.154007 },
  berlin: { latitude: 52.520008, longitude: 13.404954 },
  boston: { latitude: 42.361145, longitude: -71.057083 },
  "buenos-aires": { latitude: -34.603722, longitude: -58.381592 },
  "cape-town": { latitude: -33.918861, longitude: 18.4233 },
  charleston: { latitude: 32.77657, longitude: -79.93092 },
  copenhagen: { latitude: 55.6761, longitude: 12.5683 },
  dubai: { latitude: 25.276987, longitude: 55.296249 },
  dublin: { latitude: 53.349805, longitude: -6.26031 },
  florence: { latitude: 43.769562, longitude: 11.255814 },
  "fort-lauderdale": { latitude: 26.122439, longitude: -80.137317 },
  galveston: { latitude: 29.301348, longitude: -94.797695 },
  "hong-kong": { latitude: 22.3193, longitude: 114.1694 },
  kiel: { latitude: 54.3233, longitude: 10.1228 },
  kyoto: { latitude: 35.0116, longitude: 135.7681 },
  lisbon: { latitude: 38.7169, longitude: -9.1399 },
  london: { latitude: 51.5074, longitude: -0.1278 },
  "los-angeles": { latitude: 34.0522, longitude: -118.2437 },
  melbourne: { latitude: -37.8136, longitude: 144.9631 },
  miami: { latitude: 25.7617, longitude: -80.1918 },
  milan: { latitude: 45.4642, longitude: 9.19 },
  montreal: { latitude: 45.5017, longitude: -73.5673 },
  "new-orleans": { latitude: 29.9511, longitude: -90.0715 },
  "new-york-city": { latitude: 40.7128, longitude: -74.006 },
  paris: { latitude: 48.8566, longitude: 2.3522 },
  "quebec-city": { latitude: 46.8139, longitude: -71.2082 },
  "rio-de-janeiro": { latitude: -22.9068, longitude: -43.1729 },
  rome: { latitude: 41.9028, longitude: 12.4964 },
  "san-francisco": { latitude: 37.7749, longitude: -122.4194 },
  "san-juan": { latitude: 18.4655, longitude: -66.1057 },
  seattle: { latitude: 47.6062, longitude: -122.3321 },
  singapore: { latitude: 1.3521, longitude: 103.8198 },
  southampton: { latitude: 50.9097, longitude: -1.4044 },
  sydney: { latitude: -33.8688, longitude: 151.2093 },
  tampa: { latitude: 27.9506, longitude: -82.4572 },
  tokyo: { latitude: 35.6895, longitude: 139.6917 },
  toronto: { latitude: 43.6532, longitude: -79.3832 },
  vancouver: { latitude: 49.2827, longitude: -123.1207 },
  venice: { latitude: 45.4408, longitude: 12.3155 },
  yokohama: { latitude: 35.4437, longitude: 139.638 },
};

// Read and extract cityFiles array from the file
let cityFiles = [];
try {
  const cityFileContent = fs.readFileSync(cityFilePath, "utf8");
  const cityArrayMatch = cityFileContent.match(
    /export const cityFiles = \[([\s\S]*?)\];/
  );

  if (cityArrayMatch && cityArrayMatch[1]) {
    cityFiles = cityArrayMatch[1]
      .split(",")
      .map((city) => city.trim().replace(/"/g, "").replace(/'/g, ""))
      .filter((city) => city.length > 0);
  }
  console.log(`Found ${cityFiles.length} cities in cityFiles array`);
} catch (error) {
  console.error("Error reading city files:", error);
  process.exit(1);
}

// Generate regional destinations for a cruise from a given city
function getDestinationsForCity(cityName) {
  // Determine the cruising region for this city
  let region = cityToRegionMap[cityName] || "Mediterranean"; // Default to Mediterranean

  // Get destinations in that region, excluding the city itself
  let possibleDestinations =
    regionalDestinations[region] || regionalDestinations["Mediterranean"];
  possibleDestinations = possibleDestinations.filter(
    (dest) => dest.toLowerCase() !== capitalizeWords(cityName).toLowerCase()
  );

  // Get 2-4 random destinations
  const numDestinations = Math.floor(Math.random() * 3) + 2; // 2-4 destinations
  const selectedDestinations = [];

  for (let i = 0; i < numDestinations && possibleDestinations.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * possibleDestinations.length);
    selectedDestinations.push(possibleDestinations[randomIndex]);
    possibleDestinations.splice(randomIndex, 1); // Remove selected destination
  }

  return selectedDestinations;
}

// Generate realistic cruise itinerary with sequential days
function generateCruiseData(cityName) {
  const cityDisplayName = capitalizeWords(cityName);
  const countryName = cityCountryMap[cityName] || "";
  const regionName = cityToRegionMap[cityName] || "";
  const cityCoordinatesData = cityCoordinates[cityName] || {
    latitude: 0,
    longitude: 0,
  };

  // Get destinations for this cruise
  const destinations = getDestinationsForCity(cityName);

  // Create route starting with departure city
  const route = [
    {
      city: cityDisplayName,
      country: countryName,
      region: regionName,
      coordinates: cityCoordinatesData,
    },
  ];

  // Add destinations to route
  destinations.forEach((dest, i) => {
    const destCountry = cityCountryMap[dest.toLowerCase()] || "";
    const destCoordinates = cityCoordinates[dest.toLowerCase()] || {
      latitude: 0,
      longitude: 0,
    };
    route.push({
      city: dest,
      country: destCountry,
      coordinates: destCoordinates,
    });
  });

  // Add return to original city if round trip
  const isRoundTrip = Math.random() > 0.5;
  if (isRoundTrip) {
    route.push({ ...route[0] });
  }

  // Initialize the itinerary with sequential days
  let currentDay = 1;
  const timeAtSea = [];
  const timeOnLand = [];

  // First, spend time in the departure city
  const departureStay = Math.floor(Math.random() * 2) + 1; // 1-2 days
  timeOnLand.push({
    start: `Day ${currentDay}`,
    end: `Day ${currentDay + departureStay - 1}`,
    duration: `${departureStay} days`,
    description: `Exploring ${route[0].city}`,
  });
  currentDay += departureStay;

  // Alternate between sea and land for the rest of the route
  for (let i = 0; i < route.length - 1; i++) {
    // Travel to the next destination
    const daysAtSea = Math.floor(Math.random() * 2) + 1; // 1-2 days at sea
    timeAtSea.push({
      start: `Day ${currentDay}`,
      end: `Day ${currentDay + daysAtSea - 1}`,
      duration: `${daysAtSea} days`,
      description: `Sailing from ${route[i].city} to ${route[i + 1].city}`,
    });
    currentDay += daysAtSea;

    // Spend time at the destination
    const daysOnLand = Math.floor(Math.random() * 2) + 1; // 1-2 days at each location
    timeOnLand.push({
      start: `Day ${currentDay}`,
      end: `Day ${currentDay + daysOnLand - 1}`,
      duration: `${daysOnLand} days`,
      description: `Exploring ${route[i + 1].city}`,
    });
    currentDay += daysOnLand;
  }

  // Generate more intriguing title
  const cruiseAdjectives = [
    "Breathtaking",
    "Unforgettable",
    "Mesmerizing",
    "Exquisite",
    "Spectacular",
    "Opulent",
    "Enchanting",
    "Captivating",
    "Majestic",
    "Extraordinary",
    "Luxurious",
    "Epic",
    "Hidden",
    "Legendary",
    "Mythic",
    "Golden",
    "Celestial",
    "Whispering",
    "Secret",
    "Forbidden",
    "Timeless",
    "Infinite",
    "Midnight",
    "Starlit",
    "Crystalline",
    "Eternal",
    "Velvet",
  ];
  const cruiseExperiences = [
    "Adventure",
    "Odyssey",
    "Expedition",
    "Escape",
    "Exploration",
    "Voyage",
    "Discovery",
    "Journey",
    "Retreat",
    "Quest",
    "Sojourn",
    "Excursion",
    "Passage",
    "Escape",
    "Sojourn",
    "Odyssey",
    "Renaissance",
    "Reverie",
    "Requiem",
    "Sanctuary",
    "Mirage",
    "Saga",
    "Labyrinth",
    "Tide",
    "Mystique",
    "Realm",
    "Horizon",
  ];

  const regionDescriptors = {
    Caribbean: [
      "Tropical Isles",
      "Sapphire Waters",
      "Sun-Kissed Archipelago",
      "Azure Horizons",
    ],
    Mediterranean: [
      "Ancient Shores",
      "Sun-Drenched Riviera",
      "Timeless Coastlines",
      "Marble Cities",
    ],
    Alaska: [
      "Frozen Frontiers",
      "Glacial Kingdom",
      "Northern Lights",
      "Icy Passageways",
    ],
    "Asia Pacific": [
      "Oriental Realms",
      "Mystic East",
      "Oceanic Wonders",
      "Pacific Dreams",
    ],
    "South America": [
      "Emerald Coasts",
      "Southern Horizons",
      "Amazonian Edge",
      "Rhythmic Tropics",
    ],
    "Northern Europe": [
      "Nordic Waters",
      "Baltic Echoes",
      "Twilight Fjords",
      "Runestone Realms",
    ],
    "East Coast USA": [
      "Colonial Shores",
      "Historic Harbors",
      "Atlantic Breeze",
      "Sunrise Coast",
    ],
    "West Coast USA": [
      "Golden Shores",
      "Pacific Edge",
      "Coastal Giants",
      "Sunset Horizon",
    ],
    "East Coast Canada": [
      "Seaway Frontiers",
      "Maple Coast",
      "Harbor Havens",
      "Autumn Bay",
    ],
    "Middle East": [
      "Desert Jewels",
      "Arabian Nights",
      "Golden Sands",
      "Ancient Crossroads",
    ],
    Africa: [
      "Savannah Shorelines",
      "Sunset Dunes",
      "Cradle of Life",
      "Wild Horizon",
    ],
  };

  const cityDescriptors = {
    auckland: ["City of Sails", "Harbor Haven"],
    amsterdam: ["Canal Crown", "Dutch Jewel"],
    barcelona: ["Catalan Gem", "Gaudí’s Playground"],
    berlin: ["Cultural Capital", "Wall of Stories"],
    boston: ["Revolutionary Port", "Colonial Gateway"],
    "buenos-aires": ["Paris of South America", "Tango Capital"],
    "cape-town": ["Tabletop Treasure", "Cape of Wonders"],
    charleston: ["Southern Charm", "Historic Waterfront"],
    copenhagen: ["Scandinavian Pearl", "Harbor of Hygge"],
    dubai: ["Golden Metropolis", "Oasis of Luxury"],
    dublin: ["Emerald Gateway", "Literary Capital"],
    florence: ["Cradle of the Renaissance", "Tuscan Treasure"],
    "fort-lauderdale": ["Venice of America", "Sunlit Seaway"],
    galveston: ["Lone Star Port", "Gulf Gateway"],
    "hong-kong": ["Pearl of the Orient", "Vertical City"],
    kiel: ["Gateway to the Baltic", "German Maritime Hub"],
    kyoto: ["Cultural Heart of Japan", "Temple Haven"],
    lisbon: ["Hillside Haven", "Portuguese Pearl"],
    london: ["Royal Metropolis", "Thames Capital"],
    "los-angeles": ["Golden Coastline", "City of Dreams"],
    melbourne: ["Cultural Capital of Australia", "Laneway Wonderland"],
    miami: ["Magic City", "Coastal Pulse"],
    milan: ["Fashion Capital", "Lombard Jewel"],
    montreal: ["French-Canadian Heart", "Island Metropolis"],
    "new-orleans": ["Jazz Capital", "Crescent City"],
    "new-york-city": ["Empire Gateway", "Big Apple"],
    paris: ["City of Light", "Romantic Capital"],
    "quebec-city": ["Walled Wonder", "French-Canadian Crown"],
    "rio-de-janeiro": ["Carnival Capital", "Marvelous City"],
    rome: ["Eternal City", "Ancient Empire's Core"],
    "san-francisco": ["Bay City", "Golden Gateway"],
    "san-juan": ["Spanish Caribbean Jewel", "Colorful Coastline"],
    seattle: ["Emerald City", "Rain-Crowned Harbor"],
    singapore: ["Lion City", "Futuristic Haven"],
    southampton: ["Maritime Crossroads", "Titanic Port"],
    sydney: ["Harbor Icon", "Sun-Kissed Capital"],
    tampa: ["Bayfront Beauty", "Sunshine Gateway"],
    tokyo: ["Neon Capital", "Skyline of the Rising Sun"],
    toronto: ["Urban Mosaic", "Great Lakes Metropolis"],
    vancouver: ["Pacific Jewel", "Mountain-Edge Metropolis"],
    venice: ["Floating City", "Canal Kingdom"],
    yokohama: ["Gateway to Japan", "Bayside Metropolis"],
    athens: ["Cradle of Civilization", "Mythic Metropolis"],
    stockholm: ["Venice of the North", "Scandinavian Capital"],
  };

  function generateEnticingCruiseTitle(cityName) {
    const region = cityToRegionMap[cityName] || "Exotic Realms";

    const regionDesc = regionDescriptors[region] || [region];
    const cityDesc = cityDescriptors[cityName];

    const descriptors =
      cityDesc && Math.random() > 0.35 ? cityDesc : regionDesc;

    const adjective =
      cruiseAdjectives[Math.floor(Math.random() * cruiseAdjectives.length)];
    const experience =
      cruiseExperiences[Math.floor(Math.random() * cruiseExperiences.length)];
    const setting = descriptors[Math.floor(Math.random() * descriptors.length)];

    return `${adjective} ${experience} of the ${setting}`;
  }

  const adjective =
    cruiseAdjectives[Math.floor(Math.random() * cruiseAdjectives.length)];
  const experience =
    cruiseExperiences[Math.floor(Math.random() * cruiseExperiences.length)];
  const regionType = cityToRegionMap[cityName] || capitalizeWords(cityName);

  const cruiseTitle = generateEnticingCruiseTitle(cityName);

  // Generate more descriptive descriptions
  const descriptions = [
    `Embark on an unforgettable ${experience.toLowerCase()} from the vibrant port of ${cityDisplayName}, where you'll discover hidden gems and iconic landmarks across the ${regionType} region. With stops at ${destinations.join(
      ", "
    )}, this journey combines cultural immersion with breathtaking scenery.`,

    `Set sail from ${cityDisplayName} on this ${adjective.toLowerCase()} ${experience.toLowerCase()} through the heart of ${regionType}. Experience the perfect blend of relaxation and adventure as you explore ${destinations.join(
      " and "
    )}, with personalized service and unforgettable experiences awaiting at every port.`,

    `Discover the wonders of ${regionType} aboard this ${adjective.toLowerCase()} cruise departing from ${cityDisplayName}. Journey through crystal waters to explore the treasures of ${destinations.join(
      ", "
    )}, where each day brings new adventures and evenings are filled with elegant dining and entertainment.`,

    `This extraordinary ${experience.toLowerCase()} from ${cityDisplayName} offers the ultimate ${regionType} exploration. Immerse yourself in the rich cultures and stunning landscapes of ${destinations
      .slice(0, -1)
      .join(", ")} and ${destinations.slice(
      -1
    )}, creating memories that will last a lifetime.`,
  ];

  const cruiseDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  return {
    route,
    timeAtSea,
    timeOnLand,
    totalDuration: `${currentDay - 1} days`,
    distance: `${Math.floor(Math.random() * 1000) + 500} nautical miles`,
    cruiseTitle,
    cruiseDescription,
  };
}

// Function to create email from cruise title
function createEmailFromTitle(title) {
  // Convert title to lowercase, replace spaces with dots, remove special characters
  const cleanTitle = title
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, ".")
    .substring(0, 20); // Limit length

  return `${cleanTitle}@velarivoyages.com`;
}

// Create files for each city
let createdFiles = 0;
let updatedFiles = 0;
let rewrittenFiles = 0;
let totalCruisesCreated = 0;

function getTourCategoryId(totalDuration, tags) {
  const hasTag = (tag) => tags.includes(tag);

  // Prioritized conditions
  if (totalDuration >= 90) {
    return "vip-cruise";
  }

  if (totalDuration >= 20 && totalDuration <= 35) {
    return "luxury-cruise";
  }

  if (totalDuration >= 15 && totalDuration <= 20) {
    return "repositioning-cruise";
  }

  if (
    totalDuration >= 5 &&
    totalDuration <= 14 &&
    hasTag("themed-cruise") &&
    !hasTag("seasonal")
  ) {
    return "theme-cruise";
  }

  if (totalDuration >= 3 && totalDuration <= 10 && hasTag("seasonal")) {
    return "holiday-cruise";
  }

  if (totalDuration >= 7 && totalDuration <= 10 && hasTag("romantic")) {
    return "anniversary-cruise";
  }

  if (totalDuration >= 7 && totalDuration <= 10) {
    return "glacier-cruise";
  }

  if (totalDuration >= 3 && totalDuration <= 7) {
    return "tropical-cruise";
  }

  if (totalDuration >= 5 && totalDuration <= 14) {
    return "fall-foliage-cruise";
  }

  if (totalDuration >= 3 && totalDuration <= 4) {
    return "weekend-cruise";
  }

  return "general-cruise"; // fallback
}

for (const city of cityFiles) {
  const camelCaseCity = kebabToCamelCase(city);
  const cruiseFilePath = path.join(cruisesDir, `${city}-cruises.ts`);
  let existingCruises = [];
  let cruisesToAdd = cruisesToAppend; // Use the command-line argument value
  let fileAction = "Created";

  try {
    // Check if file already exists and we're not forcing a rewrite
    if (fs.existsSync(cruiseFilePath) && !forceRewrite) {
      // Read existing file content
      const existingContent = fs.readFileSync(cruiseFilePath, "utf8");

      // Extract the existing array
      const arrayMatch = existingContent.match(
        /export const \w+Cruises: Cruise\[\] = \[([\s\S]*?)\];/
      );
      if (arrayMatch && arrayMatch[1]) {
        try {
          // Count number of objects by counting opening braces
          const objectMatches = arrayMatch[1].match(/\{/g);
          if (objectMatches) {
            const existingObjectCount = objectMatches.length;
            console.log(
              `Found ${existingObjectCount} existing cruises in ${city}-cruises.ts`
            );

            // Keep the existing content untouched
            existingCruises = arrayMatch[1].trim();
            fileAction = "Updated";
            updatedFiles++;
          }
        } catch (parseError) {
          console.error(
            `Error parsing existing cruises in ${city}-cruises.ts:`,
            parseError
          );
        }
      }
    } else if (fs.existsSync(cruiseFilePath) && forceRewrite) {
      // When forcing rewrite, we're technically rewriting the file
      fileAction = "Rewritten";
      rewrittenFiles++;
    } else {
      createdFiles++;
    }

    // Generate multiple cruise objects
    const cruiseObjects = [];

    for (let i = 0; i < cruisesToAdd; i++) {
      // Generate cruise data
      const cruiseData = generateCruiseData(city);

      const tagsForCategories = [
        "family-friendly",
        "romantic",
        "adventure",
        "relaxation",
        "fall-cruise",
        "themed-cruise",
        "VIP",
        "luxury",
        "exclusive",
        "tropical",
        "long-distance",
        "short-getaway",
        "sightseeing",
        "seasonal",
      ];

      const tags = [];
      const tagsCount = Math.floor(Math.random() * 3) + 1; // 1-3 tags per cruise
      for (let j = 0; j < tagsCount; j++) {
        const randomTag =
          tagsForCategories[
            Math.floor(Math.random() * tagsForCategories.length)
          ];
        if (!tags.includes(`"${randomTag}"`)) {
          tags.push(`"${randomTag}"`);
        }
      }
      // Ensure we have at least one tag
      if (tags.length === 0) {
        tags.push("general");
      }

      const tourCategoryId = getTourCategoryId(
        parseInt(cruiseData.totalDuration, 10),
        tags
      );

      // Select a random cruise category ID
      const randomCategoryId =
        cruiseCategoryIds[Math.floor(Math.random() * cruiseCategoryIds.length)];

      // Generate contact email based on cruise title
      const contactEmail = createEmailFromTitle(cruiseData.cruiseTitle);

      // Generate a cruise object
      cruiseObjects.push(`  {
    basePrice: ${1000 + Math.floor(Math.random() * 9000)},
    departureLocation: ${JSON.stringify(cruiseData.route[0], null, 2)},
    arrivalLocation: ${JSON.stringify(
      cruiseData.route[cruiseData.route.length - 1],
      null,
      2
    )},
    isPopular: ${Math.random() > 0.7}, // Make fewer cruises "popular"
    hasPopularDestination: ${Math.random() > 0.5},
    category: "${
      [
        "mainstream",
        "premium",
        "entry-luxury",
        "luxury",
        "premium-luxury",
        "ultra-luxury",
        "expedition",
      ][Math.floor(Math.random() * 7)]
    }",
    itinerary: {
      route: ${JSON.stringify(cruiseData.route, null, 2)},
      description: "${cruiseData.cruiseDescription}",
      distance: "${cruiseData.distance}",
      totalDuration: "${cruiseData.totalDuration}",
      timeAtSea: ${JSON.stringify(cruiseData.timeAtSea, null, 2)},
      timeOnLand: ${JSON.stringify(cruiseData.timeOnLand, null, 2)}
    },
    tourCategoryId: "${tourCategoryId}",
    contactPersonnel: [
      {
        name: "Cruise Director ${i + 1}",
        role: "Cruise Director",
        languages: ["English", ${i % 2 === 0 ? '"Spanish"' : '"French"'}, ${
        i % 3 === 0 ? '"German"' : '"Italian"'
      }],
        experienceYears: ${5 + Math.floor(Math.random() * 15)},
        profileImage: "/images/staff/cruise-director-${i + 1}.jpg",
        contact: {
          contactEmail: "${contactEmail}",
          contactNumber: "+1-${Math.floor(Math.random() * 900) + 100}-${
        Math.floor(Math.random() * 900) + 100
      }-${Math.floor(Math.random() * 9000) + 1000}"
        }
      }
    ],
    title: "${cruiseData.cruiseTitle}",
    description: "${cruiseData.cruiseDescription}",
    rating: ${(Math.random() * 1 + 4).toFixed(1)},
    tags: [${tags}]
  }`);
    }

    // Create file content, combining existing and new cruises if applicable
    let combinedCruises;
    if (existingCruises.length > 0 && !forceRewrite) {
      // Append new cruises to existing ones
      combinedCruises = existingCruises + ",\n" + cruiseObjects.join(",\n");
    } else {
      // Just use the new cruises (either new file or forced rewrite)
      combinedCruises = cruiseObjects.join(",\n");
    }

    const fileContent = `import { Cruise } from "@/lib/interfaces/services/cruises";

export const ${camelCaseCity}Cruises: Cruise[] = [
${combinedCruises}
];
`;

    // Write the file
    fs.writeFileSync(cruiseFilePath, fileContent);
    totalCruisesCreated += cruiseObjects.length;
    console.log(
      `${fileAction} file: ${cruiseFilePath} with ${cruiseObjects.length} new cruises`
    );
  } catch (error) {
    console.error(`Error processing cruise file for ${city}:`, error);
  }
}

console.log(`\nSummary:`);
console.log(`Created ${createdFiles} new cruise files`);
console.log(`Updated ${updatedFiles} existing cruise files`);
console.log(`Rewritten ${rewrittenFiles} existing cruise files`);
console.log(`Total cities processed: ${cityFiles.length}`);
console.log(`Total new cruises created: ${totalCruisesCreated}`);
