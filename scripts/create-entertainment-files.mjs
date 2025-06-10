/**
 * Entertainment Data Generator Script
 * ==================================
 *
 * This script generates TypeScript files containing entertainment venue data for each vessel
 * in each city within the Velari Voyages project.
 * It creates files within the directory structure:
 * "src/lib/constants/venues/entertainment/{cityName}/{vesselName}/"
 * 
 * File Structure Generated:
 * - entertainment.ts: Contains EntertainmentCategory[] data
 * - {category-type}-entertainment.ts: Contains Entertainment[] data for each category
 *
 * Features:
 * - Generates entertainment categories for each vessel in each city
 * - Creates 6-10 entertainment shows per category
 * - Each show includes 5-10 testimonials with realistic data
 * - Merchandise data is conditionally generated based on hasMerchandise property
 * - Follows both EntertainmentCategory and Entertainment interface requirements
 * - Customizes entertainment based on city/region and vessel type
 * - Supports different operational modes:
 *   - Create: Only generates files if they don't already exist (default)
 *   - Append: Adds new entertainment data to existing files
 *   - Rewrite: Overwrites existing files with new data
 * - Includes a debug mode for verbose logging output
 *
 * Usage Examples:
 * --------------
 * # Default: creates entertainment files for all vessels in each city
 * node scripts/create-entertainment-files.mjs
 *
 * # Append new entertainment to existing files
 * node scripts/create-entertainment-files.mjs --append
 * # Shorter version:
 * node scripts/create-entertainment-files.mjs -a
 *
 * # Rewrite all entertainment files (discards existing data)
 * node scripts/create-entertainment-files.mjs --rewrite
 * # Shorter version:
 * node scripts/create-entertainment-files.mjs -r
 *
 * # Enable debug mode
 * node scripts/create-entertainment-files.mjs --debug
 * # Shorter version:
 * node scripts/create-entertainment-files.mjs -d
 *
 * Command-line Options:
 * ------------------
 * --append, -a               Enable Append mode. Adds new entertainment to existing files.
 *                           If a file doesn't exist, it's created.
 *
 * --rewrite, -r             Enable Rewrite mode. Overwrites existing entertainment files.
 *
 * --debug, -d               Enable debug mode for verbose logging.
 *
 * File Structure:
 * --------------
 * Generated files follow this structure:
 * src/lib/constants/venues/entertainment/
 * ├── amsterdam/
 * │   ├── vessel1/
 * │   │   ├── entertainment.ts (EntertainmentCategory[])
 * │   │   ├── live-music-entertainment.ts (Entertainment[])
 * │   │   ├── comedy-entertainment.ts (Entertainment[])
 * │   │   └── ...
 * │   └── vessel2/
 * └── auckland/
 *     └── ...
 *
 * Dependencies:
 * ------------
 * This script requires:
 * - Vessel data files in src/lib/constants/cruises/vessels/
 * - The EntertainmentCategory and Entertainment interfaces from src/lib/interfaces/services/venues.ts
 * - Utility modules from scripts/utils/
 *
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { cityCountryMap } from "./utils/geo-utils.mjs";
import {
  generateUniqueId,
  getRandomElement,
  getRandomItems,
  getRandomInt,
  getRandomBool,
  generateRandomEmail,
} from "./utils/data-generator.mjs";
import {
  getCityFiles,
  capitalize,
  formatKebabToCamelCase,
} from "./utils/file-utils.mjs";
import { getRandomName, determineGenderFromName } from "./utils/name-utils.mjs";

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
  } entertainment files`
);

// Entertainment types from the interface
const entertainmentTypes = [
  "Live Music",
  "Dancing", 
  "Comedy",
  "Game Show",
  "Movie Theater",
  "Karaoke",
  "Magic Show",
  "Nightclub"
];

// Entertainment show data by category
const entertainmentShows = {
  "Live Music": {
    names: [
      "Jazz Under the Stars",
      "Classical Crossover",
      "Rock the Ship",
      "Acoustic Nights",
      "Blues & Soul",
      "Country Roads",
      "Latin Rhythms",
      "Piano Bar Sessions",
      "Tribute Bands Night",
      "Singer-Songwriter Showcase",
      "Big Band Revival",
      "Folk & Americana"
    ],
    descriptions: [
      "An intimate evening of smooth jazz melodies under the starlit sky",
      "Classical music meets contemporary hits in this unique performance",
      "High-energy rock performances featuring classic and modern hits",
      "Unplugged acoustic sessions featuring talented singer-songwriters",
      "Soulful blues performances that will move your heart",
      "Country music favorites performed with authentic style",
      "Passionate Latin music and dance performances",
      "Elegant piano performances in an intimate lounge setting",
      "Tribute performances honoring legendary artists",
      "Original compositions and covers by talented indie artists",
      "Swing and big band classics brought to life",
      "Traditional folk music with modern interpretations"
    ]
  },
  "Dancing": {
    names: [
      "Ballroom Spectacular",
      "Latin Dance Night",
      "Hip-Hop Showcase",
      "Broadway Dance Revue",
      "Cultural Dance Journey",
      "Swing Dance Social",
      "Contemporary Movement",
      "Dance Competition",
      "Partner Dance Workshop",
      "Dance Through the Decades",
      "International Folk Dances",
      "Professional Dance Showcase"
    ],
    descriptions: [
      "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
      "Passionate Latin dances including salsa, bachata, and merengue",
      "Contemporary hip-hop choreography with street dance elements",
      "Broadway-style dance numbers from famous musicals",
      "A celebration of dance traditions from around the world",
      "Social swing dancing with live big band music",
      "Modern contemporary dance expressing emotion through movement",
      "Guest participation dance competition with exciting prizes",
      "Learn partner dances with professional instruction",
      "Dance styles spanning from the 1920s to today",
      "Traditional folk dances from various cultures",
      "Professional dancers performing spectacular choreographed routines"
    ]
  },
  "Comedy": {
    names: [
      "Stand-Up Comedy Night",
      "Improv Comedy Show",
      "Comedy Roast",
      "Family Comedy Hour",
      "Adult Comedy Late Night",
      "Comedy Sketch Show",
      "Interactive Comedy",
      "Musical Comedy",
      "Comedy Magic",
      "Storytelling Comedy",
      "Comedy Game Show",
      "Clean Comedy Showcase"
    ],
    descriptions: [
      "Professional stand-up comedians deliver laugh-out-loud performances",
      "Spontaneous improvised comedy based on audience suggestions",
      "Hilarious roast-style comedy with guest participation",
      "Family-friendly comedy suitable for all ages",
      "Adults-only late-night comedy with edgier material",
      "Comedy sketches and parodies performed by talented actors",
      "Interactive comedy where the audience becomes part of the show",
      "Comedy performances featuring musical parodies and songs",
      "Magic tricks combined with hilarious comedy routines",
      "Humorous storytelling and comedic monologues",
      "Game show format with comedic challenges and prizes",
      "Clean, wholesome comedy perfect for the entire family"
    ]
  },
  "Game Show": {
    names: [
      "Cruise Ship Trivia",
      "Family Feud at Sea",
      "Name That Tune",
      "Deal or No Deal",
      "Wheel of Fortune",
      "Quiz Night Championship",
      "Battle of the Sexes",
      "Newlywed Game",
      "Price is Right",
      "Jeopardy Challenge",
      "Team Challenge",
      "Pop Culture Quiz"
    ],
    descriptions: [
      "Test your knowledge with cruise ship and travel trivia",
      "Family teams compete in this classic game show format",
      "Guess the song from just a few notes in this musical game",
      "Make deals and take risks in this suspenseful game show",
      "Spin the wheel and solve puzzles to win prizes",
      "Ultimate trivia competition across multiple categories",
      "Men vs. women in hilarious trivia and challenge competitions",
      "Couples test how well they know each other",
      "Guess the prices of various items to win amazing prizes",
      "Answer questions in this classic quiz show format",
      "Team-based challenges combining trivia and physical tasks",
      "Test your knowledge of current pop culture trends"
    ]
  },
  "Movie Theater": {
    names: [
      "Latest Hollywood Blockbusters",
      "Classic Movie Night",
      "Family Movie Time",
      "Foreign Film Festival",
      "Documentary Showcase",
      "Romantic Movie Evening",
      "Action Movie Marathon",
      "Comedy Film Festival",
      "Animation Celebration",
      "Indie Film Spotlight",
      "Oscar Winners Showcase",
      "Midnight Movie Screening"
    ],
    descriptions: [
      "Recent box office hits shown on the big screen",
      "Timeless classic films from Hollywood's golden age",
      "Family-friendly movies perfect for all ages",
      "International cinema featuring subtitled masterpieces",
      "Educational and inspiring documentary films",
      "Romantic films perfect for date night",
      "High-octane action movies with stunning visuals",
      "Hilarious comedy films to brighten your evening",
      "Animated movies for kids and adults alike",
      "Independent films from emerging filmmakers",
      "Academy Award-winning films and performances",
      "Late-night cult classics and special screenings"
    ]
  },
  "Karaoke": {
    names: [
      "Karaoke Superstars",
      "Duet Night",
      "Theme Song Karaoke",
      "Karaoke Competition",
      "Group Karaoke Party",
      "Classic Rock Karaoke",
      "Pop Hits Karaoke",
      "Country Karaoke Night",
      "Karaoke Idol",
      "Family Karaoke Hour",
      "Karaoke Battle",
      "International Karaoke"
    ],
    descriptions: [
      "Showcase your singing talents and become a karaoke superstar",
      "Partner up for duet performances of your favorite songs",
      "Sing theme songs from movies, TV shows, and musicals",
      "Compete for prizes in this exciting karaoke competition",
      "Group singing sessions with popular crowd-pleasing songs",
      "Rock out to classic rock anthems and power ballads",
      "Sing along to today's biggest pop hits",
      "Country music favorites perfect for karaoke",
      "American Idol-style karaoke competition with judges",
      "Family-friendly karaoke with songs for all ages",
      "Team vs. team karaoke challenges and competitions",
      "Songs in multiple languages for our international guests"
    ]
  },
  "Magic Show": {
    names: [
      "Grand Illusion Spectacular",
      "Close-Up Magic Experience",
      "Family Magic Show",
      "Mind Reading & Mentalism",
      "Comedy Magic Show",
      "Magic & Variety Hour",
      "Interactive Magic",
      "Escape Artist Performance",
      "Card Magic Mastery",
      "Stage Magic Extravaganza",
      "Magic Workshop",
      "International Magic Acts"
    ],
    descriptions: [
      "Grand-scale illusions and spectacular magic performances",
      "Intimate close-up magic performed right before your eyes",
      "Family-friendly magic show with audience participation",
      "Mysterious mind reading and mentalism demonstrations",
      "Magic combined with hilarious comedy routines",
      "Magic show featuring multiple acts and variety performers",
      "Interactive magic where guests become part of the performance",
      "Thrilling escape artist performances and stunts",
      "Masterful card tricks and sleight of hand demonstrations",
      "Large-scale stage magic with elaborate props and illusions",
      "Learn basic magic tricks in this hands-on workshop",
      "World-class magicians from around the globe"
    ]
  },
  "Nightclub": {
    names: [
      "DJ Dance Party",
      "Silent Disco",
      "Theme Party Night",
      "Electronic Dance Music",
      "Retro Dance Night",
      "Latin Dance Club",
      "VIP Club Experience",
      "Glow Party",
      "Masquerade Ball",
      "Cocktails & Dancing",
      "Live DJ Sets",
      "Dance Floor Competition"
    ],
    descriptions: [
      "High-energy dance party with professional DJs",
      "Dance to your own beat with wireless headphone technology",
      "Themed dance parties with costumes and special decorations",
      "Electronic dance music with amazing light shows",
      "Classic hits from the 70s, 80s, and 90s",
      "Latin music and dance with authentic rhythms",
      "Exclusive VIP nightclub experience with premium service",
      "Neon-themed party with glow sticks and UV lighting",
      "Elegant masquerade ball with formal attire",
      "Sophisticated evening of cocktails and social dancing",
      "Professional DJs spinning the latest tracks",
      "Dance competitions with prizes and recognition"
    ]
  }
};

// Performer types and specialties
const performerSpecialties = {
  "Live Music": [
    "Vocalist", "Guitarist", "Pianist", "Drummer", "Saxophonist", 
    "Violinist", "Bass Player", "Keyboardist", "Trumpeter", "Flutist"
  ],
  "Dancing": [
    "Ballroom Dancer", "Latin Dancer", "Hip-Hop Dancer", "Contemporary Dancer",
    "Ballet Dancer", "Jazz Dancer", "Tap Dancer", "Choreographer"
  ],
  "Comedy": [
    "Stand-Up Comedian", "Improv Actor", "Comedy Writer", "Sketch Performer",
    "Musical Comedian", "Storyteller"
  ],
  "Game Show": [
    "Game Show Host", "Assistant Host", "Trivia Expert", "Entertainment Coordinator"
  ],
  "Movie Theater": [
    "Film Curator", "Projectionist", "Theater Manager", "Film Critic"
  ],
  "Karaoke": [
    "Karaoke Host", "DJ", "Vocal Coach", "Entertainment Coordinator"
  ],
  "Magic Show": [
    "Magician", "Illusionist", "Mentalist", "Escape Artist", "Comedy Magician"
  ],
  "Nightclub": [
    "DJ", "MC", "Dance Instructor", "Event Coordinator", "Lighting Technician"
  ]
};

// Merchandise by category
const merchandiseByCategory = {
  "Live Music": [
    { name: "Concert T-Shirt", description: "Official performance t-shirt with tour dates", price: 25 },
    { name: "Live Album CD", description: "Recording of tonight's performance", price: 15 },
    { name: "Artist Poster", description: "Signed poster of the performing artist", price: 20 },
    { name: "Music Playlist Download", description: "Digital download of tonight's setlist", price: 10 }
  ],
  "Dancing": [
    { name: "Dance DVD", description: "Learn the moves from tonight's performance", price: 18 },
    { name: "Dance Shoes", description: "Professional ballroom dance shoes", price: 45 },
    { name: "Choreography Book", description: "Step-by-step dance instructions", price: 22 },
    { name: "Performance Photos", description: "Professional photos from the show", price: 12 }
  ],
  "Comedy": [
    { name: "Comedy Special DVD", description: "Recording of tonight's comedy show", price: 16 },
    { name: "Comedian's Joke Book", description: "Collection of original jokes and stories", price: 14 },
    { name: "Comedy Show T-Shirt", description: "Funny t-shirt with show quotes", price: 20 },
    { name: "Autographed Photo", description: "Signed photo with the comedian", price: 15 }
  ],
  "Game Show": [
    { name: "Game Show T-Shirt", description: "Contestant t-shirt from the show", price: 18 },
    { name: "Trivia Book", description: "Collection of game show questions", price: 12 },
    { name: "Winner's Certificate", description: "Personalized participation certificate", price: 8 },
    { name: "Game Show Pen Set", description: "Official game show writing instruments", price: 10 }
  ],
  "Movie Theater": [
    { name: "Movie Poster", description: "Official poster from tonight's feature film", price: 15 },
    { name: "Popcorn Bucket", description: "Souvenir popcorn bucket", price: 12 },
    { name: "Theater Program", description: "Collector's edition program guide", price: 8 },
    { name: "Movie Trivia Cards", description: "Fun movie trivia card game", price: 14 }
  ],
  "Karaoke": [
    { name: "Karaoke Microphone", description: "Professional karaoke microphone", price: 25 },
    { name: "Song Book", description: "Complete karaoke song catalog", price: 16 },
    { name: "Performance Recording", description: "Recording of your karaoke performance", price: 10 },
    { name: "Karaoke Star T-Shirt", description: "Show off your karaoke skills", price: 18 }
  ],
  "Magic Show": [
    { name: "Magic Trick Set", description: "Learn basic magic tricks at home", price: 30 },
    { name: "Magician's Wand", description: "Replica of the magician's wand", price: 20 },
    { name: "Magic Book", description: "Beginner's guide to magic tricks", price: 18 },
    { name: "Performance Photo", description: "Photo with the magician", price: 12 }
  ],
  "Nightclub": [
    { name: "DJ Mix CD", description: "Tonight's DJ set on CD", price: 15 },
    { name: "Glow Accessories", description: "LED bracelets and necklaces", price: 8 },
    { name: "Club T-Shirt", description: "Official nightclub merchandise", price: 22 },
    { name: "VIP Pass Holder", description: "Souvenir VIP lanyard and pass holder", price: 10 }
  ]
};

// Testimonial templates by category
const testimonialTemplates = {
  "Live Music": [
    "The musical talent on this ship is absolutely incredible! {performer} delivered an unforgettable performance.",
    "What an amazing night of music! The {showName} show exceeded all my expectations.",
    "The live music scene on this cruise is world-class. {performer} is incredibly talented.",
    "I've been to many concerts, but this intimate setting made it extra special.",
    "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
    "This was the highlight of my cruise! Such professional and entertaining performers."
  ],
  "Dancing": [
    "The choreography was absolutely stunning! {performer} made it look effortless.",
    "I learned so much during the {showName} workshop. The instructors were patient and skilled.",
    "The energy in the room was electric! Everyone was dancing and having a blast.",
    "Professional level dancing with such grace and precision. Truly spectacular!",
    "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
    "I haven't danced like this in years! The {showName} event was so much fun."
  ],
  "Comedy": [
    "I laughed until my sides hurt! {performer} is hilarious and so entertaining.",
    "The {showName} show was the perfect way to end our evening. Great comedy!",
    "Clean, family-friendly humor that had everyone cracking up. Loved it!",
    "This comedian knows how to work a crowd. Interactive and genuinely funny.",
    "Best comedy show I've seen in years! {performer} had perfect timing.",
    "The whole family enjoyed this show. Humor that appeals to all ages."
  ],
  "Game Show": [
    "What a fun interactive experience! The {showName} got everyone involved.",
    "I won a prize and had such a great time! The host {performer} was energetic and engaging.",
    "This game show brought out everyone's competitive spirit. So much fun!",
    "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
    "The trivia was challenging but fair. Loved testing my knowledge!",
    "Interactive entertainment at its best! The whole audience was participating."
  ],
  "Movie Theater": [
    "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
    "The {showName} screening was wonderful. Love having a cinema on the ship!",
    "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
    "Family movie night was perfect! The kids loved it and so did the adults.",
    "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
    "The variety of movies shown caters to all tastes. Something for everyone!"
  ],
  "Karaoke": [
    "I finally got to sing my favorite song! The {showName} event was so much fun.",
    "Great song selection and supportive audience. {performer} was an excellent host.",
    "Even though I can't sing, I had a blast! Everyone was so encouraging.",
    "The karaoke equipment was top-notch and the atmosphere was electric.",
    "This brought out my inner rock star! Such a fun and liberating experience.",
    "Perfect entertainment for a group. We all took turns and had amazing time."
  ],
  "Magic Show": [
    "I still can't figure out how {performer} did those tricks! Absolutely mind-blowing.",
    "The {showName} show left me speechless. True artistry and skill on display.",
    "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
    "The close-up magic was incredible. {performer} has such talented hands.",
    "I was skeptical about magic shows, but this completely changed my mind.",
    "Interactive magic that made me feel like part of the show. Truly special experience."
  ],
  "Nightclub": [
    "The DJ {performer} really knew how to keep the dance floor packed all night!",
    "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
    "The {showName} party was incredible! Danced until the early morning hours.",
    "Fantastic sound system and the perfect mix of music. Had an amazing time!",
    "The energy was contagious and the music selection was spot-on. Loved every minute.",
    "Best night out on the ship! The nightclub scene here is world-class."
  ]
};

// FAQ templates by category
const faqTemplates = {
  "Live Music": [
    {
      question: "Do I need tickets for live music performances?",
      answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services."
    },
    {
      question: "Can I request songs from the performers?",
      answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk."
    },
    {
      question: "Are the live music venues suitable for all ages?",
      answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events."
    }
  ],
  "Dancing": [
    {
      question: "Do I need dance experience to participate?",
      answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction."
    },
    {
      question: "Should I bring special dance shoes?",
      answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops."
    },
    {
      question: "Are dance lessons included in the cruise fare?",
      answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge."
    }
  ],
  "Comedy": [
    {
      question: "Is the comedy show appropriate for children?",
      answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings."
    },
    {
      question: "Can I interact with the comedians?",
      answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances."
    },
    {
      question: "Do I need to reserve seats for comedy shows?",
      answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended."
    }
  ],
  "Game Show": [
    {
      question: "How do I participate in game shows?",
      answer: "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services."
    },
    {
      question: "Are there prizes for winners?",
      answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences."
    },
    {
      question: "Can children participate in game shows?",
      answer: "We have family game shows that welcome participants of all ages, as well as adult-only competitions."
    }
  ],
  "Movie Theater": [
    {
      question: "What movies are shown during the cruise?",
      answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program."
    },
    {
      question: "Is there a charge for movie tickets?",
      answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase."
    },
    {
      question: "Are the movies shown with subtitles?",
      answer: "English films are shown without subtitles. Foreign films may include English subtitles."
    }
  ],
  "Karaoke": [
    {
      question: "What songs are available for karaoke?",
      answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites."
    },
    {
      question: "Do I need to bring my own microphone?",
      answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience."
    },
    {
      question: "Can I sing duets with friends?",
      answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available."
    }
  ],
  "Magic Show": [
    {
      question: "Will I be called on stage during the magic show?",
      answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate."
    },
    {
      question: "Are magic shows suitable for young children?",
      answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages."
    },
    {
      question: "Can I learn magic tricks during the cruise?",
      answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability."
    }
  ],
  "Nightclub": [
    {
      question: "What is the dress code for the nightclub?",
      answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted."
    },
    {
      question: "What are the nightclub operating hours?",
      answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours."
    },
    {
      question: "Is there a minimum age for the nightclub?",
      answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+."
    }
  ]
};

// Get region for a city
function getRegionForCity(cityName) {
  const countryName = cityCountryMap[cityName] || "";
  const regionMap = {
    "United States": "North America",
    Canada: "North America", 
    Mexico: "North America",
    "United Kingdom": "Europe",
    France: "Europe",
    Spain: "Europe",
    Italy: "Europe",
    Germany: "Europe",
    Netherlands: "Europe",
    Norway: "Europe",
    Sweden: "Europe", 
    Denmark: "Europe",
    Finland: "Europe",
    Russia: "Europe",
    Japan: "Asia",
    China: "Asia",
    "South Korea": "Asia",
    Singapore: "Asia",
    Thailand: "Asia",
    Vietnam: "Asia",
    India: "Asia",
    Australia: "Oceania",
    "New Zealand": "Oceania",
    Brazil: "South America",
    Argentina: "South America",
    Chile: "South America",
    Uruguay: "South America",
    Peru: "South America",
    Colombia: "South America",
    Malta: "Europe",
    Ireland: "Europe",
  };

  return regionMap[countryName] || "Default";
}

// Generate entertainment operating hours
function generateEntertainmentHours(categoryType) {
  let startHour, endHour, description;

  switch (categoryType) {
    case "Movie Theater":
      startHour = getRandomInt(14, 16); // 2pm-4pm
      endHour = getRandomInt(23, 1); // 11pm-1am
      description = "Multiple showtimes throughout the day";
      break;
    case "Nightclub":
      startHour = getRandomInt(21, 22); // 9pm-10pm  
      endHour = getRandomInt(2, 4); // 2am-4am
      description = "Late night entertainment venue";
      break;
    case "Karaoke":
      startHour = getRandomInt(19, 20); // 7pm-8pm
      endHour = getRandomInt(1, 3); // 1am-3am
      description = "Evening karaoke sessions";
      break;
    default:
      startHour = getRandomInt(18, 20); // 6pm-8pm
      endHour = getRandomInt(22, 24); // 10pm-12am
      description = "Evening entertainment hours";
  }

  return {
    start: `${startHour.toString().padStart(2, "0")}:00`,
    end: endHour > 24 ? `0${(endHour - 24).toString()}:00` : `${endHour.toString().padStart(2, "0")}:00`,
    duration: `${endHour > startHour ? endHour - startHour : (24 - startHour) + endHour} hours`,
    description: description,
  };
}

// Generate deck and area location
function generateLocation() {
  const deck = getRandomInt(5, 15);
  const areas = [
    "Main Theater", "Atrium", "Pool Deck", "Upper Deck", "Forward Lounge",
    "Aft Lounge", "Midship Theater", "Sky Deck", "Observation Deck",
    "Entertainment Plaza", "Central Court", "Grand Ballroom"
  ];
  
  return {
    deck: deck,
    area: getRandomElement(areas)
  };
}

// Generate testimonials for a show
function generateTestimonials(showName, performer, categoryType, count = getRandomInt(5, 10)) {
  const testimonials = [];
  const templates = testimonialTemplates[categoryType] || testimonialTemplates["Live Music"];
  
  for (let i = 0; i < count; i++) {
    const fullName = getRandomName();
    const firstName = fullName.split(" ")[0];
    const gender = determineGenderFromName(firstName);
    
    // Select and customize template
    let quote = getRandomElement(templates);
    quote = quote.replace('{showName}', showName);
    quote = quote.replace('{performer}', performer);
    
    const testimonial = {
      quote: quote,
      author: fullName,
      title: getRandomElement(["Guest", "Cruise Passenger", "Traveler", "Vacationer"]),
      image: `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 85)}.jpg`,
      rating: getRandomInt(4, 5), // 4 or 5 stars
      date: `2024-${getRandomInt(1, 12).toString().padStart(2, "0")}-${getRandomInt(1, 28).toString().padStart(2, "0")}`
    };
    
    testimonials.push(testimonial);
  }
  
  return testimonials;
}

// Generate merchandise for a show
function generateMerchandise(categoryType, showName) {
  const categoryMerchandise = merchandiseByCategory[categoryType] || merchandiseByCategory["Live Music"];
  const selectedItems = getRandomItems(categoryMerchandise, getRandomInt(1, 3));
  
  return selectedItems.map(item => ({
    id: generateUniqueId(),
    name: item.name,
    description: item.description.replace('{showName}', showName),
    price: item.price + getRandomInt(-5, 10), // Add some price variation
    currency: "USD"
  }));
}

// Generate performer data
function generatePerformer(categoryType) {
  const specialties = performerSpecialties[categoryType] || performerSpecialties["Live Music"];
  const fullName = getRandomName();
  const firstName = fullName.split(" ")[0];
  const gender = determineGenderFromName(firstName);
  
  return {
    id: generateUniqueId(),
    firstName: firstName,
    lastName: fullName.split(" ")[1],
    role: getRandomElement(specialties),
    bio: `Professional ${getRandomElement(specialties).toLowerCase()} with years of cruise ship entertainment experience.`,
    imageUrl: `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 85)}.jpg`,
    contact: {
      contactEmail: generateRandomEmail("entertainment.velarivoyages.com")
    },
    yearsOfExperience: getRandomInt(3, 15),
    specialties: getRandomItems(specialties, getRandomInt(1, 3)),
    certifications: ["Professional Entertainment License", "Maritime Safety Certification"]
  };
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

// Generate entertainment categories for a vessel
function generateEntertainmentCategories(vessel, cityName, region) {
  const categories = [];
  
  // Determine how many categories based on vessel type
  const isLuxury = vessel.type.toLowerCase().includes("luxury") || vessel.type.toLowerCase().includes("vip");
  const categoryCount = isLuxury ? getRandomInt(6, 8) : getRandomInt(4, 6);
  
  const selectedTypes = getRandomItems(entertainmentTypes, categoryCount);
  
  selectedTypes.forEach(type => {
    const location = generateLocation();
    const category = {
      id: generateUniqueId(),
      vesselId: vessel.id,
      type: type,
      location: location,
      hasBar: getRandomBool(0.7), // 70% chance
      hasFoodService: getRandomBool(0.4), // 40% chance  
      hasAccessibleSeating: getRandomBool(0.8) // 80% chance
    };
    
    categories.push(category);
  });
  
  return categories;
}

// Generate entertainment shows for a category
function generateEntertainmentShows(category, vessel, cityName, region) {
  const showCount = getRandomInt(6, 10);
  const shows = [];
  const categoryShows = entertainmentShows[category.type] || entertainmentShows["Live Music"];
  
  for (let i = 0; i < showCount; i++) {
    const showName = getRandomElement(categoryShows.names);
    const description = getRandomElement(categoryShows.descriptions);
    const performer = generatePerformer(category.type);
    const hasMerchandise = getRandomBool(0.6); // 60% chance
    const hours = generateEntertainmentHours(category.type);
    
    const show = {
      id: generateUniqueId(),
      title: showName,
      description: description,
      tickets: {
        isRequired: getRandomBool(0.3), // 30% chance tickets required
        price: getRandomBool(0.3) ? getRandomInt(15, 45) : 0,
        currency: "USD"
      },
      isAdultOnly: getRandomBool(0.2), // 20% chance adults only
      duration: `${getRandomInt(60, 120)} minutes`,
      schedule: [
        {
          start: hours.start,
          end: hours.end, 
          duration: hours.duration,
          description: `${showName} performance times`
        }
      ],
      performers: [performer],
      testimonials: generateTestimonials(showName, `${performer.firstName} ${performer.lastName}`, category.type),
      hasVIPSeating: getRandomBool(0.4), // 40% chance
      hasAccessibleSeating: getRandomBool(0.9), // 90% chance
      hasMerchandise: hasMerchandise
    };
    
    // Add merchandise if hasMerchandise is true
    if (hasMerchandise) {
      show.merchandise = generateMerchandise(category.type, showName)[0]; // Single merchandise item
    }
    
    shows.push(show);
  }
  
  return shows;
}

// Generate entertainment data for a vessel  
function generateEntertainmentForVessel(vessel, cityName, region) {
  const categories = generateEntertainmentCategories(vessel, cityName, region);
  const entertainmentShows = [];
  
  categories.forEach(category => {
    const shows = generateEntertainmentShows(category, vessel, cityName, region);
    entertainmentShows.push({
      category: category,
      shows: shows
    });
  });
  
  return {
    categories: categories,
    entertainment: entertainmentShows
  };
}

// Create entertainment categories file content
function createEntertainmentCategoriesFileContent(categories) {
  const categoriesDataString = categories
    .map(
      (category) =>
        `  {
    id: "${category.id}",
    vesselId: "${category.vesselId}",
    type: "${category.type}",
    location: {
      deck: ${category.location.deck},
      area: "${category.location.area}",
    },
    hasBar: ${category.hasBar},
    hasFoodService: ${category.hasFoodService},
    hasAccessibleSeating: ${category.hasAccessibleSeating},
  }`
    )
    .join(",\n");

  return `// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
${categoriesDataString}
];
`;
}

// Create entertainment shows file content
function createEntertainmentShowsFileContent(categoryType, shows, categoryId) {
  const showsDataString = shows
    .map(
      (show) =>
        `  {
    id: "${categoryId}",
    category: "${categoryType}",
    name: "${show.title}",
    description: "${show.description}",
    imageUrl: "/images/entertainment/${categoryType.toLowerCase().replace(' ', '-')}-show.jpg",
    hours: ${JSON.stringify(show.schedule[0], null, 6).replace(/^/gm, '    ')},
    contact: {
      contactNumber: "+1-${getRandomInt(200, 999)}-${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}",
      contactEmail: "${generateRandomEmail('entertainment.velarivoyages.com')}",
    },
    shows: [{
      id: "${show.id}",
      title: "${show.title}",
      description: "${show.description}",
      tickets: {
        isRequired: ${show.tickets.isRequired},
        price: ${show.tickets.price},
        currency: "${show.tickets.currency}",
      },
      isAdultOnly: ${show.isAdultOnly},
      duration: "${show.duration}",
      schedule: [${JSON.stringify(show.schedule[0], null, 8).replace(/^/gm, '        ')}],
      performers: [${JSON.stringify(show.performers[0], null, 8).replace(/^/gm, '        ')}],
      testimonials: [
${show.testimonials
  .map(
    (testimonial) =>
      `        {
          quote: "${testimonial.quote}",
          author: "${testimonial.author}",
          title: "${testimonial.title}",
          image: "${testimonial.image}",
          rating: ${testimonial.rating},
          date: "${testimonial.date}",
        }`
  )
  .join(",\n")}
      ],
      hasVIPSeating: ${show.hasVIPSeating},
      hasAccessibleSeating: ${show.hasAccessibleSeating},
      hasMerchandise: ${show.hasMerchandise}${show.merchandise ? `,
      merchandise: ${JSON.stringify(show.merchandise, null, 8).replace(/^/gm, '      ')}` : ''}
    }],
    faqs: [
${getRandomItems(faqTemplates[categoryType] || faqTemplates["Live Music"], getRandomInt(3, 5))
  .map(
    (faq) =>
      `      {
        question: "${faq.question}",
        answer: "${faq.answer}",
      }`
  )
  .join(",\n")}
    ],
    isPopular: ${getRandomBool(0.3)}
  }`
    )
    .join(",\n");

  const fileNameSuffix = categoryType.toLowerCase().replace(/\s+/g, '-');

  return `// ${categoryType} entertainment shows
// This file contains ${categoryType.toLowerCase()} entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const ${formatKebabToCamelCase(fileNameSuffix)}Entertainment: Entertainment[] = [
${showsDataString}
];
`;
}

// Main function to generate entertainment files
async function generateEntertainmentFiles() {
  const entertainmentDir = path.join(
    __dirname,
    "..",
    "src",
    "lib", 
    "constants",
    "venues",
    "entertainment"
  );

  // Create base directory if it doesn't exist
  if (!fs.existsSync(entertainmentDir)) {
    fs.mkdirSync(entertainmentDir, { recursive: true });
    console.log(`📁 Created directory: ${entertainmentDir}`);
  }

  let filesCreated = 0;
  let filesAppended = 0;
  let filesSkipped = 0;

  console.log(`\n🚀 Processing ${cityFiles.length} cities...`);

  for (const city of cityFiles) {
    const vessels = getVesselDataForCity(city);
    if (vessels.length === 0) {
      console.log(`⚠️  Skipping ${city} - no vessels found`);
      continue;
    }

    const region = getRegionForCity(city);
    const cityDir = path.join(entertainmentDir, city);

    // Create city directory
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
      console.log(`📁 Created city directory: ${cityDir}`);
    }

    for (const vessel of vessels) {
      const vesselDir = path.join(cityDir, vessel.name.toLowerCase().replace(/\s+/g, '-'));
      
      // Create vessel directory
      if (!fs.existsSync(vesselDir)) {
        fs.mkdirSync(vesselDir, { recursive: true });
        console.log(`📁 Created vessel directory: ${vesselDir}`);
      }

      try {
        const entertainmentData = generateEntertainmentForVessel(vessel, city, region);

        // Create entertainment.ts file with categories
        const categoriesFilePath = path.join(vesselDir, 'entertainment.ts');
        const categoriesFileExists = fs.existsSync(categoriesFilePath);

        if (!categoriesFileExists || REWRITE_MODE || APPEND_MODE) {
          const categoriesContent = createEntertainmentCategoriesFileContent(entertainmentData.categories);
          fs.writeFileSync(categoriesFilePath, categoriesContent);
          
          if (categoriesFileExists) {
            console.log(`✅ Updated entertainment categories for ${vessel.name} in ${capitalize(city)}`);
            filesAppended++;
          } else {
            console.log(`✅ Created entertainment categories for ${vessel.name} in ${capitalize(city)}`);
            filesCreated++;
          }
        } else {
          filesSkipped++;
        }

        // Create individual entertainment show files for each category
        entertainmentData.entertainment.forEach(entertainmentCategory => {
          const categoryType = entertainmentCategory.category.type;
          const fileNameSuffix = categoryType.toLowerCase().replace(/\s+/g, '-');
          const showsFilePath = path.join(vesselDir, `${fileNameSuffix}-entertainment.ts`);
          const showsFileExists = fs.existsSync(showsFilePath);

          if (!showsFileExists || REWRITE_MODE || APPEND_MODE) {
            const showsContent = createEntertainmentShowsFileContent(
              categoryType, 
              entertainmentCategory.shows,
              entertainmentCategory.category.id
            );
            fs.writeFileSync(showsFilePath, showsContent);
            
            if (showsFileExists) {
              console.log(`✅ Updated ${categoryType} shows for ${vessel.name} in ${capitalize(city)}`);
              filesAppended++;
            } else {
              console.log(`✅ Created ${categoryType} shows for ${vessel.name} in ${capitalize(city)}`);
              filesCreated++;
            }
          } else {
            filesSkipped++;
          }
        });

      } catch (error) {
        console.error(`❌ Error processing ${vessel.name} in ${city}: ${error.message}`);
      }
    }
  }

  // Print summary
  console.log(`\n📊 Summary:`);
  console.log(`   Files created: ${filesCreated}`);
  if (APPEND_MODE) console.log(`   Files appended: ${filesAppended}`);
  console.log(`   Files skipped: ${filesSkipped}`);
  console.log(`\n🎉 Entertainment venue generation complete!`);
}

// Run the script
generateEntertainmentFiles().catch(console.error);