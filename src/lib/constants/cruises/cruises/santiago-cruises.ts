import { Cruise } from "@/lib/interfaces/services/cruises";

export const santiagoCruises: Cruise[] = [
  {
    basePrice: 5556,
    departureLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
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
          city: "Lima",
          country: "Peru",
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
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Set sail from Santiago for a voyage like no other. From the picturesque landscapes of Rio de Janeiro to the lively ambiance of Buenos Aires, this majestic cruise will redefine your view of South America.",
      distance: "1338 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Buenos Aires",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Lima",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Lima to Cartagena",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Cartagena to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Caroline Russell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "dreamlike.sanctuary.@velarivoyages.com",
          contactNumber: "+1-366-762-7015",
        },
      },
    ],
    title: "Dreamlike Sanctuary of the Lost Cities & Living Cultures",
    description:
      "Set sail from Santiago for a voyage like no other. From the picturesque landscapes of Rio de Janeiro to the lively ambiance of Buenos Aires, this majestic cruise will redefine your view of South America.",
    rating: 4.5,
    tags: ["VIP", "cruise-getaway", "romantic"],
  },
  {
    basePrice: 4158,
    departureLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
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
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this tide-washed quest beginning in Santiago. Visit breathtaking South America locales such as Rio de Janeiro, Lima on this unforgettable itinerary.",
      distance: "987 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Lima",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Lima to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Victoria Graves",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/56.jpg",
        contact: {
          contactEmail: "golden.sanctuary.of.@velarivoyages.com",
          contactNumber: "+1-289-152-1462",
        },
      },
    ],
    title: "Golden Sanctuary of the Pre-Columbian Paths",
    description:
      "Enjoy seamless luxury on this tide-washed quest beginning in Santiago. Visit breathtaking South America locales such as Rio de Janeiro, Lima on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["cruise-holiday", "tropical"],
  },
  {
    basePrice: 2944,
    departureLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
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
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Experience coastal elegance on this renaissance from Santiago, where the journey through South America includes stops in Rio de Janeiro, Lima, each more enchanting than the last.",
      distance: "1311 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Lima",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Lima to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Lawson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "immersive.sanctum.of@velarivoyages.com",
          contactNumber: "+1-814-370-7015",
        },
      },
    ],
    title: "Immersive Sanctum of the Pre-Columbian Paths",
    description:
      "Experience coastal elegance on this renaissance from Santiago, where the journey through South America includes stops in Rio de Janeiro, Lima, each more enchanting than the last.",
    rating: 4.3,
    tags: ["short-getaway", "cruise-ship"],
  },
  {
    basePrice: 7989,
    departureLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
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
          city: "Santiago",
          country: "Chile",
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this transcendent drift departing Santiago. Savor local cuisine and uncover regional beauty from Rio de Janeiro to Buenos Aires.",
      distance: "653 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Buenos Aires",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Montevideo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Montevideo to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Santiago",
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
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Grace Dixon",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "epic.journey.of.the.@velarivoyages.com",
          contactNumber: "+1-556-779-1226",
        },
      },
    ],
    title: "Epic Journey of the Cape Horn Crossings",
    description:
      "Cruise into cultural richness aboard this transcendent drift departing Santiago. Savor local cuisine and uncover regional beauty from Rio de Janeiro to Buenos Aires.",
    rating: 4.8,
    tags: ["VIP", "romantic", "expedition"],
  },
  {
    basePrice: 7889,
    departureLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Lima",
          country: "Peru",
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
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Escape the everyday with this pristine journey through South America, departing from Santiago. You'll visit Lima, Cartagena, where every stop is a new adventure.",
      distance: "1231 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Santiago to Lima",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Lima to Cartagena",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Cartagena to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Amy Carpenter",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "whispering.mystique.@velarivoyages.com",
          contactNumber: "+1-848-876-8866",
        },
      },
    ],
    title: "Whispering Mystique of the Lost Cities & Living Cultures",
    description:
      "Escape the everyday with this pristine journey through South America, departing from Santiago. You'll visit Lima, Cartagena, where every stop is a new adventure.",
    rating: 4.9,
    tags: ["exclusive", "wildlife", "expedition"],
  },
  {
    basePrice: 2026,
    departureLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Lima",
          country: "Peru",
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
          city: "Buenos Aires",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Experience coastal elegance on this currents from Santiago, where the journey through South America includes stops in Lima, Cartagena, Rio de Janeiro, Buenos Aires, each more enchanting than the last.",
      distance: "1477 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Santiago to Lima",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lima to Cartagena",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Cartagena to Rio de Janeiro",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Buenos Aires",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 19",
          end: "Day 20",
          duration: "2 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Maria Chambers",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "enchanting.excursion@velarivoyages.com",
          contactNumber: "+1-250-462-2052",
        },
      },
    ],
    title: "Enchanting Excursion of the Cape Horn Crossings",
    description:
      "Experience coastal elegance on this currents from Santiago, where the journey through South America includes stops in Lima, Cartagena, Rio de Janeiro, Buenos Aires, each more enchanting than the last.",
    rating: 4.2,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 7273,
    departureLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Lima",
          country: "Peru",
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
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "An unforgettable passage awaits as you cruise from Santiago across South America. Dive into history, flavor, and culture with stops including Lima, Rio de Janeiro, Cartagena.",
      distance: "1292 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Santiago to Lima",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Cartagena",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Cartagena to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Lima",
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
          description: "Exploring Cartagena",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kinsley Carpenter",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "extraordinary.lullab@velarivoyages.com",
          contactNumber: "+1-162-453-8505",
        },
      },
    ],
    title: "Extraordinary Lullaby of the Amazonian Edge",
    description:
      "An unforgettable passage awaits as you cruise from Santiago across South America. Dive into history, flavor, and culture with stops including Lima, Rio de Janeiro, Cartagena.",
    rating: 4.5,
    tags: ["cruise-getaway", "cruise-excursion"],
  },
  {
    basePrice: 3195,
    departureLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
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
          city: "Santiago",
          country: "Chile",
          region: "South America",
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
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Set sail from Santiago on this spectacular panorama through the heart of South America. Experience the perfect blend of relaxation and adventure as you explore Cartagena and Rio de Janeiro, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1251 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Santiago to Cartagena",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Cartagena to Rio de Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Santiago",
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
          description: "Exploring Rio de Janeiro",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Rachel Grant",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "gilded.realm.of.the.@velarivoyages.com",
          contactNumber: "+1-507-356-8539",
        },
      },
    ],
    title: "Gilded Realm of the Emerald Coasts",
    description:
      "Set sail from Santiago on this spectacular panorama through the heart of South America. Experience the perfect blend of relaxation and adventure as you explore Cartagena and Rio de Janeiro, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.4,
    tags: ["cultural", "cruise-journey"],
  },
  {
    basePrice: 2069,
    departureLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
      country: "Colombia",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
        {
          city: "Lima",
          country: "Peru",
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
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "Embark on an unforgettable pilgrimage from the vibrant port of Santiago, where you'll discover hidden gems and iconic landmarks across the South America region. With stops at Lima, Montevideo, Cartagena, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1489 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Santiago to Lima",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Montevideo to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Victoria Russell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "alluring.elevation.o@velarivoyages.com",
          contactNumber: "+1-519-246-9776",
        },
      },
    ],
    title: "Alluring Elevation of the Sacred Valleys",
    description:
      "Embark on an unforgettable pilgrimage from the vibrant port of Santiago, where you'll discover hidden gems and iconic landmarks across the South America region. With stops at Lima, Montevideo, Cartagena, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.4,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 4169,
    departureLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      region: "South America",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Santiago",
          country: "Chile",
          region: "South America",
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
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
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
          region: "South America",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this hidden awakening beginning in Santiago. Visit breathtaking South America locales such as Montevideo, Lima, Buenos Aires, Cartagena on this unforgettable itinerary.",
      distance: "1142 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Cartagena to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 18",
          end: "Day 18",
          duration: "1 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Stella Reeves",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "infinite.excursion.o@velarivoyages.com",
          contactNumber: "+1-823-505-3143",
        },
      },
    ],
    title: "Infinite Excursion of the Patagonian Reach",
    description:
      "Enjoy seamless luxury on this hidden awakening beginning in Santiago. Visit breathtaking South America locales such as Montevideo, Lima, Buenos Aires, Cartagena on this unforgettable itinerary.",
    rating: 4.5,
    tags: ["fall-cruise", "seasonal"],
  },
];
