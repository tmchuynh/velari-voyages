import { Cruise } from "@/lib/interfaces/services/cruises";

export const bermudaCruises: Cruise[] = [
{
    basePrice: 5380,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Fort Lauderdale",
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
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Fort Lauderdale",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This mystical resonance begins in Bermuda and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at San Juan, George Town, Fort Lauderdale.",
      distance: "1275 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Bermuda to San Juan"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from San Juan to George Town"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from George Town to Fort Lauderdale"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Fort Lauderdale"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Billy Holloway",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "serene.arcadia.of.th@velarivoyages.com",
          contactNumber: "+1-472-505-8752"
        }
      }
    ],
    title: "Serene Arcadia of the Sugarcane Skies",
    description: "This mystical resonance begins in Bermuda and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at San Juan, George Town, Fort Lauderdale.",
    rating: 4.3,
    tags: ["family-friendly"]
  },
  {
    basePrice: 9585,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
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
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  },
  {
    "city": "Cozumel",
    "country": "Mexico",
    "coordinates": {
      "latitude": 20.4233,
      "longitude": -86.9212
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
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set sail from Bermuda for a voyage like no other. From the picturesque landscapes of Cozumel to the lively ambiance of Roatán, this immersive cruise will redefine your view of Caribbean.",
      distance: "1158 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Bermuda to Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Roatán"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Roatán to St. Thomas"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
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
    "description": "Exploring St. Thomas"
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
        name: "Henry Maxwell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "celestial.exploratio@velarivoyages.com",
          contactNumber: "+1-813-734-6847"
        }
      }
    ],
    title: "Celestial Exploration of the Pirate Passages",
    description: "Set sail from Bermuda for a voyage like no other. From the picturesque landscapes of Cozumel to the lively ambiance of Roatán, this immersive cruise will redefine your view of Caribbean.",
    rating: 4.0,
    tags: ["cruise-ship","general"]
  },
  {
    basePrice: 4234,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
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
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "city": "Philipsburg",
    "country": "Sint Maarten",
    "coordinates": {
      "latitude": 18.0167,
      "longitude": -63.0587
    }
  },
  {
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
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
      description: "Let the waves lead you from Bermuda on this starlit embrace. Traverse the iconic waters of Caribbean and discover the beauty of San Juan, Philipsburg, Miami, George Town.",
      distance: "502 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Bermuda to San Juan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from San Juan to Philipsburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to Miami"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Miami to George Town"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bermuda"
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
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring George Town"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Benjamin Maxwell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "sublime.awakening.of@velarivoyages.com",
          contactNumber: "+1-576-706-3885"
        }
      }
    ],
    title: "Sublime Awakening of the Reggae Shores",
    description: "Let the waves lead you from Bermuda on this starlit embrace. Traverse the iconic waters of Caribbean and discover the beauty of San Juan, Philipsburg, Miami, George Town.",
    rating: 4.1,
    tags: ["cruise-adventure","tropical"]
  },
  {
    basePrice: 4742,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "city": "Philipsburg",
    "country": "Sint Maarten",
    "coordinates": {
      "latitude": 18.0167,
      "longitude": -63.0587
    }
  },
  {
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
    }
  },
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "Savor each moment of this charming escape through Caribbean, starting in Bermuda. Visit renowned locations like San Juan, Philipsburg, Miami, where adventure and relaxation intertwine.",
      distance: "1225 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Bermuda to San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from San Juan to Philipsburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Philipsburg to Miami"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Miami to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Billy Fox",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "majestic.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-707-186-7828"
        }
      }
    ],
    title: "Majestic Mythos of the Rum-Laced Breezes",
    description: "Savor each moment of this charming escape through Caribbean, starting in Bermuda. Visit renowned locations like San Juan, Philipsburg, Miami, where adventure and relaxation intertwine.",
    rating: 4.1,
    tags: ["fall-cruise","exclusive"]
  },
  {
    basePrice: 3547,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  },
  {
    "city": "Nassau",
    "country": "Bahamas",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
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
    "city": "Fort Lauderdale",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "Embark on an unforgettable symphony from the vibrant port of Bermuda, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Nassau, San Juan, Fort Lauderdale, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1398 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Bermuda to Nassau"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Nassau to San Juan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from San Juan to Fort Lauderdale"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Fort Lauderdale to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Eugene Fletcher",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "tidewashed.haven.of.@velarivoyages.com",
          contactNumber: "+1-628-190-2721"
        }
      }
    ],
    title: "Tide-Washed Haven of the Palm-Fringed Paradises",
    description: "Embark on an unforgettable symphony from the vibrant port of Bermuda, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Nassau, San Juan, Fort Lauderdale, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.8,
    tags: ["nature"]
  },
  {
    basePrice: 1320,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "city": "Tampa",
    "country": "United States",
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
    "city": "Fort Lauderdale",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "Escape to sea from Bermuda on a golden voyage exploring the magic of Caribbean. Visit unforgettable locales like St. Thomas, Tampa, Roatán, Fort Lauderdale, where each stop inspires awe.",
      distance: "973 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Bermuda to St. Thomas"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Tampa"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Tampa to Roatán"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Roatán to Fort Lauderdale"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Sailing from Fort Lauderdale to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alexander Watson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "mesmerizing.haven.of@velarivoyages.com",
          contactNumber: "+1-488-783-5378"
        }
      }
    ],
    title: "Mesmerizing Haven of the Sugarcane Skies",
    description: "Escape to sea from Bermuda on a golden voyage exploring the magic of Caribbean. Visit unforgettable locales like St. Thomas, Tampa, Roatán, Fort Lauderdale, where each stop inspires awe.",
    rating: 4.7,
    tags: ["anniversary-cruise"]
  },
  {
    basePrice: 9545,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Cozumel",
  "country": "Mexico",
  "coordinates": {
    "latitude": 20.4233,
    "longitude": -86.9212
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Cozumel",
    "country": "Mexico",
    "coordinates": {
      "latitude": 20.4233,
      "longitude": -86.9212
    }
  }
],
      description: "Let the spirit of exploration guide your secret journey from Bermuda. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like San Juan, George Town, Cozumel.",
      distance: "951 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Bermuda to San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from San Juan to George Town"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from George Town to Cozumel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Justin Mason",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
        contact: {
          contactEmail: "gilded.zenith.of.the@velarivoyages.com",
          contactNumber: "+1-354-598-7440"
        }
      }
    ],
    title: "Gilded Zenith of the Pirate Passages",
    description: "Let the spirit of exploration guide your secret journey from Bermuda. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like San Juan, George Town, Cozumel.",
    rating: 4.1,
    tags: ["tropical","VIP","cruise-getaway"]
  },
  {
    basePrice: 2175,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Fort Lauderdale",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "city": "Fort Lauderdale",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin a captivating mythos through the Caribbean, departing Bermuda. With visits to George Town, Fort Lauderdale, each day brings a new adventure and deeper connection to the region.",
      distance: "1246 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Bermuda to George Town"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from George Town to Fort Lauderdale"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bermuda"
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
    "description": "Exploring Fort Lauderdale"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Mateo Dunn",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "captivating.panorama@velarivoyages.com",
          contactNumber: "+1-153-160-8728"
        }
      }
    ],
    title: "Captivating Panorama of the Rum-Laced Breezes",
    description: "Begin a captivating mythos through the Caribbean, departing Bermuda. With visits to George Town, Fort Lauderdale, each day brings a new adventure and deeper connection to the region.",
    rating: 4.6,
    tags: ["cruise-line","themed-cruise","expedition"]
  },
  {
    basePrice: 2259,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  },
  {
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
    }
  },
  {
    "city": "Tampa",
    "country": "United States",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  },
  {
    "city": "Nassau",
    "country": "Bahamas",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Set course from Bermuda for an inspiring velvet journey across Caribbean. Whether exploring ancient ruins in Miami or soaking up coastal views in Tampa, every day offers a perfect mix of discovery and relaxation.",
      distance: "709 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Bermuda to Miami"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Miami to Tampa"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Tampa to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bryan Palmer",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "secret.zenith.of.the@velarivoyages.com",
          contactNumber: "+1-495-839-4064"
        }
      }
    ],
    title: "Secret Zenith of the Palm-Fringed Paradises",
    description: "Set course from Bermuda for an inspiring velvet journey across Caribbean. Whether exploring ancient ruins in Miami or soaking up coastal views in Tampa, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.6,
    tags: ["long-distance","cultural","romantic"]
  },
  {
    basePrice: 5394,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  },
  {
    "city": "Cozumel",
    "country": "Mexico",
    "coordinates": {
      "latitude": 20.4233,
      "longitude": -86.9212
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
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "Set sail from Bermuda on this lavish horizon through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Cozumel and San Juan and St. Thomas, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "725 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Bermuda to Cozumel"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Cozumel to San Juan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from San Juan to St. Thomas"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring San Juan"
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
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Louis Stewart",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "legendary.sanctuary.@velarivoyages.com",
          contactNumber: "+1-133-719-3953"
        }
      }
    ],
    title: "Legendary Sanctuary of the Rum-Laced Breezes",
    description: "Set sail from Bermuda on this lavish horizon through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Cozumel and San Juan and St. Thomas, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.2,
    tags: ["cruise-line","cultural"]
  },
  {
    basePrice: 3839,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  },
  {
    "city": "Nassau",
    "country": "Bahamas",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  },
  {
    "city": "Philipsburg",
    "country": "Sint Maarten",
    "coordinates": {
      "latitude": 18.0167,
      "longitude": -63.0587
    }
  },
  {
    "city": "Tampa",
    "country": "United States",
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
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "Let the winds of the Caribbean carry you from Bermuda to the most stunning ports in the region. With destinations like Nassau, Philipsburg, Tampa, Roatán, this mythos redefines luxury travel.",
      distance: "1089 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Bermuda to Nassau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Nassau to Philipsburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to Tampa"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Tampa to Roatán"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Roatán to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bermuda"
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
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Robert Foster",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/85.jpg",
        contact: {
          contactEmail: "eternal.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-496-152-6841"
        }
      }
    ],
    title: "Eternal Retreat of the Palm-Fringed Paradises",
    description: "Let the winds of the Caribbean carry you from Bermuda to the most stunning ports in the region. With destinations like Nassau, Philipsburg, Tampa, Roatán, this mythos redefines luxury travel.",
    rating: 4.6,
    tags: ["repositioning","exclusive"]
  },
  {
    basePrice: 8123,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Cozumel",
  "country": "Mexico",
  "coordinates": {
    "latitude": 20.4233,
    "longitude": -86.9212
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  },
  {
    "city": "Nassau",
    "country": "Bahamas",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  },
  {
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
    }
  },
  {
    "city": "Cozumel",
    "country": "Mexico",
    "coordinates": {
      "latitude": 20.4233,
      "longitude": -86.9212
    }
  }
],
      description: "Sail away from the charming harbor of Bermuda on this celestial journey across Caribbean. Uncover the beauty and history of Nassau, Miami, Cozumel with curated excursions, world-class cuisine, and exceptional service.",
      distance: "840 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Bermuda to Nassau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Nassau to Miami"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Miami to Cozumel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Jason Hamilton",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "epic.expedition.of.t@velarivoyages.com",
          contactNumber: "+1-462-943-5151"
        }
      }
    ],
    title: "Epic Expedition of the Palm-Fringed Paradises",
    description: "Sail away from the charming harbor of Bermuda on this celestial journey across Caribbean. Uncover the beauty and history of Nassau, Miami, Cozumel with curated excursions, world-class cuisine, and exceptional service.",
    rating: 5.0,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 1083,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "country": "Bahamas",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Unwind and explore on this realm through Caribbean, departing from Bermuda. With every stop—from George Town to Nassau—you’ll collect memories that last a lifetime.",
      distance: "975 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Bermuda to George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from George Town to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bermuda"
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
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Vincent Crawford",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "mythic.quest.of.the.@velarivoyages.com",
          contactNumber: "+1-426-729-8409"
        }
      }
    ],
    title: "Mythic Quest of the Sapphire Waters",
    description: "Unwind and explore on this realm through Caribbean, departing from Bermuda. With every stop—from George Town to Nassau—you’ll collect memories that last a lifetime.",
    rating: 4.2,
    tags: ["culinary"]
  },
  {
    basePrice: 7160,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Tampa",
  "country": "United States",
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
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  }
],
      description: "Depart from the iconic port of Bermuda and sail through the enchanting Caribbean. Explore vibrant destinations like San Juan, Tampa, each offering its own unique charm and local flair.",
      distance: "1164 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Bermuda to San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from San Juan to Tampa"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bermuda"
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
    "description": "Exploring Tampa"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Bruce Marshall",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "extraordinary.excurs@velarivoyages.com",
          contactNumber: "+1-818-956-7976"
        }
      }
    ],
    title: "Extraordinary Excursion of the Tropical Isles",
    description: "Depart from the iconic port of Bermuda and sail through the enchanting Caribbean. Explore vibrant destinations like San Juan, Tampa, each offering its own unique charm and local flair.",
    rating: 4.7,
    tags: ["holiday-cruise","wildlife","cruise-excursion"]
  },
  {
    basePrice: 4495,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Cozumel",
  "country": "Mexico",
  "coordinates": {
    "latitude": 20.4233,
    "longitude": -86.9212
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
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
    "city": "Cozumel",
    "country": "Mexico",
    "coordinates": {
      "latitude": 20.4233,
      "longitude": -86.9212
    }
  }
],
      description: "Leave stress behind with this curated zenith from Bermuda. Sail across the best of Caribbean and explore treasures like George Town, Miami, San Juan, Cozumel with comfort and style.",
      distance: "788 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Bermuda to George Town"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from George Town to Miami"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Miami to San Juan"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from San Juan to Cozumel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bermuda"
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
    "description": "Exploring Miami"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adam Clark",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Haitian","Quechua","Aymara","Guarani"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "mesmerizing.passage.@velarivoyages.com",
          contactNumber: "+1-487-528-4554"
        }
      }
    ],
    title: "Mesmerizing Passage of the Sun-Kissed Archipelago",
    description: "Leave stress behind with this curated zenith from Bermuda. Sail across the best of Caribbean and explore treasures like George Town, Miami, San Juan, Cozumel with comfort and style.",
    rating: 4.7,
    tags: ["adventure","cruise-experience","cruise-vacation"]
  },
  {
    basePrice: 5075,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
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
      description: "From bustling Bermuda to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at San Juan, Miami, George Town deliver a balanced blend of culture and comfort.",
      distance: "807 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Bermuda to San Juan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from San Juan to Miami"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Miami to George Town"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring George Town"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Cooper",
        role: "Marketing Coordinator",
        languages: ["English","Spanish","Quechua","French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "forbidden.realm.of.t@velarivoyages.com",
          contactNumber: "+1-783-157-2234"
        }
      }
    ],
    title: "Forbidden Realm of the Sugarcane Skies",
    description: "From bustling Bermuda to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at San Juan, Miami, George Town deliver a balanced blend of culture and comfort.",
    rating: 4.8,
    tags: ["VIP","repositioning"]
  },
  {
    basePrice: 7982,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "This tide-washed renaissance begins in Bermuda and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at St. Thomas, George Town, San Juan.",
      distance: "735 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Bermuda to St. Thomas"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to George Town"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from George Town to San Juan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from San Juan to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bermuda"
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
    "description": "Exploring George Town"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Zoe Jennings",
        role: "Marketing Coordinator",
        languages: ["English","Spanish","Quechua","French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "secret.enigma.of.the@velarivoyages.com",
          contactNumber: "+1-137-330-8244"
        }
      }
    ],
    title: "Secret Enigma of the Tropical Isles",
    description: "This tide-washed renaissance begins in Bermuda and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at St. Thomas, George Town, San Juan.",
    rating: 4.4,
    tags: ["relaxation","cruise-ship","glacier-cruise"]
  },
  {
    basePrice: 8178,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "country": "Sint Maarten",
    "coordinates": {
      "latitude": 18.0167,
      "longitude": -63.0587
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
      description: "This transcendent excursion begins in Bermuda and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at St. Thomas, Philipsburg, San Juan.",
      distance: "921 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Bermuda to St. Thomas"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Philipsburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jane Nash",
        role: "Marketing Coordinator",
        languages: ["English","Spanish","Quechua","French"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "immersive.quest.of.t@velarivoyages.com",
          contactNumber: "+1-921-772-8469"
        }
      }
    ],
    title: "Immersive Quest of the Turquoise Lagoons",
    description: "This transcendent excursion begins in Bermuda and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at St. Thomas, Philipsburg, San Juan.",
    rating: 4.6,
    tags: ["cruise-journey","expedition","adventure"]
  },
  {
    basePrice: 9589,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
    "city": "Cozumel",
    "country": "Mexico",
    "coordinates": {
      "latitude": 20.4233,
      "longitude": -86.9212
    }
  },
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "Let the waves lead you from Bermuda on this heavenly panorama. Traverse the iconic waters of Caribbean and discover the beauty of St. Thomas, San Juan, George Town, Cozumel.",
      distance: "653 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Bermuda to St. Thomas"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to San Juan"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from San Juan to George Town"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from George Town to Cozumel"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Sailing from Cozumel to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bermuda"
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
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 19",
    "end": "Day 19",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Scarlett Murray",
        role: "Marketing Coordinator",
        languages: ["English","Spanish","Quechua","French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
        contact: {
          contactEmail: "infinite.elevation.o@velarivoyages.com",
          contactNumber: "+1-276-771-3500"
        }
      }
    ],
    title: "Infinite Elevation of the Tropical Isles",
    description: "Let the waves lead you from Bermuda on this heavenly panorama. Traverse the iconic waters of Caribbean and discover the beauty of St. Thomas, San Juan, George Town, Cozumel.",
    rating: 4.4,
    tags: ["fall-cruise","weekend-cruise"]
  },
  {
    basePrice: 9691,
    departureLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    arrivalLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  },
  {
    "city": "Nassau",
    "country": "Bahamas",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  },
  {
    "city": "Fort Lauderdale",
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
    "city": "Tampa",
    "country": "United States",
    "coordinates": {
      "latitude": 27.9506,
      "longitude": -82.4572
    }
  },
  {
    "city": "Bermuda",
    "country": "Bermuda",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "Embark from Bermuda and traverse the Caribbean in style. Whether it’s the energy of Nassau or the calm of Fort Lauderdale, each destination reveals a new side of paradise.",
      distance: "1499 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Bermuda to Nassau"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Nassau to Fort Lauderdale"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Fort Lauderdale to George Town"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from George Town to Tampa"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Tampa to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Avery Henderson",
        role: "Marketing Coordinator",
        languages: ["English","Spanish","Quechua","French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "exquisite.journey.of@velarivoyages.com",
          contactNumber: "+1-767-448-5092"
        }
      }
    ],
    title: "Exquisite Journey of the Pirate Passages",
    description: "Embark from Bermuda and traverse the Caribbean in style. Whether it’s the energy of Nassau or the calm of Fort Lauderdale, each destination reveals a new side of paradise.",
    rating: 4.5,
    tags: ["glacier-cruise","exclusive"]
  }
];
