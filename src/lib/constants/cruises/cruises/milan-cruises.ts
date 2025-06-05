import { Cruise } from "@/lib/interfaces/services/cruises";

export const milanCruises: Cruise[] = [
  {
    basePrice: 6172,
    departureLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
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
      description: "Let the waves lead you from Milan on this gilded panorama. Traverse the iconic waters of Mediterranean and discover the beauty of Dubrovnik, Santorini.",
      distance: "1013 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Stewart",
        role: "Marketing Coordinator",
        languages: ["English","Greek","Czech"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "sundrenched.pilgrima@velarivoyages.com",
          contactNumber: "+1-392-598-4285"
        }
      }
    ],
    title: "Sun-Drenched Pilgrimage of the Cerulean Coasts",
    description: "Let the waves lead you from Milan on this gilded panorama. Traverse the iconic waters of Mediterranean and discover the beauty of Dubrovnik, Santorini.",
    rating: 4.7,
    tags: ["exclusive","holiday-cruise"]
  },
  {
    basePrice: 6260,
    departureLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    arrivalLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
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
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
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
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "Begin your journey in Milan, where tradition meets travel. This immersive sanctuary reveals the finest of Mediterranean, from the beaches of Mykonos to the streets of Dubrovnik.",
      distance: "523 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Milan to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Florence"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Florence to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Milan"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zoe Baker",
        role: "Marketing Coordinator",
        languages: ["English","Greek","Czech"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "velvet.oasis.of.the.@velarivoyages.com",
          contactNumber: "+1-994-414-6013"
        }
      }
    ],
    title: "Velvet Oasis of the Chic Fortress",
    description: "Begin your journey in Milan, where tradition meets travel. This immersive sanctuary reveals the finest of Mediterranean, from the beaches of Mykonos to the streets of Dubrovnik.",
    rating: 4.8,
    tags: ["glacier-cruise"]
  },
  {
    basePrice: 8577,
    departureLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
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
    category: "glacier-cruise",
    itinerary: {
      route: [
  {
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  }
],
      description: "From bustling Milan to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Florence, Dubrovnik deliver a balanced blend of culture and comfort.",
      distance: "635 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Florence to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Amina Palmer",
        role: "Marketing Coordinator",
        languages: ["English","Greek","Czech"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "infinite.sanctum.of.@velarivoyages.com",
          contactNumber: "+1-249-533-6469"
        }
      }
    ],
    title: "Infinite Sanctum of the Chic Fortress",
    description: "From bustling Milan to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Florence, Dubrovnik deliver a balanced blend of culture and comfort.",
    rating: 4.3,
    tags: ["historical"]
  },
  {
    basePrice: 6773,
    departureLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    arrivalLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
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
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
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
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "This extraordinary infinite from Milan offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Dubrovnik, Santorini, Mykonos and Malta, creating memories that will last a lifetime.",
      distance: "633 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Santorini to Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Malta"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Malta to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Claire Hawkins",
        role: "Marketing Coordinator",
        languages: ["English","Greek","Czech"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "heavenly.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-488-210-4691"
        }
      }
    ],
    title: "Heavenly Sanctuary of the Sun-Drenched Riviera",
    description: "This extraordinary infinite from Milan offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Dubrovnik, Santorini, Mykonos and Malta, creating memories that will last a lifetime.",
    rating: 4.9,
    tags: ["cruise-line"]
  },
  {
    basePrice: 7195,
    departureLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    arrivalLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
    itinerary: {
      route: [
  {
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
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
  },
  {
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "This hand-selected pearlescent cruise offers a true taste of Mediterranean. Depart from Milan and explore ports like Athens, Rome, Lisbon, Santorini, each telling a story through food, music, and tradition.",
      distance: "554 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Milan to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Rome to Lisbon"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Santorini"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Sailing from Santorini to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Olivia Fisher",
        role: "Marketing Coordinator",
        languages: ["English","Greek","Czech"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "legendary.odyssey.of@velarivoyages.com",
          contactNumber: "+1-482-798-5303"
        }
      }
    ],
    title: "Legendary Odyssey of the Olive-Draped Hills",
    description: "This hand-selected pearlescent cruise offers a true taste of Mediterranean. Depart from Milan and explore ports like Athens, Rome, Lisbon, Santorini, each telling a story through food, music, and tradition.",
    rating: 4.7,
    tags: ["exclusive","seasonal","expedition"]
  },
  {
    basePrice: 2914,
    departureLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    arrivalLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
  {
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
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
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "From bustling Milan to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Florence, Rome deliver a balanced blend of culture and comfort.",
      distance: "544 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Florence to Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Rome to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Clark",
        role: "Marketing Coordinator",
        languages: ["English","Greek","Czech"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "immersive.escape.of.@velarivoyages.com",
          contactNumber: "+1-763-572-7466"
        }
      }
    ],
    title: "Immersive Escape of the Legacy of Empires",
    description: "From bustling Milan to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Florence, Rome deliver a balanced blend of culture and comfort.",
    rating: 4.6,
    tags: ["cruise-getaway"]
  },
  {
    basePrice: 1235,
    departureLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
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
    category: "repositioning-cruise",
    itinerary: {
      route: [
  {
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
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
  }
],
      description: "Sail from Milan into a world of wonder. The Mediterranean beckons with unforgettable ports like Venice, Malta, where every view is picture-perfect and every moment is priceless.",
      distance: "614 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Milan to Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Venice to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Milan"
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
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Brenda Douglas",
        role: "Marketing Coordinator",
        languages: ["English","Greek","Czech"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "majestic.journey.of.@velarivoyages.com",
          contactNumber: "+1-305-501-1770"
        }
      }
    ],
    title: "Majestic Journey of the Lombard Jewel",
    description: "Sail from Milan into a world of wonder. The Mediterranean beckons with unforgettable ports like Venice, Malta, where every view is picture-perfect and every moment is priceless.",
    rating: 4.8,
    tags: ["expedition","weekend-cruise","general"]
  },
  {
    basePrice: 7415,
    departureLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    arrivalLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
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
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
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
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "Start in the vibrant city of Milan and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Lisbon, Florence, Mykonos, Santorini.",
      distance: "1149 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Milan to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Florence to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Santorini"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Santorini to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sandra Wallace",
        role: "Marketing Coordinator",
        languages: ["English","Greek","Czech"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
        contact: {
          contactEmail: "luminous.solstice.of@velarivoyages.com",
          contactNumber: "+1-168-418-9516"
        }
      }
    ],
    title: "Luminous Solstice of the Citadels by the Sea",
    description: "Start in the vibrant city of Milan and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Lisbon, Florence, Mykonos, Santorini.",
    rating: 4.6,
    tags: ["family-friendly","culinary"]
  },
  {
    basePrice: 4279,
    departureLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    arrivalLocation: {
  "city": "Mykonos",
  "country": "Greece",
  "coordinates": {
    "latitude": 37.4467,
    "longitude": 25.3289
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
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
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  }
],
      description: "Escape into the calm waters of Mediterranean with this crystalline journey from Milan. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Lisbon, Mykonos.",
      distance: "1483 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Milan to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Bennett",
        role: "Marketing Coordinator",
        languages: ["English","Greek","Czech"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "exquisite.drift.of.t@velarivoyages.com",
          contactNumber: "+1-460-381-3757"
        }
      }
    ],
    title: "Exquisite Drift of the Design in Motion",
    description: "Escape into the calm waters of Mediterranean with this crystalline journey from Milan. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Lisbon, Mykonos.",
    rating: 4.0,
    tags: ["tropical","cultural","cruise-getaway"]
  },
  {
    basePrice: 8973,
    departureLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
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
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
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
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
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
  }
],
      description: "Experience the elegance of the seas on this starlit mystique through Mediterranean, starting from the illustrious port of Milan. From Florence, Santorini, Venice to Dubrovnik, each destination offers its own story, culture, and breathtaking views.",
      distance: "1328 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Florence to Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Santorini to Venice"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Venice to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Dunn",
        role: "Marketing Coordinator",
        languages: ["English","Greek","Czech"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "mesmerizing.quest.of@velarivoyages.com",
          contactNumber: "+1-751-917-3231"
        }
      }
    ],
    title: "Mesmerizing Quest of the Legacy of Empires",
    description: "Experience the elegance of the seas on this starlit mystique through Mediterranean, starting from the illustrious port of Milan. From Florence, Santorini, Venice to Dubrovnik, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.1,
    tags: ["weekend-cruise"]
  }
];
