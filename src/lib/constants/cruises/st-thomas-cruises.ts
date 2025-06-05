import { Cruise } from "@/lib/interfaces/services/cruises";

export const stThomasCruises: Cruise[] = [
  {
    basePrice: 3125,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Savor each moment of this starlit escape through Caribbean, starting in St Thomas. Visit renowned locations like Cozumel, Tampa, where adventure and relaxation intertwine.",
      distance: "1385 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from St Thomas to Cozumel",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Cozumel to Tampa",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Tampa to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Gardner",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "captivating.retreat.@velarivoyages.com",
          contactNumber: "+1-888-394-6136",
        },
      },
    ],
    title: "Captivating Retreat of the Coral Sanctuaries",
    description:
      "Savor each moment of this starlit escape through Caribbean, starting in St Thomas. Visit renowned locations like Cozumel, Tampa, where adventure and relaxation intertwine.",
    rating: 4.1,
    tags: ["historical", "romantic", "cruise-journey"],
  },
  {
    basePrice: 6338,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this heavenly tranquility through Caribbean, starting from the illustrious port of St Thomas. From George Town to Tampa, each destination offers its own story, culture, and breathtaking views.",
      distance: "1394 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from St Thomas to George Town",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from George Town to Tampa",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Tampa to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Liam Spencer",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "mesmerizing.mirage.o@velarivoyages.com",
          contactNumber: "+1-499-831-1607",
        },
      },
    ],
    title: "Mesmerizing Mirage of the Sun-Kissed Archipelago",
    description:
      "Experience the elegance of the seas on this heavenly tranquility through Caribbean, starting from the illustrious port of St Thomas. From George Town to Tampa, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.3,
    tags: ["cruise-line", "long-distance", "fall-cruise"],
  },
  {
    basePrice: 4787,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Cozumel",
      country: "Mexico",
      coordinates: {
        latitude: 20.4233,
        longitude: -86.9212,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
      ],
      description:
        "Let the winds of the Caribbean carry you from St Thomas to the most stunning ports in the region. With destinations like Miami, Nassau, Cozumel, this requiem redefines luxury travel.",
      distance: "505 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from St Thomas to Miami",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Miami to Nassau",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Nassau to Cozumel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Joshua Hudson",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/55.jpg",
        contact: {
          contactEmail: "pearlescent.pilgrima@velarivoyages.com",
          contactNumber: "+1-748-828-8195",
        },
      },
    ],
    title: "Pearlescent Pilgrimage of the Sugarcane Skies",
    description:
      "Let the winds of the Caribbean carry you from St Thomas to the most stunning ports in the region. With destinations like Miami, Nassau, Cozumel, this requiem redefines luxury travel.",
    rating: 4.6,
    tags: ["weekend-cruise", "historical", "general"],
  },
  {
    basePrice: 8438,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Roatán",
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
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the waves lead you from St Thomas on this gilded currents. Traverse the iconic waters of Caribbean and discover the beauty of St. Thomas, Cozumel, George Town, Roatán.",
      distance: "1438 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from St Thomas to St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from St. Thomas to Cozumel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Cozumel to George Town",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from George Town to Roatán",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Diego Bennett",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "idyllic.currents.of.@velarivoyages.com",
          contactNumber: "+1-995-646-8441",
        },
      },
    ],
    title: "Idyllic Currents of the Island Reverie",
    description:
      "Let the waves lead you from St Thomas on this gilded currents. Traverse the iconic waters of Caribbean and discover the beauty of St. Thomas, Cozumel, George Town, Roatán.",
    rating: 4.1,
    tags: ["relaxation", "holiday-cruise", "cruise-experience"],
  },
  {
    basePrice: 4111,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
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
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail into splendor from St Thomas on a charming voyage through Caribbean. Let each stop—from Miami to Philipsburg—reveal the unique flavors and colors of the region.",
      distance: "646 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from St Thomas to Miami",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Philipsburg to Bermuda",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thabo Dean",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "hidden.reunion.of.th@velarivoyages.com",
          contactNumber: "+1-110-268-3184",
        },
      },
    ],
    title: "Hidden Reunion of the Tropical Isles",
    description:
      "Sail into splendor from St Thomas on a charming voyage through Caribbean. Let each stop—from Miami to Philipsburg—reveal the unique flavors and colors of the region.",
    rating: 4.6,
    tags: ["historical", "cultural", "cruise-line"],
  },
  {
    basePrice: 9304,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Join us in St Thomas for a symphony of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Miami, Fort Lauderdale, Philipsburg, George Town where timeless traditions meet modern luxuries.",
      distance: "1294 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from St Thomas to Miami",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Miami to Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Philipsburg to George Town",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from George Town to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Logan Porter",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        contact: {
          contactEmail: "radiant.serenade.of.@velarivoyages.com",
          contactNumber: "+1-638-476-4164",
        },
      },
    ],
    title: "Radiant Serenade of the Turquoise Lagoons",
    description:
      "Join us in St Thomas for a symphony of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Miami, Fort Lauderdale, Philipsburg, George Town where timeless traditions meet modern luxuries.",
    rating: 4.3,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 5373,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Set off on a embrace from St Thomas that captures the essence of Caribbean. Discover cultural gems and culinary delights across Tampa, San Juan.",
      distance: "874 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from St Thomas to Tampa",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tampa to San Juan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from San Juan to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Aaron Hudson",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "breathtaking.excursi@velarivoyages.com",
          contactNumber: "+1-423-163-5957",
        },
      },
    ],
    title: "Breathtaking Excursion of the Sapphire Waters",
    description:
      "Set off on a embrace from St Thomas that captures the essence of Caribbean. Discover cultural gems and culinary delights across Tampa, San Juan.",
    rating: 4.0,
    tags: ["wildlife", "culinary"],
  },
  {
    basePrice: 7296,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "From the lively departure port of St Thomas, this curated odyssey showcases the finest of Caribbean. With visits to St. Thomas, Miami, Fort Lauderdale, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "918 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from St Thomas to St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Thomas to Miami",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Miami to Fort Lauderdale",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ronald Griffin",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
        contact: {
          contactEmail: "majestic.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-623-111-7634",
        },
      },
    ],
    title: "Majestic Odyssey of the Island Reverie",
    description:
      "From the lively departure port of St Thomas, this curated odyssey showcases the finest of Caribbean. With visits to St. Thomas, Miami, Fort Lauderdale, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.5,
    tags: ["wellness", "cruise-getaway", "long-distance"],
  },
  {
    basePrice: 9221,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this midnight retreat beginning in St Thomas. Visit breathtaking Caribbean locales such as Fort Lauderdale, Philipsburg on this unforgettable itinerary.",
      distance: "1194 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from St Thomas to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Philipsburg to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thomas Sutton",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/69.jpg",
        contact: {
          contactEmail: "crystalline.pulse.of@velarivoyages.com",
          contactNumber: "+1-832-677-5790",
        },
      },
    ],
    title: "Crystalline Pulse of the Pirate Passages",
    description:
      "Enjoy seamless luxury on this midnight retreat beginning in St Thomas. Visit breathtaking Caribbean locales such as Fort Lauderdale, Philipsburg on this unforgettable itinerary.",
    rating: 4.5,
    tags: ["cruise-adventure", "wellness"],
  },
  {
    basePrice: 6395,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "This extraordinary wanderlust from St Thomas offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Philipsburg, Nassau, Roatán and Cozumel, creating memories that will last a lifetime.",
      distance: "694 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from St Thomas to Philipsburg",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Philipsburg to Nassau",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Nassau to Roatán",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Roatán to Cozumel",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Cozumel to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 18",
          end: "Day 18",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Tyler Payne",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "unforgettable.reflec@velarivoyages.com",
          contactNumber: "+1-280-747-7742",
        },
      },
    ],
    title: "Unforgettable Reflection of the Island Reverie",
    description:
      "This extraordinary wanderlust from St Thomas offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Philipsburg, Nassau, Roatán and Cozumel, creating memories that will last a lifetime.",
    rating: 4.1,
    tags: ["cruise-experience", "cruise-holiday", "wellness"],
  },
  {
    basePrice: 1556,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
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
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your floating journey from St Thomas. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like St. Thomas, Philipsburg, Fort Lauderdale.",
      distance: "571 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from St Thomas to St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Thomas to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Philipsburg to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "John Mason",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/85.jpg",
        contact: {
          contactEmail: "legendary.sanctum.of@velarivoyages.com",
          contactNumber: "+1-572-908-8744",
        },
      },
    ],
    title: "Legendary Sanctum of the Coral Sanctuaries",
    description:
      "Let the spirit of exploration guide your floating journey from St Thomas. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like St. Thomas, Philipsburg, Fort Lauderdale.",
    rating: 4.2,
    tags: ["historical"],
  },
  {
    basePrice: 7161,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Bermuda",
      country: "Bermuda",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
      ],
      description:
        "An unforgettable mythos awaits as you cruise from St Thomas across Caribbean. Dive into history, flavor, and culture with stops including Nassau, Bermuda.",
      distance: "781 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from St Thomas to Nassau",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Nassau to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Arthur Mason",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "starlit.labyrinth.of@velarivoyages.com",
          contactNumber: "+1-792-396-5630",
        },
      },
    ],
    title: "Starlit Labyrinth of the Reggae Shores",
    description:
      "An unforgettable mythos awaits as you cruise from St Thomas across Caribbean. Dive into history, flavor, and culture with stops including Nassau, Bermuda.",
    rating: 4.7,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 4347,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Set sail from St Thomas on this horizon-kissed symphony through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Roatán and Cozumel and San Juan and St. Thomas, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1453 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from St Thomas to Roatán",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Roatán to Cozumel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Cozumel to San Juan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from San Juan to St. Thomas",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from St. Thomas to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "George Griffin",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "dreamlike.infinite.o@velarivoyages.com",
          contactNumber: "+1-845-149-4627",
        },
      },
    ],
    title: "Dreamlike Infinite of the Tropical Isles",
    description:
      "Set sail from St Thomas on this horizon-kissed symphony through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Roatán and Cozumel and San Juan and St. Thomas, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.3,
    tags: ["long-distance"],
  },
  {
    basePrice: 9328,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Philipsburg",
      country: "Sint Maarten",
      coordinates: {
        latitude: 18.0167,
        longitude: -63.0587,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
      ],
      description:
        "Sail into splendor from St Thomas on a breathtaking voyage through Caribbean. Let each stop—from Tampa to Philipsburg—reveal the unique flavors and colors of the region.",
      distance: "1394 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from St Thomas to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tampa to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "George Griffin",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "starlit.labyrinth.of@velarivoyages.com",
          contactNumber: "+1-948-759-4252",
        },
      },
    ],
    title: "Starlit Labyrinth of the Tropical Isles",
    description:
      "Sail into splendor from St Thomas on a breathtaking voyage through Caribbean. Let each stop—from Tampa to Philipsburg—reveal the unique flavors and colors of the region.",
    rating: 4.5,
    tags: ["short-getaway"],
  },
  {
    basePrice: 5251,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Escape into the calm waters of Caribbean with this hidden journey from St Thomas. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Bermuda, Roatán, Cozumel, San Juan.",
      distance: "1466 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from St Thomas to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bermuda to Roatán",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Roatán to Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Cozumel to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Joe Jennings",
        role: "Loyalty Program Representative",
        languages: ["English", "Guarani", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "midnight.passage.of.@velarivoyages.com",
          contactNumber: "+1-466-688-4314",
        },
      },
    ],
    title: "Midnight Passage of the Pirate Passages",
    description:
      "Escape into the calm waters of Caribbean with this hidden journey from St Thomas. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Bermuda, Roatán, Cozumel, San Juan.",
    rating: 4.7,
    tags: ["expedition"],
  },
  {
    basePrice: 7455,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Leave stress behind with this curated lullaby from St Thomas. Sail across the best of Caribbean and explore treasures like Bermuda, Miami with comfort and style.",
      distance: "706 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from St Thomas to Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bermuda to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ellie Campbell",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "secret.quest.of.the.@velarivoyages.com",
          contactNumber: "+1-503-142-5942",
        },
      },
    ],
    title: "Secret Quest of the Sugarcane Skies",
    description:
      "Leave stress behind with this curated lullaby from St Thomas. Sail across the best of Caribbean and explore treasures like Bermuda, Miami with comfort and style.",
    rating: 4.6,
    tags: ["cruise-line", "wildlife", "cruise-experience"],
  },
  {
    basePrice: 8826,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Set off on a currents from St Thomas that captures the essence of Caribbean. Discover cultural gems and culinary delights across San Juan, Cozumel, Miami.",
      distance: "1305 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from St Thomas to San Juan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from San Juan to Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Cozumel to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Coleman",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
        contact: {
          contactEmail: "dreamlike.journey.of@velarivoyages.com",
          contactNumber: "+1-586-938-1358",
        },
      },
    ],
    title: "Dreamlike Journey of the Sapphire Waters",
    description:
      "Set off on a currents from St Thomas that captures the essence of Caribbean. Discover cultural gems and culinary delights across San Juan, Cozumel, Miami.",
    rating: 4.6,
    tags: ["culinary", "wildlife"],
  },
  {
    basePrice: 3700,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Let the waves lead you from St Thomas on this eternal reflection. Traverse the iconic waters of Caribbean and discover the beauty of St. Thomas, Fort Lauderdale, George Town.",
      distance: "1497 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from St Thomas to St. Thomas",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from St. Thomas to Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to George Town",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from George Town to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lisa Hunter",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "enchanting.legacy.of@velarivoyages.com",
          contactNumber: "+1-891-155-7708",
        },
      },
    ],
    title: "Enchanting Legacy of the Turquoise Lagoons",
    description:
      "Let the waves lead you from St Thomas on this eternal reflection. Traverse the iconic waters of Caribbean and discover the beauty of St. Thomas, Fort Lauderdale, George Town.",
    rating: 4.1,
    tags: ["long-distance", "cruise-vacation"],
  },
  {
    basePrice: 5895,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "George Town",
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
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Your escape begins in St Thomas, where every sunset on the Caribbean horizon promises another day of discovery—from Philipsburg, Bermuda, George Town to hidden ports of charm.",
      distance: "898 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from St Thomas to Philipsburg",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Philipsburg to Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Bermuda to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Audrey Jennings",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/92.jpg",
        contact: {
          contactEmail: "timeless.solstice.of@velarivoyages.com",
          contactNumber: "+1-851-231-1945",
        },
      },
    ],
    title: "Timeless Solstice of the Sugarcane Skies",
    description:
      "Your escape begins in St Thomas, where every sunset on the Caribbean horizon promises another day of discovery—from Philipsburg, Bermuda, George Town to hidden ports of charm.",
    rating: 4.0,
    tags: ["adventure", "cruise-line", "long-distance"],
  },
  {
    basePrice: 7574,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Roatán",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Depart St Thomas on a relaxing renaissance through the Caribbean region. Highlights include the stunning coastlines of George Town, San Juan, Bermuda, Roatán, all while enjoying first-class amenities on board.",
      distance: "1071 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from St Thomas to George Town",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from George Town to San Juan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from San Juan to Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Bermuda to Roatán",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Margaret Porter",
        role: "Marketing Coordinator",
        languages: ["English", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "charming.currents.of@velarivoyages.com",
          contactNumber: "+1-915-789-2861",
        },
      },
    ],
    title: "Charming Currents of the Emerald Cays",
    description:
      "Depart St Thomas on a relaxing renaissance through the Caribbean region. Highlights include the stunning coastlines of George Town, San Juan, Bermuda, Roatán, all while enjoying first-class amenities on board.",
    rating: 4.3,
    tags: ["cruise-holiday", "cruise-journey", "weekend-cruise"],
  },
];
