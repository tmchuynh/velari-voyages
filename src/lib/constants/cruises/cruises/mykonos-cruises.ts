import { Cruise } from "@/lib/interfaces/services/cruises";

export const mykonosCruises: Cruise[] = [
  {
    basePrice: 7203,
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
    category: "expedition-cruise",
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
        "Depart Mykonos on a relaxing infinite through the Mediterranean region. Highlights include the stunning coastlines of Rome, Lisbon, Florence, Santorini, all while enjoying first-class amenities on board.",
      distance: "674 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Mykonos to Rome",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Rome to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Lisbon to Florence",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Florence to Santorini",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Santorini to Mykonos",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Julie Stewart",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Czech", "Dutch"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "velvet.legacy.of.the@velarivoyages.com",
          contactNumber: "+1-410-641-8666",
        },
      },
    ],
    title: "Velvet Legacy of the Sun-Drenched Riviera",
    description:
      "Depart Mykonos on a relaxing infinite through the Mediterranean region. Highlights include the stunning coastlines of Rome, Lisbon, Florence, Santorini, all while enjoying first-class amenities on board.",
    rating: 4.9,
    tags: ["cruise-experience", "cruise-line", "tropical"],
  },
  {
    basePrice: 1214,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "This dreamlike cruise from Mykonos is your ticket to the captivating charm of the Mediterranean. Discover the delights of Florence, Rome with enriching excursions and award-winning service.",
      distance: "1039 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Mykonos to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Rome",
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
          description: "Exploring Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Janet Montgomery",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Czech", "Dutch"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "velvet.awakening.of.@velarivoyages.com",
          contactNumber: "+1-584-193-2822",
        },
      },
    ],
    title: "Velvet Awakening of the Wine-Soaked Villages",
    description:
      "This dreamlike cruise from Mykonos is your ticket to the captivating charm of the Mediterranean. Discover the delights of Florence, Rome with enriching excursions and award-winning service.",
    rating: 4.5,
    tags: ["cruise-journey", "adventure"],
  },
  {
    basePrice: 4542,
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
    category: "theme-cruise",
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Let the waves lead you from Mykonos on this velvet lullaby. Traverse the iconic waters of Mediterranean and discover the beauty of Barcelona, Milan.",
      distance: "1430 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Mykonos to Barcelona",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Barcelona to Milan",
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
          description: "Exploring Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Brenda Warren",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Czech", "Dutch"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "sundrenched.whisper.@velarivoyages.com",
          contactNumber: "+1-114-209-9204",
        },
      },
    ],
    title: "Sun-Drenched Whisper of the Citadels by the Sea",
    description:
      "Let the waves lead you from Mykonos on this velvet lullaby. Traverse the iconic waters of Mediterranean and discover the beauty of Barcelona, Milan.",
    rating: 5.0,
    tags: ["cruise-experience", "nature"],
  },
  {
    basePrice: 1145,
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
    category: "weekend-cruise",
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
        "Depart Mykonos on a relaxing odyssey through the Mediterranean region. Highlights include the stunning coastlines of Dubrovnik, Milan, Malta, Rome, all while enjoying first-class amenities on board.",
      distance: "1254 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Milan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Malta to Rome",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Rome to Mykonos",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kimberly Dean",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Czech", "Dutch"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "captivating.currents@velarivoyages.com",
          contactNumber: "+1-285-523-9390",
        },
      },
    ],
    title: "Captivating Currents of the Marble Cities",
    description:
      "Depart Mykonos on a relaxing odyssey through the Mediterranean region. Highlights include the stunning coastlines of Dubrovnik, Milan, Malta, Rome, all while enjoying first-class amenities on board.",
    rating: 4.2,
    tags: ["weekend-cruise", "general"],
  },
  {
    basePrice: 4266,
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
    category: "repositioning-cruise",
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
        "Begin your journey in Mykonos, where tradition meets travel. This immersive tranquility reveals the finest of Mediterranean, from the beaches of Lisbon to the streets of Santorini.",
      distance: "706 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Santorini to Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Athens to Dubrovnik",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Mykonos",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Dubrovnik",
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
        name: "Melissa Hayes",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Czech", "Dutch"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "charming.expedition.@velarivoyages.com",
          contactNumber: "+1-113-170-1480",
        },
      },
    ],
    title: "Charming Expedition of the Wine-Soaked Villages",
    description:
      "Begin your journey in Mykonos, where tradition meets travel. This immersive tranquility reveals the finest of Mediterranean, from the beaches of Lisbon to the streets of Santorini.",
    rating: 4.3,
    tags: ["expedition"],
  },
  {
    basePrice: 6235,
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
      city: "Santorini",
      country: "Greece",
      coordinates: {
        latitude: 36.3932,
        longitude: 25.4615,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "repositioning-cruise",
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
      ],
      description:
        "This idyllic resonance begins in Mykonos and ventures deep into the heart of Mediterranean. Wander through colorful markets, historic streets, and serene coastlines at Lisbon, Dubrovnik, Florence, Santorini.",
      distance: "1325 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lisbon to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Florence to Santorini",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Barbara Jennings",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Czech", "Dutch"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "idyllic.exploration.@velarivoyages.com",
          contactNumber: "+1-707-330-9847",
        },
      },
    ],
    title: "Idyllic Exploration of the Classical Crossroads",
    description:
      "This idyllic resonance begins in Mykonos and ventures deep into the heart of Mediterranean. Wander through colorful markets, historic streets, and serene coastlines at Lisbon, Dubrovnik, Florence, Santorini.",
    rating: 4.2,
    tags: ["romantic", "wellness"],
  },
  {
    basePrice: 5916,
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
    category: "vip-cruise",
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
        "Unwind and explore on this infinite through Mediterranean, departing from Mykonos. With every stop—from Lisbon to Dubrovnik—you’ll collect memories that last a lifetime.",
      distance: "1492 nautical miles",
      totalDuration: "11 days",
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
          description: "Sailing from Lisbon to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Mykonos",
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
          description: "Exploring Dubrovnik",
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
        name: "Leah Hudson",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Czech", "Dutch"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "golden.realm.of.the.@velarivoyages.com",
          contactNumber: "+1-677-615-5786",
        },
      },
    ],
    title: "Golden Realm of the Crystalline Bays",
    description:
      "Unwind and explore on this infinite through Mediterranean, departing from Mykonos. With every stop—from Lisbon to Dubrovnik—you’ll collect memories that last a lifetime.",
    rating: 4.8,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 2386,
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
    category: "luxury-cruise",
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
        "An escape like no other begins in Mykonos, where your tide launches into the heart of Mediterranean. Discover the magic of Venice, Barcelona, Athens, Lisbon with style and sophistication.",
      distance: "1453 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Mykonos to Venice",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Venice to Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Barcelona to Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Athens to Lisbon",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Lisbon to Mykonos",
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
          description: "Exploring Venice",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Barcelona",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Alice Maxwell",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Czech", "Dutch"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/26.jpg",
        contact: {
          contactEmail: "floating.renaissance@velarivoyages.com",
          contactNumber: "+1-616-820-4552",
        },
      },
    ],
    title: "Floating Renaissance of the Cerulean Coasts",
    description:
      "An escape like no other begins in Mykonos, where your tide launches into the heart of Mediterranean. Discover the magic of Venice, Barcelona, Athens, Lisbon with style and sophistication.",
    rating: 4.1,
    tags: ["expedition", "VIP"],
  },
  {
    basePrice: 4075,
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
      city: "Florence",
      country: "Italy",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this legendary pulse beginning in Mykonos. Visit breathtaking Mediterranean locales such as Lisbon, Rome, Milan, Florence on this unforgettable itinerary.",
      distance: "777 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lisbon to Rome",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Rome to Milan",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Milan to Florence",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Naomi Montgomery",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Czech", "Dutch"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "golden.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-271-329-1064",
        },
      },
    ],
    title: "Golden Odyssey of the Citadels by the Sea",
    description:
      "Enjoy seamless luxury on this legendary pulse beginning in Mykonos. Visit breathtaking Mediterranean locales such as Lisbon, Rome, Milan, Florence on this unforgettable itinerary.",
    rating: 4.9,
    tags: ["sightseeing", "cruise", "cruise-excursion"],
  },
  {
    basePrice: 2444,
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
    category: "anniversary-cruise",
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
        "Begin your journey in Mykonos, where tradition meets travel. This immersive oasis reveals the finest of Mediterranean, from the beaches of Milan to the streets of Lisbon.",
      distance: "989 nautical miles",
      totalDuration: "17 days",
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
          description: "Sailing from Milan to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Lisbon to Barcelona",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Barcelona to Athens",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Athens to Mykonos",
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
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Douglas",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Czech", "Dutch"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "sundrenched.mythos.o@velarivoyages.com",
          contactNumber: "+1-351-659-9364",
        },
      },
    ],
    title: "Sun-Drenched Mythos of the Crystalline Bays",
    description:
      "Begin your journey in Mykonos, where tradition meets travel. This immersive oasis reveals the finest of Mediterranean, from the beaches of Milan to the streets of Lisbon.",
    rating: 4.1,
    tags: ["fall-cruise", "repositioning"],
  },
];
