import { Cruise } from "@/lib/interfaces/services/cruises";

export const dubrovnikCruises: Cruise[] = [
  {
    basePrice: 3417,
    departureLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
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
          city: "Dubrovnik",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail away from Dubrovnik into the beautiful expanse of Dubrovnik. Along the way, enjoy rich cultural experiences in Rome, Venice, where history, nature, and cuisine collide.",
      distance: "1233 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Rome to Venice",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Venice to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Johnny Dean",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Chinese", "French", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "whispering.whisper.o@velarivoyages.com",
          contactNumber: "+1-761-845-2310",
        },
      },
    ],
    title: "Whispering Whisper of the Exotic Realms",
    description:
      "Sail away from Dubrovnik into the beautiful expanse of Dubrovnik. Along the way, enjoy rich cultural experiences in Rome, Venice, where history, nature, and cuisine collide.",
    rating: 4.6,
    tags: ["glacier-cruise", "fall-cruise", "sightseeing"],
  },
  {
    basePrice: 8660,
    departureLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "",
          region: "",
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
      ],
      description:
        "A voyage of contrasts awaits from Dubrovnik. Discover the historical and natural richness of Dubrovnik as you cruise to spectacular destinations like Florence, Milan, Lisbon.",
      distance: "816 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Florence to Milan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Milan to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Paul Wallace",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Chinese", "French", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "lavish.symphony.of.t@velarivoyages.com",
          contactNumber: "+1-781-903-2902",
        },
      },
    ],
    title: "Lavish Symphony of the Exotic Realms",
    description:
      "A voyage of contrasts awaits from Dubrovnik. Discover the historical and natural richness of Dubrovnik as you cruise to spectacular destinations like Florence, Milan, Lisbon.",
    rating: 4.2,
    tags: ["nature"],
  },
  {
    basePrice: 8432,
    departureLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
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
          city: "Dubrovnik",
          country: "",
          region: "",
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
        {
          city: "Santorini",
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
          city: "Dubrovnik",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Escape to sea from Dubrovnik on a timeless voyage exploring the magic of Dubrovnik. Visit unforgettable locales like Florence, Rome, Santorini, Venice, where each stop inspires awe.",
      distance: "752 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Florence to Rome",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Rome to Santorini",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Santorini to Venice",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Venice to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Billy Henderson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Chinese", "French", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "extraordinary.escape@velarivoyages.com",
          contactNumber: "+1-193-844-4293",
        },
      },
    ],
    title: "Extraordinary Escape of the Exotic Realms",
    description:
      "Escape to sea from Dubrovnik on a timeless voyage exploring the magic of Dubrovnik. Visit unforgettable locales like Florence, Rome, Santorini, Venice, where each stop inspires awe.",
    rating: 4.8,
    tags: ["fall-cruise", "cruise-vacation"],
  },
  {
    basePrice: 7951,
    departureLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
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
          city: "Dubrovnik",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Embark from Dubrovnik and traverse the Dubrovnik in style. Whether it’s the energy of Rome or the calm of Venice, each destination reveals a new side of paradise.",
      distance: "1127 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Rome to Venice",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Venice to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Lisbon to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Antonio Dean",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Chinese", "French", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "unforgettable.pulse.@velarivoyages.com",
          contactNumber: "+1-677-690-2539",
        },
      },
    ],
    title: "Unforgettable Pulse of the Exotic Realms",
    description:
      "Embark from Dubrovnik and traverse the Dubrovnik in style. Whether it’s the energy of Rome or the calm of Venice, each destination reveals a new side of paradise.",
    rating: 4.4,
    tags: ["VIP", "cruise-adventure", "cultural"],
  },
  {
    basePrice: 2726,
    departureLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
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
          city: "Dubrovnik",
          country: "",
          region: "",
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
          city: "Mykonos",
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
          city: "Dubrovnik",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Depart from the iconic port of Dubrovnik and sail through the enchanting Dubrovnik. Explore vibrant destinations like Malta, Mykonos, Florence, Athens, each offering its own unique charm and local flair.",
      distance: "877 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Malta to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Mykonos to Florence",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Athens to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mateo Nash",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Chinese", "French", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/92.jpg",
        contact: {
          contactEmail: "mesmerizing.horizon.@velarivoyages.com",
          contactNumber: "+1-291-340-2340",
        },
      },
    ],
    title: "Mesmerizing Horizon of the Exotic Realms",
    description:
      "Depart from the iconic port of Dubrovnik and sail through the enchanting Dubrovnik. Explore vibrant destinations like Malta, Mykonos, Florence, Athens, each offering its own unique charm and local flair.",
    rating: 4.9,
    tags: ["cruise-ship", "glacier-cruise", "family-friendly"],
  },
  {
    basePrice: 2341,
    departureLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "",
          region: "",
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your forbidden journey from Dubrovnik. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Milan, Barcelona, Santorini, Venice.",
      distance: "1347 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Barcelona to Santorini",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Santorini to Venice",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Venice to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 18",
          end: "Day 18",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "David Clark",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Chinese", "French", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/62.jpg",
        contact: {
          contactEmail: "unforgettable.elevat@velarivoyages.com",
          contactNumber: "+1-116-141-9169",
        },
      },
    ],
    title: "Unforgettable Elevation of the Exotic Realms",
    description:
      "Let the spirit of exploration guide your forbidden journey from Dubrovnik. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Milan, Barcelona, Santorini, Venice.",
    rating: 4.8,
    tags: ["general", "cruise-journey"],
  },
  {
    basePrice: 7252,
    departureLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Begin a captivating retreat through the Dubrovnik, departing Dubrovnik. With visits to Athens, Barcelona, Lisbon, Malta, each day brings a new adventure and deeper connection to the region.",
      distance: "738 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Athens to Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Barcelona to Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Lisbon to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
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
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lucas Griffin",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Chinese", "French", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "idyllic.elevation.of@velarivoyages.com",
          contactNumber: "+1-316-660-7433",
        },
      },
    ],
    title: "Idyllic Elevation of the Exotic Realms",
    description:
      "Begin a captivating retreat through the Dubrovnik, departing Dubrovnik. With visits to Athens, Barcelona, Lisbon, Malta, each day brings a new adventure and deeper connection to the region.",
    rating: 4.1,
    tags: ["relaxation"],
  },
  {
    basePrice: 6499,
    departureLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "",
          region: "",
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
          city: "Santorini",
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Dubrovnik on this tide-washed journey across Dubrovnik. Uncover the beauty and history of Lisbon, Santorini, Florence, Barcelona with curated excursions, world-class cuisine, and exceptional service.",
      distance: "769 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Santorini to Florence",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Florence to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Patrick Knight",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Chinese", "French", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
        contact: {
          contactEmail: "velvet.legacy.of.the@velarivoyages.com",
          contactNumber: "+1-759-580-7765",
        },
      },
    ],
    title: "Velvet Legacy of the Exotic Realms",
    description:
      "Sail away from the charming harbor of Dubrovnik on this tide-washed journey across Dubrovnik. Uncover the beauty and history of Lisbon, Santorini, Florence, Barcelona with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.6,
    tags: ["nature", "cruise-journey"],
  },
  {
    basePrice: 9208,
    departureLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "",
          region: "",
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
      ],
      description:
        "Set sail from Dubrovnik for a voyage like no other. From the picturesque landscapes of Milan to the lively ambiance of Athens, this mythic cruise will redefine your view of Dubrovnik.",
      distance: "906 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Milan to Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Athens to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ronald Jennings",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Chinese", "French", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "azure.journey.of.the@velarivoyages.com",
          contactNumber: "+1-272-339-3429",
        },
      },
    ],
    title: "Azure Journey of the Exotic Realms",
    description:
      "Set sail from Dubrovnik for a voyage like no other. From the picturesque landscapes of Milan to the lively ambiance of Athens, this mythic cruise will redefine your view of Dubrovnik.",
    rating: 4.8,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 9725,
    departureLocation: {
      city: "Dubrovnik",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Dubrovnik",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Start in the vibrant city of Dubrovnik and venture into the iconic Dubrovnik. Discover authentic local cultures, cuisine, and coastal wonders in Santorini, Florence.",
      distance: "1307 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bryan West",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Chinese", "French", "Japanese", "Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "radiancedrenched.req@velarivoyages.com",
          contactNumber: "+1-759-785-6307",
        },
      },
    ],
    title: "Radiance-Drenched Requiem of the Exotic Realms",
    description:
      "Start in the vibrant city of Dubrovnik and venture into the iconic Dubrovnik. Discover authentic local cultures, cuisine, and coastal wonders in Santorini, Florence.",
    rating: 4.9,
    tags: ["adventure"],
  },
];
