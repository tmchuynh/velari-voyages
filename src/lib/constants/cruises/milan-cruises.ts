import { Cruise } from "@/lib/interfaces/services/cruises";

export const milanCruises: Cruise[] = [
{
    basePrice: 1744,
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
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Escape the everyday with this crystalline journey through Mediterranean, departing from Milan. You'll visit Rome, Athens, Barcelona, Santorini, where every stop is a new adventure.",
      distance: "1238 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Athens to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Santorini"
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
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Mary Murray",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        contact: {
          contactEmail: "timeless.saga.of.the@velarivoyages.com",
          contactNumber: "+1-425-993-7747"
        }
      }
    ],
    title: "Timeless Saga of the Fashion Capital",
    description: "Escape the everyday with this crystalline journey through Mediterranean, departing from Milan. You'll visit Rome, Athens, Barcelona, Santorini, where every stop is a new adventure.",
    rating: 5.0,
    tags: ["tropical"]
  },
  {
    basePrice: 5169,
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
  "city": "Rome",
  "country": "Italy",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Sail away from Milan into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Barcelona, Rome, where history, nature, and cuisine collide.",
      distance: "1023 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Milan to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Rome"
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Gardner",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "crystalline.saga.of.@velarivoyages.com",
          contactNumber: "+1-447-123-9317"
        }
      }
    ],
    title: "Crystalline Saga of the Fashion Capital",
    description: "Sail away from Milan into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Barcelona, Rome, where history, nature, and cuisine collide.",
    rating: 4.1,
    tags: ["family-friendly","exclusive"]
  },
  {
    basePrice: 2551,
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
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let the winds of the Mediterranean carry you from Milan to the most stunning ports in the region. With destinations like Athens, Malta, this mirage redefines luxury travel.",
      distance: "1082 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Sophia Griffin",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "hidden.journey.of.th@velarivoyages.com",
          contactNumber: "+1-212-651-2728"
        }
      }
    ],
    title: "Hidden Journey of the Fashion Capital",
    description: "Let the winds of the Mediterranean carry you from Milan to the most stunning ports in the region. With destinations like Athens, Malta, this mirage redefines luxury travel.",
    rating: 4.9,
    tags: ["tropical","long-distance"]
  },
  {
    basePrice: 1687,
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
    category: "premium-luxury",
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Milan",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "Depart Milan on a relaxing escape through the Mediterranean region. Highlights include the stunning coastlines of Mykonos, Rome, Barcelona, all while enjoying first-class amenities on board.",
      distance: "1152 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Rome to Barcelona"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Milan"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Maya Gardner",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "extraordinary.odysse@velarivoyages.com",
          contactNumber: "+1-833-896-7230"
        }
      }
    ],
    title: "Extraordinary Odyssey of the Lombard Jewel",
    description: "Depart Milan on a relaxing escape through the Mediterranean region. Highlights include the stunning coastlines of Mykonos, Rome, Barcelona, all while enjoying first-class amenities on board.",
    rating: 4.5,
    tags: ["luxury"]
  },
  {
    basePrice: 3498,
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
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "An escape like no other begins in Milan, where your sojourn launches into the heart of Mediterranean. Discover the magic of Mykonos, Barcelona, Santorini with style and sophistication.",
      distance: "1387 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Santorini"
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
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Angela Grant",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "extraordinary.reveri@velarivoyages.com",
          contactNumber: "+1-496-714-9635"
        }
      }
    ],
    title: "Extraordinary Reverie of the Fashion Capital",
    description: "An escape like no other begins in Milan, where your sojourn launches into the heart of Mediterranean. Discover the magic of Mykonos, Barcelona, Santorini with style and sophistication.",
    rating: 4.1,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 1198,
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
    category: "mainstream",
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "Embark from Milan and traverse the Mediterranean in style. Whether it’s the energy of Mykonos or the calm of Santorini, each destination reveals a new side of paradise.",
      distance: "1235 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Santorini to Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Milan"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Genesis Graves",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
        contact: {
          contactEmail: "enchanting.saga.of.t@velarivoyages.com",
          contactNumber: "+1-714-335-2780"
        }
      }
    ],
    title: "Enchanting Saga of the Lombard Jewel",
    description: "Embark from Milan and traverse the Mediterranean in style. Whether it’s the energy of Mykonos or the calm of Santorini, each destination reveals a new side of paradise.",
    rating: 4.8,
    tags: ["family-friendly","adventure"]
  },
  {
    basePrice: 5058,
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
    category: "luxury",
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Sail away from Milan into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Malta, Rome, Santorini, Dubrovnik, where history, nature, and cuisine collide.",
      distance: "681 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Milan to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Malta to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Milan"
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amy Douglas",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "golden.escape.of.the@velarivoyages.com",
          contactNumber: "+1-361-297-6070"
        }
      }
    ],
    title: "Golden Escape of the Lombard Jewel",
    description: "Sail away from Milan into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Malta, Rome, Santorini, Dubrovnik, where history, nature, and cuisine collide.",
    rating: 4.2,
    tags: ["relaxation","tropical","long-distance"]
  },
  {
    basePrice: 6107,
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
  "city": "Rome",
  "country": "Italy",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "This hand-selected forbidden cruise offers a true taste of Mediterranean. Depart from Milan and explore ports like Santorini, Barcelona, Rome, each telling a story through food, music, and tradition.",
      distance: "1326 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Milan to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Rome"
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Hall",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "majestic.saga.of.the@velarivoyages.com",
          contactNumber: "+1-799-898-2233"
        }
      }
    ],
    title: "Majestic Saga of the Timeless Coastlines",
    description: "This hand-selected forbidden cruise offers a true taste of Mediterranean. Depart from Milan and explore ports like Santorini, Barcelona, Rome, each telling a story through food, music, and tradition.",
    rating: 4.6,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 7365,
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
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let the winds of the Mediterranean carry you from Milan to the most stunning ports in the region. With destinations like Athens, Malta, this renaissance redefines luxury travel.",
      distance: "646 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Milan to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jessica Cooper",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "captivating.explorat@velarivoyages.com",
          contactNumber: "+1-330-963-4258"
        }
      }
    ],
    title: "Captivating Exploration of the Fashion Capital",
    description: "Let the winds of the Mediterranean carry you from Milan to the most stunning ports in the region. With destinations like Athens, Malta, this renaissance redefines luxury travel.",
    rating: 4.7,
    tags: ["luxury"]
  },
  {
    basePrice: 1139,
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
    category: "premium-luxury",
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "Sail away from the charming harbor of Milan on this extraordinary journey across Mediterranean. Uncover the beauty and history of Santorini, Athens, Barcelona with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1097 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Milan to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Athens to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Milan"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Zoe Maxwell",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "crystalline.expediti@velarivoyages.com",
          contactNumber: "+1-704-904-3569"
        }
      }
    ],
    title: "Crystalline Expedition of the Sun-Drenched Riviera",
    description: "Sail away from the charming harbor of Milan on this extraordinary journey across Mediterranean. Uncover the beauty and history of Santorini, Athens, Barcelona with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.4,
    tags: ["fall-cruise","luxury"]
  },
  {
    basePrice: 1196,
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
  "city": "Barcelona",
  "country": "Spain",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "From the lively departure port of Milan, this curated expedition showcases the finest of Mediterranean. With visits to Malta, Barcelona, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "633 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Malta to Barcelona"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Emily Bennett",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/71.jpg",
        contact: {
          contactEmail: "velvet.passage.of.th@velarivoyages.com",
          contactNumber: "+1-358-406-2851"
        }
      }
    ],
    title: "Velvet Passage of the Timeless Coastlines",
    description: "From the lively departure port of Milan, this curated expedition showcases the finest of Mediterranean. With visits to Malta, Barcelona, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.2,
    tags: ["exclusive"]
  },
  {
    basePrice: 3121,
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
    category: "mainstream",
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Embark from Milan and traverse the Mediterranean in style. Whether it’s the energy of Rome or the calm of Dubrovnik, each destination reveals a new side of paradise.",
      distance: "735 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
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
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Rome"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Virginia West",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "infinite.voyage.of.t@velarivoyages.com",
          contactNumber: "+1-724-378-1432"
        }
      }
    ],
    title: "Infinite Voyage of the Sun-Drenched Riviera",
    description: "Embark from Milan and traverse the Mediterranean in style. Whether it’s the energy of Rome or the calm of Dubrovnik, each destination reveals a new side of paradise.",
    rating: 4.9,
    tags: ["romantic","sightseeing"]
  },
  {
    basePrice: 8861,
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
  "city": "Rome",
  "country": "Italy",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Sail away from Milan into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Athens, Santorini, Rome, where history, nature, and cuisine collide.",
      distance: "676 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Milan to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Santorini to Rome"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Betty Sutton",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "majestic.expedition.@velarivoyages.com",
          contactNumber: "+1-612-428-4778"
        }
      }
    ],
    title: "Majestic Expedition of the Fashion Capital",
    description: "Sail away from Milan into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Athens, Santorini, Rome, where history, nature, and cuisine collide.",
    rating: 4.6,
    tags: ["themed-cruise","family-friendly","short-getaway"]
  },
  {
    basePrice: 5543,
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
    category: "entry-luxury",
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Enjoy seamless luxury on this mythic reverie beginning in Milan. Visit breathtaking Mediterranean locales such as Malta, Santorini on this unforgettable itinerary.",
      distance: "1237 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Milan to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Santorini to Milan"
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Nancy Price",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "secret.sanctuary.of.@velarivoyages.com",
          contactNumber: "+1-655-751-9006"
        }
      }
    ],
    title: "Secret Sanctuary of the Lombard Jewel",
    description: "Enjoy seamless luxury on this mythic reverie beginning in Milan. Visit breathtaking Mediterranean locales such as Malta, Santorini on this unforgettable itinerary.",
    rating: 4.6,
    tags: ["romantic"]
  },
  {
    basePrice: 4055,
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
    category: "mainstream",
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Embark from Milan and traverse the Mediterranean in style. Whether it’s the energy of Barcelona or the calm of Mykonos, each destination reveals a new side of paradise.",
      distance: "1486 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Santorini to Milan"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Donna Maxwell",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "midnight.tide.of.the@velarivoyages.com",
          contactNumber: "+1-590-827-1473"
        }
      }
    ],
    title: "Midnight Tide of the Fashion Capital",
    description: "Embark from Milan and traverse the Mediterranean in style. Whether it’s the energy of Barcelona or the calm of Mykonos, each destination reveals a new side of paradise.",
    rating: 4.9,
    tags: ["romantic","luxury"]
  },
  {
    basePrice: 8336,
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
    category: "luxury",
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Depart from Milan on this thoughtfully designed journey across the Mediterranean. Savor coastal charm, cultural treasures, and ocean views with stops at Santorini, Mykonos, Athens.",
      distance: "904 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Athens to Milan"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Janet Mitchell",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "spectacular.requiem.@velarivoyages.com",
          contactNumber: "+1-123-440-1566"
        }
      }
    ],
    title: "Spectacular Requiem of the Fashion Capital",
    description: "Depart from Milan on this thoughtfully designed journey across the Mediterranean. Savor coastal charm, cultural treasures, and ocean views with stops at Santorini, Mykonos, Athens.",
    rating: 4.8,
    tags: ["long-distance"]
  },
  {
    basePrice: 8392,
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
    category: "expedition",
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Embark on an unforgettable horizon from the vibrant port of Milan, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Rome, Malta, Santorini, this journey combines cultural immersion with breathtaking scenery.",
      distance: "881 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Rome to Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
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
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amina Nash",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "exquisite.excursion.@velarivoyages.com",
          contactNumber: "+1-745-993-3802"
        }
      }
    ],
    title: "Exquisite Excursion of the Marble Cities",
    description: "Embark on an unforgettable horizon from the vibrant port of Milan, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Rome, Malta, Santorini, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.1,
    tags: ["VIP"]
  },
  {
    basePrice: 5309,
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
    category: "premium",
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "Board in Milan for a hand-crafted retreat through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Malta, Rome, Mykonos, Barcelona.",
      distance: "1378 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Milan to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Malta to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Barcelona"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Milan"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Chloe Jennings",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "midnight.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-388-179-9450"
        }
      }
    ],
    title: "Midnight Odyssey of the Fashion Capital",
    description: "Board in Milan for a hand-crafted retreat through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Malta, Rome, Mykonos, Barcelona.",
    rating: 4.6,
    tags: ["fall-cruise","family-friendly","romantic"]
  },
  {
    basePrice: 9267,
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
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Leave ordinary behind as you sail from Milan across the captivating Mediterranean. Discover the distinctive personality of each destination, from Dubrovnik, Mykonos.",
      distance: "742 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Mykonos"
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
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Stella Grant",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "captivating.labyrint@velarivoyages.com",
          contactNumber: "+1-940-759-2957"
        }
      }
    ],
    title: "Captivating Labyrinth of the Ancient Shores",
    description: "Leave ordinary behind as you sail from Milan across the captivating Mediterranean. Discover the distinctive personality of each destination, from Dubrovnik, Mykonos.",
    rating: 4.0,
    tags: ["themed-cruise","family-friendly","relaxation"]
  },
  {
    basePrice: 2346,
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
    category: "premium-luxury",
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
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Your sojourn begins in Milan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Rome to the historic streets of Barcelona, each stop in the Mediterranean will leave a lasting impression.",
      distance: "1379 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Rome to Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Athens"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Athens to Milan"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Jane Marshall",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
        contact: {
          contactEmail: "exquisite.voyage.of.@velarivoyages.com",
          contactNumber: "+1-104-782-4492"
        }
      }
    ],
    title: "Exquisite Voyage of the Lombard Jewel",
    description: "Your sojourn begins in Milan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Rome to the historic streets of Barcelona, each stop in the Mediterranean will leave a lasting impression.",
    rating: 4.6,
    tags: ["VIP"]
  },
  {
    basePrice: 5690,
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
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Launch into adventure from Milan and sail deep into the heart of the Mediterranean. With ports of call like Santorini, Athens, Mykonos, Dubrovnik, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1304 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Milan to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Dubrovnik"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Hayes",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "whispering.expeditio@velarivoyages.com",
          contactNumber: "+1-269-406-7952"
        }
      }
    ],
    title: "Whispering Expedition of the Lombard Jewel",
    description: "Launch into adventure from Milan and sail deep into the heart of the Mediterranean. With ports of call like Santorini, Athens, Mykonos, Dubrovnik, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.1,
    tags: ["sightseeing","family-friendly"]
  },
  {
    basePrice: 9351,
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
    category: "premium-luxury",
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "This inspiring mystique departs from Milan, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Santorini, Rome.",
      distance: "567 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
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
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Genesis Ellis",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "unforgettable.sojour@velarivoyages.com",
          contactNumber: "+1-846-930-5616"
        }
      }
    ],
    title: "Unforgettable Sojourn of the Lombard Jewel",
    description: "This inspiring mystique departs from Milan, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Santorini, Rome.",
    rating: 4.9,
    tags: ["family-friendly","exclusive","fall-cruise"]
  },
  {
    basePrice: 6519,
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
    category: "entry-luxury",
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Savor each moment of this secret escape through Mediterranean, starting in Milan. Visit renowned locations like Rome, Mykonos, Malta, Athens, where adventure and relaxation intertwine.",
      distance: "1009 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Milan to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Malta"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Malta to Athens"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Athens to Milan"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ashley Graves",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/56.jpg",
        contact: {
          contactEmail: "breathtaking.saga.of@velarivoyages.com",
          contactNumber: "+1-950-928-1249"
        }
      }
    ],
    title: "Breathtaking Saga of the Lombard Jewel",
    description: "Savor each moment of this secret escape through Mediterranean, starting in Milan. Visit renowned locations like Rome, Mykonos, Malta, Athens, where adventure and relaxation intertwine.",
    rating: 4.4,
    tags: ["romantic","adventure"]
  },
  {
    basePrice: 7406,
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
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let the winds of the Mediterranean carry you from Milan to the most stunning ports in the region. With destinations like Mykonos, Santorini, this labyrinth redefines luxury travel.",
      distance: "1162 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Santorini"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Jessica Spencer",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "mesmerizing.escape.o@velarivoyages.com",
          contactNumber: "+1-609-912-2933"
        }
      }
    ],
    title: "Mesmerizing Escape of the Fashion Capital",
    description: "Let the winds of the Mediterranean carry you from Milan to the most stunning ports in the region. With destinations like Mykonos, Santorini, this labyrinth redefines luxury travel.",
    rating: 4.7,
    tags: ["luxury","seasonal"]
  },
  {
    basePrice: 3978,
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
    hasPopularDestination: false,
    category: "entry-luxury",
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "An escape like no other begins in Milan, where your odyssey launches into the heart of Mediterranean. Discover the magic of Athens, Mykonos with style and sophistication.",
      distance: "1128 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Milan"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Maria Graves",
        role: "Hospitality Director",
        languages: ["Filipino","Lao","Thai"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "breathtaking.escape.@velarivoyages.com",
          contactNumber: "+1-145-900-2686"
        }
      }
    ],
    title: "Breathtaking Escape of the Fashion Capital",
    description: "An escape like no other begins in Milan, where your odyssey launches into the heart of Mediterranean. Discover the magic of Athens, Mykonos with style and sophistication.",
    rating: 4.2,
    tags: ["seasonal","long-distance"]
  },
  {
    basePrice: 9942,
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
    category: "expedition",
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Experience coastal elegance on this renaissance from Milan, where the journey through Mediterranean includes stops in Dubrovnik, Santorini, Rome, Athens, each more enchanting than the last.",
      distance: "884 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Athens to Milan"
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
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Santorini"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Bruce Hall",
        role: "Accommodation Manager",
        languages: ["Mandarin","Czech","Hindi"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
        contact: {
          contactEmail: "infinite.expedition.@velarivoyages.com",
          contactNumber: "+1-429-830-4336"
        }
      }
    ],
    title: "Infinite Expedition of the Marble Cities",
    description: "Experience coastal elegance on this renaissance from Milan, where the journey through Mediterranean includes stops in Dubrovnik, Santorini, Rome, Athens, each more enchanting than the last.",
    rating: 4.8,
    tags: ["luxury"]
  },
  {
    basePrice: 7213,
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
    category: "expedition",
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Board in Milan for a hand-crafted sanctuary through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Barcelona, Dubrovnik, Malta.",
      distance: "1462 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Milan to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Larry Payne",
        role: "Accommodation Manager",
        languages: ["Mandarin","Czech","Hindi"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "mythic.mirage.of.the@velarivoyages.com",
          contactNumber: "+1-408-515-8039"
        }
      }
    ],
    title: "Mythic Mirage of the Fashion Capital",
    description: "Board in Milan for a hand-crafted sanctuary through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Barcelona, Dubrovnik, Malta.",
    rating: 4.7,
    tags: ["tropical"]
  },
  {
    basePrice: 2767,
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
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Leave ordinary behind as you sail from Milan across the captivating Mediterranean. Discover the distinctive personality of each destination, from Barcelona, Athens, Malta.",
      distance: "910 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Milan to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Andrew Ellis",
        role: "Accommodation Manager",
        languages: ["Mandarin","Czech","Hindi"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "extraordinary.escape@velarivoyages.com",
          contactNumber: "+1-112-602-3856"
        }
      }
    ],
    title: "Extraordinary Escape of the Fashion Capital",
    description: "Leave ordinary behind as you sail from Milan across the captivating Mediterranean. Discover the distinctive personality of each destination, from Barcelona, Athens, Malta.",
    rating: 4.4,
    tags: ["luxury","long-distance"]
  },
  {
    basePrice: 5412,
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
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This velvet cruise from Milan is your ticket to the captivating charm of the Mediterranean. Discover the delights of Santorini, Barcelona, Mykonos with enriching excursions and award-winning service.",
      distance: "859 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Santorini to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Mykonos"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Kyle Cooper",
        role: "Accommodation Manager",
        languages: ["Mandarin","Czech","Hindi"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "crystalline.retreat.@velarivoyages.com",
          contactNumber: "+1-354-883-7313"
        }
      }
    ],
    title: "Crystalline Retreat of the Fashion Capital",
    description: "This velvet cruise from Milan is your ticket to the captivating charm of the Mediterranean. Discover the delights of Santorini, Barcelona, Mykonos with enriching excursions and award-winning service.",
    rating: 4.7,
    tags: ["tropical","exclusive","long-distance"]
  },
  {
    basePrice: 3009,
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
    category: "mainstream",
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Explore a new side of Mediterranean with this secret journey starting in Milan. Visit charming ports such as Mykonos, Rome, Santorini, each offering its own unique rhythm.",
      distance: "526 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Milan to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
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
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kyle Hudson",
        role: "Accommodation Manager",
        languages: ["Mandarin","Czech","Hindi"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "crystalline.requiem.@velarivoyages.com",
          contactNumber: "+1-323-230-7100"
        }
      }
    ],
    title: "Crystalline Requiem of the Sun-Drenched Riviera",
    description: "Explore a new side of Mediterranean with this secret journey starting in Milan. Visit charming ports such as Mykonos, Rome, Santorini, each offering its own unique rhythm.",
    rating: 4.8,
    tags: ["romantic","themed-cruise"]
  }
];
