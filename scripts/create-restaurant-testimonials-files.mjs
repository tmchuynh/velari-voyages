import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory where restaurant files are located
const restaurantsBaseDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "restaurants"
);

// Output directory for testimonial files
const testimonialsBaseDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "testimonials"
);

// Function to convert a string to kebab-case for file naming
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen
}

// Function to convert a string to camelCase for variable naming
function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "") // Remove spaces
    .replace(/[^\w\s]/g, ""); // Remove special characters
}

// Function to extract restaurant names from a restaurants.ts file
function extractRestaurantNames(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");

    // Simpler pattern to match name properties in JSON
    const namePattern = /name["']?\s*:\s*["']([^"']+)["']/g;
    const matches = [];
    let match;

    while ((match = namePattern.exec(content)) !== null) {
      matches.push(match[1]);
    }

    if (matches.length === 0) {
      console.warn(`No restaurant names found in ${filePath}`);
      // Add debug output to see file content
      console.log(`File content sample: ${content.substring(0, 200)}...`);
    } else {
      console.log(`Found ${matches.length} restaurants in ${filePath}`);
    }

    return matches;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
}

// Function to generate testimonial file content
function generateTestimonialFileContent(cityName, restaurantName) {
  const cityVar = toCamelCase(cityName);
  const restaurantVar = toCamelCase(restaurantName);

  return `import { Testimonial } from "@/lib/interfaces/services/testimonials";

export const ${cityVar}${restaurantVar}Testimonials: Testimonial[] = [];
`;
}

// Ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Get all city directories from the restaurants folder
let cityDirs = [];
try {
  cityDirs = fs
    .readdirSync(restaurantsBaseDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  console.log(
    `Found ${cityDirs.length} city directories in restaurants folder`
  );
} catch (error) {
  console.error(
    `Error reading restaurants base directory ${restaurantsBaseDir}:`,
    error
  );
  process.exit(1);
}

// Process each city directory
let totalCreated = 0;
let totalSkipped = 0;

cityDirs.forEach((cityDir) => {
  const restaurantCityPath = path.join(restaurantsBaseDir, cityDir);
  const restaurantsFilePath = path.join(restaurantCityPath, "restaurants.ts");

  // Check if the restaurants.ts file exists
  if (fs.existsSync(restaurantsFilePath)) {
    console.log(`Processing ${cityDir}/restaurants.ts...`);

    // Create testimonial directory for this city if it doesn't exist
    const testimonialCityPath = path.join(testimonialsBaseDir, cityDir);
    ensureDirectoryExists(testimonialCityPath);

    // Extract restaurant names from the file
    const restaurantNames = extractRestaurantNames(restaurantsFilePath);

    // Create a testimonial file for each restaurant
    restaurantNames.forEach((restaurantName) => {
      const kebabName = toKebabCase(restaurantName) + "-testimonials";
      const testimonialFilePath = path.join(
        testimonialCityPath,
        `${kebabName}.ts`
      );

      // Create the testimonial file if it doesn't exist
      if (!fs.existsSync(testimonialFilePath)) {
        fs.writeFileSync(
          testimonialFilePath,
          generateTestimonialFileContent(cityDir, restaurantName)
        );
        console.log(`Created testimonial file: ${testimonialFilePath}`);
        totalCreated++;
      } else {
        console.log(`File already exists: ${testimonialFilePath}`);
        totalSkipped++;
      }
    });
  } else {
    console.warn(`Restaurant file not found: ${restaurantsFilePath}`);
  }
});

console.log("\n=== Summary ===");
console.log(`Created ${totalCreated} testimonial files`);
console.log(`Skipped ${totalSkipped} existing files`);
console.log("All testimonial files processed successfully!");
