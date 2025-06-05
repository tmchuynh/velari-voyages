import { Cruise } from "@/lib/interfaces/services/cruises";

export const hongKongCruises: Cruise[] = [
  {
    basePrice: 1772,
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    arrivalLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
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
          city: "Bali",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
          },
        },
      ],
      description:
        "Discover the wonders of Asia Pacific aboard this tranquil cruise departing from Hong Kong. Journey through crystal waters to explore the treasures of Singapore, Bali, Tokyo, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1451 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Hong Kong to Singapore",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Singapore to Bali",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Bali to Tokyo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Tokyo to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brian Porter",
        role: "Group Booking Coordinator",
        languages: ["Thai", "Malay", "Chinese", "Urdu"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
        contact: {
          contactEmail: "celestial.sojourn.of@velarivoyages.com",
          contactNumber: "+1-657-824-2206",
        },
      },
    ],
    title: "Celestial Sojourn of the Pearl of the Orient",
    description:
      "Discover the wonders of Asia Pacific aboard this tranquil cruise departing from Hong Kong. Journey through crystal waters to explore the treasures of Singapore, Bali, Tokyo, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.1,
    tags: ["cruise-ship"],
  },
  {
    basePrice: 8814,
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    arrivalLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
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
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
          },
        },
      ],
      description:
        "Step aboard in Hong Kong and begin a mesmerizing journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Kyoto, Singapore, every day is unforgettable.",
      distance: "617 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Hong Kong to Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Kyoto to Singapore",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Singapore to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Alexander Carpenter",
        role: "Group Booking Coordinator",
        languages: ["Thai", "Malay", "Chinese", "Urdu"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "whispering.journey.o@velarivoyages.com",
          contactNumber: "+1-505-106-6311",
        },
      },
    ],
    title: "Whispering Journey of the Mirrored Futurescape",
    description:
      "Step aboard in Hong Kong and begin a mesmerizing journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Kyoto, Singapore, every day is unforgettable.",
    rating: 4.3,
    tags: ["cruise", "cruise-holiday"],
  },
  {
    basePrice: 4410,
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
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
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
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
        "Unwind and explore on this sanctuary through Asia Pacific, departing from Hong Kong. With every stop—from Tokyo to Ho Chi Minh City—you’ll collect memories that last a lifetime.",
      distance: "501 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Hong Kong to Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Tokyo to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Price",
        role: "Group Booking Coordinator",
        languages: ["Thai", "Malay", "Chinese", "Urdu"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        contact: {
          contactEmail: "lavish.horizon.of.th@velarivoyages.com",
          contactNumber: "+1-345-817-6370",
        },
      },
    ],
    title: "Lavish Horizon of the Mirrored Futurescape",
    description:
      "Unwind and explore on this sanctuary through Asia Pacific, departing from Hong Kong. With every stop—from Tokyo to Ho Chi Minh City—you’ll collect memories that last a lifetime.",
    rating: 4.3,
    tags: ["culinary", "short-getaway"],
  },
  {
    basePrice: 1929,
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    arrivalLocation: {
      city: "Bali",
      country: "",
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
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
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
          city: "Sydney",
          country: "Australia",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
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
          city: "Bali",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail from Hong Kong into a world of wonder. The Asia Pacific beckons with unforgettable ports like Ho Chi Minh City, Sydney, Shanghai, Bali, where every view is picture-perfect and every moment is priceless.",
      distance: "1352 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Hong Kong to Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Sydney",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Sydney to Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Shanghai to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Antonio Dunn",
        role: "Group Booking Coordinator",
        languages: ["Thai", "Malay", "Chinese", "Urdu"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "majestic.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-123-398-7292",
        },
      },
    ],
    title: "Majestic Odyssey of the Sky-Scrawled Destiny",
    description:
      "Sail from Hong Kong into a world of wonder. The Asia Pacific beckons with unforgettable ports like Ho Chi Minh City, Sydney, Shanghai, Bali, where every view is picture-perfect and every moment is priceless.",
    rating: 4.4,
    tags: ["long-distance", "cruise-holiday", "cruise-ship"],
  },
  {
    basePrice: 4194,
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    arrivalLocation: {
      city: "Singapore",
      country: "Singapore",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
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
      ],
      description:
        "Launch into adventure from Hong Kong and sail deep into the heart of the Asia Pacific. With ports of call like Melbourne, Tokyo, Singapore, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "631 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Hong Kong to Melbourne",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Melbourne to Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Tokyo to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Michael Harper",
        role: "Group Booking Coordinator",
        languages: ["Thai", "Malay", "Chinese", "Urdu"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "velvet.realm.of.the.@velarivoyages.com",
          contactNumber: "+1-435-120-3195",
        },
      },
    ],
    title: "Velvet Realm of the Vertical City",
    description:
      "Launch into adventure from Hong Kong and sail deep into the heart of the Asia Pacific. With ports of call like Melbourne, Tokyo, Singapore, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.8,
    tags: ["anniversary-cruise", "culinary"],
  },
  {
    basePrice: 8837,
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    arrivalLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
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
          city: "Tokyo",
          country: "Japan",
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
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Hong Kong on this infinite journey across Asia Pacific. Uncover the beauty and history of Melbourne, Yokohama, Tokyo, Singapore with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1242 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Hong Kong to Melbourne",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Melbourne to Yokohama",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Yokohama to Tokyo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Tokyo to Singapore",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Singapore to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
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
          description: "Exploring Tokyo",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Chen Douglas",
        role: "Group Booking Coordinator",
        languages: ["Thai", "Malay", "Chinese", "Urdu"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "opulent.solstice.of.@velarivoyages.com",
          contactNumber: "+1-268-187-8478",
        },
      },
    ],
    title: "Opulent Solstice of the Mystic East",
    description:
      "Sail away from the charming harbor of Hong Kong on this infinite journey across Asia Pacific. Uncover the beauty and history of Melbourne, Yokohama, Tokyo, Singapore with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.2,
    tags: ["wellness", "expedition"],
  },
  {
    basePrice: 9337,
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    arrivalLocation: {
      city: "Bali",
      country: "",
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
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
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
          city: "Shanghai",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
      ],
      description:
        "This handpicked symphony begins in Hong Kong and travels through Asia Pacific's iconic waterscapes. Discover Ho Chi Minh City, Shanghai, Bali as each day brings new stories and every night offers elegant repose.",
      distance: "666 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Hong Kong to Ho Chi Minh City",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Shanghai to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Antonio Grant",
        role: "Group Booking Coordinator",
        languages: ["Thai", "Malay", "Chinese", "Urdu"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "infinite.awakening.o@velarivoyages.com",
          contactNumber: "+1-796-546-1728",
        },
      },
    ],
    title: "Infinite Awakening of the Sky-Scrawled Destiny",
    description:
      "This handpicked symphony begins in Hong Kong and travels through Asia Pacific's iconic waterscapes. Discover Ho Chi Minh City, Shanghai, Bali as each day brings new stories and every night offers elegant repose.",
    rating: 4.3,
    tags: ["expedition", "cultural"],
  },
  {
    basePrice: 6730,
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    arrivalLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Hong Kong on this luxurious journey across Asia Pacific. Uncover the beauty and history of Sydney, Bangkok, Auckland with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1278 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Hong Kong to Sydney",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Sydney to Bangkok",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Bangkok to Auckland",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Auckland to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Dennis Porter",
        role: "Group Booking Coordinator",
        languages: ["Thai", "Malay", "Chinese", "Urdu"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "tidewashed.reunion.o@velarivoyages.com",
          contactNumber: "+1-369-841-3397",
        },
      },
    ],
    title: "Tide-Washed Reunion of the Pacific Dreams",
    description:
      "Sail away from the charming harbor of Hong Kong on this luxurious journey across Asia Pacific. Uncover the beauty and history of Sydney, Bangkok, Auckland with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.3,
    tags: ["wellness"],
  },
  {
    basePrice: 4644,
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    arrivalLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
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
          city: "Shanghai",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Bangkok",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
          },
        },
      ],
      description:
        "Embark from Hong Kong and traverse the Asia Pacific in style. Whether it’s the energy of Kyoto or the calm of Shanghai, each destination reveals a new side of paradise.",
      distance: "945 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Hong Kong to Kyoto",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Kyoto to Shanghai",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Shanghai to Auckland",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Auckland to Bangkok",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Bangkok to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jeffrey Wells",
        role: "Group Booking Coordinator",
        languages: ["Thai", "Malay", "Chinese", "Urdu"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "luxurious.mythos.of.@velarivoyages.com",
          contactNumber: "+1-419-808-9550",
        },
      },
    ],
    title: "Luxurious Mythos of the City of Rising Mist",
    description:
      "Embark from Hong Kong and traverse the Asia Pacific in style. Whether it’s the energy of Kyoto or the calm of Shanghai, each destination reveals a new side of paradise.",
    rating: 4.6,
    tags: ["cruise-ship"],
  },
  {
    basePrice: 3273,
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    arrivalLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 22.3193,
        longitude: 114.1694,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
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
          city: "Bali",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Hong Kong",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 22.3193,
            longitude: 114.1694,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Hong Kong. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Yokohama, Bali.",
      distance: "988 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Hong Kong to Yokohama",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Yokohama to Bali",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Bali to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Matthew Dunn",
        role: "Group Booking Coordinator",
        languages: ["Thai", "Malay", "Chinese", "Urdu"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "sundrenched.serenade@velarivoyages.com",
          contactNumber: "+1-996-835-2178",
        },
      },
    ],
    title: "Sun-Drenched Serenade of the Vertical City",
    description:
      "A voyage of contrasts awaits from Hong Kong. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Yokohama, Bali.",
    rating: 4.5,
    tags: ["wildlife"],
  },
];
