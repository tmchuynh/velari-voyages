import { Cruise } from "@/lib/interfaces/services/cruises";

export const sydneyCruises: Cruise[] = [
  {
    basePrice: 6623,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
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
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Bali",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Depart from Sydney on this thoughtfully designed elevation across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Yokohama, Ho Chi Minh City, Singapore, Bali.",
      distance: "1330 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sydney to Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Yokohama to Ho Chi Minh City",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Singapore",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Singapore to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
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
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Singapore",
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
        name: "Carlos Hall",
        role: "Marketing Coordinator",
        languages: ["Vietnamese", "Bengali", "Thai", "Korean"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "legendary.adventure.@velarivoyages.com",
          contactNumber: "+1-884-180-9230",
        },
      },
    ],
    title: "Legendary Adventure of the Seafront Radiance",
    description:
      "Depart from Sydney on this thoughtfully designed elevation across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Yokohama, Ho Chi Minh City, Singapore, Bali.",
    rating: 4.9,
    tags: ["cruise-line"],
  },
  {
    basePrice: 5702,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
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
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Begin a captivating saga through the Asia Pacific, departing Sydney. With visits to Hong Kong, Kyoto, each day brings a new adventure and deeper connection to the region.",
      distance: "1125 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sydney to Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Hong Kong to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Kyoto to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sydney",
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
          description: "Exploring Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brandon Graves",
        role: "Marketing Coordinator",
        languages: ["Vietnamese", "Bengali", "Thai", "Korean"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
        contact: {
          contactEmail: "sundrenched.pulse.of@velarivoyages.com",
          contactNumber: "+1-463-572-5984",
        },
      },
    ],
    title: "Sun-Drenched Pulse of the Crescent Bay Beauty",
    description:
      "Begin a captivating saga through the Asia Pacific, departing Sydney. With visits to Hong Kong, Kyoto, each day brings a new adventure and deeper connection to the region.",
    rating: 4.7,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 6870,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
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
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
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
        "Escape the everyday with this hidden journey through Asia Pacific, departing from Sydney. You'll visit Melbourne, Shanghai, Bali, where every stop is a new adventure.",
      distance: "1397 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sydney to Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Melbourne to Shanghai",
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
          description: "Exploring Sydney",
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
        name: "Wayne Ellis",
        role: "Marketing Coordinator",
        languages: ["Vietnamese", "Bengali", "Thai", "Korean"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "spectacular.arcadia.@velarivoyages.com",
          contactNumber: "+1-883-943-2896",
        },
      },
    ],
    title: "Spectacular Arcadia of the Seafront Radiance",
    description:
      "Escape the everyday with this hidden journey through Asia Pacific, departing from Sydney. You'll visit Melbourne, Shanghai, Bali, where every stop is a new adventure.",
    rating: 4.2,
    tags: ["long-distance", "cruise-excursion"],
  },
  {
    basePrice: 6677,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
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
        "A voyage of contrasts awaits from Sydney. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Tokyo, Melbourne, Singapore.",
      distance: "628 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sydney to Tokyo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tokyo to Melbourne",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Melbourne to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
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
          description: "Exploring Melbourne",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Bryan Price",
        role: "Marketing Coordinator",
        languages: ["Vietnamese", "Bengali", "Thai", "Korean"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
        contact: {
          contactEmail: "whispering.labyrinth@velarivoyages.com",
          contactNumber: "+1-346-709-3729",
        },
      },
    ],
    title: "Whispering Labyrinth of the Opera-Lit Skies",
    description:
      "A voyage of contrasts awaits from Sydney. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Tokyo, Melbourne, Singapore.",
    rating: 4.9,
    tags: ["cruise-holiday", "wildlife", "VIP"],
  },
  {
    basePrice: 5729,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
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
      ],
      description:
        "Sail away from the charming harbor of Sydney on this mesmerizing journey across Asia Pacific. Uncover the beauty and history of Singapore, Yokohama, Hong Kong with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1324 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sydney to Singapore",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Singapore to Yokohama",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Yokohama to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sydney",
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
          description: "Exploring Yokohama",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Jose Wallace",
        role: "Marketing Coordinator",
        languages: ["Vietnamese", "Bengali", "Thai", "Korean"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
        contact: {
          contactEmail: "horizonkissed.voyage@velarivoyages.com",
          contactNumber: "+1-721-451-2633",
        },
      },
    ],
    title: "Horizon-Kissed Voyage of the Tea-Laced Traditions",
    description:
      "Sail away from the charming harbor of Sydney on this mesmerizing journey across Asia Pacific. Uncover the beauty and history of Singapore, Yokohama, Hong Kong with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.9,
    tags: ["family-friendly", "cruise-ship", "tropical"],
  },
  {
    basePrice: 3294,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Begin your embrace in Sydney, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Tokyo, Auckland, Shanghai and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "784 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sydney to Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tokyo to Auckland",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Auckland to Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Shanghai to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Anthony Fisher",
        role: "Marketing Coordinator",
        languages: ["Vietnamese", "Bengali", "Thai", "Korean"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "idyllic.legacy.of.th@velarivoyages.com",
          contactNumber: "+1-155-877-5791",
        },
      },
    ],
    title: "Idyllic Legacy of the Seafront Radiance",
    description:
      "Begin your embrace in Sydney, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Tokyo, Auckland, Shanghai and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.3,
    tags: ["family-friendly", "cruise-adventure", "exclusive"],
  },
  {
    basePrice: 7262,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
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
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your oceanic journey from Sydney. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Hong Kong, Auckland.",
      distance: "1010 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sydney to Hong Kong",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Hong Kong to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Blake Chambers",
        role: "Marketing Coordinator",
        languages: ["Vietnamese", "Bengali", "Thai", "Korean"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
        contact: {
          contactEmail: "majestic.excursion.o@velarivoyages.com",
          contactNumber: "+1-258-533-7636",
        },
      },
    ],
    title: "Majestic Excursion of the Sun-Kissed Capital",
    description:
      "Let the spirit of exploration guide your oceanic journey from Sydney. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Hong Kong, Auckland.",
    rating: 4.4,
    tags: ["sightseeing"],
  },
  {
    basePrice: 8066,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Bangkok",
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
      ],
      description:
        "Start in the vibrant city of Sydney and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Yokohama, Bangkok, Melbourne.",
      distance: "1394 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Sydney to Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Yokohama to Bangkok",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Bangkok to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sydney",
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
          description: "Exploring Bangkok",
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
        name: "Benjamin Price",
        role: "Marketing Coordinator",
        languages: ["Vietnamese", "Bengali", "Thai", "Korean"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "enchanting.sojourn.o@velarivoyages.com",
          contactNumber: "+1-519-781-2036",
        },
      },
    ],
    title: "Enchanting Sojourn of the Island Kingdoms",
    description:
      "Start in the vibrant city of Sydney and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Yokohama, Bangkok, Melbourne.",
    rating: 4.4,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 3117,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Bangkok",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Depart from Sydney on this thoughtfully designed reverie across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Hong Kong, Kyoto, Ho Chi Minh City, Bangkok.",
      distance: "745 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sydney to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Hong Kong to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Kyoto to Ho Chi Minh City",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Bangkok",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Bangkok to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sydney",
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
          description: "Exploring Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Robert Morgan",
        role: "Marketing Coordinator",
        languages: ["Vietnamese", "Bengali", "Thai", "Korean"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "horizonkissed.enigma@velarivoyages.com",
          contactNumber: "+1-676-854-4425",
        },
      },
    ],
    title: "Horizon-Kissed Enigma of the Seafront Radiance",
    description:
      "Depart from Sydney on this thoughtfully designed reverie across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Hong Kong, Kyoto, Ho Chi Minh City, Bangkok.",
    rating: 4.4,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 1571,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
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
      ],
      description:
        "Depart from iconic Sydney and traverse the Asia Pacific with visits to Kyoto, Yokohama. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1092 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sydney to Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Kyoto to Yokohama",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Christian Graham",
        role: "Marketing Coordinator",
        languages: ["Vietnamese", "Bengali", "Thai", "Korean"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "azure.awakening.of.t@velarivoyages.com",
          contactNumber: "+1-472-416-3360",
        },
      },
    ],
    title: "Azure Awakening of the Seafront Radiance",
    description:
      "Depart from iconic Sydney and traverse the Asia Pacific with visits to Kyoto, Yokohama. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.7,
    tags: ["relaxation", "cruise-line", "seasonal"],
  },
];
