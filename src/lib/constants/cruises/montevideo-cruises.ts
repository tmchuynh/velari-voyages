import { Cruise } from "@/lib/interfaces/services/cruises";

export const montevideoCruises: Cruise[] = [
  {
    basePrice: 1897,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
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
      ],
      description:
        "Launch into adventure from Montevideo and sail deep into the heart of the South America. With ports of call like Lima, Buenos Aires, Rio de Janeiro, Santiago, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "624 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
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
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ronald Nash",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
        contact: {
          contactEmail: "exquisite.excursion.@velarivoyages.com",
          contactNumber: "+1-587-730-3279",
        },
      },
    ],
    title: "Exquisite Excursion of the Rhythmic Tropics",
    description:
      "Launch into adventure from Montevideo and sail deep into the heart of the South America. With ports of call like Lima, Buenos Aires, Rio de Janeiro, Santiago, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 5.0,
    tags: ["cruise-experience", "cruise-adventure"],
  },
  {
    basePrice: 3201,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
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
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
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
          city: "Rio de Janeiro",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Board in Montevideo for a hand-crafted drift through the breathtaking South America. Highlights include sun-drenched beaches, historic ports, and immersive culture in Lima, Buenos Aires, Cartagena, Rio de Janeiro.",
      distance: "1378 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Cartagena to Rio de Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Carl Hunter",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/62.jpg",
        contact: {
          contactEmail: "pearlescent.resonanc@velarivoyages.com",
          contactNumber: "+1-652-587-1577",
        },
      },
    ],
    title: "Pearlescent Resonance of the Emerald Coasts",
    description:
      "Board in Montevideo for a hand-crafted drift through the breathtaking South America. Highlights include sun-drenched beaches, historic ports, and immersive culture in Lima, Buenos Aires, Cartagena, Rio de Janeiro.",
    rating: 4.4,
    tags: ["cruise-experience", "tropical"],
  },
  {
    basePrice: 2274,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
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
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
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
      ],
      description:
        "Leave ordinary behind as you sail from Montevideo across the captivating South America. Discover the distinctive personality of each destination, from Buenos Aires, Rio de Janeiro.",
      distance: "1245 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Lawrence Griffin",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "exquisite.reunion.of@velarivoyages.com",
          contactNumber: "+1-305-260-4916",
        },
      },
    ],
    title: "Exquisite Reunion of the Carnival Currents",
    description:
      "Leave ordinary behind as you sail from Montevideo across the captivating South America. Discover the distinctive personality of each destination, from Buenos Aires, Rio de Janeiro.",
    rating: 4.0,
    tags: ["fall-cruise", "relaxation"],
  },
  {
    basePrice: 7640,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
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
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "Embark from Montevideo and traverse the South America in style. Whether it’s the energy of Rio de Janeiro or the calm of Cartagena, each destination reveals a new side of paradise.",
      distance: "1075 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Cartagena to Buenos Aires",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Roy Sutton",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        contact: {
          contactEmail: "legendary.odyssey.of@velarivoyages.com",
          contactNumber: "+1-290-172-7823",
        },
      },
    ],
    title: "Legendary Odyssey of the Incan Echoes",
    description:
      "Embark from Montevideo and traverse the South America in style. Whether it’s the energy of Rio de Janeiro or the calm of Cartagena, each destination reveals a new side of paradise.",
    rating: 4.6,
    tags: ["long-distance"],
  },
  {
    basePrice: 8263,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Santiago",
      country: "Chile",
      coordinates: {
        latitude: -33.4489,
        longitude: -70.6693,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
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
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Embark on an unforgettable wanderlust from the vibrant port of Montevideo, where you'll discover hidden gems and iconic landmarks across the South America region. With stops at Rio de Janeiro, Santiago, this journey combines cultural immersion with breathtaking scenery.",
      distance: "610 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
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
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Aiden Fisher",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/85.jpg",
        contact: {
          contactEmail: "aweinspiring.mythos.@velarivoyages.com",
          contactNumber: "+1-883-782-5792",
        },
      },
    ],
    title: "Awe-Inspiring Mythos of the Patagonian Reach",
    description:
      "Embark on an unforgettable wanderlust from the vibrant port of Montevideo, where you'll discover hidden gems and iconic landmarks across the South America region. With stops at Rio de Janeiro, Santiago, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.5,
    tags: ["weekend-cruise", "short-getaway"],
  },
  {
    basePrice: 6664,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
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
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "Start in the vibrant city of Montevideo and venture into the iconic South America. Discover authentic local cultures, cuisine, and coastal wonders in Santiago, Lima, Cartagena.",
      distance: "762 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Montevideo to Santiago",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santiago to Lima",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Lima to Cartagena",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Cartagena to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montevideo",
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
          description: "Exploring Lima",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Justin Coleman",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "tidewashed.quest.of.@velarivoyages.com",
          contactNumber: "+1-943-247-2991",
        },
      },
    ],
    title: "Tide-Washed Quest of the Andean Views",
    description:
      "Start in the vibrant city of Montevideo and venture into the iconic South America. Discover authentic local cultures, cuisine, and coastal wonders in Santiago, Lima, Cartagena.",
    rating: 4.9,
    tags: ["themed-cruise", "romantic", "exclusive"],
  },
  {
    basePrice: 8551,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
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
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
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
      ],
      description:
        "Depart from iconic Montevideo and traverse the South America with visits to Buenos Aires, Cartagena. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "712 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Oliver Carpenter",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "infinite.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-461-381-7788",
        },
      },
    ],
    title: "Infinite Mythos of the Sacred Valleys",
    description:
      "Depart from iconic Montevideo and traverse the South America with visits to Buenos Aires, Cartagena. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.9,
    tags: ["cruise-excursion", "adventure"],
  },
  {
    basePrice: 6437,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
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
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "Explore a new side of South America with this golden quest starting in Montevideo. Visit charming ports such as Buenos Aires, Cartagena, Lima, each offering its own unique rhythm.",
      distance: "804 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Cartagena to Lima",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Lima to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Harry Crawford",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "riveting.requiem.of.@velarivoyages.com",
          contactNumber: "+1-776-321-3984",
        },
      },
    ],
    title: "Riveting Requiem of the Incan Echoes",
    description:
      "Explore a new side of South America with this golden quest starting in Montevideo. Visit charming ports such as Buenos Aires, Cartagena, Lima, each offering its own unique rhythm.",
    rating: 4.4,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 8969,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Buenos Aires",
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
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
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
      ],
      description:
        "Explore a new side of South America with this forbidden saga starting in Montevideo. Visit charming ports such as Cartagena, Santiago, Buenos Aires, each offering its own unique rhythm.",
      distance: "1030 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Montevideo to Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Cartagena to Santiago",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Santiago to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Rajesh Hamilton",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "epic.voyage.of.the.r@velarivoyages.com",
          contactNumber: "+1-507-485-5056",
        },
      },
    ],
    title: "Epic Voyage of the Rainforest Veins",
    description:
      "Explore a new side of South America with this forbidden saga starting in Montevideo. Visit charming ports such as Cartagena, Santiago, Buenos Aires, each offering its own unique rhythm.",
    rating: 4.3,
    tags: ["wildlife", "short-getaway"],
  },
  {
    basePrice: 5147,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
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
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "Join us in Montevideo for a adventure of a lifetime. Sail across the serene waters of South America, stopping at ports like Buenos Aires, Rio de Janeiro, Lima where timeless traditions meet modern luxuries.",
      distance: "899 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Lima",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Lima to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Roger Montgomery",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "hidden.sanctum.of.th@velarivoyages.com",
          contactNumber: "+1-225-384-7385",
        },
      },
    ],
    title: "Hidden Sanctum of the Southern Horizons",
    description:
      "Join us in Montevideo for a adventure of a lifetime. Sail across the serene waters of South America, stopping at ports like Buenos Aires, Rio de Janeiro, Lima where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["cruise-excursion", "relaxation"],
  },
  {
    basePrice: 2969,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      coordinates: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
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
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Escape the everyday with this secret journey through South America, departing from Montevideo. You'll visit Santiago, Lima, where every stop is a new adventure.",
      distance: "763 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Montevideo to Santiago",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Santiago to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Nathan Hawkins",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "sundrenched.enigma.o@velarivoyages.com",
          contactNumber: "+1-473-506-5239",
        },
      },
    ],
    title: "Sun-Drenched Enigma of the Patagonian Reach",
    description:
      "Escape the everyday with this secret journey through South America, departing from Montevideo. You'll visit Santiago, Lima, where every stop is a new adventure.",
    rating: 4.6,
    tags: ["glacier-cruise", "VIP", "historical"],
  },
  {
    basePrice: 5819,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
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
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
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
      ],
      description:
        "Embark on an unforgettable oasis from the vibrant port of Montevideo, where you'll discover hidden gems and iconic landmarks across the South America region. With stops at Buenos Aires, Cartagena, this journey combines cultural immersion with breathtaking scenery.",
      distance: "926 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thomas Spencer",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
        contact: {
          contactEmail: "starlit.infinite.of.@velarivoyages.com",
          contactNumber: "+1-238-337-4803",
        },
      },
    ],
    title: "Starlit Infinite of the Cape Horn Crossings",
    description:
      "Embark on an unforgettable oasis from the vibrant port of Montevideo, where you'll discover hidden gems and iconic landmarks across the South America region. With stops at Buenos Aires, Cartagena, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.3,
    tags: ["repositioning", "historical"],
  },
  {
    basePrice: 9511,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
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
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "Start in the vibrant city of Montevideo and venture into the iconic South America. Discover authentic local cultures, cuisine, and coastal wonders in Lima, Santiago, Rio de Janeiro.",
      distance: "566 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Lima to Santiago",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Peter Holloway",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "floating.quest.of.th@velarivoyages.com",
          contactNumber: "+1-581-524-1070",
        },
      },
    ],
    title: "Floating Quest of the Patagonian Reach",
    description:
      "Start in the vibrant city of Montevideo and venture into the iconic South America. Discover authentic local cultures, cuisine, and coastal wonders in Lima, Santiago, Rio de Janeiro.",
    rating: 4.7,
    tags: ["VIP", "themed-cruise", "cruise-holiday"],
  },
  {
    basePrice: 8415,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
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
      ],
      description:
        "Let the waves lead you from Montevideo on this infinite odyssey. Traverse the iconic waters of South America and discover the beauty of Santiago, Buenos Aires, Rio de Janeiro, Cartagena.",
      distance: "946 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montevideo to Santiago",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Santiago to Buenos Aires",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 3",
          end: "Day 3",
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
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mateo Knight",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/98.jpg",
        contact: {
          contactEmail: "refined.wanderlust.o@velarivoyages.com",
          contactNumber: "+1-215-498-8206",
        },
      },
    ],
    title: "Refined Wanderlust of the Rhythmic Tropics",
    description:
      "Let the waves lead you from Montevideo on this infinite odyssey. Traverse the iconic waters of South America and discover the beauty of Santiago, Buenos Aires, Rio de Janeiro, Cartagena.",
    rating: 4.2,
    tags: ["short-getaway", "cruise-vacation"],
  },
  {
    basePrice: 5600,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
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
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
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
      ],
      description:
        "Launch into adventure from Montevideo and sail deep into the heart of the South America. With ports of call like Rio de Janeiro, Buenos Aires, Lima, Cartagena, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1348 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Buenos Aires",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Lima",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Lima to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
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
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jack Montgomery",
        role: "Loyalty Program Representative",
        languages: ["English", "French", "Quechua", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "alluring.tranquility@velarivoyages.com",
          contactNumber: "+1-458-583-4432",
        },
      },
    ],
    title: "Alluring Tranquility of the Samba Shores",
    description:
      "Launch into adventure from Montevideo and sail deep into the heart of the South America. With ports of call like Rio de Janeiro, Buenos Aires, Lima, Cartagena, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.3,
    tags: ["cultural"],
  },
  {
    basePrice: 2153,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
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
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "Explore a new side of South America with this luminous odyssey starting in Montevideo. Visit charming ports such as Lima, Santiago, Buenos Aires, each offering its own unique rhythm.",
      distance: "741 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Lima to Santiago",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Santiago to Buenos Aires",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Virginia Cooper",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "secret.elevation.of.@velarivoyages.com",
          contactNumber: "+1-486-729-4485",
        },
      },
    ],
    title: "Secret Elevation of the Sacred Valleys",
    description:
      "Explore a new side of South America with this luminous odyssey starting in Montevideo. Visit charming ports such as Lima, Santiago, Buenos Aires, each offering its own unique rhythm.",
    rating: 4.9,
    tags: ["culinary"],
  },
  {
    basePrice: 9561,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
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
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "Experience coastal elegance on this lullaby from Montevideo, where the journey through South America includes stops in Santiago, Rio de Janeiro, each more enchanting than the last.",
      distance: "880 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Montevideo to Santiago",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Allison Chambers",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "infinite.exploration@velarivoyages.com",
          contactNumber: "+1-182-115-9300",
        },
      },
    ],
    title: "Infinite Exploration of the Pre-Columbian Paths",
    description:
      "Experience coastal elegance on this lullaby from Montevideo, where the journey through South America includes stops in Santiago, Rio de Janeiro, each more enchanting than the last.",
    rating: 4.5,
    tags: ["tropical", "cruise-line", "wellness"],
  },
  {
    basePrice: 2109,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
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
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "An unforgettable elevation awaits as you cruise from Montevideo across South America. Dive into history, flavor, and culture with stops including Lima, Rio de Janeiro.",
      distance: "820 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Claire Porter",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/49.jpg",
        contact: {
          contactEmail: "crystalline.odyssey.@velarivoyages.com",
          contactNumber: "+1-791-501-3227",
        },
      },
    ],
    title: "Crystalline Odyssey of the Rhythmic Tropics",
    description:
      "An unforgettable elevation awaits as you cruise from Montevideo across South America. Dive into history, flavor, and culture with stops including Lima, Rio de Janeiro.",
    rating: 4.7,
    tags: ["themed-cruise", "glacier-cruise"],
  },
  {
    basePrice: 1680,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
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
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
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
      ],
      description:
        "Your journey begins in Montevideo, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Buenos Aires to the historic streets of Lima, each stop in the South America will leave a lasting impression.",
      distance: "844 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Lima",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Lima to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Hudson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "horizonkissed.curren@velarivoyages.com",
          contactNumber: "+1-450-267-1629",
        },
      },
    ],
    title: "Horizon-Kissed Currents of the Southern Horizons",
    description:
      "Your journey begins in Montevideo, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Buenos Aires to the historic streets of Lima, each stop in the South America will leave a lasting impression.",
    rating: 4.2,
    tags: ["family-friendly", "themed-cruise", "adventure"],
  },
  {
    basePrice: 5167,
    departureLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      region: "South America",
      coordinates: {
        latitude: -34.9011,
        longitude: -56.1645,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Montevideo",
          country: "Uruguay",
          region: "South America",
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
          region: "South America",
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this pristine quest departing Montevideo. Savor local cuisine and uncover regional beauty from Cartagena to Buenos Aires.",
      distance: "1331 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Montevideo to Cartagena",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Cartagena to Buenos Aires",
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
          description: "Sailing from Rio de Janeiro to Santiago",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Santiago to Montevideo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Cartagena",
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
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Grace Clark",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "charming.frontier.of@velarivoyages.com",
          contactNumber: "+1-680-587-8606",
        },
      },
    ],
    title: "Charming Frontier of the Incan Echoes",
    description:
      "Cruise into cultural richness aboard this pristine quest departing Montevideo. Savor local cuisine and uncover regional beauty from Cartagena to Buenos Aires.",
    rating: 4.2,
    tags: ["glacier-cruise", "wildlife"],
  },
];
