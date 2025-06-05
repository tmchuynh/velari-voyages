import { Cruise } from "@/lib/interfaces/services/cruises";

export const limaCruises: Cruise[] = [
  {
    basePrice: 8870,
    departureLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "This secret sanctum begins in Lima and ventures deep into the heart of South America. Wander through colorful markets, historic streets, and serene coastlines at Rio de Janeiro, Santiago.",
      distance: "1154 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Santiago",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Santiago to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Sarah Fletcher",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "spectacular.sanctuar@velarivoyages.com",
          contactNumber: "+1-166-660-4862",
        },
      },
    ],
    title: "Spectacular Sanctuary of the Andean Views",
    description:
      "This secret sanctum begins in Lima and ventures deep into the heart of South America. Wander through colorful markets, historic streets, and serene coastlines at Rio de Janeiro, Santiago.",
    rating: 5.0,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 4410,
    departureLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Buenos Aires",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Let this harmonic voyage redefine your idea of travel. From Lima, explore the South America in luxurious comfort, stopping at Montevideo, Rio de Janeiro, Buenos Aires where every port offers a new chapter.",
      distance: "824 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Buenos Aires",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Laura Collins",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "midnight.mystique.of@velarivoyages.com",
          contactNumber: "+1-329-186-9769",
        },
      },
    ],
    title: "Midnight Mystique of the Rhythmic Tropics",
    description:
      "Let this harmonic voyage redefine your idea of travel. From Lima, explore the South America in luxurious comfort, stopping at Montevideo, Rio de Janeiro, Buenos Aires where every port offers a new chapter.",
    rating: 4.2,
    tags: ["cruise-experience", "culinary", "cultural"],
  },
  {
    basePrice: 2949,
    departureLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "From the lively departure port of Lima, this curated legacy showcases the finest of South America. With visits to Santiago, Montevideo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "764 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Lima to Santiago",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Montevideo to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Layla West",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Spanish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "infinite.reverie.of.@velarivoyages.com",
          contactNumber: "+1-418-154-3738",
        },
      },
    ],
    title: "Infinite Reverie of the Cape Horn Crossings",
    description:
      "From the lively departure port of Lima, this curated legacy showcases the finest of South America. With visits to Santiago, Montevideo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.4,
    tags: ["cruise-journey", "anniversary-cruise", "wellness"],
  },
  {
    basePrice: 3152,
    departureLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Escape the everyday with this refined journey through South America, departing from Lima. You'll visit Rio de Janeiro, Santiago, Montevideo, Cartagena, where every stop is a new adventure.",
      distance: "1111 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Santiago",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Montevideo to Cartagena",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Cartagena to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Virginia Lawson",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Spanish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "serene.tide.of.the.l@velarivoyages.com",
          contactNumber: "+1-687-894-4448",
        },
      },
    ],
    title: "Serene Tide of the Lost Cities & Living Cultures",
    description:
      "Escape the everyday with this refined journey through South America, departing from Lima. You'll visit Rio de Janeiro, Santiago, Montevideo, Cartagena, where every stop is a new adventure.",
    rating: 4.0,
    tags: ["historical", "cruise-ship"],
  },
  {
    basePrice: 8027,
    departureLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "Set sail from Lima on this ornate reunion through the heart of South America. Experience the perfect blend of relaxation and adventure as you explore Cartagena and Rio de Janeiro and Santiago and Montevideo, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "570 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Lima to Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Cartagena to Rio de Janeiro",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Santiago",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Santiago to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Victoria Baker",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "enchanting.mirage.of@velarivoyages.com",
          contactNumber: "+1-818-101-7558",
        },
      },
    ],
    title: "Enchanting Mirage of the Rainforest Veins",
    description:
      "Set sail from Lima on this ornate reunion through the heart of South America. Experience the perfect blend of relaxation and adventure as you explore Cartagena and Rio de Janeiro and Santiago and Montevideo, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.2,
    tags: ["repositioning", "cruise-ship", "exclusive"],
  },
  {
    basePrice: 7737,
    departureLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Buenos Aires",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Experience coastal elegance on this elevation from Lima, where the journey through South America includes stops in Santiago, Rio de Janeiro, Buenos Aires, Montevideo, each more enchanting than the last.",
      distance: "877 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Lima to Santiago",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Buenos Aires",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Montevideo",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Montevideo to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Naomi Gibson",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "tranquil.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-305-693-5517",
        },
      },
    ],
    title: "Tranquil Sojourn of the Cape Horn Crossings",
    description:
      "Experience coastal elegance on this elevation from Lima, where the journey through South America includes stops in Santiago, Rio de Janeiro, Buenos Aires, Montevideo, each more enchanting than the last.",
    rating: 4.2,
    tags: ["seasonal", "cruise"],
  },
  {
    basePrice: 3000,
    departureLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Buenos Aires",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Depart from iconic Lima and traverse the South America with visits to Santiago, Buenos Aires, Rio de Janeiro, Cartagena. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1276 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Lima to Santiago",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santiago to Buenos Aires",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Cartagena",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Cartagena to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Patricia Porter",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "immersive.resonance.@velarivoyages.com",
          contactNumber: "+1-539-213-4252",
        },
      },
    ],
    title: "Immersive Resonance of the Amazonian Edge",
    description:
      "Depart from iconic Lima and traverse the South America with visits to Santiago, Buenos Aires, Rio de Janeiro, Cartagena. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.6,
    tags: ["cruise-journey", "long-distance"],
  },
  {
    basePrice: 5139,
    departureLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Depart from Lima on this thoughtfully designed pilgrimage across the South America. Savor coastal charm, cultural treasures, and ocean views with stops at Rio de Janeiro, Santiago, Cartagena.",
      distance: "788 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Santiago",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santiago to Cartagena",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Cartagena to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Carol Collins",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "secluded.adventure.o@velarivoyages.com",
          contactNumber: "+1-516-669-4459",
        },
      },
    ],
    title: "Secluded Adventure of the Rainforest Veins",
    description:
      "Depart from Lima on this thoughtfully designed pilgrimage across the South America. Savor coastal charm, cultural treasures, and ocean views with stops at Rio de Janeiro, Santiago, Cartagena.",
    rating: 5.0,
    tags: ["historical", "glacier-cruise"],
  },
  {
    basePrice: 3755,
    departureLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
        {
          city: "Buenos Aires",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Montevideo",
          country: "Uruguay",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "Escape the everyday with this mythic journey through South America, departing from Lima. You'll visit Cartagena, Buenos Aires, Rio de Janeiro, Montevideo, where every stop is a new adventure.",
      distance: "651 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Lima to Cartagena",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Cartagena to Buenos Aires",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sophia Collins",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "infinite.expedition.@velarivoyages.com",
          contactNumber: "+1-617-247-7264",
        },
      },
    ],
    title: "Infinite Expedition of the Lost Cities & Living Cultures",
    description:
      "Escape the everyday with this mythic journey through South America, departing from Lima. You'll visit Cartagena, Buenos Aires, Rio de Janeiro, Montevideo, where every stop is a new adventure.",
    rating: 4.6,
    tags: ["cruise", "repositioning"],
  },
  {
    basePrice: 3934,
    departureLocation: {
      city: "Lima",
      country: "Peru",
      region: "South America",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    arrivalLocation: {
      city: "Rio de Janeiro",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Lima",
          country: "Peru",
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Set sail from Lima for a voyage like no other. From the picturesque landscapes of Cartagena to the lively ambiance of Santiago, this horizon-kissed cruise will redefine your view of South America.",
      distance: "1339 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Lima to Cartagena",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Cartagena to Santiago",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lerato Graham",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "radiancedrenched.eni@velarivoyages.com",
          contactNumber: "+1-670-690-1558",
        },
      },
    ],
    title: "Radiance-Drenched Enigma of the Incan Echoes",
    description:
      "Set sail from Lima for a voyage like no other. From the picturesque landscapes of Cartagena to the lively ambiance of Santiago, this horizon-kissed cruise will redefine your view of South America.",
    rating: 4.2,
    tags: ["sightseeing", "cruise-journey"],
  },
];
