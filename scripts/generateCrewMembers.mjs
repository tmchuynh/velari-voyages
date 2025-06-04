import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// ES Modules fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cityFiles = [
  "auckland",
  "amsterdam",
  "barcelona",
  "berlin",
  "boston",
  "buenos-aires",
  "cape-town",
  "charleston",
  "copenhagen",
  "dubai",
  "dublin",
  "florence",
  "fort-lauderdale",
  "galveston",
  "hong-kong",
  "kiel",
  "kyoto",
  "lisbon",
  "london",
  "los-angeles",
  "melbourne",
  "miami",
  "milan",
  "montreal",
  "new-orleans",
  "new-york-city",
  "paris",
  "quebec-city",
  "rio-de-janeiro",
  "rome",
  "san-francisco",
  "san-juan",
  "seattle",
  "singapore",
  "southampton",
  "sydney",
  "tampa",
  "tokyo",
  "toronto",
  "vancouver",
  "venice",
  "yokohama",
];

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
    ],
  },
  // Add more region-specific names as needed
};

// Languages by region
const languagesByRegion = {
  global: [
    "English",
    "Spanish",
    "French",
    "German",
    "Mandarin",
    "Japanese",
    "Arabic",
    "Russian",
    "Portuguese",
    "Italian",
  ],
  // Add more region-specific languages as needed
};

// Import cruiseDepartureLocations from the city.ts file directly
import { cruiseDepartureLocations } from "../src/lib/constants/info/city.js";

// Expanded bio templates by role
const bioTemplates = {
  Captain: [
    "{name} brings over {experience} years of experience navigating {region}'s waters, specializing in coastal and offshore operations.",
    "With {experience} years at sea, Captain {lastName} is renowned for expertise in {region} navigation and passenger safety.",
    "Captain {lastName} has navigated the waters of {region} for over {experience} years with a focus on sustainable maritime practices.",
  ],
  "First Officer": [
    "{name} specializes in {region} navigation with {experience} years of expertise in challenging waterways and harbor approaches.",
    "Former {background} officer {name} brings exceptional navigational precision with {experience} years sailing throughout {region}.",
    "With {experience} years of maritime experience, {name}'s knowledge of {region}'s tides and currents ensures safe passage for all voyages.",
  ],
  "Chief Engineer": [
    "{name} oversees all vessel systems with {experience} years of expertise in maritime engineering, specializing in {specialty}.",
    "With {experience} years in marine engineering, {name} ensures optimal performance of all propulsion and mechanical systems.",
    "{name} brings {experience} years of engineering excellence, leading innovations in sustainable maritime technology.",
  ],
  "Security Director": [
    "Former {background} {name} leads our security team with {experience} years of expertise in maritime safety protocols.",
    "With {experience} years in maritime security, {name} ensures comprehensive protection for passengers and crew.",
    "{name} oversees all security operations with {experience} years of specialized training in international maritime safety.",
  ],
  "Executive Chef": [
    "Chef {lastName} creates exceptional {cuisine} cuisine with {experience} years of culinary expertise from around the world.",
    "With {experience} years in fine dining, Chef {lastName} specializes in {cuisine} flavors using locally sourced ingredients.",
    "{name} brings {experience} years of culinary artistry, blending {cuisine} traditions with contemporary techniques.",
  ],
  "Ship's Doctor": [
    "Dr. {lastName} provides comprehensive medical care with {experience} years of expertise in maritime and travel medicine.",
    "With {experience} years of medical practice, Dr. {lastName} specializes in emergency response and preventative care at sea.",
    "Dr. {lastName} brings {experience} years of medical expertise, ensuring passenger wellbeing in remote maritime environments.",
  ],
};

// Default bio template for roles not specifically defined
const defaultBioTemplates = [
  "{name} has dedicated {experience} years to perfecting the art of {role} with exceptional attention to detail.",
  "With {experience} years in the maritime industry, {name} brings expertise and passion to the role of {role}.",
  "{name} provides outstanding service as {role}, drawing on {experience} years of experience in luxury cruise operations.",
];

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
];

// Specialty options for engineers
const engineeringSpecialties = [
  "propulsion systems",
  "marine electronics",
  "sustainable technologies",
  "vessel automation",
  "power management",
  "hydraulic systems",
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
function generateCrewMember(city, department, role, index) {
  // Get city data from cruiseDepartureLocations
  const cityData = cruiseDepartureLocations.find(
    (location) =>
      location.city.toLowerCase() === city.replace(/-/g, " ").toLowerCase()
  );

  // If city not found in cruiseDepartureLocations, use a default
  const defaultLocation = {
    city: city
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    country: "United States",
    region: "General",
    state: null,
  };

  const locationData = cityData || defaultLocation;

  const firstName =
    namesByRegion.global.first[
      Math.floor(Math.random() * namesByRegion.global.first.length)
    ];
  const lastName =
    namesByRegion.global.last[
      Math.floor(Math.random() * namesByRegion.global.last.length)
    ];
  const name = `${firstName} ${lastName}`;

  const experienceYears = Math.floor(Math.random() * 15) + 5; // 5-20 years

  // Select 1-3 languages
  const languages = [];
  const languageCount = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < languageCount; i++) {
    const lang =
      languagesByRegion.global[
        Math.floor(Math.random() * languagesByRegion.global.length)
      ];
    if (!languages.includes(lang)) {
      languages.push(lang);
    }
  }

  // For simplicity, always include English if not already
  if (!languages.includes("English")) {
    languages.push("English");
  }

  // Generate bio using templates based on role
  let bio;
  let templates = bioTemplates[role] || defaultBioTemplates;
  let template = templates[Math.floor(Math.random() * templates.length)];

  // Fill in bio template variables
  bio = template
    .replace("{name}", name)
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
  // Parameters: gender can be male/female, we'll randomize it
  const gender = Math.random() > 0.5 ? "men" : "women";
  const randomId = Math.floor(Math.random() * 100); // Random number for the image
  const profileImage = `https://randomuser.me/api/portraits/${gender}/${randomId}.jpg`;

  return {
    name,
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
function generateCityCrewMembers(city) {
  const crewMembers = [];

  Object.entries(departmentStructure).forEach(([department, details]) => {
    for (let i = 0; i < details.count; i++) {
      const role = details.roles[i % details.roles.length];
      crewMembers.push(generateCrewMember(city, department, role, i));
    }
  });

  return crewMembers;
}

// Function to write crew members to a file
function writeCrewMembersToFile(city, crewMembers) {
  const cityVarName = city.replace(/-/g, "") + "TeamMembers";

  const fileContent = `import { CrewMember } from "@/lib/interfaces/people/staff";

export const ${cityVarName}: CrewMember[] = ${JSON.stringify(
    crewMembers,
    null,
    2
  )};
`;

  const filePath = path.join(
    __dirname,
    "../src/lib/constants/crewMembers",
    `${city}.ts`
  );
  fs.writeFileSync(filePath, fileContent);
  console.log(`Generated crew members for ${city}`);
}

// Main function
async function main() {
  if (
    !fs.existsSync(path.join(__dirname, "../src/lib/constants/crewMembers"))
  ) {
    fs.mkdirSync(path.join(__dirname, "../src/lib/constants/crewMembers"), {
      recursive: true,
    });
  }

  for (const city of cityFiles) {
    const crewMembers = generateCityCrewMembers(city);
    writeCrewMembersToFile(city, crewMembers);
  }

  console.log("Crew member generation complete!");
}

main().catch(console.error);
