import { Cruise } from "@/lib/interfaces/services/cruises";

export const veniceCruises: Cruise[] = [
  {
    basePrice: 8477,
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
        "Launch into adventure from Venice and sail deep into the heart of the Mediterranean. With ports of call like Athens, Florence, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "667 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Venice to Athens",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Athens to Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Florence to Venice",
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
          description: "Exploring Athens",
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
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Douglas Graves",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "tidewashed.oasis.of.@velarivoyages.com",
          contactNumber: "+1-703-913-3551",
        },
      },
    ],
    title: "Tide-Washed Oasis of the Floating City",
    description:
      "Launch into adventure from Venice and sail deep into the heart of the Mediterranean. With ports of call like Athens, Florence, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.7,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 6124,
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
      city: "Florence",
      country: "Italy",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
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
          city: "Dubrovnik",
          country: "Croatia",
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Sail into splendor from Venice on a eternal voyage through Mediterranean. Let each stop—from Dubrovnik to Rome—reveal the unique flavors and colors of the region.",
      distance: "1000 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Venice to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Rome to Florence",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Brian Mitchell",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/35.jpg",
        contact: {
          contactEmail: "radiant.journey.of.t@velarivoyages.com",
          contactNumber: "+1-443-496-8687",
        },
      },
    ],
    title: "Radiant Journey of the Lagoon Reverie",
    description:
      "Sail into splendor from Venice on a eternal voyage through Mediterranean. Let each stop—from Dubrovnik to Rome—reveal the unique flavors and colors of the region.",
    rating: 4.6,
    tags: ["nature"],
  },
  {
    basePrice: 7859,
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
      country: "Croatia",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
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
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Escape into the calm waters of Mediterranean with this verdant journey from Venice. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Lisbon, Dubrovnik.",
      distance: "993 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Venice to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lisbon to Dubrovnik",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Paul Dean",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "eternal.haven.of.the@velarivoyages.com",
          contactNumber: "+1-588-830-8289",
        },
      },
    ],
    title: "Eternal Haven of the Misty Reflections",
    description:
      "Escape into the calm waters of Mediterranean with this verdant journey from Venice. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Lisbon, Dubrovnik.",
    rating: 4.4,
    tags: ["holiday-cruise", "themed-cruise", "expedition"],
  },
  {
    basePrice: 3543,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
        "Launch into adventure from Venice and sail deep into the heart of the Mediterranean. With ports of call like Rome, Athens, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1482 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Venice to Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Rome to Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Athens to Venice",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lucas Chambers",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
        contact: {
          contactEmail: "exquisite.haven.of.t@velarivoyages.com",
          contactNumber: "+1-603-528-1062",
        },
      },
    ],
    title: "Exquisite Haven of the Lagoon Reverie",
    description:
      "Launch into adventure from Venice and sail deep into the heart of the Mediterranean. With ports of call like Rome, Athens, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.4,
    tags: ["repositioning"],
  },
  {
    basePrice: 7431,
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
        "Depart from iconic Venice and traverse the Mediterranean with visits to Rome, Mykonos, Santorini, Lisbon. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1362 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Venice to Rome",
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
          description: "Sailing from Mykonos to Santorini",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Santorini to Lisbon",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Lisbon to Venice",
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
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Henry Russell",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "starlit.infinite.of.@velarivoyages.com",
          contactNumber: "+1-463-376-4472",
        },
      },
    ],
    title: "Starlit Infinite of the Cerulean Coasts",
    description:
      "Depart from iconic Venice and traverse the Mediterranean with visits to Rome, Mykonos, Santorini, Lisbon. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.3,
    tags: ["cruise-experience", "cruise-vacation"],
  },
  {
    basePrice: 9446,
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
      city: "Barcelona",
      country: "Spain",
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
      ],
      description:
        "Experience coastal elegance on this tide from Venice, where the journey through Mediterranean includes stops in Lisbon, Athens, Barcelona, each more enchanting than the last.",
      distance: "586 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Venice to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Lisbon to Athens",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Athens to Barcelona",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Nathan Nash",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
        contact: {
          contactEmail: "eternal.passage.of.t@velarivoyages.com",
          contactNumber: "+1-515-778-8692",
        },
      },
    ],
    title: "Eternal Passage of the Laced in Silence",
    description:
      "Experience coastal elegance on this tide from Venice, where the journey through Mediterranean includes stops in Lisbon, Athens, Barcelona, each more enchanting than the last.",
    rating: 4.2,
    tags: ["cruise-journey", "seasonal"],
  },
  {
    basePrice: 2765,
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
      city: "Mykonos",
      country: "Greece",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
      ],
      description:
        "Let this unforgettable voyage redefine your idea of travel. From Venice, explore the Mediterranean in luxurious comfort, stopping at Florence, Santorini, Rome, Mykonos where every port offers a new chapter.",
      distance: "561 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Venice to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santorini to Rome",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Rome to Mykonos",
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
          description: "Exploring Florence",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "David Carpenter",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "floating.oasis.of.th@velarivoyages.com",
          contactNumber: "+1-952-540-7714",
        },
      },
    ],
    title: "Floating Oasis of the Lagoon Reverie",
    description:
      "Let this unforgettable voyage redefine your idea of travel. From Venice, explore the Mediterranean in luxurious comfort, stopping at Florence, Santorini, Rome, Mykonos where every port offers a new chapter.",
    rating: 4.7,
    tags: ["repositioning", "short-getaway"],
  },
  {
    basePrice: 6691,
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
      country: "Greece",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
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
          country: "Croatia",
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
      ],
      description:
        "Set sail from historic Venice for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Dubrovnik, Florence, Athens.",
      distance: "936 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Venice to Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Florence",
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
          description: "Exploring Venice",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
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
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joshua Griffin",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "sublime.embrace.of.t@velarivoyages.com",
          contactNumber: "+1-946-123-6207",
        },
      },
    ],
    title: "Sublime Embrace of the Gondola Phantom",
    description:
      "Set sail from historic Venice for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Dubrovnik, Florence, Athens.",
    rating: 4.5,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 6791,
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
      country: "Greece",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
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
          country: "Croatia",
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
      ],
      description:
        "Embark from Venice and traverse the Mediterranean in style. Whether it’s the energy of Rome or the calm of Dubrovnik, each destination reveals a new side of paradise.",
      distance: "1215 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Venice to Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Rome to Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Athens",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Harry Parker",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "extraordinary.enigma@velarivoyages.com",
          contactNumber: "+1-909-254-4866",
        },
      },
    ],
    title: "Extraordinary Enigma of the Floating City",
    description:
      "Embark from Venice and traverse the Mediterranean in style. Whether it’s the energy of Rome or the calm of Dubrovnik, each destination reveals a new side of paradise.",
    rating: 4.0,
    tags: ["historical", "cruise-holiday"],
  },
  {
    basePrice: 1792,
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
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
        "Experience coastal elegance on this embrace from Venice, where the journey through Mediterranean includes stops in Athens, Rome, Florence, each more enchanting than the last.",
      distance: "1475 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Venice to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Rome to Florence",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Florence to Venice",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rome",
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
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Marcus Curtis",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/92.jpg",
        contact: {
          contactEmail: "secret.tide.of.the.m@velarivoyages.com",
          contactNumber: "+1-643-879-6748",
        },
      },
    ],
    title: "Secret Tide of the Misty Reflections",
    description:
      "Experience coastal elegance on this embrace from Venice, where the journey through Mediterranean includes stops in Athens, Rome, Florence, each more enchanting than the last.",
    rating: 4.9,
    tags: ["romantic", "relaxation", "culinary"],
  },
  {
    basePrice: 6936,
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
      city: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
        "Sail away from Venice into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Malta, Florence, Mykonos, Lisbon, where history, nature, and cuisine collide.",
      distance: "835 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Venice to Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Malta to Florence",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Florence to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Mykonos to Lisbon",
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
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Darrell Mitchell",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
        contact: {
          contactEmail: "opulent.drift.of.the@velarivoyages.com",
          contactNumber: "+1-688-554-9330",
        },
      },
    ],
    title: "Opulent Drift of the Canal Kingdom",
    description:
      "Sail away from Venice into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Malta, Florence, Mykonos, Lisbon, where history, nature, and cuisine collide.",
    rating: 4.9,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 5881,
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your mystical journey from Venice. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Athens, Florence, Barcelona.",
      distance: "628 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Venice to Athens",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Athens to Florence",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Florence to Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Barcelona to Venice",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Juan Holloway",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "legendary.renaissanc@velarivoyages.com",
          contactNumber: "+1-592-358-9734",
        },
      },
    ],
    title: "Legendary Renaissance of the Laced in Silence",
    description:
      "Let the spirit of exploration guide your mystical journey from Venice. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Athens, Florence, Barcelona.",
    rating: 4.7,
    tags: ["wildlife", "exclusive"],
  },
  {
    basePrice: 2560,
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
        "Embark from Venice and traverse the Mediterranean in style. Whether it’s the energy of Barcelona or the calm of Milan, each destination reveals a new side of paradise.",
      distance: "1149 nautical miles",
      totalDuration: "19 days",
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
          description: "Sailing from Barcelona to Milan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Milan to Rome",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Rome to Mykonos",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Mykonos to Venice",
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
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Dylan Henderson",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "sublime.journey.of.t@velarivoyages.com",
          contactNumber: "+1-252-815-7573",
        },
      },
    ],
    title: "Sublime Journey of the Floating City",
    description:
      "Embark from Venice and traverse the Mediterranean in style. Whether it’s the energy of Barcelona or the calm of Milan, each destination reveals a new side of paradise.",
    rating: 4.1,
    tags: ["cruise-vacation", "repositioning"],
  },
  {
    basePrice: 3986,
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
      city: "Milan",
      country: "Italy",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
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
      ],
      description:
        "Set sail from Venice on this extraordinary eclipse through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Santorini and Malta and Lisbon and Milan, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1365 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Venice to Santorini",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Santorini to Malta",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Malta to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Lisbon to Milan",
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
          description: "Exploring Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bobby Murray",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "mystical.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-619-813-7454",
        },
      },
    ],
    title: "Mystical Odyssey of the Classical Crossroads",
    description:
      "Set sail from Venice on this extraordinary eclipse through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Santorini and Malta and Lisbon and Milan, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.8,
    tags: ["family-friendly"],
  },
  {
    basePrice: 7639,
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
      city: "Florence",
      country: "Italy",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
        "Sail away from Venice into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Barcelona, Florence, where history, nature, and cuisine collide.",
      distance: "757 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Venice to Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Barcelona to Florence",
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
          description: "Exploring Barcelona",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jerry Hayes",
        role: "Reservations Agent",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "velvet.pulse.of.the.@velarivoyages.com",
          contactNumber: "+1-175-403-5468",
        },
      },
    ],
    title: "Velvet Pulse of the Laced in Silence",
    description:
      "Sail away from Venice into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Barcelona, Florence, where history, nature, and cuisine collide.",
    rating: 4.9,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 7420,
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
      city: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
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
          city: "Rome",
          country: "Italy",
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
        "This heavenly zenith begins in Venice and ventures deep into the heart of Mediterranean. Wander through colorful markets, historic streets, and serene coastlines at Rome, Florence, Barcelona, Lisbon.",
      distance: "921 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Venice to Rome",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Rome to Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Florence to Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Barcelona to Lisbon",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Lerato Gardner",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Swedish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "opulent.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-979-305-4818",
        },
      },
    ],
    title: "Opulent Eclipse of the Olive-Draped Hills",
    description:
      "This heavenly zenith begins in Venice and ventures deep into the heart of Mediterranean. Wander through colorful markets, historic streets, and serene coastlines at Rome, Florence, Barcelona, Lisbon.",
    rating: 4.8,
    tags: ["expedition"],
  },
  {
    basePrice: 5779,
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
        "Let the waves lead you from Venice on this spectacular symphony. Traverse the iconic waters of Mediterranean and discover the beauty of Mykonos, Milan, Florence, Malta.",
      distance: "1153 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Venice to Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Mykonos to Milan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Milan to Florence",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Malta to Venice",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kinsley Fox",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Swedish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "secluded.frontier.of@velarivoyages.com",
          contactNumber: "+1-237-579-7317",
        },
      },
    ],
    title: "Secluded Frontier of the Canal Kingdom",
    description:
      "Let the waves lead you from Venice on this spectacular symphony. Traverse the iconic waters of Mediterranean and discover the beauty of Mykonos, Milan, Florence, Malta.",
    rating: 4.6,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 1184,
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
      city: "Malta",
      country: "Malta",
      coordinates: {
        latitude: 35.9375,
        longitude: 14.3754,
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
      ],
      description:
        "Sail into splendor from Venice on a panoramic voyage through Mediterranean. Let each stop—from Athens to Dubrovnik—reveal the unique flavors and colors of the region.",
      distance: "1073 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Venice to Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Athens to Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Lisbon",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Lisbon to Malta",
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
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Dubrovnik",
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
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Avery Keller",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Swedish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "horizonkissed.infini@velarivoyages.com",
          contactNumber: "+1-402-731-2574",
        },
      },
    ],
    title: "Horizon-Kissed Infinite of the Laced in Silence",
    description:
      "Sail into splendor from Venice on a panoramic voyage through Mediterranean. Let each stop—from Athens to Dubrovnik—reveal the unique flavors and colors of the region.",
    rating: 4.9,
    tags: ["cruise-line"],
  },
  {
    basePrice: 2136,
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
      country: "Greece",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
      ],
      description:
        "Let the waves lead you from Venice on this midnight odyssey. Traverse the iconic waters of Mediterranean and discover the beauty of Rome, Athens.",
      distance: "819 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Venice to Rome",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Rome to Athens",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Marshall",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Swedish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        contact: {
          contactEmail: "idyllic.excursion.of@velarivoyages.com",
          contactNumber: "+1-126-110-6605",
        },
      },
    ],
    title: "Idyllic Excursion of the Wine-Soaked Villages",
    description:
      "Let the waves lead you from Venice on this midnight odyssey. Traverse the iconic waters of Mediterranean and discover the beauty of Rome, Athens.",
    rating: 4.4,
    tags: ["cruise-adventure", "seasonal"],
  },
  {
    basePrice: 2939,
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
        "From bustling Venice to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Malta, Athens, Rome deliver a balanced blend of culture and comfort.",
      distance: "1446 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Venice to Malta",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Malta to Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Athens to Rome",
        },
        {
          start: "Day 12",
          end: "Day 13",
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
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Rome",
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
        name: "Rebecca Stewart",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Swedish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "luxurious.odyssey.of@velarivoyages.com",
          contactNumber: "+1-868-635-6287",
        },
      },
    ],
    title: "Luxurious Odyssey of the Canal Kingdom",
    description:
      "From bustling Venice to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Malta, Athens, Rome deliver a balanced blend of culture and comfort.",
    rating: 4.5,
    tags: ["relaxation"],
  },
];
