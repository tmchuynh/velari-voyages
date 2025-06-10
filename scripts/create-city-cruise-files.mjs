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
import { getCityFiles } from "./utils/file-utils.mjs";
import {
  cruiseAdjectives,
  cityDescriptors,
  regionDescriptors,
  cityCruiseDescriptors,
} from "./utils/description-utils.mjs";
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
      index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
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

// Function to generate unique IDs (stub implementation)
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Generate realistic cruise itinerary with sequential days

export const cruiseExperiences = [
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

function generateCruiseData(cityName, vesselId) {
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
  destinations.forEach((dest, _i) => {
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

  const cruiseTitle = generateEnticingCruiseTitle(cityName);

  // Generate more descriptive descriptions

  const cruiseDescription =
    cityCruiseDescriptors[
      Math.floor(Math.random() * cityCruiseDescriptors.length)
    ];

  // Generate contact information
  const contactName = `${feminineNames[Math.floor(Math.random() * feminineNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  const contactEmail = createEmailFromTitle(cruiseTitle); // Now uses the defined cruiseTitle
  const contactPhone = `+1-${Math.floor(Math.random() * 900) + 100}-${
    Math.floor(Math.random() * 900) + 100
  }-${Math.floor(Math.random() * 9000) + 1000}`;
  const contactRole =
    personnelRoles[Math.floor(Math.random() * personnelRoles.length)];

  // Create the cruise object
  const cruise = {
    id: generateUniqueId(),
    title: cruiseTitle, // Now this uses the defined cruiseTitle
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
        name: contactName,
        role: contactRole,
        languages: [],
        experienceYears: 5 + Math.floor(Math.random() * 15),
        profileImage: "",
        contact: {
          contactEmail: contactEmail, // This now uses the email derived from the defined cruiseTitle
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
      regionForLanguages
    );
    const languagesList = personnelLanguages.map((lang) => `"${lang.name}"`);

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
        parseInt(cruiseData.totalDuration, 10),
        tags
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
      2
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

    const fileContent = `// This file is auto-generated
    // Do not edit manually.
    // City: ${capitalizeWords(city)}
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
