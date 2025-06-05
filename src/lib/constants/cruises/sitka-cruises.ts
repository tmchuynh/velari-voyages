import { Cruise } from "@/lib/interfaces/services/cruises";

export const sitkaCruises: Cruise[] = [
  {
    basePrice: 8123,
    departureLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
        "Let the spirit of exploration guide your moonlit journey from Sitka. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Dubrovnik, Athens, Mykonos, Rome.",
      distance: "1215 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sitka to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Athens",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Athens to Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Mykonos to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Mykonos",
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
        name: "Harold Sutton",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "tranquil.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-427-532-4067",
        },
      },
    ],
    title: "Tranquil Odyssey of the Exotic Realms",
    description:
      "Let the spirit of exploration guide your moonlit journey from Sitka. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Dubrovnik, Athens, Mykonos, Rome.",
    rating: 4.3,
    tags: ["cultural"],
  },
  {
    basePrice: 4965,
    departureLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "",
          region: "",
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
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Start in the vibrant city of Sitka and venture into the iconic Sitka. Discover authentic local cultures, cuisine, and coastal wonders in Malta, Milan, Lisbon, Dubrovnik.",
      distance: "764 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sitka to Malta",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Malta to Milan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Milan to Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Lisbon to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Darrell Parker",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "midnight.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-240-637-4283",
        },
      },
    ],
    title: "Midnight Odyssey of the Exotic Realms",
    description:
      "Start in the vibrant city of Sitka and venture into the iconic Sitka. Discover authentic local cultures, cuisine, and coastal wonders in Malta, Milan, Lisbon, Dubrovnik.",
    rating: 4.2,
    tags: ["long-distance", "themed-cruise", "romantic"],
  },
  {
    basePrice: 4536,
    departureLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "",
      region: "",
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
          city: "Sitka",
          country: "",
          region: "",
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Sitka",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail from Sitka into a world of wonder. The Sitka beckons with unforgettable ports like Lisbon, Rome, Malta, Florence, where every view is picture-perfect and every moment is priceless.",
      distance: "608 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Sitka to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Lisbon to Rome",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Rome to Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Malta to Florence",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Florence to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 5",
          end: "Day 6",
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
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Louis Graves",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "exquisite.reunion.of@velarivoyages.com",
          contactNumber: "+1-364-171-4991",
        },
      },
    ],
    title: "Exquisite Reunion of the Exotic Realms",
    description:
      "Sail from Sitka into a world of wonder. The Sitka beckons with unforgettable ports like Lisbon, Rome, Malta, Florence, where every view is picture-perfect and every moment is priceless.",
    rating: 4.2,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 6875,
    departureLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "",
          region: "",
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
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Sitka",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Start in the vibrant city of Sitka and venture into the iconic Sitka. Discover authentic local cultures, cuisine, and coastal wonders in Rome, Mykonos, Milan, Dubrovnik.",
      distance: "1231 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sitka to Rome",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Rome to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Mykonos to Milan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Milan to Dubrovnik",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Brian Coleman",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
        contact: {
          contactEmail: "charming.wanderlust.@velarivoyages.com",
          contactNumber: "+1-279-498-3156",
        },
      },
    ],
    title: "Charming Wanderlust of the Exotic Realms",
    description:
      "Start in the vibrant city of Sitka and venture into the iconic Sitka. Discover authentic local cultures, cuisine, and coastal wonders in Rome, Mykonos, Milan, Dubrovnik.",
    rating: 4.6,
    tags: ["romantic"],
  },
  {
    basePrice: 6834,
    departureLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Santorini",
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
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Sitka",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Your passage begins in Sitka, where every sunset on the Sitka horizon promises another day of discovery—from Dubrovnik, Santorini, Rome, Malta to hidden ports of charm.",
      distance: "604 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sitka to Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Santorini to Rome",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Rome to Malta",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Malta to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Randy Hunter",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "timeless.mystique.of@velarivoyages.com",
          contactNumber: "+1-269-969-1980",
        },
      },
    ],
    title: "Timeless Mystique of the Exotic Realms",
    description:
      "Your passage begins in Sitka, where every sunset on the Sitka horizon promises another day of discovery—from Dubrovnik, Santorini, Rome, Malta to hidden ports of charm.",
    rating: 4.8,
    tags: ["VIP", "seasonal", "romantic"],
  },
  {
    basePrice: 6001,
    departureLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "",
          region: "",
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
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the waves lead you from Sitka on this ornate adventure. Traverse the iconic waters of Sitka and discover the beauty of Venice, Dubrovnik.",
      distance: "565 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sitka to Venice",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Venice to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sitka",
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
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Anthony Graham",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "verdant.pilgrimage.o@velarivoyages.com",
          contactNumber: "+1-540-470-9993",
        },
      },
    ],
    title: "Verdant Pilgrimage of the Exotic Realms",
    description:
      "Let the waves lead you from Sitka on this ornate adventure. Traverse the iconic waters of Sitka and discover the beauty of Venice, Dubrovnik.",
    rating: 4.6,
    tags: ["long-distance", "wellness", "adventure"],
  },
  {
    basePrice: 8257,
    departureLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "",
          region: "",
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
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Sitka",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Depart from the iconic port of Sitka and sail through the enchanting Sitka. Explore vibrant destinations like Athens, Santorini, Milan, Malta, each offering its own unique charm and local flair.",
      distance: "947 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sitka to Athens",
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
          description: "Sailing from Santorini to Milan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Malta to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sitka",
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
          description: "Exploring Milan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aiden Nash",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "infinite.reflection.@velarivoyages.com",
          contactNumber: "+1-885-376-4945",
        },
      },
    ],
    title: "Infinite Reflection of the Exotic Realms",
    description:
      "Depart from the iconic port of Sitka and sail through the enchanting Sitka. Explore vibrant destinations like Athens, Santorini, Milan, Malta, each offering its own unique charm and local flair.",
    rating: 4.3,
    tags: ["seasonal", "cruise-experience"],
  },
  {
    basePrice: 9718,
    departureLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "",
          region: "",
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
        {
          city: "Dubrovnik",
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Sitka",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Depart Sitka on a relaxing tide through the Sitka region. Highlights include the stunning coastlines of Malta, Dubrovnik, Santorini, Milan, all while enjoying first-class amenities on board.",
      distance: "1207 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sitka to Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Malta to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Santorini to Milan",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Milan to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mason Murray",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "heavenly.currents.of@velarivoyages.com",
          contactNumber: "+1-281-672-2129",
        },
      },
    ],
    title: "Heavenly Currents of the Exotic Realms",
    description:
      "Depart Sitka on a relaxing tide through the Sitka region. Highlights include the stunning coastlines of Malta, Dubrovnik, Santorini, Milan, all while enjoying first-class amenities on board.",
    rating: 4.3,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 9458,
    departureLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
          city: "Sitka",
          country: "",
          region: "",
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
        "Depart from iconic Sitka and traverse the Sitka with visits to Malta, Venice. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1359 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sitka to Malta",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Malta to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sitka",
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
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elijah Hudson",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "immersive.elevation.@velarivoyages.com",
          contactNumber: "+1-627-811-8301",
        },
      },
    ],
    title: "Immersive Elevation of the Exotic Realms",
    description:
      "Depart from iconic Sitka and traverse the Sitka with visits to Malta, Venice. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.3,
    tags: ["historical"],
  },
  {
    basePrice: 6691,
    departureLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "",
          region: "",
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Sitka",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Depart from Sitka on this thoughtfully designed realm across the Sitka. Savor coastal charm, cultural treasures, and ocean views with stops at Milan, Rome.",
      distance: "1086 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Sitka to Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Milan to Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rome to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Milan",
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
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Richard Reed",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
        contact: {
          contactEmail: "breathtaking.lullaby@velarivoyages.com",
          contactNumber: "+1-190-210-2708",
        },
      },
    ],
    title: "Breathtaking Lullaby of the Exotic Realms",
    description:
      "Depart from Sitka on this thoughtfully designed realm across the Sitka. Savor coastal charm, cultural treasures, and ocean views with stops at Milan, Rome.",
    rating: 4.8,
    tags: ["wellness", "glacier-cruise"],
  },
];
