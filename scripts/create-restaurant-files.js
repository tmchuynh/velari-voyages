const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Function to convert kebab case to camelCase for variable naming
function toCamelCase(str) {
  return str
    .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
    .replace(/^([A-Z])/, (g) => g.toLowerCase());
}

// Base directory where city folders are located
const baseDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "resturants"
);

// Create the base directory if it doesn't exist
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
  console.log(`Created base directory: ${baseDir}`);
}

// Get a list of all city folders
let cityFolders = [];
try {
  cityFolders = fs.readdirSync(baseDir);
} catch (error) {
  console.error(`Error reading directory ${baseDir}:`, error);
  process.exit(1);
}

// Template for the restaurant file content
function getRestaurantFileContent(cityName) {
  const camelCaseCityName = toCamelCase(cityName);
  return `import { Resturant } from "@/lib/types/types";

export const ${camelCaseCityName}Resturants: Resturant[] = [];
`;
}

// Create resturants.ts file in each city folder
cityFolders.forEach((folderName) => {
  const folderPath = path.join(baseDir, folderName);

  // Check if it's a directory
  if (fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
    const restaurantFilePath = path.join(folderPath, "resturants.ts");

    // Create the restaurant file if it doesn't exist
    if (!fs.existsSync(restaurantFilePath)) {
      fs.writeFileSync(
        restaurantFilePath,
        getRestaurantFileContent(folderName)
      );
      console.log(`Created file: ${restaurantFilePath}`);
    } else {
      console.log(`File already exists: ${restaurantFilePath}`);
    }
  }
});

console.log("All restaurant files created successfully!");
