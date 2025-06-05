import { Cruise } from "@/lib/interfaces/services/cruises";

export const bermudaCruises: Cruise[] = [
  {
    basePrice: 8926,
    departureLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Launch into adventure from Bermuda and sail deep into the heart of the Caribbean. With ports of call like San Juan, Roatán, Tampa, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "975 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bermuda to San Juan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from San Juan to Roatán",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Roatán to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Genesis Gardner",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        contact: {
          contactEmail: "hidden.eclipse.of.th@velarivoyages.com",
          contactNumber: "+1-133-927-7050",
        },
      },
    ],
    title: "Hidden Eclipse of the Emerald Cays",
    description:
      "Launch into adventure from Bermuda and sail deep into the heart of the Caribbean. With ports of call like San Juan, Roatán, Tampa, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.6,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 3862,
    departureLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    arrivalLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
      ],
      description:
        "Begin your journey in Bermuda, where tradition meets travel. This immersive adventure reveals the finest of Caribbean, from the beaches of San Juan to the streets of Tampa.",
      distance: "1109 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bermuda to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from San Juan to Tampa",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Tampa to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Melissa Reeves",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "epic.saga.of.the.eme@velarivoyages.com",
          contactNumber: "+1-276-191-7012",
        },
      },
    ],
    title: "Epic Saga of the Emerald Cays",
    description:
      "Begin your journey in Bermuda, where tradition meets travel. This immersive adventure reveals the finest of Caribbean, from the beaches of San Juan to the streets of Tampa.",
    rating: 4.5,
    tags: ["fall-cruise", "cruise-journey"],
  },
  {
    basePrice: 9981,
    departureLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    arrivalLocation: {
      city: "George Town",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This inspiring realm departs from Bermuda, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include Miami, Philipsburg, Roatán, George Town.",
      distance: "1271 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Bermuda to Miami",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Philipsburg to Roatán",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Roatán to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Donna Warren",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "gilded.excursion.of.@velarivoyages.com",
          contactNumber: "+1-455-465-9016",
        },
      },
    ],
    title: "Gilded Excursion of the Palm-Fringed Paradises",
    description:
      "This inspiring realm departs from Bermuda, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include Miami, Philipsburg, Roatán, George Town.",
    rating: 4.3,
    tags: ["short-getaway"],
  },
  {
    basePrice: 9394,
    departureLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Escape to sea from Bermuda on a radiant voyage exploring the magic of Caribbean. Visit unforgettable locales like Fort Lauderdale, St. Thomas, San Juan, Tampa, where each stop inspires awe.",
      distance: "1064 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from St. Thomas to San Juan",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from San Juan to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Coleman",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "spectacular.whisper.@velarivoyages.com",
          contactNumber: "+1-588-764-8064",
        },
      },
    ],
    title: "Spectacular Whisper of the Sugarcane Skies",
    description:
      "Escape to sea from Bermuda on a radiant voyage exploring the magic of Caribbean. Visit unforgettable locales like Fort Lauderdale, St. Thomas, San Juan, Tampa, where each stop inspires awe.",
    rating: 4.4,
    tags: ["romantic", "cruise-adventure"],
  },
  {
    basePrice: 2388,
    departureLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    arrivalLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
      ],
      description:
        "Unwind and explore on this pulse through Caribbean, departing from Bermuda. With every stop—from Fort Lauderdale to Cozumel—you’ll collect memories that last a lifetime.",
      distance: "1243 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Miami",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Philipsburg to Cozumel",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Cozumel to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kinsley Hayes",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "extraordinary.sanctu@velarivoyages.com",
          contactNumber: "+1-979-510-1500",
        },
      },
    ],
    title: "Extraordinary Sanctuary of the Caribbean Rhythms",
    description:
      "Unwind and explore on this pulse through Caribbean, departing from Bermuda. With every stop—from Fort Lauderdale to Cozumel—you’ll collect memories that last a lifetime.",
    rating: 5.0,
    tags: ["themed-cruise", "cruise-getaway"],
  },
  {
    basePrice: 8467,
    departureLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Your journey through the Caribbean begins in Bermuda, where elegance meets adventure. Explore the shores of Tampa, Miami, Fort Lauderdale, with curated excursions and luxurious onboard amenities.",
      distance: "1269 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bermuda to Tampa",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tampa to Miami",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Miami to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Linda Wells",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "spectacular.quest.of@velarivoyages.com",
          contactNumber: "+1-408-507-2264",
        },
      },
    ],
    title: "Spectacular Quest of the Rum-Laced Breezes",
    description:
      "Your journey through the Caribbean begins in Bermuda, where elegance meets adventure. Explore the shores of Tampa, Miami, Fort Lauderdale, with curated excursions and luxurious onboard amenities.",
    rating: 4.6,
    tags: ["luxury", "wellness", "cruise-ship"],
  },
  {
    basePrice: 6598,
    departureLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    arrivalLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
      ],
      description:
        "Embark from Bermuda and traverse the Caribbean in style. Whether it’s the energy of Cozumel or the calm of St. Thomas, each destination reveals a new side of paradise.",
      distance: "912 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Bermuda to Cozumel",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Cozumel to St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Aaliyah Lawson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/56.jpg",
        contact: {
          contactEmail: "epic.pilgrimage.of.t@velarivoyages.com",
          contactNumber: "+1-145-304-9597",
        },
      },
    ],
    title: "Epic Pilgrimage of the Emerald Cays",
    description:
      "Embark from Bermuda and traverse the Caribbean in style. Whether it’s the energy of Cozumel or the calm of St. Thomas, each destination reveals a new side of paradise.",
    rating: 4.6,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 2559,
    departureLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    arrivalLocation: {
      city: "Cozumel",
      country: "Mexico",
      coordinates: {
        latitude: 20.4233,
        longitude: -86.9212,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
      ],
      description:
        "Escape to sea from Bermuda on a pristine voyage exploring the magic of Caribbean. Visit unforgettable locales like Miami, San Juan, Cozumel, where each stop inspires awe.",
      distance: "1104 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bermuda to Miami",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Miami to San Juan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from San Juan to Cozumel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Maya Bennett",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "hidden.horizon.of.th@velarivoyages.com",
          contactNumber: "+1-758-585-2886",
        },
      },
    ],
    title: "Hidden Horizon of the Sapphire Waters",
    description:
      "Escape to sea from Bermuda on a pristine voyage exploring the magic of Caribbean. Visit unforgettable locales like Miami, San Juan, Cozumel, where each stop inspires awe.",
    rating: 4.4,
    tags: ["cruise-vacation", "romantic", "expedition"],
  },
  {
    basePrice: 4171,
    departureLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    arrivalLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
      ],
      description:
        "Leave ordinary behind as you sail from Bermuda across the captivating Caribbean. Discover the distinctive personality of each destination, from Fort Lauderdale, Cozumel, George Town.",
      distance: "1208 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Cozumel",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Cozumel to George Town",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from George Town to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Julie Crawford",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "dreamlike.drift.of.t@velarivoyages.com",
          contactNumber: "+1-804-969-3613",
        },
      },
    ],
    title: "Dreamlike Drift of the Sugarcane Skies",
    description:
      "Leave ordinary behind as you sail from Bermuda across the captivating Caribbean. Discover the distinctive personality of each destination, from Fort Lauderdale, Cozumel, George Town.",
    rating: 4.8,
    tags: ["adventure", "culinary", "historical"],
  },
  {
    basePrice: 1744,
    departureLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    arrivalLocation: {
      city: "Bermuda",
      country: "Bermuda",
      region: "Caribbean",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          region: "Caribbean",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
      ],
      description:
        "Sail away from Bermuda into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Miami, Cozumel, George Town, St. Thomas, where history, nature, and cuisine collide.",
      distance: "868 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Bermuda to Miami",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Miami to Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Cozumel to George Town",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from George Town to St. Thomas",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sophia Fletcher",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "majestic.legacy.of.t@velarivoyages.com",
          contactNumber: "+1-819-912-1695",
        },
      },
    ],
    title: "Majestic Legacy of the Caribbean Rhythms",
    description:
      "Sail away from Bermuda into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Miami, Cozumel, George Town, St. Thomas, where history, nature, and cuisine collide.",
    rating: 4.0,
    tags: ["cultural", "cruise-getaway", "cruise-journey"],
  },
];
