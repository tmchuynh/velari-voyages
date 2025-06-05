import { Cruise } from "@/lib/interfaces/services/cruises";

export const newYorkCityCruises: Cruise[] = [
{
    basePrice: 5330,
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
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
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
      description: "Set sail from historic New York City for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Malta, Barcelona, Rome.",
      distance: "1098 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Malta to Barcelona"
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
    "description": "Exploring New York City"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Jacob Marshall",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "legendary.labyrinth.@velarivoyages.com",
          contactNumber: "+1-516-307-2099"
        }
      }
    ],
    title: "Legendary Labyrinth of the Atlantic Breeze",
    description: "Set sail from historic New York City for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Malta, Barcelona, Rome.",
    rating: 4.2,
    tags: ["cruise-holiday","themed-cruise"]
  },
  {
    basePrice: 6317,
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
  "country": "Greece",
  "coordinates": {
    "latitude": 36.3932,
    "longitude": 25.4615
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
  }
],
      description: "An unforgettable expedition awaits as you cruise from New York City across East Coast USA. Dive into history, flavor, and culture with stops including Florence, Santorini.",
      distance: "1015 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Florence"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Florence to Santorini"
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
    "description": "Exploring Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christopher Coleman",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/69.jpg",
        contact: {
          contactEmail: "sundrenched.eclipse.@velarivoyages.com",
          contactNumber: "+1-292-127-7843"
        }
      }
    ],
    title: "Sun-Drenched Eclipse of the Sky-Bound Collage",
    description: "An unforgettable expedition awaits as you cruise from New York City across East Coast USA. Dive into history, flavor, and culture with stops including Florence, Santorini.",
    rating: 4.9,
    tags: ["short-getaway"]
  },
  {
    basePrice: 1434,
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
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
      description: "Enjoy seamless luxury on this celestial frontier beginning in New York City. Visit breathtaking East Coast USA locales such as Venice, Dubrovnik, Florence, Athens on this unforgettable itinerary.",
      distance: "1022 nautical miles",
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
    "description": "Sailing from Venice to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Florence to Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
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
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Florence"
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
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Paul Chambers",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
        contact: {
          contactEmail: "enchanting.arcadia.o@velarivoyages.com",
          contactNumber: "+1-746-251-7902"
        }
      }
    ],
    title: "Enchanting Arcadia of the Empire Gateway",
    description: "Enjoy seamless luxury on this celestial frontier beginning in New York City. Visit breathtaking East Coast USA locales such as Venice, Dubrovnik, Florence, Athens on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["cultural","exclusive","long-distance"]
  },
  {
    basePrice: 4263,
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
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
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
      description: "Leave ordinary behind as you sail from New York City across the captivating East Coast USA. Discover the distinctive personality of each destination, from Barcelona, Venice, Florence, Santorini.",
      distance: "523 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Venice"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Venice to Florence"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Florence to Santorini"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Santorini to New York City"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "John Hall",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "infinite.arcadia.of.@velarivoyages.com",
          contactNumber: "+1-340-183-6295"
        }
      }
    ],
    title: "Infinite Arcadia of the Harbor-Lit Evenings",
    description: "Leave ordinary behind as you sail from New York City across the captivating East Coast USA. Discover the distinctive personality of each destination, from Barcelona, Venice, Florence, Santorini.",
    rating: 4.3,
    tags: ["seasonal"]
  },
  {
    basePrice: 2594,
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
  "country": "Croatia",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
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
    "city": "Lisbon",
    "country": "Portugal",
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  }
],
      description: "Embark on an unforgettable pilgrimage from the vibrant port of New York City, where you'll discover hidden gems and iconic landmarks across the East Coast USA region. With stops at Lisbon, Barcelona, Dubrovnik, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1167 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Dubrovnik"
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
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Oliver Wallace",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/69.jpg",
        contact: {
          contactEmail: "luxurious.whisper.of@velarivoyages.com",
          contactNumber: "+1-293-230-2705"
        }
      }
    ],
    title: "Luxurious Whisper of the Empire Gateway",
    description: "Embark on an unforgettable pilgrimage from the vibrant port of New York City, where you'll discover hidden gems and iconic landmarks across the East Coast USA region. With stops at Lisbon, Barcelona, Dubrovnik, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.6,
    tags: ["themed-cruise","historical"]
  },
  {
    basePrice: 9103,
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
  "country": "Greece",
  "coordinates": {
    "latitude": 37.4467,
    "longitude": 25.3289
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
  }
],
      description: "From bustling New York City to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Rome, Lisbon, Mykonos deliver a balanced blend of culture and comfort.",
      distance: "519 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Rome to Lisbon"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Mykonos"
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
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
        name: "Thomas Bennett",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "epic.odyssey.of.the.@velarivoyages.com",
          contactNumber: "+1-309-410-1571"
        }
      }
    ],
    title: "Epic Odyssey of the City of Never",
    description: "From bustling New York City to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Rome, Lisbon, Mykonos deliver a balanced blend of culture and comfort.",
    rating: 4.8,
    tags: ["nature","cultural"]
  },
  {
    basePrice: 3144,
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
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "This handpicked discovery begins in New York City and travels through East Coast USA's iconic waterscapes. Discover Milan, Venice, Lisbon as each day brings new stories and every night offers elegant repose.",
      distance: "735 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New York City to Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Milan to Venice"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Venice to Lisbon"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Lisbon to New York City"
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
    "description": "Exploring Milan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
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
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Chen Price",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
        contact: {
          contactEmail: "pristine.reverie.of.@velarivoyages.com",
          contactNumber: "+1-540-544-4861"
        }
      }
    ],
    title: "Pristine Reverie of the Sky-Bound Collage",
    description: "This handpicked discovery begins in New York City and travels through East Coast USA's iconic waterscapes. Discover Milan, Venice, Lisbon as each day brings new stories and every night offers elegant repose.",
    rating: 4.9,
    tags: ["fall-cruise","repositioning"]
  },
  {
    basePrice: 8198,
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
  "country": "Croatia",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    isPopular: true, // Make fewer cruises "popular"
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
  }
],
      description: "Set sail from New York City for a voyage like no other. From the picturesque landscapes of Mykonos to the lively ambiance of Dubrovnik, this midnight cruise will redefine your view of East Coast USA.",
      distance: "661 nautical miles",
      totalDuration: "6 days",
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
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
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
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Stephen Griffin",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "harmonic.expedition.@velarivoyages.com",
          contactNumber: "+1-350-974-5672"
        }
      }
    ],
    title: "Harmonic Expedition of the City of Never",
    description: "Set sail from New York City for a voyage like no other. From the picturesque landscapes of Mykonos to the lively ambiance of Dubrovnik, this midnight cruise will redefine your view of East Coast USA.",
    rating: 5.0,
    tags: ["cruise-holiday","seasonal","culinary"]
  },
  {
    basePrice: 9893,
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
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
  }
],
      description: "Let the waves lead you from New York City on this serene quest. Traverse the iconic waters of East Coast USA and discover the beauty of Venice, Dubrovnik, Rome.",
      distance: "1428 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Venice"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Venice to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Rome"
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
    "description": "Exploring Venice"
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
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jack Gibson",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "legendary.passage.of@velarivoyages.com",
          contactNumber: "+1-733-163-9388"
        }
      }
    ],
    title: "Legendary Passage of the Big Apple",
    description: "Let the waves lead you from New York City on this serene quest. Traverse the iconic waters of East Coast USA and discover the beauty of Venice, Dubrovnik, Rome.",
    rating: 4.0,
    tags: ["long-distance","general"]
  },
  {
    basePrice: 6997,
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
  "city": "Lisbon",
  "country": "Portugal",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Savor each moment of this moonlit escape through East Coast USA, starting in New York City. Visit renowned locations like Barcelona, Rome, Lisbon, where adventure and relaxation intertwine.",
      distance: "1477 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New York City to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Rome to Lisbon"
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
    "description": "Exploring Barcelona"
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
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Anthony Payne",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "pearlescent.eclipse.@velarivoyages.com",
          contactNumber: "+1-494-632-8723"
        }
      }
    ],
    title: "Pearlescent Eclipse of the Steel & Spirit Metropolis",
    description: "Savor each moment of this moonlit escape through East Coast USA, starting in New York City. Visit renowned locations like Barcelona, Rome, Lisbon, where adventure and relaxation intertwine.",
    rating: 4.3,
    tags: ["romantic"]
  },
  {
    basePrice: 2655,
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
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "Savor each moment of this legendary escape through East Coast USA, starting in New York City. Visit renowned locations like Athens, Dubrovnik, Venice, where adventure and relaxation intertwine.",
      distance: "901 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Athens to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Venice"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Venice to New York City"
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
    "description": "Exploring Athens"
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
    "description": "Exploring Venice"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Albert Grant",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "hidden.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-573-658-7399"
        }
      }
    ],
    title: "Hidden Sojourn of the Autumnal Voyages",
    description: "Savor each moment of this legendary escape through East Coast USA, starting in New York City. Visit renowned locations like Athens, Dubrovnik, Venice, where adventure and relaxation intertwine.",
    rating: 4.5,
    tags: ["glacier-cruise","cruise-adventure"]
  },
  {
    basePrice: 6445,
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
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
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
      description: "Board in New York City for a hand-crafted expedition through the breathtaking East Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Santorini, Florence, Mykonos, Barcelona.",
      distance: "1105 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Santorini to Florence"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Florence to Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Barcelona"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
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
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
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
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Adam Grant",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "pearlescent.serenade@velarivoyages.com",
          contactNumber: "+1-553-142-6161"
        }
      }
    ],
    title: "Pearlescent Serenade of the Harbor-Lit Evenings",
    description: "Board in New York City for a hand-crafted expedition through the breathtaking East Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Santorini, Florence, Mykonos, Barcelona.",
    rating: 4.7,
    tags: ["repositioning","luxury","seasonal"]
  },
  {
    basePrice: 2696,
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
  "city": "Athens",
  "country": "Greece",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
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
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Experience the elegance of the seas on this mystical embrace through East Coast USA, starting from the illustrious port of New York City. From Lisbon, Milan, Barcelona to Athens, each destination offers its own story, culture, and breathtaking views.",
      distance: "1123 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New York City to Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Milan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Milan to Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Athens"
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
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "John Baker",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "serene.discovery.of.@velarivoyages.com",
          contactNumber: "+1-739-941-3562"
        }
      }
    ],
    title: "Serene Discovery of the Steel & Spirit Metropolis",
    description: "Experience the elegance of the seas on this mystical embrace through East Coast USA, starting from the illustrious port of New York City. From Lisbon, Milan, Barcelona to Athens, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.7,
    tags: ["short-getaway"]
  },
  {
    basePrice: 7863,
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
  "city": "Lisbon",
  "country": "Portugal",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
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
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
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
      description: "This inspiring enigma departs from New York City, navigating the diverse landscapes and vibrant cities of East Coast USA. Must-see stops include Mykonos, Santorini, Florence, Lisbon.",
      distance: "1126 nautical miles",
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
    "description": "Sailing from Mykonos to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Santorini to Florence"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Florence to Lisbon"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Florence"
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
        name: "Rajesh Curtis",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "epic.saga.of.the.cit@velarivoyages.com",
          contactNumber: "+1-118-612-9293"
        }
      }
    ],
    title: "Epic Saga of the City of Never",
    description: "This inspiring enigma departs from New York City, navigating the diverse landscapes and vibrant cities of East Coast USA. Must-see stops include Mykonos, Santorini, Florence, Lisbon.",
    rating: 4.2,
    tags: ["relaxation"]
  },
  {
    basePrice: 3419,
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
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
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
      description: "Begin your journey in New York City, where tradition meets travel. This immersive infinite reveals the finest of East Coast USA, from the beaches of Milan to the streets of Venice.",
      distance: "718 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Milan to Venice"
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
    "description": "Exploring Milan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Logan Grant",
        role: "Sales Consultant",
        languages: ["English","French","Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "extraordinary.labyri@velarivoyages.com",
          contactNumber: "+1-864-447-8283"
        }
      }
    ],
    title: "Extraordinary Labyrinth of the Sky-Bound Collage",
    description: "Begin your journey in New York City, where tradition meets travel. This immersive infinite reveals the finest of East Coast USA, from the beaches of Milan to the streets of Venice.",
    rating: 4.8,
    tags: ["cruise-getaway","expedition","cruise-excursion"]
  },
  {
    basePrice: 7159,
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
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
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
      description: "A voyage of contrasts awaits from New York City. Discover the historical and natural richness of East Coast USA as you cruise to spectacular destinations like Mykonos, Milan, Malta.",
      distance: "1225 nautical miles",
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
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Milan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Milan to Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Margaret Russell",
        role: "Corporate Concierge",
        languages: ["English","Haitian","Guarani"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "gilded.adventure.of.@velarivoyages.com",
          contactNumber: "+1-748-134-3890"
        }
      }
    ],
    title: "Gilded Adventure of the Autumnal Voyages",
    description: "A voyage of contrasts awaits from New York City. Discover the historical and natural richness of East Coast USA as you cruise to spectacular destinations like Mykonos, Milan, Malta.",
    rating: 5.0,
    tags: ["cruise-ship","tropical","culinary"]
  },
  {
    basePrice: 5168,
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
  "country": "Croatia",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    isPopular: true, // Make fewer cruises "popular"
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
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  }
],
      description: "Enjoy seamless luxury on this radiance-drenched discovery beginning in New York City. Visit breathtaking East Coast USA locales such as Florence, Athens, Dubrovnik on this unforgettable itinerary.",
      distance: "748 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Florence to Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Athens to Dubrovnik"
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
    "description": "Exploring Florence"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Janet Foster",
        role: "Corporate Concierge",
        languages: ["English","Haitian","Guarani"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
        contact: {
          contactEmail: "golden.journey.of.th@velarivoyages.com",
          contactNumber: "+1-870-154-4987"
        }
      }
    ],
    title: "Golden Journey of the Steel & Spirit Metropolis",
    description: "Enjoy seamless luxury on this radiance-drenched discovery beginning in New York City. Visit breathtaking East Coast USA locales such as Florence, Athens, Dubrovnik on this unforgettable itinerary.",
    rating: 4.4,
    tags: ["long-distance","expedition"]
  },
  {
    basePrice: 2277,
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
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "Your currents begins in New York City, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Lisbon to the historic streets of Milan, each stop in the East Coast USA will leave a lasting impression.",
      distance: "1456 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from New York City to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Milan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Milan to New York City"
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
    "description": "Exploring Lisbon"
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
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Claire Cooper",
        role: "Corporate Concierge",
        languages: ["English","Haitian","Guarani"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "immersive.pilgrimage@velarivoyages.com",
          contactNumber: "+1-141-453-1442"
        }
      }
    ],
    title: "Immersive Pilgrimage of the Seaboard Heritage",
    description: "Your currents begins in New York City, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Lisbon to the historic streets of Milan, each stop in the East Coast USA will leave a lasting impression.",
    rating: 4.8,
    tags: ["holiday-cruise"]
  },
  {
    basePrice: 1355,
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
  "country": "Greece",
  "coordinates": {
    "latitude": 36.3932,
    "longitude": 25.4615
  }
},
    isPopular: true, // Make fewer cruises "popular"
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
  }
],
      description: "Sail into splendor from New York City on a idyllic voyage through East Coast USA. Let each stop—from Rome to Santorini—reveal the unique flavors and colors of the region.",
      distance: "1189 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New York City to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
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
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Maxwell",
        role: "Corporate Concierge",
        languages: ["English","Haitian","Guarani"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "crystalline.legacy.o@velarivoyages.com",
          contactNumber: "+1-623-439-4921"
        }
      }
    ],
    title: "Crystalline Legacy of the Atlantic Breeze",
    description: "Sail into splendor from New York City on a idyllic voyage through East Coast USA. Let each stop—from Rome to Santorini—reveal the unique flavors and colors of the region.",
    rating: 4.3,
    tags: ["short-getaway","cruise-adventure"]
  },
  {
    basePrice: 5199,
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
    "city": "New York City",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  }
],
      description: "This tide-washed frontier begins in New York City and ventures deep into the heart of East Coast USA. Wander through colorful markets, historic streets, and serene coastlines at Lisbon, Dubrovnik.",
      distance: "1229 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from New York City to Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to New York City"
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
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring New York City"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Amina Chambers",
        role: "Corporate Concierge",
        languages: ["English","Haitian","Guarani"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/26.jpg",
        contact: {
          contactEmail: "floating.haven.of.th@velarivoyages.com",
          contactNumber: "+1-814-380-6905"
        }
      }
    ],
    title: "Floating Haven of the Big Apple",
    description: "This tide-washed frontier begins in New York City and ventures deep into the heart of East Coast USA. Wander through colorful markets, historic streets, and serene coastlines at Lisbon, Dubrovnik.",
    rating: 4.4,
    tags: ["weekend-cruise"]
  }
];
