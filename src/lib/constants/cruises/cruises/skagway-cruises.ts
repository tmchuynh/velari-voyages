import { Cruise } from "@/lib/interfaces/services/cruises";

export const skagwayCruises: Cruise[] = [
  {
    basePrice: 7678,
    departureLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
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
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Seattle",
          country: "United States",
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
      ],
      description:
        "Step into a world of elegance and exploration from Skagway. This panorama through the Alaska unveils stunning stops including Seattle, Glacier Bay, all with first-class service.",
      distance: "1367 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Skagway to Seattle",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Seattle to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Zola Nash",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Russian", "Arabic"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "infinite.quest.of.th@velarivoyages.com",
          contactNumber: "+1-584-977-1825",
        },
      },
    ],
    title: "Infinite Quest of the Tundra Tides",
    description:
      "Step into a world of elegance and exploration from Skagway. This panorama through the Alaska unveils stunning stops including Seattle, Glacier Bay, all with first-class service.",
    rating: 4.4,
    tags: ["cruise-journey"],
  },
  {
    basePrice: 2790,
    departureLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
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
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
      ],
      description:
        "Unwind and explore on this saga through Alaska, departing from Skagway. With every stop—from Sitka to Seattle—you’ll collect memories that last a lifetime.",
      distance: "1103 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Skagway to Sitka",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Sitka to Vancouver",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Vancouver to Seattle",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Seattle to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aaliyah Dixon",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Russian", "Arabic"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "hidden.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-842-130-5206",
        },
      },
    ],
    title: "Hidden Sojourn of the Alpine Seascapes",
    description:
      "Unwind and explore on this saga through Alaska, departing from Skagway. With every stop—from Sitka to Seattle—you’ll collect memories that last a lifetime.",
    rating: 4.6,
    tags: ["repositioning"],
  },
  {
    basePrice: 3924,
    departureLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
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
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
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
        "Set sail from historic Skagway for a modern escape into the Alaska. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Victoria, Ketchikan.",
      distance: "1183 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Skagway to Victoria",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Victoria to Ketchikan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Allison Reeves",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Russian", "Arabic"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "starlit.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-413-977-1772",
        },
      },
    ],
    title: "Starlit Horizon of the Carved Ice Cathedrals",
    description:
      "Set sail from historic Skagway for a modern escape into the Alaska. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Victoria, Ketchikan.",
    rating: 4.2,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 2312,
    departureLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
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
          city: "Vancouver",
          country: "Canada",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
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
          city: "Skagway",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
      ],
      description:
        "This inspiring panorama departs from Skagway, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Glacier Bay, Vancouver, Sitka.",
      distance: "530 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Skagway to Glacier Bay",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Vancouver",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Vancouver to Sitka",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Sitka to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
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
          description: "Exploring Vancouver",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Allison Baker",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Russian", "Arabic"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "secluded.whisper.of.@velarivoyages.com",
          contactNumber: "+1-485-842-9857",
        },
      },
    ],
    title: "Secluded Whisper of the Frontier Silence",
    description:
      "This inspiring panorama departs from Skagway, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Glacier Bay, Vancouver, Sitka.",
    rating: 4.4,
    tags: ["sightseeing", "VIP"],
  },
  {
    basePrice: 2402,
    departureLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
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
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
      ],
      description:
        "Let the winds of the Alaska carry you from Skagway to the most stunning ports in the region. With destinations like Glacier Bay, Victoria, Ketchikan, Juneau, this elevation redefines luxury travel.",
      distance: "1359 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Skagway to Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Victoria",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Victoria to Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Ketchikan to Juneau",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Juneau to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Elena Carpenter",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Russian", "Arabic"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "extraordinary.realm.@velarivoyages.com",
          contactNumber: "+1-201-844-8975",
        },
      },
    ],
    title: "Extraordinary Realm of the Northern Lights",
    description:
      "Let the winds of the Alaska carry you from Skagway to the most stunning ports in the region. With destinations like Glacier Bay, Victoria, Ketchikan, Juneau, this elevation redefines luxury travel.",
    rating: 4.4,
    tags: ["weekend-cruise", "expedition", "long-distance"],
  },
  {
    basePrice: 8712,
    departureLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
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
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
      ],
      description:
        "Unwind and explore on this infinite through Alaska, departing from Skagway. With every stop—from Vancouver to Juneau—you’ll collect memories that last a lifetime.",
      distance: "637 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Skagway to Vancouver",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Vancouver to Victoria",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Victoria to Sitka",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Sitka to Juneau",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Juneau to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ellie Reed",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Russian", "Arabic"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "horizonkissed.labyri@velarivoyages.com",
          contactNumber: "+1-918-167-4034",
        },
      },
    ],
    title: "Horizon-Kissed Labyrinth of the Alpine Seascapes",
    description:
      "Unwind and explore on this infinite through Alaska, departing from Skagway. With every stop—from Vancouver to Juneau—you’ll collect memories that last a lifetime.",
    rating: 4.4,
    tags: ["anniversary-cruise", "adventure"],
  },
  {
    basePrice: 6810,
    departureLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
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
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
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
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
        "From bustling Skagway to serene Alaska shores, this cruise invites you to relax, explore, and indulge. Stops at Victoria, Ketchikan, Juneau, Vancouver deliver a balanced blend of culture and comfort.",
      distance: "799 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Skagway to Victoria",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Victoria to Ketchikan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Ketchikan to Juneau",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Juneau to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Leah Montgomery",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Russian", "Arabic"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
        contact: {
          contactEmail: "midnight.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-219-159-9036",
        },
      },
    ],
    title: "Midnight Eclipse of the Tundra Tides",
    description:
      "From bustling Skagway to serene Alaska shores, this cruise invites you to relax, explore, and indulge. Stops at Victoria, Ketchikan, Juneau, Vancouver deliver a balanced blend of culture and comfort.",
    rating: 4.5,
    tags: ["nature", "cruise-holiday", "family-friendly"],
  },
  {
    basePrice: 4029,
    departureLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
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
    hasPopularDestination: false,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Seattle",
          country: "United States",
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
      ],
      description:
        "Escape into the calm waters of Alaska with this majestic journey from Skagway. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Seattle, Vancouver, Victoria, Glacier Bay.",
      distance: "1487 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Skagway to Seattle",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Seattle to Vancouver",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Vancouver to Victoria",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Betty Sutton",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Russian", "Arabic"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "velvet.solstice.of.t@velarivoyages.com",
          contactNumber: "+1-121-240-1395",
        },
      },
    ],
    title: "Velvet Solstice of the Wilderness Reaches",
    description:
      "Escape into the calm waters of Alaska with this majestic journey from Skagway. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Seattle, Vancouver, Victoria, Glacier Bay.",
    rating: 5.0,
    tags: ["cruise-ship", "culinary"],
  },
  {
    basePrice: 7070,
    departureLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
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
        "Leave ordinary behind as you sail from Skagway across the captivating Alaska. Discover the distinctive personality of each destination, from Ketchikan, Glacier Bay, Sitka.",
      distance: "703 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Skagway to Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Ketchikan to Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lily Keller",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Russian", "Arabic"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "floating.sanctum.of.@velarivoyages.com",
          contactNumber: "+1-696-308-6860",
        },
      },
    ],
    title: "Floating Sanctum of the The Last Frontier",
    description:
      "Leave ordinary behind as you sail from Skagway across the captivating Alaska. Discover the distinctive personality of each destination, from Ketchikan, Glacier Bay, Sitka.",
    rating: 4.0,
    tags: ["historical"],
  },
  {
    basePrice: 1539,
    departureLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Seattle",
          country: "United States",
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
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
      ],
      description:
        "Set course from Skagway for an inspiring sublime journey across Alaska. Whether exploring ancient ruins in Seattle or soaking up coastal views in Glacier Bay, every day offers a perfect mix of discovery and relaxation.",
      distance: "1463 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Skagway to Seattle",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Seattle to Glacier Bay",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Sitka",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Sitka to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Sitka",
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
        name: "Brooklyn Chambers",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Russian", "Arabic"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "luxurious.pilgrimage@velarivoyages.com",
          contactNumber: "+1-236-381-9059",
        },
      },
    ],
    title: "Luxurious Pilgrimage of the Misty Fjords",
    description:
      "Set course from Skagway for an inspiring sublime journey across Alaska. Whether exploring ancient ruins in Seattle or soaking up coastal views in Glacier Bay, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.4,
    tags: ["general", "romantic"],
  },
];
