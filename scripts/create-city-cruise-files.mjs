import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Sample regions for each city
const regionMap = {
  "United States": [
    "East Coast",
    "West Coast",
    "Gulf Coast",
    "Northeast",
    "Southeast",
    "Pacific Northwest",
  ],
  Canada: ["British Columbia", "Quebec", "Ontario"],
  Italy: ["Tuscany", "Lazio", "Veneto", "Lombardy"],
  Spain: ["Catalonia", "Andalusia", "Valencia"],
  "United Kingdom": ["England", "Scotland", "Wales"],
  Australia: ["New South Wales", "Victoria", "Queensland"],
  Japan: ["Kanto", "Kansai", "Kyushu"],
  Germany: ["Bavaria", "Schleswig-Holstein", "Berlin"],
  France: ["Île-de-France", "Provence", "Normandy"],
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
  miami: "Caribbean",
  "fort-lauderdale": "Caribbean",
  galveston: "Caribbean",
  "new-orleans": "Caribbean",
  tampa: "Caribbean",
  barcelona: "Mediterranean",
  rome: "Mediterranean",
  venice: "Mediterranean",
  athens: "Mediterranean",
  seattle: "Alaska",
  vancouver: "Alaska",
  tokyo: "Asia Pacific",
  singapore: "Asia Pacific",
  "hong-kong": "Asia Pacific",
  sydney: "Asia Pacific",
  copenhagen: "Northern Europe",
  stockholm: "Northern Europe",
  kiel: "Northern Europe",
  southampton: "Northern Europe",
  "buenos-aires": "South America",
  "rio-de-janeiro": "South America",
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
  const countryName = cityCountryMap[cityName] || "Sample Country";
  const regionName = regionMap[countryName]
    ? regionMap[countryName][
        Math.floor(Math.random() * regionMap[countryName].length)
      ]
    : "Sample Region";

  // Get destinations for this cruise
  const destinations = getDestinationsForCity(cityName);

  // Create route starting with departure city
  const route = [
    {
      city: cityDisplayName,
      country: countryName,
      region: regionName,
      coordinates: {
        latitude: Math.random() * 170 - 85,
        longitude: Math.random() * 360 - 180,
      },
    },
  ];

  // Add destinations to route
  destinations.forEach((dest, i) => {
    route.push({
      city: dest,
      country: "Destination Country", // This could be improved with a mapping
      coordinates: {
        latitude: Math.random() * 170 - 85,
        longitude: Math.random() * 360 - 180,
      },
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
  ];
  const adjective =
    cruiseAdjectives[Math.floor(Math.random() * cruiseAdjectives.length)];
  const experience =
    cruiseExperiences[Math.floor(Math.random() * cruiseExperiences.length)];
  const regionType = cityToRegionMap[cityName] || capitalizeWords(cityName);

  const cruiseTitle = `${adjective} ${regionType} ${experience} from ${cityDisplayName}`;

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
let existingFiles = 0;

for (const city of cityFiles) {
  const camelCaseCity = kebabToCamelCase(city);
  const cruiseFilePath = path.join(cruisesDir, `${city}-cruises.ts`);

  // Check if file already exists
  if (fs.existsSync(cruiseFilePath)) {
    console.log(`File already exists: ${cruiseFilePath}`);
    existingFiles++;
    continue;
  }

  try {
    // Generate cruise data
    const cruiseData = generateCruiseData(city);

    // Select a random cruise category ID
    const randomCategoryId =
      cruiseCategoryIds[Math.floor(Math.random() * cruiseCategoryIds.length)];

    // Generate contact email based on cruise title
    const contactEmail = createEmailFromTitle(cruiseData.cruiseTitle);

    // Create file content
    const fileContent = `import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const ${camelCaseCity}Cruises: Cruise[] = [
  {
    basePrice: ${1000 + Math.floor(Math.random() * 9000)},
    departureLocation: ${JSON.stringify(cruiseData.route[0], null, 2)},
    arrivalLocation: ${JSON.stringify(
      cruiseData.route[cruiseData.route.length - 1],
      null,
      2
    )},
    isPopular: ${Math.random() > 0.5},
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
    tourCategoryId: "${randomCategoryId}",
    contactPersonnel: [
      {
        name: "John Doe",
        role: "Cruise Director",
        languages: ["English", "Spanish"],
        experienceYears: 10,
        profileImage: "/images/staff/john-doe.jpg",
        contact: {
          contactEmail: "${contactEmail}",
          contactNumber: "+1-123-456-7890"
        }
      }
    ],
    title: "${cruiseData.cruiseTitle}",
    description: "${cruiseData.cruiseDescription}",
    rating: ${(Math.random() * 1 + 4).toFixed(1)},
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
`;

    // Write the file
    fs.writeFileSync(cruiseFilePath, fileContent);
    console.log(`Created file: ${cruiseFilePath}`);
    createdFiles++;
  } catch (error) {
    console.error(`Error creating cruise file for ${city}:`, error);
  }
}

console.log(`\nSummary:`);
console.log(`Created ${createdFiles} new cruise files`);
console.log(`Found ${existingFiles} existing cruise files`);
console.log(`Total cities processed: ${cityFiles.length}`);
