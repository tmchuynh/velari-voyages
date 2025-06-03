const fs = require("fs");
const path = require("path");

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

// List of cities from cityFiles array
const cityFiles = [
  "auckland",
  "amsterdam",
  "barcelona",
  "berlin",
  "boston",
  "buenos-aires",
  "cape-town",
  "charleston",
  "copenhagen",
  "dubai",
  "dublin",
  "florence",
  "fort-lauderdale",
  "galveston",
  "hong-kong",
  "kyoto",
  "lisbon",
  "london",
  "los-angeles",
  "melbourne",
  "miami",
  "milan",
  "montreal",
  "new-orleans",
  "new-york-city",
  "paris",
  "quebec-city",
  "rio-de-janeiro",
  "rome",
  "san-francisco",
  "san-juan",
  "seattle",
  "singapore",
  "southampton",
  "sydney",
  "tampa",
  "tokyo",
  "toronto",
  "vancouver",
  "venice",
  "yokohama",
];

// Template for the restaurant file content
function getRestaurantFileContent(cityName) {
  const camelCaseCityName = toCamelCase(cityName);
  return `import { Resturant } from "@/lib/types/types";

export const ${camelCaseCityName}Resturants: Resturant[] = [];
`;
}

// Create folders and restaurant files for each city
cityFiles.forEach((cityName) => {
  // Create the city folder if it doesn't exist
  const cityFolderPath = path.join(baseDir, cityName);
  if (!fs.existsSync(cityFolderPath)) {
    fs.mkdirSync(cityFolderPath, { recursive: true });
    console.log(`Created folder: ${cityFolderPath}`);
  }

  // Create the restaurant file in the city folder
  const restaurantFilePath = path.join(cityFolderPath, "resturants.ts");
  fs.writeFileSync(restaurantFilePath, getRestaurantFileContent(cityName));
  console.log(`Created/Updated file: ${restaurantFilePath}`);
});

console.log("All restaurant files created successfully!");
