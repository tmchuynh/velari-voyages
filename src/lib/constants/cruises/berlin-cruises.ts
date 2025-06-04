import { Cruise } from "@/lib/interfaces/services/cruises";

export const berlinCruises: Cruise[] = [
  {
    basePrice: 2061,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
  }
},
    arrivalLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Let the waves lead you from Berlin on this gilded discovery. Traverse the iconic waters of Northern Europe and discover the beauty of St. Petersburg, Copenhagen, Oslo.",
      distance: "1049 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Berlin to St. Petersburg"
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
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Oslo to Berlin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jane Holloway",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "ornate.journey.of.th@velarivoyages.com",
          contactNumber: "+1-154-847-1472"
        }
      }
    ],
    title: "Ornate Journey of the City of Echoes",
    description: "Let the waves lead you from Berlin on this gilded discovery. Traverse the iconic waters of Northern Europe and discover the beauty of St. Petersburg, Copenhagen, Oslo.",
    rating: 4.6,
    tags: ["seasonal"]
  },
  {
    basePrice: 5165,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
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
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
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
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Your journey through the Northern Europe begins in Berlin, where elegance meets adventure. Explore the shores of Tallinn, St. Petersburg, Helsinki, Copenhagen, with curated excursions and luxurious onboard amenities.",
      distance: "1254 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Berlin to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tallinn to St. Petersburg"
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
    "description": "Sailing from Helsinki to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tallinn"
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
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aaliyah Watson",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "moonlit.sanctum.of.t@velarivoyages.com",
          contactNumber: "+1-913-741-8686"
        }
      }
    ],
    title: "Moonlit Sanctum of the Cultural Capital",
    description: "Your journey through the Northern Europe begins in Berlin, where elegance meets adventure. Explore the shores of Tallinn, St. Petersburg, Helsinki, Copenhagen, with curated excursions and luxurious onboard amenities.",
    rating: 4.9,
    tags: ["fall-cruise","wildlife"]
  },
  {
    basePrice: 9281,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
  }
},
    arrivalLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "An unforgettable awakening awaits as you cruise from Berlin across Northern Europe. Dive into history, flavor, and culture with stops including Oslo, Tallinn, Copenhagen, Helsinki.",
      distance: "1202 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Berlin to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Berlin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Berlin"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Jennings",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "captivating.voyage.o@velarivoyages.com",
          contactNumber: "+1-709-295-4685"
        }
      }
    ],
    title: "Captivating Voyage of the Windswept Elegance",
    description: "An unforgettable awakening awaits as you cruise from Berlin across Northern Europe. Dive into history, flavor, and culture with stops including Oslo, Tallinn, Copenhagen, Helsinki.",
    rating: 4.3,
    tags: ["cruise-getaway","cruise-excursion"]
  },
  {
    basePrice: 7030,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Your journey through the Northern Europe begins in Berlin, where elegance meets adventure. Explore the shores of Tallinn, Oslo, with curated excursions and luxurious onboard amenities.",
      distance: "598 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Berlin to Tallinn"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Margaret Reeves",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "velvet.mystique.of.t@velarivoyages.com",
          contactNumber: "+1-417-601-2533"
        }
      }
    ],
    title: "Velvet Mystique of the Modern Mosaic",
    description: "Your journey through the Northern Europe begins in Berlin, where elegance meets adventure. Explore the shores of Tallinn, Oslo, with curated excursions and luxurious onboard amenities.",
    rating: 4.1,
    tags: ["cruise-holiday","adventure","cruise-line"]
  },
  {
    basePrice: 6747,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
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
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
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
      description: "Embark on an unforgettable lullaby from the vibrant port of Berlin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Copenhagen, Stockholm, Oslo, Helsinki, this journey combines cultural immersion with breathtaking scenery.",
      distance: "801 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Berlin to Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Oslo to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Berlin"
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Oslo"
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
        name: "Stella Wallace",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "idyllic.arcadia.of.t@velarivoyages.com",
          contactNumber: "+1-298-766-2650"
        }
      }
    ],
    title: "Idyllic Arcadia of the Stone and Shadow",
    description: "Embark on an unforgettable lullaby from the vibrant port of Berlin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Copenhagen, Stockholm, Oslo, Helsinki, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.0,
    tags: ["cultural","cruise-vacation","weekend-cruise"]
  },
  {
    basePrice: 2775,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
  }
},
    arrivalLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Set sail from historic Berlin for a modern escape into the Northern Europe. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Helsinki, St. Petersburg, Tallinn, Oslo.",
      distance: "577 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Berlin to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Oslo"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Oslo to Berlin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Helsinki"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Janet Murray",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "ornate.awakening.of.@velarivoyages.com",
          contactNumber: "+1-586-171-1414"
        }
      }
    ],
    title: "Ornate Awakening of the Modern Mosaic",
    description: "Set sail from historic Berlin for a modern escape into the Northern Europe. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Helsinki, St. Petersburg, Tallinn, Oslo.",
    rating: 4.7,
    tags: ["relaxation"]
  },
  {
    basePrice: 1921,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
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
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
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
      description: "Depart from the iconic port of Berlin and sail through the enchanting Northern Europe. Explore vibrant destinations like Stockholm, St. Petersburg, Helsinki, each offering its own unique charm and local flair.",
      distance: "502 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Berlin to Stockholm"
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
    "description": "Sailing from St. Petersburg to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
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
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Priya Reeves",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "captivating.excursio@velarivoyages.com",
          contactNumber: "+1-221-613-1027"
        }
      }
    ],
    title: "Captivating Excursion of the Iron Age Isles",
    description: "Depart from the iconic port of Berlin and sail through the enchanting Northern Europe. Explore vibrant destinations like Stockholm, St. Petersburg, Helsinki, each offering its own unique charm and local flair.",
    rating: 4.3,
    tags: ["cruise-excursion"]
  },
  {
    basePrice: 3708,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Enjoy seamless luxury on this lavish panorama beginning in Berlin. Visit breathtaking Northern Europe locales such as St. Petersburg, Copenhagen on this unforgettable itinerary.",
      distance: "975 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Berlin to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Berlin"
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
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Lily Russell",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "captivating.panorama@velarivoyages.com",
          contactNumber: "+1-305-908-9240"
        }
      }
    ],
    title: "Captivating Panorama of the Modern Mosaic",
    description: "Enjoy seamless luxury on this lavish panorama beginning in Berlin. Visit breathtaking Northern Europe locales such as St. Petersburg, Copenhagen on this unforgettable itinerary.",
    rating: 4.5,
    tags: ["expedition","luxury"]
  },
  {
    basePrice: 5230,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
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
  }
],
      description: "Enjoy seamless luxury on this idyllic serenade beginning in Berlin. Visit breathtaking Northern Europe locales such as Helsinki, Oslo, St. Petersburg, Copenhagen on this unforgettable itinerary.",
      distance: "666 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Berlin to Helsinki"
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
    "description": "Sailing from Oslo to St. Petersburg"
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
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Berlin"
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
        name: "Skylar Fox",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "eternal.wanderlust.o@velarivoyages.com",
          contactNumber: "+1-927-576-8793"
        }
      }
    ],
    title: "Eternal Wanderlust of the City of Echoes",
    description: "Enjoy seamless luxury on this idyllic serenade beginning in Berlin. Visit breathtaking Northern Europe locales such as Helsinki, Oslo, St. Petersburg, Copenhagen on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["cultural","nature","cruise-excursion"]
  },
  {
    basePrice: 4340,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
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
  }
],
      description: "Join us in Berlin for a mythos of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like Tallinn, Helsinki, Oslo, St. Petersburg where timeless traditions meet modern luxuries.",
      distance: "565 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Berlin to Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Oslo to St. Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Berlin"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joan Dean",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "mesmerizing.sojourn.@velarivoyages.com",
          contactNumber: "+1-963-588-8497"
        }
      }
    ],
    title: "Mesmerizing Sojourn of the Glacial Reflections",
    description: "Join us in Berlin for a mythos of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like Tallinn, Helsinki, Oslo, St. Petersburg where timeless traditions meet modern luxuries.",
    rating: 4.1,
    tags: ["long-distance","cruise-vacation"]
  },
  {
    basePrice: 2872,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
  }
},
    arrivalLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "This inspiring serenade departs from Berlin, navigating the diverse landscapes and vibrant cities of Northern Europe. Must-see stops include Tallinn, St. Petersburg, Oslo.",
      distance: "730 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Berlin to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Oslo to Berlin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Berlin"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Julie Hawkins",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "secret.awakening.of.@velarivoyages.com",
          contactNumber: "+1-690-343-2982"
        }
      }
    ],
    title: "Secret Awakening of the City of Echoes",
    description: "This inspiring serenade departs from Berlin, navigating the diverse landscapes and vibrant cities of Northern Europe. Must-see stops include Tallinn, St. Petersburg, Oslo.",
    rating: 4.2,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 2533,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
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
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
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
      description: "Begin a captivating journey through the Northern Europe, departing Berlin. With visits to Oslo, Tallinn, each day brings a new adventure and deeper connection to the region.",
      distance: "517 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Berlin to Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Berlin"
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
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carol Maxwell",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "sublime.oasis.of.the@velarivoyages.com",
          contactNumber: "+1-291-796-5125"
        }
      }
    ],
    title: "Sublime Oasis of the Cultural Capital",
    description: "Begin a captivating journey through the Northern Europe, departing Berlin. With visits to Oslo, Tallinn, each day brings a new adventure and deeper connection to the region.",
    rating: 4.9,
    tags: ["adventure"]
  },
  {
    basePrice: 5805,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
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
  }
],
      description: "An escape like no other begins in Berlin, where your wanderlust launches into the heart of Northern Europe. Discover the magic of Oslo, Tallinn, Helsinki with style and sophistication.",
      distance: "1084 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Berlin to Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
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
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sarah Collins",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/73.jpg",
        contact: {
          contactEmail: "mystical.currents.of@velarivoyages.com",
          contactNumber: "+1-843-899-3757"
        }
      }
    ],
    title: "Mystical Currents of the City of Echoes",
    description: "An escape like no other begins in Berlin, where your wanderlust launches into the heart of Northern Europe. Discover the magic of Oslo, Tallinn, Helsinki with style and sophistication.",
    rating: 4.6,
    tags: ["long-distance","general"]
  },
  {
    basePrice: 1559,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
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
  }
],
      description: "Let this secret voyage redefine your idea of travel. From Berlin, explore the Northern Europe in luxurious comfort, stopping at St. Petersburg, Copenhagen, Stockholm, Tallinn where every port offers a new chapter.",
      distance: "1465 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Berlin to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
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
        name: "Emily Knight",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "floating.solstice.of@velarivoyages.com",
          contactNumber: "+1-245-156-4606"
        }
      }
    ],
    title: "Floating Solstice of the Snow-Kissed Harbors",
    description: "Let this secret voyage redefine your idea of travel. From Berlin, explore the Northern Europe in luxurious comfort, stopping at St. Petersburg, Copenhagen, Stockholm, Tallinn where every port offers a new chapter.",
    rating: 4.9,
    tags: ["cruise-holiday","romantic"]
  },
  {
    basePrice: 2817,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
  }
},
    arrivalLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Sail into splendor from Berlin on a mythic voyage through Northern Europe. Let each stop—from Tallinn to Stockholm—reveal the unique flavors and colors of the region.",
      distance: "1079 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Berlin to Tallinn"
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
    "description": "Sailing from Stockholm to Berlin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
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
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Harper Jennings",
        role: "Travel Advisor",
        languages: ["Danish"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "starlit.panorama.of.@velarivoyages.com",
          contactNumber: "+1-251-523-3205"
        }
      }
    ],
    title: "Starlit Panorama of the Windswept Elegance",
    description: "Sail into splendor from Berlin on a mythic voyage through Northern Europe. Let each stop—from Tallinn to Stockholm—reveal the unique flavors and colors of the region.",
    rating: 4.7,
    tags: ["general","cruise-vacation","short-getaway"]
  }
];
