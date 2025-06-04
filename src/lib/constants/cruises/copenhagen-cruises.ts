import { Cruise } from "@/lib/interfaces/services/cruises";

export const copenhagenCruises: Cruise[] = [
{
    basePrice: 5273,
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let the waves lead you from Copenhagen on this riveting realm. Traverse the iconic waters of Northern Europe and discover the beauty of Tallinn, Stockholm.",
      distance: "1261 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
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
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jane Fletcher",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "tranquil.solstice.of@velarivoyages.com",
          contactNumber: "+1-755-943-2572"
        }
      }
    ],
    title: "Tranquil Solstice of the Nordic Waters",
    description: "Let the waves lead you from Copenhagen on this riveting realm. Traverse the iconic waters of Northern Europe and discover the beauty of Tallinn, Stockholm.",
    rating: 4.7,
    tags: ["short-getaway","cruise"]
  },
  {
    basePrice: 2498,
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
  }
],
      description: "This enchanting voyage begins in Copenhagen and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at St. Petersburg, Stockholm, Oslo, Tallinn.",
      distance: "1321 nautical miles",
      totalDuration: "15 days",
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
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
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
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Savannah Carpenter",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "eternal.enigma.of.th@velarivoyages.com",
          contactNumber: "+1-823-905-6925"
        }
      }
    ],
    title: "Eternal Enigma of the Harbor of Hygge",
    description: "This enchanting voyage begins in Copenhagen and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at St. Petersburg, Stockholm, Oslo, Tallinn.",
    rating: 4.3,
    tags: ["fall-cruise","cruise-ship"]
  },
  {
    basePrice: 1109,
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Board in Copenhagen for a hand-crafted exploration through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Tallinn, Helsinki, St. Petersburg, Stockholm.",
      distance: "1357 nautical miles",
      totalDuration: "17 days",
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
    "description": "Sailing from Tallinn to Helsinki"
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
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
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
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Tallinn"
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
    "description": "Exploring Stockholm"
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
        name: "Laura Stewart",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "timeless.pilgrimage.@velarivoyages.com",
          contactNumber: "+1-247-653-8158"
        }
      }
    ],
    title: "Timeless Pilgrimage of the Scandinavian Pearl",
    description: "Board in Copenhagen for a hand-crafted exploration through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Tallinn, Helsinki, St. Petersburg, Stockholm.",
    rating: 4.1,
    tags: ["cruise-journey"]
  },
  {
    basePrice: 1613,
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
      description: "Begin a captivating reverie through the Northern Europe, departing Copenhagen. With visits to Helsinki, Tallinn, St. Petersburg, each day brings a new adventure and deeper connection to the region.",
      distance: "1417 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Betty Jennings",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "luxurious.odyssey.of@velarivoyages.com",
          contactNumber: "+1-346-949-7951"
        }
      }
    ],
    title: "Luxurious Odyssey of the Scandinavian Pearl",
    description: "Begin a captivating reverie through the Northern Europe, departing Copenhagen. With visits to Helsinki, Tallinn, St. Petersburg, each day brings a new adventure and deeper connection to the region.",
    rating: 4.9,
    tags: ["anniversary-cruise"]
  },
  {
    basePrice: 1792,
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Let the winds of the Northern Europe carry you from Copenhagen to the most stunning ports in the region. With destinations like Tallinn, St. Petersburg, Helsinki, Oslo, this frontier redefines luxury travel.",
      distance: "1167 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tallinn"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Avery Price",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        contact: {
          contactEmail: "idyllic.pilgrimage.o@velarivoyages.com",
          contactNumber: "+1-765-129-2077"
        }
      }
    ],
    title: "Idyllic Pilgrimage of the Twilight Fjords",
    description: "Let the winds of the Northern Europe carry you from Copenhagen to the most stunning ports in the region. With destinations like Tallinn, St. Petersburg, Helsinki, Oslo, this frontier redefines luxury travel.",
    rating: 4.9,
    tags: ["long-distance","cruise-excursion"]
  },
  {
    basePrice: 5212,
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
      description: "Leave stress behind with this curated journey from Copenhagen. Sail across the best of Northern Europe and explore treasures like Helsinki, Stockholm, St. Petersburg with comfort and style.",
      distance: "1005 nautical miles",
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
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jennifer Watson",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "lavish.mirage.of.the@velarivoyages.com",
          contactNumber: "+1-806-332-2769"
        }
      }
    ],
    title: "Lavish Mirage of the Frosted Serenity",
    description: "Leave stress behind with this curated journey from Copenhagen. Sail across the best of Northern Europe and explore treasures like Helsinki, Stockholm, St. Petersburg with comfort and style.",
    rating: 4.1,
    tags: ["cruise-experience","expedition"]
  },
  {
    basePrice: 3299,
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
      description: "Board in Copenhagen for a hand-crafted renaissance through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in St. Petersburg, Stockholm, Tallinn, Helsinki.",
      distance: "705 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Helsinki"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
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
    "description": "Exploring St. Petersburg"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
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
        name: "Grace Harper",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
        contact: {
          contactEmail: "secluded.whisper.of.@velarivoyages.com",
          contactNumber: "+1-583-225-4371"
        }
      }
    ],
    title: "Secluded Whisper of the Royal Stillness",
    description: "Board in Copenhagen for a hand-crafted renaissance through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in St. Petersburg, Stockholm, Tallinn, Helsinki.",
    rating: 4.9,
    tags: ["adventure","wellness"]
  },
  {
    basePrice: 7805,
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
      description: "Set sail from Copenhagen on this whispering pilgrimage through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore St. Petersburg and Stockholm and Tallinn and Oslo, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1211 nautical miles",
      totalDuration: "17 days",
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
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Oslo"
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
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Stockholm"
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
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zola Price",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "celestial.escape.of.@velarivoyages.com",
          contactNumber: "+1-610-700-2120"
        }
      }
    ],
    title: "Celestial Escape of the Baltic Echoes",
    description: "Set sail from Copenhagen on this whispering pilgrimage through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore St. Petersburg and Stockholm and Tallinn and Oslo, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.1,
    tags: ["cruise-getaway","cruise-adventure","expedition"]
  },
  {
    basePrice: 6431,
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let the winds of the Northern Europe carry you from Copenhagen to the most stunning ports in the region. With destinations like Oslo, Stockholm, Helsinki, St. Petersburg, this reunion redefines luxury travel.",
      distance: "1466 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lily Morgan",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/87.jpg",
        contact: {
          contactEmail: "secluded.embrace.of.@velarivoyages.com",
          contactNumber: "+1-231-786-4914"
        }
      }
    ],
    title: "Secluded Embrace of the Nordic Fairytale Port",
    description: "Let the winds of the Northern Europe carry you from Copenhagen to the most stunning ports in the region. With destinations like Oslo, Stockholm, Helsinki, St. Petersburg, this reunion redefines luxury travel.",
    rating: 4.1,
    tags: ["historical","repositioning","seasonal"]
  },
  {
    basePrice: 4147,
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Embark on an unforgettable wanderlust from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Helsinki, Stockholm, Oslo, St. Petersburg, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1199 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Oslo to St. Petersburg"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Helsinki"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Harper Reed",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "mesmerizing.excursio@velarivoyages.com",
          contactNumber: "+1-864-616-4820"
        }
      }
    ],
    title: "Mesmerizing Excursion of the Frosted Serenity",
    description: "Embark on an unforgettable wanderlust from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Helsinki, Stockholm, Oslo, St. Petersburg, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.7,
    tags: ["sightseeing","family-friendly"]
  },
  {
    basePrice: 9151,
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
      description: "A voyage of contrasts awaits from Copenhagen. Discover the historical and natural richness of Northern Europe as you cruise to spectacular destinations like St. Petersburg, Oslo.",
      distance: "1225 nautical miles",
      totalDuration: "12 days",
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
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
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
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Olivia Fisher",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/56.jpg",
        contact: {
          contactEmail: "alluring.resonance.o@velarivoyages.com",
          contactNumber: "+1-387-677-7581"
        }
      }
    ],
    title: "Alluring Resonance of the Frosted Serenity",
    description: "A voyage of contrasts awaits from Copenhagen. Discover the historical and natural richness of Northern Europe as you cruise to spectacular destinations like St. Petersburg, Oslo.",
    rating: 4.6,
    tags: ["expedition","weekend-cruise","family-friendly"]
  },
  {
    basePrice: 3990,
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
      description: "Embark on an unforgettable frontier from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Stockholm, Tallinn, Helsinki, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1380 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
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
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Tallinn"
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
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Samantha Keller",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/49.jpg",
        contact: {
          contactEmail: "exquisite.odyssey.of@velarivoyages.com",
          contactNumber: "+1-848-987-7745"
        }
      }
    ],
    title: "Exquisite Odyssey of the Scandinavian Pearl",
    description: "Embark on an unforgettable frontier from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Stockholm, Tallinn, Helsinki, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.1,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 7083,
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
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Experience the elegance of the seas on this serene retreat through Northern Europe, starting from the illustrious port of Copenhagen. From Tallinn, Stockholm to Helsinki, each destination offers its own story, culture, and breathtaking views.",
      distance: "805 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
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
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Stockholm"
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
        name: "Brooklyn Collins",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "riveting.reverie.of.@velarivoyages.com",
          contactNumber: "+1-322-296-6205"
        }
      }
    ],
    title: "Riveting Reverie of the Frosted Serenity",
    description: "Experience the elegance of the seas on this serene retreat through Northern Europe, starting from the illustrious port of Copenhagen. From Tallinn, Stockholm to Helsinki, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.5,
    tags: ["cruise-ship","cruise-line"]
  },
  {
    basePrice: 4756,
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
      description: "Savor each moment of this refined escape through Northern Europe, starting in Copenhagen. Visit renowned locations like Stockholm, Oslo, Tallinn, St. Petersburg, where adventure and relaxation intertwine.",
      distance: "985 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
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
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Pamela Price",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        contact: {
          contactEmail: "aweinspiring.sanctua@velarivoyages.com",
          contactNumber: "+1-848-178-8420"
        }
      }
    ],
    title: "Awe-Inspiring Sanctuary of the Scandinavian Pearl",
    description: "Savor each moment of this refined escape through Northern Europe, starting in Copenhagen. Visit renowned locations like Stockholm, Oslo, Tallinn, St. Petersburg, where adventure and relaxation intertwine.",
    rating: 4.3,
    tags: ["nature"]
  },
  {
    basePrice: 8042,
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
  }
],
      description: "Embark on an unforgettable adventure from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Stockholm, Tallinn, St. Petersburg, this journey combines cultural immersion with breathtaking scenery.",
      distance: "582 nautical miles",
      totalDuration: "12 days",
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
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Tallinn to St. Petersburg"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Savannah Reed",
        role: "Customer Service Representative",
        languages: ["Italian","Kannada","Lao"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "gilded.expedition.of@velarivoyages.com",
          contactNumber: "+1-843-624-8545"
        }
      }
    ],
    title: "Gilded Expedition of the Frosted Serenity",
    description: "Embark on an unforgettable adventure from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Stockholm, Tallinn, St. Petersburg, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.2,
    tags: ["cruise-journey"]
  },
  {
    basePrice: 9732,
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
      description: "Sail away from Copenhagen into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Stockholm, Oslo, where history, nature, and cuisine collide.",
      distance: "603 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
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
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Emily Hunter",
        role: "Loyalty Program Representative",
        languages: ["Tamil","Japanese","Swedish"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "oceanic.mystique.of.@velarivoyages.com",
          contactNumber: "+1-444-700-1954"
        }
      }
    ],
    title: "Oceanic Mystique of the Harbor of Hygge",
    description: "Sail away from Copenhagen into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Stockholm, Oslo, where history, nature, and cuisine collide.",
    rating: 4.8,
    tags: ["exclusive"]
  },
  {
    basePrice: 2581,
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Embark on an unforgettable realm from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Helsinki, Oslo, Tallinn, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1090 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Helsinki"
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
  },
  {
    "start": "Day 11",
    "end": "Day 12",
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
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Sophia Henderson",
        role: "Loyalty Program Representative",
        languages: ["Tamil","Japanese","Swedish"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "floating.panorama.of@velarivoyages.com",
          contactNumber: "+1-263-903-9433"
        }
      }
    ],
    title: "Floating Panorama of the Scandinavian Pearl",
    description: "Embark on an unforgettable realm from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Helsinki, Oslo, Tallinn, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.1,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 7022,
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
      description: "Depart from the iconic port of Copenhagen and sail through the enchanting Northern Europe. Explore vibrant destinations like Tallinn, Stockholm, each offering its own unique charm and local flair.",
      distance: "1223 nautical miles",
      totalDuration: "12 days",
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
    "start": "Day 9",
    "end": "Day 10",
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Leah Holloway",
        role: "Loyalty Program Representative",
        languages: ["Tamil","Japanese","Swedish"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "gilded.haven.of.the.@velarivoyages.com",
          contactNumber: "+1-819-955-7503"
        }
      }
    ],
    title: "Gilded Haven of the Scandinavian Pearl",
    description: "Depart from the iconic port of Copenhagen and sail through the enchanting Northern Europe. Explore vibrant destinations like Tallinn, Stockholm, each offering its own unique charm and local flair.",
    rating: 4.5,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 4046,
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
  }
],
      description: "Sail away from Copenhagen into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Oslo, St. Petersburg, Helsinki, where history, nature, and cuisine collide.",
      distance: "1249 nautical miles",
      totalDuration: "10 days",
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
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Ashley Carpenter",
        role: "Loyalty Program Representative",
        languages: ["Tamil","Japanese","Swedish"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
        contact: {
          contactEmail: "verdant.tide.of.the.@velarivoyages.com",
          contactNumber: "+1-319-220-6430"
        }
      }
    ],
    title: "Verdant Tide of the Frosted Serenity",
    description: "Sail away from Copenhagen into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Oslo, St. Petersburg, Helsinki, where history, nature, and cuisine collide.",
    rating: 4.7,
    tags: ["luxury","cruise-journey"]
  },
  {
    basePrice: 7100,
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
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail from Copenhagen into a world of wonder. The Northern Europe beckons with unforgettable ports like St. Petersburg, Tallinn, where every view is picture-perfect and every moment is priceless.",
      distance: "1368 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
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
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sandra Dixon",
        role: "Loyalty Program Representative",
        languages: ["Tamil","Japanese","Swedish"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "mythic.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-907-441-9215"
        }
      }
    ],
    title: "Mythic Odyssey of the Frosted Serenity",
    description: "Sail from Copenhagen into a world of wonder. The Northern Europe beckons with unforgettable ports like St. Petersburg, Tallinn, where every view is picture-perfect and every moment is priceless.",
    rating: 4.1,
    tags: ["repositioning"]
  },
  {
    basePrice: 8306,
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Experience coastal elegance on this serenade from Copenhagen, where the journey through Northern Europe includes stops in Stockholm, Tallinn, Helsinki, Oslo, each more enchanting than the last.",
      distance: "1196 nautical miles",
      totalDuration: "14 days",
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
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Helsinki"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
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
    "end": "Day 4",
    "duration": "2 days",
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
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Hannah Spencer",
        role: "Loyalty Program Representative",
        languages: ["Tamil","Japanese","Swedish"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
        contact: {
          contactEmail: "idyllic.lullaby.of.t@velarivoyages.com",
          contactNumber: "+1-184-747-4238"
        }
      }
    ],
    title: "Idyllic Lullaby of the Twilight Fjords",
    description: "Experience coastal elegance on this serenade from Copenhagen, where the journey through Northern Europe includes stops in Stockholm, Tallinn, Helsinki, Oslo, each more enchanting than the last.",
    rating: 4.8,
    tags: ["cruise-getaway","cruise-journey","cruise-experience"]
  },
  {
    basePrice: 9656,
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
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Savor each moment of this hidden escape through Northern Europe, starting in Copenhagen. Visit renowned locations like St. Petersburg, Helsinki, where adventure and relaxation intertwine.",
      distance: "1430 nautical miles",
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
    "description": "Sailing from St. Petersburg to Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
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
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Ella Parker",
        role: "Loyalty Program Representative",
        languages: ["Tamil","Japanese","Swedish"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "harmonic.mystique.of@velarivoyages.com",
          contactNumber: "+1-536-245-2868"
        }
      }
    ],
    title: "Harmonic Mystique of the Royal Stillness",
    description: "Savor each moment of this hidden escape through Northern Europe, starting in Copenhagen. Visit renowned locations like St. Petersburg, Helsinki, where adventure and relaxation intertwine.",
    rating: 4.1,
    tags: ["themed-cruise","cultural"]
  },
  {
    basePrice: 1000,
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
      description: "This eclipse takes you beyond the ordinary, starting in Copenhagen. With breathtaking stops in Helsinki, Stockholm, Oslo, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "821 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
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
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
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
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Montgomery",
        role: "Loyalty Program Representative",
        languages: ["Tamil","Japanese","Swedish"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "riveting.wanderlust.@velarivoyages.com",
          contactNumber: "+1-406-512-2138"
        }
      }
    ],
    title: "Riveting Wanderlust of the Harbor of Hygge",
    description: "This eclipse takes you beyond the ordinary, starting in Copenhagen. With breathtaking stops in Helsinki, Stockholm, Oslo, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.3,
    tags: ["luxury","adventure","seasonal"]
  },
  {
    basePrice: 2268,
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
      description: "Escape to sea from Copenhagen on a enchanting voyage exploring the magic of Northern Europe. Visit unforgettable locales like Stockholm, Oslo, Helsinki, where each stop inspires awe.",
      distance: "1123 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Stockholm"
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
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sarah Douglas",
        role: "Loyalty Program Representative",
        languages: ["Tamil","Japanese","Swedish"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/73.jpg",
        contact: {
          contactEmail: "gilded.symphony.of.t@velarivoyages.com",
          contactNumber: "+1-710-206-8670"
        }
      }
    ],
    title: "Gilded Symphony of the Frosted Serenity",
    description: "Escape to sea from Copenhagen on a enchanting voyage exploring the magic of Northern Europe. Visit unforgettable locales like Stockholm, Oslo, Helsinki, where each stop inspires awe.",
    rating: 4.4,
    tags: ["glacier-cruise"]
  },
  {
    basePrice: 8427,
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
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let the spirit of exploration guide your whispering journey from Copenhagen. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Oslo, Tallinn.",
      distance: "1467 nautical miles",
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
    "description": "Sailing from Oslo to Tallinn"
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
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Amelia Graves",
        role: "Loyalty Program Representative",
        languages: ["Tamil","Japanese","Swedish"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "verdant.pilgrimage.o@velarivoyages.com",
          contactNumber: "+1-921-211-2136"
        }
      }
    ],
    title: "Verdant Pilgrimage of the Nordic Fairytale Port",
    description: "Let the spirit of exploration guide your whispering journey from Copenhagen. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Oslo, Tallinn.",
    rating: 4.6,
    tags: ["cruise-excursion","long-distance"]
  }
];
