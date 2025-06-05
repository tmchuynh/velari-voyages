import { Cruise } from "@/lib/interfaces/services/cruises";

export const barcelonaCruises: Cruise[] = [
  {
    basePrice: 7661,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Depart Barcelona on a relaxing haven through the Mediterranean region. Highlights include the stunning coastlines of Rome, Florence, all while enjoying first-class amenities on board.",
      distance: "1376 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Barcelona to Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Rome to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Nathan Keller",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "secret.renaissance.o@velarivoyages.com",
          contactNumber: "+1-592-745-4057",
        },
      },
    ],
    title: "Secret Renaissance of the Whispers of Color",
    description:
      "Depart Barcelona on a relaxing haven through the Mediterranean region. Highlights include the stunning coastlines of Rome, Florence, all while enjoying first-class amenities on board.",
    rating: 4.4,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 6300,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "Set sail from Barcelona on this extraordinary haven through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Rome and Lisbon, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "584 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Barcelona to Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Rome to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Andrew Reeves",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "radiancedrenched.exp@velarivoyages.com",
          contactNumber: "+1-799-375-1793",
        },
      },
    ],
    title: "Radiance-Drenched Exploration of the Mosaic by the Sea",
    description:
      "Set sail from Barcelona on this extraordinary haven through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Rome and Lisbon, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.3,
    tags: ["long-distance", "sightseeing", "holiday-cruise"],
  },
  {
    basePrice: 6704,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
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
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
        "Leave stress behind with this curated realm from Barcelona. Sail across the best of Mediterranean and explore treasures like Mykonos, Milan, Florence with comfort and style.",
      distance: "1250 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Barcelona to Mykonos",
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
          description: "Sailing from Milan to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Barcelona",
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
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Benjamin Stewart",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "infinite.wanderlust.@velarivoyages.com",
          contactNumber: "+1-406-743-3992",
        },
      },
    ],
    title: "Infinite Wanderlust of the Sun-Kissed Labyrinth",
    description:
      "Leave stress behind with this curated realm from Barcelona. Sail across the best of Mediterranean and explore treasures like Mykonos, Milan, Florence with comfort and style.",
    rating: 4.9,
    tags: ["cruise-ship", "culinary"],
  },
  {
    basePrice: 4630,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "An unforgettable reflection awaits as you cruise from Barcelona across Mediterranean. Dive into history, flavor, and culture with stops including Florence, Athens.",
      distance: "938 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Athens to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Stephen Lawson",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "captivating.horizon.@velarivoyages.com",
          contactNumber: "+1-303-272-4630",
        },
      },
    ],
    title: "Captivating Horizon of the Gaudí’s Playground",
    description:
      "An unforgettable reflection awaits as you cruise from Barcelona across Mediterranean. Dive into history, flavor, and culture with stops including Florence, Athens.",
    rating: 4.1,
    tags: ["luxury", "cruise-line", "family-friendly"],
  },
  {
    basePrice: 5782,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
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
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Let the winds of the Mediterranean carry you from Barcelona to the most stunning ports in the region. With destinations like Venice, Dubrovnik, Milan, Santorini, this haven redefines luxury travel.",
      distance: "1134 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Barcelona to Venice",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Venice to Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Milan",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Santorini to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Venice",
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
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Timothy Hawkins",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "horizonkissed.fronti@velarivoyages.com",
          contactNumber: "+1-427-480-9089",
        },
      },
    ],
    title: "Horizon-Kissed Frontier of the Catalan Gem",
    description:
      "Let the winds of the Mediterranean carry you from Barcelona to the most stunning ports in the region. With destinations like Venice, Dubrovnik, Milan, Santorini, this haven redefines luxury travel.",
    rating: 4.2,
    tags: ["cruise-adventure", "luxury"],
  },
  {
    basePrice: 9607,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Escape the everyday with this pristine journey through Mediterranean, departing from Barcelona. You'll visit Mykonos, Rome, Dubrovnik, where every stop is a new adventure.",
      distance: "1215 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Barcelona to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Rome",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Rome to Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Matthew Wells",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "floating.discovery.o@velarivoyages.com",
          contactNumber: "+1-749-151-5517",
        },
      },
    ],
    title: "Floating Discovery of the Spires and Spirits",
    description:
      "Escape the everyday with this pristine journey through Mediterranean, departing from Barcelona. You'll visit Mykonos, Rome, Dubrovnik, where every stop is a new adventure.",
    rating: 4.6,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 4993,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "This inspiring adventure departs from Barcelona, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Athens, Venice.",
      distance: "904 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Athens",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Venice to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Athens",
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
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Walter Maxwell",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        contact: {
          contactEmail: "luxurious.sanctuary.@velarivoyages.com",
          contactNumber: "+1-964-260-4807",
        },
      },
    ],
    title: "Luxurious Sanctuary of the Mosaic by the Sea",
    description:
      "This inspiring adventure departs from Barcelona, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Athens, Venice.",
    rating: 4.0,
    tags: ["themed-cruise", "cruise-ship", "wellness"],
  },
  {
    basePrice: 8598,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
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
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Begin your journey in Barcelona, where tradition meets travel. This immersive legacy reveals the finest of Mediterranean, from the beaches of Milan to the streets of Lisbon.",
      distance: "869 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Barcelona to Milan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Milan to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Santorini to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Joel Carpenter",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "infinite.retreat.of.@velarivoyages.com",
          contactNumber: "+1-789-846-3811",
        },
      },
    ],
    title: "Infinite Retreat of the Spires and Spirits",
    description:
      "Begin your journey in Barcelona, where tradition meets travel. This immersive legacy reveals the finest of Mediterranean, from the beaches of Milan to the streets of Lisbon.",
    rating: 4.3,
    tags: ["holiday-cruise", "nature"],
  },
  {
    basePrice: 5610,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Begin your labyrinth in Barcelona, a gateway to the soul of Mediterranean. Enjoy days spent exploring Milan, Santorini, Florence, Venice and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1387 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santorini to Florence",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Florence to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thabo Spencer",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "gilded.retreat.of.th@velarivoyages.com",
          contactNumber: "+1-806-630-5610",
        },
      },
    ],
    title: "Gilded Retreat of the Gaudí’s Playground",
    description:
      "Begin your labyrinth in Barcelona, a gateway to the soul of Mediterranean. Enjoy days spent exploring Milan, Santorini, Florence, Venice and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.5,
    tags: ["weekend-cruise", "holiday-cruise"],
  },
  {
    basePrice: 4033,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
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
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
      ],
      description:
        "Let the winds of the Mediterranean carry you from Barcelona to the most stunning ports in the region. With destinations like Florence, Malta, Dubrovnik, Santorini, this tide redefines luxury travel.",
      distance: "832 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Malta to Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Malta",
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
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sebastian Spencer",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "pristine.quest.of.th@velarivoyages.com",
          contactNumber: "+1-639-198-5422",
        },
      },
    ],
    title: "Pristine Quest of the Crystalline Bays",
    description:
      "Let the winds of the Mediterranean carry you from Barcelona to the most stunning ports in the region. With destinations like Florence, Malta, Dubrovnik, Santorini, this tide redefines luxury travel.",
    rating: 4.3,
    tags: ["weekend-cruise", "expedition"],
  },
  {
    basePrice: 7735,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Let the waves lead you from Barcelona on this panoramic pilgrimage. Traverse the iconic waters of Mediterranean and discover the beauty of Rome, Athens.",
      distance: "549 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Rome to Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Athens to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Antonio Payne",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/25.jpg",
        contact: {
          contactEmail: "heavenly.wanderlust.@velarivoyages.com",
          contactNumber: "+1-315-430-8407",
        },
      },
    ],
    title: "Heavenly Wanderlust of the Ancient Shores",
    description:
      "Let the waves lead you from Barcelona on this panoramic pilgrimage. Traverse the iconic waters of Mediterranean and discover the beauty of Rome, Athens.",
    rating: 4.0,
    tags: ["weekend-cruise", "cruise-ship", "wildlife"],
  },
  {
    basePrice: 3790,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
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
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "From bustling Barcelona to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Santorini, Mykonos, Venice, Milan deliver a balanced blend of culture and comfort.",
      distance: "1112 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Barcelona to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santorini to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Mykonos to Venice",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Venice to Milan",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Milan to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Brandon Sutton",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "luxurious.horizon.of@velarivoyages.com",
          contactNumber: "+1-850-209-9994",
        },
      },
    ],
    title: "Luxurious Horizon of the Mosaic by the Sea",
    description:
      "From bustling Barcelona to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Santorini, Mykonos, Venice, Milan deliver a balanced blend of culture and comfort.",
    rating: 4.9,
    tags: ["tropical"],
  },
  {
    basePrice: 1013,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
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
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
      ],
      description:
        "Sail into splendor from Barcelona on a crystalline voyage through Mediterranean. Let each stop—from Lisbon to Florence—reveal the unique flavors and colors of the region.",
      distance: "1403 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Barcelona to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lisbon to Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Florence to Santorini",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Santorini to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Lisbon",
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
          description: "Exploring Santorini",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jacob Carpenter",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
        contact: {
          contactEmail: "azure.requiem.of.the@velarivoyages.com",
          contactNumber: "+1-959-217-9779",
        },
      },
    ],
    title: "Azure Requiem of the Sun-Kissed Labyrinth",
    description:
      "Sail into splendor from Barcelona on a crystalline voyage through Mediterranean. Let each stop—from Lisbon to Florence—reveal the unique flavors and colors of the region.",
    rating: 4.3,
    tags: ["cruise-holiday", "long-distance"],
  },
  {
    basePrice: 7322,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Set sail from historic Barcelona for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Milan, Dubrovnik, Venice.",
      distance: "1269 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Milan to Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Venice",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Venice to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Milan",
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
          description: "Exploring Venice",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Keith Spencer",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "oceanic.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-101-551-1427",
        },
      },
    ],
    title: "Oceanic Odyssey of the Whispers of Color",
    description:
      "Set sail from historic Barcelona for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Milan, Dubrovnik, Venice.",
    rating: 5.0,
    tags: ["glacier-cruise", "holiday-cruise", "general"],
  },
  {
    basePrice: 6133,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Discover the wonders of Mediterranean aboard this majestic cruise departing from Barcelona. Journey through crystal waters to explore the treasures of Venice, Mykonos, Rome, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "565 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Barcelona to Venice",
        },
        {
          start: "Day 7",
          end: "Day 8",
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
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Rome to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Roy Payne",
        role: "Loyalty Program Representative",
        languages: ["English", "Greek", "Norwegian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "legendary.pulse.of.t@velarivoyages.com",
          contactNumber: "+1-721-572-3071",
        },
      },
    ],
    title: "Legendary Pulse of the Classical Crossroads",
    description:
      "Discover the wonders of Mediterranean aboard this majestic cruise departing from Barcelona. Journey through crystal waters to explore the treasures of Venice, Mykonos, Rome, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.2,
    tags: ["wildlife"],
  },
  {
    basePrice: 9542,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
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
      ],
      description:
        "Begin your journey in Barcelona, where tradition meets travel. This immersive panorama reveals the finest of Mediterranean, from the beaches of Florence to the streets of Malta.",
      distance: "1088 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Malta to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Avery Keller",
        role: "Reservations Agent",
        languages: ["English", "Finnish", "Polish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "tranquil.whisper.of.@velarivoyages.com",
          contactNumber: "+1-594-639-1153",
        },
      },
    ],
    title: "Tranquil Whisper of the Mosaic by the Sea",
    description:
      "Begin your journey in Barcelona, where tradition meets travel. This immersive panorama reveals the finest of Mediterranean, from the beaches of Florence to the streets of Malta.",
    rating: 4.4,
    tags: ["short-getaway", "VIP"],
  },
  {
    basePrice: 6621,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Begin your journey in Barcelona, where tradition meets travel. This immersive reverie reveals the finest of Mediterranean, from the beaches of Malta to the streets of Athens.",
      distance: "1220 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Malta",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Malta to Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Athens to Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Mykonos to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
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
          description: "Exploring Athens",
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
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Samantha Mitchell",
        role: "Reservations Agent",
        languages: ["English", "Finnish", "Polish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
        contact: {
          contactEmail: "verdant.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-771-725-8378",
        },
      },
    ],
    title: "Verdant Voyage of the Mediterranean Mosaics",
    description:
      "Begin your journey in Barcelona, where tradition meets travel. This immersive reverie reveals the finest of Mediterranean, from the beaches of Malta to the streets of Athens.",
    rating: 4.4,
    tags: ["glacier-cruise", "cruise-line", "cruise-vacation"],
  },
  {
    basePrice: 5176,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Malta",
      country: "Malta",
      coordinates: {
        latitude: 35.9375,
        longitude: 14.3754,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
      ],
      description:
        "Begin an epic saga from Barcelona, where the seas meet culture. Visit the remarkable ports of Rome, Malta while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "553 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Barcelona to Rome",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Rome to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Emma Clark",
        role: "Reservations Agent",
        languages: ["English", "Finnish", "Polish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "velvet.renaissance.o@velarivoyages.com",
          contactNumber: "+1-384-341-4852",
        },
      },
    ],
    title: "Velvet Renaissance of the Catalan Gem",
    description:
      "Begin an epic saga from Barcelona, where the seas meet culture. Visit the remarkable ports of Rome, Malta while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.6,
    tags: ["repositioning", "cultural", "relaxation"],
  },
  {
    basePrice: 6766,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Barcelona on this radiant journey across Mediterranean. Uncover the beauty and history of Athens, Mykonos, Dubrovnik with curated excursions, world-class cuisine, and exceptional service.",
      distance: "727 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Athens",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Athens to Mykonos",
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
          description: "Sailing from Dubrovnik to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Athens",
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
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Collins",
        role: "Reservations Agent",
        languages: ["English", "Finnish", "Polish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/93.jpg",
        contact: {
          contactEmail: "radiant.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-464-643-6352",
        },
      },
    ],
    title: "Radiant Voyage of the Gaudí’s Playground",
    description:
      "Sail away from the charming harbor of Barcelona on this radiant journey across Mediterranean. Uncover the beauty and history of Athens, Mykonos, Dubrovnik with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.1,
    tags: ["adventure", "family-friendly"],
  },
  {
    basePrice: 2058,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Set sail from Barcelona on this transcendent panorama through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Florence and Venice and Dubrovnik, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "799 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Florence to Venice",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Venice to Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mia Maxwell",
        role: "Reservations Agent",
        languages: ["English", "Finnish", "Polish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "mythic.solstice.of.t@velarivoyages.com",
          contactNumber: "+1-814-830-4405",
        },
      },
    ],
    title: "Mythic Solstice of the Sun-Kissed Labyrinth",
    description:
      "Set sail from Barcelona on this transcendent panorama through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Florence and Venice and Dubrovnik, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.7,
    tags: ["repositioning"],
  },
];
