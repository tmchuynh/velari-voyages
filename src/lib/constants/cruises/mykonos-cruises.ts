import { Cruise } from "@/lib/interfaces/services/cruises";

export const mykonosCruises: Cruise[] = [
  {
    basePrice: 3987,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
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
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Experience coastal elegance on this passage from Mykonos, where the journey through Mediterranean includes stops in Milan, Malta, Athens, Barcelona, each more enchanting than the last.",
      distance: "658 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Mykonos to Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Malta to Athens",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Athens to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Athens",
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
        name: "Gabriel Stewart",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/35.jpg",
        contact: {
          contactEmail: "ornate.expedition.of@velarivoyages.com",
          contactNumber: "+1-562-512-6815",
        },
      },
    ],
    title: "Ornate Expedition of the Mediterranean Mosaics",
    description:
      "Experience coastal elegance on this passage from Mykonos, where the journey through Mediterranean includes stops in Milan, Malta, Athens, Barcelona, each more enchanting than the last.",
    rating: 4.8,
    tags: ["exclusive", "sightseeing", "glacier-cruise"],
  },
  {
    basePrice: 2366,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "This extraordinary tranquility from Mykonos offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Milan, Santorini and Malta, creating memories that will last a lifetime.",
      distance: "899 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Mykonos to Milan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santorini to Malta",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Malta to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Scott Gardner",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "aweinspiring.escape.@velarivoyages.com",
          contactNumber: "+1-841-630-2124",
        },
      },
    ],
    title: "Awe-Inspiring Escape of the Classical Crossroads",
    description:
      "This extraordinary tranquility from Mykonos offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Milan, Santorini and Malta, creating memories that will last a lifetime.",
    rating: 4.1,
    tags: ["anniversary-cruise", "culinary", "wellness"],
  },
  {
    basePrice: 1568,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Start in the vibrant city of Mykonos and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Santorini, Lisbon, Barcelona, Milan.",
      distance: "1149 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Mykonos to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Lisbon to Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Barcelona to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Noah Campbell",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "sundrenched.excursio@velarivoyages.com",
          contactNumber: "+1-754-535-8953",
        },
      },
    ],
    title: "Sun-Drenched Excursion of the Wine-Soaked Villages",
    description:
      "Start in the vibrant city of Mykonos and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Santorini, Lisbon, Barcelona, Milan.",
    rating: 4.5,
    tags: ["cruise-adventure", "family-friendly", "repositioning"],
  },
  {
    basePrice: 1373,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Begin your frontier in Mykonos, a gateway to the soul of Mediterranean. Enjoy days spent exploring Santorini, Milan and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1278 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Mykonos to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Santorini to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Michael Hawkins",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "opulent.sanctum.of.t@velarivoyages.com",
          contactNumber: "+1-370-708-8557",
        },
      },
    ],
    title: "Opulent Sanctum of the Ancient Shores",
    description:
      "Begin your frontier in Mykonos, a gateway to the soul of Mediterranean. Enjoy days spent exploring Santorini, Milan and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.8,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 9555,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
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
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
        "Escape to sea from Mykonos on a heavenly voyage exploring the magic of Mediterranean. Visit unforgettable locales like Santorini, Lisbon, Milan, where each stop inspires awe.",
      distance: "963 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Mykonos to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Lisbon to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Nicholas Griffin",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/91.jpg",
        contact: {
          contactEmail: "secret.renaissance.o@velarivoyages.com",
          contactNumber: "+1-641-991-4754",
        },
      },
    ],
    title: "Secret Renaissance of the Cerulean Coasts",
    description:
      "Escape to sea from Mykonos on a heavenly voyage exploring the magic of Mediterranean. Visit unforgettable locales like Santorini, Lisbon, Milan, where each stop inspires awe.",
    rating: 4.4,
    tags: ["culinary", "seasonal", "weekend-cruise"],
  },
  {
    basePrice: 1826,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
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
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
        "Set sail from historic Mykonos for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Malta, Milan, Venice.",
      distance: "1314 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Mykonos to Malta",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Malta to Milan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Milan to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Albert Graves",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "midnight.renaissance@velarivoyages.com",
          contactNumber: "+1-565-504-5221",
        },
      },
    ],
    title: "Midnight Renaissance of the Sunset Terraces",
    description:
      "Set sail from historic Mykonos for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Malta, Milan, Venice.",
    rating: 4.7,
    tags: ["cruise-experience", "cruise-getaway", "sightseeing"],
  },
  {
    basePrice: 5050,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
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
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "Your journey through the Mediterranean begins in Mykonos, where elegance meets adventure. Explore the shores of Lisbon, Rome, Milan, with curated excursions and luxurious onboard amenities.",
      distance: "1162 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lisbon to Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rome to Milan",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Milan to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Mykonos",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Michael West",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "gilded.passage.of.th@velarivoyages.com",
          contactNumber: "+1-452-561-2757",
        },
      },
    ],
    title: "Gilded Passage of the Classical Crossroads",
    description:
      "Your journey through the Mediterranean begins in Mykonos, where elegance meets adventure. Explore the shores of Lisbon, Rome, Milan, with curated excursions and luxurious onboard amenities.",
    rating: 4.3,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 1790,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
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
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "Depart from the iconic port of Mykonos and sail through the enchanting Mediterranean. Explore vibrant destinations like Lisbon, Florence, each offering its own unique charm and local flair.",
      distance: "1496 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lisbon to Florence",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Florence to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Raymond Gardner",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/0.jpg",
        contact: {
          contactEmail: "transcendent.resonan@velarivoyages.com",
          contactNumber: "+1-403-922-2928",
        },
      },
    ],
    title: "Transcendent Resonance of the Olive-Draped Hills",
    description:
      "Depart from the iconic port of Mykonos and sail through the enchanting Mediterranean. Explore vibrant destinations like Lisbon, Florence, each offering its own unique charm and local flair.",
    rating: 4.3,
    tags: ["nature", "cruise-adventure", "glacier-cruise"],
  },
  {
    basePrice: 7679,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
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
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "Launch into adventure from Mykonos and sail deep into the heart of the Mediterranean. With ports of call like Athens, Malta, Florence, Venice, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "686 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Mykonos to Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Malta to Florence",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Florence to Venice",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Venice to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Mykonos",
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
          description: "Exploring Malta",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Nicholas Porter",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/92.jpg",
        contact: {
          contactEmail: "opulent.excursion.of@velarivoyages.com",
          contactNumber: "+1-359-419-1631",
        },
      },
    ],
    title: "Opulent Excursion of the Crystalline Bays",
    description:
      "Launch into adventure from Mykonos and sail deep into the heart of the Mediterranean. With ports of call like Athens, Malta, Florence, Venice, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.0,
    tags: ["cruise-experience", "seasonal", "fall-cruise"],
  },
  {
    basePrice: 6205,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
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
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "Escape to sea from Mykonos on a spectacular voyage exploring the magic of Mediterranean. Visit unforgettable locales like Lisbon, Santorini, Athens, where each stop inspires awe.",
      distance: "1235 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santorini to Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Athens to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Vincent Jennings",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "opulent.saga.of.the.@velarivoyages.com",
          contactNumber: "+1-878-868-7333",
        },
      },
    ],
    title: "Opulent Saga of the Legacy of Empires",
    description:
      "Escape to sea from Mykonos on a spectacular voyage exploring the magic of Mediterranean. Visit unforgettable locales like Lisbon, Santorini, Athens, where each stop inspires awe.",
    rating: 4.3,
    tags: ["themed-cruise", "culinary", "sightseeing"],
  },
  {
    basePrice: 1779,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "This legacy takes you beyond the ordinary, starting in Mykonos. With breathtaking stops in Florence, Athens, Venice, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1153 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Mykonos to Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Venice to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Mykonos",
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
          description: "Exploring Athens",
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
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Timothy Nash",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
        contact: {
          contactEmail: "tidewashed.saga.of.t@velarivoyages.com",
          contactNumber: "+1-793-249-3906",
        },
      },
    ],
    title: "Tide-Washed Saga of the Crystalline Bays",
    description:
      "This legacy takes you beyond the ordinary, starting in Mykonos. With breathtaking stops in Florence, Athens, Venice, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.1,
    tags: ["general", "cruise-getaway", "cruise"],
  },
  {
    basePrice: 7371,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Start in the vibrant city of Mykonos and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Malta, Athens, Venice, Barcelona.",
      distance: "517 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Mykonos to Malta",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Malta to Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Venice to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "David Day",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "secret.tide.of.the.m@velarivoyages.com",
          contactNumber: "+1-378-591-5965",
        },
      },
    ],
    title: "Secret Tide of the Marble Cities",
    description:
      "Start in the vibrant city of Mykonos and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Malta, Athens, Venice, Barcelona.",
    rating: 4.2,
    tags: ["wildlife", "historical"],
  },
  {
    basePrice: 8027,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
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
        "Your excursion begins in Mykonos, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Lisbon to the historic streets of Venice, each stop in the Mediterranean will leave a lasting impression.",
      distance: "1220 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lisbon to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Douglas Hamilton",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "spectacular.symphony@velarivoyages.com",
          contactNumber: "+1-152-648-4911",
        },
      },
    ],
    title: "Spectacular Symphony of the Crystalline Bays",
    description:
      "Your excursion begins in Mykonos, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Lisbon to the historic streets of Venice, each stop in the Mediterranean will leave a lasting impression.",
    rating: 4.2,
    tags: ["anniversary-cruise", "general"],
  },
  {
    basePrice: 8804,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "This currents takes you beyond the ordinary, starting in Mykonos. With breathtaking stops in Malta, Rome, Santorini, Barcelona, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "942 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Mykonos to Malta",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Malta to Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Rome to Santorini",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Santorini to Barcelona",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Barcelona to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Matthew Hudson",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "mystical.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-376-215-4049",
        },
      },
    ],
    title: "Mystical Odyssey of the Marble Cities",
    description:
      "This currents takes you beyond the ordinary, starting in Mykonos. With breathtaking stops in Malta, Rome, Santorini, Barcelona, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.5,
    tags: ["holiday-cruise", "luxury"],
  },
  {
    basePrice: 9754,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "This reverie takes you beyond the ordinary, starting in Mykonos. With breathtaking stops in Barcelona, Dubrovnik, Rome, Venice, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1093 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Mykonos to Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Rome to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "John Crawford",
        role: "Loyalty Program Representative",
        languages: ["English", "Swedish", "Danish", "French"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "idyllic.frontier.of.@velarivoyages.com",
          contactNumber: "+1-224-984-1914",
        },
      },
    ],
    title: "Idyllic Frontier of the Classical Crossroads",
    description:
      "This reverie takes you beyond the ordinary, starting in Mykonos. With breathtaking stops in Barcelona, Dubrovnik, Rome, Venice, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.9,
    tags: ["short-getaway", "sightseeing"],
  },
  {
    basePrice: 7874,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
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
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "Let the waves lead you from Mykonos on this extraordinary mirage. Traverse the iconic waters of Mediterranean and discover the beauty of Milan, Malta, Dubrovnik, Barcelona.",
      distance: "1274 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Mykonos to Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Malta to Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Barcelona",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Barcelona to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Malta",
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
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Russell",
        role: "Customer Service Representative",
        languages: ["English", "Dutch", "Polish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "secret.arcadia.of.th@velarivoyages.com",
          contactNumber: "+1-867-149-8512",
        },
      },
    ],
    title: "Secret Arcadia of the Olive-Draped Hills",
    description:
      "Let the waves lead you from Mykonos on this extraordinary mirage. Traverse the iconic waters of Mediterranean and discover the beauty of Milan, Malta, Dubrovnik, Barcelona.",
    rating: 4.7,
    tags: ["cultural"],
  },
  {
    basePrice: 5040,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "Sail into splendor from Mykonos on a transcendent voyage through Mediterranean. Let each stop—from Milan to Santorini—reveal the unique flavors and colors of the region.",
      distance: "1035 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Mykonos to Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Santorini to Athens",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Malta to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Caroline Hall",
        role: "Customer Service Representative",
        languages: ["English", "Dutch", "Polish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "majestic.tide.of.the@velarivoyages.com",
          contactNumber: "+1-876-251-1750",
        },
      },
    ],
    title: "Majestic Tide of the Timeless Coastlines",
    description:
      "Sail into splendor from Mykonos on a transcendent voyage through Mediterranean. Let each stop—from Milan to Santorini—reveal the unique flavors and colors of the region.",
    rating: 4.5,
    tags: ["cultural"],
  },
  {
    basePrice: 4100,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
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
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
      ],
      description:
        "Set course from Mykonos for an inspiring pearlescent journey across Mediterranean. Whether exploring ancient ruins in Florence or soaking up coastal views in Lisbon, every day offers a perfect mix of discovery and relaxation.",
      distance: "1340 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Mykonos to Florence",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Lisbon to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Isabella Murray",
        role: "Customer Service Representative",
        languages: ["English", "Dutch", "Polish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "tranquil.reflection.@velarivoyages.com",
          contactNumber: "+1-625-772-2828",
        },
      },
    ],
    title: "Tranquil Reflection of the Legacy of Empires",
    description:
      "Set course from Mykonos for an inspiring pearlescent journey across Mediterranean. Whether exploring ancient ruins in Florence or soaking up coastal views in Lisbon, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.1,
    tags: ["sightseeing"],
  },
  {
    basePrice: 9641,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
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
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "Escape to sea from Mykonos on a mystical voyage exploring the magic of Mediterranean. Visit unforgettable locales like Santorini, Rome, where each stop inspires awe.",
      distance: "974 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Mykonos to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santorini to Rome",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Rome to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Mykonos",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Genesis Palmer",
        role: "Customer Service Representative",
        languages: ["English", "Dutch", "Polish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "harmonic.horizon.of.@velarivoyages.com",
          contactNumber: "+1-312-893-7143",
        },
      },
    ],
    title: "Harmonic Horizon of the Cerulean Coasts",
    description:
      "Escape to sea from Mykonos on a mystical voyage exploring the magic of Mediterranean. Visit unforgettable locales like Santorini, Rome, where each stop inspires awe.",
    rating: 4.2,
    tags: ["cruise-holiday", "cruise-adventure"],
  },
  {
    basePrice: 2714,
    departureLocation: {
      city: "Mykonos",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
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
          city: "Mykonos",
          country: "Greece",
          region: "Mediterranean",
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
      ],
      description:
        "Your journey through the Mediterranean begins in Mykonos, where elegance meets adventure. Explore the shores of Venice, Barcelona, Rome, with curated excursions and luxurious onboard amenities.",
      distance: "1212 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Mykonos to Venice",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Venice to Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Barcelona to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Mykonos",
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
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joan Curtis",
        role: "Customer Service Representative",
        languages: ["English", "Dutch", "Polish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "celestial.retreat.of@velarivoyages.com",
          contactNumber: "+1-153-300-6957",
        },
      },
    ],
    title: "Celestial Retreat of the Sun-Drenched Riviera",
    description:
      "Your journey through the Mediterranean begins in Mykonos, where elegance meets adventure. Explore the shores of Venice, Barcelona, Rome, with curated excursions and luxurious onboard amenities.",
    rating: 4.1,
    tags: ["cruise", "family-friendly"],
  },
];
