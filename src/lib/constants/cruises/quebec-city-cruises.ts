import { Cruise } from "@/lib/interfaces/services/cruises";

export const quebecCityCruises: Cruise[] = [
{
    basePrice: 5702,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Embark on an unforgettable requiem from the vibrant port of Quebec City, where you'll discover hidden gems and iconic landmarks across the East Coast Canada region. With stops at Athens, Barcelona, Dubrovnik, Rome, this journey combines cultural immersion with breathtaking scenery.",
      distance: "522 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Rome"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Rome to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Nora Warren",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "unforgettable.mirage@velarivoyages.com",
          contactNumber: "+1-500-483-2109"
        }
      }
    ],
    title: "Unforgettable Mirage of the Walled Wonder",
    description: "Embark on an unforgettable requiem from the vibrant port of Quebec City, where you'll discover hidden gems and iconic landmarks across the East Coast Canada region. With stops at Athens, Barcelona, Dubrovnik, Rome, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.5,
    tags: ["themed-cruise","relaxation"]
  },
  {
    basePrice: 9367,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Begin your escape in Quebec City, a gateway to the soul of East Coast Canada. Enjoy days spent exploring Rome, Dubrovnik, Mykonos and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1274 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Maya Fox",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "starlit.adventure.of@velarivoyages.com",
          contactNumber: "+1-805-827-2437"
        }
      }
    ],
    title: "Starlit Adventure of the French-Canadian Crown",
    description: "Begin your escape in Quebec City, a gateway to the soul of East Coast Canada. Enjoy days spent exploring Rome, Dubrovnik, Mykonos and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.0,
    tags: ["family-friendly","relaxation","long-distance"]
  },
  {
    basePrice: 2030,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "Board in Quebec City for a hand-crafted horizon through the breathtaking East Coast Canada. Highlights include sun-drenched beaches, historic ports, and immersive culture in Mykonos, Dubrovnik, Rome.",
      distance: "830 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Dubrovnik"
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
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
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
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Mary Gibson",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "whispering.odyssey.o@velarivoyages.com",
          contactNumber: "+1-543-690-5316"
        }
      }
    ],
    title: "Whispering Odyssey of the Walled Wonder",
    description: "Board in Quebec City for a hand-crafted horizon through the breathtaking East Coast Canada. Highlights include sun-drenched beaches, historic ports, and immersive culture in Mykonos, Dubrovnik, Rome.",
    rating: 4.5,
    tags: ["adventure"]
  },
  {
    basePrice: 6445,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Escape the everyday with this enchanting journey through East Coast Canada, departing from Quebec City. You'll visit Santorini, Rome, where every stop is a new adventure.",
      distance: "949 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Rome to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Valentina Dunn",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "spectacular.mirage.o@velarivoyages.com",
          contactNumber: "+1-370-762-5880"
        }
      }
    ],
    title: "Spectacular Mirage of the Walled Wonder",
    description: "Escape the everyday with this enchanting journey through East Coast Canada, departing from Quebec City. You'll visit Santorini, Rome, where every stop is a new adventure.",
    rating: 4.6,
    tags: ["relaxation","seasonal"]
  },
  {
    basePrice: 3094,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Step aboard in Quebec City and begin a legendary journey through the scenic East Coast Canada. From historic cities to coastal hideaways like Rome, Dubrovnik, every day is unforgettable.",
      distance: "1316 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Alice Mitchell",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "legendary.discovery.@velarivoyages.com",
          contactNumber: "+1-577-901-6674"
        }
      }
    ],
    title: "Legendary Discovery of the Walled Wonder",
    description: "Step aboard in Quebec City and begin a legendary journey through the scenic East Coast Canada. From historic cities to coastal hideaways like Rome, Dubrovnik, every day is unforgettable.",
    rating: 4.1,
    tags: ["family-friendly"]
  },
  {
    basePrice: 2315,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Escape to sea from Quebec City on a timeless voyage exploring the magic of East Coast Canada. Visit unforgettable locales like Barcelona, Dubrovnik, Athens, Mykonos, where each stop inspires awe.",
      distance: "1170 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Pamela Knight",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "majestic.exploration@velarivoyages.com",
          contactNumber: "+1-777-571-3854"
        }
      }
    ],
    title: "Majestic Exploration of the Maple Coast",
    description: "Escape to sea from Quebec City on a timeless voyage exploring the magic of East Coast Canada. Visit unforgettable locales like Barcelona, Dubrovnik, Athens, Mykonos, where each stop inspires awe.",
    rating: 4.9,
    tags: ["exclusive","relaxation","seasonal"]
  },
  {
    basePrice: 8897,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
      description: "From the lively departure port of Quebec City, this curated odyssey showcases the finest of East Coast Canada. With visits to Malta, Athens, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "991 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Malta"
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
    "description": "Exploring Quebec City"
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
        name: "Victoria Grant",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "timeless.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-989-448-8320"
        }
      }
    ],
    title: "Timeless Odyssey of the Harbor Havens",
    description: "From the lively departure port of Quebec City, this curated odyssey showcases the finest of East Coast Canada. With visits to Malta, Athens, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.1,
    tags: ["relaxation"]
  },
  {
    basePrice: 5107,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
      description: "Embark from Quebec City and traverse the East Coast Canada in style. Whether it’s the energy of Santorini or the calm of Dubrovnik, each destination reveals a new side of paradise.",
      distance: "1341 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Santorini"
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
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Bella Montgomery",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "velvet.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-696-705-2270"
        }
      }
    ],
    title: "Velvet Odyssey of the Walled Wonder",
    description: "Embark from Quebec City and traverse the East Coast Canada in style. Whether it’s the energy of Santorini or the calm of Dubrovnik, each destination reveals a new side of paradise.",
    rating: 4.5,
    tags: ["family-friendly","luxury","relaxation"]
  },
  {
    basePrice: 8900,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Depart from Quebec City on this thoughtfully designed reverie across the East Coast Canada. Savor coastal charm, cultural treasures, and ocean views with stops at Dubrovnik, Santorini.",
      distance: "809 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Santorini to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Leah Day",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "starlit.renaissance.@velarivoyages.com",
          contactNumber: "+1-771-939-5781"
        }
      }
    ],
    title: "Starlit Renaissance of the Walled Wonder",
    description: "Depart from Quebec City on this thoughtfully designed reverie across the East Coast Canada. Savor coastal charm, cultural treasures, and ocean views with stops at Dubrovnik, Santorini.",
    rating: 4.9,
    tags: ["romantic","short-getaway"]
  },
  {
    basePrice: 5268,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
  }
],
      description: "Leave ordinary behind as you sail from Quebec City across the captivating East Coast Canada. Discover the distinctive personality of each destination, from Barcelona, Rome, Santorini, Dubrovnik.",
      distance: "1174 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Barcelona"
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
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Santorini to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lisa Payne",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "captivating.excursio@velarivoyages.com",
          contactNumber: "+1-200-317-2434"
        }
      }
    ],
    title: "Captivating Excursion of the Seaway Frontiers",
    description: "Leave ordinary behind as you sail from Quebec City across the captivating East Coast Canada. Discover the distinctive personality of each destination, from Barcelona, Rome, Santorini, Dubrovnik.",
    rating: 4.4,
    tags: ["tropical","sightseeing"]
  },
  {
    basePrice: 3189,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
  }
],
      description: "Begin your renaissance in Quebec City, a gateway to the soul of East Coast Canada. Enjoy days spent exploring Athens, Mykonos, Dubrovnik, Rome and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "624 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
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
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
        name: "Brenda Hunter",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "celestial.realm.of.t@velarivoyages.com",
          contactNumber: "+1-496-767-1831"
        }
      }
    ],
    title: "Celestial Realm of the Maple Coast",
    description: "Begin your renaissance in Quebec City, a gateway to the soul of East Coast Canada. Enjoy days spent exploring Athens, Mykonos, Dubrovnik, Rome and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.8,
    tags: ["seasonal","adventure","luxury"]
  },
  {
    basePrice: 5926,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
      description: "Let this hidden voyage redefine your idea of travel. From Quebec City, explore the East Coast Canada in luxurious comfort, stopping at Mykonos, Athens, Malta, Santorini where every port offers a new chapter.",
      distance: "1498 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Athens to Malta"
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
    "description": "Exploring Quebec City"
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
    "description": "Exploring Athens"
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
        name: "Catherine Gardner",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
        contact: {
          contactEmail: "starlit.adventure.of@velarivoyages.com",
          contactNumber: "+1-577-288-6647"
        }
      }
    ],
    title: "Starlit Adventure of the Maple Coast",
    description: "Let this hidden voyage redefine your idea of travel. From Quebec City, explore the East Coast Canada in luxurious comfort, stopping at Mykonos, Athens, Malta, Santorini where every port offers a new chapter.",
    rating: 4.9,
    tags: ["adventure","fall-cruise"]
  },
  {
    basePrice: 2303,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
  }
],
      description: "Let this mythic voyage redefine your idea of travel. From Quebec City, explore the East Coast Canada in luxurious comfort, stopping at Barcelona, Malta where every port offers a new chapter.",
      distance: "847 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Victoria Foster",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "majestic.escape.of.t@velarivoyages.com",
          contactNumber: "+1-622-179-5121"
        }
      }
    ],
    title: "Majestic Escape of the Walled Wonder",
    description: "Let this mythic voyage redefine your idea of travel. From Quebec City, explore the East Coast Canada in luxurious comfort, stopping at Barcelona, Malta where every port offers a new chapter.",
    rating: 4.6,
    tags: ["short-getaway","long-distance"]
  },
  {
    basePrice: 9518,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
  },
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Begin an epic escape from Quebec City, where the seas meet culture. Visit the remarkable ports of Dubrovnik, Athens, Santorini while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1284 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Santorini to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Kinsley Marshall",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "whispering.sanctuary@velarivoyages.com",
          contactNumber: "+1-113-655-3366"
        }
      }
    ],
    title: "Whispering Sanctuary of the Walled Wonder",
    description: "Begin an epic escape from Quebec City, where the seas meet culture. Visit the remarkable ports of Dubrovnik, Athens, Santorini while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.3,
    tags: ["fall-cruise","themed-cruise","adventure"]
  },
  {
    basePrice: 3298,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
  }
],
      description: "Experience the elegance of the seas on this forbidden reverie through East Coast Canada, starting from the illustrious port of Quebec City. From Barcelona, Rome, Athens to Mykonos, each destination offers its own story, culture, and breathtaking views.",
      distance: "532 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Athens to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Barcelona"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Katherine Henderson",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/92.jpg",
        contact: {
          contactEmail: "opulent.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-786-583-9136"
        }
      }
    ],
    title: "Opulent Retreat of the Maple Coast",
    description: "Experience the elegance of the seas on this forbidden reverie through East Coast Canada, starting from the illustrious port of Quebec City. From Barcelona, Rome, Athens to Mykonos, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.4,
    tags: ["themed-cruise","tropical","family-friendly"]
  },
  {
    basePrice: 9423,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Start in the vibrant city of Quebec City and venture into the iconic East Coast Canada. Discover authentic local cultures, cuisine, and coastal wonders in Athens, Santorini, Rome, Mykonos.",
      distance: "741 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
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
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Claire Keller",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "whispering.escape.of@velarivoyages.com",
          contactNumber: "+1-544-101-7852"
        }
      }
    ],
    title: "Whispering Escape of the Walled Wonder",
    description: "Start in the vibrant city of Quebec City and venture into the iconic East Coast Canada. Discover authentic local cultures, cuisine, and coastal wonders in Athens, Santorini, Rome, Mykonos.",
    rating: 4.9,
    tags: ["seasonal","romantic"]
  },
  {
    basePrice: 8087,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This retreat takes you beyond the ordinary, starting in Quebec City. With breathtaking stops in Dubrovnik, Mykonos, Athens, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "718 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Ashley Holloway",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "eternal.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-927-258-9374"
        }
      }
    ],
    title: "Eternal Odyssey of the French-Canadian Crown",
    description: "This retreat takes you beyond the ordinary, starting in Quebec City. With breathtaking stops in Dubrovnik, Mykonos, Athens, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.8,
    tags: ["seasonal"]
  },
  {
    basePrice: 2941,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "Sail from Quebec City into a world of wonder. The East Coast Canada beckons with unforgettable ports like Athens, Rome, Barcelona, where every view is picture-perfect and every moment is priceless.",
      distance: "758 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Rome to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Anna Harper",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "secret.retreat.of.th@velarivoyages.com",
          contactNumber: "+1-281-701-3053"
        }
      }
    ],
    title: "Secret Retreat of the Harbor Havens",
    description: "Sail from Quebec City into a world of wonder. The East Coast Canada beckons with unforgettable ports like Athens, Rome, Barcelona, where every view is picture-perfect and every moment is priceless.",
    rating: 4.9,
    tags: ["sightseeing"]
  },
  {
    basePrice: 4431,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
      description: "Embark from Quebec City and traverse the East Coast Canada in style. Whether it’s the energy of Santorini or the calm of Barcelona, each destination reveals a new side of paradise.",
      distance: "1104 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Santorini to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Laura Crawford",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/50.jpg",
        contact: {
          contactEmail: "opulent.discovery.of@velarivoyages.com",
          contactNumber: "+1-795-483-1972"
        }
      }
    ],
    title: "Opulent Discovery of the French-Canadian Crown",
    description: "Embark from Quebec City and traverse the East Coast Canada in style. Whether it’s the energy of Santorini or the calm of Barcelona, each destination reveals a new side of paradise.",
    rating: 4.0,
    tags: ["exclusive","long-distance"]
  },
  {
    basePrice: 7918,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
      description: "Escape to sea from Quebec City on a whispering voyage exploring the magic of East Coast Canada. Visit unforgettable locales like Malta, Rome, where each stop inspires awe.",
      distance: "1468 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Malta to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Malta"
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
        name: "Madelyn Price",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/85.jpg",
        contact: {
          contactEmail: "eternal.quest.of.the@velarivoyages.com",
          contactNumber: "+1-890-421-4075"
        }
      }
    ],
    title: "Eternal Quest of the French-Canadian Crown",
    description: "Escape to sea from Quebec City on a whispering voyage exploring the magic of East Coast Canada. Visit unforgettable locales like Malta, Rome, where each stop inspires awe.",
    rating: 4.3,
    tags: ["short-getaway","sightseeing","romantic"]
  },
  {
    basePrice: 7872,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Your journey through the East Coast Canada begins in Quebec City, where elegance meets adventure. Explore the shores of Santorini, Athens, Barcelona, Dubrovnik, with curated excursions and luxurious onboard amenities.",
      distance: "780 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Athens to Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jennifer Parker",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "extraordinary.odysse@velarivoyages.com",
          contactNumber: "+1-881-908-3513"
        }
      }
    ],
    title: "Extraordinary Odyssey of the Walled Wonder",
    description: "Your journey through the East Coast Canada begins in Quebec City, where elegance meets adventure. Explore the shores of Santorini, Athens, Barcelona, Dubrovnik, with curated excursions and luxurious onboard amenities.",
    rating: 4.4,
    tags: ["family-friendly","exclusive"]
  },
  {
    basePrice: 6048,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Let this mythic voyage redefine your idea of travel. From Quebec City, explore the East Coast Canada in luxurious comfort, stopping at Dubrovnik, Malta, Barcelona, Santorini where every port offers a new chapter.",
      distance: "1172 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Malta to Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Sailing from Santorini to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Elena Murray",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "mythic.retreat.of.th@velarivoyages.com",
          contactNumber: "+1-676-458-4593"
        }
      }
    ],
    title: "Mythic Retreat of the Walled Wonder",
    description: "Let this mythic voyage redefine your idea of travel. From Quebec City, explore the East Coast Canada in luxurious comfort, stopping at Dubrovnik, Malta, Barcelona, Santorini where every port offers a new chapter.",
    rating: 4.7,
    tags: ["adventure"]
  },
  {
    basePrice: 2883,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Depart from iconic Quebec City and traverse the East Coast Canada with visits to Malta, Athens, Mykonos. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "612 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Athens to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Maya Griffin",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "majestic.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-668-928-9583"
        }
      }
    ],
    title: "Majestic Sojourn of the Walled Wonder",
    description: "Depart from iconic Quebec City and traverse the East Coast Canada with visits to Malta, Athens, Mykonos. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.1,
    tags: ["long-distance"]
  },
  {
    basePrice: 7678,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
      description: "Depart from Quebec City on this thoughtfully designed odyssey across the East Coast Canada. Savor coastal charm, cultural treasures, and ocean views with stops at Santorini, Mykonos, Athens, Malta.",
      distance: "794 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Santorini to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
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
        name: "Avery Watson",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "extraordinary.realm.@velarivoyages.com",
          contactNumber: "+1-246-245-6888"
        }
      }
    ],
    title: "Extraordinary Realm of the French-Canadian Crown",
    description: "Depart from Quebec City on this thoughtfully designed odyssey across the East Coast Canada. Savor coastal charm, cultural treasures, and ocean views with stops at Santorini, Mykonos, Athens, Malta.",
    rating: 4.8,
    tags: ["themed-cruise","luxury"]
  },
  {
    basePrice: 5659,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set sail from historic Quebec City for a modern escape into the East Coast Canada. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Rome, Barcelona, Dubrovnik.",
      distance: "929 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Rome to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
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
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Scarlett Gibson",
        role: "Accommodation Manager",
        languages: ["Swahili","Marathi","Mandarin"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "celestial.adventure.@velarivoyages.com",
          contactNumber: "+1-796-728-9224"
        }
      }
    ],
    title: "Celestial Adventure of the French-Canadian Crown",
    description: "Set sail from historic Quebec City for a modern escape into the East Coast Canada. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Rome, Barcelona, Dubrovnik.",
    rating: 4.9,
    tags: ["exclusive","adventure","VIP"]
  },
  {
    basePrice: 2883,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
      description: "Begin an epic requiem from Quebec City, where the seas meet culture. Visit the remarkable ports of Rome, Malta, Mykonos, Santorini while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "938 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Malta to Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
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
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Roger Ellis",
        role: "Cruise Director",
        languages: ["English","Malayalam","Kannada"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "whispering.saga.of.t@velarivoyages.com",
          contactNumber: "+1-632-986-1520"
        }
      }
    ],
    title: "Whispering Saga of the French-Canadian Crown",
    description: "Begin an epic requiem from Quebec City, where the seas meet culture. Visit the remarkable ports of Rome, Malta, Mykonos, Santorini while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.7,
    tags: ["VIP"]
  },
  {
    basePrice: 8482,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Savor each moment of this legendary escape through East Coast Canada, starting in Quebec City. Visit renowned locations like Malta, Barcelona, Rome, Mykonos, where adventure and relaxation intertwine.",
      distance: "1165 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Malta to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
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
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Rome"
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
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Vincent Hall",
        role: "Cruise Director",
        languages: ["English","Malayalam","Kannada"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "whispering.passage.o@velarivoyages.com",
          contactNumber: "+1-162-166-7924"
        }
      }
    ],
    title: "Whispering Passage of the French-Canadian Crown",
    description: "Savor each moment of this legendary escape through East Coast Canada, starting in Quebec City. Visit renowned locations like Malta, Barcelona, Rome, Mykonos, where adventure and relaxation intertwine.",
    rating: 4.6,
    tags: ["sightseeing"]
  },
  {
    basePrice: 4286,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "From the lively departure port of Quebec City, this curated quest showcases the finest of East Coast Canada. With visits to Dubrovnik, Barcelona, Mykonos, Athens, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1316 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
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
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
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
        name: "Gabriel Graham",
        role: "Cruise Director",
        languages: ["English","Malayalam","Kannada"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "velvet.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-977-351-4717"
        }
      }
    ],
    title: "Velvet Odyssey of the Walled Wonder",
    description: "From the lively departure port of Quebec City, this curated quest showcases the finest of East Coast Canada. With visits to Dubrovnik, Barcelona, Mykonos, Athens, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.2,
    tags: ["family-friendly","romantic","adventure"]
  },
  {
    basePrice: 4878,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
      description: "Depart Quebec City on a relaxing saga through the East Coast Canada region. Highlights include the stunning coastlines of Santorini, Mykonos, all while enjoying first-class amenities on board.",
      distance: "1240 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Santorini to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
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
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Scott Douglas",
        role: "Cruise Director",
        languages: ["English","Malayalam","Kannada"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "spectacular.passage.@velarivoyages.com",
          contactNumber: "+1-171-861-3257"
        }
      }
    ],
    title: "Spectacular Passage of the French-Canadian Crown",
    description: "Depart Quebec City on a relaxing saga through the East Coast Canada region. Highlights include the stunning coastlines of Santorini, Mykonos, all while enjoying first-class amenities on board.",
    rating: 4.1,
    tags: ["relaxation"]
  },
  {
    basePrice: 9200,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Step into a world of elegance and exploration from Quebec City. This odyssey through the East Coast Canada unveils stunning stops including Dubrovnik, Malta, Mykonos, all with first-class service.",
      distance: "650 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Malta to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Dennis Graham",
        role: "Cruise Director",
        languages: ["English","Malayalam","Kannada"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "extraordinary.retrea@velarivoyages.com",
          contactNumber: "+1-118-634-9192"
        }
      }
    ],
    title: "Extraordinary Retreat of the Walled Wonder",
    description: "Step into a world of elegance and exploration from Quebec City. This odyssey through the East Coast Canada unveils stunning stops including Dubrovnik, Malta, Mykonos, all with first-class service.",
    rating: 4.9,
    tags: ["relaxation"]
  }
];
