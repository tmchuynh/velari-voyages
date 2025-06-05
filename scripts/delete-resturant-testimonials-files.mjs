import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory where testimonial files are located (not restaurants)
const baseDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "testimonials",
);

console.log(`Looking for testimonial files in: ${baseDir}`);

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
  process.exit(1);
}

let totalDeleted = 0;
let totalNotFound = 0;

// Process each city directory
cityDirs.forEach((cityDir) => {
  const cityPath = path.join(baseDir, cityDir);

  try {
    // Get all testimonial files in the city directory
    const files = fs
      .readdirSync(cityPath)
      .filter((file) => file.endsWith("-testimonials.ts"));

    console.log(`Found ${files.length} testimonial files in ${cityDir}`);

    // Delete each testimonial file
    files.forEach((file) => {
      const filePath = path.join(cityPath, file);

      try {
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${filePath}`);
        totalDeleted++;
      } catch (err) {
        console.error(`Failed to delete ${filePath}:`, err);
        totalNotFound++;
      }
    });
  } catch (err) {
    console.error(`Error processing directory ${cityPath}:`, err);
  }
});

console.log("\n=== Summary ===");
console.log(`Total files deleted: ${totalDeleted}`);
console.log(`Total files not found or failed: ${totalNotFound}`);
console.log("Testimonial file deletion process completed!");
