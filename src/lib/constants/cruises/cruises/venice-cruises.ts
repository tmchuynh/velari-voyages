import { Cruise } from "@/lib/interfaces/services/cruises";

export const veniceCruises: Cruise[] = [
  {
    basePrice: 7374,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
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
      description: "Set off on a awakening from Venice that captures the essence of Mediterranean. Discover cultural gems and culinary delights across Mykonos, Malta, Rome, Milan.",
      distance: "564 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Malta to Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Rome to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Mykonos"
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
    "description": "Exploring Rome"
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
        name: "Sarah Henderson",
        role: "Cruise Specialist",
        languages: ["English","Dutch","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "alluring.zenith.of.t@velarivoyages.com",
          contactNumber: "+1-984-233-9900"
        }
      }
    ],
    title: "Alluring Zenith of the Misty Reflections",
    description: "Set off on a awakening from Venice that captures the essence of Mediterranean. Discover cultural gems and culinary delights across Mykonos, Malta, Rome, Milan.",
    rating: 4.7,
    tags: ["cruise","cruise-adventure"]
  },
  {
    basePrice: 6174,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  }
],
      description: "This whisper takes you beyond the ordinary, starting in Venice. With breathtaking stops in Dubrovnik, Barcelona, Santorini, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "622 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Venice to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
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
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Layla Fisher",
        role: "Cruise Specialist",
        languages: ["English","Dutch","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "tranquil.journey.of.@velarivoyages.com",
          contactNumber: "+1-706-876-7820"
        }
      }
    ],
    title: "Tranquil Journey of the Classical Crossroads",
    description: "This whisper takes you beyond the ordinary, starting in Venice. With breathtaking stops in Dubrovnik, Barcelona, Santorini, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.3,
    tags: ["expedition","long-distance"]
  },
  {
    basePrice: 8284,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
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
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  }
],
      description: "Experience the elegance of the seas on this exquisite discovery through Mediterranean, starting from the illustrious port of Venice. From Athens, Rome to Mykonos, each destination offers its own story, culture, and breathtaking views.",
      distance: "936 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Athens"
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
    "description": "Sailing from Rome to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
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
    "description": "Exploring Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Samantha Russell",
        role: "Cruise Specialist",
        languages: ["English","Dutch","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "mystical.retreat.of.@velarivoyages.com",
          contactNumber: "+1-100-729-7800"
        }
      }
    ],
    title: "Mystical Retreat of the Marble Cities",
    description: "Experience the elegance of the seas on this exquisite discovery through Mediterranean, starting from the illustrious port of Venice. From Athens, Rome to Mykonos, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.9,
    tags: ["romantic","cruise-excursion","general"]
  },
  {
    basePrice: 2095,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Florence",
  "country": "Italy",
  "coordinates": {
    "latitude": 43.769562,
    "longitude": 11.255814
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fjords-tour",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
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
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  }
],
      description: "Your panorama begins in Venice, where every sunset on the Mediterranean horizon promises another day of discovery—from Santorini, Dubrovnik, Milan, Florence to hidden ports of charm.",
      distance: "602 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Milan"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Milan to Florence"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Florence"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Julie Mitchell",
        role: "Cruise Specialist",
        languages: ["English","Dutch","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "forbidden.infinite.o@velarivoyages.com",
          contactNumber: "+1-588-187-4077"
        }
      }
    ],
    title: "Forbidden Infinite of the Lagoon Reverie",
    description: "Your panorama begins in Venice, where every sunset on the Mediterranean horizon promises another day of discovery—from Santorini, Dubrovnik, Milan, Florence to hidden ports of charm.",
    rating: 4.6,
    tags: ["anniversary-cruise","repositioning","weekend-cruise"]
  },
  {
    basePrice: 6691,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "theme-cruise",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
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
  }
],
      description: "Begin your journey in Venice, where tradition meets travel. This immersive legacy reveals the finest of Mediterranean, from the beaches of Santorini to the streets of Malta.",
      distance: "1499 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Venice to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Malta to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Patricia Bennett",
        role: "Cruise Specialist",
        languages: ["English","Dutch","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "ornate.escape.of.the@velarivoyages.com",
          contactNumber: "+1-417-652-9267"
        }
      }
    ],
    title: "Ornate Escape of the Ancient Shores",
    description: "Begin your journey in Venice, where tradition meets travel. This immersive legacy reveals the finest of Mediterranean, from the beaches of Santorini to the streets of Malta.",
    rating: 4.7,
    tags: ["cruise","luxury","cruise-excursion"]
  },
  {
    basePrice: 2132,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Florence",
  "country": "Italy",
  "coordinates": {
    "latitude": 43.769562,
    "longitude": 11.255814
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
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
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  }
],
      description: "Step into a world of elegance and exploration from Venice. This odyssey through the Mediterranean unveils stunning stops including Barcelona, Florence, all with first-class service.",
      distance: "1284 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Florence"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Florence"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sarah Wells",
        role: "Cruise Specialist",
        languages: ["English","Dutch","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "transcendent.tide.of@velarivoyages.com",
          contactNumber: "+1-484-320-5677"
        }
      }
    ],
    title: "Transcendent Tide of the Canal Kingdom",
    description: "Step into a world of elegance and exploration from Venice. This odyssey through the Mediterranean unveils stunning stops including Barcelona, Florence, all with first-class service.",
    rating: 4.5,
    tags: ["cruise-journey","adventure","wellness"]
  },
  {
    basePrice: 8851,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "vip-cruise",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
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
  }
],
      description: "This awe-inspiring discovery begins in Venice and ventures deep into the heart of Mediterranean. Wander through colorful markets, historic streets, and serene coastlines at Lisbon, Santorini, Athens.",
      distance: "743 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Venice to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Harper Watson",
        role: "Cruise Specialist",
        languages: ["English","Dutch","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "dreamlike.escape.of.@velarivoyages.com",
          contactNumber: "+1-794-176-7193"
        }
      }
    ],
    title: "Dreamlike Escape of the Floating City",
    description: "This awe-inspiring discovery begins in Venice and ventures deep into the heart of Mediterranean. Wander through colorful markets, historic streets, and serene coastlines at Lisbon, Santorini, Athens.",
    rating: 4.5,
    tags: ["VIP","holiday-cruise"]
  },
  {
    basePrice: 1390,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fjords-tour",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Your infinite begins in Venice, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Rome to the historic streets of Lisbon, each stop in the Mediterranean will leave a lasting impression.",
      distance: "543 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Venice to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Rome to Lisbon"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Venice"
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
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Coleman",
        role: "Cruise Specialist",
        languages: ["English","Dutch","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "gilded.quest.of.the.@velarivoyages.com",
          contactNumber: "+1-104-266-8629"
        }
      }
    ],
    title: "Gilded Quest of the Crystalline Bays",
    description: "Your infinite begins in Venice, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Rome to the historic streets of Lisbon, each stop in the Mediterranean will leave a lasting impression.",
    rating: 4.5,
    tags: ["holiday-cruise"]
  },
  {
    basePrice: 1340,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
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
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
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
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "Embark on an unforgettable arcadia from the vibrant port of Venice, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Santorini, Lisbon, Barcelona, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1498 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Lisbon"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Cynthia Lawson",
        role: "Cruise Specialist",
        languages: ["English","Dutch","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "ornate.panorama.of.t@velarivoyages.com",
          contactNumber: "+1-566-125-7873"
        }
      }
    ],
    title: "Ornate Panorama of the Gondola Phantom",
    description: "Embark on an unforgettable arcadia from the vibrant port of Venice, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Santorini, Lisbon, Barcelona, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.2,
    tags: ["cultural","themed-cruise"]
  },
  {
    basePrice: 4774,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    arrivalLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Mediterranean",
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Venice",
    "country": "Italy",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Discover the wonders of Mediterranean aboard this midnight cruise departing from Venice. Journey through crystal waters to explore the treasures of Rome, Milan, Lisbon, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "757 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Venice to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Rome to Milan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Milan to Lisbon"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
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
    "description": "Exploring Milan"
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
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Alexa Cooper",
        role: "Cruise Specialist",
        languages: ["English","Dutch","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "mythic.lullaby.of.th@velarivoyages.com",
          contactNumber: "+1-472-595-2929"
        }
      }
    ],
    title: "Mythic Lullaby of the Ancient Shores",
    description: "Discover the wonders of Mediterranean aboard this midnight cruise departing from Venice. Journey through crystal waters to explore the treasures of Rome, Milan, Lisbon, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.2,
    tags: ["cultural","glacier-cruise","cruise-vacation"]
  }
];
