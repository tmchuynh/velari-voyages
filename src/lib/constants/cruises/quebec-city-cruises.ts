import { Cruise } from "@/lib/interfaces/services/cruises";

export const quebecCityCruises: Cruise[] = [
  {
    basePrice: 5523,
    departureLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    arrivalLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
      ],
      description:
        "Escape the everyday with this starlit journey through East Coast Canada, departing from Quebec City. You'll visit Milan, Barcelona, where every stop is a new adventure.",
      distance: "849 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Quebec City to Milan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Barcelona to Quebec City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Quebec City",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Quebec City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thomas Cooper",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "celestial.panorama.o@velarivoyages.com",
          contactNumber: "+1-260-178-6722",
        },
      },
    ],
    title: "Celestial Panorama of the Harbor Havens",
    description:
      "Escape the everyday with this starlit journey through East Coast Canada, departing from Quebec City. You'll visit Milan, Barcelona, where every stop is a new adventure.",
    rating: 4.7,
    tags: ["culinary", "general", "long-distance"],
  },
  {
    basePrice: 3814,
    departureLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    arrivalLocation: {
      city: "Santorini",
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
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Discover the wonders of East Coast Canada aboard this oceanic cruise departing from Quebec City. Journey through crystal waters to explore the treasures of Rome, Santorini, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1446 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Quebec City to Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Rome to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Quebec City",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jordan Clark",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "transcendent.mythos.@velarivoyages.com",
          contactNumber: "+1-494-413-2540",
        },
      },
    ],
    title: "Transcendent Mythos of the Seaway Frontiers",
    description:
      "Discover the wonders of East Coast Canada aboard this oceanic cruise departing from Quebec City. Journey through crystal waters to explore the treasures of Rome, Santorini, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.4,
    tags: ["cruise-vacation", "exclusive"],
  },
  {
    basePrice: 3594,
    departureLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    arrivalLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
      ],
      description:
        "Sail away from Quebec City into the beautiful expanse of East Coast Canada. Along the way, enjoy rich cultural experiences in Athens, Florence, where history, nature, and cuisine collide.",
      distance: "1017 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Quebec City to Athens",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Athens to Florence",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Florence to Quebec City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Quebec City",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Quebec City",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Billy Mason",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "forbidden.sanctum.of@velarivoyages.com",
          contactNumber: "+1-518-240-2378",
        },
      },
    ],
    title: "Forbidden Sanctum of the Old World’s Flame",
    description:
      "Sail away from Quebec City into the beautiful expanse of East Coast Canada. Along the way, enjoy rich cultural experiences in Athens, Florence, where history, nature, and cuisine collide.",
    rating: 4.8,
    tags: ["cruise-holiday", "holiday-cruise", "luxury"],
  },
  {
    basePrice: 3621,
    departureLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    arrivalLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
      ],
      description:
        "This handpicked reverie begins in Quebec City and travels through East Coast Canada's iconic waterscapes. Discover Mykonos, Malta, Florence, Athens as each day brings new stories and every night offers elegant repose.",
      distance: "670 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Quebec City to Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Mykonos to Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Malta to Florence",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Athens to Quebec City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Quebec City",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Quebec City",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lawrence Warren",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "extraordinary.realm.@velarivoyages.com",
          contactNumber: "+1-232-730-4140",
        },
      },
    ],
    title: "Extraordinary Realm of the Walled Wonder",
    description:
      "This handpicked reverie begins in Quebec City and travels through East Coast Canada's iconic waterscapes. Discover Mykonos, Malta, Florence, Athens as each day brings new stories and every night offers elegant repose.",
    rating: 4.7,
    tags: ["repositioning", "long-distance", "short-getaway"],
  },
  {
    basePrice: 6565,
    departureLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    arrivalLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
      ],
      description:
        "This handpicked adventure begins in Quebec City and travels through East Coast Canada's iconic waterscapes. Discover Athens, Milan, Dubrovnik, Lisbon as each day brings new stories and every night offers elegant repose.",
      distance: "609 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Quebec City to Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Athens to Milan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Milan to Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Lisbon",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Lisbon to Quebec City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Quebec City",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Quebec City",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aaron Porter",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/38.jpg",
        contact: {
          contactEmail: "azure.legacy.of.the.@velarivoyages.com",
          contactNumber: "+1-803-184-6561",
        },
      },
    ],
    title: "Azure Legacy of the Time-Frozen Ramparts",
    description:
      "This handpicked adventure begins in Quebec City and travels through East Coast Canada's iconic waterscapes. Discover Athens, Milan, Dubrovnik, Lisbon as each day brings new stories and every night offers elegant repose.",
    rating: 4.3,
    tags: ["holiday-cruise", "cruise-journey", "anniversary-cruise"],
  },
  {
    basePrice: 9950,
    departureLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
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
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This spectacular cruise from Quebec City is your ticket to the captivating charm of the East Coast Canada. Discover the delights of Barcelona, Florence, Dubrovnik, Mykonos with enriching excursions and award-winning service.",
      distance: "1096 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Quebec City to Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Florence to Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Quebec City",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "George Henderson",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "secret.reflection.of@velarivoyages.com",
          contactNumber: "+1-235-118-9400",
        },
      },
    ],
    title: "Secret Reflection of the French-Canadian Crown",
    description:
      "This spectacular cruise from Quebec City is your ticket to the captivating charm of the East Coast Canada. Discover the delights of Barcelona, Florence, Dubrovnik, Mykonos with enriching excursions and award-winning service.",
    rating: 4.7,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 1066,
    departureLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    arrivalLocation: {
      city: "Malta",
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
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Quebec City. This horizon through the East Coast Canada unveils stunning stops including Rome, Malta, all with first-class service.",
      distance: "1297 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Quebec City to Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Rome to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Quebec City",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Philip Lawson",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "timeless.tide.of.the@velarivoyages.com",
          contactNumber: "+1-521-371-3515",
        },
      },
    ],
    title: "Timeless Tide of the Historic Lighthouses",
    description:
      "Step into a world of elegance and exploration from Quebec City. This horizon through the East Coast Canada unveils stunning stops including Rome, Malta, all with first-class service.",
    rating: 4.0,
    tags: ["relaxation", "expedition", "holiday-cruise"],
  },
  {
    basePrice: 3894,
    departureLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "This extraordinary mirage from Quebec City offers the ultimate East Coast Canada exploration. Immerse yourself in the rich cultures and stunning landscapes of Athens, Florence and Rome, creating memories that will last a lifetime.",
      distance: "1100 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Quebec City to Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Athens to Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Florence to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Quebec City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Carl Stewart",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "midnight.currents.of@velarivoyages.com",
          contactNumber: "+1-328-904-7006",
        },
      },
    ],
    title: "Midnight Currents of the Snow-Wrapped Citadel",
    description:
      "This extraordinary mirage from Quebec City offers the ultimate East Coast Canada exploration. Immerse yourself in the rich cultures and stunning landscapes of Athens, Florence and Rome, creating memories that will last a lifetime.",
    rating: 4.4,
    tags: ["weekend-cruise", "cruise", "cruise-line"],
  },
  {
    basePrice: 9540,
    departureLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    arrivalLocation: {
      city: "Santorini",
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
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
        {
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Set sail from Quebec City on this moonlit mythos through the heart of East Coast Canada. Experience the perfect blend of relaxation and adventure as you explore Lisbon and Athens and Venice and Santorini, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "978 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Quebec City to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lisbon to Athens",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Venice to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Quebec City",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Brian Baker",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "breathtaking.odyssey@velarivoyages.com",
          contactNumber: "+1-735-352-9692",
        },
      },
    ],
    title: "Breathtaking Odyssey of the French-Canadian Crown",
    description:
      "Set sail from Quebec City on this moonlit mythos through the heart of East Coast Canada. Experience the perfect blend of relaxation and adventure as you explore Lisbon and Athens and Venice and Santorini, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.8,
    tags: ["nature"],
  },
  {
    basePrice: 1547,
    departureLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    arrivalLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 46.8139,
        longitude: -71.2082,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Quebec City",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 46.8139,
            longitude: -71.2082,
          },
        },
      ],
      description:
        "This extraordinary escape from Quebec City offers the ultimate East Coast Canada exploration. Immerse yourself in the rich cultures and stunning landscapes of Venice, Rome, Athens and Florence, creating memories that will last a lifetime.",
      distance: "1238 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Quebec City to Venice",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Venice to Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Rome to Athens",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Athens to Florence",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Florence to Quebec City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Quebec City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Quebec City",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Bobby Douglas",
        role: "Loyalty Program Representative",
        languages: ["English", "Spanish", "Portuguese", "Haitian", "Guarani"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "timeless.elevation.o@velarivoyages.com",
          contactNumber: "+1-136-866-9303",
        },
      },
    ],
    title: "Timeless Elevation of the Harbor Havens",
    description:
      "This extraordinary escape from Quebec City offers the ultimate East Coast Canada exploration. Immerse yourself in the rich cultures and stunning landscapes of Venice, Rome, Athens and Florence, creating memories that will last a lifetime.",
    rating: 4.8,
    tags: ["adventure", "cruise-holiday", "holiday-cruise"],
  },
];
