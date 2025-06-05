import { Cruise } from "@/lib/interfaces/services/cruises";

export const veniceCruises: Cruise[] = [
  {
    basePrice: 5684,
    departureLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "An escape like no other begins in Venice, where your quest launches into the heart of Mediterranean. Discover the magic of Rome, Dubrovnik with style and sophistication.",
      distance: "838 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Venice to Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Rome to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Nicholas Russell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Norwegian", "Finnish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        contact: {
          contactEmail: "immersive.solstice.o@velarivoyages.com",
          contactNumber: "+1-452-455-7008",
        },
      },
    ],
    title: "Immersive Solstice of the Floating City",
    description:
      "An escape like no other begins in Venice, where your quest launches into the heart of Mediterranean. Discover the magic of Rome, Dubrovnik with style and sophistication.",
    rating: 4.6,
    tags: ["cruise-holiday", "VIP", "glacier-cruise"],
  },
  {
    basePrice: 4422,
    departureLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
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
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
        "This elevation takes you beyond the ordinary, starting in Venice. With breathtaking stops in Athens, Rome, Lisbon, Santorini, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1307 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Venice to Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Athens to Rome",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Rome to Lisbon",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Lisbon to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Raymond Wells",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Norwegian", "Finnish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "immersive.tranquilit@velarivoyages.com",
          contactNumber: "+1-577-561-5130",
        },
      },
    ],
    title: "Immersive Tranquility of the Wine-Soaked Villages",
    description:
      "This elevation takes you beyond the ordinary, starting in Venice. With breathtaking stops in Athens, Rome, Lisbon, Santorini, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.5,
    tags: ["family-friendly", "luxury"],
  },
  {
    basePrice: 8744,
    departureLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Your journey through the Mediterranean begins in Venice, where elegance meets adventure. Explore the shores of Milan, Santorini, Mykonos, with curated excursions and luxurious onboard amenities.",
      distance: "730 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Venice to Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santorini to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Mykonos to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Billy Dixon",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Norwegian", "Finnish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "luminous.mystique.of@velarivoyages.com",
          contactNumber: "+1-441-784-2484",
        },
      },
    ],
    title: "Luminous Mystique of the Canal Kingdom",
    description:
      "Your journey through the Mediterranean begins in Venice, where elegance meets adventure. Explore the shores of Milan, Santorini, Mykonos, with curated excursions and luxurious onboard amenities.",
    rating: 4.1,
    tags: ["adventure", "romantic", "tropical"],
  },
  {
    basePrice: 5563,
    departureLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
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
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "This odyssey takes you beyond the ordinary, starting in Venice. With breathtaking stops in Lisbon, Santorini, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "926 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Venice to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Santorini to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Kenneth Sutton",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Norwegian", "Finnish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "breathtaking.elevati@velarivoyages.com",
          contactNumber: "+1-685-915-2336",
        },
      },
    ],
    title: "Breathtaking Elevation of the Timeless Coastlines",
    description:
      "This odyssey takes you beyond the ordinary, starting in Venice. With breathtaking stops in Lisbon, Santorini, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.6,
    tags: ["anniversary-cruise", "cruise-journey", "long-distance"],
  },
  {
    basePrice: 2812,
    departureLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Launch into adventure from Venice and sail deep into the heart of the Mediterranean. With ports of call like Florence, Lisbon, Milan, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "736 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Venice to Florence",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Lisbon to Milan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Milan to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Venice",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Russell Carpenter",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Norwegian", "Finnish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "radiancedrenched.myt@velarivoyages.com",
          contactNumber: "+1-288-222-5227",
        },
      },
    ],
    title: "Radiance-Drenched Mythos of the Mediterranean Mosaics",
    description:
      "Launch into adventure from Venice and sail deep into the heart of the Mediterranean. With ports of call like Florence, Lisbon, Milan, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.0,
    tags: ["long-distance"],
  },
  {
    basePrice: 1078,
    departureLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
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
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the winds of the Mediterranean carry you from Venice to the most stunning ports in the region. With destinations like Malta, Dubrovnik, this elevation redefines luxury travel.",
      distance: "793 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Venice to Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Malta to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Venice",
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
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nathan Dunn",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Norwegian", "Finnish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "horizonkissed.embrac@velarivoyages.com",
          contactNumber: "+1-136-728-1277",
        },
      },
    ],
    title: "Horizon-Kissed Embrace of the Mosaic Harbors",
    description:
      "Let the winds of the Mediterranean carry you from Venice to the most stunning ports in the region. With destinations like Malta, Dubrovnik, this elevation redefines luxury travel.",
    rating: 5.0,
    tags: ["cruise-vacation", "cruise-adventure"],
  },
  {
    basePrice: 3782,
    departureLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Embark on an unforgettable sanctuary from the vibrant port of Venice, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Barcelona, Athens, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1151 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Venice to Barcelona",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Barcelona to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Chen Graham",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Norwegian", "Finnish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "transcendent.haven.o@velarivoyages.com",
          contactNumber: "+1-553-727-2591",
        },
      },
    ],
    title: "Transcendent Haven of the Gondola Phantom",
    description:
      "Embark on an unforgettable sanctuary from the vibrant port of Venice, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Barcelona, Athens, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.3,
    tags: ["wellness", "cultural"],
  },
  {
    basePrice: 6170,
    departureLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
          city: "Mykonos",
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
        "Let the spirit of exploration guide your timeless journey from Venice. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Dubrovnik, Mykonos, Santorini.",
      distance: "1429 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Venice to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Mykonos to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Justin Clark",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Norwegian", "Finnish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "sundrenched.sojourn.@velarivoyages.com",
          contactNumber: "+1-499-507-9857",
        },
      },
    ],
    title: "Sun-Drenched Sojourn of the Canal Kingdom",
    description:
      "Let the spirit of exploration guide your timeless journey from Venice. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Dubrovnik, Mykonos, Santorini.",
    rating: 4.3,
    tags: ["culinary", "glacier-cruise"],
  },
  {
    basePrice: 8861,
    departureLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Step aboard in Venice and begin a immersive journey through the scenic Mediterranean. From historic cities to coastal hideaways like Barcelona, Florence, Athens, every day is unforgettable.",
      distance: "1148 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Venice to Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Athens to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alan Dixon",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Norwegian", "Finnish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "opulent.escape.of.th@velarivoyages.com",
          contactNumber: "+1-770-101-5266",
        },
      },
    ],
    title: "Opulent Escape of the Floating City",
    description:
      "Step aboard in Venice and begin a immersive journey through the scenic Mediterranean. From historic cities to coastal hideaways like Barcelona, Florence, Athens, every day is unforgettable.",
    rating: 4.0,
    tags: ["cruise-vacation", "repositioning"],
  },
  {
    basePrice: 1955,
    departureLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
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
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Let the waves lead you from Venice on this infinite expedition. Traverse the iconic waters of Mediterranean and discover the beauty of Mykonos, Rome.",
      distance: "736 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Venice to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rome to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Tyler Graves",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Norwegian", "Finnish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
        contact: {
          contactEmail: "whispering.elevation@velarivoyages.com",
          contactNumber: "+1-862-562-3721",
        },
      },
    ],
    title: "Whispering Elevation of the Olive-Draped Hills",
    description:
      "Let the waves lead you from Venice on this infinite expedition. Traverse the iconic waters of Mediterranean and discover the beauty of Mykonos, Rome.",
    rating: 4.3,
    tags: ["luxury"],
  },
];
