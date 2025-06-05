import { Cruise } from "@/lib/interfaces/services/cruises";

export const sanFranciscoCruises: Cruise[] = [
  {
    basePrice: 7996,
    departureLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    arrivalLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "Your frontier begins in San Francisco, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Lisbon to the historic streets of Athens, each stop in the West Coast USA will leave a lasting impression.",
      distance: "926 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Athens to San Francisco"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Helen Nash",
        role: "Reservations Agent",
        languages: ["English","Guarani","Quechua"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/50.jpg",
        contact: {
          contactEmail: "sundrenched.odyssey.@velarivoyages.com",
          contactNumber: "+1-817-392-4082"
        }
      }
    ],
    title: "Sun-Drenched Odyssey of the Sunset Horizon",
    description: "Your frontier begins in San Francisco, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Lisbon to the historic streets of Athens, each stop in the West Coast USA will leave a lasting impression.",
    rating: 4.8,
    tags: ["general","VIP","tropical"]
  },
  {
    basePrice: 2920,
    departureLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    arrivalLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "An escape like no other begins in San Francisco, where your journey launches into the heart of West Coast USA. Discover the magic of Dubrovnik, Santorini, Milan with style and sophistication.",
      distance: "822 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Santorini to Milan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Milan to San Francisco"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Amelia Maxwell",
        role: "Reservations Agent",
        languages: ["English","Guarani","Quechua"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "majestic.whisper.of.@velarivoyages.com",
          contactNumber: "+1-161-212-1405"
        }
      }
    ],
    title: "Majestic Whisper of the Golden Gateway",
    description: "An escape like no other begins in San Francisco, where your journey launches into the heart of West Coast USA. Discover the magic of Dubrovnik, Santorini, Milan with style and sophistication.",
    rating: 4.3,
    tags: ["cruise-ship","family-friendly","sightseeing"]
  },
  {
    basePrice: 8910,
    departureLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
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
    hasPopularDestination: false,
    category: "theme-cruise",
    itinerary: {
      route: [
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
    "city": "Rome",
    "country": "Italy",
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
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  }
],
      description: "Begin an epic awakening from San Francisco, where the seas meet culture. Visit the remarkable ports of Florence, Rome, Lisbon, Santorini while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1322 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Florence"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Florence to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Rome to Lisbon"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Rome"
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
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mia Graham",
        role: "Reservations Agent",
        languages: ["English","Guarani","Quechua"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "dreamlike.elevation.@velarivoyages.com",
          contactNumber: "+1-797-377-6767"
        }
      }
    ],
    title: "Dreamlike Elevation of the Urban Sea Meets",
    description: "Begin an epic awakening from San Francisco, where the seas meet culture. Visit the remarkable ports of Florence, Rome, Lisbon, Santorini while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.8,
    tags: ["seasonal"]
  },
  {
    basePrice: 2539,
    departureLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    arrivalLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "Sail from San Francisco into a world of wonder. The West Coast USA beckons with unforgettable ports like Malta, Venice, where every view is picture-perfect and every moment is priceless.",
      distance: "536 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Malta"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Malta to Venice"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Venice to San Francisco"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Olivia Lawson",
        role: "Reservations Agent",
        languages: ["English","Guarani","Quechua"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "extraordinary.tranqu@velarivoyages.com",
          contactNumber: "+1-360-415-8055"
        }
      }
    ],
    title: "Extraordinary Tranquility of the Golden Gateway",
    description: "Sail from San Francisco into a world of wonder. The West Coast USA beckons with unforgettable ports like Malta, Venice, where every view is picture-perfect and every moment is priceless.",
    rating: 4.9,
    tags: ["nature","glacier-cruise","VIP"]
  },
  {
    basePrice: 6071,
    departureLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Set sail from historic San Francisco for a modern escape into the West Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Lisbon, Venice, Athens.",
      distance: "1252 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Venice"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Venice to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Sarah Warren",
        role: "Reservations Agent",
        languages: ["English","Guarani","Quechua"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/85.jpg",
        contact: {
          contactEmail: "tidewashed.reflectio@velarivoyages.com",
          contactNumber: "+1-882-797-4405"
        }
      }
    ],
    title: "Tide-Washed Reflection of the Golden Gate Voyage",
    description: "Set sail from historic San Francisco for a modern escape into the West Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Lisbon, Venice, Athens.",
    rating: 4.6,
    tags: ["wildlife","luxury"]
  },
  {
    basePrice: 1260,
    departureLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    arrivalLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "Set sail from San Francisco for a voyage like no other. From the picturesque landscapes of Mykonos to the lively ambiance of Venice, this tide-washed cruise will redefine your view of West Coast USA.",
      distance: "827 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Venice"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Venice to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to San Francisco"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Amy Gardner",
        role: "Reservations Agent",
        languages: ["English","Guarani","Quechua"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "mythic.whisper.of.th@velarivoyages.com",
          contactNumber: "+1-776-553-1248"
        }
      }
    ],
    title: "Mythic Whisper of the Bay City",
    description: "Set sail from San Francisco for a voyage like no other. From the picturesque landscapes of Mykonos to the lively ambiance of Venice, this tide-washed cruise will redefine your view of West Coast USA.",
    rating: 4.3,
    tags: ["seasonal"]
  },
  {
    basePrice: 5359,
    departureLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    arrivalLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "A voyage of contrasts awaits from San Francisco. Discover the historical and natural richness of West Coast USA as you cruise to spectacular destinations like Lisbon, Rome.",
      distance: "1046 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Lisbon"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Rome to San Francisco"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Genesis Payne",
        role: "Reservations Agent",
        languages: ["English","Guarani","Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/26.jpg",
        contact: {
          contactEmail: "golden.pulse.of.the.@velarivoyages.com",
          contactNumber: "+1-802-498-7265"
        }
      }
    ],
    title: "Golden Pulse of the Harbor of Horizons",
    description: "A voyage of contrasts awaits from San Francisco. Discover the historical and natural richness of West Coast USA as you cruise to spectacular destinations like Lisbon, Rome.",
    rating: 4.8,
    tags: ["luxury","anniversary-cruise","cruise-journey"]
  },
  {
    basePrice: 8837,
    departureLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    arrivalLocation: {
  "city": "Milan",
  "country": "Italy",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "This journey takes you beyond the ordinary, starting in San Francisco. With breathtaking stops in Venice, Milan, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "735 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Venice to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Charlotte Carpenter",
        role: "Reservations Agent",
        languages: ["English","Guarani","Quechua"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "golden.oasis.of.the.@velarivoyages.com",
          contactNumber: "+1-660-962-1619"
        }
      }
    ],
    title: "Golden Oasis of the Bay City",
    description: "This journey takes you beyond the ordinary, starting in San Francisco. With breathtaking stops in Venice, Milan, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.1,
    tags: ["nature","cruise-vacation","long-distance"]
  },
  {
    basePrice: 3132,
    departureLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    arrivalLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "Experience the elegance of the seas on this timeless escape through West Coast USA, starting from the illustrious port of San Francisco. From Milan to Barcelona, each destination offers its own story, culture, and breathtaking views.",
      distance: "708 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Milan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Milan to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jane Payne",
        role: "Reservations Agent",
        languages: ["English","Guarani","Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "timeless.journey.of.@velarivoyages.com",
          contactNumber: "+1-867-374-5988"
        }
      }
    ],
    title: "Timeless Journey of the Redwood Coasts",
    description: "Experience the elegance of the seas on this timeless escape through West Coast USA, starting from the illustrious port of San Francisco. From Milan to Barcelona, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.0,
    tags: ["cruise-journey","cruise-adventure","short-getaway"]
  },
  {
    basePrice: 3397,
    departureLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    arrivalLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
  },
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "Savor each moment of this radiant escape through West Coast USA, starting in San Francisco. Visit renowned locations like Milan, Malta, where adventure and relaxation intertwine.",
      distance: "1246 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Milan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Milan to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Malta to San Francisco"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Angela Palmer",
        role: "Reservations Agent",
        languages: ["English","Guarani","Quechua"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/93.jpg",
        contact: {
          contactEmail: "forbidden.resonance.@velarivoyages.com",
          contactNumber: "+1-936-690-6096"
        }
      }
    ],
    title: "Forbidden Resonance of the Crimson Bridge Dream",
    description: "Savor each moment of this radiant escape through West Coast USA, starting in San Francisco. Visit renowned locations like Milan, Malta, where adventure and relaxation intertwine.",
    rating: 4.5,
    tags: ["cruise-getaway","holiday-cruise"]
  }
];
