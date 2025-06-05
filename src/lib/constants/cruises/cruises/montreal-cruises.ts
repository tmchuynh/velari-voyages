import { Cruise } from "@/lib/interfaces/services/cruises";

export const montrealCruises: Cruise[] = [
  {
    basePrice: 2506,
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
      city: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
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
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
      ],
      description:
        "Your eclipse begins in Montreal, where every sunset on the East Coast Canada horizon promises another day of discovery—from Athens, Mykonos, Lisbon to hidden ports of charm.",
      distance: "1276 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Montreal to Athens",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Athens to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Mykonos to Lisbon",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Murray",
        role: "Marketing Coordinator",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "transcendent.haven.o@velarivoyages.com",
          contactNumber: "+1-309-134-4127",
        },
      },
    ],
    title: "Transcendent Haven of the French-Canadian Heart",
    description:
      "Your eclipse begins in Montreal, where every sunset on the East Coast Canada horizon promises another day of discovery—from Athens, Mykonos, Lisbon to hidden ports of charm.",
    rating: 4.4,
    tags: ["themed-cruise", "adventure"],
  },
  {
    basePrice: 6166,
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
    hasPopularDestination: false,
    category: "luxury-cruise",
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
        "This horizon takes you beyond the ordinary, starting in Montreal. With breathtaking stops in Santorini, Dubrovnik, Milan, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1087 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Montreal to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santorini to Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Milan",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Riley Spencer",
        role: "Marketing Coordinator",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/71.jpg",
        contact: {
          contactEmail: "celestial.discovery.@velarivoyages.com",
          contactNumber: "+1-895-791-9610",
        },
      },
    ],
    title: "Celestial Discovery of the French-Canadian Heart",
    description:
      "This horizon takes you beyond the ordinary, starting in Montreal. With breathtaking stops in Santorini, Dubrovnik, Milan, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.7,
    tags: ["wellness"],
  },
  {
    basePrice: 2785,
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
    category: "theme-cruise",
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
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
        "Sail away from Montreal into the beautiful expanse of East Coast Canada. Along the way, enjoy rich cultural experiences in Malta, Mykonos, Dubrovnik, where history, nature, and cuisine collide.",
      distance: "750 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montreal to Malta",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Malta to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
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
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Montreal",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Maya Sutton",
        role: "Marketing Coordinator",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "heavenly.enigma.of.t@velarivoyages.com",
          contactNumber: "+1-137-429-8383",
        },
      },
    ],
    title: "Heavenly Enigma of the Stone-Walled Allure",
    description:
      "Sail away from Montreal into the beautiful expanse of East Coast Canada. Along the way, enjoy rich cultural experiences in Malta, Mykonos, Dubrovnik, where history, nature, and cuisine collide.",
    rating: 4.3,
    tags: ["culinary", "cruise-getaway", "anniversary-cruise"],
  },
  {
    basePrice: 8968,
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
      city: "Athens",
      country: "Greece",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
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
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this majestic renaissance through East Coast Canada, starting from the illustrious port of Montreal. From Mykonos to Athens, each destination offers its own story, culture, and breathtaking views.",
      distance: "538 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Montreal to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Mykonos to Athens",
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
          description: "Exploring Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Jennings",
        role: "Marketing Coordinator",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "heavenly.awakening.o@velarivoyages.com",
          contactNumber: "+1-153-879-3222",
        },
      },
    ],
    title: "Heavenly Awakening of the Bilingual Canvas",
    description:
      "Experience the elegance of the seas on this majestic renaissance through East Coast Canada, starting from the illustrious port of Montreal. From Mykonos to Athens, each destination offers its own story, culture, and breathtaking views.",
    rating: 5.0,
    tags: ["cruise", "culinary", "cruise-line"],
  },
  {
    basePrice: 3797,
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
      city: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
      ],
      description:
        "Sail away from the charming harbor of Montreal on this starlit journey across East Coast Canada. Uncover the beauty and history of Santorini, Florence, Barcelona, Lisbon with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1225 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montreal to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Florence to Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Barcelona to Lisbon",
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
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Ellie Hudson",
        role: "Marketing Coordinator",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "serene.currents.of.t@velarivoyages.com",
          contactNumber: "+1-406-598-3802",
        },
      },
    ],
    title: "Serene Currents of the Stone-Walled Allure",
    description:
      "Sail away from the charming harbor of Montreal on this starlit journey across East Coast Canada. Uncover the beauty and history of Santorini, Florence, Barcelona, Lisbon with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.2,
    tags: ["adventure", "tropical", "romantic"],
  },
  {
    basePrice: 6257,
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
    hasPopularDestination: true,
    category: "tropical-cruise",
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
        "Depart from iconic Montreal and traverse the East Coast Canada with visits to Venice, Santorini. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1467 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montreal to Venice",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Venice to Santorini",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Santorini to Montreal",
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
          description: "Exploring Venice",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Montreal",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Aaliyah Gardner",
        role: "Marketing Coordinator",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "idyllic.mythos.of.th@velarivoyages.com",
          contactNumber: "+1-252-549-2895",
        },
      },
    ],
    title: "Idyllic Mythos of the Bilingual Canvas",
    description:
      "Depart from iconic Montreal and traverse the East Coast Canada with visits to Venice, Santorini. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.4,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 4029,
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
    category: "repositioning-cruise",
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
        "Savor each moment of this verdant escape through East Coast Canada, starting in Montreal. Visit renowned locations like Florence, Lisbon, Athens, Milan, where adventure and relaxation intertwine.",
      distance: "727 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montreal to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Lisbon to Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Athens to Milan",
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
          description: "Exploring Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amanda Murray",
        role: "Marketing Coordinator",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
        contact: {
          contactEmail: "legendary.solstice.o@velarivoyages.com",
          contactNumber: "+1-170-298-5832",
        },
      },
    ],
    title: "Legendary Solstice of the Island Metropolis",
    description:
      "Savor each moment of this verdant escape through East Coast Canada, starting in Montreal. Visit renowned locations like Florence, Lisbon, Athens, Milan, where adventure and relaxation intertwine.",
    rating: 4.3,
    tags: ["repositioning"],
  },
  {
    basePrice: 1291,
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
      city: "Santorini",
      country: "Greece",
      coordinates: {
        latitude: 36.3932,
        longitude: 25.4615,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
      ],
      description:
        "Join us in Montreal for a tranquility of a lifetime. Sail across the serene waters of East Coast Canada, stopping at ports like Venice, Athens, Barcelona, Santorini where timeless traditions meet modern luxuries.",
      distance: "875 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Montreal to Venice",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Venice to Athens",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Athens to Barcelona",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Barcelona to Santorini",
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
          description: "Exploring Venice",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Donna Stewart",
        role: "Marketing Coordinator",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "charming.reverie.of.@velarivoyages.com",
          contactNumber: "+1-735-527-1189",
        },
      },
    ],
    title: "Charming Reverie of the French-Canadian Heart",
    description:
      "Join us in Montreal for a tranquility of a lifetime. Sail across the serene waters of East Coast Canada, stopping at ports like Venice, Athens, Barcelona, Santorini where timeless traditions meet modern luxuries.",
    rating: 4.1,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 5472,
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
    hasPopularDestination: true,
    category: "glacier-cruise",
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
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
        "An escape like no other begins in Montreal, where your mirage launches into the heart of East Coast Canada. Discover the magic of Mykonos, Dubrovnik, Milan with style and sophistication.",
      distance: "872 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montreal to Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Milan",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Milan to Montreal",
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
          description: "Exploring Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Montreal",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Linda Palmer",
        role: "Marketing Coordinator",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "moonlit.adventure.of@velarivoyages.com",
          contactNumber: "+1-433-560-3272",
        },
      },
    ],
    title: "Moonlit Adventure of the Bilingual Canvas",
    description:
      "An escape like no other begins in Montreal, where your mirage launches into the heart of East Coast Canada. Discover the magic of Mykonos, Dubrovnik, Milan with style and sophistication.",
    rating: 4.9,
    tags: ["luxury"],
  },
  {
    basePrice: 3413,
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
      city: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
      ],
      description:
        "This idyllic reflection begins in Montreal and ventures deep into the heart of East Coast Canada. Wander through colorful markets, historic streets, and serene coastlines at Rome, Lisbon.",
      distance: "747 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Montreal to Rome",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Rome to Lisbon",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nora Montgomery",
        role: "Marketing Coordinator",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/26.jpg",
        contact: {
          contactEmail: "extraordinary.passag@velarivoyages.com",
          contactNumber: "+1-354-106-1749",
        },
      },
    ],
    title: "Extraordinary Passage of the Snow-Kissed Bohemia",
    description:
      "This idyllic reflection begins in Montreal and ventures deep into the heart of East Coast Canada. Wander through colorful markets, historic streets, and serene coastlines at Rome, Lisbon.",
    rating: 4.6,
    tags: ["family-friendly", "long-distance"],
  },
];
