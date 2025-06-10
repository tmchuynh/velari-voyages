/**
 * Restaurant Testimonial Files Deletion Script
 * ============================================
 *
 * This script is designed to delete all restaurant testimonial files for the Velari Voyages project.
 * Testimonial files are expected to be TypeScript files ending with "-testimonials.ts"
 * and located within city-specific subdirectories under:
 * "src/lib/constants/cruises/testimonials/{cityName}/"
 *
 * Features:
 * - Scans all city-specific testimonial directories.
 * - Deletes all files matching the "*-testimonials.ts" pattern within these directories.
 * - Prompts for a single confirmation before proceeding with the deletion of all found files.
 * - Provides a summary of the deletion process, including the number of files deleted
 *   and any errors encountered.
 *
 * Usage:
 * ------
 * # To run the script and delete all restaurant testimonial files (after confirmation):
 * node scripts/delete-restaurant-testimonials-files.mjs
 *
 * Operation:
 * ----------
 * 1. The script identifies all city directories within the base testimonials path.
 * 2. It asks for a global confirmation before deleting any files.
 * 3. If confirmed, it iterates through each city directory, finds all files ending
 *    with "-testimonials.ts", and deletes them.
 * 4. A summary of actions is displayed upon completion.
 *
 * Note: This script does not currently support selective deletion by city or pattern
 *       via command-line arguments. It is an "all or nothing" deletion tool for
 *       restaurant testimonial files, with a confirmation step.
 *
 * Target Directory Structure:
 * ---------------------------
 * The script operates on files within:
 * src/lib/constants/cruises/testimonials/{cityName}/{restaurantName}-testimonials.ts
 * (e.g., src/lib/constants/cruises/testimonials/london/the-riverside-grill-testimonials.ts)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Base directory where testimonial files are located - fixed the path (removed one "..")
const baseDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "testimonials"
);

console.log(`Looking for testimonial files in: ${baseDir}`);

// Main function to handle the deletion process
async function deleteTestimonialFiles() {
  // Check if base directory exists
  if (!fs.existsSync(baseDir)) {
    console.error(`Error: Base directory not found: ${baseDir}`);
    rl.close();
    process.exit(1);
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
    rl.close();
    process.exit(1);
  }

  // Ask for confirmation
  const answer = await new Promise((resolve) => {
    rl.question(
      `This will delete ALL testimonial files in ${cityDirs.length} city directories. Continue? (y/n): `,
      resolve
    );
  });

  if (answer.toLowerCase() !== "y") {
    console.log("Operation cancelled.");
    rl.close();
    return;
  }

  let totalDeleted = 0;
  let totalNotFound = 0;
  let citiesProcessed = 0;

  // Process each city directory
  for (const cityDir of cityDirs) {
    const cityPath = path.join(baseDir, cityDir);
    citiesProcessed++;

    console.log(
      `Processing ${cityDir} (${citiesProcessed}/${cityDirs.length})`
    );

    try {
      // Get all testimonial files in the city directory
      const files = fs
        .readdirSync(cityPath)
        .filter((file) => file.endsWith("-testimonials.ts"));

      console.log(`  Found ${files.length} testimonial files`);

      // Delete each testimonial file
      for (const file of files) {
        const filePath = path.join(cityPath, file);

        try {
          fs.unlinkSync(filePath);
          console.log(`  Deleted: ${file}`);
          totalDeleted++;
        } catch (err) {
          console.error(`  Failed to delete ${file}:`, err);
          totalNotFound++;
        }
      }
    } catch (err) {
      console.error(`Error processing directory ${cityPath}:`, err);
    }
  }

  console.log("\n=== Summary ===");
  console.log(`Cities processed: ${citiesProcessed}`);
  console.log(`Total files deleted: ${totalDeleted}`);

  if (totalNotFound > 0) {
    console.log(`Total files not found or failed: ${totalNotFound}`);
  }

  console.log("Testimonial file deletion process completed!");
  rl.close();
}

// Run the script
deleteTestimonialFiles();
