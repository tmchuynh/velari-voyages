import { Cruise } from "@/lib/interfaces/services/cruises";

export const montrealCruises: Cruise[] = [
  {
    basePrice: 2486,
    departureLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Begin a captivating journey through the East Coast Canada, departing Montreal. With visits to Dubrovnik, Florence, Malta, Milan, each day brings a new adventure and deeper connection to the region.",
      distance: "926 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montreal to Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Malta to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montreal",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Joe Chambers",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Haitian", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "idyllic.elevation.of@velarivoyages.com",
          contactNumber: "+1-194-299-4495",
        },
      },
    ],
    title: "Idyllic Elevation of the Island Metropolis",
    description:
      "Begin a captivating journey through the East Coast Canada, departing Montreal. With visits to Dubrovnik, Florence, Malta, Milan, each day brings a new adventure and deeper connection to the region.",
    rating: 4.7,
    tags: ["expedition", "cruise", "luxury"],
  },
  {
    basePrice: 2722,
    departureLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Depart from the iconic port of Montreal and sail through the enchanting East Coast Canada. Explore vibrant destinations like Mykonos, Milan, Santorini, Venice, each offering its own unique charm and local flair.",
      distance: "1410 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Montreal to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Milan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Santorini to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montreal",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Arthur Gardner",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Haitian", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "exquisite.frontier.o@velarivoyages.com",
          contactNumber: "+1-995-403-8795",
        },
      },
    ],
    title: "Exquisite Frontier of the Island Metropolis",
    description:
      "Depart from the iconic port of Montreal and sail through the enchanting East Coast Canada. Explore vibrant destinations like Mykonos, Milan, Santorini, Venice, each offering its own unique charm and local flair.",
    rating: 4.6,
    tags: ["themed-cruise", "cruise-journey", "seasonal"],
  },
  {
    basePrice: 9491,
    departureLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    arrivalLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
      ],
      description:
        "Begin a captivating realm through the East Coast Canada, departing Montreal. With visits to Athens, Venice, each day brings a new adventure and deeper connection to the region.",
      distance: "1295 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montreal to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Venice to Montreal",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montreal",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Montreal",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Holloway",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Haitian", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "tranquil.arcadia.of.@velarivoyages.com",
          contactNumber: "+1-885-281-5764",
        },
      },
    ],
    title: "Tranquil Arcadia of the Red Sand Shores",
    description:
      "Begin a captivating realm through the East Coast Canada, departing Montreal. With visits to Athens, Venice, each day brings a new adventure and deeper connection to the region.",
    rating: 4.5,
    tags: ["cruise", "cruise-ship", "relaxation"],
  },
  {
    basePrice: 2768,
    departureLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    arrivalLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
        {
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
      ],
      description:
        "Discover the wonders of East Coast Canada aboard this luminous cruise departing from Montreal. Journey through crystal waters to explore the treasures of Malta, Lisbon, Dubrovnik, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1267 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montreal to Malta",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Malta to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Lisbon to Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Montreal",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montreal",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Montreal",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Javier Murray",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Haitian", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "majestic.horizon.of.@velarivoyages.com",
          contactNumber: "+1-184-935-2498",
        },
      },
    ],
    title: "Majestic Horizon of the Stone-Walled Allure",
    description:
      "Discover the wonders of East Coast Canada aboard this luminous cruise departing from Montreal. Journey through crystal waters to explore the treasures of Malta, Lisbon, Dubrovnik, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.7,
    tags: ["tropical"],
  },
  {
    basePrice: 5729,
    departureLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    arrivalLocation: {
      city: "Malta",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Escape into the calm waters of East Coast Canada with this moonlit journey from Montreal. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Florence, Milan, Santorini, Malta.",
      distance: "705 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Montreal to Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Florence to Milan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Santorini to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montreal",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Walter Wells",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Haitian", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
        contact: {
          contactEmail: "secluded.legacy.of.t@velarivoyages.com",
          contactNumber: "+1-390-701-1945",
        },
      },
    ],
    title: "Secluded Legacy of the Maple Coast",
    description:
      "Escape into the calm waters of East Coast Canada with this moonlit journey from Montreal. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Florence, Milan, Santorini, Malta.",
    rating: 5.0,
    tags: ["cruise-ship", "holiday-cruise", "cruise-holiday"],
  },
  {
    basePrice: 7245,
    departureLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    arrivalLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
        {
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
      ],
      description:
        "Sail into splendor from Montreal on a velvet voyage through East Coast Canada. Let each stop—from Lisbon to Barcelona—reveal the unique flavors and colors of the region.",
      distance: "571 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Montreal to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Lisbon to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Barcelona to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Mykonos to Montreal",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montreal",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Montreal",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gary Parker",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Haitian", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/91.jpg",
        contact: {
          contactEmail: "breathtaking.expedit@velarivoyages.com",
          contactNumber: "+1-824-293-1437",
        },
      },
    ],
    title: "Breathtaking Expedition of the Harbor Havens",
    description:
      "Sail into splendor from Montreal on a velvet voyage through East Coast Canada. Let each stop—from Lisbon to Barcelona—reveal the unique flavors and colors of the region.",
    rating: 4.2,
    tags: ["cruise-adventure", "cruise-journey"],
  },
  {
    basePrice: 3355,
    departureLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    arrivalLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
      ],
      description:
        "Sail away from Montreal into the beautiful expanse of East Coast Canada. Along the way, enjoy rich cultural experiences in Barcelona, Florence, where history, nature, and cuisine collide.",
      distance: "1381 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Montreal to Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Florence to Montreal",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montreal",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Montreal",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Paul Lawson",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Haitian", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "riveting.exploration@velarivoyages.com",
          contactNumber: "+1-399-905-4675",
        },
      },
    ],
    title: "Riveting Exploration of the Stone-Walled Allure",
    description:
      "Sail away from Montreal into the beautiful expanse of East Coast Canada. Along the way, enjoy rich cultural experiences in Barcelona, Florence, where history, nature, and cuisine collide.",
    rating: 4.3,
    tags: ["exclusive", "cultural", "themed-cruise"],
  },
  {
    basePrice: 5465,
    departureLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    arrivalLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
      ],
      description:
        "Depart from the iconic port of Montreal and sail through the enchanting East Coast Canada. Explore vibrant destinations like Dubrovnik, Lisbon, Venice, Rome, each offering its own unique charm and local flair.",
      distance: "1424 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Montreal to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Lisbon to Venice",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Venice to Rome",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Rome to Montreal",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montreal",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Montreal",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thomas Warren",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Haitian", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "dreamlike.elevation.@velarivoyages.com",
          contactNumber: "+1-207-341-5922",
        },
      },
    ],
    title: "Dreamlike Elevation of the Seaway Frontiers",
    description:
      "Depart from the iconic port of Montreal and sail through the enchanting East Coast Canada. Explore vibrant destinations like Dubrovnik, Lisbon, Venice, Rome, each offering its own unique charm and local flair.",
    rating: 4.6,
    tags: ["themed-cruise", "anniversary-cruise", "repositioning"],
  },
  {
    basePrice: 1742,
    departureLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    arrivalLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
      ],
      description:
        "This hand-selected idyllic cruise offers a true taste of East Coast Canada. Depart from Montreal and explore ports like Dubrovnik, Barcelona, each telling a story through food, music, and tradition.",
      distance: "947 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Montreal to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Barcelona to Montreal",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montreal",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Montreal",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ralph Day",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Haitian", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "sundrenched.infinite@velarivoyages.com",
          contactNumber: "+1-269-919-1430",
        },
      },
    ],
    title: "Sun-Drenched Infinite of the Seafaring Legacies",
    description:
      "This hand-selected idyllic cruise offers a true taste of East Coast Canada. Depart from Montreal and explore ports like Dubrovnik, Barcelona, each telling a story through food, music, and tradition.",
    rating: 4.7,
    tags: ["historical", "cruise-getaway"],
  },
  {
    basePrice: 2207,
    departureLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    arrivalLocation: {
      city: "Montreal",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 45.5017,
        longitude: -73.5673,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Montreal",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 45.5017,
            longitude: -73.5673,
          },
        },
      ],
      description:
        "Explore a new side of East Coast Canada with this riveting excursion starting in Montreal. Visit charming ports such as Mykonos, Venice, each offering its own unique rhythm.",
      distance: "953 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montreal to Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Mykonos to Venice",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Venice to Montreal",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montreal",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Montreal",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thabo Payne",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Haitian", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "whispering.awakening@velarivoyages.com",
          contactNumber: "+1-180-984-4618",
        },
      },
    ],
    title: "Whispering Awakening of the Celtic Shores",
    description:
      "Explore a new side of East Coast Canada with this riveting excursion starting in Montreal. Visit charming ports such as Mykonos, Venice, each offering its own unique rhythm.",
    rating: 4.6,
    tags: ["culinary", "cultural"],
  },
];
