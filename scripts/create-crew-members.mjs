/**
 * Crew Members Generator Script
 * =============================
 *
 * This script generates crew member data for cities in the Velari Voyages project.
 * It creates or modifies files with the naming convention: "{city-name}.ts"
 * Each file exports an array variable named "{cityName}TeamMembers" with crew member data.
 *
 * Features:
 * - Creates comprehensive crew rosters with realistic member profiles
 * - Generates crew members across 11 different ship departments
 * - Assigns appropriate roles, experience levels, and biographical information
 * - Creates region-appropriate names and languages based on city of origin
 * - Supports targeted generation by department and role
 * - Supports appending to existing files or rewriting them completely
 *
 * Usage Examples:
 * --------------
 * # Default: generates crew for all cities (skips existing files)
 * node scripts/create-crew-members.mjs
 *
 * # Generate crew for a specific city, overwriting existing file
 * node scripts/create-crew-members.mjs --city=miami --rewrite
 *
 * # Add crew to a specific department in a city
 * node scripts/create-crew-members.mjs --city=miami --department="Engineering Department"
 *
 * # Add specific number of crew to a specific role
 * node scripts/create-crew-members.mjs --city=miami --department="Engineering Department" --role="Mechanical Engineer" --count=2
 *
 * Command-line Options:
 * --------------------
 * --city=CITY_NAME         Target a specific city (e.g., "miami", "new-york-city")
 * --rewrite               Overwrite existing crew files
 * --department=DEPT_NAME   Target a specific department for adding crew
 * --role=ROLE_NAME         Target a specific role within a department
 * --count=NUMBER           Number of crew members to add for the specified role
 *
 * Output Files:
 * ------------
 * The script generates TypeScript files in:
 * src/lib/constants/crewMembers/{city-name}.ts
 *
 * Each file exports a typed array of crew member objects compatible with the
 * CrewMember interface defined in src/lib/interfaces/people/staff.ts
 */

import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { getCityFiles } from "./utils/file-utils.mjs";
import {
  crewMemberBioTemplates,
  defaultCrewMemberBioTemplate,
} from "./utils/template-util.mjs";
import { cityCountryMap, cityToRegionMap } from "./utils/geo-utils.mjs";
import { getRandomInt, generateUniqueId } from "./utils/data-generator.mjs";
import { getRandomName } from "./utils/name-utils.mjs";
import { getRandomLanguages } from "./utils/language-utils.mjs";

function formatKebebToTitleCase(str) {
  return str
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

// Parse command line arguments
function parseArgs() {
  const args = {};
  process.argv.slice(2).forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");
      if (value) {
        args[key] = value;
      } else {
        // Handle flags without values (like --rewrite)
        args[key] = true;
      }
    }
  });
  return args;
}

// ES Modules fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use imported getCityFiles instead of local function
const cityFiles = getCityFiles();

// Department structure with required counts and roles
const departmentStructure = {
  "Deck Department": {
    count: 8,
    roles: [
      "Captain",
      "First Officer",
      "Second Officer",
      "Third Officer",
      "Navigation Officer",
      "Safety Officer",
      "Deck Cadet",
      "Bosun",
    ],
  },
  "Engineering Department": {
    count: 10,
    roles: [
      "Chief Engineer",
      "First Engineer",
      "Second Engineer",
      "Electrical Engineer",
      "Mechanical Engineer",
      "HVAC Engineer",
      "Environmental Engineer",
      "Systems Engineer",
      "Technical Manager",
      "Maintenance Engineer",
    ],
  },
  "Security Department": {
    count: 7,
    roles: [
      "Security Director",
      "Security Officer",
      "Security Specialist",
      "Cybersecurity Officer",
      "Maritime Security Coordinator",
      "Access Control Officer",
      "Safety Compliance Officer",
    ],
  },
  "Youth & Family Programs": {
    count: 6,
    roles: [
      "Youth Program Director",
      "Family Activities Coordinator",
      "Children's Entertainment Specialist",
      "Teen Activities Coordinator",
      "Educational Program Manager",
      "Child Care Specialist",
    ],
  },
  "Activities & Recreation": {
    count: 4,
    roles: [
      "Activities Director",
      "Water Sports Instructor",
      "Fitness Instructor",
      "Excursion Coordinator",
    ],
  },
  "Photography & Videography": {
    count: 3,
    roles: ["Lead Photographer", "Videographer", "Digital Media Specialist"],
  },
  "Health & Safety": {
    count: 4,
    roles: [
      "Chief Medical Officer",
      "Ship's Doctor",
      "Nurse",
      "Safety Officer",
    ],
  },
  "Hospitality Department": {
    count: 12,
    roles: [
      "Hospitality Director",
      "Guest Relations Manager",
      "Chief Steward",
      "Senior Steward",
      "Butler",
      "Accommodation Manager",
      "Housekeeping Supervisor",
      "Guest Services Specialist",
      "Concierge",
      "Front Desk Manager",
      "VIP Coordinator",
      "Hospitality Trainer",
    ],
  },
  "Culinary Department": {
    count: 13,
    roles: [
      "Executive Chef",
      "Sous Chef",
      "Pastry Chef",
      "Chef de Partie",
      "Specialty Chef",
      "Sushi Chef",
      "Garde Manger",
      "Butcher",
      "Baker",
      "Sommelier",
      "Mixologist",
      "Barista",
      "Nutritionist",
    ],
  },
  "Entertainment Department": {
    count: 16,
    roles: [
      "Entertainment Director",
      "Performance Coordinator",
      "Lead Vocalist",
      "Musician",
      "Dancer",
      "Choreographer",
      "Comedy Performer",
      "Magic Act",
      "DJ",
      "Audio Technician",
      "Lighting Specialist",
      "Stage Manager",
      "Production Manager",
      "Costume Designer",
      "Cultural Program Director",
      "Performance Artist",
    ],
  },
  "Operations Department": {
    count: 5,
    roles: [
      "Operations Manager",
      "Logistics Coordinator",
      "Inventory Specialist",
      "Procurement Officer",
      "Sustainability Coordinator",
    ],
  },
};

// Name datasets by region
const namesByRegion = {
  global: {
    first: [
      "James",
      "Maria",
      "David",
      "Sarah",
      "Michael",
      "Emma",
      "John",
      "Olivia",
      "Robert",
      "Sophia",
    ],
    last: [
      "Baker",
      "Bennett",
      "Campbell",
      "Carpenter",
      "Chambers",
      "Clark",
      "Coleman",
      "Collins",
      "Cooper",
      "Crawford",
      "Curtis",
      "Day",
      "Dean",
      "Dixon",
      "Douglas",
      "Dunn",
      "Ellis",
      "Fisher",
      "Fletcher",
      "Foster",
      "Fox",
      "Gardner",
      "Gibson",
      "Graham",
      "Grant",
      "Graves",
      "Griffin",
      "Hall",
      "Hamilton",
      "Harper",
      "Hawkins",
      "Hayes",
      "Henderson",
      "Holloway",
      "Hudson",
      "Hunter",
      "Jennings",
      "Keller",
      "Knight",
      "Lawson",
      "Marshall",
      "Mason",
      "Maxwell",
      "Mitchell",
      "Montgomery",
      "Morgan",
      "Murray",
      "Nash",
      "Palmer",
      "Parker",
      "Payne",
      "Porter",
      "Price",
      "Reed",
      "Reeves",
      "Russell",
      "Spencer",
      "Stewart",
      "Sutton",
      "Wallace",
      "Warren",
      "Watson",
      "Wells",
      "West",
    ],
  },
  // Add more region-specific names as needed
};

// Replace the hardcoded languages array with imported language utilities
// Languages by region - This is now imported from language-utils.mjs

// Replace the import statement with direct access to cruiseDepartureLocations
// import { cruiseDepartureLocations } from "../src/lib/constants/info/city.js";

// Instead, read and parse the city.ts file content
let cruiseDepartureLocations = [];
try {
  const cityTsFile = fs.readFileSync(
    path.join(__dirname, "../src/lib/constants/info/city.ts"),
    "utf8"
  );
  // Extract the cruiseDepartureLocations array using regex
  const locationsMatch = cityTsFile.match(
    /export const cruiseDepartureLocations: Location\[\] = (\[[\s\S]*?\n\];)/
  );
  if (locationsMatch && locationsMatch[1]) {
    // Basic string manipulation to make it valid JSON (remove type annotations and convert to proper JSON)
    let jsonStr = locationsMatch[1]
      .replace(/: Location\[\]/g, "")
      .replace(/(\w+):/g, '"$1":')
      .replace(/'/g, '"');

    try {
      cruiseDepartureLocations = JSON.parse(jsonStr);
    } catch (jsonError) {
      console.error("Error parsing cruiseDepartureLocations:", jsonError);
      // Fallback to empty array, which will use default location data
    }
  }
} catch (error) {
  console.error("Could not read city.ts file:", error);
  // Fallback to using default location data when city information is needed
}

// Background options for security and naval roles
const backgroundOptions = [
  "military",
  "naval",
  "coast guard",
  "law enforcement",
  "special forces",
  "security services",
  "maritime safety",
  "police",
  "intelligence",
  "border control",
  "customs enforcement",
  "private security",
  "emergency response",
  "search and rescue",
  "firefighting",
  "crisis management",
  "investigations",
  "surveillance",
  "anti-piracy",
];

// Specialty options for engineers
const engineeringSpecialties = [
  "propulsion systems",
  "marine electronics",
  "sustainable technologies",
  "vessel automation",
  "power management",
  "hydraulic systems",
  "mechanical systems",
  "electrical systems",
  "HVAC systems",
];

// Cuisine types for culinary roles
const cuisineTypes = [
  "Mediterranean",
  "Pacific Rim",
  "Continental",
  "Asian fusion",
  "Caribbean",
  "Nordic",
  "French",
  "Italian",
  "Japanese",
  "Pan-Asian",
  "Latin American",
];

// Function to generate a crew member
function generateCrewMember(city, department, role, index = 0) {
  const fullName = getRandomName();
  const firstName = fullName.split(" ")[0];
  const lastName = fullName.split(" ")[1] || "";

  // Simple gender determination based on name ending
  const gender =
    firstName.endsWith("a") || firstName.endsWith("e") ? "women" : "men";

  const country = cityCountryMap[city.toLowerCase().replace(/ /g, "-")];
  const languages = getRandomLanguages(
    getRandomInt(3, 5),
    country ||
      cityToRegionMap[city.toLowerCase().replace(/ /g, "-")] ||
      "global"
  );

  // Get city data from mapping
  const countryName =
    cityCountryMap[city.toLowerCase().replace(/ /g, "-")] || "Unknown";
  const regionName =
    cityToRegionMap[city.toLowerCase().replace(/ /g, "-")] || "Unknown";

  // If city not found in cruiseDepartureLocations, use a default
  const defaultLocation = {
    city: formatKebebToTitleCase(city),
    country: countryName,
    region: regionName,
  };

  const locationData = defaultLocation;

  const experienceYears = Math.floor(Math.random() * 20) + 3; // 3-23 years

  // Generate bio using templates based on role
  let bio;
  let templates = crewMemberBioTemplates[role] || defaultCrewMemberBioTemplate;
  let template = templates[Math.floor(Math.random() * templates.length)];

  // Fill in bio template variables
  bio = template
    .replace("{name}", fullName)
    .replace("{lastName}", lastName)
    .replace("{experience}", experienceYears)
    .replace("{role}", role)
    .replace("{region}", locationData.region);

  // Add specialty details for certain roles
  if (bio.includes("{background}")) {
    bio = bio.replace(
      "{background}",
      backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)]
    );
  }

  if (bio.includes("{specialty}")) {
    bio = bio.replace(
      "{specialty}",
      engineeringSpecialties[
        Math.floor(Math.random() * engineeringSpecialties.length)
      ]
    );
  }

  if (bio.includes("{cuisine}")) {
    bio = bio.replace(
      "{cuisine}",
      cuisineTypes[Math.floor(Math.random() * cuisineTypes.length)]
    );
  }

  return {
    id: generateUniqueId(),
    name: fullName,
    role,
    department,
    bio,
    languages,
    experienceYears,
    profileImage: `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 85)}.jpg`,
    city: locationData.city,
    country: locationData.country,
    state: locationData.state,
    region: locationData.region,
  };
}

// Function to generate all crew members for a city
function generateCityCrewMembers(
  city,
  specificDepartment = null,
  specificRole = null,
  count = 1
) {
  const crewMembers = [];

  Object.entries(departmentStructure).forEach(([department, details]) => {
    // Skip if a specific department is requested and this isn't it
    if (specificDepartment && department !== specificDepartment) return;

    for (let i = 0; i < details.count; i++) {
      const role = details.roles[i % details.roles.length];

      // Skip if a specific role is requested and this isn't it
      if (specificRole && role !== specificRole) continue;

      // If we're adding specific roles, generate the requested count
      if (specificRole && role === specificRole) {
        for (let j = 0; j < count; j++) {
          crewMembers.push(generateCrewMember(city, department, role, i));
        }
      } else if (!specificRole) {
        crewMembers.push(generateCrewMember(city, department, role, i));
      }
    }
  });

  return crewMembers;
}

// Function to check if crew members file exists and read it
function readExistingCrewMembers(city) {
  const filePath = path.join(
    __dirname,
    "../src/lib/constants/crewMembers",
    `${city}.ts`
  );

  if (fs.existsSync(filePath)) {
    try {
      const fileContent = fs.readFileSync(filePath, "utf8");
      const match = fileContent.match(
        /export const [a-zA-Z0-9_]+ = (\[[\s\S]*\]);/
      );
      if (match && match[1]) {
        return JSON.parse(match[1]);
      }
    } catch (error) {
      console.error(`Error reading existing crew for ${city}:`, error);
    }
  }

  return null;
}

// Function to write crew members to a file
function writeCrewMembersToFile(city, crewMembers, append = false) {
  const cityVarName = city.replace(/-/g, "") + "TeamMembers";
  const dirPath = path.join(__dirname, "../src/lib/constants/crewMembers");
  const filePath = path.join(dirPath, `${city}.ts`);

  // If appending and file exists, merge with existing crew
  if (append) {
    const existingCrewMembers = readExistingCrewMembers(city);
    if (existingCrewMembers) {
      // Combine existing and new crew members
      crewMembers = [...existingCrewMembers, ...crewMembers];
      console.log(
        `Added ${crewMembers.length - existingCrewMembers.length} new crew members to existing ${existingCrewMembers.length} for ${city}`
      );
    }
  }

  const fileContent = `
  // This file is auto-generated
    // Do not edit manually.
    // City: ${formatKebebToTitleCase(city)}
    // Generated on: ${new Date().toISOString()}
  
  import { CrewMember } from "@/lib/interfaces/people/staff";

export const ${cityVarName}: CrewMember[] = ${JSON.stringify(
    crewMembers,
    null,
    2
  )};
`;

  // Ensure directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(filePath, fileContent);
  console.log(
    `Generated crew members file for ${city} with ${crewMembers.length} members`
  );
}

// Main function
async function main() {
  const args = parseArgs();
  const specificCity = args.city;
  const specificDepartment = args.department;
  const specificRole = args.role;
  const count = args.count ? parseInt(args.count) : 1;
  const rewrite = args.rewrite === true;

  if (
    !fs.existsSync(path.join(__dirname, "../src/lib/constants/crewMembers"))
  ) {
    fs.mkdirSync(path.join(__dirname, "../src/lib/constants/crewMembers"), {
      recursive: true,
    });
  }

  // If specific city is provided
  if (specificCity) {
    if (!cityFiles.includes(specificCity)) {
      console.error(`Error: City '${specificCity}' not found in city files`);
      return;
    }

    const filePath = path.join(
      __dirname,
      "../src/lib/constants/crewMembers",
      `${specificCity}.ts`
    );

    const fileExists = fs.existsSync(filePath);

    // If we're adding specific crew or forcing overwrite
    if ((specificDepartment || specificRole) && fileExists && !rewrite) {
      // Generate only the specific crew members and append
      const crewMembers = generateCityCrewMembers(
        specificCity,
        specificDepartment,
        specificRole,
        count
      );
      writeCrewMembersToFile(specificCity, crewMembers, true);
    } else if (!fileExists || rewrite) {
      // Generate all crew members for the city
      const crewMembers = generateCityCrewMembers(specificCity);
      writeCrewMembersToFile(specificCity, crewMembers, false);
    } else {
      console.log(
        `Crew file for ${specificCity} already exists. Use --rewrite to overwrite or specify department/role to add more.`
      );
    }
  } else {
    // Generate for all cities if file doesn't exist
    for (const city of cityFiles) {
      const filePath = path.join(
        __dirname,
        "../src/lib/constants/crewMembers",
        `${city}.ts`
      );

      if (!fs.existsSync(filePath) || rewrite) {
        const crewMembers = generateCityCrewMembers(city);
        writeCrewMembersToFile(city, crewMembers, false);
      } else {
        console.log(
          `Skipping ${city} - crew file already exists. Use --rewrite to overwrite.`
        );
      }
    }
  }

  console.log("Crew member generation complete!");
}

main().catch(console.error);
