import { Cruise } from "@/lib/interfaces/services/cruises";

export const buenosAiresCruises: Cruise[] = [
  {
    basePrice: 7475,
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
    category: "mainstream",
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
        "Start in the vibrant city of Buenos Aires and venture into the iconic South America. Discover authentic local cultures, cuisine, and coastal wonders in Santiago, Rio de Janeiro, Montevideo.",
      distance: "1302 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Montevideo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Montevideo to Buenos Aires",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bruce Reed",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "captivating.serenade@velarivoyages.com",
          contactNumber: "+1-766-112-2736",
        },
      },
    ],
    title: "Captivating Serenade of the Passion by the Plate",
    description:
      "Start in the vibrant city of Buenos Aires and venture into the iconic South America. Discover authentic local cultures, cuisine, and coastal wonders in Santiago, Rio de Janeiro, Montevideo.",
    rating: 4.2,
    tags: ["cruise-journey", "cruise-ship"],
  },
  {
    basePrice: 9966,
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
    category: "premium",
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
        {
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
        "Sail from Buenos Aires into a world of wonder. The South America beckons with unforgettable ports like Santiago, Lima, Cartagena, where every view is picture-perfect and every moment is priceless.",
      distance: "1258 nautical miles",
      totalDuration: "13 days",
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
          description: "Sailing from Santiago to Lima",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Lima to Cartagena",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Cartagena to Buenos Aires",
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
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Roy Gibson",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "harmonic.saga.of.the@velarivoyages.com",
          contactNumber: "+1-740-405-5258",
        },
      },
    ],
    title: "Harmonic Saga of the Lost Cities & Living Cultures",
    description:
      "Sail from Buenos Aires into a world of wonder. The South America beckons with unforgettable ports like Santiago, Lima, Cartagena, where every view is picture-perfect and every moment is priceless.",
    rating: 4.8,
    tags: ["fall-cruise", "glacier-cruise", "repositioning"],
  },
  {
    basePrice: 2140,
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
    category: "luxury",
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
      ],
      description:
        "From bustling Buenos Aires to serene South America shores, this cruise invites you to relax, explore, and indulge. Stops at Montevideo, Lima, Santiago deliver a balanced blend of culture and comfort.",
      distance: "1117 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Montevideo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Lima to Santiago",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Edward Ellis",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "azure.escape.of.the.@velarivoyages.com",
          contactNumber: "+1-743-269-8353",
        },
      },
    ],
    title: "Azure Escape of the Patagonian Reach",
    description:
      "From bustling Buenos Aires to serene South America shores, this cruise invites you to relax, explore, and indulge. Stops at Montevideo, Lima, Santiago deliver a balanced blend of culture and comfort.",
    rating: 4.4,
    tags: ["wildlife", "cruise-getaway"],
  },
  {
    basePrice: 1989,
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
    category: "premium-luxury",
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
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Set sail from historic Buenos Aires for a modern escape into the South America. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Rio de Janeiro, Lima, Montevideo, Santiago.",
      distance: "686 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Lima",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Montevideo to Santiago",
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
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gary Bennett",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "breathtaking.adventu@velarivoyages.com",
          contactNumber: "+1-419-395-1469",
        },
      },
    ],
    title: "Breathtaking Adventure of the Incan Echoes",
    description:
      "Set sail from historic Buenos Aires for a modern escape into the South America. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Rio de Janeiro, Lima, Montevideo, Santiago.",
    rating: 4.2,
    tags: ["general", "cruise-line", "long-distance"],
  },
  {
    basePrice: 2206,
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
    hasPopularDestination: false,
    category: "mainstream",
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
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
        "Experience coastal elegance on this quest from Buenos Aires, where the journey through South America includes stops in Cartagena, Montevideo, each more enchanting than the last.",
      distance: "889 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Cartagena to Montevideo",
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
          description: "Exploring Cartagena",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Mateo Fletcher",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "opulent.enigma.of.th@velarivoyages.com",
          contactNumber: "+1-228-387-1779",
        },
      },
    ],
    title: "Opulent Enigma of the Cape Horn Crossings",
    description:
      "Experience coastal elegance on this quest from Buenos Aires, where the journey through South America includes stops in Cartagena, Montevideo, each more enchanting than the last.",
    rating: 5.0,
    tags: ["fall-cruise", "expedition"],
  },
  {
    basePrice: 3051,
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
    hasPopularDestination: false,
    category: "premium",
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
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
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
        "Escape into the calm waters of South America with this majestic journey from Buenos Aires. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Rio de Janeiro, Lima.",
      distance: "699 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Lima",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Lima to Buenos Aires",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nathan Payne",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "secluded.realm.of.th@velarivoyages.com",
          contactNumber: "+1-553-881-8474",
        },
      },
    ],
    title: "Secluded Realm of the Patagonian Reach",
    description:
      "Escape into the calm waters of South America with this majestic journey from Buenos Aires. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Rio de Janeiro, Lima.",
    rating: 4.9,
    tags: ["short-getaway", "adventure"],
  },
  {
    basePrice: 2790,
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
    category: "premium-luxury",
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
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Let this charming voyage redefine your idea of travel. From Buenos Aires, explore the South America in luxurious comfort, stopping at Montevideo, Santiago where every port offers a new chapter.",
      distance: "740 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Montevideo to Santiago",
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
          description: "Exploring Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ralph Keller",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "infinite.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-905-416-2206",
        },
      },
    ],
    title: "Infinite Eclipse of the Tango Capital",
    description:
      "Let this charming voyage redefine your idea of travel. From Buenos Aires, explore the South America in luxurious comfort, stopping at Montevideo, Santiago where every port offers a new chapter.",
    rating: 4.8,
    tags: ["short-getaway", "family-friendly"],
  },
  {
    basePrice: 2670,
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
    hasPopularDestination: true,
    category: "expedition",
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
      ],
      description:
        "Depart from Buenos Aires on this thoughtfully designed reunion across the South America. Savor coastal charm, cultural treasures, and ocean views with stops at Lima, Santiago.",
      distance: "1047 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Lima",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lima to Santiago",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joel Lawson",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "midnight.adventure.o@velarivoyages.com",
          contactNumber: "+1-649-285-3990",
        },
      },
    ],
    title: "Midnight Adventure of the Riverfront Elegance",
    description:
      "Depart from Buenos Aires on this thoughtfully designed reunion across the South America. Savor coastal charm, cultural treasures, and ocean views with stops at Lima, Santiago.",
    rating: 4.5,
    tags: ["family-friendly", "relaxation"],
  },
  {
    basePrice: 7169,
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
    category: "mainstream",
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
        "Let the waves lead you from Buenos Aires on this pearlescent horizon. Traverse the iconic waters of South America and discover the beauty of Rio de Janeiro, Montevideo.",
      distance: "699 nautical miles",
      totalDuration: "12 days",
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
          description: "Sailing from Rio de Janeiro to Montevideo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Montevideo to Buenos Aires",
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
          description: "Exploring Montevideo",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Elijah Jennings",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
        contact: {
          contactEmail: "pristine.discovery.o@velarivoyages.com",
          contactNumber: "+1-772-230-9354",
        },
      },
    ],
    title: "Pristine Discovery of the Tango Capital",
    description:
      "Let the waves lead you from Buenos Aires on this pearlescent horizon. Traverse the iconic waters of South America and discover the beauty of Rio de Janeiro, Montevideo.",
    rating: 4.9,
    tags: ["VIP"],
  },
  {
    basePrice: 6721,
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
    category: "luxury",
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
        "Depart from the iconic port of Buenos Aires and sail through the enchanting South America. Explore vibrant destinations like Lima, Montevideo, each offering its own unique charm and local flair.",
      distance: "847 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Lima",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Montevideo to Buenos Aires",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Liam Ellis",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "aweinspiring.odyssey@velarivoyages.com",
          contactNumber: "+1-992-402-3526",
        },
      },
    ],
    title: "Awe-Inspiring Odyssey of the Passion by the Plate",
    description:
      "Depart from the iconic port of Buenos Aires and sail through the enchanting South America. Explore vibrant destinations like Lima, Montevideo, each offering its own unique charm and local flair.",
    rating: 5.0,
    tags: ["culinary", "romantic"],
  },
  {
    basePrice: 7175,
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
      city: "Cartagena",
      country: "Colombia",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
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
      ],
      description:
        "An escape like no other begins in Buenos Aires, where your excursion launches into the heart of South America. Discover the magic of Rio de Janeiro, Montevideo, Cartagena with style and sophistication.",
      distance: "946 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Montevideo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Montevideo to Cartagena",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Scott Foster",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "luminous.legacy.of.t@velarivoyages.com",
          contactNumber: "+1-872-521-9181",
        },
      },
    ],
    title: "Luminous Legacy of the Twilight Tango City",
    description:
      "An escape like no other begins in Buenos Aires, where your excursion launches into the heart of South America. Discover the magic of Rio de Janeiro, Montevideo, Cartagena with style and sophistication.",
    rating: 4.4,
    tags: ["fall-cruise", "short-getaway"],
  },
  {
    basePrice: 4385,
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
    category: "entry-luxury",
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
        "Savor each moment of this lavish escape through South America, starting in Buenos Aires. Visit renowned locations like Cartagena, Lima, Rio de Janeiro, where adventure and relaxation intertwine.",
      distance: "903 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Cartagena to Lima",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Lima to Rio de Janeiro",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jordan Day",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
        contact: {
          contactEmail: "charming.pilgrimage.@velarivoyages.com",
          contactNumber: "+1-713-918-7907",
        },
      },
    ],
    title: "Charming Pilgrimage of the Riverfront Elegance",
    description:
      "Savor each moment of this lavish escape through South America, starting in Buenos Aires. Visit renowned locations like Cartagena, Lima, Rio de Janeiro, where adventure and relaxation intertwine.",
    rating: 4.2,
    tags: ["historical", "cruise-adventure", "cruise-holiday"],
  },
  {
    basePrice: 5908,
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
    category: "expedition",
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
        "Discover the wonders of South America aboard this infinite cruise departing from Buenos Aires. Journey through crystal waters to explore the treasures of Cartagena, Lima, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1313 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Cartagena to Lima",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Patrick Ellis",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "infinite.quest.of.th@velarivoyages.com",
          contactNumber: "+1-351-674-2103",
        },
      },
    ],
    title: "Infinite Quest of the Paris of South America",
    description:
      "Discover the wonders of South America aboard this infinite cruise departing from Buenos Aires. Journey through crystal waters to explore the treasures of Cartagena, Lima, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.3,
    tags: ["tropical", "cruise"],
  },
  {
    basePrice: 9636,
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
    category: "premium-luxury",
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
        {
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
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
        "Set sail from historic Buenos Aires for a modern escape into the South America. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Rio de Janeiro, Santiago, Lima.",
      distance: "546 nautical miles",
      totalDuration: "14 days",
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
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Santiago to Lima",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Lima to Buenos Aires",
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
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Tyler Henderson",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "legendary.exploratio@velarivoyages.com",
          contactNumber: "+1-699-591-5931",
        },
      },
    ],
    title: "Legendary Exploration of the Samba Shores",
    description:
      "Set sail from historic Buenos Aires for a modern escape into the South America. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Rio de Janeiro, Santiago, Lima.",
    rating: 4.9,
    tags: ["cruise-journey", "cruise-adventure"],
  },
  {
    basePrice: 3509,
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
    category: "premium",
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
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
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
        "This inspiring oasis departs from Buenos Aires, navigating the diverse landscapes and vibrant cities of South America. Must-see stops include Rio de Janeiro, Cartagena, Montevideo, Lima.",
      distance: "956 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Cartagena",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Cartagena to Montevideo",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Montevideo to Lima",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Frank Ellis",
        role: "Travel Advisor",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "alluring.adventure.o@velarivoyages.com",
          contactNumber: "+1-799-687-6664",
        },
      },
    ],
    title: "Alluring Adventure of the Melancholy Rhythms",
    description:
      "This inspiring oasis departs from Buenos Aires, navigating the diverse landscapes and vibrant cities of South America. Must-see stops include Rio de Janeiro, Cartagena, Montevideo, Lima.",
    rating: 5.0,
    tags: ["luxury"],
  },
  {
    basePrice: 1122,
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
    hasPopularDestination: false,
    category: "premium",
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
        "This enchanting sanctum begins in Buenos Aires and ventures deep into the heart of South America. Wander through colorful markets, historic streets, and serene coastlines at Cartagena, Lima.",
      distance: "626 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 5",
          end: "Day 6",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Sophia Henderson",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Aymara", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "harmonic.escape.of.t@velarivoyages.com",
          contactNumber: "+1-597-638-9998",
        },
      },
    ],
    title: "Harmonic Escape of the Incan Echoes",
    description:
      "This enchanting sanctum begins in Buenos Aires and ventures deep into the heart of South America. Wander through colorful markets, historic streets, and serene coastlines at Cartagena, Lima.",
    rating: 4.4,
    tags: ["luxury", "long-distance"],
  },
  {
    basePrice: 6314,
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
    category: "expedition",
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
        "Set course from Buenos Aires for an inspiring pristine journey across South America. Whether exploring ancient ruins in Santiago or soaking up coastal views in Rio de Janeiro, every day offers a perfect mix of discovery and relaxation.",
      distance: "886 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Montevideo",
        },
        {
          start: "Day 12",
          end: "Day 13",
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
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Julie Grant",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Aymara", "Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "hidden.exploration.o@velarivoyages.com",
          contactNumber: "+1-367-420-8455",
        },
      },
    ],
    title: "Hidden Exploration of the Paris of South America",
    description:
      "Set course from Buenos Aires for an inspiring pristine journey across South America. Whether exploring ancient ruins in Santiago or soaking up coastal views in Rio de Janeiro, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.1,
    tags: ["repositioning", "tropical"],
  },
  {
    basePrice: 3450,
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
    hasPopularDestination: false,
    category: "premium-luxury",
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
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
        "Depart from Buenos Aires on this thoughtfully designed sanctum across the South America. Savor coastal charm, cultural treasures, and ocean views with stops at Santiago, Cartagena, Rio de Janeiro.",
      distance: "677 nautical miles",
      totalDuration: "14 days",
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
          description: "Sailing from Santiago to Cartagena",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Cartagena to Rio de Janeiro",
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
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Cartagena",
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
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Melissa Griffin",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Aymara", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "unforgettable.arcadi@velarivoyages.com",
          contactNumber: "+1-646-433-9201",
        },
      },
    ],
    title: "Unforgettable Arcadia of the Paris of South America",
    description:
      "Depart from Buenos Aires on this thoughtfully designed sanctum across the South America. Savor coastal charm, cultural treasures, and ocean views with stops at Santiago, Cartagena, Rio de Janeiro.",
    rating: 4.0,
    tags: ["holiday-cruise", "themed-cruise", "culinary"],
  },
  {
    basePrice: 1398,
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
    category: "ultra-luxury",
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
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
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
        "Join us in Buenos Aires for a odyssey of a lifetime. Sail across the serene waters of South America, stopping at ports like Montevideo, Lima, Cartagena, Santiago where timeless traditions meet modern luxuries.",
      distance: "1010 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Lima to Cartagena",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Cartagena to Santiago",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Santiago to Buenos Aires",
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
          description: "Exploring Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Emma Murray",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Aymara", "Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "hidden.labyrinth.of.@velarivoyages.com",
          contactNumber: "+1-619-655-6839",
        },
      },
    ],
    title: "Hidden Labyrinth of the Samba Shores",
    description:
      "Join us in Buenos Aires for a odyssey of a lifetime. Sail across the serene waters of South America, stopping at ports like Montevideo, Lima, Cartagena, Santiago where timeless traditions meet modern luxuries.",
    rating: 4.1,
    tags: ["historical", "adventure"],
  },
  {
    basePrice: 7356,
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
    category: "mainstream",
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
        "Let this exquisite voyage redefine your idea of travel. From Buenos Aires, explore the South America in luxurious comfort, stopping at Lima, Montevideo, Cartagena where every port offers a new chapter.",
      distance: "897 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Lima",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Montevideo to Cartagena",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Cartagena to Buenos Aires",
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
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Adeline Grant",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Aymara", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "breathtaking.pilgrim@velarivoyages.com",
          contactNumber: "+1-651-958-5731",
        },
      },
    ],
    title: "Breathtaking Pilgrimage of the Twilight Tango City",
    description:
      "Let this exquisite voyage redefine your idea of travel. From Buenos Aires, explore the South America in luxurious comfort, stopping at Lima, Montevideo, Cartagena where every port offers a new chapter.",
    rating: 4.3,
    tags: ["cruise-line", "cultural", "cruise-ship"],
  },
];
