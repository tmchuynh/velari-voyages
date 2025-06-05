import { Cruise } from "@/lib/interfaces/services/cruises";

export const dubrovnikCruises: Cruise[] = [
  {
    basePrice: 3825,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Malta",
      country: "Malta",
      coordinates: {
        latitude: 35.9375,
        longitude: 14.3754,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
      ],
      description:
        "Unwind and explore on this saga through Mediterranean, departing from Dubrovnik. With every stop—from Florence to Malta—you’ll collect memories that last a lifetime.",
      distance: "597 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Lisbon to Milan",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Milan to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Terry Morgan",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "opulent.expedition.o@velarivoyages.com",
          contactNumber: "+1-406-299-1769",
        },
      },
    ],
    title: "Opulent Expedition of the Sunset Terraces",
    description:
      "Unwind and explore on this saga through Mediterranean, departing from Dubrovnik. With every stop—from Florence to Malta—you’ll collect memories that last a lifetime.",
    rating: 4.1,
    tags: ["cruise-vacation", "nature"],
  },
  {
    basePrice: 4383,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Let the waves lead you from Dubrovnik on this extraordinary retreat. Traverse the iconic waters of Mediterranean and discover the beauty of Rome, Lisbon, Barcelona.",
      distance: "1274 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Rome to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Lisbon to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Albert Mitchell",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/92.jpg",
        contact: {
          contactEmail: "dreamlike.sojourn.of@velarivoyages.com",
          contactNumber: "+1-871-397-6991",
        },
      },
    ],
    title: "Dreamlike Sojourn of the Mosaic Harbors",
    description:
      "Let the waves lead you from Dubrovnik on this extraordinary retreat. Traverse the iconic waters of Mediterranean and discover the beauty of Rome, Lisbon, Barcelona.",
    rating: 4.6,
    tags: ["sightseeing", "expedition"],
  },
  {
    basePrice: 9383,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "Discover the wonders of Mediterranean aboard this secluded cruise departing from Dubrovnik. Journey through crystal waters to explore the treasures of Venice, Athens, Malta, Mykonos, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "564 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Venice",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Venice to Athens",
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
          description: "Sailing from Malta to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
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
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Michael Dunn",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "starlit.elevation.of@velarivoyages.com",
          contactNumber: "+1-835-590-1050",
        },
      },
    ],
    title: "Starlit Elevation of the Citadels by the Sea",
    description:
      "Discover the wonders of Mediterranean aboard this secluded cruise departing from Dubrovnik. Journey through crystal waters to explore the treasures of Venice, Athens, Malta, Mykonos, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.6,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 6041,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this moonlit journey beginning in Dubrovnik. Visit breathtaking Mediterranean locales such as Santorini, Malta, Athens on this unforgettable itinerary.",
      distance: "695 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Santorini to Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Malta to Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Athens to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Benjamin Stewart",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "celestial.eclipse.of@velarivoyages.com",
          contactNumber: "+1-254-790-8863",
        },
      },
    ],
    title: "Celestial Eclipse of the Olive-Draped Hills",
    description:
      "Enjoy seamless luxury on this moonlit journey beginning in Dubrovnik. Visit breathtaking Mediterranean locales such as Santorini, Malta, Athens on this unforgettable itinerary.",
    rating: 5.0,
    tags: ["cruise"],
  },
  {
    basePrice: 9307,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "This handpicked sojourn begins in Dubrovnik and travels through Mediterranean's iconic waterscapes. Discover Santorini, Athens as each day brings new stories and every night offers elegant repose.",
      distance: "1114 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Santorini to Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Athens to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Porter",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "unforgettable.fronti@velarivoyages.com",
          contactNumber: "+1-683-456-1047",
        },
      },
    ],
    title: "Unforgettable Frontier of the Citadels by the Sea",
    description:
      "This handpicked sojourn begins in Dubrovnik and travels through Mediterranean's iconic waterscapes. Discover Santorini, Athens as each day brings new stories and every night offers elegant repose.",
    rating: 5.0,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 1848,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Let this horizon-kissed voyage redefine your idea of travel. From Dubrovnik, explore the Mediterranean in luxurious comfort, stopping at Florence, Rome where every port offers a new chapter.",
      distance: "1488 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Florence to Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Rome to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Justin Coleman",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "mythic.embrace.of.th@velarivoyages.com",
          contactNumber: "+1-963-254-5628",
        },
      },
    ],
    title: "Mythic Embrace of the Cerulean Coasts",
    description:
      "Let this horizon-kissed voyage redefine your idea of travel. From Dubrovnik, explore the Mediterranean in luxurious comfort, stopping at Florence, Rome where every port offers a new chapter.",
    rating: 4.4,
    tags: ["cultural"],
  },
  {
    basePrice: 5450,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Board in Dubrovnik for a hand-crafted retreat through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Santorini, Barcelona, Mykonos.",
      distance: "605 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Barcelona to Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Marcus Chambers",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
        contact: {
          contactEmail: "hidden.enigma.of.the@velarivoyages.com",
          contactNumber: "+1-249-510-6364",
        },
      },
    ],
    title: "Hidden Enigma of the Cerulean Coasts",
    description:
      "Board in Dubrovnik for a hand-crafted retreat through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Santorini, Barcelona, Mykonos.",
    rating: 5.0,
    tags: ["weekend-cruise", "cruise-journey"],
  },
  {
    basePrice: 5361,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Leave stress behind with this curated reflection from Dubrovnik. Sail across the best of Mediterranean and explore treasures like Rome, Santorini, Milan, Lisbon with comfort and style.",
      distance: "708 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Rome to Santorini",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Santorini to Milan",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Milan to Lisbon",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Lisbon to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Richard Campbell",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
        contact: {
          contactEmail: "breathtaking.requiem@velarivoyages.com",
          contactNumber: "+1-698-387-3046",
        },
      },
    ],
    title: "Breathtaking Requiem of the Sunset Terraces",
    description:
      "Leave stress behind with this curated reflection from Dubrovnik. Sail across the best of Mediterranean and explore treasures like Rome, Santorini, Milan, Lisbon with comfort and style.",
    rating: 4.1,
    tags: ["cultural", "repositioning", "cruise-ship"],
  },
  {
    basePrice: 2029,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this whispering mirage beginning in Dubrovnik. Visit breathtaking Mediterranean locales such as Malta, Athens on this unforgettable itinerary.",
      distance: "613 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Malta",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Malta to Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Athens to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Malta",
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
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Walter Morgan",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "midnight.whisper.of.@velarivoyages.com",
          contactNumber: "+1-318-156-3062",
        },
      },
    ],
    title: "Midnight Whisper of the Cerulean Coasts",
    description:
      "Enjoy seamless luxury on this whispering mirage beginning in Dubrovnik. Visit breathtaking Mediterranean locales such as Malta, Athens on this unforgettable itinerary.",
    rating: 4.5,
    tags: ["cruise"],
  },
  {
    basePrice: 9231,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
      ],
      description:
        "Join us in Dubrovnik for a mythos of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Milan, Venice, Rome where timeless traditions meet modern luxuries.",
      distance: "1378 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Milan to Venice",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Venice to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Austin Harper",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        contact: {
          contactEmail: "golden.drift.of.the.@velarivoyages.com",
          contactNumber: "+1-752-612-6471",
        },
      },
    ],
    title: "Golden Drift of the Crystalline Bays",
    description:
      "Join us in Dubrovnik for a mythos of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Milan, Venice, Rome where timeless traditions meet modern luxuries.",
    rating: 4.7,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 4281,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Board in Dubrovnik for a hand-crafted frontier through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Lisbon, Florence, Barcelona.",
      distance: "616 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lisbon to Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Florence to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Eugene Jennings",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
        contact: {
          contactEmail: "moonlit.lullaby.of.t@velarivoyages.com",
          contactNumber: "+1-167-909-2150",
        },
      },
    ],
    title: "Moonlit Lullaby of the Ancient Shores",
    description:
      "Board in Dubrovnik for a hand-crafted frontier through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Lisbon, Florence, Barcelona.",
    rating: 4.5,
    tags: ["seasonal", "holiday-cruise"],
  },
  {
    basePrice: 1740,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
      ],
      description:
        "Experience the elegance of the seas on this pearlescent sojourn through Mediterranean, starting from the illustrious port of Dubrovnik. From Athens, Barcelona, Santorini to Venice, each destination offers its own story, culture, and breathtaking views.",
      distance: "880 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Athens",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Athens to Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Barcelona to Santorini",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Santorini to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "James Mason",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "tranquil.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-966-746-5666",
        },
      },
    ],
    title: "Tranquil Mythos of the Timeless Coastlines",
    description:
      "Experience the elegance of the seas on this pearlescent sojourn through Mediterranean, starting from the illustrious port of Dubrovnik. From Athens, Barcelona, Santorini to Venice, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.1,
    tags: ["repositioning", "cruise-experience"],
  },
  {
    basePrice: 2926,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this unforgettable symphony departing Dubrovnik. Savor local cuisine and uncover regional beauty from Athens to Barcelona.",
      distance: "825 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Florence to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Johnny Bennett",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "alluring.oasis.of.th@velarivoyages.com",
          contactNumber: "+1-640-818-4188",
        },
      },
    ],
    title: "Alluring Oasis of the Timeless Coastlines",
    description:
      "Cruise into cultural richness aboard this unforgettable symphony departing Dubrovnik. Savor local cuisine and uncover regional beauty from Athens to Barcelona.",
    rating: 4.4,
    tags: ["weekend-cruise", "repositioning"],
  },
  {
    basePrice: 5539,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
      ],
      description:
        "Embark on an unforgettable elevation from the vibrant port of Dubrovnik, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Venice, Lisbon, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1439 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Venice",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Venice to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Alan Porter",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "secluded.saga.of.the@velarivoyages.com",
          contactNumber: "+1-174-580-1900",
        },
      },
    ],
    title: "Secluded Saga of the Sunset Terraces",
    description:
      "Embark on an unforgettable elevation from the vibrant port of Dubrovnik, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Venice, Lisbon, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.9,
    tags: ["cruise-ship", "weekend-cruise"],
  },
  {
    basePrice: 6377,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Malta",
      country: "Malta",
      coordinates: {
        latitude: 35.9375,
        longitude: 14.3754,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this verdant whisper through Mediterranean, starting from the illustrious port of Dubrovnik. From Barcelona to Malta, each destination offers its own story, culture, and breathtaking views.",
      distance: "550 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Barcelona to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "David Day",
        role: "Customer Service Representative",
        languages: ["English", "Russian", "Finnish", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "floating.solstice.of@velarivoyages.com",
          contactNumber: "+1-583-573-8214",
        },
      },
    ],
    title: "Floating Solstice of the Mosaic Harbors",
    description:
      "Experience the elegance of the seas on this verdant whisper through Mediterranean, starting from the illustrious port of Dubrovnik. From Barcelona to Malta, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.4,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 1832,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Dubrovnik. Discover the historical and natural richness of Mediterranean as you cruise to spectacular destinations like Santorini, Mykonos.",
      distance: "1222 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Bella Gibson",
        role: "Group Booking Coordinator",
        languages: ["English", "Swedish", "Greek", "German", "Finnish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "infinite.whisper.of.@velarivoyages.com",
          contactNumber: "+1-673-166-1295",
        },
      },
    ],
    title: "Infinite Whisper of the Mediterranean Mosaics",
    description:
      "A voyage of contrasts awaits from Dubrovnik. Discover the historical and natural richness of Mediterranean as you cruise to spectacular destinations like Santorini, Mykonos.",
    rating: 4.5,
    tags: ["nature"],
  },
  {
    basePrice: 3078,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Embark from Dubrovnik and traverse the Mediterranean in style. Whether it’s the energy of Rome or the calm of Mykonos, each destination reveals a new side of paradise.",
      distance: "1135 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Rome to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Mykonos to Milan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Milan to Venice",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Venice to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Genesis Gardner",
        role: "Group Booking Coordinator",
        languages: ["English", "Swedish", "Greek", "German", "Finnish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
        contact: {
          contactEmail: "horizonkissed.renais@velarivoyages.com",
          contactNumber: "+1-593-432-6947",
        },
      },
    ],
    title: "Horizon-Kissed Renaissance of the Sun-Drenched Riviera",
    description:
      "Embark from Dubrovnik and traverse the Mediterranean in style. Whether it’s the energy of Rome or the calm of Mykonos, each destination reveals a new side of paradise.",
    rating: 4.5,
    tags: ["cruise-ship"],
  },
  {
    basePrice: 7684,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Start in the vibrant city of Dubrovnik and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Malta, Milan, Barcelona.",
      distance: "1000 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Malta to Milan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Caroline Dunn",
        role: "Group Booking Coordinator",
        languages: ["English", "Swedish", "Greek", "German", "Finnish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "oceanic.awakening.of@velarivoyages.com",
          contactNumber: "+1-925-326-8151",
        },
      },
    ],
    title: "Oceanic Awakening of the Mediterranean Mosaics",
    description:
      "Start in the vibrant city of Dubrovnik and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Malta, Milan, Barcelona.",
    rating: 4.5,
    tags: ["fall-cruise", "family-friendly"],
  },
  {
    basePrice: 7535,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Begin your eclipse in Dubrovnik, a gateway to the soul of Mediterranean. Enjoy days spent exploring Florence, Barcelona, Venice and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "513 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Florence to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Barcelona to Venice",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Venice to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Cynthia Grant",
        role: "Group Booking Coordinator",
        languages: ["English", "Swedish", "Greek", "German", "Finnish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "harmonic.quest.of.th@velarivoyages.com",
          contactNumber: "+1-974-491-2706",
        },
      },
    ],
    title: "Harmonic Quest of the Ancient Shores",
    description:
      "Begin your eclipse in Dubrovnik, a gateway to the soul of Mediterranean. Enjoy days spent exploring Florence, Barcelona, Venice and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.3,
    tags: ["VIP", "cruise-excursion"],
  },
  {
    basePrice: 6939,
    departureLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      region: "Mediterranean",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "Croatia",
          region: "Mediterranean",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
        "Let the waves lead you from Dubrovnik on this harmonic sanctuary. Traverse the iconic waters of Mediterranean and discover the beauty of Rome, Mykonos, Barcelona.",
      distance: "918 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Rome to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Mykonos to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Virginia Murray",
        role: "Group Booking Coordinator",
        languages: ["English", "Swedish", "Greek", "German", "Finnish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/73.jpg",
        contact: {
          contactEmail: "infinite.passage.of.@velarivoyages.com",
          contactNumber: "+1-290-753-7601",
        },
      },
    ],
    title: "Infinite Passage of the Mediterranean Mosaics",
    description:
      "Let the waves lead you from Dubrovnik on this harmonic sanctuary. Traverse the iconic waters of Mediterranean and discover the beauty of Rome, Mykonos, Barcelona.",
    rating: 4.7,
    tags: ["romantic"],
  },
];
