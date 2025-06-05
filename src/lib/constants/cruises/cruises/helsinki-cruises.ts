import { Cruise } from "@/lib/interfaces/services/cruises";

export const helsinkiCruises: Cruise[] = [
  {
    basePrice: 8766,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
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
    "city": "Oslo",
    "country": "Norway",
    "coordinates": {
      "latitude": 59.9139,
      "longitude": 10.7522
    }
  }
],
      description: "Unwind and explore on this oasis through Northern Europe, departing from Helsinki. With every stop—from Berlin to Oslo—you’ll collect memories that last a lifetime.",
      distance: "1310 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Berlin"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Berlin to Oslo"
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
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Naomi Hunter",
        role: "Loyalty Program Representative",
        languages: ["English","Greek","Danish","German"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "legendary.horizon.of@velarivoyages.com",
          contactNumber: "+1-873-716-4376"
        }
      }
    ],
    title: "Legendary Horizon of the Timbered Waterfronts",
    description: "Unwind and explore on this oasis through Northern Europe, departing from Helsinki. With every stop—from Berlin to Oslo—you’ll collect memories that last a lifetime.",
    rating: 4.3,
    tags: ["relaxation","adventure","short-getaway"]
  },
  {
    basePrice: 3600,
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
    category: "expedition-cruise",
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
      description: "This extraordinary eclipse from Helsinki offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Stockholm, Copenhagen and London, creating memories that will last a lifetime.",
      distance: "1259 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to London"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Angela Mason",
        role: "Loyalty Program Representative",
        languages: ["English","Greek","Danish","German"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "mesmerizing.realm.of@velarivoyages.com",
          contactNumber: "+1-965-495-2209"
        }
      }
    ],
    title: "Mesmerizing Realm of the Baltic Echoes",
    description: "This extraordinary eclipse from Helsinki offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Stockholm, Copenhagen and London, creating memories that will last a lifetime.",
    rating: 4.8,
    tags: ["wildlife","short-getaway"]
  },
  {
    basePrice: 3030,
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
    category: "luxury-cruise",
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
      description: "Embark from Helsinki and traverse the Northern Europe in style. Whether it’s the energy of Stockholm or the calm of Tallinn, each destination reveals a new side of paradise.",
      distance: "1146 nautical miles",
      totalDuration: "11 days",
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
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
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
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Stockholm"
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
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Jane Griffin",
        role: "Loyalty Program Representative",
        languages: ["English","Greek","Danish","German"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "idyllic.mystique.of.@velarivoyages.com",
          contactNumber: "+1-997-250-7609"
        }
      }
    ],
    title: "Idyllic Mystique of the Snow-Kissed Harbors",
    description: "Embark from Helsinki and traverse the Northern Europe in style. Whether it’s the energy of Stockholm or the calm of Tallinn, each destination reveals a new side of paradise.",
    rating: 4.4,
    tags: ["holiday-cruise","historical","anniversary-cruise"]
  },
  {
    basePrice: 2056,
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
    category: "vip-cruise",
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
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
      description: "Your elevation begins in Helsinki, where the spirit of exploration meets modern luxury. From the sun-drenched shores of London to the historic streets of Amsterdam, each stop in the Northern Europe will leave a lasting impression.",
      distance: "1229 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Helsinki to London"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from London to Amsterdam"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
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
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
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
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jennifer Payne",
        role: "Loyalty Program Representative",
        languages: ["English","Greek","Danish","German"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "extraordinary.tranqu@velarivoyages.com",
          contactNumber: "+1-162-511-7612"
        }
      }
    ],
    title: "Extraordinary Tranquility of the Nordic Waters",
    description: "Your elevation begins in Helsinki, where the spirit of exploration meets modern luxury. From the sun-drenched shores of London to the historic streets of Amsterdam, each stop in the Northern Europe will leave a lasting impression.",
    rating: 4.3,
    tags: ["glacier-cruise","sightseeing"]
  },
  {
    basePrice: 4669,
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
    category: "repositioning-cruise",
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
      description: "Begin a captivating horizon through the Northern Europe, departing Helsinki. With visits to St. Petersburg, Berlin, Dublin, each day brings a new adventure and deeper connection to the region.",
      distance: "1150 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Berlin"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Berlin to Dublin"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Abigail Hunter",
        role: "Loyalty Program Representative",
        languages: ["English","Greek","Danish","German"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/92.jpg",
        contact: {
          contactEmail: "aweinspiring.renaiss@velarivoyages.com",
          contactNumber: "+1-648-542-4290"
        }
      }
    ],
    title: "Awe-Inspiring Renaissance of the Twilight Fjords",
    description: "Begin a captivating horizon through the Northern Europe, departing Helsinki. With visits to St. Petersburg, Berlin, Dublin, each day brings a new adventure and deeper connection to the region.",
    rating: 4.5,
    tags: ["exclusive","relaxation","wellness"]
  },
  {
    basePrice: 1719,
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
  "city": "Tallinn",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
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
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Unwind and explore on this eclipse through Northern Europe, departing from Helsinki. With every stop—from Dublin to Tallinn—you’ll collect memories that last a lifetime.",
      distance: "1125 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Dublin"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Dublin to Tallinn"
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
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samantha Morgan",
        role: "Loyalty Program Representative",
        languages: ["English","Greek","Danish","German"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "charming.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-581-863-3044"
        }
      }
    ],
    title: "Charming Odyssey of the Crown Jewel Capitals",
    description: "Unwind and explore on this eclipse through Northern Europe, departing from Helsinki. With every stop—from Dublin to Tallinn—you’ll collect memories that last a lifetime.",
    rating: 4.5,
    tags: ["adventure"]
  },
  {
    basePrice: 4798,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
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
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
    }
  }
],
      description: "From the lively departure port of Helsinki, this curated frontier showcases the finest of Northern Europe. With visits to Dublin, Amsterdam, Berlin, Southampton, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1388 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Dublin"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Dublin to Amsterdam"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Berlin"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Berlin to Southampton"
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
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Southampton"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Katherine Nash",
        role: "Loyalty Program Representative",
        languages: ["English","Greek","Danish","German"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "forbidden.resonance.@velarivoyages.com",
          contactNumber: "+1-360-823-9359"
        }
      }
    ],
    title: "Forbidden Resonance of the Runestone Realms",
    description: "From the lively departure port of Helsinki, this curated frontier showcases the finest of Northern Europe. With visits to Dublin, Amsterdam, Berlin, Southampton, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.2,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 9369,
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
    category: "repositioning-cruise",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
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
    "city": "Dublin",
    "country": "Ireland",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
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
      description: "Step aboard in Helsinki and begin a captivating journey through the scenic Northern Europe. From historic cities to coastal hideaways like Kiel, Copenhagen, Oslo, Dublin, every day is unforgettable.",
      distance: "1171 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Kiel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Kiel to Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Oslo to Dublin"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Dublin to Helsinki"
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
    "description": "Exploring Kiel"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Dublin"
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
        name: "Sarah Jennings",
        role: "Loyalty Program Representative",
        languages: ["English","Greek","Danish","German"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "radiancedrenched.leg@velarivoyages.com",
          contactNumber: "+1-368-565-9933"
        }
      }
    ],
    title: "Radiance-Drenched Legacy of the Aurora Veil",
    description: "Step aboard in Helsinki and begin a captivating journey through the scenic Northern Europe. From historic cities to coastal hideaways like Kiel, Copenhagen, Oslo, Dublin, every day is unforgettable.",
    rating: 4.1,
    tags: ["nature","exclusive","repositioning"]
  },
  {
    basePrice: 3121,
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
    category: "glacier-cruise",
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
    "city": "Oslo",
    "country": "Norway",
    "coordinates": {
      "latitude": 59.9139,
      "longitude": 10.7522
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
      description: "Embark on an unforgettable haven from the vibrant port of Helsinki, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Copenhagen, Oslo, Kiel, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1118 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Oslo to Kiel"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Kiel to Helsinki"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Amelia Keller",
        role: "Loyalty Program Representative",
        languages: ["English","Greek","Danish","German"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "majestic.reflection.@velarivoyages.com",
          contactNumber: "+1-552-691-8895"
        }
      }
    ],
    title: "Majestic Reflection of the Glacial Reflections",
    description: "Embark on an unforgettable haven from the vibrant port of Helsinki, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Copenhagen, Oslo, Kiel, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.2,
    tags: ["tropical","cruise-getaway","long-distance"]
  },
  {
    basePrice: 7100,
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
    category: "repositioning-cruise",
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
      description: "This handpicked awakening begins in Helsinki and travels through Northern Europe's iconic waterscapes. Discover St. Petersburg, Oslo, Amsterdam, Copenhagen as each day brings new stories and every night offers elegant repose.",
      distance: "1264 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Oslo to Amsterdam"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Copenhagen"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Helsinki"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
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
        name: "Evelyn Palmer",
        role: "Loyalty Program Representative",
        languages: ["English","Greek","Danish","German"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "midnight.horizon.of.@velarivoyages.com",
          contactNumber: "+1-768-926-5087"
        }
      }
    ],
    title: "Midnight Horizon of the Frosted Kingdoms",
    description: "This handpicked awakening begins in Helsinki and travels through Northern Europe's iconic waterscapes. Discover St. Petersburg, Oslo, Amsterdam, Copenhagen as each day brings new stories and every night offers elegant repose.",
    rating: 4.7,
    tags: ["cruise-journey","expedition","sightseeing"]
  }
];
