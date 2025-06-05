import { Cruise } from "@/lib/interfaces/services/cruises";

export const baliCruises: Cruise[] = [
  {
    basePrice: 9326,
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
    category: "luxury",
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
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
        "Begin your panorama in Bali, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Sydney, Shanghai and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "512 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Bali to Sydney",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Sydney to Shanghai",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Shanghai to Bali",
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
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Jose Watson",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        contact: {
          contactEmail: "pearlescent.journey.@velarivoyages.com",
          contactNumber: "+1-892-615-2431",
        },
      },
    ],
    title: "Pearlescent Journey of the Bamboo Shores",
    description:
      "Begin your panorama in Bali, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Sydney, Shanghai and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.5,
    tags: ["weekend-cruise", "historical"],
  },
  {
    basePrice: 3361,
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
      city: "Yokohama",
      country: "Japan",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
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
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "Step aboard in Bali and begin a harmonic journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Tokyo, Shanghai, Bangkok, Yokohama, every day is unforgettable.",
      distance: "584 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Bali to Tokyo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tokyo to Shanghai",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Shanghai to Bangkok",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Bangkok to Yokohama",
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
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Keith Palmer",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
        contact: {
          contactEmail: "mesmerizing.journey.@velarivoyages.com",
          contactNumber: "+1-358-279-2079",
        },
      },
    ],
    title: "Mesmerizing Journey of the Oriental Realms",
    description:
      "Step aboard in Bali and begin a harmonic journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Tokyo, Shanghai, Bangkok, Yokohama, every day is unforgettable.",
    rating: 4.8,
    tags: ["tropical"],
  },
  {
    basePrice: 8068,
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
      city: "Bangkok",
      country: "Thailand",
      coordinates: {
        latitude: 13.7563,
        longitude: 100.5018,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
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
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
      ],
      description:
        "This enigma takes you beyond the ordinary, starting in Bali. With breathtaking stops in Shanghai, Hong Kong, Tokyo, Bangkok, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "918 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Bali to Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Shanghai to Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Hong Kong to Tokyo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Tokyo to Bangkok",
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
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Daniel Gardner",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "refined.mystique.of.@velarivoyages.com",
          contactNumber: "+1-628-631-5874",
        },
      },
    ],
    title: "Refined Mystique of the Jade Horizons",
    description:
      "This enigma takes you beyond the ordinary, starting in Bali. With breathtaking stops in Shanghai, Hong Kong, Tokyo, Bangkok, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.5,
    tags: ["cruise-holiday", "sightseeing"],
  },
  {
    basePrice: 9459,
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
    category: "ultra-luxury",
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
        "Escape into the calm waters of Asia Pacific with this whispering journey from Bali. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Melbourne, Hong Kong, Tokyo, Auckland.",
      distance: "634 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Bali to Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Melbourne to Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Hong Kong to Tokyo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Tokyo to Auckland",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Auckland to Bali",
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
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Hong Kong",
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
          description: "Exploring Auckland",
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
        name: "Sebastian Murray",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "floating.realm.of.th@velarivoyages.com",
          contactNumber: "+1-679-202-8229",
        },
      },
    ],
    title: "Floating Realm of the Zen Shores",
    description:
      "Escape into the calm waters of Asia Pacific with this whispering journey from Bali. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Melbourne, Hong Kong, Tokyo, Auckland.",
    rating: 4.4,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 8973,
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
    category: "mainstream",
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
        "Begin an epic oasis from Bali, where the seas meet culture. Visit the remarkable ports of Kyoto, Ho Chi Minh City, Auckland while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "639 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Bali to Kyoto",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Kyoto to Ho Chi Minh City",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Auckland",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Auckland to Bali",
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
          description: "Exploring Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Terry Grant",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
        contact: {
          contactEmail: "verdant.panorama.of.@velarivoyages.com",
          contactNumber: "+1-466-121-5093",
        },
      },
    ],
    title: "Verdant Panorama of the Pagoda-Silhouetted Skylines",
    description:
      "Begin an epic oasis from Bali, where the seas meet culture. Visit the remarkable ports of Kyoto, Ho Chi Minh City, Auckland while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.9,
    tags: ["family-friendly", "repositioning", "wellness"],
  },
  {
    basePrice: 7263,
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
    category: "premium-luxury",
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
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
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
        "Sail away from the charming harbor of Bali on this unforgettable journey across Asia Pacific. Uncover the beauty and history of Singapore, Bangkok, Hong Kong with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1029 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bali to Singapore",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Singapore to Bangkok",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Bangkok to Hong Kong",
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
          description: "Exploring Bali",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Bangkok",
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
        name: "Gregory Henderson",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "luxurious.mystique.o@velarivoyages.com",
          contactNumber: "+1-807-101-7419",
        },
      },
    ],
    title: "Luxurious Mystique of the Jade Horizons",
    description:
      "Sail away from the charming harbor of Bali on this unforgettable journey across Asia Pacific. Uncover the beauty and history of Singapore, Bangkok, Hong Kong with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.0,
    tags: ["historical"],
  },
  {
    basePrice: 9837,
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
    category: "premium-luxury",
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
        "This ornate cruise from Bali is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Ho Chi Minh City, Sydney, Melbourne with enriching excursions and award-winning service.",
      distance: "1046 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bali to Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Sydney",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Sydney to Melbourne",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Melbourne to Bali",
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
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Carl Hudson",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "pearlescent.serenade@velarivoyages.com",
          contactNumber: "+1-658-242-3157",
        },
      },
    ],
    title: "Pearlescent Serenade of the Mystic East",
    description:
      "This ornate cruise from Bali is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Ho Chi Minh City, Sydney, Melbourne with enriching excursions and award-winning service.",
    rating: 4.8,
    tags: ["repositioning", "cruise-journey"],
  },
  {
    basePrice: 9181,
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
      city: "Kyoto",
      country: "Japan",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
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
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this velvet discovery beginning in Bali. Visit breathtaking Asia Pacific locales such as Tokyo, Bangkok, Ho Chi Minh City, Kyoto on this unforgettable itinerary.",
      distance: "1063 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Bali to Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Tokyo to Bangkok",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Bangkok to Ho Chi Minh City",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Kyoto",
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
          description: "Exploring Tokyo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Henry Montgomery",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "tidewashed.oasis.of.@velarivoyages.com",
          contactNumber: "+1-425-517-8243",
        },
      },
    ],
    title: "Tide-Washed Oasis of the Zen Shores",
    description:
      "Enjoy seamless luxury on this velvet discovery beginning in Bali. Visit breathtaking Asia Pacific locales such as Tokyo, Bangkok, Ho Chi Minh City, Kyoto on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["cruise", "short-getaway"],
  },
  {
    basePrice: 8079,
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
      city: "Shanghai",
      country: "China",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
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
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
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
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "Step aboard in Bali and begin a extraordinary journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Ho Chi Minh City, Yokohama, Bangkok, Shanghai, every day is unforgettable.",
      distance: "1078 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bali to Ho Chi Minh City",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Yokohama",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Yokohama to Bangkok",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Bangkok to Shanghai",
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
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Carl Morgan",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
        contact: {
          contactEmail: "eternal.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-961-117-7303",
        },
      },
    ],
    title: "Eternal Odyssey of the Oceanic Wonders",
    description:
      "Step aboard in Bali and begin a extraordinary journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Ho Chi Minh City, Yokohama, Bangkok, Shanghai, every day is unforgettable.",
    rating: 4.6,
    tags: ["expedition", "cruise-journey"],
  },
  {
    basePrice: 8093,
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
      city: "Auckland",
      country: "New Zealand",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
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
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
      ],
      description:
        "Enjoy seamless luxury on this hidden panorama beginning in Bali. Visit breathtaking Asia Pacific locales such as Hong Kong, Shanghai, Auckland on this unforgettable itinerary.",
      distance: "850 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Bali to Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Hong Kong to Shanghai",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Shanghai to Auckland",
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
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Louis Curtis",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "eternal.wanderlust.o@velarivoyages.com",
          contactNumber: "+1-372-587-1680",
        },
      },
    ],
    title: "Eternal Wanderlust of the Pagoda-Silhouetted Skylines",
    description:
      "Enjoy seamless luxury on this hidden panorama beginning in Bali. Visit breathtaking Asia Pacific locales such as Hong Kong, Shanghai, Auckland on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["sightseeing"],
  },
  {
    basePrice: 1528,
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
    category: "premium-luxury",
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
        {
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
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
        "From the lively departure port of Bali, this curated arcadia showcases the finest of Asia Pacific. With visits to Bangkok, Hong Kong, Singapore, Sydney, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "868 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Bali to Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bangkok to Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Hong Kong to Singapore",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Singapore to Sydney",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Sydney to Bali",
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
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
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
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Tyler Dixon",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/0.jpg",
        contact: {
          contactEmail: "verdant.enigma.of.th@velarivoyages.com",
          contactNumber: "+1-675-170-1752",
        },
      },
    ],
    title: "Verdant Enigma of the Volcanic Outposts",
    description:
      "From the lively departure port of Bali, this curated arcadia showcases the finest of Asia Pacific. With visits to Bangkok, Hong Kong, Singapore, Sydney, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.0,
    tags: ["wildlife"],
  },
  {
    basePrice: 9768,
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
    category: "luxury",
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
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
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
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
      ],
      description:
        "Depart Bali on a relaxing elevation through the Asia Pacific region. Highlights include the stunning coastlines of Tokyo, Yokohama, Singapore, all while enjoying first-class amenities on board.",
      distance: "1167 nautical miles",
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
          description: "Sailing from Tokyo to Yokohama",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Yokohama to Singapore",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Singapore to Bali",
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
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Chen Hamilton",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/47.jpg",
        contact: {
          contactEmail: "aweinspiring.adventu@velarivoyages.com",
          contactNumber: "+1-428-574-4951",
        },
      },
    ],
    title: "Awe-Inspiring Adventure of the Tea-Laced Traditions",
    description:
      "Depart Bali on a relaxing elevation through the Asia Pacific region. Highlights include the stunning coastlines of Tokyo, Yokohama, Singapore, all while enjoying first-class amenities on board.",
    rating: 4.9,
    tags: ["relaxation"],
  },
  {
    basePrice: 1183,
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
      city: "Auckland",
      country: "New Zealand",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
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
      ],
      description:
        "This discovery takes you beyond the ordinary, starting in Bali. With breathtaking stops in Kyoto, Auckland, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "772 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Bali to Kyoto",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Kyoto to Auckland",
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
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lucas Ellis",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/69.jpg",
        contact: {
          contactEmail: "luminous.frontier.of@velarivoyages.com",
          contactNumber: "+1-722-354-1178",
        },
      },
    ],
    title: "Luminous Frontier of the Volcanic Outposts",
    description:
      "This discovery takes you beyond the ordinary, starting in Bali. With breathtaking stops in Kyoto, Auckland, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.8,
    tags: ["exclusive", "cruise-excursion"],
  },
  {
    basePrice: 8699,
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
      city: "Auckland",
      country: "New Zealand",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "Sail from Bali into a world of wonder. The Asia Pacific beckons with unforgettable ports like Ho Chi Minh City, Hong Kong, Tokyo, Auckland, where every view is picture-perfect and every moment is priceless.",
      distance: "1011 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Bali to Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Hong Kong to Tokyo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Tokyo to Auckland",
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
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jeffrey Sutton",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "azure.resonance.of.t@velarivoyages.com",
          contactNumber: "+1-282-105-2166",
        },
      },
    ],
    title: "Azure Resonance of the Pacific Dreams",
    description:
      "Sail from Bali into a world of wonder. The Asia Pacific beckons with unforgettable ports like Ho Chi Minh City, Hong Kong, Tokyo, Auckland, where every view is picture-perfect and every moment is priceless.",
    rating: 4.2,
    tags: ["culinary", "long-distance", "expedition"],
  },
  {
    basePrice: 1694,
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
    category: "entry-luxury",
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
        "Experience the elegance of the seas on this ornate tranquility through Asia Pacific, starting from the illustrious port of Bali. From Sydney, Auckland to Ho Chi Minh City, each destination offers its own story, culture, and breathtaking views.",
      distance: "767 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Bali to Sydney",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Sydney to Auckland",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Auckland to Ho Chi Minh City",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Bali",
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
          description: "Exploring Sydney",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Auckland",
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
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Antonio Holloway",
        role: "Corporate Concierge",
        languages: ["Indonesian", "Vietnamese", "Bengali", "Tagalog"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "verdant.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-631-300-7390",
        },
      },
    ],
    title: "Verdant Odyssey of the Tea-Laced Traditions",
    description:
      "Experience the elegance of the seas on this ornate tranquility through Asia Pacific, starting from the illustrious port of Bali. From Sydney, Auckland to Ho Chi Minh City, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.1,
    tags: ["adventure", "sightseeing", "themed-cruise"],
  },
  {
    basePrice: 2480,
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
      city: "Ho Chi Minh City",
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
          city: "Bali",
          country: "Indonesia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
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
        "This pristine reunion begins in Bali and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Singapore, Yokohama, Hong Kong, Ho Chi Minh City.",
      distance: "926 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bali to Singapore",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Singapore to Yokohama",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Yokohama to Hong Kong",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Hong Kong to Ho Chi Minh City",
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
          description: "Exploring Singapore",
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
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Melissa Carpenter",
        role: "Cruise Specialist",
        languages: ["Vietnamese", "Urdu", "Korean"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "sublime.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-681-600-2924",
        },
      },
    ],
    title: "Sublime Voyage of the Oceanic Wonders",
    description:
      "This pristine reunion begins in Bali and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Singapore, Yokohama, Hong Kong, Ho Chi Minh City.",
    rating: 4.5,
    tags: ["glacier-cruise", "historical"],
  },
  {
    basePrice: 8969,
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
    category: "premium-luxury",
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
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
        "Step into a world of elegance and exploration from Bali. This sojourn through the Asia Pacific unveils stunning stops including Shanghai, Auckland, Ho Chi Minh City, all with first-class service.",
      distance: "599 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Bali to Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Shanghai to Auckland",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Auckland to Ho Chi Minh City",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Bali",
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
          description: "Exploring Shanghai",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Zoe Gardner",
        role: "Cruise Specialist",
        languages: ["Vietnamese", "Urdu", "Korean"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "lavish.serenade.of.t@velarivoyages.com",
          contactNumber: "+1-390-863-2195",
        },
      },
    ],
    title: "Lavish Serenade of the Sacred Shores",
    description:
      "Step into a world of elegance and exploration from Bali. This sojourn through the Asia Pacific unveils stunning stops including Shanghai, Auckland, Ho Chi Minh City, all with first-class service.",
    rating: 5.0,
    tags: ["cruise-adventure"],
  },
  {
    basePrice: 5850,
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
    category: "mainstream",
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
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
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
        "Set sail from historic Bali for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Hong Kong, Kyoto, Bangkok.",
      distance: "770 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Bali to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Hong Kong to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Kyoto to Bangkok",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Bangkok to Bali",
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
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Claire Dixon",
        role: "Cruise Specialist",
        languages: ["Vietnamese", "Urdu", "Korean"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "transcendent.symphon@velarivoyages.com",
          contactNumber: "+1-222-723-1348",
        },
      },
    ],
    title: "Transcendent Symphony of the Dynastic Dreams",
    description:
      "Set sail from historic Bali for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Hong Kong, Kyoto, Bangkok.",
    rating: 4.7,
    tags: ["family-friendly"],
  },
  {
    basePrice: 5252,
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
      city: "Yokohama",
      country: "Japan",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
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
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "An unforgettable awakening awaits as you cruise from Bali across Asia Pacific. Dive into history, flavor, and culture with stops including Sydney, Yokohama.",
      distance: "1198 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Bali to Sydney",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Sydney to Yokohama",
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
          description: "Exploring Sydney",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Katherine Hawkins",
        role: "Cruise Specialist",
        languages: ["Vietnamese", "Urdu", "Korean"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/15.jpg",
        contact: {
          contactEmail: "hidden.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-482-952-7017",
        },
      },
    ],
    title: "Hidden Sojourn of the Jade Horizons",
    description:
      "An unforgettable awakening awaits as you cruise from Bali across Asia Pacific. Dive into history, flavor, and culture with stops including Sydney, Yokohama.",
    rating: 5.0,
    tags: ["tropical", "romantic"],
  },
  {
    basePrice: 4162,
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
    hasPopularDestination: false,
    category: "premium-luxury",
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
          city: "Tokyo",
          country: "Japan",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
      ],
      description:
        "Let the winds of the Asia Pacific carry you from Bali to the most stunning ports in the region. With destinations like Bangkok, Tokyo, this realm redefines luxury travel.",
      distance: "591 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Bali to Bangkok",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bangkok to Tokyo",
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
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Allison Marshall",
        role: "Cruise Specialist",
        languages: ["Vietnamese", "Urdu", "Korean"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "spectacular.whisper.@velarivoyages.com",
          contactNumber: "+1-373-635-7080",
        },
      },
    ],
    title: "Spectacular Whisper of the Volcanic Outposts",
    description:
      "Let the winds of the Asia Pacific carry you from Bali to the most stunning ports in the region. With destinations like Bangkok, Tokyo, this realm redefines luxury travel.",
    rating: 4.7,
    tags: ["expedition"],
  },
];
