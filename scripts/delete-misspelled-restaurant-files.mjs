import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get project root path (one level up from scripts folder)
const projectRoot = join(__dirname, "..");

// Base directory where city folders are located
const baseDir = join(
  projectRoot,
  "src",
  "lib",
  "constants",
  "cruises",
  "restaurants"
);

// List of cities (same as in your create-restaurant-files.mjs script)
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
  "kiel",
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

let deletedCount = 0;

// Go through each city folder and delete misspelled files
cityFiles.forEach((cityName) => {
  const cityFolderPath = join(baseDir, cityName);

  // Skip if the city folder doesn't exist
  if (!fs.existsSync(cityFolderPath)) {
    console.log(`Skipping: ${cityFolderPath} (folder doesn't exist)`);
    return;
  }

  // Check for the misspelled file
  const misspelledFilePath = join(cityFolderPath, "resturants.ts");

  // Delete the misspelled file if it exists
  if (fs.existsSync(misspelledFilePath)) {
    fs.unlinkSync(misspelledFilePath);
    console.log(`Deleted misspelled file: ${misspelledFilePath}`);
    deletedCount++;
  }
});

console.log(`Deleted ${deletedCount} misspelled restaurant files.`);
console.log("Cleanup completed successfully!");
