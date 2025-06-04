import { Cruise } from "@/lib/interfaces/services/cruises";

export const veniceCruises: Cruise[] = [
{
    basePrice: 4346,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
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
  }
],
      description: "Experience coastal elegance on this discovery from Venice, where the journey through Mediterranean includes stops in Barcelona, Malta, Athens, each more enchanting than the last.",
      distance: "898 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Malta to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Samantha Baker",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "moonlit.resonance.of@velarivoyages.com",
          contactNumber: "+1-143-428-2806"
        }
      }
    ],
    title: "Moonlit Resonance of the Gondola Phantom",
    description: "Experience coastal elegance on this discovery from Venice, where the journey through Mediterranean includes stops in Barcelona, Malta, Athens, each more enchanting than the last.",
    rating: 4.9,
    tags: ["nature","seasonal"]
  },
  {
    basePrice: 4327,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
      description: "Cruise into cultural richness aboard this refined saga departing Venice. Savor local cuisine and uncover regional beauty from Dubrovnik to Santorini.",
      distance: "781 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Santorini to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Malta to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
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
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Alexa Maxwell",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "verdant.passage.of.t@velarivoyages.com",
          contactNumber: "+1-129-241-4544"
        }
      }
    ],
    title: "Verdant Passage of the Lagoon Reverie",
    description: "Cruise into cultural richness aboard this refined saga departing Venice. Savor local cuisine and uncover regional beauty from Dubrovnik to Santorini.",
    rating: 4.1,
    tags: ["sightseeing"]
  },
  {
    basePrice: 5457,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Sail from Venice into a world of wonder. The Mediterranean beckons with unforgettable ports like Mykonos, Rome, Athens, where every view is picture-perfect and every moment is priceless.",
      distance: "1279 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Athens to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
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
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amina Wallace",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "crystalline.mythos.o@velarivoyages.com",
          contactNumber: "+1-304-586-6480"
        }
      }
    ],
    title: "Crystalline Mythos of the Wine-Soaked Villages",
    description: "Sail from Venice into a world of wonder. The Mediterranean beckons with unforgettable ports like Mykonos, Rome, Athens, where every view is picture-perfect and every moment is priceless.",
    rating: 4.7,
    tags: ["fall-cruise","historical","glacier-cruise"]
  },
  {
    basePrice: 5802,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "From the lively departure port of Venice, this curated elevation showcases the finest of Mediterranean. With visits to Santorini, Dubrovnik, Mykonos, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1437 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Mykonos"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Sandra Porter",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "starlit.requiem.of.t@velarivoyages.com",
          contactNumber: "+1-909-665-4062"
        }
      }
    ],
    title: "Starlit Requiem of the Citadels by the Sea",
    description: "From the lively departure port of Venice, this curated elevation showcases the finest of Mediterranean. With visits to Santorini, Dubrovnik, Mykonos, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.9,
    tags: ["nature","seasonal","tropical"]
  },
  {
    basePrice: 8385,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
  }
],
      description: "Unwind and explore on this reflection through Mediterranean, departing from Venice. With every stop—from Santorini to Malta—you’ll collect memories that last a lifetime.",
      distance: "1269 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Santorini to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Rome to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Santorini"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Abigail Hawkins",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "unforgettable.awaken@velarivoyages.com",
          contactNumber: "+1-733-651-1577"
        }
      }
    ],
    title: "Unforgettable Awakening of the Canal Kingdom",
    description: "Unwind and explore on this reflection through Mediterranean, departing from Venice. With every stop—from Santorini to Malta—you’ll collect memories that last a lifetime.",
    rating: 4.4,
    tags: ["anniversary-cruise","themed-cruise"]
  },
  {
    basePrice: 3530,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
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
      description: "Depart from the iconic port of Venice and sail through the enchanting Mediterranean. Explore vibrant destinations like Barcelona, Athens, Malta, Santorini, each offering its own unique charm and local flair.",
      distance: "1342 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Athens to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Malta to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Barcelona"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Chambers",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "radiancedrenched.jou@velarivoyages.com",
          contactNumber: "+1-415-888-1183"
        }
      }
    ],
    title: "Radiance-Drenched Journey of the Laced in Silence",
    description: "Depart from the iconic port of Venice and sail through the enchanting Mediterranean. Explore vibrant destinations like Barcelona, Athens, Malta, Santorini, each offering its own unique charm and local flair.",
    rating: 4.3,
    tags: ["romantic"]
  },
  {
    basePrice: 9737,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Join us in Venice for a excursion of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Rome, Santorini where timeless traditions meet modern luxuries.",
      distance: "1355 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Santorini to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Rome"
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
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Avery Day",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "charming.drift.of.th@velarivoyages.com",
          contactNumber: "+1-920-385-4970"
        }
      }
    ],
    title: "Charming Drift of the Mosaic Harbors",
    description: "Join us in Venice for a excursion of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Rome, Santorini where timeless traditions meet modern luxuries.",
    rating: 4.0,
    tags: ["long-distance","cruise-holiday"]
  },
  {
    basePrice: 2477,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Embark from Venice and traverse the Mediterranean in style. Whether it’s the energy of Dubrovnik or the calm of Rome, each destination reveals a new side of paradise.",
      distance: "924 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Holloway",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "enchanting.adventure@velarivoyages.com",
          contactNumber: "+1-458-565-8655"
        }
      }
    ],
    title: "Enchanting Adventure of the Misty Reflections",
    description: "Embark from Venice and traverse the Mediterranean in style. Whether it’s the energy of Dubrovnik or the calm of Rome, each destination reveals a new side of paradise.",
    rating: 4.5,
    tags: ["adventure","cruise-excursion"]
  },
  {
    basePrice: 6835,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
  }
],
      description: "This extraordinary horizon from Venice offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Malta, Rome, Athens and Mykonos, creating memories that will last a lifetime.",
      distance: "932 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Malta to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
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
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Avery Warren",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/56.jpg",
        contact: {
          contactEmail: "immersive.whisper.of@velarivoyages.com",
          contactNumber: "+1-398-318-9143"
        }
      }
    ],
    title: "Immersive Whisper of the Gondola Phantom",
    description: "This extraordinary horizon from Venice offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Malta, Rome, Athens and Mykonos, creating memories that will last a lifetime.",
    rating: 4.2,
    tags: ["long-distance"]
  },
  {
    basePrice: 8275,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
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
  }
],
      description: "Escape into the calm waters of Mediterranean with this panoramic journey from Venice. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Barcelona, Santorini, Mykonos.",
      distance: "1218 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Santorini to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Caroline Sutton",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "crystalline.legacy.o@velarivoyages.com",
          contactNumber: "+1-425-378-6817"
        }
      }
    ],
    title: "Crystalline Legacy of the Floating City",
    description: "Escape into the calm waters of Mediterranean with this panoramic journey from Venice. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Barcelona, Santorini, Mykonos.",
    rating: 4.4,
    tags: ["cruise-getaway"]
  },
  {
    basePrice: 4990,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
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
  }
],
      description: "Discover the wonders of Mediterranean aboard this midnight cruise departing from Venice. Journey through crystal waters to explore the treasures of Barcelona, Dubrovnik, Athens, Santorini, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "607 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Athens to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Athens"
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
        name: "Riley Hamilton",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "charming.resonance.o@velarivoyages.com",
          contactNumber: "+1-720-284-1749"
        }
      }
    ],
    title: "Charming Resonance of the Floating City",
    description: "Discover the wonders of Mediterranean aboard this midnight cruise departing from Venice. Journey through crystal waters to explore the treasures of Barcelona, Dubrovnik, Athens, Santorini, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.6,
    tags: ["wildlife"]
  },
  {
    basePrice: 1930,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
      description: "This drift takes you beyond the ordinary, starting in Venice. With breathtaking stops in Dubrovnik, Santorini, Athens, Malta, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "797 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Venice to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Athens to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
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
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Alice Graham",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "verdant.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-481-174-9412"
        }
      }
    ],
    title: "Verdant Horizon of the Floating City",
    description: "This drift takes you beyond the ordinary, starting in Venice. With breathtaking stops in Dubrovnik, Santorini, Athens, Malta, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.7,
    tags: ["glacier-cruise"]
  },
  {
    basePrice: 1812,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "From the lively departure port of Venice, this curated awakening showcases the finest of Mediterranean. With visits to Malta, Santorini, Barcelona, Dubrovnik, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "821 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Santorini to Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Malta"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lerato Knight",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "azure.pulse.of.the.l@velarivoyages.com",
          contactNumber: "+1-140-919-8075"
        }
      }
    ],
    title: "Azure Pulse of the Legacy of Empires",
    description: "From the lively departure port of Venice, this curated awakening showcases the finest of Mediterranean. With visits to Malta, Santorini, Barcelona, Dubrovnik, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.6,
    tags: ["seasonal","glacier-cruise"]
  },
  {
    basePrice: 3109,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Dubrovnik",
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
  },
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Unwind and explore on this infinite through Mediterranean, departing from Venice. With every stop—from Athens to Mykonos—you’ll collect memories that last a lifetime.",
      distance: "766 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Hannah Campbell",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "mesmerizing.discover@velarivoyages.com",
          contactNumber: "+1-839-658-5432"
        }
      }
    ],
    title: "Mesmerizing Discovery of the Mediterranean Mosaics",
    description: "Unwind and explore on this infinite through Mediterranean, departing from Venice. With every stop—from Athens to Mykonos—you’ll collect memories that last a lifetime.",
    rating: 4.9,
    tags: ["cruise-line"]
  },
  {
    basePrice: 1401,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Start in the vibrant city of Venice and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Santorini, Mykonos, Barcelona, Malta.",
      distance: "710 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Malta"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Malta to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
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
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Gardner",
        role: "Loyalty Program Representative",
        languages: ["Finnish"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "mythic.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-972-139-2564"
        }
      }
    ],
    title: "Mythic Odyssey of the Mosaic Harbors",
    description: "Start in the vibrant city of Venice and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Santorini, Mykonos, Barcelona, Malta.",
    rating: 4.7,
    tags: ["expedition","seasonal"]
  },
  {
    basePrice: 3541,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Depart from the iconic port of Venice and sail through the enchanting Mediterranean. Explore vibrant destinations like Rome, Mykonos, Dubrovnik, each offering its own unique charm and local flair.",
      distance: "1366 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Rome"
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
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Chloe Campbell",
        role: "Sales Consultant",
        languages: ["Swahili"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "verdant.legacy.of.th@velarivoyages.com",
          contactNumber: "+1-200-580-4541"
        }
      }
    ],
    title: "Verdant Legacy of the Mediterranean Mosaics",
    description: "Depart from the iconic port of Venice and sail through the enchanting Mediterranean. Explore vibrant destinations like Rome, Mykonos, Dubrovnik, each offering its own unique charm and local flair.",
    rating: 4.8,
    tags: ["weekend-cruise","nature"]
  },
  {
    basePrice: 7884,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "Your journey through the Mediterranean begins in Venice, where elegance meets adventure. Explore the shores of Athens, Rome, Santorini, Barcelona, with curated excursions and luxurious onboard amenities.",
      distance: "735 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Athens"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Santorini to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Carol Ellis",
        role: "Sales Consultant",
        languages: ["Swahili"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "hidden.exploration.o@velarivoyages.com",
          contactNumber: "+1-614-271-3747"
        }
      }
    ],
    title: "Hidden Exploration of the Canal Kingdom",
    description: "Your journey through the Mediterranean begins in Venice, where elegance meets adventure. Explore the shores of Athens, Rome, Santorini, Barcelona, with curated excursions and luxurious onboard amenities.",
    rating: 5.0,
    tags: ["nature"]
  },
  {
    basePrice: 3947,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
  }
],
      description: "Let the winds of the Mediterranean carry you from Venice to the most stunning ports in the region. With destinations like Malta, Rome, this realm redefines luxury travel.",
      distance: "887 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Malta to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Janet Fox",
        role: "Sales Consultant",
        languages: ["Swahili"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "serene.excursion.of.@velarivoyages.com",
          contactNumber: "+1-523-307-9856"
        }
      }
    ],
    title: "Serene Excursion of the Gondola Phantom",
    description: "Let the winds of the Mediterranean carry you from Venice to the most stunning ports in the region. With destinations like Malta, Rome, this realm redefines luxury travel.",
    rating: 4.5,
    tags: ["tropical","exclusive"]
  },
  {
    basePrice: 9954,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
  }
],
      description: "From bustling Venice to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Rome, Dubrovnik deliver a balanced blend of culture and comfort.",
      distance: "1338 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Rome to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Ashley Crawford",
        role: "Sales Consultant",
        languages: ["Swahili"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "serene.discovery.of.@velarivoyages.com",
          contactNumber: "+1-952-227-3343"
        }
      }
    ],
    title: "Serene Discovery of the Lagoon Reverie",
    description: "From bustling Venice to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Rome, Dubrovnik deliver a balanced blend of culture and comfort.",
    rating: 4.3,
    tags: ["family-friendly","relaxation","holiday-cruise"]
  }
];
