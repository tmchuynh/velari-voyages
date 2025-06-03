import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory where restaurant files are located
const baseDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "restaurants"
);

// Function to convert a string to kebab-case for file naming
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
}

// Function to convert a string to camelCase for variable naming
function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "") // Remove spaces
    .replace(/[^\w\s]/g, ""); // Remove special characters
}

// Function to extract restaurant names from a restaurants.ts file
function extractRestaurantNames(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");

    // More robust pattern to match restaurant name properties across different formats
    // Handles different quote styles and optional whitespace
    const namePattern = /name\s*:\s*(["'])((?:(?=(\\?))\3.)*?)\1/g;
    const matches = [];
    let match;

    while ((match = namePattern.exec(content)) !== null) {
      if (match[2]) {
        // The second capturing group contains the name
        matches.push(match[2]);
      }
    }

    if (matches.length === 0) {
      console.warn(`No restaurant names found in ${filePath}`);
    } else {
      console.log(`Found ${matches.length} restaurants in ${filePath}`);
    }

    return matches;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
}

// Function to generate menu file content with a more complete structure
function generateMenuFileContent(cityName, restaurantName) {
  const cityVar = toCamelCase(cityName);
  const restaurantVar = toCamelCase(restaurantName);

  return `import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for ${restaurantName} in ${cityName}
 */
export const ${cityVar}${restaurantVar}Menu: RestaurantMenu[] = [
  {
    title: "Main Menu",
    description: "Our carefully curated selection of dishes",
    category: [
      {
        name: "Signature Dishes",
        items: []
      },
      {
        name: "Starters",
        items: []
      },
      {
        name: "Main Courses",
        items: []
      },
      {
        name: "Desserts",
        items: []
      }
    ]
  }
];
`;
}

// Get all city directories
let cityDirs = [];
try {
  cityDirs = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  console.log(`Found ${cityDirs.length} city directories`);
} catch (error) {
  console.error(`Error reading base directory ${baseDir}:`, error);
  process.exit(1);
}

// Count for summary
let totalCreated = 0;
let totalExisting = 0;
let totalFailed = 0;

// Process each city directory
cityDirs.forEach((cityDir) => {
  const cityPath = path.join(baseDir, cityDir);
  const restaurantsFilePath = path.join(cityPath, "restaurants.ts");

  // Check if the restaurants.ts file exists
  if (fs.existsSync(restaurantsFilePath)) {
    console.log(`Processing ${cityDir}/restaurants.ts...`);

    // Extract restaurant names from the file
    const restaurantNames = extractRestaurantNames(restaurantsFilePath);

    // Create a file for each restaurant
    restaurantNames.forEach((restaurantName) => {
      const kebabName = toKebabCase(restaurantName);

      if (!kebabName) {
        console.error(
          `Failed to generate valid filename for "${restaurantName}"`
        );
        totalFailed++;
        return;
      }

      const menuFilePath = path.join(cityPath, `${kebabName}.ts`);

      // Create the menu file if it doesn't exist
      try {
        if (!fs.existsSync(menuFilePath)) {
          fs.writeFileSync(
            menuFilePath,
            generateMenuFileContent(cityDir, restaurantName)
          );
          console.log(`Created menu file: ${menuFilePath}`);
          totalCreated++;
        } else {
          console.log(`File already exists: ${menuFilePath}`);
          totalExisting++;
        }
      } catch (err) {
        console.error(`Error creating file for ${restaurantName}:`, err);
        totalFailed++;
      }
    });
  } else {
    console.warn(`Restaurant file not found: ${restaurantsFilePath}`);
  }
});

console.log("=== Script Complete ===");
console.log(`Created ${totalCreated} new menu files`);
console.log(`Found ${totalExisting} existing menu files`);
if (totalFailed > 0) {
  console.log(`Failed to create ${totalFailed} menu files`);
}
console.log("All restaurant menu files process completed!");
