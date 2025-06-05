import { Cruise } from "@/lib/interfaces/services/cruises";

export const rioDeJaneiroCruises: Cruise[] = [
  {
    basePrice: 1453,
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "An escape like no other begins in Rio De Janeiro, where your frontier launches into the heart of South America. Discover the magic of Montevideo, Lima, Buenos Aires with style and sophistication.",
      distance: "810 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Montevideo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Montevideo to Lima",
        },
        {
          start: "Day 6",
          end: "Day 6",
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
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Kyle Jennings",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Haitian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "harmonic.quest.of.th@velarivoyages.com",
          contactNumber: "+1-996-105-1300",
        },
      },
    ],
    title: "Harmonic Quest of the Carnival Capital",
    description:
      "An escape like no other begins in Rio De Janeiro, where your frontier launches into the heart of South America. Discover the magic of Montevideo, Lima, Buenos Aires with style and sophistication.",
    rating: 4.7,
    tags: ["weekend-cruise", "themed-cruise"],
  },
  {
    basePrice: 5130,
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
        "Escape the everyday with this eternal journey through South America, departing from Rio De Janeiro. You'll visit Santiago, Montevideo, Cartagena, Lima, where every stop is a new adventure.",
      distance: "1160 nautical miles",
      totalDuration: "18 days",
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
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Montevideo to Cartagena",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Cartagena to Lima",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Lima to Rio De Janeiro",
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
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Lima",
        },
        {
          start: "Day 18",
          end: "Day 18",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Miguel Reed",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Haitian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "radiancedrenched.que@velarivoyages.com",
          contactNumber: "+1-466-336-6811",
        },
      },
    ],
    title: "Radiance-Drenched Quest of the Carnival Currents",
    description:
      "Escape the everyday with this eternal journey through South America, departing from Rio De Janeiro. You'll visit Santiago, Montevideo, Cartagena, Lima, where every stop is a new adventure.",
    rating: 4.9,
    tags: ["cruise-adventure", "fall-cruise", "adventure"],
  },
  {
    basePrice: 8381,
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
        "Set off on a pilgrimage from Rio De Janeiro that captures the essence of South America. Discover cultural gems and culinary delights across Cartagena, Buenos Aires, Montevideo, Santiago.",
      distance: "580 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Cartagena to Buenos Aires",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Montevideo",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Montevideo to Santiago",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Santiago to Rio De Janeiro",
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
          description: "Exploring Cartagena",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Montevideo",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jack Grant",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Haitian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "oceanic.embrace.of.t@velarivoyages.com",
          contactNumber: "+1-253-430-3205",
        },
      },
    ],
    title: "Oceanic Embrace of the Emerald Coasts",
    description:
      "Set off on a pilgrimage from Rio De Janeiro that captures the essence of South America. Discover cultural gems and culinary delights across Cartagena, Buenos Aires, Montevideo, Santiago.",
    rating: 4.4,
    tags: ["relaxation", "glacier-cruise"],
  },
  {
    basePrice: 1573,
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
        "Enjoy seamless luxury on this starlit adventure beginning in Rio De Janeiro. Visit breathtaking South America locales such as Lima, Buenos Aires, Santiago, Cartagena on this unforgettable itinerary.",
      distance: "1113 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Lima",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Buenos Aires to Santiago",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Santiago to Cartagena",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lima",
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
          description: "Exploring Santiago",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Harry Mitchell",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Haitian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "breathtaking.tide.of@velarivoyages.com",
          contactNumber: "+1-107-428-4482",
        },
      },
    ],
    title: "Breathtaking Tide of the Tide of Passion",
    description:
      "Enjoy seamless luxury on this starlit adventure beginning in Rio De Janeiro. Visit breathtaking South America locales such as Lima, Buenos Aires, Santiago, Cartagena on this unforgettable itinerary.",
    rating: 4.9,
    tags: ["cultural", "adventure", "historical"],
  },
  {
    basePrice: 7249,
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
      country: "",
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail from Rio De Janeiro into a world of wonder. The South America beckons with unforgettable ports like Lima, Buenos Aires, Santiago, where every view is picture-perfect and every moment is priceless.",
      distance: "746 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Lima",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lima to Buenos Aires",
        },
        {
          start: "Day 8",
          end: "Day 8",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lima",
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
          description: "Exploring Santiago",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Christopher Parker",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Haitian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "azure.currents.of.th@velarivoyages.com",
          contactNumber: "+1-488-536-6741",
        },
      },
    ],
    title: "Azure Currents of the Tide of Passion",
    description:
      "Sail from Rio De Janeiro into a world of wonder. The South America beckons with unforgettable ports like Lima, Buenos Aires, Santiago, where every view is picture-perfect and every moment is priceless.",
    rating: 4.5,
    tags: ["VIP", "culinary", "cruise-vacation"],
  },
  {
    basePrice: 1965,
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
        "Join us in Rio De Janeiro for a sojourn of a lifetime. Sail across the serene waters of South America, stopping at ports like Cartagena, Buenos Aires where timeless traditions meet modern luxuries.",
      distance: "1045 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Cartagena",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Cartagena to Buenos Aires",
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
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Jesse Baker",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Haitian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "legendary.solstice.o@velarivoyages.com",
          contactNumber: "+1-607-162-5960",
        },
      },
    ],
    title: "Legendary Solstice of the Incan Echoes",
    description:
      "Join us in Rio De Janeiro for a sojourn of a lifetime. Sail across the serene waters of South America, stopping at ports like Cartagena, Buenos Aires where timeless traditions meet modern luxuries.",
    rating: 4.4,
    tags: ["luxury", "tropical"],
  },
  {
    basePrice: 4485,
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
        "Step aboard in Rio De Janeiro and begin a spectacular journey through the scenic South America. From historic cities to coastal hideaways like Montevideo, Buenos Aires, every day is unforgettable.",
      distance: "540 nautical miles",
      totalDuration: "8 days",
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
          description: "Sailing from Montevideo to Buenos Aires",
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
          description: "Exploring Buenos Aires",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Philip Fletcher",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Haitian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "serene.haven.of.the.@velarivoyages.com",
          contactNumber: "+1-239-925-4485",
        },
      },
    ],
    title: "Serene Haven of the Lost Cities & Living Cultures",
    description:
      "Step aboard in Rio De Janeiro and begin a spectacular journey through the scenic South America. From historic cities to coastal hideaways like Montevideo, Buenos Aires, every day is unforgettable.",
    rating: 4.1,
    tags: ["repositioning", "cultural", "family-friendly"],
  },
  {
    basePrice: 3078,
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
        "Launch into adventure from Rio De Janeiro and sail deep into the heart of the South America. With ports of call like Cartagena, Santiago, Montevideo, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1472 nautical miles",
      totalDuration: "14 days",
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
          description: "Sailing from Cartagena to Santiago",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Santiago to Montevideo",
        },
        {
          start: "Day 12",
          end: "Day 13",
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
          description: "Exploring Montevideo",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Rio De Janeiro",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Thomas Hunter",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Haitian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/69.jpg",
        contact: {
          contactEmail: "whispering.awakening@velarivoyages.com",
          contactNumber: "+1-391-709-5537",
        },
      },
    ],
    title: "Whispering Awakening of the Samba Shores",
    description:
      "Launch into adventure from Rio De Janeiro and sail deep into the heart of the South America. With ports of call like Cartagena, Santiago, Montevideo, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.7,
    tags: ["cruise-holiday", "nature", "weekend-cruise"],
  },
  {
    basePrice: 2468,
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
        "Let this verdant voyage redefine your idea of travel. From Rio De Janeiro, explore the South America in luxurious comfort, stopping at Santiago, Cartagena, Buenos Aires where every port offers a new chapter.",
      distance: "1312 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rio De Janeiro to Santiago",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Santiago to Cartagena",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Cartagena to Buenos Aires",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
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
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Santiago",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 12",
          end: "Day 12",
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
        name: "Keith Chambers",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Haitian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
        contact: {
          contactEmail: "transcendent.current@velarivoyages.com",
          contactNumber: "+1-232-279-2136",
        },
      },
    ],
    title: "Transcendent Currents of the Carnival Capital",
    description:
      "Let this verdant voyage redefine your idea of travel. From Rio De Janeiro, explore the South America in luxurious comfort, stopping at Santiago, Cartagena, Buenos Aires where every port offers a new chapter.",
    rating: 4.0,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 9449,
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
        "Discover the wonders of South America aboard this luxurious cruise departing from Rio De Janeiro. Journey through crystal waters to explore the treasures of Montevideo, Lima, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1363 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rio De Janeiro to Montevideo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Montevideo to Lima",
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
          description: "Exploring Montevideo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Lima",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Ralph Holloway",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Haitian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "secret.elevation.of.@velarivoyages.com",
          contactNumber: "+1-510-756-7253",
        },
      },
    ],
    title: "Secret Elevation of the Carnival Currents",
    description:
      "Discover the wonders of South America aboard this luxurious cruise departing from Rio De Janeiro. Journey through crystal waters to explore the treasures of Montevideo, Lima, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.8,
    tags: ["glacier-cruise", "cruise"],
  },
];
