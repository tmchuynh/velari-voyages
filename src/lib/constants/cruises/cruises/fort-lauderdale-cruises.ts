import { Cruise } from "@/lib/interfaces/services/cruises";

export const fortLauderdaleCruises: Cruise[] = [
  {
    basePrice: 1151,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
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
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
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
          city: "St. Thomas",
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
        "Let this secluded voyage redefine your idea of travel. From Fort Lauderdale, explore the Caribbean in luxurious comfort, stopping at George Town, San Juan, St. Thomas, Nassau where every port offers a new chapter.",
      distance: "1031 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to George Town",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from George Town to San Juan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from San Juan to St. Thomas",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from St. Thomas to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Wells",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "tranquil.legacy.of.t@velarivoyages.com",
          contactNumber: "+1-480-771-5819",
        },
      },
    ],
    title: "Tranquil Legacy of the Caribbean Rhythms",
    description:
      "Let this secluded voyage redefine your idea of travel. From Fort Lauderdale, explore the Caribbean in luxurious comfort, stopping at George Town, San Juan, St. Thomas, Nassau where every port offers a new chapter.",
    rating: 4.3,
    tags: ["wildlife"],
  },
  {
    basePrice: 4010,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
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
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
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
        "Sail from Fort Lauderdale into a world of wonder. The Caribbean beckons with unforgettable ports like Miami, St. Thomas, San Juan, where every view is picture-perfect and every moment is priceless.",
      distance: "682 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Miami",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Miami to St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from St. Thomas to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Ellis",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
        contact: {
          contactEmail: "infinite.wanderlust.@velarivoyages.com",
          contactNumber: "+1-350-507-9176",
        },
      },
    ],
    title: "Infinite Wanderlust of the Sun-Kissed Archipelago",
    description:
      "Sail from Fort Lauderdale into a world of wonder. The Caribbean beckons with unforgettable ports like Miami, St. Thomas, San Juan, where every view is picture-perfect and every moment is priceless.",
    rating: 4.4,
    tags: ["romantic"],
  },
  {
    basePrice: 1786,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
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
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
      ],
      description:
        "This hand-selected unforgettable cruise offers a true taste of Caribbean. Depart from Fort Lauderdale and explore ports like Philipsburg, Cozumel, Bermuda, each telling a story through food, music, and tradition.",
      distance: "761 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Philipsburg to Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Cozumel to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Valentina Hamilton",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "floating.tranquility@velarivoyages.com",
          contactNumber: "+1-568-940-1353",
        },
      },
    ],
    title: "Floating Tranquility of the Harbor Mirage",
    description:
      "This hand-selected unforgettable cruise offers a true taste of Caribbean. Depart from Fort Lauderdale and explore ports like Philipsburg, Cozumel, Bermuda, each telling a story through food, music, and tradition.",
    rating: 4.4,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 1879,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
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
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
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
      ],
      description:
        "Experience coastal elegance on this solstice from Fort Lauderdale, where the journey through Caribbean includes stops in San Juan, St. Thomas, Cozumel, George Town, each more enchanting than the last.",
      distance: "1076 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to San Juan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from San Juan to St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from St. Thomas to Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Cozumel to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
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
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samantha Price",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/50.jpg",
        contact: {
          contactEmail: "idyllic.embrace.of.t@velarivoyages.com",
          contactNumber: "+1-497-208-2778",
        },
      },
    ],
    title: "Idyllic Embrace of the Harbor Mirage",
    description:
      "Experience coastal elegance on this solstice from Fort Lauderdale, where the journey through Caribbean includes stops in San Juan, St. Thomas, Cozumel, George Town, each more enchanting than the last.",
    rating: 4.3,
    tags: ["adventure", "cruise-vacation"],
  },
  {
    basePrice: 2252,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
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
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
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
        "Let the winds of the Caribbean carry you from Fort Lauderdale to the most stunning ports in the region. With destinations like Tampa, San Juan, Cozumel, Miami, this sojourn redefines luxury travel.",
      distance: "838 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Tampa to San Juan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from San Juan to Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Cozumel to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
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
          description: "Exploring San Juan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Brenda Jennings",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "forbidden.zenith.of.@velarivoyages.com",
          contactNumber: "+1-917-677-9680",
        },
      },
    ],
    title: "Forbidden Zenith of the Tropical Isles",
    description:
      "Let the winds of the Caribbean carry you from Fort Lauderdale to the most stunning ports in the region. With destinations like Tampa, San Juan, Cozumel, Miami, this sojourn redefines luxury travel.",
    rating: 4.9,
    tags: ["anniversary-cruise", "family-friendly"],
  },
  {
    basePrice: 3602,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
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
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
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
        "An unforgettable whisper awaits as you cruise from Fort Lauderdale across Caribbean. Dive into history, flavor, and culture with stops including St. Thomas, San Juan.",
      distance: "808 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Thomas to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Skylar Grant",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
        contact: {
          contactEmail: "enchanting.eclipse.o@velarivoyages.com",
          contactNumber: "+1-139-958-4754",
        },
      },
    ],
    title: "Enchanting Eclipse of the Pirate Passages",
    description:
      "An unforgettable whisper awaits as you cruise from Fort Lauderdale across Caribbean. Dive into history, flavor, and culture with stops including St. Thomas, San Juan.",
    rating: 4.6,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 3090,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
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
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
      ],
      description:
        "Escape into the calm waters of Caribbean with this unforgettable journey from Fort Lauderdale. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Tampa, San Juan, St. Thomas, Cozumel.",
      distance: "1261 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Tampa to San Juan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from San Juan to St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from St. Thomas to Cozumel",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Cozumel to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
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
          description: "Exploring San Juan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amy Bennett",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "pristine.journey.of.@velarivoyages.com",
          contactNumber: "+1-462-349-6114",
        },
      },
    ],
    title: "Pristine Journey of the Canal-Threaded Escape",
    description:
      "Escape into the calm waters of Caribbean with this unforgettable journey from Fort Lauderdale. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Tampa, San Juan, St. Thomas, Cozumel.",
    rating: 4.7,
    tags: ["themed-cruise", "cruise", "wildlife"],
  },
  {
    basePrice: 9933,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
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
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this refined enigma beginning in Fort Lauderdale. Visit breathtaking Caribbean locales such as Cozumel, Miami on this unforgettable itinerary.",
      distance: "569 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Cozumel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Cozumel to Miami",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Miami to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
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
          description: "Exploring Miami",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Jennifer Henderson",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "idyllic.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-911-935-6504",
        },
      },
    ],
    title: "Idyllic Horizon of the Harbor Mirage",
    description:
      "Enjoy seamless luxury on this refined enigma beginning in Fort Lauderdale. Visit breathtaking Caribbean locales such as Cozumel, Miami on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["themed-cruise", "long-distance"],
  },
  {
    basePrice: 5180,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
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
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
      ],
      description:
        "Depart from Fort Lauderdale on this thoughtfully designed wanderlust across the Caribbean. Savor coastal charm, cultural treasures, and ocean views with stops at Bermuda, Miami, Cozumel, Philipsburg.",
      distance: "747 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bermuda to Miami",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Miami to Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Cozumel to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Miami",
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
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Emma Murray",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "transcendent.passage@velarivoyages.com",
          contactNumber: "+1-713-813-9558",
        },
      },
    ],
    title: "Transcendent Passage of the Reggae Shores",
    description:
      "Depart from Fort Lauderdale on this thoughtfully designed wanderlust across the Caribbean. Savor coastal charm, cultural treasures, and ocean views with stops at Bermuda, Miami, Cozumel, Philipsburg.",
    rating: 4.3,
    tags: ["relaxation", "romantic"],
  },
  {
    basePrice: 4374,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
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
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
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
      ],
      description:
        "Enjoy seamless luxury on this oceanic pilgrimage beginning in Fort Lauderdale. Visit breathtaking Caribbean locales such as Roatán, St. Thomas, Philipsburg on this unforgettable itinerary.",
      distance: "515 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Roatán",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Roatán to St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from St. Thomas to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Adeline Carpenter",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "lavish.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-369-318-3953",
        },
      },
    ],
    title: "Lavish Odyssey of the Sugarcane Skies",
    description:
      "Enjoy seamless luxury on this oceanic pilgrimage beginning in Fort Lauderdale. Visit breathtaking Caribbean locales such as Roatán, St. Thomas, Philipsburg on this unforgettable itinerary.",
    rating: 4.3,
    tags: ["weekend-cruise", "glacier-cruise"],
  },
];
