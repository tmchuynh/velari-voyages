import { Cruise } from "@/lib/interfaces/services/cruises";

export const yokohamaCruises: Cruise[] = [
  {
    basePrice: 4753,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "Set sail from Yokohama for a voyage like no other. From the picturesque landscapes of Tokyo to the lively ambiance of Singapore, this riveting cruise will redefine your view of Asia Pacific.",
      distance: "687 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Yokohama to Tokyo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tokyo to Singapore",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Singapore to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Patrick Day",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "hidden.currents.of.t@velarivoyages.com",
          contactNumber: "+1-407-515-2872",
        },
      },
    ],
    title: "Hidden Currents of the Bridge to Tradition",
    description:
      "Set sail from Yokohama for a voyage like no other. From the picturesque landscapes of Tokyo to the lively ambiance of Singapore, this riveting cruise will redefine your view of Asia Pacific.",
    rating: 4.7,
    tags: ["relaxation", "tropical"],
  },
  {
    basePrice: 2474,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "Experience coastal elegance on this escape from Yokohama, where the journey through Asia Pacific includes stops in Singapore, Melbourne, Tokyo, Ho Chi Minh City, each more enchanting than the last.",
      distance: "1196 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Yokohama to Singapore",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Singapore to Melbourne",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Melbourne to Tokyo",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tokyo to Ho Chi Minh City",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Singapore",
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
          description: "Exploring Tokyo",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adam Griffin",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "legendary.solstice.o@velarivoyages.com",
          contactNumber: "+1-913-198-3549",
        },
      },
    ],
    title: "Legendary Solstice of the Harbor of Rebirth",
    description:
      "Experience coastal elegance on this escape from Yokohama, where the journey through Asia Pacific includes stops in Singapore, Melbourne, Tokyo, Ho Chi Minh City, each more enchanting than the last.",
    rating: 4.1,
    tags: ["fall-cruise", "general", "romantic"],
  },
  {
    basePrice: 7709,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
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
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "Let the waves lead you from Yokohama on this lavish haven. Traverse the iconic waters of Asia Pacific and discover the beauty of Melbourne, Sydney, Ho Chi Minh City, Kyoto.",
      distance: "1110 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Yokohama to Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Melbourne to Sydney",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Sydney to Ho Chi Minh City",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Kyoto",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Kyoto to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Richard Fletcher",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "captivating.lullaby.@velarivoyages.com",
          contactNumber: "+1-751-884-5972",
        },
      },
    ],
    title: "Captivating Lullaby of the Bridge to Tradition",
    description:
      "Let the waves lead you from Yokohama on this lavish haven. Traverse the iconic waters of Asia Pacific and discover the beauty of Melbourne, Sydney, Ho Chi Minh City, Kyoto.",
    rating: 4.9,
    tags: ["cruise-journey"],
  },
  {
    basePrice: 7083,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This hand-selected luxurious cruise offers a true taste of Asia Pacific. Depart from Yokohama and explore ports like Sydney, Hong Kong, each telling a story through food, music, and tradition.",
      distance: "1006 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Yokohama to Sydney",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Sydney to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Marcus Foster",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
        contact: {
          contactEmail: "majestic.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-324-554-2477",
        },
      },
    ],
    title: "Majestic Mirage of the Pearl Wake City",
    description:
      "This hand-selected luxurious cruise offers a true taste of Asia Pacific. Depart from Yokohama and explore ports like Sydney, Hong Kong, each telling a story through food, music, and tradition.",
    rating: 4.9,
    tags: ["cruise-experience", "wellness", "sightseeing"],
  },
  {
    basePrice: 4231,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
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
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "Escape the everyday with this forbidden journey through Asia Pacific, departing from Yokohama. You'll visit Ho Chi Minh City, Sydney, where every stop is a new adventure.",
      distance: "984 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Yokohama to Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Sydney",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Sydney to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Yokohama",
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
          description: "Exploring Sydney",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Tyler Hayes",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "legendary.tranquilit@velarivoyages.com",
          contactNumber: "+1-681-182-7195",
        },
      },
    ],
    title: "Legendary Tranquility of the Pagoda-Silhouetted Skylines",
    description:
      "Escape the everyday with this forbidden journey through Asia Pacific, departing from Yokohama. You'll visit Ho Chi Minh City, Sydney, where every stop is a new adventure.",
    rating: 4.0,
    tags: ["wellness"],
  },
  {
    basePrice: 1760,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
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
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
      ],
      description:
        "Cruise into cultural richness aboard this luxurious pulse departing Yokohama. Savor local cuisine and uncover regional beauty from Sydney to Melbourne.",
      distance: "1013 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Yokohama to Sydney",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Sydney to Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Melbourne to Shanghai",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Shanghai to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Sydney",
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
          description: "Exploring Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Matthew Mason",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "transcendent.odyssey@velarivoyages.com",
          contactNumber: "+1-444-533-5699",
        },
      },
    ],
    title: "Transcendent Odyssey of the Bridge to Tradition",
    description:
      "Cruise into cultural richness aboard this luxurious pulse departing Yokohama. Savor local cuisine and uncover regional beauty from Sydney to Melbourne.",
    rating: 5.0,
    tags: ["culinary"],
  },
  {
    basePrice: 6770,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Bali",
          country: "Indonesia",
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
      ],
      description:
        "From bustling Yokohama to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Auckland, Kyoto, Bali, Tokyo deliver a balanced blend of culture and comfort.",
      distance: "933 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Yokohama to Auckland",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Auckland to Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Kyoto to Bali",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Bali to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jordan Russell",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "breathtaking.excursi@velarivoyages.com",
          contactNumber: "+1-612-726-5002",
        },
      },
    ],
    title: "Breathtaking Excursion of the Bridge to Tradition",
    description:
      "From bustling Yokohama to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Auckland, Kyoto, Bali, Tokyo deliver a balanced blend of culture and comfort.",
    rating: 4.5,
    tags: ["wellness"],
  },
  {
    basePrice: 8661,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "This gilded cruise from Yokohama is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Singapore, Bali, Shanghai with enriching excursions and award-winning service.",
      distance: "739 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Yokohama to Singapore",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Singapore to Bali",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Bali to Shanghai",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Shanghai to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Bali",
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
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Edward Porter",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "azure.eclipse.of.the@velarivoyages.com",
          contactNumber: "+1-160-648-8718",
        },
      },
    ],
    title: "Azure Eclipse of the Lotus-Lined Waters",
    description:
      "This gilded cruise from Yokohama is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Singapore, Bali, Shanghai with enriching excursions and award-winning service.",
    rating: 4.8,
    tags: ["sightseeing", "short-getaway"],
  },
  {
    basePrice: 2485,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
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
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "An escape like no other begins in Yokohama, where your tranquility launches into the heart of Asia Pacific. Discover the magic of Tokyo, Bangkok, Auckland, Shanghai with style and sophistication.",
      distance: "544 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Yokohama to Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tokyo to Bangkok",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Bangkok to Auckland",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Auckland to Shanghai",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Shanghai to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Yokohama",
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
          description: "Exploring Bangkok",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Edward Hunter",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/38.jpg",
        contact: {
          contactEmail: "golden.reunion.of.th@velarivoyages.com",
          contactNumber: "+1-898-812-9230",
        },
      },
    ],
    title: "Golden Reunion of the Wind-Touched Wharf",
    description:
      "An escape like no other begins in Yokohama, where your tranquility launches into the heart of Asia Pacific. Discover the magic of Tokyo, Bangkok, Auckland, Shanghai with style and sophistication.",
    rating: 4.1,
    tags: ["culinary", "sightseeing"],
  },
  {
    basePrice: 5604,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "Depart from Yokohama on this thoughtfully designed mystique across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Singapore, Ho Chi Minh City, Hong Kong.",
      distance: "1486 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Yokohama to Singapore",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Singapore to Ho Chi Minh City",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Hong Kong",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Hong Kong to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Singapore",
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
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Richard Hall",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/47.jpg",
        contact: {
          contactEmail: "serene.elevation.of.@velarivoyages.com",
          contactNumber: "+1-107-317-4504",
        },
      },
    ],
    title: "Serene Elevation of the Gateway to Japan",
    description:
      "Depart from Yokohama on this thoughtfully designed mystique across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Singapore, Ho Chi Minh City, Hong Kong.",
    rating: 4.4,
    tags: ["repositioning"],
  },
  {
    basePrice: 5417,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "Your oasis begins in Yokohama, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Melbourne to the historic streets of Hong Kong, each stop in the Asia Pacific will leave a lasting impression.",
      distance: "1468 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Yokohama to Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Melbourne to Hong Kong",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Hong Kong to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "John Hayes",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "captivating.odyssey.@velarivoyages.com",
          contactNumber: "+1-757-869-7275",
        },
      },
    ],
    title: "Captivating Odyssey of the Lotus-Lined Waters",
    description:
      "Your oasis begins in Yokohama, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Melbourne to the historic streets of Hong Kong, each stop in the Asia Pacific will leave a lasting impression.",
    rating: 4.4,
    tags: ["repositioning", "cruise-getaway", "fall-cruise"],
  },
  {
    basePrice: 3991,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
      ],
      description:
        "Begin an epic journey from Yokohama, where the seas meet culture. Visit the remarkable ports of Singapore, Shanghai, Hong Kong while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1149 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Yokohama to Singapore",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Singapore to Shanghai",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Shanghai to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Dennis Dean",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "radiant.labyrinth.of@velarivoyages.com",
          contactNumber: "+1-284-886-9153",
        },
      },
    ],
    title: "Radiant Labyrinth of the Harbor of Rebirth",
    description:
      "Begin an epic journey from Yokohama, where the seas meet culture. Visit the remarkable ports of Singapore, Shanghai, Hong Kong while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.1,
    tags: ["expedition", "cruise-vacation", "luxury"],
  },
  {
    basePrice: 2514,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
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
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
      ],
      description:
        "Discover the wonders of Asia Pacific aboard this alluring cruise departing from Yokohama. Journey through crystal waters to explore the treasures of Bali, Singapore, Auckland, Bangkok, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1242 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Yokohama to Bali",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bali to Singapore",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Singapore to Auckland",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Auckland to Bangkok",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Singapore",
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
          description: "Exploring Bangkok",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Blake Day",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "secret.journey.of.th@velarivoyages.com",
          contactNumber: "+1-272-588-7345",
        },
      },
    ],
    title: "Secret Journey of the Zen Shores",
    description:
      "Discover the wonders of Asia Pacific aboard this alluring cruise departing from Yokohama. Journey through crystal waters to explore the treasures of Bali, Singapore, Auckland, Bangkok, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.6,
    tags: ["culinary", "glacier-cruise"],
  },
  {
    basePrice: 2682,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "Depart from Yokohama on this thoughtfully designed reverie across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Hong Kong, Auckland.",
      distance: "737 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Yokohama to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Hong Kong to Auckland",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Auckland to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Yokohama",
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
          description: "Exploring Auckland",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bruce Fox",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "ornate.elevation.of.@velarivoyages.com",
          contactNumber: "+1-705-294-3601",
        },
      },
    ],
    title: "Ornate Elevation of the Wind-Touched Wharf",
    description:
      "Depart from Yokohama on this thoughtfully designed reverie across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Hong Kong, Auckland.",
    rating: 4.0,
    tags: ["short-getaway", "family-friendly", "long-distance"],
  },
  {
    basePrice: 6976,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Bali",
          country: "Indonesia",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
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
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "Explore a new side of Asia Pacific with this crystalline eclipse starting in Yokohama. Visit charming ports such as Ho Chi Minh City, Bali, Auckland, Kyoto, each offering its own unique rhythm.",
      distance: "1182 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Yokohama to Ho Chi Minh City",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Bali",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Bali to Auckland",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Auckland to Kyoto",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Kyoto to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Philip Dixon",
        role: "Sales Consultant",
        languages: ["Korean", "Bengali", "Hindi"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "verdant.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-209-622-7525",
        },
      },
    ],
    title: "Verdant Eclipse of the Pearl Wake City",
    description:
      "Explore a new side of Asia Pacific with this crystalline eclipse starting in Yokohama. Visit charming ports such as Ho Chi Minh City, Bali, Auckland, Kyoto, each offering its own unique rhythm.",
    rating: 4.8,
    tags: ["short-getaway", "weekend-cruise", "cruise-excursion"],
  },
  {
    basePrice: 6343,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
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
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
      ],
      description:
        "Begin your journey in Yokohama, where tradition meets travel. This immersive sojourn reveals the finest of Asia Pacific, from the beaches of Ho Chi Minh City to the streets of Auckland.",
      distance: "1349 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Yokohama to Ho Chi Minh City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Auckland",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Auckland to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Bella Henderson",
        role: "Group Booking Coordinator",
        languages: ["Urdu", "Chinese", "Japanese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "luminous.journey.of.@velarivoyages.com",
          contactNumber: "+1-491-152-7129",
        },
      },
    ],
    title: "Luminous Journey of the Tea-Laced Traditions",
    description:
      "Begin your journey in Yokohama, where tradition meets travel. This immersive sojourn reveals the finest of Asia Pacific, from the beaches of Ho Chi Minh City to the streets of Auckland.",
    rating: 4.6,
    tags: ["cruise-getaway", "romantic", "cruise-experience"],
  },
  {
    basePrice: 5918,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
        "Begin your expedition in Yokohama, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Bali, Auckland, Melbourne, Singapore and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "619 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Yokohama to Bali",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bali to Auckland",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Auckland to Melbourne",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Melbourne to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bali",
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
        name: "Sophia Hamilton",
        role: "Group Booking Coordinator",
        languages: ["Urdu", "Chinese", "Japanese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
        contact: {
          contactEmail: "sublime.mythos.of.th@velarivoyages.com",
          contactNumber: "+1-310-696-4501",
        },
      },
    ],
    title: "Sublime Mythos of the Bridge to Tradition",
    description:
      "Begin your expedition in Yokohama, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Bali, Auckland, Melbourne, Singapore and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.6,
    tags: ["cruise-journey"],
  },
  {
    basePrice: 9872,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
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
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "Sail into splendor from Yokohama on a oceanic voyage through Asia Pacific. Let each stop—from Tokyo to Melbourne—reveal the unique flavors and colors of the region.",
      distance: "1083 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Yokohama to Tokyo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tokyo to Melbourne",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Melbourne to Sydney",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Sydney to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Yokohama",
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
          description: "Exploring Melbourne",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Alexa Douglas",
        role: "Group Booking Coordinator",
        languages: ["Urdu", "Chinese", "Japanese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "panoramic.mythos.of.@velarivoyages.com",
          contactNumber: "+1-541-253-6005",
        },
      },
    ],
    title: "Panoramic Mythos of the Bayside Metropolis",
    description:
      "Sail into splendor from Yokohama on a oceanic voyage through Asia Pacific. Let each stop—from Tokyo to Melbourne—reveal the unique flavors and colors of the region.",
    rating: 4.9,
    tags: ["cruise", "general"],
  },
  {
    basePrice: 4545,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    arrivalLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
      ],
      description:
        "Your excursion begins in Yokohama, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Ho Chi Minh City to the historic streets of Kyoto, each stop in the Asia Pacific will leave a lasting impression.",
      distance: "1354 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Yokohama to Ho Chi Minh City",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Kyoto to Bali",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Bali to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
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
          description: "Exploring Bali",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Samantha Campbell",
        role: "Group Booking Coordinator",
        languages: ["Urdu", "Chinese", "Japanese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "lavish.tranquility.o@velarivoyages.com",
          contactNumber: "+1-495-337-9344",
        },
      },
    ],
    title: "Lavish Tranquility of the Wind-Touched Wharf",
    description:
      "Your excursion begins in Yokohama, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Ho Chi Minh City to the historic streets of Kyoto, each stop in the Asia Pacific will leave a lasting impression.",
    rating: 4.2,
    tags: ["fall-cruise", "wildlife"],
  },
  {
    basePrice: 5014,
    departureLocation: {
      city: "Yokohama",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.4437,
        longitude: 139.638,
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
          city: "Yokohama",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Embark from Yokohama and traverse the Asia Pacific in style. Whether it’s the energy of Tokyo or the calm of Melbourne, each destination reveals a new side of paradise.",
      distance: "789 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Yokohama to Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Tokyo to Melbourne",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Melbourne to Hong Kong",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Hong Kong to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Tokyo",
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
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Riley Warren",
        role: "Group Booking Coordinator",
        languages: ["Urdu", "Chinese", "Japanese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "transcendent.eclipse@velarivoyages.com",
          contactNumber: "+1-713-520-7020",
        },
      },
    ],
    title: "Transcendent Eclipse of the Harbor of Rebirth",
    description:
      "Embark from Yokohama and traverse the Asia Pacific in style. Whether it’s the energy of Tokyo or the calm of Melbourne, each destination reveals a new side of paradise.",
    rating: 4.9,
    tags: ["cruise-vacation", "general"],
  },
];
