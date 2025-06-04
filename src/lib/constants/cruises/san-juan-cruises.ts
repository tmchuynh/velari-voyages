import { Cruise } from "@/lib/interfaces/services/cruises";

export const sanJuanCruises: Cruise[] = [
  {
    basePrice: 8337,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "Nassau",
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
      description: "Leave ordinary behind as you sail from San Juan across the captivating Caribbean. Discover the distinctive personality of each destination, from Roatán, St. Thomas, Nassau, George Town.",
      distance: "1344 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Juan to Roatán"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Roatán to St. Thomas"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Nassau"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Nassau to George Town"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring George Town"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Susan Wells",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "crystalline.sojourn.@velarivoyages.com",
          contactNumber: "+1-653-479-5714"
        }
      }
    ],
    title: "Crystalline Sojourn of the Colorful Coastline",
    description: "Leave ordinary behind as you sail from San Juan across the captivating Caribbean. Discover the distinctive personality of each destination, from Roatán, St. Thomas, Nassau, George Town.",
    rating: 4.1,
    tags: ["luxury","exclusive","family-friendly"]
  },
  {
    basePrice: 4979,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
    }
  }
],
      description: "Join us in San Juan for a odyssey of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like St. Thomas, Nassau where timeless traditions meet modern luxuries.",
      distance: "1281 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Juan to St. Thomas"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Nassau"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Nassau to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Nancy Russell",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "hidden.retreat.of.th@velarivoyages.com",
          contactNumber: "+1-288-536-4775"
        }
      }
    ],
    title: "Hidden Retreat of the Colorful Coastline",
    description: "Join us in San Juan for a odyssey of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like St. Thomas, Nassau where timeless traditions meet modern luxuries.",
    rating: 4.3,
    tags: ["tropical","family-friendly","fall-cruise"]
  },
  {
    basePrice: 4812,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
      description: "Your escape begins in San Juan, where every sunset on the Caribbean horizon promises another day of discovery—from St. Thomas, Cozumel, Roatán to hidden ports of charm.",
      distance: "873 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Juan to St. Thomas"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Cozumel"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Cozumel to Roatán"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Roatán"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Kimberly Graves",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "mythic.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-387-820-8981"
        }
      }
    ],
    title: "Mythic Sojourn of the Sapphire Waters",
    description: "Your escape begins in San Juan, where every sunset on the Caribbean horizon promises another day of discovery—from St. Thomas, Cozumel, Roatán to hidden ports of charm.",
    rating: 4.0,
    tags: ["themed-cruise","VIP","sightseeing"]
  },
  {
    basePrice: 4898,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
    }
  }
],
      description: "Depart from San Juan on this thoughtfully designed tide across the Caribbean. Savor coastal charm, cultural treasures, and ocean views with stops at Cozumel, St. Thomas, Roatán.",
      distance: "887 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Juan to Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Cozumel to St. Thomas"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Roatán"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Roatán to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adeline Palmer",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "majestic.retreat.of.@velarivoyages.com",
          contactNumber: "+1-531-574-7811"
        }
      }
    ],
    title: "Majestic Retreat of the Spanish Caribbean Jewel",
    description: "Depart from San Juan on this thoughtfully designed tide across the Caribbean. Savor coastal charm, cultural treasures, and ocean views with stops at Cozumel, St. Thomas, Roatán.",
    rating: 4.1,
    tags: ["romantic","tropical","exclusive"]
  },
  {
    basePrice: 3553,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
    }
  }
],
      description: "Sail away from the charming harbor of San Juan on this secret journey across Caribbean. Uncover the beauty and history of George Town, Philipsburg with curated excursions, world-class cuisine, and exceptional service.",
      distance: "809 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Juan to George Town"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from George Town to Philipsburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Naomi Ellis",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "midnight.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-797-882-9979"
        }
      }
    ],
    title: "Midnight Odyssey of the Colorful Coastline",
    description: "Sail away from the charming harbor of San Juan on this secret journey across Caribbean. Uncover the beauty and history of George Town, Philipsburg with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.9,
    tags: ["adventure"]
  },
  {
    basePrice: 8235,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
    }
  }
],
      description: "Savor each moment of this hidden escape through Caribbean, starting in San Juan. Visit renowned locations like George Town, Nassau, where adventure and relaxation intertwine.",
      distance: "1100 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Juan to George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from George Town to Nassau"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Nassau to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jessica Porter",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "luxurious.journey.of@velarivoyages.com",
          contactNumber: "+1-832-177-4732"
        }
      }
    ],
    title: "Luxurious Journey of the Spanish Caribbean Jewel",
    description: "Savor each moment of this hidden escape through Caribbean, starting in San Juan. Visit renowned locations like George Town, Nassau, where adventure and relaxation intertwine.",
    rating: 4.1,
    tags: ["short-getaway","VIP","seasonal"]
  },
  {
    basePrice: 6770,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
      description: "Set sail from San Juan on this whispering sanctuary through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Roatán and Nassau, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1364 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Juan to Roatán"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Roatán to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Juan"
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
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Anna Harper",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "spectacular.retreat.@velarivoyages.com",
          contactNumber: "+1-947-684-6663"
        }
      }
    ],
    title: "Spectacular Retreat of the Sun-Kissed Archipelago",
    description: "Set sail from San Juan on this whispering sanctuary through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Roatán and Nassau, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.9,
    tags: ["adventure","family-friendly","tropical"]
  },
  {
    basePrice: 7076,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
  }
],
      description: "Let the winds of the Caribbean carry you from San Juan to the most stunning ports in the region. With destinations like George Town, Roatán, Cozumel, St. Thomas, this odyssey redefines luxury travel.",
      distance: "1117 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Juan to George Town"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from George Town to Roatán"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Roatán to Cozumel"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Cozumel to St. Thomas"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Roatán"
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
    "description": "Exploring St. Thomas"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Grace Morgan",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "opulent.requiem.of.t@velarivoyages.com",
          contactNumber: "+1-461-717-8688"
        }
      }
    ],
    title: "Opulent Requiem of the Spanish Caribbean Jewel",
    description: "Let the winds of the Caribbean carry you from San Juan to the most stunning ports in the region. With destinations like George Town, Roatán, Cozumel, St. Thomas, this odyssey redefines luxury travel.",
    rating: 4.8,
    tags: ["long-distance","family-friendly"]
  },
  {
    basePrice: 3849,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin a captivating excursion through the Caribbean, departing San Juan. With visits to St. Thomas, Cozumel, George Town, Roatán, each day brings a new adventure and deeper connection to the region.",
      distance: "866 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Juan to St. Thomas"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to Cozumel"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Cozumel to George Town"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from George Town to Roatán"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Roatán"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Hannah Henderson",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "golden.saga.of.the.t@velarivoyages.com",
          contactNumber: "+1-288-941-2573"
        }
      }
    ],
    title: "Golden Saga of the Tropical Isles",
    description: "Begin a captivating excursion through the Caribbean, departing San Juan. With visits to St. Thomas, Cozumel, George Town, Roatán, each day brings a new adventure and deeper connection to the region.",
    rating: 4.1,
    tags: ["romantic","sightseeing","themed-cruise"]
  },
  {
    basePrice: 5459,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
    }
  }
],
      description: "Embark from San Juan and traverse the Caribbean in style. Whether it’s the energy of Philipsburg or the calm of Cozumel, each destination reveals a new side of paradise.",
      distance: "1263 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Juan to Philipsburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Philipsburg to Cozumel"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Cozumel to St. Thomas"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Roatán"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Roatán to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Cozumel"
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
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Isabella Watson",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "spectacular.mirage.o@velarivoyages.com",
          contactNumber: "+1-979-343-4546"
        }
      }
    ],
    title: "Spectacular Mirage of the Spanish Caribbean Jewel",
    description: "Embark from San Juan and traverse the Caribbean in style. Whether it’s the energy of Philipsburg or the calm of Cozumel, each destination reveals a new side of paradise.",
    rating: 4.8,
    tags: ["fall-cruise","relaxation"]
  },
  {
    basePrice: 1914,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
  },
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
    }
  }
],
      description: "Your tide begins in San Juan, where every sunset on the Caribbean horizon promises another day of discovery—from Cozumel, Nassau to hidden ports of charm.",
      distance: "901 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Juan to Cozumel"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Nassau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Nassau to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Hall",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "mythic.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-999-672-1974"
        }
      }
    ],
    title: "Mythic Odyssey of the Spanish Caribbean Jewel",
    description: "Your tide begins in San Juan, where every sunset on the Caribbean horizon promises another day of discovery—from Cozumel, Nassau to hidden ports of charm.",
    rating: 4.5,
    tags: ["seasonal","short-getaway","family-friendly"]
  },
  {
    basePrice: 4509,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Enjoy seamless luxury on this opulent odyssey beginning in San Juan. Visit breathtaking Caribbean locales such as Cozumel, St. Thomas, George Town on this unforgettable itinerary.",
      distance: "1362 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from San Juan to Cozumel"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Cozumel to St. Thomas"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to George Town"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring George Town"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sophia Jennings",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "mythic.journey.of.th@velarivoyages.com",
          contactNumber: "+1-877-426-6438"
        }
      }
    ],
    title: "Mythic Journey of the Sapphire Waters",
    description: "Enjoy seamless luxury on this opulent odyssey beginning in San Juan. Visit breathtaking Caribbean locales such as Cozumel, St. Thomas, George Town on this unforgettable itinerary.",
    rating: 4.5,
    tags: ["seasonal","exclusive"]
  },
  {
    basePrice: 1745,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
  }
],
      description: "Join us in San Juan for a reverie of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Cozumel, George Town where timeless traditions meet modern luxuries.",
      distance: "1093 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Juan to Cozumel"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Cozumel to George Town"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring George Town"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Victoria Hayes",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "eternal.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-140-399-2132"
        }
      }
    ],
    title: "Eternal Odyssey of the Colorful Coastline",
    description: "Join us in San Juan for a reverie of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Cozumel, George Town where timeless traditions meet modern luxuries.",
    rating: 4.9,
    tags: ["long-distance","luxury","relaxation"]
  },
  {
    basePrice: 7134,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
    }
  }
],
      description: "Embark from San Juan and traverse the Caribbean in style. Whether it’s the energy of Roatán or the calm of Nassau, each destination reveals a new side of paradise.",
      distance: "1485 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Juan to Roatán"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Roatán to Nassau"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Nassau to St. Thomas"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Layla Montgomery",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "majestic.expedition.@velarivoyages.com",
          contactNumber: "+1-364-830-6438"
        }
      }
    ],
    title: "Majestic Expedition of the Azure Horizons",
    description: "Embark from San Juan and traverse the Caribbean in style. Whether it’s the energy of Roatán or the calm of Nassau, each destination reveals a new side of paradise.",
    rating: 4.6,
    tags: ["family-friendly"]
  },
  {
    basePrice: 3593,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
  },
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
    }
  }
],
      description: "Set course from San Juan for an inspiring whispering journey across Caribbean. Whether exploring ancient ruins in George Town or soaking up coastal views in St. Thomas, every day offers a perfect mix of discovery and relaxation.",
      distance: "1286 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Juan to George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from George Town to St. Thomas"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to Cozumel"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Roatán"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Roatán to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Riley Reeves",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "legendary.quest.of.t@velarivoyages.com",
          contactNumber: "+1-531-690-9399"
        }
      }
    ],
    title: "Legendary Quest of the Colorful Coastline",
    description: "Set course from San Juan for an inspiring whispering journey across Caribbean. Whether exploring ancient ruins in George Town or soaking up coastal views in St. Thomas, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.1,
    tags: ["exclusive","tropical","VIP"]
  },
  {
    basePrice: 8712,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Escape to sea from San Juan on a opulent voyage exploring the magic of Caribbean. Visit unforgettable locales like St. Thomas, Roatán, where each stop inspires awe.",
      distance: "572 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Juan to St. Thomas"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to Roatán"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Roatán"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Kinsley Coleman",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "hidden.exploration.o@velarivoyages.com",
          contactNumber: "+1-704-165-6420"
        }
      }
    ],
    title: "Hidden Exploration of the Azure Horizons",
    description: "Escape to sea from San Juan on a opulent voyage exploring the magic of Caribbean. Visit unforgettable locales like St. Thomas, Roatán, where each stop inspires awe.",
    rating: 4.6,
    tags: ["sightseeing","luxury"]
  },
  {
    basePrice: 8266,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "George Town",
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
      description: "This extraordinary adventure begins in San Juan and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at Philipsburg, Roatán, George Town, Nassau.",
      distance: "588 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Juan to Philipsburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Philipsburg to Roatán"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Roatán to George Town"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from George Town to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Emma Clark",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "breathtaking.renaiss@velarivoyages.com",
          contactNumber: "+1-325-111-2902"
        }
      }
    ],
    title: "Breathtaking Renaissance of the Spanish Caribbean Jewel",
    description: "This extraordinary adventure begins in San Juan and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at Philipsburg, Roatán, George Town, Nassau.",
    rating: 4.9,
    tags: ["relaxation","seasonal","luxury"]
  },
  {
    basePrice: 1044,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
      description: "Join us in San Juan for a sojourn of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Cozumel, Nassau where timeless traditions meet modern luxuries.",
      distance: "980 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Juan to Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Amy Ellis",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "mythic.exploration.o@velarivoyages.com",
          contactNumber: "+1-367-177-3066"
        }
      }
    ],
    title: "Mythic Exploration of the Tropical Isles",
    description: "Join us in San Juan for a sojourn of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Cozumel, Nassau where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["exclusive","adventure","VIP"]
  },
  {
    basePrice: 7910,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "Cozumel",
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
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
  }
],
      description: "Escape the everyday with this breathtaking journey through Caribbean, departing from San Juan. You'll visit Philipsburg, Cozumel, where every stop is a new adventure.",
      distance: "521 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Juan to Philipsburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to Cozumel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
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
    "description": "Exploring Cozumel"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Allison Foster",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "captivating.reverie.@velarivoyages.com",
          contactNumber: "+1-779-538-3925"
        }
      }
    ],
    title: "Captivating Reverie of the Azure Horizons",
    description: "Escape the everyday with this breathtaking journey through Caribbean, departing from San Juan. You'll visit Philipsburg, Cozumel, where every stop is a new adventure.",
    rating: 4.8,
    tags: ["seasonal","romantic"]
  },
  {
    basePrice: 4405,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
    }
  }
],
      description: "Let the winds of the Caribbean carry you from San Juan to the most stunning ports in the region. With destinations like Nassau, Roatán, this sojourn redefines luxury travel.",
      distance: "855 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from San Juan to Nassau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Nassau to Roatán"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Roatán to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Linda Hamilton",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "breathtaking.escape.@velarivoyages.com",
          contactNumber: "+1-318-816-3102"
        }
      }
    ],
    title: "Breathtaking Escape of the Colorful Coastline",
    description: "Let the winds of the Caribbean carry you from San Juan to the most stunning ports in the region. With destinations like Nassau, Roatán, this sojourn redefines luxury travel.",
    rating: 4.6,
    tags: ["luxury","romantic","long-distance"]
  },
  {
    basePrice: 7632,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Your passage begins in San Juan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Nassau to the historic streets of Philipsburg, each stop in the Caribbean will leave a lasting impression.",
      distance: "969 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from San Juan to Nassau"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Nassau to Philipsburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to Roatán"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Roatán"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Lerato Dean",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "captivating.horizon.@velarivoyages.com",
          contactNumber: "+1-588-635-5852"
        }
      }
    ],
    title: "Captivating Horizon of the Tropical Isles",
    description: "Your passage begins in San Juan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Nassau to the historic streets of Philipsburg, each stop in the Caribbean will leave a lasting impression.",
    rating: 4.9,
    tags: ["exclusive","fall-cruise","relaxation"]
  },
  {
    basePrice: 6956,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Experience coastal elegance on this mirage from San Juan, where the journey through Caribbean includes stops in Nassau, Roatán, each more enchanting than the last.",
      distance: "1096 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Juan to Nassau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Nassau to Roatán"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Roatán"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sarah Watson",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "unforgettable.odysse@velarivoyages.com",
          contactNumber: "+1-537-536-2743"
        }
      }
    ],
    title: "Unforgettable Odyssey of the Spanish Caribbean Jewel",
    description: "Experience coastal elegance on this mirage from San Juan, where the journey through Caribbean includes stops in Nassau, Roatán, each more enchanting than the last.",
    rating: 4.2,
    tags: ["family-friendly"]
  },
  {
    basePrice: 8521,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
  }
],
      description: "Set sail from San Juan for a voyage like no other. From the picturesque landscapes of George Town to the lively ambiance of Philipsburg, this opulent cruise will redefine your view of Caribbean.",
      distance: "1222 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Juan to George Town"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from George Town to Philipsburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to St. Thomas"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Priya Jennings",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "opulent.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-509-223-7239"
        }
      }
    ],
    title: "Opulent Horizon of the Colorful Coastline",
    description: "Set sail from San Juan for a voyage like no other. From the picturesque landscapes of George Town to the lively ambiance of Philipsburg, this opulent cruise will redefine your view of Caribbean.",
    rating: 4.8,
    tags: ["luxury","short-getaway"]
  },
  {
    basePrice: 2594,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
    }
  }
],
      description: "Depart from iconic San Juan and traverse the Caribbean with visits to Philipsburg, Roatán. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1423 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Juan to Philipsburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to Roatán"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Roatán to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
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
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Mason",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "velvet.horizon.of.th@velarivoyages.com",
          contactNumber: "+1-706-569-2640"
        }
      }
    ],
    title: "Velvet Horizon of the Spanish Caribbean Jewel",
    description: "Depart from iconic San Juan and traverse the Caribbean with visits to Philipsburg, Roatán. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.2,
    tags: ["exclusive"]
  },
  {
    basePrice: 4199,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 18.4655,
    "longitude": -66.1057
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
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
    "city": "Philipsburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 18.4655,
      "longitude": -66.1057
    }
  }
],
      description: "Discover the wonders of Caribbean aboard this infinite cruise departing from San Juan. Journey through crystal waters to explore the treasures of George Town, Roatán, Philipsburg, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1330 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from San Juan to George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from George Town to Roatán"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Roatán to Philipsburg"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Brenda Graves",
        role: "Logistics Coordinator",
        languages: ["Korean","Tamil"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "luxurious.exploratio@velarivoyages.com",
          contactNumber: "+1-101-793-1956"
        }
      }
    ],
    title: "Luxurious Exploration of the Sun-Kissed Archipelago",
    description: "Discover the wonders of Caribbean aboard this infinite cruise departing from San Juan. Journey through crystal waters to explore the treasures of George Town, Roatán, Philipsburg, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.6,
    tags: ["seasonal","adventure","long-distance"]
  }
];
