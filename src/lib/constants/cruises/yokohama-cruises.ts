import { Cruise } from "@/lib/interfaces/services/cruises";

export const yokohamaCruises: Cruise[] = [
  {
    basePrice: 4506,
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
      city: "Sydney",
      country: "Australia",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
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
          city: "Bali",
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
        "Board in Yokohama for a hand-crafted mythos through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Bali, Hong Kong, Melbourne, Sydney.",
      distance: "703 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Yokohama to Bali",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bali to Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Hong Kong to Melbourne",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Melbourne to Sydney",
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
          description: "Exploring Bali",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jacob Bennett",
        role: "Group Booking Coordinator",
        languages: ["Hindi", "Tagalog", "Thai"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
        contact: {
          contactEmail: "harmonic.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-833-148-5580",
        },
      },
    ],
    title: "Harmonic Odyssey of the Island Kingdoms",
    description:
      "Board in Yokohama for a hand-crafted mythos through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Bali, Hong Kong, Melbourne, Sydney.",
    rating: 4.9,
    tags: ["cruise-adventure"],
  },
  {
    basePrice: 8947,
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
      city: "Sydney",
      country: "Australia",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
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
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Yokohama on this transcendent journey across Asia Pacific. Uncover the beauty and history of Auckland, Ho Chi Minh City, Bangkok, Sydney with curated excursions, world-class cuisine, and exceptional service.",
      distance: "756 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Yokohama to Auckland",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Auckland to Ho Chi Minh City",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Bangkok",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Bangkok to Sydney",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Bennett",
        role: "Group Booking Coordinator",
        languages: ["Hindi", "Tagalog", "Thai"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "aweinspiring.sojourn@velarivoyages.com",
          contactNumber: "+1-263-758-5874",
        },
      },
    ],
    title: "Awe-Inspiring Sojourn of the Bayside Metropolis",
    description:
      "Sail away from the charming harbor of Yokohama on this transcendent journey across Asia Pacific. Uncover the beauty and history of Auckland, Ho Chi Minh City, Bangkok, Sydney with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.4,
    tags: ["adventure", "expedition"],
  },
  {
    basePrice: 7629,
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
    isPopular: true, // Make fewer cruises "popular"
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
        "Cruise into cultural richness aboard this charming horizon departing Yokohama. Savor local cuisine and uncover regional beauty from Singapore to Auckland.",
      distance: "1010 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Yokohama to Singapore",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Singapore to Auckland",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Auckland to Ho Chi Minh City",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Tokyo",
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
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Terry Hunter",
        role: "Group Booking Coordinator",
        languages: ["Hindi", "Tagalog", "Thai"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "ornate.excursion.of.@velarivoyages.com",
          contactNumber: "+1-916-177-7620",
        },
      },
    ],
    title: "Ornate Excursion of the Pearl Wake City",
    description:
      "Cruise into cultural richness aboard this charming horizon departing Yokohama. Savor local cuisine and uncover regional beauty from Singapore to Auckland.",
    rating: 4.0,
    tags: ["repositioning"],
  },
  {
    basePrice: 3970,
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
        "Let the spirit of exploration guide your floating journey from Yokohama. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Shanghai, Singapore, Ho Chi Minh City.",
      distance: "1300 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Yokohama to Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Shanghai to Singapore",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Singapore to Ho Chi Minh City",
        },
        {
          start: "Day 11",
          end: "Day 12",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carlos Day",
        role: "Group Booking Coordinator",
        languages: ["Hindi", "Tagalog", "Thai"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "alluring.haven.of.th@velarivoyages.com",
          contactNumber: "+1-913-757-4790",
        },
      },
    ],
    title: "Alluring Haven of the Gateway to Japan",
    description:
      "Let the spirit of exploration guide your floating journey from Yokohama. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Shanghai, Singapore, Ho Chi Minh City.",
    rating: 4.2,
    tags: ["cruise-excursion", "wildlife"],
  },
  {
    basePrice: 1018,
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
        "Leave stress behind with this curated quest from Yokohama. Sail across the best of Asia Pacific and explore treasures like Sydney, Singapore, Melbourne with comfort and style.",
      distance: "1230 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Yokohama to Sydney",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Sydney to Singapore",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Singapore to Melbourne",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Melbourne to Yokohama",
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
          description: "Exploring Sydney",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Price",
        role: "Group Booking Coordinator",
        languages: ["Hindi", "Tagalog", "Thai"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "exquisite.zenith.of.@velarivoyages.com",
          contactNumber: "+1-766-950-3312",
        },
      },
    ],
    title: "Exquisite Zenith of the Bridge to Tradition",
    description:
      "Leave stress behind with this curated quest from Yokohama. Sail across the best of Asia Pacific and explore treasures like Sydney, Singapore, Melbourne with comfort and style.",
    rating: 4.2,
    tags: ["romantic", "cruise-vacation"],
  },
  {
    basePrice: 2352,
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
      city: "Sydney",
      country: "Australia",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
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
        "Leave stress behind with this curated pilgrimage from Yokohama. Sail across the best of Asia Pacific and explore treasures like Auckland, Sydney with comfort and style.",
      distance: "1155 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Yokohama to Auckland",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Auckland to Sydney",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christopher Reeves",
        role: "Group Booking Coordinator",
        languages: ["Hindi", "Tagalog", "Thai"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "forbidden.odyssey.of@velarivoyages.com",
          contactNumber: "+1-351-117-1797",
        },
      },
    ],
    title: "Forbidden Odyssey of the Jade Horizons",
    description:
      "Leave stress behind with this curated pilgrimage from Yokohama. Sail across the best of Asia Pacific and explore treasures like Auckland, Sydney with comfort and style.",
    rating: 4.3,
    tags: ["long-distance"],
  },
  {
    basePrice: 2971,
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
          city: "Shanghai",
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
        "Sail from Yokohama into a world of wonder. The Asia Pacific beckons with unforgettable ports like Shanghai, Melbourne, Kyoto, where every view is picture-perfect and every moment is priceless.",
      distance: "1166 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Yokohama to Shanghai",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Shanghai to Melbourne",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Melbourne to Kyoto",
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
          description: "Exploring Shanghai",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Willie Hamilton",
        role: "Group Booking Coordinator",
        languages: ["Hindi", "Tagalog", "Thai"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
        contact: {
          contactEmail: "opulent.pulse.of.the@velarivoyages.com",
          contactNumber: "+1-844-821-3161",
        },
      },
    ],
    title: "Opulent Pulse of the Island Kingdoms",
    description:
      "Sail from Yokohama into a world of wonder. The Asia Pacific beckons with unforgettable ports like Shanghai, Melbourne, Kyoto, where every view is picture-perfect and every moment is priceless.",
    rating: 4.3,
    tags: ["expedition", "relaxation"],
  },
  {
    basePrice: 4832,
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
          city: "Kyoto",
          country: "Japan",
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
        "An escape like no other begins in Yokohama, where your odyssey launches into the heart of Asia Pacific. Discover the magic of Kyoto, Hong Kong, Sydney, Melbourne with style and sophistication.",
      distance: "1067 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Yokohama to Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Kyoto to Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Hong Kong to Sydney",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Sydney to Melbourne",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Melbourne to Yokohama",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Ronald Jennings",
        role: "Group Booking Coordinator",
        languages: ["Hindi", "Tagalog", "Thai"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
        contact: {
          contactEmail: "moonlit.drift.of.the@velarivoyages.com",
          contactNumber: "+1-934-624-9814",
        },
      },
    ],
    title: "Moonlit Drift of the Oriental Realms",
    description:
      "An escape like no other begins in Yokohama, where your odyssey launches into the heart of Asia Pacific. Discover the magic of Kyoto, Hong Kong, Sydney, Melbourne with style and sophistication.",
    rating: 4.9,
    tags: ["luxury", "short-getaway"],
  },
  {
    basePrice: 9619,
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
        "Set off on a elevation from Yokohama that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Sydney, Auckland, Hong Kong, Kyoto.",
      distance: "1246 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Yokohama to Sydney",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Sydney to Auckland",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Auckland to Hong Kong",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Hong Kong to Kyoto",
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
          description: "Exploring Sydney",
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
        name: "Samuel Henderson",
        role: "Group Booking Coordinator",
        languages: ["Hindi", "Tagalog", "Thai"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "azure.mirage.of.the.@velarivoyages.com",
          contactNumber: "+1-990-896-8838",
        },
      },
    ],
    title: "Azure Mirage of the Oriental Realms",
    description:
      "Set off on a elevation from Yokohama that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Sydney, Auckland, Hong Kong, Kyoto.",
    rating: 4.2,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 1444,
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
        "Your journey through the Asia Pacific begins in Yokohama, where elegance meets adventure. Explore the shores of Hong Kong, Singapore, Auckland, with curated excursions and luxurious onboard amenities.",
      distance: "1211 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Yokohama to Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Hong Kong to Singapore",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Singapore to Auckland",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Auckland to Yokohama",
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
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kenneth Cooper",
        role: "Group Booking Coordinator",
        languages: ["Hindi", "Tagalog", "Thai"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
        contact: {
          contactEmail: "tranquil.reunion.of.@velarivoyages.com",
          contactNumber: "+1-156-354-9995",
        },
      },
    ],
    title: "Tranquil Reunion of the Wind-Touched Wharf",
    description:
      "Your journey through the Asia Pacific begins in Yokohama, where elegance meets adventure. Explore the shores of Hong Kong, Singapore, Auckland, with curated excursions and luxurious onboard amenities.",
    rating: 4.4,
    tags: ["cruise-holiday", "cruise-excursion"],
  },
];
