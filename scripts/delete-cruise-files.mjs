import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

// List mode: Just show available cruise files without deleting
// node scripts/delete-cruise-files.mjs --list

// Delete specific city:
// node scripts/delete-cruise-files.mjs --city miami

// Delete by pattern:
// node scripts/delete-cruise-files.mjs --pattern "new-|los-"

// Force delete (skip confirmations):
// node scripts/delete-cruise-files.mjs --force --city miami

// Interactive mode (default):
// node scripts/delete-cruise-files.mjs

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory for cruise files
const cruisesDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises"
);

// Parse command line arguments
const args = process.argv.slice(2);
const helpFlag = args.includes("--help") || args.includes("-h");
const forceFlag = args.includes("--force") || args.includes("-f");
const cityFlag = args.findIndex((arg) => arg === "--city" || arg === "-c");
const patternFlag = args.findIndex(
  (arg) => arg === "--pattern" || arg === "-p"
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
Usage: node scripts/delete-cruise-files.mjs [options]

Options:
  --help, -h                Show this help message
  --force, -f               Skip confirmation prompts
  --city, -c <city-name>    Delete cruise file for specific city
  --pattern, -p <pattern>   Delete cruise files matching pattern (e.g., "miami|new-york")
  --list, -l                List all available cruise files without deleting

Examples:
  node scripts/delete-cruise-files.mjs --list
  node scripts/delete-cruise-files.mjs --city miami
  node scripts/delete-cruise-files.mjs --pattern "new-|los-" --force
  node scripts/delete-cruise-files.mjs              # Interactive mode
`);
  process.exit(0);
}

// Check if cruises directory exists
if (!fs.existsSync(cruisesDir)) {
  console.error(`Error: Cruise files directory not found at ${cruisesDir}`);
  process.exit(1);
}

// Get available cruise files
function getCruiseFiles() {
  try {
    return fs
      .readdirSync(cruisesDir)
      .filter((file) => file.endsWith("-cruises.ts"))
      .map((file) => file.replace("-cruises.ts", ""));
  } catch (err) {
    console.error("Error reading cruise files directory:", err);
    return [];
  }
}

// Function to delete a specific cruise file
function deleteCruiseFile(city) {
  const filePath = path.join(cruisesDir, `${city}-cruises.ts`);

  if (!fs.existsSync(filePath)) {
    console.error(`Error: Cruise file for ${city} does not exist.`);
    return false;
  }

  try {
    fs.unlinkSync(filePath);
    console.log(`Successfully deleted cruise file for ${city}`);
    return true;
  } catch (err) {
    console.error(`Error deleting cruise file for ${city}:`, err);
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
  const cruiseFiles = getCruiseFiles();

  // Just list files if requested
  if (listFlag) {
    console.log("Available cruise files:");
    cruiseFiles.forEach((city) => console.log(`- ${city}`));
    rl.close();
    return;
  }

  // No cruise files found
  if (cruiseFiles.length === 0) {
    console.log("No cruise files found. Nothing to delete.");
    rl.close();
    return;
  }

  // Delete a specific city
  if (cityFlag !== -1 && args.length > cityFlag + 1) {
    const cityToDelete = args[cityFlag + 1];

    if (!cruiseFiles.includes(cityToDelete)) {
      console.error(`Error: No cruise file found for city '${cityToDelete}'`);
      console.log("Available cities:", cruiseFiles.join(", "));
      rl.close();
      return;
    }

    confirmDeletion(
      `Are you sure you want to delete the cruise file for ${cityToDelete}?`,
      (confirmed) => {
        if (confirmed) {
          deleteCruiseFile(cityToDelete);
        } else {
          console.log("Deletion cancelled.");
        }
        rl.close();
      }
    );
    return;
  }

  // Delete files matching pattern
  if (patternFlag !== -1 && args.length > patternFlag + 1) {
    const pattern = new RegExp(args[patternFlag + 1]);
    const matchingCities = cruiseFiles.filter((city) => pattern.test(city));

    if (matchingCities.length === 0) {
      console.log(
        `No cruise files match the pattern '${args[patternFlag + 1]}'`
      );
      rl.close();
      return;
    }

    console.log("The following cruise files match your pattern:");
    matchingCities.forEach((city) => console.log(`- ${city}`));

    confirmDeletion(
      `Are you sure you want to delete ${matchingCities.length} cruise files?`,
      (confirmed) => {
        if (confirmed) {
          let deletedCount = 0;
          matchingCities.forEach((city) => {
            if (deleteCruiseFile(city)) {
              deletedCount++;
            }
          });
          console.log(
            `Deleted ${deletedCount} of ${matchingCities.length} cruise files.`
          );
        } else {
          console.log("Deletion cancelled.");
        }
        rl.close();
      }
    );
    return;
  }

  // Interactive mode - delete all or select from list
  console.log(`Found ${cruiseFiles.length} cruise files.`);

  rl.question(
    `Do you want to [d]elete all, [s]elect from list, or [c]ancel? `,
    (answer) => {
      switch (answer.toLowerCase()) {
        case "d":
        case "delete":
        case "delete all":
          confirmDeletion(
            `Are you sure you want to delete ALL ${cruiseFiles.length} cruise files?`,
            (confirmed) => {
              if (confirmed) {
                let deletedCount = 0;
                cruiseFiles.forEach((city) => {
                  if (deleteCruiseFile(city)) {
                    deletedCount++;
                  }
                });
                console.log(
                  `Deleted ${deletedCount} of ${cruiseFiles.length} cruise files.`
                );
              } else {
                console.log("Deletion cancelled.");
              }
              rl.close();
            }
          );
          break;

        case "s":
        case "select":
          console.log("\nAvailable cruise files:");
          cruiseFiles.forEach((city, index) => {
            console.log(`${index + 1}. ${city}`);
          });

          rl.question(
            "\nEnter the numbers of files to delete (comma-separated, e.g., '1,3,5'): ",
            (indexList) => {
              const selectedIndexes = indexList
                .split(",")
                .map((num) => parseInt(num.trim()) - 1)
                .filter(
                  (num) => !isNaN(num) && num >= 0 && num < cruiseFiles.length
                );

              if (selectedIndexes.length === 0) {
                console.log("No valid selections. Deletion cancelled.");
                rl.close();
                return;
              }

              const selectedCities = selectedIndexes.map(
                (index) => cruiseFiles[index]
              );
              console.log("\nYou selected:");
              selectedCities.forEach((city) => console.log(`- ${city}`));

              confirmDeletion(
                `Are you sure you want to delete these ${selectedCities.length} cruise files?`,
                (confirmed) => {
                  if (confirmed) {
                    let deletedCount = 0;
                    selectedCities.forEach((city) => {
                      if (deleteCruiseFile(city)) {
                        deletedCount++;
                      }
                    });
                    console.log(
                      `Deleted ${deletedCount} of ${selectedCities.length} cruise files.`
                    );
                  } else {
                    console.log("Deletion cancelled.");
                  }
                  rl.close();
                }
              );
            }
          );
          break;

        default:
          console.log("Operation cancelled.");
          rl.close();
      }
    }
  );
}

main().catch((err) => {
  console.error("Error:", err);
  rl.close();
});
