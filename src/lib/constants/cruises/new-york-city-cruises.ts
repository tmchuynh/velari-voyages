import { Cruise } from "@/lib/interfaces/services/cruises";

export const newYorkCityCruises: Cruise[] = [
  {
    basePrice: 1679,
    departureLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    arrivalLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
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
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of New York City on this spectacular journey across East Coast USA. Uncover the beauty and history of Mykonos, Milan with curated excursions, world-class cuisine, and exceptional service.",
      distance: "590 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from New York City to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Milan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Milan to New York City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New York City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring New York City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ronald Hamilton",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Portuguese", "Spanish", "Aymara"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
        contact: {
          contactEmail: "secluded.embrace.of.@velarivoyages.com",
          contactNumber: "+1-256-527-6464",
        },
      },
    ],
    title: "Secluded Embrace of the Patriot Ports",
    description:
      "Sail away from the charming harbor of New York City on this spectacular journey across East Coast USA. Uncover the beauty and history of Mykonos, Milan with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.1,
    tags: ["adventure"],
  },
  {
    basePrice: 6128,
    departureLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
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
      ],
      description:
        "From the lively departure port of New York City, this curated reunion showcases the finest of East Coast USA. With visits to Dubrovnik, Florence, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "973 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from New York City to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New York City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Philip Coleman",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Portuguese", "Spanish", "Aymara"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "spectacular.labyrint@velarivoyages.com",
          contactNumber: "+1-958-251-1510",
        },
      },
    ],
    title: "Spectacular Labyrinth of the Empire Gateway",
    description:
      "From the lively departure port of New York City, this curated reunion showcases the finest of East Coast USA. With visits to Dubrovnik, Florence, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.0,
    tags: ["themed-cruise", "glacier-cruise", "expedition"],
  },
  {
    basePrice: 9080,
    departureLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    arrivalLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
          },
        },
      ],
      description:
        "Let the waves lead you from New York City on this exquisite labyrinth. Traverse the iconic waters of East Coast USA and discover the beauty of Lisbon, Athens.",
      distance: "808 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from New York City to Lisbon",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Lisbon to Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Athens to New York City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New York City",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Lisbon",
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
          description: "Exploring New York City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Benjamin Foster",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Portuguese", "Spanish", "Aymara"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
        contact: {
          contactEmail: "oceanic.mystique.of.@velarivoyages.com",
          contactNumber: "+1-601-630-6428",
        },
      },
    ],
    title: "Oceanic Mystique of the Steel & Spirit Metropolis",
    description:
      "Let the waves lead you from New York City on this exquisite labyrinth. Traverse the iconic waters of East Coast USA and discover the beauty of Lisbon, Athens.",
    rating: 4.1,
    tags: ["cultural", "long-distance"],
  },
  {
    basePrice: 3696,
    departureLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
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
      ],
      description:
        "Begin your solstice in New York City, a gateway to the soul of East Coast USA. Enjoy days spent exploring Mykonos, Rome and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "949 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from New York City to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Mykonos to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New York City",
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
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Johnny Dixon",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Portuguese", "Spanish", "Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/26.jpg",
        contact: {
          contactEmail: "secluded.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-601-859-4993",
        },
      },
    ],
    title: "Secluded Mythos of the Sunrise Coast",
    description:
      "Begin your solstice in New York City, a gateway to the soul of East Coast USA. Enjoy days spent exploring Mykonos, Rome and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 5.0,
    tags: ["culinary", "cruise-line"],
  },
  {
    basePrice: 6745,
    departureLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    arrivalLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
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
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
          },
        },
      ],
      description:
        "Escape the everyday with this lavish journey through East Coast USA, departing from New York City. You'll visit Athens, Venice, where every stop is a new adventure.",
      distance: "776 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from New York City to Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Venice to New York City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New York City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring New York City",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Roger Hudson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Portuguese", "Spanish", "Aymara"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "velvet.sanctum.of.th@velarivoyages.com",
          contactNumber: "+1-928-195-3143",
        },
      },
    ],
    title: "Velvet Sanctum of the Big Apple",
    description:
      "Escape the everyday with this lavish journey through East Coast USA, departing from New York City. You'll visit Athens, Venice, where every stop is a new adventure.",
    rating: 4.7,
    tags: ["themed-cruise", "cruise-excursion"],
  },
  {
    basePrice: 5376,
    departureLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "This inspiring sanctuary departs from New York City, navigating the diverse landscapes and vibrant cities of East Coast USA. Must-see stops include Athens, Florence, Lisbon, Milan.",
      distance: "995 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New York City to Athens",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Athens to Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Lisbon to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New York City",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Richard Bennett",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Portuguese", "Spanish", "Aymara"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "whispering.reflectio@velarivoyages.com",
          contactNumber: "+1-197-531-7844",
        },
      },
    ],
    title: "Whispering Reflection of the Founding Footsteps",
    description:
      "This inspiring sanctuary departs from New York City, navigating the diverse landscapes and vibrant cities of East Coast USA. Must-see stops include Athens, Florence, Lisbon, Milan.",
    rating: 4.5,
    tags: ["romantic"],
  },
  {
    basePrice: 8558,
    departureLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
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
          city: "Santorini",
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
      ],
      description:
        "From the lively departure port of New York City, this curated elevation showcases the finest of East Coast USA. With visits to Athens, Santorini, Barcelona, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1212 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from New York City to Athens",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Athens to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Santorini to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New York City",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Rajesh Dean",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Portuguese", "Spanish", "Aymara"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
        contact: {
          contactEmail: "midnight.lullaby.of.@velarivoyages.com",
          contactNumber: "+1-162-741-1001",
        },
      },
    ],
    title: "Midnight Lullaby of the Empire Gateway",
    description:
      "From the lively departure port of New York City, this curated elevation showcases the finest of East Coast USA. With visits to Athens, Santorini, Barcelona, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.3,
    tags: ["romantic", "long-distance"],
  },
  {
    basePrice: 4806,
    departureLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    arrivalLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
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
          city: "Dubrovnik",
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
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
          },
        },
      ],
      description:
        "Let the waves lead you from New York City on this captivating excursion. Traverse the iconic waters of East Coast USA and discover the beauty of Venice, Dubrovnik, Milan, Athens.",
      distance: "1230 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from New York City to Venice",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Venice to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Milan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Milan to Athens",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Athens to New York City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New York City",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring New York City",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jeremy Maxwell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Portuguese", "Spanish", "Aymara"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "immersive.sojourn.of@velarivoyages.com",
          contactNumber: "+1-380-566-5845",
        },
      },
    ],
    title: "Immersive Sojourn of the Big Apple",
    description:
      "Let the waves lead you from New York City on this captivating excursion. Traverse the iconic waters of East Coast USA and discover the beauty of Venice, Dubrovnik, Milan, Athens.",
    rating: 4.9,
    tags: ["cruise-getaway", "historical", "seasonal"],
  },
  {
    basePrice: 5185,
    departureLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Your oasis begins in New York City, where every sunset on the East Coast USA horizon promises another day of discovery—from Mykonos, Florence, Rome to hidden ports of charm.",
      distance: "684 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from New York City to Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Mykonos to Florence",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Florence to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New York City",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Gary Chambers",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Portuguese", "Spanish", "Aymara"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "forbidden.mystique.o@velarivoyages.com",
          contactNumber: "+1-163-953-7694",
        },
      },
    ],
    title: "Forbidden Mystique of the Big Apple",
    description:
      "Your oasis begins in New York City, where every sunset on the East Coast USA horizon promises another day of discovery—from Mykonos, Florence, Rome to hidden ports of charm.",
    rating: 4.8,
    tags: ["VIP", "nature", "general"],
  },
  {
    basePrice: 7097,
    departureLocation: {
      city: "New York City",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "New York City",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 40.7128,
            longitude: -74.006,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "Set sail from New York City for a voyage like no other. From the picturesque landscapes of Mykonos to the lively ambiance of Athens, this pristine cruise will redefine your view of East Coast USA.",
      distance: "857 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New York City to Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Mykonos to Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Venice to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New York City",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Timothy Morgan",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Portuguese", "Spanish", "Aymara"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "luminous.pilgrimage.@velarivoyages.com",
          contactNumber: "+1-395-455-9167",
        },
      },
    ],
    title: "Luminous Pilgrimage of the Gotham Pulse",
    description:
      "Set sail from New York City for a voyage like no other. From the picturesque landscapes of Mykonos to the lively ambiance of Athens, this pristine cruise will redefine your view of East Coast USA.",
    rating: 4.4,
    tags: ["repositioning", "long-distance", "cruise-holiday"],
  },
];
