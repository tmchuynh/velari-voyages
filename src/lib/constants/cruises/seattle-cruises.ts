import { Cruise } from "@/lib/interfaces/services/cruises";

export const seattleCruises: Cruise[] = [
  {
    basePrice: 5881,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this charming frontier through Alaska, starting from the illustrious port of Seattle. From Skagway, Glacier Bay to Juneau, each destination offers its own story, culture, and breathtaking views.",
      distance: "1460 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Skagway",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Skagway to Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Juneau",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Juneau to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alan Murray",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "lavish.mirage.of.the@velarivoyages.com",
          contactNumber: "+1-875-343-2156",
        },
      },
    ],
    title: "Lavish Mirage of the Sound of Silence",
    description:
      "Experience the elegance of the seas on this charming frontier through Alaska, starting from the illustrious port of Seattle. From Skagway, Glacier Bay to Juneau, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.1,
    tags: ["fall-cruise", "seasonal"],
  },
  {
    basePrice: 6398,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "Unwind and explore on this currents through Alaska, departing from Seattle. With every stop—from Victoria to Juneau—you’ll collect memories that last a lifetime.",
      distance: "1129 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Victoria",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Aiden Mason",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/35.jpg",
        contact: {
          contactEmail: "velvet.serenade.of.t@velarivoyages.com",
          contactNumber: "+1-332-122-8913",
        },
      },
    ],
    title: "Velvet Serenade of the Rain-Crowned Harbor",
    description:
      "Unwind and explore on this currents through Alaska, departing from Seattle. With every stop—from Victoria to Juneau—you’ll collect memories that last a lifetime.",
    rating: 4.9,
    tags: ["long-distance"],
  },
  {
    basePrice: 7434,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Ketchikan",
      country: "United States",
      coordinates: {
        latitude: 55.3422,
        longitude: -131.6476,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Seattle. This voyage through the Alaska unveils stunning stops including Juneau, Victoria, Ketchikan, all with first-class service.",
      distance: "698 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Seattle to Juneau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Juneau to Victoria",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Victoria to Ketchikan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Wayne Fisher",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "moonlit.wanderlust.o@velarivoyages.com",
          contactNumber: "+1-430-597-8966",
        },
      },
    ],
    title: "Moonlit Wanderlust of the Emerald City",
    description:
      "Step into a world of elegance and exploration from Seattle. This voyage through the Alaska unveils stunning stops including Juneau, Victoria, Ketchikan, all with first-class service.",
    rating: 4.3,
    tags: ["adventure", "family-friendly"],
  },
  {
    basePrice: 8967,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
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
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Depart Seattle on a relaxing tranquility through the Alaska region. Highlights include the stunning coastlines of Skagway, Ketchikan, Glacier Bay, all while enjoying first-class amenities on board.",
      distance: "1110 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Seattle to Skagway",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Skagway to Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Ketchikan to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ralph West",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
        contact: {
          contactEmail: "harmonic.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-138-702-9994",
        },
      },
    ],
    title: "Harmonic Sojourn of the Rain-Crowned Harbor",
    description:
      "Depart Seattle on a relaxing tranquility through the Alaska region. Highlights include the stunning coastlines of Skagway, Ketchikan, Glacier Bay, all while enjoying first-class amenities on board.",
    rating: 4.8,
    tags: ["wellness", "cruise-adventure", "cruise-journey"],
  },
  {
    basePrice: 5728,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Embark from Seattle and traverse the Alaska in style. Whether it’s the energy of Juneau or the calm of Sitka, each destination reveals a new side of paradise.",
      distance: "1069 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Juneau",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Juneau to Sitka",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Sitka to Victoria",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Victoria to Skagway",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Skagway to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Philip Graham",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
        contact: {
          contactEmail: "immersive.solstice.o@velarivoyages.com",
          contactNumber: "+1-757-349-1115",
        },
      },
    ],
    title: "Immersive Solstice of the Sky-Reflected Stillness",
    description:
      "Embark from Seattle and traverse the Alaska in style. Whether it’s the energy of Juneau or the calm of Sitka, each destination reveals a new side of paradise.",
    rating: 4.0,
    tags: ["seasonal", "cruise-vacation"],
  },
  {
    basePrice: 9991,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "United States",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your awe-inspiring journey from Seattle. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Sitka, Vancouver, Juneau, Skagway.",
      distance: "824 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Seattle to Sitka",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Sitka to Vancouver",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Vancouver to Juneau",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Juneau to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thabo Baker",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "transcendent.solstic@velarivoyages.com",
          contactNumber: "+1-190-924-7215",
        },
      },
    ],
    title: "Transcendent Solstice of the Emerald City",
    description:
      "Let the spirit of exploration guide your awe-inspiring journey from Seattle. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Sitka, Vancouver, Juneau, Skagway.",
    rating: 4.7,
    tags: ["culinary"],
  },
  {
    basePrice: 6939,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Begin a captivating exploration through the Alaska, departing Seattle. With visits to Ketchikan, Victoria, Juneau, each day brings a new adventure and deeper connection to the region.",
      distance: "592 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Seattle to Ketchikan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Ketchikan to Victoria",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Victoria to Juneau",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Juneau to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Keith Carpenter",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "moonlit.tide.of.the.@velarivoyages.com",
          contactNumber: "+1-964-841-1311",
        },
      },
    ],
    title: "Moonlit Tide of the Mist and Mountains",
    description:
      "Begin a captivating exploration through the Alaska, departing Seattle. With visits to Ketchikan, Victoria, Juneau, each day brings a new adventure and deeper connection to the region.",
    rating: 4.6,
    tags: ["short-getaway", "holiday-cruise"],
  },
  {
    basePrice: 9742,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Leave stress behind with this curated exploration from Seattle. Sail across the best of Alaska and explore treasures like Sitka, Juneau, Skagway with comfort and style.",
      distance: "1031 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Seattle to Sitka",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Sitka to Juneau",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Juneau to Skagway",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Skagway to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Robert Chambers",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "epic.realm.of.the.th@velarivoyages.com",
          contactNumber: "+1-516-358-9901",
        },
      },
    ],
    title: "Epic Realm of the The Last Frontier",
    description:
      "Leave stress behind with this curated exploration from Seattle. Sail across the best of Alaska and explore treasures like Sitka, Juneau, Skagway with comfort and style.",
    rating: 4.8,
    tags: ["tropical"],
  },
  {
    basePrice: 8885,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "Depart Seattle on a relaxing passage through the Alaska region. Highlights include the stunning coastlines of Ketchikan, Juneau, all while enjoying first-class amenities on board.",
      distance: "1229 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Seattle to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Ketchikan to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Logan Sutton",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "dreamlike.escape.of.@velarivoyages.com",
          contactNumber: "+1-799-223-3980",
        },
      },
    ],
    title: "Dreamlike Escape of the Mist and Mountains",
    description:
      "Depart Seattle on a relaxing passage through the Alaska region. Highlights include the stunning coastlines of Ketchikan, Juneau, all while enjoying first-class amenities on board.",
    rating: 4.6,
    tags: ["luxury", "holiday-cruise"],
  },
  {
    basePrice: 3768,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Victoria",
      country: "Canada",
      coordinates: {
        latitude: 48.4284,
        longitude: -123.3656,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
      ],
      description:
        "From the lively departure port of Seattle, this curated lullaby showcases the finest of Alaska. With visits to Glacier Bay, Victoria, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1069 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Seattle to Glacier Bay",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Victoria",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Victoria",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Alan Maxwell",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        contact: {
          contactEmail: "aweinspiring.legacy.@velarivoyages.com",
          contactNumber: "+1-196-505-4841",
        },
      },
    ],
    title: "Awe-Inspiring Legacy of the Tundra Tides",
    description:
      "From the lively departure port of Seattle, this curated lullaby showcases the finest of Alaska. With visits to Glacier Bay, Victoria, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.3,
    tags: ["historical", "fall-cruise"],
  },
  {
    basePrice: 5574,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "United States",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
      ],
      description:
        "Let the winds of the Alaska carry you from Seattle to the most stunning ports in the region. With destinations like Vancouver, Ketchikan, Skagway, this reunion redefines luxury travel.",
      distance: "553 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Vancouver",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Vancouver to Ketchikan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Ketchikan to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Edward Watson",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "aweinspiring.reflect@velarivoyages.com",
          contactNumber: "+1-454-328-3764",
        },
      },
    ],
    title: "Awe-Inspiring Reflection of the Rain-Crowned Harbor",
    description:
      "Let the winds of the Alaska carry you from Seattle to the most stunning ports in the region. With destinations like Vancouver, Ketchikan, Skagway, this reunion redefines luxury travel.",
    rating: 4.1,
    tags: ["wellness", "cruise-line"],
  },
  {
    basePrice: 8918,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Ketchikan",
      country: "United States",
      coordinates: {
        latitude: 55.3422,
        longitude: -131.6476,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
      ],
      description:
        "From bustling Seattle to serene Alaska shores, this cruise invites you to relax, explore, and indulge. Stops at Victoria, Ketchikan deliver a balanced blend of culture and comfort.",
      distance: "1072 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Seattle to Victoria",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Victoria to Ketchikan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Alan Hayes",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "celestial.quest.of.t@velarivoyages.com",
          contactNumber: "+1-779-139-3436",
        },
      },
    ],
    title: "Celestial Quest of the Sky-Reflected Stillness",
    description:
      "From bustling Seattle to serene Alaska shores, this cruise invites you to relax, explore, and indulge. Stops at Victoria, Ketchikan deliver a balanced blend of culture and comfort.",
    rating: 4.5,
    tags: ["culinary", "fall-cruise", "nature"],
  },
  {
    basePrice: 8431,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Start in the vibrant city of Seattle and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Skagway, Glacier Bay, Sitka.",
      distance: "800 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Seattle to Skagway",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Skagway to Glacier Bay",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Sitka",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Sitka to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Justin Stewart",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "serene.requiem.of.th@velarivoyages.com",
          contactNumber: "+1-711-760-8348",
        },
      },
    ],
    title: "Serene Requiem of the Mist and Mountains",
    description:
      "Start in the vibrant city of Seattle and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Skagway, Glacier Bay, Sitka.",
    rating: 4.6,
    tags: ["cruise"],
  },
  {
    basePrice: 6910,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Escape into the calm waters of Alaska with this luminous journey from Seattle. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Sitka, Vancouver.",
      distance: "953 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Sitka",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Sitka to Vancouver",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Vancouver to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ryan Crawford",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/96.jpg",
        contact: {
          contactEmail: "gilded.exploration.o@velarivoyages.com",
          contactNumber: "+1-887-821-1324",
        },
      },
    ],
    title: "Gilded Exploration of the Sound of Silence",
    description:
      "Escape into the calm waters of Alaska with this luminous journey from Seattle. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Sitka, Vancouver.",
    rating: 4.2,
    tags: ["wellness", "cruise-vacation"],
  },
  {
    basePrice: 2427,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Seattle. Discover the historical and natural richness of Alaska as you cruise to spectacular destinations like Victoria, Vancouver.",
      distance: "662 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Seattle to Victoria",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Victoria to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Ralph Porter",
        role: "Group Booking Coordinator",
        languages: ["English", "Italian", "Arabic", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "majestic.reunion.of.@velarivoyages.com",
          contactNumber: "+1-455-326-4362",
        },
      },
    ],
    title: "Majestic Reunion of the Misty Fjords",
    description:
      "A voyage of contrasts awaits from Seattle. Discover the historical and natural richness of Alaska as you cruise to spectacular destinations like Victoria, Vancouver.",
    rating: 4.9,
    tags: ["romantic", "weekend-cruise"],
  },
  {
    basePrice: 8686,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Ketchikan",
      country: "United States",
      coordinates: {
        latitude: 55.3422,
        longitude: -131.6476,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
      ],
      description:
        "This extraordinary whisper from Seattle offers the ultimate Alaska exploration. Immerse yourself in the rich cultures and stunning landscapes of Glacier Bay, Victoria, Sitka and Ketchikan, creating memories that will last a lifetime.",
      distance: "1212 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Seattle to Glacier Bay",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Victoria",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Victoria to Sitka",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Sitka to Ketchikan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Amelia Morgan",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "horizonkissed.reveri@velarivoyages.com",
          contactNumber: "+1-624-879-4498",
        },
      },
    ],
    title: "Horizon-Kissed Reverie of the Forest by the Sea",
    description:
      "This extraordinary whisper from Seattle offers the ultimate Alaska exploration. Immerse yourself in the rich cultures and stunning landscapes of Glacier Bay, Victoria, Sitka and Ketchikan, creating memories that will last a lifetime.",
    rating: 4.4,
    tags: ["fall-cruise", "cultural", "cruise-excursion"],
  },
  {
    basePrice: 5562,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "United States",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
      ],
      description:
        "Let the waves lead you from Seattle on this enchanting odyssey. Traverse the iconic waters of Alaska and discover the beauty of Sitka, Glacier Bay, Skagway.",
      distance: "1358 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Sitka",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Sitka to Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ellie Wallace",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "floating.pilgrimage.@velarivoyages.com",
          contactNumber: "+1-351-833-8786",
        },
      },
    ],
    title: "Floating Pilgrimage of the Forest by the Sea",
    description:
      "Let the waves lead you from Seattle on this enchanting odyssey. Traverse the iconic waters of Alaska and discover the beauty of Sitka, Glacier Bay, Skagway.",
    rating: 4.6,
    tags: ["historical", "general"],
  },
  {
    basePrice: 4944,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Victoria",
      country: "Canada",
      coordinates: {
        latitude: 48.4284,
        longitude: -123.3656,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
      ],
      description:
        "Experience coastal elegance on this passage from Seattle, where the journey through Alaska includes stops in Ketchikan, Juneau, Victoria, each more enchanting than the last.",
      distance: "1093 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Ketchikan to Juneau",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Juneau to Victoria",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Victoria",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bella Maxwell",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "starlit.serenade.of.@velarivoyages.com",
          contactNumber: "+1-413-787-4466",
        },
      },
    ],
    title: "Starlit Serenade of the Sky-Reflected Stillness",
    description:
      "Experience coastal elegance on this passage from Seattle, where the journey through Alaska includes stops in Ketchikan, Juneau, Victoria, each more enchanting than the last.",
    rating: 4.8,
    tags: ["cruise-line", "sightseeing", "cruise"],
  },
  {
    basePrice: 6309,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Victoria",
      country: "Canada",
      coordinates: {
        latitude: 48.4284,
        longitude: -123.3656,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this verdant retreat departing Seattle. Savor local cuisine and uncover regional beauty from Glacier Bay to Juneau.",
      distance: "1015 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Glacier Bay",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Juneau",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Juneau to Victoria",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Victoria",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Harper Dunn",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "infinite.sanctum.of.@velarivoyages.com",
          contactNumber: "+1-801-306-3200",
        },
      },
    ],
    title: "Infinite Sanctum of the Forest by the Sea",
    description:
      "Cruise into cultural richness aboard this verdant retreat departing Seattle. Savor local cuisine and uncover regional beauty from Glacier Bay to Juneau.",
    rating: 4.1,
    tags: ["family-friendly"],
  },
  {
    basePrice: 3045,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "United States",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
      ],
      description:
        "Start in the vibrant city of Seattle and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Ketchikan, Victoria, Sitka.",
      distance: "1111 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Seattle to Ketchikan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Ketchikan to Victoria",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Victoria to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Lisa Marshall",
        role: "Sales Consultant",
        languages: ["English", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "heavenly.reverie.of.@velarivoyages.com",
          contactNumber: "+1-381-147-9195",
        },
      },
    ],
    title: "Heavenly Reverie of the Emerald City",
    description:
      "Start in the vibrant city of Seattle and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Ketchikan, Victoria, Sitka.",
    rating: 4.4,
    tags: ["anniversary-cruise"],
  },
];
