import { Cruise } from "@/lib/interfaces/services/cruises";

export const sanFranciscoCruises: Cruise[] = [
  {
    basePrice: 9015,
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
      description: "Experience coastal elegance on this excursion from San Francisco, where the journey through West Coast USA includes stops in Rome, Athens, Santorini, Malta, each more enchanting than the last.",
      distance: "1495 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Santorini to Malta"
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
    "description": "Exploring Santorini"
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
        name: "Nora Stewart",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "starlit.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-422-432-1276"
        }
      }
    ],
    title: "Starlit Sojourn of the Bay City",
    description: "Experience coastal elegance on this excursion from San Francisco, where the journey through West Coast USA includes stops in Rome, Athens, Santorini, Malta, each more enchanting than the last.",
    rating: 4.6,
    tags: ["long-distance","themed-cruise"]
  },
  {
    basePrice: 6964,
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
    category: "ultra-luxury",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "Your journey through the West Coast USA begins in San Francisco, where elegance meets adventure. Explore the shores of Barcelona, Rome, with curated excursions and luxurious onboard amenities.",
      distance: "1267 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Barcelona"
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
    "description": "Sailing from Rome to San Francisco"
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
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Riley Curtis",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "secret.journey.of.th@velarivoyages.com",
          contactNumber: "+1-854-308-9335"
        }
      }
    ],
    title: "Secret Journey of the Golden Gateway",
    description: "Your journey through the West Coast USA begins in San Francisco, where elegance meets adventure. Explore the shores of Barcelona, Rome, with curated excursions and luxurious onboard amenities.",
    rating: 4.6,
    tags: ["sightseeing","short-getaway","long-distance"]
  },
  {
    basePrice: 4200,
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
    category: "premium-luxury",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "Escape into the calm waters of West Coast USA with this starlit journey from San Francisco. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Dubrovnik, Malta.",
      distance: "711 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Malta to San Francisco"
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
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Anna Bennett",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "whispering.realm.of.@velarivoyages.com",
          contactNumber: "+1-700-431-3349"
        }
      }
    ],
    title: "Whispering Realm of the Golden Gateway",
    description: "Escape into the calm waters of West Coast USA with this starlit journey from San Francisco. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Dubrovnik, Malta.",
    rating: 4.9,
    tags: ["family-friendly"]
  },
  {
    basePrice: 3181,
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
      description: "Set course from San Francisco for an inspiring midnight journey across West Coast USA. Whether exploring ancient ruins in Malta or soaking up coastal views in Athens, every day offers a perfect mix of discovery and relaxation.",
      distance: "1255 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Malta to Athens"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Aria Cooper",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "unforgettable.horizo@velarivoyages.com",
          contactNumber: "+1-865-849-7182"
        }
      }
    ],
    title: "Unforgettable Horizon of the Pacific Edge",
    description: "Set course from San Francisco for an inspiring midnight journey across West Coast USA. Whether exploring ancient ruins in Malta or soaking up coastal views in Athens, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.0,
    tags: ["adventure"]
  },
  {
    basePrice: 4641,
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
  "city": "Rome",
  "country": "Italy",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
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
      description: "This hand-selected exquisite cruise offers a true taste of West Coast USA. Depart from San Francisco and explore ports like Dubrovnik, Barcelona, Mykonos, Rome, each telling a story through food, music, and tradition.",
      distance: "1462 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Rome"
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
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sophia Foster",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "enchanting.quest.of.@velarivoyages.com",
          contactNumber: "+1-809-100-3140"
        }
      }
    ],
    title: "Enchanting Quest of the Coastal Giants",
    description: "This hand-selected exquisite cruise offers a true taste of West Coast USA. Depart from San Francisco and explore ports like Dubrovnik, Barcelona, Mykonos, Rome, each telling a story through food, music, and tradition.",
    rating: 4.1,
    tags: ["sightseeing","relaxation"]
  },
  {
    basePrice: 5637,
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
    category: "entry-luxury",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "This opulent cruise from San Francisco is your ticket to the captivating charm of the West Coast USA. Discover the delights of Malta, Dubrovnik with enriching excursions and award-winning service.",
      distance: "1034 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
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
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Nicole Dixon",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "legendary.odyssey.of@velarivoyages.com",
          contactNumber: "+1-221-862-5700"
        }
      }
    ],
    title: "Legendary Odyssey of the Golden Gateway",
    description: "This opulent cruise from San Francisco is your ticket to the captivating charm of the West Coast USA. Discover the delights of Malta, Dubrovnik with enriching excursions and award-winning service.",
    rating: 4.1,
    tags: ["VIP","family-friendly"]
  },
  {
    basePrice: 5700,
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
    category: "mainstream",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "Set course from San Francisco for an inspiring golden journey across West Coast USA. Whether exploring ancient ruins in Dubrovnik or soaking up coastal views in Athens, every day offers a perfect mix of discovery and relaxation.",
      distance: "1407 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Patricia West",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "hidden.passage.of.th@velarivoyages.com",
          contactNumber: "+1-545-549-6997"
        }
      }
    ],
    title: "Hidden Passage of the Golden Gateway",
    description: "Set course from San Francisco for an inspiring golden journey across West Coast USA. Whether exploring ancient ruins in Dubrovnik or soaking up coastal views in Athens, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.9,
    tags: ["VIP","fall-cruise","adventure"]
  },
  {
    basePrice: 5583,
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
    category: "expedition",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "Explore a new side of West Coast USA with this celestial horizon starting in San Francisco. Visit charming ports such as Barcelona, Athens, Rome, Mykonos, each offering its own unique rhythm.",
      distance: "820 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Mykonos to San Francisco"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Athens"
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
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Price",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "spectacular.reverie.@velarivoyages.com",
          contactNumber: "+1-253-343-7167"
        }
      }
    ],
    title: "Spectacular Reverie of the Sunset Horizon",
    description: "Explore a new side of West Coast USA with this celestial horizon starting in San Francisco. Visit charming ports such as Barcelona, Athens, Rome, Mykonos, each offering its own unique rhythm.",
    rating: 4.3,
    tags: ["sightseeing","long-distance"]
  },
  {
    basePrice: 4849,
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
  "city": "Mykonos",
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
      description: "Join us in San Francisco for a quest of a lifetime. Sail across the serene waters of West Coast USA, stopping at ports like Malta, Santorini, Mykonos where timeless traditions meet modern luxuries.",
      distance: "1106 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Santorini to Mykonos"
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
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Savannah Griffin",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "epic.reverie.of.the.@velarivoyages.com",
          contactNumber: "+1-135-785-6936"
        }
      }
    ],
    title: "Epic Reverie of the Sunset Horizon",
    description: "Join us in San Francisco for a quest of a lifetime. Sail across the serene waters of West Coast USA, stopping at ports like Malta, Santorini, Mykonos where timeless traditions meet modern luxuries.",
    rating: 4.6,
    tags: ["luxury","tropical"]
  },
  {
    basePrice: 2718,
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
    category: "premium-luxury",
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Set sail from San Francisco for a voyage like no other. From the picturesque landscapes of Dubrovnik to the lively ambiance of Barcelona, this crystalline cruise will redefine your view of West Coast USA.",
      distance: "1202 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Malta"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zola Day",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "unforgettable.journe@velarivoyages.com",
          contactNumber: "+1-724-540-5276"
        }
      }
    ],
    title: "Unforgettable Journey of the Bay City",
    description: "Set sail from San Francisco for a voyage like no other. From the picturesque landscapes of Dubrovnik to the lively ambiance of Barcelona, this crystalline cruise will redefine your view of West Coast USA.",
    rating: 4.0,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 7043,
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
    category: "expedition",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "Leave ordinary behind as you sail from San Francisco across the captivating West Coast USA. Discover the distinctive personality of each destination, from Santorini, Barcelona, Malta, Rome.",
      distance: "1178 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Santorini"
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
    "description": "Sailing from Barcelona to Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Malta to Rome"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
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
    "end": "Day 4",
    "duration": "2 days",
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Margaret West",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "unforgettable.discov@velarivoyages.com",
          contactNumber: "+1-558-281-3462"
        }
      }
    ],
    title: "Unforgettable Discovery of the Golden Gateway",
    description: "Leave ordinary behind as you sail from San Francisco across the captivating West Coast USA. Discover the distinctive personality of each destination, from Santorini, Barcelona, Malta, Rome.",
    rating: 4.5,
    tags: ["short-getaway","sightseeing","exclusive"]
  },
  {
    basePrice: 2980,
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
  "city": "Rome",
  "country": "Italy",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
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
      description: "Let the spirit of exploration guide your golden journey from San Francisco. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Santorini, Rome.",
      distance: "1194 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Santorini"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Santorini to Rome"
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
    "description": "Exploring Santorini"
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
        name: "Aaliyah Collins",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "forbidden.adventure.@velarivoyages.com",
          contactNumber: "+1-247-125-7523"
        }
      }
    ],
    title: "Forbidden Adventure of the Bay City",
    description: "Let the spirit of exploration guide your golden journey from San Francisco. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Santorini, Rome.",
    rating: 4.1,
    tags: ["tropical"]
  },
  {
    basePrice: 1802,
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
    category: "ultra-luxury",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "Escape the everyday with this luxurious journey through West Coast USA, departing from San Francisco. You'll visit Malta, Santorini, Dubrovnik, Athens, where every stop is a new adventure.",
      distance: "622 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Sailing from Athens to San Francisco"
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
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Malta"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jane Murray",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
        contact: {
          contactEmail: "hidden.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-694-645-2872"
        }
      }
    ],
    title: "Hidden Odyssey of the Bay City",
    description: "Escape the everyday with this luxurious journey through West Coast USA, departing from San Francisco. You'll visit Malta, Santorini, Dubrovnik, Athens, where every stop is a new adventure.",
    rating: 4.8,
    tags: ["sightseeing","long-distance"]
  },
  {
    basePrice: 3351,
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
  "city": "Dubrovnik",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
  }
],
      description: "This opulent cruise from San Francisco is your ticket to the captivating charm of the West Coast USA. Discover the delights of Athens, Dubrovnik with enriching excursions and award-winning service.",
      distance: "1239 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Athens to Dubrovnik"
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
    "description": "Exploring Athens"
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
        name: "Ellie Douglas",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "celestial.mirage.of.@velarivoyages.com",
          contactNumber: "+1-220-373-7995"
        }
      }
    ],
    title: "Celestial Mirage of the Golden Gateway",
    description: "This opulent cruise from San Francisco is your ticket to the captivating charm of the West Coast USA. Discover the delights of Athens, Dubrovnik with enriching excursions and award-winning service.",
    rating: 4.3,
    tags: ["relaxation"]
  },
  {
    basePrice: 2586,
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
  }
],
      description: "Explore a new side of West Coast USA with this golden journey starting in San Francisco. Visit charming ports such as Athens, Dubrovnik, each offering its own unique rhythm.",
      distance: "939 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Dubrovnik"
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
    "description": "Exploring Athens"
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
        name: "Samantha Morgan",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
        contact: {
          contactEmail: "extraordinary.advent@velarivoyages.com",
          contactNumber: "+1-827-448-2723"
        }
      }
    ],
    title: "Extraordinary Adventure of the Bay City",
    description: "Explore a new side of West Coast USA with this golden journey starting in San Francisco. Visit charming ports such as Athens, Dubrovnik, each offering its own unique rhythm.",
    rating: 4.2,
    tags: ["long-distance","exclusive"]
  },
  {
    basePrice: 6796,
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
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
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
      description: "Step aboard in San Francisco and begin a crystalline journey through the scenic West Coast USA. From historic cities to coastal hideaways like Mykonos, Athens, every day is unforgettable.",
      distance: "1353 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Athens"
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
    "description": "Exploring Mykonos"
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
        name: "Alice Lawson",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "golden.excursion.of.@velarivoyages.com",
          contactNumber: "+1-640-322-9334"
        }
      }
    ],
    title: "Golden Excursion of the Golden Gateway",
    description: "Step aboard in San Francisco and begin a crystalline journey through the scenic West Coast USA. From historic cities to coastal hideaways like Mykonos, Athens, every day is unforgettable.",
    rating: 4.1,
    tags: ["fall-cruise","seasonal"]
  },
  {
    basePrice: 1631,
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
  "city": "Malta",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
      description: "Depart from San Francisco on this thoughtfully designed mirage across the West Coast USA. Savor coastal charm, cultural treasures, and ocean views with stops at Rome, Malta.",
      distance: "680 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Rome to Malta"
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
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Rome"
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
        name: "Rachel Jennings",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "unforgettable.discov@velarivoyages.com",
          contactNumber: "+1-355-960-2481"
        }
      }
    ],
    title: "Unforgettable Discovery of the Bay City",
    description: "Depart from San Francisco on this thoughtfully designed mirage across the West Coast USA. Savor coastal charm, cultural treasures, and ocean views with stops at Rome, Malta.",
    rating: 4.0,
    tags: ["long-distance"]
  },
  {
    basePrice: 1647,
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
      description: "Begin a captivating sojourn through the West Coast USA, departing San Francisco. With visits to Rome, Malta, Athens, Santorini, each day brings a new adventure and deeper connection to the region.",
      distance: "1152 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Malta to Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Athens to Santorini"
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
    "description": "Exploring Rome"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ashley Nash",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "midnight.renaissance@velarivoyages.com",
          contactNumber: "+1-962-110-7154"
        }
      }
    ],
    title: "Midnight Renaissance of the Golden Shores",
    description: "Begin a captivating sojourn through the West Coast USA, departing San Francisco. With visits to Rome, Malta, Athens, Santorini, each day brings a new adventure and deeper connection to the region.",
    rating: 4.4,
    tags: ["fall-cruise","romantic","luxury"]
  },
  {
    basePrice: 6874,
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
    hasPopularDestination: false,
    category: "ultra-luxury",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "Experience the elegance of the seas on this eternal realm through West Coast USA, starting from the illustrious port of San Francisco. From Santorini to Rome, each destination offers its own story, culture, and breathtaking views.",
      distance: "1439 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Santorini"
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
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Priya Clark",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "velvet.passage.of.th@velarivoyages.com",
          contactNumber: "+1-428-954-8948"
        }
      }
    ],
    title: "Velvet Passage of the Golden Gateway",
    description: "Experience the elegance of the seas on this eternal realm through West Coast USA, starting from the illustrious port of San Francisco. From Santorini to Rome, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.4,
    tags: ["luxury"]
  },
  {
    basePrice: 1777,
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
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
      description: "Escape to sea from San Francisco on a midnight voyage exploring the magic of West Coast USA. Visit unforgettable locales like Athens, Malta, where each stop inspires awe.",
      distance: "1278 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
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
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jennifer Hamilton",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "epic.reverie.of.the.@velarivoyages.com",
          contactNumber: "+1-482-803-4093"
        }
      }
    ],
    title: "Epic Reverie of the Golden Gateway",
    description: "Escape to sea from San Francisco on a midnight voyage exploring the magic of West Coast USA. Visit unforgettable locales like Athens, Malta, where each stop inspires awe.",
    rating: 4.7,
    tags: ["fall-cruise","VIP"]
  },
  {
    basePrice: 2127,
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
    category: "entry-luxury",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "This eternal cruise from San Francisco is your ticket to the captivating charm of the West Coast USA. Discover the delights of Mykonos, Athens, Dubrovnik with enriching excursions and award-winning service.",
      distance: "545 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Athens to Dubrovnik"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to San Francisco"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ellie Spencer",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "enchanting.adventure@velarivoyages.com",
          contactNumber: "+1-150-451-2858"
        }
      }
    ],
    title: "Enchanting Adventure of the Pacific Edge",
    description: "This eternal cruise from San Francisco is your ticket to the captivating charm of the West Coast USA. Discover the delights of Mykonos, Athens, Dubrovnik with enriching excursions and award-winning service.",
    rating: 4.6,
    tags: ["short-getaway","luxury","themed-cruise"]
  },
  {
    basePrice: 6168,
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
    hasPopularDestination: false,
    category: "entry-luxury",
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "This extraordinary sojourn from San Francisco offers the ultimate West Coast USA exploration. Immerse yourself in the rich cultures and stunning landscapes of Rome, Santorini and Malta, creating memories that will last a lifetime.",
      distance: "627 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Santorini to Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
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
    "description": "Exploring Rome"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zoe Gibson",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "spectacular.mirage.o@velarivoyages.com",
          contactNumber: "+1-753-967-2479"
        }
      }
    ],
    title: "Spectacular Mirage of the Bay City",
    description: "This extraordinary sojourn from San Francisco offers the ultimate West Coast USA exploration. Immerse yourself in the rich cultures and stunning landscapes of Rome, Santorini and Malta, creating memories that will last a lifetime.",
    rating: 4.1,
    tags: ["luxury"]
  },
  {
    basePrice: 4007,
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
    category: "entry-luxury",
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
    "city": "San Francisco",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
],
      description: "An unforgettable voyage awaits as you cruise from San Francisco across West Coast USA. Dive into history, flavor, and culture with stops including Malta, Santorini, Rome.",
      distance: "702 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
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
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amanda Nash",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "captivating.realm.of@velarivoyages.com",
          contactNumber: "+1-580-691-8181"
        }
      }
    ],
    title: "Captivating Realm of the Coastal Giants",
    description: "An unforgettable voyage awaits as you cruise from San Francisco across West Coast USA. Dive into history, flavor, and culture with stops including Malta, Santorini, Rome.",
    rating: 4.6,
    tags: ["adventure","sightseeing","luxury"]
  },
  {
    basePrice: 8750,
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
    hasPopularDestination: true,
    category: "mainstream",
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
      description: "Begin an epic mirage from San Francisco, where the seas meet culture. Visit the remarkable ports of Malta, Dubrovnik, Barcelona while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "578 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Malta to Dubrovnik"
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
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Francisco"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Emma Hawkins",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/47.jpg",
        contact: {
          contactEmail: "hidden.tide.of.the.g@velarivoyages.com",
          contactNumber: "+1-441-208-8017"
        }
      }
    ],
    title: "Hidden Tide of the Golden Shores",
    description: "Begin an epic mirage from San Francisco, where the seas meet culture. Visit the remarkable ports of Malta, Dubrovnik, Barcelona while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.9,
    tags: ["sightseeing","family-friendly"]
  },
  {
    basePrice: 5707,
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
  "city": "Rome",
  "country": "Italy",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Set sail from San Francisco on this velvet quest through the heart of West Coast USA. Experience the perfect blend of relaxation and adventure as you explore Santorini and Malta and Rome, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "911 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from San Francisco to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Malta"
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
    "description": "Exploring San Francisco"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Douglas",
        role: "Guest Relations Manager",
        languages: ["Korean","Marathi","Malayalam"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "crystalline.requiem.@velarivoyages.com",
          contactNumber: "+1-383-543-9366"
        }
      }
    ],
    title: "Crystalline Requiem of the Golden Shores",
    description: "Set sail from San Francisco on this velvet quest through the heart of West Coast USA. Experience the perfect blend of relaxation and adventure as you explore Santorini and Malta and Rome, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.6,
    tags: ["short-getaway","sightseeing"]
  }
];
