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
 * The Shopping interface represents categories (e.g., "Duty-Free") for each vessel,
 * with a stores array containing individual stores within that category.
 *
 * Features:
 * - Generates shopping categories for each vessel in each city
 * - Creates randomized store details including name, description, contact info
 * - Follows the Shopping interface requirements with vesselId references
 * - Customizes stores based on city/region and vessel type
 * - Ensures each cruise ship has one category of each of the 8 types
 * - Each category contains at least 3 individual stores
 * - Supports different operational modes:
 *   - Create: Only generates files if they don't already exist (default)
 *   - Append: Adds new shopping store data to existing files
 *   - Rewrite: Overwrites existing files with new data
 * - Allows specifying the number of stores to generate per vessel
 * - Includes a debug mode for verbose logging output
 *
 * Usage Examples:
 * --------------
 * # Default: creates files with shopping categories for all vessels in each city
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
 * # Specify number of stores per category (default is 3)
 * node scripts/create-shopping-stores.mjs --stores-per-category=5
 *
 * # Enable debug mode
 * node scripts/create-shopping-stores.mjs --debug
 * # Shorter version:
 * node scripts/create-shopping-stores.mjs -d
 *
 * Command-line Options:
 * ------------------
 * --append, -a                 Enable Append mode. Adds new shopping categories to existing files.
 *                             If a file doesn't exist, it's created.
 *
 * --rewrite, -r               Enable Rewrite mode. Overwrites existing shopping store files.
 *
 * --stores-per-category=N     Number of stores to generate per category (default: 3).
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
import { cityToRegionMap } from "./utils/geo-utils.mjs";
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
const STORES_PER_CATEGORY = parseInt(
  args.find((arg) => arg.startsWith("--stores-per-category="))?.split("=")[1] ||
    "3", // Default 3 stores per category
  10
);
const DEBUG_MODE = args.includes("--debug") || args.includes("-d");
const HELP_MODE = args.includes("--help") || args.includes("-h");

// Show help if requested
if (HELP_MODE) {
  console.log(`
Shopping Stores Data Generator Script
====================================

This script generates TypeScript files containing shopping store venue data for each vessel
in each city within the Velari Voyages project.

Usage:
  node scripts/create-shopping-stores.mjs [options]

Options:
  --append, -a                 Enable Append mode. Adds new shopping categories to existing files.
                              If a file doesn't exist, it's created.
  --rewrite, -r               Enable Rewrite mode. Overwrites existing shopping store files.
  --stores-per-category=N     Number of stores to generate per category (default: 3).
  --debug, -d                 Enable debug mode for verbose logging.
  --help, -h                  Display this help message.

Examples:
  node scripts/create-shopping-stores.mjs                              # Create new files only
  node scripts/create-shopping-stores.mjs --append                     # Append to existing files
  node scripts/create-shopping-stores.mjs --rewrite                    # Rewrite all files
  node scripts/create-shopping-stores.mjs --stores-per-category=5      # Generate 5 stores per category
  node scripts/create-shopping-stores.mjs --debug                      # Enable debug logging

Features:
- Generates shopping categories for each vessel in each city
- Organizes stores by category (e.g., "Duty-Free") with multiple stores per category
- Each cruise ship has one category of each of the 8 types with 3+ stores per category
- Creates randomized store details including name, description, contact info
- Customizes stores based on city/region and vessel type
- Supports 8 shopping categories: Duty-Free, Jewelry & Watches, Fashion & Accessories,
  Electronics & Gadgets, Souvenirs & Gifts, Health & Beauty, Sports & Outdoor, Home & Living

Output:
Files are created in: src/lib/constants/venues/shopping/{city-name}-shopping.ts
Each file exports a typed array compatible with the Shopping interface.
`);
  process.exit(0);
}

console.log(
  `Mode: ${
    APPEND_MODE ? "Append" : REWRITE_MODE ? "Rewrite" : "Create new only"
  }`
);
console.log(`Stores per category: ${STORES_PER_CATEGORY}`);
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

// Generate individual store data for a specific category
function generateIndividualStore(storeType, cityName, vesselName, region) {
  const storeName = generateStoreName(storeType, cityName, vesselName, region);
  const hours = generateStoreHours();

  return {
    id: generateUniqueId(),
    name: storeName,
    description: generateStoreDescription(
      storeName,
      storeType,
      vesselName,
      cityName
    ),
    hours: hours,
    contact: {
      contactNumber: `+1-${getRandomInt(200, 999)}-${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}`,
      contactEmail: generateRandomEmail("shopping.velarivoyages.com"),
    },
    hasSales: getRandomBool(0.7), // 70% chance of having sales
    isPopular: getRandomBool(0.4), // 40% chance of being popular
  };
}

// Generate shopping category data for a specific vessel and store type
function generateShoppingCategoryForVessel(
  vessel,
  cityName,
  region,
  storeType,
  storesPerCategory = 3
) {
  const stores = [];

  // Generate individual stores for this category
  for (let i = 0; i < storesPerCategory; i++) {
    stores.push(
      generateIndividualStore(storeType, cityName, vessel.name, region)
    );
  }

  return {
    id: generateUniqueId(),
    vesselId: vessel.id,
    type: storeType,
    stores: stores,
  };
}

// Generate shopping categories for a city
function generateShoppingCategoriesForCity(cityName) {
  const vessels = getVesselDataForCity(cityName);
  if (vessels.length === 0) {
    console.log(`⚠️  Skipping ${cityName} - no vessels found`);
    return [];
  }

  const region = cityToRegionMap(cityName);
  const shoppingCategories = [];

  vessels.forEach((vessel) => {
    // Generate one category for each shopping type per vessel
    SHOPPING_TYPES.forEach((storeType) => {
      shoppingCategories.push(
        generateShoppingCategoryForVessel(
          vessel,
          cityName,
          region,
          storeType,
          STORES_PER_CATEGORY
        )
      );
    });
  });

  if (DEBUG_MODE) {
    console.log(
      `Generated ${shoppingCategories.length} shopping categories for ${cityName} (${vessels.length} vessels, ${SHOPPING_TYPES.length} types each)`
    );
  }

  return shoppingCategories;
}

// Create TypeScript file content
function createShoppingFileContent(cityName, shoppingCategories) {
  const camelCaseCityName = formatKebabToCamelCase(cityName);
  const capitalizedCityName = capitalize(cityName);

  const categoryDataString = shoppingCategories
    .map(
      (category) =>
        `  {
    id: "${category.id}",
    vesselId: "${category.vesselId}",
    type: "${category.type}",
    stores: [
${category.stores
  .map(
    (store) =>
      `      {
        id: "${store.id}",
        name: "${store.name}",
        description: "${store.description}",
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
        hasSales: ${store.hasSales},
        isPopular: ${store.isPopular},
      }`
  )
  .join(",\n")}
    ],
  }`
    )
    .join(",\n");

  return `// This file is auto-generated
    // Do not edit manually.
    // City: ${capitalizedCityName}
    // Generated on: ${new Date().toISOString()}

import { Shopping } from "@/lib/interfaces/services/venues";

export const ${camelCaseCityName}Shopping: Shopping[] = [
${categoryDataString}
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
      const newShoppingCategories = generateShoppingCategoriesForCity(city);

      if (newShoppingCategories.length === 0) {
        console.log(`⚠️  No shopping categories generated for ${city}`);
        continue;
      }

      let allShoppingCategories = newShoppingCategories;

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

            // For append mode, we'll just add new categories
            console.log(
              `📝 Appending to existing shopping categories for ${city}`
            );
            filesAppended++;
          }
        } catch (error) {
          console.warn(
            `⚠️  Could not parse existing shopping store file for ${city}: ${error.message}`
          );
        }
      }

      // Create file content
      const fileContent = createShoppingFileContent(
        city,
        allShoppingCategories
      );

      // Write file
      fs.writeFileSync(shoppingFilePath, fileContent);

      if (APPEND_MODE && fileExists) {
        console.log(
          `✅ Updated shopping store file for ${capitalize(city)} (${allShoppingCategories.length} categories)`
        );
      } else {
        console.log(
          `✅ Created shopping store file for ${capitalize(city)} (${allShoppingCategories.length} categories)`
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
