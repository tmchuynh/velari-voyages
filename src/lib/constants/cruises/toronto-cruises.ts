import { Cruise } from "@/lib/interfaces/services/cruises";

export const torontoCruises: Cruise[] = [
{
    basePrice: 1527,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    arrivalLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
],
      description: "Savor each moment of this floating escape through East Coast Canada, starting in Toronto. Visit renowned locations like Venice, Florence, where adventure and relaxation intertwine.",
      distance: "1469 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Toronto to Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Venice to Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Florence to Toronto"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Toronto"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Henry Fletcher",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "epic.discovery.of.th@velarivoyages.com",
          contactNumber: "+1-383-410-7475"
        }
      }
    ],
    title: "Epic Discovery of the Maple Coast",
    description: "Savor each moment of this floating escape through East Coast Canada, starting in Toronto. Visit renowned locations like Venice, Florence, where adventure and relaxation intertwine.",
    rating: 4.2,
    tags: ["romantic","luxury"]
  },
  {
    basePrice: 7741,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Depart Toronto on a relaxing currents through the East Coast Canada region. Highlights include the stunning coastlines of Athens, Rome, Venice, all while enjoying first-class amenities on board.",
      distance: "1182 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Toronto to Athens"
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
    "description": "Sailing from Rome to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Toronto"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Aiden Chambers",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "dreamlike.pilgrimage@velarivoyages.com",
          contactNumber: "+1-225-499-3240"
        }
      }
    ],
    title: "Dreamlike Pilgrimage of the North Star City",
    description: "Depart Toronto on a relaxing currents through the East Coast Canada region. Highlights include the stunning coastlines of Athens, Rome, Venice, all while enjoying first-class amenities on board.",
    rating: 4.2,
    tags: ["short-getaway"]
  },
  {
    basePrice: 9136,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
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
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  }
],
      description: "Leave stress behind with this curated frontier from Toronto. Sail across the best of East Coast Canada and explore treasures like Dubrovnik, Mykonos with comfort and style.",
      distance: "1202 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Toronto to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Harold Hall",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "aweinspiring.eclipse@velarivoyages.com",
          contactNumber: "+1-347-161-3651"
        }
      }
    ],
    title: "Awe-Inspiring Eclipse of the North Star City",
    description: "Leave stress behind with this curated frontier from Toronto. Sail across the best of East Coast Canada and explore treasures like Dubrovnik, Mykonos with comfort and style.",
    rating: 4.0,
    tags: ["cultural","family-friendly"]
  },
  {
    basePrice: 7387,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
      description: "Let the waves lead you from Toronto on this dreamlike passage. Traverse the iconic waters of East Coast Canada and discover the beauty of Santorini, Milan, Lisbon, Rome.",
      distance: "687 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Toronto to Santorini"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Santorini to Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Milan to Lisbon"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Griffin",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
        contact: {
          contactEmail: "tranquil.requiem.of.@velarivoyages.com",
          contactNumber: "+1-373-580-8424"
        }
      }
    ],
    title: "Tranquil Requiem of the Towered Threshold",
    description: "Let the waves lead you from Toronto on this dreamlike passage. Traverse the iconic waters of East Coast Canada and discover the beauty of Santorini, Milan, Lisbon, Rome.",
    rating: 4.9,
    tags: ["cruise-line","cruise-journey","nature"]
  },
  {
    basePrice: 2770,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
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
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
      description: "An unforgettable haven awaits as you cruise from Toronto across East Coast Canada. Dive into history, flavor, and culture with stops including Malta, Lisbon, Milan.",
      distance: "1293 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Toronto to Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Malta to Lisbon"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Edward Harper",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "floating.elevation.o@velarivoyages.com",
          contactNumber: "+1-350-854-9742"
        }
      }
    ],
    title: "Floating Elevation of the Harbor Havens",
    description: "An unforgettable haven awaits as you cruise from Toronto across East Coast Canada. Dive into history, flavor, and culture with stops including Malta, Lisbon, Milan.",
    rating: 4.3,
    tags: ["tropical","expedition","historical"]
  },
  {
    basePrice: 6286,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
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
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "city": "Venice",
    "country": "Italy",
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
  }
],
      description: "Join us in Toronto for a wanderlust of a lifetime. Sail across the serene waters of East Coast Canada, stopping at ports like Lisbon, Florence, Venice, Barcelona where timeless traditions meet modern luxuries.",
      distance: "1295 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Toronto to Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Florence"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Florence to Venice"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Venice to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Florence"
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
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aiden Curtis",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
        contact: {
          contactEmail: "sundrenched.symphony@velarivoyages.com",
          contactNumber: "+1-462-708-8754"
        }
      }
    ],
    title: "Sun-Drenched Symphony of the Maple-Lit Majesty",
    description: "Join us in Toronto for a wanderlust of a lifetime. Sail across the serene waters of East Coast Canada, stopping at ports like Lisbon, Florence, Venice, Barcelona where timeless traditions meet modern luxuries.",
    rating: 4.7,
    tags: ["anniversary-cruise","cruise-excursion"]
  },
  {
    basePrice: 7688,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    arrivalLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
],
      description: "Sail away from the charming harbor of Toronto on this tranquil journey across East Coast Canada. Uncover the beauty and history of Santorini, Venice, Barcelona, Milan with curated excursions, world-class cuisine, and exceptional service.",
      distance: "515 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Toronto to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Santorini to Venice"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Venice to Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Milan"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Sailing from Milan to Toronto"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Toronto"
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
    "description": "Exploring Venice"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 19",
    "end": "Day 19",
    "duration": "1 days",
    "description": "Exploring Toronto"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Randy Keller",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "azure.tide.of.the.ma@velarivoyages.com",
          contactNumber: "+1-411-542-1487"
        }
      }
    ],
    title: "Azure Tide of the Maple-Lit Majesty",
    description: "Sail away from the charming harbor of Toronto on this tranquil journey across East Coast Canada. Uncover the beauty and history of Santorini, Venice, Barcelona, Milan with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.3,
    tags: ["historical","luxury"]
  },
  {
    basePrice: 5069,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
      description: "Sail away from Toronto into the beautiful expanse of East Coast Canada. Along the way, enjoy rich cultural experiences in Rome, Dubrovnik, where history, nature, and cuisine collide.",
      distance: "699 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Toronto to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Toronto"
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
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Johnny Price",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
        contact: {
          contactEmail: "tidewashed.infinite.@velarivoyages.com",
          contactNumber: "+1-384-461-2336"
        }
      }
    ],
    title: "Tide-Washed Infinite of the Maple-Lit Majesty",
    description: "Sail away from Toronto into the beautiful expanse of East Coast Canada. Along the way, enjoy rich cultural experiences in Rome, Dubrovnik, where history, nature, and cuisine collide.",
    rating: 4.8,
    tags: ["cruise-vacation","cruise-experience"]
  },
  {
    basePrice: 1794,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    arrivalLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
],
      description: "Join us in Toronto for a saga of a lifetime. Sail across the serene waters of East Coast Canada, stopping at ports like Barcelona, Malta, Santorini where timeless traditions meet modern luxuries.",
      distance: "549 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Toronto to Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Santorini to Toronto"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Barcelona"
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
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Toronto"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ryan Gibson",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "refined.frontier.of.@velarivoyages.com",
          contactNumber: "+1-373-847-5337"
        }
      }
    ],
    title: "Refined Frontier of the Great Lakes Metropolis",
    description: "Join us in Toronto for a saga of a lifetime. Sail across the serene waters of East Coast Canada, stopping at ports like Barcelona, Malta, Santorini where timeless traditions meet modern luxuries.",
    rating: 4.0,
    tags: ["cruise","cruise-ship"]
  },
  {
    basePrice: 3065,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    arrivalLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
],
      description: "Join us in Toronto for a panorama of a lifetime. Sail across the serene waters of East Coast Canada, stopping at ports like Florence, Malta, Dubrovnik where timeless traditions meet modern luxuries.",
      distance: "1034 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Toronto to Florence"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Florence to Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Malta to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Toronto"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Toronto"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Aiden Grant",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
        contact: {
          contactEmail: "midnight.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-476-251-7946"
        }
      }
    ],
    title: "Midnight Sojourn of the Seafaring Legacies",
    description: "Join us in Toronto for a panorama of a lifetime. Sail across the serene waters of East Coast Canada, stopping at ports like Florence, Malta, Dubrovnik where timeless traditions meet modern luxuries.",
    rating: 5.0,
    tags: ["long-distance","fall-cruise","cruise-excursion"]
  },
  {
    basePrice: 7126,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
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
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
  }
],
      description: "Experience the elegance of the seas on this sublime requiem through East Coast Canada, starting from the illustrious port of Toronto. From Barcelona, Athens, Milan to Mykonos, each destination offers its own story, culture, and breathtaking views.",
      distance: "1449 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Toronto to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Athens to Milan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Milan to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Toronto"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Maxwell",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "idyllic.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-774-657-6769"
        }
      }
    ],
    title: "Idyllic Retreat of the Great Lakes Metropolis",
    description: "Experience the elegance of the seas on this sublime requiem through East Coast Canada, starting from the illustrious port of Toronto. From Barcelona, Athens, Milan to Mykonos, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.3,
    tags: ["exclusive","sightseeing"]
  },
  {
    basePrice: 4548,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
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
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
      description: "Experience coastal elegance on this elevation from Toronto, where the journey through East Coast Canada includes stops in Barcelona, Malta, Mykonos, each more enchanting than the last.",
      distance: "1159 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Toronto to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Malta to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Toronto"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Keith Payne",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "lavish.lullaby.of.th@velarivoyages.com",
          contactNumber: "+1-589-100-2335"
        }
      }
    ],
    title: "Lavish Lullaby of the Skyline on Ice",
    description: "Experience coastal elegance on this elevation from Toronto, where the journey through East Coast Canada includes stops in Barcelona, Malta, Mykonos, each more enchanting than the last.",
    rating: 4.4,
    tags: ["expedition"]
  },
  {
    basePrice: 8875,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    arrivalLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
],
      description: "Experience the elegance of the seas on this majestic whisper through East Coast Canada, starting from the illustrious port of Toronto. From Rome, Barcelona, Athens to Dubrovnik, each destination offers its own story, culture, and breathtaking views.",
      distance: "1394 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Toronto to Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Rome to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Athens to Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Toronto"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Rome"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Toronto"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sean Henderson",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/61.jpg",
        contact: {
          contactEmail: "alluring.saga.of.the@velarivoyages.com",
          contactNumber: "+1-989-706-7902"
        }
      }
    ],
    title: "Alluring Saga of the Celtic Shores",
    description: "Experience the elegance of the seas on this majestic whisper through East Coast Canada, starting from the illustrious port of Toronto. From Rome, Barcelona, Athens to Dubrovnik, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.4,
    tags: ["nature","cruise-vacation"]
  },
  {
    basePrice: 5871,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    arrivalLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
],
      description: "Begin an epic mirage from Toronto, where the seas meet culture. Visit the remarkable ports of Mykonos, Venice, Malta while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1429 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Toronto to Mykonos"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Venice"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Venice to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Malta to Toronto"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Venice"
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
    "description": "Exploring Toronto"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christian Day",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        contact: {
          contactEmail: "alluring.embrace.of.@velarivoyages.com",
          contactNumber: "+1-164-455-8769"
        }
      }
    ],
    title: "Alluring Embrace of the Skyline on Ice",
    description: "Begin an epic mirage from Toronto, where the seas meet culture. Visit the remarkable ports of Mykonos, Venice, Malta while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.3,
    tags: ["adventure","cruise-excursion"]
  },
  {
    basePrice: 6978,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    arrivalLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
],
      description: "Discover the wonders of East Coast Canada aboard this majestic cruise departing from Toronto. Journey through crystal waters to explore the treasures of Athens, Lisbon, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "731 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Toronto to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Lisbon"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Toronto"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Toronto"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ryan Graves",
        role: "Reservations Agent",
        languages: ["English","Portuguese","French","Quechua"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "moonlit.lullaby.of.t@velarivoyages.com",
          contactNumber: "+1-408-366-5619"
        }
      }
    ],
    title: "Moonlit Lullaby of the Urban Mosaic",
    description: "Discover the wonders of East Coast Canada aboard this majestic cruise departing from Toronto. Journey through crystal waters to explore the treasures of Athens, Lisbon, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.7,
    tags: ["cruise-getaway","cultural","culinary"]
  },
  {
    basePrice: 2469,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
  }
],
      description: "Enjoy seamless luxury on this riveting arcadia beginning in Toronto. Visit breathtaking East Coast Canada locales such as Barcelona, Milan on this unforgettable itinerary.",
      distance: "839 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Toronto to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Toronto"
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
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Mary Fletcher",
        role: "Customer Service Representative",
        languages: ["English","Guarani","Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "dreamlike.sojourn.of@velarivoyages.com",
          contactNumber: "+1-144-500-5569"
        }
      }
    ],
    title: "Dreamlike Sojourn of the Fiddle & Salt Air",
    description: "Enjoy seamless luxury on this riveting arcadia beginning in Toronto. Visit breathtaking East Coast Canada locales such as Barcelona, Milan on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["cruise-holiday"]
  },
  {
    basePrice: 6634,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
  }
],
      description: "From bustling Toronto to serene East Coast Canada shores, this cruise invites you to relax, explore, and indulge. Stops at Lisbon, Venice, Milan deliver a balanced blend of culture and comfort.",
      distance: "1352 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Toronto to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Venice"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Venice to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Toronto"
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
    "description": "Exploring Venice"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Skylar West",
        role: "Customer Service Representative",
        languages: ["English","Guarani","Aymara"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "heavenly.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-980-928-2667"
        }
      }
    ],
    title: "Heavenly Labyrinth of the Towered Threshold",
    description: "From bustling Toronto to serene East Coast Canada shores, this cruise invites you to relax, explore, and indulge. Stops at Lisbon, Venice, Milan deliver a balanced blend of culture and comfort.",
    rating: 4.2,
    tags: ["cruise-excursion","wildlife","seasonal"]
  },
  {
    basePrice: 4780,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    arrivalLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
  },
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
],
      description: "Set course from Toronto for an inspiring radiant journey across East Coast Canada. Whether exploring ancient ruins in Lisbon or soaking up coastal views in Santorini, every day offers a perfect mix of discovery and relaxation.",
      distance: "982 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Toronto to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Santorini to Milan"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Milan to Toronto"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
    "description": "Exploring Milan"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Toronto"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sophia Coleman",
        role: "Customer Service Representative",
        languages: ["English","Guarani","Aymara"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "legendary.haven.of.t@velarivoyages.com",
          contactNumber: "+1-186-922-6033"
        }
      }
    ],
    title: "Legendary Haven of the Historic Lighthouses",
    description: "Set course from Toronto for an inspiring radiant journey across East Coast Canada. Whether exploring ancient ruins in Lisbon or soaking up coastal views in Santorini, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.7,
    tags: ["long-distance","culinary"]
  },
  {
    basePrice: 5807,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    arrivalLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
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
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
],
      description: "Let the spirit of exploration guide your panoramic journey from Toronto. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Rome, Athens, Lisbon.",
      distance: "774 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Toronto to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Athens to Lisbon"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Toronto"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Toronto"
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
    "description": "Exploring Athens"
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
    "description": "Exploring Toronto"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Virginia Mitchell",
        role: "Customer Service Representative",
        languages: ["English","Guarani","Aymara"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "breathtaking.embrace@velarivoyages.com",
          contactNumber: "+1-576-488-7100"
        }
      }
    ],
    title: "Breathtaking Embrace of the Urban Mosaic",
    description: "Let the spirit of exploration guide your panoramic journey from Toronto. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Rome, Athens, Lisbon.",
    rating: 4.1,
    tags: ["holiday-cruise","nature"]
  },
  {
    basePrice: 3882,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    arrivalLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 43.6532,
    "longitude": -79.3832
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
],
      description: "Step aboard in Toronto and begin a epic journey through the scenic East Coast Canada. From historic cities to coastal hideaways like Mykonos, Santorini, Barcelona, every day is unforgettable.",
      distance: "864 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Toronto to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Santorini to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Toronto"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Toronto"
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
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Toronto"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Alice Price",
        role: "Customer Service Representative",
        languages: ["English","Guarani","Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "tranquil.requiem.of.@velarivoyages.com",
          contactNumber: "+1-340-178-9915"
        }
      }
    ],
    title: "Tranquil Requiem of the Towered Threshold",
    description: "Step aboard in Toronto and begin a epic journey through the scenic East Coast Canada. From historic cities to coastal hideaways like Mykonos, Santorini, Barcelona, every day is unforgettable.",
    rating: 4.8,
    tags: ["relaxation","adventure","weekend-cruise"]
  }
];
