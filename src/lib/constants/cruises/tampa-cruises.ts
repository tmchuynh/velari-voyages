import { Cruise } from "@/lib/interfaces/services/cruises";

export const tampaCruises: Cruise[] = [
{
    basePrice: 3025,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
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
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
      description: "Depart from the iconic port of Tampa and sail through the enchanting Caribbean. Explore vibrant destinations like George Town, Nassau, each offering its own unique charm and local flair.",
      distance: "601 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Tampa to George Town"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from George Town to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Harper Morgan",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "epic.renaissance.of.@velarivoyages.com",
          contactNumber: "+1-645-396-6233"
        }
      }
    ],
    title: "Epic Renaissance of the Golden Tide Rise",
    description: "Depart from the iconic port of Tampa and sail through the enchanting Caribbean. Explore vibrant destinations like George Town, Nassau, each offering its own unique charm and local flair.",
    rating: 4.7,
    tags: ["cruise-getaway","cruise-ship"]
  },
  {
    basePrice: 5104,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
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
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "Philipsburg",
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
      description: "This handpicked renaissance begins in Tampa and travels through Caribbean's iconic waterscapes. Discover Cozumel, Philipsburg, George Town as each day brings new stories and every night offers elegant repose.",
      distance: "1311 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Tampa to Cozumel"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Philipsburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to George Town"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring George Town"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Chloe Grant",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "lavish.realm.of.the.@velarivoyages.com",
          contactNumber: "+1-362-341-3109"
        }
      }
    ],
    title: "Lavish Realm of the Coral Sanctuaries",
    description: "This handpicked renaissance begins in Tampa and travels through Caribbean's iconic waterscapes. Discover Cozumel, Philipsburg, George Town as each day brings new stories and every night offers elegant repose.",
    rating: 4.3,
    tags: ["cruise-excursion"]
  },
  {
    basePrice: 8010,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  }
],
      description: "Depart from the iconic port of Tampa and sail through the enchanting Caribbean. Explore vibrant destinations like Philipsburg, Roatán, each offering its own unique charm and local flair.",
      distance: "1361 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Tampa to Philipsburg"
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
    "description": "Sailing from Roatán to Tampa"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
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
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Tampa"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Zola Gibson",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "verdant.whisper.of.t@velarivoyages.com",
          contactNumber: "+1-203-391-3631"
        }
      }
    ],
    title: "Verdant Whisper of the Sunshine Gateway",
    description: "Depart from the iconic port of Tampa and sail through the enchanting Caribbean. Explore vibrant destinations like Philipsburg, Roatán, each offering its own unique charm and local flair.",
    rating: 4.1,
    tags: ["romantic","glacier-cruise","anniversary-cruise"]
  },
  {
    basePrice: 6498,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
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
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
      description: "Let the waves lead you from Tampa on this tide-washed wanderlust. Traverse the iconic waters of Caribbean and discover the beauty of George Town, Roatán.",
      distance: "1303 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tampa to George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from George Town to Roatán"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tampa"
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
    "description": "Exploring Roatán"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Katherine Cooper",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "exquisite.infinite.o@velarivoyages.com",
          contactNumber: "+1-602-616-2049"
        }
      }
    ],
    title: "Exquisite Infinite of the Warm Currents Hub",
    description: "Let the waves lead you from Tampa on this tide-washed wanderlust. Traverse the iconic waters of Caribbean and discover the beauty of George Town, Roatán.",
    rating: 4.2,
    tags: ["cruise-holiday","cruise-getaway","relaxation"]
  },
  {
    basePrice: 7964,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  }
],
      description: "An escape like no other begins in Tampa, where your expedition launches into the heart of Caribbean. Discover the magic of Roatán, San Juan, Nassau with style and sophistication.",
      distance: "1434 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tampa to Roatán"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Roatán to San Juan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from San Juan to Nassau"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Nassau to Tampa"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Tampa"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Isabella Marshall",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "secret.renaissance.o@velarivoyages.com",
          contactNumber: "+1-649-961-6758"
        }
      }
    ],
    title: "Secret Renaissance of the Pirate Passages",
    description: "An escape like no other begins in Tampa, where your expedition launches into the heart of Caribbean. Discover the magic of Roatán, San Juan, Nassau with style and sophistication.",
    rating: 4.9,
    tags: ["fall-cruise","cruise-line"]
  },
  {
    basePrice: 4629,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  }
],
      description: "Set sail from Tampa on this pristine elevation through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore George Town and Cozumel and San Juan, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1022 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Tampa to George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from George Town to Cozumel"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Cozumel to San Juan"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from San Juan to Tampa"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Tampa"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Stella Reeves",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "infinite.reverie.of.@velarivoyages.com",
          contactNumber: "+1-469-571-7426"
        }
      }
    ],
    title: "Infinite Reverie of the Wharf of Color",
    description: "Set sail from Tampa on this pristine elevation through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore George Town and Cozumel and San Juan, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.2,
    tags: ["weekend-cruise","general","short-getaway"]
  },
  {
    basePrice: 8405,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "San Juan",
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
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set off on a horizon from Tampa that captures the essence of Caribbean. Discover cultural gems and culinary delights across George Town, Cozumel, San Juan.",
      distance: "698 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Tampa to George Town"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from George Town to Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Cozumel to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring George Town"
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
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Anna Carpenter",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
        contact: {
          contactEmail: "mystical.symphony.of@velarivoyages.com",
          contactNumber: "+1-420-572-2052"
        }
      }
    ],
    title: "Mystical Symphony of the Warm Currents Hub",
    description: "Set off on a horizon from Tampa that captures the essence of Caribbean. Discover cultural gems and culinary delights across George Town, Cozumel, San Juan.",
    rating: 4.1,
    tags: ["cruise-line","short-getaway"]
  },
  {
    basePrice: 4656,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  }
],
      description: "Start in the vibrant city of Tampa and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in George Town, Cozumel.",
      distance: "749 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tampa to George Town"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from George Town to Cozumel"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Cozumel to Tampa"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring George Town"
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
    "description": "Exploring Tampa"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Allison Reeves",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "extraordinary.horizo@velarivoyages.com",
          contactNumber: "+1-347-705-9211"
        }
      }
    ],
    title: "Extraordinary Horizon of the Warm Currents Hub",
    description: "Start in the vibrant city of Tampa and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in George Town, Cozumel.",
    rating: 4.9,
    tags: ["expedition","cruise","historical"]
  },
  {
    basePrice: 4011,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  },
  {
    "city": "San Juan",
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
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  }
],
      description: "Sail from Tampa into a world of wonder. The Caribbean beckons with unforgettable ports like San Juan, Roatán, where every view is picture-perfect and every moment is priceless.",
      distance: "917 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Tampa to San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from San Juan to Roatán"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Roatán to Tampa"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Tampa"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Joan Collins",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "aweinspiring.haven.o@velarivoyages.com",
          contactNumber: "+1-414-845-5264"
        }
      }
    ],
    title: "Awe-Inspiring Haven of the Sunshine Gateway",
    description: "Sail from Tampa into a world of wonder. The Caribbean beckons with unforgettable ports like San Juan, Roatán, where every view is picture-perfect and every moment is priceless.",
    rating: 5.0,
    tags: ["tropical"]
  },
  {
    basePrice: 3508,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
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
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  },
  {
    "city": "San Juan",
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
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This inspiring adventure departs from Tampa, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include San Juan, Nassau, Cozumel.",
      distance: "1395 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tampa to San Juan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from San Juan to Nassau"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Nassau to Cozumel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Kinsley Hall",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "majestic.panorama.of@velarivoyages.com",
          contactNumber: "+1-367-967-4054"
        }
      }
    ],
    title: "Majestic Panorama of the Rum-Laced Breezes",
    description: "This inspiring adventure departs from Tampa, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include San Juan, Nassau, Cozumel.",
    rating: 4.1,
    tags: ["themed-cruise","cruise-adventure"]
  },
  {
    basePrice: 7285,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
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
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
  }
],
      description: "Step aboard in Tampa and begin a immersive journey through the scenic Caribbean. From historic cities to coastal hideaways like Philipsburg, George Town, Roatán, Cozumel, every day is unforgettable.",
      distance: "970 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tampa to Philipsburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Philipsburg to George Town"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from George Town to Roatán"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Roatán to Cozumel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zola Watson",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "refined.arcadia.of.t@velarivoyages.com",
          contactNumber: "+1-129-924-8806"
        }
      }
    ],
    title: "Refined Arcadia of the Warm Currents Hub",
    description: "Step aboard in Tampa and begin a immersive journey through the scenic Caribbean. From historic cities to coastal hideaways like Philipsburg, George Town, Roatán, Cozumel, every day is unforgettable.",
    rating: 4.7,
    tags: ["cruise-journey","cruise-line","cruise-ship"]
  },
  {
    basePrice: 1637,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  }
],
      description: "From bustling Tampa to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Nassau, Philipsburg, Roatán, San Juan deliver a balanced blend of culture and comfort.",
      distance: "1487 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Tampa to Nassau"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Nassau to Philipsburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to Roatán"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Roatán to San Juan"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from San Juan to Tampa"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Tampa"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Jessica Wallace",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "unforgettable.zenith@velarivoyages.com",
          contactNumber: "+1-405-768-9307"
        }
      }
    ],
    title: "Unforgettable Zenith of the Golden Tide Rise",
    description: "From bustling Tampa to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Nassau, Philipsburg, Roatán, San Juan deliver a balanced blend of culture and comfort.",
    rating: 4.7,
    tags: ["cruise-getaway","VIP","general"]
  },
  {
    basePrice: 6417,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "Nassau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  }
],
      description: "Embark on an unforgettable eclipse from the vibrant port of Tampa, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Cozumel, Roatán, Nassau, this journey combines cultural immersion with breathtaking scenery.",
      distance: "669 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tampa to Cozumel"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Cozumel to Roatán"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Roatán to Nassau"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Nassau to Tampa"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tampa"
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
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Tampa"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Knight",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "immersive.excursion.@velarivoyages.com",
          contactNumber: "+1-613-904-8366"
        }
      }
    ],
    title: "Immersive Excursion of the Sapphire Waters",
    description: "Embark on an unforgettable eclipse from the vibrant port of Tampa, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Cozumel, Roatán, Nassau, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.9,
    tags: ["long-distance","cruise-adventure","family-friendly"]
  },
  {
    basePrice: 1252,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  },
  {
    "city": "San Juan",
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
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  }
],
      description: "Set course from Tampa for an inspiring mystical journey across Caribbean. Whether exploring ancient ruins in San Juan or soaking up coastal views in Nassau, every day offers a perfect mix of discovery and relaxation.",
      distance: "1358 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tampa to San Juan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from San Juan to Nassau"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Nassau to Tampa"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Tampa"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Madison Jennings",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/93.jpg",
        contact: {
          contactEmail: "majestic.awakening.o@velarivoyages.com",
          contactNumber: "+1-590-419-5094"
        }
      }
    ],
    title: "Majestic Awakening of the Warm Currents Hub",
    description: "Set course from Tampa for an inspiring mystical journey across Caribbean. Whether exploring ancient ruins in San Juan or soaking up coastal views in Nassau, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.7,
    tags: ["family-friendly","sightseeing","themed-cruise"]
  },
  {
    basePrice: 9896,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "Philipsburg",
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
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "Philipsburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail from Tampa into a world of wonder. The Caribbean beckons with unforgettable ports like Nassau, St. Thomas, Philipsburg, where every view is picture-perfect and every moment is priceless.",
      distance: "967 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tampa to Nassau"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Nassau to St. Thomas"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to Philipsburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Philipsburg"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Isabella Bennett",
        role: "Corporate Concierge",
        languages: ["Khmer","Swahili","Gujarati"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "majestic.reverie.of.@velarivoyages.com",
          contactNumber: "+1-626-485-9218"
        }
      }
    ],
    title: "Majestic Reverie of the Palmetto Breeze",
    description: "Sail from Tampa into a world of wonder. The Caribbean beckons with unforgettable ports like Nassau, St. Thomas, Philipsburg, where every view is picture-perfect and every moment is priceless.",
    rating: 4.9,
    tags: ["luxury"]
  },
  {
    basePrice: 3407,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  }
],
      description: "Escape to sea from Tampa on a tide-washed voyage exploring the magic of Caribbean. Visit unforgettable locales like St. Thomas, Roatán, where each stop inspires awe.",
      distance: "1356 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Tampa to St. Thomas"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Roatán"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Roatán to Tampa"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Tampa"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Lisa Reeves",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Punjabi","Marathi","Urdu"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "infinite.discovery.o@velarivoyages.com",
          contactNumber: "+1-551-124-4338"
        }
      }
    ],
    title: "Infinite Discovery of the Sun-Kissed Archipelago",
    description: "Escape to sea from Tampa on a tide-washed voyage exploring the magic of Caribbean. Visit unforgettable locales like St. Thomas, Roatán, where each stop inspires awe.",
    rating: 4.8,
    tags: ["adventure","cruise-holiday","fall-cruise"]
  },
  {
    basePrice: 5862,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "San Juan",
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
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "Cozumel",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Depart Tampa on a relaxing reunion through the Caribbean region. Highlights include the stunning coastlines of Nassau, St. Thomas, Cozumel, San Juan, all while enjoying first-class amenities on board.",
      distance: "1161 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Tampa to Nassau"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Nassau to St. Thomas"
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
    "description": "Sailing from Cozumel to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Nassau"
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
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mia Murray",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Punjabi","Marathi","Urdu"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "captivating.wanderlu@velarivoyages.com",
          contactNumber: "+1-917-788-3372"
        }
      }
    ],
    title: "Captivating Wanderlust of the Warm Currents Hub",
    description: "Depart Tampa on a relaxing reunion through the Caribbean region. Highlights include the stunning coastlines of Nassau, St. Thomas, Cozumel, San Juan, all while enjoying first-class amenities on board.",
    rating: 4.2,
    tags: ["short-getaway"]
  },
  {
    basePrice: 3351,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    arrivalLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "San Juan",
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
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  }
],
      description: "Sail from Tampa into a world of wonder. The Caribbean beckons with unforgettable ports like Cozumel, San Juan, Nassau, where every view is picture-perfect and every moment is priceless.",
      distance: "1045 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Tampa to Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Cozumel to San Juan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from San Juan to Nassau"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Nassau to Tampa"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Tampa"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Audrey Gibson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Punjabi","Marathi","Urdu"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "moonlit.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-335-533-5378"
        }
      }
    ],
    title: "Moonlit Retreat of the Rum-Laced Breezes",
    description: "Sail from Tampa into a world of wonder. The Caribbean beckons with unforgettable ports like Cozumel, San Juan, Nassau, where every view is picture-perfect and every moment is priceless.",
    rating: 4.4,
    tags: ["adventure"]
  },
  {
    basePrice: 2180,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 27.9506,
    "longitude": -82.4572
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
    "city": "Tampa",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
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
    "city": "San Juan",
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
      description: "Set off on a reflection from Tampa that captures the essence of Caribbean. Discover cultural gems and culinary delights across George Town, San Juan, Roatán.",
      distance: "664 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tampa to George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from George Town to San Juan"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from San Juan to Roatán"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Roatán"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Emily Porter",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Punjabi","Marathi","Urdu"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "infinite.embrace.of.@velarivoyages.com",
          contactNumber: "+1-393-985-7841"
        }
      }
    ],
    title: "Infinite Embrace of the Palmetto Breeze",
    description: "Set off on a reflection from Tampa that captures the essence of Caribbean. Discover cultural gems and culinary delights across George Town, San Juan, Roatán.",
    rating: 4.3,
    tags: ["relaxation","cruise-journey","culinary"]
  }
];
