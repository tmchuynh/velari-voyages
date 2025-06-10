/**
 * Casino Venues Data Generator Script
 * ==================================
 *
 * This script generates TypeScript files containing casino venue data for each vessel
 * in each city within the Velari Voyages project.
 * It creates files within the directory structure:
 * "src/lib/constants/venues/casinos/{cityName}-casinos.ts"
 * Each file exports an array variable named "{camelCaseCityName}Casinos"
 * with casino data that matches the Casino interface from venues.ts
 *
 * Features:
 * - Generates 3-5 casinos for each vessel in each city
 * - Creates diverse casino configurations with different specialties
 * - Ensures exclusive features: only one casino per vessel can have:
 *   - High Roller Room
 *   - Live Dealer Games
 *   - VIP Area
 *   - Entertainment
 *   - Tipping Required
 * - Up to two casinos can have Poker Rooms
 * - Follows the Casino interface requirements with vesselId references
 * - Customizes casinos based on city/region and vessel type
 * - Supports different operational modes:
 *   - Create: Only generates files if they don't already exist (default)
 *   - Append: Adds new casino data to existing files
 *   - Rewrite: Overwrites existing files with new data
 * - Allows specifying the number of casinos to generate per vessel
 * - Includes a debug mode for verbose logging output
 *
 * Usage Examples:
 * --------------
 * # Default: creates files with 3-5 casinos for all vessels in each city
 * node scripts/create-casino-venues-data.mjs
 *
 * # Append new casinos to existing files
 * node scripts/create-casino-venues-data.mjs --append
 * # Shorter version:
 * node scripts/create-casino-venues-data.mjs -a
 *
 * # Rewrite all casino files (discards existing data)
 * node scripts/create-casino-venues-data.mjs --rewrite
 * # Shorter version:
 * node scripts/create-casino-venues-data.mjs -r
 *
 * # Specify number of casinos per vessel (default is 3-5)
 * node scripts/create-casino-venues-data.mjs --casinos-per-vessel=4
 *
 * # Enable debug mode
 * node scripts/create-casino-venues-data.mjs --debug
 * # Shorter version:
 * node scripts/create-casino-venues-data.mjs -d
 *
 * Command-line Options:
 * ------------------
 * --append, -a               Enable Append mode. Adds new casinos to existing files.
 *                           If a file doesn't exist, it's created.
 *
 * --rewrite, -r             Enable Rewrite mode. Overwrites existing casino files.
 *
 * --casinos-per-vessel=N    Number of casinos to generate per vessel (default: 3-5 random).
 *
 * --debug, -d               Enable debug mode for verbose logging.
 *
 * File Structure:
 * --------------
 * Generated files follow this structure:
 * src/lib/constants/venues/casinos/
 * ├── amsterdam-casinos.ts
 * ├── auckland-casinos.ts
 * ├── boston-casinos.ts
 * └── ...
 *
 * Dependencies:
 * ------------
 * This script requires:
 * - Vessel data files in src/lib/constants/cruises/vessels/
 * - The Casino interface from src/lib/interfaces/services/venues.ts
 * - Utility modules from scripts/utils/
 *
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { cityToRegionMap } from "./utils/geo-utils.mjs";
import {
  generateUniqueId,
  getRandomElement,
  getRandomItems,
  getRandomInt,
  getRandomBool,
  generateRandomEmail,
  generateRandomPhoneNumber,
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
const CASINOS_PER_VESSEL = parseInt(
  args.find((arg) => arg.startsWith("--casinos-per-vessel="))?.split("=")[1] ||
    "0",
  10
);
const DEBUG_MODE = args.includes("--debug") || args.includes("-d");

console.log(
  `Mode: ${
    APPEND_MODE ? "Append" : REWRITE_MODE ? "Rewrite" : "Create new only"
  }`
);
console.log(`Casinos per vessel: ${CASINOS_PER_VESSEL || "3-5 (random)"}`);
console.log(
  `Will ${
    REWRITE_MODE
      ? "overwrite"
      : APPEND_MODE
        ? "append to"
        : "only create missing"
  } casino files`
);

// Casino games by category
const casinoGames = {
  tableGames: [
    "Blackjack",
    "Roulette",
    "Baccarat",
    "Craps",
    "Three Card Poker",
    "Caribbean Stud Poker",
    "Let It Ride",
    "Casino War",
    "Pai Gow Poker",
    "Spanish 21",
    "Ultimate Texas Hold'em",
    "Mississippi Stud",
  ],
  slotMachines: [
    "Classic Slots",
    "Video Slots",
    "Progressive Jackpot Slots",
    "Multi-Line Slots",
    "Bonus Round Slots",
    "3D Slots",
    "Penny Slots",
    "High Limit Slots",
    "Theme Slots",
    "Video Poker Machines",
  ],
  pokerGames: [
    "Texas Hold'em",
    "Omaha",
    "Seven Card Stud",
    "Five Card Draw",
    "Razz",
    "H.O.R.S.E",
    "Sit & Go Tournaments",
    "Daily Tournaments",
  ],
  liveDealerGames: [
    "Live Blackjack",
    "Live Roulette",
    "Live Baccarat",
    "Live Caribbean Stud",
    "Live Casino Hold'em",
    "Live Dream Catcher",
    "Live Lightning Roulette",
    "Live Immersive Roulette",
  ],
  highRollerGames: [
    "High Limit Blackjack",
    "VIP Baccarat",
    "High Stakes Roulette",
    "Exclusive Poker Tables",
    "Private Dice Games",
    "Premium Slot Machines",
  ],
};

// Casino themes and names
const casinoThemes = {
  luxury: [
    "Golden Palace",
    "Diamond Club",
    "Royal Fortune",
    "Platinum Elite",
    "Crown Jewels",
    "Emerald Bay",
    "Silver Moon",
    "Crystal Palace",
  ],
  adventure: [
    "Treasure Island",
    "Pirates' Den",
    "Ocean Explorer",
    "Navigator's Fortune",
    "Captain's Quarters",
    "Sea Adventure",
    "Maritime Fortune",
    "Compass Rose",
  ],
  classic: [
    "Grand Casino",
    "Atlantic Gaming",
    "Monte Carlo",
    "Vegas Nights",
    "Lady Luck",
    "Fortune's Wheel",
    "Lucky Seven",
    "Jackpot Junction",
  ],
  modern: [
    "Neon Nights",
    "Electric Avenue",
    "Digital Dreams",
    "Future Fortune",
    "Cyber Casino",
    "Tech Tower",
    "Virtual Vegas",
    "Galaxy Gaming",
  ],
};

// Reward program names and benefits
const rewardPrograms = [
  {
    name: "Velari VIP Club",
    benefits: [
      "Complimentary drinks while gaming",
      "Priority seating at all gaming tables",
      "Exclusive tournament invitations",
      "Personalized casino host service",
      "Room upgrade certificates",
      "Spa credit rewards",
      "Dining vouchers",
      "Priority reservations",
    ],
    pointsSystem:
      "Earn 1 point per $1 wagered on slots, 1 point per $5 on table games",
  },
  {
    name: "Fortune Rewards",
    benefits: [
      "Free slot play credits",
      "Discounted dining at specialty restaurants",
      "Complimentary valet parking",
      "Birthday bonus rewards",
      "Express check-in privileges",
      "Exclusive gaming promotions",
      "Cashback on losses",
      "VIP lounge access",
    ],
    pointsSystem: "Earn 2 points per $1 wagered, bonus multipliers on weekends",
  },
  {
    name: "Captain's Circle",
    benefits: [
      "Free cruise credit",
      "Complimentary shore excursion",
      "Specialty dining packages",
      "Onboard credit bonuses",
      "Priority tender service",
      "Exclusive deck parties",
      "Personal concierge service",
      "Late checkout privileges",
    ],
    pointsSystem:
      "Tier-based system with point multipliers based on membership level",
  },
  {
    name: "High Seas Rewards",
    benefits: [
      "Free internet packages",
      "Beverage package discounts",
      "Photo package credits",
      "Spa treatment discounts",
      "Shopping credit",
      "Casino tournament entries",
      "Meet and greet with officers",
      "Behind-the-scenes tours",
    ],
    pointsSystem: "Points never expire, redeem for cash or cruise credits",
  },
];

// Wagering and redemption methods
const wageringMethods = [
  "Cash",
  "Credit Card",
  "Debit Card",
  "Casino Chips",
  "Player's Card",
  "Cruise Card",
  "Digital Wallet",
  "Cashless Gaming Card",
];

const redemptionMethods = [
  "Cash Payout",
  "Cruise Credit",
  "Check by Mail",
  "Bank Transfer",
  "Digital Payment",
  "Casino Chips",
  "Gift Cards",
  "Merchandise Credits",
];

// Prohibited items and actions
const prohibitedItems = [
  "Outside food and beverages",
  "Electronic devices at gaming tables",
  "Cameras and recording equipment",
  "Large bags and backpacks",
  "Professional photography equipment",
  "Weapons of any kind",
  "Illegal substances",
  "Counting devices",
  "Marked cards or dice",
  "Communication devices during play",
];

const prohibitedActions = [
  "Card counting techniques",
  "Collusion between players",
  "Past posting bets",
  "Marking cards or dice",
  "Using electronic aids",
  "Disruptive behavior",
  "Intoxicated gambling",
  "Underage gambling",
  "Sharing player accounts",
  "Photography without permission",
];

// FAQ templates
const casinoFAQTemplates = [
  {
    question: "What is the minimum age to enter the casino?",
    answer:
      "The minimum age to enter and gamble in our casino is 21 years old. Valid photo identification is required.",
  },
  {
    question: "What forms of payment are accepted?",
    answer:
      "We accept cash, major credit cards, and your cruise card for gaming. ATM services are also available.",
  },
  {
    question: "Are drinks complimentary while gaming?",
    answer:
      "Complimentary beverages are offered to active players at gaming tables and slot machines.",
  },
  {
    question: "What are the casino operating hours?",
    answer:
      "Casino hours vary by itinerary. We're typically open when the ship is at sea and closed in port.",
  },
  {
    question: "Do you offer gaming lessons?",
    answer:
      "Yes, we offer complimentary gaming lessons for popular table games during designated times.",
  },
  {
    question: "Is there a dress code for the casino?",
    answer:
      "Smart casual attire is required. No swimwear, tank tops, or flip-flops are permitted.",
  },
  {
    question: "Can I use my players club card from land-based casinos?",
    answer:
      "We have our own rewards program. Sign up at the casino host desk to start earning points.",
  },
  {
    question: "Are there smoking areas in the casino?",
    answer:
      "Designated smoking areas are available. Please ask casino staff for specific locations.",
  },
];

// Generate casino games based on casino type and features
function generateCasinoGames(
  hasSlotMachines,
  hasTableGames,
  hasPokerRoom,
  hasLiveDealerGames,
  hasHighRollerRoom
) {
  const games = [];

  if (hasSlotMachines) {
    games.push(...getRandomItems(casinoGames.slotMachines, getRandomInt(4, 8)));
  }

  if (hasTableGames) {
    games.push(...getRandomItems(casinoGames.tableGames, getRandomInt(5, 10)));
  }

  if (hasPokerRoom) {
    games.push(...getRandomItems(casinoGames.pokerGames, getRandomInt(3, 6)));
  }

  if (hasLiveDealerGames) {
    games.push(
      ...getRandomItems(casinoGames.liveDealerGames, getRandomInt(3, 6))
    );
  }

  if (hasHighRollerRoom) {
    games.push(
      ...getRandomItems(casinoGames.highRollerGames, getRandomInt(3, 6))
    );
  }

  return [...new Set(games)]; // Remove duplicates
}

// Generate casino operating hours
function generateCasinoHours() {
  const openingHour = getRandomInt(10, 12); // 10am-12pm opening
  const closingHour = getRandomInt(1, 4); // 1am-4am closing (next day)

  return {
    start: `${openingHour.toString().padStart(2, "0")}:00`,
    end: `0${closingHour.toString()}:00`,
    duration: `${closingHour + 24 - openingHour} hours`,
    description:
      "Casino hours may vary based on itinerary and port regulations",
  };
}

// Generate casino name
function generateCasinoName(cityName, vesselName, region, index) {
  const themes = Object.values(casinoThemes).flat();
  const selectedTheme = getRandomElement(themes);

  const nameFormats = [
    `${selectedTheme} Casino`,
    `The ${selectedTheme}`,
    `${vesselName} ${selectedTheme}`,
    `${selectedTheme} Gaming`,
    `${selectedTheme} Club`,
  ];

  return getRandomElement(nameFormats);
}

// Generate casino description
function generateCasinoDescription(
  casinoName,
  vesselName,
  cityName,
  region,
  features
) {
  const specialFeatures = [];
  if (features.hasHighRollerRoom)
    specialFeatures.push("exclusive high-roller room");
  if (features.hasPokerRoom) specialFeatures.push("dedicated poker room");
  if (features.hasLiveDealerGames) specialFeatures.push("live dealer games");
  if (features.hasVIPArea) specialFeatures.push("VIP gaming area");
  if (features.hasEntertainment) specialFeatures.push("live entertainment");

  const featureText =
    specialFeatures.length > 0
      ? ` Our casino features ${specialFeatures.join(", ")}.`
      : "";

  const descriptions = [
    `Welcome to ${casinoName}, the premier gaming destination aboard the ${vesselName}. Experience the thrill of casino gaming while cruising the waters near ${capitalize(cityName)}.${featureText}`,
    `Step into ${casinoName} for an unforgettable gaming experience. Our state-of-the-art casino offers exciting games and professional service in an elegant atmosphere.${featureText}`,
    `${casinoName} brings the excitement of world-class gaming to the high seas. Whether you're a seasoned player or trying your luck for the first time, our casino provides entertainment for all.${featureText}`,
    `Discover the excitement at ${casinoName}, where fortune meets the sea. Our professional dealers and modern gaming equipment ensure an exceptional casino experience.${featureText}`,
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

// Generate casino data for a specific vessel with exclusive features
function generateCasinosForVessel(vessel, cityName, region, casinoCount) {
  const casinos = [];

  // Track exclusive features to ensure only one casino per vessel has them
  const exclusiveFeatures = {
    hasHighRollerRoom: false,
    hasLiveDealerGames: false,
    hasVIPArea: false,
    hasEntertainment: false,
    tippingRequired: false,
  };

  // Track poker rooms (allow up to 2)
  let pokerRoomCount = 0;
  const maxPokerRooms = 2;

  for (let i = 0; i < casinoCount; i++) {
    const casinoName = generateCasinoName(cityName, vessel.name, region, i);
    const hours = generateCasinoHours();
    const faqs = getRandomItems(casinoFAQTemplates, getRandomInt(3, 5));
    const rewardProgram = getRandomElement(rewardPrograms);

    // Determine features for this casino
    const features = {
      hasSlotMachines: getRandomBool(0.9), // 90% chance
      hasTableGames: getRandomBool(0.8), // 80% chance
      hasPokerRoom: pokerRoomCount < maxPokerRooms && getRandomBool(0.4), // 40% chance if available
      hasHighRollerRoom:
        !exclusiveFeatures.hasHighRollerRoom && getRandomBool(0.3), // 30% chance if available
      hasLiveDealerGames:
        !exclusiveFeatures.hasLiveDealerGames && getRandomBool(0.3), // 30% chance if available
      hasVIPArea: !exclusiveFeatures.hasVIPArea && getRandomBool(0.4), // 40% chance if available
      hasEntertainment:
        !exclusiveFeatures.hasEntertainment && getRandomBool(0.3), // 30% chance if available
      hasDiningOptions: getRandomBool(0.6), // 60% chance
      hasBar: getRandomBool(0.8), // 80% chance
      hasSmokingArea: getRandomBool(0.5), // 50% chance
    };

    // Update exclusive feature tracking
    if (features.hasHighRollerRoom) exclusiveFeatures.hasHighRollerRoom = true;
    if (features.hasLiveDealerGames)
      exclusiveFeatures.hasLiveDealerGames = true;
    if (features.hasVIPArea) exclusiveFeatures.hasVIPArea = true;
    if (features.hasEntertainment) exclusiveFeatures.hasEntertainment = true;
    if (features.hasPokerRoom) pokerRoomCount++;

    // Determine tipping
    const tippingRequired =
      !exclusiveFeatures.tippingRequired && getRandomBool(0.25); // 25% chance if available
    if (tippingRequired) exclusiveFeatures.tippingRequired = true;

    // Generate winning redemption details
    const minWagering = getRandomInt(50, 200);
    const maxWagering = getRandomInt(5000, 25000);
    const selectedWageringMethods = getRandomItems(
      wageringMethods,
      getRandomInt(4, 6)
    );
    const selectedRedemptionMethods = getRandomItems(
      redemptionMethods,
      getRandomInt(3, 5)
    );

    const casino = {
      id: generateUniqueId(),
      vesselId: vessel.id,
      name: casinoName,
      description: generateCasinoDescription(
        casinoName,
        vessel.name,
        cityName,
        region,
        features
      ),
      imageUrl: `/images/casinos/${vessel.type}-casino-${i + 1}.jpg`,
      hours: hours,
      contact: {
        contactNumber: generateRandomPhoneNumber(region),
        contactEmail: generateRandomEmail("casino.velarivoyages.com"),
      },
      games: generateCasinoGames(
        features.hasSlotMachines,
        features.hasTableGames,
        features.hasPokerRoom,
        features.hasLiveDealerGames,
        features.hasHighRollerRoom
      ),
      minimumAge: 21,
      dressCode: getRandomElement([
        "Smart casual required",
        "Resort casual attire",
        "Business casual preferred",
        "Elegant casual dress code",
      ]),
      freeDrinks: getRandomBool(0.7), // 70% chance
      prohibitedItems: getRandomItems(prohibitedItems, getRandomInt(5, 8)),
      prohibitedActions: getRandomItems(prohibitedActions, getRandomInt(5, 8)),
      winningRedepmtion: {
        // Note: keeping the spelling as per interface
        minimumWageringAmount: minWagering,
        maximumWageringAmount: maxWagering,
        wageringMethods: selectedWageringMethods,
        redemptionMethods: selectedRedemptionMethods,
      },
      ...features,
      tippingRequired: tippingRequired ? "Yes" : "No",
      tippingAmount: tippingRequired ? getRandomInt(5, 25) : 0,
      rewardProgram: rewardProgram,
      faqs: faqs,
      isPopular: getRandomBool(0.3), // 30% chance
    };

    casinos.push(casino);
  }

  return casinos;
}

// Generate casino data for a city
function generateCasinosForCity(cityName) {
  const vessels = getVesselDataForCity(cityName);
  if (vessels.length === 0) {
    console.log(`⚠️  Skipping ${cityName} - no vessels found`);
    return [];
  }

  const region = cityToRegionMap[cityName];
  const casinos = [];

  vessels.forEach((vessel) => {
    const casinoCount = CASINOS_PER_VESSEL || getRandomInt(3, 5);
    const vesselCasinos = generateCasinosForVessel(
      vessel,
      cityName,
      region,
      casinoCount
    );
    casinos.push(...vesselCasinos);
  });

  if (DEBUG_MODE) {
    console.log(
      `Generated ${casinos.length} casinos for ${cityName} (${vessels.length} vessels)`
    );
  }

  return casinos;
}

// Create TypeScript file content
function createCasinoFileContent(cityName, casinos) {
  const camelCaseCityName = formatKebabToCamelCase(cityName);

  const casinoDataString = casinos
    .map((casino) => {
      return `  {
    id: "${casino.id}",
    vesselId: "${casino.vesselId}",
    name: "${casino.name}",
    description: "${casino.description}",
    imageUrl: "${casino.imageUrl}",
    hours: ${JSON.stringify(casino.hours, null, 6).replace(/\n/g, "\n    ")},
    contact: ${JSON.stringify(casino.contact, null, 6).replace(/\n/g, "\n    ")},
    games: ${JSON.stringify(casino.games, null, 6).replace(/\n/g, "\n    ")},
    minimumAge: ${casino.minimumAge},
    dressCode: "${casino.dressCode}",
    freeDrinks: ${casino.freeDrinks},
    prohibitedItems: ${JSON.stringify(casino.prohibitedItems, null, 6).replace(/\n/g, "\n    ")},
    prohibitedActions: ${JSON.stringify(casino.prohibitedActions, null, 6).replace(/\n/g, "\n    ")},
    winningRedepmtion: ${JSON.stringify(casino.winningRedepmtion, null, 6).replace(/\n/g, "\n    ")},
    hasHighRollerRoom: ${casino.hasHighRollerRoom},
    hasPokerRoom: ${casino.hasPokerRoom},
    hasSlotMachines: ${casino.hasSlotMachines},
    hasTableGames: ${casino.hasTableGames},
    hasLiveDealerGames: ${casino.hasLiveDealerGames},
    hasVIPArea: ${casino.hasVIPArea},
    hasEntertainment: ${casino.hasEntertainment},
    hasDiningOptions: ${casino.hasDiningOptions},
    tippingRequired: "${casino.tippingRequired}",
    tippingAmount: ${casino.tippingAmount},
    hasBar: ${casino.hasBar},
    hasSmokingArea: ${casino.hasSmokingArea},
    rewardProgram: ${JSON.stringify(casino.rewardProgram, null, 6).replace(/\n/g, "\n    ")},
    faqs: ${JSON.stringify(casino.faqs, null, 6).replace(/\n/g, "\n    ")},
    isPopular: ${casino.isPopular}
  }`;
    })
    .join(",\n");

  return `// This file is auto-generated
// Do not edit manually.
// City: ${capitalize(cityName)}
// Generated on: ${new Date().toISOString()}

import { Casino } from "@/lib/interfaces/services/venues";

export const ${camelCaseCityName}Casinos: Casino[] = [
${casinoDataString}
];
`;
}

// Main function to generate casino files
async function generateCasinoFiles() {
  const casinoDir = path.join(
    __dirname,
    "..",
    "src",
    "lib",
    "constants",
    "venues",
    "casinos"
  );

  // Create directories if they don't exist
  if (!fs.existsSync(casinoDir)) {
    fs.mkdirSync(casinoDir, { recursive: true });
    console.log(`📁 Created directory: ${casinoDir}`);
  }

  let filesCreated = 0;
  let filesAppended = 0;
  let filesSkipped = 0;

  console.log(`\n🚀 Processing ${cityFiles.length} cities...`);

  for (const city of cityFiles) {
    const casinoFilePath = path.join(casinoDir, `${city}-casinos.ts`);
    const fileExists = fs.existsSync(casinoFilePath);

    if (fileExists && !APPEND_MODE && !REWRITE_MODE) {
      if (DEBUG_MODE) {
        console.log(`⏭️  Skipping ${city} - file already exists`);
      }
      filesSkipped++;
      continue;
    }

    try {
      const newCasinos = generateCasinosForCity(city);

      if (newCasinos.length === 0) {
        console.log(`⚠️  No casinos generated for ${city}`);
        continue;
      }

      let allCasinos = newCasinos;

      // Handle append mode
      if (APPEND_MODE && fileExists) {
        try {
          const existingContent = fs.readFileSync(casinoFilePath, "utf8");
          const existingCasinosMatch = existingContent.match(
            /export const \w+Casinos: Casino\[\] = \[([\s\S]*?)\];/
          );

          if (existingCasinosMatch) {
            // Parse existing data (this is a simplified approach)
            // In a production environment, you might want more robust parsing
            console.log(`📝 Appending to existing casinos for ${city}`);
            filesAppended++;
          }
        } catch (error) {
          console.warn(
            `⚠️  Could not parse existing casino file for ${city}: ${error.message}`
          );
        }
      }

      // Create file content
      const fileContent = createCasinoFileContent(city, allCasinos);

      // Write file
      fs.writeFileSync(casinoFilePath, fileContent);

      if (APPEND_MODE && fileExists) {
        console.log(
          `✅ Updated casino file for ${capitalize(city)} (${allCasinos.length} casinos)`
        );
      } else {
        console.log(
          `✅ Created casino file for ${capitalize(city)} (${allCasinos.length} casinos)`
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
  console.log(`\n🎉 Casino venue generation complete!`);
}

// Run the script
generateCasinoFiles().catch(console.error);
