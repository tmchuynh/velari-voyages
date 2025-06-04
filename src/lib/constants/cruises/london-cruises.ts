import { Cruise } from "@/lib/interfaces/services/cruises";

export const londonCruises: Cruise[] = [
{
    basePrice: 7835,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
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
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "Begin an epic saga from London, where the seas meet culture. Visit the remarkable ports of Tallinn, Copenhagen, St. Petersburg while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "538 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to London"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Naomi Bennett",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "infinite.zenith.of.t@velarivoyages.com",
          contactNumber: "+1-889-572-9673"
        }
      }
    ],
    title: "Infinite Zenith of the Baltic Echoes",
    description: "Begin an epic saga from London, where the seas meet culture. Visit the remarkable ports of Tallinn, Copenhagen, St. Petersburg while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.5,
    tags: ["cruise"]
  },
  {
    basePrice: 5804,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "Sail away from the charming harbor of London on this breathtaking journey across Northern Europe. Uncover the beauty and history of Copenhagen, Stockholm with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1331 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Stockholm to London"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Maria Porter",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "moonlit.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-751-312-6586"
        }
      }
    ],
    title: "Moonlit Odyssey of the Fog-Laced Legacy",
    description: "Sail away from the charming harbor of London on this breathtaking journey across Northern Europe. Uncover the beauty and history of Copenhagen, Stockholm with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.4,
    tags: ["cruise-adventure"]
  },
  {
    basePrice: 7116,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "Sail from London into a world of wonder. The Northern Europe beckons with unforgettable ports like Stockholm, Copenhagen, Tallinn, St. Petersburg, where every view is picture-perfect and every moment is priceless.",
      distance: "1029 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to London"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lily Foster",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/87.jpg",
        contact: {
          contactEmail: "enchanting.serenade.@velarivoyages.com",
          contactNumber: "+1-548-924-9283"
        }
      }
    ],
    title: "Enchanting Serenade of the Royal Metropolis",
    description: "Sail from London into a world of wonder. The Northern Europe beckons with unforgettable ports like Stockholm, Copenhagen, Tallinn, St. Petersburg, where every view is picture-perfect and every moment is priceless.",
    rating: 4.6,
    tags: ["adventure","general","cruise-line"]
  },
  {
    basePrice: 3409,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "Tallinn",
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
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  },
  {
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Helsinki",
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
  }
],
      description: "Savor each moment of this legendary escape through Northern Europe, starting in London. Visit renowned locations like Oslo, Helsinki, Tallinn, where adventure and relaxation intertwine.",
      distance: "1445 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from London to Oslo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Oslo to Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Gabriella West",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "moonlit.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-271-480-7804"
        }
      }
    ],
    title: "Moonlit Retreat of the Clocktower Shadow",
    description: "Savor each moment of this legendary escape through Northern Europe, starting in London. Visit renowned locations like Oslo, Helsinki, Tallinn, where adventure and relaxation intertwine.",
    rating: 4.5,
    tags: ["wildlife","long-distance","tropical"]
  },
  {
    basePrice: 4525,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "Let the winds of the Northern Europe carry you from London to the most stunning ports in the region. With destinations like Stockholm, Helsinki, this reverie redefines luxury travel.",
      distance: "1223 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from London to Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Helsinki to London"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brooklyn Chambers",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "harmonic.panorama.of@velarivoyages.com",
          contactNumber: "+1-654-383-5585"
        }
      }
    ],
    title: "Harmonic Panorama of the Empire’s Veil",
    description: "Let the winds of the Northern Europe carry you from London to the most stunning ports in the region. With destinations like Stockholm, Helsinki, this reverie redefines luxury travel.",
    rating: 4.3,
    tags: ["relaxation","wellness","family-friendly"]
  },
  {
    basePrice: 3701,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
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
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "This extraordinary sanctuary from London offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Stockholm, Copenhagen and Tallinn, creating memories that will last a lifetime.",
      distance: "741 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from London to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Tallinn to London"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Samantha Reed",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "ornate.solstice.of.t@velarivoyages.com",
          contactNumber: "+1-979-433-1314"
        }
      }
    ],
    title: "Ornate Solstice of the Midnight Monarchy",
    description: "This extraordinary sanctuary from London offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Stockholm, Copenhagen and Tallinn, creating memories that will last a lifetime.",
    rating: 4.7,
    tags: ["wildlife","repositioning","cruise-ship"]
  },
  {
    basePrice: 2299,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "Let the spirit of exploration guide your immersive journey from London. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Copenhagen, St. Petersburg, Stockholm.",
      distance: "1474 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from London to Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Stockholm to London"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Chloe Stewart",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/50.jpg",
        contact: {
          contactEmail: "immersive.wanderlust@velarivoyages.com",
          contactNumber: "+1-415-303-4855"
        }
      }
    ],
    title: "Immersive Wanderlust of the Glacial Reflections",
    description: "Let the spirit of exploration guide your immersive journey from London. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Copenhagen, St. Petersburg, Stockholm.",
    rating: 4.2,
    tags: ["family-friendly"]
  },
  {
    basePrice: 6830,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "Stockholm",
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
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  },
  {
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set course from London for an inspiring epic journey across Northern Europe. Whether exploring ancient ruins in Helsinki or soaking up coastal views in Stockholm, every day offers a perfect mix of discovery and relaxation.",
      distance: "873 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from London to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Skylar Gardner",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "velvet.labyrinth.of.@velarivoyages.com",
          contactNumber: "+1-261-675-4840"
        }
      }
    ],
    title: "Velvet Labyrinth of the Midnight Monarchy",
    description: "Set course from London for an inspiring epic journey across Northern Europe. Whether exploring ancient ruins in Helsinki or soaking up coastal views in Stockholm, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.4,
    tags: ["luxury","cruise"]
  },
  {
    basePrice: 7662,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  },
  {
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Let this secret voyage redefine your idea of travel. From London, explore the Northern Europe in luxurious comfort, stopping at Oslo, Helsinki, Stockholm, Copenhagen where every port offers a new chapter.",
      distance: "595 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from London to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Oslo to Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joan Henderson",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "serene.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-658-858-9212"
        }
      }
    ],
    title: "Serene Odyssey of the Thames Capital",
    description: "Let this secret voyage redefine your idea of travel. From London, explore the Northern Europe in luxurious comfort, stopping at Oslo, Helsinki, Stockholm, Copenhagen where every port offers a new chapter.",
    rating: 4.8,
    tags: ["cruise-holiday","wellness"]
  },
  {
    basePrice: 2895,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "Your journey through the Northern Europe begins in London, where elegance meets adventure. Explore the shores of Stockholm, Helsinki, with curated excursions and luxurious onboard amenities.",
      distance: "1207 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from London to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Helsinki to London"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Deborah Morgan",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "panoramic.resonance.@velarivoyages.com",
          contactNumber: "+1-160-979-2118"
        }
      }
    ],
    title: "Panoramic Resonance of the Iron Age Isles",
    description: "Your journey through the Northern Europe begins in London, where elegance meets adventure. Explore the shores of Stockholm, Helsinki, with curated excursions and luxurious onboard amenities.",
    rating: 4.1,
    tags: ["long-distance"]
  },
  {
    basePrice: 6900,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "Oslo",
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
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set course from London for an inspiring velvet journey across Northern Europe. Whether exploring ancient ruins in Copenhagen or soaking up coastal views in Tallinn, every day offers a perfect mix of discovery and relaxation.",
      distance: "1374 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Helsinki"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Chambers",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "panoramic.saga.of.th@velarivoyages.com",
          contactNumber: "+1-356-676-7410"
        }
      }
    ],
    title: "Panoramic Saga of the Clocktower Shadow",
    description: "Set course from London for an inspiring velvet journey across Northern Europe. Whether exploring ancient ruins in Copenhagen or soaking up coastal views in Tallinn, every day offers a perfect mix of discovery and relaxation.",
    rating: 5.0,
    tags: ["weekend-cruise","holiday-cruise","VIP"]
  },
  {
    basePrice: 7431,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  },
  {
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Embark from London and traverse the Northern Europe in style. Whether it’s the energy of Oslo or the calm of Stockholm, each destination reveals a new side of paradise.",
      distance: "764 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from London to Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Ella Russell",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "infinite.infinite.of@velarivoyages.com",
          contactNumber: "+1-766-177-7278"
        }
      }
    ],
    title: "Infinite Infinite of the Aurora Veil",
    description: "Embark from London and traverse the Northern Europe in style. Whether it’s the energy of Oslo or the calm of Stockholm, each destination reveals a new side of paradise.",
    rating: 4.2,
    tags: ["anniversary-cruise","general"]
  },
  {
    basePrice: 5780,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  },
  {
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "Cruise into cultural richness aboard this velvet horizon departing London. Savor local cuisine and uncover regional beauty from Stockholm to Copenhagen.",
      distance: "753 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Oslo to London"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Maria Sutton",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "forbidden.lullaby.of@velarivoyages.com",
          contactNumber: "+1-302-545-5784"
        }
      }
    ],
    title: "Forbidden Lullaby of the Royal Metropolis",
    description: "Cruise into cultural richness aboard this velvet horizon departing London. Savor local cuisine and uncover regional beauty from Stockholm to Copenhagen.",
    rating: 4.3,
    tags: ["expedition","tropical"]
  },
  {
    basePrice: 5178,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "From the lively departure port of London, this curated haven showcases the finest of Northern Europe. With visits to St. Petersburg, Tallinn, Oslo, Helsinki, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1412 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Oslo to Helsinki"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Helsinki to London"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Naomi Hamilton",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "enchanting.reunion.o@velarivoyages.com",
          contactNumber: "+1-162-439-8007"
        }
      }
    ],
    title: "Enchanting Reunion of the Fog-Laced Legacy",
    description: "From the lively departure port of London, this curated haven showcases the finest of Northern Europe. With visits to St. Petersburg, Tallinn, Oslo, Helsinki, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.4,
    tags: ["seasonal"]
  },
  {
    basePrice: 2555,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "Stockholm",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin your retreat in London, a gateway to the soul of Northern Europe. Enjoy days spent exploring Copenhagen, Oslo, Stockholm and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1400 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Oslo to Stockholm"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christine Mitchell",
        role: "Sales Consultant",
        languages: ["Danish"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "aweinspiring.pilgrim@velarivoyages.com",
          contactNumber: "+1-464-636-5592"
        }
      }
    ],
    title: "Awe-Inspiring Pilgrimage of the Runestone Realms",
    description: "Begin your retreat in London, a gateway to the soul of Northern Europe. Enjoy days spent exploring Copenhagen, Oslo, Stockholm and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 5.0,
    tags: ["long-distance"]
  },
  {
    basePrice: 1979,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "Stockholm",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This handpicked tranquility begins in London and travels through Northern Europe's iconic waterscapes. Discover St. Petersburg, Stockholm as each day brings new stories and every night offers elegant repose.",
      distance: "1094 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from London to St. Petersburg"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Barbara Chambers",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Swahili","Khmer"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
        contact: {
          contactEmail: "timeless.pilgrimage.@velarivoyages.com",
          contactNumber: "+1-682-537-8592"
        }
      }
    ],
    title: "Timeless Pilgrimage of the Empire’s Veil",
    description: "This handpicked tranquility begins in London and travels through Northern Europe's iconic waterscapes. Discover St. Petersburg, Stockholm as each day brings new stories and every night offers elegant repose.",
    rating: 4.4,
    tags: ["expedition","wellness"]
  },
  {
    basePrice: 8381,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    arrivalLocation: {
  "city": "Tallinn",
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
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Experience the elegance of the seas on this timeless solstice through Northern Europe, starting from the illustrious port of London. From Stockholm, St. Petersburg, Copenhagen to Tallinn, each destination offers its own story, culture, and breathtaking views.",
      distance: "1320 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from London to Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Scarlett Price",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Swahili","Khmer"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "verdant.mystique.of.@velarivoyages.com",
          contactNumber: "+1-879-605-9906"
        }
      }
    ],
    title: "Verdant Mystique of the Midnight Monarchy",
    description: "Experience the elegance of the seas on this timeless solstice through Northern Europe, starting from the illustrious port of London. From Stockholm, St. Petersburg, Copenhagen to Tallinn, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.7,
    tags: ["VIP","short-getaway"]
  }
];
