import { Cruise } from "@/lib/interfaces/services/cruises";

export const stPetersburgCruises: Cruise[] = [
  {
    basePrice: 4789,
    departureLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    arrivalLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  },
  {
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  },
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  }
],
      description: "Depart from the iconic port of St Petersburg and sail through the enchanting Northern Europe. Explore vibrant destinations like Southampton, Kiel, each offering its own unique charm and local flair.",
      distance: "1403 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from St Petersburg to Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Southampton to Kiel"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Kiel to St Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring St Petersburg"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring St Petersburg"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Julie Foster",
        role: "Marketing Coordinator",
        languages: ["English","German","Russian","Czech","Polish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/87.jpg",
        contact: {
          contactEmail: "mystical.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-185-427-3960"
        }
      }
    ],
    title: "Mystical Mirage of the Aurora Veil",
    description: "Depart from the iconic port of St Petersburg and sail through the enchanting Northern Europe. Explore vibrant destinations like Southampton, Kiel, each offering its own unique charm and local flair.",
    rating: 4.0,
    tags: ["cruise-journey"]
  },
  {
    basePrice: 1662,
    departureLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    arrivalLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  },
  {
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  }
],
      description: "Depart St Petersburg on a relaxing oasis through the Northern Europe region. Highlights include the stunning coastlines of Kiel, Stockholm, Dublin, Amsterdam, all while enjoying first-class amenities on board.",
      distance: "590 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from St Petersburg to Kiel"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Kiel to Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Dublin"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Dublin to Amsterdam"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to St Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring St Petersburg"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring St Petersburg"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Reeves",
        role: "Marketing Coordinator",
        languages: ["English","German","Russian","Czech","Polish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "opulent.zenith.of.th@velarivoyages.com",
          contactNumber: "+1-686-881-4903"
        }
      }
    ],
    title: "Opulent Zenith of the Snow-Kissed Harbors",
    description: "Depart St Petersburg on a relaxing oasis through the Northern Europe region. Highlights include the stunning coastlines of Kiel, Stockholm, Dublin, Amsterdam, all while enjoying first-class amenities on board.",
    rating: 4.7,
    tags: ["cruise-adventure"]
  },
  {
    basePrice: 1226,
    departureLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "Sail from St Petersburg into a world of wonder. The Northern Europe beckons with unforgettable ports like Kiel, Helsinki, where every view is picture-perfect and every moment is priceless.",
      distance: "1064 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from St Petersburg to Kiel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Kiel to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring St Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Maya Cooper",
        role: "Marketing Coordinator",
        languages: ["English","German","Russian","Czech","Polish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "forbidden.wanderlust@velarivoyages.com",
          contactNumber: "+1-626-370-6373"
        }
      }
    ],
    title: "Forbidden Wanderlust of the Glacial Reflections",
    description: "Sail from St Petersburg into a world of wonder. The Northern Europe beckons with unforgettable ports like Kiel, Helsinki, where every view is picture-perfect and every moment is priceless.",
    rating: 4.5,
    tags: ["repositioning","relaxation"]
  },
  {
    basePrice: 2883,
    departureLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    arrivalLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  },
  {
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Oslo",
    "country": "Norway",
    "coordinates": {
      "latitude": 59.9139,
      "longitude": 10.7522
    }
  },
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  }
],
      description: "Set off on a whisper from St Petersburg that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Tallinn, Oslo.",
      distance: "679 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from St Petersburg to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Oslo to St Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring St Petersburg"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring St Petersburg"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samantha Hunter",
        role: "Marketing Coordinator",
        languages: ["English","German","Russian","Czech","Polish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "verdant.mystique.of.@velarivoyages.com",
          contactNumber: "+1-603-737-5213"
        }
      }
    ],
    title: "Verdant Mystique of the Baltic Echoes",
    description: "Set off on a whisper from St Petersburg that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Tallinn, Oslo.",
    rating: 4.2,
    tags: ["cruise-ship"]
  },
  {
    basePrice: 7233,
    departureLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  },
  {
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Leave ordinary behind as you sail from St Petersburg across the captivating Northern Europe. Discover the distinctive personality of each destination, from Berlin, St. Petersburg, Tallinn, Kiel.",
      distance: "863 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from St Petersburg to Berlin"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Berlin to St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring St Petersburg"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amy Murray",
        role: "Marketing Coordinator",
        languages: ["English","German","Russian","Czech","Polish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        contact: {
          contactEmail: "enchanting.frontier.@velarivoyages.com",
          contactNumber: "+1-200-123-4269"
        }
      }
    ],
    title: "Enchanting Frontier of the Aurora Veil",
    description: "Leave ordinary behind as you sail from St Petersburg across the captivating Northern Europe. Discover the distinctive personality of each destination, from Berlin, St. Petersburg, Tallinn, Kiel.",
    rating: 4.0,
    tags: ["cruise-vacation","cruise-line"]
  },
  {
    basePrice: 4003,
    departureLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    arrivalLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  },
  {
    "city": "Oslo",
    "country": "Norway",
    "coordinates": {
      "latitude": 59.9139,
      "longitude": 10.7522
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  },
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  }
],
      description: "This hand-selected starlit cruise offers a true taste of Northern Europe. Depart from St Petersburg and explore ports like London, Oslo, Berlin, each telling a story through food, music, and tradition.",
      distance: "1300 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from St Petersburg to London"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from London to Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Oslo to Berlin"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Berlin to St Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring St Petersburg"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring St Petersburg"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Catherine Gardner",
        role: "Marketing Coordinator",
        languages: ["English","German","Russian","Czech","Polish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "starlit.saga.of.the.@velarivoyages.com",
          contactNumber: "+1-842-261-9325"
        }
      }
    ],
    title: "Starlit Saga of the Aurora Veil",
    description: "This hand-selected starlit cruise offers a true taste of Northern Europe. Depart from St Petersburg and explore ports like London, Oslo, Berlin, each telling a story through food, music, and tradition.",
    rating: 5.0,
    tags: ["weekend-cruise","cruise","anniversary-cruise"]
  },
  {
    basePrice: 2663,
    departureLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    arrivalLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
    }
  },
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  }
],
      description: "Escape the everyday with this hidden journey through Northern Europe, departing from St Petersburg. You'll visit Dublin, Southampton, where every stop is a new adventure.",
      distance: "528 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from St Petersburg to Dublin"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dublin to Southampton"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Southampton to St Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring St Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring St Petersburg"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Douglas",
        role: "Marketing Coordinator",
        languages: ["English","German","Russian","Czech","Polish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "extraordinary.renais@velarivoyages.com",
          contactNumber: "+1-167-348-6612"
        }
      }
    ],
    title: "Extraordinary Renaissance of the Fairy Tale Villages",
    description: "Escape the everyday with this hidden journey through Northern Europe, departing from St Petersburg. You'll visit Dublin, Southampton, where every stop is a new adventure.",
    rating: 4.4,
    tags: ["cruise-journey"]
  },
  {
    basePrice: 6315,
    departureLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    arrivalLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  }
],
      description: "Join us in St Petersburg for a elevation of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like Amsterdam, Berlin, Dublin where timeless traditions meet modern luxuries.",
      distance: "847 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from St Petersburg to Amsterdam"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Berlin"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Berlin to Dublin"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Dublin to St Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring St Petersburg"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring St Petersburg"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nicole Baker",
        role: "Marketing Coordinator",
        languages: ["English","German","Russian","Czech","Polish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/87.jpg",
        contact: {
          contactEmail: "infinite.oasis.of.th@velarivoyages.com",
          contactNumber: "+1-707-248-4460"
        }
      }
    ],
    title: "Infinite Oasis of the Fairy Tale Villages",
    description: "Join us in St Petersburg for a elevation of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like Amsterdam, Berlin, Dublin where timeless traditions meet modern luxuries.",
    rating: 4.1,
    tags: ["wellness"]
  },
  {
    basePrice: 3619,
    departureLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  },
  {
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "Savor each moment of this heavenly escape through Northern Europe, starting in St Petersburg. Visit renowned locations like St. Petersburg, Amsterdam, Berlin, Dublin, where adventure and relaxation intertwine.",
      distance: "1230 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from St Petersburg to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Amsterdam"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Berlin"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Berlin to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring St Petersburg"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Rachel Dean",
        role: "Marketing Coordinator",
        languages: ["English","German","Russian","Czech","Polish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "crystalline.adventur@velarivoyages.com",
          contactNumber: "+1-849-101-9056"
        }
      }
    ],
    title: "Crystalline Adventure of the Saga-Strewn Coastlines",
    description: "Savor each moment of this heavenly escape through Northern Europe, starting in St Petersburg. Visit renowned locations like St. Petersburg, Amsterdam, Berlin, Dublin, where adventure and relaxation intertwine.",
    rating: 4.8,
    tags: ["holiday-cruise","cruise-vacation","adventure"]
  },
  {
    basePrice: 3027,
    departureLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    arrivalLocation: {
  "city": "St Petersburg",
  "country": "Russia",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 59.9343,
    "longitude": 30.3351
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  },
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  },
  {
    "city": "St Petersburg",
    "country": "Russia",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 59.9343,
      "longitude": 30.3351
    }
  }
],
      description: "Depart from iconic St Petersburg and traverse the Northern Europe with visits to Kiel, Copenhagen. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1488 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from St Petersburg to Kiel"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Kiel to Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring St Petersburg"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring St Petersburg"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Zoe Watson",
        role: "Marketing Coordinator",
        languages: ["English","German","Russian","Czech","Polish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "infinite.reverie.of.@velarivoyages.com",
          contactNumber: "+1-547-159-5690"
        }
      }
    ],
    title: "Infinite Reverie of the Frosted Kingdoms",
    description: "Depart from iconic St Petersburg and traverse the Northern Europe with visits to Kiel, Copenhagen. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.5,
    tags: ["cultural","cruise-ship","cruise"]
  }
];
