import fs from "fs";
import path from "path";
import readline from "readline";
import { BaseScript } from "../utils/base-script.mjs";
import { getCityFiles } from "../utils/file-utils.mjs";

export default class DeleteRestaurantMenuFiles extends BaseScript {
  constructor(args = {}) {
    super(import.meta.url, {
      args: {
        boolean: ["force", "f", "quiet", "q", "debug", "d"],
        alias: {
          f: "force",
          q: "quiet",
          d: "debug",
        },
      },
    });

    // Initialize properties
    this.baseDir = this.resolveConstantsPath("cruises", "restaurants");
    this.cityFiles = getCityFiles(this.rootDir);
    this.force = this.args.force || false;
    this.rl = null;
  }

  async initialize() {
    this.log("Starting restaurant files deletion script...");

    // Check if base directory exists
    if (!fs.existsSync(this.baseDir)) {
      throw new Error(`Base directory not found: ${this.baseDir}`);
    }

    // Create readline interface
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // Skip confirmation if force flag is used
    if (!this.force) {
      const answer = await this.getConfirmation();
      if (answer.toLowerCase() !== "y") {
        this.log("Operation cancelled.");
        return false;
      }
    }

    return true;
  }

  getConfirmation() {
    return new Promise((resolve) => {
      this.rl.question(
        `This will delete all restaurant files (except restaurants.ts) in ${this.cityFiles.length} cities. Continue? (y/n): `,
        resolve
      );
    });
  }

  async execute() {
    const stats = {
      totalDeleted: 0,
      processedCities: 0,
      missingCities: 0,
    };

    const progress = this.createProgress({
      total: this.cityFiles.length,
      message: "Processing cities",
      format: "bar",
    });

    // Process each city
    for (let i = 0; i < this.cityFiles.length; i++) {
      const cityDir = this.cityFiles[i];
      const cityPath = path.join(this.baseDir, cityDir);

      progress.update(i, `Processing ${cityDir}`);

      // Check if directory exists before proceeding
      if (!fs.existsSync(cityPath)) {
        this.debug(`Directory for ${cityDir} does not exist. Skipping.`);
        stats.missingCities++;
        continue;
      }

      stats.processedCities++;

      try {
        // Get all .ts files in the directory (except restaurants.ts)
        const files = fs
          .readdirSync(cityPath)
          .filter((file) => file.endsWith(".ts") && file !== "restaurants.ts");

        // Delete each file
        for (const file of files) {
          const filePath = path.join(cityPath, file);
          fs.unlinkSync(filePath);
          stats.totalDeleted++;
          this.debug(`Deleted: ${filePath}`);
        }

        this.debug(`Deleted ${files.length} files in ${cityDir}`);
      } catch (error) {
        this.error(`Error processing directory ${cityDir}: ${error.message}`);
      }
    }

    progress.complete();

    this.log(
      `Operation complete. Deleted ${stats.totalDeleted} restaurant files across ${stats.processedCities} cities.`
    );

    if (stats.missingCities > 0) {
      this.log(`Note: ${stats.missingCities} city directories were not found.`);
    }

    return stats;
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
  const script = new DeleteRestaurantMenuFiles();
  script.run().catch((err) => {
    console.error("Script failed:", err);
    process.exit(1);
  });
}
