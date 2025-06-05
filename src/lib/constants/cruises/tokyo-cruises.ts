import { Cruise } from "@/lib/interfaces/services/cruises";

export const tokyoCruises: Cruise[] = [
  {
    basePrice: 1764,
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    arrivalLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Bangkok",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
      ],
      description:
        "Escape the everyday with this starlit journey through Asia Pacific, departing from Tokyo. You'll visit Hong Kong, Singapore, Kyoto, Bangkok, where every stop is a new adventure.",
      distance: "1082 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tokyo to Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Hong Kong to Singapore",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Singapore to Kyoto",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Kyoto to Bangkok",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Sailing from Bangkok to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 19",
          end: "Day 19",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Mateo Coleman",
        role: "Loyalty Program Representative",
        languages: ["Japanese", "Thai", "Bengali", "Chinese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "moonlit.lullaby.of.t@velarivoyages.com",
          contactNumber: "+1-131-262-2895",
        },
      },
    ],
    title: "Moonlit Lullaby of the City of Still Chaos",
    description:
      "Escape the everyday with this starlit journey through Asia Pacific, departing from Tokyo. You'll visit Hong Kong, Singapore, Kyoto, Bangkok, where every stop is a new adventure.",
    rating: 4.3,
    tags: ["VIP", "nature"],
  },
  {
    basePrice: 4044,
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    arrivalLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
      ],
      description:
        "Your exploration begins in Tokyo, where every sunset on the Asia Pacific horizon promises another day of discovery—from Auckland, Kyoto, Ho Chi Minh City, Melbourne to hidden ports of charm.",
      distance: "1202 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Tokyo to Auckland",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Auckland to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Kyoto to Ho Chi Minh City",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Melbourne",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Melbourne to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Steven Reed",
        role: "Loyalty Program Representative",
        languages: ["Japanese", "Thai", "Bengali", "Chinese"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "riveting.quest.of.th@velarivoyages.com",
          contactNumber: "+1-971-499-2159",
        },
      },
    ],
    title: "Riveting Quest of the Temple of Lights",
    description:
      "Your exploration begins in Tokyo, where every sunset on the Asia Pacific horizon promises another day of discovery—from Auckland, Kyoto, Ho Chi Minh City, Melbourne to hidden ports of charm.",
    rating: 4.8,
    tags: ["nature"],
  },
  {
    basePrice: 5555,
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
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
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Bali",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Shanghai",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Your panorama begins in Tokyo, where every sunset on the Asia Pacific horizon promises another day of discovery—from Bali, Shanghai to hidden ports of charm.",
      distance: "901 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Tokyo to Bali",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Bali to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Diego Chambers",
        role: "Loyalty Program Representative",
        languages: ["Japanese", "Thai", "Bengali", "Chinese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "panoramic.horizon.of@velarivoyages.com",
          contactNumber: "+1-663-932-9731",
        },
      },
    ],
    title: "Panoramic Horizon of the Shimmering Contradiction",
    description:
      "Your panorama begins in Tokyo, where every sunset on the Asia Pacific horizon promises another day of discovery—from Bali, Shanghai to hidden ports of charm.",
    rating: 4.9,
    tags: ["nature", "weekend-cruise"],
  },
  {
    basePrice: 7023,
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    arrivalLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
      ],
      description:
        "Join us in Tokyo for a serenade of a lifetime. Sail across the serene waters of Asia Pacific, stopping at ports like Hong Kong, Melbourne where timeless traditions meet modern luxuries.",
      distance: "1257 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tokyo to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Hong Kong to Melbourne",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Melbourne to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "William Chambers",
        role: "Loyalty Program Representative",
        languages: ["Japanese", "Thai", "Bengali", "Chinese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "aweinspiring.sanctua@velarivoyages.com",
          contactNumber: "+1-477-569-5360",
        },
      },
    ],
    title: "Awe-Inspiring Sanctuary of the Temple of Lights",
    description:
      "Join us in Tokyo for a serenade of a lifetime. Sail across the serene waters of Asia Pacific, stopping at ports like Hong Kong, Melbourne where timeless traditions meet modern luxuries.",
    rating: 4.8,
    tags: ["tropical"],
  },
  {
    basePrice: 2170,
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    arrivalLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
        {
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
      ],
      description:
        "This inspiring sanctuary departs from Tokyo, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Melbourne, Yokohama, Kyoto.",
      distance: "1203 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Tokyo to Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Melbourne to Yokohama",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Yokohama to Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Kyoto to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Adam Porter",
        role: "Loyalty Program Representative",
        languages: ["Japanese", "Thai", "Bengali", "Chinese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/55.jpg",
        contact: {
          contactEmail: "dreamlike.adventure.@velarivoyages.com",
          contactNumber: "+1-496-818-2052",
        },
      },
    ],
    title: "Dreamlike Adventure of the City of Still Chaos",
    description:
      "This inspiring sanctuary departs from Tokyo, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Melbourne, Yokohama, Kyoto.",
    rating: 4.5,
    tags: ["adventure"],
  },
  {
    basePrice: 2468,
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    arrivalLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
        {
          city: "Shanghai",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
      ],
      description:
        "This hand-selected timeless cruise offers a true taste of Asia Pacific. Depart from Tokyo and explore ports like Melbourne, Shanghai, Hong Kong, Yokohama, each telling a story through food, music, and tradition.",
      distance: "1223 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Tokyo to Melbourne",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Melbourne to Shanghai",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Shanghai to Hong Kong",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Hong Kong to Yokohama",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Yokohama to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Louis Crawford",
        role: "Loyalty Program Representative",
        languages: ["Japanese", "Thai", "Bengali", "Chinese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "mesmerizing.elevatio@velarivoyages.com",
          contactNumber: "+1-887-127-1561",
        },
      },
    ],
    title: "Mesmerizing Elevation of the Neon Capital",
    description:
      "This hand-selected timeless cruise offers a true taste of Asia Pacific. Depart from Tokyo and explore ports like Melbourne, Shanghai, Hong Kong, Yokohama, each telling a story through food, music, and tradition.",
    rating: 4.8,
    tags: ["tropical"],
  },
  {
    basePrice: 7097,
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    arrivalLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
      ],
      description:
        "Depart from iconic Tokyo and traverse the Asia Pacific with visits to Kyoto, Ho Chi Minh City. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1245 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Tokyo to Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Kyoto to Ho Chi Minh City",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mason Gardner",
        role: "Loyalty Program Representative",
        languages: ["Japanese", "Thai", "Bengali", "Chinese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "golden.pulse.of.the.@velarivoyages.com",
          contactNumber: "+1-594-215-1369",
        },
      },
    ],
    title: "Golden Pulse of the Island Kingdoms",
    description:
      "Depart from iconic Tokyo and traverse the Asia Pacific with visits to Kyoto, Ho Chi Minh City. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.5,
    tags: ["wildlife"],
  },
  {
    basePrice: 8952,
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    arrivalLocation: {
      city: "Ho Chi Minh City",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the waves lead you from Tokyo on this floating adventure. Traverse the iconic waters of Asia Pacific and discover the beauty of Kyoto, Ho Chi Minh City.",
      distance: "533 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tokyo to Kyoto",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Kyoto to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Richard Stewart",
        role: "Loyalty Program Representative",
        languages: ["Japanese", "Thai", "Bengali", "Chinese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "starlit.journey.of.t@velarivoyages.com",
          contactNumber: "+1-411-385-6639",
        },
      },
    ],
    title: "Starlit Journey of the Neon Capital",
    description:
      "Let the waves lead you from Tokyo on this floating adventure. Traverse the iconic waters of Asia Pacific and discover the beauty of Kyoto, Ho Chi Minh City.",
    rating: 4.1,
    tags: ["glacier-cruise", "romantic", "cruise-experience"],
  },
  {
    basePrice: 5171,
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    arrivalLocation: {
      city: "Hong Kong",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
        {
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Begin a captivating adventure through the Asia Pacific, departing Tokyo. With visits to Melbourne, Hong Kong, each day brings a new adventure and deeper connection to the region.",
      distance: "1494 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Tokyo to Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Melbourne to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Richard Holloway",
        role: "Loyalty Program Representative",
        languages: ["Japanese", "Thai", "Bengali", "Chinese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "exquisite.sanctuary.@velarivoyages.com",
          contactNumber: "+1-227-475-3651",
        },
      },
    ],
    title: "Exquisite Sanctuary of the Tea-Laced Traditions",
    description:
      "Begin a captivating adventure through the Asia Pacific, departing Tokyo. With visits to Melbourne, Hong Kong, each day brings a new adventure and deeper connection to the region.",
    rating: 4.8,
    tags: ["adventure", "long-distance"],
  },
  {
    basePrice: 9476,
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    arrivalLocation: {
      city: "Kyoto",
      country: "Japan",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Tokyo",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
        {
          city: "Bangkok",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Set sail from historic Tokyo for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Singapore, Bangkok, Kyoto.",
      distance: "822 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Tokyo to Singapore",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Singapore to Bangkok",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Bangkok to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Albert Russell",
        role: "Loyalty Program Representative",
        languages: ["Japanese", "Thai", "Bengali", "Chinese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "moonlit.wanderlust.o@velarivoyages.com",
          contactNumber: "+1-639-831-2270",
        },
      },
    ],
    title: "Moonlit Wanderlust of the Skyline of the Rising Sun",
    description:
      "Set sail from historic Tokyo for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Singapore, Bangkok, Kyoto.",
    rating: 4.8,
    tags: ["cruise-line"],
  },
];
