import { Cruise } from "@/lib/interfaces/services/cruises";

export const helsinkiCruises: Cruise[] = [
{
    basePrice: 1637,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "St. Petersburg",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "From the lively departure port of Helsinki, this curated infinite showcases the finest of Northern Europe. With visits to Southampton, St. Petersburg, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1170 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Southampton"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Southampton to St. Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Harry Curtis",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "luxurious.haven.of.t@velarivoyages.com",
          contactNumber: "+1-593-434-7039"
        }
      }
    ],
    title: "Luxurious Haven of the Fairy Tale Villages",
    description: "From the lively departure port of Helsinki, this curated infinite showcases the finest of Northern Europe. With visits to Southampton, St. Petersburg, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.9,
    tags: ["seasonal","general","luxury"]
  },
  {
    basePrice: 1715,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "This horizon-kissed odyssey begins in Helsinki and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Amsterdam, Berlin, Tallinn.",
      distance: "912 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Amsterdam"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Berlin"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Berlin to Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Javier Parker",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "golden.adventure.of.@velarivoyages.com",
          contactNumber: "+1-317-669-2048"
        }
      }
    ],
    title: "Golden Adventure of the Snow-Kissed Harbors",
    description: "This horizon-kissed odyssey begins in Helsinki and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Amsterdam, Berlin, Tallinn.",
    rating: 4.6,
    tags: ["VIP"]
  },
  {
    basePrice: 8421,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "This hand-selected tranquil cruise offers a true taste of Northern Europe. Depart from Helsinki and explore ports like Southampton, Berlin, St. Petersburg, each telling a story through food, music, and tradition.",
      distance: "1320 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Southampton"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Southampton to Berlin"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Berlin to St. Petersburg"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Justin Fox",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "hidden.whisper.of.th@velarivoyages.com",
          contactNumber: "+1-540-114-5255"
        }
      }
    ],
    title: "Hidden Whisper of the Timbered Waterfronts",
    description: "This hand-selected tranquil cruise offers a true taste of Northern Europe. Depart from Helsinki and explore ports like Southampton, Berlin, St. Petersburg, each telling a story through food, music, and tradition.",
    rating: 4.1,
    tags: ["wildlife"]
  },
  {
    basePrice: 4896,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Oslo",
  "country": "Norway",
  "coordinates": {
    "latitude": 59.9139,
    "longitude": 10.7522
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Dublin",
    "country": "Ireland",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Oslo",
    "country": "Norway",
    "coordinates": {
      "latitude": 59.9139,
      "longitude": 10.7522
    }
  }
],
      description: "Unwind and explore on this quest through Northern Europe, departing from Helsinki. With every stop—from St. Petersburg to Oslo—you’ll collect memories that last a lifetime.",
      distance: "640 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Dublin"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Dublin to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Bruce Keller",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "pristine.elevation.o@velarivoyages.com",
          contactNumber: "+1-190-696-7973"
        }
      }
    ],
    title: "Pristine Elevation of the Aurora Veil",
    description: "Unwind and explore on this quest through Northern Europe, departing from Helsinki. With every stop—from St. Petersburg to Oslo—you’ll collect memories that last a lifetime.",
    rating: 4.0,
    tags: ["luxury"]
  },
  {
    basePrice: 1767,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "Step aboard in Helsinki and begin a transcendent journey through the scenic Northern Europe. From historic cities to coastal hideaways like Southampton, St. Petersburg, Copenhagen, every day is unforgettable.",
      distance: "655 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Southampton to St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Gregory Stewart",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/51.jpg",
        contact: {
          contactEmail: "starlit.mythos.of.th@velarivoyages.com",
          contactNumber: "+1-136-895-8160"
        }
      }
    ],
    title: "Starlit Mythos of the Twilight Fjords",
    description: "Step aboard in Helsinki and begin a transcendent journey through the scenic Northern Europe. From historic cities to coastal hideaways like Southampton, St. Petersburg, Copenhagen, every day is unforgettable.",
    rating: 4.0,
    tags: ["cruise-adventure","cultural","anniversary-cruise"]
  },
  {
    basePrice: 2075,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
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
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
      description: "Set course from Helsinki for an inspiring serene journey across Northern Europe. Whether exploring ancient ruins in Kiel or soaking up coastal views in London, every day offers a perfect mix of discovery and relaxation.",
      distance: "1027 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Kiel"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Kiel to London"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from London to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Helsinki"
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
    "description": "Exploring London"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Diego Fletcher",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "majestic.symphony.of@velarivoyages.com",
          contactNumber: "+1-495-891-4981"
        }
      }
    ],
    title: "Majestic Symphony of the Saga-Strewn Coastlines",
    description: "Set course from Helsinki for an inspiring serene journey across Northern Europe. Whether exploring ancient ruins in Kiel or soaking up coastal views in London, every day offers a perfect mix of discovery and relaxation.",
    rating: 5.0,
    tags: ["wildlife"]
  },
  {
    basePrice: 7390,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "London",
    "country": "United Kingdom",
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
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "An unforgettable currents awaits as you cruise from Helsinki across Northern Europe. Dive into history, flavor, and culture with stops including Dublin, London, Stockholm, St. Petersburg.",
      distance: "1060 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Dublin"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dublin to London"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from London to Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joe Palmer",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "crystalline.awakenin@velarivoyages.com",
          contactNumber: "+1-408-763-1436"
        }
      }
    ],
    title: "Crystalline Awakening of the Twilight Fjords",
    description: "An unforgettable currents awaits as you cruise from Helsinki across Northern Europe. Dive into history, flavor, and culture with stops including Dublin, London, Stockholm, St. Petersburg.",
    rating: 4.2,
    tags: ["themed-cruise","glacier-cruise"]
  },
  {
    basePrice: 8754,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "From bustling Helsinki to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Dublin, St. Petersburg deliver a balanced blend of culture and comfort.",
      distance: "1184 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Dublin"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Dublin to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Nicholas Wells",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "mesmerizing.panorama@velarivoyages.com",
          contactNumber: "+1-894-831-2359"
        }
      }
    ],
    title: "Mesmerizing Panorama of the Iron Age Isles",
    description: "From bustling Helsinki to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Dublin, St. Petersburg deliver a balanced blend of culture and comfort.",
    rating: 4.8,
    tags: ["themed-cruise","adventure","cruise-getaway"]
  },
  {
    basePrice: 5325,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "This handpicked tide begins in Helsinki and travels through Northern Europe's iconic waterscapes. Discover Southampton, Tallinn, Copenhagen as each day brings new stories and every night offers elegant repose.",
      distance: "522 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Southampton to Tallinn"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Copenhagen"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "John Wells",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "ornate.sanctum.of.th@velarivoyages.com",
          contactNumber: "+1-108-513-3722"
        }
      }
    ],
    title: "Ornate Sanctum of the Baltic Echoes",
    description: "This handpicked tide begins in Helsinki and travels through Northern Europe's iconic waterscapes. Discover Southampton, Tallinn, Copenhagen as each day brings new stories and every night offers elegant repose.",
    rating: 4.7,
    tags: ["cruise-experience"]
  },
  {
    basePrice: 4121,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Oslo",
    "country": "Norway",
    "coordinates": {
      "latitude": 59.9139,
      "longitude": 10.7522
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Board in Helsinki for a hand-crafted realm through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Southampton, Oslo, Amsterdam.",
      distance: "664 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Southampton to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Oslo to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "John Russell",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "crystalline.eclipse.@velarivoyages.com",
          contactNumber: "+1-488-691-9531"
        }
      }
    ],
    title: "Crystalline Eclipse of the Glacial Reflections",
    description: "Board in Helsinki for a hand-crafted realm through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Southampton, Oslo, Amsterdam.",
    rating: 4.3,
    tags: ["cruise-getaway"]
  },
  {
    basePrice: 1478,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "From bustling Helsinki to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Oslo, London deliver a balanced blend of culture and comfort.",
      distance: "506 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Oslo to London"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from London to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thomas Ellis",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/69.jpg",
        contact: {
          contactEmail: "celestial.passage.of@velarivoyages.com",
          contactNumber: "+1-622-705-5089"
        }
      }
    ],
    title: "Celestial Passage of the Nordic Waters",
    description: "From bustling Helsinki to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Oslo, London deliver a balanced blend of culture and comfort.",
    rating: 4.7,
    tags: ["cruise-getaway"]
  },
  {
    basePrice: 3545,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "London",
    "country": "United Kingdom",
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
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "Depart from Helsinki on this thoughtfully designed pulse across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Berlin, St. Petersburg, London, Stockholm.",
      distance: "644 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Berlin"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Berlin to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to London"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from London to Stockholm"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Roy Keller",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "tidewashed.elevation@velarivoyages.com",
          contactNumber: "+1-196-478-2930"
        }
      }
    ],
    title: "Tide-Washed Elevation of the Twilight Fjords",
    description: "Depart from Helsinki on this thoughtfully designed pulse across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Berlin, St. Petersburg, London, Stockholm.",
    rating: 4.5,
    tags: ["short-getaway"]
  },
  {
    basePrice: 3098,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "London",
  "country": "United Kingdom",
  "coordinates": {
    "latitude": 51.5074,
    "longitude": -0.1278
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Amsterdam",
    "country": "Netherlands",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "Depart from the iconic port of Helsinki and sail through the enchanting Northern Europe. Explore vibrant destinations like Stockholm, Amsterdam, London, each offering its own unique charm and local flair.",
      distance: "894 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Amsterdam"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to London"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Eugene Clark",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "legendary.sojourn.of@velarivoyages.com",
          contactNumber: "+1-908-841-2692"
        }
      }
    ],
    title: "Legendary Sojourn of the Timbered Waterfronts",
    description: "Depart from the iconic port of Helsinki and sail through the enchanting Northern Europe. Explore vibrant destinations like Stockholm, Amsterdam, London, each offering its own unique charm and local flair.",
    rating: 4.8,
    tags: ["glacier-cruise","holiday-cruise"]
  },
  {
    basePrice: 6752,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "This midnight cruise from Helsinki is your ticket to the captivating charm of the Northern Europe. Discover the delights of Berlin, Stockholm with enriching excursions and award-winning service.",
      distance: "900 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Berlin"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Berlin to Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Berlin"
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
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Bryan Bennett",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
        contact: {
          contactEmail: "starlit.frontier.of.@velarivoyages.com",
          contactNumber: "+1-156-433-1978"
        }
      }
    ],
    title: "Starlit Frontier of the Nordic Waters",
    description: "This midnight cruise from Helsinki is your ticket to the captivating charm of the Northern Europe. Discover the delights of Berlin, Stockholm with enriching excursions and award-winning service.",
    rating: 4.4,
    tags: ["anniversary-cruise","general"]
  },
  {
    basePrice: 9918,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
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
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "Set sail from Helsinki for a voyage like no other. From the picturesque landscapes of Stockholm to the lively ambiance of Berlin, this lavish cruise will redefine your view of Northern Europe.",
      distance: "1213 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Berlin"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Berlin to Amsterdam"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Bobby Fletcher",
        role: "Loyalty Program Representative",
        languages: ["English","Italian","Czech","Finnish","Swedish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "forbidden.saga.of.th@velarivoyages.com",
          contactNumber: "+1-897-826-4917"
        }
      }
    ],
    title: "Forbidden Saga of the Iron Age Isles",
    description: "Set sail from Helsinki for a voyage like no other. From the picturesque landscapes of Stockholm to the lively ambiance of Berlin, this lavish cruise will redefine your view of Northern Europe.",
    rating: 4.4,
    tags: ["themed-cruise","family-friendly"]
  },
  {
    basePrice: 5350,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "Enjoy seamless luxury on this moonlit reverie beginning in Helsinki. Visit breathtaking Northern Europe locales such as Amsterdam, Kiel on this unforgettable itinerary.",
      distance: "588 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Amsterdam"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Kiel"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Kiel to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Patricia Price",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Dutch","Danish","German"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "alluring.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-316-516-5120"
        }
      }
    ],
    title: "Alluring Labyrinth of the Aurora Veil",
    description: "Enjoy seamless luxury on this moonlit reverie beginning in Helsinki. Visit breathtaking Northern Europe locales such as Amsterdam, Kiel on this unforgettable itinerary.",
    rating: 4.1,
    tags: ["family-friendly"]
  },
  {
    basePrice: 3389,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Oslo",
    "country": "Norway",
    "coordinates": {
      "latitude": 59.9139,
      "longitude": 10.7522
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "Sail away from Helsinki into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Copenhagen, Kiel, Southampton, Oslo, where history, nature, and cuisine collide.",
      distance: "515 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Kiel"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Kiel to Southampton"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Southampton to Oslo"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Sailing from Oslo to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aaliyah Mitchell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Dutch","Danish","German"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "unforgettable.expedi@velarivoyages.com",
          contactNumber: "+1-308-142-9282"
        }
      }
    ],
    title: "Unforgettable Expedition of the Fairy Tale Villages",
    description: "Sail away from Helsinki into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Copenhagen, Kiel, Southampton, Oslo, where history, nature, and cuisine collide.",
    rating: 4.3,
    tags: ["expedition","cruise-getaway","short-getaway"]
  },
  {
    basePrice: 3627,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "St. Petersburg",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
  }
],
      description: "Explore a new side of Northern Europe with this opulent escape starting in Helsinki. Visit charming ports such as Berlin, St. Petersburg, each offering its own unique rhythm.",
      distance: "1025 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Berlin"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Berlin to St. Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Katherine Sutton",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Dutch","Danish","German"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "moonlit.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-402-790-3778"
        }
      }
    ],
    title: "Moonlit Retreat of the Baltic Echoes",
    description: "Explore a new side of Northern Europe with this opulent escape starting in Helsinki. Visit charming ports such as Berlin, St. Petersburg, each offering its own unique rhythm.",
    rating: 4.6,
    tags: ["seasonal","cruise-holiday"]
  },
  {
    basePrice: 3735,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Southampton",
  "country": "United Kingdom",
  "coordinates": {
    "latitude": 50.9097,
    "longitude": -1.4044
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
    }
  }
],
      description: "Begin your journey in Helsinki, where tradition meets travel. This immersive embrace reveals the finest of Northern Europe, from the beaches of Oslo to the streets of Southampton.",
      distance: "566 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Oslo to Southampton"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Southampton"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Mia Knight",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Dutch","Danish","German"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
        contact: {
          contactEmail: "oceanic.mythos.of.th@velarivoyages.com",
          contactNumber: "+1-333-295-1458"
        }
      }
    ],
    title: "Oceanic Mythos of the Runestone Realms",
    description: "Begin your journey in Helsinki, where tradition meets travel. This immersive embrace reveals the finest of Northern Europe, from the beaches of Oslo to the streets of Southampton.",
    rating: 4.2,
    tags: ["wildlife","seasonal","long-distance"]
  },
  {
    basePrice: 3743,
    departureLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "Board in Helsinki for a hand-crafted oasis through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Stockholm, St. Petersburg, Copenhagen, Berlin.",
      distance: "1268 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Berlin"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Berlin to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Chloe Gibson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English","Dutch","Danish","German"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "aweinspiring.solstic@velarivoyages.com",
          contactNumber: "+1-753-189-5710"
        }
      }
    ],
    title: "Awe-Inspiring Solstice of the Nordic Waters",
    description: "Board in Helsinki for a hand-crafted oasis through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Stockholm, St. Petersburg, Copenhagen, Berlin.",
    rating: 4.9,
    tags: ["historical","themed-cruise"]
  }
];
