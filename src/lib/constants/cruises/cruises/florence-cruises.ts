import { Cruise } from "@/lib/interfaces/services/cruises";

export const florenceCruises: Cruise[] = [
  {
    basePrice: 1387,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Join us in Florence for a journey of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Milan, Malta, Barcelona where timeless traditions meet modern luxuries.",
      distance: "596 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Florence to Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Malta to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Wallace",
        role: "Travel Advisor",
        languages: ["English", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "breathtaking.legacy.@velarivoyages.com",
          contactNumber: "+1-346-859-3590",
        },
      },
    ],
    title: "Breathtaking Legacy of the Marble & Muse",
    description:
      "Join us in Florence for a journey of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Milan, Malta, Barcelona where timeless traditions meet modern luxuries.",
    rating: 4.8,
    tags: ["sightseeing", "anniversary-cruise", "historical"],
  },
  {
    basePrice: 6374,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
        "Sail into splendor from Florence on a legendary voyage through Mediterranean. Let each stop—from Malta to Mykonos—reveal the unique flavors and colors of the region.",
      distance: "622 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Malta to Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
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
          description: "Exploring Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kimberly Grant",
        role: "Travel Advisor",
        languages: ["English", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "breathtaking.reflect@velarivoyages.com",
          contactNumber: "+1-381-471-7750",
        },
      },
    ],
    title: "Breathtaking Reflection of the Classical Crossroads",
    description:
      "Sail into splendor from Florence on a legendary voyage through Mediterranean. Let each stop—from Malta to Mykonos—reveal the unique flavors and colors of the region.",
    rating: 4.3,
    tags: ["fall-cruise", "holiday-cruise", "long-distance"],
  },
  {
    basePrice: 2974,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
      ],
      description:
        "Cruise into cultural richness aboard this infinite legacy departing Florence. Savor local cuisine and uncover regional beauty from Athens to Malta.",
      distance: "1018 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Malta to Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Lisbon to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Malta",
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
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Betty Gardner",
        role: "Travel Advisor",
        languages: ["English", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/50.jpg",
        contact: {
          contactEmail: "eternal.symphony.of.@velarivoyages.com",
          contactNumber: "+1-188-175-3455",
        },
      },
    ],
    title: "Eternal Symphony of the Tuscan Treasure",
    description:
      "Cruise into cultural richness aboard this infinite legacy departing Florence. Savor local cuisine and uncover regional beauty from Athens to Malta.",
    rating: 4.7,
    tags: ["themed-cruise", "family-friendly"],
  },
  {
    basePrice: 9722,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
        "Cruise into cultural richness aboard this awe-inspiring realm departing Florence. Savor local cuisine and uncover regional beauty from Malta to Santorini.",
      distance: "1420 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Malta to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santorini to Milan",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Milan to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Lerato Nash",
        role: "Travel Advisor",
        languages: ["English", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "whispering.symphony.@velarivoyages.com",
          contactNumber: "+1-902-232-6905",
        },
      },
    ],
    title: "Whispering Symphony of the Canvas of Civilization",
    description:
      "Cruise into cultural richness aboard this awe-inspiring realm departing Florence. Savor local cuisine and uncover regional beauty from Malta to Santorini.",
    rating: 4.9,
    tags: ["sightseeing", "cruise-adventure", "luxury"],
  },
  {
    basePrice: 1701,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
      ],
      description:
        "Set sail from historic Florence for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Athens, Mykonos, Barcelona, Dubrovnik.",
      distance: "1056 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Athens to Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Mykonos to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Joan Palmer",
        role: "Travel Advisor",
        languages: ["English", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "dreamlike.mythos.of.@velarivoyages.com",
          contactNumber: "+1-551-552-3297",
        },
      },
    ],
    title: "Dreamlike Mythos of the Canvas of Civilization",
    description:
      "Set sail from historic Florence for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Athens, Mykonos, Barcelona, Dubrovnik.",
    rating: 4.7,
    tags: ["tropical", "holiday-cruise"],
  },
  {
    basePrice: 5090,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this midnight awakening beginning in Florence. Visit breathtaking Mediterranean locales such as Athens, Malta, Mykonos on this unforgettable itinerary.",
      distance: "512 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Malta to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Mykonos to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jessica Hudson",
        role: "Travel Advisor",
        languages: ["English", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "heavenly.exploration@velarivoyages.com",
          contactNumber: "+1-808-472-1338",
        },
      },
    ],
    title: "Heavenly Exploration of the Dreams in Terra Cotta",
    description:
      "Enjoy seamless luxury on this midnight awakening beginning in Florence. Visit breathtaking Mediterranean locales such as Athens, Malta, Mykonos on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["glacier-cruise", "cruise-holiday", "historical"],
  },
  {
    basePrice: 9814,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Let the waves lead you from Florence on this verdant saga. Traverse the iconic waters of Mediterranean and discover the beauty of Malta, Milan, Dubrovnik, Venice.",
      distance: "1107 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Malta to Milan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Milan to Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Venice",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Venice to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Hawkins",
        role: "Travel Advisor",
        languages: ["English", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        contact: {
          contactEmail: "charming.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-573-497-6118",
        },
      },
    ],
    title: "Charming Sojourn of the Marble & Muse",
    description:
      "Let the waves lead you from Florence on this verdant saga. Traverse the iconic waters of Mediterranean and discover the beauty of Malta, Milan, Dubrovnik, Venice.",
    rating: 4.6,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 1501,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Embark on an unforgettable voyage from the vibrant port of Florence, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Rome, Barcelona, Santorini, Dubrovnik, this journey combines cultural immersion with breathtaking scenery.",
      distance: "917 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Florence to Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Rome to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Barcelona to Santorini",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Santorini to Dubrovnik",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
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
          description: "Exploring Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Patricia Graham",
        role: "Travel Advisor",
        languages: ["English", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "secret.pulse.of.the.@velarivoyages.com",
          contactNumber: "+1-357-253-1570",
        },
      },
    ],
    title: "Secret Pulse of the Canvas of Civilization",
    description:
      "Embark on an unforgettable voyage from the vibrant port of Florence, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Rome, Barcelona, Santorini, Dubrovnik, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.2,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 6234,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Leave stress behind with this curated sojourn from Florence. Sail across the best of Mediterranean and explore treasures like Venice, Rome, Mykonos, Barcelona with comfort and style.",
      distance: "767 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Florence to Venice",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Venice to Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Rome to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Mykonos to Barcelona",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Barcelona to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Rome",
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
          description: "Exploring Barcelona",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Pamela Coleman",
        role: "Travel Advisor",
        languages: ["English", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "radiant.journey.of.t@velarivoyages.com",
          contactNumber: "+1-531-297-9695",
        },
      },
    ],
    title: "Radiant Journey of the Legacy of Empires",
    description:
      "Leave stress behind with this curated sojourn from Florence. Sail across the best of Mediterranean and explore treasures like Venice, Rome, Mykonos, Barcelona with comfort and style.",
    rating: 4.3,
    tags: ["cruise-vacation", "cruise-ship"],
  },
  {
    basePrice: 2953,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "This sanctum takes you beyond the ordinary, starting in Florence. With breathtaking stops in Athens, Barcelona, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1210 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Athens to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Barcelona to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Alice Fisher",
        role: "Travel Advisor",
        languages: ["English", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        contact: {
          contactEmail: "golden.sanctum.of.th@velarivoyages.com",
          contactNumber: "+1-441-378-1476",
        },
      },
    ],
    title: "Golden Sanctum of the Sunset Terraces",
    description:
      "This sanctum takes you beyond the ordinary, starting in Florence. With breathtaking stops in Athens, Barcelona, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.9,
    tags: ["cruise-journey", "wildlife"],
  },
];
