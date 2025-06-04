import { Cruise } from "@/lib/interfaces/services/cruises";

export const charlestonCruises: Cruise[] = [
{
    basePrice: 8545,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set sail from historic Charleston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Rome, Santorini, Dubrovnik, Mykonos.",
      distance: "1260 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Charleston to Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
        name: "Riley Harper",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "exquisite.discovery.@velarivoyages.com",
          contactNumber: "+1-234-505-5884"
        }
      }
    ],
    title: "Exquisite Discovery of the Southern Charm",
    description: "Set sail from historic Charleston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Rome, Santorini, Dubrovnik, Mykonos.",
    rating: 4.8,
    tags: ["romantic","short-getaway"]
  },
  {
    basePrice: 5529,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Experience the elegance of the seas on this spectacular expedition through East Coast USA, starting from the illustrious port of Charleston. From Dubrovnik, Athens to Barcelona, each destination offers its own story, culture, and breathtaking views.",
      distance: "1385 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Charleston to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Athens to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Athens"
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
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Claire Fox",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "eternal.mirage.of.th@velarivoyages.com",
          contactNumber: "+1-978-279-5034"
        }
      }
    ],
    title: "Eternal Mirage of the Atlantic Breeze",
    description: "Experience the elegance of the seas on this spectacular expedition through East Coast USA, starting from the illustrious port of Charleston. From Dubrovnik, Athens to Barcelona, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.2,
    tags: ["fall-cruise","themed-cruise"]
  },
  {
    basePrice: 7806,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "Set off on a voyage from Charleston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Malta, Barcelona.",
      distance: "870 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Charleston to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Malta"
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
        name: "Audrey Nash",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "opulent.labyrinth.of@velarivoyages.com",
          contactNumber: "+1-961-556-5323"
        }
      }
    ],
    title: "Opulent Labyrinth of the Atlantic Breeze",
    description: "Set off on a voyage from Charleston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Malta, Barcelona.",
    rating: 4.2,
    tags: ["romantic"]
  },
  {
    basePrice: 4103,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Embark from Charleston and traverse the East Coast USA in style. Whether it’s the energy of Barcelona or the calm of Malta, each destination reveals a new side of paradise.",
      distance: "1400 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Charleston to Barcelona"
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
    "description": "Sailing from Malta to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Virginia Graves",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "opulent.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-600-427-5324"
        }
      }
    ],
    title: "Opulent Sojourn of the Historic Waterfront",
    description: "Embark from Charleston and traverse the East Coast USA in style. Whether it’s the energy of Barcelona or the calm of Malta, each destination reveals a new side of paradise.",
    rating: 4.3,
    tags: ["VIP"]
  },
  {
    basePrice: 7032,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "Discover the wonders of East Coast USA aboard this timeless cruise departing from Charleston. Journey through crystal waters to explore the treasures of Athens, Santorini, Malta, Rome, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1407 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Charleston to Athens"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Santorini to Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Malta to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Malta"
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
        name: "Amy Payne",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "hidden.passage.of.th@velarivoyages.com",
          contactNumber: "+1-734-876-8576"
        }
      }
    ],
    title: "Hidden Passage of the Southern Charm",
    description: "Discover the wonders of East Coast USA aboard this timeless cruise departing from Charleston. Journey through crystal waters to explore the treasures of Athens, Santorini, Malta, Rome, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.2,
    tags: ["relaxation","tropical","adventure"]
  },
  {
    basePrice: 3065,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Depart from Charleston on this thoughtfully designed saga across the East Coast USA. Savor coastal charm, cultural treasures, and ocean views with stops at Dubrovnik, Malta.",
      distance: "904 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Charleston to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Malta to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sophia Russell",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "infinite.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-490-148-6802"
        }
      }
    ],
    title: "Infinite Sojourn of the Historic Waterfront",
    description: "Depart from Charleston on this thoughtfully designed saga across the East Coast USA. Savor coastal charm, cultural treasures, and ocean views with stops at Dubrovnik, Malta.",
    rating: 4.0,
    tags: ["sightseeing"]
  },
  {
    basePrice: 7558,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
  }
],
      description: "Embark on an unforgettable horizon from the vibrant port of Charleston, where you'll discover hidden gems and iconic landmarks across the East Coast USA region. With stops at Mykonos, Barcelona, this journey combines cultural immersion with breathtaking scenery.",
      distance: "787 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Charleston to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Mykonos"
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
        name: "Susan Marshall",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "legendary.escape.of.@velarivoyages.com",
          contactNumber: "+1-784-435-7684"
        }
      }
    ],
    title: "Legendary Escape of the Historic Waterfront",
    description: "Embark on an unforgettable horizon from the vibrant port of Charleston, where you'll discover hidden gems and iconic landmarks across the East Coast USA region. With stops at Mykonos, Barcelona, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.5,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 3820,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "This hand-selected celestial cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Mykonos, Athens, each telling a story through food, music, and tradition.",
      distance: "1041 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Charleston to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Linda Coleman",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "starlit.mystique.of.@velarivoyages.com",
          contactNumber: "+1-133-186-5725"
        }
      }
    ],
    title: "Starlit Mystique of the Southern Charm",
    description: "This hand-selected celestial cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Mykonos, Athens, each telling a story through food, music, and tradition.",
    rating: 4.6,
    tags: ["VIP","themed-cruise"]
  },
  {
    basePrice: 6551,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "Join us in Charleston for a horizon of a lifetime. Sail across the serene waters of East Coast USA, stopping at ports like Athens, Mykonos, Santorini, Barcelona where timeless traditions meet modern luxuries.",
      distance: "701 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Charleston to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Santorini"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Santorini to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Grant",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "velvet.quest.of.the.@velarivoyages.com",
          contactNumber: "+1-558-599-4227"
        }
      }
    ],
    title: "Velvet Quest of the Historic Waterfront",
    description: "Join us in Charleston for a horizon of a lifetime. Sail across the serene waters of East Coast USA, stopping at ports like Athens, Mykonos, Santorini, Barcelona where timeless traditions meet modern luxuries.",
    rating: 4.7,
    tags: ["long-distance","sightseeing"]
  },
  {
    basePrice: 1540,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This handpicked renaissance begins in Charleston and travels through East Coast USA's iconic waterscapes. Discover Barcelona, Mykonos, Malta, Santorini as each day brings new stories and every night offers elegant repose.",
      distance: "1050 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Charleston to Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Malta to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Anna Clark",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "unforgettable.voyage@velarivoyages.com",
          contactNumber: "+1-107-182-2869"
        }
      }
    ],
    title: "Unforgettable Voyage of the Colonial Shores",
    description: "This handpicked renaissance begins in Charleston and travels through East Coast USA's iconic waterscapes. Discover Barcelona, Mykonos, Malta, Santorini as each day brings new stories and every night offers elegant repose.",
    rating: 4.1,
    tags: ["fall-cruise","short-getaway","seasonal"]
  },
  {
    basePrice: 9979,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "This hand-selected unforgettable cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Mykonos, Santorini, each telling a story through food, music, and tradition.",
      distance: "860 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Charleston to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Murray",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/15.jpg",
        contact: {
          contactEmail: "mythic.discovery.of.@velarivoyages.com",
          contactNumber: "+1-568-500-3930"
        }
      }
    ],
    title: "Mythic Discovery of the Southern Charm",
    description: "This hand-selected unforgettable cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Mykonos, Santorini, each telling a story through food, music, and tradition.",
    rating: 4.4,
    tags: ["short-getaway","themed-cruise","luxury"]
  },
  {
    basePrice: 1641,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Let this hidden voyage redefine your idea of travel. From Charleston, explore the East Coast USA in luxurious comfort, stopping at Malta, Santorini, Dubrovnik where every port offers a new chapter.",
      distance: "598 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Charleston to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Barbara Hawkins",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "luxurious.saga.of.th@velarivoyages.com",
          contactNumber: "+1-132-503-9268"
        }
      }
    ],
    title: "Luxurious Saga of the Southern Charm",
    description: "Let this hidden voyage redefine your idea of travel. From Charleston, explore the East Coast USA in luxurious comfort, stopping at Malta, Santorini, Dubrovnik where every port offers a new chapter.",
    rating: 4.7,
    tags: ["luxury"]
  },
  {
    basePrice: 6517,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Your excursion begins in Charleston, where every sunset on the East Coast USA horizon promises another day of discovery—from Malta, Mykonos to hidden ports of charm.",
      distance: "1366 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Charleston to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Malta to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Hannah Crawford",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "eternal.tide.of.the.@velarivoyages.com",
          contactNumber: "+1-134-840-8181"
        }
      }
    ],
    title: "Eternal Tide of the Sunrise Coast",
    description: "Your excursion begins in Charleston, where every sunset on the East Coast USA horizon promises another day of discovery—from Malta, Mykonos to hidden ports of charm.",
    rating: 4.1,
    tags: ["adventure","fall-cruise","seasonal"]
  },
  {
    basePrice: 9117,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Your escape begins in Charleston, where every sunset on the East Coast USA horizon promises another day of discovery—from Dubrovnik, Barcelona to hidden ports of charm.",
      distance: "1396 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Charleston to Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Alexa Montgomery",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "breathtaking.sojourn@velarivoyages.com",
          contactNumber: "+1-226-851-7921"
        }
      }
    ],
    title: "Breathtaking Sojourn of the Southern Charm",
    description: "Your escape begins in Charleston, where every sunset on the East Coast USA horizon promises another day of discovery—from Dubrovnik, Barcelona to hidden ports of charm.",
    rating: 4.7,
    tags: ["long-distance"]
  },
  {
    basePrice: 7138,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "Depart from the iconic port of Charleston and sail through the enchanting East Coast USA. Explore vibrant destinations like Dubrovnik, Athens, Santorini, each offering its own unique charm and local flair.",
      distance: "1060 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Charleston to Dubrovnik"
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
    "description": "Sailing from Athens to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Adeline Baker",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "starlit.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-612-700-3842"
        }
      }
    ],
    title: "Starlit Horizon of the Southern Charm",
    description: "Depart from the iconic port of Charleston and sail through the enchanting East Coast USA. Explore vibrant destinations like Dubrovnik, Athens, Santorini, each offering its own unique charm and local flair.",
    rating: 4.7,
    tags: ["relaxation","VIP","fall-cruise"]
  },
  {
    basePrice: 1073,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "Embark from Charleston and traverse the East Coast USA in style. Whether it’s the energy of Mykonos or the calm of Rome, each destination reveals a new side of paradise.",
      distance: "1482 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Charleston to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Rome to Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Nicole Hudson",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        contact: {
          contactEmail: "eternal.mystique.of.@velarivoyages.com",
          contactNumber: "+1-310-768-1370"
        }
      }
    ],
    title: "Eternal Mystique of the Historic Harbors",
    description: "Embark from Charleston and traverse the East Coast USA in style. Whether it’s the energy of Mykonos or the calm of Rome, each destination reveals a new side of paradise.",
    rating: 4.8,
    tags: ["seasonal","family-friendly"]
  },
  {
    basePrice: 2792,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Unwind and explore on this tide through East Coast USA, departing from Charleston. With every stop—from Mykonos to Santorini—you’ll collect memories that last a lifetime.",
      distance: "831 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Charleston to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Santorini to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Stella Palmer",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/93.jpg",
        contact: {
          contactEmail: "spectacular.escape.o@velarivoyages.com",
          contactNumber: "+1-583-460-1385"
        }
      }
    ],
    title: "Spectacular Escape of the Historic Waterfront",
    description: "Unwind and explore on this tide through East Coast USA, departing from Charleston. With every stop—from Mykonos to Santorini—you’ll collect memories that last a lifetime.",
    rating: 4.6,
    tags: ["relaxation"]
  },
  {
    basePrice: 9042,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "Cruise into cultural richness aboard this secret journey departing Charleston. Savor local cuisine and uncover regional beauty from Santorini to Malta.",
      distance: "1387 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Charleston to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Malta to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Helen Coleman",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/91.jpg",
        contact: {
          contactEmail: "exquisite.sojourn.of@velarivoyages.com",
          contactNumber: "+1-388-360-7695"
        }
      }
    ],
    title: "Exquisite Sojourn of the Sunrise Coast",
    description: "Cruise into cultural richness aboard this secret journey departing Charleston. Savor local cuisine and uncover regional beauty from Santorini to Malta.",
    rating: 4.9,
    tags: ["tropical"]
  },
  {
    basePrice: 5963,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Cruise into cultural richness aboard this breathtaking odyssey departing Charleston. Savor local cuisine and uncover regional beauty from Barcelona to Rome.",
      distance: "1142 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Charleston to Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Emma Cooper",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "hidden.requiem.of.th@velarivoyages.com",
          contactNumber: "+1-351-197-4899"
        }
      }
    ],
    title: "Hidden Requiem of the Southern Charm",
    description: "Cruise into cultural richness aboard this breathtaking odyssey departing Charleston. Savor local cuisine and uncover regional beauty from Barcelona to Rome.",
    rating: 4.5,
    tags: ["exclusive","VIP"]
  },
  {
    basePrice: 4108,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Depart from Charleston on this thoughtfully designed mirage across the East Coast USA. Savor coastal charm, cultural treasures, and ocean views with stops at Athens, Dubrovnik, Santorini, Rome.",
      distance: "700 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Charleston to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Athens to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Rome to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ella Ellis",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "velvet.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-155-762-1514"
        }
      }
    ],
    title: "Velvet Sojourn of the Southern Charm",
    description: "Depart from Charleston on this thoughtfully designed mirage across the East Coast USA. Savor coastal charm, cultural treasures, and ocean views with stops at Athens, Dubrovnik, Santorini, Rome.",
    rating: 4.8,
    tags: ["short-getaway","exclusive","relaxation"]
  },
  {
    basePrice: 4348,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "An escape like no other begins in Charleston, where your requiem launches into the heart of East Coast USA. Discover the magic of Rome, Barcelona with style and sophistication.",
      distance: "1264 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Charleston to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Rome to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Emma Marshall",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "starlit.exploration.@velarivoyages.com",
          contactNumber: "+1-555-319-8450"
        }
      }
    ],
    title: "Starlit Exploration of the Historic Waterfront",
    description: "An escape like no other begins in Charleston, where your requiem launches into the heart of East Coast USA. Discover the magic of Rome, Barcelona with style and sophistication.",
    rating: 4.8,
    tags: ["tropical","sightseeing","fall-cruise"]
  },
  {
    basePrice: 7585,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "Escape into the calm waters of East Coast USA with this infinite journey from Charleston. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Mykonos, Rome.",
      distance: "1427 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Charleston to Mykonos"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Ella Grant",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "whispering.reverie.o@velarivoyages.com",
          contactNumber: "+1-160-338-4442"
        }
      }
    ],
    title: "Whispering Reverie of the Southern Charm",
    description: "Escape into the calm waters of East Coast USA with this infinite journey from Charleston. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Mykonos, Rome.",
    rating: 4.2,
    tags: ["exclusive"]
  },
  {
    basePrice: 7251,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "This hand-selected legendary cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Rome, Malta, each telling a story through food, music, and tradition.",
      distance: "768 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Charleston to Rome"
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
    "description": "Sailing from Malta to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sofia Baker",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "crystalline.discover@velarivoyages.com",
          contactNumber: "+1-113-672-3370"
        }
      }
    ],
    title: "Crystalline Discovery of the Historic Waterfront",
    description: "This hand-selected legendary cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Rome, Malta, each telling a story through food, music, and tradition.",
    rating: 4.9,
    tags: ["relaxation","adventure"]
  },
  {
    basePrice: 5512,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Begin an epic sojourn from Charleston, where the seas meet culture. Visit the remarkable ports of Malta, Santorini, Athens while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "802 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Charleston to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Athens to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Santorini"
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
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Hannah Day",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "unforgettable.horizo@velarivoyages.com",
          contactNumber: "+1-503-139-5955"
        }
      }
    ],
    title: "Unforgettable Horizon of the Sunrise Coast",
    description: "Begin an epic sojourn from Charleston, where the seas meet culture. Visit the remarkable ports of Malta, Santorini, Athens while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.2,
    tags: ["romantic","family-friendly","fall-cruise"]
  },
  {
    basePrice: 4298,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Escape the everyday with this breathtaking journey through East Coast USA, departing from Charleston. You'll visit Dubrovnik, Mykonos, where every stop is a new adventure.",
      distance: "1003 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Charleston to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Valentina Nash",
        role: "Accommodation Manager",
        languages: ["Lao","Greek","Burmese"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
        contact: {
          contactEmail: "secret.retreat.of.th@velarivoyages.com",
          contactNumber: "+1-702-496-5906"
        }
      }
    ],
    title: "Secret Retreat of the Historic Waterfront",
    description: "Escape the everyday with this breathtaking journey through East Coast USA, departing from Charleston. You'll visit Dubrovnik, Mykonos, where every stop is a new adventure.",
    rating: 4.2,
    tags: ["themed-cruise","adventure","seasonal"]
  },
  {
    basePrice: 8075,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Unwind and explore on this mystique through East Coast USA, departing from Charleston. With every stop—from Rome to Mykonos—you’ll collect memories that last a lifetime.",
      distance: "1023 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Charleston to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
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
  },
  {
    "start": "Day 9",
    "end": "Day 9",
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
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Diego Spencer",
        role: "Activities Director",
        languages: ["Portuguese","Lao"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/61.jpg",
        contact: {
          contactEmail: "forbidden.passage.of@velarivoyages.com",
          contactNumber: "+1-640-715-3629"
        }
      }
    ],
    title: "Forbidden Passage of the Historic Harbors",
    description: "Unwind and explore on this mystique through East Coast USA, departing from Charleston. With every stop—from Rome to Mykonos—you’ll collect memories that last a lifetime.",
    rating: 4.4,
    tags: ["relaxation","family-friendly","short-getaway"]
  },
  {
    basePrice: 4998,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "Sail away from Charleston into the beautiful expanse of East Coast USA. Along the way, enjoy rich cultural experiences in Santorini, Dubrovnik, Malta, Rome, where history, nature, and cuisine collide.",
      distance: "641 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Charleston to Santorini"
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
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Malta to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Logan Douglas",
        role: "Activities Director",
        languages: ["Portuguese","Lao"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "starlit.quest.of.the@velarivoyages.com",
          contactNumber: "+1-298-298-2859"
        }
      }
    ],
    title: "Starlit Quest of the Sunrise Coast",
    description: "Sail away from Charleston into the beautiful expanse of East Coast USA. Along the way, enjoy rich cultural experiences in Santorini, Dubrovnik, Malta, Rome, where history, nature, and cuisine collide.",
    rating: 4.1,
    tags: ["long-distance","short-getaway","adventure"]
  },
  {
    basePrice: 3267,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Sail away from the charming harbor of Charleston on this celestial journey across East Coast USA. Uncover the beauty and history of Barcelona, Rome with curated excursions, world-class cuisine, and exceptional service.",
      distance: "771 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Charleston to Barcelona"
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
    "description": "Sailing from Rome to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "John Keller",
        role: "Activities Director",
        languages: ["Portuguese","Lao"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/26.jpg",
        contact: {
          contactEmail: "luxurious.saga.of.th@velarivoyages.com",
          contactNumber: "+1-908-681-9827"
        }
      }
    ],
    title: "Luxurious Saga of the Historic Waterfront",
    description: "Sail away from the charming harbor of Charleston on this celestial journey across East Coast USA. Uncover the beauty and history of Barcelona, Rome with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.2,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 4953,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "From the lively departure port of Charleston, this curated escape showcases the finest of East Coast USA. With visits to Barcelona, Dubrovnik, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1494 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Charleston to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Willie Hawkins",
        role: "Activities Director",
        languages: ["Portuguese","Lao"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "majestic.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-388-256-8512"
        }
      }
    ],
    title: "Majestic Odyssey of the Southern Charm",
    description: "From the lively departure port of Charleston, this curated escape showcases the finest of East Coast USA. With visits to Barcelona, Dubrovnik, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.6,
    tags: ["luxury","fall-cruise","VIP"]
  },
  {
    basePrice: 3943,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "This hand-selected opulent cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Malta, Dubrovnik, each telling a story through food, music, and tradition.",
      distance: "1027 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Charleston to Malta"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Malta to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Nicholas Reed",
        role: "Activities Director",
        languages: ["Portuguese","Lao"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "opulent.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-705-606-7089"
        }
      }
    ],
    title: "Opulent Voyage of the Sunrise Coast",
    description: "This hand-selected opulent cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Malta, Dubrovnik, each telling a story through food, music, and tradition.",
    rating: 4.2,
    tags: ["relaxation"]
  },
  {
    basePrice: 2084,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Begin your odyssey in Charleston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Rome, Mykonos, Santorini, Barcelona and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "646 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Charleston to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Santorini to Barcelona"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Hayes",
        role: "Guest Relations Manager",
        languages: ["Gujarati"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "forbidden.excursion.@velarivoyages.com",
          contactNumber: "+1-855-257-9539"
        }
      }
    ],
    title: "Forbidden Excursion of the Colonial Shores",
    description: "Begin your odyssey in Charleston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Rome, Mykonos, Santorini, Barcelona and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.9,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 5641,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "Experience coastal elegance on this reverie from Charleston, where the journey through East Coast USA includes stops in Santorini, Barcelona, each more enchanting than the last.",
      distance: "1491 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Charleston to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Santorini to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
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
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Spencer",
        role: "Guest Relations Manager",
        languages: ["Gujarati"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "midnight.retreat.of.@velarivoyages.com",
          contactNumber: "+1-403-580-9499"
        }
      }
    ],
    title: "Midnight Retreat of the Colonial Shores",
    description: "Experience coastal elegance on this reverie from Charleston, where the journey through East Coast USA includes stops in Santorini, Barcelona, each more enchanting than the last.",
    rating: 4.4,
    tags: ["themed-cruise","fall-cruise","luxury"]
  },
  {
    basePrice: 6766,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
  }
],
      description: "Experience coastal elegance on this reverie from Charleston, where the journey through East Coast USA includes stops in Athens, Barcelona, each more enchanting than the last.",
      distance: "747 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Charleston to Athens"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Athens to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Valentina Holloway",
        role: "Guest Relations Manager",
        languages: ["Gujarati"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "celestial.mystique.o@velarivoyages.com",
          contactNumber: "+1-943-245-1457"
        }
      }
    ],
    title: "Celestial Mystique of the Atlantic Breeze",
    description: "Experience coastal elegance on this reverie from Charleston, where the journey through East Coast USA includes stops in Athens, Barcelona, each more enchanting than the last.",
    rating: 4.6,
    tags: ["relaxation","adventure"]
  },
  {
    basePrice: 4069,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
      description: "Explore a new side of East Coast USA with this mesmerizing escape starting in Charleston. Visit charming ports such as Malta, Athens, each offering its own unique rhythm.",
      distance: "1128 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Charleston to Malta"
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
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
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
        name: "Michelle Montgomery",
        role: "Guest Relations Manager",
        languages: ["Gujarati"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "velvet.excursion.of.@velarivoyages.com",
          contactNumber: "+1-690-674-9647"
        }
      }
    ],
    title: "Velvet Excursion of the Southern Charm",
    description: "Explore a new side of East Coast USA with this mesmerizing escape starting in Charleston. Visit charming ports such as Malta, Athens, each offering its own unique rhythm.",
    rating: 4.8,
    tags: ["family-friendly","tropical","short-getaway"]
  },
  {
    basePrice: 9806,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    arrivalLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast USA",
  "coordinates": {
    "latitude": 32.77657,
    "longitude": -79.93092
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
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
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 32.77657,
      "longitude": -79.93092
    }
  }
],
      description: "Unwind and explore on this saga through East Coast USA, departing from Charleston. With every stop—from Barcelona to Santorini—you’ll collect memories that last a lifetime.",
      distance: "940 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Charleston to Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Santorini to Charleston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Charleston"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Charleston"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Watson",
        role: "Guest Relations Manager",
        languages: ["Gujarati"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "infinite.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-931-525-7753"
        }
      }
    ],
    title: "Infinite Mirage of the Historic Waterfront",
    description: "Unwind and explore on this saga through East Coast USA, departing from Charleston. With every stop—from Barcelona to Santorini—you’ll collect memories that last a lifetime.",
    rating: 4.5,
    tags: ["themed-cruise","long-distance"]
  }
];
