/**
 * City Vessel Generator Script
 * ============================
 *
 * This script generates vessel data for city files in the Velari Voyages project.
 * It creates or modifies files with the naming convention: "{city-name}-vessels.ts"
 * Each file exports an array variable named "{cityName}Vessels" with vessel data.
 *
 * Usage Examples:
 * --------------
 * node scripts/create-city-vessel-files.mjs                     - Default: adds 5 vessels per city only for new files
 * node scripts/create-city-vessel-files.mjs --append 3          - Appends 3 vessels to existing files
 * node scripts/create-city-vessel-files.mjs --rewrite           - Rewrites all files with 5 vessels each
 * node scripts/create-city-vessel-files.mjs --force-create      - Creates files even if they already exist
 *
 * Advanced Options:
 * ----------------
 * node scripts/create-city-vessel-files.mjs --city miami --append 3      - Append 3 vessels only to Miami
 * node scripts/create-city-vessel-files.mjs --city "new-york-city" --vessel-type "Luxury Cruise Ship" --append 2
 *                                                                         - Add 2 luxury ships to New York
 * node scripts/create-city-vessel-files.mjs --city barcelona --list      - List all vessels in Barcelona
 * node scripts/create-city-vessel-files.mjs --city venice --list --sort name    - List vessels sorted by name
 * node scripts/create-city-vessel-files.mjs --city venice --list --sort type    - List vessels sorted by type
 * node scripts/create-city-vessel-files.mjs --help              - Show help information
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  getCityFiles,
  formatKebebToTitleCase,
  formatTitleToKebabCase,
} from "./utils/file-utils.mjs";
import {
  cityCoordinates,
  cityCountryMap,
  cityToRegionMap,
} from "./utils/geo-utils.mjs";
import { countryNamePhrases } from "./utils/name-utils.mjs";
import { generateUniqueId } from "./utils/data-generator.mjs";
import { positiveAdjectives } from "./utils/description-utils.mjs";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command-line arguments
const args = process.argv.slice(2);
const VESSELS_PER_CITY = 5; // Default value
let vesselsToAppend = VESSELS_PER_CITY;
let forceRewrite = false;
let forceCreate = false;
let targetCity = null;
let listVessels = false;
let sortBy = "none";
let specificVesselType = null;
const APPEND_MODE = args.includes("--append") || args.includes("-a");

// Process command-line arguments
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--append" || args[i] === "-a") {
    const value = parseInt(args[i + 1]);
    if (!isNaN(value) && value > 0) {
      vesselsToAppend = value;
      i++; // Skip the next argument (the number)
    }
  } else if (args[i] === "--rewrite" || args[i] === "-r") {
    forceRewrite = true;
  } else if (args[i] === "--force-create" || args[i] === "-f") {
    forceCreate = true;
  } else if (args[i] === "--city" || args[i] === "-c") {
    if (args[i + 1] && !args[i + 1].startsWith("--")) {
      targetCity = args[i + 1].toLowerCase();
      i++; // Skip the next argument (city name)
    }
  } else if (args[i] === "--vessel-type" || args[i] === "-vt") {
    if (args[i + 1] && !args[i + 1].startsWith("--")) {
      specificVesselType = args[i + 1];
      i++; // Skip the next argument (vessel type)
    }
  } else if (args[i] === "--list" || args[i] === "-l") {
    listVessels = true;
  } else if (args[i] === "--sort") {
    if (args[i + 1] && (args[i + 1] === "name" || args[i + 1] === "type")) {
      sortBy = args[i + 1];
      i++; // Skip the next argument (sort option)
    }
  } else if (args[i] === "--help" || args[i] === "-h") {
    console.log(`
City Vessel Generator Script
============================

This script generates vessel data for city files in the Velari Voyages project.

Usage:
  node scripts/create-city-vessel-files.mjs [options]

Basic Options:
  --append, -a NUMBER        Append NUMBER of vessels to existing files
  --rewrite, -r              Rewrite all files, discarding existing vessels
  --force-create, -f         Create files even if they already exist (default: only create if missing)
  --help, -h                 Display this help message

Advanced Options:
  --city, -c NAME            Target a specific city (in kebab-case, e.g. "new-york-city")
  --vessel-type, -vt TYPE    Specify a vessel type to append (must be used with --append)
                             Valid types: "Mainstream Cruise Ship", "Mega Cruise Ship", "Luxury Cruise Ship",
                                          "Adventure Cruise Ship", "Expedition Cruise Ship", "Repositioning Cruise Ship",
                                          "Fjord Cruise Ship", "Glacier Cruise Ship", "Tropical Cruise Ship",
                                          "VIP Cruise Ship", "Theme Cruise Ship"
  --list, -l                 List vessels in a city (must be used with --city)
  --sort OPTION              Sort the list by "name" or "type" (must be used with --list)
  
Examples:
  node scripts/create-city-vessel-files.mjs                     - Default: adds 5 vessels per city only for new files
  node scripts/create-city-vessel-files.mjs --append 3          - Appends 3 vessels to existing files
  node scripts/create-city-vessel-files.mjs --city miami --append 3      - Append 3 vessels only to Miami
  node scripts/create-city-vessel-files.mjs --city "new-york-city" --vessel-type "Luxury Cruise Ship" --append 2
                                                                 - Add 2 luxury ships to New York
  node scripts/create-city-vessel-files.mjs --city barcelona --list      - List all vessels in Barcelona
  node scripts/create-city-vessel-files.mjs --city venice --list --sort name    - List vessels sorted by name
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
- ${targetCity ? `Targeting city: ${targetCity}` : "Processing all cities"}
- ${specificVesselType ? `Adding vessel type: ${specificVesselType}` : "Adding mixed vessel types"}
- ${
  listVessels
    ? `Listing vessels${sortBy !== "none" ? ` sorted by ${sortBy}` : ""}`
    : `${forceRewrite ? "Creating" : "Appending"} ${vesselsToAppend} vessels ${
        forceRewrite ? "per city" : "to each file"
      }`
}`);

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

// Base directory for vessel files
const vesselsDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "vessels",
);

// Ensure the vessels directory exists
if (!fs.existsSync(vesselsDir)) {
  fs.mkdirSync(vesselsDir, { recursive: true });
}

// Use the shared getCityFiles function
const cityFiles = getCityFiles();

// Filter cities if a specific city is targeted
const citiesToProcess = targetCity
  ? cityFiles.filter((city) => city === targetCity)
  : cityFiles;

if (targetCity && citiesToProcess.length === 0) {
  console.error(`Error: City "${targetCity}" not found in available cities.`);
  process.exit(1);
}

// Function to list and sort vessels for a city
function listVesselsForCity(cityName, sortOption = "none") {
  const camelCaseCity = kebabToCamelCase(cityName);
  const vesselFilePath = path.join(vesselsDir, `${cityName}-vessels.ts`);

  if (!fs.existsSync(vesselFilePath)) {
    console.log(`No vessel file exists for ${capitalizeWords(cityName)}.`);
    return;
  }

  try {
    const fileContent = fs.readFileSync(vesselFilePath, "utf8");
    const arrayMatch = fileContent.match(
      /export const \w+Vessels: Vessels\[\] = \[([\s\S]*?)\];/,
    );

    if (!arrayMatch || !arrayMatch[1]) {
      console.log(`No vessels found in ${capitalizeWords(cityName)}.`);
      return;
    }

    // Count objects by finding opening braces
    const objectMatches = arrayMatch[1].match(/\{\s*name:/g);
    if (!objectMatches) {
      console.log(`No vessels found in ${capitalizeWords(cityName)}.`);
      return;
    }

    // Extract all vessel objects by parsing the content
    const vessels = [];
    // Updated regex to include id
    const vesselPattern =
      /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",[\s\S]*?type:\s*"([^"]+)",[\s\S]*?capacity:\s*(\d+),[\s\S]*?yearBuilt:\s*(\d+)/g;

    let match;
    while ((match = vesselPattern.exec(arrayMatch[1])) !== null) {
      vessels.push({
        id: generateUniqueId(),
        name: match[2],
        type: match[3],
        capacity: parseInt(match[4]),
        yearBuilt: parseInt(match[5]),
      });
    }

    // Sort vessels based on the specified option
    if (sortOption === "name") {
      vessels.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "type") {
      vessels.sort((a, b) => a.type.localeCompare(b.type));
    }

    console.log(
      `\nVessels in ${capitalizeWords(cityName)} (${vessels.length} total):`,
    );
    console.log("=".repeat(50));
    vessels.forEach((vessel, index) => {
      console.log(`${index + 1}. ${vessel.name}`);
      console.log(`   Type: ${vessel.type}`);
      console.log(`   Capacity: ${vessel.capacity} passengers`);
      console.log(`   Year Built: ${vessel.yearBuilt}`);
      console.log("-".repeat(50));
    });

    return vessels;
  } catch (error) {
    console.error(`Error reading vessel file for ${cityName}:`, error);
    return [];
  }
}

// Generate vessel names
function generateVesselName(cityName, index) {
  const cityDisplayName = capitalizeWords(cityName);
  const countryName = cityCountryMap[cityName] || "";
  const phrasesMap = countryNamePhrases[countryName] || [];
  const randomPhrase =
    phrasesMap[Math.floor(Math.random() * phrasesMap.length)] || "";

  const prefixes = [
    "MS",
    "MV",
    "SS",
    "RMS",
    "SY",
    "MY",
    "RV",
    "TS",
    "PS",
    "HMS",
    "SV", // Sailing Vessel
    "CS", // Cruise Ship
    "FV", // Fishing Vessel (used for stylization)
    "NB", // Narrow Boat
    "LY", // Luxury Yacht
    "NX", // NextGen Cruise (futuristic branding)
  ];

  const vesselNames = [
    `${randomPhrase} Explorer`,
    `${cityDisplayName} Voyager`,
    `${randomPhrase} of the Deep`,
    `The ${randomPhrase} Mariner`,
    `${randomPhrase} Gale`,
    `${randomPhrase} Odyssey`,
    `The ${randomPhrase} Empress`,
    `The ${randomPhrase} Throne`,
    `${cityDisplayName} Legend`,
    `${randomPhrase} Crest`,
    `The ${randomPhrase} Tide`,
    `The ${randomPhrase} Oracle`,
    `${randomPhrase} of Shadows`,
    `${randomPhrase} Tide`,
    `The ${randomPhrase}`,
    `${randomPhrase} Serenity`,
    `${randomPhrase} Whisperer`,
    `The ${randomPhrase} Myth`,
    `The ${randomPhrase} Helm`,
    `Runeship ${countryName}`,
    `The ${randomPhrase} of Twilight`,
    `${randomPhrase} Jewel`,
    `${randomPhrase} Majesty`,
    `${cityDisplayName} Enchantment`,
    `${randomPhrase} Crest Voyager`,
    `${randomPhrase} Discovery`,
    `${randomPhrase} Horizon`,
    `${cityDisplayName} Splendor`,
    `${randomPhrase} Mirage`,
    `The ${randomPhrase} Tryst`,
    `${cityDisplayName} Sun`,
    `${randomPhrase} Pearl`,
    `${randomPhrase} Nova`,
    `${randomPhrase} Mariner`,
    `${cityDisplayName} Infinity`,
    `${cityDisplayName} Destiny`,
    `${randomPhrase} Symphony`,
    `The Arcane Wave`,
    `The Gilded Leviathan`,
    `${randomPhrase} Wake`,
    `The Elven Horizon`,
    `Celestial Voyager`,
    `${randomPhrase} Queen`,
    `${randomPhrase} Spirit`,
    `${randomPhrase} Griffin`,
  ];

  // For vessels beyond our pre-defined list, generate a numbered name
  if (index >= vesselNames.length) {
    return `${cityDisplayName} Voyager ${(index % vesselNames.length) + 1}`;
  }

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  return `${prefix} ${vesselNames[index]}`;
}

// Generate vessel descriptions
function generateVesselDescription(name, type, cityName) {
  const cityDisplayName = capitalizeWords(cityName);
  const regionName = cityToRegionMap[cityName] || "world";
  const adj =
    positiveAdjectives[Math.floor(Math.random() * positiveAdjectives.length)];

  const vesselDescriptions = [
    `The ${name} offers an unparalleled cruising experience from ${cityDisplayName}, combining luxury amenities with state-of-the-art navigation technology. This ${type.toLowerCase()} features spacious cabins, gourmet dining options, and entertainment venues that showcase the best of ${regionName} hospitality.`,

    `Setting sail from the beautiful port of ${cityDisplayName}, the ${name} is a floating paradise designed for the discerning traveler. This ${adj} ${type.toLowerCase()} boasts panoramic viewing decks, world-class cuisine, and personalized service that ensures an unforgettable journey.`,

    `The majestic ${name} represents the pinnacle of maritime engineering and hospitality. Based in ${cityDisplayName}, this exceptional ${type.toLowerCase()} features ${adj} interiors, cutting-edge facilities, and carefully curated experiences that celebrate the unique culture of the ${regionName} region.`,

    `Combining traditional maritime charm with modern amenities, the ${name} promises an extraordinary voyage from its home port of ${cityDisplayName}. This impressive ${type.toLowerCase()} offers spacious accommodations, diverse dining options, and engaging activities for travelers of all ages.`,

    `The ${name} stands as a testament to luxury and innovation on the high seas. Departing from ${cityDisplayName}, this sophisticated ${type.toLowerCase()} features immersive entertainment, wellness facilities, and exquisite cuisine prepared by internationally renowned chefs.`,

    `Experience the epitome of maritime excellence aboard the ${name}, a premier ${type.toLowerCase()} sailing from ${cityDisplayName}. With its elegant design, state-of-the-art technology, and exceptional service, every journey promises unforgettable moments and unparalleled comfort.`,

    `The magnificent ${name} offers a perfect blend of adventure and relaxation for travelers departing from ${cityDisplayName}. This outstanding ${type.toLowerCase()} features panoramic ocean views, specialized dining experiences, and enriching activities that connect guests with the wonders of the ${regionName} region.`,

    `Sailing from the picturesque port of ${cityDisplayName}, the ${name} represents a new era in cruise experiences. This remarkable ${type.toLowerCase()} combines innovative design with thoughtful amenities, creating an atmosphere of refined elegance and warm hospitality.`,

    `The ${name} invites travelers to explore the treasures of ${regionName} in unmatched comfort. This exceptional ${type.toLowerCase()}, based in ${cityDisplayName}, features curated excursions, immersive cultural programs, and luxurious accommodations that ensure an unforgettable journey.`,

    `With its distinctive profile and luxurious appointments, the ${name} stands as a jewel in the ${cityDisplayName} harbor. This prestigious ${type.toLowerCase()} offers travelers a perfect combination of adventure and relaxation, with expert-guided excursions, world-class entertainment, and sublime culinary experiences.`,
  ];

  return vesselDescriptions[
    Math.floor(Math.random() * vesselDescriptions.length)
  ];
}

// Generate vessel safety equipment
function generateSafetyEquipment() {
  const safetyEquipment = [
    "Advanced fire detection and suppression systems",
    "Marine evacuation systems (MES)",
    "Rescue boats and life rafts",
    "Automated external defibrillators (AEDs)",
    "Personal locator beacons",
    "Emergency position indicating radio beacons (EPIRBs)",
    "Comprehensive medical facilities",
    "Digital safety monitoring systems",
    "Tactical response equipment",
    "Water purification systems",
    "Hyperbaric treatment chambers",
    "Thermal imaging cameras",
    "Man overboard detection systems",
    "Emergency escape breathing devices",
    "Life jackets with integrated GPS",
    "Searchlights and rescue equipment",
    "Radar reflectors",
    "Weather monitoring stations",
    "Satellite emergency notification devices",
    "Survival craft VHF radios",
  ];

  // Select 3-7 items randomly
  const numItems = Math.floor(Math.random() * 5) + 3; // 3-7 items
  const selectedEquipment = [];

  for (let i = 0; i < numItems; i++) {
    const randomIndex = Math.floor(Math.random() * safetyEquipment.length);
    if (!selectedEquipment.includes(safetyEquipment[randomIndex])) {
      selectedEquipment.push(safetyEquipment[randomIndex]);
    }
  }

  return selectedEquipment;
}

// Generate navigation equipment
function generateNavigationEquipment() {
  const navigationEquipment = [
    "Integrated bridge systems",
    "Electronic chart display information systems (ECDIS)",
    "Radar and automatic radar plotting aids (ARPAs)",
    "Automatic identification systems (AIS)",
    "Global navigation satellite systems (GNSS)",
    "Echo sounders and sonar systems",
    "Gyrocompasses and magnetic compasses",
    "Voyage data recorders (VDRs)",
    "Long-range identification and tracking (LRIT)",
    "Weather routing systems",
    "Bridge alert management systems",
    "Infrared camera systems",
    "Dynamic positioning systems",
    "River radar systems",
    "Inland ECDIS",
    "Night vision systems",
    "Integrated navigation system displays",
    "Doppler speed logs",
    "Autopilot systems with track control",
    "Navigation data management systems",
  ];

  // Select 2-5 items randomly
  const numItems = Math.floor(Math.random() * 4) + 2; // 2-5 items
  const selectedEquipment = [];

  for (let i = 0; i < numItems; i++) {
    const randomIndex = Math.floor(Math.random() * navigationEquipment.length);
    if (!selectedEquipment.includes(navigationEquipment[randomIndex])) {
      selectedEquipment.push(navigationEquipment[randomIndex]);
    }
  }

  return selectedEquipment;
}

// Generate vessel data
function generateVesselData(cityName, index, forcedVesselType = null) {
  const cityDisplayName = capitalizeWords(cityName);
  const countryName = cityCountryMap[cityName] || "";
  const cityCoordinatesData = cityCoordinates[cityName] || {
    latitude: 0,
    longitude: 0,
  };

  // Determine vessel type based on region and randomization, or use forced type
  const vesselTypes = [
    "adults-only-ship",
    "boutique-cruise-ship",
    "catamaran",
    "chartered-vessel",
    "eco-friendly-hybrid-ship",
    "expedition-ship",
    "family-cruise-ship",
    "ice-class-ship",
    "luxury-cruise-ship",
    "mainstream-cruise-ship",
    "mega-yacht",
    "mid-size-cruise-ship",
    "ocean-liner",
    "party-cruise-ship",
    "polar-expedition-ship",
    "resort-style-ship",
    "river-cruise-ship",
    "short-hop-ferry",
    "small-ocean-ship",
    "superyacht",
    "ultra-luxury-cruise-ship",
    "zodiac-equipped-vessel",
  ];

  let type = forcedVesselType;

  // If no forced type, select one based on regional weights
  if (!type) {
    const region = cityToRegionMap[cityName] || "";
    let typeWeights = new Array(vesselTypes.length).fill(1); // Default equal weights

    // Adjust weights based on region
    if (region === "Caribbean" || region === "Asia Pacific") {
      // Boost Tropical, Mainstream, and Mega ships for warm regions
      typeWeights[0] = 2; // Mainstream
      typeWeights[1] = 2; // Mega
      typeWeights[8] = 3; // Tropical
    } else if (region === "Alaska" || region.includes("Northern")) {
      // Boost Expedition, Glacier ships for cold regions
      typeWeights[4] = 3; // Expedition
      typeWeights[7] = 3; // Glacier
    } else if (region === "Mediterranean") {
      // Boost Luxury, VIP ships for Mediterranean
      typeWeights[2] = 3; // Luxury
      typeWeights[9] = 2; // VIP
    } else if (region.includes("Coast")) {
      // Boost Theme, Mainstream for coastal regions
      typeWeights[0] = 2; // Mainstream
      typeWeights[10] = 2; // Theme
    }

    // Weighted random selection
    let totalWeight = typeWeights.reduce((sum, weight) => sum + weight, 0);
    let random = Math.random() * totalWeight;
    let selectedTypeIndex = 0;

    for (let i = 0; i < typeWeights.length; i++) {
      random -= typeWeights[i];
      if (random <= 0) {
        selectedTypeIndex = i;
        break;
      }
    }

    type = formatKebebToTitleCase(vesselTypes[selectedTypeIndex]);
  }

  // Validate the vessel type is in our allowed list
  if (!vesselTypes.includes(formatTitleToKebabCase(type))) {
    console.warn(
      `Warning: Invalid vessel type "${formatTitleToKebabCase(type)}" specified. Using default selection.`,
    );
    type = vesselTypes[Math.floor(Math.random() * vesselTypes.length)];
  }

  // Generate vessel name
  const name = generateVesselName(cityName, index);

  // Generate description
  const description = generateVesselDescription(name, type, cityName);

  // Generate capacity based on vessel type
  let capacity;
  switch (type) {
    case "Mega Cruise Ship":
      capacity = 2500 + Math.floor(Math.random() * 3000); // 2500-5500
      break;
    case "Mainstream Cruise Ship":
      capacity = 1000 + Math.floor(Math.random() * 2000); // 1000-3000
      break;
    case "Luxury Cruise Ship":
    case "VIP Cruise Ship":
      capacity = 250 + Math.floor(Math.random() * 750); // 250-1000
      break;
    case "Adventure Cruise Ship":
    case "Expedition Cruise Ship":
    case "Glacier Cruise Ship":
    case "Fjord Cruise Ship":
      capacity = 100 + Math.floor(Math.random() * 250); // 100-350
      break;
    default:
      capacity = 500 + Math.floor(Math.random() * 1500); // 500-2000
  }

  // Generate dimensions based on capacity
  const length = Math.floor(capacity * 0.2) + 100; // 100m to 1200m based on capacity
  const width = Math.floor(length * 0.15) + 10; // width is proportional to length

  // Generate speed
  const speed = 15 + Math.floor(Math.random() * 15); // 15-30 knots
  const topSpeed = Math.round(speed * (1 + (Math.random() * 0.1 + 0.1))); // 10-20% higher than speed

  // Generate build year
  const currentYear = new Date().getFullYear();
  const yearBuilt = currentYear - Math.floor(Math.random() * 20) - 1; // 1-21 years old

  // Generate specifications
  const engineTypes = [
    "Diesel-Electric Propulsion",
    "Hybrid Power System",
    "LNG-Powered Engines",
    "Azimuth Thrusters",
    "Solar-Assisted Electric",
    "Dual-Fuel Marine Engines",
    "Integrated Power Systems",
    "Gas Turbine Powerplant",
    "Podded Propulsion",
  ];

  const engineType =
    engineTypes[Math.floor(Math.random() * engineTypes.length)];

  const hullMaterials = [
    "Marine-Grade Steel",
    "Reinforced Aluminum",
    "Composite Materials",
    "Ice-Strengthened Steel",
    "High-Tensile Steel Alloy",
    "Hybrid Steel-Composite",
  ];

  const hullMaterial =
    hullMaterials[Math.floor(Math.random() * hullMaterials.length)];

  const propulsionTypes = [
    "Azipod Electric Propulsion",
    "Conventional Shaft Propellers",
    "Voith Schneider Propellers",
    "Water Jets",
    "Cycloidal Drive",
    "Z-Drive Propulsion",
    "Podded Propulsion Units",
    "Counter-Rotating Propellers",
  ];

  const propulsionType =
    propulsionTypes[Math.floor(Math.random() * propulsionTypes.length)];

  const classifications = [
    "Lloyd's Register Class 1",
    "DNV GL High Speed & Light Craft",
    "Bureau Veritas Star Class",
    "American Bureau of Shipping A1",
    "RINA Green Star Plus",
    "ClassNK NS* (Special Purpose Ship)",
    "Russian Maritime Register of Shipping KM",
    "China Classification Society B",
  ];

  const classification =
    classifications[Math.floor(Math.random() * classifications.length)];

  // Generate environmental features
  const environmentalFeatures = [
    "Advanced water treatment systems",
    "Exhaust gas cleaning systems",
    "Ballast water management technology",
    "Solar panel supplementation",
    "LED lighting throughout",
    "Energy-efficient appliances",
    "Optimized hull design for reduced fuel consumption",
    "Heat recovery systems",
    "Biodegradable hydraulic fluids",
    "Marine ecosystem monitoring equipment",
    "Noise reduction technology to minimize impact on marine life",
    "Shore power connectivity",
    "Food waste digesters",
    "Recyclable material management systems",
    "Dynamic routing to optimize fuel usage",
  ];

  // Select 2-5 environmental features
  const numEnvFeatures = Math.floor(Math.random() * 4) + 2; // 2-5 features
  const selectedEnvFeatures = [];
  for (let i = 0; i < numEnvFeatures; i++) {
    const randomIndex = Math.floor(
      Math.random() * environmentalFeatures.length,
    );
    if (!selectedEnvFeatures.includes(environmentalFeatures[randomIndex])) {
      selectedEnvFeatures.push(environmentalFeatures[randomIndex]);
    }
  }

  // Generate accessibility features
  const accessibilityFeatures = [
    "Wheelchair accessible cabins",
    "Braille signage throughout",
    "Hearing augmentation systems",
    "Accessible dining facilities",
    "Roll-in showers",
    "Accessible entertainment venues",
    "Service animal accommodations",
    "Elevator access to all public decks",
    "Accessible shore excursion options",
    "Visual alarm systems",
    "Tactile guidance systems",
    "Transfer chairs for pool access",
    "Height-adjustable furniture in select cabins",
    "Accessible medical facilities",
    "Assistive listening devices",
  ];

  // Select 2-4 accessibility features
  const numAccessFeatures = Math.floor(Math.random() * 3) + 2; // 2-4 features
  const selectedAccessFeatures = [];
  for (let i = 0; i < numAccessFeatures; i++) {
    const randomIndex = Math.floor(
      Math.random() * accessibilityFeatures.length,
    );
    if (!selectedAccessFeatures.includes(accessibilityFeatures[randomIndex])) {
      selectedAccessFeatures.push(accessibilityFeatures[randomIndex]);
    }
  }

  // Calculate fuel and water capacity based on vessel size
  const fuelCapacity = Math.floor((length * width * 0.5) / 10) * 10; // Rough calculation based on size
  const waterCapacity = Math.floor(capacity * 0.3 * 1000); // 300L per person

  // Generate entertainment equipment
  const entertainmentEquipment = [
    "Theater with Broadway-style productions",
    "Multiple swimming pools and water features",
    "Full-service spa and fitness center",
    "Casino with table games and slot machines",
    "Virtual reality gaming center",
    "Climbing walls and sports courts",
    "Cinema with latest releases",
    "Art gallery and auction facilities",
    "Dance clubs and live music venues",
    "Culinary demonstration kitchens",
    "Multi-purpose event spaces",
    "Immersive simulation experiences",
    "Children's entertainment areas",
    "Observation lounges with panoramic views",
    "Library and educational facilities",
  ];

  // Select 2-5 entertainment features
  const numEntFeatures = Math.floor(Math.random() * 4) + 2; // 2-5 features
  const selectedEntFeatures = [];
  for (let i = 0; i < numEntFeatures; i++) {
    const randomIndex = Math.floor(
      Math.random() * entertainmentEquipment.length,
    );
    if (!selectedEntFeatures.includes(entertainmentEquipment[randomIndex])) {
      selectedEntFeatures.push(entertainmentEquipment[randomIndex]);
    }
  }

  // Generate communication equipment
  const communicationEquipment = [
    "Satellite communication systems",
    "Maritime VHF radio systems",
    "Global Maritime Distress Safety System (GMDSS)",
    "Broadband internet throughout",
    "Digital selective calling equipment",
    "Internal crew communication network",
    "Public address systems",
    "Marine radio telephony",
    "Emergency position-indicating radio beacons",
    "Ship-to-shore communication links",
  ];

  // Select 2-3 communication systems
  const numCommFeatures = Math.floor(Math.random() * 2) + 2; // 2-3 features
  const selectedCommFeatures = [];
  for (let i = 0; i < numCommFeatures; i++) {
    const randomIndex = Math.floor(
      Math.random() * communicationEquipment.length,
    );
    if (!selectedCommFeatures.includes(communicationEquipment[randomIndex])) {
      selectedCommFeatures.push(communicationEquipment[randomIndex]);
    }
  }

  // Set luxury and pet-friendly flags based on vessel type
  const isLuxuryVessel =
    type === "Luxury Cruise Ship" ||
    type === "VIP Cruise Ship" ||
    Math.random() > 0.8; // 20% chance for other ship types

  const isPetFriendly = Math.random() > 0.7; // 30% chance

  // Compile the vessel data
  return {
    name,
    description,
    type: `${formatTitleToKebabCase(type)}`,
    capacity,
    length,
    width,
    speed,
    topSpeed,
    yearBuilt,
    homePort: {
      city: cityDisplayName,
      country: countryName,
      coordinates: cityCoordinatesData,
    },
    specifications: {
      engineType,
      fuelCapacity,
      waterCapacity,
      propulsionType,
      hullMaterial,
      classification,
      safetyEquipment: generateSafetyEquipment(),
      navigationEquipment: generateNavigationEquipment(),
      communicationEquipment: selectedCommFeatures,
      entertainmentEquipment: selectedEntFeatures,
      accessibilityFeatures: selectedAccessFeatures,
      environmentalFeatures: selectedEnvFeatures,
    },
    isLuxuryVessel,
    isPetFriendly,
  };
}

// Handle listing vessels mode if requested
if (listVessels && targetCity) {
  listVesselsForCity(targetCity, sortBy);
  process.exit(0);
}

// Create files for each city
let createdFiles = 0;
let updatedFiles = 0;
let rewrittenFiles = 0;
let totalVesselsCreated = 0;

for (const city of citiesToProcess) {
  const camelCaseCity = kebabToCamelCase(city);
  const vesselFilePath = path.join(vesselsDir, `${city}-vessels.ts`);
  let existingVessels = [];
  let vesselsToAdd = vesselsToAppend;
  let fileAction = "Created";

  try {
    // Check if file exists and we should skip it
    if (
      fs.existsSync(vesselFilePath) &&
      !forceRewrite &&
      !forceCreate &&
      !APPEND_MODE
    ) {
      console.log(`Skipping ${vesselFilePath}: File already exists`);
      continue; // Skip to next city
    }

    // Check if file already exists and we're not forcing a rewrite
    if (fs.existsSync(vesselFilePath) && !forceRewrite) {
      // Read existing file content
      const existingContent = fs.readFileSync(vesselFilePath, "utf8");

      // Extract the existing array
      const arrayMatch = existingContent.match(
        /export const \w+Vessels: Vessels\[\] = \[([\s\S]*?)\];/,
      );
      if (arrayMatch && arrayMatch[1]) {
        try {
          // Count number of objects by counting opening braces
          const objectMatches = arrayMatch[1].match(/\{/g);
          if (objectMatches) {
            const existingObjectCount = objectMatches.length;
            console.log(
              `Found ${existingObjectCount} existing vessels in ${city}-vessels.ts`,
            );

            // Keep the existing content untouched
            existingVessels = arrayMatch[1].trim();
            fileAction = "Updated";
            updatedFiles++;
          }
        } catch (parseError) {
          console.error(
            `Error parsing existing vessels in ${city}-vessels.ts:`,
            parseError,
          );
        }
      }
    } else if (fs.existsSync(vesselFilePath) && forceRewrite) {
      // When forcing rewrite, we're technically rewriting the file
      fileAction = "Rewritten";
      rewrittenFiles++;
    } else {
      createdFiles++;
    }

    // Generate multiple vessel objects
    const vesselObjects = [];

    for (let i = 0; i < vesselsToAdd; i++) {
      // Generate vessel data with optional specific type
      const vesselData = generateVesselData(city, i, specificVesselType);

      // Generate a vessel object
      vesselObjects.push(`  {
    id: "${formatTitleToKebabCase(vesselData.name)}",
    name: "${vesselData.name}",
    description: "${vesselData.description}",
    type: "${vesselData.type}",
    capacity: ${vesselData.capacity},
    length: ${vesselData.length},
    width: ${vesselData.width},
    speed: ${vesselData.speed},
    topSpeed: ${vesselData.topSpeed}, 
    yearBuilt: ${vesselData.yearBuilt},
    homePort: ${JSON.stringify(vesselData.homePort)},
    specifications: {
      engineType: "${vesselData.specifications.engineType}",
      fuelCapacity: ${vesselData.specifications.fuelCapacity},
      waterCapacity: ${vesselData.specifications.waterCapacity},
      propulsionType: "${vesselData.specifications.propulsionType}",
      hullMaterial: "${vesselData.specifications.hullMaterial}",
      classification: "${vesselData.specifications.classification}",
      safetyEquipment: ${JSON.stringify(vesselData.specifications.safetyEquipment)},
      navigationEquipment: ${JSON.stringify(vesselData.specifications.navigationEquipment)},
      communicationEquipment: ${JSON.stringify(vesselData.specifications.communicationEquipment)},
      entertainmentEquipment: ${JSON.stringify(vesselData.specifications.entertainmentEquipment)},
      accessibilityFeatures: ${JSON.stringify(vesselData.specifications.accessibilityFeatures)},
      environmentalFeatures: ${JSON.stringify(vesselData.specifications.environmentalFeatures)}
    },
    isLuxuryVessel: ${vesselData.isLuxuryVessel},
    isPetFriendly: ${vesselData.isPetFriendly},
    imageUrl: "/images/vessels/default-vessel.jpg"
  }`);
    }

    // Create file content, combining existing and new vessels if applicable
    let combinedVessels;
    if (existingVessels.length > 0 && !forceRewrite) {
      // Clean up existing vessels - remove trailing comma if present
      const trimmedExistingVessels = existingVessels
        .trimEnd()
        .replace(/,\s*$/, "");

      // Append new vessels to existing ones with proper comma separation
      combinedVessels =
        trimmedExistingVessels + ",\n" + vesselObjects.join(",\n");
    } else {
      // Just use the new vessels (either new file or forced rewrite)
      combinedVessels = vesselObjects.join(",\n");
    }

    const fileContent = `// This file is auto-generated
    // Do not edit manually.
    // City: ${capitalizeWords(city)}
    // Generated on: ${new Date().toISOString()}
    
    import { Vessels } from "@/lib/interfaces/services/cruises";

export const ${camelCaseCity}Vessels: Vessels[] = [
${combinedVessels}
];
`;

    // Write the file
    fs.writeFileSync(vesselFilePath, fileContent);
    totalVesselsCreated += vesselObjects.length;
    console.log(
      `${fileAction} file: ${vesselFilePath} with ${vesselObjects.length} new vessels`,
    );
  } catch (error) {
    console.error(`Error processing vessel file for ${city}:`, error);
  }
}

// Print summary
if (listVessels) {
  console.log("Listing mode - no files modified");
} else {
  console.log(`\nSummary:`);
  console.log(`Total cities processed: ${citiesToProcess.length}`);
  console.log(`Rewritten ${rewrittenFiles} existing vessel files`);
  console.log(`Updated ${updatedFiles} existing vessel files`);
  console.log(`Created ${createdFiles} new vessel files`);
  console.log(`Total new vessels created: ${totalVesselsCreated}`);

  if (targetCity) {
    console.log(`\nTargeted city: ${capitalizeWords(targetCity)}`);
  }

  if (specificVesselType) {
    console.log(`Vessel type added: ${specificVesselType}`);
  }
}
