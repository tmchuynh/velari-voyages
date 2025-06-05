import { Cruise } from "@/lib/interfaces/services/cruises";

export const georgeTownCruises: Cruise[] = [
  {
    basePrice: 1147,
    departureLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
      },
    },
    arrivalLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
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
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
          },
        },
      ],
      description:
        "Unwind and explore on this legacy through Caribbean, departing from George Town. With every stop—from Tampa to Fort Lauderdale—you’ll collect memories that last a lifetime.",
      distance: "1193 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from George Town to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Tampa to Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Margaret Dixon",
        role: "Marketing Coordinator",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/93.jpg",
        contact: {
          contactEmail: "legendary.excursion.@velarivoyages.com",
          contactNumber: "+1-101-166-8837",
        },
      },
    ],
    title: "Legendary Excursion of the Tropical Isles",
    description:
      "Unwind and explore on this legacy through Caribbean, departing from George Town. With every stop—from Tampa to Fort Lauderdale—you’ll collect memories that last a lifetime.",
    rating: 4.6,
    tags: ["luxury"],
  },
  {
    basePrice: 6180,
    departureLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
      },
    },
    arrivalLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
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
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
          },
        },
      ],
      description:
        "From the lively departure port of George Town, this curated odyssey showcases the finest of Caribbean. With visits to Miami, Roatán, Cozumel, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1466 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from George Town to Miami",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Miami to Roatán",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Roatán to Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Cozumel to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 6",
          end: "Day 7",
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
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Melissa Ellis",
        role: "Marketing Coordinator",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "opulent.reverie.of.t@velarivoyages.com",
          contactNumber: "+1-430-463-9366",
        },
      },
    ],
    title: "Opulent Reverie of the Turquoise Lagoons",
    description:
      "From the lively departure port of George Town, this curated odyssey showcases the finest of Caribbean. With visits to Miami, Roatán, Cozumel, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.1,
    tags: ["holiday-cruise", "historical", "general"],
  },
  {
    basePrice: 1876,
    departureLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
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
    hasPopularDestination: false,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
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
        "Leave stress behind with this curated tide from George Town. Sail across the best of Caribbean and explore treasures like Nassau, Cozumel with comfort and style.",
      distance: "1195 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from George Town to Nassau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Nassau to Cozumel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bella Hall",
        role: "Marketing Coordinator",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "whispering.odyssey.o@velarivoyages.com",
          contactNumber: "+1-677-914-6028",
        },
      },
    ],
    title: "Whispering Odyssey of the Turquoise Lagoons",
    description:
      "Leave stress behind with this curated tide from George Town. Sail across the best of Caribbean and explore treasures like Nassau, Cozumel with comfort and style.",
    rating: 4.4,
    tags: ["long-distance"],
  },
  {
    basePrice: 4929,
    departureLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
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
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
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
          city: "St. Thomas",
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
      ],
      description:
        "Leave stress behind with this curated drift from George Town. Sail across the best of Caribbean and explore treasures like Fort Lauderdale, St. Thomas, San Juan with comfort and style.",
      distance: "842 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from George Town to Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to St. Thomas",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from St. Thomas to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Chloe Carpenter",
        role: "Marketing Coordinator",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "moonlit.saga.of.the.@velarivoyages.com",
          contactNumber: "+1-893-604-4966",
        },
      },
    ],
    title: "Moonlit Saga of the Sapphire Waters",
    description:
      "Leave stress behind with this curated drift from George Town. Sail across the best of Caribbean and explore treasures like Fort Lauderdale, St. Thomas, San Juan with comfort and style.",
    rating: 4.6,
    tags: ["cruise-getaway", "cultural", "general"],
  },
  {
    basePrice: 8394,
    departureLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
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
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
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
          city: "Fort Lauderdale",
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
        "Step aboard in George Town and begin a moonlit journey through the scenic Caribbean. From historic cities to coastal hideaways like Tampa, Fort Lauderdale, Roatán, every day is unforgettable.",
      distance: "1001 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from George Town to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tampa to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Roatán",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Chloe Grant",
        role: "Marketing Coordinator",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "riveting.sanctum.of.@velarivoyages.com",
          contactNumber: "+1-835-424-4920",
        },
      },
    ],
    title: "Riveting Sanctum of the Reggae Shores",
    description:
      "Step aboard in George Town and begin a moonlit journey through the scenic Caribbean. From historic cities to coastal hideaways like Tampa, Fort Lauderdale, Roatán, every day is unforgettable.",
    rating: 4.2,
    tags: ["tropical", "culinary"],
  },
  {
    basePrice: 4986,
    departureLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
      },
    },
    arrivalLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
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
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
          },
        },
      ],
      description:
        "Embark from George Town and traverse the Caribbean in style. Whether it’s the energy of Nassau or the calm of Miami, each destination reveals a new side of paradise.",
      distance: "805 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from George Town to Nassau",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Nassau to Miami",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Philipsburg to St. Thomas",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from St. Thomas to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Christine Palmer",
        role: "Marketing Coordinator",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "lavish.escape.of.the@velarivoyages.com",
          contactNumber: "+1-390-396-1828",
        },
      },
    ],
    title: "Lavish Escape of the Reggae Shores",
    description:
      "Embark from George Town and traverse the Caribbean in style. Whether it’s the energy of Nassau or the calm of Miami, each destination reveals a new side of paradise.",
    rating: 4.3,
    tags: ["repositioning", "general"],
  },
  {
    basePrice: 4213,
    departureLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
      },
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
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
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
      ],
      description:
        "Begin your journey in George Town, where tradition meets travel. This immersive wanderlust reveals the finest of Caribbean, from the beaches of St. Thomas to the streets of Fort Lauderdale.",
      distance: "744 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from George Town to St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from St. Thomas to Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to San Juan",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from San Juan to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Susan Campbell",
        role: "Marketing Coordinator",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "mystical.elevation.o@velarivoyages.com",
          contactNumber: "+1-495-550-6322",
        },
      },
    ],
    title: "Mystical Elevation of the Coral Sanctuaries",
    description:
      "Begin your journey in George Town, where tradition meets travel. This immersive wanderlust reveals the finest of Caribbean, from the beaches of St. Thomas to the streets of Fort Lauderdale.",
    rating: 4.4,
    tags: ["cruise-journey", "wildlife"],
  },
  {
    basePrice: 8100,
    departureLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
      },
    },
    arrivalLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
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
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this transcendent whisper through Caribbean, starting from the illustrious port of George Town. From Cozumel to San Juan, each destination offers its own story, culture, and breathtaking views.",
      distance: "1031 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from George Town to Cozumel",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Cozumel to San Juan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from San Juan to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Julie Wells",
        role: "Marketing Coordinator",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "velvet.serenade.of.t@velarivoyages.com",
          contactNumber: "+1-880-622-4846",
        },
      },
    ],
    title: "Velvet Serenade of the Emerald Cays",
    description:
      "Experience the elegance of the seas on this transcendent whisper through Caribbean, starting from the illustrious port of George Town. From Cozumel to San Juan, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.4,
    tags: ["historical", "glacier-cruise", "exclusive"],
  },
  {
    basePrice: 9065,
    departureLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
      },
    },
    arrivalLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this awe-inspiring arcadia through Caribbean, starting from the illustrious port of George Town. From Bermuda to Nassau, each destination offers its own story, culture, and breathtaking views.",
      distance: "937 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from George Town to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bermuda to Nassau",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Nassau to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Jennifer Graham",
        role: "Marketing Coordinator",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "enchanting.voyage.of@velarivoyages.com",
          contactNumber: "+1-983-590-1512",
        },
      },
    ],
    title: "Enchanting Voyage of the Island Reverie",
    description:
      "Experience the elegance of the seas on this awe-inspiring arcadia through Caribbean, starting from the illustrious port of George Town. From Bermuda to Nassau, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.2,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 5976,
    departureLocation: {
      city: "George Town",
      country: "Cayman Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 19.2855,
        longitude: -81.2546,
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
    hasPopularDestination: false,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "George Town",
          country: "Cayman Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 19.2855,
            longitude: -81.2546,
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
          city: "St. Thomas",
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
      ],
      description:
        "Depart George Town on a relaxing elevation through the Caribbean region. Highlights include the stunning coastlines of Fort Lauderdale, St. Thomas, Bermuda, all while enjoying first-class amenities on board.",
      distance: "1456 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from George Town to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Isabella Campbell",
        role: "Marketing Coordinator",
        languages: ["English", "French", "Guarani"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "pearlescent.quest.of@velarivoyages.com",
          contactNumber: "+1-808-299-7453",
        },
      },
    ],
    title: "Pearlescent Quest of the Emerald Cays",
    description:
      "Depart George Town on a relaxing elevation through the Caribbean region. Highlights include the stunning coastlines of Fort Lauderdale, St. Thomas, Bermuda, all while enjoying first-class amenities on board.",
    rating: 4.8,
    tags: ["cruise-line"],
  },
];
