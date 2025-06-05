import { Cruise } from "@/lib/interfaces/services/cruises";

export const glacierBayCruises: Cruise[] = [
  {
    basePrice: 1110,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
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
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
      ],
      description:
        "This extraordinary quest from Glacier Bay offers the ultimate Alaska exploration. Immerse yourself in the rich cultures and stunning landscapes of Ketchikan, Vancouver, Juneau and Sitka, creating memories that will last a lifetime.",
      distance: "1103 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Ketchikan to Vancouver",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Vancouver to Juneau",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Juneau to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Emily Hunter",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Russian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
        contact: {
          contactEmail: "unforgettable.enigma@velarivoyages.com",
          contactNumber: "+1-161-425-4111",
        },
      },
    ],
    title: "Unforgettable Enigma of the Snow-Crowned Peaks",
    description:
      "This extraordinary quest from Glacier Bay offers the ultimate Alaska exploration. Immerse yourself in the rich cultures and stunning landscapes of Ketchikan, Vancouver, Juneau and Sitka, creating memories that will last a lifetime.",
    rating: 4.2,
    tags: ["cruise-line"],
  },
  {
    basePrice: 3869,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
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
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
      ],
      description:
        "Set sail from Glacier Bay on this harmonic drift through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Seattle and Juneau and Sitka, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1421 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Seattle to Juneau",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Juneau to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Christine Carpenter",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Russian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "verdant.journey.of.t@velarivoyages.com",
          contactNumber: "+1-165-819-7073",
        },
      },
    ],
    title: "Verdant Journey of the Echoes of Ice",
    description:
      "Set sail from Glacier Bay on this harmonic drift through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Seattle and Juneau and Sitka, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 5.0,
    tags: ["luxury"],
  },
  {
    basePrice: 6887,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Embark from Glacier Bay and traverse the Alaska in style. Whether it’s the energy of Ketchikan or the calm of Victoria, each destination reveals a new side of paradise.",
      distance: "1442 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Ketchikan to Victoria",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
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
          description: "Exploring Victoria",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Scarlett Day",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Russian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "celestial.elevation.@velarivoyages.com",
          contactNumber: "+1-861-791-2670",
        },
      },
    ],
    title: "Celestial Elevation of the Snow-Crowned Peaks",
    description:
      "Embark from Glacier Bay and traverse the Alaska in style. Whether it’s the energy of Ketchikan or the calm of Victoria, each destination reveals a new side of paradise.",
    rating: 4.5,
    tags: ["fall-cruise", "wildlife"],
  },
  {
    basePrice: 2093,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
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
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
      ],
      description:
        "This hand-selected exquisite cruise offers a true taste of Alaska. Depart from Glacier Bay and explore ports like Juneau, Sitka, each telling a story through food, music, and tradition.",
      distance: "811 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Juneau",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Juneau to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Helen Ellis",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Russian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "hidden.labyrinth.of.@velarivoyages.com",
          contactNumber: "+1-250-331-6504",
        },
      },
    ],
    title: "Hidden Labyrinth of the Icy Passageways",
    description:
      "This hand-selected exquisite cruise offers a true taste of Alaska. Depart from Glacier Bay and explore ports like Juneau, Sitka, each telling a story through food, music, and tradition.",
    rating: 4.9,
    tags: ["cruise-experience", "fall-cruise"],
  },
  {
    basePrice: 7720,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
        "Cruise into cultural richness aboard this legendary voyage departing Glacier Bay. Savor local cuisine and uncover regional beauty from Seattle to Ketchikan.",
      distance: "562 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Seattle to Ketchikan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Ketchikan to Victoria",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Victoria to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Ketchikan",
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
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Ellie Nash",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Russian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "radiant.escape.of.th@velarivoyages.com",
          contactNumber: "+1-778-319-8944",
        },
      },
    ],
    title: "Radiant Escape of the The Last Frontier",
    description:
      "Cruise into cultural richness aboard this legendary voyage departing Glacier Bay. Savor local cuisine and uncover regional beauty from Seattle to Ketchikan.",
    rating: 4.9,
    tags: ["family-friendly", "luxury"],
  },
  {
    basePrice: 8032,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "This gilded oasis begins in Glacier Bay and ventures deep into the heart of Alaska. Wander through colorful markets, historic streets, and serene coastlines at Ketchikan, Juneau, Skagway.",
      distance: "533 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Ketchikan to Juneau",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Juneau to Skagway",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Skagway to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christine Hunter",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Russian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "aweinspiring.awakeni@velarivoyages.com",
          contactNumber: "+1-852-133-9439",
        },
      },
    ],
    title: "Awe-Inspiring Awakening of the Glacial Kingdom",
    description:
      "This gilded oasis begins in Glacier Bay and ventures deep into the heart of Alaska. Wander through colorful markets, historic streets, and serene coastlines at Ketchikan, Juneau, Skagway.",
    rating: 4.2,
    tags: ["cruise-holiday", "sightseeing"],
  },
  {
    basePrice: 6831,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
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
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
        "Let the winds of the Alaska carry you from Glacier Bay to the most stunning ports in the region. With destinations like Seattle, Skagway, Ketchikan, Juneau, this requiem redefines luxury travel.",
      distance: "996 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Seattle to Skagway",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Skagway to Ketchikan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Ketchikan to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Julie Sutton",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Russian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "tidewashed.pilgrimag@velarivoyages.com",
          contactNumber: "+1-784-595-4321",
        },
      },
    ],
    title: "Tide-Washed Pilgrimage of the Alpine Seascapes",
    description:
      "Let the winds of the Alaska carry you from Glacier Bay to the most stunning ports in the region. With destinations like Seattle, Skagway, Ketchikan, Juneau, this requiem redefines luxury travel.",
    rating: 4.3,
    tags: ["VIP"],
  },
  {
    basePrice: 3401,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Let the waves lead you from Glacier Bay on this enchanting labyrinth. Traverse the iconic waters of Alaska and discover the beauty of Vancouver, Juneau, Seattle.",
      distance: "1406 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Vancouver",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Vancouver to Juneau",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Juneau to Seattle",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Seattle to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
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
          description: "Exploring Juneau",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ashley Dunn",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Russian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "majestic.saga.of.the@velarivoyages.com",
          contactNumber: "+1-469-152-7359",
        },
      },
    ],
    title: "Majestic Saga of the Carved Ice Cathedrals",
    description:
      "Let the waves lead you from Glacier Bay on this enchanting labyrinth. Traverse the iconic waters of Alaska and discover the beauty of Vancouver, Juneau, Seattle.",
    rating: 4.6,
    tags: ["long-distance", "holiday-cruise"],
  },
  {
    basePrice: 6869,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
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
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
        "Discover the wonders of Alaska aboard this ornate cruise departing from Glacier Bay. Journey through crystal waters to explore the treasures of Ketchikan, Victoria, Sitka, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1061 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Ketchikan",
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
          description: "Exploring Glacier Bay",
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
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Ashley Holloway",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Russian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "harmonic.currents.of@velarivoyages.com",
          contactNumber: "+1-325-212-8035",
        },
      },
    ],
    title: "Harmonic Currents of the Wilderness Reaches",
    description:
      "Discover the wonders of Alaska aboard this ornate cruise departing from Glacier Bay. Journey through crystal waters to explore the treasures of Ketchikan, Victoria, Sitka, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.2,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 3488,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Depart from the iconic port of Glacier Bay and sail through the enchanting Alaska. Explore vibrant destinations like Ketchikan, Vancouver, each offering its own unique charm and local flair.",
      distance: "680 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Ketchikan to Vancouver",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Vancouver to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Layla Gibson",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Russian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "timeless.frontier.of@velarivoyages.com",
          contactNumber: "+1-302-692-6120",
        },
      },
    ],
    title: "Timeless Frontier of the Icy Passageways",
    description:
      "Depart from the iconic port of Glacier Bay and sail through the enchanting Alaska. Explore vibrant destinations like Ketchikan, Vancouver, each offering its own unique charm and local flair.",
    rating: 4.2,
    tags: ["anniversary-cruise"],
  },
];
