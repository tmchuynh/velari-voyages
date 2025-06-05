import { Cruise } from "@/lib/interfaces/services/cruises";

export const capeTownCruises: Cruise[] = [
  {
    basePrice: 1140,
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
    category: "mainstream",
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
        "Unwind and explore on this reflection through Africa, departing from Cape Town. With every stop—from undefined to —you’ll collect memories that last a lifetime.",
      distance: "1120 nautical miles",
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
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Blake Collins",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic", "Southern Sotho", "Zulu", "Amharic"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/61.jpg",
        contact: {
          contactEmail: "dreamlike.haven.of.t@velarivoyages.com",
          contactNumber: "+1-718-513-7586",
        },
      },
    ],
    title: "Dreamlike Haven of the Mountain-Guarded Mystique",
    description:
      "Unwind and explore on this reflection through Africa, departing from Cape Town. With every stop—from undefined to —you’ll collect memories that last a lifetime.",
    rating: 4.4,
    tags: ["fall-cruise", "anniversary-cruise"],
  },
  {
    basePrice: 6561,
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
    category: "premium",
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
        "Join us in Cape Town for a labyrinth of a lifetime. Sail across the serene waters of Africa, stopping at ports like  where timeless traditions meet modern luxuries.",
      distance: "1199 nautical miles",
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
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Brandon Payne",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic", "Southern Sotho", "Zulu", "Amharic"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "refined.sanctuary.of@velarivoyages.com",
          contactNumber: "+1-516-553-7881",
        },
      },
    ],
    title: "Refined Sanctuary of the Baobab Bay",
    description:
      "Join us in Cape Town for a labyrinth of a lifetime. Sail across the serene waters of Africa, stopping at ports like  where timeless traditions meet modern luxuries.",
    rating: 4.2,
    tags: ["themed-cruise", "holiday-cruise", "tropical"],
  },
  {
    basePrice: 8877,
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
    category: "mainstream",
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
        "Set sail from historic Cape Town for a modern escape into the Africa. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in .",
      distance: "692 nautical miles",
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
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Diego Jennings",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic", "Southern Sotho", "Zulu", "Amharic"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/51.jpg",
        contact: {
          contactEmail: "idyllic.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-292-653-4832",
        },
      },
    ],
    title: "Idyllic Odyssey of the Safari-Coastal Merges",
    description:
      "Set sail from historic Cape Town for a modern escape into the Africa. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in .",
    rating: 4.8,
    tags: ["luxury"],
  },
  {
    basePrice: 7510,
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
    category: "luxury",
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
        "Let the spirit of exploration guide your riveting journey from Cape Town. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like .",
      distance: "1341 nautical miles",
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
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Kenneth Jennings",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic", "Southern Sotho", "Zulu", "Amharic"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/62.jpg",
        contact: {
          contactEmail: "dreamlike.quest.of.t@velarivoyages.com",
          contactNumber: "+1-722-817-8132",
        },
      },
    ],
    title: "Dreamlike Quest of the Cape of Wonders",
    description:
      "Let the spirit of exploration guide your riveting journey from Cape Town. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like .",
    rating: 4.6,
    tags: ["VIP", "general"],
  },
  {
    basePrice: 7782,
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
    category: "luxury",
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
        "Your journey through the Africa begins in Cape Town, where elegance meets adventure. Explore the shores of , with curated excursions and luxurious onboard amenities.",
      distance: "1026 nautical miles",
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
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Patrick Watson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic", "Southern Sotho", "Zulu", "Amharic"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "transcendent.reunion@velarivoyages.com",
          contactNumber: "+1-711-551-2803",
        },
      },
    ],
    title: "Transcendent Reunion of the Tabletop Treasure",
    description:
      "Your journey through the Africa begins in Cape Town, where elegance meets adventure. Explore the shores of , with curated excursions and luxurious onboard amenities.",
    rating: 4.2,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 2964,
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
    category: "mainstream",
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
        "Begin an epic legacy from Cape Town, where the seas meet culture. Visit the remarkable ports of  while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "812 nautical miles",
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
        name: "Stephen Henderson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic", "Southern Sotho", "Zulu", "Amharic"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "radiancedrenched.leg@velarivoyages.com",
          contactNumber: "+1-830-543-2607",
        },
      },
    ],
    title: "Radiance-Drenched Legacy of the Saharan Vistas",
    description:
      "Begin an epic legacy from Cape Town, where the seas meet culture. Visit the remarkable ports of  while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.2,
    tags: ["themed-cruise", "general"],
  },
  {
    basePrice: 9381,
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
    category: "expedition",
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
        "From bustling Cape Town to serene Africa shores, this cruise invites you to relax, explore, and indulge. Stops at  deliver a balanced blend of culture and comfort.",
      distance: "579 nautical miles",
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
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adam Reed",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic", "Southern Sotho", "Zulu", "Amharic"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "immersive.tide.of.th@velarivoyages.com",
          contactNumber: "+1-663-904-9302",
        },
      },
    ],
    title: "Immersive Tide of the Cape of Wonders",
    description:
      "From bustling Cape Town to serene Africa shores, this cruise invites you to relax, explore, and indulge. Stops at  deliver a balanced blend of culture and comfort.",
    rating: 4.9,
    tags: ["repositioning", "historical"],
  },
  {
    basePrice: 8345,
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
    category: "mainstream",
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
        "Your solstice begins in Cape Town, where the spirit of exploration meets modern luxury. From the sun-drenched shores of undefined to the historic streets of undefined, each stop in the Africa will leave a lasting impression.",
      distance: "1246 nautical miles",
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
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Henry Porter",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic", "Southern Sotho", "Zulu", "Amharic"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "hidden.horizon.of.th@velarivoyages.com",
          contactNumber: "+1-302-382-9671",
        },
      },
    ],
    title: "Hidden Horizon of the Mountain-Guarded Mystique",
    description:
      "Your solstice begins in Cape Town, where the spirit of exploration meets modern luxury. From the sun-drenched shores of undefined to the historic streets of undefined, each stop in the Africa will leave a lasting impression.",
    rating: 4.9,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 1151,
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
    category: "premium",
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
        "Enjoy seamless luxury on this harmonic eclipse beginning in Cape Town. Visit breathtaking Africa locales such as  on this unforgettable itinerary.",
      distance: "525 nautical miles",
      totalDuration: "5 days",
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
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Cape Town",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Billy Reed",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic", "Southern Sotho", "Zulu", "Amharic"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "crystalline.panorama@velarivoyages.com",
          contactNumber: "+1-409-330-8965",
        },
      },
    ],
    title: "Crystalline Panorama of the Tabletop Treasure",
    description:
      "Enjoy seamless luxury on this harmonic eclipse beginning in Cape Town. Visit breathtaking Africa locales such as  on this unforgettable itinerary.",
    rating: 4.1,
    tags: ["wildlife", "glacier-cruise", "cultural"],
  },
  {
    basePrice: 9710,
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
    category: "expedition",
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
        "Board in Cape Town for a hand-crafted requiem through the breathtaking Africa. Highlights include sun-drenched beaches, historic ports, and immersive culture in .",
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
        name: "Douglas Murray",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic", "Southern Sotho", "Zulu", "Amharic"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "mystical.reflection.@velarivoyages.com",
          contactNumber: "+1-294-793-8239",
        },
      },
    ],
    title: "Mystical Reflection of the Tabletop Treasure",
    description:
      "Board in Cape Town for a hand-crafted requiem through the breathtaking Africa. Highlights include sun-drenched beaches, historic ports, and immersive culture in .",
    rating: 4.6,
    tags: ["wildlife"],
  },
];
