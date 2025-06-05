import { Cruise } from "@/lib/interfaces/services/cruises";

export const sitkaCruises: Cruise[] = [
  {
    basePrice: 6704,
    departureLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "United States",
          region: "Alaska",
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
        {
          city: "Vancouver",
          country: "Canada",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
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
          region: "Alaska",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
      ],
      description:
        "Leave stress behind with this curated mythos from Sitka. Sail across the best of Alaska and explore treasures like Ketchikan, Vancouver, Glacier Bay with comfort and style.",
      distance: "951 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sitka to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Ketchikan to Vancouver",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Vancouver to Glacier Bay",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carol Hawkins",
        role: "Cruise Specialist",
        languages: ["English", "French", "Japanese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "majestic.embrace.of.@velarivoyages.com",
          contactNumber: "+1-197-214-7970",
        },
      },
    ],
    title: "Majestic Embrace of the Carved Ice Cathedrals",
    description:
      "Leave stress behind with this curated mythos from Sitka. Sail across the best of Alaska and explore treasures like Ketchikan, Vancouver, Glacier Bay with comfort and style.",
    rating: 4.5,
    tags: ["cruise"],
  },
  {
    basePrice: 3730,
    departureLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
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
          region: "Alaska",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
      ],
      description:
        "Let the winds of the Alaska carry you from Sitka to the most stunning ports in the region. With destinations like Seattle, Ketchikan, Skagway, Vancouver, this requiem redefines luxury travel.",
      distance: "656 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Sitka to Seattle",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Seattle to Ketchikan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Ketchikan to Skagway",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Skagway to Vancouver",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Vancouver to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Chloe Nash",
        role: "Cruise Specialist",
        languages: ["English", "French", "Japanese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
        contact: {
          contactEmail: "aweinspiring.enigma.@velarivoyages.com",
          contactNumber: "+1-279-999-9607",
        },
      },
    ],
    title: "Awe-Inspiring Enigma of the Tundra Tides",
    description:
      "Let the winds of the Alaska carry you from Sitka to the most stunning ports in the region. With destinations like Seattle, Ketchikan, Skagway, Vancouver, this requiem redefines luxury travel.",
    rating: 4.6,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 9799,
    departureLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
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
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
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
      ],
      description:
        "Embark on an unforgettable odyssey from the vibrant port of Sitka, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Skagway, Vancouver, Juneau, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1155 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sitka to Skagway",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Skagway to Vancouver",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Vancouver to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zoe Mitchell",
        role: "Cruise Specialist",
        languages: ["English", "French", "Japanese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "panoramic.panorama.o@velarivoyages.com",
          contactNumber: "+1-107-235-4930",
        },
      },
    ],
    title: "Panoramic Panorama of the Carved Ice Cathedrals",
    description:
      "Embark on an unforgettable odyssey from the vibrant port of Sitka, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Skagway, Vancouver, Juneau, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.5,
    tags: ["cruise-experience", "seasonal", "repositioning"],
  },
  {
    basePrice: 3921,
    departureLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "United States",
          region: "Alaska",
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
          city: "Sitka",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your tranquil journey from Sitka. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Glacier Bay, Vancouver, Seattle.",
      distance: "768 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Sitka to Glacier Bay",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Vancouver",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Vancouver to Seattle",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Seattle to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
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
          description: "Exploring Vancouver",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Avery Jennings",
        role: "Cruise Specialist",
        languages: ["English", "French", "Japanese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "mesmerizing.serenade@velarivoyages.com",
          contactNumber: "+1-353-100-1244",
        },
      },
    ],
    title: "Mesmerizing Serenade of the Snow-Crowned Peaks",
    description:
      "Let the spirit of exploration guide your tranquil journey from Sitka. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Glacier Bay, Vancouver, Seattle.",
    rating: 5.0,
    tags: ["holiday-cruise", "cruise"],
  },
  {
    basePrice: 5393,
    departureLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
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
          city: "Sitka",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this gilded odyssey departing Sitka. Savor local cuisine and uncover regional beauty from Seattle to Skagway.",
      distance: "1285 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Sitka to Seattle",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Seattle to Skagway",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Skagway to Vancouver",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Vancouver to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sandra Crawford",
        role: "Cruise Specialist",
        languages: ["English", "French", "Japanese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "whispering.pilgrimag@velarivoyages.com",
          contactNumber: "+1-295-768-3942",
        },
      },
    ],
    title: "Whispering Pilgrimage of the Wilderness Reaches",
    description:
      "Cruise into cultural richness aboard this gilded odyssey departing Sitka. Savor local cuisine and uncover regional beauty from Seattle to Skagway.",
    rating: 4.7,
    tags: ["romantic"],
  },
  {
    basePrice: 9733,
    departureLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "United States",
          region: "Alaska",
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
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Sitka",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
      ],
      description:
        "Set sail from historic Sitka for a modern escape into the Alaska. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Victoria, Glacier Bay, Seattle.",
      distance: "598 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sitka to Victoria",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Seattle to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Victoria",
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
          description: "Exploring Seattle",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joan Henderson",
        role: "Cruise Specialist",
        languages: ["English", "French", "Japanese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "crystalline.pulse.of@velarivoyages.com",
          contactNumber: "+1-752-241-8612",
        },
      },
    ],
    title: "Crystalline Pulse of the The Last Frontier",
    description:
      "Set sail from historic Sitka for a modern escape into the Alaska. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Victoria, Glacier Bay, Seattle.",
    rating: 4.4,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 1231,
    departureLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "United States",
          region: "Alaska",
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
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
        {
          city: "Sitka",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
      ],
      description:
        "Begin a captivating saga through the Alaska, departing Sitka. With visits to Glacier Bay, Juneau, Ketchikan, Skagway, each day brings a new adventure and deeper connection to the region.",
      distance: "803 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Sitka to Glacier Bay",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Juneau",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Juneau to Ketchikan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Ketchikan to Skagway",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Skagway to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
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
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Katherine Day",
        role: "Cruise Specialist",
        languages: ["English", "French", "Japanese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "mythic.legacy.of.the@velarivoyages.com",
          contactNumber: "+1-237-237-1075",
        },
      },
    ],
    title: "Mythic Legacy of the Northern Lights",
    description:
      "Begin a captivating saga through the Alaska, departing Sitka. With visits to Glacier Bay, Juneau, Ketchikan, Skagway, each day brings a new adventure and deeper connection to the region.",
    rating: 4.5,
    tags: ["expedition"],
  },
  {
    basePrice: 4554,
    departureLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
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
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "United States",
          region: "Alaska",
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
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
      ],
      description:
        "Depart from Sitka on this thoughtfully designed exploration across the Alaska. Savor coastal charm, cultural treasures, and ocean views with stops at Vancouver, Skagway, Ketchikan, Victoria.",
      distance: "787 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sitka to Vancouver",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Vancouver to Skagway",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Skagway to Ketchikan",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Ketchikan to Victoria",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Victoria",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Donna Lawson",
        role: "Cruise Specialist",
        languages: ["English", "French", "Japanese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "infinite.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-204-651-8559",
        },
      },
    ],
    title: "Infinite Odyssey of the Wilderness Reaches",
    description:
      "Depart from Sitka on this thoughtfully designed exploration across the Alaska. Savor coastal charm, cultural treasures, and ocean views with stops at Vancouver, Skagway, Ketchikan, Victoria.",
    rating: 4.7,
    tags: ["wildlife", "nature", "VIP"],
  },
  {
    basePrice: 4341,
    departureLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
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
    hasPopularDestination: true,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
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
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this starlit serenade beginning in Sitka. Visit breathtaking Alaska locales such as Seattle, Ketchikan on this unforgettable itinerary.",
      distance: "1054 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sitka to Seattle",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Seattle to Ketchikan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Layla Hawkins",
        role: "Cruise Specialist",
        languages: ["English", "French", "Japanese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "celestial.realm.of.t@velarivoyages.com",
          contactNumber: "+1-594-272-8974",
        },
      },
    ],
    title: "Celestial Realm of the Misty Fjords",
    description:
      "Enjoy seamless luxury on this starlit serenade beginning in Sitka. Visit breathtaking Alaska locales such as Seattle, Ketchikan on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["romantic", "short-getaway", "repositioning"],
  },
  {
    basePrice: 1403,
    departureLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Sitka",
          country: "United States",
          region: "Alaska",
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
          region: "Alaska",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Sitka. Discover the historical and natural richness of Alaska as you cruise to spectacular destinations like Victoria, Glacier Bay.",
      distance: "925 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Sitka to Victoria",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Katherine Ellis",
        role: "Cruise Specialist",
        languages: ["English", "French", "Japanese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "sublime.mythos.of.th@velarivoyages.com",
          contactNumber: "+1-133-968-6366",
        },
      },
    ],
    title: "Sublime Mythos of the The Last Frontier",
    description:
      "A voyage of contrasts awaits from Sitka. Discover the historical and natural richness of Alaska as you cruise to spectacular destinations like Victoria, Glacier Bay.",
    rating: 4.8,
    tags: ["weekend-cruise", "adventure", "tropical"],
  },
];
