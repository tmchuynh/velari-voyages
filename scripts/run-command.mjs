import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const commandsDir = path.join(__dirname, "commands");

/**
 * Command Runner for Project Scripts
 *
 * Available Delete Commands:
 *
 * - delete-restaurant-menu-files:
 *   Description: Deletes restaurant menu files while preserving the main restaurants.ts index
 *   Options:
 *     --force, -f      Skip confirmation prompts
 *     --quiet, -q      Reduce output verbosity
 *     --debug, -d      Show additional debug information
 *     --help, -h       Show command help
 *   Usage: node scripts/run-command.mjs delete-restaurant-menu-files [--force] [--quiet]
 *
 * - delete-crew-members:
 *   Description: Deletes crew member data files for specific or multiple cities
 *   Options:
 *     --city, -c       Specify a single city to delete crew data for
 *     --pattern, -p    Delete files matching a regex pattern (e.g., "new-|miami")
 *     --force, -f      Skip confirmation prompts
 *     --list, -l       Only list files without deleting
 *     --help, -h       Show command help
 *   Usage: node scripts/run-command.mjs delete-crew-members [--city miami] [--pattern "new-|los-"]
 *
 * - delete-cruise-files:
 *   Description: Deletes cruise data files for specific cities or matching patterns
 *   Options:
 *     --city, -c       Specify a single city to delete cruise data for
 *     --pattern, -p    Delete files matching a regex pattern (e.g., "new-|miami")
 *     --force, -f      Skip confirmation prompts
 *     --list, -l       Only list files without deleting
 *     --help, -h       Show command help
 *   Usage: node scripts/run-command.mjs delete-cruise-files [--city miami] [--pattern "new-|los-"]
 *
 * - delete-restaurant-testimonials-files:
 *   Description: Deletes testimonial files from restaurant/testimonial directories
 *   Options:
 *     --force, -f      Skip confirmation prompts (if implemented)
 *     --summary        Show only summary without detailed output
 *   Usage: node scripts/run-command.mjs delete-restaurant-testimonials-files [--force]
 *
 * Interactive Modes:
 * All deletion commands support an interactive mode when run without specific targets:
 * - List all available files
 * - Choose to delete all files
 * - Select specific files to delete from a numbered list
 *
 * Example Commands:
 *
 * # Show available crew member files without deleting
 * node scripts/run-command.mjs delete-crew-members --list
 *
 * # Delete crew files for a specific city with confirmation
 * node scripts/run-command.mjs delete-crew-members --city miami
 *
 * # Force delete all cruise files matching a pattern
 * node scripts/run-command.mjs delete-cruise-files --pattern "new-|san-" --force
 *
 * # Delete restaurant menu files quietly (less verbose output)
 * node scripts/run-command.mjs delete-restaurant-menu-files --quiet
 *
 * # Show help for a specific command
 * node scripts/run-command.mjs delete-cruise-files --help
 *
 * All commands support the --help flag to display detailed usage information.
 * Example: node scripts/run-command.mjs delete-crew-members --help
 */

async function runCommand() {
  // Get the command name from args
  const commandName = process.argv[2];

  if (!commandName) {
    console.error("Error: No command specified");
    showAvailableCommands();
    process.exit(1);
  }

  // Try both with and without .mjs extension
  const commandFilePath = path.join(commandsDir, `${commandName}.mjs`);
  const commandFileExists = fs.existsSync(commandFilePath);

  if (!commandFileExists) {
    console.error(`Error: Command "${commandName}" not found`);
    showAvailableCommands();
    process.exit(1);
  }

  try {
    // Import the command module
    const commandModule = await import(commandFilePath);
    const CommandClass = commandModule.default;

    if (!CommandClass) {
      console.error(
        `Error: Command "${commandName}" does not export a default class`
      );
      process.exit(1);
    }

    // Create an instance and run it
    const command = new CommandClass();
    await command.run();
  } catch (error) {
    console.error(`Error executing command "${commandName}":`, error);
    process.exit(1);
  }
}

function showAvailableCommands() {
  console.log("\nAvailable commands:");

  try {
    const commandFiles = fs
      .readdirSync(commandsDir)
      .filter((file) => file.endsWith(".mjs"));

    if (commandFiles.length === 0) {
      console.log("  No commands available");
      return;
    }

    commandFiles.forEach((file) => {
      console.log(`  - ${file.replace(".mjs", "")}`);
    });
  } catch (error) {
    console.error("Error reading commands directory:", error);
  }
}

runCommand().catch(console.error);
