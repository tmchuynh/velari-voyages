/**
 * City Cruise Generator Script
 * ============================
 *
 * This script generates cruise data for cities in the Velari Voyages project.
 * It creates or modifies files with the naming convention: "{city-name}-cruises.ts"
 * Each file exports an array variable named "{cityName}Cruises" with cruise data.
 *
 * Features:
 * - Creates realistic cruise itineraries with sequential days
 * - Generates routes with appropriate destinations based on city's region
 * - Creates compelling cruise titles and descriptions
 * - Assigns contact personnel with appropriate languages based on region
 * - Supports appending to existing files or rewriting them completely
 *
 * Usage Examples:
 * --------------
 * # Default: adds 10 cruises per city only for new files
 * node scripts/create-city-cruise-files.mjs
 *
 * # Adds 5 cruises to existing files
 * node scripts/create-city-cruise-files.mjs --append 5
 *
 * # Rewrites all files with 10 cruises each (discards existing data)
 * node scripts/create-city-cruise-files.mjs --rewrite
 *
 * # Creates files even if they already exist
 * node scripts/create-city-cruise-files.mjs --force-create
 *
 * # Rewrites all files with 15 cruises each
 * node scripts/create-city-cruise-files.mjs --rewrite --append 15
 *
 * # Shows help information
 * node scripts/create-city-cruise-files.mjs --help
 *
 * Command-line Options:
 * ------------------
 * --append, -a NUMBER  Append NUMBER of cruises to existing files
 * --rewrite, -r        Rewrite all files, discarding existing cruises
 * --force-create, -f   Create files even if they already exist (default: only create if missing)
 * --help, -h           Display help message
 *
 * Output Files:
 * ------------
 * The script generates TypeScript files in:
 * src/lib/constants/cruises/cruises/{city-name}-cruises.ts
 *
 * Each file exports a typed array of cruise objects compatible with the
 * Cruise interface defined in src/lib/interfaces/services/cruises.ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getCityFiles, formatKebebToTitleCase } from "./utils/file-utils.mjs";
import {
  cityCoordinates,
  cityCountryMap,
  cityToRegionMap,
  regionalDestinations,
} from "./utils/geo-utils.mjs";
import { getRandomLanguages } from "./utils/language-utils.mjs";
import {
  feminineNames,
  lastNames,
  masculineNames,
} from "./utils/name-utils.mjs";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command-line arguments
const args = process.argv.slice(2);
const CRUISES_PER_CITY = 10; // Default value
let cruisesToAppend = CRUISES_PER_CITY;
let forceRewrite = false;
let forceCreate = false; // New flag to control creation behavior
const APPEND_MODE = args.includes("--append") || args.includes("-a");

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
  } else if (args[i] === "--force-create" || args[i] === "-f") {
    forceCreate = true;
  } else if (args[i] === "--help" || args[i] === "-h") {
    console.log(`
Usage: node scripts/create-city-cruise-files.mjs [options]

Options:
  --append, -a NUMBER  Append NUMBER of cruises to existing files
  --rewrite, -r        Rewrite all files, discarding existing cruises
  --force-create, -f   Create files even if they already exist (default: only create if missing)
  --help, -h           Display this help message
    `);
    process.exit(0);
  }
}

console.log(`Running with options:
- ${forceRewrite ? "Rewriting all files" : "Preserving existing files"}
- ${
  forceCreate
    ? "Creating files even if they exist"
    : "Only creating files that don't exist"
}
- ${forceRewrite ? "Creating" : "Appending"} ${cruisesToAppend} cruises ${
  forceRewrite ? "per city" : "to each file"
}
`);

// Function to convert kebab case to camelCase
function kebabToCamelCase(str) {
  return str
    .split("-")
    .map((part, index) =>
      index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join("");
}

// Function to capitalize first letter of each word
function capitalizeWords(str) {
  return str.replace(/-/g, " ").replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

// Base directory for cruise files
const cruisesDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "cruises",
);

// Ensure the cruises directory exists
if (!fs.existsSync(cruisesDir)) {
  fs.mkdirSync(cruisesDir, { recursive: true });
}

// Use the shared getCityFiles function
const cityFiles = getCityFiles();

// Generate regional destinations for a cruise from a given city
function getDestinationsForCity(cityName) {
  // Determine the cruising region for this city
  let region = cityToRegionMap[cityName] || "Mediterranean"; // Default to Mediterranean

  // Get destinations in that region, excluding the city itself
  let possibleDestinations =
    regionalDestinations[region] || regionalDestinations["Mediterranean"];
  possibleDestinations = possibleDestinations.filter(
    (dest) => dest.toLowerCase() !== capitalizeWords(cityName).toLowerCase(),
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
    "Radiant",
    "Mystical",
    "Serene",
    "Azure",
    "Starlit",
    "Crystalline",
    "Eternal",
    "Velvet",
    "Immersive",
    "Tranquil",
    "Alluring",
    "Gilded",
    "Pristine",
    "Dreamlike",
    "Refined",
    "Ornate",
    "Luminous",
    "Sublime",
    "Majestic",
    "Lavish",
    "Heavenly",
    "Awe-Inspiring",
    "Secluded",
    "Oceanic",
    "Floating",
    "Horizon-Kissed",
    "Moonlit",
    "Sun-Drenched",
    "Pearlescent",
    "Charming",
    "Idyllic",
    "Infinite",
    "Verdant",
    "Panoramic",
    "Transcendent",
    "Riveting",
    "Harmonic",
    "Radiance-Drenched",
    "Tide-Washed",
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
    "Awakening",
    "Tranquility",
    "Symphony",
    "Eclipse",
    "Drift",
    "Wanderlust",
    "Serenade",
    "Pilgrimage",
    "Odyssey",
    "Solstice",
    "Zenith",
    "Haven",
    "Frontier",
    "Pulse",
    "Whisper",
    "Legacy",
    "Reunion",
    "Elevation",
    "Resonance",
    "Enigma",
    "Reflection",
    "Sanctum",
    "Oasis",
    "Currents",
    "Elevation",
    "Embrace",
    "Arcadia",
    "Lullaby",
    "Panorama",
    "Mythos",
    "Infinite",
  ];

  const regionDescriptors = {
    Caribbean: [
      "Tropical Isles",
      "Sapphire Waters",
      "Sun-Kissed Archipelago",
      "Azure Horizons",
      "Coral Sanctuaries",
      "Emerald Cays",
      "Rum-Laced Breezes",
      "Pirate Passages",
      "Palm-Fringed Paradises",
      "Turquoise Lagoons",
      "Caribbean Rhythms",
      "Sugarcane Skies",
      "Island Reverie",
      "Reggae Shores",
    ],
    Mediterranean: [
      "Ancient Shores",
      "Sun-Drenched Riviera",
      "Timeless Coastlines",
      "Marble Cities",
      "Olive-Draped Hills",
      "Crystalline Bays",
      "Mosaic Harbors",
      "Legacy of Empires",
      "Wine-Soaked Villages",
      "Cerulean Coasts",
      "Sunset Terraces",
      "Classical Crossroads",
      "Citadels by the Sea",
      "Mediterranean Mosaics",
    ],
    Alaska: [
      "Frozen Frontiers",
      "Glacial Kingdom",
      "Northern Lights",
      "Icy Passageways",
      "Whale-Rich Waters",
      "Snow-Crowned Peaks",
      "Wilderness Reaches",
      "Frontier Silence",
      "Tundra Tides",
      "Misty Fjords",
      "Echoes of Ice",
      "The Last Frontier",
      "Alpine Seascapes",
      "Carved Ice Cathedrals",
    ],
    "Asia Pacific": [
      "Oriental Realms",
      "Mystic East",
      "Oceanic Wonders",
      "Pacific Dreams",
      "Zen Shores",
      "Jade Horizons",
      "Island Kingdoms",
      "Tea-Laced Traditions",
      "Bamboo Shores",
      "Pagoda-Silhouetted Skylines",
      "Lotus-Lined Waters",
      "Volcanic Outposts",
      "Sacred Shores",
      "Dynastic Dreams",
    ],
    "South America": [
      "Emerald Coasts",
      "Southern Horizons",
      "Amazonian Edge",
      "Rhythmic Tropics",
      "Incan Echoes",
      "Patagonian Reach",
      "Rainforest Veins",
      "Carnival Currents",
      "Andean Views",
      "Pre-Columbian Paths",
      "Samba Shores",
      "Lost Cities & Living Cultures",
      "Sacred Valleys",
      "Cape Horn Crossings",
    ],
    "Northern Europe": [
      "Nordic Waters",
      "Baltic Echoes",
      "Twilight Fjords",
      "Runestone Realms",
      "Crown Jewel Capitals",
      "Snow-Kissed Harbors",
      "Fairy Tale Villages",
      "Aurora Veil",
      "Glacial Reflections",
      "Timbered Waterfronts",
      "Iron Age Isles",
      "Saga-Strewn Coastlines",
      "Windswept Elegance",
      "Frosted Kingdoms",
    ],
    "East Coast USA": [
      "Colonial Shores",
      "Historic Harbors",
      "Atlantic Breeze",
      "Sunrise Coast",
      "Founding Footsteps",
      "Seaboard Heritage",
      "Lighthouse Trails",
      "Harbor-Lit Evenings",
      "Cobbled Seaside Towns",
      "Nautical Traditions",
      "Autumnal Voyages",
      "Patriot Ports",
      "Eastern Elegance",
      "Winds of Revolution",
    ],
    "West Coast USA": [
      "Golden Shores",
      "Pacific Edge",
      "Coastal Giants",
      "Sunset Horizon",
      "Wine Country Views",
      "Cascading Cliffs",
      "Surf & Silence",
      "Golden Gate Voyage",
      "Redwood Coasts",
      "Urban Sea Meets",
      "Pacific Panoramas",
      "Bohemian Shores",
      "Cliffside Skylines",
      "Maritime Metropolises",
    ],
    "East Coast Canada": [
      "Seaway Frontiers",
      "Maple Coast",
      "Harbor Havens",
      "Autumn Bay",
      "Lobster Isles",
      "Red Sand Shores",
      "Historic Lighthouses",
      "Fog-Kissed Ports",
      "Acadian Echoes",
      "Tidal Wonders",
      "Storybook Villages",
      "Fiddle & Salt Air",
      "Celtic Shores",
      "Seafaring Legacies",
    ],
    "Middle East": [
      "Desert Jewels",
      "Arabian Nights",
      "Golden Sands",
      "Ancient Crossroads",
      "Minaret Horizons",
      "Spice-Laden Air",
      "Pearl Diver Routes",
      "Oasis Dreams",
      "Sultanate Secrets",
      "Caravan Echoes",
      "Sacred Desert Winds",
      "Dunes & Domes",
      "Mystic Minarets",
      "Petroglyph Paths",
    ],
    Africa: [
      "Savannah Shorelines",
      "Sunset Dunes",
      "Cradle of Life",
      "Wild Horizon",
      "Tribal Rhythms",
      "Safari-Coastal Merges",
      "Saharan Vistas",
      "Drumbeat Currents",
      "Baobab Bay",
      "Elephant Shores",
      "Red Earth Waters",
      "Savanna to Sea",
      "Cape of Legends",
      "Savage Grace",
    ],
  };

  const cityDescriptors = {
    auckland: [
      "City of Sails",
      "Harbor Haven",
      "Ocean-Bound Metropolis",
      "Gateway to New Zealand",
      "Wind-Danced Waterfront",
      "Sapphire Mooring",
    ],
    amsterdam: [
      "Canal Crown",
      "Dutch Jewel",
      "Golden Age Haven",
      "Mist-Wrapped Lattices",
      "Reflections of the Past",
      "Waterborne Enigma",
    ],
    barcelona: [
      "Catalan Gem",
      "Gaudí’s Playground",
      "Mosaic by the Sea",
      "Whispers of Color",
      "Spires and Spirits",
      "Sun-Kissed Labyrinth",
    ],
    berlin: [
      "Cultural Capital",
      "Wall of Stories",
      "Modern Mosaic",
      "City of Echoes",
      "Stone and Shadow",
      "Time-Threaded Metropolis",
    ],
    boston: [
      "Revolutionary Port",
      "Colonial Gateway",
      "Harbor of History",
      "Freedom’s Harbor",
      "Lantern-Lit Legacy",
      "Cradle of Resistance",
    ],
    "buenos-aires": [
      "Paris of South America",
      "Tango Capital",
      "Riverfront Elegance",
      "Melancholy Rhythms",
      "Passion by the Plate",
      "Twilight Tango City",
    ],
    "cape-town": [
      "Tabletop Treasure",
      "Cape of Wonders",
      "Cradle of Two Oceans",
      "Mountain-Guarded Mystique",
      "Where Currents Converge",
      "Ocean’s Edge Citadel",
    ],
    charleston: [
      "Southern Charm",
      "Historic Waterfront",
      "Echoes of Elegance",
      "Porch-Lined Dreams",
      "Magnolia Veins",
      "Maritime Whisper",
    ],
    copenhagen: [
      "Scandinavian Pearl",
      "Harbor of Hygge",
      "Nordic Fairytale Port",
      "Mist & Midsummer",
      "Royal Stillness",
      "Frosted Serenity",
    ],
    dubai: [
      "Golden Metropolis",
      "Oasis of Luxury",
      "City of Mirages",
      "Sand-Crafted Skyline",
      "Desert Dreamcraft",
      "Opulence in Bloom",
    ],
    dublin: [
      "Emerald Gateway",
      "Literary Capital",
      "Ale & Verse Port",
      "Story-Woven Streets",
      "City of Quiet Fire",
      "Twilight in Stone",
    ],
    florence: [
      "Cradle of the Renaissance",
      "Tuscan Treasure",
      "Canvas of Civilization",
      "Marble & Muse",
      "Sunlit Fresco Realm",
      "Dreams in Terra Cotta",
    ],
    "fort-lauderdale": [
      "Venice of America",
      "Sunlit Seaway",
      "Canal-Threaded Escape",
      "Tropical Constellation",
      "Harbor Mirage",
      "Waters of Leisure",
    ],
    galveston: [
      "Lone Star Port",
      "Gulf Gateway",
      "Windswept Sentinel",
      "Historic Strand Portal",
      "Salt and Steam Legacy",
      "Texan Tidepost",
    ],
    "hong-kong": [
      "Pearl of the Orient",
      "Vertical City",
      "Sky-Scrawled Destiny",
      "Lantern-Lit Labyrinth",
      "City of Rising Mist",
      "Mirrored Futurescape",
    ],
    kiel: [
      "Gateway to the Baltic",
      "German Maritime Hub",
      "Canal Whisper Port",
      "Steel and Salt Artery",
      "Waves of Memory",
      "Frost-Lit Dock",
    ],
    kyoto: [
      "Cultural Heart of Japan",
      "Temple Haven",
      "Zen-Stilled Veil",
      "Shrine of Seasons",
      "Whispers of Bamboo",
      "Timeless Echo",
    ],
    lisbon: [
      "Hillside Haven",
      "Portuguese Pearl",
      "Tiled Melancholy",
      "City of Seven Fados",
      "Riverside Reverie",
      "Sun-Drenched Verse",
    ],
    london: [
      "Royal Metropolis",
      "Thames Capital",
      "Fog-Laced Legacy",
      "Empire’s Veil",
      "Clocktower Shadow",
      "Midnight Monarchy",
    ],
    "los-angeles": [
      "Golden Coastline",
      "City of Dreams",
      "Cinematic Mirage",
      "Neon & Nostalgia",
      "Palm-Shaded Horizon",
      "Stage of Stars",
    ],
    melbourne: [
      "Cultural Capital of Australia",
      "Laneway Wonderland",
      "Graphite Dreamscape",
      "Jazz of the Streets",
      "Rain-Polished Rhythm",
      "Art on Every Brick",
    ],
    miami: [
      "Magic City",
      "Coastal Pulse",
      "Heatwave Muse",
      "Tropical Firelight",
      "City of Endless Summer",
      "Crystalline Currents",
    ],
    milan: [
      "Fashion Capital",
      "Lombard Jewel",
      "Threaded with Elegance",
      "Marble-Runway Realm",
      "Design in Motion",
      "Chic Fortress",
    ],
    montreal: [
      "French-Canadian Heart",
      "Island Metropolis",
      "Bilingual Canvas",
      "River's Rhythm",
      "Stone-Walled Allure",
      "Snow-Kissed Bohemia",
    ],
    "new-orleans": [
      "Jazz Capital",
      "Crescent City",
      "Bayou Beat",
      "Voodoo Murmurs",
      "Parade of Shadows",
      "Soul-Stirred Streets",
    ],
    "new-york-city": [
      "Empire Gateway",
      "Big Apple",
      "Gotham Pulse",
      "Sky-Bound Collage",
      "City of Never",
      "Steel & Spirit Metropolis",
    ],
    paris: [
      "City of Light",
      "Romantic Capital",
      "Midnight Louvre",
      "Velvet Shadows",
      "Cathedral Echoes",
      "Rosé-Washed Dreams",
    ],
    "quebec-city": [
      "Walled Wonder",
      "French-Canadian Crown",
      "Time-Frozen Ramparts",
      "Snow-Wrapped Citadel",
      "Frosted Charm",
      "Old World’s Flame",
    ],
    "rio-de-janeiro": [
      "Carnival Capital",
      "Marvelous City",
      "Sun-Sculpted Rhythm",
      "Mountain & Myth",
      "Tide of Passion",
      "Golden Samba Shore",
    ],
    rome: [
      "Eternal City",
      "Ancient Empire’s Core",
      "Stone-Written History",
      "Temple of Time",
      "Whispers in Marble",
      "Sunset Over Seven Hills",
    ],
    "san-francisco": [
      "Bay City",
      "Golden Gateway",
      "Fog-Draped Haven",
      "Crimson Bridge Dream",
      "Cable-Laced Wonder",
      "Harbor of Horizons",
    ],
    "san-juan": [
      "Spanish Caribbean Jewel",
      "Colorful Coastline",
      "Fortress of Tides",
      "Painted Port",
      "Colonial Echo",
      "Sun-Worn Stones",
    ],
    seattle: [
      "Emerald City",
      "Rain-Crowned Harbor",
      "Sky-Reflected Stillness",
      "Mist and Mountains",
      "Forest by the Sea",
      "Sound of Silence",
    ],
    singapore: [
      "Lion City",
      "Futuristic Haven",
      "Jungle of Light",
      "Glass and Garden",
      "Neon Tropics",
      "Arcology Nexus",
    ],
    southampton: [
      "Maritime Crossroads",
      "Titanic Port",
      "Fog-Bound Gateway",
      "Atlantic Departure Point",
      "Echoes of Steam",
      "Harbor of Legends",
    ],
    sydney: [
      "Harbor Icon",
      "Sun-Kissed Capital",
      "Opera-Lit Skies",
      "Crescent Bay Beauty",
      "Southern Cross City",
      "Seafront Radiance",
    ],
    tampa: [
      "Bayfront Beauty",
      "Sunshine Gateway",
      "Warm Currents Hub",
      "Palmetto Breeze",
      "Golden Tide Rise",
      "Wharf of Color",
    ],
    tokyo: [
      "Neon Capital",
      "Skyline of the Rising Sun",
      "City of Still Chaos",
      "Shimmering Contradiction",
      "Temple of Lights",
      "Wired Infinity",
    ],
    toronto: [
      "Urban Mosaic",
      "Great Lakes Metropolis",
      "Maple-Lit Majesty",
      "North Star City",
      "Skyline on Ice",
      "Towered Threshold",
    ],
    vancouver: [
      "Pacific Jewel",
      "Mountain-Edge Metropolis",
      "Glass and Fir",
      "Sea-Bound Solace",
      "Harbor of Mist",
      "Forest-Kissed Skyline",
    ],
    venice: [
      "Floating City",
      "Canal Kingdom",
      "Laced in Silence",
      "Lagoon Reverie",
      "Misty Reflections",
      "Gondola Phantom",
    ],
    yokohama: [
      "Gateway to Japan",
      "Bayside Metropolis",
      "Wind-Touched Wharf",
      "Bridge to Tradition",
      "Harbor of Rebirth",
      "Pearl Wake City",
    ],
    athens: [
      "Cradle of Civilization",
      "Mythic Metropolis",
      "Ruins and Radiance",
      "Olive-Toned Legend",
      "Temple-Held Horizon",
      "Whispers of Olympus",
    ],
    stockholm: [
      "Venice of the North",
      "Scandinavian Capital",
      "Frosted Archipelago",
      "Isle-Woven Empire",
      "Nordic Silence",
      "Aurora Harbor",
    ],
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
      ", ",
    )}, this journey combines cultural immersion with breathtaking scenery.`,

    `Set sail from ${cityDisplayName} on this ${adjective.toLowerCase()} ${experience.toLowerCase()} through the heart of ${regionType}. Experience the perfect blend of relaxation and adventure as you explore ${destinations.join(
      " and ",
    )}, with personalized service and unforgettable experiences awaiting at every port.`,

    `Discover the wonders of ${regionType} aboard this ${adjective.toLowerCase()} cruise departing from ${cityDisplayName}. Journey through crystal waters to explore the treasures of ${destinations.join(
      ", ",
    )}, where each day brings new adventures and evenings are filled with elegant dining and entertainment.`,

    `This extraordinary ${experience.toLowerCase()} from ${cityDisplayName} offers the ultimate ${regionType} exploration. Immerse yourself in the rich cultures and stunning landscapes of ${destinations
      .slice(0, -1)
      .join(", ")} and ${destinations.slice(
      -1,
    )}, creating memories that will last a lifetime.`,

    `Begin your ${experience.toLowerCase()} in ${cityDisplayName}, a gateway to the soul of ${regionType}. Enjoy days spent exploring ${destinations.join(
      ", ",
    )} and evenings immersed in onboard luxury, fine dining, and panoramic sea views.`,

    `Sail away from the charming harbor of ${cityDisplayName} on this ${adjective.toLowerCase()} journey across ${regionType}. Uncover the beauty and history of ${destinations.join(
      ", ",
    )} with curated excursions, world-class cuisine, and exceptional service.`,

    `Your ${experience.toLowerCase()} begins in ${cityDisplayName}, where the spirit of exploration meets modern luxury. From the sun-drenched shores of ${
      destinations[0]
    } to the historic streets of ${
      destinations[1]
    }, each stop in the ${regionType} will leave a lasting impression.`,

    `Experience the elegance of the seas on this ${adjective.toLowerCase()} ${experience.toLowerCase()} through ${regionType}, starting from the illustrious port of ${cityDisplayName}. From ${destinations
      .slice(0, -1)
      .join(", ")} to ${destinations.slice(
      -1,
    )}, each destination offers its own story, culture, and breathtaking views.`,

    `From the lively departure port of ${cityDisplayName}, this curated ${experience.toLowerCase()} showcases the finest of ${regionType}. With visits to ${destinations.join(
      ", ",
    )}, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.`,

    `Set course from ${cityDisplayName} for an inspiring ${adjective.toLowerCase()} journey across ${regionType}. Whether exploring ancient ruins in ${
      destinations[0]
    } or soaking up coastal views in ${
      destinations[1]
    }, every day offers a perfect mix of discovery and relaxation.`,

    `Launch into adventure from ${cityDisplayName} and sail deep into the heart of the ${regionType}. With ports of call like ${destinations.join(
      ", ",
    )}, expect a voyage filled with scenic wonders and luxurious comforts.`,

    `This ${adjective.toLowerCase()} cruise from ${cityDisplayName} is your ticket to the captivating charm of the ${regionType}. Discover the delights of ${destinations.join(
      ", ",
    )} with enriching excursions and award-winning service.`,

    `Begin an epic ${experience.toLowerCase()} from ${cityDisplayName}, where the seas meet culture. Visit the remarkable ports of ${destinations.join(
      ", ",
    )} while indulging in fine dining, entertainment, and unmatched hospitality.`,

    `Sail into splendor from ${cityDisplayName} on a ${adjective.toLowerCase()} voyage through ${regionType}. Let each stop—from ${
      destinations[0]
    } to ${
      destinations[1]
    }—reveal the unique flavors and colors of the region.`,

    `Depart from ${cityDisplayName} on this thoughtfully designed ${experience.toLowerCase()} across the ${regionType}. Savor coastal charm, cultural treasures, and ocean views with stops at ${destinations.join(
      ", ",
    )}.`,

    `Escape into the calm waters of ${regionType} with this ${adjective.toLowerCase()} journey from ${cityDisplayName}. Explore vibrant markets, sun-soaked beaches, and architectural marvels at ${destinations.join(
      ", ",
    )}.`,

    `This handpicked ${experience.toLowerCase()} begins in ${cityDisplayName} and travels through ${regionType}'s iconic waterscapes. Discover ${destinations.join(
      ", ",
    )} as each day brings new stories and every night offers elegant repose.`,

    `Set sail from ${cityDisplayName} for a voyage like no other. From the picturesque landscapes of ${
      destinations[0]
    } to the lively ambiance of ${
      destinations[1]
    }, this ${adjective.toLowerCase()} cruise will redefine your view of ${regionType}.`,

    `Cruise into cultural richness aboard this ${adjective.toLowerCase()} ${experience.toLowerCase()} departing ${cityDisplayName}. Savor local cuisine and uncover regional beauty from ${
      destinations[0]
    } to ${destinations[1]}.`,

    `Depart ${cityDisplayName} on a relaxing ${experience.toLowerCase()} through the ${regionType} region. Highlights include the stunning coastlines of ${destinations.join(
      ", ",
    )}, all while enjoying first-class amenities on board.`,

    `This ${experience.toLowerCase()} takes you beyond the ordinary, starting in ${cityDisplayName}. With breathtaking stops in ${destinations.join(
      ", ",
    )}, your cruise delivers immersive moments and unforgettable vistas.`,

    `Escape the everyday with this ${adjective.toLowerCase()} journey through ${regionType}, departing from ${cityDisplayName}. You'll visit ${destinations.join(
      ", ",
    )}, where every stop is a new adventure.`,

    `Let the winds of the ${regionType} carry you from ${cityDisplayName} to the most stunning ports in the region. With destinations like ${destinations.join(
      ", ",
    )}, this ${experience.toLowerCase()} redefines luxury travel.`,

    `Depart from iconic ${cityDisplayName} and traverse the ${regionType} with visits to ${destinations.join(
      ", ",
    )}. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.`,

    `An unforgettable ${experience.toLowerCase()} awaits as you cruise from ${cityDisplayName} across ${regionType}. Dive into history, flavor, and culture with stops including ${destinations.join(
      ", ",
    )}.`,

    `Depart from the iconic port of ${cityDisplayName} and sail through the enchanting ${regionType}. Explore vibrant destinations like ${destinations.join(
      ", ",
    )}, each offering its own unique charm and local flair.`,

    `Step aboard in ${cityDisplayName} and begin a ${adjective.toLowerCase()} journey through the scenic ${regionType}. From historic cities to coastal hideaways like ${destinations.join(
      ", ",
    )}, every day is unforgettable.`,

    `Set off on a ${experience.toLowerCase()} from ${cityDisplayName} that captures the essence of ${regionType}. Discover cultural gems and culinary delights across ${destinations.join(
      ", ",
    )}.`,

    `Your journey through the ${regionType} begins in ${cityDisplayName}, where elegance meets adventure. Explore the shores of ${destinations.join(
      ", ",
    )}, with curated excursions and luxurious onboard amenities.`,

    `Board in ${cityDisplayName} for a hand-crafted ${experience.toLowerCase()} through the breathtaking ${regionType}. Highlights include sun-drenched beaches, historic ports, and immersive culture in ${destinations.join(
      ", ",
    )}.`,

    `Escape to sea from ${cityDisplayName} on a ${adjective.toLowerCase()} voyage exploring the magic of ${regionType}. Visit unforgettable locales like ${destinations.join(
      ", ",
    )}, where each stop inspires awe.`,

    `Experience coastal elegance on this ${experience.toLowerCase()} from ${cityDisplayName}, where the journey through ${regionType} includes stops in ${destinations.join(
      ", ",
    )}, each more enchanting than the last.`,

    `Leave ordinary behind as you sail from ${cityDisplayName} across the captivating ${regionType}. Discover the distinctive personality of each destination, from ${destinations.join(
      ", ",
    )}.`,

    `This ${adjective.toLowerCase()} ${experience.toLowerCase()} begins in ${cityDisplayName} and ventures deep into the heart of ${regionType}. Wander through colorful markets, historic streets, and serene coastlines at ${destinations.join(
      ", ",
    )}.`,

    `Join us in ${cityDisplayName} for a ${experience.toLowerCase()} of a lifetime. Sail across the serene waters of ${regionType}, stopping at ports like ${destinations.join(
      ", ",
    )} where timeless traditions meet modern luxuries.`,

    `Sail away from ${cityDisplayName} into the beautiful expanse of ${regionType}. Along the way, enjoy rich cultural experiences in ${destinations.join(
      ", ",
    )}, where history, nature, and cuisine collide.`,

    `This inspiring ${experience.toLowerCase()} departs from ${cityDisplayName}, navigating the diverse landscapes and vibrant cities of ${regionType}. Must-see stops include ${destinations.join(
      ", ",
    )}.`,

    `Explore a new side of ${regionType} with this ${adjective.toLowerCase()} ${experience.toLowerCase()} starting in ${cityDisplayName}. Visit charming ports such as ${destinations.join(
      ", ",
    )}, each offering its own unique rhythm.`,

    `Unwind and explore on this ${experience.toLowerCase()} through ${regionType}, departing from ${cityDisplayName}. With every stop—from ${
      destinations[0]
    } to ${destinations.slice(
      -1,
    )}—you’ll collect memories that last a lifetime.`,

    `Let the spirit of exploration guide your ${adjective.toLowerCase()} journey from ${cityDisplayName}. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like ${destinations.join(
      ", ",
    )}.`,

    `Start in the vibrant city of ${cityDisplayName} and venture into the iconic ${regionType}. Discover authentic local cultures, cuisine, and coastal wonders in ${destinations.join(
      ", ",
    )}.`,

    `Savor each moment of this ${adjective.toLowerCase()} escape through ${regionType}, starting in ${cityDisplayName}. Visit renowned locations like ${destinations.join(
      ", ",
    )}, where adventure and relaxation intertwine.`,

    `Your ${experience.toLowerCase()} begins in ${cityDisplayName}, where every sunset on the ${regionType} horizon promises another day of discovery—from ${destinations.join(
      ", ",
    )} to hidden ports of charm.`,

    `Leave stress behind with this curated ${experience.toLowerCase()} from ${cityDisplayName}. Sail across the best of ${regionType} and explore treasures like ${destinations.join(
      ", ",
    )} with comfort and style.`,

    `A voyage of contrasts awaits from ${cityDisplayName}. Discover the historical and natural richness of ${regionType} as you cruise to spectacular destinations like ${destinations.join(
      ", ",
    )}.`,

    `Embark from ${cityDisplayName} and traverse the ${regionType} in style. Whether it’s the energy of ${destinations[0]} or the calm of ${destinations[1]}, each destination reveals a new side of paradise.`,

    `Begin a captivating ${experience.toLowerCase()} through the ${regionType}, departing ${cityDisplayName}. With visits to ${destinations.join(
      ", ",
    )}, each day brings a new adventure and deeper connection to the region.`,

    `This hand-selected ${adjective.toLowerCase()} cruise offers a true taste of ${regionType}. Depart from ${cityDisplayName} and explore ports like ${destinations.join(
      ", ",
    )}, each telling a story through food, music, and tradition.`,

    `Step into a world of elegance and exploration from ${cityDisplayName}. This ${experience.toLowerCase()} through the ${regionType} unveils stunning stops including ${destinations.join(
      ", ",
    )}, all with first-class service.`,

    `Enjoy seamless luxury on this ${adjective.toLowerCase()} ${experience.toLowerCase()} beginning in ${cityDisplayName}. Visit breathtaking ${regionType} locales such as ${destinations.join(
      ", ",
    )} on this unforgettable itinerary.`,

    `Set sail from historic ${cityDisplayName} for a modern escape into the ${regionType}. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in ${destinations.join(
      ", ",
    )}.`,

    `Let the waves lead you from ${cityDisplayName} on this ${adjective.toLowerCase()} ${experience.toLowerCase()}. Traverse the iconic waters of ${regionType} and discover the beauty of ${destinations.join(
      ", ",
    )}.`,

    `Begin your journey in ${cityDisplayName}, where tradition meets travel. This immersive ${experience.toLowerCase()} reveals the finest of ${regionType}, from the beaches of ${
      destinations[0]
    } to the streets of ${destinations[1]}.`,

    `From bustling ${cityDisplayName} to serene ${regionType} shores, this cruise invites you to relax, explore, and indulge. Stops at ${destinations.join(
      ", ",
    )} deliver a balanced blend of culture and comfort.`,

    `Sail from ${cityDisplayName} into a world of wonder. The ${regionType} beckons with unforgettable ports like ${destinations.join(
      ", ",
    )}, where every view is picture-perfect and every moment is priceless.`,

    `Let this ${adjective.toLowerCase()} voyage redefine your idea of travel. From ${cityDisplayName}, explore the ${regionType} in luxurious comfort, stopping at ${destinations.join(
      ", ",
    )} where every port offers a new chapter.`,

    `An escape like no other begins in ${cityDisplayName}, where your ${experience.toLowerCase()} launches into the heart of ${regionType}. Discover the magic of ${destinations.join(
      ", ",
    )} with style and sophistication.`,
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

const decision = Math.random() > 0.5;
function getName() {
  const firstName = decision
    ? feminineNames[Math.floor(Math.random() * feminineNames.length)]
    : masculineNames[Math.floor(Math.random() * masculineNames.length)];

  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  const name = `${firstName} ${lastName}`;

  // Check if name is in masculine or feminine lists

  // If we can't determine, use first letter as a simple heuristic
  // Names starting with A-M more likely to be assigned male, N-Z female
  // This is an arbitrary rule for names not in our lists
  return name;
}

function getTourCategoryId(totalDuration, tags) {
  // Helper function to check if a tag exists, handling quoted strings
  const hasTag = (tag) => tags.some((t) => t.includes(tag));

  // Prioritized conditions based on tags first, then duration
  if (hasTag("VIP") || totalDuration >= 90) {
    return "vip-cruise";
  }

  if (hasTag("luxury") || (totalDuration >= 20 && totalDuration <= 35)) {
    return "luxury-cruise";
  }

  if (hasTag("repositioning") || (totalDuration >= 15 && totalDuration <= 20)) {
    return "repositioning-cruise";
  }

  if (
    hasTag("anniversary") ||
    (hasTag("romantic") && totalDuration >= 7 && totalDuration <= 10)
  ) {
    return "anniversary-cruise";
  }

  if (
    hasTag("themed-cruise") &&
    !hasTag("seasonal") &&
    totalDuration >= 5 &&
    totalDuration <= 14
  ) {
    return "theme-cruise";
  }

  if (
    (hasTag("holiday") || hasTag("seasonal")) &&
    totalDuration >= 3 &&
    totalDuration <= 10
  ) {
    return "holiday-cruise";
  }

  if (
    hasTag("glacier") ||
    hasTag("expedition") ||
    (totalDuration >= 7 && totalDuration <= 10 && hasTag("nature"))
  ) {
    return "glacier-cruise";
  }

  if (
    hasTag("tropical") ||
    (hasTag("relaxation") && totalDuration >= 3 && totalDuration <= 7)
  ) {
    return "tropical-cruise";
  }

  if (
    hasTag("fall") ||
    hasTag("fall-cruise") ||
    (totalDuration >= 5 && totalDuration <= 14 && hasTag("nature"))
  ) {
    return "fall-foliage-cruise";
  }

  if (
    hasTag("weekend") ||
    (totalDuration >= 2 && totalDuration <= 4 && hasTag("short-getaway"))
  ) {
    return "weekend-cruise";
  }

  // Check for fjords-tour which was missing from the original function
  if (hasTag("nature") && hasTag("sightseeing") && totalDuration >= 5) {
    return "fjords-tour";
  }

  return "general-cruise"; // fallback
}

const personnelRoles = [
  "Travel Advisor",
  "Reservations Agent",
  "Sales Consultant",
  "Cruise Specialist",
  "Customer Service Representative",
  "Group Booking Coordinator",
  "Marketing Coordinator",
  "Loyalty Program Representative",
  "Corporate Concierge",
  "Guest Services Agent (Shoreside)",
];

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Mandarin",
  "Japanese",
  "Arabic",
  "Russian",
  "Portuguese",
  "Italian",
  "Korean",
  "Hindi",
  "Dutch",
  "Swedish",
  "Norwegian",
  "Danish",
  "Finnish",
  "Greek",
  "Turkish",
  "Polish",
  "Czech",
  "Hungarian",
  "Thai",
  "Vietnamese",
  "Indonesian",
  "Filipino",
  "Malay",
  "Bengali",
  "Urdu",
  "Punjabi",
  "Gujarati",
  "Tamil",
  "Telugu",
  "Marathi",
  "Kannada",
  "Malayalam",
  "Burmese",
  "Khmer",
  "Lao",
  "Swahili",
  "Zulu",
];

for (const city of cityFiles) {
  const camelCaseCity = kebabToCamelCase(city);
  const cruiseFilePath = path.join(cruisesDir, `${city}-cruises.ts`);
  let existingCruises = [];
  let cruisesToAdd = cruisesToAppend; // Use the command-line argument value
  let fileAction = "Created";

  try {
    // Check if file exists and we should skip it
    if (
      fs.existsSync(cruiseFilePath) &&
      !forceRewrite &&
      !forceCreate &&
      !APPEND_MODE
    ) {
      console.log(`Skipping ${cruiseFilePath}: File already exists`);
      continue; // Skip to next city
    }

    // Check if file already exists and we're not forcing a rewrite
    if (fs.existsSync(cruiseFilePath) && !forceRewrite) {
      // Read existing file content
      const existingContent = fs.readFileSync(cruiseFilePath, "utf8");

      // Extract the existing array
      const arrayMatch = existingContent.match(
        /export const \w+Cruises: Cruise\[\] = \[([\s\S]*?)\];/,
      );
      if (arrayMatch && arrayMatch[1]) {
        try {
          // Count number of objects by counting opening braces
          const objectMatches = arrayMatch[1].match(/\{/g);
          if (objectMatches) {
            const existingObjectCount = objectMatches.length;
            console.log(
              `Found ${existingObjectCount} existing cruises in ${city}-cruises.ts`,
            );

            // Keep the existing content untouched
            existingCruises = arrayMatch[1].trim();
            fileAction = "Updated";
            updatedFiles++;
          }
        } catch (parseError) {
          console.error(
            `Error parsing existing cruises in ${city}-cruises.ts:`,
            parseError,
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

    const role =
      personnelRoles[Math.floor(Math.random() * personnelRoles.length)];

    // Get region-specific languages for the personnel
    const region = cityToRegionMap[city] || "";
    let regionForLanguages;

    // Map maritime regions to language regions
    switch (region) {
      case "Mediterranean":
      case "Northern Europe":
      case "Western Europe":
        regionForLanguages = "europe";
        break;

      case "Asia Pacific":
        regionForLanguages = "asia";
        break;

      case "Caribbean":
      case "East Coast USA":
      case "West Coast USA":
      case "East Coast Canada":
      case "South America":
        regionForLanguages = "americas";
        break;

      case "Middle East":
        regionForLanguages = "middleEast";
        break;

      case "Africa":
        regionForLanguages = "africa";
        break;

      default:
        regionForLanguages = "global";
        break;
    }

    // Update to generate 3-5 languages instead of 1-3
    const languagesCount = Math.floor(Math.random() * 3) + 3; // 3-5 languages per personnel
    const personnelLanguages = getRandomLanguages(
      languagesCount,
      regionForLanguages,
    );
    const languagesList = personnelLanguages.map((lang) => `"${lang.name}"`);

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
        "holiday-cruise",
        "glacier-cruise",
        "anniversary-cruise",
        "weekend-cruise",
        "general",
        "cultural",
        "historical",
        "culinary",
        "wellness",
        "nature",
        "wildlife",
        "expedition",
        "repositioning",
        "cruise",
        "cruise-line",
        "cruise-ship",
        "cruise-vacation",
        "cruise-holiday",
        "cruise-experience",
        "cruise-adventure",
        "cruise-journey",
        "cruise-getaway",
        "cruise-excursion",
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

      const gender = decision ? "women" : "men";
      const randomId = Math.floor(Math.random() * 99); // Random number for the image
      const profileImage = `https://randomuser.me/api/portraits/${gender}/${randomId}.jpg`;

      const tourCategoryId = getTourCategoryId(
        parseInt(cruiseData.totalDuration, 10),
        tags,
      );

      // Generate contact email based on cruise title
      const contactEmail = createEmailFromTitle(cruiseData.cruiseTitle);

      // Define valid cruise categories according to the interface
      const cruiseCategories = [
        "repositioning-cruise",
        "anniversary-cruise",
        "theme-cruise",
        "holiday-cruise",
        "fall-foliage-cruise",
        "glacier-cruise",
        "tropical-cruise",
        "vip-cruise",
        "fjords-tour",
        "weekend-cruise",
        "luxury-cruise",
        "expedition-cruise",
      ];

      // Randomly select a category
      const selectedCategory =
        cruiseCategories[Math.floor(Math.random() * cruiseCategories.length)];

      // Generate a cruise object
      cruiseObjects.push(`  {
    basePrice: ${1000 + Math.floor(Math.random() * 9000)},
    departureLocation: ${JSON.stringify(cruiseData.route[0], null, 2)},
    arrivalLocation: ${JSON.stringify(
      cruiseData.route[cruiseData.route.length - 1],
      null,
      2,
    )},
    isPopular: ${Math.random() > 0.7}, // Make fewer cruises "popular"
    hasPopularDestination: ${Math.random() > 0.5},
    category: "${selectedCategory}",
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
        name: "${getName()}",
        role: "${role}",
        languages: [${languagesList}], // Use the properly generated languages list
        experienceYears: ${5 + Math.floor(Math.random() * 15)},
        profileImage: "${profileImage}",
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
      // Clean up existing cruises - remove trailing comma if present
      const trimmedExistingCruises = existingCruises
        .trimEnd()
        .replace(/,\s*$/, "");

      // Append new cruises to existing ones with proper comma separation
      combinedCruises =
        trimmedExistingCruises + ",\n" + cruiseObjects.join(",\n");
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
      `${fileAction} file: ${cruiseFilePath} with ${cruiseObjects.length} new cruises`,
    );
  } catch (error) {
    console.error(`Error processing cruise file for ${city}:`, error);
  }

  console.log(`Total cities processed: ${cityFiles.length}`);
  console.log(`Rewritten ${rewrittenFiles} existing cruise files`);
  console.log(`Updated ${updatedFiles} existing cruise files`);
  console.log(`Created ${createdFiles} new cruise files`);
  console.log(`\nSummary:`);
}
console.log(`Total new cruises created: ${totalCruisesCreated}`);
