import { Cruise } from "@/lib/interfaces/services/cruises";

export const losAngelesCruises: Cruise[] = [
  {
    basePrice: 7146,
    departureLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
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
    category: "vip-cruise",
    itinerary: {
      route: [
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
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
  }
],
      description: "Join us in Los Angeles for a symphony of a lifetime. Sail across the serene waters of West Coast USA, stopping at ports like Santorini, Barcelona where timeless traditions meet modern luxuries.",
      distance: "619 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Los Angeles to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Los Angeles"
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
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Alexa Watson",
        role: "Cruise Specialist",
        languages: ["English","Spanish","Haitian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "whispering.quest.of.@velarivoyages.com",
          contactNumber: "+1-601-184-9145"
        }
      }
    ],
    title: "Whispering Quest of the Sunset Horizon",
    description: "Join us in Los Angeles for a symphony of a lifetime. Sail across the serene waters of West Coast USA, stopping at ports like Santorini, Barcelona where timeless traditions meet modern luxuries.",
    rating: 4.8,
    tags: ["anniversary-cruise","cruise-ship","holiday-cruise"]
  },
  {
    basePrice: 5050,
    departureLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
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
    category: "glacier-cruise",
    itinerary: {
      route: [
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
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
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  }
],
      description: "An unforgettable pulse awaits as you cruise from Los Angeles across West Coast USA. Dive into history, flavor, and culture with stops including Mykonos, Milan, Florence.",
      distance: "728 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Los Angeles to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Milan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Milan to Florence"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Los Angeles"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Florence"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Audrey Harper",
        role: "Cruise Specialist",
        languages: ["English","Spanish","Haitian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "epic.elevation.of.th@velarivoyages.com",
          contactNumber: "+1-850-801-9772"
        }
      }
    ],
    title: "Epic Elevation of the Golden Coastline",
    description: "An unforgettable pulse awaits as you cruise from Los Angeles across West Coast USA. Dive into history, flavor, and culture with stops including Mykonos, Milan, Florence.",
    rating: 4.1,
    tags: ["wildlife"]
  },
  {
    basePrice: 4147,
    departureLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
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
    category: "repositioning-cruise",
    itinerary: {
      route: [
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "Step into a world of elegance and exploration from Los Angeles. This pulse through the West Coast USA unveils stunning stops including Mykonos, Barcelona, all with first-class service.",
      distance: "949 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Los Angeles to Mykonos"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Los Angeles"
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
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Helen Douglas",
        role: "Cruise Specialist",
        languages: ["English","Spanish","Haitian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "exquisite.arcadia.of@velarivoyages.com",
          contactNumber: "+1-483-131-4902"
        }
      }
    ],
    title: "Exquisite Arcadia of the Palm-Shaded Horizon",
    description: "Step into a world of elegance and exploration from Los Angeles. This pulse through the West Coast USA unveils stunning stops including Mykonos, Barcelona, all with first-class service.",
    rating: 4.4,
    tags: ["fall-cruise","cruise-line"]
  },
  {
    basePrice: 4161,
    departureLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
  }
},
    arrivalLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
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
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
    }
  }
],
      description: "This transcendent cruise from Los Angeles is your ticket to the captivating charm of the West Coast USA. Discover the delights of Mykonos, Dubrovnik, Florence, Milan with enriching excursions and award-winning service.",
      distance: "972 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Los Angeles to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Florence"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Florence to Milan"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Milan to Los Angeles"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Los Angeles"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Los Angeles"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Emma Hamilton",
        role: "Cruise Specialist",
        languages: ["English","Spanish","Haitian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "majestic.excursion.o@velarivoyages.com",
          contactNumber: "+1-656-975-6876"
        }
      }
    ],
    title: "Majestic Excursion of the Cliffside Skylines",
    description: "This transcendent cruise from Los Angeles is your ticket to the captivating charm of the West Coast USA. Discover the delights of Mykonos, Dubrovnik, Florence, Milan with enriching excursions and award-winning service.",
    rating: 4.3,
    tags: ["romantic","cruise-line"]
  },
  {
    basePrice: 1374,
    departureLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
  }
},
    arrivalLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
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
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
    }
  }
],
      description: "Depart from the iconic port of Los Angeles and sail through the enchanting West Coast USA. Explore vibrant destinations like Barcelona, Lisbon, each offering its own unique charm and local flair.",
      distance: "524 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Los Angeles to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Lisbon"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Los Angeles"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Los Angeles"
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
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Los Angeles"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Hudson",
        role: "Cruise Specialist",
        languages: ["English","Spanish","Haitian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "heavenly.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-625-147-1203"
        }
      }
    ],
    title: "Heavenly Mirage of the Sunset Horizon",
    description: "Depart from the iconic port of Los Angeles and sail through the enchanting West Coast USA. Explore vibrant destinations like Barcelona, Lisbon, each offering its own unique charm and local flair.",
    rating: 4.3,
    tags: ["cruise-experience","expedition"]
  },
  {
    basePrice: 8489,
    departureLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
  }
},
    arrivalLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
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
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
    }
  }
],
      description: "Begin a captivating labyrinth through the West Coast USA, departing Los Angeles. With visits to Malta, Venice, Florence, Dubrovnik, each day brings a new adventure and deeper connection to the region.",
      distance: "992 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Los Angeles to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Malta to Venice"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Venice to Florence"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Florence to Dubrovnik"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Los Angeles"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Los Angeles"
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
    "description": "Exploring Venice"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Los Angeles"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sarah Keller",
        role: "Cruise Specialist",
        languages: ["English","Spanish","Haitian"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "aweinspiring.odyssey@velarivoyages.com",
          contactNumber: "+1-785-721-4288"
        }
      }
    ],
    title: "Awe-Inspiring Odyssey of the Cliffside Skylines",
    description: "Begin a captivating labyrinth through the West Coast USA, departing Los Angeles. With visits to Malta, Venice, Florence, Dubrovnik, each day brings a new adventure and deeper connection to the region.",
    rating: 4.7,
    tags: ["holiday-cruise","short-getaway","anniversary-cruise"]
  },
  {
    basePrice: 8077,
    departureLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
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
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Set course from Los Angeles for an inspiring heavenly journey across West Coast USA. Whether exploring ancient ruins in Athens or soaking up coastal views in Santorini, every day offers a perfect mix of discovery and relaxation.",
      distance: "573 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Los Angeles to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Santorini to Venice"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Venice to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Los Angeles"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Venice"
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
        name: "Caroline Jennings",
        role: "Cruise Specialist",
        languages: ["English","Spanish","Haitian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
        contact: {
          contactEmail: "pearlescent.frontier@velarivoyages.com",
          contactNumber: "+1-273-723-2770"
        }
      }
    ],
    title: "Pearlescent Frontier of the Palm-Shaded Horizon",
    description: "Set course from Los Angeles for an inspiring heavenly journey across West Coast USA. Whether exploring ancient ruins in Athens or soaking up coastal views in Santorini, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.0,
    tags: ["adventure"]
  },
  {
    basePrice: 5489,
    departureLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
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
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
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
      description: "Board in Los Angeles for a hand-crafted tranquility through the breathtaking West Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Athens, Florence, Lisbon.",
      distance: "1174 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Los Angeles to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Athens to Florence"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Florence to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Los Angeles"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Naomi Baker",
        role: "Cruise Specialist",
        languages: ["English","Spanish","Haitian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "idyllic.wanderlust.o@velarivoyages.com",
          contactNumber: "+1-313-241-2080"
        }
      }
    ],
    title: "Idyllic Wanderlust of the Palm-Shaded Horizon",
    description: "Board in Los Angeles for a hand-crafted tranquility through the breathtaking West Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Athens, Florence, Lisbon.",
    rating: 5.0,
    tags: ["luxury","family-friendly"]
  },
  {
    basePrice: 9297,
    departureLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
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
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Embark on an unforgettable currents from the vibrant port of Los Angeles, where you'll discover hidden gems and iconic landmarks across the West Coast USA region. With stops at Venice, Athens, this journey combines cultural immersion with breathtaking scenery.",
      distance: "696 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Los Angeles to Venice"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Venice to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Los Angeles"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Keller",
        role: "Cruise Specialist",
        languages: ["English","Spanish","Haitian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "hidden.infinite.of.t@velarivoyages.com",
          contactNumber: "+1-362-194-6585"
        }
      }
    ],
    title: "Hidden Infinite of the Stage of Stars",
    description: "Embark on an unforgettable currents from the vibrant port of Los Angeles, where you'll discover hidden gems and iconic landmarks across the West Coast USA region. With stops at Venice, Athens, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.8,
    tags: ["long-distance","historical"]
  },
  {
    basePrice: 8783,
    departureLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
  }
},
    arrivalLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "West Coast USA",
  "coordinates": {
    "latitude": 34.0522,
    "longitude": -118.2437
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "West Coast USA",
    "coordinates": {
      "latitude": 34.0522,
      "longitude": -118.2437
    }
  }
],
      description: "Depart from iconic Los Angeles and traverse the West Coast USA with visits to Milan, Rome. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "516 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Los Angeles to Milan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Milan to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Rome to Los Angeles"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Los Angeles"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Los Angeles"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Amanda Gibson",
        role: "Cruise Specialist",
        languages: ["English","Spanish","Haitian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "crystalline.pulse.of@velarivoyages.com",
          contactNumber: "+1-838-119-4089"
        }
      }
    ],
    title: "Crystalline Pulse of the Golden Gate Voyage",
    description: "Depart from iconic Los Angeles and traverse the West Coast USA with visits to Milan, Rome. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.1,
    tags: ["sightseeing","seasonal","expedition"]
  }
];
