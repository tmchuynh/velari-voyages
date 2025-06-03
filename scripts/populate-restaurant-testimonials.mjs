import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory where restaurant files are located
const baseDir = path.join(
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
    .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
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
    const namePattern = /name["']?\s*:\s*["']([^"']+)["']/g;
    const matches = [];
    let match;

    while ((match = namePattern.exec(content)) !== null) {
      matches.push(match[1]);
    }

    if (matches.length === 0) {
      console.warn(`No restaurant names found in ${filePath}`);
    } else {
      console.log(`Found ${matches.length} restaurants in ${filePath}`);
    }

    return matches;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
}

// Generate random testimonial data
function generateTestimonials(restaurantName, count = 5) {
  const authorFirstNames = [
    "John",
    "Emma",
    "Michael",
    "Sarah",
    "David",
    "Lisa",
    "Robert",
    "Jennifer",
    "William",
    "Maria",
    "James",
    "Sophia",
    "Daniel",
    "Olivia",
    "Matthew",
    "Elizabeth",
    "Christopher",
    "Emily",
    "Thomas",
    "Ava",
  ];
  const authorLastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Wilson",
    "Anderson",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
    "Perez",
    "Thompson",
    "White",
  ];

  const positiveAdjectives = [
    "amazing",
    "delicious",
    "outstanding",
    "excellent",
    "incredible",
    "perfect",
    "wonderful",
    "fantastic",
    "superb",
    "delightful",
    "impressive",
    "exceptional",
    "marvelous",
    "great",
    "delectable",
  ];

  const foodNouns = [
    "food",
    "meal",
    "dishes",
    "cuisine",
    "flavors",
    "menu items",
    "specialties",
    "entrees",
    "desserts",
    "appetizers",
  ];

  const serviceAdjectives = [
    "attentive",
    "friendly",
    "professional",
    "excellent",
    "impeccable",
    "outstanding",
    "fantastic",
    "courteous",
    "helpful",
    "prompt",
    "knowledgeable",
    "exceptional",
    "wonderful",
    "superb",
  ];

  const atmosphereAdjectives = [
    "cozy",
    "elegant",
    "charming",
    "vibrant",
    "relaxing",
    "inviting",
    "sophisticated",
    "warm",
    "welcoming",
    "intimate",
    "stylish",
    "comfortable",
    "pleasant",
    "appealing",
    "delightful",
  ];

  const testimonials = [];

  for (let i = 0; i < count; i++) {
    const firstName =
      authorFirstNames[Math.floor(Math.random() * authorFirstNames.length)];
    const lastName =
      authorLastNames[Math.floor(Math.random() * authorLastNames.length)];
    const fullName = `${firstName} ${lastName}`;

    // Randomize rating between 4-5 stars (mostly positive testimonials)
    const rating = Math.floor(Math.random() * 2) + 4;

    // Generate random date within the last year
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 365));

    const positiveAdj =
      positiveAdjectives[Math.floor(Math.random() * positiveAdjectives.length)];
    const foodNoun = foodNouns[Math.floor(Math.random() * foodNouns.length)];
    const serviceAdj =
      serviceAdjectives[Math.floor(Math.random() * serviceAdjectives.length)];
    const atmosphereAdj =
      atmosphereAdjectives[
        Math.floor(Math.random() * atmosphereAdjectives.length)
      ];

    // Generate testimonial text
    const templates = [
      `The ${foodNoun} at ${restaurantName} were absolutely ${positiveAdj}! The service was ${serviceAdj} and the atmosphere was ${atmosphereAdj}. Highly recommend!`,
      `What a ${positiveAdj} dining experience at ${restaurantName}! The ${foodNoun} exceeded our expectations, and the staff was ${serviceAdj}. Will definitely return!`,
      `${restaurantName} has the most ${positiveAdj} ${foodNoun} I've ever tasted. The ${atmosphereAdj} atmosphere made our evening special, and the service was ${serviceAdj}.`,
      `I can't say enough about the ${positiveAdj} ${foodNoun} at ${restaurantName}. The ${serviceAdj} service and ${atmosphereAdj} ambiance made for a perfect night out.`,
      `Our visit to ${restaurantName} was outstanding. The ${foodNoun} were ${positiveAdj}, the staff ${serviceAdj}, and the atmosphere ${atmosphereAdj}. A must-visit!`,
    ];

    const testimonial = {
      author: fullName,
      rating: rating,
      date: date.toISOString().split("T")[0],
      text: templates[Math.floor(Math.random() * templates.length)],
    };

    testimonials.push(testimonial);
  }

  return testimonials;
}

// Function to generate testimonial file content
function generateTestimonialFileContent(cityName, restaurantName) {
  const cityVar = toCamelCase(cityName);
  const restaurantVar = toCamelCase(restaurantName);

  const testimonials = generateTestimonials(restaurantName, 6);

  return `import { Testimonial } from "@/lib/interfaces/services/testimonials";

/**
 * Testimonial data for ${restaurantName} in ${cityName}
 */
export const ${cityVar}${restaurantVar}Testimonials: Testimonial[] = ${JSON.stringify(
    testimonials,
    null,
    2
  )};
`;
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
  process.exit(1);
}

// Count for summary
let totalCreated = 0;
let totalUpdated = 0;
let totalFailed = 0;

// Process each city directory
cityDirs.forEach((cityDir) => {
  const cityPath = path.join(baseDir, cityDir);
  const restaurantsFilePath = path.join(cityPath, "restaurants.ts");

  // Check if the restaurants.ts file exists
  if (fs.existsSync(restaurantsFilePath)) {
    console.log(`Processing ${cityDir}/restaurants.ts...`);

    // Extract restaurant names from the file
    const restaurantNames = extractRestaurantNames(restaurantsFilePath);

    // Create a testimonial file for each restaurant
    restaurantNames.forEach((restaurantName) => {
      const kebabName = toKebabCase(restaurantName) + "-testimonials";
      const filePath = path.join(cityPath, `${kebabName}.ts`);

      try {
        // Create or update the testimonial file
        fs.writeFileSync(
          filePath,
          generateTestimonialFileContent(cityDir, restaurantName)
        );

        if (fs.existsSync(filePath)) {
          console.log(`Updated testimonial file: ${filePath}`);
          totalUpdated++;
        } else {
          console.log(`Created testimonial file: ${filePath}`);
          totalCreated++;
        }
      } catch (err) {
        console.error(
          `Error creating testimonial file for ${restaurantName}:`,
          err
        );
        totalFailed++;
      }
    });
  } else {
    console.warn(`Restaurant file not found: ${restaurantsFilePath}`);
  }
});

console.log("=== Script Complete ===");
console.log(`Created ${totalCreated} new testimonial files`);
console.log(`Updated ${totalUpdated} existing testimonial files`);
if (totalFailed > 0) {
  console.log(`Failed to create/update ${totalFailed} testimonial files`);
}
console.log("All restaurant testimonial files processed!");
