import { Cruise } from "@/lib/interfaces/services/cruises";

export const lisbonCruises: Cruise[] = [
  {
    basePrice: 4380,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
      description: "This escape takes you beyond the ordinary, starting in Lisbon. With breathtaking stops in Athens, Malta, Barcelona, Mykonos, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "629 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Malta to Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Malta"
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
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Warren",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "mythic.retreat.of.th@velarivoyages.com",
          contactNumber: "+1-158-630-8535"
        }
      }
    ],
    title: "Mythic Retreat of the Timeless Coastlines",
    description: "This escape takes you beyond the ordinary, starting in Lisbon. With breathtaking stops in Athens, Malta, Barcelona, Mykonos, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.5,
    tags: ["VIP","long-distance"]
  },
  {
    basePrice: 4895,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "Begin a captivating labyrinth through the Mediterranean, departing Lisbon. With visits to Santorini, Dubrovnik, Barcelona, each day brings a new adventure and deeper connection to the region.",
      distance: "630 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Santorini"
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
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Scarlett Murray",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "opulent.labyrinth.of@velarivoyages.com",
          contactNumber: "+1-195-491-9438"
        }
      }
    ],
    title: "Opulent Labyrinth of the Timeless Coastlines",
    description: "Begin a captivating labyrinth through the Mediterranean, departing Lisbon. With visits to Santorini, Dubrovnik, Barcelona, each day brings a new adventure and deeper connection to the region.",
    rating: 4.2,
    tags: ["seasonal"]
  },
  {
    basePrice: 8403,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Experience coastal elegance on this renaissance from Lisbon, where the journey through Mediterranean includes stops in Barcelona, Rome, each more enchanting than the last.",
      distance: "542 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Leah Hayes",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "enchanting.tide.of.t@velarivoyages.com",
          contactNumber: "+1-519-230-2299"
        }
      }
    ],
    title: "Enchanting Tide of the Hillside Haven",
    description: "Experience coastal elegance on this renaissance from Lisbon, where the journey through Mediterranean includes stops in Barcelona, Rome, each more enchanting than the last.",
    rating: 4.5,
    tags: ["relaxation"]
  },
  {
    basePrice: 9894,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
      description: "Enjoy seamless luxury on this epic retreat beginning in Lisbon. Visit breathtaking Mediterranean locales such as Santorini, Athens, Rome, Malta on this unforgettable itinerary.",
      distance: "1072 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Rome to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Valentina Maxwell",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "timeless.passage.of.@velarivoyages.com",
          contactNumber: "+1-669-514-4549"
        }
      }
    ],
    title: "Timeless Passage of the Hillside Haven",
    description: "Enjoy seamless luxury on this epic retreat beginning in Lisbon. Visit breathtaking Mediterranean locales such as Santorini, Athens, Rome, Malta on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["tropical"]
  },
  {
    basePrice: 2331,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let this hidden voyage redefine your idea of travel. From Lisbon, explore the Mediterranean in luxurious comfort, stopping at Malta, Athens, Santorini where every port offers a new chapter.",
      distance: "1329 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Malta to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Athens to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Athens"
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
        name: "Claire Marshall",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "eternal.escape.of.th@velarivoyages.com",
          contactNumber: "+1-724-819-3015"
        }
      }
    ],
    title: "Eternal Escape of the Sun-Drenched Riviera",
    description: "Let this hidden voyage redefine your idea of travel. From Lisbon, explore the Mediterranean in luxurious comfort, stopping at Malta, Athens, Santorini where every port offers a new chapter.",
    rating: 4.5,
    tags: ["VIP","romantic"]
  },
  {
    basePrice: 8529,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
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
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Step into a world of elegance and exploration from Lisbon. This voyage through the Mediterranean unveils stunning stops including Barcelona, Rome, Mykonos, all with first-class service.",
      distance: "1189 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Fisher",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "starlit.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-605-659-5396"
        }
      }
    ],
    title: "Starlit Horizon of the Portuguese Pearl",
    description: "Step into a world of elegance and exploration from Lisbon. This voyage through the Mediterranean unveils stunning stops including Barcelona, Rome, Mykonos, all with first-class service.",
    rating: 4.0,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 1240,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
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
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Leave ordinary behind as you sail from Lisbon across the captivating Mediterranean. Discover the distinctive personality of each destination, from Rome, Santorini, Mykonos.",
      distance: "1277 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Santorini to Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
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
    "description": "Exploring Santorini"
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
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Leah Maxwell",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
        contact: {
          contactEmail: "hidden.journey.of.th@velarivoyages.com",
          contactNumber: "+1-917-224-2493"
        }
      }
    ],
    title: "Hidden Journey of the Marble Cities",
    description: "Leave ordinary behind as you sail from Lisbon across the captivating Mediterranean. Discover the distinctive personality of each destination, from Rome, Santorini, Mykonos.",
    rating: 4.8,
    tags: ["tropical","romantic","fall-cruise"]
  },
  {
    basePrice: 8513,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
      description: "Join us in Lisbon for a horizon of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Athens, Malta where timeless traditions meet modern luxuries.",
      distance: "1279 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Athens"
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
        name: "Elena Keller",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "breathtaking.labyrin@velarivoyages.com",
          contactNumber: "+1-806-384-2150"
        }
      }
    ],
    title: "Breathtaking Labyrinth of the Marble Cities",
    description: "Join us in Lisbon for a horizon of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Athens, Malta where timeless traditions meet modern luxuries.",
    rating: 4.7,
    tags: ["romantic"]
  },
  {
    basePrice: 9198,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
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
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Begin a captivating reverie through the Mediterranean, departing Lisbon. With visits to Barcelona, Malta, Athens, each day brings a new adventure and deeper connection to the region.",
      distance: "988 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Malta to Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Athens to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Anna Payne",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "extraordinary.journe@velarivoyages.com",
          contactNumber: "+1-266-745-1193"
        }
      }
    ],
    title: "Extraordinary Journey of the Marble Cities",
    description: "Begin a captivating reverie through the Mediterranean, departing Lisbon. With visits to Barcelona, Malta, Athens, each day brings a new adventure and deeper connection to the region.",
    rating: 4.2,
    tags: ["VIP","luxury"]
  },
  {
    basePrice: 9776,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
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
      description: "Sail away from the charming harbor of Lisbon on this secret journey across Mediterranean. Uncover the beauty and history of Rome, Malta, Athens with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1414 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Rome to Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Malta to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Christine Foster",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "exquisite.horizon.of@velarivoyages.com",
          contactNumber: "+1-428-825-2555"
        }
      }
    ],
    title: "Exquisite Horizon of the Timeless Coastlines",
    description: "Sail away from the charming harbor of Lisbon on this secret journey across Mediterranean. Uncover the beauty and history of Rome, Malta, Athens with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.8,
    tags: ["fall-cruise","exclusive"]
  },
  {
    basePrice: 3338,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
      description: "Let this hidden voyage redefine your idea of travel. From Lisbon, explore the Mediterranean in luxurious comfort, stopping at Dubrovnik, Rome, Athens where every port offers a new chapter.",
      distance: "1228 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Rome to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Christine Graham",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "hidden.mirage.of.the@velarivoyages.com",
          contactNumber: "+1-924-342-2236"
        }
      }
    ],
    title: "Hidden Mirage of the Hillside Haven",
    description: "Let this hidden voyage redefine your idea of travel. From Lisbon, explore the Mediterranean in luxurious comfort, stopping at Dubrovnik, Rome, Athens where every port offers a new chapter.",
    rating: 4.7,
    tags: ["VIP","sightseeing"]
  },
  {
    basePrice: 3780,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Step aboard in Lisbon and begin a celestial journey through the scenic Mediterranean. From historic cities to coastal hideaways like Mykonos, Rome, Dubrovnik, Santorini, every day is unforgettable.",
      distance: "515 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Santorini to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Lisbon"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Zoe Ellis",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "breathtaking.voyage.@velarivoyages.com",
          contactNumber: "+1-761-352-5400"
        }
      }
    ],
    title: "Breathtaking Voyage of the Portuguese Pearl",
    description: "Step aboard in Lisbon and begin a celestial journey through the scenic Mediterranean. From historic cities to coastal hideaways like Mykonos, Rome, Dubrovnik, Santorini, every day is unforgettable.",
    rating: 4.8,
    tags: ["short-getaway","seasonal"]
  },
  {
    basePrice: 7688,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
  }
],
      description: "Experience coastal elegance on this odyssey from Lisbon, where the journey through Mediterranean includes stops in Athens, Barcelona, Mykonos, Rome, each more enchanting than the last.",
      distance: "635 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Athens to Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Athens"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Bennett",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
        contact: {
          contactEmail: "eternal.mystique.of.@velarivoyages.com",
          contactNumber: "+1-440-452-8495"
        }
      }
    ],
    title: "Eternal Mystique of the Portuguese Pearl",
    description: "Experience coastal elegance on this odyssey from Lisbon, where the journey through Mediterranean includes stops in Athens, Barcelona, Mykonos, Rome, each more enchanting than the last.",
    rating: 4.5,
    tags: ["seasonal","romantic"]
  },
  {
    basePrice: 9500,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
  }
],
      description: "Discover the wonders of Mediterranean aboard this forbidden cruise departing from Lisbon. Journey through crystal waters to explore the treasures of Dubrovnik, Athens, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "621 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Samantha Graves",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
        contact: {
          contactEmail: "enchanting.voyage.of@velarivoyages.com",
          contactNumber: "+1-503-232-6397"
        }
      }
    ],
    title: "Enchanting Voyage of the Hillside Haven",
    description: "Discover the wonders of Mediterranean aboard this forbidden cruise departing from Lisbon. Journey through crystal waters to explore the treasures of Dubrovnik, Athens, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.6,
    tags: ["VIP","short-getaway"]
  },
  {
    basePrice: 9613,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Escape the everyday with this extraordinary journey through Mediterranean, departing from Lisbon. You'll visit Rome, Malta, where every stop is a new adventure.",
      distance: "918 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Rome to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Malta to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Rome"
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
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Price",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "captivating.sojourn.@velarivoyages.com",
          contactNumber: "+1-219-586-3670"
        }
      }
    ],
    title: "Captivating Sojourn of the Marble Cities",
    description: "Escape the everyday with this extraordinary journey through Mediterranean, departing from Lisbon. You'll visit Rome, Malta, where every stop is a new adventure.",
    rating: 4.0,
    tags: ["short-getaway","relaxation","luxury"]
  },
  {
    basePrice: 3228,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Your realm begins in Lisbon, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Santorini to the historic streets of Rome, each stop in the Mediterranean will leave a lasting impression.",
      distance: "825 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Rome to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Brooklyn Keller",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "mesmerizing.sojourn.@velarivoyages.com",
          contactNumber: "+1-424-847-9422"
        }
      }
    ],
    title: "Mesmerizing Sojourn of the Hillside Haven",
    description: "Your realm begins in Lisbon, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Santorini to the historic streets of Rome, each stop in the Mediterranean will leave a lasting impression.",
    rating: 4.5,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 5697,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Experience the elegance of the seas on this eternal requiem through Mediterranean, starting from the illustrious port of Lisbon. From Dubrovnik, Mykonos to Athens, each destination offers its own story, culture, and breathtaking views.",
      distance: "950 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Athens to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Grace Montgomery",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "crystalline.sanctuar@velarivoyages.com",
          contactNumber: "+1-749-148-5573"
        }
      }
    ],
    title: "Crystalline Sanctuary of the Ancient Shores",
    description: "Experience the elegance of the seas on this eternal requiem through Mediterranean, starting from the illustrious port of Lisbon. From Dubrovnik, Mykonos to Athens, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.7,
    tags: ["adventure","long-distance","VIP"]
  },
  {
    basePrice: 2097,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Start in the vibrant city of Lisbon and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Rome, Athens, Mykonos, Malta.",
      distance: "1088 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Susan Grant",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "mesmerizing.journey.@velarivoyages.com",
          contactNumber: "+1-429-611-3094"
        }
      }
    ],
    title: "Mesmerizing Journey of the Portuguese Pearl",
    description: "Start in the vibrant city of Lisbon and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Rome, Athens, Mykonos, Malta.",
    rating: 4.3,
    tags: ["adventure","luxury"]
  },
  {
    basePrice: 1927,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
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
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Leave ordinary behind as you sail from Lisbon across the captivating Mediterranean. Discover the distinctive personality of each destination, from Barcelona, Santorini, Mykonos.",
      distance: "1285 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Santorini to Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Laura Hamilton",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "unforgettable.sojour@velarivoyages.com",
          contactNumber: "+1-553-586-4539"
        }
      }
    ],
    title: "Unforgettable Sojourn of the Marble Cities",
    description: "Leave ordinary behind as you sail from Lisbon across the captivating Mediterranean. Discover the distinctive personality of each destination, from Barcelona, Santorini, Mykonos.",
    rating: 4.6,
    tags: ["sightseeing"]
  },
  {
    basePrice: 3475,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Your voyage begins in Lisbon, where every sunset on the Mediterranean horizon promises another day of discovery—from Dubrovnik, Santorini, Rome, Athens to hidden ports of charm.",
      distance: "535 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Athens to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Janet Graves",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "infinite.adventure.o@velarivoyages.com",
          contactNumber: "+1-508-953-3642"
        }
      }
    ],
    title: "Infinite Adventure of the Sun-Drenched Riviera",
    description: "Your voyage begins in Lisbon, where every sunset on the Mediterranean horizon promises another day of discovery—from Dubrovnik, Santorini, Rome, Athens to hidden ports of charm.",
    rating: 4.7,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 7920,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "From bustling Lisbon to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Mykonos, Athens, Dubrovnik, Malta deliver a balanced blend of culture and comfort.",
      distance: "522 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Athens to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Malta to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Helen West",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "infinite.mystique.of@velarivoyages.com",
          contactNumber: "+1-525-990-7328"
        }
      }
    ],
    title: "Infinite Mystique of the Portuguese Pearl",
    description: "From bustling Lisbon to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Mykonos, Athens, Dubrovnik, Malta deliver a balanced blend of culture and comfort.",
    rating: 4.3,
    tags: ["exclusive","themed-cruise"]
  },
  {
    basePrice: 7303,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
  }
],
      description: "Leave stress behind with this curated excursion from Lisbon. Sail across the best of Mediterranean and explore treasures like Santorini, Malta with comfort and style.",
      distance: "548 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Santorini to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Avery Hall",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "velvet.realm.of.the.@velarivoyages.com",
          contactNumber: "+1-811-554-1189"
        }
      }
    ],
    title: "Velvet Realm of the Marble Cities",
    description: "Leave stress behind with this curated excursion from Lisbon. Sail across the best of Mediterranean and explore treasures like Santorini, Malta with comfort and style.",
    rating: 4.1,
    tags: ["adventure"]
  },
  {
    basePrice: 3266,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
  }
],
      description: "Join us in Lisbon for a renaissance of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Malta, Santorini, Barcelona where timeless traditions meet modern luxuries.",
      distance: "1421 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Malta"
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
    "description": "Sailing from Santorini to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
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
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Allison Hall",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "secret.adventure.of.@velarivoyages.com",
          contactNumber: "+1-934-531-6205"
        }
      }
    ],
    title: "Secret Adventure of the Hillside Haven",
    description: "Join us in Lisbon for a renaissance of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Malta, Santorini, Barcelona where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["sightseeing","VIP","long-distance"]
  },
  {
    basePrice: 1891,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Escape the everyday with this secret journey through Mediterranean, departing from Lisbon. You'll visit Dubrovnik, Malta, where every stop is a new adventure.",
      distance: "1189 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Malta to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Katherine Douglas",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "luxurious.requiem.of@velarivoyages.com",
          contactNumber: "+1-456-191-6571"
        }
      }
    ],
    title: "Luxurious Requiem of the Portuguese Pearl",
    description: "Escape the everyday with this secret journey through Mediterranean, departing from Lisbon. You'll visit Dubrovnik, Malta, where every stop is a new adventure.",
    rating: 4.5,
    tags: ["fall-cruise","relaxation"]
  },
  {
    basePrice: 2461,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Savor each moment of this forbidden escape through Mediterranean, starting in Lisbon. Visit renowned locations like Dubrovnik, Athens, where adventure and relaxation intertwine.",
      distance: "639 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Athens to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Patricia Carpenter",
        role: "Security Officer",
        languages: ["Kannada"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "celestial.horizon.of@velarivoyages.com",
          contactNumber: "+1-271-530-6376"
        }
      }
    ],
    title: "Celestial Horizon of the Marble Cities",
    description: "Savor each moment of this forbidden escape through Mediterranean, starting in Lisbon. Visit renowned locations like Dubrovnik, Athens, where adventure and relaxation intertwine.",
    rating: 4.8,
    tags: ["VIP"]
  }
];
