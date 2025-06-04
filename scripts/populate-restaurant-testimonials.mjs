import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// // Basic usage (replaces existing testimonials, generates 6 per restaurant)
// node scripts/populate-restaurant-testimonials.mjs

// // Append mode: adds new testimonials to existing ones instead of replacing
// node scripts/populate-restaurant-testimonials.mjs --append

// // Short form of append flag
// node scripts/populate-restaurant-testimonials.mjs -a

// // Generate a specific number of testimonials per restaurant
// node scripts/populate-restaurant-testimonials.mjs --count=10

// // Combine options: append 8 testimonials per restaurant
// node scripts/populate-restaurant-testimonials.mjs --append --count=8

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const APPEND_MODE = args.includes("--append") || args.includes("-a");
const TESTIMONIAL_COUNT =
  args.find((arg) => arg.startsWith("--count="))?.split("=")[1] || 6;
const DEBUG_MODE = args.includes("--debug") || args.includes("-d");

console.log(`Mode: ${APPEND_MODE ? "Append" : "Replace"} testimonials`);
console.log(`Generating ${TESTIMONIAL_COUNT} testimonials per restaurant`);
if (DEBUG_MODE) console.log("Debug mode: ON");

// Base directory where restaurant files are located (read from here)
const restaurantsBaseDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "restaurants"
);

// Output directory for testimonial files (write to here)
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

// Ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Generate random testimonial data that matches the Testimonial interface
function generateTestimonials(restaurantName, count = 5) {
  const professionalTitles = [
    "Food Critic",
    "Culinary Expert",
    "Travel Blogger",
    "Lifestyle Influencer",
    "Food Journalist",
    "Restaurant Reviewer",
    "Gastronomy Enthusiast",
    "Travel Writer",
    "Culinary Adventurer",
    "Food & Wine Connoisseur",
    "Dining Columnist",
    "Cruise Traveler",
    "Luxury Travel Consultant",
    "Gourmet Explorer",
    "Restaurant Enthusiast",
    "Cooking Aficionado",
  ];

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
    const title =
      professionalTitles[Math.floor(Math.random() * professionalTitles.length)];

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

    // Create a testimonial that matches the interface
    const testimonial = {
      quote: templates[Math.floor(Math.random() * templates.length)],
      author: fullName,
      title: title,
      // Add image for some testimonials (30% chance)
      ...(Math.random() < 0.3 && {
        image: `/images/testimonials/person-${
          Math.floor(Math.random() * 12) + 1
        }.jpg`,
      }),
    };

    testimonials.push(testimonial);
  }

  return testimonials;
}

// Function to extract existing testimonials from a file
function extractExistingTestimonials(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }

    const content = fs.readFileSync(filePath, "utf8");

    if (DEBUG_MODE) {
      console.log(`DEBUG: Reading testimonials from ${filePath}`);
      console.log(`DEBUG: File exists: ${fs.existsSync(filePath)}`);
      console.log(`DEBUG: File size: ${content.length} bytes`);
      console.log(
        `DEBUG: File content preview: ${content.substring(0, 100)}...`
      );
    }

    // Try to extract the array portion of the file with a more robust regex
    // This looks for the export statement and captures everything between the array brackets
    const arrayMatch = content.match(
      /export\s+const\s+\w+Testimonials\s*:\s*Testimonial\[\]\s*=\s*(\[[\s\S]*?\]);/
    );

    if (!arrayMatch) {
      if (DEBUG_MODE) {
        console.log(`DEBUG: Failed to match array pattern in file`);
      }
      return [];
    }

    // Try to parse the array as JSON
    try {
      // Clean up the extracted content to make it more JSON-friendly
      let jsonStr = arrayMatch[1]
        .replace(/\/\/.*$/gm, "") // Remove single-line comments
        .replace(/\/\*[\s\S]*?\*\//g, "") // Remove multi-line comments
        .replace(/,\s*]/g, "]") // Remove trailing commas
        .trim();

      if (DEBUG_MODE) {
        console.log(`DEBUG: Cleaned JSON: ${jsonStr.substring(0, 100)}...`);
      }

      const parsedData = JSON.parse(jsonStr);

      if (DEBUG_MODE) {
        console.log(
          `DEBUG: Successfully parsed ${parsedData.length} testimonials`
        );
      }

      return parsedData;
    } catch (parseError) {
      console.error(`Error parsing testimonials from ${filePath}:`, parseError);

      if (DEBUG_MODE) {
        console.log(`DEBUG: JSON parse error details: ${parseError.message}`);
        console.log(`DEBUG: Attempting fallback method...`);
      }

      // Fallback method using Function constructor (safer than eval)
      try {
        const safeEval = new Function(`return ${arrayMatch[1]}`);
        const result = safeEval();

        if (DEBUG_MODE) {
          console.log(
            `DEBUG: Fallback method successful, found ${result.length} testimonials`
          );
        }

        return result;
      } catch (fallbackError) {
        console.error("Fallback parsing also failed:", fallbackError);
        return [];
      }
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
}

// Function to generate testimonial file content
function generateTestimonialFileContent(
  cityName,
  restaurantName,
  existingTestimonials = []
) {
  const cityVar = toCamelCase(cityName);
  const restaurantVar = toCamelCase(restaurantName);

  // Generate new testimonials
  const newTestimonials = generateTestimonials(
    restaurantName,
    parseInt(TESTIMONIAL_COUNT)
  );

  // Combine with existing testimonials if in append mode
  const testimonials = APPEND_MODE
    ? [...existingTestimonials, ...newTestimonials]
    : newTestimonials;

  // Validate the append actually worked
  if (APPEND_MODE && existingTestimonials.length > 0) {
    const expectedCount = existingTestimonials.length + newTestimonials.length;
    if (testimonials.length !== expectedCount) {
      console.error(
        `WARNING: Expected ${expectedCount} testimonials but got ${testimonials.length}. Append may not be working correctly!`
      );
    } else if (DEBUG_MODE) {
      console.log(
        `DEBUG: Successfully combined ${existingTestimonials.length} existing + ${newTestimonials.length} new = ${testimonials.length} testimonials`
      );
    }
  }

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
    .readdirSync(restaurantsBaseDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  console.log(`Found ${cityDirs.length} city directories`);
} catch (error) {
  console.error(`Error reading base directory ${restaurantsBaseDir}:`, error);
  process.exit(1);
}

// Count for summary
let totalCreated = 0;
let totalUpdated = 0;
let totalFailed = 0;

// Process each city directory
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
      const filePath = path.join(testimonialCityPath, `${kebabName}.ts`);

      try {
        // Read existing testimonials if in append mode
        const existingTestimonials = APPEND_MODE
          ? extractExistingTestimonials(filePath)
          : [];
        const hadExistingFile = fs.existsSync(filePath);

        // Create or update the testimonial file
        fs.writeFileSync(
          filePath,
          generateTestimonialFileContent(
            cityDir,
            restaurantName,
            existingTestimonials
          )
        );

        if (!hadExistingFile) {
          console.log(`Created testimonial file: ${filePath}`);
          totalCreated++;
        } else if (APPEND_MODE) {
          console.log(
            `Appended ${TESTIMONIAL_COUNT} testimonials to: ${filePath}`
          );
          totalUpdated++;
        } else {
          console.log(`Replaced testimonials in: ${filePath}`);
          totalUpdated++;
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

console.log("\n=== Script Complete ===");
if (APPEND_MODE) {
  console.log(`Created ${totalCreated} new testimonial files`);
  console.log(`Added testimonials to ${totalUpdated} existing files`);
} else {
  console.log(`Created ${totalCreated} new testimonial files`);
  console.log(`Replaced testimonials in ${totalUpdated} existing files`);
}
if (totalFailed > 0) {
  console.log(`Failed to create/update ${totalFailed} testimonial files`);
}
console.log(`Mode: ${APPEND_MODE ? "Append" : "Replace"}`);
console.log(`Testimonials per restaurant: ${TESTIMONIAL_COUNT}`);
console.log(`Debug mode: ${DEBUG_MODE ? "ON" : "OFF"}`);
console.log("All restaurant testimonial files processed!");
