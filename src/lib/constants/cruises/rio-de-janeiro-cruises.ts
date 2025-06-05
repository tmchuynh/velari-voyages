import { Cruise } from "@/lib/interfaces/services/cruises";

export const rioDeJaneiroCruises: Cruise[] = [
  {
    basePrice: 9325,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    arrivalLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
          },
        },
      ],
      description:
        "Begin an epic excursion from Rio De Janeiro, where the seas meet culture. Visit the remarkable ports of Santiago, Montevideo while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "750 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Santiago",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Montevideo to Rio De Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 3",
          end: "Day 3",
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
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thomas Murray",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "unforgettable.serena@velarivoyages.com",
          contactNumber: "+1-762-594-4363",
        },
      },
    ],
    title: "Unforgettable Serenade of the Andean Views",
    description:
      "Begin an epic excursion from Rio De Janeiro, where the seas meet culture. Visit the remarkable ports of Santiago, Montevideo while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.2,
    tags: ["cruise"],
  },
  {
    basePrice: 1206,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
        "Sail away from Rio De Janeiro into the beautiful expanse of South America. Along the way, enjoy rich cultural experiences in Lima, Montevideo, Santiago, Buenos Aires, where history, nature, and cuisine collide.",
      distance: "1034 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Lima",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Montevideo to Santiago",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Santiago to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Matthew Ellis",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "harmonic.elevation.o@velarivoyages.com",
          contactNumber: "+1-480-558-5841",
        },
      },
    ],
    title: "Harmonic Elevation of the Rhythmic Tropics",
    description:
      "Sail away from Rio De Janeiro into the beautiful expanse of South America. Along the way, enjoy rich cultural experiences in Lima, Montevideo, Santiago, Buenos Aires, where history, nature, and cuisine collide.",
    rating: 4.3,
    tags: ["holiday-cruise", "weekend-cruise"],
  },
  {
    basePrice: 6772,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
      ],
      description:
        "A voyage of contrasts awaits from Rio De Janeiro. Discover the historical and natural richness of South America as you cruise to spectacular destinations like Santiago, Lima, Cartagena.",
      distance: "634 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Santiago",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Santiago to Lima",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Lima to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Thabo Graves",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "pearlescent.odyssey.@velarivoyages.com",
          contactNumber: "+1-333-430-7366",
        },
      },
    ],
    title: "Pearlescent Odyssey of the Sun-Sculpted Rhythm",
    description:
      "A voyage of contrasts awaits from Rio De Janeiro. Discover the historical and natural richness of South America as you cruise to spectacular destinations like Santiago, Lima, Cartagena.",
    rating: 4.4,
    tags: ["luxury", "adventure"],
  },
  {
    basePrice: 4802,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    arrivalLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
          },
        },
      ],
      description:
        "Begin your journey in Rio De Janeiro, where tradition meets travel. This immersive zenith reveals the finest of South America, from the beaches of Lima to the streets of Santiago.",
      distance: "600 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Lima",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Lima to Santiago",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Montevideo to Cartagena",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Sailing from Cartagena to Rio De Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Lima",
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
          description: "Exploring Montevideo",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Andrew Hudson",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        contact: {
          contactEmail: "sundrenched.zenith.o@velarivoyages.com",
          contactNumber: "+1-960-448-8116",
        },
      },
    ],
    title: "Sun-Drenched Zenith of the Golden Samba Shore",
    description:
      "Begin your journey in Rio De Janeiro, where tradition meets travel. This immersive zenith reveals the finest of South America, from the beaches of Lima to the streets of Santiago.",
    rating: 4.8,
    tags: ["cruise-ship", "culinary"],
  },
  {
    basePrice: 2343,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
        "Leave stress behind with this curated retreat from Rio De Janeiro. Sail across the best of South America and explore treasures like Montevideo, Buenos Aires, Cartagena with comfort and style.",
      distance: "1438 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Montevideo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Alexander Reeves",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "aweinspiring.pilgrim@velarivoyages.com",
          contactNumber: "+1-695-748-2056",
        },
      },
    ],
    title: "Awe-Inspiring Pilgrimage of the Cape Horn Crossings",
    description:
      "Leave stress behind with this curated retreat from Rio De Janeiro. Sail across the best of South America and explore treasures like Montevideo, Buenos Aires, Cartagena with comfort and style.",
    rating: 4.6,
    tags: ["fall-cruise", "VIP", "glacier-cruise"],
  },
  {
    basePrice: 7012,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          city: "Cartagena",
          country: "Colombia",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "From the lively departure port of Rio De Janeiro, this curated solstice showcases the finest of South America. With visits to Santiago, Buenos Aires, Cartagena, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1013 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Santiago",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Santiago to Buenos Aires",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Buenos Aires",
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
        name: "Sean Holloway",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "radiancedrenched.pil@velarivoyages.com",
          contactNumber: "+1-780-607-1398",
        },
      },
    ],
    title: "Radiance-Drenched Pilgrimage of the Patagonian Reach",
    description:
      "From the lively departure port of Rio De Janeiro, this curated solstice showcases the finest of South America. With visits to Santiago, Buenos Aires, Cartagena, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.2,
    tags: ["cruise-excursion", "cruise-vacation"],
  },
  {
    basePrice: 4554,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    arrivalLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
          },
        },
      ],
      description:
        "Launch into adventure from Rio De Janeiro and sail deep into the heart of the South America. With ports of call like Montevideo, Lima, Buenos Aires, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "619 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio De Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carlos Gardner",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "epic.whisper.of.the.@velarivoyages.com",
          contactNumber: "+1-813-861-8350",
        },
      },
    ],
    title: "Epic Whisper of the Patagonian Reach",
    description:
      "Launch into adventure from Rio De Janeiro and sail deep into the heart of the South America. With ports of call like Montevideo, Lima, Buenos Aires, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.9,
    tags: ["wellness", "sightseeing"],
  },
  {
    basePrice: 2066,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Leave stress behind with this curated reflection from Rio De Janeiro. Sail across the best of South America and explore treasures like Lima, Buenos Aires, Cartagena, Santiago with comfort and style.",
      distance: "1061 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Lima",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Cartagena to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
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
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samuel Payne",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "heavenly.zenith.of.t@velarivoyages.com",
          contactNumber: "+1-327-659-8000",
        },
      },
    ],
    title: "Heavenly Zenith of the Golden Samba Shore",
    description:
      "Leave stress behind with this curated reflection from Rio De Janeiro. Sail across the best of South America and explore treasures like Lima, Buenos Aires, Cartagena, Santiago with comfort and style.",
    rating: 4.7,
    tags: ["relaxation", "historical", "long-distance"],
  },
  {
    basePrice: 4611,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    arrivalLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
          },
        },
      ],
      description:
        "Embark on an unforgettable passage from the vibrant port of Rio De Janeiro, where you'll discover hidden gems and iconic landmarks across the South America region. With stops at Cartagena, Montevideo, Santiago, Buenos Aires, this journey combines cultural immersion with breathtaking scenery.",
      distance: "629 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Cartagena",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Cartagena to Montevideo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Montevideo to Santiago",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Santiago to Buenos Aires",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio De Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Cartagena",
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
          description: "Exploring Santiago",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Raymond Graham",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/61.jpg",
        contact: {
          contactEmail: "harmonic.tide.of.the@velarivoyages.com",
          contactNumber: "+1-704-553-8764",
        },
      },
    ],
    title: "Harmonic Tide of the Carnival Capital",
    description:
      "Embark on an unforgettable passage from the vibrant port of Rio De Janeiro, where you'll discover hidden gems and iconic landmarks across the South America region. With stops at Cartagena, Montevideo, Santiago, Buenos Aires, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.5,
    tags: ["cruise-ship", "short-getaway"],
  },
  {
    basePrice: 5049,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    arrivalLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
          },
        },
      ],
      description:
        "Let this awe-inspiring voyage redefine your idea of travel. From Rio De Janeiro, explore the South America in luxurious comfort, stopping at Cartagena, Montevideo, Buenos Aires where every port offers a new chapter.",
      distance: "586 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Cartagena to Montevideo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio De Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
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
          description: "Exploring Montevideo",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kevin Keller",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "heavenly.enigma.of.t@velarivoyages.com",
          contactNumber: "+1-226-550-3994",
        },
      },
    ],
    title: "Heavenly Enigma of the Cape Horn Crossings",
    description:
      "Let this awe-inspiring voyage redefine your idea of travel. From Rio De Janeiro, explore the South America in luxurious comfort, stopping at Cartagena, Montevideo, Buenos Aires where every port offers a new chapter.",
    rating: 4.2,
    tags: ["seasonal", "cruise-ship", "wellness"],
  },
  {
    basePrice: 9282,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    arrivalLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
          },
        },
      ],
      description:
        "Join us in Rio De Janeiro for a frontier of a lifetime. Sail across the serene waters of South America, stopping at ports like Montevideo, Cartagena where timeless traditions meet modern luxuries.",
      distance: "648 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Montevideo to Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Cartagena to Rio De Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Montevideo",
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
          description: "Exploring Rio De Janeiro",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Adam West",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "lavish.reflection.of@velarivoyages.com",
          contactNumber: "+1-973-470-6602",
        },
      },
    ],
    title: "Lavish Reflection of the Tide of Passion",
    description:
      "Join us in Rio De Janeiro for a frontier of a lifetime. Sail across the serene waters of South America, stopping at ports like Montevideo, Cartagena where timeless traditions meet modern luxuries.",
    rating: 4.8,
    tags: ["fall-cruise", "culinary"],
  },
  {
    basePrice: 2129,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          city: "Buenos Aires",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Savor each moment of this midnight escape through South America, starting in Rio De Janeiro. Visit renowned locations like Montevideo, Buenos Aires, where adventure and relaxation intertwine.",
      distance: "1321 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Wei Crawford",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
        contact: {
          contactEmail: "heavenly.saga.of.the@velarivoyages.com",
          contactNumber: "+1-529-861-1376",
        },
      },
    ],
    title: "Heavenly Saga of the Golden Samba Shore",
    description:
      "Savor each moment of this midnight escape through South America, starting in Rio De Janeiro. Visit renowned locations like Montevideo, Buenos Aires, where adventure and relaxation intertwine.",
    rating: 4.7,
    tags: ["cruise-experience", "glacier-cruise"],
  },
  {
    basePrice: 4917,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
        "Leave stress behind with this curated oasis from Rio De Janeiro. Sail across the best of South America and explore treasures like Cartagena, Lima, Santiago, Buenos Aires with comfort and style.",
      distance: "1318 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Cartagena to Lima",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Lima to Santiago",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Santiago to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gerald Dixon",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "whispering.zenith.of@velarivoyages.com",
          contactNumber: "+1-151-702-3481",
        },
      },
    ],
    title: "Whispering Zenith of the Carnival Capital",
    description:
      "Leave stress behind with this curated oasis from Rio De Janeiro. Sail across the best of South America and explore treasures like Cartagena, Lima, Santiago, Buenos Aires with comfort and style.",
    rating: 4.5,
    tags: ["adventure", "seasonal"],
  },
  {
    basePrice: 7844,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
        "Let this crystalline voyage redefine your idea of travel. From Rio De Janeiro, explore the South America in luxurious comfort, stopping at Buenos Aires, Lima, Santiago, Montevideo where every port offers a new chapter.",
      distance: "514 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Buenos Aires",
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
          description: "Sailing from Lima to Santiago",
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
          description: "Exploring Rio De Janeiro",
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
        name: "Billy Crawford",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "celestial.mystique.o@velarivoyages.com",
          contactNumber: "+1-766-125-9814",
        },
      },
    ],
    title: "Celestial Mystique of the Carnival Capital",
    description:
      "Let this crystalline voyage redefine your idea of travel. From Rio De Janeiro, explore the South America in luxurious comfort, stopping at Buenos Aires, Lima, Santiago, Montevideo where every port offers a new chapter.",
    rating: 4.8,
    tags: ["cruise-getaway", "cruise-line", "seasonal"],
  },
  {
    basePrice: 7535,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Experience coastal elegance on this exploration from Rio De Janeiro, where the journey through South America includes stops in Cartagena, Buenos Aires, Santiago, each more enchanting than the last.",
      distance: "1176 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Cartagena",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Cartagena to Buenos Aires",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Douglas",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French", "Haitian", "Quechua"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "secluded.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-540-754-3810",
        },
      },
    ],
    title: "Secluded Mirage of the Rhythmic Tropics",
    description:
      "Experience coastal elegance on this exploration from Rio De Janeiro, where the journey through South America includes stops in Cartagena, Buenos Aires, Santiago, each more enchanting than the last.",
    rating: 4.5,
    tags: ["cruise-getaway", "repositioning", "general"],
  },
  {
    basePrice: 5956,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          city: "Lima",
          country: "Peru",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Embark from Rio De Janeiro and traverse the South America in style. Whether it’s the energy of Montevideo or the calm of Santiago, each destination reveals a new side of paradise.",
      distance: "1156 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Montevideo to Santiago",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Santiago to Buenos Aires",
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
          description: "Exploring Rio De Janeiro",
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
          description: "Exploring Santiago",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
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
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Isabella Reed",
        role: "Cruise Specialist",
        languages: ["English", "Aymara", "French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "enchanting.reflectio@velarivoyages.com",
          contactNumber: "+1-567-336-6668",
        },
      },
    ],
    title: "Enchanting Reflection of the Carnival Capital",
    description:
      "Embark from Rio De Janeiro and traverse the South America in style. Whether it’s the energy of Montevideo or the calm of Santiago, each destination reveals a new side of paradise.",
    rating: 4.6,
    tags: ["holiday-cruise", "expedition", "long-distance"],
  },
  {
    basePrice: 8868,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    arrivalLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          coordinates: {
            latitude: -34.9011,
            longitude: -56.1645,
          },
        },
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Rio De Janeiro. This infinite through the South America unveils stunning stops including Cartagena, Lima, Montevideo, all with first-class service.",
      distance: "1027 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Cartagena to Lima",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Montevideo to Rio De Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
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
          description: "Exploring Lima",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Julie Montgomery",
        role: "Cruise Specialist",
        languages: ["English", "Aymara", "French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "tidewashed.legacy.of@velarivoyages.com",
          contactNumber: "+1-435-807-2358",
        },
      },
    ],
    title: "Tide-Washed Legacy of the Pre-Columbian Paths",
    description:
      "Step into a world of elegance and exploration from Rio De Janeiro. This infinite through the South America unveils stunning stops including Cartagena, Lima, Montevideo, all with first-class service.",
    rating: 4.8,
    tags: ["cruise-journey"],
  },
  {
    basePrice: 7003,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
      ],
      description:
        "Begin a captivating enigma through the South America, departing Rio De Janeiro. With visits to Lima, Buenos Aires, each day brings a new adventure and deeper connection to the region.",
      distance: "574 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Lima",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lima to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
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
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Amina Foster",
        role: "Cruise Specialist",
        languages: ["English", "Aymara", "French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/91.jpg",
        contact: {
          contactEmail: "sublime.pilgrimage.o@velarivoyages.com",
          contactNumber: "+1-712-668-4065",
        },
      },
    ],
    title: "Sublime Pilgrimage of the Mountain & Myth",
    description:
      "Begin a captivating enigma through the South America, departing Rio De Janeiro. With visits to Lima, Buenos Aires, each day brings a new adventure and deeper connection to the region.",
    rating: 4.4,
    tags: ["cruise-getaway", "relaxation"],
  },
  {
    basePrice: 3967,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
      ],
      description:
        "Embark from Rio De Janeiro and traverse the South America in style. Whether it’s the energy of Buenos Aires or the calm of Lima, each destination reveals a new side of paradise.",
      distance: "631 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Buenos Aires",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rio De Janeiro",
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
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Melissa Fletcher",
        role: "Cruise Specialist",
        languages: ["English", "Aymara", "French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "charming.saga.of.the@velarivoyages.com",
          contactNumber: "+1-440-941-5573",
        },
      },
    ],
    title: "Charming Saga of the Amazonian Edge",
    description:
      "Embark from Rio De Janeiro and traverse the South America in style. Whether it’s the energy of Buenos Aires or the calm of Lima, each destination reveals a new side of paradise.",
    rating: 4.4,
    tags: ["culinary", "tropical"],
  },
  {
    basePrice: 4363,
    departureLocation: {
      city: "Rio De Janeiro",
      country: "Brazil",
      region: "South America",
      coordinates: {
        latitude: -22.9068,
        longitude: -43.1729,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Rio De Janeiro",
          country: "Brazil",
          region: "South America",
          coordinates: {
            latitude: -22.9068,
            longitude: -43.1729,
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
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Let the waves lead you from Rio De Janeiro on this timeless embrace. Traverse the iconic waters of South America and discover the beauty of Buenos Aires, Cartagena, Lima, Santiago.",
      distance: "1452 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Buenos Aires",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
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
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Lima to Santiago",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
        {
          start: "Day 3",
          end: "Day 3",
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
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Angela Dixon",
        role: "Cruise Specialist",
        languages: ["English", "Aymara", "French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "crystalline.tranquil@velarivoyages.com",
          contactNumber: "+1-394-624-5771",
        },
      },
    ],
    title: "Crystalline Tranquility of the Carnival Capital",
    description:
      "Let the waves lead you from Rio De Janeiro on this timeless embrace. Traverse the iconic waters of South America and discover the beauty of Buenos Aires, Cartagena, Lima, Santiago.",
    rating: 4.3,
    tags: ["sightseeing"],
  },
];
