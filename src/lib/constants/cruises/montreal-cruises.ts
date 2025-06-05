import { Cruise } from "@/lib/interfaces/services/cruises";

export const montrealCruises: Cruise[] = [
{
    basePrice: 3110,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
  }
],
      description: "Begin your solstice in Montreal, a gateway to the soul of East Coast Canada. Enjoy days spent exploring Athens, Rome, Barcelona, Venice and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "884 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Montreal to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Rome to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
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
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joseph Henderson",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        contact: {
          contactEmail: "oceanic.lullaby.of.t@velarivoyages.com",
          contactNumber: "+1-360-884-2412"
        }
      }
    ],
    title: "Oceanic Lullaby of the River's Rhythm",
    description: "Begin your solstice in Montreal, a gateway to the soul of East Coast Canada. Enjoy days spent exploring Athens, Rome, Barcelona, Venice and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.8,
    tags: ["seasonal"]
  },
  {
    basePrice: 6128,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
    }
  }
],
      description: "Discover the wonders of East Coast Canada aboard this captivating cruise departing from Montreal. Journey through crystal waters to explore the treasures of Malta, Athens, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1446 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Montreal to Malta"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Malta to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Athens to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Montreal"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Thomas Grant",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "alluring.drift.of.th@velarivoyages.com",
          contactNumber: "+1-576-953-2629"
        }
      }
    ],
    title: "Alluring Drift of the Snow-Kissed Bohemia",
    description: "Discover the wonders of East Coast Canada aboard this captivating cruise departing from Montreal. Journey through crystal waters to explore the treasures of Malta, Athens, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.9,
    tags: ["cruise-holiday","family-friendly","tropical"]
  },
  {
    basePrice: 1980,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
    }
  }
],
      description: "Sail from Montreal into a world of wonder. The East Coast Canada beckons with unforgettable ports like Dubrovnik, Milan, Rome, where every view is picture-perfect and every moment is priceless.",
      distance: "540 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Montreal to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Milan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Milan to Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Rome to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Montreal"
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
    "description": "Exploring Milan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Montreal"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jason Day",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "radiant.excursion.of@velarivoyages.com",
          contactNumber: "+1-210-137-9787"
        }
      }
    ],
    title: "Radiant Excursion of the Autumn Bay",
    description: "Sail from Montreal into a world of wonder. The East Coast Canada beckons with unforgettable ports like Dubrovnik, Milan, Rome, where every view is picture-perfect and every moment is priceless.",
    rating: 4.3,
    tags: ["expedition","relaxation","cultural"]
  },
  {
    basePrice: 9962,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
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
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
  }
],
      description: "Set sail from Montreal on this unforgettable reflection through the heart of East Coast Canada. Experience the perfect blend of relaxation and adventure as you explore Athens and Rome and Santorini and Venice, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1016 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Montreal to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Santorini to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Montreal"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ronald Collins",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
        contact: {
          contactEmail: "oceanic.sanctuary.of@velarivoyages.com",
          contactNumber: "+1-384-524-5936"
        }
      }
    ],
    title: "Oceanic Sanctuary of the River's Rhythm",
    description: "Set sail from Montreal on this unforgettable reflection through the heart of East Coast Canada. Experience the perfect blend of relaxation and adventure as you explore Athens and Rome and Santorini and Venice, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.2,
    tags: ["weekend-cruise"]
  },
  {
    basePrice: 1470,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
      description: "Leave ordinary behind as you sail from Montreal across the captivating East Coast Canada. Discover the distinctive personality of each destination, from Milan, Dubrovnik, Rome.",
      distance: "1119 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Montreal to Milan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Milan to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Randy Watson",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "starlit.mirage.of.th@velarivoyages.com",
          contactNumber: "+1-537-385-2128"
        }
      }
    ],
    title: "Starlit Mirage of the Red Sand Shores",
    description: "Leave ordinary behind as you sail from Montreal across the captivating East Coast Canada. Discover the distinctive personality of each destination, from Milan, Dubrovnik, Rome.",
    rating: 4.3,
    tags: ["historical"]
  },
  {
    basePrice: 5583,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
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
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
  }
],
      description: "Sail away from the charming harbor of Montreal on this harmonic journey across East Coast Canada. Uncover the beauty and history of Rome, Barcelona, Lisbon, Milan with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1052 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Montreal to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Rome to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Lisbon"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Montreal"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Graves",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "dreamlike.sanctum.of@velarivoyages.com",
          contactNumber: "+1-833-410-5771"
        }
      }
    ],
    title: "Dreamlike Sanctum of the River's Rhythm",
    description: "Sail away from the charming harbor of Montreal on this harmonic journey across East Coast Canada. Uncover the beauty and history of Rome, Barcelona, Lisbon, Milan with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.2,
    tags: ["cruise-holiday"]
  },
  {
    basePrice: 2847,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
    }
  }
],
      description: "Step into a world of elegance and exploration from Montreal. This adventure through the East Coast Canada unveils stunning stops including Malta, Dubrovnik, Florence, Mykonos, all with first-class service.",
      distance: "631 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Montreal to Malta"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Malta to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
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
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
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
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Montreal"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Tyler Palmer",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
        contact: {
          contactEmail: "golden.legacy.of.the@velarivoyages.com",
          contactNumber: "+1-201-534-1505"
        }
      }
    ],
    title: "Golden Legacy of the River's Rhythm",
    description: "Step into a world of elegance and exploration from Montreal. This adventure through the East Coast Canada unveils stunning stops including Malta, Dubrovnik, Florence, Mykonos, all with first-class service.",
    rating: 5.0,
    tags: ["wildlife"]
  },
  {
    basePrice: 4554,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
    }
  }
],
      description: "Depart from Montreal on this thoughtfully designed eclipse across the East Coast Canada. Savor coastal charm, cultural treasures, and ocean views with stops at Rome, Venice, Lisbon.",
      distance: "894 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Montreal to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Rome to Venice"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Venice to Lisbon"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Montreal"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Venice"
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
    "description": "Exploring Montreal"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Mark Montgomery",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "gilded.resonance.of.@velarivoyages.com",
          contactNumber: "+1-159-304-5526"
        }
      }
    ],
    title: "Gilded Resonance of the Maple Coast",
    description: "Depart from Montreal on this thoughtfully designed eclipse across the East Coast Canada. Savor coastal charm, cultural treasures, and ocean views with stops at Rome, Venice, Lisbon.",
    rating: 4.1,
    tags: ["fall-cruise","cruise-vacation","culinary"]
  },
  {
    basePrice: 8499,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
    }
  }
],
      description: "Let the winds of the East Coast Canada carry you from Montreal to the most stunning ports in the region. With destinations like Lisbon, Malta, Santorini, Athens, this renaissance redefines luxury travel.",
      distance: "1215 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Montreal to Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Athens to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Lisbon"
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
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring Montreal"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adam Hunter",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "sundrenched.realm.of@velarivoyages.com",
          contactNumber: "+1-141-645-8316"
        }
      }
    ],
    title: "Sun-Drenched Realm of the Bilingual Canvas",
    description: "Let the winds of the East Coast Canada carry you from Montreal to the most stunning ports in the region. With destinations like Lisbon, Malta, Santorini, Athens, this renaissance redefines luxury travel.",
    rating: 4.4,
    tags: ["short-getaway","romantic"]
  },
  {
    basePrice: 3996,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  }
],
      description: "From bustling Montreal to serene East Coast Canada shores, this cruise invites you to relax, explore, and indulge. Stops at Venice, Santorini deliver a balanced blend of culture and comfort.",
      distance: "1357 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Montreal to Venice"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Venice to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Montreal"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Matthew Nash",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "crystalline.mirage.o@velarivoyages.com",
          contactNumber: "+1-849-208-4189"
        }
      }
    ],
    title: "Crystalline Mirage of the Stone-Walled Allure",
    description: "From bustling Montreal to serene East Coast Canada shores, this cruise invites you to relax, explore, and indulge. Stops at Venice, Santorini deliver a balanced blend of culture and comfort.",
    rating: 4.7,
    tags: ["anniversary-cruise"]
  },
  {
    basePrice: 5547,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
    }
  }
],
      description: "Depart Montreal on a relaxing wanderlust through the East Coast Canada region. Highlights include the stunning coastlines of Athens, Mykonos, Malta, all while enjoying first-class amenities on board.",
      distance: "694 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Montreal to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Malta to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
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
    "description": "Exploring Mykonos"
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
    "description": "Exploring Montreal"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "James Dixon",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "enchanting.reunion.o@velarivoyages.com",
          contactNumber: "+1-397-858-1355"
        }
      }
    ],
    title: "Enchanting Reunion of the Bilingual Canvas",
    description: "Depart Montreal on a relaxing wanderlust through the East Coast Canada region. Highlights include the stunning coastlines of Athens, Mykonos, Malta, all while enjoying first-class amenities on board.",
    rating: 4.6,
    tags: ["fall-cruise","cruise-holiday"]
  },
  {
    basePrice: 1191,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
    }
  }
],
      description: "Your serenade begins in Montreal, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Florence to the historic streets of Athens, each stop in the East Coast Canada will leave a lasting impression.",
      distance: "1032 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Montreal to Florence"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Florence to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Athens to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Montreal"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Keith Gibson",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "whispering.pulse.of.@velarivoyages.com",
          contactNumber: "+1-710-864-5283"
        }
      }
    ],
    title: "Whispering Pulse of the Acadian Echoes",
    description: "Your serenade begins in Montreal, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Florence to the historic streets of Athens, each stop in the East Coast Canada will leave a lasting impression.",
    rating: 4.2,
    tags: ["sightseeing"]
  },
  {
    basePrice: 5383,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
    }
  }
],
      description: "Let this legendary voyage redefine your idea of travel. From Montreal, explore the East Coast Canada in luxurious comfort, stopping at Barcelona, Lisbon, Florence, Dubrovnik where every port offers a new chapter.",
      distance: "756 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Montreal to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Lisbon"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Florence"
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
    "description": "Sailing from Dubrovnik to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
    "description": "Exploring Montreal"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Mason Nash",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "majestic.excursion.o@velarivoyages.com",
          contactNumber: "+1-736-499-4533"
        }
      }
    ],
    title: "Majestic Excursion of the Island Metropolis",
    description: "Let this legendary voyage redefine your idea of travel. From Montreal, explore the East Coast Canada in luxurious comfort, stopping at Barcelona, Lisbon, Florence, Dubrovnik where every port offers a new chapter.",
    rating: 4.4,
    tags: ["cruise-adventure","VIP"]
  },
  {
    basePrice: 4283,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
    }
  }
],
      description: "Depart from Montreal on this thoughtfully designed excursion across the East Coast Canada. Savor coastal charm, cultural treasures, and ocean views with stops at Florence, Dubrovnik, Barcelona.",
      distance: "586 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Montreal to Florence"
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
    "description": "Sailing from Dubrovnik to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
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
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Montreal"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Albert Mason",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "ornate.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-104-905-6510"
        }
      }
    ],
    title: "Ornate Odyssey of the Lobster Isles",
    description: "Depart from Montreal on this thoughtfully designed excursion across the East Coast Canada. Savor coastal charm, cultural treasures, and ocean views with stops at Florence, Dubrovnik, Barcelona.",
    rating: 4.4,
    tags: ["expedition","cruise-journey"]
  },
  {
    basePrice: 8572,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
    }
  }
],
      description: "Step aboard in Montreal and begin a floating journey through the scenic East Coast Canada. From historic cities to coastal hideaways like Venice, Milan, every day is unforgettable.",
      distance: "524 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Montreal to Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Venice to Milan"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Milan to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Montreal"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Diego Graves",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Haitian","Spanish","Aymara"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/55.jpg",
        contact: {
          contactEmail: "spectacular.escape.o@velarivoyages.com",
          contactNumber: "+1-938-686-5658"
        }
      }
    ],
    title: "Spectacular Escape of the Bilingual Canvas",
    description: "Step aboard in Montreal and begin a floating journey through the scenic East Coast Canada. From historic cities to coastal hideaways like Venice, Milan, every day is unforgettable.",
    rating: 4.9,
    tags: ["cultural"]
  },
  {
    basePrice: 7127,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
    }
  }
],
      description: "Explore a new side of East Coast Canada with this riveting sanctum starting in Montreal. Visit charming ports such as Milan, Venice, each offering its own unique rhythm.",
      distance: "1270 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Montreal to Milan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Milan to Venice"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Venice to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Montreal"
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
    "description": "Exploring Venice"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Montreal"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Watson",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Portuguese","French","Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "verdant.adventure.of@velarivoyages.com",
          contactNumber: "+1-696-247-8879"
        }
      }
    ],
    title: "Verdant Adventure of the Tidal Wonders",
    description: "Explore a new side of East Coast Canada with this riveting sanctum starting in Montreal. Visit charming ports such as Milan, Venice, each offering its own unique rhythm.",
    rating: 4.2,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 9770,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
  }
],
      description: "Begin your journey in Montreal, where tradition meets travel. This immersive resonance reveals the finest of East Coast Canada, from the beaches of Rome to the streets of Barcelona.",
      distance: "1300 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Montreal to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Rome to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Montreal"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Naomi Collins",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Portuguese","French","Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "secluded.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-467-517-9359"
        }
      }
    ],
    title: "Secluded Mythos of the Harbor Havens",
    description: "Begin your journey in Montreal, where tradition meets travel. This immersive resonance reveals the finest of East Coast Canada, from the beaches of Rome to the streets of Barcelona.",
    rating: 4.3,
    tags: ["sightseeing","cruise-getaway"]
  },
  {
    basePrice: 8746,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
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
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
  }
],
      description: "Begin your journey in Montreal, a gateway to the soul of East Coast Canada. Enjoy days spent exploring Mykonos, Santorini, Rome, Dubrovnik and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "666 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Montreal to Mykonos"
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
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Rome to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
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
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Hall",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Portuguese","French","Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
        contact: {
          contactEmail: "infinite.frontier.of@velarivoyages.com",
          contactNumber: "+1-981-921-7312"
        }
      }
    ],
    title: "Infinite Frontier of the Harbor Havens",
    description: "Begin your journey in Montreal, a gateway to the soul of East Coast Canada. Enjoy days spent exploring Mykonos, Santorini, Rome, Dubrovnik and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.7,
    tags: ["anniversary-cruise"]
  },
  {
    basePrice: 4001,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
  }
],
      description: "Begin your journey in Montreal, a gateway to the soul of East Coast Canada. Enjoy days spent exploring Malta, Mykonos and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "961 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Montreal to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Malta to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Amelia Hawkins",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Portuguese","French","Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "mythic.panorama.of.t@velarivoyages.com",
          contactNumber: "+1-270-360-3726"
        }
      }
    ],
    title: "Mythic Panorama of the French-Canadian Heart",
    description: "Begin your journey in Montreal, a gateway to the soul of East Coast Canada. Enjoy days spent exploring Malta, Mykonos and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.7,
    tags: ["cruise-ship","wellness","glacier-cruise"]
  },
  {
    basePrice: 2426,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 45.5017,
    "longitude": -73.5673
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
    "city": "Montreal",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 45.5017,
      "longitude": -73.5673
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Depart from iconic Montreal and traverse the East Coast Canada with visits to Athens, Florence, Rome. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1193 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Montreal to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Florence"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Florence to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Montreal"
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
    "description": "Exploring Florence"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Russell",
        role: "Corporate Concierge",
        languages: ["English","Guarani","Portuguese","French","Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "riveting.tide.of.the@velarivoyages.com",
          contactNumber: "+1-586-848-2168"
        }
      }
    ],
    title: "Riveting Tide of the Island Metropolis",
    description: "Depart from iconic Montreal and traverse the East Coast Canada with visits to Athens, Florence, Rome. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.1,
    tags: ["culinary"]
  }
];
