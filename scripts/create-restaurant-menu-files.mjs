import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";



// Import minimist for command-line argument parsing
import minimist from "minimist";

// Import the menu data from restaurants.js
import { menuItems } from "../src/lib/constants/info/restaurants.js";

// Parse command line arguments
const args = minimist(process.argv.slice(2), {
  string: ["menu-type", "category", "restaurant"],
  number: ["items"],
  default: {
    "menu-type": "all",
    category: "all",
    items: 5,
    restaurant: "all",
  },
});

// Validate menu-type argument
const validMenuTypes = ["all", "main", "dessert", "drinks"];
if (!validMenuTypes.includes(args["menu-type"])) {
  console.warn(`Invalid menu type: ${args["menu-type"]}. Using 'all' instead.`);
  args["menu-type"] = "all";
}

// Display chosen options
console.log(`Generating with options:`);
console.log(`- Menu Type: ${args["menu-type"]}`);
console.log(`- Category: ${args["category"]}`);
console.log(`- Items per category: ${args["items"]}`);
console.log(
  `- Restaurant: ${
    args["restaurant"] === "all" ? "All restaurants" : args["restaurant"]
  }`
);

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

// Function to determine if a menu item should have a dietary restriction based on cuisine and randomness
function getDietaryFlags(cuisine, itemName) {
  // These cuisines have more vegetarian options
  const vegetarianFriendlyCuisines = [
    "Burmese",
    "Chinese",
    "Ethiopian",
    "Greek",
    "Indian",
    "Indonesian",
    "Italian",
    "Japanese",
    "Lebanese",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Peruvian",
    "Thai",
    "Vietnamese",
  ];

  // These cuisines have more vegan options
  const veganFriendlyCuisines = [
    "Chinese",
    "Ethiopian",
    "Indian",
    "Japanese",
    "Lebanese",
    "Mediterranean",
    "Mexican",
    "Thai",
    "Vietnamese",
  ];

  // These cuisines have more gluten-free options
  const glutenFreeFriendlyCuisines = [
    "Greek",
    "Indian",
    "Japanese",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Thai",
    "Vietnamese",
  ];

  // Keywords that suggest meat
  const meatKeywords = [
    // General meat terms
    "meat",
    "red meat",
    "white meat",
    "game meat",
    "charcuterie",
    "cured meat",

    // Beef
    "beef",
    "steak",
    "ribeye",
    "sirloin",
    "brisket",
    "short ribs",
    "filet mignon",
    "tenderloin",
    "roast beef",
    "corned beef",
    "ground beef",
    "ox",
    "oxtail",

    // Pork
    "pork",
    "bacon",
    "ham",
    "prosciutto",
    "pancetta",
    "chorizo",
    "salami",
    "loin",
    "pork belly",
    "ribs",
    "pork chop",
    "hog",
    "pig",

    // Lamb / Goat
    "lamb",
    "mutton",
    "goat",
    "rack of lamb",
    "lamb chop",
    "shank",
    "chevon",

    // Poultry
    "chicken",
    "turkey",
    "duck",
    "goose",
    "hen",
    "cornish hen",
    "quail",
    "pheasant",
    "fowl",
    "drumstick",
    "wing",
    "breast",
    "thigh",

    // Veal
    "veal",
    "veal chop",

    // Sausages & Processed
    "sausage",
    "bratwurst",
    "andouille",
    "hot dog",
    "kielbasa",
    "bologna",

    // Other game / exotic meats (optional)
    "venison",
    "elk",
    "boar",
    "rabbit",
    "kangaroo",
    "bison",
    "buffalo",
  ];

  // Keywords that suggest seafood
  const seafoodKeywords = [
    // General categories
    "fish",
    "shellfish",
    "crustacean",
    "seafood",
    "ocean catch",
    "whitefish",

    // Finfish
    "salmon",
    "tuna",
    "trout",
    "cod",
    "halibut",
    "snapper",
    "tilapia",
    "bass",
    "sea bass",
    "grouper",
    "catfish",
    "barramundi",
    "mackerel",
    "sardine",
    "anchovy",
    "herring",
    "mahi mahi",
    "sablefish",
    "flounder",
    "sole",

    // Shellfish – Crustaceans
    "shrimp",
    "prawns",
    "lobster",
    "crab",
    "langoustine",
    "crayfish",

    // Shellfish – Mollusks
    "clam",
    "mussel",
    "oyster",
    "scallop",
    "cockle",
    "whelk",

    // Cephalopods
    "squid",
    "calamari",
    "octopus",
    "cuttlefish",

    // Roe & Misc
    "caviar",
    "fish roe",
    "smelt",
    "eel",
    "uni",
    "ikan",
    "kani",

    // Prepared terms / dishes
    "seafood stew",
    "seafood pasta",
    "seafood risotto",
    "grilled fish",
    "fish and chips",
    "crab cake",
    "lobster roll",
    "shrimp cocktail",
    "tuna tartare",
    "poke",
  ];

  // Keywords that suggest dairy
  const dairyKeywords = [
    // Core Dairy Products
    "milk",
    "cream",
    "butter",
    "cheese",
    "yogurt",
    "custard",

    // Milk Derivatives
    "buttermilk",
    "evaporated milk",
    "condensed milk",
    "whole milk",
    "skim milk",
    "2% milk",
    "heavy cream",
    "whipping cream",
    "half and half",
    "sour cream",
    "clotted cream",
    "creme fraiche",

    // Cheese Varieties
    "parmesan",
    "mozzarella",
    "cheddar",
    "feta",
    "brie",
    "gouda",
    "swiss",
    "blue cheese",
    "goat cheese",
    "ricotta",
    "cottage cheese",
    "cream cheese",
    "asiago",
    "pecorino",
    "monterey jack",
    "provolone",

    // Dairy-Based Sauces & Dishes
    "alfredo",
    "béchamel",
    "cheese sauce",
    "mac and cheese",
    "cheesecake",
    "ice cream",
    "gelato",
    "milkshake",
    "pudding",

    // Misc
    "lactose",
    "whey",
    "casein",
    "dairy",
    "dairy-based",
  ];

  // Keywords that suggest gluten
  const glutenKeywords = [
    // Grains & Flours
    "wheat",
    "barley",
    "rye",
    "triticale",
    "semolina",
    "spelt",
    "farro",
    "durum",
    "graham",
    "kamut",
    "einkorn",
    "malt",
    "matzo",
    "bran",
    "bulgur",
    "couscous",
    "gluten flour",
    "bleached flour",
    "self-rising flour",
    "enriched flour",
    "whole wheat flour",
    "all-purpose flour",
    "cake flour",
    "pastry flour",

    // Baked Goods & Doughs
    "bread",
    "bagel",
    "bun",
    "brioche",
    "roll",
    "biscuit",
    "croissant",
    "pastry",
    "crust",
    "cake",
    "cupcake",
    "brownie",
    "pie",
    "tart",
    "donut",
    "muffin",
    "cookie",
    "crackers",
    "croutons",
    "scone",
    "shortbread",
    "waffle cone",

    // Pasta & Noodles
    "pasta",
    "spaghetti",
    "fettuccine",
    "linguine",
    "macaroni",
    "penne",
    "lasagna",
    "noodles",
    "ravioli",
    "tortellini",
    "gnocchi",
    "ramen",
    "udon",
    "lo mein",
    "chow mein",

    // Dishes
    "pizza",
    "calzone",
    "stromboli",
    "dumpling",
    "empanada",
    "pierogi",
    "potsticker",
    "pita",
    "flatbread",
    "stuffing",
    "gravy (thickened with flour)",

    // Snacks & Misc
    "pretzel",
    "granola bar",
    "trail mix (with granola)",
    "breadsticks",
    "beer batter",
    "seitan",
    "soy sauce (traditional)",
    "tempura",
    "breadcrumbs",
    "breading",
    "dough",
    "batter",
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
      price: parseFloat(generateRandomPrice(priceRange.min, priceRange.max)),
      ...dietaryFlags,
    };
  });
}

// Function to generate menu items specific to a menu type with custom item count
function generateMenuItemsForType(category, cuisine, count = args["items"]) {
  // If a specific category is specified and doesn't match this one, use default count
  if (
    args["category"] !== "all" &&
    args["category"].toLowerCase() !== category.toLowerCase()
  ) {
    // Use a smaller default count for non-selected categories
    count = 5;
  }

  // Get the appropriate item source based on menu type
  let itemSource;
  let priceRange = { min: 8, max: 16 };
  let useFancyName = true;

  switch (category.toLowerCase()) {
    case "main courses":
    case "entrees":
      itemSource = menuItems.mainCourses;
      priceRange = { min: 18, max: 32 };
      break;
    case "signature dishes":
      itemSource = menuItems.signatureDishes;
      priceRange = { min: 24, max: 38 };
      break;
    case "seafood specialties":
      itemSource = menuItems.seafoodSpecialties;
      priceRange = { min: 22, max: 36 };
      break;
    case "chef's specials":
      itemSource = menuItems.chefsSpecials;
      priceRange = { min: 24, max: 40 };
      break;
    case "appetizers":
    case "starters":
      itemSource = menuItems.starters;
      priceRange = { min: 8, max: 16 };
      break;
    case "soups":
      itemSource = menuItems.soups;
      priceRange = { min: 7, max: 14 };
      break;
    case "salads":
      itemSource = menuItems.salads;
      priceRange = { min: 9, max: 16 };
      useFancyName = false;
      break;
    case "side dishes":
      itemSource = menuItems.sideDishes;
      priceRange = { min: 5, max: 10 };
      break;
    case "desserts":
      useFancyName = false;
    case "sweet treats":
      itemSource = menuItems.desserts;
      priceRange = { min: 7, max: 12 };
      break;
    case "frozen desserts":
      itemSource = menuItems.frozenDesserts;
      priceRange = { min: 7, max: 12 };
      break;
    case "baked goods":
      itemSource = menuItems.bakedGoods;
      priceRange = { min: 6, max: 11 };
      break;
    case "non-alcoholic beverages":
      itemSource = menuItems.nonAlcoholicBeverages;
      priceRange = { min: 4, max: 8 };
      break;
    case "alcoholic beverages":
      useFancyName = false;
    case "drinks":
    case "cocktails":
      itemSource = menuItems.alcoholicBeverages;
      priceRange = { min: 9, max: 15 };
      break;
    case "signature cocktails":
      itemSource = menuItems.alcoholicBeverages.filter((item) =>
        [
          "Martini",
          "Margarita",
          "Old Fashioned",
          "Mojito",
          "Negroni",
          "Manhattan",
          "Bloody Mary",
          "Cosmopolitan",
          "Mai Tai",
          "Whiskey Sour",
        ].includes(item)
      );
      priceRange = { min: 10, max: 16 };
      break;
    case "wine":
      useFancyName = false;
    case "wine selection":
      itemSource = menuItems.wines;
      priceRange = { min: 8, max: 14 };
      break;
    case "spirits":
      useFancyName = false;
    case "spirits and liqueurs":
      itemSource = menuItems.spiritsAndLiqueurs;
      priceRange = { min: 10, max: 18 };
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

    const itemName = useFancyName ? `${prefix} ${descriptor} ${item}` : item;

    const dietaryFlags = getDietaryFlags(cuisine, itemName);

    return {
      name: itemName,
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
export const ${cityVar}${restaurantVar}menu: RestaurantMenu = {
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

// Function to generate combined menu file content with all three menu types
function generateCombinedMenuContent(
  cityName,
  restaurantName,
  restaurantCuisine
) {
  const cityVar = toCamelCase(cityName);
  const restaurantVar = toCamelCase(restaurantName);

  // Generate menu items for each category of Main Course Menu
  const signatureDishes = generateMenuItemsForType(
    "signature dishes",
    restaurantCuisine,
    7
  );
  const chefsSpecials = generateMenuItemsForType(
    "chef's specials",
    restaurantCuisine,
    5
  );
  const appetizers = generateMenuItemsForType(
    "appetizers",
    restaurantCuisine,
    8
  );
  const salads = generateMenuItemsForType("salads", restaurantCuisine, 5);
  const soups = generateMenuItemsForType("soups", restaurantCuisine, 4);
  const mainCourses = generateMenuItemsForType(
    "main courses",
    restaurantCuisine,
    8
  );
  const sideDishes = generateMenuItemsForType(
    "side dishes",
    restaurantCuisine,
    6
  );
  const seafoodSpecialties = generateMenuItemsForType(
    "seafood specialties",
    restaurantCuisine,
    5
  );
  const nonAlcoholicBeverages = generateMenuItemsForType(
    "non-alcoholic beverages",
    restaurantCuisine,
    6
  );

  // Generate dessert menu categories
  const frozenDesserts = generateMenuItemsForType(
    "frozen desserts",
    restaurantCuisine,
    5
  );
  const bakedGoods = generateMenuItemsForType(
    "baked goods",
    restaurantCuisine,
    5
  );

  // Generate alcohol categories
  const cocktails = generateMenuItemsForType(
    "signature cocktails",
    restaurantCuisine,
    7
  );
  const wines = generateMenuItemsForType(
    "wine selection",
    restaurantCuisine,
    6
  );
  const spirits = generateMenuItemsForType(
    "spirits and liqueurs",
    restaurantCuisine,
    5
  );

  // Build menus array based on menu-type flag
  let menus = [];

  if (args["menu-type"] === "all" || args["menu-type"] === "main") {
    menus.push({
      title: "Main Course Menu",
      description: "Our carefully crafted selection of hearty dishes",
      category: [
        {
          name: "Signature Dishes",
          items: signatureDishes,
        },
        {
          name: "Chef's Specials",
          items: chefsSpecials,
        },
        {
          name: "Appetizers",
          items: appetizers,
        },
        {
          name: "Soups",
          items: soups,
        },
        {
          name: "Salads",
          items: salads,
        },
        {
          name: "Main Courses",
          items: mainCourses,
        },
        {
          name: "Seafood Specialties",
          items: seafoodSpecialties,
        },
        {
          name: "Side Dishes",
          items: sideDishes,
        },
        {
          name: "Non-Alcoholic Beverages",
          items: nonAlcoholicBeverages,
        },
      ],
    });
  }

  if (args["menu-type"] === "all" || args["menu-type"] === "dessert") {
    menus.push({
      title: "Dessert Menu",
      description: "Indulge in our delicious sweet creations",
      category: [
        {
          name: "Baked Goods",
          items: bakedGoods,
        },
        {
          name: "Frozen Desserts",
          items: frozenDesserts,
        },
      ],
    });
  }

  if (args["menu-type"] === "all" || args["menu-type"] === "drinks") {
    menus.push({
      title: "Drinks Menu",
      description:
        "A selection of fine alcoholic beverages to complement your meal",
      category: [
        {
          name: "Signature Cocktails",
          items: cocktails,
        },
        {
          name: "Wine Selection",
          items: wines,
        },
        {
          name: "Spirits and Liqueurs",
          items: spirits,
        },
      ],
    });
  }

  return `import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for ${restaurantName} in ${cityName}
 */
export const ${cityVar}${restaurantVar}Menu: RestaurantMenu[] = ${JSON.stringify(
    menus,
    null,
    2
  )};
`;
}

// Process each restaurant to create a single menu file with all three menu types
function createMenuFileForRestaurant(cityDir, restaurant) {
  const cityPath = path.join(baseDir, cityDir);
  const kebabName = toKebabCase(restaurant.name);

  if (!kebabName) {
    console.error(`Failed to generate valid filename for "${restaurant.name}"`);
    return false;
  }

  // Create menu file path with menu type indicator if not generating all
  let menuFileName = `${kebabName}Menu.ts`;
  if (args["menu-type"] !== "all") {
    menuFileName = `${kebabName}-${args["menu-type"]}Menu.ts`;
  }

  const menuFilePath = path.join(cityPath, menuFileName);

  try {
    fs.writeFileSync(
      menuFilePath,
      generateCombinedMenuContent(cityDir, restaurant.name, restaurant.cuisine)
    );
    console.log(`Created menu file: ${menuFilePath}`);
    return true;
  } catch (err) {
    console.error(`Error creating menu file for ${restaurant.name}:`, err);
    return false;
  }
}

// Process each city directory
cityDirs.forEach((cityDir) => {
  const cityPath = path.join(baseDir, cityDir);
  const restaurantsFilePath = path.join(cityPath, "restaurants.ts");

  // Check if the restaurants.ts file exists
  if (fs.existsSync(restaurantsFilePath)) {
    console.log(`Processing ${cityDir}/restaurants.ts...`);

    // Extract restaurant info from the file
    const restaurants = extractRestaurantInfo(restaurantsFilePath);

    // Filter restaurants if a specific one was requested
    const filteredRestaurants =
      args["restaurant"] === "all"
        ? restaurants
        : restaurants.filter((r) =>
            r.name.toLowerCase().includes(args["restaurant"].toLowerCase())
          );

    if (args["restaurant"] !== "all" && filteredRestaurants.length === 0) {
      console.warn(
        `No restaurants found matching "${args["restaurant"]}" in ${cityDir}`
      );
      return;
    }

    // Create menu file for each restaurant
    filteredRestaurants.forEach((restaurant) => {
      const result = createMenuFileForRestaurant(cityDir, restaurant);

      if (result) {
        totalCreated += 1;
      } else {
        totalFailed += 1;
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
