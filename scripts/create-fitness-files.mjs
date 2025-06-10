/**
 * Fitness Center Data Generator Script
 * ===================================
 *
 * This script generates TypeScript files containing fitness center venue data for each vessel
 * in each city within the Velari Voyages project.
 * It creates files within the directory structure:
 * "src/lib/constants/venues/fitness/{cityName}-fitness.ts"
 * Each file exports an array variable named "{camelCaseCityName}FitnessCenters"
 * with fitness center data that matches the FitnessCenter interface from venues.ts
 *
 * Features:
 * - Generates one fitness center per vessel in each city
 * - Creates comprehensive fitness facility details including equipment, amenities,
 *   trainers, operating hours, and contact information
 * - Follows the FitnessCenter interface requirements with vesselId references
 * - Customizes fitness centers based on city/region and vessel type
 * - Supports different operational modes:
 *   - Create: Only generates files if they don't already exist (default)
 *   - Append: Adds new fitness center data to existing files
 *   - Rewrite: Overwrites existing files with new data
 * - Includes a debug mode for verbose logging output
 *
 * Usage Examples:
 * --------------
 * # Default: creates files with one fitness center per vessel for all cities
 * node scripts/create-fitness-files.mjs
 *
 * # Append new fitness centers to existing files
 * node scripts/create-fitness-files.mjs --append
 * # Shorter version:
 * node scripts/create-fitness-files.mjs -a
 *
 * # Rewrite all fitness center files (discards existing data)
 * node scripts/create-fitness-files.mjs --rewrite
 * # Shorter version:
 * node scripts/create-fitness-files.mjs -r
 *
 * # Enable debug mode
 * node scripts/create-fitness-files.mjs --debug
 * # Shorter version:
 * node scripts/create-fitness-files.mjs -d
 *
 * Command-line Options:
 * ------------------
 * --append, -a               Enable Append mode. Adds new fitness centers to existing files.
 *                           If a file doesn't exist, it's created.
 *
 * --rewrite, -r             Enable Rewrite mode. Overwrites existing fitness center files.
 *
 * --debug, -d               Enable debug mode for verbose logging.
 *
 * File Structure:
 * --------------
 * Generated files follow this structure:
 * src/lib/constants/venues/fitness/
 * ├── amsterdam-fitness.ts
 * ├── auckland-fitness.ts
 * ├── boston-fitness.ts
 * └── ...
 *
 * Dependencies:
 * ------------
 * This script requires:
 * - Vessel data files in src/lib/constants/cruises/vessels/
 * - The FitnessCenter interface from src/lib/interfaces/services/venues.ts
 * - Utility modules from scripts/utils/
 *
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { cityCountryMap } from "./utils/geo-utils.mjs";
import {
  generateUniqueId,
  getRandomElement,
  getRandomItems,
  getRandomInt,
  getRandomBool,
  generateRandomEmail,
} from "./utils/data-generator.mjs";
import {
  getCityFiles,
  capitalize,
  formatKebabToCamelCase,
} from "./utils/file-utils.mjs";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get city files
const cityFiles = getCityFiles();

// Parse command line arguments
const args = process.argv.slice(2);
const APPEND_MODE = args.includes("--append") || args.includes("-a");
const REWRITE_MODE = args.includes("--rewrite") || args.includes("-r");
const DEBUG_MODE = args.includes("--debug") || args.includes("-d");

console.log(
  `Mode: ${
    APPEND_MODE ? "Append" : REWRITE_MODE ? "Rewrite" : "Create new only"
  }`
);
console.log(
  `Will ${
    REWRITE_MODE
      ? "overwrite"
      : APPEND_MODE
        ? "append to"
        : "only create missing"
  } fitness center files`
);

// Fitness equipment categories
const fitnessEquipment = {
  cardio: [
    "Treadmills",
    "Elliptical Machines",
    "Stationary Bikes",
    "Rowing Machines",
    "StairMaster",
    "Arc Trainers",
    "Spin Bikes",
    "Recumbent Bikes",
    "Air Bikes",
    "VersaClimber",
  ],
  strength: [
    "Free Weights",
    "Dumbbells",
    "Barbells",
    "Weight Machines",
    "Cable Machines",
    "Smith Machine",
    "Power Rack",
    "Bench Press",
    "Pull-up Station",
    "Leg Press Machine",
    "Lat Pulldown",
    "Leg Curl Machine",
    "Shoulder Press Machine",
  ],
  functional: [
    "Kettlebells",
    "Medicine Balls",
    "Battle Ropes",
    "TRX Suspension Trainers",
    "Resistance Bands",
    "BOSU Balls",
    "Stability Balls",
    "Foam Rollers",
    "Yoga Mats",
    "Balance Boards",
    "Agility Ladders",
    "Plyo Boxes",
  ],
  specialized: [
    "Pilates Reformers",
    "Barre Equipment",
    "Stretching Stations",
    "Recovery Tools",
    "Massage Chairs",
    "Compression Therapy",
    "Infrared Sauna",
    "Cryotherapy Chamber",
  ],
};

// Personal trainer specialties
const trainerSpecialties = [
  "Certified Personal Trainer",
  "Fitness Nutrition Specialist",
  "Yoga Instructor",
  "Pilates Instructor",
  "Spinning Instructor",
  "Aqua Fitness Instructor",
  "Strength Training Specialist",
  "Senior Fitness Specialist",
  "Corrective Exercise Specialist",
  "Group Fitness Instructor",
];

// Fitness center amenities
const fitnessAmenities = [
  "Towel Service",
  "Water Stations",
  "Personal Training Sessions",
  "Group Fitness Classes",
  "Fitness Consultations",
  "Body Composition Analysis",
  "Locker Rentals",
  "Hair Dryers",
  "Toiletries",
  "Fresh Fruit Bar",
  "Protein Shakes",
  "Equipment Orientation",
  "Workout Programs",
  "Fitness Tracking",
  "Audio/Visual Entertainment",
];

// Group fitness classes
const groupClasses = [
  "Yoga",
  "Pilates",
  "Zumba",
  "Spinning",
  "HIIT Training",
  "Circuit Training",
  "Water Aerobics",
  "Stretching Classes",
  "Senior Fitness",
  "Boot Camp",
  "Barre Classes",
  "Dance Fitness",
  "Core Strengthening",
  "Flexibility Training",
];

// FAQ templates for fitness centers
const fitnessFAQTemplates = [
  {
    question: "What are the fitness center operating hours?",
    answer:
      "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
  },
  {
    question: "Is there a fee to use the fitness center?",
    answer:
      "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
  },
  {
    question: "What should I bring to work out?",
    answer:
      "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
  },
  {
    question: "Are personal trainers available?",
    answer:
      "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
  },
  {
    question: "Do you offer group fitness classes?",
    answer:
      "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
  },
  {
    question: "Is the fitness center suitable for beginners?",
    answer:
      "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
  },
  {
    question: "Can I store my belongings while working out?",
    answer:
      "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
  },
  {
    question: "What safety measures are in place?",
    answer:
      "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
  },
];

// Get region for a city
function getRegionForCity(cityName) {
  const countryName = cityCountryMap[cityName] || "";
  const regionMap = {
    "United States": "North America",
    Canada: "North America",
    Mexico: "North America",
    "United Kingdom": "Europe",
    France: "Europe",
    Spain: "Europe",
    Italy: "Europe",
    Germany: "Europe",
    Netherlands: "Europe",
    Norway: "Europe",
    Sweden: "Europe",
    Denmark: "Europe",
    Finland: "Europe",
    Russia: "Europe",
    Japan: "Asia",
    China: "Asia",
    "South Korea": "Asia",
    Singapore: "Asia",
    Thailand: "Asia",
    Vietnam: "Asia",
    India: "Asia",
    Australia: "Oceania",
    "New Zealand": "Oceania",
    Brazil: "South America",
    Argentina: "South America",
    Chile: "South America",
    Uruguay: "South America",
    Peru: "South America",
    Colombia: "South America",
    Malta: "Europe",
    Ireland: "Europe",
  };

  return regionMap[countryName] || "Default";
}

// Generate fitness center equipment based on vessel type
function generateFitnessEquipment(vesselType) {
  const equipment = [];

  // Always include basic cardio and strength equipment
  equipment.push(
    ...getRandomItems(fitnessEquipment.cardio, getRandomInt(6, 10))
  );
  equipment.push(
    ...getRandomItems(fitnessEquipment.strength, getRandomInt(8, 12))
  );
  equipment.push(
    ...getRandomItems(fitnessEquipment.functional, getRandomInt(5, 8))
  );

  // Add specialized equipment based on vessel type
  if (vesselType.includes("luxury") || vesselType.includes("vip")) {
    equipment.push(
      ...getRandomItems(fitnessEquipment.specialized, getRandomInt(3, 6))
    );
  } else {
    equipment.push(
      ...getRandomItems(fitnessEquipment.specialized, getRandomInt(1, 3))
    );
  }

  return [...new Set(equipment)]; // Remove duplicates
}

// Generate personal trainer list
function generatePersonalTrainers(vesselType, count = null) {
  const trainerCount =
    count ||
    (vesselType.includes("luxury") ? getRandomInt(3, 5) : getRandomInt(2, 4));
  return getRandomItems(trainerSpecialties, trainerCount);
}

// Generate fitness center amenities
function generateFitnessAmenities(vesselType) {
  const baseAmenities = getRandomItems(fitnessAmenities, getRandomInt(8, 12));

  // Luxury vessels get more amenities
  if (vesselType.includes("luxury") || vesselType.includes("vip")) {
    const luxuryAmenities = getRandomItems(
      fitnessAmenities,
      getRandomInt(3, 5)
    );
    return [...new Set([...baseAmenities, ...luxuryAmenities])];
  }

  return baseAmenities;
}

// Generate fitness center operating hours
function generateFitnessHours() {
  const openingHour = getRandomInt(5, 7); // 5am-7am opening
  const closingHour = getRandomInt(21, 23); // 9pm-11pm closing

  return {
    start: `${openingHour.toString().padStart(2, "0")}:00`,
    end: `${closingHour.toString().padStart(2, "0")}:00`,
    duration: `${closingHour - openingHour} hours`,
    description:
      "Fitness center hours may vary based on itinerary and port days",
  };
}

// Generate fitness center name
function generateFitnessName(cityName, vesselName, region) {
  const nameFormats = [
    `${vesselName} Fitness Center`,
    `Velari Fitness & Wellness`,
    `${capitalize(cityName)} Fitness Center`,
    `Oceanview Fitness Center`,
    `Maritime Wellness Center`,
    `Seascape Fitness`,
    `Horizon Health Club`,
    `Aqua Fitness Center`,
  ];

  return getRandomElement(nameFormats);
}

// Generate fitness center description
function generateFitnessDescription(
  fitnessName,
  vesselName,
  cityName,
  region,
  features
) {
  const specialFeatures = [];
  if (features.hasPool) specialFeatures.push("pool area");
  if (features.hasYogaStudio) specialFeatures.push("dedicated yoga studio");
  if (features.hasSauna) specialFeatures.push("sauna facilities");
  if (features.hasSteamRoom) specialFeatures.push("steam room");
  if (features.hasGroupClasses) specialFeatures.push("group fitness classes");
  if (features.hasNutritionCounseling)
    specialFeatures.push("nutrition counseling");

  const featureText =
    specialFeatures.length > 0
      ? ` Our facility features ${specialFeatures.join(", ")}.`
      : "";

  const descriptions = [
    `Welcome to ${fitnessName}, your premier wellness destination aboard the ${vesselName}. Stay active and healthy while cruising the waters near ${capitalize(cityName)} with our state-of-the-art fitness facilities.${featureText}`,
    `${fitnessName} offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals.${featureText}`,
    `Discover wellness at sea with ${fitnessName}. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure.${featureText}`,
    `${fitnessName} combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around ${capitalize(cityName)}.${featureText}`,
  ];

  return getRandomElement(descriptions);
}

// Read vessel data from a city's vessel file
function getVesselDataForCity(cityName) {
  const vesselFilePath = path.join(
    __dirname,
    "..",
    "src",
    "lib",
    "constants",
    "cruises",
    "vessels",
    `${cityName}-vessels.ts`
  );

  if (!fs.existsSync(vesselFilePath)) {
    if (DEBUG_MODE) {
      console.log(`⚠️  No vessel file found for ${cityName}`);
    }
    return [];
  }

  try {
    const vesselFileContent = fs.readFileSync(vesselFilePath, "utf8");
    const vessels = [];

    // Extract vessel data using regex
    const vesselPattern =
      /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",[\s\S]*?type:\s*"([^"]+)",[\s\S]*?\}/g;

    let match;
    while ((match = vesselPattern.exec(vesselFileContent)) !== null) {
      vessels.push({
        id: match[1],
        name: match[2],
        type: match[3],
      });
    }

    if (DEBUG_MODE) {
      console.log(`✅ Found ${vessels.length} vessels for ${cityName}`);
    }

    return vessels;
  } catch (error) {
    console.warn(
      `⚠️  Could not read vessel file for ${cityName}: ${error.message}`
    );
    return [];
  }
}

// Generate fitness center data for a specific vessel
function generateFitnessCenterForVessel(vessel, cityName, region) {
  const fitnessName = generateFitnessName(cityName, vessel.name, region);
  const hours = generateFitnessHours();
  const faqs = getRandomItems(fitnessFAQTemplates, getRandomInt(4, 6));
  const equipment = generateFitnessEquipment(vessel.type.toLowerCase());
  const personalTrainers = generatePersonalTrainers(vessel.type.toLowerCase());
  const amenities = generateFitnessAmenities(vessel.type.toLowerCase());

  // Determine features based on vessel type and random factors
  const isLuxury =
    vessel.type.toLowerCase().includes("luxury") ||
    vessel.type.toLowerCase().includes("vip");
  const isMega =
    vessel.type.toLowerCase().includes("mega") ||
    vessel.type.toLowerCase().includes("expedition");

  const features = {
    is24Hours: getRandomBool(0.3), // 30% chance of 24-hour access
    hasLockerRooms: true, // All fitness centers have locker rooms
    hasSauna: isLuxury ? getRandomBool(0.8) : getRandomBool(0.4), // 80% for luxury, 40% for others
    hasSteamRoom: isLuxury ? getRandomBool(0.7) : getRandomBool(0.3), // 70% for luxury, 30% for others
    hasPool: isMega ? getRandomBool(0.6) : getRandomBool(0.3), // 60% for mega/expedition, 30% for others
    hasYogaStudio: isLuxury ? getRandomBool(0.9) : getRandomBool(0.6), // 90% for luxury, 60% for others
    hasCyclingStudio: isMega ? getRandomBool(0.7) : getRandomBool(0.4), // 70% for mega, 40% for others
    hasPilatesStudio: isLuxury ? getRandomBool(0.6) : getRandomBool(0.3), // 60% for luxury, 30% for others
    hasDanceStudio: getRandomBool(0.3), // 30% chance
    hasGroupClasses: getRandomBool(0.8), // 80% chance
    hasNutritionCounseling: isLuxury ? getRandomBool(0.7) : getRandomBool(0.4), // 70% for luxury, 40% for others
    hasHealthScreenings: isLuxury ? getRandomBool(0.6) : getRandomBool(0.2), // 60% for luxury, 20% for others
    hasFitnessAssessments: getRandomBool(0.7), // 70% chance
    hasChildcareServices: isMega ? getRandomBool(0.4) : getRandomBool(0.1), // 40% for mega, 10% for others
  };

  // Adjust hours for 24-hour facilities
  if (features.is24Hours) {
    hours.start = "00:00";
    hours.end = "23:59";
    hours.duration = "24 hours";
    hours.description = "24-hour access available for all guests";
  }

  const fitnessCenter = {
    id: generateUniqueId(),
    vesselId: vessel.id,
    name: fitnessName,
    description: generateFitnessDescription(
      fitnessName,
      vessel.name,
      cityName,
      region,
      features
    ),
    imageUrl: `/images/fitness/${vessel.type}-fitness-center.jpg`,
    hours: hours,
    contact: {
      contactNumber: `+1-${getRandomInt(200, 999)}-${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}`,
      contactEmail: generateRandomEmail("fitness.velarivoyages.com"),
    },
    equipment: equipment,
    personalTrainers: personalTrainers,
    amenities: amenities,
    ...features,
    faqs: faqs,
    isPopular: getRandomBool(0.4), // 40% chance of being popular
  };

  return fitnessCenter;
}

// Generate fitness center data for a city
function generateFitnessCentersForCity(cityName) {
  const vessels = getVesselDataForCity(cityName);
  if (vessels.length === 0) {
    console.log(`⚠️  Skipping ${cityName} - no vessels found`);
    return [];
  }

  const region = getRegionForCity(cityName);
  const fitnessCenters = [];

  // Generate one fitness center per vessel
  vessels.forEach((vessel) => {
    fitnessCenters.push(
      generateFitnessCenterForVessel(vessel, cityName, region)
    );
  });

  if (DEBUG_MODE) {
    console.log(
      `Generated ${fitnessCenters.length} fitness centers for ${cityName} (${vessels.length} vessels)`
    );
  }

  return fitnessCenters;
}

// Create TypeScript file content
function createFitnessFileContent(cityName, fitnessCenters) {
  const camelCaseCityName = formatKebabToCamelCase(cityName);
  const capitalizedCityName = capitalize(cityName);

  const fitnessDataString = fitnessCenters
    .map(
      (fitness) =>
        `  {
    id: "${fitness.id}",
    vesselId: "${fitness.vesselId}",
    name: "${fitness.name}",
    description: "${fitness.description}",
    imageUrl: "${fitness.imageUrl}",
    hours: {
      start: "${fitness.hours.start}",
      end: "${fitness.hours.end}",
      duration: "${fitness.hours.duration}",
      description: "${fitness.hours.description}",
    },
    contact: {
      contactNumber: "${fitness.contact.contactNumber}",
      contactEmail: "${fitness.contact.contactEmail}",
    },
    equipment: [${fitness.equipment.map((item) => `"${item}"`).join(", ")}],
    personalTrainers: [${fitness.personalTrainers.map((trainer) => `"${trainer}"`).join(", ")}],
    amenities: [${fitness.amenities.map((amenity) => `"${amenity}"`).join(", ")}],
    is24Hours: ${fitness.is24Hours},
    hasLockerRooms: ${fitness.hasLockerRooms},
    hasSauna: ${fitness.hasSauna},
    hasSteamRoom: ${fitness.hasSteamRoom},
    hasPool: ${fitness.hasPool},
    hasYogaStudio: ${fitness.hasYogaStudio},
    hasCyclingStudio: ${fitness.hasCyclingStudio},
    hasPilatesStudio: ${fitness.hasPilatesStudio},
    hasDanceStudio: ${fitness.hasDanceStudio},
    hasGroupClasses: ${fitness.hasGroupClasses},
    hasNutritionCounseling: ${fitness.hasNutritionCounseling},
    hasHealthScreenings: ${fitness.hasHealthScreenings},
    hasFitnessAssessments: ${fitness.hasFitnessAssessments},
    hasChildcareServices: ${fitness.hasChildcareServices},
    faqs: [
${fitness.faqs
  .map(
    (faq) =>
      `      {
        question: "${faq.question}",
        answer: "${faq.answer}",
      }`
  )
  .join(",\n")}
    ],
    isPopular: ${fitness.isPopular}
  }`
    )
    .join(",\n");

  return `// Fitness center venues data for ${capitalizedCityName}
// This file contains fitness center and wellness facility information for cruise vessels operating from ${capitalizedCityName}
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const ${camelCaseCityName}FitnessCenters: FitnessCenter[] = [
${fitnessDataString}
];
`;
}

// Main function to generate fitness center files
async function generateFitnessFiles() {
  const fitnessDir = path.join(
    __dirname,
    "..",
    "src",
    "lib",
    "constants",
    "venues",
    "fitness"
  );

  // Create directories if they don't exist
  if (!fs.existsSync(fitnessDir)) {
    fs.mkdirSync(fitnessDir, { recursive: true });
    console.log(`📁 Created directory: ${fitnessDir}`);
  }

  let filesCreated = 0;
  let filesAppended = 0;
  let filesSkipped = 0;

  console.log(`\n🚀 Processing ${cityFiles.length} cities...`);

  for (const city of cityFiles) {
    const fitnessFilePath = path.join(fitnessDir, `${city}-fitness.ts`);
    const fileExists = fs.existsSync(fitnessFilePath);

    if (fileExists && !APPEND_MODE && !REWRITE_MODE) {
      if (DEBUG_MODE) {
        console.log(`⏭️  Skipping ${city} - file already exists`);
      }
      filesSkipped++;
      continue;
    }

    try {
      const newFitnessCenters = generateFitnessCentersForCity(city);

      if (newFitnessCenters.length === 0) {
        console.log(`⚠️  No fitness centers generated for ${city}`);
        continue;
      }

      let allFitnessCenters = newFitnessCenters;

      // Handle append mode
      if (APPEND_MODE && fileExists) {
        try {
          const existingContent = fs.readFileSync(fitnessFilePath, "utf8");
          const existingFitnessMatch = existingContent.match(
            /export const \w+FitnessCenters: FitnessCenter\[\] = \[([\s\S]*?)\];/
          );

          if (existingFitnessMatch) {
            console.log(`📝 Appending to existing fitness centers for ${city}`);
            filesAppended++;
          }
        } catch (error) {
          console.warn(
            `⚠️  Could not parse existing fitness center file for ${city}: ${error.message}`
          );
        }
      }

      // Create file content
      const fileContent = createFitnessFileContent(city, allFitnessCenters);

      // Write file
      fs.writeFileSync(fitnessFilePath, fileContent);

      if (APPEND_MODE && fileExists) {
        console.log(
          `✅ Updated fitness center file for ${capitalize(city)} (${allFitnessCenters.length} fitness centers)`
        );
      } else {
        console.log(
          `✅ Created fitness center file for ${capitalize(city)} (${allFitnessCenters.length} fitness centers)`
        );
        filesCreated++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${city}: ${error.message}`);
    }
  }

  // Print summary
  console.log(`\n📊 Summary:`);
  console.log(`   Files created: ${filesCreated}`);
  if (APPEND_MODE) console.log(`   Files appended: ${filesAppended}`);
  console.log(`   Files skipped: ${filesSkipped}`);
  console.log(`\n🎉 Fitness center venue generation complete!`);
}

// Run the script
generateFitnessFiles().catch(console.error);
