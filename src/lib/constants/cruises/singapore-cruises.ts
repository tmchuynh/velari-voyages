import { Cruise } from "@/lib/interfaces/services/cruises";

export const singaporeCruises: Cruise[] = [
  {
    basePrice: 3244,
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
      },
    },
    arrivalLocation: {
      city: "Bangkok",
      country: "",
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
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
          city: "Bangkok",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "An escape like no other begins in Singapore, where your retreat launches into the heart of Asia Pacific. Discover the magic of Kyoto, Auckland, Yokohama, Bangkok with style and sophistication.",
      distance: "566 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Singapore to Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Kyoto to Auckland",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Auckland to Yokohama",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Yokohama to Bangkok",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Singapore",
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
          description: "Exploring Auckland",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alexander Graves",
        role: "Customer Service Representative",
        languages: ["Bengali", "Korean", "Japanese", "Hindi"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "midnight.solstice.of@velarivoyages.com",
          contactNumber: "+1-323-604-5584",
        },
      },
    ],
    title: "Midnight Solstice of the Arcology Nexus",
    description:
      "An escape like no other begins in Singapore, where your retreat launches into the heart of Asia Pacific. Discover the magic of Kyoto, Auckland, Yokohama, Bangkok with style and sophistication.",
    rating: 4.4,
    tags: ["wildlife", "nature", "family-friendly"],
  },
  {
    basePrice: 8049,
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
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
        "Leave ordinary behind as you sail from Singapore across the captivating Asia Pacific. Discover the distinctive personality of each destination, from Hong Kong, Tokyo, Ho Chi Minh City.",
      distance: "1494 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Singapore to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Hong Kong to Tokyo",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Tokyo to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Paul Graves",
        role: "Customer Service Representative",
        languages: ["Bengali", "Korean", "Japanese", "Hindi"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "whispering.excursion@velarivoyages.com",
          contactNumber: "+1-833-127-8723",
        },
      },
    ],
    title: "Whispering Excursion of the Neon Tropics",
    description:
      "Leave ordinary behind as you sail from Singapore across the captivating Asia Pacific. Discover the distinctive personality of each destination, from Hong Kong, Tokyo, Ho Chi Minh City.",
    rating: 4.5,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 6613,
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
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
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
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
      ],
      description:
        "Let the spirit of exploration guide your celestial journey from Singapore. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Hong Kong, Yokohama, Melbourne.",
      distance: "525 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Singapore to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Hong Kong to Yokohama",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Yokohama to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Alan Morgan",
        role: "Customer Service Representative",
        languages: ["Bengali", "Korean", "Japanese", "Hindi"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/98.jpg",
        contact: {
          contactEmail: "spectacular.voyage.o@velarivoyages.com",
          contactNumber: "+1-171-772-6324",
        },
      },
    ],
    title: "Spectacular Voyage of the Oriental Realms",
    description:
      "Let the spirit of exploration guide your celestial journey from Singapore. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Hong Kong, Yokohama, Melbourne.",
    rating: 4.5,
    tags: ["seasonal", "family-friendly", "cruise-vacation"],
  },
  {
    basePrice: 1437,
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
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
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this immersive expedition through Asia Pacific, starting from the illustrious port of Singapore. From Kyoto, Bangkok to Tokyo, each destination offers its own story, culture, and breathtaking views.",
      distance: "1461 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Singapore to Kyoto",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Kyoto to Bangkok",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Bangkok to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Bangkok",
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
        name: "Roy Spencer",
        role: "Customer Service Representative",
        languages: ["Bengali", "Korean", "Japanese", "Hindi"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "infinite.wanderlust.@velarivoyages.com",
          contactNumber: "+1-246-228-7928",
        },
      },
    ],
    title: "Infinite Wanderlust of the Oceanic Wonders",
    description:
      "Experience the elegance of the seas on this immersive expedition through Asia Pacific, starting from the illustrious port of Singapore. From Kyoto, Bangkok to Tokyo, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.5,
    tags: ["culinary"],
  },
  {
    basePrice: 6187,
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
      },
    },
    arrivalLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
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
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
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
          city: "Tokyo",
          country: "Japan",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
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
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
      ],
      description:
        "This alluring cruise from Singapore is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Bangkok, Tokyo, Sydney, Shanghai with enriching excursions and award-winning service.",
      distance: "1198 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Singapore to Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Bangkok to Tokyo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Tokyo to Sydney",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Sydney to Shanghai",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Shanghai to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Douglas Carpenter",
        role: "Customer Service Representative",
        languages: ["Bengali", "Korean", "Japanese", "Hindi"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "epic.requiem.of.the.@velarivoyages.com",
          contactNumber: "+1-695-544-5409",
        },
      },
    ],
    title: "Epic Requiem of the Mystic East",
    description:
      "This alluring cruise from Singapore is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Bangkok, Tokyo, Sydney, Shanghai with enriching excursions and award-winning service.",
    rating: 4.8,
    tags: ["expedition", "general", "cruise"],
  },
  {
    basePrice: 4423,
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
      },
    },
    arrivalLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
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
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
      ],
      description:
        "Your sanctum begins in Singapore, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Kyoto to the historic streets of Sydney, each stop in the Asia Pacific will leave a lasting impression.",
      distance: "782 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Singapore to Kyoto",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Kyoto to Sydney",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Sydney to Shanghai",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Shanghai to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mark Dixon",
        role: "Customer Service Representative",
        languages: ["Bengali", "Korean", "Japanese", "Hindi"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/96.jpg",
        contact: {
          contactEmail: "harmonic.quest.of.th@velarivoyages.com",
          contactNumber: "+1-442-303-2549",
        },
      },
    ],
    title: "Harmonic Quest of the Mystic East",
    description:
      "Your sanctum begins in Singapore, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Kyoto to the historic streets of Sydney, each stop in the Asia Pacific will leave a lasting impression.",
    rating: 4.3,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 6858,
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
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
          city: "Sydney",
          country: "Australia",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
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
      ],
      description:
        "Depart from Singapore on this thoughtfully designed oasis across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Kyoto, Sydney, Hong Kong, Bali.",
      distance: "1068 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Singapore to Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Kyoto to Sydney",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Sydney to Hong Kong",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Hong Kong to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Justin Dixon",
        role: "Customer Service Representative",
        languages: ["Bengali", "Korean", "Japanese", "Hindi"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/98.jpg",
        contact: {
          contactEmail: "aweinspiring.symphon@velarivoyages.com",
          contactNumber: "+1-457-318-2384",
        },
      },
    ],
    title: "Awe-Inspiring Symphony of the Lotus-Lined Waters",
    description:
      "Depart from Singapore on this thoughtfully designed oasis across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Kyoto, Sydney, Hong Kong, Bali.",
    rating: 5.0,
    tags: ["cruise"],
  },
  {
    basePrice: 8614,
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Set sail from Singapore on this floating reflection through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Bali and Auckland and Hong Kong and Kyoto, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "720 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Singapore to Bali",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Bali to Auckland",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Auckland to Hong Kong",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Hong Kong to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Paul Hayes",
        role: "Customer Service Representative",
        languages: ["Bengali", "Korean", "Japanese", "Hindi"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/0.jpg",
        contact: {
          contactEmail: "ornate.escape.of.the@velarivoyages.com",
          contactNumber: "+1-370-252-3133",
        },
      },
    ],
    title: "Ornate Escape of the Futuristic Haven",
    description:
      "Set sail from Singapore on this floating reflection through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Bali and Auckland and Hong Kong and Kyoto, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.6,
    tags: ["cruise-adventure", "romantic"],
  },
  {
    basePrice: 6398,
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
      },
    },
    arrivalLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
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
          city: "Sydney",
          country: "Australia",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
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
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
      ],
      description:
        "Embark on an unforgettable escape from the vibrant port of Singapore, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Bali, Sydney, Ho Chi Minh City, this journey combines cultural immersion with breathtaking scenery.",
      distance: "886 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Singapore to Bali",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Bali to Sydney",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Sydney to Ho Chi Minh City",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Singapore",
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
          description: "Exploring Sydney",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Brian Coleman",
        role: "Customer Service Representative",
        languages: ["Bengali", "Korean", "Japanese", "Hindi"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "tranquil.tide.of.the@velarivoyages.com",
          contactNumber: "+1-120-691-6978",
        },
      },
    ],
    title: "Tranquil Tide of the Glass and Garden",
    description:
      "Embark on an unforgettable escape from the vibrant port of Singapore, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Bali, Sydney, Ho Chi Minh City, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.9,
    tags: ["wildlife", "sightseeing"],
  },
  {
    basePrice: 9718,
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia Pacific",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Singapore",
          country: "Singapore",
          region: "Asia Pacific",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
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
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this hidden voyage beginning in Singapore. Visit breathtaking Asia Pacific locales such as Tokyo, Melbourne on this unforgettable itinerary.",
      distance: "711 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Singapore to Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Tokyo to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Bobby Lawson",
        role: "Customer Service Representative",
        languages: ["Bengali", "Korean", "Japanese", "Hindi"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "secluded.escape.of.t@velarivoyages.com",
          contactNumber: "+1-204-423-1921",
        },
      },
    ],
    title: "Secluded Escape of the Arcology Nexus",
    description:
      "Enjoy seamless luxury on this hidden voyage beginning in Singapore. Visit breathtaking Asia Pacific locales such as Tokyo, Melbourne on this unforgettable itinerary.",
    rating: 4.7,
    tags: ["holiday-cruise", "cruise-excursion"],
  },
];
