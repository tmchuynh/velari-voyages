/**
 * Library Data Generator Script
 * ============================
 *
 * This script generates TypeScript files containing library venue data for each vessel
 * in each city within the Velari Voyages project.
 * It creates files within the directory structure:
 * "src/lib/constants/venues/libraries/{cityName}-libraries.ts"
 * Each file exports an array variable named "{camelCaseCityName}Libraries"
 * with library data that matches the Library interface from venues.ts
 *
 * Features:
 * - Generates one library per vessel in each city
 * - Creates comprehensive library details including featured books, events,
 *   book clubs, operating hours, and contact information
 * - Uses real book data from the book-data.mjs file
 * - Each library features 20 real books with varying age groups
 * - Conditional data generation:
 *   - events: 10 events if hasEvents is true
 *   - bookClubs: 3 book clubs if hasBookClubs is true
 * - Follows the Library interface requirements with vesselId references
 * - Customizes libraries based on city/region and vessel type
 * - Supports different operational modes:
 *   - Create: Only generates files if they don't already exist (default)
 *   - Append: Adds new library data to existing files
 *   - Rewrite: Overwrites existing files with new data
 * - Includes a debug mode for verbose logging output
 *
 * Usage Examples:
 * --------------
 * # Default: creates files with one library per vessel for all cities
 * node scripts/create-library-files.mjs
 *
 * # Append new libraries to existing files
 * node scripts/create-library-files.mjs --append
 * # Shorter version:
 * node scripts/create-library-files.mjs -a
 *
 * # Rewrite all library files (discards existing data)
 * node scripts/create-library-files.mjs --rewrite
 * # Shorter version:
 * node scripts/create-library-files.mjs -r
 *
 * # Enable debug mode
 * node scripts/create-library-files.mjs --debug
 * # Shorter version:
 * node scripts/create-library-files.mjs -d
 *
 * Command-line Options:
 * ------------------
 * --append, -a               Enable Append mode. Adds new libraries to existing files.
 *                           If a file doesn't exist, it's created.
 *
 * --rewrite, -r             Enable Rewrite mode. Overwrites existing library files.
 *
 * --debug, -d               Enable debug mode for verbose logging.
 *
 * File Structure:
 * --------------
 * Generated files follow this structure:
 * src/lib/constants/venues/libraries/
 * ├── amsterdam-libraries.ts
 * ├── auckland-libraries.ts
 * ├── boston-libraries.ts
 * └── ...
 *
 * Dependencies:
 * ------------
 * This script requires:
 * - Vessel data files in src/lib/constants/cruises/vessels/
 * - The Library interface from src/lib/interfaces/services/venues.ts
 * - Real book data from scripts/data/book-data.mjs
 * - Utility modules from scripts/utils/
 *
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getCityFiles, toCamelCase } from "./utils/file-utils.mjs";
import {
  getRandomInt,
  getRandomItems,
  generateUniqueId,
  generateRandomEmail,
} from "./utils/data-generator.mjs";
import { cityToRegionMap } from "./utils/geo-utils.mjs";
import { popularBooks } from "./data/book-data.mjs";

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
  }`
);
console.log(
  `Will ${
    REWRITE_MODE
      ? "overwrite"
      : APPEND_MODE
        ? "append to"
        : "only create missing"
  } library files`
);

// Library donation policies
const donationPolicies = [
  "Permanent Collection Donations",
  "'Take a Book/Leave a Book' Programs",
  "Military Library Donations",
  "No Donation Policy",
];

// Library event types and names
const libraryEvents = [
  {
    title: "Author Meet & Greet",
    description:
      "Meet bestselling authors and get your books signed during these exclusive onboard events.",
    tags: ["author", "books", "signing", "meet and greet"],
  },
  {
    title: "Book Club Discussion",
    description:
      "Join fellow readers for lively discussions about the month's featured book selection.",
    tags: ["book club", "discussion", "reading", "community"],
  },
  {
    title: "Poetry Reading Evening",
    description:
      "An intimate evening of poetry readings featuring both classic and contemporary works.",
    tags: ["poetry", "reading", "literature", "evening"],
  },
  {
    title: "Literary Trivia Night",
    description:
      "Test your knowledge of literature, authors, and famous books in this fun competition.",
    tags: ["trivia", "literature", "competition", "fun"],
  },
  {
    title: "Writing Workshop",
    description:
      "Learn creative writing techniques from published authors in these hands-on workshops.",
    tags: ["writing", "workshop", "creative", "authors"],
  },
  {
    title: "Storytelling for Families",
    description:
      "Family-friendly storytelling sessions featuring beloved children's classics and new tales.",
    tags: ["storytelling", "family", "children", "classics"],
  },
  {
    title: "Book Release Party",
    description:
      "Celebrate new book releases with themed parties, discussions, and refreshments.",
    tags: ["book release", "party", "celebration", "new books"],
  },
  {
    title: "Literary Film Screening",
    description:
      "Watch film adaptations of classic literature followed by group discussions.",
    tags: ["film", "adaptation", "literature", "screening"],
  },
  {
    title: "Reading Challenge Kickoff",
    description:
      "Start your cruise reading challenge with book recommendations and prizes.",
    tags: ["reading challenge", "books", "prizes", "recommendations"],
  },
  {
    title: "Silent Reading Hour",
    description:
      "Enjoy peaceful reading time in a quiet, comfortable environment with fellow book lovers.",
    tags: ["silent reading", "quiet", "peaceful", "books"],
  },
  {
    title: "Book Swap Event",
    description:
      "Bring a book, take a book! Share your favorite reads with other passengers.",
    tags: ["book swap", "sharing", "exchange", "community"],
  },
  {
    title: "Literature & Travel Tales",
    description:
      "Explore how literature has shaped our understanding of the destinations we visit.",
    tags: ["literature", "travel", "destinations", "culture"],
  },
  {
    title: "Banned Books Discussion",
    description:
      "Explore controversial and frequently challenged books and the stories behind their censorship.",
    tags: ["banned books", "discussion", "freedom to read", "literature"],
  },
  {
    title: "Travel Writing Masterclass",
    description:
      "Learn the art of crafting compelling travel narratives with professional travel writers.",
    tags: ["travel writing", "workshop", "non-fiction", "storytelling"],
  },
  {
    title: "Genre Spotlight Night",
    description:
      "Dive deep into a different literary genre each week—mystery, sci-fi, romance, and more.",
    tags: ["genre", "exploration", "fiction", "literature"],
  },
  {
    title: "Children’s Storytime & Craft",
    description:
      "Delight young readers with a storytime session followed by themed arts and crafts.",
    tags: ["children", "storytime", "crafts", "family"],
  },
  {
    title: "Classic Novels Revisited",
    description:
      "Rediscover the timeless works of Austen, Dickens, and Tolstoy in guided discussions.",
    tags: ["classics", "literature", "book club", "discussion"],
  },
  {
    title: "Local Authors Showcase",
    description:
      "Celebrate the voices of regional authors from cruise destinations with readings and Q&A.",
    tags: ["local authors", "regional", "readings", "culture"],
  },
  {
    title: "Interactive Mystery Night",
    description:
      "Join a literary-themed murder mystery game—can you solve the clues hidden in the books?",
    tags: ["mystery", "game", "interactive", "literature"],
  },
  {
    title: "Poetry Writing Circle",
    description:
      "Craft and share your own poetry in a supportive, collaborative environment.",
    tags: ["poetry", "writing", "creative", "community"],
  },
  {
    title: "Fiction vs. Film Debate",
    description:
      "Join the debate: which was better—the book or the movie? Bring your hot takes.",
    tags: ["debate", "film", "books", "adaptations"],
  },
  {
    title: "Book Cover Design Workshop",
    description:
      "Learn about the art of book cover design from a publishing industry expert.",
    tags: ["design", "publishing", "book covers", "creative workshop"],
  },
  {
    title: "Literary Journaling Session",
    description:
      "Reflect on your reading journey with guided journaling prompts and creative exercises.",
    tags: ["journaling", "reading", "reflection", "self-expression"],
  },
  {
    title: "Live Audiobook Listening",
    description:
      "Relax and listen to professional audiobook narrators bring stories to life.",
    tags: ["audiobooks", "listening", "narration", "literature"],
  },
];

// Book club themes and names
const bookClubThemes = [
  {
    name: "Classic Literature Society",
    description:
      "Dive deep into timeless classics and explore their enduring relevance in modern times.",
    meetingFrequency: "Weekly",
    membershipRequirements: "Open to all reading levels",
  },
  {
    name: "Contemporary Fiction Circle",
    description:
      "Discover the latest in contemporary fiction with monthly selections from bestselling authors.",
    meetingFrequency: "Bi-weekly",
    membershipRequirements: "Recommended for avid readers",
  },
  {
    name: "Mystery & Thriller Club",
    description:
      "Unravel mysteries and discuss plot twists with fellow fans of suspenseful literature.",
    meetingFrequency: "Weekly",
    membershipRequirements: "Love for mystery and suspense novels",
  },
  {
    name: "Romance Readers Unite",
    description:
      "Celebrate love stories across genres, from historical romance to contemporary tales.",
    meetingFrequency: "Bi-weekly",
    membershipRequirements: "Passion for romantic literature",
  },
  {
    name: "Science Fiction & Fantasy Guild",
    description:
      "Explore otherworldly adventures and futuristic concepts with fellow genre enthusiasts.",
    meetingFrequency: "Weekly",
    membershipRequirements: "Interest in speculative fiction",
  },
  {
    name: "Biography & Memoir Club",
    description:
      "Learn from real-life stories and extraordinary journeys of notable figures.",
    meetingFrequency: "Monthly",
    membershipRequirements: "Interest in real-life stories",
  },
  {
    name: "International Literature Group",
    description:
      "Explore diverse voices and cultures through literature from around the world.",
    meetingFrequency: "Bi-weekly",
    membershipRequirements: "Curiosity about global perspectives",
  },
  {
    name: "Young Adult Book Club",
    description:
      "Discuss coming-of-age stories and young adult fiction in a supportive environment.",
    meetingFrequency: "Weekly",
    membershipRequirements: "Ages 13-25 or YA literature enthusiasts",
  },
];

// FAQ templates for libraries
const libraryFAQTemplates = [
  {
    question: "What are the library operating hours?",
    answer:
      "Our library is typically open from early morning to late evening. Hours may vary based on port days and special events.",
  },
  {
    question: "Can I borrow books during my cruise?",
    answer:
      "Yes, you can borrow books for the duration of your cruise. Please return them before disembarkation or at designated drop-off points.",
  },
  {
    question: "Do you have digital books and e-readers available?",
    answer:
      "We offer a selection of e-readers with pre-loaded books, as well as access to digital library services with your library card.",
  },
  {
    question: "Are there quiet study areas available?",
    answer:
      "Yes, we have designated quiet study areas and reading nooks throughout the library for those seeking a peaceful environment.",
  },
  {
    question:
      "Can I participate in book clubs if I'm not an experienced reader?",
    answer:
      "Absolutely! Our book clubs welcome readers of all levels. We have groups for different interests and reading experiences.",
  },
  {
    question: "Are library events suitable for children?",
    answer:
      "We offer both family-friendly events and adult-focused programs. Check our daily schedule for age-appropriate activities.",
  },
  {
    question: "Can I donate books to the library?",
    answer:
      "Our donation policy varies by vessel. Please check with library staff about current donation guidelines and accepted materials.",
  },
  {
    question: "Do you offer computer and internet access?",
    answer:
      "Yes, we provide computer stations with internet access, as well as printing and scanning services for guest use.",
  },
];

// Generate contact information
function generateContactInfo() {
  const includePhone = Math.random() < 0.7; // 70% chance
  const includeEmail = Math.random() < 0.8; // 80% chance

  const contact = {};

  if (includePhone) {
    contact.contactNumber = `+1-${getRandomInt(200, 999)}-${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}`;
  }

  if (includeEmail) {
    contact.contactEmail = generateRandomEmail();
  }

  return contact;
}

// Generate library operating hours
function generateLibraryHours() {
  const openingHour = getRandomInt(6, 8);
  const closingHour = getRandomInt(22, 24);
  return {
    start: `${openingHour.toString().padStart(2, "0")}:00`,
    end: `${closingHour.toString().padStart(2, "0")}:00`,
    duration: `${closingHour - openingHour} hours`,
    description: "Library hours may vary based on itinerary and special events",
  };
}

// Generate library name
function generateLibraryName(cityName, vesselName, region) {
  const libraryNames = [
    `${vesselName} Central Library`,
    `${cityName} Maritime Library`,
    `The Voyager's Library`,
    `Ocean View Reading Room`,
    `Navigator's Literary Collection`,
    `The Maritime Archive`,
    `Seafarer's Book Haven`,
    `The Captain's Library`,
    `Literary Horizon Collection`,
    `The Cruise Collection Library`,
  ];

  // Add region-specific names
  if (region === "Europe") {
    libraryNames.push(
      `European Literary Heritage`,
      `Continental Book Collection`,
      `Old World Library`
    );
  } else if (region === "Asia") {
    libraryNames.push(
      `Eastern Wisdom Library`,
      `Pacific Literary Center`,
      `Oriental Book Collection`
    );
  } else if (region === "North America") {
    libraryNames.push(
      `American Literary Collection`,
      `New World Library`,
      `Atlantic Reading Room`
    );
  }

  return libraryNames[Math.floor(Math.random() * libraryNames.length)];
}

// Generate library description
function generateLibraryDescription(
  libraryName,
  vesselName,
  cityName,
  region,
  features
) {
  const baseDescription = `Welcome to ${libraryName} aboard the ${vesselName}. Our comprehensive library offers a peaceful retreat for book lovers and knowledge seekers during your cruise to ${cityName}.`;

  const featureDescriptions = [];

  if (features.hasStudyAreas) {
    featureDescriptions.push(
      "quiet study areas perfect for reading and research"
    );
  }

  if (features.hasComputers) {
    featureDescriptions.push(
      "computer stations with internet access and digital resources"
    );
  }

  if (features.hasEvents) {
    featureDescriptions.push(
      "engaging literary events and author presentations"
    );
  }

  if (features.hasBookClubs) {
    featureDescriptions.push(
      "active book clubs for readers of all interests and levels"
    );
  }

  if (features.hasMovieRentals) {
    featureDescriptions.push(
      "movie rentals featuring literary adaptations and documentaries"
    );
  }

  const featuresText =
    featureDescriptions.length > 0
      ? ` Our library features ${featureDescriptions.join(", ")}.`
      : "";

  const closingText = ` With over 20 carefully curated books spanning various genres and age groups, plus comfortable reading spaces and knowledgeable staff, we're here to enhance your literary journey at sea.`;

  return baseDescription + featuresText + closingText;
}

// Generate featured books (20 books with varying age groups)
function generateFeaturedBooks() {
  // Ensure we have a good mix of age groups
  const ageGroupCounts = {
    "12-16": 4,
    "14-18": 4,
    "18+": 8,
    "Adults Only": 2,
    "Mature Audiences": 2,
  };

  const selectedBooks = [];
  const booksByAgeGroup = {};

  // Group books by age group
  popularBooks.forEach((book) => {
    if (!booksByAgeGroup[book.ageGroup]) {
      booksByAgeGroup[book.ageGroup] = [];
    }
    booksByAgeGroup[book.ageGroup].push(book);
  });

  // Select books according to age group distribution
  Object.entries(ageGroupCounts).forEach(([ageGroup, count]) => {
    const booksInGroup = booksByAgeGroup[ageGroup] || [];
    if (booksInGroup.length > 0) {
      const selectedFromGroup = getRandomItems(
        booksInGroup,
        Math.min(count, booksInGroup.length)
      );
      selectedBooks.push(...selectedFromGroup);
    }
  });

  // If we don't have enough books, fill with random selections
  while (selectedBooks.length < 20) {
    const remainingBooks = popularBooks.filter(
      (book) => !selectedBooks.some((selected) => selected.title === book.title)
    );
    if (remainingBooks.length === 0) break;
    selectedBooks.push(
      remainingBooks[Math.floor(Math.random() * remainingBooks.length)]
    );
  }

  return selectedBooks.slice(0, 20);
}

// Generate library events (10 events)
function generateLibraryEvents() {
  return getRandomItems(libraryEvents, 10).map((event) => {
    const duration = getRandomInt(45, 120);
    return {
      ...event,
      duration: `${duration} minutes`,
      type: "Library Event",
      featured: Math.random() < 0.3,
      schedule: `${getRandomInt(10, 20)}:00 - ${getRandomInt(10, 20) + Math.ceil(duration / 60)}:00`,
      maxParticipants: getRandomInt(15, 50),
      currency: "USD",
      bookingRequired: Math.random() < 0.4,
      ticketPrice: Math.random() < 0.2 ? getRandomInt(5, 25) : 0,
      rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10, // 3.5-5.0 rating
    };
  });
}

// Generate book clubs (3 clubs)
function generateBookClubs() {
  return getRandomItems(bookClubThemes, 3).map((club) => {
    return {
      ...club,
      title: club.name,
      description: club.description,
      tags: ["book club", "reading", "discussion", "community"],
      rating: Math.round((Math.random() * 1.0 + 4.0) * 10) / 10, // 4.0-5.0 rating
      contact: generateContactInfo(),
    };
  });
}

// Generate library FAQs
function generateLibraryFAQs() {
  return getRandomItems(libraryFAQTemplates, getRandomInt(5, 8));
}

// Generate a single library
function generateLibrary(vessel, cityName, region) {
  const vesselType = vessel.type || "cruise";
  const libraryName = generateLibraryName(cityName, vessel.name, region);

  // Determine library features
  const hasStudyAreas = Math.random() < 0.8; // 80% chance
  const hasComputers = Math.random() < 0.7; // 70% chance
  const hasMovieRentals = Math.random() < 0.6; // 60% chance
  const hasEvents = Math.random() < 0.9; // 90% chance
  const hasBookClubs = Math.random() < 0.8; // 80% chance

  const features = {
    hasStudyAreas,
    hasComputers,
    hasMovieRentals,
    hasEvents,
    hasBookClubs,
  };

  const library = {
    id: generateUniqueId(),
    vesselId: vessel.id,
    contact: generateContactInfo(),
    name: libraryName,
    imageUrl: `/images/venues/libraries/library-${getRandomInt(1, 12)}.jpg`,
    description: generateLibraryDescription(
      libraryName,
      vessel.name,
      cityName,
      region,
      features
    ),
    hours: generateLibraryHours(),
    isPopular: Math.random() < 0.3, // 30% chance of being popular
    faqs: generateLibraryFAQs(),
    hasStudyAreas,
    hasComputers,
    donationPolicy:
      donationPolicies[Math.floor(Math.random() * donationPolicies.length)],
    featuredBooks: generateFeaturedBooks(),
    hasMovieRentals,
    hasEvents,
    ...(hasEvents && { events: generateLibraryEvents() }),
    hasBookClubs,
    ...(hasBookClubs && { bookClubs: generateBookClubs() }),
  };

  return library;
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
    `${cityName}-vessels.ts`
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
      `⚠️  Could not read vessel file for ${cityName}: ${error.message}`
    );
    return [];
  }
}

// Generate libraries for a city
function generateLibrariesForCity(cityName, vessels) {
  const region = cityToRegionMap(cityName);
  const libraries = [];

  if (DEBUG_MODE) {
    console.log(`\nGenerating libraries for ${cityName} (${region}):`);
  }

  vessels.forEach((vessel) => {
    const library = generateLibrary(vessel, cityName, region);
    libraries.push(library);

    if (DEBUG_MODE) {
      console.log(`  - ${library.name} (${vessel.name})`);
      console.log(
        `    Features: ${[
          library.hasStudyAreas && "Study Areas",
          library.hasComputers && "Computers",
          library.hasEvents && "Events",
          library.hasBookClubs && "Book Clubs",
          library.hasMovieRentals && "Movie Rentals",
        ]
          .filter(Boolean)
          .join(", ")}`
      );
    }
  });

  return libraries;
}

// Generate TypeScript file content
function generateTypeScriptContent(cityName, libraries) {
  const camelCaseCityName = toCamelCase(cityName);
  const variableName = `${camelCaseCityName}Libraries`;

  let content = `import { Library } from "@/lib/interfaces/services/venues";\n\n`;
  content += `export const ${variableName}: Library[] = [\n`;

  libraries.forEach((library, index) => {
    content += `  {\n`;
    content += `    id: "${library.id}",\n`;
    content += `    vesselId: "${library.vesselId}",\n`;
    content += `    contact: {\n`;
    if (library.contact.contactNumber) {
      content += `      contactNumber: "${library.contact.contactNumber}",\n`;
    }
    if (library.contact.contactEmail) {
      content += `      contactEmail: "${library.contact.contactEmail}",\n`;
    }
    content += `    },\n`;
    content += `    name: "${library.name}",\n`;
    if (library.imageUrl) {
      content += `    imageUrl: "${library.imageUrl}",\n`;
    }
    content += `    description: "${library.description.replace(/"/g, '\\"')}",\n`;
    content += `    hours: {\n`;
    content += `      start: "${library.hours.start}",\n`;
    content += `      end: "${library.hours.end}",\n`;
    content += `      duration: "${library.hours.duration}",\n`;
    content += `      description: "${library.hours.description}",\n`;
    content += `    },\n`;
    content += `    isPopular: ${library.isPopular},\n`;
    content += `    faqs: [\n`;
    library.faqs.forEach((faq) => {
      content += `      {\n`;
      content += `        question: "${faq.question.replace(/"/g, '\\"')}",\n`;
      content += `        answer: "${faq.answer.replace(/"/g, '\\"')}",\n`;
      content += `      },\n`;
    });
    content += `    ],\n`;
    content += `    hasStudyAreas: ${library.hasStudyAreas},\n`;
    content += `    hasComputers: ${library.hasComputers},\n`;
    if (library.donationPolicy) {
      content += `    donationPolicy: "${library.donationPolicy}",\n`;
    }
    content += `    featuredBooks: [\n`;
    library.featuredBooks.forEach((book) => {
      content += `      {\n`;
      content += `        title: "${book.title.replace(/"/g, '\\"')}",\n`;
      content += `        author: "${book.author.replace(/"/g, '\\"')}",\n`;
      content += `        description: "${book.description.replace(/"/g, '\\"')}",\n`;
      content += `        tags: [${book.tags.map((tag) => `"${tag}"`).join(", ")}],\n`;
      content += `        ageGroup: "${book.ageGroup}",\n`;
      content += `      },\n`;
    });
    content += `    ],\n`;
    content += `    hasMovieRentals: ${library.hasMovieRentals},\n`;
    content += `    hasEvents: ${library.hasEvents},\n`;
    if (library.events) {
      content += `    events: [\n`;
      library.events.forEach((event) => {
        content += `      {\n`;
        content += `        title: "${event.title.replace(/"/g, '\\"')}",\n`;
        content += `        description: "${event.description.replace(/"/g, '\\"')}",\n`;
        content += `        tags: [${event.tags.map((tag) => `"${tag}"`).join(", ")}],\n`;
        content += `        rating: ${event.rating},\n`;
        content += `        duration: "${event.duration}",\n`;
        if (event.type) content += `        type: "${event.type}",\n`;
        if (event.featured !== undefined)
          content += `        featured: ${event.featured},\n`;
        if (event.schedule)
          content += `        schedule: "${event.schedule}",\n`;
        if (event.maxParticipants)
          content += `        maxParticipants: ${event.maxParticipants},\n`;
        if (event.currency)
          content += `        currency: "${event.currency}",\n`;
        if (event.bookingRequired !== undefined)
          content += `        bookingRequired: ${event.bookingRequired},\n`;
        if (event.ticketPrice !== undefined)
          content += `        ticketPrice: ${event.ticketPrice},\n`;
        content += `      },\n`;
      });
      content += `    ],\n`;
    }
    content += `    hasBookClubs: ${library.hasBookClubs},\n`;
    if (library.bookClubs) {
      content += `    bookClubs: [\n`;
      library.bookClubs.forEach((club) => {
        content += `      {\n`;
        content += `        name: "${club.name.replace(/"/g, '\\"')}",\n`;
        content += `        description: "${club.description.replace(/"/g, '\\"')}",\n`;
        content += `        meetingFrequency: "${club.meetingFrequency}",\n`;
        if (club.membershipRequirements) {
          content += `        membershipRequirements: "${club.membershipRequirements.replace(/"/g, '\\"')}",\n`;
        }
        content += `        contact: {\n`;
        if (club.contact.contactNumber) {
          content += `          contactNumber: "${club.contact.contactNumber}",\n`;
        }
        if (club.contact.contactEmail) {
          content += `          contactEmail: "${club.contact.contactEmail}",\n`;
        }
        content += `        },\n`;
        content += `        title: "${club.title.replace(/"/g, '\\"')}",\n`;
        content += `        tags: [${club.tags.map((tag) => `"${tag}"`).join(", ")}],\n`;
        content += `        rating: ${club.rating},\n`;
        content += `      },\n`;
      });
      content += `    ],\n`;
    }
    content += `  }${index < libraries.length - 1 ? "," : ""}\n`;
  });

  content += `];\n`;
  return content;
}

// Create library files for all cities
async function createLibraryFiles() {
  const outputDir = path.join(
    __dirname,
    "../src/lib/constants/venues/libraries"
  );

  // Create the directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let totalLibraries = 0;
  let filesCreated = 0;
  let filesSkipped = 0;

  console.log(`\nProcessing ${cityFiles.length} cities...`);

  for (const cityName of cityFiles) {
    const outputFile = path.join(outputDir, `${cityName}-libraries.ts`);

    // Check if file exists and handle based on mode
    if (fs.existsSync(outputFile) && !REWRITE_MODE && !APPEND_MODE) {
      if (DEBUG_MODE) {
        console.log(`Skipping ${cityName} - file already exists`);
      }
      filesSkipped++;
      continue;
    }

    try {
      // Get vessel data for this city
      const vessels = getVesselDataForCity(cityName);

      if (vessels.length === 0) {
        console.log(`⚠️  No vessels found for ${cityName}`);
        continue;
      }

      // Generate libraries for this city
      const libraries = generateLibrariesForCity(cityName, vessels);
      totalLibraries += libraries.length;

      let content;
      if (APPEND_MODE && fs.existsSync(outputFile)) {
        // Read existing content and append new libraries
        const existingContent = fs.readFileSync(outputFile, "utf8");
        const existingLibraries = [];

        // Simple parsing to extract existing libraries (this is a basic approach)
        const regex = /export const \w+Libraries: Library\[\] = \[([\s\S]*)\];/;
        const match = existingContent.match(regex);

        if (match) {
          // In append mode, we'll replace the entire array with combined data
          content = generateTypeScriptContent(cityName, libraries);
        } else {
          content = generateTypeScriptContent(cityName, libraries);
        }
      } else {
        content = generateTypeScriptContent(cityName, libraries);
      }

      // Write the file
      fs.writeFileSync(outputFile, content, "utf8");
      filesCreated++;

      console.log(`✅ ${cityName}: ${libraries.length} libraries`);
    } catch (error) {
      console.error(`❌ Error processing ${cityName}:`, error.message);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`Files created: ${filesCreated}`);
  console.log(`Files skipped: ${filesSkipped}`);
  console.log(`Total libraries generated: ${totalLibraries}`);
}

// Run the script
createLibraryFiles().catch((error) => {
  console.error("❌ Script failed:", error);
  process.exit(1);
});
