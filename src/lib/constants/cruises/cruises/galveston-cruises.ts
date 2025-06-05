import { Cruise } from "@/lib/interfaces/services/cruises";

export const galvestonCruises: Cruise[] = [
  {
    basePrice: 5649,
    departureLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
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
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
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
        "An escape like no other begins in Galveston, where your expedition launches into the heart of Caribbean. Discover the magic of Cozumel, Philipsburg, Fort Lauderdale with style and sophistication.",
      distance: "1456 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Galveston to Cozumel",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Cozumel to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Philipsburg to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Galveston",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Cozumel",
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
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brooklyn Keller",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "tranquil.realm.of.th@velarivoyages.com",
          contactNumber: "+1-532-901-3376",
        },
      },
    ],
    title: "Tranquil Realm of the Salt and Steam Legacy",
    description:
      "An escape like no other begins in Galveston, where your expedition launches into the heart of Caribbean. Discover the magic of Cozumel, Philipsburg, Fort Lauderdale with style and sophistication.",
    rating: 4.6,
    tags: ["cruise-ship", "exclusive"],
  },
  {
    basePrice: 9396,
    departureLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
      },
    },
    arrivalLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
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
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this timeless realm departing Galveston. Savor local cuisine and uncover regional beauty from Fort Lauderdale to George Town.",
      distance: "1226 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Galveston to Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to George Town",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from George Town to Nassau",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Nassau to Roatán",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Sailing from Roatán to Galveston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Galveston",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 20",
          end: "Day 21",
          duration: "2 days",
          description: "Exploring Galveston",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Leah Harper",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "luminous.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-602-208-3491",
        },
      },
    ],
    title: "Luminous Sanctuary of the Historic Strand Portal",
    description:
      "Cruise into cultural richness aboard this timeless realm departing Galveston. Savor local cuisine and uncover regional beauty from Fort Lauderdale to George Town.",
    rating: 4.4,
    tags: ["VIP"],
  },
  {
    basePrice: 2651,
    departureLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
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
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
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
        "Embark from Galveston and traverse the Caribbean in style. Whether it’s the energy of San Juan or the calm of Nassau, each destination reveals a new side of paradise.",
      distance: "1383 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Galveston to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from San Juan to Nassau",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Nassau to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Galveston",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Nora Mason",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "epic.wanderlust.of.t@velarivoyages.com",
          contactNumber: "+1-230-102-6145",
        },
      },
    ],
    title: "Epic Wanderlust of the Lone Star Port",
    description:
      "Embark from Galveston and traverse the Caribbean in style. Whether it’s the energy of San Juan or the calm of Nassau, each destination reveals a new side of paradise.",
    rating: 4.1,
    tags: ["nature", "adventure"],
  },
  {
    basePrice: 4297,
    departureLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
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
        "Set sail from historic Galveston for a modern escape into the Caribbean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Roatán, San Juan, Cozumel.",
      distance: "798 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Galveston to Roatán",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Roatán to San Juan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from San Juan to Cozumel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Galveston",
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
          description: "Exploring San Juan",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Valentina Gibson",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "infinite.resonance.o@velarivoyages.com",
          contactNumber: "+1-652-437-4119",
        },
      },
    ],
    title: "Infinite Resonance of the Salt and Steam Legacy",
    description:
      "Set sail from historic Galveston for a modern escape into the Caribbean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Roatán, San Juan, Cozumel.",
    rating: 4.7,
    tags: ["cruise-excursion", "cruise-holiday"],
  },
  {
    basePrice: 2013,
    departureLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
      },
    },
    arrivalLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
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
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
          },
        },
      ],
      description:
        "Set sail from Galveston for a voyage like no other. From the picturesque landscapes of Philipsburg to the lively ambiance of Nassau, this lavish cruise will redefine your view of Caribbean.",
      distance: "1156 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Galveston to Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Philipsburg to Nassau",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Nassau to Tampa",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Tampa to Galveston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Galveston",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Galveston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lerato Graham",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "idyllic.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-796-375-8756",
        },
      },
    ],
    title: "Idyllic Odyssey of the Lone Star Port",
    description:
      "Set sail from Galveston for a voyage like no other. From the picturesque landscapes of Philipsburg to the lively ambiance of Nassau, this lavish cruise will redefine your view of Caribbean.",
    rating: 4.9,
    tags: ["holiday-cruise", "historical"],
  },
  {
    basePrice: 6082,
    departureLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
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
      ],
      description:
        "Your expedition begins in Galveston, where every sunset on the Caribbean horizon promises another day of discovery—from Fort Lauderdale, Tampa to hidden ports of charm.",
      distance: "1138 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Galveston to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Galveston",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Deborah Hall",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "pristine.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-267-139-4958",
        },
      },
    ],
    title: "Pristine Mythos of the Gulf Gateway",
    description:
      "Your expedition begins in Galveston, where every sunset on the Caribbean horizon promises another day of discovery—from Fort Lauderdale, Tampa to hidden ports of charm.",
    rating: 4.8,
    tags: ["repositioning"],
  },
  {
    basePrice: 9325,
    departureLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
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
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
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
      ],
      description:
        "This moonlit discovery begins in Galveston and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at St. Thomas, Bermuda, Nassau, Philipsburg.",
      distance: "1031 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Galveston to St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Bermuda to Nassau",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Nassau to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Galveston",
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
          description: "Exploring Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sophia Price",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "verdant.labyrinth.of@velarivoyages.com",
          contactNumber: "+1-339-836-5596",
        },
      },
    ],
    title: "Verdant Labyrinth of the Coral Sanctuaries",
    description:
      "This moonlit discovery begins in Galveston and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at St. Thomas, Bermuda, Nassau, Philipsburg.",
    rating: 4.5,
    tags: ["sightseeing"],
  },
  {
    basePrice: 1704,
    departureLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
      },
    },
    arrivalLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
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
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
          },
        },
      ],
      description:
        "Escape to sea from Galveston on a immersive voyage exploring the magic of Caribbean. Visit unforgettable locales like Roatán, Fort Lauderdale, Tampa, Miami, where each stop inspires awe.",
      distance: "1145 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Galveston to Roatán",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Roatán to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tampa to Miami",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Miami to Galveston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Galveston",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Roatán",
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
          description: "Exploring Tampa",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Galveston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zola Fletcher",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "oceanic.wanderlust.o@velarivoyages.com",
          contactNumber: "+1-542-393-3502",
        },
      },
    ],
    title: "Oceanic Wanderlust of the Gulf Gateway",
    description:
      "Escape to sea from Galveston on a immersive voyage exploring the magic of Caribbean. Visit unforgettable locales like Roatán, Fort Lauderdale, Tampa, Miami, where each stop inspires awe.",
    rating: 4.0,
    tags: ["nature", "sightseeing"],
  },
  {
    basePrice: 9901,
    departureLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
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
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
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
        "Escape to sea from Galveston on a dreamlike voyage exploring the magic of Caribbean. Visit unforgettable locales like Bermuda, Fort Lauderdale, where each stop inspires awe.",
      distance: "653 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Galveston to Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Galveston",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Murray",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "crystalline.tide.of.@velarivoyages.com",
          contactNumber: "+1-134-815-8167",
        },
      },
    ],
    title: "Crystalline Tide of the Windswept Sentinel",
    description:
      "Escape to sea from Galveston on a dreamlike voyage exploring the magic of Caribbean. Visit unforgettable locales like Bermuda, Fort Lauderdale, where each stop inspires awe.",
    rating: 4.9,
    tags: ["themed-cruise", "fall-cruise", "cruise-vacation"],
  },
  {
    basePrice: 6634,
    departureLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
      },
    },
    arrivalLocation: {
      city: "Galveston",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.301348,
        longitude: -94.797695,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
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
          city: "Galveston",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.301348,
            longitude: -94.797695,
          },
        },
      ],
      description:
        "Set sail from Galveston on this moonlit reverie through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Fort Lauderdale and San Juan, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1160 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Galveston to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from San Juan to Galveston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Galveston",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Galveston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sofia Hayes",
        role: "Travel Advisor",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "legendary.infinite.o@velarivoyages.com",
          contactNumber: "+1-863-395-5830",
        },
      },
    ],
    title: "Legendary Infinite of the Salt and Steam Legacy",
    description:
      "Set sail from Galveston on this moonlit reverie through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Fort Lauderdale and San Juan, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.2,
    tags: ["historical"],
  },
];
