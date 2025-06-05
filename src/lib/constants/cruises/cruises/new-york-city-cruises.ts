import { Cruise } from "@/lib/interfaces/services/cruises";

export const newYorkCityCruises: Cruise[] = [
  {
    basePrice: 9829,
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
  "country": "Malta",
  "coordinates": {
    "latitude": 35.9375,
    "longitude": 14.3754
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "holiday-cruise",
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
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    }
  }
],
      description: "This luxurious realm begins in New York City and ventures deep into the heart of East Coast USA. Wander through colorful markets, historic streets, and serene coastlines at Rome, Florence, Santorini, Malta.",
      distance: "958 nautical miles",
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
    "description": "Sailing from Rome to Florence"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Florence to Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Santorini to Malta"
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
    "description": "Exploring Florence"
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
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sophia Maxwell",
        role: "Sales Consultant",
        languages: ["English","French","Haitian","Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "harmonic.exploration@velarivoyages.com",
          contactNumber: "+1-201-998-4139"
        }
      }
    ],
    title: "Harmonic Exploration of the Big Apple",
    description: "This luxurious realm begins in New York City and ventures deep into the heart of East Coast USA. Wander through colorful markets, historic streets, and serene coastlines at Rome, Florence, Santorini, Malta.",
    rating: 4.8,
    tags: ["anniversary-cruise","cruise-adventure"]
  },
  {
    basePrice: 1225,
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
  "city": "Venice",
  "country": "Italy",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
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
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
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
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Depart New York City on a relaxing adventure through the East Coast USA region. Highlights include the stunning coastlines of Mykonos, Florence, Dubrovnik, Venice, all while enjoying first-class amenities on board.",
      distance: "1471 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Mykonos"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Florence to Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Venice"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Wells",
        role: "Sales Consultant",
        languages: ["English","French","Haitian","Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "mystical.reunion.of.@velarivoyages.com",
          contactNumber: "+1-207-862-9790"
        }
      }
    ],
    title: "Mystical Reunion of the Founding Footsteps",
    description: "Depart New York City on a relaxing adventure through the East Coast USA region. Highlights include the stunning coastlines of Mykonos, Florence, Dubrovnik, Venice, all while enjoying first-class amenities on board.",
    rating: 4.4,
    tags: ["repositioning"]
  },
  {
    basePrice: 8352,
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
    category: "fall-foliage-cruise",
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
    "country": "Croatia",
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
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
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
      description: "This inspiring sanctum departs from New York City, navigating the diverse landscapes and vibrant cities of East Coast USA. Must-see stops include Dubrovnik, Florence, Mykonos.",
      distance: "923 nautical miles",
      totalDuration: "13 days",
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
    "description": "Sailing from Dubrovnik to Florence"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Florence to Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Mykonos to New York City"
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
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Florence"
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
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Valentina Ellis",
        role: "Sales Consultant",
        languages: ["English","French","Haitian","Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "oceanic.wanderlust.o@velarivoyages.com",
          contactNumber: "+1-152-455-4171"
        }
      }
    ],
    title: "Oceanic Wanderlust of the Steel & Spirit Metropolis",
    description: "This inspiring sanctum departs from New York City, navigating the diverse landscapes and vibrant cities of East Coast USA. Must-see stops include Dubrovnik, Florence, Mykonos.",
    rating: 4.3,
    tags: ["luxury","cruise-holiday"]
  },
  {
    basePrice: 5625,
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
    category: "luxury-cruise",
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
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
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
      description: "Experience coastal elegance on this oasis from New York City, where the journey through East Coast USA includes stops in Mykonos, Milan, Barcelona, each more enchanting than the last.",
      distance: "1444 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Mykonos"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Milan to Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
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
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Milan"
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
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Layla Gibson",
        role: "Sales Consultant",
        languages: ["English","French","Haitian","Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/71.jpg",
        contact: {
          contactEmail: "lavish.retreat.of.th@velarivoyages.com",
          contactNumber: "+1-266-827-4477"
        }
      }
    ],
    title: "Lavish Retreat of the Big Apple",
    description: "Experience coastal elegance on this oasis from New York City, where the journey through East Coast USA includes stops in Mykonos, Milan, Barcelona, each more enchanting than the last.",
    rating: 4.4,
    tags: ["cultural"]
  },
  {
    basePrice: 3502,
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
    category: "anniversary-cruise",
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
    "country": "Croatia",
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
      description: "Set course from New York City for an inspiring secluded journey across East Coast USA. Whether exploring ancient ruins in Dubrovnik or soaking up coastal views in Malta, every day offers a perfect mix of discovery and relaxation.",
      distance: "553 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Malta to Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Lisbon"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Lisbon to New York City"
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
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
        name: "Jessica Dixon",
        role: "Sales Consultant",
        languages: ["English","French","Haitian","Spanish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "pristine.retreat.of.@velarivoyages.com",
          contactNumber: "+1-850-546-7706"
        }
      }
    ],
    title: "Pristine Retreat of the Empire Gateway",
    description: "Set course from New York City for an inspiring secluded journey across East Coast USA. Whether exploring ancient ruins in Dubrovnik or soaking up coastal views in Malta, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.9,
    tags: ["sightseeing","repositioning","cruise-adventure"]
  },
  {
    basePrice: 9959,
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
  "city": "Florence",
  "country": "Italy",
  "coordinates": {
    "latitude": 43.769562,
    "longitude": 11.255814
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
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
  }
],
      description: "Let the winds of the East Coast USA carry you from New York City to the most stunning ports in the region. With destinations like Rome, Santorini, Dubrovnik, Florence, this mirage redefines luxury travel.",
      distance: "1117 nautical miles",
      totalDuration: "16 days",
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
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Florence"
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
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Florence"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Sophia Palmer",
        role: "Sales Consultant",
        languages: ["English","French","Haitian","Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
        contact: {
          contactEmail: "spectacular.requiem.@velarivoyages.com",
          contactNumber: "+1-322-643-4484"
        }
      }
    ],
    title: "Spectacular Requiem of the Cobbled Seaside Towns",
    description: "Let the winds of the East Coast USA carry you from New York City to the most stunning ports in the region. With destinations like Rome, Santorini, Dubrovnik, Florence, this mirage redefines luxury travel.",
    rating: 4.2,
    tags: ["luxury","cruise-journey","cruise"]
  },
  {
    basePrice: 8081,
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
  "country": "Malta",
  "coordinates": {
    "latitude": 35.9375,
    "longitude": 14.3754
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
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
    "city": "Venice",
    "country": "Italy",
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
    "country": "Croatia",
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
  }
],
      description: "Your voyage begins in New York City, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Venice to the historic streets of Rome, each stop in the East Coast USA will leave a lasting impression.",
      distance: "506 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Venice"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Venice to Rome"
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
    "description": "Sailing from Dubrovnik to Malta"
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
    "description": "Exploring Venice"
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
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Maya Murray",
        role: "Sales Consultant",
        languages: ["English","French","Haitian","Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "enchanting.elevation@velarivoyages.com",
          contactNumber: "+1-895-968-3594"
        }
      }
    ],
    title: "Enchanting Elevation of the Sky-Bound Collage",
    description: "Your voyage begins in New York City, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Venice to the historic streets of Rome, each stop in the East Coast USA will leave a lasting impression.",
    rating: 4.2,
    tags: ["cruise-excursion","expedition","cruise-holiday"]
  },
  {
    basePrice: 6372,
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
    category: "expedition-cruise",
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
    "country": "Croatia",
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
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
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
      description: "Embark from New York City and traverse the East Coast USA in style. Whether it’s the energy of Dubrovnik or the calm of Rome, each destination reveals a new side of paradise.",
      distance: "629 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New York City to Dubrovnik"
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
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Mykonos to New York City"
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
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Betty Murray",
        role: "Sales Consultant",
        languages: ["English","French","Haitian","Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "moonlit.mirage.of.th@velarivoyages.com",
          contactNumber: "+1-866-506-7402"
        }
      }
    ],
    title: "Moonlit Mirage of the Steel & Spirit Metropolis",
    description: "Embark from New York City and traverse the East Coast USA in style. Whether it’s the energy of Dubrovnik or the calm of Rome, each destination reveals a new side of paradise.",
    rating: 4.9,
    tags: ["cruise-adventure","holiday-cruise"]
  },
  {
    basePrice: 2931,
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
    hasPopularDestination: false,
    category: "anniversary-cruise",
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
    "city": "Milan",
    "country": "Italy",
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Leave ordinary behind as you sail from New York City across the captivating East Coast USA. Discover the distinctive personality of each destination, from Barcelona, Milan, Lisbon, Rome.",
      distance: "687 nautical miles",
      totalDuration: "14 days",
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
    "description": "Sailing from Barcelona to Milan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Milan to Lisbon"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Rome"
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
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Laura Stewart",
        role: "Sales Consultant",
        languages: ["English","French","Haitian","Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "sundrenched.journey.@velarivoyages.com",
          contactNumber: "+1-940-990-3800"
        }
      }
    ],
    title: "Sun-Drenched Journey of the Big Apple",
    description: "Leave ordinary behind as you sail from New York City across the captivating East Coast USA. Discover the distinctive personality of each destination, from Barcelona, Milan, Lisbon, Rome.",
    rating: 4.1,
    tags: ["cruise-adventure","wellness"]
  },
  {
    basePrice: 9178,
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
    category: "weekend-cruise",
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
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "This hidden cruise from New York City is your ticket to the captivating charm of the East Coast USA. Discover the delights of Santorini, Athens with enriching excursions and award-winning service.",
      distance: "549 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
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
    "description": "Exploring Santorini"
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
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Alexa Hamilton",
        role: "Sales Consultant",
        languages: ["English","French","Haitian","Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "opulent.whisper.of.t@velarivoyages.com",
          contactNumber: "+1-408-532-1311"
        }
      }
    ],
    title: "Opulent Whisper of the Steel & Spirit Metropolis",
    description: "This hidden cruise from New York City is your ticket to the captivating charm of the East Coast USA. Discover the delights of Santorini, Athens with enriching excursions and award-winning service.",
    rating: 5.0,
    tags: ["cruise-getaway","romantic"]
  }
];
