import { Cruise } from "@/lib/interfaces/services/cruises";

export const newOrleansCruises: Cruise[] = [
{
    basePrice: 2319,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "Roatán",
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
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Experience coastal elegance on this reunion from New Orleans, where the journey through Caribbean includes stops in St. Thomas, George Town, Cozumel, Roatán, each more enchanting than the last.",
      distance: "1497 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New Orleans to St. Thomas"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to George Town"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from George Town to Cozumel"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Cozumel to Roatán"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Roatán"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bella Wells",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "secret.labyrinth.of.@velarivoyages.com",
          contactNumber: "+1-643-321-2220"
        }
      }
    ],
    title: "Secret Labyrinth of the Emerald Cays",
    description: "Experience coastal elegance on this reunion from New Orleans, where the journey through Caribbean includes stops in St. Thomas, George Town, Cozumel, Roatán, each more enchanting than the last.",
    rating: 4.8,
    tags: ["cruise-getaway"]
  },
  {
    basePrice: 4418,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "Depart from iconic New Orleans and traverse the Caribbean with visits to Nassau, San Juan. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1450 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New Orleans to Nassau"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Nassau to San Juan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from San Juan to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Collins",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "pristine.exploration@velarivoyages.com",
          contactNumber: "+1-904-394-9493"
        }
      }
    ],
    title: "Pristine Exploration of the Bayou Beat",
    description: "Depart from iconic New Orleans and traverse the Caribbean with visits to Nassau, San Juan. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.3,
    tags: ["VIP"]
  },
  {
    basePrice: 8414,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "George Town",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let this horizon-kissed voyage redefine your idea of travel. From New Orleans, explore the Caribbean in luxurious comfort, stopping at San Juan, Roatán, St. Thomas, George Town where every port offers a new chapter.",
      distance: "1200 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New Orleans to San Juan"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from San Juan to Roatán"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Roatán to St. Thomas"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to George Town"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring George Town"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amanda Griffin",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "alluring.reverie.of.@velarivoyages.com",
          contactNumber: "+1-548-872-5185"
        }
      }
    ],
    title: "Alluring Reverie of the Voodoo Murmurs",
    description: "Let this horizon-kissed voyage redefine your idea of travel. From New Orleans, explore the Caribbean in luxurious comfort, stopping at San Juan, Roatán, St. Thomas, George Town where every port offers a new chapter.",
    rating: 4.0,
    tags: ["weekend-cruise"]
  },
  {
    basePrice: 3984,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "San Juan",
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
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Philipsburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This inspiring reverie departs from New Orleans, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include Philipsburg, San Juan.",
      distance: "1151 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New Orleans to Philipsburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Curtis",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "immersive.arcadia.of@velarivoyages.com",
          contactNumber: "+1-431-453-3353"
        }
      }
    ],
    title: "Immersive Arcadia of the Coral Sanctuaries",
    description: "This inspiring reverie departs from New Orleans, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include Philipsburg, San Juan.",
    rating: 5.0,
    tags: ["anniversary-cruise","cruise-adventure"]
  },
  {
    basePrice: 5086,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "Let this midnight voyage redefine your idea of travel. From New Orleans, explore the Caribbean in luxurious comfort, stopping at George Town, Roatán, Nassau where every port offers a new chapter.",
      distance: "562 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New Orleans to George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from George Town to Roatán"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Roatán to Nassau"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Nassau to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Michelle Harper",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "breathtaking.voyage.@velarivoyages.com",
          contactNumber: "+1-976-858-9248"
        }
      }
    ],
    title: "Breathtaking Voyage of the Emerald Cays",
    description: "Let this midnight voyage redefine your idea of travel. From New Orleans, explore the Caribbean in luxurious comfort, stopping at George Town, Roatán, Nassau where every port offers a new chapter.",
    rating: 4.5,
    tags: ["cruise-ship","weekend-cruise","general"]
  },
  {
    basePrice: 8388,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "This embrace takes you beyond the ordinary, starting in New Orleans. With breathtaking stops in Roatán, George Town, St. Thomas, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "788 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New Orleans to Roatán"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Roatán to George Town"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from George Town to St. Thomas"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Genesis Reed",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "timeless.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-354-926-6935"
        }
      }
    ],
    title: "Timeless Eclipse of the Sugarcane Skies",
    description: "This embrace takes you beyond the ordinary, starting in New Orleans. With breathtaking stops in Roatán, George Town, St. Thomas, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.4,
    tags: ["long-distance"]
  },
  {
    basePrice: 5366,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "St. Thomas",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Philipsburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let this charming voyage redefine your idea of travel. From New Orleans, explore the Caribbean in luxurious comfort, stopping at Cozumel, San Juan, Philipsburg, St. Thomas where every port offers a new chapter.",
      distance: "1111 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New Orleans to Cozumel"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Cozumel to San Juan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from San Juan to Philipsburg"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Philipsburg to St. Thomas"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Scarlett Griffin",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "mystical.legacy.of.t@velarivoyages.com",
          contactNumber: "+1-956-756-1035"
        }
      }
    ],
    title: "Mystical Legacy of the Voodoo Murmurs",
    description: "Let this charming voyage redefine your idea of travel. From New Orleans, explore the Caribbean in luxurious comfort, stopping at Cozumel, San Juan, Philipsburg, St. Thomas where every port offers a new chapter.",
    rating: 4.5,
    tags: ["sightseeing","family-friendly","repositioning"]
  },
  {
    basePrice: 9966,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "Nassau",
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
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Philipsburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin an epic mythos from New Orleans, where the seas meet culture. Visit the remarkable ports of San Juan, Philipsburg, Roatán, Nassau while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1031 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New Orleans to San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from San Juan to Philipsburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Philipsburg to Roatán"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Roatán to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Leah Stewart",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "eternal.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-606-131-2207"
        }
      }
    ],
    title: "Eternal Retreat of the Parade of Shadows",
    description: "Begin an epic mythos from New Orleans, where the seas meet culture. Visit the remarkable ports of San Juan, Philipsburg, Roatán, Nassau while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.2,
    tags: ["seasonal","long-distance"]
  },
  {
    basePrice: 3664,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "Depart from iconic New Orleans and traverse the Caribbean with visits to George Town, San Juan. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "841 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New Orleans to George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from George Town to San Juan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from San Juan to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Grace Graham",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "timeless.tranquility@velarivoyages.com",
          contactNumber: "+1-536-151-3484"
        }
      }
    ],
    title: "Timeless Tranquility of the Crescent City",
    description: "Depart from iconic New Orleans and traverse the Caribbean with visits to George Town, San Juan. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.9,
    tags: ["cruise","VIP","weekend-cruise"]
  },
  {
    basePrice: 1447,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "Begin a captivating zenith through the Caribbean, departing New Orleans. With visits to George Town, Cozumel, San Juan, Nassau, each day brings a new adventure and deeper connection to the region.",
      distance: "1138 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New Orleans to George Town"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from George Town to Cozumel"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Cozumel to San Juan"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from San Juan to Nassau"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Nassau to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Audrey Graves",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
        contact: {
          contactEmail: "horizonkissed.mystiq@velarivoyages.com",
          contactNumber: "+1-460-613-8861"
        }
      }
    ],
    title: "Horizon-Kissed Mystique of the Jazz Capital",
    description: "Begin a captivating zenith through the Caribbean, departing New Orleans. With visits to George Town, Cozumel, San Juan, Nassau, each day brings a new adventure and deeper connection to the region.",
    rating: 4.5,
    tags: ["relaxation","expedition"]
  },
  {
    basePrice: 5252,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "Depart from iconic New Orleans and traverse the Caribbean with visits to Roatán, Cozumel, St. Thomas. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "685 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New Orleans to Roatán"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Roatán to Cozumel"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Cozumel to St. Thomas"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Adeline Hamilton",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/49.jpg",
        contact: {
          contactEmail: "luxurious.mythos.of.@velarivoyages.com",
          contactNumber: "+1-239-640-4248"
        }
      }
    ],
    title: "Luxurious Mythos of the Soul-Stirred Streets",
    description: "Depart from iconic New Orleans and traverse the Caribbean with visits to Roatán, Cozumel, St. Thomas. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.6,
    tags: ["cruise-getaway"]
  },
  {
    basePrice: 2821,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "Launch into adventure from New Orleans and sail deep into the heart of the Caribbean. With ports of call like San Juan, George Town, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1350 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New Orleans to San Juan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from San Juan to George Town"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from George Town to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Janet Mason",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "golden.mirage.of.the@velarivoyages.com",
          contactNumber: "+1-460-702-6122"
        }
      }
    ],
    title: "Golden Mirage of the Crescent City",
    description: "Launch into adventure from New Orleans and sail deep into the heart of the Caribbean. With ports of call like San Juan, George Town, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.3,
    tags: ["romantic","cultural","holiday-cruise"]
  },
  {
    basePrice: 2045,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "Nassau",
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
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin your pulse in New Orleans, a gateway to the soul of Caribbean. Enjoy days spent exploring Cozumel, Nassau and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "872 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New Orleans to Cozumel"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Linda Dixon",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "crystalline.reverie.@velarivoyages.com",
          contactNumber: "+1-283-644-9308"
        }
      }
    ],
    title: "Crystalline Reverie of the Turquoise Lagoons",
    description: "Begin your pulse in New Orleans, a gateway to the soul of Caribbean. Enjoy days spent exploring Cozumel, Nassau and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.1,
    tags: ["cruise-getaway","sightseeing","expedition"]
  },
  {
    basePrice: 1833,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Philipsburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "This inspiring mystique departs from New Orleans, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include Philipsburg, Cozumel, St. Thomas.",
      distance: "1464 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New Orleans to Philipsburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to Cozumel"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Cozumel to St. Thomas"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Barbara Cooper",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "harmonic.wanderlust.@velarivoyages.com",
          contactNumber: "+1-991-133-1630"
        }
      }
    ],
    title: "Harmonic Wanderlust of the Soul-Stirred Streets",
    description: "This inspiring mystique departs from New Orleans, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include Philipsburg, Cozumel, St. Thomas.",
    rating: 4.2,
    tags: ["cruise-experience","cruise-line"]
  },
  {
    basePrice: 3322,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "Set off on a wanderlust from New Orleans that captures the essence of Caribbean. Discover cultural gems and culinary delights across St. Thomas, San Juan.",
      distance: "729 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New Orleans to St. Thomas"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to San Juan"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from San Juan to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Payne",
        role: "Sales Consultant",
        languages: ["Finnish","German"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "hidden.renaissance.o@velarivoyages.com",
          contactNumber: "+1-492-931-1903"
        }
      }
    ],
    title: "Hidden Renaissance of the Turquoise Lagoons",
    description: "Set off on a wanderlust from New Orleans that captures the essence of Caribbean. Discover cultural gems and culinary delights across St. Thomas, San Juan.",
    rating: 4.6,
    tags: ["holiday-cruise"]
  },
  {
    basePrice: 9991,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Philipsburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "Embark from New Orleans and traverse the Caribbean in style. Whether it’s the energy of George Town or the calm of Philipsburg, each destination reveals a new side of paradise.",
      distance: "978 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New Orleans to George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from George Town to Philipsburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to St. Thomas"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to San Juan"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Sailing from San Juan to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 19",
    "end": "Day 20",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Allison Mitchell",
        role: "Marketing Coordinator",
        languages: ["Thai","Arabic","Korean"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "majestic.oasis.of.th@velarivoyages.com",
          contactNumber: "+1-543-698-7664"
        }
      }
    ],
    title: "Majestic Oasis of the Tropical Isles",
    description: "Embark from New Orleans and traverse the Caribbean in style. Whether it’s the energy of George Town or the calm of Philipsburg, each destination reveals a new side of paradise.",
    rating: 4.4,
    tags: ["adventure"]
  },
  {
    basePrice: 7056,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "This extraordinary horizon from New Orleans offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Cozumel and George Town, creating memories that will last a lifetime.",
      distance: "1493 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New Orleans to Cozumel"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Cozumel to George Town"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from George Town to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Maya Porter",
        role: "Marketing Coordinator",
        languages: ["Thai","Arabic","Korean"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
        contact: {
          contactEmail: "exquisite.drift.of.t@velarivoyages.com",
          contactNumber: "+1-710-445-9165"
        }
      }
    ],
    title: "Exquisite Drift of the Crescent City",
    description: "This extraordinary horizon from New Orleans offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Cozumel and George Town, creating memories that will last a lifetime.",
    rating: 4.5,
    tags: ["tropical"]
  },
  {
    basePrice: 9721,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "San Juan",
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
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let the waves lead you from New Orleans on this refined mystique. Traverse the iconic waters of Caribbean and discover the beauty of Nassau, San Juan.",
      distance: "1221 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New Orleans to Nassau"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Nassau to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Fox",
        role: "Marketing Coordinator",
        languages: ["Thai","Arabic","Korean"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "idyllic.renaissance.@velarivoyages.com",
          contactNumber: "+1-106-574-4628"
        }
      }
    ],
    title: "Idyllic Renaissance of the Parade of Shadows",
    description: "Let the waves lead you from New Orleans on this refined mystique. Traverse the iconic waters of Caribbean and discover the beauty of Nassau, San Juan.",
    rating: 4.1,
    tags: ["tropical","adventure"]
  },
  {
    basePrice: 7814,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Philipsburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin your journey in New Orleans, where tradition meets travel. This immersive reverie reveals the finest of Caribbean, from the beaches of St. Thomas to the streets of Nassau.",
      distance: "968 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New Orleans to St. Thomas"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to Nassau"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Nassau to Philipsburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Kinsley Day",
        role: "Marketing Coordinator",
        languages: ["Thai","Arabic","Korean"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "serene.pilgrimage.of@velarivoyages.com",
          contactNumber: "+1-875-605-5119"
        }
      }
    ],
    title: "Serene Pilgrimage of the Pirate Passages",
    description: "Begin your journey in New Orleans, where tradition meets travel. This immersive reverie reveals the finest of Caribbean, from the beaches of St. Thomas to the streets of Nassau.",
    rating: 4.3,
    tags: ["cruise-line","VIP"]
  },
  {
    basePrice: 7766,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bermuda",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "Sail from New Orleans into a world of wonder. The Caribbean beckons with unforgettable ports like St. Thomas, Bermuda, Nassau, Cozumel, where every view is picture-perfect and every moment is priceless.",
      distance: "1215 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New Orleans to St. Thomas"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Bermuda"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Bermuda to Nassau"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Nassau to Cozumel"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Cozumel to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Katherine Reeves",
        role: "Sales Consultant",
        languages: ["Thai","Czech"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "harmonic.sanctum.of.@velarivoyages.com",
          contactNumber: "+1-359-662-8137"
        }
      }
    ],
    title: "Harmonic Sanctum of the Jazz Capital",
    description: "Sail from New Orleans into a world of wonder. The Caribbean beckons with unforgettable ports like St. Thomas, Bermuda, Nassau, Cozumel, where every view is picture-perfect and every moment is priceless.",
    rating: 4.8,
    tags: ["cruise-ship"]
  },
  {
    basePrice: 3574,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Experience coastal elegance on this labyrinth from New Orleans, where the journey through Caribbean includes stops in Miami, San Juan, each more enchanting than the last.",
      distance: "1227 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New Orleans to Miami"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Miami to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Fox",
        role: "Sales Consultant",
        languages: ["Thai","Czech"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "alluring.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-604-253-3724"
        }
      }
    ],
    title: "Alluring Mirage of the Voodoo Murmurs",
    description: "Experience coastal elegance on this labyrinth from New Orleans, where the journey through Caribbean includes stops in Miami, San Juan, each more enchanting than the last.",
    rating: 4.5,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 1861,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Bermuda",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Philipsburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "This hand-selected captivating cruise offers a true taste of Caribbean. Depart from New Orleans and explore ports like Bermuda, Nassau, Philipsburg, each telling a story through food, music, and tradition.",
      distance: "1064 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New Orleans to Bermuda"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Bermuda to Nassau"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Nassau to Philipsburg"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Isabella Mason",
        role: "Sales Consultant",
        languages: ["Thai","Czech"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "moonlit.panorama.of.@velarivoyages.com",
          contactNumber: "+1-940-968-1804"
        }
      }
    ],
    title: "Moonlit Panorama of the Reggae Shores",
    description: "This hand-selected captivating cruise offers a true taste of Caribbean. Depart from New Orleans and explore ports like Bermuda, Nassau, Philipsburg, each telling a story through food, music, and tradition.",
    rating: 4.1,
    tags: ["anniversary-cruise","cruise-adventure"]
  },
  {
    basePrice: 4414,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "Philipsburg",
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
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Philipsburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This breathtaking excursion begins in New Orleans and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at Nassau, San Juan, Cozumel, Philipsburg.",
      distance: "1425 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New Orleans to Nassau"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Nassau to San Juan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from San Juan to Cozumel"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Cozumel to Philipsburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lily Montgomery",
        role: "Sales Consultant",
        languages: ["Thai","Czech"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "gilded.realm.of.the.@velarivoyages.com",
          contactNumber: "+1-624-461-4383"
        }
      }
    ],
    title: "Gilded Realm of the Soul-Stirred Streets",
    description: "This breathtaking excursion begins in New Orleans and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at Nassau, San Juan, Cozumel, Philipsburg.",
    rating: 4.1,
    tags: ["cultural"]
  },
  {
    basePrice: 3162,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.9511,
    "longitude": -90.0715
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  },
  {
    "city": "Philipsburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
    }
  },
  {
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.9511,
      "longitude": -90.0715
    }
  }
],
      description: "Let the spirit of exploration guide your enchanting journey from New Orleans. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Philipsburg, Miami, St. Thomas.",
      distance: "1222 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New Orleans to Philipsburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to Miami"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Miami to St. Thomas"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring New Orleans"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Sarah Henderson",
        role: "Sales Consultant",
        languages: ["Thai","Czech"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "oceanic.whisper.of.t@velarivoyages.com",
          contactNumber: "+1-565-684-1581"
        }
      }
    ],
    title: "Oceanic Whisper of the Reggae Shores",
    description: "Let the spirit of exploration guide your enchanting journey from New Orleans. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Philipsburg, Miami, St. Thomas.",
    rating: 4.7,
    tags: ["short-getaway","wellness","themed-cruise"]
  }
];
