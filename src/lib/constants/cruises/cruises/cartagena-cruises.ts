import { Cruise } from "@/lib/interfaces/services/cruises";

export const cartagenaCruises: Cruise[] = [
  {
    basePrice: 7513,
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
    category: "luxury-cruise",
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
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Depart from the iconic port of Cartagena and sail through the enchanting Caribbean. Explore vibrant destinations like Bermuda, Miami, each offering its own unique charm and local flair.",
      distance: "1116 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Cartagena to Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 4",
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
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Allison Spencer",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "mystical.currents.of@velarivoyages.com",
          contactNumber: "+1-578-273-4897",
        },
      },
    ],
    title: "Mystical Currents of the Island Reverie",
    description:
      "Depart from the iconic port of Cartagena and sail through the enchanting Caribbean. Explore vibrant destinations like Bermuda, Miami, each offering its own unique charm and local flair.",
    rating: 4.8,
    tags: ["cruise-getaway", "anniversary-cruise"],
  },
  {
    basePrice: 1003,
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
    category: "glacier-cruise",
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
        "Cruise into cultural richness aboard this transcendent elevation departing Cartagena. Savor local cuisine and uncover regional beauty from Cozumel to St. Thomas.",
      distance: "1251 nautical miles",
      totalDuration: "14 days",
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
          description: "Sailing from Cozumel to St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from St. Thomas to Philipsburg",
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
          description: "Exploring St. Thomas",
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
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Cynthia Nash",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "tranquil.discovery.o@velarivoyages.com",
          contactNumber: "+1-447-461-2010",
        },
      },
    ],
    title: "Tranquil Discovery of the Tropical Isles",
    description:
      "Cruise into cultural richness aboard this transcendent elevation departing Cartagena. Savor local cuisine and uncover regional beauty from Cozumel to St. Thomas.",
    rating: 4.3,
    tags: ["fall-cruise", "wildlife", "sightseeing"],
  },
  {
    basePrice: 8734,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
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
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Set sail from historic Cartagena for a modern escape into the Caribbean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Roatán, Bermuda, Nassau, San Juan.",
      distance: "1451 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Cartagena to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Roatán to Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Bermuda to Nassau",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Nassau to San Juan",
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
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Nassau",
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
        name: "Patricia Gibson",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "sublime.lullaby.of.t@velarivoyages.com",
          contactNumber: "+1-404-260-2257",
        },
      },
    ],
    title: "Sublime Lullaby of the Sun-Kissed Archipelago",
    description:
      "Set sail from historic Cartagena for a modern escape into the Caribbean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Roatán, Bermuda, Nassau, San Juan.",
    rating: 4.7,
    tags: ["tropical", "culinary"],
  },
  {
    basePrice: 9688,
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
    category: "fall-foliage-cruise",
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
        "Step into a world of elegance and exploration from Cartagena. This voyage through the Caribbean unveils stunning stops including Tampa, Philipsburg, George Town, St. Thomas, all with first-class service.",
      distance: "511 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Cartagena to Tampa",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Philipsburg to George Town",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from George Town to St. Thomas",
        },
        {
          start: "Day 17",
          end: "Day 18",
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
          description: "Exploring Tampa",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 19",
          end: "Day 20",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Leah Nash",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "enchanting.pilgrimag@velarivoyages.com",
          contactNumber: "+1-999-903-8592",
        },
      },
    ],
    title: "Enchanting Pilgrimage of the Tropical Isles",
    description:
      "Step into a world of elegance and exploration from Cartagena. This voyage through the Caribbean unveils stunning stops including Tampa, Philipsburg, George Town, St. Thomas, all with first-class service.",
    rating: 4.7,
    tags: ["family-friendly"],
  },
  {
    basePrice: 7660,
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
    category: "glacier-cruise",
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
      ],
      description:
        "This saga takes you beyond the ordinary, starting in Cartagena. With breathtaking stops in Nassau, Fort Lauderdale, Philipsburg, George Town, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "793 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Cartagena to Nassau",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Nassau to Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Philipsburg to George Town",
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
          description: "Exploring Nassau",
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
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Maria Henderson",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "sundrenched.requiem.@velarivoyages.com",
          contactNumber: "+1-522-911-3635",
        },
      },
    ],
    title: "Sun-Drenched Requiem of the Sapphire Waters",
    description:
      "This saga takes you beyond the ordinary, starting in Cartagena. With breathtaking stops in Nassau, Fort Lauderdale, Philipsburg, George Town, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.4,
    tags: ["fall-cruise", "sightseeing"],
  },
  {
    basePrice: 4635,
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
      city: "Roatán",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
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
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this mystical odyssey beginning in Cartagena. Visit breathtaking Caribbean locales such as Fort Lauderdale, Roatán on this unforgettable itinerary.",
      distance: "1406 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Cartagena to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Roatán",
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
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Mia Chambers",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "heavenly.quest.of.th@velarivoyages.com",
          contactNumber: "+1-557-725-3542",
        },
      },
    ],
    title: "Heavenly Quest of the Sapphire Waters",
    description:
      "Enjoy seamless luxury on this mystical odyssey beginning in Cartagena. Visit breathtaking Caribbean locales such as Fort Lauderdale, Roatán on this unforgettable itinerary.",
    rating: 4.1,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 3876,
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
    category: "fjords-tour",
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
          city: "Roatán",
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
        "Embark on an unforgettable enigma from the vibrant port of Cartagena, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Bermuda, Roatán, this journey combines cultural immersion with breathtaking scenery.",
      distance: "641 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Cartagena to Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bermuda to Roatán",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Roatán to Cartagena",
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
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Alexa Campbell",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "immersive.reflection@velarivoyages.com",
          contactNumber: "+1-854-322-4406",
        },
      },
    ],
    title: "Immersive Reflection of the Sapphire Waters",
    description:
      "Embark on an unforgettable enigma from the vibrant port of Cartagena, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Bermuda, Roatán, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.6,
    tags: ["cruise-holiday", "long-distance"],
  },
  {
    basePrice: 3016,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
      ],
      description:
        "Board in Cartagena for a hand-crafted reverie through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Fort Lauderdale, Philipsburg.",
      distance: "1281 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Cartagena to Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
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
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Abigail Crawford",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "secret.frontier.of.t@velarivoyages.com",
          contactNumber: "+1-800-332-6392",
        },
      },
    ],
    title: "Secret Frontier of the Tropical Isles",
    description:
      "Board in Cartagena for a hand-crafted reverie through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Fort Lauderdale, Philipsburg.",
    rating: 5.0,
    tags: ["short-getaway", "cruise-vacation"],
  },
  {
    basePrice: 4053,
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
    category: "theme-cruise",
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
        "An unforgettable excursion awaits as you cruise from Cartagena across Caribbean. Dive into history, flavor, and culture with stops including Fort Lauderdale, Nassau, Miami.",
      distance: "643 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Cartagena to Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Nassau",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
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
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Nassau",
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
        name: "Donna Gardner",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/47.jpg",
        contact: {
          contactEmail: "moonlit.zenith.of.th@velarivoyages.com",
          contactNumber: "+1-115-492-3441",
        },
      },
    ],
    title: "Moonlit Zenith of the Island Reverie",
    description:
      "An unforgettable excursion awaits as you cruise from Cartagena across Caribbean. Dive into history, flavor, and culture with stops including Fort Lauderdale, Nassau, Miami.",
    rating: 5.0,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 5360,
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
    category: "theme-cruise",
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
        "Set sail from Cartagena on this awe-inspiring legacy through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Cozumel and Bermuda and Fort Lauderdale, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "683 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Cartagena to Cozumel",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Cozumel to Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Cartagena",
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
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Cartagena",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Sophia Hunter",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "radiancedrenched.rev@velarivoyages.com",
          contactNumber: "+1-709-928-1759",
        },
      },
    ],
    title: "Radiance-Drenched Reverie of the Sapphire Waters",
    description:
      "Set sail from Cartagena on this awe-inspiring legacy through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Cozumel and Bermuda and Fort Lauderdale, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.9,
    tags: ["culinary", "short-getaway", "tropical"],
  },
];
