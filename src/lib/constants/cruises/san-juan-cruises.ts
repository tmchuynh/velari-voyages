import { Cruise } from "@/lib/interfaces/services/cruises";

export const sanJuanCruises: Cruise[] = [
  {
    basePrice: 9121,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
        "This extraordinary pulse from San Juan offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of St. Thomas, Bermuda, Tampa and George Town, creating memories that will last a lifetime.",
      distance: "891 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Bermuda to Tampa",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tampa to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Juan Hawkins",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "transcendent.pulse.o@velarivoyages.com",
          contactNumber: "+1-575-560-8097",
        },
      },
    ],
    title: "Transcendent Pulse of the Palm-Fringed Paradises",
    description:
      "This extraordinary pulse from San Juan offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of St. Thomas, Bermuda, Tampa and George Town, creating memories that will last a lifetime.",
    rating: 4.8,
    tags: ["romantic", "glacier-cruise", "cruise-adventure"],
  },
  {
    basePrice: 3802,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Set sail from San Juan on this azure infinite through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Tampa and Miami and Bermuda, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "570 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to Tampa",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tampa to Miami",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Miami to Bermuda",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Bermuda to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kenneth Mason",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
        contact: {
          contactEmail: "spectacular.lullaby.@velarivoyages.com",
          contactNumber: "+1-341-940-9396",
        },
      },
    ],
    title: "Spectacular Lullaby of the Sun-Worn Stones",
    description:
      "Set sail from San Juan on this azure infinite through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Tampa and Miami and Bermuda, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.2,
    tags: ["weekend-cruise", "repositioning", "fall-cruise"],
  },
  {
    basePrice: 3741,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Depart from iconic San Juan and traverse the Caribbean with visits to Miami, Cozumel. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1090 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Juan to Miami",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Miami to Cozumel",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Cozumel to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Nicholas Carpenter",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "azure.tranquility.of@velarivoyages.com",
          contactNumber: "+1-944-192-5768",
        },
      },
    ],
    title: "Azure Tranquility of the Reggae Shores",
    description:
      "Depart from iconic San Juan and traverse the Caribbean with visits to Miami, Cozumel. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.8,
    tags: ["wildlife", "culinary", "tropical"],
  },
  {
    basePrice: 3718,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "This hand-selected timeless cruise offers a true taste of Caribbean. Depart from San Juan and explore ports like Nassau, Cozumel, Fort Lauderdale, each telling a story through food, music, and tradition.",
      distance: "1266 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to Nassau",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Nassau to Cozumel",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Cozumel to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
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
          description: "Exploring Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Austin Foster",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "immersive.eclipse.of@velarivoyages.com",
          contactNumber: "+1-222-103-1789",
        },
      },
    ],
    title: "Immersive Eclipse of the Spanish Caribbean Jewel",
    description:
      "This hand-selected timeless cruise offers a true taste of Caribbean. Depart from San Juan and explore ports like Nassau, Cozumel, Fort Lauderdale, each telling a story through food, music, and tradition.",
    rating: 4.6,
    tags: ["luxury", "romantic"],
  },
  {
    basePrice: 3080,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "St. Thomas",
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
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
      ],
      description:
        "Begin your exploration in San Juan, a gateway to the soul of Caribbean. Enjoy days spent exploring Cozumel, Miami, Philipsburg, St. Thomas and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1126 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to Cozumel",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Cozumel to Miami",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Philipsburg to St. Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Jerry Payne",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "hidden.mirage.of.the@velarivoyages.com",
          contactNumber: "+1-823-385-2688",
        },
      },
    ],
    title: "Hidden Mirage of the Fortress of Tides",
    description:
      "Begin your exploration in San Juan, a gateway to the soul of Caribbean. Enjoy days spent exploring Cozumel, Miami, Philipsburg, St. Thomas and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.3,
    tags: ["cruise-journey", "themed-cruise"],
  },
  {
    basePrice: 8597,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your midnight journey from San Juan. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Philipsburg, Fort Lauderdale.",
      distance: "1013 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Philipsburg to Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Michael Spencer",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "whispering.odyssey.o@velarivoyages.com",
          contactNumber: "+1-769-372-2209",
        },
      },
    ],
    title: "Whispering Odyssey of the Painted Port",
    description:
      "Let the spirit of exploration guide your midnight journey from San Juan. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Philipsburg, Fort Lauderdale.",
    rating: 4.4,
    tags: ["tropical", "cruise-ship"],
  },
  {
    basePrice: 2716,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Roatán",
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
      ],
      description:
        "Set sail from San Juan for a voyage like no other. From the picturesque landscapes of St. Thomas to the lively ambiance of Philipsburg, this horizon-kissed cruise will redefine your view of Caribbean.",
      distance: "1119 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Juan to St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from St. Thomas to Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Philipsburg to Roatán",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Roatán to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Lawrence Gardner",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "secret.requiem.of.th@velarivoyages.com",
          contactNumber: "+1-205-642-8399",
        },
      },
    ],
    title: "Secret Requiem of the Spanish Caribbean Jewel",
    description:
      "Set sail from San Juan for a voyage like no other. From the picturesque landscapes of St. Thomas to the lively ambiance of Philipsburg, this horizon-kissed cruise will redefine your view of Caribbean.",
    rating: 4.6,
    tags: ["expedition"],
  },
  {
    basePrice: 8314,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "From bustling San Juan to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Fort Lauderdale, Roatán, Philipsburg deliver a balanced blend of culture and comfort.",
      distance: "782 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Roatán",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Roatán to Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Philipsburg to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Adam Collins",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "sundrenched.serenade@velarivoyages.com",
          contactNumber: "+1-474-577-1477",
        },
      },
    ],
    title: "Sun-Drenched Serenade of the Palm-Fringed Paradises",
    description:
      "From bustling San Juan to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Fort Lauderdale, Roatán, Philipsburg deliver a balanced blend of culture and comfort.",
    rating: 4.9,
    tags: ["tropical"],
  },
  {
    basePrice: 9932,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "St. Thomas",
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
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
      ],
      description:
        "This crystalline cruise from San Juan is your ticket to the captivating charm of the Caribbean. Discover the delights of Roatán, Miami, St. Thomas with enriching excursions and award-winning service.",
      distance: "1091 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Juan to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Roatán to Miami",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Miami to St. Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Eric Fisher",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
        contact: {
          contactEmail: "mesmerizing.saga.of.@velarivoyages.com",
          contactNumber: "+1-169-856-2977",
        },
      },
    ],
    title: "Mesmerizing Saga of the Colorful Coastline",
    description:
      "This crystalline cruise from San Juan is your ticket to the captivating charm of the Caribbean. Discover the delights of Roatán, Miami, St. Thomas with enriching excursions and award-winning service.",
    rating: 4.8,
    tags: ["culinary", "cruise-vacation"],
  },
  {
    basePrice: 9023,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
      ],
      description:
        "Leave stress behind with this curated quest from San Juan. Sail across the best of Caribbean and explore treasures like Nassau, Fort Lauderdale, Philipsburg with comfort and style.",
      distance: "662 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Juan to Nassau",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Nassau to Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Matthew Hall",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "floating.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-676-338-5930",
        },
      },
    ],
    title: "Floating Sanctuary of the Sun-Worn Stones",
    description:
      "Leave stress behind with this curated quest from San Juan. Sail across the best of Caribbean and explore treasures like Nassau, Fort Lauderdale, Philipsburg with comfort and style.",
    rating: 4.1,
    tags: ["cruise-holiday", "luxury", "romantic"],
  },
  {
    basePrice: 8613,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
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
    category: "premium",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
        "Launch into adventure from San Juan and sail deep into the heart of the Caribbean. With ports of call like Bermuda, Miami, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1220 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Juan to Bermuda",
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
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Arthur Stewart",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
        contact: {
          contactEmail: "forbidden.escape.of.@velarivoyages.com",
          contactNumber: "+1-341-641-8924",
        },
      },
    ],
    title: "Forbidden Escape of the Colorful Coastline",
    description:
      "Launch into adventure from San Juan and sail deep into the heart of the Caribbean. With ports of call like Bermuda, Miami, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.6,
    tags: ["wildlife", "general"],
  },
  {
    basePrice: 1763,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Depart from iconic San Juan and traverse the Caribbean with visits to George Town, St. Thomas, Miami, Roatán. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1475 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Juan to George Town",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from George Town to St. Thomas",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from St. Thomas to Miami",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Miami to Roatán",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Roatán to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Mason Collins",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "luxurious.odyssey.of@velarivoyages.com",
          contactNumber: "+1-386-557-1737",
        },
      },
    ],
    title: "Luxurious Odyssey of the Coral Sanctuaries",
    description:
      "Depart from iconic San Juan and traverse the Caribbean with visits to George Town, St. Thomas, Miami, Roatán. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.8,
    tags: ["luxury", "culinary"],
  },
  {
    basePrice: 3601,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
      ],
      description:
        "Join us in San Juan for a wanderlust of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Tampa, Bermuda where timeless traditions meet modern luxuries.",
      distance: "1381 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Juan to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tampa to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Brian Coleman",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "transcendent.infinit@velarivoyages.com",
          contactNumber: "+1-513-657-2159",
        },
      },
    ],
    title: "Transcendent Infinite of the Coral Sanctuaries",
    description:
      "Join us in San Juan for a wanderlust of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Tampa, Bermuda where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["expedition"],
  },
  {
    basePrice: 6754,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Launch into adventure from San Juan and sail deep into the heart of the Caribbean. With ports of call like St. Thomas, Bermuda, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "922 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Bermuda to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Chen Russell",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "eternal.pilgrimage.o@velarivoyages.com",
          contactNumber: "+1-832-965-1318",
        },
      },
    ],
    title: "Eternal Pilgrimage of the Caribbean Rhythms",
    description:
      "Launch into adventure from San Juan and sail deep into the heart of the Caribbean. With ports of call like St. Thomas, Bermuda, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.4,
    tags: ["family-friendly"],
  },
  {
    basePrice: 7143,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
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
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
        "Experience the elegance of the seas on this golden pulse through Caribbean, starting from the illustrious port of San Juan. From Bermuda, Fort Lauderdale to Roatán, each destination offers its own story, culture, and breathtaking views.",
      distance: "607 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Juan to Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Roatán",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Keith Fisher",
        role: "Cruise Specialist",
        languages: ["English", "French", "Quechua", "Haitian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "immersive.frontier.o@velarivoyages.com",
          contactNumber: "+1-558-821-6832",
        },
      },
    ],
    title: "Immersive Frontier of the Colorful Coastline",
    description:
      "Experience the elegance of the seas on this golden pulse through Caribbean, starting from the illustrious port of San Juan. From Bermuda, Fort Lauderdale to Roatán, each destination offers its own story, culture, and breathtaking views.",
    rating: 5.0,
    tags: ["cruise"],
  },
  {
    basePrice: 4069,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of San Juan on this majestic journey across Caribbean. Uncover the beauty and history of Bermuda, Roatán with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1340 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Juan to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bermuda to Roatán",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Roatán to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Brooklyn Porter",
        role: "Reservations Agent",
        languages: ["English", "Haitian", "Spanish", "Aymara", "French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
        contact: {
          contactEmail: "ornate.drift.of.the.@velarivoyages.com",
          contactNumber: "+1-811-474-5567",
        },
      },
    ],
    title: "Ornate Drift of the Sun-Worn Stones",
    description:
      "Sail away from the charming harbor of San Juan on this majestic journey across Caribbean. Uncover the beauty and history of Bermuda, Roatán with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.7,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 2427,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this epic solstice through Caribbean, starting from the illustrious port of San Juan. From Nassau, Philipsburg, St. Thomas to Tampa, each destination offers its own story, culture, and breathtaking views.",
      distance: "1358 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Juan to Nassau",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Nassau to Philipsburg",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Philipsburg to St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from St. Thomas to Tampa",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Tampa to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
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
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Keller",
        role: "Reservations Agent",
        languages: ["English", "Haitian", "Spanish", "Aymara", "French"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "starlit.realm.of.the@velarivoyages.com",
          contactNumber: "+1-199-829-6149",
        },
      },
    ],
    title: "Starlit Realm of the Colorful Coastline",
    description:
      "Experience the elegance of the seas on this epic solstice through Caribbean, starting from the illustrious port of San Juan. From Nassau, Philipsburg, St. Thomas to Tampa, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.2,
    tags: ["historical", "cruise-getaway", "weekend-cruise"],
  },
  {
    basePrice: 6436,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Your awakening begins in San Juan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Bermuda to the historic streets of Philipsburg, each stop in the Caribbean will leave a lasting impression.",
      distance: "860 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Juan to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bermuda to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Philipsburg to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
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
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Rachel Lawson",
        role: "Reservations Agent",
        languages: ["English", "Haitian", "Spanish", "Aymara", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "harmonic.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-223-243-6033",
        },
      },
    ],
    title: "Harmonic Odyssey of the Palm-Fringed Paradises",
    description:
      "Your awakening begins in San Juan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Bermuda to the historic streets of Philipsburg, each stop in the Caribbean will leave a lasting impression.",
    rating: 4.7,
    tags: ["historical"],
  },
  {
    basePrice: 9368,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
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
        "Sail into splendor from San Juan on a immersive voyage through Caribbean. Let each stop—from Tampa to Cozumel—reveal the unique flavors and colors of the region.",
      distance: "1006 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Juan to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Tampa to Cozumel",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Cozumel to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Harper Morgan",
        role: "Reservations Agent",
        languages: ["English", "Haitian", "Spanish", "Aymara", "French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "majestic.elevation.o@velarivoyages.com",
          contactNumber: "+1-502-724-7562",
        },
      },
    ],
    title: "Majestic Elevation of the Fortress of Tides",
    description:
      "Sail into splendor from San Juan on a immersive voyage through Caribbean. Let each stop—from Tampa to Cozumel—reveal the unique flavors and colors of the region.",
    rating: 4.9,
    tags: ["seasonal", "themed-cruise"],
  },
  {
    basePrice: 4289,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Roatán",
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
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Your odyssey begins in San Juan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Cozumel to the historic streets of Roatán, each stop in the Caribbean will leave a lasting impression.",
      distance: "505 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Juan to Cozumel",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Cozumel to Roatán",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Roatán to Tampa",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Tampa to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
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
          description: "Exploring Roatán",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Helen Chambers",
        role: "Reservations Agent",
        languages: ["English", "Haitian", "Spanish", "Aymara", "French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "harmonic.adventure.o@velarivoyages.com",
          contactNumber: "+1-272-803-8391",
        },
      },
    ],
    title: "Harmonic Adventure of the Sugarcane Skies",
    description:
      "Your odyssey begins in San Juan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Cozumel to the historic streets of Roatán, each stop in the Caribbean will leave a lasting impression.",
    rating: 4.9,
    tags: ["cruise-holiday"],
  },
];
