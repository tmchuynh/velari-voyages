import { execSync } from "child_process";
import { existsSync, mkdirSync } from "fs";
import { join } from "path";

// Function to convert string to kebab case
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

// Update path to create folders in the restaurants directory
const outputDir = join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "resturants"
);

// Make sure the base directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Run a simple script to extract city names from the TypeScript file
const cityDataPath = join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "info",
  "city.ts"
);
const scriptToExtractCities = `
  const fs = require('fs');
  const cities = [];
  const content = fs.readFileSync('${cityDataPath.replace(
    /\\/g,
    "\\\\"
  )}', 'utf-8');
  const matches = content.match(/city: "([^"]+)"/g) || [];
  matches.forEach(match => {
    const city = match.replace(/city: "/, '').replace(/"$/, '');
    cities.push(city);
  });
  console.log(JSON.stringify(cities));
`;

// Execute the extraction script
const citiesJson = execSync(
  `node -e "${scriptToExtractCities.replace(/"/g, '\\"').replace(/\n/g, " ")}"`
).toString();
const cities = JSON.parse(citiesJson);

// Create a folder for each city in kebab case
cities.forEach((city) => {
  const folderName = toKebabCase(city);
  const folderPath = join(outputDir, folderName);

  if (!existsSync(folderPath)) {
    mkdirSync(folderPath);
    console.log(`Created folder: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }
});

console.log("All city folders created successfully!");
