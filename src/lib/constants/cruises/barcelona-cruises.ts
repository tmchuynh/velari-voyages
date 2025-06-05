import { Cruise } from "@/lib/interfaces/services/cruises";

export const barcelonaCruises: Cruise[] = [
  {
    basePrice: 4262,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Athens",
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
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Barcelona. Discover the historical and natural richness of Mediterranean as you cruise to spectacular destinations like Florence, Athens.",
      distance: "695 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Florence to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Randy Montgomery",
        role: "Customer Service Representative",
        languages: ["English", "Italian", "Portuguese", "Russian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "opulent.serenade.of.@velarivoyages.com",
          contactNumber: "+1-854-824-5851",
        },
      },
    ],
    title: "Opulent Serenade of the Gaudí’s Playground",
    description:
      "A voyage of contrasts awaits from Barcelona. Discover the historical and natural richness of Mediterranean as you cruise to spectacular destinations like Florence, Athens.",
    rating: 4.3,
    tags: ["historical", "cruise-ship", "romantic"],
  },
  {
    basePrice: 6135,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Your journey through the Mediterranean begins in Barcelona, where elegance meets adventure. Explore the shores of Milan, Athens, Rome, Dubrovnik, with curated excursions and luxurious onboard amenities.",
      distance: "564 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Milan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Milan to Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Athens to Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rome to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Harry Montgomery",
        role: "Customer Service Representative",
        languages: ["English", "Italian", "Portuguese", "Russian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "immersive.sanctum.of@velarivoyages.com",
          contactNumber: "+1-344-217-1337",
        },
      },
    ],
    title: "Immersive Sanctum of the Whispers of Color",
    description:
      "Your journey through the Mediterranean begins in Barcelona, where elegance meets adventure. Explore the shores of Milan, Athens, Rome, Dubrovnik, with curated excursions and luxurious onboard amenities.",
    rating: 4.2,
    tags: ["expedition", "relaxation"],
  },
  {
    basePrice: 1402,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "From bustling Barcelona to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Mykonos, Dubrovnik deliver a balanced blend of culture and comfort.",
      distance: "904 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Barcelona to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Ralph Henderson",
        role: "Customer Service Representative",
        languages: ["English", "Italian", "Portuguese", "Russian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "unforgettable.odysse@velarivoyages.com",
          contactNumber: "+1-933-543-8532",
        },
      },
    ],
    title: "Unforgettable Odyssey of the Sun-Kissed Labyrinth",
    description:
      "From bustling Barcelona to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Mykonos, Dubrovnik deliver a balanced blend of culture and comfort.",
    rating: 4.1,
    tags: ["VIP", "wildlife"],
  },
  {
    basePrice: 5259,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Malta",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This extraordinary escape from Barcelona offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Mykonos and Malta, creating memories that will last a lifetime.",
      distance: "1201 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Barcelona to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christopher Dean",
        role: "Customer Service Representative",
        languages: ["English", "Italian", "Portuguese", "Russian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "spectacular.reunion.@velarivoyages.com",
          contactNumber: "+1-557-225-5960",
        },
      },
    ],
    title: "Spectacular Reunion of the Olive-Draped Hills",
    description:
      "This extraordinary escape from Barcelona offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Mykonos and Malta, creating memories that will last a lifetime.",
    rating: 4.7,
    tags: ["cruise-line", "cruise-adventure"],
  },
  {
    basePrice: 3094,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Santorini",
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
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This handpicked legacy begins in Barcelona and travels through Mediterranean's iconic waterscapes. Discover Rome, Santorini as each day brings new stories and every night offers elegant repose.",
      distance: "906 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Barcelona to Rome",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Rome to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jeremy Reeves",
        role: "Customer Service Representative",
        languages: ["English", "Italian", "Portuguese", "Russian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "horizonkissed.realm.@velarivoyages.com",
          contactNumber: "+1-787-920-2588",
        },
      },
    ],
    title: "Horizon-Kissed Realm of the Catalan Gem",
    description:
      "This handpicked legacy begins in Barcelona and travels through Mediterranean's iconic waterscapes. Discover Rome, Santorini as each day brings new stories and every night offers elegant repose.",
    rating: 4.3,
    tags: ["cruise", "repositioning", "culinary"],
  },
  {
    basePrice: 6175,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Santorini",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Step aboard in Barcelona and begin a mystical journey through the scenic Mediterranean. From historic cities to coastal hideaways like Dubrovnik, Santorini, every day is unforgettable.",
      distance: "1203 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Frank Henderson",
        role: "Customer Service Representative",
        languages: ["English", "Italian", "Portuguese", "Russian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "epic.expedition.of.t@velarivoyages.com",
          contactNumber: "+1-366-820-4431",
        },
      },
    ],
    title: "Epic Expedition of the Mosaic by the Sea",
    description:
      "Step aboard in Barcelona and begin a mystical journey through the scenic Mediterranean. From historic cities to coastal hideaways like Dubrovnik, Santorini, every day is unforgettable.",
    rating: 4.3,
    tags: ["culinary", "cruise", "romantic"],
  },
  {
    basePrice: 7268,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Discover the wonders of Mediterranean aboard this tranquil cruise departing from Barcelona. Journey through crystal waters to explore the treasures of Santorini, Dubrovnik, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "541 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Barcelona to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Timothy Reed",
        role: "Customer Service Representative",
        languages: ["English", "Italian", "Portuguese", "Russian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "epic.symphony.of.the@velarivoyages.com",
          contactNumber: "+1-471-216-9315",
        },
      },
    ],
    title: "Epic Symphony of the Spires and Spirits",
    description:
      "Discover the wonders of Mediterranean aboard this tranquil cruise departing from Barcelona. Journey through crystal waters to explore the treasures of Santorini, Dubrovnik, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 5.0,
    tags: ["relaxation"],
  },
  {
    basePrice: 6746,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Unwind and explore on this reflection through Mediterranean, departing from Barcelona. With every stop—from Dubrovnik to Athens—you’ll collect memories that last a lifetime.",
      distance: "888 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Santorini to Rome",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Rome to Athens",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Athens to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jordan Baker",
        role: "Customer Service Representative",
        languages: ["English", "Italian", "Portuguese", "Russian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
        contact: {
          contactEmail: "refined.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-897-994-1984",
        },
      },
    ],
    title: "Refined Sojourn of the Sun-Kissed Labyrinth",
    description:
      "Unwind and explore on this reflection through Mediterranean, departing from Barcelona. With every stop—from Dubrovnik to Athens—you’ll collect memories that last a lifetime.",
    rating: 4.4,
    tags: ["nature", "relaxation"],
  },
  {
    basePrice: 5499,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this majestic legacy departing Barcelona. Savor local cuisine and uncover regional beauty from Rome to Mykonos.",
      distance: "1006 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Rome to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Mykonos to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Alan Murray",
        role: "Customer Service Representative",
        languages: ["English", "Italian", "Portuguese", "Russian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
        contact: {
          contactEmail: "secret.elevation.of.@velarivoyages.com",
          contactNumber: "+1-720-528-8919",
        },
      },
    ],
    title: "Secret Elevation of the Sun-Kissed Labyrinth",
    description:
      "Cruise into cultural richness aboard this majestic legacy departing Barcelona. Savor local cuisine and uncover regional beauty from Rome to Mykonos.",
    rating: 4.0,
    tags: ["short-getaway", "romantic"],
  },
  {
    basePrice: 8844,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Your mystique begins in Barcelona, where every sunset on the Mediterranean horizon promises another day of discovery—from Florence, Dubrovnik to hidden ports of charm.",
      distance: "531 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Florence to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Ethan Porter",
        role: "Customer Service Representative",
        languages: ["English", "Italian", "Portuguese", "Russian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "secluded.resonance.o@velarivoyages.com",
          contactNumber: "+1-225-454-1568",
        },
      },
    ],
    title: "Secluded Resonance of the Legacy of Empires",
    description:
      "Your mystique begins in Barcelona, where every sunset on the Mediterranean horizon promises another day of discovery—from Florence, Dubrovnik to hidden ports of charm.",
    rating: 4.3,
    tags: ["anniversary-cruise", "sightseeing"],
  },
];
