import fs from "fs";
import path from "path";
import readline from "readline";
import { getCityFiles, getDirname } from "./utils/file-utils.mjs";

// node scripts/delete-restaurant-menu-files.mjs

// Setup dirname
const __dirname = getDirname(import.meta.url);

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

// Get city files
const cityFiles = getCityFiles();

// Create readline interface for user confirmation
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Main function to delete restaurant files
async function deleteRestaurantFiles() {
  console.log("Starting restaurant files deletion script...");

  // Check if base directory exists
  if (!fs.existsSync(baseDir)) {
    console.error(`Error: Base directory not found: ${baseDir}`);
    rl.close();
    return;
  }

  // Ask for confirmation before proceeding
  const answer = await new Promise((resolve) => {
    rl.question(
      `This will delete all restaurant files (except restaurants.ts) in ${cityFiles.length} cities. Continue? (y/n): `,
      resolve
    );
  });

  if (answer.toLowerCase() !== "y") {
    console.log("Operation cancelled.");
    rl.close();
    return;
  }

  let totalDeleted = 0;
  let processedCities = 0;
  let missingCities = 0;

  // Process each city from our predefined list
  for (const cityDir of cityFiles) {
    const cityPath = path.join(baseDir, cityDir);

    // Check if directory exists before proceeding
    if (!fs.existsSync(cityPath)) {
      console.log(
        `Warning: Directory for ${cityDir} does not exist. Skipping.`
      );
      missingCities++;
      continue;
    }

    processedCities++;

    try {
      // Get all .ts files in the directory (except restaurants.ts)
      const files = fs
        .readdirSync(cityPath)
        .filter((file) => file.endsWith(".ts") && file !== "restaurants.ts");

      console.log(
        `Found ${files.length} restaurant files to delete in ${cityDir}...`
      );

      // Delete each file
      files.forEach((file) => {
        const filePath = path.join(cityPath, file);
        fs.unlinkSync(filePath);
        totalDeleted++;
        console.log(`Deleted: ${filePath}`);
      });
    } catch (error) {
      console.error(`Error processing directory ${cityDir}: ${error.message}`);
    }
  }

  console.log(
    `Operation complete. Deleted ${totalDeleted} restaurant files across ${processedCities} cities.`
  );
  if (missingCities > 0) {
    console.log(`Note: ${missingCities} city directories were not found.`);
  }
  rl.close();
}

// Run the script
deleteRestaurantFiles();
