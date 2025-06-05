import { Cruise } from "@/lib/interfaces/services/cruises";

export const melbourneCruises: Cruise[] = [
  {
    basePrice: 9476,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Melbourne on this awe-inspiring journey across Asia Pacific. Uncover the beauty and history of Kyoto, Ho Chi Minh City with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1216 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Melbourne to Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Kyoto to Ho Chi Minh City",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Patrick Reed",
        role: "Customer Service Representative",
        languages: ["Bengali", "Chinese", "Japanese", "Tagalog", "Korean"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/38.jpg",
        contact: {
          contactEmail: "riveting.resonance.o@velarivoyages.com",
          contactNumber: "+1-319-388-9976",
        },
      },
    ],
    title: "Riveting Resonance of the Bamboo Shores",
    description:
      "Sail away from the charming harbor of Melbourne on this awe-inspiring journey across Asia Pacific. Uncover the beauty and history of Kyoto, Ho Chi Minh City with curated excursions, world-class cuisine, and exceptional service.",
    rating: 5.0,
    tags: ["general", "short-getaway", "sightseeing"],
  },
  {
    basePrice: 5629,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "This handpicked escape begins in Melbourne and travels through Asia Pacific's iconic waterscapes. Discover Kyoto, Auckland as each day brings new stories and every night offers elegant repose.",
      distance: "702 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Melbourne to Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Kyoto to Auckland",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Auckland to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
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
          description: "Exploring Auckland",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "George Morgan",
        role: "Customer Service Representative",
        languages: ["Bengali", "Chinese", "Japanese", "Tagalog", "Korean"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "midnight.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-336-599-6297",
        },
      },
    ],
    title: "Midnight Odyssey of the Rain-Polished Rhythm",
    description:
      "This handpicked escape begins in Melbourne and travels through Asia Pacific's iconic waterscapes. Discover Kyoto, Auckland as each day brings new stories and every night offers elegant repose.",
    rating: 4.4,
    tags: ["repositioning", "adventure", "nature"],
  },
  {
    basePrice: 2849,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Shanghai",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This forbidden cruise from Melbourne is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Hong Kong, Bali, Tokyo, Shanghai with enriching excursions and award-winning service.",
      distance: "1101 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Melbourne to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Hong Kong to Bali",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Bali to Tokyo",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Tokyo to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Daniel Holloway",
        role: "Customer Service Representative",
        languages: ["Bengali", "Chinese", "Japanese", "Tagalog", "Korean"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "spectacular.resonanc@velarivoyages.com",
          contactNumber: "+1-232-304-2223",
        },
      },
    ],
    title: "Spectacular Resonance of the Cultural Capital of Australia",
    description:
      "This forbidden cruise from Melbourne is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Hong Kong, Bali, Tokyo, Shanghai with enriching excursions and award-winning service.",
    rating: 4.6,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 2228,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
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
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
      ],
      description:
        "Leave ordinary behind as you sail from Melbourne across the captivating Asia Pacific. Discover the distinctive personality of each destination, from Kyoto, Shanghai.",
      distance: "728 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Melbourne to Kyoto",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Kyoto to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lucas Hudson",
        role: "Customer Service Representative",
        languages: ["Bengali", "Chinese", "Japanese", "Tagalog", "Korean"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "golden.frontier.of.t@velarivoyages.com",
          contactNumber: "+1-360-163-7876",
        },
      },
    ],
    title: "Golden Frontier of the Graphite Dreamscape",
    description:
      "Leave ordinary behind as you sail from Melbourne across the captivating Asia Pacific. Discover the distinctive personality of each destination, from Kyoto, Shanghai.",
    rating: 4.1,
    tags: ["historical"],
  },
  {
    basePrice: 3677,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
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
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
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
        "Set sail from Melbourne for a voyage like no other. From the picturesque landscapes of Shanghai to the lively ambiance of Kyoto, this mystical cruise will redefine your view of Asia Pacific.",
      distance: "1213 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Melbourne to Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Shanghai to Kyoto",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Kyoto to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Kyoto",
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
        name: "Lucas West",
        role: "Customer Service Representative",
        languages: ["Bengali", "Chinese", "Japanese", "Tagalog", "Korean"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "legendary.infinite.o@velarivoyages.com",
          contactNumber: "+1-539-323-4262",
        },
      },
    ],
    title: "Legendary Infinite of the Pagoda-Silhouetted Skylines",
    description:
      "Set sail from Melbourne for a voyage like no other. From the picturesque landscapes of Shanghai to the lively ambiance of Kyoto, this mystical cruise will redefine your view of Asia Pacific.",
    rating: 5.0,
    tags: ["sightseeing", "cruise"],
  },
  {
    basePrice: 2506,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
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
        {
          city: "Shanghai",
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
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Discover the wonders of Asia Pacific aboard this verdant cruise departing from Melbourne. Journey through crystal waters to explore the treasures of Hong Kong, Shanghai, Ho Chi Minh City, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "990 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Melbourne to Hong Kong",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Hong Kong to Shanghai",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Shanghai to Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Randy Montgomery",
        role: "Customer Service Representative",
        languages: ["Bengali", "Chinese", "Japanese", "Tagalog", "Korean"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "serene.adventure.of.@velarivoyages.com",
          contactNumber: "+1-569-896-4249",
        },
      },
    ],
    title: "Serene Adventure of the Pacific Dreams",
    description:
      "Discover the wonders of Asia Pacific aboard this verdant cruise departing from Melbourne. Journey through crystal waters to explore the treasures of Hong Kong, Shanghai, Ho Chi Minh City, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.2,
    tags: ["culinary"],
  },
  {
    basePrice: 1900,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Set course from Melbourne for an inspiring secluded journey across Asia Pacific. Whether exploring ancient ruins in Auckland or soaking up coastal views in Bali, every day offers a perfect mix of discovery and relaxation.",
      distance: "748 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Melbourne to Auckland",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Auckland to Bali",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Bali to Tokyo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Tokyo to Hong Kong",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Hong Kong to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Nathan Fisher",
        role: "Customer Service Representative",
        languages: ["Bengali", "Chinese", "Japanese", "Tagalog", "Korean"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "riveting.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-299-968-9002",
        },
      },
    ],
    title: "Riveting Eclipse of the Oceanic Wonders",
    description:
      "Set course from Melbourne for an inspiring secluded journey across Asia Pacific. Whether exploring ancient ruins in Auckland or soaking up coastal views in Bali, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.0,
    tags: ["sightseeing"],
  },
  {
    basePrice: 6101,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your whispering journey from Melbourne. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Yokohama, Auckland, Kyoto, Singapore.",
      distance: "626 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Melbourne to Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Yokohama to Auckland",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Auckland to Kyoto",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Kyoto to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Willie Holloway",
        role: "Customer Service Representative",
        languages: ["Bengali", "Chinese", "Japanese", "Tagalog", "Korean"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "hidden.haven.of.the.@velarivoyages.com",
          contactNumber: "+1-693-908-1988",
        },
      },
    ],
    title: "Hidden Haven of the Jazz of the Streets",
    description:
      "Let the spirit of exploration guide your whispering journey from Melbourne. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Yokohama, Auckland, Kyoto, Singapore.",
    rating: 4.2,
    tags: ["cruise-journey"],
  },
  {
    basePrice: 7579,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
      ],
      description:
        "Join us in Melbourne for a eclipse of a lifetime. Sail across the serene waters of Asia Pacific, stopping at ports like Sydney, Shanghai, Hong Kong, Yokohama where timeless traditions meet modern luxuries.",
      distance: "1486 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Melbourne to Sydney",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Sydney to Shanghai",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Shanghai to Hong Kong",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Hong Kong to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Wayne Hayes",
        role: "Customer Service Representative",
        languages: ["Bengali", "Chinese", "Japanese", "Tagalog", "Korean"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "pearlescent.explorat@velarivoyages.com",
          contactNumber: "+1-858-730-2998",
        },
      },
    ],
    title: "Pearlescent Exploration of the Tea-Laced Traditions",
    description:
      "Join us in Melbourne for a eclipse of a lifetime. Sail across the serene waters of Asia Pacific, stopping at ports like Sydney, Shanghai, Hong Kong, Yokohama where timeless traditions meet modern luxuries.",
    rating: 4.6,
    tags: ["cruise-excursion", "cruise-vacation", "exclusive"],
  },
  {
    basePrice: 7703,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Hong Kong",
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
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Set course from Melbourne for an inspiring mesmerizing journey across Asia Pacific. Whether exploring ancient ruins in Tokyo or soaking up coastal views in Hong Kong, every day offers a perfect mix of discovery and relaxation.",
      distance: "552 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Melbourne to Tokyo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tokyo to Hong Kong",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Hong Kong to Shanghai",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Shanghai to Bali",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Bali to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Hong Kong",
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
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Patrick Graves",
        role: "Customer Service Representative",
        languages: ["Bengali", "Chinese", "Japanese", "Tagalog", "Korean"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "charming.passage.of.@velarivoyages.com",
          contactNumber: "+1-156-347-5017",
        },
      },
    ],
    title: "Charming Passage of the Tea-Laced Traditions",
    description:
      "Set course from Melbourne for an inspiring mesmerizing journey across Asia Pacific. Whether exploring ancient ruins in Tokyo or soaking up coastal views in Hong Kong, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.4,
    tags: ["cruise-adventure", "long-distance", "fall-cruise"],
  },
];
