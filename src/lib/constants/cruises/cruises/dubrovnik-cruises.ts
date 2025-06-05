import { Cruise } from "@/lib/interfaces/services/cruises";

export const dubrovnikCruises: Cruise[] = [
  {
    basePrice: 3134,
    departureLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fjords-tour",
    itinerary: {
      route: [
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
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
  }
],
      description: "Sail from Dubrovnik into a world of wonder. The Mediterranean beckons with unforgettable ports like Barcelona, Mykonos, Lisbon, where every view is picture-perfect and every moment is priceless.",
      distance: "1108 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Samantha Wells",
        role: "Sales Consultant",
        languages: ["English","Dutch","Czech"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "radiancedrenched.tra@velarivoyages.com",
          contactNumber: "+1-365-239-7006"
        }
      }
    ],
    title: "Radiance-Drenched Tranquility of the Sun-Drenched Riviera",
    description: "Sail from Dubrovnik into a world of wonder. The Mediterranean beckons with unforgettable ports like Barcelona, Mykonos, Lisbon, where every view is picture-perfect and every moment is priceless.",
    rating: 4.3,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 2962,
    departureLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    arrivalLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  }
],
      description: "Step aboard in Dubrovnik and begin a spectacular journey through the scenic Mediterranean. From historic cities to coastal hideaways like Rome, Malta, Venice, every day is unforgettable.",
      distance: "708 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Rome to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Malta to Venice"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Venice to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Pamela Mitchell",
        role: "Sales Consultant",
        languages: ["English","Dutch","Czech"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
        contact: {
          contactEmail: "hidden.exploration.o@velarivoyages.com",
          contactNumber: "+1-389-607-3642"
        }
      }
    ],
    title: "Hidden Exploration of the Timeless Coastlines",
    description: "Step aboard in Dubrovnik and begin a spectacular journey through the scenic Mediterranean. From historic cities to coastal hideaways like Rome, Malta, Venice, every day is unforgettable.",
    rating: 5.0,
    tags: ["historical"]
  },
  {
    basePrice: 6202,
    departureLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
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
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  }
],
      description: "Sail from Dubrovnik into a world of wonder. The Mediterranean beckons with unforgettable ports like Athens, Mykonos, where every view is picture-perfect and every moment is priceless.",
      distance: "904 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Alexa Curtis",
        role: "Sales Consultant",
        languages: ["English","Dutch","Czech"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "azure.lullaby.of.the@velarivoyages.com",
          contactNumber: "+1-806-473-1084"
        }
      }
    ],
    title: "Azure Lullaby of the Classical Crossroads",
    description: "Sail from Dubrovnik into a world of wonder. The Mediterranean beckons with unforgettable ports like Athens, Mykonos, where every view is picture-perfect and every moment is priceless.",
    rating: 4.9,
    tags: ["long-distance","VIP"]
  },
  {
    basePrice: 3390,
    departureLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
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
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
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
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
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
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  }
],
      description: "Sail away from Dubrovnik into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Malta, Athens, Barcelona, Mykonos, where history, nature, and cuisine collide.",
      distance: "1343 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Malta to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Athens to Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Griffin",
        role: "Sales Consultant",
        languages: ["English","Dutch","Czech"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "majestic.tranquility@velarivoyages.com",
          contactNumber: "+1-646-848-7824"
        }
      }
    ],
    title: "Majestic Tranquility of the Cerulean Coasts",
    description: "Sail away from Dubrovnik into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Malta, Athens, Barcelona, Mykonos, where history, nature, and cuisine collide.",
    rating: 4.8,
    tags: ["luxury","exclusive"]
  },
  {
    basePrice: 8827,
    departureLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
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
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
      description: "Experience the elegance of the seas on this mythic solstice through Mediterranean, starting from the illustrious port of Dubrovnik. From Malta, Venice to Barcelona, each destination offers its own story, culture, and breathtaking views.",
      distance: "1481 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Venice"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Venice to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Linda Knight",
        role: "Sales Consultant",
        languages: ["English","Dutch","Czech"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "majestic.awakening.o@velarivoyages.com",
          contactNumber: "+1-762-541-7701"
        }
      }
    ],
    title: "Majestic Awakening of the Citadels by the Sea",
    description: "Experience the elegance of the seas on this mythic solstice through Mediterranean, starting from the illustrious port of Dubrovnik. From Malta, Venice to Barcelona, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.4,
    tags: ["fall-cruise","repositioning"]
  },
  {
    basePrice: 8012,
    departureLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    arrivalLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
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
    "city": "Milan",
    "country": "Italy",
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
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  }
],
      description: "Escape to sea from Dubrovnik on a heavenly voyage exploring the magic of Mediterranean. Visit unforgettable locales like Malta, Milan, Venice, Santorini, where each stop inspires awe.",
      distance: "1034 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Milan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Milan to Venice"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Venice to Santorini"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Santorini to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Milan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Nora Bennett",
        role: "Sales Consultant",
        languages: ["English","Dutch","Czech"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "alluring.panorama.of@velarivoyages.com",
          contactNumber: "+1-401-471-9465"
        }
      }
    ],
    title: "Alluring Panorama of the Cerulean Coasts",
    description: "Escape to sea from Dubrovnik on a heavenly voyage exploring the magic of Mediterranean. Visit unforgettable locales like Malta, Milan, Venice, Santorini, where each stop inspires awe.",
    rating: 4.9,
    tags: ["romantic","general"]
  },
  {
    basePrice: 1750,
    departureLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    arrivalLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  }
],
      description: "Your solstice begins in Dubrovnik, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Santorini to the historic streets of Barcelona, each stop in the Mediterranean will leave a lasting impression.",
      distance: "539 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Santorini to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Milan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Milan to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
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
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Claire Carpenter",
        role: "Sales Consultant",
        languages: ["English","Dutch","Czech"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "pristine.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-755-973-1271"
        }
      }
    ],
    title: "Pristine Sojourn of the Marble Cities",
    description: "Your solstice begins in Dubrovnik, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Santorini to the historic streets of Barcelona, each stop in the Mediterranean will leave a lasting impression.",
    rating: 4.2,
    tags: ["relaxation"]
  },
  {
    basePrice: 3133,
    departureLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    arrivalLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  }
],
      description: "Discover the wonders of Mediterranean aboard this enchanting cruise departing from Dubrovnik. Journey through crystal waters to explore the treasures of Florence, Lisbon, Malta, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "730 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Florence"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Florence to Lisbon"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Malta to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Florence"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Scarlett Dunn",
        role: "Sales Consultant",
        languages: ["English","Dutch","Czech"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "infinite.panorama.of@velarivoyages.com",
          contactNumber: "+1-386-501-5636"
        }
      }
    ],
    title: "Infinite Panorama of the Classical Crossroads",
    description: "Discover the wonders of Mediterranean aboard this enchanting cruise departing from Dubrovnik. Journey through crystal waters to explore the treasures of Florence, Lisbon, Malta, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.3,
    tags: ["adventure"]
  },
  {
    basePrice: 9352,
    departureLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    arrivalLocation: {
  "city": "Florence",
  "country": "Italy",
  "coordinates": {
    "latitude": 43.769562,
    "longitude": 11.255814
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
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
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  }
],
      description: "Your sanctum begins in Dubrovnik, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Athens to the historic streets of Florence, each stop in the Mediterranean will leave a lasting impression.",
      distance: "928 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Florence"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Florence"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nancy Graves",
        role: "Sales Consultant",
        languages: ["English","Dutch","Czech"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "oceanic.zenith.of.th@velarivoyages.com",
          contactNumber: "+1-752-892-7551"
        }
      }
    ],
    title: "Oceanic Zenith of the Ancient Shores",
    description: "Your sanctum begins in Dubrovnik, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Athens to the historic streets of Florence, each stop in the Mediterranean will leave a lasting impression.",
    rating: 4.6,
    tags: ["general"]
  },
  {
    basePrice: 2877,
    departureLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    arrivalLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "theme-cruise",
    itinerary: {
      route: [
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  }
],
      description: "An unforgettable oasis awaits as you cruise from Dubrovnik across Mediterranean. Dive into history, flavor, and culture with stops including Rome, Barcelona.",
      distance: "789 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stella Fox",
        role: "Sales Consultant",
        languages: ["English","Dutch","Czech"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "whispering.enigma.of@velarivoyages.com",
          contactNumber: "+1-519-284-8915"
        }
      }
    ],
    title: "Whispering Enigma of the Olive-Draped Hills",
    description: "An unforgettable oasis awaits as you cruise from Dubrovnik across Mediterranean. Dive into history, flavor, and culture with stops including Rome, Barcelona.",
    rating: 4.0,
    tags: ["historical","seasonal","cruise-journey"]
  }
];
