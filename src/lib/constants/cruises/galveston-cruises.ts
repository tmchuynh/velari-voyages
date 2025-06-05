import { Cruise } from "@/lib/interfaces/services/cruises";

export const galvestonCruises: Cruise[] = [
{
    basePrice: 4707,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
      description: "Start in the vibrant city of Galveston and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in Tampa, Nassau.",
      distance: "1419 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Galveston to Tampa"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Tampa to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Tampa"
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
        name: "Jason Hall",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "aweinspiring.eclipse@velarivoyages.com",
          contactNumber: "+1-819-117-7203"
        }
      }
    ],
    title: "Awe-Inspiring Eclipse of the Windswept Sentinel",
    description: "Start in the vibrant city of Galveston and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in Tampa, Nassau.",
    rating: 4.5,
    tags: ["cruise-excursion","cruise-line"]
  },
  {
    basePrice: 8786,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
    }
  }
],
      description: "Embark from Galveston and traverse the Caribbean in style. Whether it’s the energy of Cozumel or the calm of Roatán, each destination reveals a new side of paradise.",
      distance: "735 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Galveston to Cozumel"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Roatán"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Roatán to Galveston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Cozumel"
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
    "description": "Exploring Galveston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Walter Graves",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
        contact: {
          contactEmail: "moonlit.saga.of.the.@velarivoyages.com",
          contactNumber: "+1-886-878-9736"
        }
      }
    ],
    title: "Moonlit Saga of the Gulf Gateway",
    description: "Embark from Galveston and traverse the Caribbean in style. Whether it’s the energy of Cozumel or the calm of Roatán, each destination reveals a new side of paradise.",
    rating: 4.7,
    tags: ["short-getaway","cruise-vacation"]
  },
  {
    basePrice: 4760,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Philipsburg",
  "country": "Sint Maarten",
  "coordinates": {
    "latitude": 18.0167,
    "longitude": -63.0587
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "country": "Sint Maarten",
    "coordinates": {
      "latitude": 18.0167,
      "longitude": -63.0587
    }
  }
],
      description: "Embark on an unforgettable odyssey from the vibrant port of Galveston, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Miami, Cozumel, Roatán, Philipsburg, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1486 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Galveston to Miami"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Miami to Cozumel"
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
    "description": "Sailing from Roatán to Philipsburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Miami"
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
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Louis Baker",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "epic.arcadia.of.the.@velarivoyages.com",
          contactNumber: "+1-635-147-2570"
        }
      }
    ],
    title: "Epic Arcadia of the Historic Strand Portal",
    description: "Embark on an unforgettable odyssey from the vibrant port of Galveston, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Miami, Cozumel, Roatán, Philipsburg, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.2,
    tags: ["family-friendly","wellness"]
  },
  {
    basePrice: 3053,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "Enjoy seamless luxury on this enchanting currents beginning in Galveston. Visit breathtaking Caribbean locales such as San Juan, Bermuda on this unforgettable itinerary.",
      distance: "1085 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Galveston to San Juan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from San Juan to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "James Nash",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "epic.panorama.of.the@velarivoyages.com",
          contactNumber: "+1-505-813-8607"
        }
      }
    ],
    title: "Epic Panorama of the Salt and Steam Legacy",
    description: "Enjoy seamless luxury on this enchanting currents beginning in Galveston. Visit breathtaking Caribbean locales such as San Juan, Bermuda on this unforgettable itinerary.",
    rating: 4.3,
    tags: ["tropical"]
  },
  {
    basePrice: 8724,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Bermuda",
    "country": "Bermuda",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
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
      description: "Begin an epic serenade from Galveston, where the seas meet culture. Visit the remarkable ports of Philipsburg, Bermuda, Roatán while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "786 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Galveston to Philipsburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Philipsburg to Bermuda"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Bermuda to Roatán"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bermuda"
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
        name: "Bryan Parker",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
        contact: {
          contactEmail: "hidden.enigma.of.the@velarivoyages.com",
          contactNumber: "+1-158-650-1211"
        }
      }
    ],
    title: "Hidden Enigma of the Gulf Gateway",
    description: "Begin an epic serenade from Galveston, where the seas meet culture. Visit the remarkable ports of Philipsburg, Bermuda, Roatán while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.4,
    tags: ["cruise-excursion"]
  },
  {
    basePrice: 2645,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "San Juan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Depart from iconic Galveston and traverse the Caribbean with visits to Miami, Cozumel, Fort Lauderdale, San Juan. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "892 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Galveston to Miami"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Miami to Cozumel"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Fort Lauderdale"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Fort Lauderdale to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sean Hamilton",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "alluring.journey.of.@velarivoyages.com",
          contactNumber: "+1-274-561-2797"
        }
      }
    ],
    title: "Alluring Journey of the Texan Tidepost",
    description: "Depart from iconic Galveston and traverse the Caribbean with visits to Miami, Cozumel, Fort Lauderdale, San Juan. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.5,
    tags: ["cruise-excursion","sightseeing"]
  },
  {
    basePrice: 4915,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
    }
  }
],
      description: "Begin your horizon in Galveston, a gateway to the soul of Caribbean. Enjoy days spent exploring Roatán, Bermuda, St. Thomas, Tampa and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1450 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Galveston to Roatán"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Roatán to Bermuda"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Bermuda to St. Thomas"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to Tampa"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Tampa to Galveston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Galveston"
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
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Galveston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thomas Morgan",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "starlit.drift.of.the@velarivoyages.com",
          contactNumber: "+1-741-558-7539"
        }
      }
    ],
    title: "Starlit Drift of the Island Reverie",
    description: "Begin your horizon in Galveston, a gateway to the soul of Caribbean. Enjoy days spent exploring Roatán, Bermuda, St. Thomas, Tampa and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.9,
    tags: ["wellness","glacier-cruise","cruise"]
  },
  {
    basePrice: 2710,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
    }
  }
],
      description: "An unforgettable sanctuary awaits as you cruise from Galveston across Caribbean. Dive into history, flavor, and culture with stops including Cozumel, Roatán, San Juan, Fort Lauderdale.",
      distance: "653 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Galveston to Cozumel"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Roatán"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Roatán to San Juan"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from San Juan to Fort Lauderdale"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Fort Lauderdale to Galveston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Galveston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Carlos Reed",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "secret.solstice.of.t@velarivoyages.com",
          contactNumber: "+1-344-687-2907"
        }
      }
    ],
    title: "Secret Solstice of the Salt and Steam Legacy",
    description: "An unforgettable sanctuary awaits as you cruise from Galveston across Caribbean. Dive into history, flavor, and culture with stops including Cozumel, Roatán, San Juan, Fort Lauderdale.",
    rating: 4.3,
    tags: ["weekend-cruise"]
  },
  {
    basePrice: 8078,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Bermuda",
  "country": "Bermuda",
  "coordinates": {
    "latitude": 32.3214,
    "longitude": -64.75737
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "From the lively departure port of Galveston, this curated reflection showcases the finest of Caribbean. With visits to Miami, Bermuda, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "551 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Galveston to Miami"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Miami to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Alexander Dean",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "dreamlike.serenade.o@velarivoyages.com",
          contactNumber: "+1-215-225-7796"
        }
      }
    ],
    title: "Dreamlike Serenade of the Palm-Fringed Paradises",
    description: "From the lively departure port of Galveston, this curated reflection showcases the finest of Caribbean. With visits to Miami, Bermuda, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.7,
    tags: ["fall-cruise","romantic","cultural"]
  },
  {
    basePrice: 1094,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Miami",
  "country": "United States",
  "coordinates": {
    "latitude": 25.7617,
    "longitude": -80.1918
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Cozumel",
    "country": "Mexico",
    "coordinates": {
      "latitude": 20.4233,
      "longitude": -86.9212
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
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
    }
  }
],
      description: "From bustling Galveston to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Nassau, Cozumel, Fort Lauderdale, Miami deliver a balanced blend of culture and comfort.",
      distance: "1145 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Galveston to Nassau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Nassau to Cozumel"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Fort Lauderdale"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Fort Lauderdale to Miami"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Galveston"
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
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Miami"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Bennett",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "hidden.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-601-311-5742"
        }
      }
    ],
    title: "Hidden Sojourn of the Salt and Steam Legacy",
    description: "From bustling Galveston to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Nassau, Cozumel, Fort Lauderdale, Miami deliver a balanced blend of culture and comfort.",
    rating: 4.9,
    tags: ["romantic","relaxation"]
  },
  {
    basePrice: 7950,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Miami",
  "country": "United States",
  "coordinates": {
    "latitude": 25.7617,
    "longitude": -80.1918
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Fort Lauderdale",
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
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
    }
  }
],
      description: "Join us in Galveston for a infinite of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like St. Thomas, Fort Lauderdale, Roatán, Miami where timeless traditions meet modern luxuries.",
      distance: "1120 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Galveston to St. Thomas"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Fort Lauderdale"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Fort Lauderdale to Roatán"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Roatán to Miami"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Galveston"
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
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Miami"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Jose Foster",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "refined.adventure.of@velarivoyages.com",
          contactNumber: "+1-539-833-3685"
        }
      }
    ],
    title: "Refined Adventure of the Caribbean Rhythms",
    description: "Join us in Galveston for a infinite of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like St. Thomas, Fort Lauderdale, Roatán, Miami where timeless traditions meet modern luxuries.",
    rating: 4.8,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 5916,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
    }
  }
],
      description: "Let the winds of the Caribbean carry you from Galveston to the most stunning ports in the region. With destinations like Fort Lauderdale, Bermuda, Cozumel, this journey redefines luxury travel.",
      distance: "1284 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Galveston to Fort Lauderdale"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Fort Lauderdale to Bermuda"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Bermuda to Cozumel"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Galveston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Galveston"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Juan Price",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/38.jpg",
        contact: {
          contactEmail: "eternal.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-808-914-2940"
        }
      }
    ],
    title: "Eternal Eclipse of the Windswept Sentinel",
    description: "Let the winds of the Caribbean carry you from Galveston to the most stunning ports in the region. With destinations like Fort Lauderdale, Bermuda, Cozumel, this journey redefines luxury travel.",
    rating: 4.8,
    tags: ["long-distance"]
  },
  {
    basePrice: 9713,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
    }
  }
],
      description: "This luminous cruise from Galveston is your ticket to the captivating charm of the Caribbean. Discover the delights of St. Thomas, George Town with enriching excursions and award-winning service.",
      distance: "1023 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Galveston to St. Thomas"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to George Town"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from George Town to Galveston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Galveston"
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
    "description": "Exploring George Town"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Galveston"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Patrick Hayes",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "horizonkissed.sojour@velarivoyages.com",
          contactNumber: "+1-806-312-1783"
        }
      }
    ],
    title: "Horizon-Kissed Sojourn of the Gulf Gateway",
    description: "This luminous cruise from Galveston is your ticket to the captivating charm of the Caribbean. Discover the delights of St. Thomas, George Town with enriching excursions and award-winning service.",
    rating: 4.0,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 6062,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
    }
  }
],
      description: "From the lively departure port of Galveston, this curated adventure showcases the finest of Caribbean. With visits to Cozumel, Roatán, George Town, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "641 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Galveston to Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Cozumel to Roatán"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Roatán to George Town"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from George Town to Galveston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Galveston"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Eric Montgomery",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "epic.solstice.of.the@velarivoyages.com",
          contactNumber: "+1-535-786-3502"
        }
      }
    ],
    title: "Epic Solstice of the Lone Star Port",
    description: "From the lively departure port of Galveston, this curated adventure showcases the finest of Caribbean. With visits to Cozumel, Roatán, George Town, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.9,
    tags: ["tropical","sightseeing","glacier-cruise"]
  },
  {
    basePrice: 7291,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
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
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Escape the everyday with this tide-washed journey through Caribbean, departing from Galveston. You'll visit Fort Lauderdale, Roatán, where every stop is a new adventure.",
      distance: "858 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Galveston to Fort Lauderdale"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Fort Lauderdale to Roatán"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Roatán"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brandon Reeves",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","French","Quechua"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/85.jpg",
        contact: {
          contactEmail: "luxurious.mythos.of.@velarivoyages.com",
          contactNumber: "+1-126-881-5587"
        }
      }
    ],
    title: "Luxurious Mythos of the Texan Tidepost",
    description: "Escape the everyday with this tide-washed journey through Caribbean, departing from Galveston. You'll visit Fort Lauderdale, Roatán, where every stop is a new adventure.",
    rating: 4.7,
    tags: ["cruise-ship"]
  },
  {
    basePrice: 4943,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
    }
  }
],
      description: "This hand-selected radiant cruise offers a true taste of Caribbean. Depart from Galveston and explore ports like Fort Lauderdale, St. Thomas, Tampa, Roatán, each telling a story through food, music, and tradition.",
      distance: "739 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Galveston to Fort Lauderdale"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Fort Lauderdale to St. Thomas"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Tampa"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Tampa to Roatán"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Roatán to Galveston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Tampa"
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
    "description": "Exploring Galveston"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kimberly Hudson",
        role: "Group Booking Coordinator",
        languages: ["English","French","Quechua","Aymara"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "alluring.infinite.of@velarivoyages.com",
          contactNumber: "+1-492-247-6879"
        }
      }
    ],
    title: "Alluring Infinite of the Windswept Sentinel",
    description: "This hand-selected radiant cruise offers a true taste of Caribbean. Depart from Galveston and explore ports like Fort Lauderdale, St. Thomas, Tampa, Roatán, each telling a story through food, music, and tradition.",
    rating: 4.7,
    tags: ["historical","cruise-vacation","short-getaway"]
  },
  {
    basePrice: 7634,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
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
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Cozumel",
    "country": "Mexico",
    "coordinates": {
      "latitude": 20.4233,
      "longitude": -86.9212
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
      description: "Embark from Galveston and traverse the Caribbean in style. Whether it’s the energy of Tampa or the calm of Cozumel, each destination reveals a new side of paradise.",
      distance: "817 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Galveston to Tampa"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tampa to Cozumel"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Cozumel to St. Thomas"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring St. Thomas"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Coleman",
        role: "Group Booking Coordinator",
        languages: ["English","French","Quechua","Aymara"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
        contact: {
          contactEmail: "velvet.embrace.of.th@velarivoyages.com",
          contactNumber: "+1-491-922-4300"
        }
      }
    ],
    title: "Velvet Embrace of the Windswept Sentinel",
    description: "Embark from Galveston and traverse the Caribbean in style. Whether it’s the energy of Tampa or the calm of Cozumel, each destination reveals a new side of paradise.",
    rating: 4.3,
    tags: ["expedition","seasonal"]
  },
  {
    basePrice: 1325,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Philipsburg",
  "country": "Sint Maarten",
  "coordinates": {
    "latitude": 18.0167,
    "longitude": -63.0587
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Philipsburg",
    "country": "Sint Maarten",
    "coordinates": {
      "latitude": 18.0167,
      "longitude": -63.0587
    }
  }
],
      description: "Step aboard in Galveston and begin a unforgettable journey through the scenic Caribbean. From historic cities to coastal hideaways like San Juan, Nassau, Miami, Philipsburg, every day is unforgettable.",
      distance: "1146 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Galveston to San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from San Juan to Nassau"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Nassau to Miami"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Miami to Philipsburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Nassau"
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
    "description": "Exploring Philipsburg"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Maya Mitchell",
        role: "Group Booking Coordinator",
        languages: ["English","French","Quechua","Aymara"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "dreamlike.retreat.of@velarivoyages.com",
          contactNumber: "+1-453-916-7875"
        }
      }
    ],
    title: "Dreamlike Retreat of the Windswept Sentinel",
    description: "Step aboard in Galveston and begin a unforgettable journey through the scenic Caribbean. From historic cities to coastal hideaways like San Juan, Nassau, Miami, Philipsburg, every day is unforgettable.",
    rating: 4.4,
    tags: ["cruise-holiday","fall-cruise","short-getaway"]
  },
  {
    basePrice: 5380,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
    }
  }
],
      description: "Depart from Galveston on this thoughtfully designed excursion across the Caribbean. Savor coastal charm, cultural treasures, and ocean views with stops at St. Thomas, Tampa, George Town, Roatán.",
      distance: "785 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Galveston to St. Thomas"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to Tampa"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Tampa to George Town"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from George Town to Roatán"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Roatán to Galveston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Galveston"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Skylar Sutton",
        role: "Group Booking Coordinator",
        languages: ["English","French","Quechua","Aymara"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/73.jpg",
        contact: {
          contactEmail: "hidden.eclipse.of.th@velarivoyages.com",
          contactNumber: "+1-833-254-3641"
        }
      }
    ],
    title: "Hidden Eclipse of the Azure Horizons",
    description: "Depart from Galveston on this thoughtfully designed excursion across the Caribbean. Savor coastal charm, cultural treasures, and ocean views with stops at St. Thomas, Tampa, George Town, Roatán.",
    rating: 4.2,
    tags: ["nature","glacier-cruise","wildlife"]
  },
  {
    basePrice: 5283,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    arrivalLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 29.301348,
    "longitude": -94.797695
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
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
    "city": "Galveston",
    "country": "United States",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 29.301348,
      "longitude": -94.797695
    }
  }
],
      description: "Let the waves lead you from Galveston on this legendary odyssey. Traverse the iconic waters of Caribbean and discover the beauty of Miami, Tampa.",
      distance: "1304 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Galveston to Miami"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Miami to Tampa"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Tampa to Galveston"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Galveston"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Christine Curtis",
        role: "Group Booking Coordinator",
        languages: ["English","French","Quechua","Aymara"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "luxurious.resonance.@velarivoyages.com",
          contactNumber: "+1-689-279-8164"
        }
      }
    ],
    title: "Luxurious Resonance of the Rum-Laced Breezes",
    description: "Let the waves lead you from Galveston on this legendary odyssey. Traverse the iconic waters of Caribbean and discover the beauty of Miami, Tampa.",
    rating: 4.7,
    tags: ["cruise-excursion","cruise-vacation","cruise-holiday"]
  }
];
