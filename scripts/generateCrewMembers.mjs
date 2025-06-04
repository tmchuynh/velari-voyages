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

// Bio templates by role
const bioTemplates = {
  Captain: [
    "{name} brings over {experience} years of experience navigating {region}'s waters, specializing in coastal and offshore operations.",
    "With expertise in {specialty}, Captain {lastName} brings {experience} years of leadership to every voyage.",
    "Captain {lastName} has navigated the waters of {region} for over {experience} years with a focus on safety and passenger comfort.",
  ],
  // Add more role-specific bio templates
};

// Function to generate a crew member
function generateCrewMember(city, department, role, index) {
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

  // Generate bio using templates or default
  let bio = `${name} is an experienced ${role} with ${experienceYears} years of service in the maritime industry.`;

  // The image would follow a naming convention
  const roleLower = role.toLowerCase().replace(/\s+/g, "-");
  const profileImage = `/images/crew/${roleLower}-${lastName.toLowerCase()}.jpg`;

  return {
    name,
    role,
    department,
    bio,
    languages,
    experienceYears,
    profileImage,
    city: city
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    country: "United States", // Default, would be customized based on city
    state: "California", // Default, would be customized based on city
    region: "West Coast", // Default, would be customized based on city
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

  const fileContent = `import { CrewMember } from "@/lib/interfaces/people/staff.ts";

export const ${cityVarName}:CrewMember[] = ${JSON.stringify(
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
