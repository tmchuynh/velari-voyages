import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

// List mode: Just show available crew member files without deleting
// node scripts/commands/delete-crew-members.mjs --list

// Delete specific city:
// node scripts/commands/delete-crew-members.mjs --city miami

// Delete by pattern:
// node scripts/commands/delete-crew-members.mjs --pattern "new-|los-"

// Force delete (skip confirmations):
// node scripts/commands/delete-crew-members.mjs --force --city miami

// Interactive mode (default):
// node scripts/commands/delete-crew-members.mjs

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory for crew member files
const crewMembersDir = path.join(
  __dirname,
  "..",
  "..",
  "src",
  "lib",
  "constants",
  "crewMembers"
);

/**
 * DeleteCrewMembers - Script for deleting crew member files
 *
 * Usage:
 * node scripts/run-command.mjs delete-crew-members [options]
 * node scripts/commands/delete-crew-members.mjs [options]
 *
 * Options:
 *   --help, -h                Show help message
 *   --force, -f               Skip confirmation prompts
 *   --city, -c <city-name>    Delete crew members file for specific city
 *   --pattern, -p <pattern>   Delete crew members files matching pattern (e.g., "miami|new-york")
 *   --list, -l                List all available crew members files without deleting
 */
export default class DeleteCrewMembers {
  constructor(_args = {}) {
    this.args = {
      boolean: ["force", "f", "list", "l", "help", "h"],
      string: ["city", "c", "pattern", "p"],
      alias: {
        f: "force",
        l: "list",
        c: "city",
        p: "pattern",
        h: "help",
      },
    };

    // Initialize properties
    this.crewMembersDir = crewMembersDir;
    this.force = this.args.force || false;
    this.listOnly = this.args.list || false;
    this.city = this.args.city || null;
    this.pattern = this.args.pattern || null;
    this.help = this.args.help || false;
    this.rl = null;
    this.crewMemberFiles = [];
  }

  async initialize() {
    // Show help message if requested
    if (this.help) {
      this.showHelp();
      return false;
    }

    this.log("Starting crew member files deletion script...");

    // Check if crew members directory exists
    if (!fs.existsSync(this.crewMembersDir)) {
      throw new Error(
        `Crew members directory not found at ${this.crewMembersDir}`
      );
    }

    // Get available crew member files
    this.crewMemberFiles = this.getCrewMemberFiles();

    // Create readline interface
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // Just list files if requested
    if (this.listOnly) {
      this.log("Available crew member files:");
      this.crewMemberFiles.forEach((city) => this.log(`- ${city}`));
      return false;
    }

    // No crew member files found
    if (this.crewMemberFiles.length === 0) {
      this.log("No crew member files found. Nothing to delete.");
      return false;
    }

    return true;
  }

  showHelp() {
    this.log(`
Usage: node scripts/commands/delete-crew-members.mjs [options]
       node scripts/run-command.mjs delete-crew-members [options]

Options:
  --help, -h                Show this help message
  --force, -f               Skip confirmation prompts
  --city, -c <city-name>    Delete crew members file for specific city
  --pattern, -p <pattern>   Delete crew members files matching pattern (e.g., "miami|new-york")
  --list, -l                List all available crew members files without deleting

Examples:
  node scripts/run-command.mjs delete-crew-members --list
  node scripts/run-command.mjs delete-crew-members --city miami
  node scripts/run-command.mjs delete-crew-members --pattern "new-|los-" --force
  node scripts/run-command.mjs delete-crew-members
    `);
  }

  getCrewMemberFiles() {
    try {
      return fs
        .readdirSync(this.crewMembersDir)
        .filter((file) => file.endsWith(".ts"))
        .map((file) => file.replace(".ts", ""));
    } catch (err) {
      this.error("Error reading crew members directory:", err);
      return [];
    }
  }

  async execute() {
    // Delete a specific city
    if (this.city) {
      return await this.handleCityDeletion();
    }

    // Delete files matching pattern
    if (this.pattern) {
      return await this.handlePatternDeletion();
    }

    // Interactive mode
    return await this.handleInteractiveMode();
  }

  async handleCityDeletion() {
    if (!this.crewMemberFiles.includes(this.city)) {
      this.error(`No crew member file found for city '${this.city}'`);
      this.log("Available cities:", this.crewMemberFiles.join(", "));
      return { deleted: 0 };
    }

    const confirmed =
      this.force ||
      (await this.getConfirmation(
        `Are you sure you want to delete the crew member file for ${this.city}?`
      ));

    if (!confirmed) {
      this.log("Deletion cancelled.");
      return { deleted: 0 };
    }

    const success = this.deleteCrewMemberFile(this.city);
    return { deleted: success ? 1 : 0 };
  }

  async handlePatternDeletion() {
    try {
      const pattern = new RegExp(this.pattern);
      const matchingCities = this.crewMemberFiles.filter((city) =>
        pattern.test(city)
      );

      if (matchingCities.length === 0) {
        this.log(`No crew member files match the pattern '${this.pattern}'`);
        return { deleted: 0 };
      }

      this.log("The following crew member files match your pattern:");
      matchingCities.forEach((city) => this.log(`- ${city}`));

      const confirmed =
        this.force ||
        (await this.getConfirmation(
          `Are you sure you want to delete ${matchingCities.length} crew member files?`
        ));

      if (!confirmed) {
        this.log("Deletion cancelled.");
        return { deleted: 0 };
      }

      let deletedCount = 0;
      matchingCities.forEach((city) => {
        if (this.deleteCrewMemberFile(city)) {
          deletedCount++;
        }
      });

      this.log(
        `Deleted ${deletedCount} of ${matchingCities.length} crew member files.`
      );
      return { deleted: deletedCount };
    } catch (error) {
      this.error(`Invalid pattern: ${this.pattern}`, error);
      return { deleted: 0 };
    }
  }

  async handleInteractiveMode() {
    this.log(`Found ${this.crewMemberFiles.length} crew member files.`);

    const answer = await new Promise((resolve) => {
      this.rl.question(
        `Do you want to [d]elete all, [s]elect from list, or [c]ancel? `,
        resolve
      );
    });

    switch (answer.toLowerCase()) {
      case "d":
      case "delete":
      case "delete all":
        return await this.handleDeleteAll();

      case "s":
      case "select":
        return await this.handleSelectFromList();

      default:
        this.log("Operation cancelled.");
        return { deleted: 0 };
    }
  }

  async handleDeleteAll() {
    const confirmed =
      this.force ||
      (await this.getConfirmation(
        `Are you sure you want to delete ALL ${this.crewMemberFiles.length} crew member files?`
      ));

    if (!confirmed) {
      this.log("Deletion cancelled.");
      return { deleted: 0 };
    }

    let deletedCount = 0;
    this.crewMemberFiles.forEach((city) => {
      if (this.deleteCrewMemberFile(city)) {
        deletedCount++;
      }
    });

    this.log(
      `Deleted ${deletedCount} of ${this.crewMemberFiles.length} crew member files.`
    );
    return { deleted: deletedCount };
  }

  async handleSelectFromList() {
    this.log("\nAvailable crew member files:");
    this.crewMemberFiles.forEach((city, index) => {
      this.log(`${index + 1}. ${city}`);
    });

    const indexList = await new Promise((resolve) => {
      this.rl.question(
        "\nEnter the numbers of files to delete (comma-separated, e.g., '1,3,5'): ",
        resolve
      );
    });

    const selectedIndexes = indexList
      .split(",")
      .map((num) => parseInt(num.trim()) - 1)
      .filter(
        (num) => !isNaN(num) && num >= 0 && num < this.crewMemberFiles.length
      );

    if (selectedIndexes.length === 0) {
      this.log("No valid selections. Deletion cancelled.");
      return { deleted: 0 };
    }

    const selectedCities = selectedIndexes.map(
      (index) => this.crewMemberFiles[index]
    );
    this.log("\nYou selected:");
    selectedCities.forEach((city) => this.log(`- ${city}`));

    const confirmed =
      this.force ||
      (await this.getConfirmation(
        `Are you sure you want to delete these ${selectedCities.length} crew member files?`
      ));

    if (!confirmed) {
      this.log("Deletion cancelled.");
      return { deleted: 0 };
    }

    let deletedCount = 0;
    selectedCities.forEach((city) => {
      if (this.deleteCrewMemberFile(city)) {
        deletedCount++;
      }
    });

    this.log(
      `Deleted ${deletedCount} of ${selectedCities.length} crew member files.`
    );
    return { deleted: deletedCount };
  }

  deleteCrewMemberFile(city) {
    const filePath = path.join(this.crewMembersDir, `${city}.ts`);

    if (!fs.existsSync(filePath)) {
      this.error(`Crew member file for ${city} does not exist.`);
      return false;
    }

    try {
      fs.unlinkSync(filePath);
      this.log(`Successfully deleted crew member file for ${city}`);
      return true;
    } catch (err) {
      this.error(`Error deleting crew member file for ${city}:`, err);
      return false;
    }
  }

  async getConfirmation(message) {
    return new Promise((resolve) => {
      this.rl.question(`${message} (y/N): `, (answer) => {
        resolve(answer.toLowerCase() === "y" || answer.toLowerCase() === "yes");
      });
    });
  }

  async cleanup() {
    // Close readline interface if it was created
    if (this.rl) {
      this.rl.close();
    }
  }
}

// Run the script if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const script = new DeleteCrewMembers();
  script.run().catch((err) => {
    console.error("Script failed:", err);
    process.exit(1);
  });
}
