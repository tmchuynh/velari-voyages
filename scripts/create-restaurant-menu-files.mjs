import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// // Basic usage (generates all menu types with default settings)
// node scripts/create-restaurant-menu-files.mjs

// // Generate only main course menus
// node scripts/create-restaurant-menu-files.mjs --menu-type main

// // Generate only dessert menus
// node scripts/create-restaurant-menu-files.mjs --menu-type dessert

// // Generate only drinks menus
// node scripts/create-restaurant-menu-files.mjs --menu-type drinks

// // Generate menus with 10 items per category
// node scripts/create-restaurant-menu-files.mjs --items 10

// // Generate menus for a specific restaurant (partial name matching)
// node scripts/create-restaurant-menu-files.mjs --restaurant "Bistro"

// // Focus on a specific food category
// node scripts/create-restaurant-menu-files.mjs --category "Signature Dishes"

// // Append to a specific category without regenerating the entire file
// node scripts/create-restaurant-menu-files.mjs --append-category "Main Courses" --append-count 5 --restaurant "Bistro"

// // CUSTOMIZATION OPTIONS:
// // Exclude certain menu types (main, dessert, drinks)
// node scripts/create-restaurant-menu-files.mjs --exclude-menu-types drinks --restaurant "Bistro"

// // Exclude specific categories within menus
// node scripts/create-restaurant-menu-files.mjs --exclude-categories "Soups,Chef's Specials,Seafood Specialties" --restaurant "Bistro"

// // Set price range for the entire restaurant
// node scripts/create-restaurant-menu-files.mjs --price-range budget --restaurant "Bistro"  // budget, standard, premium, luxury

// // Create a restaurant with only vegan or vegetarian options
// node scripts/create-restaurant-menu-files.mjs --dietary-focus vegan-only --restaurant "Green Garden"
// node scripts/create-restaurant-menu-files.mjs --dietary-focus vegetarian-only --restaurant "Veggie Delight"

// // Set restaurant style
// node scripts/create-restaurant-menu-files.mjs --restaurant-style fine-dining --restaurant "Elegant Eats"
// node scripts/create-restaurant-menu-files.mjs --restaurant-style adult-only --enhance-menu drinks --restaurant "Night Cap"

// // Combining multiple options
// node scripts/create-restaurant-menu-files.mjs --menu-type main --items 12 --restaurant "Seafood" --price-range premium

// Import minimist for command-line argument parsing
import minimist from "minimist";

// Import the menu data from restaurants.js
import { menuItems } from "../src/lib/constants/info/restaurants.js";

// Parse command line arguments
const args = minimist(process.argv.slice(2), {
  string: [
    "menu-type",
    "category",
    "restaurant",
    "append-category",
    "exclude-menu-types",
    "exclude-categories",
    "price-range",
    "dietary-focus",
    "restaurant-style",
    "enhance-menu",
  ],
  number: ["items", "append-count"],
  default: {
    "menu-type": "all",
    category: "all",
    items: 7,
    restaurant: "all",
    "append-category": "",
    "append-count": 3,
    "exclude-menu-types": "",
    "exclude-categories": "",
    "price-range": "standard",
    "dietary-focus": "mixed",
    "restaurant-style": "casual",
    "enhance-menu": "",
  },
});

// Process comma-separated lists into arrays
const excludedMenuTypes = args["exclude-menu-types"]
  ? args["exclude-menu-types"]
      .split(",")
      .map((type) => type.trim().toLowerCase())
  : [];

const excludedCategories = args["exclude-categories"]
  ? args["exclude-categories"].split(",").map((cat) => cat.trim())
  : [];

// Validate price range
const validPriceRanges = ["budget", "standard", "premium", "luxury"];
if (!validPriceRanges.includes(args["price-range"])) {
  console.warn(
    `Invalid price range: ${args["price-range"]}. Using 'standard' instead.`
  );
  args["price-range"] = "standard";
}

// Validate dietary focus
const validDietaryFocuses = [
  "mixed",
  "vegan-only",
  "vegetarian-only",
  "gluten-free",
  "halal-only",
  "kosher-only",
];
if (!validDietaryFocuses.includes(args["dietary-focus"])) {
  console.warn(
    `Invalid dietary focus: ${args["dietary-focus"]}. Using 'mixed' instead.`
  );
  args["dietary-focus"] = "mixed";
}

// Validate restaurant style
const validRestaurantStyles = [
  "casual",
  "fine-dining",
  "family-friendly",
  "adult-only",
];
if (!validRestaurantStyles.includes(args["restaurant-style"])) {
  console.warn(
    `Invalid restaurant style: ${args["restaurant-style"]}. Using 'casual' instead.`
  );
  args["restaurant-style"] = "casual";
}

// Validate menu-type argument
const validMenuTypes = ["all", "main", "dessert", "drinks"];
if (!validMenuTypes.includes(args["menu-type"])) {
  console.warn(`Invalid menu type: ${args["menu-type"]}. Using 'all' instead.`);
  args["menu-type"] = "all";
}

// Determine if we're in append mode
const APPEND_MODE = args["append-category"] !== "";

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
if (APPEND_MODE) {
  console.log(
    `- Append Mode: Adding ${args["append-count"]} items to "${args["append-category"]}" category`
  );
}

// Display customization options if any are set
if (excludedMenuTypes.length > 0) {
  console.log(`- Excluded Menu Types: ${excludedMenuTypes.join(", ")}`);
}
if (excludedCategories.length > 0) {
  console.log(`- Excluded Categories: ${excludedCategories.join(", ")}`);
}
if (args["price-range"] !== "standard") {
  console.log(`- Price Range: ${args["price-range"]}`);
}
if (args["dietary-focus"] !== "mixed") {
  console.log(`- Dietary Focus: ${args["dietary-focus"]}`);
}
if (args["restaurant-style"] !== "casual") {
  console.log(`- Restaurant Style: ${args["restaurant-style"]}`);
}
if (args["enhance-menu"]) {
  console.log(`- Enhanced Menu: ${args["enhance-menu"]}`);
}

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
function generateMenuItemsForType(
  category,
  cuisine,
  count = args["items"],
  restaurant
) {
  // If a specific category is specified and doesn't match this one, use default count
  if (
    args["category"] !== "all" &&
    args["category"].toLowerCase() !== category.toLowerCase()
  ) {
    // Use a smaller default count for non-selected categories
    count = 5;
  }

  // If this category is being enhanced, increase the count
  if (
    args["enhance-menu"].toLowerCase() === "drinks" &&
    ["signature cocktails", "wine selection", "spirits and liqueurs"].includes(
      category.toLowerCase()
    )
  ) {
    count = Math.max(count * 2, 10); // Double the count or minimum 10 items
  }

  // Get the appropriate item source based on menu type
  let itemSource;

  // Adjust price ranges based on the price-range flag and restaurant properties
  let priceRange = { min: 8, max: 16 }; // Default

  // Declare priceModifiers outside the switch statement
  let priceModifiers;

  // Initialize useFancyName with default value before it's used in the switch cases
  let useFancyName = Math.random() > 0.5; // Default to 50% chance of fancy names

  // Set base price ranges according to restaurant's priceRange indicator
  switch (restaurant.priceRange) {
    case "$": // Budget pricing
      priceModifiers = {
        budget: { factor: 0.6, fixed: -2 },
        standard: { factor: 0.7, fixed: -1 },
        premium: { factor: 0.8, fixed: 0 },
        luxury: { factor: 0.9, fixed: 1 },
      };
      break;
    case "$$": // Moderate pricing
      priceModifiers = {
        budget: { factor: 0.8, fixed: -1 },
        standard: { factor: 1.0, fixed: 0 },
        premium: { factor: 1.1, fixed: 1 },
        luxury: { factor: 1.2, fixed: 2 },
      };
      break;
    case "$$$": // Expensive pricing
      priceModifiers = {
        budget: { factor: 1.2, fixed: 0 },
        standard: { factor: 1.3, fixed: 2 },
        premium: { factor: 1.4, fixed: 3 },
        luxury: { factor: 1.5, fixed: 5 },
      };
      break;
    case "$$$$": // Luxury pricing
      priceModifiers = {
        budget: { factor: 1.5, fixed: 5 },
        standard: { factor: 1.8, fixed: 8 },
        premium: { factor: 2.0, fixed: 10 },
        luxury: { factor: 2.5, fixed: 15 },
      };
      break;
    default:
      // Use standard pricing if not specified
      priceModifiers = {
        budget: { factor: 0.6, fixed: -2 },
        standard: { factor: 1.0, fixed: 0 },
        premium: { factor: 1.5, fixed: 4 },
        luxury: { factor: 2.5, fixed: 10 },
      };
  }

  // If category is being enhanced due to isAdultOnly, increase the count
  if (
    restaurant.isAdultOnly &&
    [
      "signature cocktails",
      "wine selection",
      "spirits and liqueurs",
      "alcoholic beverages",
      "drinks",
      "cocktails",
    ].includes(category.toLowerCase())
  ) {
    count = Math.max(count * 2, 10); // Double the count or minimum 10 items
    console.log(
      `Enhanced drinks menu for adult-only restaurant: ${restaurant.name}`
    );
  }

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
    case "wine selection":
      itemSource = menuItems.wines;
      priceRange = { min: 8, max: 14 };
      break;
    case "spirits":
    case "spirits and liqueurs":
      itemSource = menuItems.spiritsAndLiqueurs;
      priceRange = { min: 10, max: 18 };
      break;
    case "cocktails":
    case "signature cocktails":
      // This will be handled by generateCocktailItems
      itemSource = null;
      priceRange = { min: 10, max: 16 };
      return generateCocktailItems(count, priceRange);
    default:
      // Default to main courses if category doesn't match
      itemSource = menuItems.mainCourses;
      priceRange = { min: 18, max: 30 };
  }

  // Apply price range adjustments based on selected pricing tier
  const modifier = priceModifiers[args["price-range"]];
  priceRange.min = Math.max(
    Math.round(priceRange.min * modifier.factor) + modifier.fixed,
    3
  );
  priceRange.max = Math.max(
    Math.round(priceRange.max * modifier.factor) + modifier.fixed,
    priceRange.min + 2
  );

  // Apply restaurant-specific price modifiers

  // 1. Fine dining expensive restaurants get 5% price increase
  if (restaurant.isFineDining && restaurant.priceRange === "$$$") {
    priceRange.min *= 1.05;
    priceRange.max *= 1.05;
  }

  // 2. Popular restaurants get 10% price increase
  if (restaurant.isPopular) {
    priceRange.min *= 1.1;
    priceRange.max *= 1.1;
  }

  // 3. Adult-only restaurants get 2% price increase
  if (restaurant.isAdultOnly) {
    priceRange.min *= 1.02;
    priceRange.max *= 1.02;
  }

  // Round prices after all adjustments
  priceRange.min = Math.round(priceRange.min * 100) / 100;
  priceRange.max = Math.round(priceRange.max * 100) / 100;

  // For fine dining, always use fancy names
  if (restaurant.isFineDining) {
    useFancyName = true;
  }

  // Get the appropriate item source based on menu type
  // ...existing code...

  // Filter items for specialized dietary restaurants
  if (args["dietary-focus"] !== "mixed") {
    // Use the keywords to filter out incompatible items
    if (itemSource && Array.isArray(itemSource)) {
      let filteredSource = [...itemSource];

      // Filter for vegetarian/vegan
      if (
        args["dietary-focus"] === "vegetarian-only" ||
        args["dietary-focus"] === "vegan-only"
      ) {
        const lowerMeatKeywords = meatKeywords.map((k) => k.toLowerCase());
        const lowerSeafoodKeywords = seafoodKeywords.map((k) =>
          k.toLowerCase()
        );

        // Filter out meat and seafood
        filteredSource = filteredSource.filter((item) => {
          const lowerItem = item.toLowerCase();
          const hasMeat = lowerMeatKeywords.some((keyword) =>
            lowerItem.includes(keyword)
          );
          const hasSeafood = lowerSeafoodKeywords.some((keyword) =>
            lowerItem.includes(keyword)
          );
          return !hasMeat && !hasSeafood;
        });

        // Additional filter for vegan (remove dairy)
        if (args["dietary-focus"] === "vegan-only") {
          const lowerDairyKeywords = dairyKeywords.map((k) => k.toLowerCase());
          filteredSource = filteredSource.filter((item) => {
            const lowerItem = item.toLowerCase();
            const hasDairy = lowerDairyKeywords.some((keyword) =>
              lowerItem.includes(keyword)
            );
            return !hasDairy;
          });
        }
      }

      // Filter for gluten-free
      else if (args["dietary-focus"] === "gluten-free") {
        const lowerGlutenKeywords = glutenKeywords.map((k) => k.toLowerCase());
        filteredSource = filteredSource.filter((item) => {
          const lowerItem = item.toLowerCase();
          const hasGluten = lowerGlutenKeywords.some((keyword) =>
            lowerItem.includes(keyword)
          );
          return !hasGluten;
        });
      }

      // Filter for halal
      else if (args["dietary-focus"] === "halal-only") {
        // Define non-halal keywords (focusing on pork products and alcohol)
        const nonHalalKeywords = [
          "pork",
          "bacon",
          "ham",
          "prosciutto",
          "pancetta",
          "pepperoni",
          "salami",
          "lard",
          "gelatin",
          "wine",
          "beer",
          "alcohol",
          "rum",
          "vodka",
          "whiskey",
          "liqueur",
          "brandy",
        ];

        const lowerNonHalalKeywords = nonHalalKeywords.map((k) =>
          k.toLowerCase()
        );
        filteredSource = filteredSource.filter((item) => {
          const lowerItem = item.toLowerCase();
          const hasNonHalal = lowerNonHalalKeywords.some((keyword) =>
            lowerItem.includes(keyword)
          );
          return !hasNonHalal;
        });
      }

      // Filter for kosher
      else if (args["dietary-focus"] === "kosher-only") {
        // Define non-kosher keywords
        const nonKosherKeywords = [
          // Shellfish and forbidden seafood
          "shellfish",
          "shrimp",
          "crab",
          "lobster",
          "clam",
          "mussel",
          "oyster",
          "scallop",
          "squid",
          "calamari",
          "octopus",
          "eel",

          // Pork products
          "pork",
          "bacon",
          "ham",
          "prosciutto",
          "pancetta",
          "lard",

          // Mixed meat and dairy
          "cheeseburger",
          "meat and cheese",
          "cream sauce with meat",
        ];

        const lowerNonKosherKeywords = nonKosherKeywords.map((k) =>
          k.toLowerCase()
        );
        filteredSource = filteredSource.filter((item) => {
          const lowerItem = item.toLowerCase();
          const hasNonKosher = lowerNonKosherKeywords.some((keyword) =>
            lowerItem.includes(keyword)
          );
          return !hasNonKosher;
        });
      }

      // Add specific items if we filtered too many
      if (filteredSource.length < count) {
        let additionalItems = [];

        // Add dietary-specific items based on focus
        if (args["dietary-focus"] === "vegetarian-only") {
          additionalItems = [
            "Mushroom Risotto",
            "Eggplant Parmesan",
            "Roasted Vegetable Medley",
            "Stuffed Zucchini",
            "Vegetable Paella",
            "Vegetable Stir Fry",
            "Vegetable Lasagna",
            "Vegetable Tacos",
            "Vegetable Fajitas",
            "Vegetable Skewers",
            "Vegetable Samosas",
            "Vegetable Biryani",
            "Vegetable Pad Thai",
            "Vegetable Tempura",
            "Vegetable Gyoza",
            "Vegetable Spring Rolls",
            "Quinoa Bowl",
            "Falafel",
            "Vegetable Curry",
            "Vegetable Korma",
            "Vegetable Tagine",
            "Vegetable Stir-Fried Noodles",
            "Vegetable Fried Rice",
            "Vegetable Soup",
            "Vegetable Chili",
            "Vegetable Bolognese",
            "Vegetable Risotto",
            "Vegetable Pizza",
            "Vegetable Quesadilla",
            "Vegetable Burrito",
            "Vegetable Sushi Rolls",
            "Vegetable Pad See Ew",
            "Spinach Pie",
            "Veggie Burger",
            "Lentil Stew",
            "Tofu Stir Fry",
            "Truffle Mushroom Risotto",
            "Wild Mushroom Pasta",
            "Butternut Squash Ravioli",
            "Caprese Salad",
            "Greek Spanakopita",
            "Stuffed Portobello Mushrooms",
            "Vegetable Wellington",
            "Ricotta Stuffed Shells",
            "Four Cheese Macaroni",
            "Root Vegetable Pot Pie",
            "Saag Paneer",
            "Chana Masala",
            "Malai Kofta",
            "Palak Paneer",
            "Paneer Tikka Masala",
            "Vegetable Moussaka",
            "Herb and Cheese Frittata",
            "Mediterranean Falafel Bowl",
            "Stuffed Grape Leaves",
            "Roasted Beet and Goat Cheese Tart",
            "Wild Mushroom and Truffle Flatbread",
            "Burrata with Heirloom Tomatoes",
            "Vegetable Enchiladas with Queso",
            "Three Bean Chili with Queso Fresco",
            "Shakshuka with Feta",
            "Vegetable Bibimbap",
            "Crispy Vegetable Tempura Platter",
            "Potato Gnocchi with Brown Butter Sage",
            "Garlic and Herb Roasted Vegetables",
            "Vegetable Stuffed Poblano Peppers",
            "Pumpkin Sage Pasta",
            "Sweet Potato and Black Bean Enchiladas",
            "Vegetable Paella with Saffron Rice",
            "Asparagus and Gruyère Tart",
            "Spinach and Artichoke Stuffed Mushrooms",
            "Vegetable Manchurian with Fried Rice",
            "Cheese and Herb Soufflé",
            "Crispy Eggplant Parmesan Stacks",
            "Cannelloni Stuffed with Ricotta and Spinach",
            "Goat Cheese and Caramelized Onion Tart",
          ];
        } else if (args["dietary-focus"] === "vegan-only") {
          additionalItems = [
            "Jackfruit Tacos",
            "Seitan Kebabs",
            "Chickpea Curry",
            "Tempeh Bacon",

            "Cashew Cheese Plate",
            "Coconut Milk Soup",
            "Maple Glazed Carrots",
            "Nut Roast",
            "Portobello Steaks",
            "Vegan Mushroom Risotto",
            "Plant-Based Protein Bowl",
            "Stuffed Peppers with Quinoa",
            "Lentil Shepherd's Pie",
            "Vegan Pad Thai with Tofu",
            "Vegan Green Curry",
            "Vegetable Paella with Saffron",
            "Grilled Vegetable Skewers",
            "Crispy Tofu with Sweet Chili Sauce",
            "Buffalo Cauliflower Wings",
            "Mushroom and Walnut Bolognese",
            "Vegan Lasagna with Cashew Ricotta",
            "Roasted Vegetable Tagine",
            "Cauliflower Steaks with Chimichurri",
            "Chickpea and Spinach Curry",
            "Korean BBQ Tofu Bowl",
            "Sesame Ginger Tofu Stir Fry",
            "Spicy Black Bean Burgers",
            "Sweet Potato and Kale Buddha Bowl",
            "Falafel Wrap with Tahini Sauce",
            "Vegan Mushroom Bourguignon",
            "Eggplant and Lentil Moussaka",
            "Stuffed Acorn Squash with Wild Rice",
            "Vegan Ratatouille with Polenta",
            "Kung Pao Cauliflower",
            "Jackfruit Carnitas Tacos",
            "Miso Glazed Eggplant",
            "Vegan Poke Bowl with Watermelon",
            "Roasted Beet and Walnut Salad",
            "Vegan Crab Cakes with Hearts of Palm",
            "Tempeh Bacon BLT Sandwich",
            "Mushroom and Leek Pot Pie",
            "Vegan Shawarma with Seitan",
            "Quinoa Stuffed Bell Peppers",
            "Beyond Meat Bolognese",
            "Vegan Sushi Rolls with Avocado",
            "Charred Brussels Sprouts with Maple Glaze",
            "Impossible Meatballs with Marinara",
            "Crispy Tofu Banh Mi Sandwich",
            "Cauliflower and Chickpea Curry",
          ];
        } else if (args["dietary-focus"] === "gluten-free") {
          additionalItems = [
            "Quinoa Bowl",
            "Rice Noodle Stir Fry",
            "Polenta Squares",
            "Corn Tortilla Tacos",
            "Stuffed Bell Peppers",
            "Risotto",
            "Grilled Vegetables",
            "Rice Paper Rolls",
            "Sweet Potato Hash",
            "Herb Roasted Chicken with Root Vegetables",
            "Seared Scallops with Citrus Risotto",
            "Grilled Salmon with Mango Salsa",
            "Zucchini Noodles with Pesto",
            "Gluten-Free Pizza with Cauliflower Crust",
            "Thai Glass Noodle Salad",
            "Shrimp and Grits",
            "Carnitas with Corn Tortillas",
            "Bibimbap Rice Bowl",
            "Sushi Rolls with Tamari",
            "Roast Beef with Mashed Potatoes",
            "Herb-Crusted Lamb Chops",
            "Moroccan Chicken Tagine",
            "Gluten-Free Fish and Chips",
            "Bacon Wrapped Dates",
            "Spanish Seafood Paella",
            "Vanilla Bean Crème Brûlée",
            "Flourless Chocolate Cake",
            "Braised Short Ribs with Polenta",
            "Vietnamese Summer Rolls",
            "Seared Ahi Tuna with Wasabi Mashed Potatoes",
            "Mustard Glazed Pork Tenderloin",
            "Mediterranean Mezze Platter",
            "Maple Glazed Salmon with Wild Rice",
            "Chicken Marsala with Mushrooms",
            "Beef and Vegetable Stir Fry",
            "Ceviche with Plantain Chips",
            "Lobster Tail with Drawn Butter",
            "Stuffed Portobello with Quinoa",
            "Roasted Vegetable Frittata",
            "Gluten-Free Gnocchi with Brown Butter",
            "Coconut Shrimp with Mango Dipping Sauce",
            "Almond Flour Crusted Fish",
            "Charcuterie and Cheese Board",
            "Gluten-Free Crab Cakes",
            "Grilled Steak with Chimichurri",
          ];
        } else if (args["dietary-focus"] === "halal-only") {
          additionalItems = [
            "Slow Cooked Lamb Tagine with Apricots",
            "Chicken Tikka Masala with Basmati Rice",
            "Beef Kofta with Tzatziki",
            "Halal Lamb Rogan Josh",
            "Shish Tawook Chicken Skewers",
            "Halal Beef Lasagna",
            "Moroccan Lamb Meatballs",
            "Grilled Halal Steak with Chimichurri",
            "Chicken Shawarma Plate with Hummus",
            "Halal Beef Stroganoff",
            "Spiced Ground Beef Kabobs",
            "Lamb Korma with Naan",
            "Halal Butter Chicken",
            "Turkish Adana Kebab",
            "Lebanese Shish Barak (Lamb Dumplings)",
            "Halal Beef Barbacoa Tacos",
            "Oven-Roasted Halal Chicken with Herbs",
            "Halal Beef Wellington",
            "Lamb Kofta Curry",
            "Egyptian Koshari with Halal Beef",
            "Stuffed Bell Peppers with Halal Beef and Rice",
            "Halal Beef Rendang",
            "Spiced Baked Fish with Chermoula",
            "Chicken Maklouba (Upside-down Rice)",
            "Halal Meat Lover's Pizza",
            "Halal Beef Moussaka",
            "Lamb Chops with Mint Sauce",
            "Halal Beef Bourguignon",
            "Beef and Vegetable Kebabs",
            "Pakistani Haleem with Halal Meat",
            "Turkish Gözleme with Minced Meat",
            "Halal Beef Pho",
            "Chicken Mandi with Basmati Rice",
            "Lamb and Feta Stuffed Peppers",
            "Halal Beef Bulgogi",
          ];
        } else if (args["dietary-focus"] === "kosher-only") {
          additionalItems = [
            "Classic Chicken Soup with Matzo Balls",
            "Slow-Roasted Brisket with Root Vegetables",
            "Potato Latkes with Apple Sauce",
            "Beef Cholent Stew",
            "Herb Roasted Chicken with Roasted Vegetables",
            "Sweet Noodle Kugel",
            "Kosher Stuffed Cabbage Rolls",
            "Savory Vegetable Kugel",
            "Kosher Beef Short Ribs",
            "Challah French Toast with Maple Syrup",
            "Shakshuka with Fresh Herbs",
            "Kosher Lamb Shanks with Red Wine Sauce",
            "Potato and Onion Knishes",
            "Kosher Beef Goulash",
            "Israeli Couscous with Roasted Vegetables",
            "Lox and Cream Cheese Platter",
            "Kosher Roast Turkey with Cranberry Sauce",
            "Apricot Glazed Chicken",
            "Beef Tzimmes with Sweet Potatoes",
            "Kosher Chicken Schnitzel",
            "Sweet and Sour Meatballs",
            "Kosher Stuffed Derma (Kishke)",
            "Chicken Paprikash with Egg Noodles",
            "Kosher Beef Kebabs with Tahini",
            "Babka with Chocolate and Cinnamon",
            "Roasted Chicken with Pomegranate Glaze",
            "Beef and Barley Soup",
            "Kippered Salmon with Capers",
            "Jerusalem Mixed Grill (Kosher)",
            "Kosher Style Pastrami Sandwich",
            "Moroccan Fish with Chickpeas",
            "Kosher Beef Tongue with Raisin Sauce",
            "Honey Glazed Roasted Chicken",
            "Kosher Cholent (Sabbath Stew)",
            "Eggplant Caponata (Kosher)",
            "Kosher Veal Schnitzel with Lemon",
            "Homemade Rugelach Pastries",
            "Kosher Chicken Liver Pâté",
            "Stuffed Veal Breast (Kosher)",
            "Kosher Duck à l'Orange",
          ];
        }

        // Add enough items to meet the count
        const neededItems = Math.max(0, count - filteredSource.length);
        const selectedAdditionalItems = getRandomItems(
          additionalItems,
          neededItems
        );
        filteredSource = [...filteredSource, ...selectedAdditionalItems];
      }

      // Update the itemSource with our filtered list
      itemSource = filteredSource;
    }
  }

  // Get random items from the source
  const selectedItems = getRandomItems(itemSource, count);

  // Create menu items with descriptions, prices, and dietary information
  let items = selectedItems.map((item) => {
    const prefix = getRandomItems(menuItems.prefixes, 1)[0];
    const descriptor = getRandomItems(menuItems.descriptors, 1)[0];

    // Use fancy name only for appropriate categories (no need to redefine useFancyName here)
    const itemName =
      useFancyName || args["restaurant-style"] === "fine-dining"
        ? `${prefix} ${descriptor} ${item}`
        : item;

    // Check if the proposed name contains inappropriate terms for the dietary focus
    let nameNeedsChange = false;
    let alternativeDescriptor = "";

    if (
      args["dietary-focus"] === "vegetarian-only" ||
      args["dietary-focus"] === "vegan-only"
    ) {
      const lowerItemName = itemName.toLowerCase();
      const hasMeat = meatKeywords.some((keyword) =>
        lowerItemName.includes(keyword.toLowerCase())
      );
      const hasSeafood = seafoodKeywords.some((keyword) =>
        lowerItemName.includes(keyword.toLowerCase())
      );

      if (hasMeat || hasSeafood) {
        nameNeedsChange = true;
        alternativeDescriptor = getRandomItems(
          ["Garden", "Fresh", "Green", "Harvest", "Plant-Based", "Seasonal"],
          1
        )[0];
      }

      // For vegan, also check dairy
      if (args["dietary-focus"] === "vegan-only" && !nameNeedsChange) {
        const hasDairy = dairyKeywords.some((keyword) =>
          lowerItemName.includes(keyword.toLowerCase())
        );
        if (hasDairy) {
          nameNeedsChange = true;
          alternativeDescriptor = getRandomItems(
            ["Pure", "Plant", "Garden", "Harvest"],
            1
          )[0];
        }
      }
    } else if (args["dietary-focus"] === "gluten-free") {
      const lowerItemName = itemName.toLowerCase();
      const hasGluten = glutenKeywords.some((keyword) =>
        lowerItemName.includes(keyword.toLowerCase())
      );

      if (hasGluten) {
        nameNeedsChange = true;
        alternativeDescriptor = getRandomItems(
          ["Gluten-Free", "Flourless", "Grain-Free", "Pure"],
          1
        )[0];
      }
    } else if (args["dietary-focus"] === "halal-only") {
      const lowerItemName = itemName.toLowerCase();
      const nonHalalTerms = [
        "pork",
        "bacon",
        "ham",
        "alcohol",
        "wine",
        "beer",
        "liquor",
      ];
      const hasNonHalal = nonHalalTerms.some((keyword) =>
        lowerItemName.includes(keyword.toLowerCase())
      );

      if (hasNonHalal) {
        nameNeedsChange = true;
        alternativeDescriptor = getRandomItems(
          ["Halal", "Traditional", "Authentic", "House"],
          1
        )[0];
      }
    } else if (args["dietary-focus"] === "kosher-only") {
      const lowerItemName = itemName.toLowerCase();
      const nonKosherTerms = [
        "pork",
        "shellfish",
        "squid",
        "octopus",
        "rabbit",
        "catfish",
      ];
      const hasNonKosher = nonKosherTerms.some((keyword) =>
        lowerItemName.includes(keyword.toLowerCase())
      );

      if (hasNonKosher) {
        nameNeedsChange = true;
        alternativeDescriptor = getRandomItems(
          ["Kosher", "Traditional", "Classic", "House"],
          1
        )[0];
      }
    }

    // If the name needs changing, use a safer alternative
    if (nameNeedsChange) {
      itemName = `${alternativeDescriptor} ${item}`;
    }

    // Generate basic dietary flags
    const basicDietaryFlags = getDietaryFlags(cuisine, itemName);

    // Apply dietary focus overrides
    let dietaryFlags = { ...basicDietaryFlags };

    if (args["dietary-focus"] === "vegan-only") {
      dietaryFlags.isVegetarian = true;
      dietaryFlags.isVegan = true;
    } else if (args["dietary-focus"] === "vegetarian-only") {
      dietaryFlags.isVegetarian = true;
      // Vegan status can vary
      dietaryFlags.isVegan = !dietaryFlags.isVegetarian || Math.random() < 0.4; // 40% chance of vegetarian items also being vegan
    } else if (args["dietary-focus"] === "gluten-free") {
      dietaryFlags.isGlutenFree = true;
    } else if (args["dietary-focus"] === "halal-only") {
      dietaryFlags.isHalal = true;
    } else if (args["dietary-focus"] === "kosher-only") {
      dietaryFlags.isKosher = true;
    }

    return {
      name: itemName,
      price: parseFloat(generateRandomPrice(priceRange.min, priceRange.max)),
      ...dietaryFlags,
    };
  });

  // For adult-only restaurants, make sure alcohol items are featured
  if (
    args["restaurant-style"] === "adult-only" &&
    [
      "alcoholic beverages",
      "drinks",
      "cocktails",
      "signature cocktails",
      "wine",
      "wine selection",
      "spirits",
      "spirits and liqueurs",
    ].includes(category.toLowerCase())
  ) {
    // Enhance alcohol descriptions or pricing
    items = items.map((item) => ({
      ...item,
      price: Math.round(item.price * 1.25 * 100) / 100, // 25% premium
      isAdult: true, // Add adult-only flag
    }));
  }

  return items;
}

// New function to generate cocktail items using specialized cocktail data
function generateCocktailItems(count, priceRange) {
  const items = [];

  for (let i = 0; i < count; i++) {
    // Randomly select cocktail components
    const liqueur =
      getRandomItems(menuItems.cocktailLiqueurs, 1)[0] ||
      getRandomItems(menuItems.spiritsAndLiqueurs, 1)[0];
    const mixer = getRandomItems(menuItems.cocktailMixers, 1)[0];
    const garnish =
      Math.random() > 0.3
        ? getRandomItems(menuItems.cocktailGarnishes, 1)[0]
        : null;
    const technique = getRandomItems(menuItems.cocktailTechniques, 1)[0];
    const glassType = getRandomItems(
      menuItems.cocktailGlassware || ["glass"],
      1
    )[0];

    // Format name patterns
    let name;
    const namePattern = Math.floor(Math.random() * 4);

    switch (namePattern) {
      case 0:
        // "[Liqueur] [Mixer]" (e.g., "Vodka Cranberry")
        name = `${liqueur} ${mixer}`;
        break;
      case 1:
        // "[Technique] [Liqueur]" (e.g., "Shaken Martini")
        name = `${technique} ${liqueur}`;
        break;
      case 2:
        // "[Liqueur] with [Garnish]" (e.g., "Gin with Lime Twist")
        name = garnish ? `${liqueur} with ${garnish}` : `${liqueur} ${mixer}`;
        break;
      case 3:
        // Classic cocktail name (left as-is)
        const classicCocktail = getRandomItems(
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
            "Daiquiri",
            "Tom Collins",
          ],
          1
        )[0];
        name = classicCocktail;
        break;
    }

    // Generate description for the cocktail
    const descriptionTemplates = [
      `A signature ${technique.toLowerCase()} cocktail featuring premium ${liqueur.toLowerCase()}${
        garnish ? ` with a ${garnish.toLowerCase()} garnish` : ""
      }.`,
      `Our bartender's favorite blend of ${liqueur.toLowerCase()} and ${mixer.toLowerCase()}, served in a chilled ${glassType}.`,
      `${
        garnish ? `Garnished with ${garnish.toLowerCase()}, this` : "This"
      } ${technique.toLowerCase()} masterpiece combines ${liqueur.toLowerCase()} with ${mixer.toLowerCase()}.`,
      `A refreshing mix of ${liqueur.toLowerCase()} and hand-picked ingredients, ${technique.toLowerCase()} to perfection.`,
      `This classic ${name} is carefully crafted using our house-selected spirits and ${
        garnish ? `finished with ${garnish.toLowerCase()}` : "premium mixers"
      }.`,
    ];

    const description = getRandomItems(descriptionTemplates, 1)[0];

    items.push({
      name: name,
      description: description,
      price: parseFloat(generateRandomPrice(priceRange.min, priceRange.max)),
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: Math.random() > 0.2, // Most cocktails are gluten-free
      isHalal: false, // Alcoholic drinks are not halal
      isKosher: Math.random() > 0.5, // Some may be kosher
    });
  }

  return items;
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
  restaurantCuisine,
  restaurant // Add the full restaurant object as a parameter
) {
  // Build menus array based on menu-type flag and excluded menu types
  let menus = [];

  // Function to generate category descriptions based on category type
  function getCategoryDescription(categoryName, cuisine, _restaurant) {
    // Set up templates for different category types
    const templates = {
      "Signature Dishes": [
        `Our chef's pride—carefully selected ${cuisine} specialties that define our culinary identity, honed through years of experience and passion.`,
        `Exclusive, time-tested recipes that highlight the heart and soul of authentic ${cuisine} cooking.`,
        `House favorites that have stood the test of time and showcase our refined approach to ${cuisine} cuisine.`,
        `Distinctive creations that have become synonymous with our name—prepared with precision and purpose.`,
        `Celebrated dishes crafted with premium ingredients and exceptional care, designed to leave a lasting impression.`,
        `A curated collection of our most iconic and requested plates, each a testament to our culinary excellence.`,
        `Unforgettable signatures that define who we are and what we serve, crafted to perfection.`,
        `A hand-picked menu selection that reflects the chef’s current inspirations and exceptional skill.`,
        `Inspired by nature, mood, and season—our chef’s ever-evolving vision on a plate.`,
        `Crafted daily based on what’s freshest and most inspiring at the market.`,
        `A curated collection of our most iconic and requested plates.`,
        `Unforgettable signatures that define who we are and what we serve.`,
      ],
      "Chef's Specials": [
        `Seasonal offerings crafted by our executive chef, available for a limited time to reflect peak freshness.`,
        `Inventive dishes that explore rare ingredients, bold flavors, and progressive cooking techniques.`,
        `Expressions of creativity from our chef’s table—ever-changing and inspired by market finds.`,
        `Unique culinary compositions that rotate frequently to keep each visit fresh and surprising.`,
        `A hand-picked menu selection that reflects the chef’s current inspirations and exceptional skill.`,
        `A showcase of our chef's creativity, featuring dishes that are as unique as they are delicious.`,
        `A rotating selection of dishes that highlight the chef's creativity and passion for ${cuisine}.`,
        `A showcase of our chef's creativity, featuring dishes that are as unique as they are delicious.`,
        `Inspired by nature, mood, and season—our chef’s ever-evolving vision on a plate.`,
        `Crafted daily based on what’s freshest and most inspiring at the market.`,
      ],
      Appetizers: [
        `Small bites designed to awaken your senses and set the tone for your dining journey.`,
        `A selection of ${cuisine} starters that blend tradition with modern flair, perfect for sharing or savoring solo.`,
        `A delightful array of appetizers that highlight the best of ${cuisine} flavors—perfect for sharing or enjoying solo.`,
        `Crafted to excite the palate, our starters are a perfect introduction to the world of ${cuisine}.`,
        `A harmonious blend of textures and flavors, our appetizers are a celebration of ${cuisine} culinary artistry.`,
        `A selection of small plates that showcase the essence of ${cuisine}—perfect for sharing or savoring solo.`,
        `Flavor-forward starters that introduce our approach to ${cuisine} with balance and creativity.`,
        `Thoughtfully prepared small plates to begin your culinary experience with elegance and taste.`,
        `Traditional and reimagined ${cuisine} appetizers made for sharing or solo indulgence.`,
        `An inviting mix of light fare and bold starters crafted to excite the palate.`,
        `A selection of small plates that showcase the essence of ${cuisine}—perfect for sharing or savoring solo.`,
        `Mouthwatering previews of what's to come—crafted to tease and please.`,
        `A tempting assortment of beginning bites to pair with your first drink.`,
      ],
      Soups: [
        `A comforting range of house-made soups, from clear and delicate broths to rich, hearty bowls.`,
        `Daily-prepared soups made from seasonal ingredients and traditional ${cuisine} methods.`,
        `Warm, nourishing soups that reflect the heart of ${cuisine} cooking—perfect for any season.`,
        `Crafted with care, our soups are a celebration of ${cuisine} flavors and traditions.`,
        `Each bowl is a journey through the heart of ${cuisine}, crafted with care and expertise.`,
        `From light broths to hearty stews, our soups are a comforting embrace in every spoonful.`,
        `A warm, flavorful embrace in every bowl—crafted for nourishment and satisfaction.`,
        `Classic and modern takes on soup that reflect our culinary roots and creative spirit.`,
        `Steaming selections ideal for starting your meal or simply savoring the warmth.`,
        `Crafted with care, our soups are a celebration of ${cuisine} flavors and traditions.`,
        `Rich flavors and slow-simmered ingredients that speak of home and tradition.`,
        `Each bowl is a journey through the heart of ${cuisine}, crafted with care and expertise.`,
        `Each spoonful offers depth, comfort, and craftsmanship.`,
      ],
      Salads: [
        `Fresh-picked greens, vibrant produce, and house dressings made in-house daily.`,
        `Crisp and colorful salads that balance flavor, nutrition, and beautiful presentation.`,
        `A seasonal showcase of the garden’s bounty—thoughtfully composed and artfully arranged.`,
        `Lively salads combining texture, temperature, and taste for a refreshing start or light meal.`,
        `Crafted with care, our salads are a celebration of freshness and flavor.`,
        `Each salad is a work of art, designed to nourish and delight.`,
        `Each salad is a celebration of freshness and flavor, designed to nourish and delight.`,
        `A blend of local and organic ingredients, thoughtfully combined for maximum flavor.`,
        `From classic combinations to innovative creations, our salads are a feast for the senses.`,
        `Balanced, clean, and flavorful options featuring local and organic ingredients where possible.`,
        `Wholesome creations that blend crunch, freshness, and house-crafted dressings.`,
        `Light, clean, and energizing—each salad is a visual and flavorful delight.`,
      ],
      "Main Courses": [
        `Signature entrées crafted with precision, embodying the core of our ${cuisine} vision.`,
        `Robust and satisfying center-of-plate dishes that deliver flavor and artistry.`,
        `Hearty and refined mains rooted in traditional ${cuisine}, elevated by modern techniques.`,
        `Each plate tells a story—of heritage, ingredients, and expert execution.`,
        `Culinary centerpieces that define the essence of our dining experience.`,
        `From classic to contemporary, our mains are a celebration of ${cuisine} culture.`,
        `Crafted with the finest ingredients, our mains are a testament to our culinary philosophy.`,
        `A journey through ${cuisine} flavors, expertly prepared and beautifully presented.`,
        `Each dish is a masterpiece, showcasing the best of our culinary traditions.`,
        `From farm to table, our mains are a reflection of our commitment to quality and flavor.`,
        `Timeless classics and innovative creations that highlight the best of ${cuisine}.`,
        `Each dish is a celebration of flavor, tradition, and culinary excellence.`,
        `Crafted with passion and precision, our mains are designed to impress.`,
        `From hearty classics to modern interpretations, our mains are a feast for the senses.`,
        `A selection of mains that reflect the heart and soul of ${cuisine}, prepared with care.`,
        `Each dish is a culinary journey, showcasing the richness of ${cuisine} traditions.`,
        `From the kitchen to your table, our mains are crafted to delight and satisfy.`,
        `A selection of mains that reflect the heart and soul of ${cuisine}, prepared with care.`,
        `From the kitchen to your table, our mains are crafted to delight and satisfy.`,
        `A selection of mains that reflect the heart and soul of ${cuisine}, prepared with care.`,
        `From the kitchen to your table, our mains are crafted to delight and satisfy.`,
        `Timeless main courses crafted for bold palates and lasting impressions.`,
        `Thoughtfully prepared mains that offer comfort, complexity, and satisfaction.`,
      ],
      "Seafood Specialties": [
        `Ocean-inspired dishes crafted with respect for delicate textures and bold seasoning.`,
        `Fresh, sustainable seafood prepared using timeless ${cuisine} traditions.`,
        `From the sea to your plate—each dish is a tribute to the ocean’s bounty.`,
        `Expertly prepared seafood that highlights the natural flavors of the ocean.`,
        `A celebration of the sea, featuring seasonal catches and artisanal techniques.`,
        `From raw bar selections to grilled specialties, our seafood dishes are a must-try.`,
        `Crafted with care, our seafood offerings are a testament to our commitment to quality.`,
        `Sourced from local fisheries, our seafood dishes are as fresh as they come.`,
        `Celebrations of the sea—light, flavorful, and handled with the utmost care.`,
        `Daily catches transformed into exquisite plates by our skilled kitchen team.`,
        `Coastal cuisine brought inland with clarity, freshness, and elegance.`,
        `Prepared with simplicity to let the freshness of the sea speak for itself.`,
        `From raw bar delicacies to grilled perfection—our tribute to the ocean.`,
      ],
      "Side Dishes": [
        `Flavorful companions that round out your meal with harmony and flair.`,
        `Essential accompaniments, from traditional staples to inventive bites.`,
        `Crafted to enhance your main course, these sides are anything but ordinary.`,
        `Perfectly balanced additions that elevate your dining experience.`,
        `From classic to contemporary, our sides are designed to complement and surprise.`,
        `A selection of thoughtfully prepared sides that bring out the best in our mains.`,
        `Crafted to enhance your meal, these sides are a celebration of ${cuisine} flavors.`,
        `From roasted vegetables to artisanal grains, our sides are a perfect match for any dish.`,
        `Each side is a testament to our commitment to quality and flavor.`,
        `Supportive elements that enhance and elevate the star of your plate.`,
        `Classic ${cuisine} side dishes with our own unique interpretation.`,
        `Small dishes with big impact—each one crafted to complement without overpowering.`,
        `Versatile and craveable, designed to mix and match your perfect pairing.`,
        `Flavor-packed sides made to share—or keep all to yourself.`,
      ],
      "Non-Alcoholic Beverages": [
        `Refreshing selections ranging from house-made sodas to premium juices.`,
        `Mocktails and specialty drinks made with the same care as our cocktails.`,
        `Crafted beverages that offer a sophisticated alternative to traditional drinks.`,
        `Bright, invigorating options that cleanse the palate and refresh the spirit.`,
        `Handcrafted drinks designed to hydrate and delight—no spirits necessary.`,
        `Cold-pressed, house-infused, and always refreshing.`,
        `Sophisticated non-alcoholic choices made to complement any dish.`,
        `Bright and revitalizing beverages for all ages and preferences.`,
        `Flavorful, alcohol-free options that never compromise on taste or presentation.`,
        `Bright and revitalizing beverages for all ages and preferences.`,
        `Handcrafted drinks designed to hydrate and delight—no spirits necessary.`,
        `Cold-pressed, house-infused, and always refreshing.`,
        `Sophisticated non-alcoholic choices made to complement any dish.`,
      ],
      "Baked Goods": [
        `Warm, fragrant creations baked fresh daily with premium ingredients.`,
        `Pastries, breads, and treats prepared in-house using classic and modern methods.`,
        `From flaky croissants to rich breads—our oven's finest, ready to enjoy.`,
        `Artisanal baked items showcasing skill, tradition, and a touch of creativity.`,
        `Perfectly baked goods that pair beautifully with our beverages or stand alone.`,
        `A selection of sweet and savory baked delights, crafted with love and care.`,
        `From flaky pastries to hearty breads, our baked goods are a must-try.`,
        `Handcrafted with the finest ingredients, our baked goods are a treat for the senses.`,
        `Freshly baked delights that bring warmth and comfort to your table.`,
        `Indulge in our selection of baked treats, each one a labor of love.`,
        `From buttery croissants to hearty loaves, our baked goods are a celebration of flavor.`,
        `Perfectly baked pastries and breads that bring warmth to your table.`,
        `A selection of artisanal breads and pastries, baked fresh daily.`,
        `Comforting, handmade goods perfect for breakfast, dessert, or anytime in between.`,
        `Each bite tells a story—layered, textured, and baked to perfection.`,
        `A rotating selection of baked indulgences from sweet to savory.`,
      ],
      "Frozen Desserts": [
        `Chilled, house-crafted desserts offering a perfect ending to your meal.`,
        `Refreshing treats from velvety gelatos to sharp, citrusy sorbets.`,
        `Smooth, rich frozen creations featuring local fruits and seasonal flavors.`,
        `Classic and contemporary frozen delights that cool and satisfy.`,
        `Handmade with care, our frozen desserts are a celebration of texture and taste.`,
        `From creamy gelato to fruity sorbet, our frozen desserts are a must-try.`,
        `A delightful way to end your meal—cool, creamy, and bursting with flavor.`,
        `Crafted with the finest ingredients, our frozen desserts are a treat for the senses.`,
        `Indulge in our selection of frozen delights, perfect for any time of year.`,
        `A symphony of flavors and textures, our frozen desserts are a refreshing finale.`,
        `From rich gelatos to refreshing sorbets, our frozen desserts are a must-try.`,
        `Classic frozen favorites reimagined with gourmet flair and fresh ingredients.`,
        `The ultimate way to cool off and indulge—delicate, creamy, and unforgettable.`,
        `Made in-house with premium dairy and plant-based alternatives.`,
        `Icy, sweet finishes with flavor that lingers beyond the chill.`,
      ],
      "Signature Cocktails": [
        `Custom-designed drinks created exclusively by our mixologists to complement our menu.`,
        `Refined blends of premium spirits, house syrups, and fresh produce.`,
        `Unique, house-crafted cocktails that offer a memorable sip every time.`,
        `Sophisticated beverages with depth, character, and a dash of creativity.`,
        `Each cocktail is a work of art—balanced, bold, and beautifully presented.`,
        `Crafted with precision, our cocktails are designed to elevate your dining experience.`,
        `A selection of signature drinks that reflect our culinary philosophy and creativity.`,
        `From classic twists to innovative new blends, our cocktails are a celebration of flavor.`,
        `Each sip tells a story—of ingredients, technique, and passion for mixology.`,
        `Crafted with care, our cocktails are a perfect pairing for any dish on our menu.`,
        `A blend of tradition and innovation, our cocktails are designed to surprise and delight.`,
        `Elevate your evening with our signature cocktails, each a unique expression of flavor.`,
        `From timeless classics to modern masterpieces, our cocktails are crafted to impress.`,
        `A cocktail experience that transcends the ordinary—crafted for the discerning palate.`,
        `Each cocktail tells a story—bold, balanced, and unmistakably ours.`,
        `From reinvented classics to bold new creations, every glass is an experience.`,
        `Crafted for the curious, the connoisseur, and everyone in between.`,
      ],
      "Wine Selection": [
        `An expertly curated wine list featuring standout bottles from around the globe.`,
        `Wines selected to enhance each dish and elevate your dining experience.`,
        `A diverse collection of varietals and vintages, chosen for quality and character.`,
        `From crisp whites to structured reds, our wine list offers something for every palate.`,
        `Handpicked selections that reflect our commitment to quality and terroir.`,
        `A journey through the world of wine, with options to suit every taste and occasion.`,
        `Our sommelier's recommendations, designed to pair perfectly with our menu.`,
        `Explore our wine list, where each bottle is a testament to craftsmanship and tradition.`,
        `A spectrum of vintages and varietals—from structured reds to bright, crisp whites.`,
        `Our sommelier's picks, chosen for balance, terroir expression, and quality.`,
        `Perfect pairings for any palate, with guidance available from our trained staff.`,
        `New World energy meets Old World elegance in our diverse selection.`,
        `A wine list as thoughtful and layered as our cuisine.`,
      ],
      "Spirits and Liqueurs": [
        `A curated collection of fine spirits and artisan liqueurs from around the world.`,
        `Whether neat, on the rocks, or mixed—our premium selection is built to impress.`,
        `A refined range of aged whiskeys, fine brandies, and international specialties.`,
        `From classic cocktails to sipping spirits, our bar is stocked with quality and character.`,
        `Explore our selection of small-batch and artisanal spirits, each with a unique story.`,
        `Crafted for those who appreciate the art of distillation—each pour is a journey.`,
        `From timeless classics to innovative new blends, our spirits menu is a celebration of flavor.`,
        `Ideal for slow sipping or celebratory toasts—each bottle has a story.`,
        `From classic spirits to rare finds, our collection is a journey through flavor.`,
        `Explore the depth of our spirits menu, where each pour is a discovery.`,
        `Crafted for those who appreciate the finer things in life—our spirits selection.`,
        `A thoughtful balance of classic favorites and rare, small-batch discoveries.`,
        `For aficionados and explorers alike—top-shelf selections with depth and pedigree.`,
        `Start or finish your night with a pour that lingers in memory.`,
      ],
    };

    // Default template for any category not specifically defined
    const defaultTemplates = [
      `Our selection of ${categoryName.toLowerCase()} prepared with care and attention`,
      `Delightful ${categoryName.toLowerCase()} crafted in our kitchen`,
      `${cuisine} inspired ${categoryName.toLowerCase()} for your enjoyment`,
      `House specialties from our ${categoryName.toLowerCase()} selection`,
      `Traditional and contemporary ${categoryName.toLowerCase()} options`,
      `A variety of ${categoryName.toLowerCase()} to satisfy every palate`,
      `Explore our ${categoryName.toLowerCase()} offerings featuring seasonal ingredients`,
      `Handcrafted ${categoryName.toLowerCase()} that reflect our culinary philosophy`,
      `Discover our unique take on ${categoryName.toLowerCase()} dishes`,
      `An array of ${categoryName.toLowerCase()} that highlight our kitchen's creativity`,
      `Savor the flavors of our ${categoryName.toLowerCase()} menu, designed to please`,
      `Indulge in our ${categoryName.toLowerCase()} selections, perfect for sharing`,
      `Experience the essence of ${cuisine} cuisine with our ${categoryName.toLowerCase()}`,
      `A celebration of ${categoryName.toLowerCase()} that showcases our culinary expertise`,
      `Taste the passion in our ${categoryName.toLowerCase()} offerings, crafted with love`,
      `Our ${categoryName.toLowerCase()} menu features dishes that are both comforting and exciting`,
      `Enjoy our ${categoryName.toLowerCase()} selections, each with its own unique flair`,
      `A delightful assortment of ${categoryName.toLowerCase()} that will leave you wanting more`,
      `Our ${categoryName.toLowerCase()} menu is a testament to our commitment to quality and flavor`,
      `Explore the diverse flavors of our ${categoryName.toLowerCase()} menu, inspired by tradition and innovation`,
      `An exquisite collection of ${categoryName.toLowerCase()} that reflects our culinary journey`,
      `Our ${categoryName.toLowerCase()} offerings are designed to elevate your dining experience`,
      `A thoughtfully curated selection of ${categoryName.toLowerCase()} that celebrates our culinary heritage`,
      `Discover the artistry in our ${categoryName.toLowerCase()} dishes, each a masterpiece of flavor`,
      `Savor the richness of our ${categoryName.toLowerCase()} menu, where every dish tells a story`,
      `Indulge in our ${categoryName.toLowerCase()} creations, crafted to delight your senses`,
      `A harmonious blend of flavors in our ${categoryName.toLowerCase()} offerings, perfect for any occasion`,
      `Our ${categoryName.toLowerCase()} menu is a journey through the best of ${cuisine} cuisine`,
      `Experience the culinary magic in our ${categoryName.toLowerCase()} dishes, where tradition meets innovation`,
      `A selection of ${categoryName.toLowerCase()} that showcases the best of our kitchen's creativity`,
      `Our ${categoryName.toLowerCase()} menu is a celebration of flavor, texture, and presentation`,
      `Taste the difference in our ${categoryName.toLowerCase()} offerings, made with the finest ingredients`,
      `An unforgettable selection of ${categoryName.toLowerCase()} that will leave a lasting impression`,
      `Our ${categoryName.toLowerCase()} dishes are crafted to bring joy and satisfaction to every bite`,
      `A delightful fusion of flavors in our ${categoryName.toLowerCase()} menu, designed to please every palate`,
      `Explore the culinary delights of our ${categoryName.toLowerCase()} offerings, each a unique experience`,
    ];

    // Get appropriate template array based on category name or use default
    const categoryTemplates = templates[categoryName] || defaultTemplates;

    // Select a random template
    return getRandomItems(categoryTemplates, 1)[0];
  }

  // Check if main course menu should be included
  if (
    (args["menu-type"] === "all" || args["menu-type"] === "main") &&
    !excludedMenuTypes.includes("main")
  ) {
    // Create the categories array with only non-excluded categories
    const mainMenuCategories = [];

    if (!excludedCategories.includes("Signature Dishes")) {
      mainMenuCategories.push({
        name: "Signature Dishes",
        description: getCategoryDescription(
          "Signature Dishes",
          restaurantCuisine,
          restaurant
        ),
        items: signatureDishes,
      });
    }

    if (!excludedCategories.includes("Chef's Specials")) {
      mainMenuCategories.push({
        name: "Chef's Specials",
        description: getCategoryDescription(
          "Chef's Specials",
          restaurantCuisine,
          restaurant
        ),
        items: chefsSpecials,
      });
    }

    if (!excludedCategories.includes("Appetizers")) {
      mainMenuCategories.push({
        name: "Appetizers",
        description: getCategoryDescription(
          "Appetizers",
          restaurantCuisine,
          restaurant
        ),
        items: appetizers,
      });
    }

    if (!excludedCategories.includes("Soups")) {
      mainMenuCategories.push({
        name: "Soups",
        description: getCategoryDescription(
          "Soups",
          restaurantCuisine,
          restaurant
        ),
        items: soups,
      });
    }

    if (!excludedCategories.includes("Salads")) {
      mainMenuCategories.push({
        name: "Salads",
        description: getCategoryDescription(
          "Salads",
          restaurantCuisine,
          restaurant
        ),
        items: salads,
      });
    }

    if (!excludedCategories.includes("Main Courses")) {
      mainMenuCategories.push({
        name: "Main Courses",
        description: getCategoryDescription(
          "Main Courses",
          restaurantCuisine,
          restaurant
        ),
        items: mainCourses,
      });
    }

    if (!excludedCategories.includes("Seafood Specialties")) {
      mainMenuCategories.push({
        name: "Seafood Specialties",
        description: getCategoryDescription(
          "Seafood Specialties",
          restaurantCuisine,
          restaurant
        ),
        items: seafoodSpecialties,
      });
    }

    if (!excludedCategories.includes("Side Dishes")) {
      mainMenuCategories.push({
        name: "Side Dishes",
        description: getCategoryDescription(
          "Side Dishes",
          restaurantCuisine,
          restaurant
        ),
        items: sideDishes,
      });
    }

    if (!excludedCategories.includes("Non-Alcoholic Beverages")) {
      mainMenuCategories.push({
        name: "Non-Alcoholic Beverages",
        description: getCategoryDescription(
          "Non-Alcoholic Beverages",
          restaurantCuisine,
          restaurant
        ),
        items: nonAlcoholicBeverages,
      });
    }

    // Only add the menu if there are categories
    if (mainMenuCategories.length > 0) {
      // Generate diverse main course menu descriptions based on restaurant style and cuisine
      const getMainCourseDescription = (restaurant, cuisine) => {
        // Arrays of descriptive adjectives for different restaurant styles
        const fineDiningAdjectives = [
          "exquisite",
          "sophisticated",
          "artfully prepared",
          "gourmet",
          "luxurious",
          "refined",
          "sumptuous",
          "elegant",
          "masterfully crafted",
          "culinary masterpiece",
          "delectable",
          "sublime",
          "artisanal",
          "innovative",
          "creative",
          "meticulously crafted",
          "refined",
          "elegant",
        ];

        const adultOnlyAdjectives = [
          "premium",
          "bold",
          "signature",
          "distinctive",
          "luxurious",
          "sophisticated",
          "indulgent",
          "rich",
          "decadent",
          "tempting",
          "irresistible",
          "sumptuous",
          "elegant",
          "refined",
          "exclusive",
          "special",
          "unique",
          "specialty",
          "artisan",
          "exceptional",
          "hearty",
          "classic",
        ];
        const familyFriendlyAdjectives = [
          "delightful",
          "wholesome",
          "comforting",
          "kid-approved",
          "nourishing",
          "heartwarming",
          "home-cooked",
          "traditional",
          "filling",
          "satisfying",
          "crowd-pleasing",
          "flavorful",
        ];

        const casualAdjectives = [
          "tasty",
          "hearty",
          "fresh",
          "delicious",
          "satisfying",
          "simple",
          "comforting",
          "homestyle",
          "flavorful",
          "authentic",
          "classic",
        ];

        // Description templates with varied formats
        const templates = [
          "Our carefully crafted selection of {adjective} {cuisine} dishes",
          "Experience our chef's {adjective} creations inspired by {cuisine} tradition",
          "A {adjective} assortment of specialties showcasing the best of {cuisine} cuisine",
          "From appetizers to main courses: {adjective} dishes prepared with passion",
          "Traditional and contemporary {cuisine} favorites with our {adjective} touch",
          "Our {adjective} menu celebrating the flavors of {cuisine} cooking",
          "Savor our {adjective} dishes made with locally sourced ingredients",
          "Chef-selected {adjective} offerings highlighting {cuisine} culinary heritage",
          "A {adjective} dining experience featuring the essence of {cuisine} gastronomy",
          "Discover our {adjective} interpretation of classic {cuisine} recipes",
          "Enjoy a variety of {adjective} {cuisine} plates made with seasonal inspiration",
          "Delight in our chef's most {adjective} takes on traditional {cuisine} flavors",
          "A thoughtfully curated lineup of {adjective} {cuisine} dishes to suit every palate",
          "Our kitchen presents an array of {adjective} offerings from across the {cuisine} spectrum",
          "Taste the depth of {cuisine} culture through our {adjective} preparations",
          "A journey through {cuisine} flavors, led by our chef's {adjective} creations",
          "Bold, {adjective}, and unmistakably {cuisine}—each dish tells a story",
          "Where {adjective} technique meets timeless {cuisine} tradition",
          "Elevated {cuisine} dishes showcasing our most {adjective} culinary ideas",
          "Flavors that feel familiar, presented in fresh, {adjective} ways",
          "Explore the richness of {cuisine} cuisine through our {adjective} perspective",
          "From street food classics to refined plates—our {adjective} take on {cuisine}",
          "Rooted in tradition, driven by {adjective} culinary vision",
          "Our {adjective} kitchen reimagines {cuisine} for today’s palate",
          "Immerse yourself in {adjective} {cuisine} that balances innovation with authenticity",
          "A flavorful fusion of {adjective} and authentic {cuisine} dishes",
          "Explore bold and {adjective} twists on beloved {cuisine} staples",
          "Crafted with care, our {adjective} {cuisine} plates elevate every meal",
          "A showcase of {adjective} culinary artistry rooted in {cuisine} heritage",
          "Satisfy your cravings with our vibrant, {adjective} take on {cuisine}",
          "An immersive dining experience defined by {adjective} {cuisine} cuisine",
          "Where {adjective} creativity meets timeless {cuisine} inspiration",
          "Tastefully prepared {cuisine} dishes with a {adjective} signature touch",
          "Celebrate tradition and taste with our {adjective} {cuisine} offerings",
          "Your introduction to a world of {adjective}, flavor-rich {cuisine} meals",
          "Handcrafted with intention—our most {adjective} {cuisine} menu yet",
          "A thoughtfully balanced mix of {adjective} and authentic {cuisine} flavors",
          "From bold spices to subtle notes—our {adjective} {cuisine} journey awaits",
          "A celebration of flavor-forward, {adjective} {cuisine} recipes",
          "Every plate tells a story of {adjective} {cuisine} craftsmanship",
          "Our {adjective} kitchen honors the soul of {cuisine} cooking",
          "Timeless tastes, elevated by our {adjective} approach to {cuisine}",
          "A menu designed to highlight the {adjective} essence of {cuisine}",
          "Inspired by tradition, driven by {adjective} execution",
          "Modern dining rooted in {adjective} {cuisine} techniques",
        ];

        // Select appropriate adjective based on restaurant style
        let adjectives;
        if (
          args["restaurant-style"] === "fine-dining" ||
          restaurant.isFineDining
        ) {
          adjectives = fineDiningAdjectives;
        } else if (
          args["restaurant-style"] === "adult-only" ||
          restaurant.isAdultOnly
        ) {
          adjectives = adultOnlyAdjectives;
        } else if (args["restaurant-style"] === "family-friendly") {
          adjectives = familyFriendlyAdjectives;
        } else {
          adjectives = casualAdjectives;
        }

        const adjective = getRandomItems(adjectives, 1)[0];
        let template = getRandomItems(templates, 1)[0];

        // Replace the placeholders with actual values
        return template
          .replace("{adjective}", adjective)
          .replace(/{cuisine}/g, cuisine || "international"); // Using /g to replace all instances
      };

      menus.push({
        title: "Main Course Menu",
        description: getMainCourseDescription(restaurant, restaurantCuisine),
        category: mainMenuCategories,
      });
    }
  }

  // Check if dessert menu should be included
  if (
    (args["menu-type"] === "all" || args["menu-type"] === "dessert") &&
    !excludedMenuTypes.includes("dessert")
  ) {
    // Similar structure as main menu, but for desserts
    const dessertCategories = [];

    if (!excludedCategories.includes("Baked Goods")) {
      dessertCategories.push({
        name: "Baked Goods",
        description: getCategoryDescription(
          "Baked Goods",
          restaurantCuisine,
          restaurant
        ),
        items: bakedGoods,
      });
    }

    if (!excludedCategories.includes("Frozen Desserts")) {
      dessertCategories.push({
        name: "Frozen Desserts",
        description: getCategoryDescription(
          "Frozen Desserts",
          restaurantCuisine,
          restaurant
        ),
        items: frozenDesserts,
      });
    }

    if (dessertCategories.length > 0) {
      // Generate diverse dessert menu descriptions
      const getDessertMenuDescription = (restaurant, cuisine) => {
        // Arrays of descriptive adjectives for different restaurant styles
        const fineDiningAdjectives = [
          "exquisite",
          "decadent",
          "artisanal",
          "sublime",
          "gourmet",
          "sophisticated",
          "divine",
          "refined",
          "luxurious",
          "masterful",
          "sumptuous",
          "delicate",
          "irresistible",
          "indulgent",
          "elegant",
          "luxuriant",
          "handcrafted",
          "ethereal",
        ];

        const adultOnlyAdjectives = [
          "indulgent",
          "luxurious",
          "tempting",
          "decadent",
          "sophisticated",
          "decadent",
          "opulent",
          "rich",
          "tantalizing",
          "heavenly",
          "sensual",
          "intense",
          "bold",
          "lush",
          "sinful",
          "velvety",
        ];

        const familyFriendlyAdjectives = [
          "delightful",
          "sweet",
          "fun",
          "playful",
          "scrumptious",
          "cheerful",
          "yummy",
          "tasty",
          "wholesome",
          "delicious",
          "festive",
          "whimsical",
          "colorful",
          "joyful",
          "treat-filled",
          "happy",
        ];

        const casualAdjectives = [
          "delicious",
          "homemade",
          "satisfying",
          "comforting",
          "tasty",
          "freshly prepared",
          "classic",
          "mouthwatering",
          "gooey",
          "warm",
          "baked to perfection",
          "crowd-pleasing",
        ];

        // Description templates with varied formats
        const templates = [
          "Indulge in our {adjective} sweet creations",
          "Complete your meal with our {adjective} dessert selection",
          "Satisfy your sweet tooth with our {adjective} treats",
          "Our pastry chef's {adjective} creations to end your meal on a sweet note",
          "From classics to signatures: {adjective} desserts for every taste",
          "{cuisine}-inspired {adjective} confections to delight your senses",
          "A {adjective} selection of desserts that celebrate the art of pastry",
          "Crafted with passion, our {adjective} desserts are a must-try",
          "A {adjective} selection of desserts to complement your dining experience",
          "A {adjective} finale to your dining experience",
          "Our {adjective} dessert offerings crafted with the finest ingredients",
          "Handcrafted {adjective} desserts that celebrate {cuisine} traditions",
          "Discover our collection of {adjective} sweet masterpieces",
          "Delight in our {adjective} desserts prepared fresh daily",
          "Our dessert menu features {adjective} selections to satisfy every craving",
          "Experience the art of {adjective} desserts with a {cuisine} twist",
          "Every dessert tells a {adjective} story of flavor and craftsmanship",
          "Sweets reimagined – our {adjective} creations are the perfect ending",
          "A {adjective} selection of desserts that will leave you wanting more",
          "From rich chocolates to fruity delights – our {adjective} desserts await",
          "A {adjective} journey through the world of desserts, inspired by {cuisine}",
          "Our {adjective} desserts are a celebration of flavor and creativity",
          "Crafted with love, our {adjective} desserts are the perfect treat",
          "A {adjective} selection of desserts that will satisfy your cravings",
          "From oven to plate – {adjective} desserts made with care",
          "Elevate your evening with our {adjective} dessert course",
          "Finish on a high note with our {adjective} and memorable sweets",
          "A curated selection of {adjective} desserts, inspired by {cuisine} heritage",
          "Decadent or delicate – our {adjective} desserts cater to every preference",
        ];

        // Select appropriate adjective based on restaurant style
        let adjectives;
        if (
          args["restaurant-style"] === "fine-dining" ||
          restaurant.isFineDining
        ) {
          adjectives = fineDiningAdjectives;
        } else if (
          args["restaurant-style"] === "adult-only" ||
          restaurant.isAdultOnly
        ) {
          adjectives = adultOnlyAdjectives;
        } else if (args["restaurant-style"] === "family-friendly") {
          adjectives = familyFriendlyAdjectives;
        } else {
          adjectives = casualAdjectives;
        }

        const adjective = getRandomItems(adjectives, 1)[0];
        let template = getRandomItems(templates, 1)[0];

        // Replace the placeholders with actual values
        return template
          .replace("{adjective}", adjective)
          .replace(/{cuisine}/g, cuisine || "international");
      };

      menus.push({
        title: "Dessert Menu",
        description: getDessertMenuDescription(restaurant, restaurantCuisine),
        category: dessertCategories,
      });
    }
  }

  // Check if drinks menu should be included
  if (
    (args["menu-type"] === "all" || args["menu-type"] === "drinks") &&
    !excludedMenuTypes.includes("drinks") &&
    !restaurant.isHalalFriendly
  ) {
    // Similar structure for drinks menu
    const drinkCategories = [];

    if (!excludedCategories.includes("Signature Cocktails")) {
      drinkCategories.push({
        name: "Signature Cocktails",
        description: getCategoryDescription(
          "Signature Cocktails",
          restaurantCuisine,
          restaurant
        ),
        items: cocktails,
      });
    }

    if (!excludedCategories.includes("Wine Selection")) {
      drinkCategories.push({
        name: "Wine Selection",
        description: getCategoryDescription(
          "Wine Selection",
          restaurantCuisine,
          restaurant
        ),
        items: wines,
      });
    }

    if (!excludedCategories.includes("Spirits and Liqueurs")) {
      drinkCategories.push({
        name: "Spirits and Liqueurs",
        description: getCategoryDescription(
          "Spirits and Liqueurs",
          restaurantCuisine,
          restaurant
        ),
        items: spirits,
      });
    }

    if (drinkCategories.length > 0) {
      // Generate diverse drink menu descriptions based on restaurant style and other factors
      const getDrinkMenuDescription = (restaurant, cuisine) => {
        // Arrays of descriptive adjectives for different restaurant styles
        const fineDiningAdjectives = [
          "exquisite",
          "sophisticated",
          "curated",
          "refined",
          "handcrafted",
          "artisanal",
          "premier",
          "vintage",
          "elegant",
          "prestigious",
          "barrel-aged",
          "complex",
          "nuanced",
          "small-batch",
          "cellar-worthy",
        ];

        const adultOnlyAdjectives = [
          "premium",
          "indulgent",
          "exclusive",
          "signature",
          "exceptional",
          "bold",
          "luxurious",
          "potent",
          "smooth",
          "elevated",
          "intense",
          "deep",
          "rich",
          "top-shelf",
          "crafted-to-order",
        ];

        const casualAdjectives = [
          "fine",
          "quality",
          "select",
          "carefully chosen",
          "thoughtfully selected",
          "delightful",
          "enticing",
          "balanced",
          "crisp",
          "refreshing",
          "smooth-drinking",
          "easygoing",
          "crowd-pleasing",
          "flavorful",
          "inviting",
        ];

        // Description templates with varied formats
        const templates = [
          "A {adjective} selection of alcoholic beverages to complement your meal",
          "Our {adjective} collection of spirits and cocktails to enhance your dining experience",
          "Discover our {adjective} drinks, perfectly paired with our {cuisine} cuisine",
          "Elevate your dining experience with our {adjective} beverage options",
          "A {adjective} assortment of libations to accompany your culinary journey",
          "{cuisine}-inspired drinks and classic favorites in our {adjective} selection",
          "From wines to spirits: {adjective} choices for every palate",
          "Our bartenders' {adjective} creations to complete your meal",
          "Indulge in our {adjective} drinks menu crafted to accentuate flavors",
          "A {adjective} array of beverages specially curated for our guests",
          "Sip on our {adjective} cocktails, designed to enhance your dining experience",
          "A {adjective} selection of wines, beers, and spirits to suit every taste",
          "A {adjective} array of beverages specially selected by our sommeliers",
          "Our {adjective} wine list features carefully chosen bottles from renowned vineyards",
          "Enjoy {adjective} cocktails designed to pair effortlessly with our seasonal menu",
          "A {adjective} drinks program blending innovation with tradition",
          "Our bar showcases {adjective} spirits from around the globe",
          "Treat yourself to a {adjective} nightcap from our curated selection",
          "Each drink is a {adjective} complement to the flavors of our cuisine",
          "A {adjective} cocktail lineup featuring house infusions and classic techniques",
          "Unwind with our {adjective} beverages crafted for connoisseurs and casual sippers alike",
          "A {adjective} blend of heritage and modern mixology in every glass",
          "Toast to the moment with our {adjective} selection of wines, beers, and signature drinks",
        ];

        // Select appropriate adjective based on restaurant style
        let adjectives;
        if (
          args["restaurant-style"] === "fine-dining" ||
          restaurant.isFineDining
        ) {
          adjectives = fineDiningAdjectives;
        } else if (
          args["restaurant-style"] === "adult-only" ||
          restaurant.isAdultOnly
        ) {
          adjectives = adultOnlyAdjectives;
        } else {
          adjectives = casualAdjectives;
        }

        const adjective = getRandomItems(adjectives, 1)[0];
        let template = getRandomItems(templates, 1)[0];

        // Replace the placeholders with actual values
        return template
          .replace("{adjective}", adjective)
          .replace("{cuisine}", cuisine || "international");
      };

      menus.push({
        title: "Drinks Menu",
        description: getDrinkMenuDescription(restaurant, restaurantCuisine),
        category: drinkCategories,
      });
    }
  }

  // Add special intro text based on restaurant style and dietary focus
  let introText = `Menu data for ${restaurantName} in ${cityName}`;

  if (args["restaurant-style"] === "fine-dining") {
    introText = `Fine dining experience at ${restaurantName} in ${cityName}`;
  } else if (args["restaurant-style"] === "adult-only") {
    introText = `Adult-only dining experience at ${restaurantName} in ${cityName}`;
  }

  if (args["dietary-focus"] !== "mixed") {
    const dietaryType = args["dietary-focus"].replace("-only", "");
    introText += `\n * ${
      dietaryType.charAt(0).toUpperCase() + dietaryType.slice(1)
    } focused menu`;
  }

  // Return a string template with the TypeScript code
  return `import { RestaurantMenu } from "@/lib/types/types";

/**
 * ${introText}
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
    console.error(
      `Failed to generate valid filename for "${restaurant.name}".`
    );
    return false;
  }

  // Create menu file path with menu type indicator if not generating all
  let menuFileName = `${kebabName}Menu.ts`;
  if (args["menu-type"] !== "all") {
    menuFileName = `${kebabName}-${args["menu-type"]}Menu.ts`;
  }

  const menuFilePath = path.join(cityPath, menuFileName);

  // Handle append mode if requested
  if (APPEND_MODE && fs.existsSync(menuFilePath)) {
    try {
      // Read the existing menu file
      const fileContent = fs.readFileSync(menuFilePath, "utf8");

      // Check if it's a valid TypeScript file with the expected structure
      if (
        !fileContent.includes("RestaurantMenu") ||
        !fileContent.includes("export const")
      ) {
        console.error(
          `File exists but doesn't appear to be a valid menu file: ${menuFilePath}`
        );
        return false;
      }

      // Generate new items for the specified category
      const newItems = generateMenuItemsForType(
        args["append-category"],
        restaurant.cuisine,
        args["append-count"]
      );

      // Create a temporary function to safely evaluate the file content
      // This is for parsing the existing menu structure
      let menuData;
      try {
        // Extract just the menu array part using regex
        const menuMatch = fileContent.match(
          // Ensure fileContent is correctly referenced
          /export const[\s\S]*?Menu: RestaurantMenu\[\] = (\[[\s\S]*\]);/
        );
        if (!menuMatch || !menuMatch[1]) {
          throw new Error("Could not extract menu data");
        }

        // Parse the menu array, using Function constructor as a safer alternative to eval
        menuData = new Function(`return ${menuMatch[1]}`)();

        // Find the right menu object (main, dessert, or drinks)
        let targetMenu;
        if (args["menu-type"] === "all") {
          // Look in all menus
          for (const menu of menuData) {
            const categoryIndex = menu.category.findIndex(
              (cat) =>
                cat.name.toLowerCase() === args["append-category"].toLowerCase()
            );

            if (categoryIndex !== -1) {
              targetMenu = menu;
              break;
            }
          }
        } else {
          // Look in the specific menu type
          targetMenu = menuData.find((menu) => {
            const menuTitle = menu.title.toLowerCase();
            if (
              args["menu-type"] === "main" &&
              menuTitle.includes("main course")
            ) {
              return true;
            } else if (
              args["menu-type"] === "dessert" &&
              menuTitle.includes("dessert")
            ) {
              return true;
            } else if (
              args["menu-type"] === "drinks" &&
              menuTitle.includes("drink")
            ) {
              return true;
            }
            return false;
          });
        }

        if (!targetMenu) {
          console.error(
            `Could not find appropriate menu to append to in ${menuFilePath}`
          );
          return false;
        }

        // Find the specific category
        const categoryIndex = targetMenu.category.findIndex(
          (cat) =>
            cat.name.toLowerCase() === args["append-category"].toLowerCase()
        );

        if (categoryIndex === -1) {
          console.error(
            `Category "${args["append-category"]}" not found in menu`
          );
          return false;
        }

        // Add new items to the category
        targetMenu.category[categoryIndex].items = [
          ...targetMenu.category[categoryIndex].items,
          ...newItems,
        ];

        // Regenerate the file with the updated menu
        const cityVar = toCamelCase(cityDir);
        const restaurantVar = toCamelCase(restaurant.name);

        const newFileContent = `import { RestaurantMenu } from "@/lib/types/types";

        /**
         * Menu data for ${restaurant.name} in ${cityDir}
         */
        export const ${cityVar}${restaurantVar}Menu: RestaurantMenu[] = ${JSON.stringify(
          menuData,
          null,
          2
        )};
        `;

        fs.writeFileSync(menuFilePath, newFileContent);
        console.log(
          `Appended ${args["append-count"]} items to "${args["append-category"]}" in ${menuFilePath}`
        );
        return true;
      } catch (parseError) {
        console.error(
          `Error parsing existing menu in ${menuFilePath}:`,
          parseError
        );
        return false;
      }
    } catch (err) {
      console.error(
        `Error appending to menu file for ${restaurant.name}:`,
        err
      );
      return false;
    }
  } else {
    // Normal file creation (not append mode)
    try {
      fs.writeFileSync(
        menuFilePath,
        generateCombinedMenuContent(
          cityDir,
          restaurant.name,
          restaurant.cuisine,
          restaurant // Pass the full restaurant object
        )
      );
      console.log(`Created menu file: ${menuFilePath}`);
      return true;
    } catch (err) {
      console.error(`Error creating menu file for ${restaurant.name}:`, err);
      return false;
    }
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
