import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Import the menu data from restaurants.js
import {
    descriptionElements,
    menuItems
} from "../src/lib/constants/info/restaurants.js";

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
  "restaurants"
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

    // Simpler pattern to match name properties in JSON
    const namePattern = /name["']?\s*:\s*["']([^"']+)["']/g;
    const matches = [];
    let match;

    while ((match = namePattern.exec(content)) !== null) {
      matches.push(match[1]);
    }

    if (matches.length === 0) {
      // Try an alternative pattern with different quote styles
      const altPattern = /name["']?\s*:\s*["']([^"']+)["']/g;
      while ((match = altPattern.exec(content)) !== null) {
        matches.push(match[1]);
      }

      // If still no matches, check the file content
      if (matches.length === 0) {
        console.log(`File content sample: ${content.substring(0, 200)}...`);
        console.warn(
          `No restaurant names found in ${filePath} using standard patterns`
        );
      }
    }

    console.log(`Found ${matches.length} restaurants in ${filePath}`);
    return matches;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
}

// Function to generate random price within a range
function generateRandomPrice(min, max, decimal = 2) {
  return (Math.random() * (max - min) + min).toFixed(decimal);
}

// Function to randomly select items from an array
function getRandomItems(array, count = 1) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Function to create a menu item description
function generateItemDescription() {
  const cookingTerm = getRandomItems(descriptionElements.cookingTerms, 1)[0];
  const flavorProfile = getRandomItems(
    descriptionElements.flavorProfiles,
    1
  )[0];
  const servingStyle = getRandomItems(descriptionElements.servingStyles, 1)[0];
  const ingredient = getRandomItems(descriptionElements.ingredients, 1)[0];

  const templates = [
    `A ${flavorProfile} dish ${cookingTerm} with ${ingredient} and ${servingStyle}.`,
    `${
      servingStyle.charAt(0).toUpperCase() + servingStyle.slice(1)
    } and ${cookingTerm} to perfection using ${ingredient}.`,
    `Our ${flavorProfile} specialty, ${cookingTerm} with ${ingredient} and ${servingStyle}.`,
    `This ${flavorProfile} favorite is ${cookingTerm} using ${ingredient}, then ${servingStyle}.`,
  ];

  return templates[Math.floor(Math.random() * templates.length)];
}

// Function to determine if a menu item should have a dietary restriction based on cuisine and randomness
function getDietaryFlags(cuisine, itemName) {
  // These cuisines have more vegetarian options
  const vegetarianFriendlyCuisines = [
    "Indian",
    "Mediterranean",
    "Italian",
    "Greek",
    "Lebanese",
    "Thai",
    "Vietnamese",
  ];
  // These cuisines have more vegan options
  const veganFriendlyCuisines = [
    "Indian",
    "Mediterranean",
    "Lebanese",
    "Thai",
    "Vietnamese",
  ];
  // These cuisines have more gluten-free options
  const glutenFreeFriendlyCuisines = [
    "Thai",
    "Vietnamese",
    "Mexican",
    "Japanese",
    "Indian",
  ];

  // Keywords that suggest meat
  const meatKeywords = [
    "beef",
    "steak",
    "pork",
    "lamb",
    "chicken",
    "duck",
    "turkey",
    "veal",
    "bacon",
    "ham",
  ];
  // Keywords that suggest seafood
  const seafoodKeywords = [
    "fish",
    "salmon",
    "tuna",
    "shrimp",
    "prawn",
    "lobster",
    "crab",
    "mussel",
    "oyster",
    "scallop",
  ];
  // Keywords that suggest dairy
  const dairyKeywords = [
    "cheese",
    "cream",
    "milk",
    "butter",
    "yogurt",
    "custard",
  ];
  // Keywords that suggest gluten
  const glutenKeywords = [
    "bread",
    "pasta",
    "wheat",
    "pizza",
    "dough",
    "flour",
    "pastry",
    "cake",
    "pie",
  ];

  const lowerName = itemName.toLowerCase();

  // Check for obvious non-vegetarian items
  const containsMeat = meatKeywords.some((keyword) =>
    lowerName.includes(keyword)
  );
  const containsSeafood = seafoodKeywords.some((keyword) =>
    lowerName.includes(keyword)
  );
  const containsDairy = dairyKeywords.some((keyword) =>
    lowerName.includes(keyword)
  );
  const containsGluten = glutenKeywords.some((keyword) =>
    lowerName.includes(keyword)
  );

  // Base probabilities adjusted by cuisine type
  let vegetarianProb = 0.3;
  let veganProb = 0.15;
  let glutenFreeProb = 0.25;
  let halalProb = 0.4;
  let kosherProb = 0.3;

  // Adjust probabilities based on cuisine
  if (vegetarianFriendlyCuisines.includes(cuisine)) vegetarianProb += 0.3;
  if (veganFriendlyCuisines.includes(cuisine)) veganProb += 0.25;
  if (glutenFreeFriendlyCuisines.includes(cuisine)) glutenFreeProb += 0.3;

  // Middle Eastern and South Asian cuisines often have halal options
  if (
    [
      "Middle Eastern",
      "Lebanese",
      "Palestinian",
      "Egyptian",
      "Pakistani",
      "Indian",
      "Turkish",
    ].includes(cuisine)
  ) {
    halalProb += 0.4;
  }

  // Some cuisines often have kosher options
  if (["Jewish", "Israeli", "Mediterranean"].includes(cuisine)) {
    kosherProb += 0.3;
  }

  // Final dietary flags based on ingredients and probabilities
  return {
    isVegetarian:
      !containsMeat && !containsSeafood && Math.random() < vegetarianProb,
    isVegan:
      !containsMeat &&
      !containsSeafood &&
      !containsDairy &&
      Math.random() < veganProb,
    isGlutenFree: !containsGluten && Math.random() < glutenFreeProb,
    isHalal: !containsMeat || Math.random() < halalProb,
    isKosher: (!containsMeat && !containsSeafood) || Math.random() < kosherProb,
  };
}

// Function to generate menu items for a specific category and cuisine
function generateMenuItems(category, cuisine, count = 5) {
  // Select the appropriate item list based on category
  let itemSource;
  let priceRange = { min: 8, max: 16 };

  switch (category.toLowerCase()) {
    case "signature dishes":
      itemSource = menuItems.signatureDishes;
      priceRange = { min: 24, max: 38 };
      break;
    case "starters":
    case "appetizers":
      itemSource = menuItems.appetizers;
      priceRange = { min: 8, max: 16 };
      break;
    case "small plates":
      itemSource = menuItems.smallPlates;
      priceRange = { min: 10, max: 18 };
      break;
    case "soups":
      itemSource = menuItems.soups;
      priceRange = { min: 7, max: 14 };
      break;
    case "salads":
      itemSource = menuItems.salads;
      priceRange = { min: 9, max: 16 };
      break;
    case "main courses":
    case "entrees":
      itemSource = menuItems.mainCourses;
      priceRange = { min: 18, max: 32 };
      break;
    case "desserts":
      itemSource = menuItems.desserts;
      priceRange = { min: 7, max: 12 };
      break;
    case "side dishes":
      itemSource = menuItems.sideDishes;
      priceRange = { min: 5, max: 10 };
      break;
    case "chef's specials":
      itemSource = menuItems.chefsSpecials;
      priceRange = { min: 24, max: 40 };
      break;
    case "seafood specialties":
      itemSource = menuItems.seafoodSpecialties;
      priceRange = { min: 22, max: 36 };
      break;
    default:
      // Default to main courses if category doesn't match
      itemSource = menuItems.mainCourses;
      priceRange = { min: 18, max: 30 };
  }

  // Get random items from the source
  const selectedItems = getRandomItems(itemSource, count);

  // Create menu items with descriptions, prices, and dietary information
  return selectedItems.map((item) => {
    const prefix = getRandomItems(menuItems.prefixes, 1)[0];
    const descriptor = getRandomItems(menuItems.descriptors, 1)[0];

    // Decide if we'll use a fancy name with prefix and descriptor (50% chance)
    const useFancyName = Math.random() > 0.5;
    const itemName = useFancyName ? `${prefix} ${descriptor} ${item}` : item;

    const dietaryFlags = getDietaryFlags(cuisine, itemName);

    return {
      name: itemName,
      description: generateItemDescription(),
      price: parseFloat(generateRandomPrice(priceRange.min, priceRange.max)),
      ...dietaryFlags,
    };
  });
}

// Function to generate menu file content with populated items
function generateMenuFileContent(cityName, restaurantName, restaurantCuisine) {
  const cityVar = toCamelCase(cityName);
  const restaurantVar = toCamelCase(restaurantName);

  // Generate menu items for each category
  const signatureDishes = generateMenuItems(
    "signature dishes",
    restaurantCuisine,
    4
  );
  const starters = generateMenuItems("starters", restaurantCuisine, 6);
  const mainCourses = generateMenuItems("main courses", restaurantCuisine, 8);
  const desserts = generateMenuItems("desserts", restaurantCuisine, 5);

  return `import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for ${restaurantName} in ${cityName}
 */
export const ${cityVar}${restaurantVar}Menu: RestaurantMenu = {
  title: "Main Menu",
  description: "Our carefully curated selection of dishes",
  category: [
    {
      name: "Signature Dishes",
      items: ${JSON.stringify(signatureDishes, null, 2)}
    },
    {
      name: "Starters",
      items: ${JSON.stringify(starters, null, 2)}
    },
    {
      name: "Main Courses",
      items: ${JSON.stringify(mainCourses, null, 2)}
    },
    {
      name: "Desserts",
      items: ${JSON.stringify(desserts, null, 2)}
    }
  ]
};
`;
}

// Function to extract restaurant information from a restaurants.ts file
function extractRestaurantInfo(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");

    // Extract restaurant names and cuisines
    const restaurants = [];
    const namePattern = /name["']?\s*:\s*["']([^"']+)["']/g;
    const cuisinePattern = /cuisine["']?\s*:\s*["']([^"']+)["']/g;

    let nameMatches = [];
    let cuisineMatches = [];
    let match;

    // Extract all names
    while ((match = namePattern.exec(content)) !== null) {
      nameMatches.push(match[1]);
    }

    // Extract all cuisines
    while ((match = cuisinePattern.exec(content)) !== null) {
      cuisineMatches.push(match[1]);
    }

    // Match names with cuisines
    for (let i = 0; i < nameMatches.length && i < cuisineMatches.length; i++) {
      restaurants.push({
        name: nameMatches[i],
        cuisine: cuisineMatches[i],
      });
    }

    if (restaurants.length === 0) {
      console.warn(`No restaurant info found in ${filePath}`);
      console.log(`File content sample: ${content.substring(0, 200)}...`);
    } else {
      console.log(`Found ${restaurants.length} restaurants in ${filePath}`);
    }

    return restaurants;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
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
let totalExisting = 0;
let totalFailed = 0;

// Process each city directory
cityDirs.forEach((cityDir) => {
  const cityPath = path.join(baseDir, cityDir);
  const restaurantsFilePath = path.join(cityPath, "restaurants.ts");

  // Check if the restaurants.ts file exists
  if (fs.existsSync(restaurantsFilePath)) {
    console.log(`Processing ${cityDir}/restaurants.ts...`);

    // Extract restaurant info from the file
    const restaurants = extractRestaurantInfo(restaurantsFilePath);

    // Create a file for each restaurant
    restaurants.forEach((restaurant) => {
      const kebabName = toKebabCase(restaurant.name);

      if (!kebabName) {
        console.error(
          `Failed to generate valid filename for "${restaurant.name}"`
        );
        totalFailed++;
        return;
      }

      const menuFilePath = path.join(cityPath, `${kebabName}-menu.ts`);

      // Create the menu file if it doesn't exist
      try {
        if (!fs.existsSync(menuFilePath)) {
          fs.writeFileSync(
            menuFilePath,
            generateMenuFileContent(
              cityDir,
              restaurant.name,
              restaurant.cuisine
            )
          );
          console.log(`Created menu file: ${menuFilePath}`);
          totalCreated++;
        } else {
          console.log(`File already exists: ${menuFilePath}`);
          totalExisting++;
        }
      } catch (err) {
        console.error(`Error creating file for ${restaurant.name}:`, err);
        totalFailed++;
      }
    });
  } else {
    console.warn(`Restaurant file not found: ${restaurantsFilePath}`);
  }
});

console.log("=== Script Complete ===");
console.log(`Created ${totalCreated} new menu files`);
console.log(`Found ${totalExisting} existing menu files`);
if (totalFailed > 0) {
  console.log(`Failed to create ${totalFailed} menu files`);
}
console.log("All restaurant menu files process completed!");
