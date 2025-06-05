import { Cruise } from "@/lib/interfaces/services/cruises";

export const nassauCruises: Cruise[] = [
{
    basePrice: 2394,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
      description: "Begin your journey in Nassau, where tradition meets travel. This immersive journey reveals the finest of Caribbean, from the beaches of Miami to the streets of Philipsburg.",
      distance: "608 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Nassau to Miami"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Miami to Philipsburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Philipsburg"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Ralph Keller",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "whispering.explorati@velarivoyages.com",
          contactNumber: "+1-939-275-4213"
        }
      }
    ],
    title: "Whispering Exploration of the Sapphire Waters",
    description: "Begin your journey in Nassau, where tradition meets travel. This immersive journey reveals the finest of Caribbean, from the beaches of Miami to the streets of Philipsburg.",
    rating: 4.7,
    tags: ["holiday-cruise"]
  },
  {
    basePrice: 7020,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
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
  }
],
      description: "Experience coastal elegance on this infinite from Nassau, where the journey through Caribbean includes stops in St. Thomas, Philipsburg, each more enchanting than the last.",
      distance: "1418 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Nassau to St. Thomas"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from St. Thomas to Philipsburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
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
    "description": "Exploring Philipsburg"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mateo Baker",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "crystalline.adventur@velarivoyages.com",
          contactNumber: "+1-255-918-5775"
        }
      }
    ],
    title: "Crystalline Adventure of the Coral Sanctuaries",
    description: "Experience coastal elegance on this infinite from Nassau, where the journey through Caribbean includes stops in St. Thomas, Philipsburg, each more enchanting than the last.",
    rating: 4.8,
    tags: ["cultural"]
  },
  {
    basePrice: 8155,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Set sail from Nassau for a voyage like no other. From the picturesque landscapes of Miami to the lively ambiance of George Town, this legendary cruise will redefine your view of Caribbean.",
      distance: "685 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Nassau to Miami"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Miami to George Town"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from George Town to San Juan"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from San Juan to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Miami"
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
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Thomas Parker",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "horizonkissed.awaken@velarivoyages.com",
          contactNumber: "+1-578-335-9864"
        }
      }
    ],
    title: "Horizon-Kissed Awakening of the Reggae Shores",
    description: "Set sail from Nassau for a voyage like no other. From the picturesque landscapes of Miami to the lively ambiance of George Town, this legendary cruise will redefine your view of Caribbean.",
    rating: 4.8,
    tags: ["historical","themed-cruise","glacier-cruise"]
  },
  {
    basePrice: 3774,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
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
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
    "city": "Bermuda",
    "country": "Bermuda",
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
  }
],
      description: "Depart from iconic Nassau and traverse the Caribbean with visits to Miami, Bermuda, San Juan. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "641 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Nassau to Miami"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Miami to Bermuda"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Bermuda to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring San Juan"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Mateo Mason",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "dreamlike.symphony.o@velarivoyages.com",
          contactNumber: "+1-462-627-9292"
        }
      }
    ],
    title: "Dreamlike Symphony of the Emerald Cays",
    description: "Depart from iconic Nassau and traverse the Caribbean with visits to Miami, Bermuda, San Juan. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 5.0,
    tags: ["cruise-ship","expedition"]
  },
  {
    basePrice: 3527,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
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
    "city": "Bermuda",
    "country": "Bermuda",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  },
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Sail away from the charming harbor of Nassau on this starlit journey across Caribbean. Uncover the beauty and history of St. Thomas, Fort Lauderdale, Bermuda with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1101 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Nassau to St. Thomas"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Fort Lauderdale"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Fort Lauderdale to Bermuda"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Bermuda to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gary Wells",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "idyllic.arcadia.of.t@velarivoyages.com",
          contactNumber: "+1-286-934-4806"
        }
      }
    ],
    title: "Idyllic Arcadia of the Palm-Fringed Paradises",
    description: "Sail away from the charming harbor of Nassau on this starlit journey across Caribbean. Uncover the beauty and history of St. Thomas, Fort Lauderdale, Bermuda with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.9,
    tags: ["cruise-adventure"]
  },
  {
    basePrice: 7613,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
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
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
      description: "Sail away from the charming harbor of Nassau on this azure journey across Caribbean. Uncover the beauty and history of Philipsburg, George Town, Fort Lauderdale with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1184 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Nassau to Philipsburg"
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
    "description": "Sailing from George Town to Fort Lauderdale"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
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
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Fort Lauderdale"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Oliver Day",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "mystical.voyage.of.t@velarivoyages.com",
          contactNumber: "+1-319-881-6517"
        }
      }
    ],
    title: "Mystical Voyage of the Palm-Fringed Paradises",
    description: "Sail away from the charming harbor of Nassau on this azure journey across Caribbean. Uncover the beauty and history of Philipsburg, George Town, Fort Lauderdale with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.3,
    tags: ["romantic"]
  },
  {
    basePrice: 5809,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
    "city": "Roatán",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Board in Nassau for a hand-crafted currents through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in San Juan, Roatán.",
      distance: "608 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Nassau to San Juan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from San Juan to Roatán"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Roatán to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
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
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Zachary Murray",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "serene.realm.of.the.@velarivoyages.com",
          contactNumber: "+1-624-543-8684"
        }
      }
    ],
    title: "Serene Realm of the Coral Sanctuaries",
    description: "Board in Nassau for a hand-crafted currents through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in San Juan, Roatán.",
    rating: 4.6,
    tags: ["general"]
  },
  {
    basePrice: 2649,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
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
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
    }
  },
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Sail into splendor from Nassau on a floating voyage through Caribbean. Let each stop—from Tampa to Miami—reveal the unique flavors and colors of the region.",
      distance: "752 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Nassau to Tampa"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Tampa to Miami"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Miami to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Larry Hamilton",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "majestic.requiem.of.@velarivoyages.com",
          contactNumber: "+1-617-276-9000"
        }
      }
    ],
    title: "Majestic Requiem of the Sugarcane Skies",
    description: "Sail into splendor from Nassau on a floating voyage through Caribbean. Let each stop—from Tampa to Miami—reveal the unique flavors and colors of the region.",
    rating: 4.7,
    tags: ["cruise-line"]
  },
  {
    basePrice: 5093,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
    "city": "Bermuda",
    "country": "Bermuda",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "This mirage takes you beyond the ordinary, starting in Nassau. With breathtaking stops in Fort Lauderdale, Bermuda, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1036 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Nassau to Fort Lauderdale"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Fort Lauderdale to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Raymond Ellis",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
        contact: {
          contactEmail: "majestic.voyage.of.t@velarivoyages.com",
          contactNumber: "+1-309-462-3306"
        }
      }
    ],
    title: "Majestic Voyage of the Sugarcane Skies",
    description: "This mirage takes you beyond the ordinary, starting in Nassau. With breathtaking stops in Fort Lauderdale, Bermuda, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.2,
    tags: ["glacier-cruise","themed-cruise","wildlife"]
  },
  {
    basePrice: 8440,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
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
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
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
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
    }
  }
],
      description: "Board in Nassau for a hand-crafted symphony through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in St. Thomas, Miami.",
      distance: "777 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Nassau to St. Thomas"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Miami"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
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
    "description": "Exploring Miami"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Louis Hall",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "panoramic.awakening.@velarivoyages.com",
          contactNumber: "+1-501-717-3960"
        }
      }
    ],
    title: "Panoramic Awakening of the Caribbean Rhythms",
    description: "Board in Nassau for a hand-crafted symphony through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in St. Thomas, Miami.",
    rating: 4.5,
    tags: ["anniversary-cruise","holiday-cruise"]
  },
  {
    basePrice: 4764,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Leave stress behind with this curated horizon from Nassau. Sail across the best of Caribbean and explore treasures like Philipsburg, Tampa with comfort and style.",
      distance: "1018 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Nassau to Philipsburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Philipsburg to Tampa"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Tampa to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Nassau"
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
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Antonio Wallace",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/61.jpg",
        contact: {
          contactEmail: "azure.resonance.of.t@velarivoyages.com",
          contactNumber: "+1-977-465-7904"
        }
      }
    ],
    title: "Azure Resonance of the Island Reverie",
    description: "Leave stress behind with this curated horizon from Nassau. Sail across the best of Caribbean and explore treasures like Philipsburg, Tampa with comfort and style.",
    rating: 4.1,
    tags: ["cruise-holiday","nature","long-distance"]
  },
  {
    basePrice: 6835,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Enjoy seamless luxury on this eternal serenade beginning in Nassau. Visit breathtaking Caribbean locales such as Cozumel, Fort Lauderdale, Tampa on this unforgettable itinerary.",
      distance: "533 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Nassau to Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Fort Lauderdale"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Fort Lauderdale to Tampa"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Tampa to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
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
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Gerald Graham",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "spectacular.adventur@velarivoyages.com",
          contactNumber: "+1-973-145-7776"
        }
      }
    ],
    title: "Spectacular Adventure of the Caribbean Rhythms",
    description: "Enjoy seamless luxury on this eternal serenade beginning in Nassau. Visit breathtaking Caribbean locales such as Cozumel, Fort Lauderdale, Tampa on this unforgettable itinerary.",
    rating: 4.7,
    tags: ["VIP"]
  },
  {
    basePrice: 6272,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
    "city": "Bermuda",
    "country": "Bermuda",
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
    "city": "Fort Lauderdale",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Escape the everyday with this secluded journey through Caribbean, departing from Nassau. You'll visit Cozumel, Bermuda, Miami, Fort Lauderdale, where every stop is a new adventure.",
      distance: "879 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Nassau to Cozumel"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Bermuda"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Bermuda to Miami"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Miami to Fort Lauderdale"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Bermuda"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Fort Lauderdale"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Louis Price",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "mythic.renaissance.o@velarivoyages.com",
          contactNumber: "+1-231-371-5083"
        }
      }
    ],
    title: "Mythic Renaissance of the Reggae Shores",
    description: "Escape the everyday with this secluded journey through Caribbean, departing from Nassau. You'll visit Cozumel, Bermuda, Miami, Fort Lauderdale, where every stop is a new adventure.",
    rating: 4.3,
    tags: ["cruise-adventure","historical","family-friendly"]
  },
  {
    basePrice: 6362,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
    "city": "St. Thomas",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Cruise into cultural richness aboard this panoramic realm departing Nassau. Savor local cuisine and uncover regional beauty from Cozumel to San Juan.",
      distance: "1492 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Nassau to Cozumel"
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
    "description": "Sailing from San Juan to Philipsburg"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Philipsburg to St. Thomas"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Nassau"
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
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adam Fisher",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "celestial.embrace.of@velarivoyages.com",
          contactNumber: "+1-386-772-9125"
        }
      }
    ],
    title: "Celestial Embrace of the Reggae Shores",
    description: "Cruise into cultural richness aboard this panoramic realm departing Nassau. Savor local cuisine and uncover regional beauty from Cozumel to San Juan.",
    rating: 4.3,
    tags: ["long-distance"]
  },
  {
    basePrice: 9444,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
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
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
    "city": "Bermuda",
    "country": "Bermuda",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "Enjoy seamless luxury on this secluded resonance beginning in Nassau. Visit breathtaking Caribbean locales such as Miami, Bermuda on this unforgettable itinerary.",
      distance: "945 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Nassau to Miami"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Miami to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Miguel Fisher",
        role: "Travel Advisor",
        languages: ["English","Spanish","Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "infinite.wanderlust.@velarivoyages.com",
          contactNumber: "+1-313-647-9896"
        }
      }
    ],
    title: "Infinite Wanderlust of the Reggae Shores",
    description: "Enjoy seamless luxury on this secluded resonance beginning in Nassau. Visit breathtaking Caribbean locales such as Miami, Bermuda on this unforgettable itinerary.",
    rating: 4.9,
    tags: ["wildlife","exclusive"]
  },
  {
    basePrice: 3178,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
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
    "country": "Mexico",
    "coordinates": {
      "latitude": 20.4233,
      "longitude": -86.9212
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
    "city": "Bermuda",
    "country": "Bermuda",
    "coordinates": {
      "latitude": 32.3214,
      "longitude": -64.75737
    }
  }
],
      description: "Sail from Nassau into a world of wonder. The Caribbean beckons with unforgettable ports like Roatán, Cozumel, George Town, Bermuda, where every view is picture-perfect and every moment is priceless.",
      distance: "1060 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Nassau to Roatán"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Roatán to Cozumel"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Cozumel to George Town"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from George Town to Bermuda"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring George Town"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Bermuda"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samantha Graves",
        role: "Cruise Specialist",
        languages: ["English","Haitian","Spanish","French","Aymara"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "starlit.symphony.of.@velarivoyages.com",
          contactNumber: "+1-534-905-1483"
        }
      }
    ],
    title: "Starlit Symphony of the Emerald Cays",
    description: "Sail from Nassau into a world of wonder. The Caribbean beckons with unforgettable ports like Roatán, Cozumel, George Town, Bermuda, where every view is picture-perfect and every moment is priceless.",
    rating: 4.4,
    tags: ["adventure"]
  },
  {
    basePrice: 7379,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Let the waves lead you from Nassau on this sublime quest. Traverse the iconic waters of Caribbean and discover the beauty of Fort Lauderdale, Miami, San Juan.",
      distance: "1222 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Nassau to Fort Lauderdale"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Fort Lauderdale to Miami"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Miami to San Juan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from San Juan to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Nassau"
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
    "description": "Exploring Miami"
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
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Morgan",
        role: "Cruise Specialist",
        languages: ["English","Haitian","Spanish","French","Aymara"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "luminous.awakening.o@velarivoyages.com",
          contactNumber: "+1-971-615-5249"
        }
      }
    ],
    title: "Luminous Awakening of the Rum-Laced Breezes",
    description: "Let the waves lead you from Nassau on this sublime quest. Traverse the iconic waters of Caribbean and discover the beauty of Fort Lauderdale, Miami, San Juan.",
    rating: 5.0,
    tags: ["short-getaway","cruise"]
  },
  {
    basePrice: 3156,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
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
  },
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Leave stress behind with this curated haven from Nassau. Sail across the best of Caribbean and explore treasures like George Town, Roatán, Philipsburg, San Juan with comfort and style.",
      distance: "514 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Nassau to George Town"
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
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Philipsburg to San Juan"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from San Juan to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
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
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Maya Lawson",
        role: "Cruise Specialist",
        languages: ["English","Haitian","Spanish","French","Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "sublime.reunion.of.t@velarivoyages.com",
          contactNumber: "+1-530-946-9821"
        }
      }
    ],
    title: "Sublime Reunion of the Emerald Cays",
    description: "Leave stress behind with this curated haven from Nassau. Sail across the best of Caribbean and explore treasures like George Town, Roatán, Philipsburg, San Juan with comfort and style.",
    rating: 4.5,
    tags: ["cruise-experience","tropical","expedition"]
  },
  {
    basePrice: 2275,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
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
    "city": "Miami",
    "country": "United States",
    "coordinates": {
      "latitude": 25.7617,
      "longitude": -80.1918
    }
  },
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
    }
  }
],
      description: "Escape into the calm waters of Caribbean with this radiant journey from Nassau. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Philipsburg, St. Thomas, San Juan, Miami.",
      distance: "1486 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Nassau to Philipsburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Philipsburg to St. Thomas"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to San Juan"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from San Juan to Miami"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Sailing from Miami to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
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
    "description": "Exploring St. Thomas"
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
    "description": "Exploring Miami"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Exploring Nassau"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mary Day",
        role: "Cruise Specialist",
        languages: ["English","Haitian","Spanish","French","Aymara"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "refined.mythos.of.th@velarivoyages.com",
          contactNumber: "+1-680-728-8138"
        }
      }
    ],
    title: "Refined Mythos of the Island Reverie",
    description: "Escape into the calm waters of Caribbean with this radiant journey from Nassau. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Philipsburg, St. Thomas, San Juan, Miami.",
    rating: 4.9,
    tags: ["long-distance"]
  },
  {
    basePrice: 7364,
    departureLocation: {
  "city": "Nassau",
  "country": "Bahamas",
  "region": "Caribbean",
  "coordinates": {
    "latitude": 25.0582,
    "longitude": -77.3432
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Nassau",
    "country": "Bahamas",
    "region": "Caribbean",
    "coordinates": {
      "latitude": 25.0582,
      "longitude": -77.3432
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
    "city": "George Town",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Start in the vibrant city of Nassau and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in Roatán, St. Thomas, George Town.",
      distance: "1364 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Nassau to Roatán"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Roatán to St. Thomas"
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
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring George Town"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Christine Hamilton",
        role: "Cruise Specialist",
        languages: ["English","Haitian","Spanish","French","Aymara"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "heavenly.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-611-308-6601"
        }
      }
    ],
    title: "Heavenly Mirage of the Pirate Passages",
    description: "Start in the vibrant city of Nassau and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in Roatán, St. Thomas, George Town.",
    rating: 4.0,
    tags: ["wellness","weekend-cruise"]
  }
];
