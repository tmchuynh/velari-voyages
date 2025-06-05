import { Cruise } from "@/lib/interfaces/services/cruises";

export const barcelonaCruises: Cruise[] = [
  {
    basePrice: 9956,
    departureLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
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
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
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
      description: "Escape into the calm waters of Mediterranean with this whispering journey from Barcelona. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Dubrovnik, Rome.",
      distance: "938 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Barcelona"
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
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Virginia Price",
        role: "Corporate Concierge",
        languages: ["English","Czech","Spanish","German","Swedish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "luminous.tranquility@velarivoyages.com",
          contactNumber: "+1-640-815-2208"
        }
      }
    ],
    title: "Luminous Tranquility of the Mosaic Harbors",
    description: "Escape into the calm waters of Mediterranean with this whispering journey from Barcelona. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Dubrovnik, Rome.",
    rating: 4.5,
    tags: ["tropical","cultural","historical"]
  },
  {
    basePrice: 3300,
    departureLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
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
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Leave ordinary behind as you sail from Barcelona across the captivating Mediterranean. Discover the distinctive personality of each destination, from Lisbon, Venice, Athens.",
      distance: "1137 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Venice"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Venice to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
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
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Crawford",
        role: "Corporate Concierge",
        languages: ["English","Czech","Spanish","German","Swedish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "mesmerizing.tide.of.@velarivoyages.com",
          contactNumber: "+1-433-722-1828"
        }
      }
    ],
    title: "Mesmerizing Tide of the Whispers of Color",
    description: "Leave ordinary behind as you sail from Barcelona across the captivating Mediterranean. Discover the distinctive personality of each destination, from Lisbon, Venice, Athens.",
    rating: 4.8,
    tags: ["exclusive","cruise-experience"]
  },
  {
    basePrice: 9464,
    departureLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    arrivalLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
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
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "From the lively departure port of Barcelona, this curated reverie showcases the finest of Mediterranean. With visits to Santorini, Athens, Milan, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "866 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Milan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Milan to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sandra Nash",
        role: "Corporate Concierge",
        languages: ["English","Czech","Spanish","German","Swedish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "floating.elevation.o@velarivoyages.com",
          contactNumber: "+1-908-476-1397"
        }
      }
    ],
    title: "Floating Elevation of the Citadels by the Sea",
    description: "From the lively departure port of Barcelona, this curated reverie showcases the finest of Mediterranean. With visits to Santorini, Athens, Milan, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 5.0,
    tags: ["wellness","glacier-cruise"]
  },
  {
    basePrice: 4178,
    departureLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
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
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
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
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
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
      description: "Explore a new side of Mediterranean with this majestic saga starting in Barcelona. Visit charming ports such as Athens, Milan, Malta, Venice, each offering its own unique rhythm.",
      distance: "1015 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Athens to Milan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Milan to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Malta to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Skylar Marshall",
        role: "Corporate Concierge",
        languages: ["English","Czech","Spanish","German","Swedish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "floating.sanctum.of.@velarivoyages.com",
          contactNumber: "+1-392-320-9368"
        }
      }
    ],
    title: "Floating Sanctum of the Gaudí’s Playground",
    description: "Explore a new side of Mediterranean with this majestic saga starting in Barcelona. Visit charming ports such as Athens, Milan, Malta, Venice, each offering its own unique rhythm.",
    rating: 4.2,
    tags: ["adventure"]
  },
  {
    basePrice: 2294,
    departureLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    arrivalLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
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
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "Set sail from Barcelona for a voyage like no other. From the picturesque landscapes of Santorini to the lively ambiance of Rome, this radiant cruise will redefine your view of Mediterranean.",
      distance: "541 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Santorini to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Rome to Venice"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Venice to Lisbon"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Santorini"
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
    "description": "Exploring Venice"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
        name: "Allison Warren",
        role: "Corporate Concierge",
        languages: ["English","Czech","Spanish","German","Swedish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "captivating.sanctum.@velarivoyages.com",
          contactNumber: "+1-810-947-8950"
        }
      }
    ],
    title: "Captivating Sanctum of the Spires and Spirits",
    description: "Set sail from Barcelona for a voyage like no other. From the picturesque landscapes of Santorini to the lively ambiance of Rome, this radiant cruise will redefine your view of Mediterranean.",
    rating: 4.0,
    tags: ["general","cruise-getaway"]
  },
  {
    basePrice: 8550,
    departureLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    arrivalLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
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
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "Let this spectacular voyage redefine your idea of travel. From Barcelona, explore the Mediterranean in luxurious comfort, stopping at Dubrovnik, Milan where every port offers a new chapter.",
      distance: "1197 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Milan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Milan to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Barcelona"
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
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Isabella Sutton",
        role: "Corporate Concierge",
        languages: ["English","Czech","Spanish","German","Swedish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/26.jpg",
        contact: {
          contactEmail: "luminous.solstice.of@velarivoyages.com",
          contactNumber: "+1-389-446-7492"
        }
      }
    ],
    title: "Luminous Solstice of the Wine-Soaked Villages",
    description: "Let this spectacular voyage redefine your idea of travel. From Barcelona, explore the Mediterranean in luxurious comfort, stopping at Dubrovnik, Milan where every port offers a new chapter.",
    rating: 5.0,
    tags: ["exclusive"]
  },
  {
    basePrice: 5914,
    departureLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
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
    category: "expedition-cruise",
    itinerary: {
      route: [
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
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
      description: "An escape like no other begins in Barcelona, where your sojourn launches into the heart of Mediterranean. Discover the magic of Florence, Rome with style and sophistication.",
      distance: "1186 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Florence to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Donna Maxwell",
        role: "Corporate Concierge",
        languages: ["English","Czech","Spanish","German","Swedish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
        contact: {
          contactEmail: "sublime.elevation.of@velarivoyages.com",
          contactNumber: "+1-499-671-6186"
        }
      }
    ],
    title: "Sublime Elevation of the Catalan Gem",
    description: "An escape like no other begins in Barcelona, where your sojourn launches into the heart of Mediterranean. Discover the magic of Florence, Rome with style and sophistication.",
    rating: 4.8,
    tags: ["cruise-getaway","tropical"]
  },
  {
    basePrice: 2698,
    departureLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    arrivalLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "repositioning-cruise",
    itinerary: {
      route: [
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
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
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    }
  },
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "Cruise into cultural richness aboard this immersive renaissance departing Barcelona. Savor local cuisine and uncover regional beauty from Dubrovnik to Malta.",
      distance: "1406 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Malta to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Adeline Dixon",
        role: "Corporate Concierge",
        languages: ["English","Czech","Spanish","German","Swedish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "alluring.symphony.of@velarivoyages.com",
          contactNumber: "+1-875-423-6654"
        }
      }
    ],
    title: "Alluring Symphony of the Ancient Shores",
    description: "Cruise into cultural richness aboard this immersive renaissance departing Barcelona. Savor local cuisine and uncover regional beauty from Dubrovnik to Malta.",
    rating: 4.1,
    tags: ["wildlife"]
  },
  {
    basePrice: 1713,
    departureLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
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
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
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
  }
],
      description: "Discover the wonders of Mediterranean aboard this mystical cruise departing from Barcelona. Journey through crystal waters to explore the treasures of Florence, Santorini, Milan, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1180 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Florence"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Florence to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Santorini to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sofia Hamilton",
        role: "Corporate Concierge",
        languages: ["English","Czech","Spanish","German","Swedish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "infinite.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-152-168-7792"
        }
      }
    ],
    title: "Infinite Labyrinth of the Mosaic by the Sea",
    description: "Discover the wonders of Mediterranean aboard this mystical cruise departing from Barcelona. Journey through crystal waters to explore the treasures of Florence, Santorini, Milan, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.8,
    tags: ["cruise-excursion"]
  },
  {
    basePrice: 2502,
    departureLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
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
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
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
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "Begin your elevation in Barcelona, a gateway to the soul of Mediterranean. Enjoy days spent exploring Santorini, Florence, Athens, Milan and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "975 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Santorini to Florence"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Florence to Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Athens to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Barcelona"
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
    "description": "Exploring Florence"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sophia Payne",
        role: "Corporate Concierge",
        languages: ["English","Czech","Spanish","German","Swedish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "oceanic.mythos.of.th@velarivoyages.com",
          contactNumber: "+1-811-528-1914"
        }
      }
    ],
    title: "Oceanic Mythos of the Whispers of Color",
    description: "Begin your elevation in Barcelona, a gateway to the soul of Mediterranean. Enjoy days spent exploring Santorini, Florence, Athens, Milan and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.9,
    tags: ["cruise-experience","holiday-cruise","cruise-journey"]
  }
];
