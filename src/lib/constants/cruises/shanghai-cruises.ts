import { Cruise } from "@/lib/interfaces/services/cruises";

export const shanghaiCruises: Cruise[] = [
  {
    basePrice: 5854,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
        {
          city: "Bali",
          country: "Indonesia",
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
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "This hand-selected luxurious cruise offers a true taste of Asia Pacific. Depart from Shanghai and explore ports like Bali, Kyoto, each telling a story through food, music, and tradition.",
      distance: "891 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Shanghai to Bali",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bali to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Kyoto to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Johnny Reeves",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "tidewashed.sanctuary@velarivoyages.com",
          contactNumber: "+1-948-819-6645",
        },
      },
    ],
    title: "Tide-Washed Sanctuary of the Pacific Dreams",
    description:
      "This hand-selected luxurious cruise offers a true taste of Asia Pacific. Depart from Shanghai and explore ports like Bali, Kyoto, each telling a story through food, music, and tradition.",
    rating: 4.2,
    tags: ["luxury"],
  },
  {
    basePrice: 6068,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
        "Set course from Shanghai for an inspiring riveting journey across Asia Pacific. Whether exploring ancient ruins in Ho Chi Minh City or soaking up coastal views in Kyoto, every day offers a perfect mix of discovery and relaxation.",
      distance: "501 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Shanghai to Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Kyoto to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
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
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Darrell Grant",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "breathtaking.reunion@velarivoyages.com",
          contactNumber: "+1-669-112-4524",
        },
      },
    ],
    title: "Breathtaking Reunion of the Lotus-Lined Waters",
    description:
      "Set course from Shanghai for an inspiring riveting journey across Asia Pacific. Whether exploring ancient ruins in Ho Chi Minh City or soaking up coastal views in Kyoto, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.5,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 7283,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
        {
          city: "Bali",
          country: "Indonesia",
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
      ],
      description:
        "From the lively departure port of Shanghai, this curated reverie showcases the finest of Asia Pacific. With visits to Bali, Kyoto, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1040 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Shanghai to Bali",
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
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Timothy Marshall",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/51.jpg",
        contact: {
          contactEmail: "floating.resonance.o@velarivoyages.com",
          contactNumber: "+1-919-934-3977",
        },
      },
    ],
    title: "Floating Resonance of the Lotus-Lined Waters",
    description:
      "From the lively departure port of Shanghai, this curated reverie showcases the finest of Asia Pacific. With visits to Bali, Kyoto, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.0,
    tags: ["cruise-line"],
  },
  {
    basePrice: 8194,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "This handpicked requiem begins in Shanghai and travels through Asia Pacific's iconic waterscapes. Discover Melbourne, Kyoto, Auckland as each day brings new stories and every night offers elegant repose.",
      distance: "1072 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Shanghai to Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Melbourne to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Kyoto to Auckland",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Auckland to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Shanghai",
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
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Robert Griffin",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
        contact: {
          contactEmail: "tranquil.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-348-292-5176",
        },
      },
    ],
    title: "Tranquil Eclipse of the Sacred Shores",
    description:
      "This handpicked requiem begins in Shanghai and travels through Asia Pacific's iconic waterscapes. Discover Melbourne, Kyoto, Auckland as each day brings new stories and every night offers elegant repose.",
    rating: 5.0,
    tags: ["weekend-cruise", "long-distance", "wildlife"],
  },
  {
    basePrice: 4772,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
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
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "From the lively departure port of Shanghai, this curated discovery showcases the finest of Asia Pacific. With visits to Singapore, Ho Chi Minh City, Bangkok, Melbourne, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "835 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Shanghai to Singapore",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Singapore to Ho Chi Minh City",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Bangkok",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Bangkok to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kevin Hawkins",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "tranquil.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-630-619-1328",
        },
      },
    ],
    title: "Tranquil Odyssey of the Oriental Realms",
    description:
      "From the lively departure port of Shanghai, this curated discovery showcases the finest of Asia Pacific. With visits to Singapore, Ho Chi Minh City, Bangkok, Melbourne, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.7,
    tags: ["cruise-getaway", "cruise-holiday", "cruise"],
  },
  {
    basePrice: 2579,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Shanghai. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Kyoto, Yokohama.",
      distance: "1211 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Shanghai to Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Kyoto to Yokohama",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Yokohama to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Richard Spencer",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/38.jpg",
        contact: {
          contactEmail: "midnight.pulse.of.th@velarivoyages.com",
          contactNumber: "+1-996-830-2000",
        },
      },
    ],
    title: "Midnight Pulse of the Mystic East",
    description:
      "A voyage of contrasts awaits from Shanghai. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Kyoto, Yokohama.",
    rating: 4.1,
    tags: ["relaxation", "wellness", "seasonal"],
  },
  {
    basePrice: 7369,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "From bustling Shanghai to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Yokohama, Sydney deliver a balanced blend of culture and comfort.",
      distance: "1177 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Shanghai to Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Yokohama to Sydney",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Sydney to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Wei Griffin",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "unforgettable.quest.@velarivoyages.com",
          contactNumber: "+1-315-711-5190",
        },
      },
    ],
    title: "Unforgettable Quest of the Sacred Shores",
    description:
      "From bustling Shanghai to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Yokohama, Sydney deliver a balanced blend of culture and comfort.",
    rating: 4.5,
    tags: ["general", "family-friendly"],
  },
  {
    basePrice: 9466,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
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
      ],
      description:
        "This handpicked haven begins in Shanghai and travels through Asia Pacific's iconic waterscapes. Discover Hong Kong, Tokyo, Auckland, Ho Chi Minh City as each day brings new stories and every night offers elegant repose.",
      distance: "699 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Shanghai to Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Hong Kong to Tokyo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Tokyo to Auckland",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Auckland to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Vincent Knight",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "unforgettable.enigma@velarivoyages.com",
          contactNumber: "+1-573-620-2784",
        },
      },
    ],
    title: "Unforgettable Enigma of the Tea-Laced Traditions",
    description:
      "This handpicked haven begins in Shanghai and travels through Asia Pacific's iconic waterscapes. Discover Hong Kong, Tokyo, Auckland, Ho Chi Minh City as each day brings new stories and every night offers elegant repose.",
    rating: 4.2,
    tags: ["cruise-vacation", "holiday-cruise", "wellness"],
  },
  {
    basePrice: 2397,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
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
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "Set sail from Shanghai on this hidden horizon through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Auckland and Singapore and Kyoto, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1482 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Shanghai to Auckland",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Auckland to Singapore",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Singapore to Kyoto",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Kyoto to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Christopher Curtis",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "oceanic.requiem.of.t@velarivoyages.com",
          contactNumber: "+1-782-557-6865",
        },
      },
    ],
    title: "Oceanic Requiem of the Bamboo Shores",
    description:
      "Set sail from Shanghai on this hidden horizon through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Auckland and Singapore and Kyoto, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.6,
    tags: ["VIP"],
  },
  {
    basePrice: 4988,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "Escape to sea from Shanghai on a gilded voyage exploring the magic of Asia Pacific. Visit unforgettable locales like Tokyo, Sydney, Yokohama, where each stop inspires awe.",
      distance: "1135 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Shanghai to Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Tokyo to Sydney",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Sydney to Yokohama",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Yokohama to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Tokyo",
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
          description: "Exploring Yokohama",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Juan Gardner",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        contact: {
          contactEmail: "tidewashed.elevation@velarivoyages.com",
          contactNumber: "+1-619-701-4971",
        },
      },
    ],
    title: "Tide-Washed Elevation of the Oriental Realms",
    description:
      "Escape to sea from Shanghai on a gilded voyage exploring the magic of Asia Pacific. Visit unforgettable locales like Tokyo, Sydney, Yokohama, where each stop inspires awe.",
    rating: 4.1,
    tags: ["cultural", "cruise-ship"],
  },
  {
    basePrice: 9030,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Bali",
      country: "Indonesia",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
      ],
      description:
        "Leave stress behind with this curated journey from Shanghai. Sail across the best of Asia Pacific and explore treasures like Melbourne, Sydney, Bali with comfort and style.",
      distance: "799 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Shanghai to Melbourne",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Melbourne to Sydney",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Sydney to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Shanghai",
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
          description: "Exploring Sydney",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Richard Campbell",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "ornate.labyrinth.of.@velarivoyages.com",
          contactNumber: "+1-767-397-8785",
        },
      },
    ],
    title: "Ornate Labyrinth of the Bamboo Shores",
    description:
      "Leave stress behind with this curated journey from Shanghai. Sail across the best of Asia Pacific and explore treasures like Melbourne, Sydney, Bali with comfort and style.",
    rating: 4.0,
    tags: ["cruise-experience", "short-getaway", "cultural"],
  },
  {
    basePrice: 9966,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
        {
          city: "Bali",
          country: "Indonesia",
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
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Shanghai. This saga through the Asia Pacific unveils stunning stops including Bali, Melbourne, Auckland, Hong Kong, all with first-class service.",
      distance: "1135 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Shanghai to Bali",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Bali to Melbourne",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Melbourne to Auckland",
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
          description: "Sailing from Hong Kong to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Melbourne",
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
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aaron Holloway",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/61.jpg",
        contact: {
          contactEmail: "idyllic.enigma.of.th@velarivoyages.com",
          contactNumber: "+1-492-134-5881",
        },
      },
    ],
    title: "Idyllic Enigma of the Pacific Dreams",
    description:
      "Step into a world of elegance and exploration from Shanghai. This saga through the Asia Pacific unveils stunning stops including Bali, Melbourne, Auckland, Hong Kong, all with first-class service.",
    rating: 4.3,
    tags: ["cultural", "wildlife"],
  },
  {
    basePrice: 2916,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
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
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Bali",
          country: "Indonesia",
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
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "Set course from Shanghai for an inspiring horizon-kissed journey across Asia Pacific. Whether exploring ancient ruins in Tokyo or soaking up coastal views in Kyoto, every day offers a perfect mix of discovery and relaxation.",
      distance: "759 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Shanghai to Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Tokyo to Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Kyoto to Bali",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Bali to Yokohama",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Yokohama to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Kyoto",
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
          description: "Exploring Yokohama",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Jordan Hawkins",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "oceanic.awakening.of@velarivoyages.com",
          contactNumber: "+1-661-708-1442",
        },
      },
    ],
    title: "Oceanic Awakening of the Dynastic Dreams",
    description:
      "Set course from Shanghai for an inspiring horizon-kissed journey across Asia Pacific. Whether exploring ancient ruins in Tokyo or soaking up coastal views in Kyoto, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.3,
    tags: ["cruise-holiday", "nature"],
  },
  {
    basePrice: 3264,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "Board in Shanghai for a hand-crafted symphony through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Tokyo, Auckland.",
      distance: "735 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Shanghai to Tokyo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tokyo to Auckland",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Auckland to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Fox",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "sundrenched.retreat.@velarivoyages.com",
          contactNumber: "+1-481-319-1267",
        },
      },
    ],
    title: "Sun-Drenched Retreat of the Jade Horizons",
    description:
      "Board in Shanghai for a hand-crafted symphony through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Tokyo, Auckland.",
    rating: 4.7,
    tags: ["cruise-excursion", "expedition", "family-friendly"],
  },
  {
    basePrice: 7273,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
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
          city: "Bali",
          country: "Indonesia",
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
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "Begin a captivating horizon through the Asia Pacific, departing Shanghai. With visits to Bangkok, Bali, Melbourne, each day brings a new adventure and deeper connection to the region.",
      distance: "1265 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Shanghai to Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Bangkok to Bali",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Bali to Melbourne",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Melbourne to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bangkok",
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
          description: "Exploring Melbourne",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jason Warren",
        role: "Sales Consultant",
        languages: ["Bengali", "Thai", "Vietnamese", "Japanese", "Malay"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "infinite.enigma.of.t@velarivoyages.com",
          contactNumber: "+1-309-268-9498",
        },
      },
    ],
    title: "Infinite Enigma of the Bamboo Shores",
    description:
      "Begin a captivating horizon through the Asia Pacific, departing Shanghai. With visits to Bangkok, Bali, Melbourne, each day brings a new adventure and deeper connection to the region.",
    rating: 4.8,
    tags: ["cruise-line", "glacier-cruise", "adventure"],
  },
  {
    basePrice: 1683,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "Depart from Shanghai on this thoughtfully designed wanderlust across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Yokohama, Bali, Ho Chi Minh City.",
      distance: "1011 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Shanghai to Yokohama",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Yokohama to Bali",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Bali to Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ashley Baker",
        role: "Customer Service Representative",
        languages: ["Indonesian", "Malay", "Urdu", "Thai"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "mythic.elevation.of.@velarivoyages.com",
          contactNumber: "+1-774-761-2016",
        },
      },
    ],
    title: "Mythic Elevation of the Zen Shores",
    description:
      "Depart from Shanghai on this thoughtfully designed wanderlust across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Yokohama, Bali, Ho Chi Minh City.",
    rating: 4.7,
    tags: ["holiday-cruise", "cruise"],
  },
  {
    basePrice: 9898,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          city: "Bali",
          country: "Indonesia",
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
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "This handpicked arcadia begins in Shanghai and travels through Asia Pacific's iconic waterscapes. Discover Yokohama, Tokyo, Bali, Singapore as each day brings new stories and every night offers elegant repose.",
      distance: "1273 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Shanghai to Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Yokohama to Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Tokyo to Bali",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Bali to Singapore",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Singapore to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Tokyo",
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
          description: "Exploring Singapore",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Isabella Baker",
        role: "Customer Service Representative",
        languages: ["Indonesian", "Malay", "Urdu", "Thai"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/15.jpg",
        contact: {
          contactEmail: "extraordinary.retrea@velarivoyages.com",
          contactNumber: "+1-597-990-2938",
        },
      },
    ],
    title: "Extraordinary Retreat of the Bamboo Shores",
    description:
      "This handpicked arcadia begins in Shanghai and travels through Asia Pacific's iconic waterscapes. Discover Yokohama, Tokyo, Bali, Singapore as each day brings new stories and every night offers elegant repose.",
    rating: 4.3,
    tags: ["exclusive", "seasonal"],
  },
  {
    basePrice: 9499,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
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
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "Set sail from Shanghai on this azure zenith through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Hong Kong and Ho Chi Minh City, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "848 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Shanghai to Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Hong Kong to Ho Chi Minh City",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Melissa Day",
        role: "Customer Service Representative",
        languages: ["Indonesian", "Malay", "Urdu", "Thai"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "epic.mythos.of.the.p@velarivoyages.com",
          contactNumber: "+1-327-175-4338",
        },
      },
    ],
    title: "Epic Mythos of the Pagoda-Silhouetted Skylines",
    description:
      "Set sail from Shanghai on this azure zenith through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Hong Kong and Ho Chi Minh City, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 5.0,
    tags: ["exclusive"],
  },
  {
    basePrice: 1701,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
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
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
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
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this idyllic reflection through Asia Pacific, starting from the illustrious port of Shanghai. From Singapore, Kyoto, Tokyo to Ho Chi Minh City, each destination offers its own story, culture, and breathtaking views.",
      distance: "1206 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Shanghai to Singapore",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Singapore to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Kyoto to Tokyo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Tokyo to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Shanghai",
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
          description: "Exploring Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Patricia Fletcher",
        role: "Customer Service Representative",
        languages: ["Indonesian", "Malay", "Urdu", "Thai"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "timeless.saga.of.the@velarivoyages.com",
          contactNumber: "+1-260-419-7657",
        },
      },
    ],
    title: "Timeless Saga of the Dynastic Dreams",
    description:
      "Experience the elegance of the seas on this idyllic reflection through Asia Pacific, starting from the illustrious port of Shanghai. From Singapore, Kyoto, Tokyo to Ho Chi Minh City, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.0,
    tags: ["short-getaway", "cruise-line", "cruise"],
  },
  {
    basePrice: 1097,
    departureLocation: {
      city: "Shanghai",
      country: "China",
      region: "Asia Pacific",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Shanghai",
          country: "China",
          region: "Asia Pacific",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
      ],
      description:
        "Depart from iconic Shanghai and traverse the Asia Pacific with visits to Yokohama, Ho Chi Minh City, Singapore, Hong Kong. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "524 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Shanghai to Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Yokohama to Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Singapore",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Singapore to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Reed",
        role: "Customer Service Representative",
        languages: ["Indonesian", "Malay", "Urdu", "Thai"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "heavenly.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-186-879-9934",
        },
      },
    ],
    title: "Heavenly Mythos of the Dynastic Dreams",
    description:
      "Depart from iconic Shanghai and traverse the Asia Pacific with visits to Yokohama, Ho Chi Minh City, Singapore, Hong Kong. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.4,
    tags: ["glacier-cruise"],
  },
];
