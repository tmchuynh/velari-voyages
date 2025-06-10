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
import {
  getCityFiles,
  capitalize,
  formatKebabToCamelCase,
} from "./utils/file-utils.mjs";
import {
  cruiseAdjectives,
  cityDescriptors,
  regionDescriptors,
} from "./utils/description-utils.mjs";
import {
  cityCoordinates,
  cityCountryMap,
  cityToRegionMap,
  regionalDestinations,
} from "./utils/geo-utils.mjs";
import {
  countryLanguagesMap,
  getRandomLanguages,
} from "./utils/language-utils.mjs";
import {
  feminineNames,
  lastNames,
  masculineNames,
} from "./utils/name-utils.mjs";
import { generateUniqueId } from "./utils/data-generator.mjs";

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

// Base directory for cruise files
const cruisesDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "cruises"
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
    (dest) => dest.toLowerCase() !== capitalize(cityName).toLowerCase()
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
function generateCruiseData(cityName, vesselId) {
  const cityDisplayName = capitalize(cityName);
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
  const regionType = cityToRegionMap[cityName] || capitalize(cityName);

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

    `Begin your ${experience.toLowerCase()} in ${cityDisplayName}, a gateway to the soul of ${regionType}. Enjoy days spent exploring ${destinations.join(
      ", "
    )} and evenings immersed in onboard luxury, fine dining, and panoramic sea views.`,

    `Sail away from the charming harbor of ${cityDisplayName} on this ${adjective.toLowerCase()} journey across ${regionType}. Uncover the beauty and history of ${destinations.join(
      ", "
    )} with curated excursions, world-class cuisine, and exceptional service.`,

    `Your ${experience.toLowerCase()} begins in ${cityDisplayName}, where the spirit of exploration meets modern luxury. From the sun-drenched shores of ${
      destinations[0]
    } to the historic streets of ${
      destinations[1]
    }, each stop in the ${regionType} will leave a lasting impression.`,

    `Experience the elegance of the seas on this ${adjective.toLowerCase()} ${experience.toLowerCase()} through ${regionType}, starting from the illustrious port of ${cityDisplayName}. From ${destinations
      .slice(0, -1)
      .join(", ")} to ${destinations.slice(
      -1
    )}, each destination offers its own story, culture, and breathtaking views.`,

    `From the lively departure port of ${cityDisplayName}, this curated ${experience.toLowerCase()} showcases the finest of ${regionType}. With visits to ${destinations.join(
      ", "
    )}, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.`,

    `Set course from ${cityDisplayName} for an inspiring ${adjective.toLowerCase()} journey across ${regionType}. Whether exploring ancient ruins in ${
      destinations[0]
    } or soaking up coastal views in ${
      destinations[1]
    }, every day offers a perfect mix of discovery and relaxation.`,

    `Launch into adventure from ${cityDisplayName} and sail deep into the heart of the ${regionType}. With ports of call like ${destinations.join(
      ", "
    )}, expect a voyage filled with scenic wonders and luxurious comforts.`,

    `This ${adjective.toLowerCase()} cruise from ${cityDisplayName} is your ticket to the captivating charm of the ${regionType}. Discover the delights of ${destinations.join(
      ", "
    )} with enriching excursions and award-winning service.`,

    `Begin an epic ${experience.toLowerCase()} from ${cityDisplayName}, where the seas meet culture. Visit the remarkable ports of ${destinations.join(
      ", "
    )} while indulging in fine dining, entertainment, and unmatched hospitality.`,

    `Sail into splendor from ${cityDisplayName} on a ${adjective.toLowerCase()} voyage through ${regionType}. Let each stop—from ${
      destinations[0]
    } to ${
      destinations[1]
    }—reveal the unique flavors and colors of the region.`,

    `Depart from ${cityDisplayName} on this thoughtfully designed ${experience.toLowerCase()} across the ${regionType}. Savor coastal charm, cultural treasures, and ocean views with stops at ${destinations.join(
      ", "
    )}.`,

    `Escape into the calm waters of ${regionType} with this ${adjective.toLowerCase()} journey from ${cityDisplayName}. Explore vibrant markets, sun-soaked beaches, and architectural marvels at ${destinations.join(
      ", "
    )}.`,

    `This handpicked ${experience.toLowerCase()} begins in ${cityDisplayName} and travels through ${regionType}'s iconic waterscapes. Discover ${destinations.join(
      ", "
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
      ", "
    )}, all while enjoying first-class amenities on board.`,

    `This ${experience.toLowerCase()} takes you beyond the ordinary, starting in ${cityDisplayName}. With breathtaking stops in ${destinations.join(
      ", "
    )}, your cruise delivers immersive moments and unforgettable vistas.`,

    `Escape the everyday with this ${adjective.toLowerCase()} journey through ${regionType}, departing from ${cityDisplayName}. You'll visit ${destinations.join(
      ", "
    )}, where every stop is a new adventure.`,

    `Let the winds of the ${regionType} carry you from ${cityDisplayName} to the most stunning ports in the region. With destinations like ${destinations.join(
      ", "
    )}, this ${experience.toLowerCase()} redefines luxury travel.`,

    `Depart from iconic ${cityDisplayName} and traverse the ${regionType} with visits to ${destinations.join(
      ", "
    )}. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.`,

    `An unforgettable ${experience.toLowerCase()} awaits as you cruise from ${cityDisplayName} across ${regionType}. Dive into history, flavor, and culture with stops including ${destinations.join(
      ", "
    )}.`,

    `Depart from the iconic port of ${cityDisplayName} and sail through the enchanting ${regionType}. Explore vibrant destinations like ${destinations.join(
      ", "
    )}, each offering its own unique charm and local flair.`,

    `Step aboard in ${cityDisplayName} and begin a ${adjective.toLowerCase()} journey through the scenic ${regionType}. From historic cities to coastal hideaways like ${destinations.join(
      ", "
    )}, every day is unforgettable.`,

    `Set off on a ${experience.toLowerCase()} from ${cityDisplayName} that captures the essence of ${regionType}. Discover cultural gems and culinary delights across ${destinations.join(
      ", "
    )}.`,

    `Your journey through the ${regionType} begins in ${cityDisplayName}, where elegance meets adventure. Explore the shores of ${destinations.join(
      ", "
    )}, with curated excursions and luxurious onboard amenities.`,

    `Board in ${cityDisplayName} for a hand-crafted ${experience.toLowerCase()} through the breathtaking ${regionType}. Highlights include sun-drenched beaches, historic ports, and immersive culture in ${destinations.join(
      ", "
    )}.`,

    `Escape to sea from ${cityDisplayName} on a ${adjective.toLowerCase()} voyage exploring the magic of ${regionType}. Visit unforgettable locales like ${destinations.join(
      ", "
    )}, where each stop inspires awe.`,

    `Experience coastal elegance on this ${experience.toLowerCase()} from ${cityDisplayName}, where the journey through ${regionType} includes stops in ${destinations.join(
      ", "
    )}, each more enchanting than the last.`,

    `Leave ordinary behind as you sail from ${cityDisplayName} across the captivating ${regionType}. Discover the distinctive personality of each destination, from ${destinations.join(
      ", "
    )}.`,

    `This ${adjective.toLowerCase()} ${experience.toLowerCase()} begins in ${cityDisplayName} and ventures deep into the heart of ${regionType}. Wander through colorful markets, historic streets, and serene coastlines at ${destinations.join(
      ", "
    )}.`,

    `Join us in ${cityDisplayName} for a ${experience.toLowerCase()} of a lifetime. Sail across the serene waters of ${regionType}, stopping at ports like ${destinations.join(
      ", "
    )} where timeless traditions meet modern luxuries.`,

    `Sail away from ${cityDisplayName} into the beautiful expanse of ${regionType}. Along the way, enjoy rich cultural experiences in ${destinations.join(
      ", "
    )}, where history, nature, and cuisine collide.`,

    `This inspiring ${experience.toLowerCase()} departs from ${cityDisplayName}, navigating the diverse landscapes and vibrant cities of ${regionType}. Must-see stops include ${destinations.join(
      ", "
    )}.`,

    `Explore a new side of ${regionType} with this ${adjective.toLowerCase()} ${experience.toLowerCase()} starting in ${cityDisplayName}. Visit charming ports such as ${destinations.join(
      ", "
    )}, each offering its own unique rhythm.`,

    `Unwind and explore on this ${experience.toLowerCase()} through ${regionType}, departing from ${cityDisplayName}. With every stop—from ${
      destinations[0]
    } to ${destinations.slice(
      -1
    )}—you’ll collect memories that last a lifetime.`,

    `Let the spirit of exploration guide your ${adjective.toLowerCase()} journey from ${cityDisplayName}. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like ${destinations.join(
      ", "
    )}.`,

    `Start in the vibrant city of ${cityDisplayName} and venture into the iconic ${regionType}. Discover authentic local cultures, cuisine, and coastal wonders in ${destinations.join(
      ", "
    )}.`,

    `Savor each moment of this ${adjective.toLowerCase()} escape through ${regionType}, starting in ${cityDisplayName}. Visit renowned locations like ${destinations.join(
      ", "
    )}, where adventure and relaxation intertwine.`,

    `Your ${experience.toLowerCase()} begins in ${cityDisplayName}, where every sunset on the ${regionType} horizon promises another day of discovery—from ${destinations.join(
      ", "
    )} to hidden ports of charm.`,

    `Leave stress behind with this curated ${experience.toLowerCase()} from ${cityDisplayName}. Sail across the best of ${regionType} and explore treasures like ${destinations.join(
      ", "
    )} with comfort and style.`,

    `A voyage of contrasts awaits from ${cityDisplayName}. Discover the historical and natural richness of ${regionType} as you cruise to spectacular destinations like ${destinations.join(
      ", "
    )}.`,

    `Embark from ${cityDisplayName} and traverse the ${regionType} in style. Whether it’s the energy of ${destinations[0]} or the calm of ${destinations[1]}, each destination reveals a new side of paradise.`,

    `Begin a captivating ${experience.toLowerCase()} through the ${regionType}, departing ${cityDisplayName}. With visits to ${destinations.join(
      ", "
    )}, each day brings a new adventure and deeper connection to the region.`,

    `This hand-selected ${adjective.toLowerCase()} cruise offers a true taste of ${regionType}. Depart from ${cityDisplayName} and explore ports like ${destinations.join(
      ", "
    )}, each telling a story through food, music, and tradition.`,

    `Step into a world of elegance and exploration from ${cityDisplayName}. This ${experience.toLowerCase()} through the ${regionType} unveils stunning stops including ${destinations.join(
      ", "
    )}, all with first-class service.`,

    `Enjoy seamless luxury on this ${adjective.toLowerCase()} ${experience.toLowerCase()} beginning in ${cityDisplayName}. Visit breathtaking ${regionType} locales such as ${destinations.join(
      ", "
    )} on this unforgettable itinerary.`,

    `Set sail from historic ${cityDisplayName} for a modern escape into the ${regionType}. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in ${destinations.join(
      ", "
    )}.`,

    `Let the waves lead you from ${cityDisplayName} on this ${adjective.toLowerCase()} ${experience.toLowerCase()}. Traverse the iconic waters of ${regionType} and discover the beauty of ${destinations.join(
      ", "
    )}.`,

    `Begin your journey in ${cityDisplayName}, where tradition meets travel. This immersive ${experience.toLowerCase()} reveals the finest of ${regionType}, from the beaches of ${
      destinations[0]
    } to the streets of ${destinations[1]}.`,

    `From bustling ${cityDisplayName} to serene ${regionType} shores, this cruise invites you to relax, explore, and indulge. Stops at ${destinations.join(
      ", "
    )} deliver a balanced blend of culture and comfort.`,

    `Sail from ${cityDisplayName} into a world of wonder. The ${regionType} beckons with unforgettable ports like ${destinations.join(
      ", "
    )}, where every view is picture-perfect and every moment is priceless.`,

    `Let this ${adjective.toLowerCase()} voyage redefine your idea of travel. From ${cityDisplayName}, explore the ${regionType} in luxurious comfort, stopping at ${destinations.join(
      ", "
    )} where every port offers a new chapter.`,

    `An escape like no other begins in ${cityDisplayName}, where your ${experience.toLowerCase()} launches into the heart of ${regionType}. Discover the magic of ${destinations.join(
      ", "
    )} with style and sophistication.`,

    `This ${adjective.toLowerCase()} cruise from ${cityDisplayName} is your gateway to the wonders of ${regionType}. Experience the best of coastal life with stops at ${destinations.join(
      ", "
    )}, where each destination is a treasure waiting to be explored.`,
    `Embark on a ${experience.toLowerCase()} from ${cityDisplayName} that promises to captivate your senses. From the vibrant markets of ${
      destinations[0]
    } to the tranquil beaches of ${
      destinations[1]
    }, this journey through ${regionType} is one you won't forget.`,
    `Experience the allure of ${regionType} on this ${adjective.toLowerCase()} cruise departing from ${cityDisplayName}. With stops at ${destinations.join(
      ", "
    )}, you'll immerse yourself in the rich tapestry of cultures and landscapes that define this stunning region.`,
    `Set sail from ${cityDisplayName} on a ${adjective.toLowerCase()} ${experience.toLowerCase()} that explores the hidden gems of ${regionType}. From the bustling streets of ${
      destinations[0]
    } to the serene shores of ${
      destinations[1]
    }, each stop offers a unique glimpse into the heart of this enchanting region.`,
    `Join us for a ${adjective.toLowerCase()} ${experience.toLowerCase()} from ${cityDisplayName}, where the journey through ${regionType} is as enriching as the destinations themselves. Visit ${destinations.join(
      ", "
    )} and create memories that will last a lifetime.`,
    `Discover the beauty of ${regionType} on this ${adjective.toLowerCase()} cruise from ${cityDisplayName}. With stops at ${destinations.join(
      ", "
    )}, you'll experience a perfect blend of relaxation, adventure, and cultural immersion.`,
    `This ${experience.toLowerCase()} from ${cityDisplayName} invites you to explore the diverse landscapes and vibrant cultures of ${regionType}. From the historic charm of ${
      destinations[0]
    } to the natural beauty of ${
      destinations[1]
    }, each port offers a unique experience that will leave you enchanted.`,
    `Embark on a ${adjective.toLowerCase()} ${experience.toLowerCase()} from ${cityDisplayName}, where the wonders of ${regionType} await. With stops at ${destinations.join(
      ", "
    )}, you'll discover the rich history, stunning scenery, and warm hospitality that define this remarkable region.`,
    `Experience the magic of ${regionType} on this ${adjective.toLowerCase()} cruise departing from ${cityDisplayName}. From the vibrant culture of ${
      destinations[0]
    } to the breathtaking landscapes of ${
      destinations[1]
    }, this journey promises unforgettable moments and lasting memories.`,
    `Set sail from ${cityDisplayName} on a ${adjective.toLowerCase()} ${experience.toLowerCase()} that takes you through the heart of ${regionType}. With stops at ${destinations.join(
      ", "
    )}, you'll explore the rich tapestry of cultures, landscapes, and experiences that make this region so special.`,

    `Discover the wonders of ${regionType} on this ${adjective.toLowerCase()} cruise departing from ${cityDisplayName}. From the stunning coastlines of ${
      destinations[0]
    } to the vibrant cities of ${
      destinations[1]
    }, this journey promises to be a feast for the senses.`,
  ];

  const cruiseDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  // Generate contact information
  const contactName = `${feminineNames[Math.floor(Math.random() * feminineNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  const contactEmail = createEmailFromTitle(cruiseTitle);
  const contactPhone = `+1-${Math.floor(Math.random() * 900) + 100}-${
    Math.floor(Math.random() * 900) + 100
  }-${Math.floor(Math.random() * 9000) + 1000}`;
  const contactRole =
    personnelRoles[Math.floor(Math.random() * personnelRoles.length)];

  // Create the cruise object
  const cruise = {
    id: generateUniqueId(), // Assuming a function to generate unique IDs
    title: cruiseTitle,
    description: cruiseDescription,
    vesselId: vesselId, // Assign the vesselId
    departureLocation: route[0],
    arrivalLocation: route[route.length - 1],
    isPopular: Math.random() > 0.7, // Make fewer cruises "popular"
    hasPopularDestination: Math.random() > 0.5,
    itinerary: {
      route: route,
      description: cruiseDescription,
      distance: `${Math.floor(Math.random() * 1000) + 500} nautical miles`,
      totalDuration: `${currentDay - 1} days`,
      timeAtSea: timeAtSea,
      timeOnLand: timeOnLand,
    },
    tourCategoryId: "general-cruise", // Default category, can be updated
    contactPersonnel: [
      {
        id: generateUniqueId(),
        name: contactName,
        role: contactRole,
        languages: [],
        experienceYears: 5 + Math.floor(Math.random() * 15),
        profileImage: "",
        contact: {
          contactEmail: contactEmail,
          contactNumber: contactPhone,
        },
      },
    ],
    tags: [],
  };

  return cruise;
}

// Function to create email from cruise title
function createEmailFromTitle(title) {
  // Handle undefined or null title
  if (!title || typeof title !== "string") {
    return "cruise@velarivoyages.com";
  }

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

for (const city of cityFiles) {
  const camelCaseCity = formatKebabToCamelCase(city);
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

    const role =
      personnelRoles[Math.floor(Math.random() * personnelRoles.length)];

    // Get region-specific languages for the personnel
    const country = cityCountryMap[city] || "";
    const languagesCount = Math.floor(Math.random() * 2) + 1; // 1-3 languages

    // Use the language utility function to get random languages for the country
    const personnelLanguages = getRandomLanguages(languagesCount, country);

    // Ensure we have languages (fallback to English if none found)
    const finalLanguages =
      personnelLanguages.length > 0
        ? personnelLanguages
        : [{ code: "en", name: "English" }];

    // Determine which vessels are available for this city
    // This requires reading the corresponding {city}-vessels.ts file
    // and extracting vessel IDs. For simplicity, this part is conceptual.
    // You would need to implement logic similar to listVesselsForCity
    // from the other script, or have a shared utility.
    let availableVesselIds = [];
    const vesselFilePath = path.join(
      __dirname,
      "..",
      "src",
      "lib",
      "constants",
      "cruises",
      "vessels", // Corrected path to vessels directory
      `${city}-vessels.ts`
    );

    if (fs.existsSync(vesselFilePath)) {
      try {
        const vesselFileContent = fs.readFileSync(vesselFilePath, "utf8");
        // Simplified regex to extract IDs - make this robust for production
        const idRegex = /id: "([^"]+)"/g;
        let match;
        while ((match = idRegex.exec(vesselFileContent)) !== null) {
          availableVesselIds.push(match[1]);
        }
      } catch (e) {
        console.warn(
          `Could not read or parse vessel file for ${city}: ${e.message}`
        );
      }
    }

    if (availableVesselIds.length === 0) {
      console.warn(
        `No vessels found for city ${city}. Skipping cruise generation for this city.`
      );
      // continue; // Skip to the next city if no vessels are available
    }

    for (let i = 0; i < cruisesToAdd; i++) {
      // Select a vessel for this cruise
      // If no vessels, this will be undefined, handle appropriately in generateCruiseData or skip
      const selectedVesselId =
        availableVesselIds.length > 0
          ? availableVesselIds[
              Math.floor(Math.random() * availableVesselIds.length)
            ]
          : `default-vessel-for-${city}`;

      const cruiseData = generateCruiseData(city, selectedVesselId); // Pass selectedVesselId

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
        parseInt(cruiseData.itinerary.totalDuration, 10),
        tags
      );

      // Generate contact email based on cruise title
      const contactEmail = createEmailFromTitle(cruiseData.title);

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
    id: "${generateUniqueId()}",
    basePrice: ${1000 + Math.floor(Math.random() * 9000)},
    departureLocation: ${JSON.stringify(cruiseData.departureLocation, null, 2)},
    arrivalLocation: ${JSON.stringify(cruiseData.arrivalLocation, null, 2)},
    isPopular: ${Math.random() > 0.7}, // Make fewer cruises "popular"
    hasPopularDestination: ${Math.random() > 0.5},
    category: "${selectedCategory}",
    itinerary: {
      route: ${JSON.stringify(cruiseData.itinerary.route, null, 2)},
      description: "${cruiseData.description}",
      distance: "${cruiseData.itinerary.distance}",
      totalDuration: "${cruiseData.itinerary.totalDuration}",
      timeAtSea: ${JSON.stringify(cruiseData.itinerary.timeAtSea, null, 2)},
      timeOnLand: ${JSON.stringify(cruiseData.itinerary.timeOnLand, null, 2)}
    },
    tourCategoryId: "${tourCategoryId}",
    contactPersonnel: [
      {
        id: "${generateUniqueId()}",
        name: "${getName()}",
        role: "${role}",
        languages: ${JSON.stringify(finalLanguages)},
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
    title: "${cruiseData.title}",
    description: "${cruiseData.description}",
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

    const fileContent = `// This file is auto-generated
    // Do not edit manually.
    // City: ${capitalize(city)}
    // Generated on: ${new Date().toISOString()}
  import { Cruise } from "@/lib/interfaces/services/cruises";

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

  console.log(`Total cities processed: ${cityFiles.length}`);
  console.log(`Rewritten ${rewrittenFiles} existing cruise files`);
  console.log(`Updated ${updatedFiles} existing cruise files`);
  console.log(`Created ${createdFiles} new cruise files`);
  console.log(`\nSummary:`);
}
console.log(`Total new cruises created: ${totalCruisesCreated}`);
