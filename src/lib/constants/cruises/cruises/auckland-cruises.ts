import { Cruise } from "@/lib/interfaces/services/cruises";

export const aucklandCruises: Cruise[] = [
  {
    basePrice: 5296,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    arrivalLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "Set sail from Auckland for a voyage like no other. From the picturesque landscapes of Bali to the lively ambiance of Hong Kong, this floating cruise will redefine your view of Asia Pacific.",
      distance: "892 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Auckland to Bali",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bali to Hong Kong",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Hong Kong to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Julie Grant",
        role: "Loyalty Program Representative",
        languages: ["Malay", "Tagalog", "Korean", "Chinese", "Indonesian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "infinite.discovery.o@velarivoyages.com",
          contactNumber: "+1-983-825-3189",
        },
      },
    ],
    title: "Infinite Discovery of the Sapphire Mooring",
    description:
      "Set sail from Auckland for a voyage like no other. From the picturesque landscapes of Bali to the lively ambiance of Hong Kong, this floating cruise will redefine your view of Asia Pacific.",
    rating: 4.8,
    tags: ["seasonal", "cruise-adventure", "anniversary-cruise"],
  },
  {
    basePrice: 7114,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
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
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
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
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
      ],
      description:
        "Leave ordinary behind as you sail from Auckland across the captivating Asia Pacific. Discover the distinctive personality of each destination, from Ho Chi Minh City, Bangkok.",
      distance: "503 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Auckland to Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Bangkok",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Auckland",
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
          description: "Exploring Bangkok",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Emma Dunn",
        role: "Loyalty Program Representative",
        languages: ["Malay", "Tagalog", "Korean", "Chinese", "Indonesian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "tidewashed.elevation@velarivoyages.com",
          contactNumber: "+1-608-634-7776",
        },
      },
    ],
    title: "Tide-Washed Elevation of the City of Sails",
    description:
      "Leave ordinary behind as you sail from Auckland across the captivating Asia Pacific. Discover the distinctive personality of each destination, from Ho Chi Minh City, Bangkok.",
    rating: 4.3,
    tags: ["adventure", "weekend-cruise", "cruise-getaway"],
  },
  {
    basePrice: 5351,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
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
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
        {
          city: "Hong Kong",
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
        "Cruise into cultural richness aboard this immersive reunion departing Auckland. Savor local cuisine and uncover regional beauty from Bangkok to Melbourne.",
      distance: "907 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Auckland to Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Bangkok to Melbourne",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Melbourne to Hong Kong",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Hong Kong to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Auckland",
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
          description: "Exploring Melbourne",
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
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Mia Henderson",
        role: "Loyalty Program Representative",
        languages: ["Malay", "Tagalog", "Korean", "Chinese", "Indonesian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "exquisite.pilgrimage@velarivoyages.com",
          contactNumber: "+1-427-213-5636",
        },
      },
    ],
    title: "Exquisite Pilgrimage of the Ocean-Bound Metropolis",
    description:
      "Cruise into cultural richness aboard this immersive reunion departing Auckland. Savor local cuisine and uncover regional beauty from Bangkok to Melbourne.",
    rating: 5.0,
    tags: ["wellness", "cruise-holiday", "luxury"],
  },
  {
    basePrice: 9206,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    arrivalLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
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
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "Your resonance begins in Auckland, where every sunset on the Asia Pacific horizon promises another day of discovery—from Yokohama, Shanghai to hidden ports of charm.",
      distance: "808 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Auckland to Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Yokohama to Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Shanghai to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Amelia Reed",
        role: "Loyalty Program Representative",
        languages: ["Malay", "Tagalog", "Korean", "Chinese", "Indonesian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "refined.escape.of.th@velarivoyages.com",
          contactNumber: "+1-938-747-9006",
        },
      },
    ],
    title: "Refined Escape of the Sapphire Mooring",
    description:
      "Your resonance begins in Auckland, where every sunset on the Asia Pacific horizon promises another day of discovery—from Yokohama, Shanghai to hidden ports of charm.",
    rating: 4.9,
    tags: ["cruise-excursion", "sightseeing", "cruise-getaway"],
  },
  {
    basePrice: 6627,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
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
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
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
          city: "Sydney",
          country: "Australia",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "From bustling Auckland to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Melbourne, Sydney deliver a balanced blend of culture and comfort.",
      distance: "1381 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Auckland to Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Melbourne to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Aria Hayes",
        role: "Loyalty Program Representative",
        languages: ["Malay", "Tagalog", "Korean", "Chinese", "Indonesian"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "majestic.serenade.of@velarivoyages.com",
          contactNumber: "+1-115-782-4281",
        },
      },
    ],
    title: "Majestic Serenade of the Lotus-Lined Waters",
    description:
      "From bustling Auckland to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Melbourne, Sydney deliver a balanced blend of culture and comfort.",
    rating: 4.8,
    tags: ["themed-cruise", "cruise-journey", "wildlife"],
  },
  {
    basePrice: 1039,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    arrivalLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Auckland. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Shanghai, Kyoto, Tokyo.",
      distance: "690 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Auckland to Shanghai",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Shanghai to Kyoto",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Kyoto to Tokyo",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Tokyo to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Knight",
        role: "Loyalty Program Representative",
        languages: ["Malay", "Tagalog", "Korean", "Chinese", "Indonesian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "extraordinary.labyri@velarivoyages.com",
          contactNumber: "+1-526-930-1495",
        },
      },
    ],
    title: "Extraordinary Labyrinth of the City of Sails",
    description:
      "A voyage of contrasts awaits from Auckland. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Shanghai, Kyoto, Tokyo.",
    rating: 4.9,
    tags: ["sightseeing", "cruise-getaway"],
  },
  {
    basePrice: 9793,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
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
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
      ],
      description:
        "Embark from Auckland and traverse the Asia Pacific in style. Whether it’s the energy of Singapore or the calm of Kyoto, each destination reveals a new side of paradise.",
      distance: "1050 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Auckland to Singapore",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Singapore to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Kyoto to Bangkok",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
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
          description: "Exploring Bangkok",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Lily Keller",
        role: "Loyalty Program Representative",
        languages: ["Malay", "Tagalog", "Korean", "Chinese", "Indonesian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "panoramic.horizon.of@velarivoyages.com",
          contactNumber: "+1-703-838-5559",
        },
      },
    ],
    title: "Panoramic Horizon of the Sapphire Mooring",
    description:
      "Embark from Auckland and traverse the Asia Pacific in style. Whether it’s the energy of Singapore or the calm of Kyoto, each destination reveals a new side of paradise.",
    rating: 4.6,
    tags: ["expedition"],
  },
  {
    basePrice: 3384,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    arrivalLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
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
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "Escape into the calm waters of Asia Pacific with this luxurious journey from Auckland. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Hong Kong, Ho Chi Minh City, Kyoto.",
      distance: "1387 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Auckland to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Hong Kong to Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Kyoto",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Kyoto to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Auckland",
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
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Charlotte Hall",
        role: "Loyalty Program Representative",
        languages: ["Malay", "Tagalog", "Korean", "Chinese", "Indonesian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "charming.pilgrimage.@velarivoyages.com",
          contactNumber: "+1-383-874-8221",
        },
      },
    ],
    title: "Charming Pilgrimage of the Pacific Dreams",
    description:
      "Escape into the calm waters of Asia Pacific with this luxurious journey from Auckland. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Hong Kong, Ho Chi Minh City, Kyoto.",
    rating: 4.8,
    tags: ["weekend-cruise", "wildlife"],
  },
  {
    basePrice: 5186,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    arrivalLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
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
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "Embark from Auckland and traverse the Asia Pacific in style. Whether it’s the energy of Ho Chi Minh City or the calm of Sydney, each destination reveals a new side of paradise.",
      distance: "791 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Auckland to Ho Chi Minh City",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Sydney",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Sydney to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Auckland",
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
          description: "Exploring Sydney",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Claire Fox",
        role: "Loyalty Program Representative",
        languages: ["Malay", "Tagalog", "Korean", "Chinese", "Indonesian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "forbidden.enigma.of.@velarivoyages.com",
          contactNumber: "+1-698-628-9641",
        },
      },
    ],
    title: "Forbidden Enigma of the Sapphire Mooring",
    description:
      "Embark from Auckland and traverse the Asia Pacific in style. Whether it’s the energy of Ho Chi Minh City or the calm of Sydney, each destination reveals a new side of paradise.",
    rating: 4.8,
    tags: ["holiday-cruise", "anniversary-cruise", "cruise-experience"],
  },
  {
    basePrice: 4498,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
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
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
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
        "Sail into splendor from Auckland on a forbidden voyage through Asia Pacific. Let each stop—from Hong Kong to Bali—reveal the unique flavors and colors of the region.",
      distance: "1040 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Auckland to Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Hong Kong to Bali",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Bali to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Auckland",
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
          description: "Exploring Bali",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Aria Sutton",
        role: "Loyalty Program Representative",
        languages: ["Malay", "Tagalog", "Korean", "Chinese", "Indonesian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "tranquil.serenade.of@velarivoyages.com",
          contactNumber: "+1-269-245-2822",
        },
      },
    ],
    title: "Tranquil Serenade of the Gateway to New Zealand",
    description:
      "Sail into splendor from Auckland on a forbidden voyage through Asia Pacific. Let each stop—from Hong Kong to Bali—reveal the unique flavors and colors of the region.",
    rating: 4.1,
    tags: ["sightseeing"],
  },
];
