/**
 * Restaurant Menu Files Deletion Script
 * =====================================
 *
 * This script is designed to delete restaurant-specific menu files for the Velari Voyages project.
 * It targets all TypeScript (.ts) files within each city's restaurant directory,
 * *except* for the main "restaurants.ts" file (which contains the list of restaurants for that city).
 *
 * Menu files are typically named like "{restaurantName}Menu.ts" or "{restaurantName}-{menuType}Menu.ts"
 * and are located in:
 * "src/lib/constants/cruises/restaurants/{cityName}/"
 *
 * Features:
 * - Iterates through a predefined list of city directories.
 * - For each city, it deletes all .ts files in its restaurant subdirectory,
 *   excluding "restaurants.ts".
 * - Prompts for a single confirmation before proceeding with the deletion across all cities.
 * - Provides a summary of the deletion process, including the number of files deleted
 *   and cities processed.
 *
 * Usage:
 * ------
 * # To run the script and delete all applicable restaurant menu files (after confirmation):
 * node scripts/delete-restaurant-menu-files.mjs
 *
 * Operation:
 * ----------
 * 1. The script retrieves a list of city directories to process.
 * 2. It asks for a global confirmation before deleting any files.
 * 3. If confirmed, it iterates through each city directory:
 *    a. Reads all files in "src/lib/constants/cruises/restaurants/{cityName}/".
 *    b. Deletes every file ending in ".ts" except for "restaurants.ts".
 * 4. A summary of actions is displayed upon completion.
 *
 * Note: This script does not currently support selective deletion by restaurant name,
 *       menu type, or pattern via command-line arguments. It is an "all or nothing"
 *       (excluding "restaurants.ts") deletion tool for menu files, with a confirmation step.
 *
 * Target Directory Structure:
 * ---------------------------
 * The script operates on files within:
 * src/lib/constants/cruises/restaurants/{cityName}/{menuFileName}.ts
 * (e.g., src/lib/constants/cruises/restaurants/london/the-golden-plateMenu.ts)
 * It specifically avoids deleting:
 * src/lib/constants/cruises/restaurants/{cityName}/restaurants.ts
 */

import fs from "fs";
import path from "path";
import readline from "readline";
import { getCityFiles, getDirname } from "./utils/file-utils.mjs";

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
