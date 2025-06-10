/**
 * Shopping Stores Data Generator Script
 * ====================================
 *
 * This script generates TypeScript files containing shopping store venue data for each vessel
 * in each city within the Velari Voyages project.
 * It creates files within the directory structure:
 * "src/lib/constants/venues/shopping/{cityName}-shopping.ts"
 * Each file exports an array variable named "{camelCaseCityName}Shopping"
 * with shopping store data that matches the Shopping interface from venues.ts
 *
 * Features:
 * - Generates shopping stores for each vessel in each city
 * - Creates randomized shopping store details including name, description, type,
 *   hours, contact information, and FAQ data
 * - Follows the Shopping interface requirements with vesselId references
 * - Customizes shopping stores based on the city/region and vessel type
 * - Ensures each cruise ship has at least 3 shopping stores of each type (8 types)
 * - Supports different operational modes:
 *   - Create: Only generates files if they don't already exist (default)
 *   - Append: Adds new shopping store data to existing files
 *   - Rewrite: Overwrites existing files with new data
 * - Allows specifying the number of stores to generate per vessel
 * - Includes a debug mode for verbose logging output
 *
 * Usage Examples:
 * --------------
 * # Default: creates files with shopping stores for all vessels in each city
 * node scripts/create-shopping-stores.mjs
 *
 * # Append new shopping stores to existing files
 * node scripts/create-shopping-stores.mjs --append
 * # Shorter version:
 * node scripts/create-shopping-stores.mjs -a
 *
 * # Rewrite all shopping store files (discards existing data)
 * node scripts/create-shopping-stores.mjs --rewrite
 * # Shorter version:
 * node scripts/create-shopping-stores.mjs -r
 *
 * # Specify number of stores per vessel (default is 24 to ensure 3 of each type)
 * node scripts/create-shopping-stores.mjs --stores-per-vessel=30
 *
 * # Enable debug mode
 * node scripts/create-shopping-stores.mjs --debug
 * # Shorter version:
 * node scripts/create-shopping-stores.mjs -d
 *
 * Command-line Options:
 * ------------------
 * --append, -a               Enable Append mode. Adds new shopping stores to existing files.
 *                           If a file doesn't exist, it's created.
 *
 * --rewrite, -r             Enable Rewrite mode. Overwrites existing shopping store files.
 *
 * --stores-per-vessel=N     Number of shopping stores to generate per vessel (default: 24).
 *
 * --debug, -d               Enable debug mode for verbose logging.
 *
 * File Structure:
 * --------------
 * Generated files follow this structure:
 * src/lib/constants/venues/shopping/
 * ├── amsterdam-shopping.ts
 * ├── auckland-shopping.ts
 * ├── boston-shopping.ts
 * └── ...
 *
 * Dependencies:
 * ------------
 * This script requires:
 * - Vessel data files in src/lib/constants/cruises/vessels/
 * - The Shopping interface from src/lib/interfaces/services/venues.ts
 * - Utility modules from scripts/utils/
 *
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { cityToRegionMap } from "./utils/geo-utils.mjs";
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
const STORES_PER_VESSEL = parseInt(
  args.find((arg) => arg.startsWith("--stores-per-vessel="))?.split("=")[1] ||
    "24", // Default 24 to ensure 3 of each of the 8 types
  10
);
const DEBUG_MODE = args.includes("--debug") || args.includes("-d");

console.log(
  `Mode: ${
    APPEND_MODE ? "Append" : REWRITE_MODE ? "Rewrite" : "Create new only"
  }`
);
console.log(`Stores per vessel: ${STORES_PER_VESSEL}`);
console.log(`Debug mode: ${DEBUG_MODE ? "Enabled" : "Disabled"}`);

// Shopping store types from the Shopping interface
const SHOPPING_TYPES = [
  "Duty-Free",
  "Jewelry and Watches",
  "Fashion and Accessories",
  "Electronics and Gadgets",
  "Souvenirs and Gifts",
  "Health and Beauty",
  "Sports and Outdoor",
  "Home and Living",
];

// Shopping store names by type and region
const storeNamesByType = {
  "Duty-Free": {
    Default: [
      "Voyage Duty Free",
      "Ocean Tax Free Shop",
      "Maritime Duty Free",
      "Cruise Collection Duty Free",
      "International Selections",
      "Seabound Duty Free",
      "Global Goods Gallery",
      "Duty Free Treasures",
    ],
    Europe: [
      "European Duty Free",
      "Continental Selections",
      "Old World Duty Free",
      "Europa Tax Free",
      "Heritage Duty Free",
    ],
    Asia: [
      "Orient Duty Free",
      "Asian Treasures Tax Free",
      "Far East Duty Free",
      "Pacific Selections",
    ],
  },
  "Jewelry and Watches": {
    Default: [
      "Timeless Treasures",
      "Ocean Jewelers",
      "Maritime Timepieces",
      "Precious Waves",
      "Nautical Gems",
      "Luxury Time & Gems",
      "Sea Glass Jewelry",
      "Coastal Collections",
    ],
    Europe: [
      "European Elegance",
      "Continental Jewelers",
      "Old World Watches",
      "Royal Timepieces",
    ],
    Mediterranean: [
      "Mediterranean Gems",
      "Riviera Jewelry",
      "Azure Timepieces",
    ],
  },
  "Fashion and Accessories": {
    Default: [
      "Cruise Couture",
      "Ocean Fashion",
      "Seaside Style",
      "Maritime Mode",
      "Nautical Threads",
      "Voyage Wardrobe",
      "Coastal Chic",
      "Seaworthy Style",
    ],
    Europe: [
      "European Elegance",
      "Continental Fashion",
      "Parisian Chic",
      "Milano Mode",
    ],
    Caribbean: ["Tropical Threads", "Island Fashion", "Caribbean Style"],
  },
  "Electronics and Gadgets": {
    Default: [
      "Tech Treasures",
      "Digital Deck",
      "Gadget Gallery",
      "Electronic Essentials",
      "Modern Maritime",
      "Cruise Tech",
      "Digital Discoveries",
      "Innovation Station",
    ],
    Asia: ["Asian Tech Hub", "Oriental Electronics", "Pacific Digital"],
  },
  "Souvenirs and Gifts": {
    Default: [
      "Memory Makers",
      "Voyage Memories",
      "Keepsake Corner",
      "Souvenir Seas",
      "Treasure Trove",
      "Gift Gallery",
      "Memento Maritime",
      "Cruise Keepsakes",
    ],
    Local: [
      "Local Legends",
      "Regional Treasures",
      "Native Gifts",
      "Cultural Collections",
    ],
  },
  "Health and Beauty": {
    Default: [
      "Sea Spa Essentials",
      "Ocean Beauty",
      "Wellness Waves",
      "Maritime Glow",
      "Nautical Naturals",
      "Coastal Care",
      "Beauty & Wellness",
      "Rejuvenation Station",
    ],
    Europe: [
      "European Spa Essentials",
      "Continental Beauty",
      "French Fragrance",
    ],
  },
  "Sports and Outdoor": {
    Default: [
      "Active Ocean",
      "Maritime Sports",
      "Deck Athletics",
      "Adventure Gear",
      "Outdoor Oceanic",
      "Sports Seas",
      "Athletic Voyage",
      "Fitness Fleet",
    ],
    Outdoor: ["Adventure Outfitters", "Expedition Gear", "Outdoor Elements"],
  },
  "Home and Living": {
    Default: [
      "Nautical Nest",
      "Ocean Home",
      "Maritime Living",
      "Coastal Comforts",
      "Seaside Spaces",
      "Home Harbor",
      "Domestic Deck",
      "Living Seas",
    ],
    Luxury: ["Luxury Living", "Premium Home", "Elite Essentials"],
  },
};

// Store descriptions by type
const storeDescriptionsByType = {
  "Duty-Free": [
    "Discover exceptional values on premium brands from around the world. Our duty-free collection features the finest spirits, perfumes, cosmetics, and luxury goods at sea-exclusive prices.",
    "Your passport to savings on international favorites. Browse our extensive selection of duty-free merchandise including premium liquors, designer fragrances, and luxury chocolates.",
    "Experience tax-free shopping at its finest with our curated collection of global brands and exclusive cruise-only offers on premium goods.",
  ],
  "Jewelry and Watches": [
    "Adorn yourself with treasures from the sea and beyond. Our fine jewelry collection features exquisite pieces inspired by ocean waves and maritime heritage.",
    "Discover timeless elegance in our jewelry and timepiece collection. From stunning statement pieces to classic watches, find the perfect accessory for any occasion.",
    "Celebrate special moments with our carefully curated selection of fine jewelry and luxury watches, each piece as unique as your cruise experience.",
  ],
  "Fashion and Accessories": [
    "Set sail in style with our carefully curated fashion collection. From casual cruise wear to elegant evening attire, find the perfect outfit for every occasion.",
    "Express your personal style with our diverse collection of fashion and accessories, featuring both timeless classics and contemporary trends.",
    "Discover your cruise wardrobe essentials and beyond. Our fashion boutique offers everything from resort wear to formal attire and stylish accessories.",
  ],
  "Electronics and Gadgets": [
    "Stay connected and capture memories with our selection of the latest electronics and gadgets. From cameras to portable chargers, we have your tech needs covered.",
    "Discover innovative technology and essential gadgets for the modern traveler. Our electronics store features the latest devices and accessories.",
    "Keep up with the digital world while at sea. Our tech shop offers everything from smartphones to marine electronics and travel accessories.",
  ],
  "Souvenirs and Gifts": [
    "Take home a piece of your incredible journey with our unique collection of souvenirs and gifts. From personalized keepsakes to local treasures, create lasting memories.",
    "Commemorate your cruise adventure with our specially curated gift collection. Find the perfect souvenir to remember your voyage or surprise someone special.",
    "Discover meaningful mementos and thoughtful gifts in our treasure trove of souvenirs, each item carefully selected to capture the spirit of your cruise experience.",
  ],
  "Health and Beauty": [
    "Pamper yourself with our premium selection of health and beauty products. From spa-quality skincare to essential wellness items, maintain your glow at sea.",
    "Indulge in self-care with our comprehensive collection of beauty and wellness products, featuring both luxury brands and cruise essentials.",
    "Enhance your natural beauty and well-being with our carefully selected health and beauty products, perfect for maintaining your vacation glow.",
  ],
  "Sports and Outdoor": [
    "Gear up for adventure with our comprehensive selection of sports and outdoor equipment. From deck games to water sports, we have everything for the active cruiser.",
    "Embrace the active lifestyle at sea with our sports and outdoor collection. Find quality gear for fitness, recreation, and maritime adventures.",
    "Stay active and explore the outdoors with our premium selection of sports equipment and outdoor gear, perfect for cruise activities and shore excursions.",
  ],
  "Home and Living": [
    "Bring the elegance of cruise living to your home with our curated collection of home decor and living essentials, featuring nautical themes and luxury touches.",
    "Transform your living space with our selection of home goods and decorative items, each piece inspired by the beauty and sophistication of life at sea.",
    "Discover home essentials and decorative treasures that capture the spirit of maritime elegance and bring cruise luxury to your everyday life.",
  ],
};

// FAQ templates for shopping stores
const shoppingFAQTemplates = [
  {
    question: "What are your store hours?",
    answer:
      "Our store hours vary based on the ship's itinerary and port days. Generally, we're open from morning until late evening on sea days, with modified hours during port visits.",
  },
  {
    question: "Do you accept credit cards?",
    answer:
      "Yes, we accept all major credit cards, ship charge cards, and cash. Some items may have special payment requirements which our staff will be happy to explain.",
  },
  {
    question: "Can I return or exchange items?",
    answer:
      "Returns and exchanges are accepted within 24 hours of purchase with original receipt, provided items are in original condition. Some restrictions may apply to certain products.",
  },
  {
    question: "Do you offer duty-free prices?",
    answer:
      "Many of our items are available at duty-free prices when sailing in international waters. Our staff can provide specific information about duty-free availability.",
  },
  {
    question: "Can you hold items for me?",
    answer:
      "Yes, we can hold items for you until the end of your cruise. We also offer delivery service to your stateroom for purchases over a certain amount.",
  },
  {
    question: "Do you have exclusive cruise merchandise?",
    answer:
      "Absolutely! We carry a selection of exclusive items that are only available during your cruise, including limited-edition pieces and ship-specific merchandise.",
  },
  {
    question: "Are there any special sales or promotions?",
    answer:
      "We regularly feature special promotions and sales throughout your cruise. Check our daily newsletter or visit the store to learn about current offers and exclusive deals.",
  },
  {
    question: "Can I ship purchases home?",
    answer:
      "Yes, we offer international shipping services for most items. Our staff can help arrange secure shipping to your home address with tracking information provided.",
  },
];

// Get region for a city
function getRegionForCity(cityName) {
  return cityToRegionMap[cityName] || "Default";
}

// Generate shopping store name
function generateStoreName(storeType, cityName, vesselName, region) {
  const typeNames = storeNamesByType[storeType];
  let availableNames = typeNames.Default || [];

  // Add region-specific names if available
  if (typeNames[region]) {
    availableNames = [...availableNames, ...typeNames[region]];
  }

  // Add local variations for certain types
  if (storeType === "Souvenirs and Gifts" && typeNames.Local) {
    availableNames = [...availableNames, ...typeNames.Local];
  }

  const baseName = getRandomElement(availableNames);

  // Sometimes add vessel or city name
  if (Math.random() < 0.3) {
    return `${vesselName} ${baseName}`;
  } else if (Math.random() < 0.2) {
    return `${capitalize(cityName)} ${baseName}`;
  }

  return baseName;
}

// Generate shopping store description
function generateStoreDescription(storeName, storeType, vesselName, cityName) {
  const typeDescriptions = storeDescriptionsByType[storeType] || [];
  let baseDescription = getRandomElement(typeDescriptions);

  if (!baseDescription) {
    baseDescription = `Welcome to ${storeName}, your premier destination for ${storeType.toLowerCase()} aboard the ${vesselName}. We offer a carefully curated selection of quality products to enhance your cruise experience.`;
  }

  return baseDescription;
}

// Generate shopping store operating hours
function generateStoreHours() {
  const openingHour = getRandomInt(8, 10); // 8am-10am opening
  const closingHour = getRandomInt(20, 23); // 8pm-11pm closing

  return {
    start: `${openingHour.toString().padStart(2, "0")}:00`,
    end: `${closingHour.toString().padStart(2, "0")}:00`,
    duration: `${closingHour - openingHour} hours`,
    description: "Store hours may vary during port days and special events",
  };
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
    const fileContent = fs.readFileSync(vesselFilePath, "utf8");
    const arrayMatch = fileContent.match(
      /export const \w+Vessels: Vessels\[\] = \[([\s\S]*?)\];/
    );

    if (!arrayMatch || !arrayMatch[1]) {
      if (DEBUG_MODE) {
        console.log(`⚠️  No vessels array found in ${cityName}`);
      }
      return [];
    }

    // Extract vessel data - simplified parsing
    const vessels = [];
    const vesselMatches = arrayMatch[1].match(
      /\{\s*id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"/g
    );

    if (vesselMatches) {
      vesselMatches.forEach((match) => {
        const idMatch = match.match(/id:\s*"([^"]+)"/);
        const nameMatch = match.match(/name:\s*"([^"]+)"/);

        if (idMatch && nameMatch) {
          vessels.push({
            id: idMatch[1],
            name: nameMatch[1],
          });
        }
      });
    }

    return vessels;
  } catch (error) {
    console.error(`Error reading vessel file for ${cityName}:`, error);
    return [];
  }
}

// Generate shopping store data for a specific vessel
function generateStoreForVessel(vessel, cityName, region, storeType) {
  const storeName = generateStoreName(storeType, cityName, vessel.name, region);
  const hours = generateStoreHours();
  const faqs = getRandomItems(shoppingFAQTemplates, getRandomInt(3, 5));

  return {
    id: generateUniqueId(),
    vesselId: vessel.id,
    name: storeName,
    description: generateStoreDescription(
      storeName,
      storeType,
      vessel.name,
      cityName
    ),
    imageUrl: `/images/shopping/${storeType.toLowerCase().replace(/\s+/g, "-")}-store.jpg`,
    hours: hours,
    contact: {
      contactNumber: `+1-${getRandomInt(200, 999)}-${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}`,
      contactEmail: generateRandomEmail("shopping.velarivoyages.com"),
    },
    type: storeType,
    hasSales: getRandomBool(0.7), // 70% chance of having sales
    isPopular: getRandomBool(0.4), // 40% chance of being popular
    faqs: faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),
  };
}

// Generate shopping store data for a city
function generateStoresForCity(cityName) {
  const vessels = getVesselDataForCity(cityName);
  if (vessels.length === 0) {
    console.log(`⚠️  Skipping ${cityName} - no vessels found`);
    return [];
  }

  const region = getRegionForCity(cityName);
  const stores = [];

  vessels.forEach((vessel) => {
    // Ensure at least 3 stores of each type per vessel
    const storeTypes = [...SHOPPING_TYPES];
    const storesForVessel = Math.max(
      STORES_PER_VESSEL,
      SHOPPING_TYPES.length * 3
    );

    // First, add 3 stores of each type
    SHOPPING_TYPES.forEach((storeType) => {
      for (let i = 0; i < 3; i++) {
        stores.push(
          generateStoreForVessel(vessel, cityName, region, storeType)
        );
      }
    });

    // Then add random additional stores to reach the target
    const additionalStores = storesForVessel - SHOPPING_TYPES.length * 3;
    for (let i = 0; i < additionalStores; i++) {
      const randomType = getRandomElement(SHOPPING_TYPES);
      stores.push(generateStoreForVessel(vessel, cityName, region, randomType));
    }
  });

  if (DEBUG_MODE) {
    console.log(
      `Generated ${stores.length} shopping stores for ${cityName} (${vessels.length} vessels)`
    );
  }

  return stores;
}

// Create TypeScript file content
function createShoppingFileContent(cityName, stores) {
  const camelCaseCityName = formatKebabToCamelCase(cityName);
  const capitalizedCityName = capitalize(cityName);

  const storeDataString = stores
    .map(
      (store) =>
        `  {
    id: "${store.id}",
    vesselId: "${store.vesselId}",
    name: "${store.name}",
    description: "${store.description}",
    imageUrl: "${store.imageUrl}",
    hours: {
      start: "${store.hours.start}",
      end: "${store.hours.end}",
      duration: "${store.hours.duration}",
      description: "${store.hours.description}",
    },
    contact: {
      contactNumber: "${store.contact.contactNumber}",
      contactEmail: "${store.contact.contactEmail}",
    },
    type: "${store.type}",
    hasSales: ${store.hasSales},
    isPopular: ${store.isPopular},
    faqs: [
${store.faqs
  .map(
    (faq) =>
      `      {
        question: "${faq.question}",
        answer: "${faq.answer}",
      }`
  )
  .join(",\n")}
    ],
  }`
    )
    .join(",\n");

  return `// Shopping store venues data for ${capitalizedCityName}
// This file contains shopping store information for cruise vessels operating from ${capitalizedCityName}
// Each store is associated with a specific vessel and offers various retail categories

import { Shopping } from "@/lib/interfaces/services/venues";

export const ${camelCaseCityName}Shopping: Shopping[] = [
${storeDataString}
];
`;
}

// Main function to generate shopping store files
async function generateShoppingFiles() {
  const shoppingDir = path.join(
    __dirname,
    "..",
    "src",
    "lib",
    "constants",
    "venues",
    "shopping"
  );

  // Create directories if they don't exist
  if (!fs.existsSync(shoppingDir)) {
    fs.mkdirSync(shoppingDir, { recursive: true });
    console.log(`📁 Created directory: ${shoppingDir}`);
  }

  let filesCreated = 0;
  let filesAppended = 0;
  let filesSkipped = 0;

  console.log(`\n🚀 Processing ${cityFiles.length} cities...`);

  for (const city of cityFiles) {
    const shoppingFilePath = path.join(shoppingDir, `${city}-shopping.ts`);
    const fileExists = fs.existsSync(shoppingFilePath);

    if (fileExists && !APPEND_MODE && !REWRITE_MODE) {
      if (DEBUG_MODE) {
        console.log(`⏭️  Skipping ${city} - file already exists`);
      }
      filesSkipped++;
      continue;
    }

    try {
      const newStores = generateStoresForCity(city);

      if (newStores.length === 0) {
        console.log(`⚠️  No shopping stores generated for ${city}`);
        continue;
      }

      let allStores = newStores;

      // Handle append mode
      if (APPEND_MODE && fileExists) {
        try {
          const existingContent = fs.readFileSync(shoppingFilePath, "utf8");
          const existingStoresMatch = existingContent.match(
            /export const \w+Shopping: Shopping\[\] = \[([\s\S]*?)\];/
          );

          if (existingStoresMatch) {
            // Parse existing data (simplified approach)
            const existingStoresCount = (
              existingStoresMatch[1].match(/\{/g) || []
            ).length;
            console.log(
              `Found ${existingStoresCount} existing stores in ${city}-shopping.ts`
            );

            // For append mode, we'll just add new stores
            console.log(`📝 Appending to existing shopping stores for ${city}`);
            filesAppended++;
          }
        } catch (error) {
          console.warn(
            `⚠️  Could not parse existing shopping store file for ${city}: ${error.message}`
          );
        }
      }

      // Create file content
      const fileContent = createShoppingFileContent(city, allStores);

      // Write file
      fs.writeFileSync(shoppingFilePath, fileContent);

      if (APPEND_MODE && fileExists) {
        console.log(
          `✅ Updated shopping store file for ${capitalize(city)} (${allStores.length} stores)`
        );
      } else {
        console.log(
          `✅ Created shopping store file for ${capitalize(city)} (${allStores.length} stores)`
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
  console.log(`\n🎉 Shopping store generation complete!`);
}

// Run the script
generateShoppingFiles().catch(console.error);
