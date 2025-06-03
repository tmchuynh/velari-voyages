import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get project root path (one level up from scripts folder)
const projectRoot = join(__dirname, "..");

// Function to convert string to kebab case
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

// Update path to create folders in the restaurants directory
const outputDir = join(projectRoot, "src/lib/constants/cruises/restaurants");

// Make sure the base directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get the city list directly from the file content
const cityFilePath = join(projectRoot, "src/lib/constants/info/city.ts");
const cityFileContent = fs.readFileSync(cityFilePath, "utf-8");
const cityListMatch = cityFileContent.match(/\[\s*([\s\S]*?)\s*\]/);

// Extract the city names from the array
const cityNames =
  cityListMatch && cityListMatch[1]
    ? cityListMatch[1]
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.startsWith('"') || item.startsWith("'"))
        .map((item) => item.replace(/^["']|["']$/g, ""))
    : [];

// Create a folder and restaurant file for each city
cityNames.forEach((city) => {
  const folderName = city; // Already in kebab case in your file
  const folderPath = join(outputDir, folderName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Created folder: ${folderPath}`);

    // Create restaurant file
    const camelCaseCityName = city
      .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
      .replace(/^([A-Z])/, (g) => g.toLowerCase());

    const restaurantFilePath = join(folderPath, "restaurants.ts");
    const fileContent = `import { Restaurant } from "@/lib/types/types";

export const ${camelCaseCityName}Restaurants: Restaurant[] = [];
`;
    fs.writeFileSync(restaurantFilePath, fileContent);
    console.log(`Created file: ${restaurantFilePath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }
});

console.log("All city folders and restaurant files created successfully!");
