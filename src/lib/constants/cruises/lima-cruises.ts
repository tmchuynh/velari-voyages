import { Cruise } from "@/lib/interfaces/services/cruises";

export const limaCruises: Cruise[] = [
  {
    basePrice: 1527,
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
          city: "Santiago",
          country: "Chile",
          coordinates: {
            latitude: -33.4489,
            longitude: -70.6693,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this celestial infinite beginning in Lima. Visit breathtaking South America locales such as Montevideo, Santiago on this unforgettable itinerary.",
      distance: "935 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Montevideo to Santiago",
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
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Steven Wells",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/25.jpg",
        contact: {
          contactEmail: "floating.retreat.of.@velarivoyages.com",
          contactNumber: "+1-279-947-8179",
        },
      },
    ],
    title: "Floating Retreat of the Carnival Currents",
    description:
      "Enjoy seamless luxury on this celestial infinite beginning in Lima. Visit breathtaking South America locales such as Montevideo, Santiago on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 6326,
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
    category: "expedition",
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
      ],
      description:
        "Sail away from Lima into the beautiful expanse of South America. Along the way, enjoy rich cultural experiences in Buenos Aires, Montevideo, where history, nature, and cuisine collide.",
      distance: "1100 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Montevideo",
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
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "John Porter",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
        contact: {
          contactEmail: "oceanic.frontier.of.@velarivoyages.com",
          contactNumber: "+1-360-483-1412",
        },
      },
    ],
    title: "Oceanic Frontier of the Amazonian Edge",
    description:
      "Sail away from Lima into the beautiful expanse of South America. Along the way, enjoy rich cultural experiences in Buenos Aires, Montevideo, where history, nature, and cuisine collide.",
    rating: 4.9,
    tags: ["cruise-getaway", "tropical", "cruise-journey"],
  },
  {
    basePrice: 1980,
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
    category: "premium-luxury",
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
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Step aboard in Lima and begin a timeless journey through the scenic South America. From historic cities to coastal hideaways like Montevideo, Buenos Aires, Cartagena, every day is unforgettable.",
      distance: "974 nautical miles",
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
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Montevideo to Buenos Aires",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
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
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Cartagena",
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
        name: "Larry Holloway",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "whispering.tranquili@velarivoyages.com",
          contactNumber: "+1-136-368-5911",
        },
      },
    ],
    title: "Whispering Tranquility of the Sacred Valleys",
    description:
      "Step aboard in Lima and begin a timeless journey through the scenic South America. From historic cities to coastal hideaways like Montevideo, Buenos Aires, Cartagena, every day is unforgettable.",
    rating: 4.7,
    tags: ["family-friendly"],
  },
  {
    basePrice: 6458,
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
    category: "premium",
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
        "Set course from Lima for an inspiring heavenly journey across South America. Whether exploring ancient ruins in Rio de Janeiro or soaking up coastal views in Buenos Aires, every day offers a perfect mix of discovery and relaxation.",
      distance: "629 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Buenos Aires",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Lima",
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
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Arthur Cooper",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "crystalline.drift.of@velarivoyages.com",
          contactNumber: "+1-848-261-7613",
        },
      },
    ],
    title: "Crystalline Drift of the Amazonian Edge",
    description:
      "Set course from Lima for an inspiring heavenly journey across South America. Whether exploring ancient ruins in Rio de Janeiro or soaking up coastal views in Buenos Aires, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.4,
    tags: ["VIP", "culinary", "holiday-cruise"],
  },
  {
    basePrice: 5559,
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
      city: "Buenos Aires",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
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
      ],
      description:
        "Depart from the iconic port of Lima and sail through the enchanting South America. Explore vibrant destinations like Montevideo, Rio de Janeiro, Buenos Aires, each offering its own unique charm and local flair.",
      distance: "958 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
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
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Marcus Grant",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/96.jpg",
        contact: {
          contactEmail: "panoramic.whisper.of@velarivoyages.com",
          contactNumber: "+1-825-969-5643",
        },
      },
    ],
    title: "Panoramic Whisper of the Andean Views",
    description:
      "Depart from the iconic port of Lima and sail through the enchanting South America. Explore vibrant destinations like Montevideo, Rio de Janeiro, Buenos Aires, each offering its own unique charm and local flair.",
    rating: 4.6,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 6379,
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
    hasPopularDestination: false,
    category: "premium",
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
      ],
      description:
        "Explore a new side of South America with this luxurious odyssey starting in Lima. Visit charming ports such as Montevideo, Rio de Janeiro, each offering its own unique rhythm.",
      distance: "584 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
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
          description: "Exploring Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Nathan Stewart",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "enchanting.requiem.o@velarivoyages.com",
          contactNumber: "+1-141-469-6544",
        },
      },
    ],
    title: "Enchanting Requiem of the Cape Horn Crossings",
    description:
      "Explore a new side of South America with this luxurious odyssey starting in Lima. Visit charming ports such as Montevideo, Rio de Janeiro, each offering its own unique rhythm.",
    rating: 4.9,
    tags: ["seasonal"],
  },
  {
    basePrice: 9721,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
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
      ],
      description:
        "Experience coastal elegance on this enigma from Lima, where the journey through South America includes stops in Cartagena, Rio de Janeiro, each more enchanting than the last.",
      distance: "849 nautical miles",
      totalDuration: "7 days",
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
          description: "Sailing from Cartagena to Rio de Janeiro",
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
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Zachary Reeves",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "transcendent.pilgrim@velarivoyages.com",
          contactNumber: "+1-135-726-4646",
        },
      },
    ],
    title: "Transcendent Pilgrimage of the Andean Views",
    description:
      "Experience coastal elegance on this enigma from Lima, where the journey through South America includes stops in Cartagena, Rio de Janeiro, each more enchanting than the last.",
    rating: 4.4,
    tags: ["cruise-adventure", "long-distance", "cruise"],
  },
  {
    basePrice: 3473,
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
    category: "premium",
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
        "Experience coastal elegance on this whisper from Lima, where the journey through South America includes stops in Buenos Aires, Rio de Janeiro, Cartagena, Montevideo, each more enchanting than the last.",
      distance: "1470 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Cartagena",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Cartagena to Montevideo",
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
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Keith Murray",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "radiancedrenched.ody@velarivoyages.com",
          contactNumber: "+1-419-347-6464",
        },
      },
    ],
    title: "Radiance-Drenched Odyssey of the Rainforest Veins",
    description:
      "Experience coastal elegance on this whisper from Lima, where the journey through South America includes stops in Buenos Aires, Rio de Janeiro, Cartagena, Montevideo, each more enchanting than the last.",
    rating: 4.5,
    tags: ["anniversary-cruise", "expedition", "romantic"],
  },
  {
    basePrice: 1275,
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
    category: "expedition",
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
        "Begin a captivating tide through the South America, departing Lima. With visits to Montevideo, Rio de Janeiro, each day brings a new adventure and deeper connection to the region.",
      distance: "861 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Lima",
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
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Eric Marshall",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/62.jpg",
        contact: {
          contactEmail: "tranquil.reflection.@velarivoyages.com",
          contactNumber: "+1-529-754-7194",
        },
      },
    ],
    title: "Tranquil Reflection of the Lost Cities & Living Cultures",
    description:
      "Begin a captivating tide through the South America, departing Lima. With visits to Montevideo, Rio de Janeiro, each day brings a new adventure and deeper connection to the region.",
    rating: 4.2,
    tags: ["tropical", "relaxation", "weekend-cruise"],
  },
  {
    basePrice: 7653,
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
          city: "Buenos Aires",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the waves lead you from Lima on this opulent zenith. Traverse the iconic waters of South America and discover the beauty of Montevideo, Buenos Aires.",
      distance: "1410 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Montevideo to Buenos Aires",
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
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Keith Warren",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/91.jpg",
        contact: {
          contactEmail: "sundrenched.adventur@velarivoyages.com",
          contactNumber: "+1-196-670-4306",
        },
      },
    ],
    title: "Sun-Drenched Adventure of the Rainforest Veins",
    description:
      "Let the waves lead you from Lima on this opulent zenith. Traverse the iconic waters of South America and discover the beauty of Montevideo, Buenos Aires.",
    rating: 4.0,
    tags: ["romantic", "short-getaway"],
  },
  {
    basePrice: 2122,
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
    hasPopularDestination: false,
    category: "entry-luxury",
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
      ],
      description:
        "An unforgettable reflection awaits as you cruise from Lima across South America. Dive into history, flavor, and culture with stops including Cartagena, Santiago, Montevideo, Rio de Janeiro.",
      distance: "1221 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Lima to Cartagena",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Cartagena to Santiago",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
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
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Douglas Jennings",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "captivating.legacy.o@velarivoyages.com",
          contactNumber: "+1-407-961-9283",
        },
      },
    ],
    title: "Captivating Legacy of the Lost Cities & Living Cultures",
    description:
      "An unforgettable reflection awaits as you cruise from Lima across South America. Dive into history, flavor, and culture with stops including Cartagena, Santiago, Montevideo, Rio de Janeiro.",
    rating: 4.2,
    tags: ["nature"],
  },
  {
    basePrice: 2018,
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
    category: "premium",
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
        "From bustling Lima to serene South America shores, this cruise invites you to relax, explore, and indulge. Stops at Buenos Aires, Rio de Janeiro, Santiago, Cartagena deliver a balanced blend of culture and comfort.",
      distance: "801 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Rio de Janeiro",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Santiago",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Santiago to Cartagena",
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
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Roy Palmer",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "lavish.panorama.of.t@velarivoyages.com",
          contactNumber: "+1-427-974-3970",
        },
      },
    ],
    title: "Lavish Panorama of the Sacred Valleys",
    description:
      "From bustling Lima to serene South America shores, this cruise invites you to relax, explore, and indulge. Stops at Buenos Aires, Rio de Janeiro, Santiago, Cartagena deliver a balanced blend of culture and comfort.",
    rating: 4.6,
    tags: ["culinary", "wildlife"],
  },
  {
    basePrice: 3255,
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
      city: "Buenos Aires",
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
        "Let the waves lead you from Lima on this serene elevation. Traverse the iconic waters of South America and discover the beauty of Montevideo, Rio de Janeiro, Santiago, Buenos Aires.",
      distance: "909 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Santiago",
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
          description: "Exploring Lima",
        },
        {
          start: "Day 5",
          end: "Day 6",
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
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "David Day",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/91.jpg",
        contact: {
          contactEmail: "tidewashed.tide.of.t@velarivoyages.com",
          contactNumber: "+1-917-198-1460",
        },
      },
    ],
    title: "Tide-Washed Tide of the Rainforest Veins",
    description:
      "Let the waves lead you from Lima on this serene elevation. Traverse the iconic waters of South America and discover the beauty of Montevideo, Rio de Janeiro, Santiago, Buenos Aires.",
    rating: 4.5,
    tags: ["long-distance", "cruise-line", "expedition"],
  },
  {
    basePrice: 3415,
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
      city: "Buenos Aires",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
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
        "Your journey through the South America begins in Lima, where elegance meets adventure. Explore the shores of Rio de Janeiro, Montevideo, Santiago, Buenos Aires, with curated excursions and luxurious onboard amenities.",
      distance: "1485 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Montevideo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Montevideo to Santiago",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Santiago to Buenos Aires",
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
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
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
          description: "Exploring Santiago",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Michael Campbell",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/92.jpg",
        contact: {
          contactEmail: "crystalline.infinite@velarivoyages.com",
          contactNumber: "+1-245-752-1770",
        },
      },
    ],
    title: "Crystalline Infinite of the Patagonian Reach",
    description:
      "Your journey through the South America begins in Lima, where elegance meets adventure. Explore the shores of Rio de Janeiro, Montevideo, Santiago, Buenos Aires, with curated excursions and luxurious onboard amenities.",
    rating: 4.8,
    tags: ["cruise-excursion", "weekend-cruise"],
  },
  {
    basePrice: 8641,
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
    category: "expedition",
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
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Unwind and explore on this reunion through South America, departing from Lima. With every stop—from Rio de Janeiro to Buenos Aires—you’ll collect memories that last a lifetime.",
      distance: "1430 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Lima to Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Rio de Janeiro to Montevideo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Montevideo to Santiago",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Santiago to Buenos Aires",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Lima",
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
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mason Keller",
        role: "Customer Service Representative",
        languages: ["English", "Quechua", "French", "Aymara"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "hidden.oasis.of.the.@velarivoyages.com",
          contactNumber: "+1-266-659-9104",
        },
      },
    ],
    title: "Hidden Oasis of the Sacred Valleys",
    description:
      "Unwind and explore on this reunion through South America, departing from Lima. With every stop—from Rio de Janeiro to Buenos Aires—you’ll collect memories that last a lifetime.",
    rating: 5.0,
    tags: ["cruise", "expedition", "historical"],
  },
  {
    basePrice: 4320,
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
    category: "mainstream",
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
        "This hidden wanderlust begins in Lima and ventures deep into the heart of South America. Wander through colorful markets, historic streets, and serene coastlines at Buenos Aires, Santiago, Cartagena.",
      distance: "750 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
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
          end: "Day 12",
          duration: "2 days",
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
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 9",
          end: "Day 10",
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
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Leah Sutton",
        role: "Travel Advisor",
        languages: ["English", "Guarani", "Haitian", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "sundrenched.infinite@velarivoyages.com",
          contactNumber: "+1-813-877-5794",
        },
      },
    ],
    title: "Sun-Drenched Infinite of the Sacred Valleys",
    description:
      "This hidden wanderlust begins in Lima and ventures deep into the heart of South America. Wander through colorful markets, historic streets, and serene coastlines at Buenos Aires, Santiago, Cartagena.",
    rating: 4.0,
    tags: ["culinary", "luxury"],
  },
  {
    basePrice: 8952,
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
    category: "luxury",
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
        "Experience coastal elegance on this odyssey from Lima, where the journey through South America includes stops in Cartagena, Rio de Janeiro, Montevideo, each more enchanting than the last.",
      distance: "579 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Lima to Cartagena",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Cartagena to Rio de Janeiro",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Montevideo",
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
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Cartagena",
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
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lerato Foster",
        role: "Travel Advisor",
        languages: ["English", "Guarani", "Haitian", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "azure.frontier.of.th@velarivoyages.com",
          contactNumber: "+1-944-282-3260",
        },
      },
    ],
    title: "Azure Frontier of the Southern Horizons",
    description:
      "Experience coastal elegance on this odyssey from Lima, where the journey through South America includes stops in Cartagena, Rio de Janeiro, Montevideo, each more enchanting than the last.",
    rating: 4.6,
    tags: ["short-getaway", "cruise-experience"],
  },
  {
    basePrice: 9438,
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
    hasPopularDestination: false,
    category: "mainstream",
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
      ],
      description:
        "Experience the elegance of the seas on this majestic arcadia through South America, starting from the illustrious port of Lima. From Montevideo to Rio de Janeiro, each destination offers its own story, culture, and breathtaking views.",
      distance: "1014 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Lima to Montevideo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Montevideo to Rio de Janeiro",
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
          description: "Exploring Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rio de Janeiro",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Linda Reeves",
        role: "Travel Advisor",
        languages: ["English", "Guarani", "Haitian", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "immersive.whisper.of@velarivoyages.com",
          contactNumber: "+1-412-638-3737",
        },
      },
    ],
    title: "Immersive Whisper of the Incan Echoes",
    description:
      "Experience the elegance of the seas on this majestic arcadia through South America, starting from the illustrious port of Lima. From Montevideo to Rio de Janeiro, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.2,
    tags: ["anniversary-cruise", "seasonal", "short-getaway"],
  },
  {
    basePrice: 8258,
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
    category: "ultra-luxury",
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
        "Step aboard in Lima and begin a starlit journey through the scenic South America. From historic cities to coastal hideaways like Cartagena, Santiago, Rio de Janeiro, every day is unforgettable.",
      distance: "638 nautical miles",
      totalDuration: "13 days",
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
          description: "Sailing from Cartagena to Santiago",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santiago to Rio de Janeiro",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Rio de Janeiro to Lima",
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
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Rio de Janeiro",
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
        name: "Nancy Warren",
        role: "Travel Advisor",
        languages: ["English", "Guarani", "Haitian", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "heavenly.haven.of.th@velarivoyages.com",
          contactNumber: "+1-446-110-7704",
        },
      },
    ],
    title: "Heavenly Haven of the Carnival Currents",
    description:
      "Step aboard in Lima and begin a starlit journey through the scenic South America. From historic cities to coastal hideaways like Cartagena, Santiago, Rio de Janeiro, every day is unforgettable.",
    rating: 4.3,
    tags: ["cruise-ship", "romantic"],
  },
  {
    basePrice: 7728,
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
    category: "premium",
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
          region: "South America",
          coordinates: {
            latitude: -12.0464,
            longitude: -77.0428,
          },
        },
      ],
      description:
        "Let the winds of the South America carry you from Lima to the most stunning ports in the region. With destinations like Buenos Aires, Cartagena, this horizon redefines luxury travel.",
      distance: "685 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Buenos Aires to Cartagena",
        },
        {
          start: "Day 8",
          end: "Day 8",
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
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carol Maxwell",
        role: "Travel Advisor",
        languages: ["English", "Guarani", "Haitian", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "spectacular.retreat.@velarivoyages.com",
          contactNumber: "+1-795-650-6319",
        },
      },
    ],
    title: "Spectacular Retreat of the Southern Horizons",
    description:
      "Let the winds of the South America carry you from Lima to the most stunning ports in the region. With destinations like Buenos Aires, Cartagena, this horizon redefines luxury travel.",
    rating: 4.5,
    tags: ["adventure", "long-distance"],
  },
];
