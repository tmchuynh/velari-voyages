import { Cruise } from "@/lib/interfaces/services/cruises";

export const kyotoCruises: Cruise[] = [
  {
    basePrice: 9228,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this alluring elevation through Asia Pacific, starting from the illustrious port of Kyoto. From Hong Kong, Auckland, Sydney to Bangkok, each destination offers its own story, culture, and breathtaking views.",
      distance: "1083 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kyoto to Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Hong Kong to Auckland",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Auckland to Sydney",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Sydney to Bangkok",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Bangkok to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Hong Kong",
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
          description: "Exploring Sydney",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 18",
          end: "Day 18",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jacob Spencer",
        role: "Reservations Agent",
        languages: ["Hindi", "Tagalog", "Japanese", "Urdu"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "charming.solstice.of@velarivoyages.com",
          contactNumber: "+1-990-895-2180",
        },
      },
    ],
    title: "Charming Solstice of the Timeless Echo",
    description:
      "Experience the elegance of the seas on this alluring elevation through Asia Pacific, starting from the illustrious port of Kyoto. From Hong Kong, Auckland, Sydney to Bangkok, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.9,
    tags: ["general"],
  },
  {
    basePrice: 7054,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
        "Sail into splendor from Kyoto on a breathtaking voyage through Asia Pacific. Let each stop—from Hong Kong to Ho Chi Minh City—reveal the unique flavors and colors of the region.",
      distance: "853 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kyoto to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Hong Kong to Ho Chi Minh City",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Shanghai",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Shanghai to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Cooper",
        role: "Reservations Agent",
        languages: ["Hindi", "Tagalog", "Japanese", "Urdu"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "tranquil.exploration@velarivoyages.com",
          contactNumber: "+1-969-560-2669",
        },
      },
    ],
    title: "Tranquil Exploration of the Zen-Stilled Veil",
    description:
      "Sail into splendor from Kyoto on a breathtaking voyage through Asia Pacific. Let each stop—from Hong Kong to Ho Chi Minh City—reveal the unique flavors and colors of the region.",
    rating: 4.3,
    tags: ["nature", "expedition", "holiday-cruise"],
  },
  {
    basePrice: 4891,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Bangkok",
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
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this verdant oasis through Asia Pacific, starting from the illustrious port of Kyoto. From Shanghai, Bangkok, Yokohama to Tokyo, each destination offers its own story, culture, and breathtaking views.",
      distance: "524 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kyoto to Shanghai",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Shanghai to Bangkok",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Bangkok to Yokohama",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Yokohama to Tokyo",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Tokyo to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Harry Dixon",
        role: "Reservations Agent",
        languages: ["Hindi", "Tagalog", "Japanese", "Urdu"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/47.jpg",
        contact: {
          contactEmail: "sublime.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-357-281-5872",
        },
      },
    ],
    title: "Sublime Eclipse of the Lotus-Lined Waters",
    description:
      "Experience the elegance of the seas on this verdant oasis through Asia Pacific, starting from the illustrious port of Kyoto. From Shanghai, Bangkok, Yokohama to Tokyo, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.7,
    tags: ["cruise", "fall-cruise", "cruise-excursion"],
  },
  {
    basePrice: 3441,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
      ],
      description:
        "This handpicked requiem begins in Kyoto and travels through Asia Pacific's iconic waterscapes. Discover Bangkok, Auckland, Melbourne, Singapore as each day brings new stories and every night offers elegant repose.",
      distance: "1218 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kyoto to Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bangkok to Auckland",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Auckland to Melbourne",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Melbourne to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Carl Graham",
        role: "Reservations Agent",
        languages: ["Hindi", "Tagalog", "Japanese", "Urdu"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "captivating.requiem.@velarivoyages.com",
          contactNumber: "+1-697-606-3448",
        },
      },
    ],
    title: "Captivating Requiem of the Oceanic Wonders",
    description:
      "This handpicked requiem begins in Kyoto and travels through Asia Pacific's iconic waterscapes. Discover Bangkok, Auckland, Melbourne, Singapore as each day brings new stories and every night offers elegant repose.",
    rating: 4.4,
    tags: ["glacier-cruise", "culinary"],
  },
  {
    basePrice: 8093,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
          city: "Sydney",
          country: "Australia",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "An unforgettable odyssey awaits as you cruise from Kyoto across Asia Pacific. Dive into history, flavor, and culture with stops including Auckland, Sydney.",
      distance: "957 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kyoto to Auckland",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Auckland to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Miguel Henderson",
        role: "Reservations Agent",
        languages: ["Hindi", "Tagalog", "Japanese", "Urdu"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "enchanting.mirage.of@velarivoyages.com",
          contactNumber: "+1-337-303-4135",
        },
      },
    ],
    title: "Enchanting Mirage of the Temple Haven",
    description:
      "An unforgettable odyssey awaits as you cruise from Kyoto across Asia Pacific. Dive into history, flavor, and culture with stops including Auckland, Sydney.",
    rating: 4.4,
    tags: ["VIP", "cruise-experience", "wellness"],
  },
  {
    basePrice: 1574,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Tokyo",
      country: "Japan",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
      ],
      description:
        "An unforgettable excursion awaits as you cruise from Kyoto across Asia Pacific. Dive into history, flavor, and culture with stops including Sydney, Melbourne, Tokyo.",
      distance: "654 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kyoto to Sydney",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Sydney to Melbourne",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Melbourne to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Melbourne",
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
        name: "Jack Collins",
        role: "Reservations Agent",
        languages: ["Hindi", "Tagalog", "Japanese", "Urdu"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
        contact: {
          contactEmail: "lavish.whisper.of.th@velarivoyages.com",
          contactNumber: "+1-299-502-8738",
        },
      },
    ],
    title: "Lavish Whisper of the Oceanic Wonders",
    description:
      "An unforgettable excursion awaits as you cruise from Kyoto across Asia Pacific. Dive into history, flavor, and culture with stops including Sydney, Melbourne, Tokyo.",
    rating: 4.7,
    tags: ["cruise"],
  },
  {
    basePrice: 1751,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
      ],
      description:
        "Begin a captivating zenith through the Asia Pacific, departing Kyoto. With visits to Hong Kong, Ho Chi Minh City, Sydney, each day brings a new adventure and deeper connection to the region.",
      distance: "899 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kyoto to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Hong Kong to Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Bruce Porter",
        role: "Reservations Agent",
        languages: ["Hindi", "Tagalog", "Japanese", "Urdu"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
        contact: {
          contactEmail: "forbidden.requiem.of@velarivoyages.com",
          contactNumber: "+1-150-875-9763",
        },
      },
    ],
    title: "Forbidden Requiem of the Jade Horizons",
    description:
      "Begin a captivating zenith through the Asia Pacific, departing Kyoto. With visits to Hong Kong, Ho Chi Minh City, Sydney, each day brings a new adventure and deeper connection to the region.",
    rating: 5.0,
    tags: ["VIP", "exclusive"],
  },
  {
    basePrice: 4704,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
          city: "Bali",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "This hand-selected unforgettable cruise offers a true taste of Asia Pacific. Depart from Kyoto and explore ports like Melbourne, Bali, each telling a story through food, music, and tradition.",
      distance: "559 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kyoto to Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Melbourne to Bali",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Bali to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Juan Lawson",
        role: "Reservations Agent",
        languages: ["Hindi", "Tagalog", "Japanese", "Urdu"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "infinite.excursion.o@velarivoyages.com",
          contactNumber: "+1-823-540-9815",
        },
      },
    ],
    title: "Infinite Excursion of the Oriental Realms",
    description:
      "This hand-selected unforgettable cruise offers a true taste of Asia Pacific. Depart from Kyoto and explore ports like Melbourne, Bali, each telling a story through food, music, and tradition.",
    rating: 4.8,
    tags: ["relaxation", "repositioning"],
  },
  {
    basePrice: 5321,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
          city: "Bali",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Depart Kyoto on a relaxing excursion through the Asia Pacific region. Highlights include the stunning coastlines of Tokyo, Bali, all while enjoying first-class amenities on board.",
      distance: "1461 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kyoto to Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Tokyo to Bali",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Bali to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Jordan Day",
        role: "Reservations Agent",
        languages: ["Hindi", "Tagalog", "Japanese", "Urdu"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/69.jpg",
        contact: {
          contactEmail: "pristine.zenith.of.t@velarivoyages.com",
          contactNumber: "+1-939-191-8128",
        },
      },
    ],
    title: "Pristine Zenith of the Cultural Heart of Japan",
    description:
      "Depart Kyoto on a relaxing excursion through the Asia Pacific region. Highlights include the stunning coastlines of Tokyo, Bali, all while enjoying first-class amenities on board.",
    rating: 4.9,
    tags: ["sightseeing", "tropical"],
  },
  {
    basePrice: 5758,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
        "Sail away from the charming harbor of Kyoto on this luminous journey across Asia Pacific. Uncover the beauty and history of Tokyo, Singapore, Hong Kong, Ho Chi Minh City with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1346 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kyoto to Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Tokyo to Singapore",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Singapore to Hong Kong",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Hong Kong to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Chen Coleman",
        role: "Reservations Agent",
        languages: ["Hindi", "Tagalog", "Japanese", "Urdu"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "verdant.legacy.of.th@velarivoyages.com",
          contactNumber: "+1-608-752-8498",
        },
      },
    ],
    title: "Verdant Legacy of the Cultural Heart of Japan",
    description:
      "Sail away from the charming harbor of Kyoto on this luminous journey across Asia Pacific. Uncover the beauty and history of Tokyo, Singapore, Hong Kong, Ho Chi Minh City with curated excursions, world-class cuisine, and exceptional service.",
    rating: 5.0,
    tags: ["cruise-line", "cruise"],
  },
];
