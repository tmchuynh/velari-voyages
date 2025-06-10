/**
 * @fileoverview Script to generate or update crew member data for Velari Voyages.
 *
 * This script creates JSON files for crew members, organized by city of origin.
 * It can generate a complete set of crew members for all designated cities or
 * target a specific city. It also supports adding more crew members to an
 * existing city's roster, optionally filtering by department and role.
 *
 * Generated crew members have names, gender, languages spoken (based on their
 * country of origin), a unique ID, a randomly generated bio, and assigned
 * department and role based on a predefined structure.
 *
 * Usage:
 *
 * 1. Basic Generation (All Cities):
 *    Generates crew members for all cities defined in `cityFiles`.
 *    If crew files already exist, they will be skipped unless `--force=true` is used.
 *    $ node scripts/create-crew-members.mjs
 *
 * 2. Generate/Overwrite for a Specific City:
 *    Generates crew for "Miami" and overwrites if `miami.json` already exists.
 *    $ node scripts/create-crew-members.mjs --city=miami --force=true
 *
 * 3. Add More Crew to a Specific City & Department:
 *    Adds more crew members to "Miami" specifically for the "Engineering Department".
 *    The number of crew added will be based on the `departmentStructure` or a default.
 *    $ node scripts/create-crew-members.mjs --city=miami --department="Engineering Department"
 *
 * 4. Add Specific Number of Crew to a City, Department & Role:
 *    Adds 2 "Mechanical Engineer"s to the "Engineering Department" in "Miami".
 *    $ node scripts/create-crew-members.mjs --city=miami --department="Engineering Department" --role="Mechanical Engineer" --count=2
 *
 * Command-Line Arguments:
 *   --city=<city-name>       (Optional) Target a specific city (e.g., "miami", "new-york-city").
 *                            If omitted, processes all cities.
 *   --force=<true|false>     (Optional) If true, overwrites existing crew files. Default is false.
 *   --department="<Dept Name>" (Optional) Target a specific department for adding crew.
 *                            Requires --city. (e.g., "Deck Department")
 *   --role="<Role Name>"       (Optional) Target a specific role for adding crew.
 *                            Requires --city and --department. (e.g., "Captain")
 *   --count=<number>         (Optional) Number of crew members to add.
 *                            Requires --city. Used with --department and --role for specificity.
 *                            If adding to a department without a role, this count is per department.
 *                            If adding to a role, this is the count for that specific role.
 *
 * File Structure:
 *   - Output files are saved in `src/lib/constants/crew/<city-name>.json`
 *   - Each JSON file contains an array of crew member objects.
 *
 * Dependencies:
 *   - `fs`, `path`, `url`: Node.js built-in modules for file system operations.
 *   - `./utils/file-utils.mjs`: For `getCityFiles` to list available cities.
 *   - `./utils/geo-utils.mjs`: For `cityCountryMap` (city to country mapping) and
 *     `cityToRegionMap` (city to broader region mapping).
 *   - `./data-generator.mjs`: For `getRandomInt`.
 *   - `./utils/name-utils.mjs`: For `getRandomName` to generate realistic names.
 *   - `./utils/language-utils.mjs`: For `getRandomLanguages` to assign languages based on country/region.
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
import { getRandomInt } from "./data-generator.mjs";
import { getRandomName } from "./utils/name-utils.mjs";
import { getRandomLanguages } from "./utils/language-utils.mjs";

// // Basic usage
// node scripts/create-crew-members.mjs

// // Generate or overwrite a specific city's crew
// node scripts/create-crew-members.mjs --city=miami --force=true

// // Add more crew for a specific city and department
// node scripts/create-crew-members.mjs --city=miami --department="Engineering Department"
// node scripts/create-crew-members.mjs --city=sydney --department="Security Department"

// // Add more crew for a specific city, department, and role
// node scripts/create-crew-members.mjs --city=miami --department="Engineering Department" --role="Mechanical Engineer" --count=2

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
      args[key] = value;
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

// Add this function to determine gender based on first name
function determineGenderFromName(firstName) {
  // Check if name is in masculine or feminine lists
  if (masculineNames.includes(firstName)) {
    return "men";
  } else if (feminineNames.includes(firstName)) {
    return "women";
  }

  // If we can't determine, use first letter as a simple heuristic
  // Names starting with A-M more likely to be assigned male, N-Z female
  // This is an arbitrary rule for names not in our lists
  return firstName.charAt(0).toUpperCase() <= "M" ? "men" : "women";
}

// Function to generate a crew member
function generateCrewMember(city) {
  const useFeminineName = Math.random() > 0.5;
  const name = getRandomName(useFeminineName);
  const gender = useFeminineName ? "women" : "men";
  const country = cityCountryMap[city.toLowerCase().replace(/ /g, "-")];
  const languages = getRandomLanguages(
    getRandomInt(3, 5),
    country ||
      cityToRegionMap[city.toLowerCase().replace(/ /g, "-")] ||
      "global"
  );

  // If city not found in cruiseDepartureLocations, use a default
  const defaultLocation = {
    city: formatKebebToTitleCase(city),
    country: countryName,
    region: regionName,
  };

  const locationData = cityData || defaultLocation;

  const decision = Math.random() > 0.5;

  const firstName = decision
    ? feminineNames[Math.floor(Math.random() * feminineNames.length)]
    : masculineNames[Math.floor(Math.random() * masculineNames.length)];

  const lastName =
    namesByRegion.global.last[
      Math.floor(Math.random() * namesByRegion.global.last.length)
    ];
  const fullName = `${firstName} ${lastName}`;

  const experienceYears = Math.floor(Math.random() * 20) + 3; // 5-20 years

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

  // Generate profile image using randomuser.me
  // Determine gender based on first name
  const randomId = Math.floor(Math.random() * 99); // Random number for the image
  const profileImage = `https://randomuser.me/api/portraits/${gender}/${randomId}.jpg`;

  return {
    name: fullName,
    role,
    department,
    bio,
    languages,
    experienceYears,
    profileImage,
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
    // City: ${capitalizeWords(city)}
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
  const force = args.force === "true";

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
    if ((specificDepartment || specificRole) && fileExists && !force) {
      // Generate only the specific crew members and append
      const crewMembers = generateCityCrewMembers(
        specificCity,
        specificDepartment,
        specificRole,
        count
      );
      writeCrewMembersToFile(specificCity, crewMembers, true);
    } else if (!fileExists || force) {
      // Generate all crew members for the city
      const crewMembers = generateCityCrewMembers(specificCity);
      writeCrewMembersToFile(specificCity, crewMembers, false);
    } else {
      console.log(
        `Crew file for ${specificCity} already exists. Use --force=true to overwrite or specify department/role to add more.`
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

      if (!fs.existsSync(filePath) || force) {
        const crewMembers = generateCityCrewMembers(city);
        writeCrewMembersToFile(city, crewMembers, false);
      } else {
        console.log(
          `Skipping ${city} - crew file already exists. Use --force=true to overwrite.`
        );
      }
    }
  }

  console.log("Crew member generation complete!");
}

main().catch(console.error);
