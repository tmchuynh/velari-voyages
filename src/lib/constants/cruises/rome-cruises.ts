import { Cruise } from "@/lib/interfaces/services/cruises";

export const romeCruises: Cruise[] = [
  {
    basePrice: 2745,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "This inspiring symphony departs from Rome, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Malta, Athens, Venice, Santorini.",
      distance: "945 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rome to Malta",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Malta to Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Venice to Santorini",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Santorini to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Wei Payne",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Russian", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/55.jpg",
        contact: {
          contactEmail: "radiancedrenched.ren@velarivoyages.com",
          contactNumber: "+1-649-100-9889",
        },
      },
    ],
    title: "Radiance-Drenched Renaissance of the Eternal City",
    description:
      "This inspiring symphony departs from Rome, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Malta, Athens, Venice, Santorini.",
    rating: 4.1,
    tags: ["tropical", "holiday-cruise"],
  },
  {
    basePrice: 5786,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
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
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Dubrovnik",
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
        "Depart Rome on a relaxing sanctum through the Mediterranean region. Highlights include the stunning coastlines of Lisbon, Dubrovnik, Barcelona, Santorini, all while enjoying first-class amenities on board.",
      distance: "645 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rome to Lisbon",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Lisbon to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Barcelona to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joseph Ellis",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Russian", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "luminous.embrace.of.@velarivoyages.com",
          contactNumber: "+1-647-285-7341",
        },
      },
    ],
    title: "Luminous Embrace of the Whispers in Marble",
    description:
      "Depart Rome on a relaxing sanctum through the Mediterranean region. Highlights include the stunning coastlines of Lisbon, Dubrovnik, Barcelona, Santorini, all while enjoying first-class amenities on board.",
    rating: 4.6,
    tags: ["cultural"],
  },
  {
    basePrice: 2740,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
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
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This extraordinary zenith from Rome offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Dubrovnik and Malta, creating memories that will last a lifetime.",
      distance: "1491 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rome to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Alexander Cooper",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Russian", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        contact: {
          contactEmail: "aweinspiring.embrace@velarivoyages.com",
          contactNumber: "+1-273-291-4028",
        },
      },
    ],
    title: "Awe-Inspiring Embrace of the Eternal City",
    description:
      "This extraordinary zenith from Rome offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Dubrovnik and Malta, creating memories that will last a lifetime.",
    rating: 4.7,
    tags: ["wildlife", "long-distance"],
  },
  {
    basePrice: 7544,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Depart Rome on a relaxing elevation through the Mediterranean region. Highlights include the stunning coastlines of Barcelona, Milan, Mykonos, all while enjoying first-class amenities on board.",
      distance: "913 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rome to Barcelona",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Barcelona to Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Milan to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Mykonos to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Justin Collins",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Russian", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
        contact: {
          contactEmail: "alluring.panorama.of@velarivoyages.com",
          contactNumber: "+1-905-202-9661",
        },
      },
    ],
    title: "Alluring Panorama of the Eternal City",
    description:
      "Depart Rome on a relaxing elevation through the Mediterranean region. Highlights include the stunning coastlines of Barcelona, Milan, Mykonos, all while enjoying first-class amenities on board.",
    rating: 4.1,
    tags: ["anniversary-cruise", "cruise"],
  },
  {
    basePrice: 9000,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
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
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Leave stress behind with this curated passage from Rome. Sail across the best of Mediterranean and explore treasures like Lisbon, Athens, Malta, Santorini with comfort and style.",
      distance: "1409 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Rome to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lisbon to Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Malta to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Johnny Dean",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Russian", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "legendary.discovery.@velarivoyages.com",
          contactNumber: "+1-663-566-3053",
        },
      },
    ],
    title: "Legendary Discovery of the Citadels by the Sea",
    description:
      "Leave stress behind with this curated passage from Rome. Sail across the best of Mediterranean and explore treasures like Lisbon, Athens, Malta, Santorini with comfort and style.",
    rating: 4.3,
    tags: ["cruise-holiday", "sightseeing"],
  },
  {
    basePrice: 2449,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Begin your journey in Rome, where tradition meets travel. This immersive eclipse reveals the finest of Mediterranean, from the beaches of Milan to the streets of Florence.",
      distance: "981 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rome to Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Milan to Florence",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Florence to Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Sebastian Hayes",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Russian", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "majestic.escape.of.t@velarivoyages.com",
          contactNumber: "+1-334-496-2533",
        },
      },
    ],
    title: "Majestic Escape of the Ancient Empire’s Core",
    description:
      "Begin your journey in Rome, where tradition meets travel. This immersive eclipse reveals the finest of Mediterranean, from the beaches of Milan to the streets of Florence.",
    rating: 5.0,
    tags: ["luxury", "family-friendly", "wildlife"],
  },
  {
    basePrice: 1913,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "This handpicked labyrinth begins in Rome and travels through Mediterranean's iconic waterscapes. Discover Florence, Santorini, Milan as each day brings new stories and every night offers elegant repose.",
      distance: "874 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rome to Florence",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Florence to Santorini",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Santorini to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Fisher",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Russian", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "breathtaking.whisper@velarivoyages.com",
          contactNumber: "+1-270-461-6572",
        },
      },
    ],
    title: "Breathtaking Whisper of the Whispers in Marble",
    description:
      "This handpicked labyrinth begins in Rome and travels through Mediterranean's iconic waterscapes. Discover Florence, Santorini, Milan as each day brings new stories and every night offers elegant repose.",
    rating: 4.2,
    tags: ["luxury"],
  },
  {
    basePrice: 7735,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Set off on a horizon from Rome that captures the essence of Mediterranean. Discover cultural gems and culinary delights across Barcelona, Dubrovnik.",
      distance: "540 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rome to Barcelona",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Brian Grant",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Russian", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "majestic.solstice.of@velarivoyages.com",
          contactNumber: "+1-465-750-5259",
        },
      },
    ],
    title: "Majestic Solstice of the Stone-Written History",
    description:
      "Set off on a horizon from Rome that captures the essence of Mediterranean. Discover cultural gems and culinary delights across Barcelona, Dubrovnik.",
    rating: 4.9,
    tags: ["holiday-cruise", "cruise-vacation"],
  },
  {
    basePrice: 9222,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Set course from Rome for an inspiring tranquil journey across Mediterranean. Whether exploring ancient ruins in Barcelona or soaking up coastal views in Florence, every day offers a perfect mix of discovery and relaxation.",
      distance: "971 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Rome to Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Florence to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Mykonos to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brandon Hamilton",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Russian", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "majestic.journey.of.@velarivoyages.com",
          contactNumber: "+1-673-934-5324",
        },
      },
    ],
    title: "Majestic Journey of the Sunset Over Seven Hills",
    description:
      "Set course from Rome for an inspiring tranquil journey across Mediterranean. Whether exploring ancient ruins in Barcelona or soaking up coastal views in Florence, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.6,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 8601,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Mykonos",
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
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Unwind and explore on this drift through Mediterranean, departing from Rome. With every stop—from Dubrovnik to Athens—you’ll collect memories that last a lifetime.",
      distance: "1391 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rome to Dubrovnik",
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
          description: "Sailing from Mykonos to Athens",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Athens to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
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
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Aiden Grant",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Russian", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "secret.passage.of.th@velarivoyages.com",
          contactNumber: "+1-591-722-6584",
        },
      },
    ],
    title: "Secret Passage of the Mosaic Harbors",
    description:
      "Unwind and explore on this drift through Mediterranean, departing from Rome. With every stop—from Dubrovnik to Athens—you’ll collect memories that last a lifetime.",
    rating: 4.6,
    tags: ["long-distance", "holiday-cruise", "VIP"],
  },
];
