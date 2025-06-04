import { Cruise } from "@/lib/interfaces/services/cruises";

export const newYorkCityCruises: Cruise[] = [
  {
    basePrice: 4353,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
      description: "Let the waves lead you from New York City on this captivating labyrinth. Traverse the iconic waters of East Coast USA and discover the beauty of Barcelona, Malta, Santorini, Rome.",
      distance: "1143 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Santorini to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Santorini"
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
        name: "Leah Hamilton",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/92.jpg",
        contact: {
          contactEmail: "golden.exploration.o@velarivoyages.com",
          contactNumber: "+1-292-205-5015"
        }
      }
    ],
    title: "Golden Exploration of the Big Apple",
    description: "Let the waves lead you from New York City on this captivating labyrinth. Traverse the iconic waters of East Coast USA and discover the beauty of Barcelona, Malta, Santorini, Rome.",
    rating: 4.6,
    tags: ["tropical"]
  },
  {
    basePrice: 7665,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    arrivalLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "Experience coastal elegance on this renaissance from New York City, where the journey through East Coast USA includes stops in Barcelona, Rome, Dubrovnik, Mykonos, each more enchanting than the last.",
      distance: "1031 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Mykonos"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Mykonos to New York City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mary Campbell",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "opulent.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-824-829-6112"
        }
      }
    ],
    title: "Opulent Sojourn of the Big Apple",
    description: "Experience coastal elegance on this renaissance from New York City, where the journey through East Coast USA includes stops in Barcelona, Rome, Dubrovnik, Mykonos, each more enchanting than the last.",
    rating: 4.2,
    tags: ["exclusive","tropical"]
  },
  {
    basePrice: 4279,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    arrivalLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "Start in the vibrant city of New York City and venture into the iconic East Coast USA. Discover authentic local cultures, cuisine, and coastal wonders in Mykonos, Athens.",
      distance: "1146 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Athens to New York City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Mykonos"
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
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Michelle Dunn",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "unforgettable.reveri@velarivoyages.com",
          contactNumber: "+1-683-746-5428"
        }
      }
    ],
    title: "Unforgettable Reverie of the Historic Harbors",
    description: "Start in the vibrant city of New York City and venture into the iconic East Coast USA. Discover authentic local cultures, cuisine, and coastal wonders in Mykonos, Athens.",
    rating: 4.3,
    tags: ["fall-cruise","relaxation","seasonal"]
  },
  {
    basePrice: 3375,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
      description: "This hand-selected legendary cruise offers a true taste of East Coast USA. Depart from New York City and explore ports like Santorini, Dubrovnik, Barcelona, Rome, each telling a story through food, music, and tradition.",
      distance: "1489 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
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
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Anna Holloway",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "whispering.voyage.of@velarivoyages.com",
          contactNumber: "+1-121-530-9158"
        }
      }
    ],
    title: "Whispering Voyage of the Colonial Shores",
    description: "This hand-selected legendary cruise offers a true taste of East Coast USA. Depart from New York City and explore ports like Santorini, Dubrovnik, Barcelona, Rome, each telling a story through food, music, and tradition.",
    rating: 4.1,
    tags: ["exclusive","themed-cruise"]
  },
  {
    basePrice: 9981,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    arrivalLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "Set sail from historic New York City for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Mykonos, Dubrovnik, Barcelona.",
      distance: "1274 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Barcelona to New York City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Ashley Morgan",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "captivating.quest.of@velarivoyages.com",
          contactNumber: "+1-942-712-9962"
        }
      }
    ],
    title: "Captivating Quest of the Empire Gateway",
    description: "Set sail from historic New York City for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Mykonos, Dubrovnik, Barcelona.",
    rating: 4.7,
    tags: ["luxury","adventure"]
  },
  {
    basePrice: 9636,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This extraordinary sojourn from New York City offers the ultimate East Coast USA exploration. Immerse yourself in the rich cultures and stunning landscapes of Rome, Athens, Mykonos and Santorini, creating memories that will last a lifetime.",
      distance: "786 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
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
    "description": "Exploring Athens"
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
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Michelle Campbell",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "unforgettable.advent@velarivoyages.com",
          contactNumber: "+1-300-572-5789"
        }
      }
    ],
    title: "Unforgettable Adventure of the Empire Gateway",
    description: "This extraordinary sojourn from New York City offers the ultimate East Coast USA exploration. Immerse yourself in the rich cultures and stunning landscapes of Rome, Athens, Mykonos and Santorini, creating memories that will last a lifetime.",
    rating: 4.4,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 5396,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "Malta",
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
      description: "Launch into adventure from New York City and sail deep into the heart of the East Coast USA. With ports of call like Rome, Athens, Malta, Dubrovnik, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "750 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Malta to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aria Foster",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "extraordinary.reveri@velarivoyages.com",
          contactNumber: "+1-251-155-6062"
        }
      }
    ],
    title: "Extraordinary Reverie of the Empire Gateway",
    description: "Launch into adventure from New York City and sail deep into the heart of the East Coast USA. With ports of call like Rome, Athens, Malta, Dubrovnik, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.1,
    tags: ["romantic","exclusive","long-distance"]
  },
  {
    basePrice: 8095,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Board in New York City for a hand-crafted passage through the breathtaking East Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Barcelona, Dubrovnik, Santorini.",
      distance: "1075 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New York City to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Amelia Hudson",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
        contact: {
          contactEmail: "infinite.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-802-207-2160"
        }
      }
    ],
    title: "Infinite Odyssey of the Empire Gateway",
    description: "Board in New York City for a hand-crafted passage through the breathtaking East Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Barcelona, Dubrovnik, Santorini.",
    rating: 4.6,
    tags: ["VIP","exclusive"]
  },
  {
    basePrice: 1479,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail away from the charming harbor of New York City on this exquisite journey across East Coast USA. Uncover the beauty and history of Dubrovnik, Rome, Santorini with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1385 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New York City to Dubrovnik"
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
    "description": "Sailing from Rome to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New York City"
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
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Aaliyah Montgomery",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "extraordinary.discov@velarivoyages.com",
          contactNumber: "+1-633-871-3461"
        }
      }
    ],
    title: "Extraordinary Discovery of the Historic Harbors",
    description: "Sail away from the charming harbor of New York City on this exquisite journey across East Coast USA. Uncover the beauty and history of Dubrovnik, Rome, Santorini with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.2,
    tags: ["exclusive","relaxation"]
  },
  {
    basePrice: 1599,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
  }
],
      description: "Set sail from New York City for a voyage like no other. From the picturesque landscapes of Barcelona to the lively ambiance of Dubrovnik, this celestial cruise will redefine your view of East Coast USA.",
      distance: "1330 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
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
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Wallace",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/26.jpg",
        contact: {
          contactEmail: "golden.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-907-326-5189"
        }
      }
    ],
    title: "Golden Sojourn of the Sunrise Coast",
    description: "Set sail from New York City for a voyage like no other. From the picturesque landscapes of Barcelona to the lively ambiance of Dubrovnik, this celestial cruise will redefine your view of East Coast USA.",
    rating: 4.4,
    tags: ["adventure","fall-cruise"]
  },
  {
    basePrice: 2194,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
      description: "This hidden retreat begins in New York City and ventures deep into the heart of East Coast USA. Wander through colorful markets, historic streets, and serene coastlines at Mykonos, Athens, Santorini, Rome.",
      distance: "989 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Santorini to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Mykonos"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Lisa Parker",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "majestic.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-931-292-7172"
        }
      }
    ],
    title: "Majestic Mirage of the Big Apple",
    description: "This hidden retreat begins in New York City and ventures deep into the heart of East Coast USA. Wander through colorful markets, historic streets, and serene coastlines at Mykonos, Athens, Santorini, Rome.",
    rating: 4.6,
    tags: ["romantic"]
  },
  {
    basePrice: 2872,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
      description: "Experience the elegance of the seas on this starlit excursion through East Coast USA, starting from the illustrious port of New York City. From Mykonos to Dubrovnik, each destination offers its own story, culture, and breathtaking views.",
      distance: "998 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New York City to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Catherine Cooper",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "eternal.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-153-354-7030"
        }
      }
    ],
    title: "Eternal Sojourn of the Big Apple",
    description: "Experience the elegance of the seas on this starlit excursion through East Coast USA, starting from the illustrious port of New York City. From Mykonos to Dubrovnik, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.4,
    tags: ["exclusive","fall-cruise"]
  },
  {
    basePrice: 8878,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
  }
],
      description: "Begin a captivating odyssey through the East Coast USA, departing New York City. With visits to Barcelona, Santorini, Dubrovnik, Malta, each day brings a new adventure and deeper connection to the region.",
      distance: "814 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
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
    "description": "Exploring Santorini"
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
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Pamela Palmer",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "forbidden.tide.of.th@velarivoyages.com",
          contactNumber: "+1-450-674-4943"
        }
      }
    ],
    title: "Forbidden Tide of the Big Apple",
    description: "Begin a captivating odyssey through the East Coast USA, departing New York City. With visits to Barcelona, Santorini, Dubrovnik, Malta, each day brings a new adventure and deeper connection to the region.",
    rating: 4.8,
    tags: ["exclusive","relaxation"]
  },
  {
    basePrice: 9104,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail into splendor from New York City on a breathtaking voyage through East Coast USA. Let each stop—from Santorini to Rome—reveal the unique flavors and colors of the region.",
      distance: "630 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Athens to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Catherine Marshall",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "enchanting.explorati@velarivoyages.com",
          contactNumber: "+1-822-382-9505"
        }
      }
    ],
    title: "Enchanting Exploration of the Empire Gateway",
    description: "Sail into splendor from New York City on a breathtaking voyage through East Coast USA. Let each stop—from Santorini to Rome—reveal the unique flavors and colors of the region.",
    rating: 4.8,
    tags: ["seasonal"]
  },
  {
    basePrice: 4320,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
      description: "Embark on an unforgettable horizon from the vibrant port of New York City, where you'll discover hidden gems and iconic landmarks across the East Coast USA region. With stops at Rome, Malta, Santorini, this journey combines cultural immersion with breathtaking scenery.",
      distance: "974 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
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
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Lerato Gibson",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "velvet.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-167-175-1372"
        }
      }
    ],
    title: "Velvet Odyssey of the Empire Gateway",
    description: "Embark on an unforgettable horizon from the vibrant port of New York City, where you'll discover hidden gems and iconic landmarks across the East Coast USA region. With stops at Rome, Malta, Santorini, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.8,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 6936,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
  }
],
      description: "This eternal cruise from New York City is your ticket to the captivating charm of the East Coast USA. Discover the delights of Malta, Mykonos with enriching excursions and award-winning service.",
      distance: "973 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Malta to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
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
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Amanda Stewart",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "mythic.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-862-924-3156"
        }
      }
    ],
    title: "Mythic Odyssey of the Sunrise Coast",
    description: "This eternal cruise from New York City is your ticket to the captivating charm of the East Coast USA. Discover the delights of Malta, Mykonos with enriching excursions and award-winning service.",
    rating: 4.0,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 7073,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    arrivalLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "Step aboard in New York City and begin a timeless journey through the scenic East Coast USA. From historic cities to coastal hideaways like Mykonos, Malta, every day is unforgettable.",
      distance: "597 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Malta to New York City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Michelle Price",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "legendary.adventure.@velarivoyages.com",
          contactNumber: "+1-743-821-9862"
        }
      }
    ],
    title: "Legendary Adventure of the Big Apple",
    description: "Step aboard in New York City and begin a timeless journey through the scenic East Coast USA. From historic cities to coastal hideaways like Mykonos, Malta, every day is unforgettable.",
    rating: 4.1,
    tags: ["adventure"]
  },
  {
    basePrice: 7535,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
      description: "Step aboard in New York City and begin a infinite journey through the scenic East Coast USA. From historic cities to coastal hideaways like Mykonos, Santorini, Rome, Malta, every day is unforgettable.",
      distance: "905 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Rome to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Mary Price",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "midnight.escape.of.t@velarivoyages.com",
          contactNumber: "+1-547-590-8957"
        }
      }
    ],
    title: "Midnight Escape of the Empire Gateway",
    description: "Step aboard in New York City and begin a infinite journey through the scenic East Coast USA. From historic cities to coastal hideaways like Mykonos, Santorini, Rome, Malta, every day is unforgettable.",
    rating: 4.1,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 3936,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
      description: "Cruise into cultural richness aboard this starlit horizon departing New York City. Savor local cuisine and uncover regional beauty from Mykonos to Malta.",
      distance: "1317 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Mykonos"
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
        name: "Maria Griffin",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "opulent.saga.of.the.@velarivoyages.com",
          contactNumber: "+1-498-174-2836"
        }
      }
    ],
    title: "Opulent Saga of the Big Apple",
    description: "Cruise into cultural richness aboard this starlit horizon departing New York City. Savor local cuisine and uncover regional beauty from Mykonos to Malta.",
    rating: 4.5,
    tags: ["luxury"]
  },
  {
    basePrice: 4048,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Let this luxurious voyage redefine your idea of travel. From New York City, explore the East Coast USA in luxurious comfort, stopping at Athens, Mykonos, Rome where every port offers a new chapter.",
      distance: "802 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New York City to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New York City"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sofia Foster",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "hidden.passage.of.th@velarivoyages.com",
          contactNumber: "+1-628-359-4165"
        }
      }
    ],
    title: "Hidden Passage of the Big Apple",
    description: "Let this luxurious voyage redefine your idea of travel. From New York City, explore the East Coast USA in luxurious comfort, stopping at Athens, Mykonos, Rome where every port offers a new chapter.",
    rating: 4.6,
    tags: ["romantic","exclusive","luxury"]
  },
  {
    basePrice: 1387,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
      description: "This handpicked reverie begins in New York City and travels through East Coast USA's iconic waterscapes. Discover Athens, Malta, Santorini as each day brings new stories and every night offers elegant repose.",
      distance: "840 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Athens"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Abigail Collins",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "breathtaking.journey@velarivoyages.com",
          contactNumber: "+1-337-999-1973"
        }
      }
    ],
    title: "Breathtaking Journey of the Historic Harbors",
    description: "This handpicked reverie begins in New York City and travels through East Coast USA's iconic waterscapes. Discover Athens, Malta, Santorini as each day brings new stories and every night offers elegant repose.",
    rating: 4.1,
    tags: ["sightseeing"]
  },
  {
    basePrice: 8270,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    arrivalLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "An unforgettable requiem awaits as you cruise from New York City across East Coast USA. Dive into history, flavor, and culture with stops including Athens, Mykonos.",
      distance: "937 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Mykonos to New York City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Athens"
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
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Jessica Hunter",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "spectacular.odyssey.@velarivoyages.com",
          contactNumber: "+1-966-346-4586"
        }
      }
    ],
    title: "Spectacular Odyssey of the Historic Harbors",
    description: "An unforgettable requiem awaits as you cruise from New York City across East Coast USA. Dive into history, flavor, and culture with stops including Athens, Mykonos.",
    rating: 4.8,
    tags: ["tropical","family-friendly"]
  },
  {
    basePrice: 6814,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    arrivalLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "Experience the elegance of the seas on this timeless escape through East Coast USA, starting from the illustrious port of New York City. From Santorini to Athens, each destination offers its own story, culture, and breathtaking views.",
      distance: "874 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Athens to New York City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Maria Payne",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "infinite.voyage.of.t@velarivoyages.com",
          contactNumber: "+1-858-618-1807"
        }
      }
    ],
    title: "Infinite Voyage of the Big Apple",
    description: "Experience the elegance of the seas on this timeless escape through East Coast USA, starting from the illustrious port of New York City. From Santorini to Athens, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.5,
    tags: ["sightseeing","seasonal","relaxation"]
  },
  {
    basePrice: 9980,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
      description: "Sail from New York City into a world of wonder. The East Coast USA beckons with unforgettable ports like Malta, Barcelona, Mykonos, where every view is picture-perfect and every moment is priceless.",
      distance: "713 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Malta"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Malta to Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New York City"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Parker",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "epic.renaissance.of.@velarivoyages.com",
          contactNumber: "+1-424-801-7325"
        }
      }
    ],
    title: "Epic Renaissance of the Empire Gateway",
    description: "Sail from New York City into a world of wonder. The East Coast USA beckons with unforgettable ports like Malta, Barcelona, Mykonos, where every view is picture-perfect and every moment is priceless.",
    rating: 4.8,
    tags: ["tropical","seasonal"]
  },
  {
    basePrice: 9320,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    arrivalLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "This handpicked discovery begins in New York City and travels through East Coast USA's iconic waterscapes. Discover Athens, Barcelona as each day brings new stories and every night offers elegant repose.",
      distance: "654 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New York City to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Barcelona to New York City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New York City"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Amy Mason",
        role: "Operations Manager",
        languages: ["Russian","Punjabi"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "celestial.discovery.@velarivoyages.com",
          contactNumber: "+1-673-336-9061"
        }
      }
    ],
    title: "Celestial Discovery of the Empire Gateway",
    description: "This handpicked discovery begins in New York City and travels through East Coast USA's iconic waterscapes. Discover Athens, Barcelona as each day brings new stories and every night offers elegant repose.",
    rating: 4.1,
    tags: ["tropical","VIP","luxury"]
  }
];
