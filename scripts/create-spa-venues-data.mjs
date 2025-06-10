/**
 * Spa Venues Data Generator Script
 * ===============================
 *
 * This script generates TypeScript files containing spa venue data for each vessel
 * in each city within the Velari Voyages project.
 * It creates files within the directory structure:
 * "src/lib/constants/cruises/venues/spas/{cityName}-spas.ts"
 * Each file exports an array variable named "{camelCaseCityName}Spas"
 * with spa data that matches the Spa interface from venues.ts
 *
 * Features:
 * - Generates spa venues for each vessel in each city
 * - Creates randomized spa details including name, description, services,
 *   hours, contact information, and FAQ data
 * - Follows the Spa interface requirements with vesselId references
 * - Customizes spa services and names based on the city/region
 * - Supports different operational modes:
 *   - Create: Only generates files if they don't already exist (default)
 *   - Append: Adds new spa data to existing files
 *   - Rewrite: Overwrites existing files with new data
 * - Allows specifying the number of spas to generate per vessel
 * - Includes a debug mode for verbose logging output
 *
 * Usage Examples:
 * --------------
 * # Default: creates files with spas for all vessels in each city
 * node scripts/create-spa-venues-data.mjs
 *
 * # Append new spas to existing files
 * node scripts/create-spa-venues-data.mjs --append
 * # Shorter version:
 * node scripts/create-spa-venues-data.mjs -a
 *
 * # Rewrite all spa files (discards existing data)
 * node scripts/create-spa-venues-data.mjs --rewrite
 * # Shorter version:
 * node scripts/create-spa-venues-data.mjs -r
 *
 * # Specify number of spas per vessel (default is 1-2)
 * node scripts/create-spa-venues-data.mjs --spas-per-vessel=3
 *
 * # Enable debug mode
 * node scripts/create-spa-venues-data.mjs --debug
 * # Shorter version:
 * node scripts/create-spa-venues-data.mjs -d
 *
 * Command-line Options:
 * ------------------
 * --append, -a               Enable Append mode. Adds new spas to existing files.
 *                           If a file doesn't exist, it's created.
 *
 * --rewrite, -r             Enable Rewrite mode. Overwrites existing spa files.
 *
 * --spas-per-vessel=N       Number of spas to generate per vessel (default: 1-2 random).
 *
 * --debug, -d               Enable debug mode for verbose logging.
 *
 * File Structure:
 * --------------
 * Generated files follow this structure:
 * src/lib/constants/venues/spas/
 * ├── amsterdam-spas.ts
 * ├── auckland-spas.ts
 * ├── boston-spas.ts
 * └── ...
 *
 * Dependencies:
 * ------------
 * This script requires:
 * - Vessel data files in src/lib/constants/cruises/vessels/
 * - The Spa interface from src/lib/interfaces/services/venues.ts
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
} from "./utils/data-generator.mjs";
import {
  getCityFiles,
  capitalize,
  formatKebabToCamelCase,
} from "./utils/file-utils.mjs";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get city files
const cityFiles = getCityFiles();

// Parse command line arguments
const args = process.argv.slice(2);
const APPEND_MODE = args.includes("--append") || args.includes("-a");
const REWRITE_MODE = args.includes("--rewrite") || args.includes("-r");
const SPAS_PER_VESSEL = parseInt(
  args.find((arg) => arg.startsWith("--spas-per-vessel="))?.split("=")[1] ||
    "0",
  10
);
const DEBUG_MODE = args.includes("--debug") || args.includes("-d");

console.log(
  `Mode: ${
    APPEND_MODE ? "Append" : REWRITE_MODE ? "Rewrite" : "Create new only"
  }`
);
console.log(`Spas per vessel: ${SPAS_PER_VESSEL || "1-2 (random)"}`);
console.log(
  `Will ${
    REWRITE_MODE
      ? "overwrite"
      : APPEND_MODE
        ? "append to"
        : "only create missing"
  } spa files`
);

// Spa service categories and descriptions
const spaServiceCategories = {
  massages: [
    {
      title: "Swedish Massage",
      description:
        "Classic full-body relaxation massage with gentle, flowing strokes",
    },
    {
      title: "Deep Tissue Massage",
      description:
        "Therapeutic massage targeting deep muscle tension and knots",
    },
    {
      title: "Hot Stone Massage",
      description:
        "Luxurious massage using heated volcanic stones for deep relaxation",
    },
    {
      title: "Aromatherapy Massage",
      description: "Soothing massage with essential oils tailored to your mood",
    },
    {
      title: "Couples Massage",
      description: "Romantic side-by-side massage experience for two",
    },
    {
      title: "Prenatal Massage",
      description: "Gentle, specialized massage for expecting mothers",
    },
    {
      title: "Reflexology",
      description: "Therapeutic foot massage focusing on pressure points",
    },
    {
      title: "Thai Massage",
      description: "Traditional stretching and pressure point massage",
    },
    {
      title: "Shiatsu Massage",
      description: "Japanese finger pressure massage for energy balance",
    },
    {
      title: "Sports Massage",
      description: "Specialized massage for athletic recovery and performance",
    },
  ],
  facials: [
    {
      title: "Classic European Facial",
      description: "Deep cleansing and hydrating facial for all skin types",
    },
    {
      title: "Anti-Aging Facial",
      description: "Advanced treatment targeting fine lines and wrinkles",
    },
    {
      title: "Hydrating Facial",
      description: "Intensive moisture therapy for dry and dehydrated skin",
    },
    {
      title: "Purifying Facial",
      description: "Deep pore cleansing treatment for oily and acne-prone skin",
    },
    {
      title: "Gentleman's Facial",
      description: "Tailored facial treatment designed specifically for men",
    },
    {
      title: "Oxygen Infusion Facial",
      description:
        "Rejuvenating treatment that infuses pure oxygen into the skin",
    },
    {
      title: "Microdermabrasion",
      description: "Exfoliating treatment for smoother, brighter skin",
    },
    {
      title: "LED Light Therapy",
      description: "Non-invasive light treatment for various skin concerns",
    },
  ],
  bodyTreatments: [
    {
      title: "Body Wrap",
      description: "Detoxifying and slimming full-body treatment",
    },
    {
      title: "Salt Scrub",
      description: "Exfoliating treatment using mineral-rich sea salts",
    },
    {
      title: "Sugar Scrub",
      description: "Gentle exfoliation with natural sugar crystals",
    },
    {
      title: "Mud Wrap",
      description: "Purifying treatment using therapeutic mineral mud",
    },
    {
      title: "Cellulite Treatment",
      description: "Specialized treatment targeting skin texture and firmness",
    },
    {
      title: "Sunless Tanning",
      description: "Professional spray tan application for a golden glow",
    },
  ],
  wellness: [
    {
      title: "Acupuncture",
      description:
        "Traditional Chinese medicine using fine needles for healing",
    },
    {
      title: "Reiki Healing",
      description: "Energy healing treatment for balance and relaxation",
    },
    {
      title: "Meditation Session",
      description: "Guided meditation for stress relief and mindfulness",
    },
    {
      title: "Yoga Class",
      description: "Gentle yoga practice suitable for all levels",
    },
    {
      title: "Wellness Consultation",
      description: "Personalized health and wellness guidance",
    },
  ],
  salon: [
    {
      title: "Hair Styling",
      description: "Professional hair cut, color, and styling services",
    },
    {
      title: "Manicure",
      description:
        "Complete nail care including shaping, cuticle care, and polish",
    },
    {
      title: "Pedicure",
      description: "Relaxing foot treatment with nail care and massage",
    },
    {
      title: "Gel Manicure",
      description: "Long-lasting gel polish application",
    },
    {
      title: "Eyebrow Shaping",
      description: "Professional eyebrow grooming and shaping",
    },
    {
      title: "Eyelash Extensions",
      description: "Individual lash extensions for fuller, longer lashes",
    },
  ],
};

// Spa name themes by region
const spaNameThemes = {
  "Greek Islands": ["Aegean", "Mythos", "Olive Grove", "Cycladic", "Nautilus"],
  "Mainland Greece": ["Hellenic", "Agora", "Acropolis", "Athena", "Thermae"],

  "Southern Italy": [
    "Mediterrana",
    "Citrus Bloom",
    "Sunstone",
    "Amalfi",
    "Vita",
  ],
  "Central Italy": [
    "Tuscan",
    "Etruscan",
    "Chiaro",
    "Renaissance",
    "Tranquillo",
  ],
  "Northern Italy": ["Dolce Vita", "Lago", "Alpine", "Velluto", "Eleganza"],

  Catalonia: [
    "Catalan Calm",
    "Montserrat",
    "Gaia",
    "Rosa del Mar",
    "Costa Bliss",
  ],
  "Southern Spain": [
    "Andalus",
    "Solaria",
    "Sevillana",
    "Cobre",
    "Desert Bloom",
  ],
  "Western Spain": ["Castilian", "Sierra", "Retiro", "Brisa", "Vino Verde"],

  Portugal: ["Lusitana", "Fado", "Azulejo", "Algarve", "Porto Sol"],

  "French Riviera": [
    "Côte d’Or",
    "Provence Breeze",
    "Azure Bliss",
    "Lavande",
    "Mistral",
  ],
  France: ["Parfum", "Éclat", "Jardin", "Rivière", "Château Serenity"],

  "Croatian Coast": ["Adriatica", "Dubrava", "Stari Grad", "Karst", "Iskrica"],
  Croatia: ["Dalmatian", "Jadran", "Plitvice", "Biser", "Zagorje"],
  "Bosnia and Herzegovina": [
    "Balkan Bloom",
    "Mostar Mist",
    "River Stone",
    "Blagaj Spring",
    "Dinaric",
  ],
  Serbia: ["Danube Drift", "Serenika", "Vardar", "Belgravia", "Kopaonik"],
  Georgia: [
    "Tbilisi Tranquil",
    "Svaneti Sky",
    "Caucasus Calm",
    "Wine Valley",
    "Silk Spa",
  ],

  Malta: [
    "Maltese Glow",
    "Mdina Mist",
    "Gozo Grace",
    "Island Stone",
    "Calypso Spa",
  ],
  Netherlands: [
    "Canal Calm",
    "Tulip Breeze",
    "Golden Age",
    "Dutch Drift",
    "Windmill Wellness",
  ],
  England: [
    "Harbour Mist",
    "Meadow Bloom",
    "Tea & Thyme",
    "Cotswold Calm",
    "Regent",
  ],
  Scotland: [
    "Highland Haven",
    "Loch Serenity",
    "Thistle Spa",
    "Tartan Mist",
    "Cairn Wellness",
  ],
  Ireland: [
    "Emerald Essence",
    "Celtic Calm",
    "Shamrock Spa",
    "Wicklow Waters",
    "Druidic Drift",
  ],

  Germany: [
    "Bavarian Bliss",
    "Spaetzle Serenity",
    "Forest Stone",
    "Black Forest Mist",
    "Heimat",
  ],
  Scandinavia: [
    "Nordic Light",
    "Lumen",
    "Lagom",
    "Hygge Haven",
    "Fjord Essence",
  ],
  Denmark: [
    "Scandi Calm",
    "Copenhagen Bloom",
    "Little Mermaid Mist",
    "Skagen Drift",
    "Havfrue",
  ],
  Norway: ["Aurora", "Oslo Drift", "Midnight Sun", "Fjord Spa", "Nordlys"],
  Finland: [
    "Sauna Glow",
    "Lapland Light",
    "Helsinki Calm",
    "Arctic Steam",
    "Birch Haven",
  ],
  Iceland: [
    "Geothermal",
    "Glacier Spa",
    "Lava Stone",
    "Blue Lagoon",
    "Northern Light",
  ],
  Russia: [
    "Tsarina Spa",
    "Amber Room",
    "Volga Drift",
    "Dacha Serenity",
    "Samovar Steam",
  ],
  Latvia: [
    "Baltic Bliss",
    "Riga Radiance",
    "Forest Glow",
    "Amber Spa",
    "Daugava Drift",
  ],
  Austria: [
    "Alpine Calm",
    "Viennese Mist",
    "Mozart Bloom",
    "Habsburg Harmony",
    "Danube Drift",
  ],
  "Czech Republic": [
    "Bohemian",
    "Prague Peace",
    "Spa Karlovy",
    "Crystal Calm",
    "Moravia",
  ],
  Hungary: [
    "Thermal Bliss",
    "Budapest Bath",
    "Danube Essence",
    "Paprika Glow",
    "Pannonian Mist",
  ],

  Japan: [
    "Onsen Serenity",
    "Sakura Bloom",
    "Koi Drift",
    "Zen Harmony",
    "Mt. Fuji Mist",
  ],
  China: [
    "Jade Harmony",
    "Bamboo Grove",
    "Lotus Drift",
    "Silken Spa",
    "Celestial Calm",
  ],
  "South Korea": [
    "Hanok Haven",
    "Jeju Mist",
    "Soju Spa",
    "K-Glow",
    "Lotus Bay",
  ],
  Taiwan: [
    "Formosa Bliss",
    "Hot Spring Drift",
    "Taipei Calm",
    "Tea Leaf Serenity",
    "Alishan Aroma",
  ],
  Thailand: [
    "Siam Serenity",
    "Thai Bloom",
    "Golden Temple",
    "Lemongrass Mist",
    "Chiang Calm",
  ],
  Vietnam: [
    "Mekong Drift",
    "Halong Haven",
    "Jasmine Spa",
    "Hue Harmony",
    "Indochine Calm",
  ],
  Cambodia: [
    "Angkor Mist",
    "Khmer Calm",
    "Lotus Spa",
    "Jungle Essence",
    "Siem Serenity",
  ],
  Nepal: [
    "Himalayan Mist",
    "Panauti Peace",
    "Sherpa Drift",
    "Everest Glow",
    "Bodhi",
  ],
  India: [
    "Ayurveda Bliss",
    "Spice Retreat",
    "Lotus Grove",
    "Namaste",
    "Kerala Drift",
  ],
  Indonesia: [
    "Balinese Bloom",
    "Java Serenity",
    "Ubud Essence",
    "Tropical Drift",
    "Island Soul",
  ],
  Singapore: [
    "Merlion Mist",
    "Orchid Haven",
    "Urban Oasis",
    "Marina Glow",
    "Zenport",
  ],
  "French Polynesia": [
    "Lagoon Blue",
    "Tahiti Tranquil",
    "Coral Bloom",
    "Moana Essence",
    "Pacific Drift",
  ],
  Fiji: [
    "Bula Bliss",
    "Island Drift",
    "Coconut Grove",
    "Reef Glow",
    "Nadi Nectar",
  ],
  Vanuatu: [
    "Melanesian Mist",
    "Island Spring",
    "Port Calm",
    "Volcanic Glow",
    "Pacific Peace",
  ],
  Australia: [
    "Bushland Bliss",
    "Coral Coast",
    "Uluru Glow",
    "Southern Drift",
    "Byron Calm",
  ],
  "New Zealand": [
    "Rotorua Steam",
    "Aotearoa Aura",
    "Kiwi Calm",
    "Milford Drift",
    "Waiheke Wellness",
  ],

  California: [
    "Sierra Serenity",
    "Pacific Breeze",
    "Wine Country Glow",
    "Golden Drift",
    "Laguna Mist",
  ],
  "Pacific Northwest": [
    "Rainforest Retreat",
    "Cedar Mist",
    "Sound Drift",
    "Evergreen Glow",
    "Cascade Calm",
  ],
  Texas: [
    "Hill Country Haven",
    "Lone Star Drift",
    "Rio Glow",
    "Desert Bloom",
    "Austin Aura",
  ],
  Nevada: [
    "Desert Mirage",
    "Sagebrush Spa",
    "Oasis Glow",
    "Silver State Serenity",
    "Vegas Mist",
  ],
  Florida: [
    "Everglade Essence",
    "Citrus Bloom",
    "Gulf Drift",
    "Sunshine Spa",
    "Coastal Calm",
  ],
  "East Coast USA": [
    "Harbor Haven",
    "Atlantic Drift",
    "Historic Calm",
    "Colonial Bloom",
    "Skyline Serenity",
  ],
  "Southeast USA": [
    "Southern Charm",
    "Magnolia Mist",
    "Bayou Bliss",
    "Savannah Glow",
    "Peach Calm",
  ],
  "Midwest USA": [
    "Great Lakes Drift",
    "Prairie Bloom",
    "Heartland Haven",
    "Lakeview Spa",
    "Rustic Calm",
  ],

  Alaska: [
    "Glacier Glow",
    "Northern Light",
    "Tundra Mist",
    "Denali Drift",
    "Salmon Berry",
  ],
  "British Columbia": [
    "Rainforest Drift",
    "Mountain Mist",
    "Coastal Calm",
    "Pacific Bloom",
    "Tofino Tranquil",
  ],
  Hawaii: [
    "Island Bloom",
    "Volcano Mist",
    "Aloha Calm",
    "Hula Haven",
    "Lava Drift",
  ],

  Ontario: [
    "Maple Mist",
    "Niagara Serenity",
    "Lake Ontario Drift",
    "Urban Glow",
    "Cottage Calm",
  ],
  Quebec: [
    "Laurentian Bloom",
    "St. Lawrence Drift",
    "Old World Charm",
    "French Canada Calm",
    "Montréal Mist",
  ],

  Mexico: [
    "Mayan Mist",
    "Aztec Glow",
    "Cenote Serenity",
    "Pueblo Calm",
    "Desert Bloom",
  ],
  Panama: [
    "Canal Drift",
    "Tropical Calm",
    "Rainforest Spa",
    "Isthmus Glow",
    "Cocobolo",
  ],
  Colombia: [
    "Cartagena Calm",
    "Coffee Bloom",
    "Andes Drift",
    "Amazon Serenity",
    "Bogotá Glow",
  ],
  Peru: [
    "Andean Mist",
    "Sacred Valley",
    "Llama Drift",
    "Inca Spa",
    "Amazon Essence",
  ],
  Ecuador: [
    "Quito Calm",
    "Volcano Bloom",
    "Galápagos Drift",
    "Amazon Serenity",
    "Equator Glow",
  ],
  Chile: [
    "Atacama Aura",
    "Andean Glow",
    "Patagonia Drift",
    "Valparaíso Breeze",
    "Santiago Serenity",
  ],
  Argentina: [
    "Pampas Calm",
    "Malbec Mist",
    "Tango Drift",
    "Andean Retreat",
    "Buenos Glow",
  ],
  Uruguay: [
    "Montevideo Mist",
    "Atlantic Calm",
    "River Plate Drift",
    "Spa del Este",
    "Colonia Bloom",
  ],
  Brazil: [
    "Copacabana Calm",
    "Amazon Drift",
    "Rio Glow",
    "Samba Spa",
    "Ipanema Mist",
  ],

  "Cayman Islands": [
    "Caribbean Drift",
    "Reef Glow",
    "Island Bliss",
    "Tropical Essence",
    "George Town Calm",
  ],
  Bahamas: [
    "Nassau Glow",
    "Coral Calm",
    "Bahamian Breeze",
    "Island Drift",
    "Aqua Haven",
  ],
  Jamaica: [
    "Reggae Relax",
    "Blue Mountain Mist",
    "Island Bloom",
    "Montego Calm",
    "Jamaican Drift",
  ],
  "US Virgin Islands": [
    "St. Thomas Drift",
    "Tropical Glow",
    "Caribbean Calm",
    "Island Essence",
    "Sea Breeze",
  ],
  "Puerto Rico": [
    "El Yunque Mist",
    "San Juan Serenity",
    "Island Rhythm",
    "Caribbean Bloom",
    "Coquí Calm",
  ],
  "Sint Maarten": [
    "Dutch Drift",
    "Island Essence",
    "Tropical Glow",
    "Caribbean Bloom",
    "Marina Mist",
  ],
  "Dominican Republic": [
    "Quisqueya Calm",
    "Island Breeze",
    "Caribbean Drift",
    "Santo Spa",
    "Amber Coast",
  ],
  Bermuda: [
    "Pink Sand Calm",
    "Island Drift",
    "Coral Mist",
    "Tropical Glow",
    "Atlantic Bliss",
  ],
  Honduras: [
    "Bay Island Bliss",
    "Roatan Drift",
    "Tropical Calm",
    "Mayan Mist",
    "Rainforest Breeze",
  ],
  "Mexico Caribbean": [
    "Cozumel Calm",
    "Island Glow",
    "Maya Drift",
    "Tulum Bloom",
    "Reef Mist",
  ],

  Morocco: [
    "Desert Rose",
    "Casbah Calm",
    "Atlas Drift",
    "Spice Oasis",
    "Sahara Mist",
  ],
  Egypt: [
    "Nile Serenity",
    "Pharaoh’s Glow",
    "Pyramid Drift",
    "Sands of Time",
    "Papyrus Spa",
  ],
  Jordan: [
    "Petra Glow",
    "Red Rock Calm",
    "Wadi Drift",
    "Desert Bloom",
    "Aqaba Breeze",
  ],
  "South Africa": [
    "Safari Mist",
    "Cape Calm",
    "Protea Bloom",
    "Winelands Drift",
    "Zulu Serenity",
  ],
  Tanzania: [
    "Serengeti Spa",
    "Zanzibar Drift",
    "Savannah Calm",
    "Kilimanjaro Glow",
    "Ngorongoro Mist",
  ],
  Kenya: [
    "Maasai Mist",
    "Savannah Drift",
    "Nairobi Glow",
    "Equator Calm",
    "Safari Spa",
  ],
  Uganda: [
    "Gorilla Drift",
    "Pearl of Africa",
    "Jungle Calm",
    "Kampala Glow",
    "Rainforest Spa",
  ],

  "United Arab Emirates": [
    "Desert Bloom",
    "Oasis Calm",
    "Burj Drift",
    "Luxury Glow",
    "Arabian Essence",
  ],

  Default: ["Tranquil", "Serene", "Blissful", "Peaceful", "Rejuvenating"],
};

// Regional spa specialties
const regionalSpecialties = {
  "Northern Europe": [
    "Hot Stone Therapy",
    "Nordic Sauna Rituals",
    "Ice Therapy",
  ],
  Mediterranean: [
    "Olive Oil Treatments",
    "Sea Salt Therapies",
    "Thermal Treatments",
  ],
  Caribbean: [
    "Coconut Oil Massage",
    "Tropical Fruit Facials",
    "Aloe Treatments",
  ],
  "Asia Pacific": [
    "Traditional Asian Massage",
    "Green Tea Treatments",
    "Jade Stone Therapy",
  ],
  "North America": [
    "Native Botanical Treatments",
    "Seasonal Wellness Programs",
  ],
  "South America": ["Amazonian Plant Therapies", "Andean Stone Treatments"],
};

// FAQ templates for spas
const spaFAQTemplates = [
  {
    question: "What should I wear to my spa appointment?",
    answer:
      "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
  },
  {
    question: "How early should I arrive for my appointment?",
    answer:
      "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
  },
  {
    question: "Can I book treatments for multiple people?",
    answer:
      "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
  },
  {
    question: "Are your products suitable for sensitive skin?",
    answer:
      "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
  },
  {
    question: "Do you offer treatments for men?",
    answer:
      "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
  },
];

// Generate spa services based on vessel type and region
function generateSpaServices(vesselType, region, count = null) {
  const serviceCount = count || getRandomInt(6, 12);
  const services = [];

  // Get all service categories
  const allServices = [
    ...spaServiceCategories.massages,
    ...spaServiceCategories.facials,
    ...spaServiceCategories.bodyTreatments,
    ...spaServiceCategories.wellness,
    ...spaServiceCategories.salon,
  ];

  // Add regional specialties if available
  const specialties = regionalSpecialties[region] || [];
  specialties.forEach((specialty) => {
    allServices.push({
      title: specialty,
      description: `Specialized regional treatment featuring traditional ${region.toLowerCase()} techniques and ingredients`,
    });
  });

  // Select random services
  const selectedServices = getRandomItems(allServices, serviceCount);

  // Format services with additional details
  selectedServices.forEach((service) => {
    services.push({
      title: service.title,
      description: service.description,
      tags: generateServiceTags(service.title, vesselType),
      rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)), // 3.5-5.0 rating
    });
  });

  return services;
}

// Generate service tags based on service type and vessel
function generateServiceTags(serviceTitle, vesselType) {
  const baseTags = [];

  if (serviceTitle.toLowerCase().includes("massage")) {
    baseTags.push("massage", "relaxation", "therapeutic");
  }
  if (serviceTitle.toLowerCase().includes("facial")) {
    baseTags.push("facial", "skincare", "beauty");
  }
  if (
    serviceTitle.toLowerCase().includes("body") ||
    serviceTitle.toLowerCase().includes("wrap") ||
    serviceTitle.toLowerCase().includes("scrub")
  ) {
    baseTags.push("body-treatment", "exfoliation", "detox");
  }
  if (serviceTitle.toLowerCase().includes("couples")) {
    baseTags.push("couples", "romantic");
  }
  if (
    serviceTitle.toLowerCase().includes("wellness") ||
    serviceTitle.toLowerCase().includes("meditation") ||
    serviceTitle.toLowerCase().includes("yoga")
  ) {
    baseTags.push("wellness", "mindfulness", "holistic");
  }

  // Add vessel-specific tags
  if (vesselType?.includes("luxury") || vesselType?.includes("vip")) {
    baseTags.push("luxury", "premium");
  }
  if (vesselType?.includes("family")) {
    baseTags.push("family-friendly");
  }
  if (vesselType?.includes("expedition") || vesselType?.includes("adventure")) {
    baseTags.push("recovery", "active-lifestyle");
  }

  return baseTags.slice(0, 4); // Limit to 4 tags
}

// Generate spa operating hours
function generateSpaHours() {
  const openingHour = getRandomInt(7, 9); // 7am-9am opening
  const closingHour = getRandomInt(19, 22); // 7pm-10pm closing

  return {
    start: `${openingHour.toString().padStart(2, "0")}:00`,
    end: `${closingHour.toString().padStart(2, "0")}:00`,
    duration: `${closingHour - openingHour} hours`,
    description: "Daily spa hours may vary during port days and sea days",
  };
}

// Generate spa name
function generateSpaName(vesselName, region) {
  const themes = spaNameThemes[region] || spaNameThemes.Default;
  const theme = getRandomElement(themes);

  const nameFormats = [
    `${theme} Spa & Wellness`,
    `The ${theme} Sanctuary`,
    `${theme} Waters Spa`,
    `${vesselName} ${theme} Spa`,
    `${theme} Rejuvenation Center`,
    `Serenity ${theme} Spa`,
    `${theme} Wellness Retreat`,
  ];

  return getRandomElement(nameFormats);
}

// Generate spa description
function generateSpaDescription(spaName, vesselName, cityName, region) {
  const descriptions = [
    `Welcome to ${spaName}, an oasis of tranquility aboard the ${vesselName}. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near ${capitalize(cityName)}.`,
    `Experience ultimate relaxation at ${spaName}, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by ${region} healing traditions.`,
    `Discover your personal sanctuary at ${spaName}. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.`,
    `${spaName} provides a haven of serenity where guests can escape and rejuvenate. Our skilled wellness professionals offer customized treatments in a luxurious setting, ensuring every guest leaves feeling refreshed and renewed.`,
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

// Generate spa data for a specific vessel
function generateSpaForVessel(vessel, cityName, region) {
  const spaName = generateSpaName(vessel.name, region);
  const services = generateSpaServices(vessel.type, region);
  const hours = generateSpaHours();
  const faqs = getRandomItems(spaFAQTemplates, getRandomInt(3, 5));

  return {
    id: generateUniqueId(),
    vesselId: vessel.id,
    name: spaName,
    description: generateSpaDescription(spaName, vessel.name, cityName, region),
    imageUrl: `/images/spas/${vessel.type}-spa.jpg`,
    hours: hours,
    contact: {
      contactNumber: `+1-${getRandomInt(200, 999)}-${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}`,
      contactEmail: generateRandomEmail("spa.velarivoyages.com"),
    },
    services: services,
    isPopular: getRandomBool(0.3), // 30% chance of being popular
    faqs: faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),
  };
}

// Generate spa data for a city
function generateSpasForCity(cityName) {
  const vessels = getVesselDataForCity(cityName);
  if (vessels.length === 0) {
    console.log(`⚠️  Skipping ${cityName} - no vessels found`);
    return [];
  }

  const region = cityToRegionMap(cityName);
  const spas = [];

  vessels.forEach((vessel) => {
    const spasForVessel = SPAS_PER_VESSEL || getRandomInt(1, 2);

    for (let i = 0; i < spasForVessel; i++) {
      spas.push(generateSpaForVessel(vessel, cityName, region));
    }
  });

  if (DEBUG_MODE) {
    console.log(
      `Generated ${spas.length} spas for ${cityName} (${vessels.length} vessels)`
    );
  }

  return spas;
}

// Create TypeScript file content
function createSpaFileContent(cityName, spas) {
  const camelCaseCityName = formatKebabToCamelCase(cityName);
  const capitalizedCityName = capitalize(cityName);

  const spaDataString = spas
    .map(
      (spa) =>
        `  {
    id: "${spa.id}",
    vesselId: "${spa.vesselId}",
    name: "${spa.name}",
    description: "${spa.description}",
    imageUrl: "${spa.imageUrl}",
    hours: {
      start: "${spa.hours.start}",
      end: "${spa.hours.end}",
      duration: "${spa.hours.duration}",
      description: "${spa.hours.description}",
    },
    contact: {
      contactNumber: "${spa.contact.contactNumber}",
      contactEmail: "${spa.contact.contactEmail}",
    },
    services: [
${spa.services
  .map(
    (service) =>
      `      {
        title: "${service.title}",
        description: "${service.description}",
        tags: [${service.tags.map((tag) => `"${tag}"`).join(", ")}],
        rating: ${service.rating},
      }`
  )
  .join(",\n")}
    ],
    isPopular: ${spa.isPopular},
    faqs: [
${spa.faqs
  .map(
    (faq) =>
      `      {
        question: "${faq.question}",
        answer: "${faq.answer}",
      }`
  )
  .join(",\n")}
    ],
  }`
    )
    .join(",\n");

  return `// Spa venues data for ${capitalizedCityName}
// This file contains spa and wellness center information for cruise vessels operating from ${capitalizedCityName}
// Each spa is associated with a specific vessel and offers various wellness services

import { Spa } from "@/lib/interfaces/services/venues";

export const ${camelCaseCityName}Spas: Spa[] = [
${spaDataString}
];
`;
}

// Main function to generate spa files
async function generateSpaFiles() {
  const spaDir = path.join(
    __dirname,
    "..",
    "src",
    "lib",
    "constants",
    "venues",
    "spas"
  );

  // Create directories if they don't exist
  if (!fs.existsSync(spaDir)) {
    fs.mkdirSync(spaDir, { recursive: true });
    console.log(`📁 Created directory: ${spaDir}`);
  }

  let filesCreated = 0;
  let filesAppended = 0;
  let filesSkipped = 0;

  console.log(`\n🚀 Processing ${cityFiles.length} cities...`);

  for (const city of cityFiles) {
    const spaFilePath = path.join(spaDir, `${city}-spas.ts`);
    const fileExists = fs.existsSync(spaFilePath);

    if (fileExists && !APPEND_MODE && !REWRITE_MODE) {
      if (DEBUG_MODE) {
        console.log(`⏭️  Skipping ${city} - file already exists`);
      }
      filesSkipped++;
      continue;
    }

    try {
      const newSpas = generateSpasForCity(city);

      if (newSpas.length === 0) {
        console.log(`⚠️  No spas generated for ${city}`);
        continue;
      }

      let allSpas = newSpas;

      // Handle append mode
      if (APPEND_MODE && fileExists) {
        try {
          const existingContent = fs.readFileSync(spaFilePath, "utf8");
          const existingSpasMatch = existingContent.match(
            /export const \w+Spas: Spa\[\] = \[([\s\S]*?)\];/
          );

          if (existingSpasMatch) {
            // Parse existing data (this is a simplified approach)
            // In a production environment, you might want more robust parsing
            console.log(`📝 Appending to existing spas for ${city}`);
            filesAppended++;
          }
        } catch (error) {
          console.warn(
            `⚠️  Could not parse existing spa file for ${city}: ${error.message}`
          );
        }
      }

      // Create file content
      const fileContent = createSpaFileContent(city, allSpas);

      // Write file
      fs.writeFileSync(spaFilePath, fileContent);

      if (APPEND_MODE && fileExists) {
        console.log(
          `✅ Updated spa file for ${capitalize(city)} (${allSpas.length} spas)`
        );
      } else {
        console.log(
          `✅ Created spa file for ${capitalize(city)} (${allSpas.length} spas)`
        );
        filesCreated++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${city}: ${error.message}`);
    }
  }

  // Print summary
  console.log(`\n📊 Summary:`);
  console.log(`   Files created: ${filesCreated}`);
  if (APPEND_MODE) console.log(`   Files appended: ${filesAppended}`);
  console.log(`   Files skipped: ${filesSkipped}`);
  console.log(`\n🎉 Spa venue generation complete!`);
}

// Run the script
generateSpaFiles().catch(console.error);
