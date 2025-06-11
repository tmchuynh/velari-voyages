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
import { cityToRegionMap } from "./utils/geo-utils.mjs";
import {
  generateUniqueId,
  getRandomElement,
  getRandomItems,
  getRandomInt,
  getRandomBool,
  generateRandomEmail,
  generateRandomDate,
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
  }`,
);
console.log(
  `Will ${
    REWRITE_MODE
      ? "overwrite"
      : APPEND_MODE
        ? "append to"
        : "only create missing"
  } entertainment files`,
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
  "Nightclub",
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
      "Folk & Americana",
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
      "Traditional folk music with modern interpretations",
    ],
  },
  Dancing: {
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
      "Professional Dance Showcase",
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
      "Professional dancers performing spectacular choreographed routines",
    ],
  },
  Comedy: {
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
      "Clean Comedy Showcase",
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
      "Clean, wholesome comedy perfect for the entire family",
    ],
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
      "Pop Culture Quiz",
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
      "Test your knowledge of current pop culture trends",
    ],
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
      "Midnight Movie Screening",
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
      "Late-night cult classics and special screenings",
    ],
  },
  Karaoke: {
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
      "International Karaoke",
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
      "Songs in multiple languages for our international guests",
    ],
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
      "International Magic Acts",
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
      "World-class magicians from around the globe",
    ],
  },
  Nightclub: {
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
      "Dance Floor Competition",
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
      "Dance competitions with prizes and recognition",
    ],
  },
};

// Performer types and specialties
const performerSpecialties = {
  "Live Music": [
    "Vocalist",
    "Guitarist",
    "Pianist",
    "Drummer",
    "Saxophonist",
    "Violinist",
    "Bass Player",
    "Keyboardist",
    "Trumpeter",
    "Flutist",
  ],
  Dancing: [
    "Ballroom Dancer",
    "Latin Dancer",
    "Hip-Hop Dancer",
    "Contemporary Dancer",
    "Ballet Dancer",
    "Jazz Dancer",
    "Tap Dancer",
    "Choreographer",
  ],
  Comedy: [
    "Stand-Up Comedian",
    "Improv Actor",
    "Comedy Writer",
    "Sketch Performer",
    "Musical Comedian",
    "Storyteller",
  ],
  "Game Show": [
    "Game Show Host",
    "Assistant Host",
    "Trivia Expert",
    "Entertainment Coordinator",
  ],
  "Movie Theater": [
    "Film Curator",
    "Projectionist",
    "Theater Manager",
    "Film Critic",
  ],
  Karaoke: ["Karaoke Host", "DJ", "Vocal Coach", "Entertainment Coordinator"],
  "Magic Show": [
    "Magician",
    "Illusionist",
    "Mentalist",
    "Escape Artist",
    "Comedy Magician",
  ],
  Nightclub: [
    "DJ",
    "MC",
    "Dance Instructor",
    "Event Coordinator",
    "Lighting Technician",
  ],
};

// Merchandise by category
const merchandiseByCategory = {
  "Live Music": [
    {
      name: "Concert T-Shirt",
      description: "Official performance t-shirt with tour dates",
      price: 25,
    },
    {
      name: "Live Album CD",
      description: "Recording of tonight's performance",
      price: 15,
    },
    {
      name: "Artist Poster",
      description: "Signed poster of the performing artist",
      price: 20,
    },
    {
      name: "Music Playlist Download",
      description: "Digital download of tonight's setlist",
      price: 10,
    },
  ],
  Dancing: [
    {
      name: "Dance DVD",
      description: "Learn the moves from tonight's performance",
      price: 18,
    },
    {
      name: "Dance Shoes",
      description: "Professional ballroom dance shoes",
      price: 45,
    },
    {
      name: "Choreography Book",
      description: "Step-by-step dance instructions",
      price: 22,
    },
    {
      name: "Performance Photos",
      description: "Professional photos from the show",
      price: 12,
    },
  ],
  Comedy: [
    {
      name: "Comedy Special DVD",
      description: "Recording of tonight's comedy show",
      price: 16,
    },
    {
      name: "Comedian's Joke Book",
      description: "Collection of original jokes and stories",
      price: 14,
    },
    {
      name: "Comedy Show T-Shirt",
      description: "Funny t-shirt with show quotes",
      price: 20,
    },
    {
      name: "Autographed Photo",
      description: "Signed photo with the comedian",
      price: 15,
    },
  ],
  "Game Show": [
    {
      name: "Game Show T-Shirt",
      description: "Contestant t-shirt from the show",
      price: 18,
    },
    {
      name: "Trivia Book",
      description: "Collection of game show questions",
      price: 12,
    },
    {
      name: "Winner's Certificate",
      description: "Personalized participation certificate",
      price: 8,
    },
    {
      name: "Game Show Pen Set",
      description: "Official game show writing instruments",
      price: 10,
    },
  ],
  "Movie Theater": [
    {
      name: "Movie Poster",
      description: "Official poster from tonight's feature film",
      price: 15,
    },
    {
      name: "Popcorn Bucket",
      description: "Souvenir popcorn bucket",
      price: 12,
    },
    {
      name: "Theater Program",
      description: "Collector's edition program guide",
      price: 8,
    },
    {
      name: "Movie Trivia Cards",
      description: "Fun movie trivia card game",
      price: 14,
    },
  ],
  Karaoke: [
    {
      name: "Karaoke Microphone",
      description: "Professional karaoke microphone",
      price: 25,
    },
    {
      name: "Song Book",
      description: "Complete karaoke song catalog",
      price: 16,
    },
    {
      name: "Performance Recording",
      description: "Recording of your karaoke performance",
      price: 10,
    },
    {
      name: "Karaoke Star T-Shirt",
      description: "Show off your karaoke skills",
      price: 18,
    },
  ],
  "Magic Show": [
    {
      name: "Magic Trick Set",
      description: "Learn basic magic tricks at home",
      price: 30,
    },
    {
      name: "Magician's Wand",
      description: "Replica of the magician's wand",
      price: 20,
    },
    {
      name: "Magic Book",
      description: "Beginner's guide to magic tricks",
      price: 18,
    },
    {
      name: "Performance Photo",
      description: "Photo with the magician",
      price: 12,
    },
  ],
  Nightclub: [
    { name: "DJ Mix CD", description: "Tonight's DJ set on CD", price: 15 },
    {
      name: "Glow Accessories",
      description: "LED bracelets and necklaces",
      price: 8,
    },
    {
      name: "Club T-Shirt",
      description: "Official nightclub merchandise",
      price: 22,
    },
    {
      name: "VIP Pass Holder",
      description: "Souvenir VIP lanyard and pass holder",
      price: 10,
    },
  ],
};

// Testimonial templates by category
const testimonialTemplates = {
  "Live Music": [
    "The musical talent on this ship is absolutely incredible! {performer} delivered an unforgettable performance.",
    "What an amazing night of music! The {showName} show exceeded all my expectations.",
    "The live music scene on this cruise is world-class. {performer} is incredibly talented.",
    "I've been to many concerts, but this intimate setting made it extra special.",
    "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
    "This was the highlight of my cruise! Such professional and entertaining performers.",
  ],
  Dancing: [
    "The choreography was absolutely stunning! {performer} made it look effortless.",
    "I learned so much during the {showName} workshop. The instructors were patient and skilled.",
    "The energy in the room was electric! Everyone was dancing and having a blast.",
    "Professional level dancing with such grace and precision. Truly spectacular!",
    "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
    "I haven't danced like this in years! The {showName} event was so much fun.",
  ],
  Comedy: [
    "I laughed until my sides hurt! {performer} is hilarious and so entertaining.",
    "The {showName} show was the perfect way to end our evening. Great comedy!",
    "Clean, family-friendly humor that had everyone cracking up. Loved it!",
    "This comedian knows how to work a crowd. Interactive and genuinely funny.",
    "Best comedy show I've seen in years! {performer} had perfect timing.",
    "The whole family enjoyed this show. Humor that appeals to all ages.",
  ],
  "Game Show": [
    "What a fun interactive experience! The {showName} got everyone involved.",
    "I won a prize and had such a great time! The host {performer} was energetic and engaging.",
    "This game show brought out everyone's competitive spirit. So much fun!",
    "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
    "The trivia was challenging but fair. Loved testing my knowledge!",
    "Interactive entertainment at its best! The whole audience was participating.",
  ],
  "Movie Theater": [
    "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
    "The {showName} screening was wonderful. Love having a cinema on the ship!",
    "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
    "Family movie night was perfect! The kids loved it and so did the adults.",
    "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
    "The variety of movies shown caters to all tastes. Something for everyone!",
  ],
  Karaoke: [
    "I finally got to sing my favorite song! The {showName} event was so much fun.",
    "Great song selection and supportive audience. {performer} was an excellent host.",
    "Even though I can't sing, I had a blast! Everyone was so encouraging.",
    "The karaoke equipment was top-notch and the atmosphere was electric.",
    "This brought out my inner rock star! Such a fun and liberating experience.",
    "Perfect entertainment for a group. We all took turns and had amazing time.",
  ],
  "Magic Show": [
    "I still can't figure out how {performer} did those tricks! Absolutely mind-blowing.",
    "The {showName} show left me speechless. True artistry and skill on display.",
    "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
    "The close-up magic was incredible. {performer} has such talented hands.",
    "I was skeptical about magic shows, but this completely changed my mind.",
    "Interactive magic that made me feel like part of the show. Truly special experience.",
  ],
  Nightclub: [
    "The DJ, {performer}, really knew how to keep the dance floor packed all night!",
    "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
    "The {showName} party was incredible! Danced until the early morning hours.",
    "Fantastic sound system and the perfect mix of music. Had an amazing time!",
    "The energy was contagious and the music selection was spot-on. Loved every minute.",
    "Best night out on the ship! The nightclub scene here is world-class.",
  ],
};

// FAQ templates by category
const faqTemplates = {
  "Live Music": [
    {
      question: "Do I need tickets for live music performances?",
      answer:
        "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
    },
    {
      question: "Can I request songs from the performers?",
      answer:
        "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
    },
    {
      question: "Are the live music venues suitable for all ages?",
      answer:
        "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
    },
  ],
  Dancing: [
    {
      question: "Do I need dance experience to participate?",
      answer:
        "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
    },
    {
      question: "Should I bring special dance shoes?",
      answer:
        "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
    },
    {
      question: "Are dance lessons included in the cruise fare?",
      answer:
        "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
    },
  ],
  Comedy: [
    {
      question: "Is the comedy show appropriate for children?",
      answer:
        "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
    },
    {
      question: "Can I interact with the comedians?",
      answer:
        "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
    },
    {
      question: "Do I need to reserve seats for comedy shows?",
      answer:
        "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
    },
  ],
  "Game Show": [
    {
      question: "How do I participate in game shows?",
      answer:
        "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services.",
    },
    {
      question: "Are there prizes for winners?",
      answer:
        "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
    },
    {
      question: "Can children participate in game shows?",
      answer:
        "We have family game shows that welcome participants of all ages, as well as adult-only competitions.",
    },
  ],
  "Movie Theater": [
    {
      question: "What movies are shown during the cruise?",
      answer:
        "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
    },
    {
      question: "Is there a charge for movie tickets?",
      answer:
        "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
    },
    {
      question: "Are the movies shown with subtitles?",
      answer:
        "English films are shown without subtitles. Foreign films may include English subtitles.",
    },
  ],
  Karaoke: [
    {
      question: "What songs are available for karaoke?",
      answer:
        "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
    },
    {
      question: "Do I need to bring my own microphone?",
      answer:
        "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
    },
    {
      question: "Can I sing duets with friends?",
      answer:
        "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
    },
  ],
  "Magic Show": [
    {
      question: "Will I be called on stage during the magic show?",
      answer:
        "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
    },
    {
      question: "Are magic shows suitable for young children?",
      answer:
        "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
    },
    {
      question: "Can I learn magic tricks during the cruise?",
      answer:
        "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
    },
  ],
  Nightclub: [
    {
      question: "What is the dress code for the nightclub?",
      answer:
        "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
    },
    {
      question: "What are the nightclub operating hours?",
      answer:
        "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
    },
    {
      question: "Is there a minimum age for the nightclub?",
      answer:
        "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
    },
  ],
};

// Base FAQ templates with placeholders for customization
const baseFaqTemplates = {
  "Live Music": {
    ticketing: [
      "Do I need tickets for {categoryType} performances?",
      "How do I reserve seats for {showName}?",
      "Are there VIP tickets available for live music shows?",
      "Can I get refunds if I miss a {categoryType} show?",
    ],
    participation: [
      "Can I request songs from the {performerRole}?",
      "Do you accept song requests for {categoryType} performances?",
      "Can I dedicate a song to someone during {showName}?",
      "How do I submit music requests to performers?",
    ],
    ageRestrictions: [
      "Are {categoryType} venues suitable for all ages?",
      "Do you have family-friendly music performances?",
      "What are the age restrictions for evening shows?",
      "Are children welcome at {categoryType} events?",
    ],
    venue: [
      "What is the capacity of the {venueArea}?",
      "Is the {venueArea} accessible for guests with mobility issues?",
      "Does the {categoryType} venue have a bar?",
      "What time do {categoryType} performances typically start?",
    ],
    scheduling: [
      "How many {categoryType} performances are scheduled during my {cruiseDuration} cruise?",
      "What's the performance schedule for {showName} during the {cruiseDuration} voyage?",
      "Are there daily {categoryType} shows throughout the {cruiseDuration} trip?",
      "How often does {showName} perform during a {cruiseDuration} cruise?",
    ],
  },

  Dancing: {
    skillLevel: [
      "Do I need dance experience for {categoryType} events?",
      "Are {categoryType} lessons suitable for beginners?",
      "What if I've never done {categoryType} before?",
      "Do you offer different skill levels for dance instruction?",
    ],
    equipment: [
      "Should I bring special {categoryType} shoes?",
      "What should I wear to {categoryType} events?",
      "Are dance shoes available for purchase onboard?",
      "Do I need special attire for {showName}?",
    ],
    instruction: [
      "Are {categoryType} lessons included in the cruise fare?",
      "Do you offer private {categoryType} instruction?",
      "How long are the {categoryType} lessons?",
      "Can I get personalized dance coaching during {showName}?",
    ],
    social: [
      "Can I participate without a dance partner?",
      "Do you help match dance partners for {categoryType}?",
      "Are there social {categoryType} events?",
      "What if I'm traveling solo and want to join {categoryType} activities?",
    ],
    progression: [
      "Can I learn multiple dance styles during my {cruiseDuration} cruise?",
      "Are there progressive {categoryType} lessons throughout the {cruiseDuration} voyage?",
      "How many {categoryType} events happen during a {cruiseDuration} cruise?",
      "Do dance skills build throughout the {cruiseDuration} journey?",
    ],
  },

  Comedy: {
    content: [
      "Is the {showName} show appropriate for children?",
      "What type of humor can I expect at {categoryType} shows?",
      "Are there clean comedy options available?",
      "Do you have both family and adult comedy performances?",
    ],
    interaction: [
      "Will I be called on stage during {showName}?",
      "Can I interact with comedians after the show?",
      "Do {categoryType} shows include audience participation?",
      "What if I don't want to be part of the {categoryType} act?",
    ],
    scheduling: [
      "How many {categoryType} shows are there per cruise?",
      "Do I need to reserve seats for {showName}?",
      "What time do {categoryType} performances start?",
      "Are there multiple showtimes for popular {categoryType} acts?",
    ],
  },

  "Game Show": {
    participation: [
      "How do I sign up to participate in {showName}?",
      "What types of games are featured in {categoryType} events?",
      "Can families participate together in {categoryType} shows?",
      "Do I need to register in advance for {categoryType} participation?",
    ],
    prizes: [
      "What prizes can I win at {categoryType} events?",
      "Are there different prize levels for {showName}?",
      "Do {categoryType} winners get cruise credits?",
      "What happens if I win multiple {categoryType} games?",
    ],
    format: [
      "How long do {categoryType} shows typically last?",
      "What's the format of {showName}?",
      "How many contestants participate in each {categoryType} show?",
      "Are {categoryType} games based on luck or skill?",
    ],
  },

  "Movie Theater": {
    selection: [
      "What movies are shown during my {cruiseDuration} cruise?",
      "Do you show current releases in the {venueArea}?",
      "Are there themed movie nights in the {categoryType}?",
      "Can I request specific films for {showName} screenings?",
    ],
    accessibility: [
      "Are {categoryType} screenings captioned?",
      "Does the {venueArea} have wheelchair accessible seating?",
      "Are there audio descriptions available for {categoryType} films?",
      "Do you offer assisted listening devices for movies?",
    ],
    amenities: [
      "Can I bring snacks to the {categoryType}?",
      "Is there a concession stand at the {venueArea}?",
      "Are beverages allowed in the {categoryType}?",
      "What refreshments are available during {showName}?",
    ],
    programming: [
      "How many different movies will be shown during my {cruiseDuration} cruise?",
      "Do you change the movie selection throughout the {cruiseDuration} voyage?",
      "What's the movie schedule for a {cruiseDuration} cruise?",
      "Are there special movie events during {cruiseDuration} cruises?",
    ],
  },

  Karaoke: {
    songLibrary: [
      "What songs are available for {categoryType}?",
      "Do you have {musicGenre} songs for karaoke?",
      "Can I request new songs be added to the {categoryType} library?",
      "Are there songs in multiple languages for {categoryType}?",
    ],
    participation: [
      "Do I need to sign up in advance for {categoryType}?",
      "Can I sing duets during {showName}?",
      "What if I'm too nervous to sing alone at {categoryType}?",
      "Are there group {categoryType} sessions?",
    ],
    equipment: [
      "Do you provide microphones for {categoryType}?",
      "Is the {categoryType} sound system professional quality?",
      "Can I connect my phone to the {categoryType} system?",
      "Are there backup singers available for {showName}?",
    ],
  },

  "Magic Show": {
    participation: [
      "Will I be selected as a volunteer for {showName}?",
      "Can I decline participation in {categoryType} audience interaction?",
      "What should I expect if chosen for a {categoryType} trick?",
      "Are {categoryType} volunteer roles suitable for children?",
    ],
    content: [
      "What type of magic is featured in {showName}?",
      "Are {categoryType} shows suitable for young children?",
      "Do you have both close-up and stage magic in {categoryType}?",
      "What makes {showName} different from other magic shows?",
    ],
    learning: [
      "Can I learn magic tricks during the cruise?",
      "Do {categoryType} performers offer workshops?",
      "Are magic supplies available for purchase after {showName}?",
      "Can children learn simple tricks at {categoryType} events?",
    ],
  },

  Nightclub: {
    dressCode: [
      "What's the dress code for {venueArea}?",
      "Can I wear casual clothes to {categoryType} events?",
      "Are there different dress requirements for {showName}?",
      "What should I avoid wearing to the {categoryType}?",
    ],
    agePolicy: [
      "What's the minimum age for {categoryType} entry?",
      "Are there family hours at the {venueArea}?",
      "Do you have 21+ only events in the {categoryType}?",
      "Can teenagers attend early {categoryType} events?",
    ],
    music: [
      "What type of music is played at {categoryType} events?",
      "Can I request songs from the DJ at {showName}?",
      "Are there themed music nights in the {categoryType}?",
      "Do you have live DJs for all {categoryType} events?",
    ],
  },
};

function getCruiseDataForCity(cityName) {
  const cruiseFilePath = path.join(
    __dirname,
    "..",
    "..",
    "src",
    "lib",
    "constants",
    "cruises",
    "cruises",
    `${cityName}-cruises.ts`,
  );

  if (!fs.existsSync(cruiseFilePath)) {
    if (DEBUG_MODE) {
      console.log(`⚠️  No cruise file found for ${cityName}`);
    }
    return [];
  }

  try {
    const cruiseFileContent = fs.readFileSync(cruiseFilePath, "utf8");
    const cruises = [];

    // Extract cruise data using regex - focusing on vesselId and totalDuration
    const cruisePattern =
      /\{\s*id:\s*"([^"]+)",\s*vesselId:\s*"([^"]+)",[\s\S]*?totalDuration:\s*"([^"]+)",[\s\S]*?\}/g;

    let match;
    while ((match = cruisePattern.exec(cruiseFileContent)) !== null) {
      cruises.push({
        id: match[1],
        vesselId: match[2],
        totalDuration: match[3],
      });
    }

    if (DEBUG_MODE) {
      console.log(`✅ Found ${cruises.length} cruises for ${cityName}`);
    }

    return cruises;
  } catch (error) {
    console.warn(
      `⚠️  Could not read cruise file for ${cityName}: ${error.message}`,
    );
    return [];
  }
}

// Context-aware FAQ answer generator
const contextualAnswers = {
  "Live Music": {
    ticketing: [
      (context) => {
        const { hasTickets, ticketPrice, categoryType } = context;
        if (!hasTickets) {
          return `All ${categoryType.toLowerCase()} performances are included in your cruise fare. Simply arrive early to secure the best seats - no reservations needed!`;
        }
        return `${categoryType} shows require advance tickets at $${ticketPrice} per person. Book early through Guest Services or the ship's mobile app to guarantee your spot.`;
      },
      (context) => {
        const { hasTickets, ticketPrice, categoryType } = context;
        if (!hasTickets) {
          return `Great news! ${categoryType.toLowerCase()} events are complimentary for all guests. We recommend arriving 15-20 minutes before showtime for optimal seating.`;
        }
        return `Premium ${categoryType.toLowerCase()} experiences are ticketed at $${ticketPrice}. Tickets can be purchased at the Guest Services desk or reserved online through your cruise account.`;
      },
      (context) => {
        const { hasTickets, ticketPrice, categoryType } = context;
        if (!hasTickets) {
          return `No tickets required! ${categoryType.toLowerCase()} performances are part of your cruise experience. Seating is first-come, first-served.`;
        }
        return `Special ${categoryType.toLowerCase()} performances require tickets priced at $${ticketPrice} each. Visit Guest Services to check availability and make reservations.`;
      },
    ],

    venue: [
      (context) => {
        const { hasBar, capacity, venueArea, cruiseDuration } = context;
        return `The ${venueArea} ${hasBar ? "features a sophisticated bar with craft cocktails and" : ""} comfortably seats ${capacity || "up to 250"} guests. During your ${cruiseDuration} cruise, we host multiple performances with state-of-the-art acoustics.`;
      },
      (context) => {
        const { hasBar, capacity, venueArea } = context;
        return `Our ${venueArea} offers an intimate setting for ${capacity || "200"} guests, ${hasBar ? "complete with full beverage service and" : "featuring"} exceptional sound quality and unobstructed views.`;
      },
      (context) => {
        const { hasBar, capacity, venueArea } = context;
        return `Experience live music in our beautifully designed ${venueArea}, accommodating ${capacity || "180"} guests ${hasBar ? "with premium bar service available throughout the performance" : "in a comfortable, acoustically optimized environment"}.`;
      },
    ],

    participation: [
      (context) => {
        const { categoryType, performerRole } = context;
        return `Absolutely! Our ${performerRole.toLowerCase()}s love taking requests. Feel free to approach them during breaks or submit requests to our entertainment staff.`;
      },
      (context) => {
        const { categoryType, performerRole } = context;
        return `Song requests are welcome and encouraged! You can submit requests in advance at Guest Services or speak directly with the ${performerRole.toLowerCase()} before the show.`;
      },
      (context) => {
        const { categoryType, showName } = context;
        return `${showName} performers are happy to accommodate requests when possible. Submit your favorites early in the cruise for the best chance of hearing them performed.`;
      },
    ],

    scheduling: [
      (context) => {
        const { categoryType, cruiseDuration, showName } = context;
        const dayCount = parseInt(cruiseDuration.split(" ")[0]) || 7;
        const performanceCount = Math.floor(dayCount * 0.6); // Roughly 60% of days
        return `During your ${cruiseDuration} cruise, ${showName} typically performs ${performanceCount} times, ensuring you have multiple opportunities to enjoy our ${categoryType.toLowerCase()} entertainment.`;
      },
      (context) => {
        const { categoryType, cruiseDuration } = context;
        return `Our ${categoryType.toLowerCase()} programming runs throughout your ${cruiseDuration} voyage with performances scheduled on most evenings, giving you plenty of entertainment options.`;
      },
    ],
  },

  Dancing: {
    skillLevel: [
      (context) => {
        const { categoryType } = context;
        return `No experience necessary! Our ${categoryType.toLowerCase()} sessions are designed for all skill levels, from complete beginners to seasoned dancers. Professional instructors provide personalized guidance.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Whether you're a first-timer or experienced dancer, our ${categoryType.toLowerCase()} events welcome everyone. We offer beginner-friendly instruction alongside more advanced choreography.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Don't worry about experience! Our ${categoryType.toLowerCase()} activities are structured to accommodate dancers at every level, with patient instructors who make learning fun and stress-free.`;
      },
    ],

    equipment: [
      (context) => {
        const { categoryType } = context;
        return `Comfortable closed-toe shoes are perfect for ${categoryType.toLowerCase()} activities. Specialized dance shoes are available for purchase in our onboard boutique if you'd like to invest in them.`;
      },
      (context) => {
        const { categoryType } = context;
        return `We recommend wearing shoes with smooth soles for ${categoryType.toLowerCase()} events. Our ship's shops carry dance shoes, or you can dance in comfortable dress shoes.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Any comfortable shoes work for ${categoryType.toLowerCase()}! Athletic shoes are fine for casual sessions, though dance-specific footwear enhances the experience and is available onboard.`;
      },
    ],

    social: [
      (context) => {
        const { categoryType } = context;
        return `Solo travelers are very welcome! Our dance hosts and instructors help pair guests for partner dances, and many ${categoryType.toLowerCase()} activities work perfectly for individuals.`;
      },
      (context) => {
        const { categoryType } = context;
        return `No partner required! We have dedicated dance hosts to partner with solo guests, and our ${categoryType.toLowerCase()} events include many group dances and solo opportunities.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Traveling alone is no problem for ${categoryType.toLowerCase()} events! Our professional dance staff ensures everyone has partners when needed, and we foster a welcoming, inclusive atmosphere.`;
      },
    ],

    progression: [
      (context) => {
        const { categoryType, cruiseDuration } = context;
        const dayCount = parseInt(cruiseDuration.split(" ")[0]) || 7;
        const lessonCount = Math.floor(dayCount * 0.8); // Most days have lessons
        return `Your ${cruiseDuration} cruise includes approximately ${lessonCount} ${categoryType.toLowerCase()} sessions, allowing you to progress from beginner to intermediate level during your voyage.`;
      },
    ],
  },

  Comedy: {
    content: [
      (context) => {
        const { isAdultOnly, showName } = context;
        if (isAdultOnly) {
          return `${showName} features mature content and language intended for adult audiences (18+). We also offer family-friendly comedy shows throughout your cruise for all-ages entertainment.`;
        }
        return `${showName} is carefully curated for family audiences, featuring clever, clean humor that entertains guests of all ages without compromising on laughs.`;
      },
      (context) => {
        const { isAdultOnly, showName } = context;
        if (isAdultOnly) {
          return `This adults-only ${showName} includes edgier humor and themes suitable for mature audiences. Check your daily program for our family-appropriate comedy options as well.`;
        }
        return `Our ${showName} delivers hilarious, wholesome entertainment perfect for families, featuring professional comedians skilled in all-ages humor.`;
      },
      (context) => {
        const { isAdultOnly, showName } = context;
        if (isAdultOnly) {
          return `${showName} is designed for guests 18 and older, featuring bold comedy and adult themes. We balance our comedy lineup with shows suitable for the whole family.`;
        }
        return `${showName} provides laugh-out-loud entertainment that's appropriate for everyone, from kids to grandparents, without sacrificing comedic quality.`;
      },
    ],

    interaction: [
      (context) => {
        const { showName } = context;
        return `While ${showName} may include audience interaction, participation is always voluntary. Our comedians are respectful and will honor your preference to simply enjoy the show as a spectator.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Audience participation in ${categoryType.toLowerCase()} shows is completely optional. Simply indicate to our staff if you prefer not to participate, and they'll ensure you can enjoy without pressure.`;
      },
      (context) => {
        const { showName } = context;
        return `Don't worry about being put on the spot! ${showName} comedians are professionals who read the room well and only involve willing participants. You can always politely decline.`;
      },
    ],
  },

  "Game Show": {
    participation: [
      (context) => {
        const { showName } = context;
        return `Join ${showName} by simply attending and volunteering when contestants are called. Some shows also accept advance registration at the Guest Services desk starting the day before.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Participation in ${categoryType.toLowerCase()} events is easy! Arrive early, raise your hand when volunteers are requested, or sign up in advance at Guest Services for guaranteed spots.`;
      },
      (context) => {
        const { showName } = context;
        return `To be part of ${showName}, attend the show and express interest when participants are selected. Early registration is sometimes available - check with Guest Services for details.`;
      },
    ],

    prizes: [
      (context) => {
        const { categoryType } = context;
        return `${categoryType} winners enjoy fantastic prizes including onboard credits, specialty dining certificates, spa treatments, shore excursion discounts, and exclusive merchandise.`;
      },
      (context) => {
        const { showName } = context;
        return `${showName} offers exciting prizes ranging from cruise credits and premium dining experiences to logo merchandise, wine packages, and future cruise discounts.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Prize packages for ${categoryType.toLowerCase()} events include valuable cruise credits, specialty restaurant vouchers, spa services, beverage packages, and unique souvenirs.`;
      },
    ],

    format: [
      (context) => {
        const { showName } = context;
        return `${showName} typically runs 45-60 minutes with multiple rounds, keeping energy high and giving several guests chances to participate and win throughout the show.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Most ${categoryType.toLowerCase()} events last about an hour, featuring multiple games and opportunities for different guests to participate, ensuring everyone stays engaged.`;
      },
      (context) => {
        const { showName } = context;
        return `${showName} is structured as an interactive hour-long experience with various game segments, allowing multiple contestants to participate while keeping the audience entertained throughout.`;
      },
    ],
  },

  "Movie Theater": {
    selection: [
      (context) => {
        const { categoryType, cruiseDuration } = context;
        return `During your ${cruiseDuration} cruise, our ${categoryType.toLowerCase()} features a diverse lineup including recent blockbusters, timeless classics, family favorites, and critically acclaimed films updated regularly.`;
      },
      (context) => {
        const { venueArea, cruiseDuration } = context;
        return `Throughout your ${cruiseDuration} journey, the ${venueArea} showcases a carefully curated selection of current releases, beloved classics, international films, and family-friendly options.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Our ${categoryType.toLowerCase()} programming includes the latest Hollywood releases, classic cinema, animated features, and documentary selections, ensuring something for every movie lover.`;
      },
    ],

    accessibility: [
      (context) => {
        const { venueArea } = context;
        return `The ${venueArea} is fully accessible with wheelchair-friendly seating, closed captioning available upon request, and assistive listening devices for guests with hearing impairments.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Our ${categoryType.toLowerCase()} offers comprehensive accessibility including reserved wheelchair spaces, audio descriptions for visually impaired guests, and captioning services for all screenings.`;
      },
      (context) => {
        const { venueArea } = context;
        return `${venueArea} accessibility features include designated wheelchair seating areas, assistive listening systems, closed captioning options, and staff assistance for guests with special needs.`;
      },
    ],

    amenities: [
      (context) => {
        const { venueArea } = context;
        return `${venueArea} amenities include comfortable stadium seating, premium sound systems, climate control, and a concession area offering popcorn, candy, and beverages during screenings.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Enjoy ${categoryType.toLowerCase()} comfort with plush seating, state-of-the-art projection and sound, perfect temperature control, and classic movie snacks available for purchase.`;
      },
      (context) => {
        const { venueArea } = context;
        return `The ${venueArea} provides a premium cinema experience with ergonomic seating, surround sound, optimal lighting, and a selection of movie theater treats and beverages.`;
      },
    ],

    programming: [
      (context) => {
        const { cruiseDuration, categoryType } = context;
        const dayCount = parseInt(cruiseDuration.split(" ")[0]) || 7;
        const movieCount = Math.min(dayCount * 2, 20); // Up to 2 movies per day, max 20
        return `Throughout your ${cruiseDuration} cruise, our ${categoryType.toLowerCase()} features approximately ${movieCount} different films, ensuring fresh entertainment options throughout your voyage.`;
      },
    ],
  },

  Karaoke: {
    songLibrary: [
      (context) => {
        const { categoryType } = context;
        return `Our extensive ${categoryType.toLowerCase()} collection features thousands of songs spanning all genres, decades, and languages, from current chart-toppers to timeless classics, updated regularly with guest requests.`;
      },
      (context) => {
        return `The karaoke library includes an impressive variety of music: pop, rock, country, R&B, international hits, show tunes, and classics, with new songs added based on popular demand and current trends.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Choose from our comprehensive ${categoryType.toLowerCase()} database featuring music in multiple languages, every genre imaginable, and songs from the 1950s to today's hottest hits.`;
      },
    ],

    participation: [
      (context) => {
        const { showName } = context;
        return `${showName} welcomes walk-in participants! Sign up when you arrive, or reserve your spot in advance at Guest Services. Group performances and duets are especially popular.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Join ${categoryType.toLowerCase()} anytime during open sessions. No advance signup required, though you can reserve slots at Guest Services. Solo, duet, and group performances all welcome!`;
      },
      (context) => {
        const { categoryType } = context;
        return `${categoryType} participation is easy and flexible - show up and add your name to the list, or book ahead through Guest Services for busy nights. All skill levels encouraged!`;
      },
    ],
  },

  "Magic Show": {
    participation: [
      (context) => {
        const { showName } = context;
        return `Audience participation in ${showName} is completely voluntary. Our magicians are skilled at reading comfort levels and will always respect your preference to enjoy the show from your seat.`;
      },
      (context) => {
        const { categoryType } = context;
        return `While ${categoryType.toLowerCase()} shows often include audience interaction, participation is never mandatory. Simply signal to our staff if you prefer to watch rather than participate.`;
      },
      (context) => {
        const { showName } = context;
        return `${showName} volunteers are always willing participants. Our magicians create a comfortable environment where you can decline participation while still enjoying the full entertainment experience.`;
      },
    ],

    content: [
      (context) => {
        const { showName } = context;
        return `${showName} features a blend of classic illusions, modern magic techniques, mind-bending mentalism, and comedy magic, creating an entertaining experience that amazes guests of all ages.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Our ${categoryType.toLowerCase()} performances combine traditional stage magic with contemporary illusions, close-up magic, and interactive elements that engage and mystify audiences.`;
      },
      (context) => {
        const { showName } = context;
        return `${showName} showcases diverse magical arts including sleight of hand, grand illusions, escape artistry, and mentalism, performed by world-class magicians with international experience.`;
      },
    ],
  },

  Nightclub: {
    dressCode: [
      (context) => {
        const { venueArea } = context;
        return `${venueArea} maintains an upscale dress code: collared shirts, dress pants, and closed-toe shoes required. No swimwear, shorts, tank tops, or flip-flops permitted after 6 PM.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Our ${categoryType.toLowerCase()} enforces smart casual to formal attire: dress shirts, slacks, dresses, and appropriate footwear. Casual wear like t-shirts and sandals aren't permitted during evening hours.`;
      },
      (context) => {
        const { venueArea } = context;
        return `${venueArea} dress expectations include business casual or formal wear: button-down shirts, nice pants or dresses, and proper shoes. Resort casual attire is not accepted for nighttime events.`;
      },
    ],

    agePolicy: [
      (context) => {
        const { categoryType, hasEarlyHours } = context;
        return `The ${categoryType.toLowerCase()} welcomes guests 18+ during standard hours. ${hasEarlyHours ? "Family hours (6-8 PM) accommodate all ages with age-appropriate music and activities." : "Some special events may require guests to be 21 years or older."}`;
      },
      (context) => {
        const { venueArea, hasEarlyHours } = context;
        return `${venueArea} age policy: 18+ for regular evening hours. ${hasEarlyHours ? "Earlier family-friendly sessions welcome guests of all ages with supervised activities." : "Certain premium events may have a 21+ age requirement."}`;
      },
      (context) => {
        const { categoryType, hasEarlyHours } = context;
        return `Standard ${categoryType.toLowerCase()} access requires guests to be 18 or older. ${hasEarlyHours ? "Special family sessions earlier in the evening include all-ages entertainment and activities." : "Select adult-only events may require participants to be 21+."}`;
      },
    ],

    music: [
      (context) => {
        const { categoryType } = context;
        return `${categoryType} events feature diverse musical styles including current pop hits, classic dance music, electronic dance music, and themed nights with specific genres like retro, Latin, or hip-hop.`;
      },
      (context) => {
        const { showName } = context;
        return `${showName} showcases dynamic music programming: top 40 hits, dance remixes, classic party anthems, and special theme nights featuring everything from 80s hits to Latin rhythms.`;
      },
      (context) => {
        const { categoryType } = context;
        return `Our ${categoryType.toLowerCase()} music selection spans current chart-toppers, timeless dance classics, electronic beats, and themed evenings celebrating specific decades or musical styles.`;
      },
    ],
  },
};

// Updated function to generate context-aware FAQs with cruise data
export function generateCustomFAQs(
  entertainmentShow,
  category,
  vessel,
  cityName,
) {
  const categoryType = category.type;
  const templates = baseFaqTemplates[categoryType];

  if (!templates) {
    console.warn(`No FAQ templates found for category: ${categoryType}`);
    return [];
  }

  // Get cruise data for the city to find duration
  const cruises = getCruiseDataForCity(cityName);
  const vesselCruises = cruises.filter(
    (cruise) => cruise.vesselId === vessel.id,
  );
  const cruiseDuration =
    vesselCruises.length > 0
      ? getRandomElement(vesselCruises).totalDuration
      : getRandomElement(["7 days", "10 days", "14 days"]); // fallback

  const context = {
    categoryType,
    showName: entertainmentShow.title,
    venueArea: category.location.area,
    hasBar: category.hasBar,
    hasTickets: entertainmentShow.tickets.isRequired,
    ticketPrice: entertainmentShow.tickets.price,
    isAdultOnly: entertainmentShow.isAdultOnly,
    performerRole: entertainmentShow.performers[0]?.role || "performer",
    vesselType: vessel.type,
    capacity: vessel.capacity,
    hasEarlyHours: getRandomBool(0.4),
    cruiseDuration: cruiseDuration, // Now using actual cruise duration
    cityName: cityName,
    region: cityToRegionMap[cityName] || "International Waters",
  };

  const faqs = [];

  const showsDataString = shows
    .map((show) => {
      // Generate custom FAQs for this specific show with cruise data
      const customFaqs = generateCustomFAQs(show, category, vessel, cityName);

      return `  {
  id: "${categoryId}",
  category: "${categoryType}",
  name: "${show.title}",
  description: "${show.description}",
  // ...existing show properties...
  faqs: [
${customFaqs
  .map(
    (faq) =>
      `      {
        question: "${faq.question}",
        answer: "${faq.answer}",
      }`,
  )
  .join(",\n")}
    ],
    isPopular: ${getRandomBool(0.3)}
  }`;
    })
    .join(",\n");
  const templateCategories = Object.keys(templates);

  // Select 3-5 template categories for variety
  const selectedCategories = getRandomItems(
    templateCategories,
    getRandomInt(3, 5),
  );

  selectedCategories.forEach((templateCategory) => {
    const categoryTemplates = templates[templateCategory];
    const selectedQuestion = getRandomElement(categoryTemplates);

    // Replace placeholders in question
    let question = selectedQuestion;
    Object.keys(context).forEach((key) => {
      const placeholder = `{${key}}`;
      if (question.includes(placeholder)) {
        question = question.replace(new RegExp(placeholder, "g"), context[key]);
      }
    });

    // Generate contextual answer using random variant
    let answer;
    const answerVariants = contextualAnswers[categoryType]?.[templateCategory];
    if (answerVariants && Array.isArray(answerVariants)) {
      const selectedVariant = getRandomElement(answerVariants);
      answer = selectedVariant(context);
    } else {
      // Fallback to generic answer
      answer = generateGenericAnswer(question, context);
    }

    faqs.push({ question, answer });
  });

  return faqs;
}

// Enhanced generic answer generator with variants
function generateGenericAnswer(question, context) {
  const { categoryType, showName } = context;

  const genericVariants = {
    age: [
      `${showName} welcomes guests of all ages unless specifically noted as adults-only. Check your daily program for age recommendations and family-friendly alternatives.`,
      `Most ${categoryType.toLowerCase()} events are suitable for all ages. Adult-only shows are clearly marked in the daily schedule with alternative family options available.`,
      `${showName} is generally appropriate for all guests. When age restrictions apply, they're clearly indicated, and we always offer family-friendly alternatives.`,
    ],
    tickets: [
      `Most ${categoryType.toLowerCase()} events are complimentary for all guests. Premium experiences may require tickets available through Guest Services with advance booking recommended.`,
      `${categoryType} activities are typically included in your cruise fare. Special performances requiring tickets are noted in advance with pricing and availability at Guest Services.`,
      `The majority of ${categoryType.toLowerCase()} entertainment is complimentary. Ticketed events are premium experiences available for purchase at Guest Services or through the ship's app.`,
    ],
    schedule: [
      `${categoryType} event schedules vary by day and are updated in your daily program and the ship's mobile app. Times may change due to weather or port schedules.`,
      `Check your daily program or the ship's app for current ${categoryType.toLowerCase()} schedules. We recommend confirming times as they may adjust based on itinerary changes.`,
      `${showName} times are published in the daily program and ship's app. Schedules are subject to change, so please verify current times before attending.`,
    ],
  };

  if (
    question.toLowerCase().includes("age") ||
    question.toLowerCase().includes("children")
  ) {
    return getRandomElement(genericVariants.age);
  }

  if (
    question.toLowerCase().includes("ticket") ||
    question.toLowerCase().includes("reservation")
  ) {
    return getRandomElement(genericVariants.tickets);
  }

  if (
    question.toLowerCase().includes("time") ||
    question.toLowerCase().includes("schedule")
  ) {
    return getRandomElement(genericVariants.schedule);
  }

  return `For specific information about ${showName}, please contact Guest Services or visit the ${categoryType.toLowerCase()} venue directly for the most current details.`;
}

function createEntertainmentShowsFileContent(
  categoryType,
  shows,
  categoryId,
  vessel,
  category,
  cityName,
) {
  const showsDataString = shows
    .map((show) => {
      // Generate custom FAQs for this specific show with cruise data
      const customFaqs = generateCustomFAQs(show, category, vessel, cityName);

      // Update the show's faqs
      show.faqs = customFaqs;

      return `  {
    id: "${show.id}",
    categoryId: "${categoryId}",
    title: "${show.title}",
    description: "${show.description}",
    duration: ${show.duration},
    performers: [
${show.performers
  .map(
    (performer) =>
      `      {
        id: "${performer.id}",
        name: "${performer.name}",
        role: "${performer.role}",
        bio: "${performer.bio}",
        nationality: "${performer.nationality}",
      }`,
  )
  .join(",\n")}
    ],
    schedule: [
${show.schedule
  .map(
    (schedule) =>
      `      {
        day: "${schedule.day}",
        time: "${schedule.time}",
      }`,
  )
  .join(",\n")}
    ],
    tickets: {
      isRequired: ${show.tickets.isRequired},
      price: ${show.tickets.price},
    },
    isAdultOnly: ${show.isAdultOnly},
    testimonials: [
${show.testimonials
  .map(
    (testimonial) =>
      `      {
        id: "${testimonial.id}",
        guestName: "${testimonial.guestName}",
        rating: ${testimonial.rating},
        comment: "${testimonial.comment}",
        date: "${testimonial.date}",
        isVerified: ${testimonial.isVerified},
      }`,
  )
  .join(",\n")}
    ],
    merchandise: [
${show.merchandise
  .map(
    (item) =>
      `      {
        name: "${item.name}",
        description: "${item.description}",
        price: ${item.price},
      }`,
  )
  .join(",\n")}
    ],
    faqs: [
${customFaqs
  .map(
    (faq) =>
      `      {
        question: "${faq.question}",
        answer: "${faq.answer}",
      }`,
  )
  .join(",\n")}
    ],
    isPopular: ${getRandomBool(0.3)},
  }`;
    })
    .join(",\n");

  return `// ${categoryType} entertainment shows for ${vessel.name} in ${capitalize(cityName)}
// Generated on ${new Date().toISOString()}

import { Entertainment } from "@/lib/interfaces/services/venues";

export const ${formatKebabToCamelCase(vessel.name)}${categoryType.replace(/\s+/g, "")}Entertainment: Entertainment[] = [
${showsDataString}
];
`;
}

// Generate performers for a show
function generatePerformers(categoryType) {
  const performerCount = getRandomInt(1, 4);
  const performers = [];
  const specialties = performerSpecialties[categoryType] || ["Performer"];

  for (let i = 0; i < performerCount; i++) {
    const name = getRandomName();
    const performer = {
      id: generateUniqueId(),
      name: name,
      role: getRandomElement(specialties),
      bio: `Professional ${getRandomElement(specialties).toLowerCase()} with years of experience in entertainment.`,
      nationality: getRandomElement([
        "American",
        "British",
        "Canadian",
        "Australian",
        "Italian",
        "French",
        "Spanish",
        "German",
      ]),
    };
    performers.push(performer);
  }

  return performers;
}

// Generate schedule for a show
function generateSchedule() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const selectedDays = getRandomItems(days, getRandomInt(3, 5));

  return selectedDays.map((day) => ({
    day: day,
    time: getRandomElement(["7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"]),
  }));
}

// Generate testimonials for a show
function generateTestimonials(categoryType, showName) {
  const testimonialCount = getRandomInt(5, 10);
  const testimonials = [];
  const templates =
    testimonialTemplates[categoryType] || testimonialTemplates["Live Music"];

  for (let i = 0; i < testimonialCount; i++) {
    const name = getRandomName();
    const template = getRandomElement(templates);
    const testimonialText = template
      .replace("{showName}", showName)
      .replace("{performer}", name);

    const testimonial = {
      id: generateUniqueId(),
      guestName: name,
      rating: getRandomInt(4, 5),
      comment: testimonialText,
      date: generateRandomDate(),
      isVerified: getRandomBool(0.8),
    };

    testimonials.push(testimonial);
  }

  return testimonials;
}

// Generate merchandise for a category
function generateMerchandise(categoryType) {
  const merchandiseCount = getRandomInt(2, 4);
  const availableMerchandise = merchandiseByCategory[categoryType] || [];
  return getRandomItems(
    availableMerchandise,
    Math.min(merchandiseCount, availableMerchandise.length),
  );
}

// Generate entertainment categories and shows
function generateEntertainmentCategories(vessel, cityName) {
  const categories = [];
  const selectedTypes = getRandomItems(entertainmentTypes, getRandomInt(4, 6));

  selectedTypes.forEach((type) => {
    const categoryId = generateUniqueId();
    const category = {
      id: categoryId,
      type: type,
      name: `${type} Entertainment`,
      description: `Experience world-class ${type.toLowerCase()} entertainment aboard the ${vessel.name}`,
      location: {
        deck: getRandomInt(3, 12),
        area: getRandomElement([
          "Main Theater",
          "Lounge",
          "Club",
          "Auditorium",
          "Performance Hall",
          "Entertainment Deck",
        ]),
        capacity: getRandomInt(150, 400),
      },
      hasBar: getRandomBool(0.7),
      hasMerchandise: getRandomBool(0.6),
      isAdultOnly: type === "Nightclub" ? true : getRandomBool(0.2),
      operatingHours: {
        start: getRandomElement(["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"]),
        end: getRandomElement(["10:00 PM", "11:00 PM", "12:00 AM", "1:00 AM"]),
      },
    };

    // Generate shows for this category
    const showCount = getRandomInt(6, 10);
    const shows = [];
    const categoryShows = entertainmentShows[type];

    for (let i = 0; i < showCount; i++) {
      const showId = generateUniqueId();
      const showName = getRandomElement(categoryShows.names);
      const showDescription = getRandomElement(categoryShows.descriptions);

      const show = {
        id: showId,
        title: showName,
        description: showDescription,
        duration: getRandomInt(45, 120), // minutes
        performers: generatePerformers(type),
        schedule: generateSchedule(),
        tickets: {
          isRequired: getRandomBool(0.3),
          price: getRandomBool(0.3) ? getRandomInt(15, 45) : 0,
        },
        isAdultOnly: category.isAdultOnly || getRandomBool(0.1),
        testimonials: generateTestimonials(type, showName),
        merchandise: category.hasMerchandise ? generateMerchandise(type) : [],
        faqs: [], // Will be filled by generateCustomFAQs
      };

      shows.push(show);
    }

    categories.push({
      category: category,
      shows: shows,
    });
  });

  return categories;
}

// Create entertainment category file content
function createEntertainmentCategoryFileContent(
  entertainmentData,
  vessel,
  cityName,
) {
  const categoriesDataString = entertainmentData
    .map((item) => {
      const category = item.category;
      return `  {
    id: "${category.id}",
    type: "${category.type}",
    name: "${category.name}",
    description: "${category.description}",
    location: {
      deck: ${category.location.deck},
      area: "${category.location.area}",
      capacity: ${category.location.capacity},
    },
    hasBar: ${category.hasBar},
    hasMerchandise: ${category.hasMerchandise},
    isAdultOnly: ${category.isAdultOnly},
    operatingHours: {
      start: "${category.operatingHours.start}",
      end: "${category.operatingHours.end}",
    },
  }`;
    })
    .join(",\n");

  return `// Entertainment categories for ${vessel.name} in ${capitalize(cityName)}
// Generated on ${new Date().toISOString()}

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const ${formatKebabToCamelCase(vessel.name)}Entertainment: EntertainmentCategory[] = [
${categoriesDataString}
];
`;
}

// Function to get vessel data from city file
function getVesselDataForCity(cityName) {
  const vesselFilePath = path.join(
    __dirname,
    "..",
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

// Generate entertainment files for a vessel in a city
function generateEntertainmentFiles(city, vessel) {
  if (DEBUG_MODE) {
    console.log(
      `\n🎭 Generating entertainment for ${vessel.name} in ${capitalize(city)}`,
    );
  }

  const entertainmentData = generateEntertainmentCategories(vessel, city);

  const vesselDir = path.join(
    __dirname,
    "..",
    "..",
    "src",
    "lib",
    "constants",
    "venues",
    "entertainment",
    city,
    vessel.name.toLowerCase().replace(/\s+/g, "-"),
  );

  // Create directory if it doesn't exist
  if (!fs.existsSync(vesselDir)) {
    fs.mkdirSync(vesselDir, { recursive: true });
  }

  // Create main entertainment category file
  const mainFilePath = path.join(vesselDir, "entertainment.ts");
  const mainFileExists = fs.existsSync(mainFilePath);

  if (!mainFileExists || REWRITE_MODE || APPEND_MODE) {
    const mainContent = createEntertainmentCategoryFileContent(
      entertainmentData,
      vessel,
      city,
    );
    fs.writeFileSync(mainFilePath, mainContent);

    if (mainFileExists) {
      console.log(
        `✅ Updated entertainment categories for ${vessel.name} in ${capitalize(city)}`,
      );
      filesAppended++;
    } else {
      console.log(
        `✅ Created entertainment categories for ${vessel.name} in ${capitalize(city)}`,
      );
      filesCreated++;
    }
  } else {
    filesSkipped++;
  }

  // Create individual entertainment show files
  entertainmentData.forEach((entertainmentCategory) => {
    const categoryType = entertainmentCategory.category.type;
    const fileNameSuffix = categoryType.toLowerCase().replace(/\s+/g, "-");
    const showsFilePath = path.join(
      vesselDir,
      `${fileNameSuffix}-entertainment.ts`,
    );
    const showsFileExists = fs.existsSync(showsFilePath);

    if (!showsFileExists || REWRITE_MODE || APPEND_MODE) {
      const showsContent = createEntertainmentShowsFileContent(
        categoryType,
        entertainmentCategory.shows,
        entertainmentCategory.category.id,
        vessel,
        entertainmentCategory.category,
        city,
      );
      fs.writeFileSync(showsFilePath, showsContent);

      if (showsFileExists) {
        console.log(
          `✅ Updated ${categoryType} shows for ${vessel.name} in ${capitalize(city)}`,
        );
        filesAppended++;
      } else {
        console.log(
          `✅ Created ${categoryType} shows for ${vessel.name} in ${capitalize(city)}`,
        );
        filesCreated++;
      }
    } else {
      filesSkipped++;
    }
  });
}

// Main execution
let filesCreated = 0;
let filesAppended = 0;
let filesSkipped = 0;

console.log("🎭 Starting entertainment files generation...\n");

// Process each city
cityFiles.forEach((city) => {
  console.log(`\n🌍 Processing ${capitalize(city)}...`);

  const vessels = getVesselDataForCity(city);

  if (vessels.length === 0) {
    console.log(`⚠️  No vessels found for ${city}, skipping...`);
    return;
  }

  vessels.forEach((vessel) => {
    generateEntertainmentFiles(city, vessel);
  });
});

// Summary
console.log("\n" + "=".repeat(50));
console.log("🎭 Entertainment Files Generation Complete!");
console.log("=".repeat(50));
console.log(`📁 Files created: ${filesCreated}`);
console.log(`📝 Files updated: ${filesAppended}`);
console.log(`⏭️  Files skipped: ${filesSkipped}`);
console.log(
  `📊 Total processed: ${filesCreated + filesAppended + filesSkipped}`,
);
console.log("=".repeat(50));
