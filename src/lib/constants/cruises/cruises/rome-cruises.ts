import { Cruise } from "@/lib/interfaces/services/cruises";

export const romeCruises: Cruise[] = [
  {
    basePrice: 7361,
    departureLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    arrivalLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    }
  },
  {
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Unwind and explore on this realm through Mediterranean, departing from Rome. With every stop—from Malta to Venice—you’ll collect memories that last a lifetime.",
      distance: "700 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Rome to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Venice"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Venice to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Zola Keller",
        role: "Reservations Agent",
        languages: ["English","Italian","Czech","Dutch","Danish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
        contact: {
          contactEmail: "breathtaking.saga.of@velarivoyages.com",
          contactNumber: "+1-855-988-3285"
        }
      }
    ],
    title: "Breathtaking Saga of the Legacy of Empires",
    description: "Unwind and explore on this realm through Mediterranean, departing from Rome. With every stop—from Malta to Venice—you’ll collect memories that last a lifetime.",
    rating: 4.9,
    tags: ["long-distance","tropical"]
  },
  {
    basePrice: 7501,
    departureLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    arrivalLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Experience the elegance of the seas on this infinite wanderlust through Mediterranean, starting from the illustrious port of Rome. From Lisbon, Milan, Santorini to Athens, each destination offers its own story, culture, and breathtaking views.",
      distance: "959 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Rome to Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Milan"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Milan to Santorini"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 19",
    "end": "Day 20",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Stella Graves",
        role: "Reservations Agent",
        languages: ["English","Italian","Czech","Dutch","Danish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "ornate.frontier.of.t@velarivoyages.com",
          contactNumber: "+1-733-167-3163"
        }
      }
    ],
    title: "Ornate Frontier of the Sunset Over Seven Hills",
    description: "Experience the elegance of the seas on this infinite wanderlust through Mediterranean, starting from the illustrious port of Rome. From Lisbon, Milan, Santorini to Athens, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.5,
    tags: ["wildlife"]
  },
  {
    basePrice: 8787,
    departureLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    arrivalLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Depart from iconic Rome and traverse the Mediterranean with visits to Mykonos, Lisbon, Dubrovnik. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "571 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Lisbon"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Angela Fisher",
        role: "Reservations Agent",
        languages: ["English","Italian","Czech","Dutch","Danish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/93.jpg",
        contact: {
          contactEmail: "captivating.elevatio@velarivoyages.com",
          contactNumber: "+1-504-944-4722"
        }
      }
    ],
    title: "Captivating Elevation of the Eternal City",
    description: "Depart from iconic Rome and traverse the Mediterranean with visits to Mykonos, Lisbon, Dubrovnik. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.9,
    tags: ["glacier-cruise","romantic"]
  },
  {
    basePrice: 7138,
    departureLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    arrivalLocation: {
  "city": "Santorini",
  "country": "Greece",
  "coordinates": {
    "latitude": 36.3932,
    "longitude": 25.4615
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    }
  },
  {
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  }
],
      description: "Set off on a exploration from Rome that captures the essence of Mediterranean. Discover cultural gems and culinary delights across Athens, Venice, Malta, Santorini.",
      distance: "733 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Venice"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Venice to Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Scarlett West",
        role: "Reservations Agent",
        languages: ["English","Italian","Czech","Dutch","Danish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "crystalline.resonanc@velarivoyages.com",
          contactNumber: "+1-931-179-9438"
        }
      }
    ],
    title: "Crystalline Resonance of the Temple of Time",
    description: "Set off on a exploration from Rome that captures the essence of Mediterranean. Discover cultural gems and culinary delights across Athens, Venice, Malta, Santorini.",
    rating: 4.4,
    tags: ["culinary","luxury","relaxation"]
  },
  {
    basePrice: 1595,
    departureLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    arrivalLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Sail into splendor from Rome on a starlit voyage through Mediterranean. Let each stop—from Florence to Athens—reveal the unique flavors and colors of the region.",
      distance: "642 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Rome to Florence"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Florence to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Samantha Morgan",
        role: "Reservations Agent",
        languages: ["English","Italian","Czech","Dutch","Danish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "charming.renaissance@velarivoyages.com",
          contactNumber: "+1-415-618-1377"
        }
      }
    ],
    title: "Charming Renaissance of the Temple of Time",
    description: "Sail into splendor from Rome on a starlit voyage through Mediterranean. Let each stop—from Florence to Athens—reveal the unique flavors and colors of the region.",
    rating: 4.7,
    tags: ["tropical"]
  },
  {
    basePrice: 8733,
    departureLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    arrivalLocation: {
  "city": "Malta",
  "country": "Malta",
  "coordinates": {
    "latitude": 35.9375,
    "longitude": 14.3754
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    }
  }
],
      description: "Experience the elegance of the seas on this tranquil sanctum through Mediterranean, starting from the illustrious port of Rome. From Venice, Santorini, Lisbon to Malta, each destination offers its own story, culture, and breathtaking views.",
      distance: "712 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Rome to Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Venice to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Santorini to Lisbon"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Pamela Murray",
        role: "Reservations Agent",
        languages: ["English","Italian","Czech","Dutch","Danish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/92.jpg",
        contact: {
          contactEmail: "ornate.frontier.of.t@velarivoyages.com",
          contactNumber: "+1-156-279-3540"
        }
      }
    ],
    title: "Ornate Frontier of the Sunset Terraces",
    description: "Experience the elegance of the seas on this tranquil sanctum through Mediterranean, starting from the illustrious port of Rome. From Venice, Santorini, Lisbon to Malta, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.2,
    tags: ["expedition","themed-cruise"]
  },
  {
    basePrice: 4002,
    departureLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    arrivalLocation: {
  "city": "Malta",
  "country": "Malta",
  "coordinates": {
    "latitude": 35.9375,
    "longitude": 14.3754
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    }
  }
],
      description: "Leave stress behind with this curated requiem from Rome. Sail across the best of Mediterranean and explore treasures like Lisbon, Barcelona, Milan, Malta with comfort and style.",
      distance: "640 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Rome to Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Milan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Milan to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Grace Grant",
        role: "Reservations Agent",
        languages: ["English","Italian","Czech","Dutch","Danish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "floating.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-534-131-6926"
        }
      }
    ],
    title: "Floating Eclipse of the Ancient Empire’s Core",
    description: "Leave stress behind with this curated requiem from Rome. Sail across the best of Mediterranean and explore treasures like Lisbon, Barcelona, Milan, Malta with comfort and style.",
    rating: 4.1,
    tags: ["short-getaway","luxury","tropical"]
  },
  {
    basePrice: 5316,
    departureLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    arrivalLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  }
],
      description: "This handpicked wanderlust begins in Rome and travels through Mediterranean's iconic waterscapes. Discover Milan, Dubrovnik as each day brings new stories and every night offers elegant repose.",
      distance: "1373 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Rome to Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Milan to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Mason",
        role: "Reservations Agent",
        languages: ["English","Italian","Czech","Dutch","Danish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "mystical.exploration@velarivoyages.com",
          contactNumber: "+1-552-695-4252"
        }
      }
    ],
    title: "Mystical Exploration of the Whispers in Marble",
    description: "This handpicked wanderlust begins in Rome and travels through Mediterranean's iconic waterscapes. Discover Milan, Dubrovnik as each day brings new stories and every night offers elegant repose.",
    rating: 4.9,
    tags: ["sightseeing","repositioning","short-getaway"]
  },
  {
    basePrice: 8986,
    departureLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    arrivalLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fjords-tour",
    itinerary: {
      route: [
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "This hand-selected epic cruise offers a true taste of Mediterranean. Depart from Rome and explore ports like Dubrovnik, Malta, each telling a story through food, music, and tradition.",
      distance: "719 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Malta to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Maxwell",
        role: "Reservations Agent",
        languages: ["English","Italian","Czech","Dutch","Danish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "oceanic.elevation.of@velarivoyages.com",
          contactNumber: "+1-155-875-4193"
        }
      }
    ],
    title: "Oceanic Elevation of the Ancient Empire’s Core",
    description: "This hand-selected epic cruise offers a true taste of Mediterranean. Depart from Rome and explore ports like Dubrovnik, Malta, each telling a story through food, music, and tradition.",
    rating: 4.7,
    tags: ["long-distance","general"]
  },
  {
    basePrice: 2879,
    departureLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "This hand-selected velvet cruise offers a true taste of Mediterranean. Depart from Rome and explore ports like Mykonos, Florence, Lisbon, each telling a story through food, music, and tradition.",
      distance: "1187 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Florence"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Florence to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Mary Sutton",
        role: "Reservations Agent",
        languages: ["English","Italian","Czech","Dutch","Danish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/47.jpg",
        contact: {
          contactEmail: "mystical.reflection.@velarivoyages.com",
          contactNumber: "+1-431-368-3816"
        }
      }
    ],
    title: "Mystical Reflection of the Marble Cities",
    description: "This hand-selected velvet cruise offers a true taste of Mediterranean. Depart from Rome and explore ports like Mykonos, Florence, Lisbon, each telling a story through food, music, and tradition.",
    rating: 4.8,
    tags: ["cruise-ship","themed-cruise","glacier-cruise"]
  }
];
