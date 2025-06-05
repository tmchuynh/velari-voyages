import { Cruise } from "@/lib/interfaces/services/cruises";

export const losAngelesCruises: Cruise[] = [
  {
    basePrice: 8116,
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "Leave ordinary behind as you sail from Los Angeles across the captivating West Coast USA. Discover the distinctive personality of each destination, from Santorini, Lisbon.",
      distance: "618 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Los Angeles to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Los Angeles",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "David Reeves",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "pearlescent.mirage.o@velarivoyages.com",
          contactNumber: "+1-870-478-3876",
        },
      },
    ],
    title: "Pearlescent Mirage of the Golden Coastline",
    description:
      "Leave ordinary behind as you sail from Los Angeles across the captivating West Coast USA. Discover the distinctive personality of each destination, from Santorini, Lisbon.",
    rating: 4.8,
    tags: ["historical", "cruise"],
  },
  {
    basePrice: 5130,
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    arrivalLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
          },
        },
      ],
      description:
        "Depart from iconic Los Angeles and traverse the West Coast USA with visits to Mykonos, Florence, Dubrovnik, Rome. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1423 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Los Angeles to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Mykonos to Florence",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Florence to Dubrovnik",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Rome to Los Angeles",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Los Angeles",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Los Angeles",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Oliver Maxwell",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "Portuguese"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/55.jpg",
        contact: {
          contactEmail: "unforgettable.mystiq@velarivoyages.com",
          contactNumber: "+1-372-201-1304",
        },
      },
    ],
    title: "Unforgettable Mystique of the City of Dreams",
    description:
      "Depart from iconic Los Angeles and traverse the West Coast USA with visits to Mykonos, Florence, Dubrovnik, Rome. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.2,
    tags: ["glacier-cruise", "seasonal"],
  },
  {
    basePrice: 9482,
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    arrivalLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your pristine journey from Los Angeles. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Milan, Barcelona, Mykonos, Rome.",
      distance: "1221 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Los Angeles to Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Barcelona to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Mykonos to Rome",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Rome to Los Angeles",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Los Angeles",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Milan",
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
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Los Angeles",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Frank Parker",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "exquisite.mythos.of.@velarivoyages.com",
          contactNumber: "+1-734-542-6513",
        },
      },
    ],
    title: "Exquisite Mythos of the Surf & Silence",
    description:
      "Let the spirit of exploration guide your pristine journey from Los Angeles. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Milan, Barcelona, Mykonos, Rome.",
    rating: 4.3,
    tags: ["nature", "wellness"],
  },
  {
    basePrice: 6977,
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    arrivalLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
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
          city: "Santorini",
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
          },
        },
      ],
      description:
        "Embark from Los Angeles and traverse the West Coast USA in style. Whether it’s the energy of Lisbon or the calm of Santorini, each destination reveals a new side of paradise.",
      distance: "694 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Los Angeles to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Santorini to Milan",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Barcelona to Los Angeles",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Los Angeles",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Los Angeles",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Bruce Fisher",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "Portuguese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
        contact: {
          contactEmail: "celestial.wanderlust@velarivoyages.com",
          contactNumber: "+1-678-680-8203",
        },
      },
    ],
    title: "Celestial Wanderlust of the Palm-Shaded Horizon",
    description:
      "Embark from Los Angeles and traverse the West Coast USA in style. Whether it’s the energy of Lisbon or the calm of Santorini, each destination reveals a new side of paradise.",
    rating: 4.7,
    tags: ["general"],
  },
  {
    basePrice: 5034,
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    arrivalLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Los Angeles on this immersive journey across West Coast USA. Uncover the beauty and history of Florence, Rome, Athens, Venice with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1380 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Los Angeles to Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Florence to Rome",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Rome to Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Venice to Los Angeles",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Los Angeles",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Los Angeles",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Austin Wells",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "infinite.symphony.of@velarivoyages.com",
          contactNumber: "+1-166-509-3746",
        },
      },
    ],
    title: "Infinite Symphony of the Golden Coastline",
    description:
      "Sail away from the charming harbor of Los Angeles on this immersive journey across West Coast USA. Uncover the beauty and history of Florence, Rome, Athens, Venice with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.7,
    tags: ["relaxation", "romantic", "general"],
  },
  {
    basePrice: 4822,
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    arrivalLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
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
          city: "Athens",
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
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
          },
        },
      ],
      description:
        "Let this riveting voyage redefine your idea of travel. From Los Angeles, explore the West Coast USA in luxurious comfort, stopping at Mykonos, Athens, Barcelona where every port offers a new chapter.",
      distance: "514 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Los Angeles to Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Mykonos to Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Athens to Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Barcelona to Los Angeles",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Los Angeles",
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
          description: "Exploring Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Los Angeles",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nathan Parker",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
        contact: {
          contactEmail: "majestic.tide.of.the@velarivoyages.com",
          contactNumber: "+1-787-721-7740",
        },
      },
    ],
    title: "Majestic Tide of the Bohemian Shores",
    description:
      "Let this riveting voyage redefine your idea of travel. From Los Angeles, explore the West Coast USA in luxurious comfort, stopping at Mykonos, Athens, Barcelona where every port offers a new chapter.",
    rating: 4.2,
    tags: ["exclusive"],
  },
  {
    basePrice: 4248,
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    arrivalLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
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
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
          },
        },
      ],
      description:
        "Set sail from Los Angeles for a voyage like no other. From the picturesque landscapes of Mykonos to the lively ambiance of Athens, this harmonic cruise will redefine your view of West Coast USA.",
      distance: "562 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Los Angeles to Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Mykonos to Athens",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Venice to Los Angeles",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Los Angeles",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Los Angeles",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Austin Maxwell",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/47.jpg",
        contact: {
          contactEmail: "mesmerizing.sojourn.@velarivoyages.com",
          contactNumber: "+1-255-497-7695",
        },
      },
    ],
    title: "Mesmerizing Sojourn of the Wine Country Views",
    description:
      "Set sail from Los Angeles for a voyage like no other. From the picturesque landscapes of Mykonos to the lively ambiance of Athens, this harmonic cruise will redefine your view of West Coast USA.",
    rating: 4.5,
    tags: ["cruise-journey", "sightseeing", "family-friendly"],
  },
  {
    basePrice: 2561,
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
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
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Set off on a odyssey from Los Angeles that captures the essence of West Coast USA. Discover cultural gems and culinary delights across Venice, Mykonos, Rome, Milan.",
      distance: "1314 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Los Angeles to Venice",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Venice to Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Mykonos to Rome",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Rome to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Los Angeles",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Nash",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "tranquil.elevation.o@velarivoyages.com",
          contactNumber: "+1-887-329-8221",
        },
      },
    ],
    title: "Tranquil Elevation of the Cliffside Skylines",
    description:
      "Set off on a odyssey from Los Angeles that captures the essence of West Coast USA. Discover cultural gems and culinary delights across Venice, Mykonos, Rome, Milan.",
    rating: 4.4,
    tags: ["relaxation", "luxury"],
  },
  {
    basePrice: 7336,
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    arrivalLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
          },
        },
      ],
      description:
        "Leave stress behind with this curated sanctum from Los Angeles. Sail across the best of West Coast USA and explore treasures like Malta, Barcelona, Rome with comfort and style.",
      distance: "741 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Los Angeles to Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Malta to Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Barcelona to Rome",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Rome to Los Angeles",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Los Angeles",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Los Angeles",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Eric Cooper",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/55.jpg",
        contact: {
          contactEmail: "velvet.panorama.of.t@velarivoyages.com",
          contactNumber: "+1-511-644-3572",
        },
      },
    ],
    title: "Velvet Panorama of the City of Dreams",
    description:
      "Leave stress behind with this curated sanctum from Los Angeles. Sail across the best of West Coast USA and explore treasures like Malta, Barcelona, Rome with comfort and style.",
    rating: 4.2,
    tags: ["nature", "cruise-excursion"],
  },
  {
    basePrice: 7231,
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Los Angeles",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
      ],
      description:
        "Let the winds of the West Coast USA carry you from Los Angeles to the most stunning ports in the region. With destinations like Milan, Barcelona, Dubrovnik, this horizon redefines luxury travel.",
      distance: "1231 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Los Angeles to Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Los Angeles",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Miguel Douglas",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "Portuguese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "panoramic.frontier.o@velarivoyages.com",
          contactNumber: "+1-105-908-1893",
        },
      },
    ],
    title: "Panoramic Frontier of the Golden Gate Voyage",
    description:
      "Let the winds of the West Coast USA carry you from Los Angeles to the most stunning ports in the region. With destinations like Milan, Barcelona, Dubrovnik, this horizon redefines luxury travel.",
    rating: 4.3,
    tags: ["historical"],
  },
];
