import { Cruise } from "@/lib/interfaces/services/cruises";

export const athensCruises: Cruise[] = [
  {
    basePrice: 9632,
    departureLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Athens",
          country: "Greece",
          region: "Mediterranean",
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
      ],
      description:
        "Let the waves lead you from Athens on this velvet escape. Traverse the iconic waters of Mediterranean and discover the beauty of Dubrovnik, Florence, Rome, Malta.",
      distance: "1451 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Athens to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Florence to Rome",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Rome to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Rome",
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
        name: "Leah Wallace",
        role: "Loyalty Program Representative",
        languages: ["English", "Russian", "Spanish", "Czech", "Swedish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "mythic.panorama.of.t@velarivoyages.com",
          contactNumber: "+1-402-417-5898",
        },
      },
    ],
    title: "Mythic Panorama of the Temple-Held Horizon",
    description:
      "Let the waves lead you from Athens on this velvet escape. Traverse the iconic waters of Mediterranean and discover the beauty of Dubrovnik, Florence, Rome, Malta.",
    rating: 4.9,
    tags: ["fall-cruise", "cruise-adventure", "long-distance"],
  },
  {
    basePrice: 7037,
    departureLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    arrivalLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Athens",
          country: "Greece",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
      ],
      description:
        "Let the winds of the Mediterranean carry you from Athens to the most stunning ports in the region. With destinations like Milan, Rome, this elevation redefines luxury travel.",
      distance: "1495 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Athens to Milan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Milan to Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Rome to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Milan",
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
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Amina Jennings",
        role: "Loyalty Program Representative",
        languages: ["English", "Russian", "Spanish", "Czech", "Swedish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "ornate.exploration.o@velarivoyages.com",
          contactNumber: "+1-661-161-1658",
        },
      },
    ],
    title: "Ornate Exploration of the Whispers of Olympus",
    description:
      "Let the winds of the Mediterranean carry you from Athens to the most stunning ports in the region. With destinations like Milan, Rome, this elevation redefines luxury travel.",
    rating: 4.6,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 2761,
    departureLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
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
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Athens",
          country: "Greece",
          region: "Mediterranean",
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Depart Athens on a relaxing panorama through the Mediterranean region. Highlights include the stunning coastlines of Malta, Barcelona, all while enjoying first-class amenities on board.",
      distance: "808 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Malta to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Hannah Hudson",
        role: "Loyalty Program Representative",
        languages: ["English", "Russian", "Spanish", "Czech", "Swedish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "alluring.solstice.of@velarivoyages.com",
          contactNumber: "+1-481-931-1242",
        },
      },
    ],
    title: "Alluring Solstice of the Temple-Held Horizon",
    description:
      "Depart Athens on a relaxing panorama through the Mediterranean region. Highlights include the stunning coastlines of Malta, Barcelona, all while enjoying first-class amenities on board.",
    rating: 4.0,
    tags: ["culinary", "short-getaway", "wildlife"],
  },
  {
    basePrice: 3569,
    departureLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Athens",
          country: "Greece",
          region: "Mediterranean",
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
      ],
      description:
        "Begin your journey in Athens, where tradition meets travel. This immersive whisper reveals the finest of Mediterranean, from the beaches of Barcelona to the streets of Rome.",
      distance: "1072 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Athens to Barcelona",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Barcelona to Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rome to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Alexa Stewart",
        role: "Loyalty Program Representative",
        languages: ["English", "Russian", "Spanish", "Czech", "Swedish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "lavish.passage.of.th@velarivoyages.com",
          contactNumber: "+1-154-450-5824",
        },
      },
    ],
    title: "Lavish Passage of the Whispers of Olympus",
    description:
      "Begin your journey in Athens, where tradition meets travel. This immersive whisper reveals the finest of Mediterranean, from the beaches of Barcelona to the streets of Rome.",
    rating: 4.5,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 9619,
    departureLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
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
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Athens",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Athens. This discovery through the Mediterranean unveils stunning stops including Florence, Venice, Milan, all with first-class service.",
      distance: "542 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Athens to Florence",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Florence to Venice",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Venice to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Venice",
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
        name: "Jennifer Chambers",
        role: "Loyalty Program Representative",
        languages: ["English", "Russian", "Spanish", "Czech", "Swedish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "sublime.elevation.of@velarivoyages.com",
          contactNumber: "+1-362-279-1283",
        },
      },
    ],
    title: "Sublime Elevation of the Ruins and Radiance",
    description:
      "Step into a world of elegance and exploration from Athens. This discovery through the Mediterranean unveils stunning stops including Florence, Venice, Milan, all with first-class service.",
    rating: 4.7,
    tags: ["romantic", "exclusive"],
  },
  {
    basePrice: 5207,
    departureLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
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
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Athens",
          country: "Greece",
          region: "Mediterranean",
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Begin a captivating journey through the Mediterranean, departing Athens. With visits to Dubrovnik, Santorini, Mykonos, Milan, each day brings a new adventure and deeper connection to the region.",
      distance: "968 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Athens to Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Santorini to Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Mykonos to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Donna Marshall",
        role: "Loyalty Program Representative",
        languages: ["English", "Russian", "Spanish", "Czech", "Swedish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "crystalline.realm.of@velarivoyages.com",
          contactNumber: "+1-229-430-2160",
        },
      },
    ],
    title: "Crystalline Realm of the Legacy of Empires",
    description:
      "Begin a captivating journey through the Mediterranean, departing Athens. With visits to Dubrovnik, Santorini, Mykonos, Milan, each day brings a new adventure and deeper connection to the region.",
    rating: 4.8,
    tags: ["repositioning", "exclusive"],
  },
  {
    basePrice: 7834,
    departureLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
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
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Athens",
          country: "Greece",
          region: "Mediterranean",
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "This mesmerizing exploration begins in Athens and ventures deep into the heart of Mediterranean. Wander through colorful markets, historic streets, and serene coastlines at Dubrovnik, Lisbon, Venice, Florence.",
      distance: "846 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Athens to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Lisbon to Venice",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Venice to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Maya Cooper",
        role: "Loyalty Program Representative",
        languages: ["English", "Russian", "Spanish", "Czech", "Swedish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "dreamlike.passage.of@velarivoyages.com",
          contactNumber: "+1-306-275-7775",
        },
      },
    ],
    title: "Dreamlike Passage of the Ruins and Radiance",
    description:
      "This mesmerizing exploration begins in Athens and ventures deep into the heart of Mediterranean. Wander through colorful markets, historic streets, and serene coastlines at Dubrovnik, Lisbon, Venice, Florence.",
    rating: 4.6,
    tags: ["cruise-adventure"],
  },
  {
    basePrice: 8036,
    departureLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
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
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Athens",
          country: "Greece",
          region: "Mediterranean",
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Athens. Discover the historical and natural richness of Mediterranean as you cruise to spectacular destinations like Venice, Santorini.",
      distance: "577 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Venice to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Joan Holloway",
        role: "Loyalty Program Representative",
        languages: ["English", "Russian", "Spanish", "Czech", "Swedish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "majestic.excursion.o@velarivoyages.com",
          contactNumber: "+1-238-690-8101",
        },
      },
    ],
    title: "Majestic Excursion of the Ruins and Radiance",
    description:
      "A voyage of contrasts awaits from Athens. Discover the historical and natural richness of Mediterranean as you cruise to spectacular destinations like Venice, Santorini.",
    rating: 4.2,
    tags: ["tropical", "cruise-journey", "glacier-cruise"],
  },
  {
    basePrice: 1508,
    departureLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    arrivalLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Athens",
          country: "Greece",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
      ],
      description:
        "Depart from iconic Athens and traverse the Mediterranean with visits to Milan, Barcelona. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "562 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Athens to Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Barcelona to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Emily Mason",
        role: "Loyalty Program Representative",
        languages: ["English", "Russian", "Spanish", "Czech", "Swedish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "breathtaking.sanctua@velarivoyages.com",
          contactNumber: "+1-337-203-3171",
        },
      },
    ],
    title: "Breathtaking Sanctuary of the Classical Crossroads",
    description:
      "Depart from iconic Athens and traverse the Mediterranean with visits to Milan, Barcelona. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.9,
    tags: ["holiday-cruise", "adventure"],
  },
  {
    basePrice: 7697,
    departureLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    arrivalLocation: {
      city: "Athens",
      country: "Greece",
      region: "Mediterranean",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Athens",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          region: "Mediterranean",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
      ],
      description:
        "Begin a captivating currents through the Mediterranean, departing Athens. With visits to Florence, Mykonos, each day brings a new adventure and deeper connection to the region.",
      distance: "825 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Athens to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Mykonos to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ashley Henderson",
        role: "Loyalty Program Representative",
        languages: ["English", "Russian", "Spanish", "Czech", "Swedish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "harmonic.quest.of.th@velarivoyages.com",
          contactNumber: "+1-244-804-9870",
        },
      },
    ],
    title: "Harmonic Quest of the Mosaic Harbors",
    description:
      "Begin a captivating currents through the Mediterranean, departing Athens. With visits to Florence, Mykonos, each day brings a new adventure and deeper connection to the region.",
    rating: 4.8,
    tags: ["holiday-cruise", "cruise-experience", "cruise-getaway"],
  },
];
