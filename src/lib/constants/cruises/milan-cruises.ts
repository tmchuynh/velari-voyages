import { Cruise } from "@/lib/interfaces/services/cruises";

export const milanCruises: Cruise[] = [
  {
    basePrice: 7360,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
        "Escape the everyday with this azure journey through Mediterranean, departing from Milan. You'll visit Venice, Lisbon, Santorini, where every stop is a new adventure.",
      distance: "1436 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Milan to Venice",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Venice to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Lisbon to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jeremy Hunter",
        role: "Corporate Concierge",
        languages: ["English", "Finnish", "Polish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "verdant.tide.of.the.@velarivoyages.com",
          contactNumber: "+1-908-964-2792",
        },
      },
    ],
    title: "Verdant Tide of the Chic Fortress",
    description:
      "Escape the everyday with this azure journey through Mediterranean, departing from Milan. You'll visit Venice, Lisbon, Santorini, where every stop is a new adventure.",
    rating: 4.5,
    tags: ["short-getaway"],
  },
  {
    basePrice: 4374,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Step aboard in Milan and begin a infinite journey through the scenic Mediterranean. From historic cities to coastal hideaways like Dubrovnik, Lisbon, every day is unforgettable.",
      distance: "961 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Milan to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Lisbon to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Paul Hamilton",
        role: "Corporate Concierge",
        languages: ["English", "Finnish", "Polish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "floating.pilgrimage.@velarivoyages.com",
          contactNumber: "+1-226-518-4029",
        },
      },
    ],
    title: "Floating Pilgrimage of the Marble-Runway Realm",
    description:
      "Step aboard in Milan and begin a infinite journey through the scenic Mediterranean. From historic cities to coastal hideaways like Dubrovnik, Lisbon, every day is unforgettable.",
    rating: 4.2,
    tags: ["culinary", "seasonal"],
  },
  {
    basePrice: 2893,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Set sail from historic Milan for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Athens, Florence, Santorini.",
      distance: "974 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Milan to Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Athens to Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Florence to Santorini",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Santorini to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jeremy Dixon",
        role: "Corporate Concierge",
        languages: ["English", "Finnish", "Polish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "mystical.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-866-822-9870",
        },
      },
    ],
    title: "Mystical Mirage of the Chic Fortress",
    description:
      "Set sail from historic Milan for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Athens, Florence, Santorini.",
    rating: 4.0,
    tags: ["romantic"],
  },
  {
    basePrice: 4957,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
        {
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Your journey through the Mediterranean begins in Milan, where elegance meets adventure. Explore the shores of Malta, Barcelona, with curated excursions and luxurious onboard amenities.",
      distance: "1075 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Malta to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elijah Warren",
        role: "Corporate Concierge",
        languages: ["English", "Finnish", "Polish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "verdant.labyrinth.of@velarivoyages.com",
          contactNumber: "+1-119-583-1673",
        },
      },
    ],
    title: "Verdant Labyrinth of the Lombard Jewel",
    description:
      "Your journey through the Mediterranean begins in Milan, where elegance meets adventure. Explore the shores of Malta, Barcelona, with curated excursions and luxurious onboard amenities.",
    rating: 4.7,
    tags: ["wellness"],
  },
  {
    basePrice: 2246,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Your serenade begins in Milan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Dubrovnik to the historic streets of Malta, each stop in the Mediterranean will leave a lasting impression.",
      distance: "1420 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Milan to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Malta to Athens",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Venice to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
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
          description: "Exploring Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Matthew Dunn",
        role: "Corporate Concierge",
        languages: ["English", "Finnish", "Polish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "alluring.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-121-152-4316",
        },
      },
    ],
    title: "Alluring Mirage of the Marble-Runway Realm",
    description:
      "Your serenade begins in Milan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Dubrovnik to the historic streets of Malta, each stop in the Mediterranean will leave a lasting impression.",
    rating: 4.2,
    tags: ["anniversary-cruise", "cruise-holiday"],
  },
  {
    basePrice: 4694,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
      ],
      description:
        "This handpicked labyrinth begins in Milan and travels through Mediterranean's iconic waterscapes. Discover Barcelona, Venice, Mykonos as each day brings new stories and every night offers elegant repose.",
      distance: "993 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Barcelona to Venice",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Venice to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Keith Hudson",
        role: "Corporate Concierge",
        languages: ["English", "Finnish", "Polish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "breathtaking.labyrin@velarivoyages.com",
          contactNumber: "+1-812-632-1780",
        },
      },
    ],
    title: "Breathtaking Labyrinth of the Sunset Terraces",
    description:
      "This handpicked labyrinth begins in Milan and travels through Mediterranean's iconic waterscapes. Discover Barcelona, Venice, Mykonos as each day brings new stories and every night offers elegant repose.",
    rating: 4.8,
    tags: ["tropical", "seasonal", "repositioning"],
  },
  {
    basePrice: 3140,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "An unforgettable sanctuary awaits as you cruise from Milan across Mediterranean. Dive into history, flavor, and culture with stops including Santorini, Athens.",
      distance: "1098 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santorini to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Thabo Curtis",
        role: "Corporate Concierge",
        languages: ["English", "Finnish", "Polish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "riveting.escape.of.t@velarivoyages.com",
          contactNumber: "+1-414-344-2114",
        },
      },
    ],
    title: "Riveting Escape of the Marble-Runway Realm",
    description:
      "An unforgettable sanctuary awaits as you cruise from Milan across Mediterranean. Dive into history, flavor, and culture with stops including Santorini, Athens.",
    rating: 4.6,
    tags: ["relaxation", "anniversary-cruise"],
  },
  {
    basePrice: 3114,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
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
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
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
      ],
      description:
        "Launch into adventure from Milan and sail deep into the heart of the Mediterranean. With ports of call like Barcelona, Florence, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "732 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Barcelona to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Samuel Gardner",
        role: "Corporate Concierge",
        languages: ["English", "Finnish", "Polish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "heavenly.passage.of.@velarivoyages.com",
          contactNumber: "+1-419-770-7059",
        },
      },
    ],
    title: "Heavenly Passage of the Sunset Terraces",
    description:
      "Launch into adventure from Milan and sail deep into the heart of the Mediterranean. With ports of call like Barcelona, Florence, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 5.0,
    tags: ["cultural", "wildlife", "cruise-holiday"],
  },
  {
    basePrice: 2914,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
          city: "Athens",
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
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "An escape like no other begins in Milan, where your voyage launches into the heart of Mediterranean. Discover the magic of Dubrovnik, Athens, Malta with style and sophistication.",
      distance: "976 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Milan to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Malta to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
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
          description: "Exploring Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lucas Reeves",
        role: "Corporate Concierge",
        languages: ["English", "Finnish", "Polish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "legendary.solstice.o@velarivoyages.com",
          contactNumber: "+1-283-374-4449",
        },
      },
    ],
    title: "Legendary Solstice of the Sun-Drenched Riviera",
    description:
      "An escape like no other begins in Milan, where your voyage launches into the heart of Mediterranean. Discover the magic of Dubrovnik, Athens, Malta with style and sophistication.",
    rating: 4.7,
    tags: ["fall-cruise", "wildlife"],
  },
  {
    basePrice: 6789,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
        "Join us in Milan for a enigma of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Venice, Athens where timeless traditions meet modern luxuries.",
      distance: "1042 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Milan to Venice",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Venice to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gary Marshall",
        role: "Corporate Concierge",
        languages: ["English", "Finnish", "Polish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "infinite.saga.of.the@velarivoyages.com",
          contactNumber: "+1-521-932-6346",
        },
      },
    ],
    title: "Infinite Saga of the Threaded with Elegance",
    description:
      "Join us in Milan for a enigma of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Venice, Athens where timeless traditions meet modern luxuries.",
    rating: 4.7,
    tags: ["romantic", "cruise", "cruise-excursion"],
  },
];
