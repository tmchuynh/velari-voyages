import { Cruise } from "@/lib/interfaces/services/cruises";

export const bostonCruises: Cruise[] = [
{
    basePrice: 1891,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Leave stress behind with this curated expedition from Boston. Sail across the best of East Coast USA and explore treasures like Athens, Milan, Barcelona, Rome with comfort and style.",
      distance: "537 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Athens to Milan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Milan to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Tyler Jennings",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "extraordinary.saga.o@velarivoyages.com",
          contactNumber: "+1-466-921-9683"
        }
      }
    ],
    title: "Extraordinary Saga of the Sunrise Coast",
    description: "Leave stress behind with this curated expedition from Boston. Sail across the best of East Coast USA and explore treasures like Athens, Milan, Barcelona, Rome with comfort and style.",
    rating: 4.0,
    tags: ["cruise-holiday"]
  },
  {
    basePrice: 2242,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "A voyage of contrasts awaits from Boston. Discover the historical and natural richness of East Coast USA as you cruise to spectacular destinations like Florence, Barcelona.",
      distance: "1385 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Boston to Florence"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Florence to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Rajesh Hawkins",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "harmonic.reflection.@velarivoyages.com",
          contactNumber: "+1-881-607-6666"
        }
      }
    ],
    title: "Harmonic Reflection of the Harbor of History",
    description: "A voyage of contrasts awaits from Boston. Discover the historical and natural richness of East Coast USA as you cruise to spectacular destinations like Florence, Barcelona.",
    rating: 5.0,
    tags: ["repositioning","cruise-excursion","cultural"]
  },
  {
    basePrice: 6952,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Leave ordinary behind as you sail from Boston across the captivating East Coast USA. Discover the distinctive personality of each destination, from Milan, Athens.",
      distance: "1021 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Milan to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Athens to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Russell Hayes",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "riveting.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-814-252-9095"
        }
      }
    ],
    title: "Riveting Labyrinth of the Colonial Gateway",
    description: "Leave ordinary behind as you sail from Boston across the captivating East Coast USA. Discover the distinctive personality of each destination, from Milan, Athens.",
    rating: 4.4,
    tags: ["glacier-cruise","historical"]
  },
  {
    basePrice: 1330,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "This hand-selected secret cruise offers a true taste of East Coast USA. Depart from Boston and explore ports like Florence, Dubrovnik, each telling a story through food, music, and tradition.",
      distance: "660 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Boston to Florence"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Florence to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Gerald Keller",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "crystalline.elevatio@velarivoyages.com",
          contactNumber: "+1-310-149-1382"
        }
      }
    ],
    title: "Crystalline Elevation of the Seaboard Heritage",
    description: "This hand-selected secret cruise offers a true taste of East Coast USA. Depart from Boston and explore ports like Florence, Dubrovnik, each telling a story through food, music, and tradition.",
    rating: 4.1,
    tags: ["romantic","historical"]
  },
  {
    basePrice: 4969,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "This oasis takes you beyond the ordinary, starting in Boston. With breathtaking stops in Lisbon, Dubrovnik, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "890 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "David Baker",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "radiant.drift.of.the@velarivoyages.com",
          contactNumber: "+1-188-841-5259"
        }
      }
    ],
    title: "Radiant Drift of the Harbor of History",
    description: "This oasis takes you beyond the ordinary, starting in Boston. With breathtaking stops in Lisbon, Dubrovnik, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.4,
    tags: ["general"]
  },
  {
    basePrice: 4721,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Milan",
  "country": "Italy",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "Your journey through the East Coast USA begins in Boston, where elegance meets adventure. Explore the shores of Santorini, Milan, with curated excursions and luxurious onboard amenities.",
      distance: "1430 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
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
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jeffrey Bennett",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
        contact: {
          contactEmail: "transcendent.mirage.@velarivoyages.com",
          contactNumber: "+1-201-484-9254"
        }
      }
    ],
    title: "Transcendent Mirage of the Harbor-Lit Evenings",
    description: "Your journey through the East Coast USA begins in Boston, where elegance meets adventure. Explore the shores of Santorini, Milan, with curated excursions and luxurious onboard amenities.",
    rating: 4.2,
    tags: ["family-friendly"]
  },
  {
    basePrice: 2482,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
      description: "Join us in Boston for a realm of a lifetime. Sail across the serene waters of East Coast USA, stopping at ports like Mykonos, Barcelona where timeless traditions meet modern luxuries.",
      distance: "592 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Boston to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Jordan Holloway",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
        contact: {
          contactEmail: "sundrenched.infinite@velarivoyages.com",
          contactNumber: "+1-663-776-5053"
        }
      }
    ],
    title: "Sun-Drenched Infinite of the Lantern-Lit Legacy",
    description: "Join us in Boston for a realm of a lifetime. Sail across the serene waters of East Coast USA, stopping at ports like Mykonos, Barcelona where timeless traditions meet modern luxuries.",
    rating: 4.1,
    tags: ["VIP","seasonal","cruise-holiday"]
  },
  {
    basePrice: 5517,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "A voyage of contrasts awaits from Boston. Discover the historical and natural richness of East Coast USA as you cruise to spectacular destinations like Santorini, Dubrovnik, Lisbon.",
      distance: "1318 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Boston to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Lisbon"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Scott Payne",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "golden.symphony.of.t@velarivoyages.com",
          contactNumber: "+1-741-980-6817"
        }
      }
    ],
    title: "Golden Symphony of the Cradle of Resistance",
    description: "A voyage of contrasts awaits from Boston. Discover the historical and natural richness of East Coast USA as you cruise to spectacular destinations like Santorini, Dubrovnik, Lisbon.",
    rating: 4.7,
    tags: ["historical"]
  },
  {
    basePrice: 2427,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Milan",
  "country": "Italy",
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
  }
],
      description: "Leave stress behind with this curated requiem from Boston. Sail across the best of East Coast USA and explore treasures like Venice, Lisbon, Malta, Milan with comfort and style.",
      distance: "994 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Boston to Venice"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Venice to Lisbon"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Malta"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Malta to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Malta"
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
        name: "Randy Hall",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
        contact: {
          contactEmail: "mystical.arcadia.of.@velarivoyages.com",
          contactNumber: "+1-249-308-9213"
        }
      }
    ],
    title: "Mystical Arcadia of the Freedom’s Harbor",
    description: "Leave stress behind with this curated requiem from Boston. Sail across the best of East Coast USA and explore treasures like Venice, Lisbon, Malta, Milan with comfort and style.",
    rating: 5.0,
    tags: ["family-friendly","short-getaway","anniversary-cruise"]
  },
  {
    basePrice: 2883,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
      description: "Explore a new side of East Coast USA with this sun-drenched voyage starting in Boston. Visit charming ports such as Santorini, Venice, Milan, Florence, each offering its own unique rhythm.",
      distance: "1064 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Boston to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Santorini to Venice"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Venice to Milan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Milan to Florence"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
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
    "description": "Exploring Venice"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Florence"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Brandon Douglas",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "crystalline.retreat.@velarivoyages.com",
          contactNumber: "+1-861-357-4872"
        }
      }
    ],
    title: "Crystalline Retreat of the Historic Harbors",
    description: "Explore a new side of East Coast USA with this sun-drenched voyage starting in Boston. Visit charming ports such as Santorini, Venice, Milan, Florence, each offering its own unique rhythm.",
    rating: 4.8,
    tags: ["expedition","tropical"]
  },
  {
    basePrice: 2972,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Set off on a reflection from Boston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Mykonos, Malta, Santorini, Dubrovnik.",
      distance: "899 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Boston to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jesse Jennings",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "alluring.retreat.of.@velarivoyages.com",
          contactNumber: "+1-913-913-1723"
        }
      }
    ],
    title: "Alluring Retreat of the Sunrise Coast",
    description: "Set off on a reflection from Boston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Mykonos, Malta, Santorini, Dubrovnik.",
    rating: 4.8,
    tags: ["cultural","cruise-excursion"]
  },
  {
    basePrice: 5148,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Sail away from the charming harbor of Boston on this dreamlike journey across East Coast USA. Uncover the beauty and history of Milan, Mykonos, Lisbon, Rome with curated excursions, world-class cuisine, and exceptional service.",
      distance: "901 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Milan to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Lisbon"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Rome"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Rome to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Milan"
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
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ronald Fisher",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "serene.realm.of.the.@velarivoyages.com",
          contactNumber: "+1-784-455-2597"
        }
      }
    ],
    title: "Serene Realm of the Freedom’s Harbor",
    description: "Sail away from the charming harbor of Boston on this dreamlike journey across East Coast USA. Uncover the beauty and history of Milan, Mykonos, Lisbon, Rome with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.4,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 1161,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
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
      description: "This pristine elevation begins in Boston and ventures deep into the heart of East Coast USA. Wander through colorful markets, historic streets, and serene coastlines at Barcelona, Florence, Venice, Athens.",
      distance: "1213 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Boston to Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Florence to Venice"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Venice to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Larry Wallace",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "extraordinary.escape@velarivoyages.com",
          contactNumber: "+1-687-381-2625"
        }
      }
    ],
    title: "Extraordinary Escape of the Seaboard Heritage",
    description: "This pristine elevation begins in Boston and ventures deep into the heart of East Coast USA. Wander through colorful markets, historic streets, and serene coastlines at Barcelona, Florence, Venice, Athens.",
    rating: 4.7,
    tags: ["holiday-cruise","exclusive","seasonal"]
  },
  {
    basePrice: 2062,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
      description: "Board in Boston for a hand-crafted enigma through the breathtaking East Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Athens, Santorini, Mykonos, Lisbon.",
      distance: "1013 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Boston to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Santorini to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Boston"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brian Keller",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "pearlescent.passage.@velarivoyages.com",
          contactNumber: "+1-109-649-5281"
        }
      }
    ],
    title: "Pearlescent Passage of the Historic Harbors",
    description: "Board in Boston for a hand-crafted enigma through the breathtaking East Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Athens, Santorini, Mykonos, Lisbon.",
    rating: 5.0,
    tags: ["adventure"]
  },
  {
    basePrice: 6318,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "This mythic cruise from Boston is your ticket to the captivating charm of the East Coast USA. Discover the delights of Athens, Rome with enriching excursions and award-winning service.",
      distance: "553 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Rome to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Boston"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Zachary Harper",
        role: "Reservations Agent",
        languages: ["English","French","Guarani"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "tidewashed.eclipse.o@velarivoyages.com",
          contactNumber: "+1-281-887-7080"
        }
      }
    ],
    title: "Tide-Washed Eclipse of the Cobbled Seaside Towns",
    description: "This mythic cruise from Boston is your ticket to the captivating charm of the East Coast USA. Discover the delights of Athens, Rome with enriching excursions and award-winning service.",
    rating: 4.1,
    tags: ["VIP"]
  },
  {
    basePrice: 9469,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Depart from iconic Boston and traverse the East Coast USA with visits to Mykonos, Florence. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "896 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Florence"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Florence to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Boston"
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
    "description": "Exploring Florence"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Lily Grant",
        role: "Corporate Concierge",
        languages: ["English","Haitian","Spanish","French","Quechua"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "radiant.reunion.of.t@velarivoyages.com",
          contactNumber: "+1-881-241-1286"
        }
      }
    ],
    title: "Radiant Reunion of the Freedom’s Harbor",
    description: "Depart from iconic Boston and traverse the East Coast USA with visits to Mykonos, Florence. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.3,
    tags: ["wellness","tropical"]
  },
  {
    basePrice: 8674,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
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
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Your journey through the East Coast USA begins in Boston, where elegance meets adventure. Explore the shores of Lisbon, Athens, Venice, Milan, with curated excursions and luxurious onboard amenities.",
      distance: "1221 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Boston to Lisbon"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Athens to Venice"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Venice to Milan"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Sailing from Milan to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 20",
    "end": "Day 21",
    "duration": "2 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Maya Reed",
        role: "Corporate Concierge",
        languages: ["English","Haitian","Spanish","French","Quechua"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "heavenly.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-867-819-8302"
        }
      }
    ],
    title: "Heavenly Mythos of the Revolutionary Port",
    description: "Your journey through the East Coast USA begins in Boston, where elegance meets adventure. Explore the shores of Lisbon, Athens, Venice, Milan, with curated excursions and luxurious onboard amenities.",
    rating: 4.4,
    tags: ["cruise-vacation"]
  },
  {
    basePrice: 6450,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Join us in Boston for a tide of a lifetime. Sail across the serene waters of East Coast USA, stopping at ports like Santorini, Rome, Florence where timeless traditions meet modern luxuries.",
      distance: "1304 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Boston to Santorini"
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
    "description": "Sailing from Rome to Florence"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Florence to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
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
    "description": "Exploring Florence"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Patricia Grant",
        role: "Corporate Concierge",
        languages: ["English","Haitian","Spanish","French","Quechua"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "immersive.eclipse.of@velarivoyages.com",
          contactNumber: "+1-436-214-1911"
        }
      }
    ],
    title: "Immersive Eclipse of the Freedom’s Harbor",
    description: "Join us in Boston for a tide of a lifetime. Sail across the serene waters of East Coast USA, stopping at ports like Santorini, Rome, Florence where timeless traditions meet modern luxuries.",
    rating: 4.6,
    tags: ["wellness","holiday-cruise"]
  },
  {
    basePrice: 7578,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Set sail from historic Boston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Lisbon, Mykonos, Athens, Florence.",
      distance: "647 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Boston to Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Athens to Florence"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Sailing from Florence to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 19",
    "end": "Day 20",
    "duration": "2 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Sofia Fisher",
        role: "Corporate Concierge",
        languages: ["English","Haitian","Spanish","French","Quechua"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "alluring.pilgrimage.@velarivoyages.com",
          contactNumber: "+1-783-680-3224"
        }
      }
    ],
    title: "Alluring Pilgrimage of the Lighthouse Trails",
    description: "Set sail from historic Boston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Lisbon, Mykonos, Athens, Florence.",
    rating: 4.9,
    tags: ["cultural","cruise-line"]
  },
  {
    basePrice: 2740,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    arrivalLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 42.361145,
    "longitude": -71.057083
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Let the waves lead you from Boston on this majestic infinite. Traverse the iconic waters of East Coast USA and discover the beauty of Dubrovnik, Venice, Milan, Mykonos.",
      distance: "911 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Boston to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Venice"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Venice to Milan"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Milan to Mykonos"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Boston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Boston"
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
    "description": "Exploring Venice"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gabriella West",
        role: "Corporate Concierge",
        languages: ["English","Haitian","Spanish","French","Quechua"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "mystical.quest.of.th@velarivoyages.com",
          contactNumber: "+1-705-921-4823"
        }
      }
    ],
    title: "Mystical Quest of the Revolutionary Port",
    description: "Let the waves lead you from Boston on this majestic infinite. Traverse the iconic waters of East Coast USA and discover the beauty of Dubrovnik, Venice, Milan, Mykonos.",
    rating: 4.4,
    tags: ["adventure","cruise-adventure"]
  }
];
