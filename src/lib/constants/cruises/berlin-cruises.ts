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
  },
  {
    basePrice: 3931,
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Enjoy seamless luxury on this charming retreat beginning in Berlin. Visit breathtaking Northern Europe locales such as Copenhagen, St. Petersburg, Helsinki, Oslo on this unforgettable itinerary.",
      distance: "1445 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Berlin to Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
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
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Maya Parker",
        role: "Marketing Coordinator",
        languages: ["Punjabi","Finnish"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "infinite.quest.of.th@velarivoyages.com",
          contactNumber: "+1-230-762-8423"
        }
      }
    ],
    title: "Infinite Quest of the Modern Mosaic",
    description: "Enjoy seamless luxury on this charming retreat beginning in Berlin. Visit breathtaking Northern Europe locales such as Copenhagen, St. Petersburg, Helsinki, Oslo on this unforgettable itinerary.",
    rating: 4.6,
    tags: ["nature","expedition","anniversary-cruise"]
  },
  {
    basePrice: 6417,
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
      description: "Depart from Berlin on this thoughtfully designed discovery across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Tallinn, St. Petersburg.",
      distance: "1358 nautical miles",
      totalDuration: "8 days",
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
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Helen Coleman",
        role: "Marketing Coordinator",
        languages: ["Punjabi","Finnish"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "panoramic.sanctum.of@velarivoyages.com",
          contactNumber: "+1-845-673-3596"
        }
      }
    ],
    title: "Panoramic Sanctum of the Modern Mosaic",
    description: "Depart from Berlin on this thoughtfully designed discovery across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Tallinn, St. Petersburg.",
    rating: 4.3,
    tags: ["cruise-vacation"]
  },
  {
    basePrice: 8936,
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
      description: "Unwind and explore on this solstice through Northern Europe, departing from Berlin. With every stop—from Stockholm to Copenhagen—you’ll collect memories that last a lifetime.",
      distance: "538 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Berlin to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Copenhagen"
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Brenda Grant",
        role: "Marketing Coordinator",
        languages: ["Punjabi","Finnish"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "sundrenched.mythos.o@velarivoyages.com",
          contactNumber: "+1-299-752-7367"
        }
      }
    ],
    title: "Sun-Drenched Mythos of the Stone and Shadow",
    description: "Unwind and explore on this solstice through Northern Europe, departing from Berlin. With every stop—from Stockholm to Copenhagen—you’ll collect memories that last a lifetime.",
    rating: 4.7,
    tags: ["wellness","expedition","cruise-experience"]
  },
  {
    basePrice: 8044,
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Depart Berlin on a relaxing labyrinth through the Northern Europe region. Highlights include the stunning coastlines of Copenhagen, Helsinki, Oslo, Tallinn, all while enjoying first-class amenities on board.",
      distance: "1043 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Berlin to Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Berlin"
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
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sophia Graham",
        role: "Marketing Coordinator",
        languages: ["Punjabi","Finnish"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "refined.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-690-121-6998"
        }
      }
    ],
    title: "Refined Eclipse of the City of Echoes",
    description: "Depart Berlin on a relaxing labyrinth through the Northern Europe region. Highlights include the stunning coastlines of Copenhagen, Helsinki, Oslo, Tallinn, all while enjoying first-class amenities on board.",
    rating: 4.7,
    tags: ["cruise-adventure","romantic","sightseeing"]
  },
  {
    basePrice: 7892,
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "From the lively departure port of Berlin, this curated serenade showcases the finest of Northern Europe. With visits to Stockholm, Oslo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "537 nautical miles",
      totalDuration: "12 days",
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
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Oslo to Berlin"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Amanda Chambers",
        role: "Marketing Coordinator",
        languages: ["Punjabi","Finnish"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/15.jpg",
        contact: {
          contactEmail: "mythic.quest.of.the.@velarivoyages.com",
          contactNumber: "+1-666-767-7596"
        }
      }
    ],
    title: "Mythic Quest of the Time-Threaded Metropolis",
    description: "From the lively departure port of Berlin, this curated serenade showcases the finest of Northern Europe. With visits to Stockholm, Oslo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.2,
    tags: ["historical","cruise-ship"]
  },
  {
    basePrice: 4424,
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
  "city": "Dublin",
  "country": "Ireland",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
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
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
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
    "city": "Dublin",
    "country": "Ireland",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "Leave stress behind with this curated reverie from Berlin. Sail across the best of Northern Europe and explore treasures like Southampton, Oslo, Stockholm, Dublin with comfort and style.",
      distance: "1014 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Berlin to Southampton"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Southampton to Oslo"
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
    "description": "Sailing from Stockholm to Dublin"
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
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
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
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Sofia Gibson",
        role: "Loyalty Program Representative",
        languages: ["Italian","Zulu"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "golden.reverie.of.th@velarivoyages.com",
          contactNumber: "+1-458-543-9551"
        }
      }
    ],
    title: "Golden Reverie of the Stone and Shadow",
    description: "Leave stress behind with this curated reverie from Berlin. Sail across the best of Northern Europe and explore treasures like Southampton, Oslo, Stockholm, Dublin with comfort and style.",
    rating: 4.9,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 8651,
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
      description: "Depart from Berlin on this thoughtfully designed reverie across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Dublin, Southampton, Stockholm.",
      distance: "1133 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Berlin to Dublin"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dublin to Southampton"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Southampton to Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Berlin"
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
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Southampton"
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
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Elena Reed",
        role: "Loyalty Program Representative",
        languages: ["Italian","Zulu"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "sundrenched.enigma.o@velarivoyages.com",
          contactNumber: "+1-446-411-8248"
        }
      }
    ],
    title: "Sun-Drenched Enigma of the Aurora Veil",
    description: "Depart from Berlin on this thoughtfully designed reverie across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Dublin, Southampton, Stockholm.",
    rating: 4.2,
    tags: ["expedition","glacier-cruise"]
  },
  {
    basePrice: 7905,
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Depart from the iconic port of Berlin and sail through the enchanting Northern Europe. Explore vibrant destinations like Oslo, Stockholm, Amsterdam, Tallinn, each offering its own unique charm and local flair.",
      distance: "714 nautical miles",
      totalDuration: "18 days",
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
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Amsterdam"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Tallinn"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Berlin"
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ellie Graham",
        role: "Loyalty Program Representative",
        languages: ["Italian","Zulu"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "hidden.mirage.of.the@velarivoyages.com",
          contactNumber: "+1-506-679-1772"
        }
      }
    ],
    title: "Hidden Mirage of the City of Echoes",
    description: "Depart from the iconic port of Berlin and sail through the enchanting Northern Europe. Explore vibrant destinations like Oslo, Stockholm, Amsterdam, Tallinn, each offering its own unique charm and local flair.",
    rating: 4.7,
    tags: ["cruise-ship","fall-cruise"]
  },
  {
    basePrice: 8266,
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Launch into adventure from Berlin and sail deep into the heart of the Northern Europe. With ports of call like St. Petersburg, Dublin, Amsterdam, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1128 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Berlin to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Dublin"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Dublin to Amsterdam"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Berlin"
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
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Angela Keller",
        role: "Loyalty Program Representative",
        languages: ["Italian","Zulu"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "floating.escape.of.t@velarivoyages.com",
          contactNumber: "+1-641-386-7246"
        }
      }
    ],
    title: "Floating Escape of the Snow-Kissed Harbors",
    description: "Launch into adventure from Berlin and sail deep into the heart of the Northern Europe. With ports of call like St. Petersburg, Dublin, Amsterdam, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.6,
    tags: ["cruise-experience"]
  },
  {
    basePrice: 2810,
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
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
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
      description: "This handpicked embrace begins in Berlin and travels through Northern Europe's iconic waterscapes. Discover Southampton, Dublin, Oslo, Helsinki as each day brings new stories and every night offers elegant repose.",
      distance: "1141 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Berlin to Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Southampton to Dublin"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Dublin to Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
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
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Dublin"
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
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Genesis Dixon",
        role: "Loyalty Program Representative",
        languages: ["Italian","Zulu"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "exquisite.requiem.of@velarivoyages.com",
          contactNumber: "+1-850-577-1473"
        }
      }
    ],
    title: "Exquisite Requiem of the Modern Mosaic",
    description: "This handpicked embrace begins in Berlin and travels through Northern Europe's iconic waterscapes. Discover Southampton, Dublin, Oslo, Helsinki as each day brings new stories and every night offers elegant repose.",
    rating: 4.5,
    tags: ["expedition","exclusive"]
  }
];
