/**
 * Restaurant Testimonials Generator Script
 * ========================================
 *
 * This script generates testimonial data for restaurants in the Velari Voyages project.
 * It creates or modifies files with the naming convention: "{restaurant-name}-testimonials.ts"
 * Each file exports an array variable named "{cityName}{restaurantName}Testimonials" with testimonial data.
 *
 * Features:
 * - Creates realistic testimonials with professional titles and ratings
 * - Generates testimonials with varied adjectives for food, service, and atmosphere
 * - Supports appending to existing testimonial files or replacing them completely
 * - Processes all restaurants from existing restaurant files in each city
 * - Generates customizable number of testimonials per restaurant
 * - Includes debug mode for troubleshooting testimonial generation
 * - Creates proper TypeScript interfaces for testimonial data
 *
 * Usage Examples:
 * --------------
 * # Default: generates 6 testimonials per restaurant (replaces existing files)
 * node scripts/create-restaurant-testimonials-files.mjs
 *
 * # Append mode: adds new testimonials to existing ones instead of replacing
 * node scripts/create-restaurant-testimonials-files.mjs --append
 *
 * # Short form of append flag
 * node scripts/create-restaurant-testimonials-files.mjs -a
 *
 * # Generate a specific number of testimonials per restaurant
 * node scripts/create-restaurant-testimonials-files.mjs --count=10
 *
 * # Combine options: append 8 testimonials per restaurant
 * node scripts/create-restaurant-testimonials-files.mjs --append --count=8
 *
 * # Enable debug mode for troubleshooting
 * node scripts/create-restaurant-testimonials-files.mjs --debug
 *
 * Command-line Options:
 * --------------------
 * --append, -a            Append new testimonials to existing files instead of replacing
 * --count=NUMBER          Number of testimonials to generate per restaurant (default: 6)
 * --debug, -d             Enable debug mode for detailed logging
 *
 * Output Files:
 * ------------
 * The script generates TypeScript files in:
 * src/lib/constants/cruises/testimonials/{city-name}/{restaurant-name}-testimonials.ts
 *
 * Each file exports a typed array of testimonial objects compatible with the
 * Testimonial interface defined in src/lib/interfaces/services/testimonials.ts
 */
import fs from "fs";
import path from "path";
import { getRandomName, determineGenderFromName } from "./utils/name-utils.mjs";
import { capitalize } from "./utils/file-utils.mjs";
import {
  positiveAdjectives,
  serviceAdjectives,
  atmosphereAdjectives,
} from "./utils/description-utils.mjs";
import { fileURLToPath } from "url";

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

export const foodAdjectives = [
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
  "remarkable",
  "fabulous",
  "spectacular",
  "brilliant",
  "awesome",
  "tasty",
  "yummy",
  "satisfying",
  "appetizing",
  "mouthwatering",
  "scrumptious",
  "delectable",
  "flavorful",
  "savory",
  "succulent",
  "luscious",
  "sumptuous",
  "heavenly",
  "divine",
  "irresistible",
  "tempting",
  "enchanting",
  "captivating",
  "charming",
  "engaging",
  "enjoyable",
  "pleasurable",
  "refreshing",
  "inviting",
  "enticing",
  "appealing",
  "seductive",
  "alluring",
  "enticing",
  "seductive",
  "pleasing",
  "enjoyable",
  "sublime",
  "exquisite",
  "marvelous",
  "great",
  "delectable",
  "scrumptious",
  "mouthwatering",
  "flavorful",
  "sumptuous",
  "tempting",
  "exquisite",
  "tantalizing",
  "divine",
  "heavenly",
  "satisfying",
];

export const foodNouns = [
  "food",
  "meal",
  "dishes",
  "cuisine",
  "flavors",
  "menu items",
  "specialties",
  "entrees",
  "desserts",
  "drinks",
  "beverages",
  "appetizers",
  "courses",
  "offerings",
  "delicacies",
  "fare",
  "platters",
  "selections",
  "tapas",
  "treats",
  "delights",
  "treats",
  "snacks",
  "bites",
  "nibbles",
  "savors",
  "flavors",
  "culinary delights",
  "gastronomic wonders",
  "gastronomic delights",
  "culinary creations",
  "culinary masterpieces",
  "culinary wonders",
  "gastronomic experiences",
  "gastronomic sensations",
  "gastronomic delights",
  "gastronomic pleasures",
  "gastronomic treats",
  "tastes",
  "recipes",
  "creations",
  "treats",
  "snacks",
];

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
    "Epicurean Specialist",
    "Culinary Explorer",
    "Food Stylist",
    "Culinary Artist",
    "Gastronomic Writer",
    "Food Blogger",
    "Culinary Critic",
    "Culinary Historian",
    "Food Scientist",
    "Culinary Educator",
    "Culinary Instructor",
    "Food Writer",
    "Culinary Journalist",
    "Culinary Enthusiast",
    "Food Enthusiast",
    "Culinary Explorer",
    "Culinary Specialist",
    "Culinary Advisor",
    "Culinary Expert",
    "Culinary Reviewer",
    "Food Historian",
    "Menu Analyst",
    "Culinary Consultant",
    "Recipe Developer",
    "Gastronomic Critic",
    "Beverage Expert",
    "Wine Sommelier",
    "Food Photographer",
    "Culinary Blogger",
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
    "drinks",
    "beverages",
    "appetizers",
    "courses",
    "offerings",
    "delicacies",
    "fare",
    "platters",
    "selections",
    "tapas",
    "treats",
    "delights",
    "treats",
    "snacks",
    "bites",
    "nibbles",
    "savors",
    "flavors",
    "culinary delights",
    "gastronomic wonders",
    "gastronomic delights",
    "culinary creations",
    "culinary masterpieces",
    "culinary wonders",
    "gastronomic experiences",
    "gastronomic sensations",
    "gastronomic delights",
    "gastronomic pleasures",
    "gastronomic treats",
    "tastes",
    "recipes",
    "creations",
    "treats",
    "snacks",
  ];

  const testimonials = [];

  for (let i = 0; i < count; i++) {
    const title =
      professionalTitles[Math.floor(Math.random() * professionalTitles.length)];

    const rating = Math.floor(Math.random() * 2) + 3 + Math.random().toFixed(1);

    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 730)); // Up to 2 years ago

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
      `Dining at ${restaurantName} was a ${positiveAdj} experience from start to finish. The ${foodNoun} delighted our palates, the service was ${serviceAdj}, and the ${atmosphereAdj} setting completed the evening.`,
      `If you're looking for ${positiveAdj} ${foodNoun}, ${restaurantName} delivers with impeccable ${serviceAdj} service and a ${atmosphereAdj} environment.`,
      `${restaurantName} offers a ${positiveAdj} menu and an equally ${serviceAdj} staff. The ${atmosphereAdj} vibe makes it perfect for any occasion.`,
      `Every dish we tried at ${restaurantName} was ${positiveAdj}, paired perfectly with ${serviceAdj} service and a ${atmosphereAdj} atmosphere that invites relaxation.`,
      `From the ${positiveAdj} ${foodNoun} to the ${serviceAdj} hospitality, ${restaurantName} provides a ${atmosphereAdj} dining experience worth savoring.`,
      `The ${foodNoun} selection at ${restaurantName} is simply ${positiveAdj}. Combined with ${serviceAdj} staff and a ${atmosphereAdj} setting, it’s a top choice for discerning diners.`,
      `Exceptional ${foodNoun} and ${serviceAdj} service come standard at ${restaurantName}. The ${atmosphereAdj} ambiance only adds to the appeal.`,
      `We were impressed by the ${positiveAdj} quality of the ${foodNoun} and the ${serviceAdj} attention from staff at ${restaurantName}. The ${atmosphereAdj} environment was the cherry on top.`,
      `For ${positiveAdj} ${foodNoun} served with ${serviceAdj} care in a ${atmosphereAdj} space, ${restaurantName} is unmatched.`,
      `At ${restaurantName}, the ${foodNoun} are ${positiveAdj} and the ${serviceAdj} team ensures your visit is complemented by a ${atmosphereAdj} atmosphere.`,
      `The ${positiveAdj} ${foodNoun} at ${restaurantName} kept us coming back for more, complemented perfectly by ${serviceAdj} staff and a ${atmosphereAdj} setting.`,
      `From the first bite to the last, the ${foodNoun} at ${restaurantName} impressed with ${positiveAdj} flavors, matched by ${serviceAdj} service and a ${atmosphereAdj} ambiance.`,
      `Our experience at ${restaurantName} was elevated by ${positiveAdj} ${foodNoun}, ${serviceAdj} hospitality, and a ${atmosphereAdj} dining room.`,
      `Every visit to ${restaurantName} delivers ${positiveAdj} ${foodNoun}, attentive ${serviceAdj} staff, and a ${atmosphereAdj} environment that welcomes you.`,
      `Exceptional ${foodNoun} paired with ${serviceAdj} service and a ${atmosphereAdj} atmosphere make ${restaurantName} a standout choice.`,
      `For those who appreciate ${positiveAdj} cuisine, ${restaurantName} offers ${foodNoun} that satisfy, alongside ${serviceAdj} service and a ${atmosphereAdj} vibe.`,
      `At ${restaurantName}, ${positiveAdj} ${foodNoun} combine seamlessly with ${serviceAdj} professionalism and a ${atmosphereAdj} space designed for comfort.`,
      `The ${foodNoun} here are ${positiveAdj}, prepared with care and served by ${serviceAdj} staff in a ${atmosphereAdj} setting.`,
      `You’ll find ${positiveAdj} ${foodNoun} at ${restaurantName}, supported by ${serviceAdj} staff and a ${atmosphereAdj} atmosphere that invites relaxation.`,
      `Dining at ${restaurantName} means enjoying ${positiveAdj} ${foodNoun}, ${serviceAdj} attention, and a ${atmosphereAdj} environment tailored for a memorable meal.`,
      `The ${foodNoun} at ${restaurantName} are consistently ${positiveAdj}, matched by ${serviceAdj} service and a ${atmosphereAdj} ambiance.`,
      `Every dish at ${restaurantName} was ${positiveAdj}, complemented by ${serviceAdj} staff and a ${atmosphereAdj} atmosphere.`,
      `The ${positiveAdj} ${foodNoun} paired perfectly with the ${serviceAdj} service and ${atmosphereAdj} ambiance at ${restaurantName}.`,
      `At ${restaurantName}, the ${foodNoun} impressed with ${positiveAdj} quality, alongside ${serviceAdj} hospitality and a ${atmosphereAdj} setting.`,
      `Our meal at ${restaurantName} featured ${positiveAdj} ${foodNoun}, attentive ${serviceAdj} staff, and a warm, ${atmosphereAdj} environment.`,
      `From appetizers to desserts, ${restaurantName} offers ${positiveAdj} ${foodNoun} in a ${atmosphereAdj} space with ${serviceAdj} service.`,
      `The combination of ${positiveAdj} ${foodNoun}, ${serviceAdj} attention, and a ${atmosphereAdj} vibe makes ${restaurantName} exceptional.`,
      `At ${restaurantName}, expect ${positiveAdj} ${foodNoun} served by ${serviceAdj} professionals in a ${atmosphereAdj} setting.`,
      `Our dining experience at ${restaurantName} was marked by ${positiveAdj} cuisine, ${serviceAdj} service, and a ${atmosphereAdj} atmosphere.`,
      `${restaurantName} consistently delivers ${positiveAdj} ${foodNoun}, attentive staff, and a ${atmosphereAdj} ambiance to enjoy.`,
      `The ${foodNoun} at ${restaurantName} are thoughtfully prepared, ${positiveAdj}, and complemented by ${serviceAdj} staff and a ${atmosphereAdj} space.`,
      `You’ll find a delightful selection of ${positiveAdj} ${foodNoun}, paired with ${serviceAdj} service and a ${atmosphereAdj} environment at ${restaurantName}.`,
      `Every visit to ${restaurantName} offers ${positiveAdj} ${foodNoun}, ${serviceAdj} hospitality, and a welcoming ${atmosphereAdj} atmosphere.`,
      `The ${positiveAdj} flavors of the ${foodNoun} at ${restaurantName} are matched by ${serviceAdj} service and a ${atmosphereAdj} dining room.`,
      `Experience ${positiveAdj} ${foodNoun} and ${serviceAdj} staff in a ${atmosphereAdj} setting when you visit ${restaurantName}.`,
      `The ${foodNoun} selection at ${restaurantName} is ${positiveAdj}, served with ${serviceAdj} care in a ${atmosphereAdj} ambiance.`,
      `For a memorable dining experience, ${restaurantName} offers ${positiveAdj} ${foodNoun}, ${serviceAdj} service, and a ${atmosphereAdj} environment.`,
      `Enjoy ${positiveAdj} dishes and ${serviceAdj} attention in a ${atmosphereAdj} atmosphere at ${restaurantName}.`,
      `From the moment we arrived, ${restaurantName} impressed with ${positiveAdj} ${foodNoun}, attentive service, and a ${atmosphereAdj} ambiance.`,
      `${restaurantName} delivers ${positiveAdj} ${foodNoun}, supported by ${serviceAdj} staff and a ${atmosphereAdj} atmosphere perfect for any occasion.`,
      `The ${foodNoun} at ${restaurantName} are consistently ${positiveAdj}, accompanied by ${serviceAdj} staff and a ${atmosphereAdj} setting.`,
      `${restaurantName} combines ${positiveAdj} dishes with ${serviceAdj} hospitality in a ${atmosphereAdj} setting, perfect for any occasion.`,
      `Whether it's the ${foodNoun} or the ${serviceAdj} staff, everything at ${restaurantName} is ${positiveAdj} and enhanced by a ${atmosphereAdj} environment.`,
      `The ${foodNoun} selection at ${restaurantName} is ${positiveAdj}, complemented by ${serviceAdj} service and a ${atmosphereAdj} ambiance that impresses.`,
      `You’ll enjoy ${positiveAdj} ${foodNoun} and ${serviceAdj} service, all within a ${atmosphereAdj} space at ${restaurantName}.`,
      `At ${restaurantName}, every detail from ${positiveAdj} ${foodNoun} to ${serviceAdj} service and ${atmosphereAdj} atmosphere is thoughtfully crafted.`,
      `The ${foodNoun} at ${restaurantName} are ${positiveAdj}, and the ${serviceAdj} service creates an inviting ${atmosphereAdj} experience.`,
      `If you value ${positiveAdj} ${foodNoun} with ${serviceAdj} staff and a ${atmosphereAdj} ambiance, ${restaurantName} delivers.`,
      `From start to finish, ${restaurantName} offers ${positiveAdj} ${foodNoun}, attentive ${serviceAdj} service, and a ${atmosphereAdj} environment.`,
      `For a ${positiveAdj} meal with ${serviceAdj} service in a ${atmosphereAdj} setting, ${restaurantName} is the place to be.`,
    ];

    // Create a testimonial that matches the interface
    const testimonial = {
      quote: templates[Math.floor(Math.random() * templates.length)],
      author: getRandomName(),
      title: title,
      rating: rating, // Random rating between 4 and 5
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

  return `

  // This file is auto-generated
    // Do not edit manually.
    // City: ${capitalize(cityName)}
    // Generated on: ${new Date().toISOString()}
  
  import { Testimonial } from "@/lib/interfaces/services/testimonials";

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
console.log(`Testimonial files are located in: ${testimonialsBaseDir}`);
console.log(`Restaurant files are located in: ${restaurantsBaseDir}`);
console.log(`Run 'npm run format' to format the generated files if needed.`);
