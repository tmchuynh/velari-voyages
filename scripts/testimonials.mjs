import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import city files from constants

// Create a local implementation of getAllRestaurantMenus to avoid dependency issues
async function getAllRestaurantMenus() {
  // This is a simplified version that returns mock data
  // For the purpose of generating testimonials, we don't need the actual restaurant menus
  return []; // Empty array is sufficient as the function doesn't appear to use the return value
}

// Import restaurant menus from constants
async function importMenus() {
  const menuPath = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "cruises",
    "restaurants"
  );
  const restaurants = {
    name: "",
    description: "",
    cuisine: "Afghan",
    priceRange: "$$",
    rating: 0,
  };

  const allRestaurantMenus = [];

  // Simplified implementation that doesn't rely on external imports
  // We'll use the mock data defined below instead
  return allRestaurantMenus;
}

// Generate a random first name, middle initial, and last name
function generateRandomName() {
  const firstNames = [
    "James",
    "Mary",
    "John",
    "Patricia",
    "Robert",
    "Jennifer",
    "Michael",
    "Linda",
    "William",
    "Elizabeth",
    "David",
    "Susan",
    "Richard",
    "Jessica",
    "Joseph",
    "Sarah",
    "Thomas",
    "Karen",
    "Charles",
    "Nancy",
    "Emma",
    "Olivia",
    "Noah",
    "Liam",
    "Sophia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Ethan",
    "Alexander",
    "Sofia",
    "Isabella",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
    "Perez",
    "Thompson",
    "White",
    "Harris",
    "Sanchez",
    "Clark",
    "Ramirez",
    "Lewis",
    "Robinson",
    "Walker",
  ];
  const middleInitials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const middleInitial =
    middleInitials[Math.floor(Math.random() * middleInitials.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${middleInitial}. ${lastName}`;
}

// Generate a random meal title
function generateRandomTitle() {
  const titles = ["Dinner", "Lunch", "Breakfast", "Snack"];
  return titles[Math.floor(Math.random() * titles.length)];
}

// Generate a random testimonial quote about a menu item
function generateTestimonial(itemName, restaurantName) {
  const templates = [
    `The ${itemName} at ${restaurantName} was absolutely divine! I can't stop thinking about it.`,
    `I never expected the ${itemName} to be so incredible. It's a must-try!`,
    `My favorite dish has to be the ${itemName}. It's worth the trip just for that.`,
    `If you visit ${restaurantName}, you have to order the ${itemName}. It's life-changing!`,
    `The ${itemName} exceeded all my expectations. Truly a culinary masterpiece.`,
    `I dream about the ${itemName} at ${restaurantName}. It's that good!`,
    `Don't leave without trying the ${itemName}. Trust me on this one.`,
    `The ${itemName} was so delicious that I ordered seconds. No regrets!`,
    `I was blown away by the ${itemName}. The flavors were perfectly balanced.`,
    `The ${itemName} is their signature dish for a reason. Absolutely spectacular!`,
    `I still can't get over how amazing the ${itemName} was. A true highlight of our cruise.`,
    `The chef's preparation of the ${itemName} was innovative and delightful.`,
    `I would sail with Velari Voyages again just to have the ${itemName} at ${restaurantName}.`,
    `My taste buds were dancing after trying the ${itemName}. Pure bliss!`,
    `The ${itemName} was cooked to perfection. I savored every bite.`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

// Extract restaurant name from the constant name
function formatRestaurantName(constName) {
  // Convert camelCase to proper name format
  // Example: 'aucklandtheGrove' → 'The Grove'
  // First, remove the location prefix (like 'auckland', 'barcelona', etc.)
  const cityNames = ["auckland", "barcelona", "buenosAires"];
  let name = constName;
  for (const city of cityNames) {
    if (name.startsWith(city)) {
      name = name.substring(city.length);
      break;
    }
  }
  // Handle special restaurant name formats
  if (name === "theGrove") return "The Grove";
  if (name === "laCabrera") return "La Cabrera";
  if (name === "elPreferidoDePalermo") return "El Preferido De Palermo";
  if (name === "donJulio") return "Don Julio";
  if (name === "7Portes") return "7 Portes";
  if (name === "laBoqueriaMarketBar") return "La Boqueria Market Bar";
  if (name === "depotEateryOysterBar") return "Depot Eatery & Oyster Bar";
  // For other cases, insert spaces before capital letters and capitalize first letter
  name = name.replace(/([A-Z])/g, " $1").trim();
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// Extract all menu items from a restaurant menu
function extractMenuItems(menu) {
  const items = [];
  menu.forEach((section) => {
    section.category.forEach((category) => {
      category.items.forEach((item) => {
        items.push({
          name: item.name,
          category: category.name,
        });
      });
    });
  });
  return items;
}

// Helper function to generate random user image URL
function generateRandomUserImage() {
  const gender = Math.random() > 0.5 ? "women" : "men";
  const id = Math.floor(Math.random() * 100);
  return `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;
}

/**
 * Generate testimonials for each restaurant.
 * @param {number} count - The number of testimonials to generate per restaurant. Defaults to 5.
 */
async function generateTestimonials(count = 5) {
  try {
    const restaurants = await getAllRestaurantMenus();

    const mockData = {
      aucklandCassia: [
        { name: "Tandoori Prawns", category: "Appetizers" },
        { name: "Butter Chicken", category: "Main Courses" },
        { name: "Kulfi", category: "Ice Cream" },
      ],
      aucklandTheGrove: [
        { name: "West Coast Crayfish", category: "Appetizers" },
        { name: "Canterbury Lamb", category: "Main Courses" },
        { name: "Valrhona Chocolate Soufflé", category: "Cake and Pastries" },
      ],
      aucklandPasture: [
        { name: "House-Cured Charcuterie", category: "Appetizers" },
        { name: "Dry-Aged Ribeye", category: "Main Courses" },
        { name: "Cultured Cream Ice Cream", category: "Ice Cream" },
      ],
      aucklandDepotEateryOysterBar: [
        { name: "Freshly Shucked Oysters", category: "Appetizers" },
        { name: "Pan-Fried Market Fish", category: "Main Courses" },
        { name: "Chocolate Fondant", category: "Cake and Pastries" },
      ],
      barcelonaTicketsMenu: [
        { name: "Spherical Olives", category: "Appetizers" },
        { name: "Deconstructed Spanish Tortilla", category: "Main Courses" },
        { name: "The Golden Egg", category: "Cake and Pastries" },
      ],
      barcelonaLaBoqueriaMarketBar: [
        { name: "Fresh Oysters", category: "Appetizers" },
        { name: "Seasonal Vegetable Paella", category: "Main Courses" },
        { name: "Crema Catalana", category: "Custards and Puddings" },
      ],
      barcelonaDisfrutar: [
        { name: "Multi-Spherical Pesto", category: "Appetizers" },
        { name: "Pigeon with Kombucha", category: "Main Courses" },
        { name: "Chocolate Textures 2023", category: "Custards and Puddings" },
      ],
      barcelona7Portes: [
        { name: "Jamón Ibérico de Bellota", category: "Appetizers" },
        { name: "Paella Parellada", category: "Main Courses" },
        { name: "Crema Catalana", category: "Custards and Puddings" },
      ],
      buenosAiresTegui: [
        { name: "Provoleta Moderna", category: "Appetizers" },
        { name: "Bife de Chorizo", category: "Main Courses" },
        { name: "Helado de Dulce de Leche", category: "Ice Cream" },
      ],
      buenosAiresLaCabrera: [
        { name: "Provoleta Clásica", category: "Appetizers" },
        { name: "Ojo de Bife", category: "Main Courses" },
        { name: "Flan Casero", category: "Custards and Puddings" },
      ],
      buenosAiresElPreferidoDePalermo: [
        { name: "Tabla de Fiambres", category: "Appetizers" },
        { name: "Milanesa Napolitana", category: "Main Courses" },
        { name: "Pasta Frola", category: "Cake and Pastries" },
      ],
    };

    const testimonials = {};

    // Loop through each restaurant in mockData
    for (const [restaurantKey, menuItems] of Object.entries(mockData)) {
      testimonials[restaurantKey] = [];

      // Get restaurant name for testimonial
      const restaurantName = formatRestaurantName(restaurantKey);

      // Generate testimonials for this restaurant
      for (let i = 0; i < count; i++) {
        // Pick a random menu item from this restaurant
        const randomItem =
          menuItems[Math.floor(Math.random() * menuItems.length)];

        testimonials[restaurantKey].push({
          author: generateRandomName(),
          title: generateRandomTitle(),
          quote: generateTestimonial(randomItem.name, restaurantName),
          image: generateRandomUserImage(),
        });
      }
    }

    return testimonials;
  } catch (error) {
    console.error("Error generating testimonials:", error);
    return {}; // Return an empty object in case of error
  }
}

// Extract city name from restaurant key
function extractCityName(restaurantKey) {
  const cities = ["auckland", "barcelona", "buenosAires"];
  for (const city of cities) {
    if (restaurantKey.startsWith(city)) {
      return city === "buenosAires" ? "buenos-aires" : city;
    }
  }
  return "unknown";
}

// Convert string to kebab case
function toKebabCase(str) {
  // Handle special cases first
  if (str === "theGrove") return "the-grove";
  if (str === "laCabrera") return "la-cabrera";
  if (str === "elPreferidoDePalermo") return "el-preferido-de-palermo";
  if (str === "donJulio") return "don-julio";
  if (str === "7Portes") return "7-portes";
  if (str === "laBoqueriaMarketBar") return "la-boqueria-market-bar";
  if (str === "depotEateryOysterBar") return "depot-eatery-oyster-bar";
  // For other cases, convert camelCase to kebab-case
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

// Write testimonials to files
async function writeTestimonials() {
  const testimonials = await generateTestimonials(5); // Generate 5 testimonials per restaurant
  // Create base directory if it doesn't exist
  const baseDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "cruises",
    "testimonials"
  );
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  // Write each restaurant's testimonials to a separate file
  for (const [restaurant, testimonialList] of Object.entries(testimonials)) {
    // Extract city name and create city directory
    const cityName = extractCityName(restaurant);
    const cityDir = path.join(baseDir, cityName);
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }

    // Get restaurant name without city prefix and convert to kebab case
    const restaurantName = restaurant.replace(
      /^(auckland|barcelona|buenosAires)/,
      ""
    );
    const kebabRestaurant = toKebabCase(restaurantName);
    const filePath = path.join(cityDir, `${kebabRestaurant}-testimonials.js`);

    const fileContent = `// filepath: ${filePath}
export const ${restaurant}Testimonials = ${JSON.stringify(
      testimonialList,
      null,
      2
    )};
`;
    fs.writeFileSync(filePath, fileContent);
    console.log(
      `Generated testimonials for ${restaurant} in ${cityName}/${kebabRestaurant}-testimonials.js`
    );
  }
  console.log("All testimonial files have been generated successfully!");
}

// Run the script
writeTestimonials().catch((error) => {
  console.error("Error generating testimonials:");
  console.dir(error, { depth: null });
  console.log("Type of error:", typeof error);
  console.log("Keys in error:", Object.keys(error));
  process.exit(1);
});
