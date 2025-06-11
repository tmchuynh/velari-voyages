/**
 * Art Gallery Data Generator Script
 * ================================
 *
 * This script generates TypeScript files containing art gallery venue data for each vessel
 * in each city within the Velari Voyages project.
 * It creates files within the directory structure:
 * "src/lib/constants/venues/art-galleries/{cityName}-art-galleries.ts"
 * Each file exports an array variable named "{camelCaseCityName}ArtGalleries"
 * with art gallery data that matches the ArtGallery interface from venues.ts
 *
 * Features:
 * - Generates one art gallery per vessel in each city
 * - Creates comprehensive art gallery details including artists, exhibitions,
 *   tours, classes, operating hours, and contact information
 * - Conditional data generation:
 *   - exhibitions: 5 exhibitions if hasExhibitions is true
 *   - tours: 3 tours if hasGuidedTours is true
 *   - artClasses: 10 classes if hasArtClasses is true
 * - Follows the ArtGallery interface requirements with vesselId references
 * - Customizes art galleries based on city/region and vessel type
 * - Supports different operational modes:
 *   - Create: Only generates files if they don't already exist (default)
 *   - Append: Adds new art gallery data to existing files
 *   - Rewrite: Overwrites existing files with new data
 * - Includes a debug mode for verbose logging output
 *
 * Usage Examples:
 * --------------
 * # Default: creates files with one art gallery per vessel for all cities
 * node scripts/create-art-gallery-files.mjs
 *
 * # Append new art galleries to existing files
 * node scripts/create-art-gallery-files.mjs --append
 * # Shorter version:
 * node scripts/create-art-gallery-files.mjs -a
 *
 * # Rewrite all art gallery files (discards existing data)
 * node scripts/create-art-gallery-files.mjs --rewrite
 * # Shorter version:
 * node scripts/create-art-gallery-files.mjs -r
 *
 * # Enable debug mode
 * node scripts/create-art-gallery-files.mjs --debug
 * # Shorter version:
 * node scripts/create-art-gallery-files.mjs -d
 *
 * Command-line Options:
 * ------------------
 * --append, -a               Enable Append mode. Adds new art galleries to existing files.
 *                           If a file doesn't exist, it's created.
 *
 * --rewrite, -r             Enable Rewrite mode. Overwrites existing art gallery files.
 *
 * --debug, -d               Enable debug mode for verbose logging.
 *
 * File Structure:
 * --------------
 * Generated files follow this structure:
 * src/lib/constants/venues/art-galleries/
 * ├── amsterdam-art-galleries.ts
 * ├── auckland-art-galleries.ts
 * ├── boston-art-galleries.ts
 * └── ...
 *
 * Dependencies:
 * ------------
 * This script requires:
 * - Vessel data files in src/lib/constants/cruises/vessels/
 * - The ArtGallery interface from src/lib/interfaces/services/venues.ts
 * - Utility modules from scripts/utils/
 *
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  generateUniqueId,
  generateRandomEmail,
  getRandomInt,
  getRandomBool,
  getRandomElement,
  getRandomItems,
} from "./utils/data-generator.mjs";
import {
  capitalize,
  getCityFiles,
  formatKebabToCamelCase,
} from "./utils/file-utils.mjs";
import { cityCountryMap, cityToRegionMap } from "./utils/geo-utils.mjs";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get city files
const cityFiles = getCityFiles();

// Parse command line arguments
const args = process.argv.slice(2);
const APPEND_MODE = args.includes("--append") || args.includes("-a");
const REWRITE_MODE = args.includes("--rewrite") || args.includes("-r");
const DEBUG_MODE = args.includes("--debug") || args.includes("-d");

console.log(
  `Mode: ${
    APPEND_MODE ? "Append" : REWRITE_MODE ? "Rewrite" : "Create new only"
  }`,
);
console.log(
  `Will ${
    REWRITE_MODE
      ? "overwrite"
      : APPEND_MODE
        ? "append to"
        : "only create missing"
  } art gallery files`,
);

// Famous artists by region/era
const artistsByRegion = {
  classical: [
    "Leonardo da Vinci",
    "Michelangelo Buonarroti",
    "Raphael Sanzio",
    "Sandro Botticelli",
    "Caravaggio",
    "Titian",
    "Giotto di Bondone",
    "Donatello",
  ],
  renaissance: [
    "Johannes Vermeer",
    "Rembrandt van Rijn",
    "Peter Paul Rubens",
    "Jan van Eyck",
    "Albrecht Dürer",
    "Hans Holbein the Younger",
    "Pieter Bruegel the Elder",
  ],
  impressionist: [
    "Claude Monet",
    "Pierre-Auguste Renoir",
    "Edgar Degas",
    "Camille Pissarro",
    "Berthe Morisot",
    "Mary Cassatt",
    "Gustave Caillebotte",
    "Alfred Sisley",
  ],
  postImpressionist: [
    "Vincent van Gogh",
    "Paul Cézanne",
    "Paul Gauguin",
    "Henri de Toulouse-Lautrec",
    "Georges Seurat",
    "Henri Rousseau",
    "Paul Signac",
  ],
  modern: [
    "Pablo Picasso",
    "Henri Matisse",
    "Wassily Kandinsky",
    "Piet Mondrian",
    "Jackson Pollock",
    "Andy Warhol",
    "Roy Lichtenstein",
    "Mark Rothko",
  ],
  contemporary: [
    "Banksy",
    "Damien Hirst",
    "Yayoi Kusama",
    "Jeff Koons",
    "Takashi Murakami",
    "Kehinde Wiley",
    "Kara Walker",
    "Ai Weiwei",
  ],
};

// Exhibition themes and titles
const exhibitionThemes = [
  {
    title: "Masterpieces of the Sea",
    description:
      "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
    duration: "3 months",
    type: "Permanent Collection",
  },
  {
    title: "Contemporary Voyages",
    description:
      "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
    duration: "6 months",
    type: "Featured Exhibition",
  },
  {
    title: "Colors of the Mediterranean",
    description:
      "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
    duration: "4 months",
    type: "Regional Focus",
  },
  {
    title: "Abstract Horizons",
    description:
      "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
    duration: "5 months",
    type: "Thematic Exhibition",
  },
  {
    title: "Photography at Sea",
    description:
      "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
    duration: "2 months",
    type: "Photography Exhibition",
  },
  {
    title: "Sculptures of Movement",
    description:
      "Three-dimensional artworks that embody the fluid motion of waves and the dynamic energy of maritime life.",
    duration: "4 months",
    type: "Sculpture Exhibition",
  },
  {
    title: "Local Artisan Showcase",
    description:
      "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
    duration: "3 months",
    type: "Cultural Exchange",
  },
  {
    title: "Digital Art Revolution",
    description:
      "Cutting-edge digital and interactive art installations that push the boundaries of traditional gallery experiences.",
    duration: "6 months",
    type: "Interactive Exhibition",
  },
];

// Guided tour types
const tourTypes = [
  {
    title: "Curator's Choice Tour",
    description:
      "Join our expert curator for an in-depth exploration of featured artworks, learning about artistic techniques, historical context, and hidden details.",
    duration: "45 minutes",
    schedule: "Daily at 10:00 AM and 2:00 PM",
    maxParticipants: 15,
    ticketPrice: 25,
  },
  {
    title: "Artist Spotlight Tour",
    description:
      "Focus on specific artists and their contributions to the maritime art world, with detailed analysis of their most significant works.",
    duration: "30 minutes",
    schedule: "Tuesdays and Thursdays at 11:00 AM",
    maxParticipants: 12,
    ticketPrice: 20,
  },
  {
    title: "Behind the Scenes Tour",
    description:
      "Exclusive access to conservation areas and storage facilities, discovering how artworks are preserved and maintained aboard the vessel.",
    duration: "60 minutes",
    schedule: "Weekends at 3:00 PM",
    maxParticipants: 8,
    ticketPrice: 35,
  },
];

// Art class types
const artClassTypes = [
  {
    title: "Watercolor Seascapes",
    description:
      "Learn to paint beautiful seascapes using watercolor techniques, capturing the ever-changing moods of the ocean.",
    duration: "2 hours",
    skillLevel: "Beginner to Intermediate",
    materialsIncluded: true,
    maxParticipants: 12,
    ticketPrice: 45,
  },
  {
    title: "Portrait Drawing Fundamentals",
    description:
      "Master the basics of portrait drawing with professional guidance, focusing on proportion, shading, and expression.",
    duration: "90 minutes",
    skillLevel: "All Levels",
    materialsIncluded: true,
    maxParticipants: 10,
    ticketPrice: 35,
  },
  {
    title: "Abstract Painting Workshop",
    description:
      "Explore abstract expressionism through color, texture, and movement, creating your own unique maritime-inspired artwork.",
    duration: "2.5 hours",
    skillLevel: "Intermediate",
    materialsIncluded: true,
    maxParticipants: 8,
    ticketPrice: 55,
  },
  {
    title: "Digital Art Creation",
    description:
      "Introduction to digital art using tablets and styluses, perfect for modern artists looking to explore new mediums.",
    duration: "2 hours",
    skillLevel: "Beginner",
    materialsIncluded: false,
    maxParticipants: 6,
    ticketPrice: 50,
  },
  {
    title: "Sculpture with Clay",
    description:
      "Hands-on sculpture class working with clay to create small maritime-themed pieces, from sea creatures to abstract forms.",
    duration: "3 hours",
    skillLevel: "All Levels",
    materialsIncluded: true,
    maxParticipants: 8,
    ticketPrice: 65,
  },
  {
    title: "Photography Composition",
    description:
      "Learn the art of photographic composition while documenting your cruise experience and capturing stunning maritime scenes.",
    duration: "2 hours",
    skillLevel: "Beginner to Intermediate",
    materialsIncluded: false,
    maxParticipants: 15,
    ticketPrice: 40,
  },
  {
    title: "Printmaking Basics",
    description:
      "Introduction to printmaking techniques including linocuts and etchings, creating multiple copies of your original designs.",
    duration: "2.5 hours",
    skillLevel: "Intermediate to Advanced",
    materialsIncluded: true,
    maxParticipants: 6,
    ticketPrice: 60,
  },
  {
    title: "Mixed Media Collage",
    description:
      "Combine various materials and techniques to create unique mixed media artworks inspired by your travel experiences.",
    duration: "2 hours",
    skillLevel: "All Levels",
    materialsIncluded: true,
    maxParticipants: 10,
    ticketPrice: 45,
  },
  {
    title: "Calligraphy and Lettering",
    description:
      "Learn the elegant art of calligraphy and modern lettering techniques, perfect for creating personalized travel journals.",
    duration: "90 minutes",
    skillLevel: "Beginner",
    materialsIncluded: true,
    maxParticipants: 12,
    ticketPrice: 30,
  },
  {
    title: "Jewelry Making Workshop",
    description:
      "Create unique jewelry pieces using various techniques and materials, incorporating maritime themes and found objects.",
    duration: "3 hours",
    skillLevel: "Beginner to Intermediate",
    materialsIncluded: true,
    maxParticipants: 8,
    ticketPrice: 70,
  },
];

// FAQ templates for art galleries
const artGalleryFAQTemplates = [
  {
    question: "What are the art gallery operating hours?",
    answer:
      "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events.",
  },
  {
    question: "Is there an admission fee for the gallery?",
    answer:
      "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge.",
  },
  {
    question: "Can I purchase artwork displayed in the gallery?",
    answer:
      "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks.",
  },
  {
    question: "Are guided tours available?",
    answer:
      "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services.",
  },
  {
    question: "Do you offer art classes for beginners?",
    answer:
      "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided.",
  },
  {
    question: "Can I take photos in the gallery?",
    answer:
      "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays.",
  },
  {
    question: "Is the gallery accessible for guests with mobility issues?",
    answer:
      "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs.",
  },
  {
    question: "How often do you change exhibitions?",
    answer:
      "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months.",
  },
];

// Generate artists list based on vessel type and region
function generateArtistsList(vesselType, region) {
  const artists = [];

  // Include a mix of different art periods
  const allArtists = [
    ...artistsByRegion.classical,
    ...artistsByRegion.renaissance,
    ...artistsByRegion.impressionist,
    ...artistsByRegion.postImpressionist,
    ...artistsByRegion.modern,
    ...artistsByRegion.contemporary,
  ];

  // Luxury vessels get more diverse and extensive collections
  if (
    vesselType.toLowerCase().includes("luxury") ||
    vesselType.toLowerCase().includes("vip")
  ) {
    artists.push(...getRandomItems(allArtists, getRandomInt(15, 25)));
  } else {
    artists.push(...getRandomItems(allArtists, getRandomInt(8, 15)));
  }

  return [...new Set(artists)]; // Remove duplicates
}

// Generate exhibitions if hasExhibitions is true
function generateExhibitions(hasExhibitions) {
  if (!hasExhibitions) return undefined;

  const exhibitions = [];
  const selectedThemes = getRandomItems(exhibitionThemes, 5);

  selectedThemes.forEach((theme) => {
    exhibitions.push({
      title: theme.title,
      description: theme.description,
      duration: theme.duration,
      type: theme.type,
      featured: getRandomBool(0.4), // 40% chance of being featured
      ticketPrice: getRandomBool(0.3) ? getRandomInt(10, 25) : 0, // 30% chance of having admission fee
    });
  });

  return exhibitions;
}

// Generate tours if hasGuidedTours is true
function generateTours(hasGuidedTours) {
  if (!hasGuidedTours) return undefined;

  return getRandomItems(tourTypes, 3).map((tour) => ({
    title: tour.title,
    description: tour.description,
    duration: tour.duration,
    schedule: tour.schedule,
    maxParticipants: tour.maxParticipants,
    ticketPrice: tour.price,
    currency: "USD",
    bookingRequired: true,
  }));
}

// Generate art classes if hasArtClasses is true
function generateArtClasses(hasArtClasses) {
  if (!hasArtClasses) return undefined;

  return getRandomItems(artClassTypes, 10).map((artClass) => ({
    title: artClass.title,
    description: artClass.description,
    duration: artClass.duration,
    skillLevel: artClass.skillLevel,
    materialsIncluded: artClass.materialsIncluded,
    maxParticipants: artClass.maxParticipants,
    ticketPrice: artClass.price,
    currency: "USD",
    bookingRequired: true,
    ageRestriction: getRandomBool(0.2) ? "12+" : "All ages", // 20% chance of age restriction
  }));
}

// Generate art gallery operating hours
function generateArtGalleryHours() {
  const openingHour = getRandomInt(8, 10); // 8am-10am opening
  const closingHour = getRandomInt(20, 22); // 8pm-10pm closing

  return {
    start: `${openingHour.toString().padStart(2, "0")}:00`,
    end: `${closingHour.toString().padStart(2, "0")}:00`,
    duration: `${closingHour - openingHour} hours`,
    description: "Gallery hours may vary based on itinerary and special events",
  };
}

// Generate art gallery name
function generateArtGalleryName(cityName, vesselName, region) {
  const nameFormats = [
    `${vesselName} Art Gallery`,
    `Velari Maritime Gallery`,
    `${capitalize(cityName)} Art Collection`,
    `Oceanview Gallery`,
    `Maritime Arts Center`,
    `Seascape Gallery`,
    `Horizon Arts Gallery`,
    `Aqua Fine Arts`,
    `The Gallery at Sea`,
    `Nautical Arts Gallery`,
  ];

  return getRandomElement(nameFormats);
}

// Generate art gallery description
function generateArtGalleryDescription(
  galleryName,
  vesselName,
  cityName,
  region,
  features,
) {
  const specialFeatures = [];
  if (features.hasExhibitions) specialFeatures.push("rotating exhibitions");
  if (features.hasGuidedTours) specialFeatures.push("expert-led tours");
  if (features.hasArtClasses) specialFeatures.push("hands-on art classes");

  const featureText =
    specialFeatures.length > 0
      ? ` We offer ${specialFeatures.join(", ")} to enhance your artistic journey.`
      : "";

  const descriptions = [
    `Welcome to ${galleryName} aboard the ${vesselName}. Immerse yourself in a world-class collection of maritime and contemporary art while sailing the waters near ${capitalize(cityName)}.${featureText}`,
    `${galleryName} presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space.${featureText}`,
    `Experience art like never before at ${galleryName}. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience.${featureText}`,
    `${galleryName} offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture.${featureText}`,
  ];

  return getRandomElement(descriptions);
}

// Read vessel data from a city's vessel file
function getVesselDataForCity(cityName) {
  const vesselFilePath = path.join(
    __dirname,
    "..",
    "src",
    "lib",
    "constants",
    "cruises",
    "vessels",
    `${cityName}-vessels.ts`,
  );

  if (!fs.existsSync(vesselFilePath)) {
    if (DEBUG_MODE) {
      console.log(`⚠️  No vessel file found for ${cityName}`);
    }
    return [];
  }

  try {
    const vesselFileContent = fs.readFileSync(vesselFilePath, "utf8");
    const vessels = [];

    // Extract vessel data using regex
    const vesselPattern =
      /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",[\s\S]*?type:\s*"([^"]+)",[\s\S]*?\}/g;

    let match;
    while ((match = vesselPattern.exec(vesselFileContent)) !== null) {
      vessels.push({
        id: match[1],
        name: match[2],
        type: match[3],
      });
    }

    if (DEBUG_MODE) {
      console.log(`✅ Found ${vessels.length} vessels for ${cityName}`);
    }

    return vessels;
  } catch (error) {
    console.warn(
      `⚠️  Could not read vessel file for ${cityName}: ${error.message}`,
    );
    return [];
  }
}

// Generate art gallery data for a specific vessel
function generateArtGalleryForVessel(vessel, cityName, region) {
  const galleryName = generateArtGalleryName(cityName, vessel.name, region);
  const hours = generateArtGalleryHours();
  const faqs = getRandomItems(artGalleryFAQTemplates, getRandomInt(4, 6));
  const artists = generateArtistsList(vessel.type.toLowerCase(), region);

  // Determine features based on vessel type and random factors
  const isLuxury =
    vessel.type.toLowerCase().includes("luxury") ||
    vessel.type.toLowerCase().includes("vip");
  const isMega =
    vessel.type.toLowerCase().includes("mega") ||
    vessel.type.toLowerCase().includes("expedition");

  const features = {
    hasExhibitions: isLuxury ? getRandomBool(0.9) : getRandomBool(0.7), // 90% for luxury, 70% for others
    hasGuidedTours: isLuxury ? getRandomBool(0.8) : getRandomBool(0.6), // 80% for luxury, 60% for others
    hasArtClasses: isLuxury ? getRandomBool(0.8) : getRandomBool(0.5), // 80% for luxury, 50% for others
  };

  const exhibitions = generateExhibitions(features.hasExhibitions);
  const tours = generateTours(features.hasGuidedTours);
  const artClasses = generateArtClasses(features.hasArtClasses);

  const artGallery = {
    id: generateUniqueId(),
    vesselId: vessel.id,
    name: galleryName,
    description: generateArtGalleryDescription(
      galleryName,
      vessel.name,
      cityName,
      region,
      features,
    ),
    imageUrl: `/images/art-galleries/${vessel.type}-gallery.jpg`,
    hours: hours,
    contact: {
      contactNumber: `+1-${getRandomInt(200, 999)}-${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}`,
      contactEmail: generateRandomEmail("gallery.velarivoyages.com"),
    },
    artists: artists,
    hasExhibitions: features.hasExhibitions,
    ...(exhibitions && { exhibitions }),
    hasGuidedTours: features.hasGuidedTours,
    ...(tours && { tours }),
    hasArtClasses: features.hasArtClasses,
    ...(artClasses && { artClasses }),
    faqs: faqs,
    isPopular: getRandomBool(0.3), // 30% chance of being popular
  };

  return artGallery;
}

// Generate art gallery data for a city
function generateArtGalleriesForCity(cityName) {
  const vessels = getVesselDataForCity(cityName);
  if (vessels.length === 0) {
    console.warn(
      `⚠️  No vessels found for ${cityName}, skipping art gallery generation`,
    );
    return [];
  }

  const region = cityToRegionMap[cityName];
  const artGalleries = [];

  // Generate one art gallery per vessel
  vessels.forEach((vessel) => {
    const artGallery = generateArtGalleryForVessel(vessel, cityName, region);
    artGalleries.push(artGallery);
  });

  if (DEBUG_MODE) {
    console.log(
      `✅ Generated ${artGalleries.length} art galleries for ${cityName}`,
    );
  }

  return artGalleries;
}

// Create TypeScript file content
function createArtGalleryFileContent(cityName, artGalleries) {
  const camelCaseCityName = formatKebabToCamelCase(cityName);
  const capitalizedCityName = capitalize(cityName);

  const importStatements = `import { ArtGallery } from "@/lib/interfaces/services/venues";`;

  const fileContent = `${importStatements}

/**
 * ${capitalizedCityName} Art Galleries
 * Generated art gallery data for vessels operating in ${capitalizedCityName}
 * Each vessel has one comprehensive art gallery with curated collections,
 * exhibitions, guided tours, and art classes based on vessel type and luxury level.
 */

export const ${camelCaseCityName}ArtGalleries: ArtGallery[] = ${JSON.stringify(
    artGalleries,
    null,
    2,
  )};
`;

  return fileContent;
}

// Process a single city
async function processCityArtGalleries(cityName) {
  const outputDir = path.join(
    __dirname,
    "..",
    "src",
    "lib",
    "constants",
    "venues",
    "art-galleries",
  );
  const outputFile = path.join(outputDir, `${cityName}-art-galleries.ts`);

  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Check if file exists and determine action
  if (fs.existsSync(outputFile) && !APPEND_MODE && !REWRITE_MODE) {
    if (DEBUG_MODE) {
      console.log(`⏭️  Skipping ${cityName} - file already exists`);
    }
    return { skipped: true, created: false, error: null };
  }

  try {
    let existingArtGalleries = [];

    // If appending, read existing content
    if (APPEND_MODE && fs.existsSync(outputFile)) {
      const existingContent = fs.readFileSync(outputFile, "utf8");
      const match = existingContent.match(
        /export const \w+ArtGalleries: ArtGallery\[\] = (\[[\s\S]*\]);/,
      );
      if (match) {
        try {
          existingArtGalleries = JSON.parse(match[1]);
        } catch (parseError) {
          console.warn(
            `⚠️  Could not parse existing art galleries for ${cityName}, will overwrite`,
          );
        }
      }
    }

    // Generate new art galleries
    const newArtGalleries = generateArtGalleriesForCity(cityName);

    if (newArtGalleries.length === 0) {
      return { skipped: true, created: false, error: "No vessels found" };
    }

    // Combine existing and new art galleries if appending
    const allArtGalleries = APPEND_MODE
      ? [...existingArtGalleries, ...newArtGalleries]
      : newArtGalleries;

    // Create file content
    const fileContent = createArtGalleryFileContent(cityName, allArtGalleries);

    // Write file
    fs.writeFileSync(outputFile, fileContent, "utf8");

    if (DEBUG_MODE) {
      console.log(
        `✅ ${APPEND_MODE ? "Appended to" : "Created"} ${cityName}-art-galleries.ts with ${newArtGalleries.length} new art galleries`,
      );
    }

    return {
      skipped: false,
      created: true,
      error: null,
      artGalleriesCount: newArtGalleries.length,
    };
  } catch (error) {
    console.error(`❌ Error processing ${cityName}:`, error.message);
    return { skipped: false, created: false, error: error.message };
  }
}

// Main execution
async function main() {
  console.log("🎨 Starting Art Gallery Data Generation...\n");

  let totalProcessed = 0;
  let totalCreated = 0;
  let totalSkipped = 0;
  let totalErrors = 0;
  let totalArtGalleries = 0;

  for (const cityName of cityFiles) {
    const result = await processCityArtGalleries(cityName);
    totalProcessed++;

    if (result.skipped) {
      totalSkipped++;
    } else if (result.created) {
      totalCreated++;
      totalArtGalleries += result.artGalleriesCount || 0;
    } else if (result.error) {
      totalErrors++;
    }

    // Progress indicator
    if (totalProcessed % 10 === 0 || totalProcessed === cityFiles.length) {
      console.log(
        `📊 Progress: ${totalProcessed}/${cityFiles.length} cities processed`,
      );
    }
  }

  // Final summary
  console.log("\n🏁 Art Gallery Generation Complete!");
  console.log("=====================================");
  console.log(`📊 Cities processed: ${totalProcessed}`);
  console.log(`✅ Files created/updated: ${totalCreated}`);
  console.log(`⏭️  Files skipped: ${totalSkipped}`);
  console.log(`❌ Errors encountered: ${totalErrors}`);
  console.log(`🎨 Total art galleries generated: ${totalArtGalleries}`);

  if (totalErrors > 0) {
    console.log(
      "\n⚠️  Some errors occurred during generation. Check the logs above for details.",
    );
  }
}

// Run the script
main().catch((error) => {
  console.error("💥 Fatal error:", error);
  process.exit(1);
});
