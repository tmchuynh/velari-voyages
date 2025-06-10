/**
 * Crew Member File Deletion Script
 * ================================
 *
 * This script manages the deletion of crew member data files for the Velari Voyages project.
 * Crew member files are TypeScript files (e.g., "{city-name}.ts") located in the
 * "src/lib/constants/crewMembers/" directory.
 *
 * Features:
 * - List available crew member files.
 * - Delete crew member files for a specific city.
 * - Delete crew member files matching a regular expression pattern.
 * - Interactive mode for selecting files to delete or deleting all files.
 * - Force mode to skip confirmation prompts.
 * - Help option to display usage instructions.
 *
 * Usage Examples:
 * --------------
 * # List all available crew member files without deleting:
 * node scripts/delete-crew-members.mjs --list
 *
 * # Delete the crew member file for "miami" (will prompt for confirmation):
 * node scripts/delete-crew-members.mjs --city miami
 *
 * # Delete crew member files for cities starting with "new-" or "los-"
 * # without prompting for confirmation:
 * node scripts/delete-crew-members.mjs --pattern "new-|los-" --force
 *
 * # Start interactive mode (default behavior if no other primary options are given):
 * node scripts/delete-crew-members.mjs
 *
 * # Show help message:
 * node scripts/delete-crew-members.mjs --help
 *
 * Command-line Options:
 * ------------------
 * --list, -l               List all available crew member files and exit.
 *                          No deletion occurs with this flag.
 *
 * --city, -c <city-name>   Specify the city name for whose crew member file
 *                          is to be deleted.
 *                          Example: --city barcelona
 *
 * --pattern, -p <pattern>  Specify a regular expression pattern. Crew member files
 *                          whose names match this pattern will be targeted for deletion.
 *                          Example: --pattern "^san-.*" (cities starting with "san-")
 *
 * --force, -f              Skip all confirmation prompts. Use with caution.
 *                          Example: node scripts/delete-crew-members.mjs --city london --force
 *
 * --help, -h               Display this help message and exit.
 *
 * Interactive Mode:
 * -----------------
 * If run without --list, --city, or --pattern, the script enters interactive mode:
 * 1. It lists all found crew member files.
 * 2. Prompts the user to:
 *    - [d]elete all listed files.
 *    - [s]elect specific files from the list to delete.
 *    - [c]ancel the operation.
 * Confirmations are required unless --force is used.
 *
 * Target Directory:
 * -----------------
 * The script operates on files within:
 * src/lib/constants/crewMembers/
 */

import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory for crew member files
const crewMembersDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "crewMembers",
);

// Parse command line arguments
const args = process.argv.slice(2);
const helpFlag = args.includes("--help") || args.includes("-h");
const forceFlag = args.includes("--force") || args.includes("-f");
const cityFlag = args.findIndex((arg) => arg === "--city" || arg === "-c");
const patternFlag = args.findIndex(
  (arg) => arg === "--pattern" || arg === "-p",
);
const listFlag = args.includes("--list") || args.includes("-l");

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Show help message
if (helpFlag) {
  console.log(`
Usage: node scripts/delete-crew-members.mjs [options]

Options:
  --help, -h                Show this help message
  --force, -f               Skip confirmation prompts
  --city, -c <city-name>    Delete crew members file for specific city
  --pattern, -p <pattern>   Delete crew members files matching pattern (e.g., "miami|new-york")
  --list, -l                List all available crew members files without deleting

Examples:
  node scripts/delete-crew-members.mjs --list
  node scripts/delete-crew-members.mjs --city miami
  node scripts/delete-crew-members.mjs --pattern "new-|los-" --force
  node scripts/delete-crew-members.mjs              # Interactive mode
`);
  process.exit(0);
}

// Check if crew members directory exists
if (!fs.existsSync(crewMembersDir)) {
  console.error(`Error: Crew members directory not found at ${crewMembersDir}`);
  process.exit(1);
}

// Get available crew member files
function getCrewMemberFiles() {
  try {
    return fs
      .readdirSync(crewMembersDir)
      .filter((file) => file.endsWith(".ts"))
      .map((file) => file.replace(".ts", ""));
  } catch (err) {
    console.error("Error reading crew members directory:", err);
    return [];
  }
}

// Function to delete a specific crew member file
function deleteCrewMemberFile(city) {
  const filePath = path.join(crewMembersDir, `${city}.ts`);

  if (!fs.existsSync(filePath)) {
    console.error(`Error: Crew member file for ${city} does not exist.`);
    return false;
  }

  try {
    fs.unlinkSync(filePath);
    console.log(`Successfully deleted crew member file for ${city}`);
    return true;
  } catch (err) {
    console.error(`Error deleting crew member file for ${city}:`, err);
    return false;
  }
}

// Function to confirm deletion with user
function confirmDeletion(message, callback) {
  if (forceFlag) {
    callback(true);
    return;
  }

  rl.question(`${message} (y/N): `, (answer) => {
    const confirmed =
      answer.toLowerCase() === "y" || answer.toLowerCase() === "yes";
    callback(confirmed);
  });
}

// Main execution path
async function main() {
  const crewMemberFiles = getCrewMemberFiles();

  // Just list files if requested
  if (listFlag) {
    console.log("Available crew member files:");
    crewMemberFiles.forEach((city) => console.log(`- ${city}`));
    rl.close();
    return;
  }

  // No crew member files found
  if (crewMemberFiles.length === 0) {
    console.log("No crew member files found. Nothing to delete.");
    rl.close();
    return;
  }

  // Delete a specific city
  if (cityFlag !== -1 && args.length > cityFlag + 1) {
    const cityToDelete = args[cityFlag + 1];

    if (!crewMemberFiles.includes(cityToDelete)) {
      console.error(
        `Error: No crew member file found for city '${cityToDelete}'`,
      );
      console.log("Available cities:", crewMemberFiles.join(", "));
      rl.close();
      return;
    }

    confirmDeletion(
      `Are you sure you want to delete the crew member file for ${cityToDelete}?`,
      (confirmed) => {
        if (confirmed) {
          deleteCrewMemberFile(cityToDelete);
        } else {
          console.log("Deletion cancelled.");
        }
        rl.close();
      },
    );
    return;
  }

  // Delete files matching pattern
  if (patternFlag !== -1 && args.length > patternFlag + 1) {
    const pattern = new RegExp(args[patternFlag + 1]);
    const matchingCities = crewMemberFiles.filter((city) => pattern.test(city));

    if (matchingCities.length === 0) {
      console.log(
        `No crew member files match the pattern '${args[patternFlag + 1]}'`,
      );
      rl.close();
      return;
    }

    console.log("The following crew member files match your pattern:");
    matchingCities.forEach((city) => console.log(`- ${city}`));

    confirmDeletion(
      `Are you sure you want to delete ${matchingCities.length} crew member files?`,
      (confirmed) => {
        if (confirmed) {
          let deletedCount = 0;
          matchingCities.forEach((city) => {
            if (deleteCrewMemberFile(city)) {
              deletedCount++;
            }
          });
          console.log(
            `Deleted ${deletedCount} of ${matchingCities.length} crew member files.`,
          );
        } else {
          console.log("Deletion cancelled.");
        }
        rl.close();
      },
    );
    return;
  }

  // Interactive mode - delete all or select from list
  console.log(`Found ${crewMemberFiles.length} crew member files.`);

  rl.question(
    `Do you want to [d]elete all, [s]elect from list, or [c]ancel? `,
    (answer) => {
      switch (answer.toLowerCase()) {
        case "d":
        case "delete":
        case "delete all":
          confirmDeletion(
            `Are you sure you want to delete ALL ${crewMemberFiles.length} crew member files?`,
            (confirmed) => {
              if (confirmed) {
                let deletedCount = 0;
                crewMemberFiles.forEach((city) => {
                  if (deleteCrewMemberFile(city)) {
                    deletedCount++;
                  }
                });
                console.log(
                  `Deleted ${deletedCount} of ${crewMemberFiles.length} crew member files.`,
                );
              } else {
                console.log("Deletion cancelled.");
              }
              rl.close();
            },
          );
          break;

        case "s":
        case "select":
          console.log("\nAvailable crew member files:");
          crewMemberFiles.forEach((city, index) => {
            console.log(`${index + 1}. ${city}`);
          });

          rl.question(
            "\nEnter the numbers of files to delete (comma-separated, e.g., '1,3,5'): ",
            (indexList) => {
              const selectedIndexes = indexList
                .split(",")
                .map((num) => parseInt(num.trim()) - 1)
                .filter(
                  (num) =>
                    !isNaN(num) && num >= 0 && num < crewMemberFiles.length,
                );

              if (selectedIndexes.length === 0) {
                console.log("No valid selections. Deletion cancelled.");
                rl.close();
                return;
              }

              const selectedCities = selectedIndexes.map(
                (index) => crewMemberFiles[index],
              );
              console.log("\nYou selected:");
              selectedCities.forEach((city) => console.log(`- ${city}`));

              confirmDeletion(
                `Are you sure you want to delete these ${selectedCities.length} crew member files?`,
                (confirmed) => {
                  if (confirmed) {
                    let deletedCount = 0;
                    selectedCities.forEach((city) => {
                      if (deleteCrewMemberFile(city)) {
                        deletedCount++;
                      }
                    });
                    console.log(
                      `Deleted ${deletedCount} of ${selectedCities.length} crew member files.`,
                    );
                  } else {
                    console.log("Deletion cancelled.");
                  }
                  rl.close();
                },
              );
            },
          );
          break;

        default:
          console.log("Operation cancelled.");
          rl.close();
      }
    },
  );
}

main().catch((err) => {
  console.error("Error:", err);
  rl.close();
});
