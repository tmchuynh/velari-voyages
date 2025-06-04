import { Cruise } from "@/lib/interfaces/services/cruises";

export const copenhagenCruises: Cruise[] = [
{
    basePrice: 7854,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Embark on an unforgettable discovery from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at St. Petersburg, Helsinki, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1119 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Adeline Montgomery",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "breathtaking.adventu@velarivoyages.com",
          contactNumber: "+1-312-948-9552"
        }
      }
    ],
    title: "Breathtaking Adventure of the Scandinavian Pearl",
    description: "Embark on an unforgettable discovery from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at St. Petersburg, Helsinki, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.4,
    tags: ["romantic","short-getaway"]
  },
  {
    basePrice: 3240,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
      description: "Experience the elegance of the seas on this captivating sojourn through Northern Europe, starting from the illustrious port of Copenhagen. From Tallinn, Helsinki, Oslo to Stockholm, each destination offers its own story, culture, and breathtaking views.",
      distance: "846 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Oslo to Stockholm"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Tallinn"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Harper Hall",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "secret.horizon.of.th@velarivoyages.com",
          contactNumber: "+1-598-918-7395"
        }
      }
    ],
    title: "Secret Horizon of the Harbor of Hygge",
    description: "Experience the elegance of the seas on this captivating sojourn through Northern Europe, starting from the illustrious port of Copenhagen. From Tallinn, Helsinki, Oslo to Stockholm, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.3,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 9580,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
      description: "This opulent cruise from Copenhagen is your ticket to the captivating charm of the Northern Europe. Discover the delights of Oslo, Stockholm, Helsinki with enriching excursions and award-winning service.",
      distance: "1098 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sarah Nash",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "secret.escape.of.the@velarivoyages.com",
          contactNumber: "+1-581-852-7135"
        }
      }
    ],
    title: "Secret Escape of the Nordic Waters",
    description: "This opulent cruise from Copenhagen is your ticket to the captivating charm of the Northern Europe. Discover the delights of Oslo, Stockholm, Helsinki with enriching excursions and award-winning service.",
    rating: 4.3,
    tags: ["luxury","romantic","relaxation"]
  },
  {
    basePrice: 3779,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
      description: "Set off on a horizon from Copenhagen that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Oslo, Stockholm, St. Petersburg, Tallinn.",
      distance: "772 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Maria Bennett",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "spectacular.saga.of.@velarivoyages.com",
          contactNumber: "+1-202-467-9592"
        }
      }
    ],
    title: "Spectacular Saga of the Twilight Fjords",
    description: "Set off on a horizon from Copenhagen that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Oslo, Stockholm, St. Petersburg, Tallinn.",
    rating: 4.4,
    tags: ["exclusive","luxury"]
  },
  {
    basePrice: 7019,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This reverie takes you beyond the ordinary, starting in Copenhagen. With breathtaking stops in Tallinn, Helsinki, St. Petersburg, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1311 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Abigail Day",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "mesmerizing.expediti@velarivoyages.com",
          contactNumber: "+1-306-865-8298"
        }
      }
    ],
    title: "Mesmerizing Expedition of the Nordic Waters",
    description: "This reverie takes you beyond the ordinary, starting in Copenhagen. With breathtaking stops in Tallinn, Helsinki, St. Petersburg, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.4,
    tags: ["adventure"]
  },
  {
    basePrice: 6259,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Unwind and explore on this adventure through Northern Europe, departing from Copenhagen. With every stop—from Helsinki to Tallinn—you’ll collect memories that last a lifetime.",
      distance: "845 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
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
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Cynthia Fox",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "whispering.reverie.o@velarivoyages.com",
          contactNumber: "+1-470-134-3229"
        }
      }
    ],
    title: "Whispering Reverie of the Baltic Echoes",
    description: "Unwind and explore on this adventure through Northern Europe, departing from Copenhagen. With every stop—from Helsinki to Tallinn—you’ll collect memories that last a lifetime.",
    rating: 4.6,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 8588,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
      description: "Sail away from the charming harbor of Copenhagen on this exquisite journey across Northern Europe. Uncover the beauty and history of Oslo, Helsinki, Tallinn with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1385 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Oslo to Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Deborah Fox",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "starlit.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-381-127-3437"
        }
      }
    ],
    title: "Starlit Odyssey of the Scandinavian Pearl",
    description: "Sail away from the charming harbor of Copenhagen on this exquisite journey across Northern Europe. Uncover the beauty and history of Oslo, Helsinki, Tallinn with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.8,
    tags: ["short-getaway","adventure"]
  },
  {
    basePrice: 3644,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Cruise into cultural richness aboard this unforgettable escape departing Copenhagen. Savor local cuisine and uncover regional beauty from Stockholm to Tallinn.",
      distance: "1339 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Oslo to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lerato Curtis",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "infinite.reverie.of.@velarivoyages.com",
          contactNumber: "+1-404-936-5573"
        }
      }
    ],
    title: "Infinite Reverie of the Baltic Echoes",
    description: "Cruise into cultural richness aboard this unforgettable escape departing Copenhagen. Savor local cuisine and uncover regional beauty from Stockholm to Tallinn.",
    rating: 4.1,
    tags: ["VIP","long-distance"]
  },
  {
    basePrice: 3447,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Your journey through the Northern Europe begins in Copenhagen, where elegance meets adventure. Explore the shores of Stockholm, Helsinki, with curated excursions and luxurious onboard amenities.",
      distance: "1387 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Rachel Campbell",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "whispering.sojourn.o@velarivoyages.com",
          contactNumber: "+1-279-510-4640"
        }
      }
    ],
    title: "Whispering Sojourn of the Baltic Echoes",
    description: "Your journey through the Northern Europe begins in Copenhagen, where elegance meets adventure. Explore the shores of Stockholm, Helsinki, with curated excursions and luxurious onboard amenities.",
    rating: 4.0,
    tags: ["VIP","themed-cruise","luxury"]
  },
  {
    basePrice: 4140,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Embark on an unforgettable odyssey from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Helsinki, St. Petersburg, Stockholm, Tallinn, this journey combines cultural immersion with breathtaking scenery.",
      distance: "887 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Charlotte Marshall",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "luxurious.odyssey.of@velarivoyages.com",
          contactNumber: "+1-682-153-9375"
        }
      }
    ],
    title: "Luxurious Odyssey of the Twilight Fjords",
    description: "Embark on an unforgettable odyssey from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Helsinki, St. Petersburg, Stockholm, Tallinn, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.7,
    tags: ["themed-cruise","fall-cruise"]
  },
  {
    basePrice: 1834,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Embark on an unforgettable requiem from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Stockholm, Oslo, this journey combines cultural immersion with breathtaking scenery.",
      distance: "833 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
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
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Christine Hawkins",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "unforgettable.odysse@velarivoyages.com",
          contactNumber: "+1-914-525-1078"
        }
      }
    ],
    title: "Unforgettable Odyssey of the Scandinavian Pearl",
    description: "Embark on an unforgettable requiem from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Stockholm, Oslo, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.9,
    tags: ["tropical","adventure"]
  },
  {
    basePrice: 9339,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Leave ordinary behind as you sail from Copenhagen across the captivating Northern Europe. Discover the distinctive personality of each destination, from Oslo, Stockholm, Tallinn, Helsinki.",
      distance: "1147 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Helsinki"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
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
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Christine Day",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "golden.discovery.of.@velarivoyages.com",
          contactNumber: "+1-940-277-4909"
        }
      }
    ],
    title: "Golden Discovery of the Harbor of Hygge",
    description: "Leave ordinary behind as you sail from Copenhagen across the captivating Northern Europe. Discover the distinctive personality of each destination, from Oslo, Stockholm, Tallinn, Helsinki.",
    rating: 4.7,
    tags: ["seasonal","VIP","adventure"]
  },
  {
    basePrice: 6735,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "From the lively departure port of Copenhagen, this curated odyssey showcases the finest of Northern Europe. With visits to Tallinn, Stockholm, Oslo, Helsinki, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1238 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Oslo to Helsinki"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Tallinn"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Victoria Keller",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "breathtaking.passage@velarivoyages.com",
          contactNumber: "+1-261-235-3247"
        }
      }
    ],
    title: "Breathtaking Passage of the Harbor of Hygge",
    description: "From the lively departure port of Copenhagen, this curated odyssey showcases the finest of Northern Europe. With visits to Tallinn, Stockholm, Oslo, Helsinki, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.7,
    tags: ["exclusive","short-getaway"]
  },
  {
    basePrice: 5341,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "This hand-selected spectacular cruise offers a true taste of Northern Europe. Depart from Copenhagen and explore ports like Helsinki, St. Petersburg, each telling a story through food, music, and tradition.",
      distance: "1353 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Valentina Watson",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "captivating.saga.of.@velarivoyages.com",
          contactNumber: "+1-527-356-8178"
        }
      }
    ],
    title: "Captivating Saga of the Scandinavian Pearl",
    description: "This hand-selected spectacular cruise offers a true taste of Northern Europe. Depart from Copenhagen and explore ports like Helsinki, St. Petersburg, each telling a story through food, music, and tradition.",
    rating: 4.4,
    tags: ["romantic"]
  },
  {
    basePrice: 1115,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Savor each moment of this hidden escape through Northern Europe, starting in Copenhagen. Visit renowned locations like Helsinki, Stockholm, St. Petersburg, Tallinn, where adventure and relaxation intertwine.",
      distance: "970 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Tallinn"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Stockholm"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amelia West",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
        contact: {
          contactEmail: "mythic.escape.of.the@velarivoyages.com",
          contactNumber: "+1-618-731-4276"
        }
      }
    ],
    title: "Mythic Escape of the Baltic Echoes",
    description: "Savor each moment of this hidden escape through Northern Europe, starting in Copenhagen. Visit renowned locations like Helsinki, Stockholm, St. Petersburg, Tallinn, where adventure and relaxation intertwine.",
    rating: 4.1,
    tags: ["themed-cruise","adventure"]
  },
  {
    basePrice: 4108,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Begin your requiem in Copenhagen, a gateway to the soul of Northern Europe. Enjoy days spent exploring Oslo, Tallinn, Helsinki, St. Petersburg and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "949 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Helsinki"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Chloe Russell",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "midnight.renaissance@velarivoyages.com",
          contactNumber: "+1-522-832-9294"
        }
      }
    ],
    title: "Midnight Renaissance of the Nordic Waters",
    description: "Begin your requiem in Copenhagen, a gateway to the soul of Northern Europe. Enjoy days spent exploring Oslo, Tallinn, Helsinki, St. Petersburg and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.5,
    tags: ["relaxation","luxury"]
  },
  {
    basePrice: 9872,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
  }
],
      description: "Discover the wonders of Northern Europe aboard this extraordinary cruise departing from Copenhagen. Journey through crystal waters to explore the treasures of Helsinki, Stockholm, St. Petersburg, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "548 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sandra Curtis",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "secret.quest.of.the.@velarivoyages.com",
          contactNumber: "+1-320-661-4156"
        }
      }
    ],
    title: "Secret Quest of the Baltic Echoes",
    description: "Discover the wonders of Northern Europe aboard this extraordinary cruise departing from Copenhagen. Journey through crystal waters to explore the treasures of Helsinki, Stockholm, St. Petersburg, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.2,
    tags: ["luxury"]
  },
  {
    basePrice: 3310,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Let the spirit of exploration guide your legendary journey from Copenhagen. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Helsinki, St. Petersburg, Oslo.",
      distance: "1378 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Oslo to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Helsinki"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Maya Reed",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "mesmerizing.requiem.@velarivoyages.com",
          contactNumber: "+1-836-649-7083"
        }
      }
    ],
    title: "Mesmerizing Requiem of the Harbor of Hygge",
    description: "Let the spirit of exploration guide your legendary journey from Copenhagen. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Helsinki, St. Petersburg, Oslo.",
    rating: 4.7,
    tags: ["long-distance","exclusive"]
  },
  {
    basePrice: 4042,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Begin an epic expedition from Copenhagen, where the seas meet culture. Visit the remarkable ports of Tallinn, Stockholm, St. Petersburg while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1433 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Hawkins",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "exquisite.quest.of.t@velarivoyages.com",
          contactNumber: "+1-118-404-4729"
        }
      }
    ],
    title: "Exquisite Quest of the Harbor of Hygge",
    description: "Begin an epic expedition from Copenhagen, where the seas meet culture. Visit the remarkable ports of Tallinn, Stockholm, St. Petersburg while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.0,
    tags: ["short-getaway"]
  },
  {
    basePrice: 3865,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This handpicked escape begins in Copenhagen and travels through Northern Europe's iconic waterscapes. Discover Oslo, St. Petersburg, Helsinki, Stockholm as each day brings new stories and every night offers elegant repose.",
      distance: "1269 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Oslo to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Stockholm"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Charlotte Morgan",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "golden.reverie.of.th@velarivoyages.com",
          contactNumber: "+1-784-886-7971"
        }
      }
    ],
    title: "Golden Reverie of the Scandinavian Pearl",
    description: "This handpicked escape begins in Copenhagen and travels through Northern Europe's iconic waterscapes. Discover Oslo, St. Petersburg, Helsinki, Stockholm as each day brings new stories and every night offers elegant repose.",
    rating: 4.8,
    tags: ["luxury","sightseeing","long-distance"]
  },
  {
    basePrice: 3519,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Cruise into cultural richness aboard this celestial requiem departing Copenhagen. Savor local cuisine and uncover regional beauty from Helsinki to Oslo.",
      distance: "1481 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Ella Payne",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "extraordinary.escape@velarivoyages.com",
          contactNumber: "+1-806-147-6579"
        }
      }
    ],
    title: "Extraordinary Escape of the Harbor of Hygge",
    description: "Cruise into cultural richness aboard this celestial requiem departing Copenhagen. Savor local cuisine and uncover regional beauty from Helsinki to Oslo.",
    rating: 4.0,
    tags: ["adventure","fall-cruise"]
  },
  {
    basePrice: 9374,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Begin your journey in Copenhagen, where tradition meets travel. This immersive exploration reveals the finest of Northern Europe, from the beaches of Oslo to the streets of Helsinki.",
      distance: "724 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Oslo to Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Linda Henderson",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "secret.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-575-375-7188"
        }
      }
    ],
    title: "Secret Sojourn of the Harbor of Hygge",
    description: "Begin your journey in Copenhagen, where tradition meets travel. This immersive exploration reveals the finest of Northern Europe, from the beaches of Oslo to the streets of Helsinki.",
    rating: 4.7,
    tags: ["exclusive"]
  },
  {
    basePrice: 1482,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Enjoy seamless luxury on this starlit sojourn beginning in Copenhagen. Visit breathtaking Northern Europe locales such as Tallinn, Stockholm, St. Petersburg on this unforgettable itinerary.",
      distance: "1303 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Emily Russell",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "majestic.adventure.o@velarivoyages.com",
          contactNumber: "+1-477-437-4472"
        }
      }
    ],
    title: "Majestic Adventure of the Scandinavian Pearl",
    description: "Enjoy seamless luxury on this starlit sojourn beginning in Copenhagen. Visit breathtaking Northern Europe locales such as Tallinn, Stockholm, St. Petersburg on this unforgettable itinerary.",
    rating: 4.7,
    tags: ["seasonal"]
  },
  {
    basePrice: 9523,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "From bustling Copenhagen to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Stockholm, Tallinn deliver a balanced blend of culture and comfort.",
      distance: "1404 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Claire Crawford",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "infinite.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-744-398-9481"
        }
      }
    ],
    title: "Infinite Labyrinth of the Scandinavian Pearl",
    description: "From bustling Copenhagen to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Stockholm, Tallinn deliver a balanced blend of culture and comfort.",
    rating: 4.8,
    tags: ["seasonal","short-getaway","relaxation"]
  },
  {
    basePrice: 7301,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
      description: "Sail away from Copenhagen into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in St. Petersburg, Oslo, Helsinki, where history, nature, and cuisine collide.",
      distance: "830 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Oslo to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Harper",
        role: "VIP Coordinator",
        languages: ["English","Swedish"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
        contact: {
          contactEmail: "mesmerizing.adventur@velarivoyages.com",
          contactNumber: "+1-498-453-3758"
        }
      }
    ],
    title: "Mesmerizing Adventure of the Nordic Waters",
    description: "Sail away from Copenhagen into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in St. Petersburg, Oslo, Helsinki, where history, nature, and cuisine collide.",
    rating: 4.5,
    tags: ["adventure","short-getaway","family-friendly"]
  },
  {
    basePrice: 3301,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Unwind and explore on this passage through Northern Europe, departing from Copenhagen. With every stop—from Oslo to St. Petersburg—you’ll collect memories that last a lifetime.",
      distance: "761 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Oslo to St. Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "William Day",
        role: "Cruise Director",
        languages: ["Hungarian","Thai"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "forbidden.excursion.@velarivoyages.com",
          contactNumber: "+1-770-762-6239"
        }
      }
    ],
    title: "Forbidden Excursion of the Scandinavian Pearl",
    description: "Unwind and explore on this passage through Northern Europe, departing from Copenhagen. With every stop—from Oslo to St. Petersburg—you’ll collect memories that last a lifetime.",
    rating: 4.5,
    tags: ["seasonal","romantic","long-distance"]
  },
  {
    basePrice: 7690,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail away from the charming harbor of Copenhagen on this captivating journey across Northern Europe. Uncover the beauty and history of St. Petersburg, Oslo, Tallinn, Stockholm with curated excursions, world-class cuisine, and exceptional service.",
      distance: "759 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Stockholm"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Antonio Graham",
        role: "Cruise Director",
        languages: ["Hungarian","Thai"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/55.jpg",
        contact: {
          contactEmail: "unforgettable.sojour@velarivoyages.com",
          contactNumber: "+1-650-467-8042"
        }
      }
    ],
    title: "Unforgettable Sojourn of the Harbor of Hygge",
    description: "Sail away from the charming harbor of Copenhagen on this captivating journey across Northern Europe. Uncover the beauty and history of St. Petersburg, Oslo, Tallinn, Stockholm with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.1,
    tags: ["romantic","relaxation"]
  },
  {
    basePrice: 7677,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
      description: "Depart from iconic Copenhagen and traverse the Northern Europe with visits to Stockholm, Helsinki, Oslo. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "512 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Javier Henderson",
        role: "Cruise Director",
        languages: ["Hungarian","Thai"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
        contact: {
          contactEmail: "opulent.journey.of.t@velarivoyages.com",
          contactNumber: "+1-457-672-1926"
        }
      }
    ],
    title: "Opulent Journey of the Nordic Waters",
    description: "Depart from iconic Copenhagen and traverse the Northern Europe with visits to Stockholm, Helsinki, Oslo. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.4,
    tags: ["family-friendly","relaxation","fall-cruise"]
  },
  {
    basePrice: 1326,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Let the spirit of exploration guide your hidden journey from Copenhagen. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Tallinn, Oslo, Stockholm.",
      distance: "1479 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tallinn"
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
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Frank Mitchell",
        role: "Cruise Director",
        languages: ["Hungarian","Thai"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "starlit.mystique.of.@velarivoyages.com",
          contactNumber: "+1-302-613-2112"
        }
      }
    ],
    title: "Starlit Mystique of the Nordic Waters",
    description: "Let the spirit of exploration guide your hidden journey from Copenhagen. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Tallinn, Oslo, Stockholm.",
    rating: 4.6,
    tags: ["luxury"]
  },
  {
    basePrice: 4832,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
  }
],
      description: "Launch into adventure from Copenhagen and sail deep into the heart of the Northern Europe. With ports of call like Helsinki, St. Petersburg, Oslo, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "662 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Helsinki"
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
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Logan Gibson",
        role: "Cruise Director",
        languages: ["Hungarian","Thai"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/98.jpg",
        contact: {
          contactEmail: "eternal.adventure.of@velarivoyages.com",
          contactNumber: "+1-760-307-5380"
        }
      }
    ],
    title: "Eternal Adventure of the Harbor of Hygge",
    description: "Launch into adventure from Copenhagen and sail deep into the heart of the Northern Europe. With ports of call like Helsinki, St. Petersburg, Oslo, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.2,
    tags: ["VIP"]
  },
  {
    basePrice: 5933,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set sail from Copenhagen for a voyage like no other. From the picturesque landscapes of Helsinki to the lively ambiance of Oslo, this enchanting cruise will redefine your view of Northern Europe.",
      distance: "647 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Savannah Wallace",
        role: "Hospitality Director",
        languages: ["Spanish","Korean"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "enchanting.quest.of.@velarivoyages.com",
          contactNumber: "+1-411-800-2888"
        }
      }
    ],
    title: "Enchanting Quest of the Harbor of Hygge",
    description: "Set sail from Copenhagen for a voyage like no other. From the picturesque landscapes of Helsinki to the lively ambiance of Oslo, this enchanting cruise will redefine your view of Northern Europe.",
    rating: 4.2,
    tags: ["relaxation","family-friendly"]
  },
  {
    basePrice: 5089,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Let the spirit of exploration guide your mesmerizing journey from Copenhagen. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Tallinn, Stockholm.",
      distance: "987 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Stockholm"
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
        name: "Janet Cooper",
        role: "Hospitality Director",
        languages: ["Spanish","Korean"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "starlit.mirage.of.th@velarivoyages.com",
          contactNumber: "+1-212-200-5817"
        }
      }
    ],
    title: "Starlit Mirage of the Scandinavian Pearl",
    description: "Let the spirit of exploration guide your mesmerizing journey from Copenhagen. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Tallinn, Stockholm.",
    rating: 4.5,
    tags: ["VIP","sightseeing","family-friendly"]
  },
  {
    basePrice: 7756,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
      description: "Begin a captivating mirage through the Northern Europe, departing Copenhagen. With visits to St. Petersburg, Helsinki, Oslo, Tallinn, each day brings a new adventure and deeper connection to the region.",
      distance: "1231 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sofia Lawson",
        role: "Hospitality Director",
        languages: ["Spanish","Korean"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "captivating.sanctuar@velarivoyages.com",
          contactNumber: "+1-616-513-3094"
        }
      }
    ],
    title: "Captivating Sanctuary of the Scandinavian Pearl",
    description: "Begin a captivating mirage through the Northern Europe, departing Copenhagen. With visits to St. Petersburg, Helsinki, Oslo, Tallinn, each day brings a new adventure and deeper connection to the region.",
    rating: 4.3,
    tags: ["luxury","long-distance","romantic"]
  },
  {
    basePrice: 4203,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
  }
],
      description: "Explore a new side of Northern Europe with this spectacular sojourn starting in Copenhagen. Visit charming ports such as Tallinn, Helsinki, each offering its own unique rhythm.",
      distance: "1076 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Spencer",
        role: "Hospitality Director",
        languages: ["Spanish","Korean"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "unforgettable.horizo@velarivoyages.com",
          contactNumber: "+1-483-860-3720"
        }
      }
    ],
    title: "Unforgettable Horizon of the Nordic Waters",
    description: "Explore a new side of Northern Europe with this spectacular sojourn starting in Copenhagen. Visit charming ports such as Tallinn, Helsinki, each offering its own unique rhythm.",
    rating: 4.5,
    tags: ["long-distance","seasonal","romantic"]
  },
  {
    basePrice: 5192,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
  }
],
      description: "Unwind and explore on this adventure through Northern Europe, departing from Copenhagen. With every stop—from Stockholm to Oslo—you’ll collect memories that last a lifetime.",
      distance: "800 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Helsinki"
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
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sophia Marshall",
        role: "Hospitality Director",
        languages: ["Spanish","Korean"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "exquisite.labyrinth.@velarivoyages.com",
          contactNumber: "+1-816-597-5989"
        }
      }
    ],
    title: "Exquisite Labyrinth of the Harbor of Hygge",
    description: "Unwind and explore on this adventure through Northern Europe, departing from Copenhagen. With every stop—from Stockholm to Oslo—you’ll collect memories that last a lifetime.",
    rating: 4.6,
    tags: ["luxury"]
  },
  {
    basePrice: 2445,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
      description: "Enjoy seamless luxury on this captivating exploration beginning in Copenhagen. Visit breathtaking Northern Europe locales such as Helsinki, Oslo, Stockholm on this unforgettable itinerary.",
      distance: "1148 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Jason Baker",
        role: "Accommodation Manager",
        languages: ["Thai","Russian","Punjabi"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/35.jpg",
        contact: {
          contactEmail: "mythic.requiem.of.th@velarivoyages.com",
          contactNumber: "+1-669-908-3568"
        }
      }
    ],
    title: "Mythic Requiem of the Scandinavian Pearl",
    description: "Enjoy seamless luxury on this captivating exploration beginning in Copenhagen. Visit breathtaking Northern Europe locales such as Helsinki, Oslo, Stockholm on this unforgettable itinerary.",
    rating: 4.9,
    tags: ["short-getaway"]
  },
  {
    basePrice: 5599,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail away from the charming harbor of Copenhagen on this extraordinary journey across Northern Europe. Uncover the beauty and history of St. Petersburg, Stockholm, Oslo with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1066 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
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
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Daniel Hamilton",
        role: "Accommodation Manager",
        languages: ["Thai","Russian","Punjabi"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "opulent.adventure.of@velarivoyages.com",
          contactNumber: "+1-589-120-1498"
        }
      }
    ],
    title: "Opulent Adventure of the Scandinavian Pearl",
    description: "Sail away from the charming harbor of Copenhagen on this extraordinary journey across Northern Europe. Uncover the beauty and history of St. Petersburg, Stockholm, Oslo with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.7,
    tags: ["romantic"]
  },
  {
    basePrice: 7380,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Your quest begins in Copenhagen, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Tallinn to the historic streets of St. Petersburg, each stop in the Northern Europe will leave a lasting impression.",
      distance: "1212 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
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
    "end": "Day 10",
    "duration": "1 days",
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
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Thabo Wells",
        role: "Accommodation Manager",
        languages: ["Thai","Russian","Punjabi"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "crystalline.reverie.@velarivoyages.com",
          contactNumber: "+1-456-195-4839"
        }
      }
    ],
    title: "Crystalline Reverie of the Runestone Realms",
    description: "Your quest begins in Copenhagen, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Tallinn to the historic streets of St. Petersburg, each stop in the Northern Europe will leave a lasting impression.",
    rating: 4.4,
    tags: ["tropical","family-friendly"]
  },
  {
    basePrice: 1854,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Unwind and explore on this sojourn through Northern Europe, departing from Copenhagen. With every stop—from Stockholm to Oslo—you’ll collect memories that last a lifetime.",
      distance: "1213 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Stockholm"
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
    "description": "Sailing from Oslo to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Collins",
        role: "Accommodation Manager",
        languages: ["Thai","Russian","Punjabi"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "enchanting.sojourn.o@velarivoyages.com",
          contactNumber: "+1-104-430-1922"
        }
      }
    ],
    title: "Enchanting Sojourn of the Scandinavian Pearl",
    description: "Unwind and explore on this sojourn through Northern Europe, departing from Copenhagen. With every stop—from Stockholm to Oslo—you’ll collect memories that last a lifetime.",
    rating: 5.0,
    tags: ["long-distance","short-getaway"]
  },
  {
    basePrice: 1487,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Let the winds of the Northern Europe carry you from Copenhagen to the most stunning ports in the region. With destinations like St. Petersburg, Oslo, this exploration redefines luxury travel.",
      distance: "767 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Oslo to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
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
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Andrew Mason",
        role: "Accommodation Manager",
        languages: ["Thai","Russian","Punjabi"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/61.jpg",
        contact: {
          contactEmail: "opulent.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-408-192-6785"
        }
      }
    ],
    title: "Opulent Horizon of the Harbor of Hygge",
    description: "Let the winds of the Northern Europe carry you from Copenhagen to the most stunning ports in the region. With destinations like St. Petersburg, Oslo, this exploration redefines luxury travel.",
    rating: 4.7,
    tags: ["relaxation","themed-cruise"]
  },
  {
    basePrice: 9034,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Explore a new side of Northern Europe with this captivating journey starting in Copenhagen. Visit charming ports such as St. Petersburg, Tallinn, each offering its own unique rhythm.",
      distance: "1031 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Thomas Hudson",
        role: "Accommodation Manager",
        languages: ["Thai","Russian","Punjabi"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "golden.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-549-455-1162"
        }
      }
    ],
    title: "Golden Sojourn of the Nordic Waters",
    description: "Explore a new side of Northern Europe with this captivating journey starting in Copenhagen. Visit charming ports such as St. Petersburg, Tallinn, each offering its own unique rhythm.",
    rating: 4.4,
    tags: ["relaxation","seasonal","long-distance"]
  },
  {
    basePrice: 4570,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Set off on a voyage from Copenhagen that captures the essence of Northern Europe. Discover cultural gems and culinary delights across St. Petersburg, Oslo, Stockholm, Tallinn.",
      distance: "1125 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Walter Graves",
        role: "Accommodation Manager",
        languages: ["Thai","Russian","Punjabi"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "secret.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-545-394-5447"
        }
      }
    ],
    title: "Secret Odyssey of the Twilight Fjords",
    description: "Set off on a voyage from Copenhagen that captures the essence of Northern Europe. Discover cultural gems and culinary delights across St. Petersburg, Oslo, Stockholm, Tallinn.",
    rating: 4.1,
    tags: ["tropical","family-friendly"]
  },
  {
    basePrice: 4381,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Set sail from Copenhagen on this secret passage through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Oslo and St. Petersburg and Stockholm, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1186 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Oslo to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Oslo"
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Stephen Baker",
        role: "Accommodation Manager",
        languages: ["Thai","Russian","Punjabi"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "extraordinary.saga.o@velarivoyages.com",
          contactNumber: "+1-427-578-5948"
        }
      }
    ],
    title: "Extraordinary Saga of the Runestone Realms",
    description: "Set sail from Copenhagen on this secret passage through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Oslo and St. Petersburg and Stockholm, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.9,
    tags: ["relaxation","family-friendly","romantic"]
  }
];
