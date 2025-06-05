import { Cruise } from "@/lib/interfaces/services/cruises";

export const capeTownCruises: Cruise[] = [
  {
    basePrice: 9469,
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    arrivalLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
      ],
      description:
        "Embark on an unforgettable saga from the vibrant port of Cape Town, where you'll discover hidden gems and iconic landmarks across the Africa region. With stops at , this journey combines cultural immersion with breathtaking scenery.",
      distance: "500 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Cape Town to Cape Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Cape Town",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Cape Town",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Naomi Fisher",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Fulah", "Southern Sotho", "Hausa"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "floating.quest.of.th@velarivoyages.com",
          contactNumber: "+1-272-948-3421",
        },
      },
    ],
    title: "Floating Quest of the Wild Horizon",
    description:
      "Embark on an unforgettable saga from the vibrant port of Cape Town, where you'll discover hidden gems and iconic landmarks across the Africa region. With stops at , this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.6,
    tags: ["cruise-adventure", "fall-cruise"],
  },
  {
    basePrice: 2835,
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    arrivalLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
      ],
      description:
        "This extraordinary elevation from Cape Town offers the ultimate Africa exploration. Immerse yourself in the rich cultures and stunning landscapes of  and , creating memories that will last a lifetime.",
      distance: "773 nautical miles",
      totalDuration: "2 days",
      timeAtSea: [],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Cape Town",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Hannah Hamilton",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Fulah", "Southern Sotho", "Hausa"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
        contact: {
          contactEmail: "alluring.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-387-151-9389",
        },
      },
    ],
    title: "Alluring Eclipse of the Cape of Wonders",
    description:
      "This extraordinary elevation from Cape Town offers the ultimate Africa exploration. Immerse yourself in the rich cultures and stunning landscapes of  and , creating memories that will last a lifetime.",
    rating: 4.1,
    tags: ["exclusive", "wellness", "glacier-cruise"],
  },
  {
    basePrice: 9468,
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    arrivalLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this harmonic expedition through Africa, starting from the illustrious port of Cape Town. From  to , each destination offers its own story, culture, and breathtaking views.",
      distance: "891 nautical miles",
      totalDuration: "2 days",
      timeAtSea: [],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Cape Town",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Brenda Chambers",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Fulah", "Southern Sotho", "Hausa"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "captivating.reverie.@velarivoyages.com",
          contactNumber: "+1-392-675-6711",
        },
      },
    ],
    title: "Captivating Reverie of the Ocean’s Edge Citadel",
    description:
      "Experience the elegance of the seas on this harmonic expedition through Africa, starting from the illustrious port of Cape Town. From  to , each destination offers its own story, culture, and breathtaking views.",
    rating: 4.2,
    tags: ["tropical", "general", "holiday-cruise"],
  },
  {
    basePrice: 5910,
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    arrivalLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
      ],
      description:
        "Start in the vibrant city of Cape Town and venture into the iconic Africa. Discover authentic local cultures, cuisine, and coastal wonders in .",
      distance: "1297 nautical miles",
      totalDuration: "1 days",
      timeAtSea: [],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cape Town",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Patricia Wells",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Fulah", "Southern Sotho", "Hausa"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "tidewashed.mystique.@velarivoyages.com",
          contactNumber: "+1-387-816-7659",
        },
      },
    ],
    title: "Tide-Washed Mystique of the Cape of Wonders",
    description:
      "Start in the vibrant city of Cape Town and venture into the iconic Africa. Discover authentic local cultures, cuisine, and coastal wonders in .",
    rating: 4.2,
    tags: ["historical"],
  },
  {
    basePrice: 4336,
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    arrivalLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
      ],
      description:
        "Launch into adventure from Cape Town and sail deep into the heart of the Africa. With ports of call like , expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1303 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Cape Town to Cape Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cape Town",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Cape Town",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Christine Russell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Fulah", "Southern Sotho", "Hausa"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        contact: {
          contactEmail: "luminous.mystique.of@velarivoyages.com",
          contactNumber: "+1-523-724-4200",
        },
      },
    ],
    title: "Luminous Mystique of the Cradle of Life",
    description:
      "Launch into adventure from Cape Town and sail deep into the heart of the Africa. With ports of call like , expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.0,
    tags: ["glacier-cruise"],
  },
  {
    basePrice: 2005,
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    arrivalLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
      ],
      description:
        "Sail into splendor from Cape Town on a lavish voyage through Africa. Let each stop—from undefined to undefined—reveal the unique flavors and colors of the region.",
      distance: "1130 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Cape Town to Cape Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cape Town",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cape Town",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Susan Graves",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Fulah", "Southern Sotho", "Hausa"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "moonlit.currents.of.@velarivoyages.com",
          contactNumber: "+1-226-613-1126",
        },
      },
    ],
    title: "Moonlit Currents of the Tabletop Treasure",
    description:
      "Sail into splendor from Cape Town on a lavish voyage through Africa. Let each stop—from undefined to undefined—reveal the unique flavors and colors of the region.",
    rating: 4.1,
    tags: ["historical"],
  },
  {
    basePrice: 2921,
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    arrivalLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Cape Town on this infinite journey across Africa. Uncover the beauty and history of  with curated excursions, world-class cuisine, and exceptional service.",
      distance: "803 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Cape Town to Cape Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Cape Town",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cape Town",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Michelle Stewart",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Fulah", "Southern Sotho", "Hausa"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "oceanic.awakening.of@velarivoyages.com",
          contactNumber: "+1-333-111-3783",
        },
      },
    ],
    title: "Oceanic Awakening of the Where Currents Converge",
    description:
      "Sail away from the charming harbor of Cape Town on this infinite journey across Africa. Uncover the beauty and history of  with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.8,
    tags: ["tropical", "wildlife", "general"],
  },
  {
    basePrice: 9419,
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    arrivalLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
      ],
      description:
        "Depart Cape Town on a relaxing awakening through the Africa region. Highlights include the stunning coastlines of , all while enjoying first-class amenities on board.",
      distance: "634 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Cape Town to Cape Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cape Town",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cape Town",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Alexa Hayes",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Fulah", "Southern Sotho", "Hausa"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "forbidden.odyssey.of@velarivoyages.com",
          contactNumber: "+1-699-923-3470",
        },
      },
    ],
    title: "Forbidden Odyssey of the Mountain-Guarded Mystique",
    description:
      "Depart Cape Town on a relaxing awakening through the Africa region. Highlights include the stunning coastlines of , all while enjoying first-class amenities on board.",
    rating: 4.4,
    tags: ["anniversary-cruise", "fall-cruise"],
  },
  {
    basePrice: 1414,
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    arrivalLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Cape Town on this charming journey across Africa. Uncover the beauty and history of  with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1062 nautical miles",
      totalDuration: "3 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Cape Town to Cape Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cape Town",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Cape Town",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Alice Hudson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Fulah", "Southern Sotho", "Hausa"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "forbidden.passage.of@velarivoyages.com",
          contactNumber: "+1-831-249-6111",
        },
      },
    ],
    title: "Forbidden Passage of the Cradle of Life",
    description:
      "Sail away from the charming harbor of Cape Town on this charming journey across Africa. Uncover the beauty and history of  with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.4,
    tags: ["wellness", "fall-cruise"],
  },
  {
    basePrice: 6194,
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    arrivalLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Africa",
      coordinates: {
        latitude: -33.918861,
        longitude: 18.4233,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Africa",
          coordinates: {
            latitude: -33.918861,
            longitude: 18.4233,
          },
        },
      ],
      description:
        "This hand-selected hidden cruise offers a true taste of Africa. Depart from Cape Town and explore ports like , each telling a story through food, music, and tradition.",
      distance: "1239 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Cape Town to Cape Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cape Town",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Cape Town",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carol Warren",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Fulah", "Southern Sotho", "Hausa"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "infinite.excursion.o@velarivoyages.com",
          contactNumber: "+1-620-661-4705",
        },
      },
    ],
    title: "Infinite Excursion of the Tabletop Treasure",
    description:
      "This hand-selected hidden cruise offers a true taste of Africa. Depart from Cape Town and explore ports like , each telling a story through food, music, and tradition.",
    rating: 4.4,
    tags: ["wellness", "cultural", "exclusive"],
  },
];
