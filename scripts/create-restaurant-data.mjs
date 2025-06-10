/**
 * Restaurant Data Generator Script
 * ================================
 *
 * This script generates TypeScript files containing restaurant data for various cities
 * in the Velari Voyages project.
 * It creates or modifies files within a city-specific directory:
 * "src/lib/constants/cruises/restaurants/{cityName}/restaurants.ts"
 * Each file exports an array variable named "{camelCaseCityName}Restaurants"
 * with restaurant data.
 *
 * Features:
 * - Generates randomized restaurant details including name, description, cuisine,
 *   price range, rating, opening hours, and contact information.
 * - Customizes cuisine types and restaurant name prefixes based on the city.
 * - Supports different operational modes:
 *   - Create: Only generates files if they don't already exist (default).
 *   - Append: Adds new restaurant data to existing files.
 *   - Rewrite: Overwrites existing files with new data.
 * - Allows specifying the number of restaurants to generate or append.
 * - Includes a debug mode for verbose logging output.
 *
 * Usage Examples:
 * --------------
 * # Default: creates files with 5 restaurants per city, only for new city files
 * node scripts/create-restaurant-data.mjs
 *
 * # Append 3 new restaurants to existing files (or create with 3 if file doesn't exist)
 * node scripts/create-restaurant-data.mjs --append --append-count=3
 * # Shorter version:
 * node scripts/create-restaurant-data.mjs -a -ac=3
 *
 * # Rewrite all restaurant files with 10 restaurants each (discards existing data)
 * node scripts/create-restaurant-data.mjs --rewrite --count=10
 * # Shorter version:
 * node scripts/create-restaurant-data.mjs -r --count=10
 *
 * # Generate 7 restaurants per city (for new files or when rewriting)
 * node scripts/create-restaurant-data.mjs --count=7
 *
 * # Enable debug mode
 * node scripts/create-restaurant-data.mjs --debug
 * # Shorter version:
 * node scripts/create-restaurant-data.mjs -d
 *
 * Command-line Options:
 * ------------------
 * --append, -a             Enable Append mode. Adds new restaurants to existing files.
 *                          If a file doesn't exist, it's created.
 *
 * --rewrite, -r            Enable Rewrite mode. Overwrites existing restaurant files.
 *                          If a file doesn't exist, it's created.
 *
 * --count=<NUMBER>         Sets the number of restaurants to generate per city.
 *                          Used in Create mode (if file doesn't exist) or Rewrite mode.
 *                          Default: 5.
 *                          Example: --count=10
 *
 * --append-count=<NUMBER>  Sets the number of new restaurants to add per city in Append mode.
 * -ac=<NUMBER>             If not specified, defaults to the value of --count (or 5 if
 *                          --count is also not set).
 *                          Example: --append-count=3 or -ac=3
 *
 * --debug, -d              Enable debug mode for more detailed console output.
 *
 * Note: If neither --append nor --rewrite is specified, the script runs in
 * "Create new only" mode, skipping cities where restaurant files already exist.
 *
 * Output Files:
 * ------------
 * The script generates TypeScript files in:
 * src/lib/constants/cruises/restaurants/{cityName}/restaurants.ts
 * (e.g., src/lib/constants/cruises/restaurants/london/restaurants.ts)
 *
 * Each file exports a typed array of restaurant objects:
 * export const {camelCaseCityName}Restaurants: Restaurant[] = [ ... ];
 *
 * The `Restaurant` type is expected to be imported from "@/lib/types/types".
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getCityFiles } from "./utils/file-utils.mjs";
import {
  getRandomRating,
  getRandomBool,
  getRandomHours,
  getRandomPrice,
} from "./utils/data-generator.mjs";
import { generalEmailStarters } from "./utils/general-util.mjs";
import {
  restaurantNamePrefix,
  restaurantNameSuffix,
} from "./utils/name-utils.mjs";
import { restaurantTemplate } from "./utils/template-util.mjs";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const APPEND_MODE = args.includes("--append") || args.includes("-a");
const REWRITE_MODE = args.includes("--rewrite") || args.includes("-r");
const RESTAURANT_COUNT = parseInt(
  args.find((arg) => arg.startsWith("--count="))?.split("=")[1] || "5",
  10
);
const APPEND_COUNT = parseInt(
  args.find((arg) => arg.startsWith("--append-count="))?.split("=")[1] ||
    args.find((arg) => arg.startsWith("-ac="))?.split("=")[1] ||
    RESTAURANT_COUNT.toString(),
  10
);
const DEBUG_MODE = args.includes("--debug") || args.includes("-d");

console.log(
  `Mode: ${
    APPEND_MODE ? "Append" : REWRITE_MODE ? "Rewrite" : "Create new only"
  }`
);
console.log(
  `${APPEND_MODE ? "Appending" : "Generating"} ${
    APPEND_MODE ? APPEND_COUNT : RESTAURANT_COUNT
  } restaurants per city`
);
console.log(
  `Will ${
    REWRITE_MODE
      ? "overwrite"
      : APPEND_MODE
        ? "append to"
        : "only create missing"
  } restaurant files`
);

// Generate restaurant data for a given city
const generateRestaurantsForCity = (cityName) => {
  // Create camelCase city name (e.g., "new-york-city" -> "newYorkCity")
  const camelCaseCityName = cityName
    .split("-")
    .map((part, index) =>
      index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join("");

  // Create file path for the restaurant data
  const filePath = path.join(
    __dirname,
    "..",
    "src",
    "lib",
    "constants",
    "cruises",
    "restaurants",
    cityName,
    "restaurants.ts"
  );

  // Create directory if it doesn't exist
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Check if file exists and determine action based on flags
  if (fs.existsSync(filePath)) {
    if (!APPEND_MODE && !REWRITE_MODE) {
      console.log(
        `Skipping ${cityName} - restaurant file already exists. Use --append or --rewrite to modify.`
      );
      return;
    }
  }

  // Check if file already exists and we're in append mode
  let existingRestaurants = [];
  if (APPEND_MODE && fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, "utf8");

      if (DEBUG_MODE) {
        console.log(`DEBUG: File content for ${cityName} (first 200 chars):`);
        console.log(content.substring(0, 200) + "...");
      }

      // Extract array from existing file using an improved regex
      // This pattern is more flexible with whitespace and formatting
      const match = content.match(
        /export\s+const\s+\w+Restaurants\s*:\s*Restaurant\[\]\s*=\s*(\[[\s\S]*?\]);/
      );

      if (match && match[1]) {
        const arrayContent = match[1];

        if (DEBUG_MODE) {
          console.log(`DEBUG: Extracted array content (first 100 chars):`);
          console.log(arrayContent.substring(0, 100) + "...");
        }

        try {
          // Preprocess the content to handle potential issues
          // This helps with trailing commas and TypeScript-specific syntax
          const processedContent = arrayContent
            .replace(/,\s*]/g, "]") // Remove trailing commas
            .replace(/\/\/.*$/gm, "") // Remove single-line comments
            .replace(/\/\*[\s\S]*?\*\//g, ""); // Remove multi-line comments

          // Parse the extracted array
          existingRestaurants = JSON.parse(processedContent);
          console.log(
            `Found ${existingRestaurants.length} existing restaurants for ${cityName}`
          );
        } catch (e) {
          console.error(
            `Error parsing existing restaurants for ${cityName}:`,
            e
          );
          console.error(
            `Failed JSON content (first 200 chars): ${match[1].substring(
              0,
              200
            )}...`
          );

          // Fall back to an alternative approach using eval in a controlled way
          // This is safer than raw eval since we're in a Node.js script context
          try {
            console.log("Attempting alternative parsing method...");
            // Use Function constructor instead of eval for slightly better safety
            const safeEval = new Function(`return ${arrayContent}`);
            existingRestaurants = safeEval();
            console.log(
              `Successfully recovered ${existingRestaurants.length} restaurants using alternative method`
            );
          } catch (evalError) {
            console.error("Alternative parsing also failed:", evalError);
            // If all parsing attempts fail, default to empty array for safety
            existingRestaurants = [];
          }
        }
      } else {
        console.warn(`No restaurant array found in ${filePath}`);
      }
    } catch (e) {
      console.error(
        `Error reading existing restaurant file for ${cityName}:`,
        e
      );
    }
  }

  // Generate new restaurants data for the city - use APPEND_COUNT in append mode
  const newRestaurants = generateRandomRestaurants(cityName, APPEND_COUNT);

  // Combine existing and new restaurants in append mode
  const restaurants = [...existingRestaurants, ...newRestaurants];

  // Validate we're actually appending if in append mode
  if (APPEND_MODE && existingRestaurants.length > 0) {
    console.log(
      `Append validation: ${existingRestaurants.length} existing + ${newRestaurants.length} new = ${restaurants.length} total`
    );
    if (
      restaurants.length !==
      existingRestaurants.length + newRestaurants.length
    ) {
      console.error(
        "WARNING: Final restaurant count doesn't match expected total. Append may not be working correctly!"
      );
    }
  }

  // Helper function to write restaurant data to file
  const writeRestaurantFile = (
    filePath,
    camelCaseCityName,
    restaurants,
    existingCount,
    newCount
  ) => {
    // Generate the file content
    const fileContent = `
    // This file is auto-generated
    // Do not edit manually.
    // City: ${capitalizeWords(city)}
    // Generated on: ${new Date().toISOString()}
    
    import { Restaurant } from "@/lib/types/types";

export const ${camelCaseCityName}Restaurants: Restaurant[] = ${JSON.stringify(
      restaurants,
      null,
      2
    )};
`;

    // Write the file
    fs.writeFileSync(filePath, fileContent);

    if (existingCount > 0) {
      console.log(
        `Updated restaurant data for ${camelCaseCityName}: ${existingCount} existing + ${newCount} new = ${restaurants.length} total`
      );
    } else if (REWRITE_MODE) {
      console.log(
        `Rewrote restaurant data for ${camelCaseCityName}: ${restaurants.length} restaurants`
      );
    } else {
      console.log(
        `Created new restaurant data for ${camelCaseCityName}: ${restaurants.length} restaurants`
      );
    }
  };

  if (APPEND_MODE && existingRestaurants.length > 0) {
    // Generate and write the file content
    writeRestaurantFile(
      filePath,
      camelCaseCityName,
      restaurants,
      existingRestaurants.length,
      newRestaurants.length
    );
  } else {
    // Generate new restaurants with default count (either new file or rewrite mode)
    const restaurants = generateRandomRestaurants(cityName, RESTAURANT_COUNT);
    writeRestaurantFile(
      filePath,
      camelCaseCityName,
      restaurants,
      0,
      restaurants.length
    );
  }
};

function formatTitleToCamelCase(title) {
  return title
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

// Function to generate random restaurant data for a city
const generateRandomRestaurants = (cityName, count) => {
  // Define cuisine types appropriate for each city/region
  const cuisinesByRegion = {
    auckland: ["New Zealand", "Pacific", "Seafood", "Maori", "Australian"],
    amsterdam: ["Dutch", "Indonesian", "French", "Belgian", "Mediterranean"],
    barcelona: ["Spanish", "Catalan", "Mediterranean", "Seafood", "Fusion"],
    berlin: ["German", "Turkish", "Vietnamese", "Italian", "Mediterranean"],
    boston: ["American", "Seafood", "Italian", "Irish", "Mediterranean"],
    buenosAires: ["Argentinian", "Italian", "Spanish", "French", "Peruvian"],
    "cape-town": ["African", "Indian", "Seafood", "Mediterranean", "French"],
    charleston: ["American", "Southern", "Seafood", "Cajun", "Creole"],
    copenhagen: ["Scandinavian", "Danish", "Italian", "French", "Spanish"],
    dubai: [
      "Middle Eastern",
      "Lebanese",
      "Indian",
      "Mediterranean",
      "Japanese",
    ],
    dublin: ["Irish", "British", "Mediterranean", "Italian", "French"],
    florence: ["Italian", "Tuscan", "Mediterranean", "French", "Japanese"],
    "fort-lauderdale": [
      "American",
      "Seafood",
      "Caribbean",
      "Italian",
      "Mexican",
    ],
    galveston: ["American", "Seafood", "Mexican", "Cajun", "Italian"],
    "hong-kong": ["Chinese", "Cantonese", "Japanese", "Thai", "French"],
    kiel: ["German", "Scandinavian", "Italian", "French", "Mediterranean"],
    kyoto: ["Japanese", "Asian", "Italian", "French", "Chinese"],
    lisbon: ["Portuguese", "Mediterranean", "Seafood", "Italian", "Brazilian"],
    london: ["British", "Indian", "Italian", "French", "Chinese"],
    "los-angeles": [
      "American",
      "Mexican",
      "Japanese",
      "Korean",
      "Mediterranean",
    ],
    melbourne: ["Australian", "Italian", "Greek", "Chinese", "Vietnamese"],
    miami: ["Cuban", "American", "Caribbean", "Peruvian", "Italian"],
    milan: ["Italian", "Mediterranean", "French", "Japanese", "Fusion"],
    montreal: ["French", "Canadian", "Italian", "Mediterranean", "American"],
    "new-orleans": ["Cajun", "Creole", "American", "French", "Italian"],
    "new-york-city": ["American", "Italian", "Chinese", "Japanese", "French"],
    paris: ["French", "Italian", "Japanese", "Mediterranean", "Middle Eastern"],
    "quebec-city": [
      "French",
      "Canadian",
      "Italian",
      "American",
      "Mediterranean",
    ],
    "rio-de-janeiro": [
      "Brazilian",
      "Portuguese",
      "Italian",
      "Japanese",
      "Seafood",
    ],
    rome: ["Italian", "Mediterranean", "Roman", "Japanese", "French"],
    "san-francisco": ["American", "Chinese", "Mexican", "Japanese", "Italian"],
    "san-juan": ["Puerto Rican", "Caribbean", "Spanish", "American", "Seafood"],
    seattle: ["American", "Seafood", "Japanese", "Italian", "Thai"],
    singapore: ["Singaporean", "Chinese", "Malaysian", "Indian", "Japanese"],
    southampton: ["British", "Italian", "Indian", "French", "Mediterranean"],
    sydney: ["Australian", "Seafood", "Italian", "Asian", "Mediterranean"],
    tampa: ["American", "Cuban", "Seafood", "Italian", "Spanish"],
    tokyo: ["Japanese", "Italian", "French", "Chinese", "Korean"],
    toronto: ["Canadian", "Italian", "Chinese", "Indian", "Japanese"],
    vancouver: ["Canadian", "Asian", "Seafood", "Italian", "Mediterranean"],
    venice: ["Italian", "Venetian", "Mediterranean", "Seafood", "Japanese"],
    yokohama: ["Japanese", "Chinese", "Italian", "French", "American"],
  };

  const defaultCuisines = [
    "Italian",
    "Mediterranean",
    "American",
    "French",
    "Japanese",
  ];
  const cityCuisines = cuisinesByRegion[cityName] || defaultCuisines;

  const defaultPrefix = ["The", "Royal", "Blue", "Golden", "Grand"];
  const cityPrefix = restaurantNamePrefix[cityName] || defaultPrefix;

  // Generate 'count' restaurants for this city instead of a random number
  const restaurants = [];

  // Helper functions
  const getRandomCuisine = () => {
    const cuisines = cityCuisines.length > 0 ? cityCuisines : defaultCuisines;
    return cuisines[Math.floor(Math.random() * cuisines.length)];
  };

  const getRandomName = () => {
    const prefix = cityPrefix[Math.floor(Math.random() * cityPrefix.length)];
    const suffix =
      restaurantNameSuffix[
        Math.floor(Math.random() * restaurantNameSuffix.length)
      ];
    return `${prefix} ${suffix}`;
  };

  const emailStarter =
    generalEmailStarters[
      Math.floor(Math.random() * generalEmailStarters.length)
    ];

  const priceRange = getRandomPrice();

  let fineDining = false;
  if (priceRange === "$$$$") {
    fineDining = true;
  } else if (priceRange === "$$$") {
    fineDining = getRandomBool(0.5);
  } else if (priceRange === "$$") {
    fineDining = getRandomBool(0.2);
  } else if (priceRange === "$") {
    fineDining = getRandomBool(0.1);
  }

  const veganFriendly = getRandomBool(0.5);
  let vegetarianFriendly = false;

  if (veganFriendly) {
    vegetarianFriendly = true;
  }

  // Generate restaurants for this city
  for (let i = 0; i < count; i++) {
    const cuisine = getRandomCuisine();

    restaurants.push({
      name: getRandomName(),
      description:
        restaurantTemplate[
          Math.floor(Math.random() * restaurantTemplate.length)
        ],
      cuisine,
      priceRange: `${priceRange}`,
      rating: getRandomRating(),
      openingHours: getRandomHours(),
      contactInfo: {
        contactNumber: `+1-555-${Math.floor(Math.random() * 900) + 100}-${
          Math.floor(Math.random() * 9000) + 1000
        }`,
        contactEmail: `${emailStarter}@${formatTitleToCamelCase(getRandomName())
          .toLowerCase()
          .replace(/ /g, "")}${cityName}.com`,
      },
      isVegetarianFriendly: vegetarianFriendly,
      isVeganFriendly: veganFriendly,
      isGlutenFreeFriendly: getRandomBool(0.4),
      isHalalFriendly: getRandomBool(0.3),
      isKosherFriendly: getRandomBool(0.2),
      isFineDining: fineDining,
      isAdultOnly: getRandomBool(0.1),
      isIndoorSeating: getRandomBool(0.9),
      isReservationsAccepted: getRandomBool(0.8),
      isRomantic: getRandomBool(0.4),
      isPopular: getRandomBool(0.6),
    });
  }

  return restaurants;
};

// Main execution
const cityFiles = getCityFiles();

console.log(`Found ${cityFiles.length} cities to process`);

// Process each city
for (const city of cityFiles) {
  generateRestaurantsForCity(city);
}

// Add summary at the end
console.log("\n=== Script Complete ===");
console.log(`Processed ${cityFiles.length} cities`);
console.log(
  `Mode: ${
    APPEND_MODE ? "Append" : REWRITE_MODE ? "Rewrite" : "Create new only"
  }`
);
console.log(
  `${APPEND_MODE ? "Appended" : "Generated"} ${
    APPEND_MODE ? APPEND_COUNT : RESTAURANT_COUNT
  } restaurants per city`
);
console.log("Restaurant data generation completed for all cities");
console.log(`Debug mode: ${DEBUG_MODE ? "On" : "Off"}`);
