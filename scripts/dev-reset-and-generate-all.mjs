/**
 * Development Reset and Generation Script
 * ======================================
 *
 * This script performs a complete development environment reset for the Velari Voyages project.
 * It deletes all generated data files and runs all generation scripts in the correct dependency order
 * to create a fresh set of data for development and testing purposes.
 *
 * Features:
 * - Safely deletes all generated directories and files
 * - Executes generation scripts in proper dependency order
 * - Handles script execution errors with proper exit codes
 * - Creates comprehensive data sets for all project components
 * - Supports both initial data generation and append operations
 * - Provides detailed console output for monitoring progress
 *
 * Usage Examples:
 * --------------
 * # Complete development reset and regeneration
 * node scripts/dev-reset-and-generate-all.mjs
 *
 * Generated Data:
 * --------------
 * The script generates the following data sets:
 * - City vessel files with ship assignments
 * - Cruise itineraries and schedules (initial + additional)
 * - Crew member rosters for all departments
 * - Restaurant data and information
 * - Restaurant menus with items and pricing
 * - Customer testimonials for restaurants
 *
 * Execution Order:
 * ---------------
 * 1. Delete existing generated directories
 * 2. Create city vessel files
 * 3. Create initial cruise files
 * 4. Append additional cruise data
 * 5. Generate crew member data
 * 6. Create restaurant data
 * 7. Append additional restaurant data
 * 8. Generate restaurant menu files
 * 9. Append additional menu items
 * 10. Create restaurant testimonials
 * 11. Append additional testimonials
 *
 * Deleted Directories:
 * -------------------
 * - src/lib/constants/crewMembers/
 * - src/lib/constants/cruises/
 * - src/lib/constants/venues/
 *
 * Output Files:
 * ------------
 * The script generates TypeScript files across multiple directories:
 * - src/lib/constants/crewMembers/{city-name}.ts
 * - src/lib/constants/cruises/{city-name}/
 * - src/lib/constants/venues/{city-name}/
 *
 * All generated files are compatible with their respective TypeScript interfaces
 * and follow the project's naming and structure conventions.
 */
import { execSync } from "child_process";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

// Paths to generated directories/files to delete
const generatedPaths = [
  path.join(root, "src/lib/constants/crewMembers"),
  path.join(root, "src/lib/constants/cruises"),
  path.join(root, "src/lib/constants/venues"),
];

// Replace deleteRecursive with async/await version using fs.promises
async function deleteRecursive(targetPath) {
  try {
    const stat = await fs.stat(targetPath);
    if (stat.isDirectory()) {
      await fs.rm(targetPath, { recursive: true, force: true });
      console.log("Deleted directory:", targetPath);
    } else {
      await fs.unlink(targetPath);
      console.log("Deleted file:", targetPath);
    }
  } catch (err) {
    // Ignore if file/directory does not exist
  }
}

console.log("--- Deleting generated files and directories ---");
await Promise.all(generatedPaths.map(deleteRecursive));

console.log("--- Running generation scripts in order ---");

const scripts = [
  "node scripts/create-city-vessel-files.mjs",
  "node scripts/create-city-cruise-files.mjs",
  "node scripts/create-city-cruise-files.mjs --append 9",
  "node scripts/create-crew-members.mjs",
  "node scripts/create-restaurant-data.mjs",
  "node scripts/create-restaurant-data.mjs --append --append-count=10",
  "node scripts/create-restaurant-menu-files.mjs",
  "node scripts/create-restaurant-menu-files.mjs --items 10 --append --append-count=10",
  "node scripts/create-restaurant-testimonials-files.mjs",
  "node scripts/create-restaurant-testimonials-files.mjs --append --count=8",
];

for (const cmd of scripts) {
  console.log(`\n>>> Running: ${cmd}`);
  try {
    execSync(cmd, { stdio: "inherit", cwd: root });
  } catch (err) {
    console.error(`Error running: ${cmd}`);
    process.exit(1);
  }
}

console.log("\n--- Dev reset and generation complete! ---");
