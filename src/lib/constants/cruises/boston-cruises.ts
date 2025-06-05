import { Cruise } from "@/lib/interfaces/services/cruises";

export const bostonCruises: Cruise[] = [
{
    basePrice: 2768,
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "From bustling Boston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Barcelona, Mykonos deliver a balanced blend of culture and comfort.",
      distance: "1126 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Boston"
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
    "description": "Exploring Barcelona"
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
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Amy Stewart",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "majestic.reverie.of.@velarivoyages.com",
          contactNumber: "+1-579-259-4080"
        }
      }
    ],
    title: "Majestic Reverie of the Harbor of History",
    description: "From bustling Boston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Barcelona, Mykonos deliver a balanced blend of culture and comfort.",
    rating: 4.7,
    tags: ["cruise-vacation","relaxation"]
  },
  {
    basePrice: 1683,
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Start in the vibrant city of Boston and venture into the iconic East Coast USA. Discover authentic local cultures, cuisine, and coastal wonders in Malta, Athens, Barcelona, Rome.",
      distance: "528 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Malta"
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
    "description": "Sailing from Athens to Barcelona"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Rome"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
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
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Maya Gibson",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "spectacular.whisper.@velarivoyages.com",
          contactNumber: "+1-599-234-9940"
        }
      }
    ],
    title: "Spectacular Whisper of the Colonial Shores",
    description: "Start in the vibrant city of Boston and venture into the iconic East Coast USA. Discover authentic local cultures, cuisine, and coastal wonders in Malta, Athens, Barcelona, Rome.",
    rating: 4.7,
    tags: ["VIP","sightseeing","anniversary-cruise"]
  },
  {
    basePrice: 1748,
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "From bustling Boston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Mykonos, Barcelona, Malta deliver a balanced blend of culture and comfort.",
      distance: "1160 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Malta to Boston"
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
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Riley Payne",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "unforgettable.mythos@velarivoyages.com",
          contactNumber: "+1-890-700-3866"
        }
      }
    ],
    title: "Unforgettable Mythos of the Colonial Gateway",
    description: "From bustling Boston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Mykonos, Barcelona, Malta deliver a balanced blend of culture and comfort.",
    rating: 4.2,
    tags: ["tropical"]
  },
  {
    basePrice: 3788,
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Depart from the iconic port of Boston and sail through the enchanting East Coast USA. Explore vibrant destinations like Dubrovnik, Mykonos, each offering its own unique charm and local flair.",
      distance: "587 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Boston"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Linda Sutton",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "majestic.tranquility@velarivoyages.com",
          contactNumber: "+1-454-864-9298"
        }
      }
    ],
    title: "Majestic Tranquility of the Freedom’s Harbor",
    description: "Depart from the iconic port of Boston and sail through the enchanting East Coast USA. Explore vibrant destinations like Dubrovnik, Mykonos, each offering its own unique charm and local flair.",
    rating: 4.5,
    tags: ["general","VIP"]
  },
  {
    basePrice: 4328,
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
  "city": "Dubrovnik",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
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
      description: "Sail away from Boston into the beautiful expanse of East Coast USA. Along the way, enjoy rich cultural experiences in Mykonos, Barcelona, Santorini, Dubrovnik, where history, nature, and cuisine collide.",
      distance: "612 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Boston to Mykonos"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Santorini to Dubrovnik"
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
    "description": "Exploring Mykonos"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Isabella Hamilton",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
        contact: {
          contactEmail: "immersive.mystique.o@velarivoyages.com",
          contactNumber: "+1-634-440-2218"
        }
      }
    ],
    title: "Immersive Mystique of the Colonial Gateway",
    description: "Sail away from Boston into the beautiful expanse of East Coast USA. Along the way, enjoy rich cultural experiences in Mykonos, Barcelona, Santorini, Dubrovnik, where history, nature, and cuisine collide.",
    rating: 4.1,
    tags: ["cruise-ship","luxury","anniversary-cruise"]
  },
  {
    basePrice: 8482,
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Set sail from historic Boston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Rome, Barcelona.",
      distance: "916 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Boston to Rome"
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
    "description": "Sailing from Barcelona to Boston"
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
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Chloe Holloway",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "forbidden.resonance.@velarivoyages.com",
          contactNumber: "+1-875-217-8815"
        }
      }
    ],
    title: "Forbidden Resonance of the Freedom’s Harbor",
    description: "Set sail from historic Boston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Rome, Barcelona.",
    rating: 4.1,
    tags: ["wildlife"]
  },
  {
    basePrice: 7976,
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
      description: "Begin a captivating pulse through the East Coast USA, departing Boston. With visits to Malta, Athens, Mykonos, each day brings a new adventure and deeper connection to the region.",
      distance: "916 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Malta to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Grant",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/73.jpg",
        contact: {
          contactEmail: "panoramic.sanctum.of@velarivoyages.com",
          contactNumber: "+1-632-161-7192"
        }
      }
    ],
    title: "Panoramic Sanctum of the Lantern-Lit Legacy",
    description: "Begin a captivating pulse through the East Coast USA, departing Boston. With visits to Malta, Athens, Mykonos, each day brings a new adventure and deeper connection to the region.",
    rating: 4.8,
    tags: ["cruise-vacation","cruise-experience"]
  },
  {
    basePrice: 7401,
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Sail into splendor from Boston on a immersive voyage through East Coast USA. Let each stop—from Rome to Athens—reveal the unique flavors and colors of the region.",
      distance: "1468 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Boston to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Athens to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Boston"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
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
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Mykonos"
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
        name: "Scarlett Mitchell",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "harmonic.escape.of.t@velarivoyages.com",
          contactNumber: "+1-139-323-3055"
        }
      }
    ],
    title: "Harmonic Escape of the Lantern-Lit Legacy",
    description: "Sail into splendor from Boston on a immersive voyage through East Coast USA. Let each stop—from Rome to Athens—reveal the unique flavors and colors of the region.",
    rating: 4.2,
    tags: ["cruise-holiday","long-distance","fall-cruise"]
  },
  {
    basePrice: 2924,
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
  "city": "Mykonos",
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
  }
],
      description: "Unwind and explore on this horizon through East Coast USA, departing from Boston. With every stop—from Rome to Mykonos—you’ll collect memories that last a lifetime.",
      distance: "836 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Rome"
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
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joan Warren",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "crystalline.eclipse.@velarivoyages.com",
          contactNumber: "+1-511-309-6764"
        }
      }
    ],
    title: "Crystalline Eclipse of the Harbor-Lit Evenings",
    description: "Unwind and explore on this horizon through East Coast USA, departing from Boston. With every stop—from Rome to Mykonos—you’ll collect memories that last a lifetime.",
    rating: 5.0,
    tags: ["cruise-journey","cruise-adventure"]
  },
  {
    basePrice: 2583,
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
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
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin your tranquility in Boston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Malta, Dubrovnik, Mykonos and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "679 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Boston to Malta"
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
    "description": "Sailing from Dubrovnik to Mykonos"
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
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mary Campbell",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/49.jpg",
        contact: {
          contactEmail: "majestic.tranquility@velarivoyages.com",
          contactNumber: "+1-308-237-9630"
        }
      }
    ],
    title: "Majestic Tranquility of the Lantern-Lit Legacy",
    description: "Begin your tranquility in Boston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Malta, Dubrovnik, Mykonos and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.5,
    tags: ["cruise-vacation"]
  },
  {
    basePrice: 3180,
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Set off on a haven from Boston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Malta, Barcelona.",
      distance: "1078 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Boston"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Priya Coleman",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "charming.reunion.of.@velarivoyages.com",
          contactNumber: "+1-112-602-4457"
        }
      }
    ],
    title: "Charming Reunion of the Winds of Revolution",
    description: "Set off on a haven from Boston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Malta, Barcelona.",
    rating: 4.8,
    tags: ["cruise-line","adventure","family-friendly"]
  },
  {
    basePrice: 4792,
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
      description: "Enjoy seamless luxury on this lavish voyage beginning in Boston. Visit breathtaking East Coast USA locales such as Barcelona, Rome on this unforgettable itinerary.",
      distance: "998 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Rome"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Keller",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "starlit.enigma.of.th@velarivoyages.com",
          contactNumber: "+1-860-364-2728"
        }
      }
    ],
    title: "Starlit Enigma of the Lantern-Lit Legacy",
    description: "Enjoy seamless luxury on this lavish voyage beginning in Boston. Visit breathtaking East Coast USA locales such as Barcelona, Rome on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["luxury","cultural"]
  },
  {
    basePrice: 4101,
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Your haven begins in Boston, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Santorini to the historic streets of Athens, each stop in the East Coast USA will leave a lasting impression.",
      distance: "1038 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Malta to Boston"
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
    "description": "Exploring Santorini"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Sarah Douglas",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "aweinspiring.saga.of@velarivoyages.com",
          contactNumber: "+1-195-976-9393"
        }
      }
    ],
    title: "Awe-Inspiring Saga of the Colonial Gateway",
    description: "Your haven begins in Boston, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Santorini to the historic streets of Athens, each stop in the East Coast USA will leave a lasting impression.",
    rating: 4.9,
    tags: ["relaxation","historical","anniversary-cruise"]
  },
  {
    basePrice: 3574,
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
    isPopular: true, // Make fewer cruises "popular"
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "This drift takes you beyond the ordinary, starting in Boston. With breathtaking stops in Dubrovnik, Malta, Santorini, Barcelona, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1377 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Dubrovnik"
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
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Santorini to Barcelona"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Boston"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Hawkins",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "exquisite.escape.of.@velarivoyages.com",
          contactNumber: "+1-561-920-5421"
        }
      }
    ],
    title: "Exquisite Escape of the Freedom’s Harbor",
    description: "This drift takes you beyond the ordinary, starting in Boston. With breathtaking stops in Dubrovnik, Malta, Santorini, Barcelona, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.9,
    tags: ["cultural"]
  },
  {
    basePrice: 7811,
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Set sail from Boston on this immersive sanctuary through the heart of East Coast USA. Experience the perfect blend of relaxation and adventure as you explore Malta and Dubrovnik and Santorini, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "587 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Malta to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Santorini to Boston"
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
    "description": "Exploring Malta"
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
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Audrey Gibson",
        role: "Travel Advisor",
        languages: ["Punjabi","Russian"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "verdant.awakening.of@velarivoyages.com",
          contactNumber: "+1-591-782-7288"
        }
      }
    ],
    title: "Verdant Awakening of the Revolutionary Port",
    description: "Set sail from Boston on this immersive sanctuary through the heart of East Coast USA. Experience the perfect blend of relaxation and adventure as you explore Malta and Dubrovnik and Santorini, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.1,
    tags: ["exclusive","cruise"]
  },
  {
    basePrice: 6791,
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
  "city": "Malta",
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
      description: "Embark on an unforgettable mirage from the vibrant port of Boston, where you'll discover hidden gems and iconic landmarks across the East Coast USA region. With stops at Santorini, Athens, Malta, this journey combines cultural immersion with breathtaking scenery.",
      distance: "524 nautical miles",
      totalDuration: "10 days",
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
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thabo Harper",
        role: "Cruise Specialist",
        languages: ["Czech"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "extraordinary.oasis.@velarivoyages.com",
          contactNumber: "+1-311-824-7673"
        }
      }
    ],
    title: "Extraordinary Oasis of the Revolutionary Port",
    description: "Embark on an unforgettable mirage from the vibrant port of Boston, where you'll discover hidden gems and iconic landmarks across the East Coast USA region. With stops at Santorini, Athens, Malta, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.8,
    tags: ["wildlife","cruise-experience","cruise-getaway"]
  },
  {
    basePrice: 8472,
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This handpicked pulse begins in Boston and travels through East Coast USA's iconic waterscapes. Discover Athens, Santorini, Dubrovnik, Malta as each day brings new stories and every night offers elegant repose.",
      distance: "896 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Boston to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
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
    "description": "Exploring Athens"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Terry Collins",
        role: "Cruise Specialist",
        languages: ["Czech"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "mystical.legacy.of.t@velarivoyages.com",
          contactNumber: "+1-290-311-6184"
        }
      }
    ],
    title: "Mystical Legacy of the Colonial Gateway",
    description: "This handpicked pulse begins in Boston and travels through East Coast USA's iconic waterscapes. Discover Athens, Santorini, Dubrovnik, Malta as each day brings new stories and every night offers elegant repose.",
    rating: 4.0,
    tags: ["sightseeing"]
  },
  {
    basePrice: 1154,
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
  "city": "Malta",
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
      description: "Set sail from historic Boston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Barcelona, Dubrovnik, Malta.",
      distance: "1229 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Dubrovnik"
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
    "description": "Exploring Boston"
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
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Morgan",
        role: "Cruise Specialist",
        languages: ["Czech"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "extraordinary.panora@velarivoyages.com",
          contactNumber: "+1-823-302-1997"
        }
      }
    ],
    title: "Extraordinary Panorama of the Colonial Gateway",
    description: "Set sail from historic Boston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Barcelona, Dubrovnik, Malta.",
    rating: 4.7,
    tags: ["luxury"]
  },
  {
    basePrice: 3514,
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
    isPopular: true, // Make fewer cruises "popular"
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Begin your mythos in Boston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Dubrovnik, Mykonos, Santorini, Malta and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1206 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Santorini to Malta"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Malta to Boston"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Santorini"
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
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Matthew Porter",
        role: "Cruise Specialist",
        languages: ["Czech"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "refined.panorama.of.@velarivoyages.com",
          contactNumber: "+1-714-122-9331"
        }
      }
    ],
    title: "Refined Panorama of the Lantern-Lit Legacy",
    description: "Begin your mythos in Boston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Dubrovnik, Mykonos, Santorini, Malta and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.2,
    tags: ["VIP","seasonal"]
  },
  {
    basePrice: 2055,
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
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
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
      description: "Set sail from historic Boston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Mykonos, Malta, Santorini, Athens.",
      distance: "520 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Boston to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
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
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
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
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Owen Payne",
        role: "Cruise Specialist",
        languages: ["Czech"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "whispering.pulse.of.@velarivoyages.com",
          contactNumber: "+1-782-776-2633"
        }
      }
    ],
    title: "Whispering Pulse of the Cradle of Resistance",
    description: "Set sail from historic Boston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Mykonos, Malta, Santorini, Athens.",
    rating: 4.3,
    tags: ["adventure","cruise-getaway"]
  },
  {
    basePrice: 9705,
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
    isPopular: true, // Make fewer cruises "popular"
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
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Sail away from Boston into the beautiful expanse of East Coast USA. Along the way, enjoy rich cultural experiences in Barcelona, Santorini, Athens, where history, nature, and cuisine collide.",
      distance: "673 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
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
    "end": "Day 5",
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
    "description": "Exploring Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elijah Curtis",
        role: "Cruise Specialist",
        languages: ["Czech"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "starlit.lullaby.of.t@velarivoyages.com",
          contactNumber: "+1-139-519-1486"
        }
      }
    ],
    title: "Starlit Lullaby of the Founding Footsteps",
    description: "Sail away from Boston into the beautiful expanse of East Coast USA. Along the way, enjoy rich cultural experiences in Barcelona, Santorini, Athens, where history, nature, and cuisine collide.",
    rating: 4.0,
    tags: ["cruise-getaway","culinary"]
  },
  {
    basePrice: 6055,
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
  "city": "Venice",
  "country": "Italy",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
      description: "Experience coastal elegance on this odyssey from Boston, where the journey through East Coast USA includes stops in Dubrovnik, Athens, Milan, Venice, each more enchanting than the last.",
      distance: "1128 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Boston to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Athens to Milan"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Milan to Venice"
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
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Milan"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Amanda Collins",
        role: "Loyalty Program Representative",
        languages: ["Dutch","Zulu"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/92.jpg",
        contact: {
          contactEmail: "midnight.tranquility@velarivoyages.com",
          contactNumber: "+1-489-904-1985"
        }
      }
    ],
    title: "Midnight Tranquility of the Nautical Traditions",
    description: "Experience coastal elegance on this odyssey from Boston, where the journey through East Coast USA includes stops in Dubrovnik, Athens, Milan, Venice, each more enchanting than the last.",
    rating: 4.6,
    tags: ["tropical","wildlife","romantic"]
  },
  {
    basePrice: 7177,
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
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Launch into adventure from Boston and sail deep into the heart of the East Coast USA. With ports of call like Dubrovnik, Milan, Mykonos, Malta, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1261 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Milan"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Milan to Mykonos"
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
    "description": "Sailing from Malta to Boston"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Milan"
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
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alexa Lawson",
        role: "Loyalty Program Representative",
        languages: ["Dutch","Zulu"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/92.jpg",
        contact: {
          contactEmail: "tidewashed.infinite.@velarivoyages.com",
          contactNumber: "+1-726-838-3922"
        }
      }
    ],
    title: "Tide-Washed Infinite of the Revolutionary Port",
    description: "Launch into adventure from Boston and sail deep into the heart of the East Coast USA. With ports of call like Dubrovnik, Milan, Mykonos, Malta, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.6,
    tags: ["weekend-cruise","cruise-vacation"]
  },
  {
    basePrice: 8283,
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
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Boston",
    "country": "United States",
    "region": "East Coast USA",
    "coordinates": {
      "latitude": 42.361145,
      "longitude": -71.057083
    }
  }
],
      description: "Savor each moment of this luminous escape through East Coast USA, starting in Boston. Visit renowned locations like Santorini, Venice, where adventure and relaxation intertwine.",
      distance: "595 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Santorini"
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
    "description": "Sailing from Venice to Boston"
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
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Maya Grant",
        role: "Loyalty Program Representative",
        languages: ["Dutch","Zulu"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "infinite.voyage.of.t@velarivoyages.com",
          contactNumber: "+1-698-413-2421"
        }
      }
    ],
    title: "Infinite Voyage of the Colonial Gateway",
    description: "Savor each moment of this luminous escape through East Coast USA, starting in Boston. Visit renowned locations like Santorini, Venice, where adventure and relaxation intertwine.",
    rating: 4.4,
    tags: ["wellness"]
  },
  {
    basePrice: 8129,
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
      description: "Escape the everyday with this riveting journey through East Coast USA, departing from Boston. You'll visit Milan, Mykonos, Barcelona, where every stop is a new adventure.",
      distance: "582 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Milan to Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Boston"
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
    "description": "Exploring Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Mykonos"
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
    "description": "Exploring Boston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Charlotte Hall",
        role: "Loyalty Program Representative",
        languages: ["Dutch","Zulu"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "celestial.panorama.o@velarivoyages.com",
          contactNumber: "+1-953-947-2991"
        }
      }
    ],
    title: "Celestial Panorama of the Nautical Traditions",
    description: "Escape the everyday with this riveting journey through East Coast USA, departing from Boston. You'll visit Milan, Mykonos, Barcelona, where every stop is a new adventure.",
    rating: 4.4,
    tags: ["general"]
  },
  {
    basePrice: 8419,
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Join us in Boston for a exploration of a lifetime. Sail across the serene waters of East Coast USA, stopping at ports like Dubrovnik, Venice where timeless traditions meet modern luxuries.",
      distance: "1483 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Boston to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Venice"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Lily Mason",
        role: "Loyalty Program Representative",
        languages: ["Dutch","Zulu"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "dreamlike.enigma.of.@velarivoyages.com",
          contactNumber: "+1-630-890-2159"
        }
      }
    ],
    title: "Dreamlike Enigma of the Lantern-Lit Legacy",
    description: "Join us in Boston for a exploration of a lifetime. Sail across the serene waters of East Coast USA, stopping at ports like Dubrovnik, Venice where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["themed-cruise","luxury","anniversary-cruise"]
  }
];
