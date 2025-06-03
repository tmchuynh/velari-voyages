import fs from "fs";
import path from "path";
import { Testimonial } from "../src/lib/interfaces/services/testimonials";
import { ResturantMenu } from "../src/lib/types/types";
import { getAllMenuItemsFromResturant } from "../src/lib/utils/get.ts";

// Import restaurant menus from constants
async function importMenus() {
  const menuPath = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "cruises",
    "resturants"
  );
  const restaurants: Record<string, ResturantMenu[]> = {};

  // Example of how we'll dynamically import all restaurants
  const locations = ["auckland", "barcelona", "buenos-aires"];

  for (const location of locations) {
    const locationPath = path.join(menuPath, location);
    const files = fs
      .readdirSync(locationPath)
      .filter((file) => file.endsWith(".ts"));

    for (const file of files) {
      try {
        // Import the file dynamically
        const filePath = path.join(locationPath, file);
        const fileContent = fs.readFileSync(filePath, "utf8");

        // Extract the exported constant name using regex
        const exportMatch = fileContent.match(/export const (\w+)Menu\s*=/);
        if (exportMatch && exportMatch[1]) {
          const restaurantName = exportMatch[1];
          // This is a placeholder for the actual imported module
          // In a real implementation, we'd need to use dynamic import()
          restaurants[restaurantName] = []; // This would actually be the imported menu
        }
      } catch (error) {
        console.error(`Error importing ${file}:`, error);
      }
    }
  }

  return restaurants;
}

// Generate a random first name, middle initial, and last name
function generateRandomName(): string {
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
function generateRandomTitle(): string {
  const titles = ["Dinner", "Lunch", "Breakfast", "Snack"];
  return titles[Math.floor(Math.random() * titles.length)];
}

// Generate a random testimonial quote about a menu item
function generateTestimonial(itemName: string, restaurantName: string): string {
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
function formatRestaurantName(constName: string): string {
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
function extractMenuItems(
  menu: ResturantMenu[]
): { name: string; category: string }[] {
  const items: { name: string; category: string }[] = [];

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

// Generate testimonials for each restaurant
async function generateTestimonials(
  count: number = 5
): Promise<Record<string, Testimonial[]>> {
  const restaurants = await importMenus();
  const testimonials: Record<string, Testimonial[]> = {};

  // Create a list of restaurant objects to use with getAllMenuItemsFromResturant
  const restaurantList = Object.keys(restaurants).map((restaurantKey) => ({
    name: formatRestaurantName(restaurantKey),
    id: restaurantKey,
    description: "",
    rating: 0,
    image: "",
    cuisine: "American" as const, // Default cuisine, can be updated later
    priceRange: "$$" as const, // Assign a valid price range literal
    location: "",
    openingHours: {}, // Initialize as an empty object
    contactInfo: {}, // Ensure this matches the ContactInfo type in Resturant interface
    tags: [],
  }));

  // Process each restaurant
  for (const restaurant of restaurantList) {
    try {
      // Get actual menu items from the restaurant using the utility function
      const menuData = await getAllMenuItemsFromResturant(restaurant);
      const menuItems = extractMenuItems(menuData);

      if (menuItems.length === 0) {
        console.warn(
          `No menu items found for ${restaurant.name}, using fallback data`
        );
        // If no items found, we could either skip this restaurant or use fallback data
        continue;
      }

      testimonials[restaurant.id] = [];

      // Generate the specified number of testimonials
      for (let i = 0; i < count; i++) {
        const randomMenuItem =
          menuItems[Math.floor(Math.random() * menuItems.length)];
        const testimonial: Testimonial = {
          quote: generateTestimonial(randomMenuItem.name, restaurant.name),
          author: generateRandomName(),
          title: generateRandomTitle(),
          image: `https://randomuser.me/api/portraits/${
            Math.random() > 0.5 ? "women" : "men"
          }/${Math.floor(Math.random() * 100)}.jpg`,
        };

        testimonials[restaurant.id].push(testimonial);
      }
    } catch (error) {
      console.error(
        `Error generating testimonials for ${restaurant.name}:`,
        error
      );
    }
  }

  return testimonials;
}

// Function to extract restaurant names from a resturants.ts file
function extractRestaurantNames(filePath: fs.PathOrFileDescriptor) {
  try {
    const content = fs.readFileSync(filePath, "utf8");

    // Looking for objects with name property in the array
    const matches = content.match(/name:\s*["']([^"']+)["']/g) || [];

    return matches.map((match) => {
      // Extract just the name between quotes
      const nameMatch = match.match(/["']([^"']+)["']/);
      return nameMatch ? nameMatch[1] : "";
    });
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
}

// Extract city name from restaurant key
function extractCityName(restaurantKey: string): string {
  const cities = ["auckland", "barcelona", "buenosAires"];
  for (const city of cities) {
    if (restaurantKey.startsWith(city)) {
      return city === "buenosAires" ? "buenos-aires" : city;
    }
  }
  return "unknown";
}

// Convert string to kebab case
function toKebabCase(str: string): string {
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

    const filePath = path.join(cityDir, `${kebabRestaurant}-testimonials.ts`);

    const fileContent = `// filepath: ${filePath}
import { Testimonial } from "../src/lib/interfaces/services/testimonials";;

export const ${restaurant}Testimonials: Testimonial[] = ${JSON.stringify(
      testimonialList,
      null,
      2
    )};
`;

    fs.writeFileSync(filePath, fileContent);
    console.log(
      `Generated testimonials for ${restaurant} in ${cityName}/${kebabRestaurant}-testimonials.ts`
    );
  }

  console.log("All testimonial files have been generated successfully!");
}

// Run the script
writeTestimonials().catch((error) => {
  console.error("Error generating testimonials:", error);
  process.exit(1);
});
