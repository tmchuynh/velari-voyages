import { Cruise } from "@/lib/interfaces/services/cruises";

export const veniceCruises: Cruise[] = [
  {
    basePrice: 2733,
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Begin your sojourn in Venice, a gateway to the soul of Mediterranean. Enjoy days spent exploring Barcelona, Santorini and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1456 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Venice to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Santorini to Venice"
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
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Barcelona"
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
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Crawford",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "velvet.excursion.of.@velarivoyages.com",
          contactNumber: "+1-244-515-3030"
        }
      }
    ],
    title: "Velvet Excursion of the Floating City",
    description: "Begin your sojourn in Venice, a gateway to the soul of Mediterranean. Enjoy days spent exploring Barcelona, Santorini and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.4,
    tags: ["adventure","romantic","fall-cruise"]
  },
  {
    basePrice: 8960,
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
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail into splendor from Venice on a unforgettable voyage through Mediterranean. Let each stop—from Rome to Santorini—reveal the unique flavors and colors of the region.",
      distance: "1426 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Athens"
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
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Hudson",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "mesmerizing.voyage.o@velarivoyages.com",
          contactNumber: "+1-383-130-6878"
        }
      }
    ],
    title: "Mesmerizing Voyage of the Canal Kingdom",
    description: "Sail into splendor from Venice on a unforgettable voyage through Mediterranean. Let each stop—from Rome to Santorini—reveal the unique flavors and colors of the region.",
    rating: 4.5,
    tags: ["VIP"]
  },
  {
    basePrice: 7052,
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Step into a world of elegance and exploration from Venice. This sanctuary through the Mediterranean unveils stunning stops including Athens, Mykonos, Malta, all with first-class service.",
      distance: "1044 nautical miles",
      totalDuration: "11 days",
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
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
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
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Lily Carpenter",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
        contact: {
          contactEmail: "captivating.labyrint@velarivoyages.com",
          contactNumber: "+1-735-721-8815"
        }
      }
    ],
    title: "Captivating Labyrinth of the Canal Kingdom",
    description: "Step into a world of elegance and exploration from Venice. This sanctuary through the Mediterranean unveils stunning stops including Athens, Mykonos, Malta, all with first-class service.",
    rating: 4.1,
    tags: ["themed-cruise","VIP"]
  },
  {
    basePrice: 6477,
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
      description: "Set sail from historic Venice for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Barcelona, Dubrovnik.",
      distance: "614 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Stella Hunter",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "enchanting.discovery@velarivoyages.com",
          contactNumber: "+1-793-741-1815"
        }
      }
    ],
    title: "Enchanting Discovery of the Canal Kingdom",
    description: "Set sail from historic Venice for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Barcelona, Dubrovnik.",
    rating: 4.6,
    tags: ["sightseeing","themed-cruise"]
  },
  {
    basePrice: 3043,
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
      description: "Board in Venice for a hand-crafted mystique through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Mykonos, Dubrovnik.",
      distance: "794 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Dubrovnik"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Lerato Nash",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "exquisite.passage.of@velarivoyages.com",
          contactNumber: "+1-609-387-1515"
        }
      }
    ],
    title: "Exquisite Passage of the Floating City",
    description: "Board in Venice for a hand-crafted mystique through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Mykonos, Dubrovnik.",
    rating: 4.6,
    tags: ["themed-cruise","seasonal"]
  },
  {
    basePrice: 7466,
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
      description: "This handpicked horizon begins in Venice and travels through Mediterranean's iconic waterscapes. Discover Athens, Dubrovnik, Santorini, Mykonos as each day brings new stories and every night offers elegant repose.",
      distance: "1433 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
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
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Athens"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Abigail Coleman",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "luxurious.labyrinth.@velarivoyages.com",
          contactNumber: "+1-431-159-1357"
        }
      }
    ],
    title: "Luxurious Labyrinth of the Ancient Shores",
    description: "This handpicked horizon begins in Venice and travels through Mediterranean's iconic waterscapes. Discover Athens, Dubrovnik, Santorini, Mykonos as each day brings new stories and every night offers elegant repose.",
    rating: 4.9,
    tags: ["seasonal"]
  },
  {
    basePrice: 5990,
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Experience the elegance of the seas on this velvet expedition through Mediterranean, starting from the illustrious port of Venice. From Mykonos to Barcelona, each destination offers its own story, culture, and breathtaking views.",
      distance: "798 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Venice to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Venice"
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
    "description": "Exploring Mykonos"
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
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Donna Foster",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "unforgettable.escape@velarivoyages.com",
          contactNumber: "+1-636-155-3426"
        }
      }
    ],
    title: "Unforgettable Escape of the Canal Kingdom",
    description: "Experience the elegance of the seas on this velvet expedition through Mediterranean, starting from the illustrious port of Venice. From Mykonos to Barcelona, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.1,
    tags: ["VIP","exclusive","short-getaway"]
  },
  {
    basePrice: 3401,
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
      description: "Let the winds of the Mediterranean carry you from Venice to the most stunning ports in the region. With destinations like Dubrovnik, Rome, Malta, Santorini, this saga redefines luxury travel.",
      distance: "1141 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Rome to Malta"
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
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
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
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Emma Hunter",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "infinite.realm.of.th@velarivoyages.com",
          contactNumber: "+1-343-298-7541"
        }
      }
    ],
    title: "Infinite Realm of the Canal Kingdom",
    description: "Let the winds of the Mediterranean carry you from Venice to the most stunning ports in the region. With destinations like Dubrovnik, Rome, Malta, Santorini, this saga redefines luxury travel.",
    rating: 4.7,
    tags: ["luxury","sightseeing"]
  },
  {
    basePrice: 7528,
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Set sail from Venice on this legendary sojourn through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Dubrovnik and Rome, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "676 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Rome to Venice"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Carol Dean",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "golden.journey.of.th@velarivoyages.com",
          contactNumber: "+1-465-313-5443"
        }
      }
    ],
    title: "Golden Journey of the Sun-Drenched Riviera",
    description: "Set sail from Venice on this legendary sojourn through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Dubrovnik and Rome, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.3,
    tags: ["luxury","tropical"]
  },
  {
    basePrice: 2993,
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Set sail from historic Venice for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Dubrovnik, Santorini.",
      distance: "961 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Dubrovnik"
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
    "description": "Sailing from Santorini to Venice"
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
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Katherine Fisher",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
        contact: {
          contactEmail: "whispering.saga.of.t@velarivoyages.com",
          contactNumber: "+1-137-236-3513"
        }
      }
    ],
    title: "Whispering Saga of the Marble Cities",
    description: "Set sail from historic Venice for a modern escape into the Mediterranean. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Dubrovnik, Santorini.",
    rating: 5.0,
    tags: ["tropical","long-distance"]
  },
  {
    basePrice: 4975,
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
      description: "Leave ordinary behind as you sail from Venice across the captivating Mediterranean. Discover the distinctive personality of each destination, from Athens, Rome, Malta.",
      distance: "1267 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Rome to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
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
    "description": "Exploring Athens"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Deborah Douglas",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "extraordinary.tide.o@velarivoyages.com",
          contactNumber: "+1-113-515-8463"
        }
      }
    ],
    title: "Extraordinary Tide of the Sun-Drenched Riviera",
    description: "Leave ordinary behind as you sail from Venice across the captivating Mediterranean. Discover the distinctive personality of each destination, from Athens, Rome, Malta.",
    rating: 4.4,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 2005,
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
    "city": "Malta",
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
      description: "Escape the everyday with this infinite journey through Mediterranean, departing from Venice. You'll visit Malta, Mykonos, where every stop is a new adventure.",
      distance: "1395 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Venice to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Malta to Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Emily Stewart",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "epic.discovery.of.th@velarivoyages.com",
          contactNumber: "+1-261-612-9798"
        }
      }
    ],
    title: "Epic Discovery of the Canal Kingdom",
    description: "Escape the everyday with this infinite journey through Mediterranean, departing from Venice. You'll visit Malta, Mykonos, where every stop is a new adventure.",
    rating: 4.9,
    tags: ["exclusive"]
  },
  {
    basePrice: 3685,
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
      description: "Embark from Venice and traverse the Mediterranean in style. Whether it’s the energy of Mykonos or the calm of Dubrovnik, each destination reveals a new side of paradise.",
      distance: "787 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Mykonos"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Christine Nash",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "mythic.mirage.of.the@velarivoyages.com",
          contactNumber: "+1-219-653-7674"
        }
      }
    ],
    title: "Mythic Mirage of the Floating City",
    description: "Embark from Venice and traverse the Mediterranean in style. Whether it’s the energy of Mykonos or the calm of Dubrovnik, each destination reveals a new side of paradise.",
    rating: 4.4,
    tags: ["seasonal","family-friendly","adventure"]
  },
  {
    basePrice: 2662,
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Embark from Venice and traverse the Mediterranean in style. Whether it’s the energy of Santorini or the calm of Rome, each destination reveals a new side of paradise.",
      distance: "1241 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Rome to Venice"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sophia Graves",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "crystalline.sanctuar@velarivoyages.com",
          contactNumber: "+1-337-207-7574"
        }
      }
    ],
    title: "Crystalline Sanctuary of the Marble Cities",
    description: "Embark from Venice and traverse the Mediterranean in style. Whether it’s the energy of Santorini or the calm of Rome, each destination reveals a new side of paradise.",
    rating: 4.7,
    tags: ["VIP","luxury"]
  },
  {
    basePrice: 5388,
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
      description: "Escape to sea from Venice on a celestial voyage exploring the magic of Mediterranean. Visit unforgettable locales like Athens, Rome, Dubrovnik, where each stop inspires awe.",
      distance: "1116 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
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
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Virginia Mitchell",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "epic.escape.of.the.s@velarivoyages.com",
          contactNumber: "+1-718-956-4956"
        }
      }
    ],
    title: "Epic Escape of the Sun-Drenched Riviera",
    description: "Escape to sea from Venice on a celestial voyage exploring the magic of Mediterranean. Visit unforgettable locales like Athens, Rome, Dubrovnik, where each stop inspires awe.",
    rating: 5.0,
    tags: ["themed-cruise","exclusive"]
  },
  {
    basePrice: 5469,
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Cruise into cultural richness aboard this celestial horizon departing Venice. Savor local cuisine and uncover regional beauty from Athens to Santorini.",
      distance: "841 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Athens to Santorini"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Kimberly Campbell",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "velvet.reverie.of.th@velarivoyages.com",
          contactNumber: "+1-889-462-5269"
        }
      }
    ],
    title: "Velvet Reverie of the Floating City",
    description: "Cruise into cultural richness aboard this celestial horizon departing Venice. Savor local cuisine and uncover regional beauty from Athens to Santorini.",
    rating: 4.2,
    tags: ["adventure","fall-cruise","relaxation"]
  },
  {
    basePrice: 1633,
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Step aboard in Venice and begin a breathtaking journey through the scenic Mediterranean. From historic cities to coastal hideaways like Santorini, Rome, every day is unforgettable.",
      distance: "1088 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Venice to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Rome to Venice"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Zoe Lawson",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "epic.expedition.of.t@velarivoyages.com",
          contactNumber: "+1-756-790-6028"
        }
      }
    ],
    title: "Epic Expedition of the Floating City",
    description: "Step aboard in Venice and begin a breathtaking journey through the scenic Mediterranean. From historic cities to coastal hideaways like Santorini, Rome, every day is unforgettable.",
    rating: 4.6,
    tags: ["seasonal","luxury","exclusive"]
  },
  {
    basePrice: 3091,
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
    isPopular: true, // Make fewer cruises "popular"
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "Start in the vibrant city of Venice and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Athens, Dubrovnik, Malta, Barcelona.",
      distance: "943 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
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
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Malta to Barcelona"
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
    "description": "Exploring Athens"
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
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Isabella Fox",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "epic.escape.of.the.c@velarivoyages.com",
          contactNumber: "+1-317-585-7038"
        }
      }
    ],
    title: "Epic Escape of the Canal Kingdom",
    description: "Start in the vibrant city of Venice and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Athens, Dubrovnik, Malta, Barcelona.",
    rating: 4.8,
    tags: ["short-getaway","luxury","VIP"]
  },
  {
    basePrice: 7968,
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Sail into splendor from Venice on a forbidden voyage through Mediterranean. Let each stop—from Rome to Dubrovnik—reveal the unique flavors and colors of the region.",
      distance: "1164 nautical miles",
      totalDuration: "16 days",
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
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Donna Clark",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "spectacular.horizon.@velarivoyages.com",
          contactNumber: "+1-484-420-8462"
        }
      }
    ],
    title: "Spectacular Horizon of the Floating City",
    description: "Sail into splendor from Venice on a forbidden voyage through Mediterranean. Let each stop—from Rome to Dubrovnik—reveal the unique flavors and colors of the region.",
    rating: 4.5,
    tags: ["fall-cruise","tropical"]
  },
  {
    basePrice: 3786,
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
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Escape into the calm waters of Mediterranean with this crystalline journey from Venice. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Malta, Rome, Dubrovnik, Mykonos.",
      distance: "683 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Malta to Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Mykonos"
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
    "description": "Exploring Malta"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Naomi Hall",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
        contact: {
          contactEmail: "celestial.passage.of@velarivoyages.com",
          contactNumber: "+1-673-923-1652"
        }
      }
    ],
    title: "Celestial Passage of the Floating City",
    description: "Escape into the calm waters of Mediterranean with this crystalline journey from Venice. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Malta, Rome, Dubrovnik, Mykonos.",
    rating: 4.2,
    tags: ["VIP","seasonal"]
  },
  {
    basePrice: 7310,
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
  }
],
      description: "Step into a world of elegance and exploration from Venice. This expedition through the Mediterranean unveils stunning stops including Malta, Barcelona, Athens, all with first-class service.",
      distance: "1070 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Malta to Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Athens"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Rachel Day",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "unforgettable.sojour@velarivoyages.com",
          contactNumber: "+1-524-707-6159"
        }
      }
    ],
    title: "Unforgettable Sojourn of the Floating City",
    description: "Step into a world of elegance and exploration from Venice. This expedition through the Mediterranean unveils stunning stops including Malta, Barcelona, Athens, all with first-class service.",
    rating: 4.3,
    tags: ["tropical","fall-cruise"]
  },
  {
    basePrice: 6888,
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "From the lively departure port of Venice, this curated reverie showcases the finest of Mediterranean. With visits to Dubrovnik, Athens, Malta, Santorini, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "724 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
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
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 19",
    "end": "Day 19",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Brooklyn West",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "forbidden.mirage.of.@velarivoyages.com",
          contactNumber: "+1-331-987-3498"
        }
      }
    ],
    title: "Forbidden Mirage of the Ancient Shores",
    description: "From the lively departure port of Venice, this curated reverie showcases the finest of Mediterranean. With visits to Dubrovnik, Athens, Malta, Santorini, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.7,
    tags: ["sightseeing","short-getaway"]
  },
  {
    basePrice: 6107,
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
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
      description: "Explore a new side of Mediterranean with this captivating reverie starting in Venice. Visit charming ports such as Dubrovnik, Rome, each offering its own unique rhythm.",
      distance: "638 nautical miles",
      totalDuration: "12 days",
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
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Rome to Venice"
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
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Emma Parker",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "mythic.reverie.of.th@velarivoyages.com",
          contactNumber: "+1-984-252-1278"
        }
      }
    ],
    title: "Mythic Reverie of the Canal Kingdom",
    description: "Explore a new side of Mediterranean with this captivating reverie starting in Venice. Visit charming ports such as Dubrovnik, Rome, each offering its own unique rhythm.",
    rating: 4.3,
    tags: ["short-getaway","fall-cruise"]
  },
  {
    basePrice: 8828,
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Begin your escape in Venice, a gateway to the soul of Mediterranean. Enjoy days spent exploring Barcelona, Santorini and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "967 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
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
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Barcelona"
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
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Margaret Cooper",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
        contact: {
          contactEmail: "breathtaking.voyage.@velarivoyages.com",
          contactNumber: "+1-225-707-7212"
        }
      }
    ],
    title: "Breathtaking Voyage of the Timeless Coastlines",
    description: "Begin your escape in Venice, a gateway to the soul of Mediterranean. Enjoy days spent exploring Barcelona, Santorini and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.9,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 6834,
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
      description: "Let this crystalline voyage redefine your idea of travel. From Venice, explore the Mediterranean in luxurious comfort, stopping at Dubrovnik, Athens where every port offers a new chapter.",
      distance: "606 nautical miles",
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
    "description": "Sailing from Dubrovnik to Athens"
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
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Zola Porter",
        role: "Safety Officer",
        languages: ["Marathi","Russian","Portuguese"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "starlit.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-221-489-9434"
        }
      }
    ],
    title: "Starlit Voyage of the Floating City",
    description: "Let this crystalline voyage redefine your idea of travel. From Venice, explore the Mediterranean in luxurious comfort, stopping at Dubrovnik, Athens where every port offers a new chapter.",
    rating: 4.3,
    tags: ["themed-cruise","tropical"]
  }
];
