const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Base directory where restaurant files are located
const baseDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "resturants"
);

// Function to convert a string to kebab-case for file naming
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen
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

// Function to extract restaurant names from a resturants.ts file
function extractRestaurantNames(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");

    // Looking for objects with name property in the array
    const matches = content.match(/name:\s*["']([^"']+)["']/g) || [];

    return matches.map((match) => {
      // Extract just the name between quotes
      return match.match(/["']([^"']+)["']/)[1];
    });
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
}

// Function to generate menu file content
function generateMenuFileContent(cityName, restaurantName) {
  const cityVar = toCamelCase(cityName);
  const restaurantVar = toCamelCase(restaurantName);

  return `import { Testimonial } from "@/lib/interfaces/services/testimonials";

export const ${cityVar}${restaurantVar}Testimonials: Testimonial[] = [];
`;
}

// Get all city directories
let cityDirs = [];
try {
  cityDirs = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
} catch (error) {
  console.error(`Error reading base directory ${baseDir}:`, error);
  process.exit(1);
}

// Process each city directory
cityDirs.forEach((cityDir) => {
  const cityPath = path.join(baseDir, cityDir);
  const restaurantsFilePath = path.join(cityPath, "resturants.ts");

  // Check if the resturants.ts file exists
  if (fs.existsSync(restaurantsFilePath)) {
    console.log(`Processing ${cityDir}/resturants.ts...`);

    // Extract restaurant names from the file
    const restaurantNames = extractRestaurantNames(restaurantsFilePath);

    // Create a file for each restaurant
    restaurantNames.forEach((restaurantName) => {
      const kebabName = toKebabCase(restaurantName) + "-testimonials";
      const menuFilePath = path.join(cityPath, `${kebabName}.ts`);

      // Create the menu file if it doesn't exist
      if (!fs.existsSync(menuFilePath)) {
        fs.writeFileSync(
          menuFilePath,
          generateMenuFileContent(cityDir, restaurantName)
        );
        console.log(`Created testimonial file: ${menuFilePath}`);
      } else {
        console.log(`File already exists: ${menuFilePath}`);
      }
    });
  } else {
    console.warn(`Restaurant file not found: ${restaurantsFilePath}`);
  }
});

console.log("All testimonial files created successfully!");
