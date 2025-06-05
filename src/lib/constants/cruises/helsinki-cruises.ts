import { Cruise } from "@/lib/interfaces/services/cruises";

export const helsinkiCruises: Cruise[] = [
  {
    basePrice: 1118,
    departureLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Helsinki",
          country: "",
          region: "",
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
      ],
      description:
        "Your horizon begins in Helsinki, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Malta to the historic streets of Milan, each stop in the Helsinki will leave a lasting impression.",
      distance: "1483 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Helsinki to Malta",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Malta to Milan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Milan to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Malta",
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
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Gerald Fisher",
        role: "Marketing Coordinator",
        languages: ["English", "Russian", "Spanish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "secluded.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-113-535-7232",
        },
      },
    ],
    title: "Secluded Sanctuary of the Exotic Realms",
    description:
      "Your horizon begins in Helsinki, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Malta to the historic streets of Milan, each stop in the Helsinki will leave a lasting impression.",
    rating: 4.8,
    tags: ["cruise-line", "cruise-holiday", "cruise"],
  },
  {
    basePrice: 2973,
    departureLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Helsinki",
          country: "",
          region: "",
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
          city: "Santorini",
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Your realm begins in Helsinki, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Athens to the historic streets of Santorini, each stop in the Helsinki will leave a lasting impression.",
      distance: "1081 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Helsinki to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Santorini to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Barcelona to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Zachary Russell",
        role: "Marketing Coordinator",
        languages: ["English", "Russian", "Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "velvet.exploration.o@velarivoyages.com",
          contactNumber: "+1-972-719-2511",
        },
      },
    ],
    title: "Velvet Exploration of the Exotic Realms",
    description:
      "Your realm begins in Helsinki, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Athens to the historic streets of Santorini, each stop in the Helsinki will leave a lasting impression.",
    rating: 4.3,
    tags: ["cruise-line"],
  },
  {
    basePrice: 2101,
    departureLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Helsinki",
      country: "",
      region: "",
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
          city: "Helsinki",
          country: "",
          region: "",
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
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Helsinki",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "An escape like no other begins in Helsinki, where your odyssey launches into the heart of Helsinki. Discover the magic of Malta, Florence, Venice with style and sophistication.",
      distance: "970 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Helsinki to Malta",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Malta to Florence",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Florence to Venice",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Venice to Helsinki",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Malta",
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
          description: "Exploring Venice",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Luis Montgomery",
        role: "Marketing Coordinator",
        languages: ["English", "Russian", "Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "radiancedrenched.adv@velarivoyages.com",
          contactNumber: "+1-544-527-2653",
        },
      },
    ],
    title: "Radiance-Drenched Adventure of the Exotic Realms",
    description:
      "An escape like no other begins in Helsinki, where your odyssey launches into the heart of Helsinki. Discover the magic of Malta, Florence, Venice with style and sophistication.",
    rating: 4.9,
    tags: ["cruise-adventure", "cruise-vacation", "cruise-ship"],
  },
  {
    basePrice: 5486,
    departureLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Helsinki",
          country: "",
          region: "",
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
          city: "Helsinki",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Helsinki on this pearlescent journey across Helsinki. Uncover the beauty and history of Venice, Dubrovnik, Lisbon with curated excursions, world-class cuisine, and exceptional service.",
      distance: "680 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Helsinki to Venice",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Venice to Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Lisbon",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Lisbon to Helsinki",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alan Foster",
        role: "Marketing Coordinator",
        languages: ["English", "Russian", "Spanish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "forbidden.serenade.o@velarivoyages.com",
          contactNumber: "+1-801-399-3791",
        },
      },
    ],
    title: "Forbidden Serenade of the Exotic Realms",
    description:
      "Sail away from the charming harbor of Helsinki on this pearlescent journey across Helsinki. Uncover the beauty and history of Venice, Dubrovnik, Lisbon with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.3,
    tags: ["cruise-journey"],
  },
  {
    basePrice: 9695,
    departureLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Helsinki",
          country: "",
          region: "",
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
          city: "Santorini",
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
          city: "Helsinki",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this mythic realm through Helsinki, starting from the illustrious port of Helsinki. From Athens, Santorini to Malta, each destination offers its own story, culture, and breathtaking views.",
      distance: "1176 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Helsinki to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Santorini",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Santorini to Malta",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Malta to Helsinki",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "James Knight",
        role: "Marketing Coordinator",
        languages: ["English", "Russian", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "opulent.zenith.of.th@velarivoyages.com",
          contactNumber: "+1-820-217-9460",
        },
      },
    ],
    title: "Opulent Zenith of the Exotic Realms",
    description:
      "Experience the elegance of the seas on this mythic realm through Helsinki, starting from the illustrious port of Helsinki. From Athens, Santorini to Malta, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.6,
    tags: ["short-getaway"],
  },
  {
    basePrice: 5753,
    departureLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Helsinki",
          country: "",
          region: "",
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Depart Helsinki on a relaxing pilgrimage through the Helsinki region. Highlights include the stunning coastlines of Rome, Milan, all while enjoying first-class amenities on board.",
      distance: "568 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Helsinki to Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Rome to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Lucas Hamilton",
        role: "Marketing Coordinator",
        languages: ["English", "Russian", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "transcendent.elevati@velarivoyages.com",
          contactNumber: "+1-676-799-2696",
        },
      },
    ],
    title: "Transcendent Elevation of the Exotic Realms",
    description:
      "Depart Helsinki on a relaxing pilgrimage through the Helsinki region. Highlights include the stunning coastlines of Rome, Milan, all while enjoying first-class amenities on board.",
    rating: 4.9,
    tags: ["exclusive", "historical", "weekend-cruise"],
  },
  {
    basePrice: 4805,
    departureLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Helsinki",
          country: "",
          region: "",
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this majestic embrace departing Helsinki. Savor local cuisine and uncover regional beauty from Milan to Dubrovnik.",
      distance: "1496 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Helsinki to Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Milan to Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Lisbon to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Austin Murray",
        role: "Marketing Coordinator",
        languages: ["English", "Russian", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "luxurious.elevation.@velarivoyages.com",
          contactNumber: "+1-318-744-9637",
        },
      },
    ],
    title: "Luxurious Elevation of the Exotic Realms",
    description:
      "Cruise into cultural richness aboard this majestic embrace departing Helsinki. Savor local cuisine and uncover regional beauty from Milan to Dubrovnik.",
    rating: 4.9,
    tags: ["tropical", "cruise-journey", "holiday-cruise"],
  },
  {
    basePrice: 7818,
    departureLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Helsinki",
          country: "",
          region: "",
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "An escape like no other begins in Helsinki, where your panorama launches into the heart of Helsinki. Discover the magic of Barcelona, Milan with style and sophistication.",
      distance: "1142 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Helsinki to Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Barcelona to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jack Carpenter",
        role: "Marketing Coordinator",
        languages: ["English", "Russian", "Spanish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "extraordinary.panora@velarivoyages.com",
          contactNumber: "+1-677-921-9013",
        },
      },
    ],
    title: "Extraordinary Panorama of the Exotic Realms",
    description:
      "An escape like no other begins in Helsinki, where your panorama launches into the heart of Helsinki. Discover the magic of Barcelona, Milan with style and sophistication.",
    rating: 4.8,
    tags: ["glacier-cruise"],
  },
  {
    basePrice: 4240,
    departureLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Helsinki",
          country: "",
          region: "",
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Helsinki",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Depart from Helsinki on this thoughtfully designed arcadia across the Helsinki. Savor coastal charm, cultural treasures, and ocean views with stops at Athens, Dubrovnik, Malta, Venice.",
      distance: "879 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Helsinki to Athens",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Athens to Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Malta to Venice",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Venice to Helsinki",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Helsinki",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jack Stewart",
        role: "Marketing Coordinator",
        languages: ["English", "Russian", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
        contact: {
          contactEmail: "legendary.exploratio@velarivoyages.com",
          contactNumber: "+1-684-356-1895",
        },
      },
    ],
    title: "Legendary Exploration of the Exotic Realms",
    description:
      "Depart from Helsinki on this thoughtfully designed arcadia across the Helsinki. Savor coastal charm, cultural treasures, and ocean views with stops at Athens, Dubrovnik, Malta, Venice.",
    rating: 4.0,
    tags: ["general", "fall-cruise"],
  },
  {
    basePrice: 7715,
    departureLocation: {
      city: "Helsinki",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Helsinki",
      country: "",
      region: "",
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
          city: "Helsinki",
          country: "",
          region: "",
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
          city: "Helsinki",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Depart Helsinki on a relaxing elevation through the Helsinki region. Highlights include the stunning coastlines of Santorini, Rome, all while enjoying first-class amenities on board.",
      distance: "1416 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Helsinki to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Santorini to Rome",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Rome to Helsinki",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Luis Stewart",
        role: "Marketing Coordinator",
        languages: ["English", "Russian", "Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "alluring.requiem.of.@velarivoyages.com",
          contactNumber: "+1-358-910-1550",
        },
      },
    ],
    title: "Alluring Requiem of the Exotic Realms",
    description:
      "Depart Helsinki on a relaxing elevation through the Helsinki region. Highlights include the stunning coastlines of Santorini, Rome, all while enjoying first-class amenities on board.",
    rating: 4.5,
    tags: ["cruise-getaway", "seasonal", "exclusive"],
  },
];
