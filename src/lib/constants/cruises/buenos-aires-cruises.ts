import { Cruise } from "@/lib/interfaces/services/cruises";

export const buenosAiresCruises: Cruise[] = [
  {
    basePrice: 1788,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Cartagena",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santiago",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Lima",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this dreamlike mythos departing Buenos Aires. Savor local cuisine and uncover regional beauty from Cartagena to Santiago.",
      distance: "1327 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Cartagena to Santiago",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Santiago to Lima",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Lima to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Douglas Hayes",
        role: "Cruise Specialist",
        languages: ["English", "Quechua", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "starlit.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-821-483-9838",
        },
      },
    ],
    title: "Starlit Voyage of the Melancholy Rhythms",
    description:
      "Cruise into cultural richness aboard this dreamlike mythos departing Buenos Aires. Savor local cuisine and uncover regional beauty from Cartagena to Santiago.",
    rating: 4.2,
    tags: ["long-distance", "seasonal", "general"],
  },
  {
    basePrice: 6586,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Montevideo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cartagena",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Lima",
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
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
      ],
      description:
        "Depart from iconic Buenos Aires and traverse the South America with visits to Montevideo, Cartagena, Lima, Rio de Janeiro. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "942 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Montevideo to Cartagena",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Cartagena to Lima",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Keith Watson",
        role: "Cruise Specialist",
        languages: ["English", "Quechua", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "alluring.excursion.o@velarivoyages.com",
          contactNumber: "+1-792-911-7051",
        },
      },
    ],
    title: "Alluring Excursion of the Paris of South America",
    description:
      "Depart from iconic Buenos Aires and traverse the South America with visits to Montevideo, Cartagena, Lima, Rio de Janeiro. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.9,
    tags: ["cruise-journey", "anniversary-cruise"],
  },
  {
    basePrice: 8195,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Santiago",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Montevideo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Lima",
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
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Buenos Aires. Discover the historical and natural richness of South America as you cruise to spectacular destinations like Santiago, Montevideo, Lima, Rio de Janeiro.",
      distance: "601 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Montevideo",
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
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Randy Reed",
        role: "Cruise Specialist",
        languages: ["English", "Quechua", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "mythic.pulse.of.the.@velarivoyages.com",
          contactNumber: "+1-133-533-5888",
        },
      },
    ],
    title: "Mythic Pulse of the Paris of South America",
    description:
      "A voyage of contrasts awaits from Buenos Aires. Discover the historical and natural richness of South America as you cruise to spectacular destinations like Santiago, Montevideo, Lima, Rio de Janeiro.",
    rating: 4.6,
    tags: ["sightseeing", "historical", "culinary"],
  },
  {
    basePrice: 5878,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Santiago",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cartagena",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Montevideo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your azure journey from Buenos Aires. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Santiago, Cartagena, Montevideo.",
      distance: "963 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Santiago to Cartagena",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Cartagena to Montevideo",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jeremy Hall",
        role: "Cruise Specialist",
        languages: ["English", "Quechua", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "riveting.pulse.of.th@velarivoyages.com",
          contactNumber: "+1-325-381-1221",
        },
      },
    ],
    title: "Riveting Pulse of the Melancholy Rhythms",
    description:
      "Let the spirit of exploration guide your azure journey from Buenos Aires. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Santiago, Cartagena, Montevideo.",
    rating: 4.9,
    tags: ["repositioning", "general"],
  },
  {
    basePrice: 8496,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Cartagena",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Montevideo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
      ],
      description:
        "This inspiring odyssey departs from Buenos Aires, navigating the diverse landscapes and vibrant cities of South America. Must-see stops include Cartagena, Montevideo.",
      distance: "908 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Cartagena to Montevideo",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Anthony Coleman",
        role: "Cruise Specialist",
        languages: ["English", "Quechua", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
        contact: {
          contactEmail: "midnight.frontier.of@velarivoyages.com",
          contactNumber: "+1-841-445-1222",
        },
      },
    ],
    title: "Midnight Frontier of the Sacred Valleys",
    description:
      "This inspiring odyssey departs from Buenos Aires, navigating the diverse landscapes and vibrant cities of South America. Must-see stops include Cartagena, Montevideo.",
    rating: 4.7,
    tags: ["holiday-cruise", "long-distance"],
  },
  {
    basePrice: 8874,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Lima",
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
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Santiago",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Montevideo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Lima",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "An escape like no other begins in Buenos Aires, where your labyrinth launches into the heart of South America. Discover the magic of Santiago, Montevideo, Lima with style and sophistication.",
      distance: "1069 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Montevideo to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Jesse Marshall",
        role: "Cruise Specialist",
        languages: ["English", "Quechua", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "crystalline.awakenin@velarivoyages.com",
          contactNumber: "+1-805-706-6685",
        },
      },
    ],
    title: "Crystalline Awakening of the Riverfront Elegance",
    description:
      "An escape like no other begins in Buenos Aires, where your labyrinth launches into the heart of South America. Discover the magic of Santiago, Montevideo, Lima with style and sophistication.",
    rating: 4.9,
    tags: ["nature"],
  },
  {
    basePrice: 4807,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Lima",
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
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
      ],
      description:
        "Sail from Buenos Aires into a world of wonder. The South America beckons with unforgettable ports like Lima, Rio de Janeiro, where every view is picture-perfect and every moment is priceless.",
      distance: "891 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Lima",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Austin Hudson",
        role: "Cruise Specialist",
        languages: ["English", "Quechua", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "golden.drift.of.the.@velarivoyages.com",
          contactNumber: "+1-616-700-7017",
        },
      },
    ],
    title: "Golden Drift of the Amazonian Edge",
    description:
      "Sail from Buenos Aires into a world of wonder. The South America beckons with unforgettable ports like Lima, Rio de Janeiro, where every view is picture-perfect and every moment is priceless.",
    rating: 4.9,
    tags: ["cruise-line", "cruise-adventure", "expedition"],
  },
  {
    basePrice: 7925,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Montevideo",
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
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Santiago",
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This handpicked oasis begins in Buenos Aires and travels through South America's iconic waterscapes. Discover Santiago, Rio de Janeiro, Montevideo as each day brings new stories and every night offers elegant repose.",
      distance: "880 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
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
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 3",
          end: "Day 4",
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
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carlos Hudson",
        role: "Cruise Specialist",
        languages: ["English", "Quechua", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "riveting.tide.of.the@velarivoyages.com",
          contactNumber: "+1-354-244-2929",
        },
      },
    ],
    title: "Riveting Tide of the Paris of South America",
    description:
      "This handpicked oasis begins in Buenos Aires and travels through South America's iconic waterscapes. Discover Santiago, Rio de Janeiro, Montevideo as each day brings new stories and every night offers elegant repose.",
    rating: 4.8,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 2737,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Cartagena",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santiago",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Montevideo",
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
        "Begin an epic drift from Buenos Aires, where the seas meet culture. Visit the remarkable ports of Cartagena, Santiago, Montevideo, Rio de Janeiro while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "921 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Cartagena to Santiago",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Wei Campbell",
        role: "Cruise Specialist",
        languages: ["English", "Quechua", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "radiancedrenched.cur@velarivoyages.com",
          contactNumber: "+1-593-196-3661",
        },
      },
    ],
    title: "Radiance-Drenched Currents of the Pre-Columbian Paths",
    description:
      "Begin an epic drift from Buenos Aires, where the seas meet culture. Visit the remarkable ports of Cartagena, Santiago, Montevideo, Rio de Janeiro while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.6,
    tags: ["romantic", "nature", "themed-cruise"],
  },
  {
    basePrice: 7966,
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "South America",
      coordinates: {
        latitude: -34.603722,
        longitude: -58.381592,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
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
          city: "Buenos Aires",
          country: "Argentina",
          region: "South America",
          coordinates: {
            latitude: -34.603722,
            longitude: -58.381592,
          },
        },
        {
          city: "Montevideo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Lima",
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Explore a new side of South America with this majestic escape starting in Buenos Aires. Visit charming ports such as Montevideo, Lima, Rio de Janeiro, Cartagena, each offering its own unique rhythm.",
      distance: "1251 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Willie Day",
        role: "Cruise Specialist",
        languages: ["English", "Quechua", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "timeless.panorama.of@velarivoyages.com",
          contactNumber: "+1-317-491-7778",
        },
      },
    ],
    title: "Timeless Panorama of the Melancholy Rhythms",
    description:
      "Explore a new side of South America with this majestic escape starting in Buenos Aires. Visit charming ports such as Montevideo, Lima, Rio de Janeiro, Cartagena, each offering its own unique rhythm.",
    rating: 4.3,
    tags: ["expedition"],
  },
];
