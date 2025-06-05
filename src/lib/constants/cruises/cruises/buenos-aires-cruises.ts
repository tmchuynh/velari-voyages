import { Cruise } from "@/lib/interfaces/services/cruises";

export const buenosAiresCruises: Cruise[] = [
  {
    basePrice: 9638,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
      ],
      description:
        "This realm takes you beyond the ordinary, starting in Buenos Aires. With breathtaking stops in Santiago, Montevideo, Rio de Janeiro, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1270 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Virginia Stewart",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Guarani", "Spanish", "Portuguese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "charming.solstice.of@velarivoyages.com",
          contactNumber: "+1-113-153-3190",
        },
      },
    ],
    title: "Charming Solstice of the Tango Capital",
    description:
      "This realm takes you beyond the ordinary, starting in Buenos Aires. With breathtaking stops in Santiago, Montevideo, Rio de Janeiro, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.6,
    tags: ["romantic", "wildlife"],
  },
  {
    basePrice: 5651,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Sail away from Buenos Aires into the beautiful expanse of South America. Along the way, enjoy rich cultural experiences in Santiago, Rio de Janeiro, Lima, where history, nature, and cuisine collide.",
      distance: "515 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Alexa Foster",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Guarani", "Spanish", "Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "pearlescent.drift.of@velarivoyages.com",
          contactNumber: "+1-940-557-5378",
        },
      },
    ],
    title: "Pearlescent Drift of the Incan Echoes",
    description:
      "Sail away from Buenos Aires into the beautiful expanse of South America. Along the way, enjoy rich cultural experiences in Santiago, Rio de Janeiro, Lima, where history, nature, and cuisine collide.",
    rating: 4.6,
    tags: ["expedition", "cruise", "family-friendly"],
  },
  {
    basePrice: 5825,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "Your panorama begins in Buenos Aires, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Santiago to the historic streets of Rio de Janeiro, each stop in the South America will leave a lasting impression.",
      distance: "1196 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Lima",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Lima to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Nora West",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Guarani", "Spanish", "Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "serene.labyrinth.of.@velarivoyages.com",
          contactNumber: "+1-724-719-1096",
        },
      },
    ],
    title: "Serene Labyrinth of the Paris of South America",
    description:
      "Your panorama begins in Buenos Aires, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Santiago to the historic streets of Rio de Janeiro, each stop in the South America will leave a lasting impression.",
    rating: 4.5,
    tags: ["family-friendly", "glacier-cruise"],
  },
  {
    basePrice: 1561,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Set sail from historic Buenos Aires for a modern escape into the South America. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Montevideo, Cartagena, Lima.",
      distance: "1295 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Montevideo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Montevideo to Cartagena",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Cartagena to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Chambers",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Guarani", "Spanish", "Portuguese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "mystical.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-389-592-8597",
        },
      },
    ],
    title: "Mystical Sojourn of the Sacred Valleys",
    description:
      "Set sail from historic Buenos Aires for a modern escape into the South America. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Montevideo, Cartagena, Lima.",
    rating: 4.5,
    tags: ["cruise-journey", "cruise-line", "relaxation"],
  },
  {
    basePrice: 5750,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
      ],
      description:
        "Explore a new side of South America with this enchanting frontier starting in Buenos Aires. Visit charming ports such as Rio de Janeiro, Cartagena, Lima, Montevideo, each offering its own unique rhythm.",
      distance: "1105 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Cartagena to Lima",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Janet Knight",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Guarani", "Spanish", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "whispering.frontier.@velarivoyages.com",
          contactNumber: "+1-957-899-8203",
        },
      },
    ],
    title: "Whispering Frontier of the Riverfront Elegance",
    description:
      "Explore a new side of South America with this enchanting frontier starting in Buenos Aires. Visit charming ports such as Rio de Janeiro, Cartagena, Lima, Montevideo, each offering its own unique rhythm.",
    rating: 4.4,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 4946,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Sail into splendor from Buenos Aires on a midnight voyage through South America. Let each stop—from Rio de Janeiro to Santiago—reveal the unique flavors and colors of the region.",
      distance: "756 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Rachel Ellis",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Guarani", "Spanish", "Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "horizonkissed.wander@velarivoyages.com",
          contactNumber: "+1-642-854-8038",
        },
      },
    ],
    title: "Horizon-Kissed Wanderlust of the Patagonian Reach",
    description:
      "Sail into splendor from Buenos Aires on a midnight voyage through South America. Let each stop—from Rio de Janeiro to Santiago—reveal the unique flavors and colors of the region.",
    rating: 4.7,
    tags: ["adventure", "wellness"],
  },
  {
    basePrice: 4541,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
      ],
      description:
        "Discover the wonders of South America aboard this majestic cruise departing from Buenos Aires. Journey through crystal waters to explore the treasures of Lima, Santiago, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1379 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Lima",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Lima to Santiago",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Santiago to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Amelia Spencer",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Guarani", "Spanish", "Portuguese"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "eternal.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-230-318-4403",
        },
      },
    ],
    title: "Eternal Eclipse of the Melancholy Rhythms",
    description:
      "Discover the wonders of South America aboard this majestic cruise departing from Buenos Aires. Journey through crystal waters to explore the treasures of Lima, Santiago, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.1,
    tags: ["exclusive"],
  },
  {
    basePrice: 5119,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Let the winds of the South America carry you from Buenos Aires to the most stunning ports in the region. With destinations like Rio de Janeiro, Santiago, this retreat redefines luxury travel.",
      distance: "920 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Savannah Parker",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Guarani", "Spanish", "Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "azure.discovery.of.t@velarivoyages.com",
          contactNumber: "+1-328-330-8018",
        },
      },
    ],
    title: "Azure Discovery of the Emerald Coasts",
    description:
      "Let the winds of the South America carry you from Buenos Aires to the most stunning ports in the region. With destinations like Rio de Janeiro, Santiago, this retreat redefines luxury travel.",
    rating: 4.8,
    tags: ["historical", "cruise-vacation"],
  },
  {
    basePrice: 2852,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
      ],
      description:
        "Embark on an unforgettable requiem from the vibrant port of Buenos Aires, where you'll discover hidden gems and iconic landmarks across the South America region. With stops at Lima, Santiago, Rio de Janeiro, Montevideo, this journey combines cultural immersion with breathtaking scenery.",
      distance: "964 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Lima",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lima to Santiago",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Montevideo",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joan Fox",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Guarani", "Spanish", "Portuguese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "azure.quest.of.the.p@velarivoyages.com",
          contactNumber: "+1-906-845-1801",
        },
      },
    ],
    title: "Azure Quest of the Passion by the Plate",
    description:
      "Embark on an unforgettable requiem from the vibrant port of Buenos Aires, where you'll discover hidden gems and iconic landmarks across the South America region. With stops at Lima, Santiago, Rio de Janeiro, Montevideo, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.6,
    tags: ["culinary", "cruise-vacation"],
  },
  {
    basePrice: 9085,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Sail into splendor from Buenos Aires on a dreamlike voyage through South America. Let each stop—from Santiago to Lima—reveal the unique flavors and colors of the region.",
      distance: "1409 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Santiago to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Naomi Douglas",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Guarani", "Spanish", "Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "majestic.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-901-134-3209",
        },
      },
    ],
    title: "Majestic Sojourn of the Passion by the Plate",
    description:
      "Sail into splendor from Buenos Aires on a dreamlike voyage through South America. Let each stop—from Santiago to Lima—reveal the unique flavors and colors of the region.",
    rating: 4.4,
    tags: ["glacier-cruise", "fall-cruise"],
  },
];
