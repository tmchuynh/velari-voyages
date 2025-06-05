import { Cruise } from "@/lib/interfaces/services/cruises";

export const cartagenaCruises: Cruise[] = [
  {
    basePrice: 2523,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
        "Join us in Cartagena for a saga of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Bermuda, Fort Lauderdale, Tampa, George Town where timeless traditions meet modern luxuries.",
      distance: "1378 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Cartagena to Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Tampa to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Johnny Nash",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "extraordinary.realm.@velarivoyages.com",
          contactNumber: "+1-530-438-2508",
        },
      },
    ],
    title: "Extraordinary Realm of the Coral Sanctuaries",
    description:
      "Join us in Cartagena for a saga of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Bermuda, Fort Lauderdale, Tampa, George Town where timeless traditions meet modern luxuries.",
    rating: 4.9,
    tags: ["relaxation"],
  },
  {
    basePrice: 6150,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "Set sail from Cartagena on this awe-inspiring mirage through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore St. Thomas and Bermuda and Miami and Cozumel, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1115 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Cartagena to St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Bermuda to Miami",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Miami to Cozumel",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Cozumel to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Cartagena",
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
          description: "Exploring Bermuda",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Liam Bennett",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "velvet.pulse.of.the.@velarivoyages.com",
          contactNumber: "+1-622-969-3712",
        },
      },
    ],
    title: "Velvet Pulse of the Turquoise Lagoons",
    description:
      "Set sail from Cartagena on this awe-inspiring mirage through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore St. Thomas and Bermuda and Miami and Cozumel, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.7,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 2341,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
      ],
      description:
        "Escape the everyday with this celestial journey through Caribbean, departing from Cartagena. You'll visit George Town, San Juan, Nassau, where every stop is a new adventure.",
      distance: "1362 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Cartagena to George Town",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from George Town to San Juan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from San Juan to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brandon Morgan",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "infinite.reunion.of.@velarivoyages.com",
          contactNumber: "+1-329-273-8613",
        },
      },
    ],
    title: "Infinite Reunion of the Sapphire Waters",
    description:
      "Escape the everyday with this celestial journey through Caribbean, departing from Cartagena. You'll visit George Town, San Juan, Nassau, where every stop is a new adventure.",
    rating: 4.5,
    tags: ["adventure", "cruise-vacation", "cultural"],
  },
  {
    basePrice: 5580,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
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
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "Begin your oasis in Cartagena, a gateway to the soul of Caribbean. Enjoy days spent exploring Roatán, Philipsburg, George Town and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1408 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Cartagena to Roatán",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Roatán to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Philipsburg to George Town",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from George Town to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 8",
          end: "Day 8",
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
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Aaron Porter",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/96.jpg",
        contact: {
          contactEmail: "timeless.solstice.of@velarivoyages.com",
          contactNumber: "+1-479-130-3835",
        },
      },
    ],
    title: "Timeless Solstice of the Turquoise Lagoons",
    description:
      "Begin your oasis in Cartagena, a gateway to the soul of Caribbean. Enjoy days spent exploring Roatán, Philipsburg, George Town and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.2,
    tags: ["glacier-cruise", "culinary"],
  },
  {
    basePrice: 4226,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
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
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "Join us in Cartagena for a retreat of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like George Town, Philipsburg, Tampa where timeless traditions meet modern luxuries.",
      distance: "594 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Cartagena to George Town",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from George Town to Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Philipsburg to Tampa",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Tampa to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Christopher Graham",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "immersive.expedition@velarivoyages.com",
          contactNumber: "+1-219-581-9113",
        },
      },
    ],
    title: "Immersive Expedition of the Reggae Shores",
    description:
      "Join us in Cartagena for a retreat of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like George Town, Philipsburg, Tampa where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["glacier-cruise"],
  },
  {
    basePrice: 7030,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "From bustling Cartagena to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Cozumel, Miami, George Town deliver a balanced blend of culture and comfort.",
      distance: "1064 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Cartagena to Cozumel",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Cozumel to Miami",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Miami to George Town",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from George Town to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Vincent Harper",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "majestic.awakening.o@velarivoyages.com",
          contactNumber: "+1-137-947-4212",
        },
      },
    ],
    title: "Majestic Awakening of the Rum-Laced Breezes",
    description:
      "From bustling Cartagena to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Cozumel, Miami, George Town deliver a balanced blend of culture and comfort.",
    rating: 4.6,
    tags: ["culinary"],
  },
  {
    basePrice: 8515,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
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
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          city: "Fort Lauderdale",
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
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Cartagena on this horizon-kissed journey across Caribbean. Uncover the beauty and history of George Town, Fort Lauderdale, Miami with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1428 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Cartagena to George Town",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from George Town to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Miami",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Miami to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Victor Mitchell",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
        contact: {
          contactEmail: "horizonkissed.quest.@velarivoyages.com",
          contactNumber: "+1-305-406-5166",
        },
      },
    ],
    title: "Horizon-Kissed Quest of the Sapphire Waters",
    description:
      "Sail away from the charming harbor of Cartagena on this horizon-kissed journey across Caribbean. Uncover the beauty and history of George Town, Fort Lauderdale, Miami with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.3,
    tags: ["nature", "cruise-holiday", "anniversary-cruise"],
  },
  {
    basePrice: 2412,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
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
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
        "Launch into adventure from Cartagena and sail deep into the heart of the Caribbean. With ports of call like San Juan, Fort Lauderdale, Philipsburg, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "777 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Cartagena to San Juan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from San Juan to Fort Lauderdale",
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
          description: "Exploring Cartagena",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Elijah Warren",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        contact: {
          contactEmail: "transcendent.odyssey@velarivoyages.com",
          contactNumber: "+1-767-883-3005",
        },
      },
    ],
    title: "Transcendent Odyssey of the Emerald Cays",
    description:
      "Launch into adventure from Cartagena and sail deep into the heart of the Caribbean. With ports of call like San Juan, Fort Lauderdale, Philipsburg, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.8,
    tags: ["cruise-holiday", "cruise-getaway"],
  },
  {
    basePrice: 6829,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "From bustling Cartagena to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at San Juan, Miami, Bermuda, St. Thomas deliver a balanced blend of culture and comfort.",
      distance: "1420 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Cartagena to San Juan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from San Juan to Miami",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Miami to Bermuda",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Bermuda to St. Thomas",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from St. Thomas to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Timothy Graves",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
        contact: {
          contactEmail: "majestic.lullaby.of.@velarivoyages.com",
          contactNumber: "+1-915-108-8622",
        },
      },
    ],
    title: "Majestic Lullaby of the Coral Sanctuaries",
    description:
      "From bustling Cartagena to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at San Juan, Miami, Bermuda, St. Thomas deliver a balanced blend of culture and comfort.",
    rating: 4.4,
    tags: ["culinary", "short-getaway"],
  },
  {
    basePrice: 5885,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
      ],
      description:
        "Set sail from Cartagena on this sun-drenched solstice through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Roatán and Fort Lauderdale and Tampa and Miami, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "798 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Cartagena to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Roatán to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Tampa to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Victor Hudson",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/85.jpg",
        contact: {
          contactEmail: "tranquil.resonance.o@velarivoyages.com",
          contactNumber: "+1-190-296-9519",
        },
      },
    ],
    title: "Tranquil Resonance of the Caribbean Rhythms",
    description:
      "Set sail from Cartagena on this sun-drenched solstice through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Roatán and Fort Lauderdale and Tampa and Miami, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.6,
    tags: ["general"],
  },
  {
    basePrice: 5791,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
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
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
        "Sail away from Cartagena into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Nassau, Roatán, Bermuda, Miami, where history, nature, and cuisine collide.",
      distance: "580 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Cartagena to Nassau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Nassau to Roatán",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Roatán to Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Bermuda to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Nassau",
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
          description: "Exploring Bermuda",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Thomas Mitchell",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "opulent.quest.of.the@velarivoyages.com",
          contactNumber: "+1-145-931-1904",
        },
      },
    ],
    title: "Opulent Quest of the Island Reverie",
    description:
      "Sail away from Cartagena into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Nassau, Roatán, Bermuda, Miami, where history, nature, and cuisine collide.",
    rating: 4.7,
    tags: ["themed-cruise", "cruise-ship", "cruise-experience"],
  },
  {
    basePrice: 7400,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
      ],
      description:
        "Sail away from the charming harbor of Cartagena on this extraordinary journey across Caribbean. Uncover the beauty and history of Miami, Bermuda with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1047 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Cartagena to Miami",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Miami to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Gary Spencer",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "refined.reunion.of.t@velarivoyages.com",
          contactNumber: "+1-305-527-9219",
        },
      },
    ],
    title: "Refined Reunion of the Caribbean Rhythms",
    description:
      "Sail away from the charming harbor of Cartagena on this extraordinary journey across Caribbean. Uncover the beauty and history of Miami, Bermuda with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.9,
    tags: ["historical", "cruise-holiday", "sightseeing"],
  },
  {
    basePrice: 8493,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
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
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "This extraordinary reflection from Cartagena offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Fort Lauderdale and Bermuda, creating memories that will last a lifetime.",
      distance: "894 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Cartagena to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Bermuda to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
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
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mark Holloway",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "secluded.saga.of.the@velarivoyages.com",
          contactNumber: "+1-246-521-9981",
        },
      },
    ],
    title: "Secluded Saga of the Sapphire Waters",
    description:
      "This extraordinary reflection from Cartagena offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Fort Lauderdale and Bermuda, creating memories that will last a lifetime.",
    rating: 4.8,
    tags: ["cruise-line", "romantic"],
  },
  {
    basePrice: 1406,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
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
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "Sail away from Cartagena into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Tampa, Miami, Philipsburg, Cozumel, where history, nature, and cuisine collide.",
      distance: "1067 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Cartagena to Tampa",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Tampa to Miami",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Philipsburg to Cozumel",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Cozumel to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Tampa",
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
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Carl Clark",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "crystalline.tranquil@velarivoyages.com",
          contactNumber: "+1-837-738-1560",
        },
      },
    ],
    title: "Crystalline Tranquility of the Turquoise Lagoons",
    description:
      "Sail away from Cartagena into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Tampa, Miami, Philipsburg, Cozumel, where history, nature, and cuisine collide.",
    rating: 4.0,
    tags: ["sightseeing", "adventure"],
  },
  {
    basePrice: 8370,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
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
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
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
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Cartagena. This whisper through the Caribbean unveils stunning stops including Tampa, Fort Lauderdale, Philipsburg, Cozumel, all with first-class service.",
      distance: "805 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Cartagena to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tampa to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Philipsburg to Cozumel",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Cozumel to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cartagena",
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
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Philipsburg",
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
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lucas Reed",
        role: "Sales Consultant",
        languages: ["English", "Spanish", "Aymara", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/47.jpg",
        contact: {
          contactEmail: "enchanting.drift.of.@velarivoyages.com",
          contactNumber: "+1-803-371-2321",
        },
      },
    ],
    title: "Enchanting Drift of the Caribbean Rhythms",
    description:
      "Step into a world of elegance and exploration from Cartagena. This whisper through the Caribbean unveils stunning stops including Tampa, Fort Lauderdale, Philipsburg, Cozumel, all with first-class service.",
    rating: 4.2,
    tags: ["cruise", "cruise-adventure", "fall-cruise"],
  },
  {
    basePrice: 3107,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
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
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Experience coastal elegance on this journey from Cartagena, where the journey through Caribbean includes stops in Cozumel, Fort Lauderdale, San Juan, each more enchanting than the last.",
      distance: "1103 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Cartagena to Cozumel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Cozumel to Fort Lauderdale",
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
          description: "Exploring Cartagena",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cozumel",
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
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Brenda Henderson",
        role: "Group Booking Coordinator",
        languages: ["English", "Aymara", "Spanish", "French", "Haitian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "majestic.wanderlust.@velarivoyages.com",
          contactNumber: "+1-822-940-4521",
        },
      },
    ],
    title: "Majestic Wanderlust of the Tropical Isles",
    description:
      "Experience coastal elegance on this journey from Cartagena, where the journey through Caribbean includes stops in Cozumel, Fort Lauderdale, San Juan, each more enchanting than the last.",
    rating: 4.0,
    tags: ["VIP"],
  },
  {
    basePrice: 6537,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    arrivalLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
          },
        },
      ],
      description:
        "Set off on a mythos from Cartagena that captures the essence of Caribbean. Discover cultural gems and culinary delights across Fort Lauderdale, George Town, Philipsburg.",
      distance: "740 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Cartagena to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to George Town",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from George Town to Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Philipsburg to Cartagena",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Griffin",
        role: "Group Booking Coordinator",
        languages: ["English", "Aymara", "Spanish", "French", "Haitian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "mystical.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-330-382-2301",
        },
      },
    ],
    title: "Mystical Odyssey of the Sun-Kissed Archipelago",
    description:
      "Set off on a mythos from Cartagena that captures the essence of Caribbean. Discover cultural gems and culinary delights across Fort Lauderdale, George Town, Philipsburg.",
    rating: 4.3,
    tags: ["family-friendly", "VIP"],
  },
  {
    basePrice: 3630,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
        "This handpicked wanderlust begins in Cartagena and travels through Caribbean's iconic waterscapes. Discover Roatán, Fort Lauderdale, Cozumel as each day brings new stories and every night offers elegant repose.",
      distance: "506 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Cartagena to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Roatán to Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Cozumel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Caroline Coleman",
        role: "Group Booking Coordinator",
        languages: ["English", "Aymara", "Spanish", "French", "Haitian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "moonlit.mythos.of.th@velarivoyages.com",
          contactNumber: "+1-363-971-5025",
        },
      },
    ],
    title: "Moonlit Mythos of the Pirate Passages",
    description:
      "This handpicked wanderlust begins in Cartagena and travels through Caribbean's iconic waterscapes. Discover Roatán, Fort Lauderdale, Cozumel as each day brings new stories and every night offers elegant repose.",
    rating: 4.2,
    tags: ["cruise-journey"],
  },
  {
    basePrice: 3602,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
      ],
      description:
        "Depart from iconic Cartagena and traverse the Caribbean with visits to Nassau, Miami. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1143 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Cartagena to Nassau",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Nassau to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Genesis Baker",
        role: "Group Booking Coordinator",
        languages: ["English", "Aymara", "Spanish", "French", "Haitian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "luminous.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-980-739-9962",
        },
      },
    ],
    title: "Luminous Mythos of the Rum-Laced Breezes",
    description:
      "Depart from iconic Cartagena and traverse the Caribbean with visits to Nassau, Miami. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.4,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 5050,
    departureLocation: {
      city: "Cartagena",
      country: "Colombia",
      region: "Caribbean",
      coordinates: {
        latitude: 10.391,
        longitude: -75.4794,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Cartagena",
          country: "Colombia",
          region: "Caribbean",
          coordinates: {
            latitude: 10.391,
            longitude: -75.4794,
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
      ],
      description:
        "This handpicked mystique begins in Cartagena and travels through Caribbean's iconic waterscapes. Discover Miami, Nassau as each day brings new stories and every night offers elegant repose.",
      distance: "1130 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Cartagena to Miami",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Miami to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Cartagena",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Sarah Murray",
        role: "Group Booking Coordinator",
        languages: ["English", "Aymara", "Spanish", "French", "Haitian"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "panoramic.quest.of.t@velarivoyages.com",
          contactNumber: "+1-169-249-6755",
        },
      },
    ],
    title: "Panoramic Quest of the Sapphire Waters",
    description:
      "This handpicked mystique begins in Cartagena and travels through Caribbean's iconic waterscapes. Discover Miami, Nassau as each day brings new stories and every night offers elegant repose.",
    rating: 4.3,
    tags: ["relaxation", "tropical"],
  },
];
