import { Cruise } from "@/lib/interfaces/services/cruises";

export const baliCruises: Cruise[] = [
  {
    basePrice: 5964,
    departureLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
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
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
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
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
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
        "Experience the elegance of the seas on this panoramic tide through Asia Pacific, starting from the illustrious port of Bali. From Tokyo, Sydney, Singapore to Melbourne, each destination offers its own story, culture, and breathtaking views.",
      distance: "558 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Bali to Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tokyo to Sydney",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Sydney to Singapore",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Singapore to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Carpenter",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Tagalog", "Bengali", "Malay"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "hidden.infinite.of.t@velarivoyages.com",
          contactNumber: "+1-516-813-7665",
        },
      },
    ],
    title: "Hidden Infinite of the Pagoda-Silhouetted Skylines",
    description:
      "Experience the elegance of the seas on this panoramic tide through Asia Pacific, starting from the illustrious port of Bali. From Tokyo, Sydney, Singapore to Melbourne, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.3,
    tags: ["exclusive"],
  },
  {
    basePrice: 1229,
    departureLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    arrivalLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
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
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
      ],
      description:
        "Sail away from Bali into the beautiful expanse of Asia Pacific. Along the way, enjoy rich cultural experiences in Hong Kong, Kyoto, where history, nature, and cuisine collide.",
      distance: "1077 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Bali to Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Hong Kong to Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Kyoto to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bali",
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
          description: "Exploring Kyoto",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Savannah Foster",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Tagalog", "Bengali", "Malay"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "gilded.tranquility.o@velarivoyages.com",
          contactNumber: "+1-229-877-3467",
        },
      },
    ],
    title: "Gilded Tranquility of the Oceanic Wonders",
    description:
      "Sail away from Bali into the beautiful expanse of Asia Pacific. Along the way, enjoy rich cultural experiences in Hong Kong, Kyoto, where history, nature, and cuisine collide.",
    rating: 4.5,
    tags: ["holiday-cruise", "cruise-experience"],
  },
  {
    basePrice: 3347,
    departureLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
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
    hasPopularDestination: true,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
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
        "Leave ordinary behind as you sail from Bali across the captivating Asia Pacific. Discover the distinctive personality of each destination, from Yokohama, Kyoto, Tokyo, Singapore.",
      distance: "807 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Bali to Yokohama",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Yokohama to Kyoto",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Kyoto to Tokyo",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Tokyo to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bali",
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
          description: "Exploring Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tokyo",
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
        name: "Charlotte Ellis",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Tagalog", "Bengali", "Malay"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "verdant.sanctuary.of@velarivoyages.com",
          contactNumber: "+1-529-298-1960",
        },
      },
    ],
    title: "Verdant Sanctuary of the Tea-Laced Traditions",
    description:
      "Leave ordinary behind as you sail from Bali across the captivating Asia Pacific. Discover the distinctive personality of each destination, from Yokohama, Kyoto, Tokyo, Singapore.",
    rating: 4.7,
    tags: ["cruise-journey"],
  },
  {
    basePrice: 1482,
    departureLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    arrivalLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
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
          city: "Tokyo",
          country: "Japan",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
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
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
      ],
      description:
        "Set sail from Bali for a voyage like no other. From the picturesque landscapes of Sydney to the lively ambiance of Tokyo, this pearlescent cruise will redefine your view of Asia Pacific.",
      distance: "817 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bali to Sydney",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Sydney to Tokyo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Tokyo to Yokohama",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Yokohama to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Sydney",
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
          description: "Exploring Yokohama",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Susan Chambers",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Tagalog", "Bengali", "Malay"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "moonlit.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-624-918-6748",
        },
      },
    ],
    title: "Moonlit Sojourn of the Pagoda-Silhouetted Skylines",
    description:
      "Set sail from Bali for a voyage like no other. From the picturesque landscapes of Sydney to the lively ambiance of Tokyo, this pearlescent cruise will redefine your view of Asia Pacific.",
    rating: 4.2,
    tags: ["fall-cruise", "short-getaway"],
  },
  {
    basePrice: 1297,
    departureLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
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
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
        {
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
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
        "Depart from iconic Bali and traverse the Asia Pacific with visits to Bangkok, Hong Kong. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "794 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Bali to Bangkok",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bangkok to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Abigail Dunn",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Tagalog", "Bengali", "Malay"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
        contact: {
          contactEmail: "idyllic.panorama.of.@velarivoyages.com",
          contactNumber: "+1-468-517-1727",
        },
      },
    ],
    title: "Idyllic Panorama of the Zen Shores",
    description:
      "Depart from iconic Bali and traverse the Asia Pacific with visits to Bangkok, Hong Kong. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.9,
    tags: ["cruise-excursion", "general"],
  },
  {
    basePrice: 3023,
    departureLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    arrivalLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
        {
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
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
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
      ],
      description:
        "This legendary solstice begins in Bali and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Bangkok, Kyoto, Tokyo.",
      distance: "528 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bali to Bangkok",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bangkok to Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Kyoto to Tokyo",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Tokyo to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Anna Dean",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Tagalog", "Bengali", "Malay"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "gilded.quest.of.the.@velarivoyages.com",
          contactNumber: "+1-489-819-6182",
        },
      },
    ],
    title: "Gilded Quest of the Tea-Laced Traditions",
    description:
      "This legendary solstice begins in Bali and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Bangkok, Kyoto, Tokyo.",
    rating: 4.6,
    tags: ["sightseeing", "weekend-cruise"],
  },
  {
    basePrice: 7907,
    departureLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    arrivalLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
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
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Bali on this hidden journey across Asia Pacific. Uncover the beauty and history of Melbourne, Shanghai, Singapore, Yokohama with curated excursions, world-class cuisine, and exceptional service.",
      distance: "775 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bali to Melbourne",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Melbourne to Shanghai",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Shanghai to Singapore",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Singapore to Yokohama",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Yokohama to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Emily Griffin",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Tagalog", "Bengali", "Malay"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "panoramic.awakening.@velarivoyages.com",
          contactNumber: "+1-279-452-8660",
        },
      },
    ],
    title: "Panoramic Awakening of the Mystic East",
    description:
      "Sail away from the charming harbor of Bali on this hidden journey across Asia Pacific. Uncover the beauty and history of Melbourne, Shanghai, Singapore, Yokohama with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.9,
    tags: ["relaxation", "exclusive", "cruise-vacation"],
  },
  {
    basePrice: 5445,
    departureLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    arrivalLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
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
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
      ],
      description:
        "Set sail from historic Bali for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Melbourne, Kyoto, Ho Chi Minh City, Yokohama.",
      distance: "1348 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Bali to Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Melbourne to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Kyoto to Ho Chi Minh City",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Yokohama",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Yokohama to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Melbourne",
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
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alexa Hamilton",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Tagalog", "Bengali", "Malay"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "heavenly.arcadia.of.@velarivoyages.com",
          contactNumber: "+1-155-230-7108",
        },
      },
    ],
    title: "Heavenly Arcadia of the Oceanic Wonders",
    description:
      "Set sail from historic Bali for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Melbourne, Kyoto, Ho Chi Minh City, Yokohama.",
    rating: 4.5,
    tags: ["family-friendly", "cruise-vacation", "sightseeing"],
  },
  {
    basePrice: 5293,
    departureLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
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
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
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
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
      ],
      description:
        "Start in the vibrant city of Bali and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Ho Chi Minh City, Tokyo.",
      distance: "1254 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Bali to Ho Chi Minh City",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
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
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Genesis Montgomery",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Tagalog", "Bengali", "Malay"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "oceanic.mystique.of.@velarivoyages.com",
          contactNumber: "+1-924-356-5860",
        },
      },
    ],
    title: "Oceanic Mystique of the Island Kingdoms",
    description:
      "Start in the vibrant city of Bali and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Ho Chi Minh City, Tokyo.",
    rating: 4.3,
    tags: ["general", "adventure", "holiday-cruise"],
  },
  {
    basePrice: 7269,
    departureLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    arrivalLocation: {
      city: "Bali",
      country: "Indonesia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
        {
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
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
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
      ],
      description:
        "An escape like no other begins in Bali, where your oasis launches into the heart of Asia Pacific. Discover the magic of Bangkok, Ho Chi Minh City, Auckland, Kyoto with style and sophistication.",
      distance: "875 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bali to Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bangkok to Ho Chi Minh City",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Auckland",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Auckland to Kyoto",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Kyoto to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Bali",
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
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Abigail Crawford",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Tagalog", "Bengali", "Malay"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "infinite.lullaby.of.@velarivoyages.com",
          contactNumber: "+1-688-124-2937",
        },
      },
    ],
    title: "Infinite Lullaby of the Volcanic Outposts",
    description:
      "An escape like no other begins in Bali, where your oasis launches into the heart of Asia Pacific. Discover the magic of Bangkok, Ho Chi Minh City, Auckland, Kyoto with style and sophistication.",
    rating: 4.1,
    tags: ["cruise-ship"],
  },
];
