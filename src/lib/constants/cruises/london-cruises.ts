import { Cruise } from "@/lib/interfaces/services/cruises";

export const londonCruises: Cruise[] = [
{
    basePrice: 8500,
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
    "city": "Stockholm",
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
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "Enjoy seamless luxury on this celestial journey beginning in London. Visit breathtaking Northern Europe locales such as St. Petersburg, Copenhagen, Stockholm, Tallinn on this unforgettable itinerary.",
      distance: "552 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from London to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Tallinn to London"
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
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Helen Campbell",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "captivating.odyssey.@velarivoyages.com",
          contactNumber: "+1-108-598-8418"
        }
      }
    ],
    title: "Captivating Odyssey of the Royal Metropolis",
    description: "Enjoy seamless luxury on this celestial journey beginning in London. Visit breathtaking Northern Europe locales such as St. Petersburg, Copenhagen, Stockholm, Tallinn on this unforgettable itinerary.",
    rating: 4.3,
    tags: ["VIP","romantic"]
  },
  {
    basePrice: 5217,
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
  "city": "St. Petersburg",
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
      description: "Begin your odyssey in London, a gateway to the soul of Northern Europe. Enjoy days spent exploring Copenhagen, Helsinki, Tallinn, St. Petersburg and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1084 nautical miles",
      totalDuration: "12 days",
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
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Tallinn to St. Petersburg"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Adeline Marshall",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "mesmerizing.renaissa@velarivoyages.com",
          contactNumber: "+1-233-421-8580"
        }
      }
    ],
    title: "Mesmerizing Renaissance of the Thames Capital",
    description: "Begin your odyssey in London, a gateway to the soul of Northern Europe. Enjoy days spent exploring Copenhagen, Helsinki, Tallinn, St. Petersburg and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.7,
    tags: ["romantic","seasonal"]
  },
  {
    basePrice: 1982,
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
      description: "This handpicked odyssey begins in London and travels through Northern Europe's iconic waterscapes. Discover Oslo, Helsinki, St. Petersburg, Stockholm as each day brings new stories and every night offers elegant repose.",
      distance: "719 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Oslo to Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Ashley Henderson",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "enchanting.realm.of.@velarivoyages.com",
          contactNumber: "+1-367-166-3208"
        }
      }
    ],
    title: "Enchanting Realm of the Nordic Waters",
    description: "This handpicked odyssey begins in London and travels through Northern Europe's iconic waterscapes. Discover Oslo, Helsinki, St. Petersburg, Stockholm as each day brings new stories and every night offers elegant repose.",
    rating: 4.2,
    tags: ["adventure","exclusive","luxury"]
  },
  {
    basePrice: 4635,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set course from London for an inspiring mesmerizing journey across Northern Europe. Whether exploring ancient ruins in Tallinn or soaking up coastal views in Copenhagen, every day offers a perfect mix of discovery and relaxation.",
      distance: "1370 nautical miles",
      totalDuration: "11 days",
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
    "description": "Sailing from Copenhagen to Stockholm"
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
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Virginia Collins",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "timeless.saga.of.the@velarivoyages.com",
          contactNumber: "+1-910-536-7460"
        }
      }
    ],
    title: "Timeless Saga of the Thames Capital",
    description: "Set course from London for an inspiring mesmerizing journey across Northern Europe. Whether exploring ancient ruins in Tallinn or soaking up coastal views in Copenhagen, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.6,
    tags: ["short-getaway","sightseeing"]
  },
  {
    basePrice: 4367,
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This handpicked odyssey begins in London and travels through Northern Europe's iconic waterscapes. Discover St. Petersburg, Copenhagen, Stockholm as each day brings new stories and every night offers elegant repose.",
      distance: "1346 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Stockholm"
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
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Janet Russell",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "enchanting.explorati@velarivoyages.com",
          contactNumber: "+1-826-286-4772"
        }
      }
    ],
    title: "Enchanting Exploration of the Royal Metropolis",
    description: "This handpicked odyssey begins in London and travels through Northern Europe's iconic waterscapes. Discover St. Petersburg, Copenhagen, Stockholm as each day brings new stories and every night offers elegant repose.",
    rating: 4.5,
    tags: ["short-getaway"]
  },
  {
    basePrice: 1650,
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
    isPopular: true, // Make fewer cruises "popular"
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
    "city": "Helsinki",
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
  }
],
      description: "Depart London on a relaxing sojourn through the Northern Europe region. Highlights include the stunning coastlines of Helsinki, St. Petersburg, Tallinn, Copenhagen, all while enjoying first-class amenities on board.",
      distance: "1484 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Copenhagen"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Emma Ellis",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "infinite.renaissance@velarivoyages.com",
          contactNumber: "+1-280-674-1338"
        }
      }
    ],
    title: "Infinite Renaissance of the Royal Metropolis",
    description: "Depart London on a relaxing sojourn through the Northern Europe region. Highlights include the stunning coastlines of Helsinki, St. Petersburg, Tallinn, Copenhagen, all while enjoying first-class amenities on board.",
    rating: 4.8,
    tags: ["VIP","tropical"]
  },
  {
    basePrice: 2068,
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
      description: "Escape into the calm waters of Northern Europe with this captivating journey from London. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Oslo, Stockholm, Copenhagen, Helsinki.",
      distance: "578 nautical miles",
      totalDuration: "21 days",
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
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
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
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 20",
    "end": "Day 21",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Zoe Palmer",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "enchanting.escape.of@velarivoyages.com",
          contactNumber: "+1-248-245-6828"
        }
      }
    ],
    title: "Enchanting Escape of the Runestone Realms",
    description: "Escape into the calm waters of Northern Europe with this captivating journey from London. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Oslo, Stockholm, Copenhagen, Helsinki.",
    rating: 4.3,
    tags: ["family-friendly"]
  },
  {
    basePrice: 8076,
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
    "city": "Helsinki",
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
      description: "Sail away from the charming harbor of London on this unforgettable journey across Northern Europe. Uncover the beauty and history of Helsinki, St. Petersburg, Copenhagen, Oslo with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1099 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from London to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Oslo to London"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Nicole Hayes",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "captivating.explorat@velarivoyages.com",
          contactNumber: "+1-537-761-7022"
        }
      }
    ],
    title: "Captivating Exploration of the Royal Metropolis",
    description: "Sail away from the charming harbor of London on this unforgettable journey across Northern Europe. Uncover the beauty and history of Helsinki, St. Petersburg, Copenhagen, Oslo with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.9,
    tags: ["long-distance","luxury"]
  },
  {
    basePrice: 1853,
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
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "Leave ordinary behind as you sail from London across the captivating Northern Europe. Discover the distinctive personality of each destination, from Stockholm, St. Petersburg, Tallinn, Copenhagen.",
      distance: "646 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Copenhagen"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to London"
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Michelle Cooper",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "unforgettable.requie@velarivoyages.com",
          contactNumber: "+1-298-580-9266"
        }
      }
    ],
    title: "Unforgettable Requiem of the Royal Metropolis",
    description: "Leave ordinary behind as you sail from London across the captivating Northern Europe. Discover the distinctive personality of each destination, from Stockholm, St. Petersburg, Tallinn, Copenhagen.",
    rating: 4.6,
    tags: ["VIP","sightseeing"]
  },
  {
    basePrice: 5190,
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
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
      description: "Your tide begins in London, where every sunset on the Northern Europe horizon promises another day of discovery—from Stockholm, Copenhagen to hidden ports of charm.",
      distance: "1170 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from London to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to London"
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
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Valentina Maxwell",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/49.jpg",
        contact: {
          contactEmail: "majestic.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-734-347-1630"
        }
      }
    ],
    title: "Majestic Odyssey of the Twilight Fjords",
    description: "Your tide begins in London, where every sunset on the Northern Europe horizon promises another day of discovery—from Stockholm, Copenhagen to hidden ports of charm.",
    rating: 4.8,
    tags: ["VIP"]
  },
  {
    basePrice: 7664,
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
      description: "A voyage of contrasts awaits from London. Discover the historical and natural richness of Northern Europe as you cruise to spectacular destinations like Oslo, Stockholm, Helsinki.",
      distance: "1016 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from London to Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Oslo"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Porter",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "captivating.mirage.o@velarivoyages.com",
          contactNumber: "+1-533-278-9815"
        }
      }
    ],
    title: "Captivating Mirage of the Royal Metropolis",
    description: "A voyage of contrasts awaits from London. Discover the historical and natural richness of Northern Europe as you cruise to spectacular destinations like Oslo, Stockholm, Helsinki.",
    rating: 4.5,
    tags: ["themed-cruise","sightseeing","tropical"]
  },
  {
    basePrice: 9378,
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
      description: "Sail from London into a world of wonder. The Northern Europe beckons with unforgettable ports like Tallinn, St. Petersburg, Helsinki, where every view is picture-perfect and every moment is priceless.",
      distance: "1445 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from London to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
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
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sophia Wells",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "breathtaking.retreat@velarivoyages.com",
          contactNumber: "+1-346-127-3957"
        }
      }
    ],
    title: "Breathtaking Retreat of the Runestone Realms",
    description: "Sail from London into a world of wonder. The Northern Europe beckons with unforgettable ports like Tallinn, St. Petersburg, Helsinki, where every view is picture-perfect and every moment is priceless.",
    rating: 4.7,
    tags: ["relaxation","adventure"]
  },
  {
    basePrice: 8847,
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
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
      description: "Your odyssey begins in London, where every sunset on the Northern Europe horizon promises another day of discovery—from St. Petersburg, Stockholm, Helsinki, Copenhagen to hidden ports of charm.",
      distance: "1295 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Copenhagen"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to London"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Scarlett Morgan",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "mesmerizing.escape.o@velarivoyages.com",
          contactNumber: "+1-648-482-7381"
        }
      }
    ],
    title: "Mesmerizing Escape of the Royal Metropolis",
    description: "Your odyssey begins in London, where every sunset on the Northern Europe horizon promises another day of discovery—from St. Petersburg, Stockholm, Helsinki, Copenhagen to hidden ports of charm.",
    rating: 4.2,
    tags: ["exclusive","sightseeing"]
  },
  {
    basePrice: 9231,
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
      description: "Board in London for a hand-crafted journey through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Helsinki, Tallinn.",
      distance: "641 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from London to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Tallinn to London"
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
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Laura Hamilton",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "timeless.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-164-304-7050"
        }
      }
    ],
    title: "Timeless Sanctuary of the Royal Metropolis",
    description: "Board in London for a hand-crafted journey through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Helsinki, Tallinn.",
    rating: 4.1,
    tags: ["adventure","exclusive","long-distance"]
  },
  {
    basePrice: 5138,
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
      description: "Experience the elegance of the seas on this midnight odyssey through Northern Europe, starting from the illustrious port of London. From Helsinki to Stockholm, each destination offers its own story, culture, and breathtaking views.",
      distance: "1237 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from London to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
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
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Linda Maxwell",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "hidden.escape.of.the@velarivoyages.com",
          contactNumber: "+1-241-874-8553"
        }
      }
    ],
    title: "Hidden Escape of the Royal Metropolis",
    description: "Experience the elegance of the seas on this midnight odyssey through Northern Europe, starting from the illustrious port of London. From Helsinki to Stockholm, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.5,
    tags: ["exclusive","seasonal"]
  },
  {
    basePrice: 9412,
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
    "city": "Stockholm",
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
      description: "An escape like no other begins in London, where your retreat launches into the heart of Northern Europe. Discover the magic of Stockholm, Oslo, Tallinn with style and sophistication.",
      distance: "1346 nautical miles",
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
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Maria Foster",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "hidden.passage.of.th@velarivoyages.com",
          contactNumber: "+1-547-496-3322"
        }
      }
    ],
    title: "Hidden Passage of the Thames Capital",
    description: "An escape like no other begins in London, where your retreat launches into the heart of Northern Europe. Discover the magic of Stockholm, Oslo, Tallinn with style and sophistication.",
    rating: 4.1,
    tags: ["relaxation"]
  },
  {
    basePrice: 5156,
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
  "city": "Helsinki",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  },
  {
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Step aboard in London and begin a crystalline journey through the scenic Northern Europe. From historic cities to coastal hideaways like Copenhagen, Helsinki, every day is unforgettable.",
      distance: "1487 nautical miles",
      totalDuration: "9 days",
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
    "description": "Sailing from Copenhagen to Helsinki"
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
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Christine Knight",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
        contact: {
          contactEmail: "eternal.excursion.of@velarivoyages.com",
          contactNumber: "+1-226-914-5422"
        }
      }
    ],
    title: "Eternal Excursion of the Royal Metropolis",
    description: "Step aboard in London and begin a crystalline journey through the scenic Northern Europe. From historic cities to coastal hideaways like Copenhagen, Helsinki, every day is unforgettable.",
    rating: 5.0,
    tags: ["VIP","short-getaway","family-friendly"]
  },
  {
    basePrice: 7103,
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
  "city": "St. Petersburg",
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
  }
],
      description: "Sail into splendor from London on a enchanting voyage through Northern Europe. Let each stop—from Copenhagen to St. Petersburg—reveal the unique flavors and colors of the region.",
      distance: "1165 nautical miles",
      totalDuration: "8 days",
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
    "description": "Sailing from Copenhagen to St. Petersburg"
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
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Grace Graham",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "majestic.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-644-586-1343"
        }
      }
    ],
    title: "Majestic Sanctuary of the Nordic Waters",
    description: "Sail into splendor from London on a enchanting voyage through Northern Europe. Let each stop—from Copenhagen to St. Petersburg—reveal the unique flavors and colors of the region.",
    rating: 4.2,
    tags: ["romantic"]
  },
  {
    basePrice: 1203,
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
      description: "Let the waves lead you from London on this eternal passage. Traverse the iconic waters of Northern Europe and discover the beauty of Helsinki, Tallinn.",
      distance: "1099 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from London to Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
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
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Layla Montgomery",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "starlit.passage.of.t@velarivoyages.com",
          contactNumber: "+1-273-126-2973"
        }
      }
    ],
    title: "Starlit Passage of the Royal Metropolis",
    description: "Let the waves lead you from London on this eternal passage. Traverse the iconic waters of Northern Europe and discover the beauty of Helsinki, Tallinn.",
    rating: 4.6,
    tags: ["luxury","long-distance","fall-cruise"]
  },
  {
    basePrice: 1478,
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
    "city": "Helsinki",
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
      description: "Step into a world of elegance and exploration from London. This reverie through the Northern Europe unveils stunning stops including Helsinki, Copenhagen, Tallinn, Oslo, all with first-class service.",
      distance: "1028 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from London to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Oslo"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Oslo to London"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Emily Dean",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "majestic.mystique.of@velarivoyages.com",
          contactNumber: "+1-606-543-5525"
        }
      }
    ],
    title: "Majestic Mystique of the Thames Capital",
    description: "Step into a world of elegance and exploration from London. This reverie through the Northern Europe unveils stunning stops including Helsinki, Copenhagen, Tallinn, Oslo, all with first-class service.",
    rating: 4.3,
    tags: ["tropical","luxury"]
  },
  {
    basePrice: 2556,
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
  "city": "Helsinki",
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
  }
],
      description: "Set off on a passage from London that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Copenhagen, Stockholm, Tallinn, Helsinki.",
      distance: "1081 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from London to Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Helsinki"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Anna Collins",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "exquisite.exploratio@velarivoyages.com",
          contactNumber: "+1-930-796-5447"
        }
      }
    ],
    title: "Exquisite Exploration of the Thames Capital",
    description: "Set off on a passage from London that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Copenhagen, Stockholm, Tallinn, Helsinki.",
    rating: 4.3,
    tags: ["exclusive","themed-cruise"]
  },
  {
    basePrice: 9497,
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
    "city": "St. Petersburg",
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
      description: "Sail away from the charming harbor of London on this captivating journey across Northern Europe. Uncover the beauty and history of Helsinki, St. Petersburg, Oslo, Stockholm with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1290 nautical miles",
      totalDuration: "19 days",
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
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
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
    "description": "Exploring Stockholm"
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
        name: "Catherine Hudson",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "extraordinary.tide.o@velarivoyages.com",
          contactNumber: "+1-737-673-8546"
        }
      }
    ],
    title: "Extraordinary Tide of the Royal Metropolis",
    description: "Sail away from the charming harbor of London on this captivating journey across Northern Europe. Uncover the beauty and history of Helsinki, St. Petersburg, Oslo, Stockholm with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.7,
    tags: ["VIP","luxury","tropical"]
  },
  {
    basePrice: 9104,
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
      description: "This handpicked saga begins in London and travels through Northern Europe's iconic waterscapes. Discover Copenhagen, Oslo as each day brings new stories and every night offers elegant repose.",
      distance: "576 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sofia Mason",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "hidden.excursion.of.@velarivoyages.com",
          contactNumber: "+1-640-227-3221"
        }
      }
    ],
    title: "Hidden Excursion of the Twilight Fjords",
    description: "This handpicked saga begins in London and travels through Northern Europe's iconic waterscapes. Discover Copenhagen, Oslo as each day brings new stories and every night offers elegant repose.",
    rating: 4.0,
    tags: ["luxury"]
  },
  {
    basePrice: 7426,
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
  }
],
      description: "Launch into adventure from London and sail deep into the heart of the Northern Europe. With ports of call like St. Petersburg, Tallinn, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "653 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from London to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Tallinn"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Ellie Griffin",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/26.jpg",
        contact: {
          contactEmail: "luxurious.mystique.o@velarivoyages.com",
          contactNumber: "+1-636-256-2083"
        }
      }
    ],
    title: "Luxurious Mystique of the Runestone Realms",
    description: "Launch into adventure from London and sail deep into the heart of the Northern Europe. With ports of call like St. Petersburg, Tallinn, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.9,
    tags: ["romantic","luxury"]
  },
  {
    basePrice: 1218,
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
    hasPopularDestination: false,
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
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
      description: "Depart from London on this thoughtfully designed excursion across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Copenhagen, Helsinki, Tallinn.",
      distance: "1224 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from London to Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
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
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Collins",
        role: "Cruise Director",
        languages: ["Spanish"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "velvet.escape.of.the@velarivoyages.com",
          contactNumber: "+1-168-475-1298"
        }
      }
    ],
    title: "Velvet Escape of the Nordic Waters",
    description: "Depart from London on this thoughtfully designed excursion across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Copenhagen, Helsinki, Tallinn.",
    rating: 4.3,
    tags: ["luxury"]
  },
  {
    basePrice: 4633,
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
    "city": "London",
    "country": "United Kingdom",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
],
      description: "Start in the vibrant city of London and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Oslo, Stockholm.",
      distance: "604 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from London to Oslo"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Victor Fox",
        role: "Activities Director",
        languages: ["Turkish","Khmer"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "luxurious.mirage.of.@velarivoyages.com",
          contactNumber: "+1-585-982-5546"
        }
      }
    ],
    title: "Luxurious Mirage of the Twilight Fjords",
    description: "Start in the vibrant city of London and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Oslo, Stockholm.",
    rating: 4.8,
    tags: ["luxury"]
  },
  {
    basePrice: 2293,
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
  "city": "Helsinki",
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
  }
],
      description: "Begin an epic adventure from London, where the seas meet culture. Visit the remarkable ports of Tallinn, Oslo, Helsinki while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "685 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from London to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Oslo to Helsinki"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Juan Ellis",
        role: "Activities Director",
        languages: ["Turkish","Khmer"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "forbidden.exploratio@velarivoyages.com",
          contactNumber: "+1-393-340-2361"
        }
      }
    ],
    title: "Forbidden Exploration of the Nordic Waters",
    description: "Begin an epic adventure from London, where the seas meet culture. Visit the remarkable ports of Tallinn, Oslo, Helsinki while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.7,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 1089,
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
      description: "Your journey through the Northern Europe begins in London, where elegance meets adventure. Explore the shores of Stockholm, Oslo, with curated excursions and luxurious onboard amenities.",
      distance: "678 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from London to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Oslo to London"
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
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring London"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Roger Hawkins",
        role: "Activities Director",
        languages: ["Turkish","Khmer"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "epic.escape.of.the.t@velarivoyages.com",
          contactNumber: "+1-927-399-7842"
        }
      }
    ],
    title: "Epic Escape of the Twilight Fjords",
    description: "Your journey through the Northern Europe begins in London, where elegance meets adventure. Explore the shores of Stockholm, Oslo, with curated excursions and luxurious onboard amenities.",
    rating: 4.7,
    tags: ["long-distance","adventure"]
  },
  {
    basePrice: 1585,
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
      description: "Your reverie begins in London, where every sunset on the Northern Europe horizon promises another day of discovery—from Helsinki, Oslo, Tallinn to hidden ports of charm.",
      distance: "975 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from London to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Oslo to Tallinn"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jeremy Douglas",
        role: "Activities Director",
        languages: ["Turkish","Khmer"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "eternal.escape.of.th@velarivoyages.com",
          contactNumber: "+1-333-647-5770"
        }
      }
    ],
    title: "Eternal Escape of the Runestone Realms",
    description: "Your reverie begins in London, where every sunset on the Northern Europe horizon promises another day of discovery—from Helsinki, Oslo, Tallinn to hidden ports of charm.",
    rating: 5.0,
    tags: ["seasonal","short-getaway"]
  },
  {
    basePrice: 5345,
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
  "city": "St. Petersburg",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
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
      description: "Board in London for a hand-crafted mystique through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Copenhagen, Helsinki, Tallinn, St. Petersburg.",
      distance: "1210 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from London to Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Tallinn"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Tallinn to St. Petersburg"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Juan Warren",
        role: "Activities Director",
        languages: ["Turkish","Khmer"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "mesmerizing.adventur@velarivoyages.com",
          contactNumber: "+1-719-393-5608"
        }
      }
    ],
    title: "Mesmerizing Adventure of the Baltic Echoes",
    description: "Board in London for a hand-crafted mystique through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Copenhagen, Helsinki, Tallinn, St. Petersburg.",
    rating: 4.1,
    tags: ["seasonal","family-friendly"]
  }
];
