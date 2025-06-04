import { Cruise } from "@/lib/interfaces/services/cruises";

export const parisCruises: Cruise[] = [
{
    basePrice: 8956,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
      description: "This extraordinary sojourn from Paris offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Copenhagen and Tallinn, creating memories that will last a lifetime.",
      distance: "1264 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Paris to Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Melissa Parker",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "starlit.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-682-147-2208"
        }
      }
    ],
    title: "Starlit Odyssey of the Romantic Capital",
    description: "This extraordinary sojourn from Paris offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Copenhagen and Tallinn, creating memories that will last a lifetime.",
    rating: 4.6,
    tags: ["long-distance"]
  },
  {
    basePrice: 8815,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Sail away from the charming harbor of Paris on this luxurious journey across Northern Europe. Uncover the beauty and history of St. Petersburg, Helsinki, Stockholm, Tallinn with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1120 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Paris to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aaliyah Hunter",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "forbidden.discovery.@velarivoyages.com",
          contactNumber: "+1-530-879-5127"
        }
      }
    ],
    title: "Forbidden Discovery of the City of Light",
    description: "Sail away from the charming harbor of Paris on this luxurious journey across Northern Europe. Uncover the beauty and history of St. Petersburg, Helsinki, Stockholm, Tallinn with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.8,
    tags: ["romantic"]
  },
  {
    basePrice: 1726,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
      description: "Let the winds of the Northern Europe carry you from Paris to the most stunning ports in the region. With destinations like Oslo, Stockholm, St. Petersburg, Tallinn, this odyssey redefines luxury travel.",
      distance: "1370 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Dixon",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "celestial.adventure.@velarivoyages.com",
          contactNumber: "+1-470-681-9012"
        }
      }
    ],
    title: "Celestial Adventure of the Romantic Capital",
    description: "Let the winds of the Northern Europe carry you from Paris to the most stunning ports in the region. With destinations like Oslo, Stockholm, St. Petersburg, Tallinn, this odyssey redefines luxury travel.",
    rating: 4.1,
    tags: ["tropical","themed-cruise"]
  },
  {
    basePrice: 3281,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Sail away from Paris into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Helsinki, Stockholm, St. Petersburg, Oslo, where history, nature, and cuisine collide.",
      distance: "1016 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Paris to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Stockholm"
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
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Oslo to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
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
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Grace Cooper",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "forbidden.escape.of.@velarivoyages.com",
          contactNumber: "+1-602-980-1057"
        }
      }
    ],
    title: "Forbidden Escape of the Romantic Capital",
    description: "Sail away from Paris into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Helsinki, Stockholm, St. Petersburg, Oslo, where history, nature, and cuisine collide.",
    rating: 4.7,
    tags: ["sightseeing","exclusive","seasonal"]
  },
  {
    basePrice: 2428,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Sail away from the charming harbor of Paris on this whispering journey across Northern Europe. Uncover the beauty and history of Stockholm, St. Petersburg with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1307 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Leah Palmer",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "majestic.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-799-948-1856"
        }
      }
    ],
    title: "Majestic Mirage of the Romantic Capital",
    description: "Sail away from the charming harbor of Paris on this whispering journey across Northern Europe. Uncover the beauty and history of Stockholm, St. Petersburg with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.0,
    tags: ["exclusive"]
  },
  {
    basePrice: 4584,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  },
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Savor each moment of this captivating escape through Northern Europe, starting in Paris. Visit renowned locations like Helsinki, St. Petersburg, Oslo, Copenhagen, where adventure and relaxation intertwine.",
      distance: "1275 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Oslo to Copenhagen"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Reeves",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "opulent.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-356-724-9714"
        }
      }
    ],
    title: "Opulent Odyssey of the City of Light",
    description: "Savor each moment of this captivating escape through Northern Europe, starting in Paris. Visit renowned locations like Helsinki, St. Petersburg, Oslo, Copenhagen, where adventure and relaxation intertwine.",
    rating: 4.4,
    tags: ["sightseeing","tropical"]
  },
  {
    basePrice: 6756,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "This handpicked quest begins in Paris and travels through Northern Europe's iconic waterscapes. Discover Oslo, St. Petersburg as each day brings new stories and every night offers elegant repose.",
      distance: "614 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Paris to Oslo"
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
    "description": "Sailing from St. Petersburg to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Zola Foster",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/85.jpg",
        contact: {
          contactEmail: "luxurious.sojourn.of@velarivoyages.com",
          contactNumber: "+1-540-967-4370"
        }
      }
    ],
    title: "Luxurious Sojourn of the Romantic Capital",
    description: "This handpicked quest begins in Paris and travels through Northern Europe's iconic waterscapes. Discover Oslo, St. Petersburg as each day brings new stories and every night offers elegant repose.",
    rating: 4.3,
    tags: ["luxury","VIP"]
  },
  {
    basePrice: 4333,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
      description: "Set sail from Paris on this forbidden reverie through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore St. Petersburg and Oslo, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1248 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Paris to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sandra Gardner",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
        contact: {
          contactEmail: "extraordinary.voyage@velarivoyages.com",
          contactNumber: "+1-602-703-1095"
        }
      }
    ],
    title: "Extraordinary Voyage of the Romantic Capital",
    description: "Set sail from Paris on this forbidden reverie through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore St. Petersburg and Oslo, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.9,
    tags: ["romantic","themed-cruise","VIP"]
  },
  {
    basePrice: 9384,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "This hand-selected celestial cruise offers a true taste of Northern Europe. Depart from Paris and explore ports like Tallinn, Oslo, each telling a story through food, music, and tradition.",
      distance: "1065 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to Tallinn"
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
    "description": "Sailing from Oslo to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Pamela Price",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "epic.voyage.of.the.n@velarivoyages.com",
          contactNumber: "+1-502-501-1572"
        }
      }
    ],
    title: "Epic Voyage of the Nordic Waters",
    description: "This hand-selected celestial cruise offers a true taste of Northern Europe. Depart from Paris and explore ports like Tallinn, Oslo, each telling a story through food, music, and tradition.",
    rating: 4.3,
    tags: ["VIP","family-friendly"]
  },
  {
    basePrice: 3855,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Your journey through the Northern Europe begins in Paris, where elegance meets adventure. Explore the shores of Stockholm, St. Petersburg, Oslo, Tallinn, with curated excursions and luxurious onboard amenities.",
      distance: "1388 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Stockholm to St. Petersburg"
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
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Grant",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "mesmerizing.horizon.@velarivoyages.com",
          contactNumber: "+1-763-457-5129"
        }
      }
    ],
    title: "Mesmerizing Horizon of the Twilight Fjords",
    description: "Your journey through the Northern Europe begins in Paris, where elegance meets adventure. Explore the shores of Stockholm, St. Petersburg, Oslo, Tallinn, with curated excursions and luxurious onboard amenities.",
    rating: 4.8,
    tags: ["tropical"]
  },
  {
    basePrice: 2458,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
      description: "This extraordinary mystique from Paris offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Tallinn and Helsinki, creating memories that will last a lifetime.",
      distance: "1165 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Paris to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sophia Hudson",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        contact: {
          contactEmail: "enchanting.tide.of.t@velarivoyages.com",
          contactNumber: "+1-939-330-9767"
        }
      }
    ],
    title: "Enchanting Tide of the Runestone Realms",
    description: "This extraordinary mystique from Paris offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Tallinn and Helsinki, creating memories that will last a lifetime.",
    rating: 4.6,
    tags: ["romantic","fall-cruise","exclusive"]
  },
  {
    basePrice: 2745,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
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
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Leave stress behind with this curated expedition from Paris. Sail across the best of Northern Europe and explore treasures like Helsinki, Stockholm, Oslo, Copenhagen with comfort and style.",
      distance: "504 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Oslo to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Amelia Maxwell",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "midnight.escape.of.t@velarivoyages.com",
          contactNumber: "+1-460-184-3970"
        }
      }
    ],
    title: "Midnight Escape of the City of Light",
    description: "Leave stress behind with this curated expedition from Paris. Sail across the best of Northern Europe and explore treasures like Helsinki, Stockholm, Oslo, Copenhagen with comfort and style.",
    rating: 4.0,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 4352,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This extraordinary retreat begins in Paris and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Tallinn, Copenhagen, Oslo.",
      distance: "1000 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Paris to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Isabella Fisher",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "timeless.voyage.of.t@velarivoyages.com",
          contactNumber: "+1-492-929-2855"
        }
      }
    ],
    title: "Timeless Voyage of the Romantic Capital",
    description: "This extraordinary retreat begins in Paris and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Tallinn, Copenhagen, Oslo.",
    rating: 4.9,
    tags: ["adventure","luxury"]
  },
  {
    basePrice: 6914,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Embark on an unforgettable mirage from the vibrant port of Paris, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Stockholm, Copenhagen, Tallinn, this journey combines cultural immersion with breathtaking scenery.",
      distance: "900 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to Stockholm"
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
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Olivia Mason",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "starlit.escape.of.th@velarivoyages.com",
          contactNumber: "+1-165-294-5212"
        }
      }
    ],
    title: "Starlit Escape of the City of Light",
    description: "Embark on an unforgettable mirage from the vibrant port of Paris, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Stockholm, Copenhagen, Tallinn, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.8,
    tags: ["long-distance","luxury","romantic"]
  },
  {
    basePrice: 1083,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Set off on a reverie from Paris that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Copenhagen, Tallinn, Oslo, Helsinki.",
      distance: "963 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Paris to Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Oslo to Helsinki"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lisa Jennings",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
        contact: {
          contactEmail: "golden.saga.of.the.c@velarivoyages.com",
          contactNumber: "+1-676-949-7960"
        }
      }
    ],
    title: "Golden Saga of the City of Light",
    description: "Set off on a reverie from Paris that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Copenhagen, Tallinn, Oslo, Helsinki.",
    rating: 4.7,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 3811,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "This spectacular quest begins in Paris and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Stockholm, Helsinki.",
      distance: "1494 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Paris to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Zola Hawkins",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "midnight.reverie.of.@velarivoyages.com",
          contactNumber: "+1-798-721-4142"
        }
      }
    ],
    title: "Midnight Reverie of the Nordic Waters",
    description: "This spectacular quest begins in Paris and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Stockholm, Helsinki.",
    rating: 4.8,
    tags: ["romantic","family-friendly","exclusive"]
  },
  {
    basePrice: 6332,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Depart from the iconic port of Paris and sail through the enchanting Northern Europe. Explore vibrant destinations like Stockholm, St. Petersburg, each offering its own unique charm and local flair.",
      distance: "706 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Paris to Stockholm"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Isabella Coleman",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "majestic.requiem.of.@velarivoyages.com",
          contactNumber: "+1-121-917-7017"
        }
      }
    ],
    title: "Majestic Requiem of the City of Light",
    description: "Depart from the iconic port of Paris and sail through the enchanting Northern Europe. Explore vibrant destinations like Stockholm, St. Petersburg, each offering its own unique charm and local flair.",
    rating: 4.6,
    tags: ["tropical"]
  },
  {
    basePrice: 2053,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Leave ordinary behind as you sail from Paris across the captivating Northern Europe. Discover the distinctive personality of each destination, from St. Petersburg, Helsinki.",
      distance: "1340 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Paris to St. Petersburg"
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
    "description": "Sailing from Helsinki to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Jennings",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "whispering.horizon.o@velarivoyages.com",
          contactNumber: "+1-232-408-9260"
        }
      }
    ],
    title: "Whispering Horizon of the Romantic Capital",
    description: "Leave ordinary behind as you sail from Paris across the captivating Northern Europe. Discover the distinctive personality of each destination, from St. Petersburg, Helsinki.",
    rating: 4.0,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 8914,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
      description: "An unforgettable escape awaits as you cruise from Paris across Northern Europe. Dive into history, flavor, and culture with stops including St. Petersburg, Helsinki.",
      distance: "641 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to St. Petersburg"
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
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
        name: "Mia Jennings",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "epic.mystique.of.the@velarivoyages.com",
          contactNumber: "+1-602-966-2681"
        }
      }
    ],
    title: "Epic Mystique of the City of Light",
    description: "An unforgettable escape awaits as you cruise from Paris across Northern Europe. Dive into history, flavor, and culture with stops including St. Petersburg, Helsinki.",
    rating: 4.3,
    tags: ["seasonal","exclusive","adventure"]
  },
  {
    basePrice: 8951,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
  },
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Set off on a escape from Paris that captures the essence of Northern Europe. Discover cultural gems and culinary delights across St. Petersburg, Copenhagen, Tallinn.",
      distance: "526 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Paris to St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Victoria Foster",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
        contact: {
          contactEmail: "enchanting.discovery@velarivoyages.com",
          contactNumber: "+1-297-422-6760"
        }
      }
    ],
    title: "Enchanting Discovery of the Romantic Capital",
    description: "Set off on a escape from Paris that captures the essence of Northern Europe. Discover cultural gems and culinary delights across St. Petersburg, Copenhagen, Tallinn.",
    rating: 4.3,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 2431,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  },
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "This hand-selected mesmerizing cruise offers a true taste of Northern Europe. Depart from Paris and explore ports like Tallinn, Stockholm, Copenhagen, each telling a story through food, music, and tradition.",
      distance: "1105 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Copenhagen"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Michelle Foster",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
        contact: {
          contactEmail: "golden.escape.of.the@velarivoyages.com",
          contactNumber: "+1-155-540-5761"
        }
      }
    ],
    title: "Golden Escape of the Romantic Capital",
    description: "This hand-selected mesmerizing cruise offers a true taste of Northern Europe. Depart from Paris and explore ports like Tallinn, Stockholm, Copenhagen, each telling a story through food, music, and tradition.",
    rating: 4.9,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 4652,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Savor each moment of this golden escape through Northern Europe, starting in Paris. Visit renowned locations like Copenhagen, Stockholm, St. Petersburg, Helsinki, where adventure and relaxation intertwine.",
      distance: "582 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Stockholm to St. Petersburg"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Caroline Hall",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "golden.mystique.of.t@velarivoyages.com",
          contactNumber: "+1-589-867-3297"
        }
      }
    ],
    title: "Golden Mystique of the City of Light",
    description: "Savor each moment of this golden escape through Northern Europe, starting in Paris. Visit renowned locations like Copenhagen, Stockholm, St. Petersburg, Helsinki, where adventure and relaxation intertwine.",
    rating: 4.6,
    tags: ["tropical","short-getaway"]
  },
  {
    basePrice: 5516,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Leave stress behind with this curated realm from Paris. Sail across the best of Northern Europe and explore treasures like Helsinki, Oslo, Tallinn with comfort and style.",
      distance: "880 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Paris to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Amanda Warren",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "spectacular.renaissa@velarivoyages.com",
          contactNumber: "+1-627-781-5401"
        }
      }
    ],
    title: "Spectacular Renaissance of the Nordic Waters",
    description: "Leave stress behind with this curated realm from Paris. Sail across the best of Northern Europe and explore treasures like Helsinki, Oslo, Tallinn with comfort and style.",
    rating: 4.9,
    tags: ["relaxation","long-distance"]
  },
  {
    basePrice: 9205,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "From bustling Paris to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Copenhagen, Stockholm deliver a balanced blend of culture and comfort.",
      distance: "1345 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Leah Porter",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "epic.quest.of.the.ro@velarivoyages.com",
          contactNumber: "+1-495-575-9017"
        }
      }
    ],
    title: "Epic Quest of the Romantic Capital",
    description: "From bustling Paris to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Copenhagen, Stockholm deliver a balanced blend of culture and comfort.",
    rating: 4.3,
    tags: ["luxury","seasonal"]
  },
  {
    basePrice: 5417,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Experience the elegance of the seas on this timeless odyssey through Northern Europe, starting from the illustrious port of Paris. From Helsinki, Copenhagen to St. Petersburg, each destination offers its own story, culture, and breathtaking views.",
      distance: "785 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Paris to Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Maria Fox",
        role: "Security Officer",
        languages: ["Arabic","Bengali"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "captivating.retreat.@velarivoyages.com",
          contactNumber: "+1-902-794-3213"
        }
      }
    ],
    title: "Captivating Retreat of the Romantic Capital",
    description: "Experience the elegance of the seas on this timeless odyssey through Northern Europe, starting from the illustrious port of Paris. From Helsinki, Copenhagen to St. Petersburg, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.2,
    tags: ["adventure","short-getaway","tropical"]
  },
  {
    basePrice: 3294,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
      description: "Start in the vibrant city of Paris and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Helsinki, St. Petersburg.",
      distance: "1020 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Paris to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Helsinki to St. Petersburg"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Bobby Clark",
        role: "Guest Relations Manager",
        languages: ["Thai","Vietnamese","Swedish"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
        contact: {
          contactEmail: "secret.tide.of.the.c@velarivoyages.com",
          contactNumber: "+1-779-906-5078"
        }
      }
    ],
    title: "Secret Tide of the City of Light",
    description: "Start in the vibrant city of Paris and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Helsinki, St. Petersburg.",
    rating: 4.2,
    tags: ["relaxation"]
  },
  {
    basePrice: 8655,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
      description: "This extraordinary passage from Paris offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of St. Petersburg and Stockholm, creating memories that will last a lifetime.",
      distance: "1085 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Paris to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Jason Foster",
        role: "Guest Relations Manager",
        languages: ["Thai","Vietnamese","Swedish"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "exquisite.voyage.of.@velarivoyages.com",
          contactNumber: "+1-239-731-5973"
        }
      }
    ],
    title: "Exquisite Voyage of the Twilight Fjords",
    description: "This extraordinary passage from Paris offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of St. Petersburg and Stockholm, creating memories that will last a lifetime.",
    rating: 4.0,
    tags: ["family-friendly","relaxation"]
  },
  {
    basePrice: 2030,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  },
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "From the lively departure port of Paris, this curated horizon showcases the finest of Northern Europe. With visits to Tallinn, St. Petersburg, Copenhagen, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "827 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Paris to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Bobby Reeves",
        role: "Guest Relations Manager",
        languages: ["Thai","Vietnamese","Swedish"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/26.jpg",
        contact: {
          contactEmail: "captivating.mystique@velarivoyages.com",
          contactNumber: "+1-328-657-3850"
        }
      }
    ],
    title: "Captivating Mystique of the Twilight Fjords",
    description: "From the lively departure port of Paris, this curated horizon showcases the finest of Northern Europe. With visits to Tallinn, St. Petersburg, Copenhagen, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.1,
    tags: ["exclusive","luxury"]
  },
  {
    basePrice: 9817,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Sail from Paris into a world of wonder. The Northern Europe beckons with unforgettable ports like Helsinki, Oslo, where every view is picture-perfect and every moment is priceless.",
      distance: "1210 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Paris to Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Oslo to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Antonio Hunter",
        role: "Guest Relations Manager",
        languages: ["Thai","Vietnamese","Swedish"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "extraordinary.saga.o@velarivoyages.com",
          contactNumber: "+1-293-591-3517"
        }
      }
    ],
    title: "Extraordinary Saga of the City of Light",
    description: "Sail from Paris into a world of wonder. The Northern Europe beckons with unforgettable ports like Helsinki, Oslo, where every view is picture-perfect and every moment is priceless.",
    rating: 4.7,
    tags: ["fall-cruise","themed-cruise","adventure"]
  },
  {
    basePrice: 1259,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    arrivalLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 48.8566,
    "longitude": 2.3522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Paris",
    "country": "France",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  }
],
      description: "Leave stress behind with this curated sojourn from Paris. Sail across the best of Northern Europe and explore treasures like St. Petersburg, Helsinki, Oslo, Stockholm with comfort and style.",
      distance: "1457 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Paris to St. Petersburg"
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
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Paris"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Paris"
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
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Paris"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Keith Spencer",
        role: "Guest Relations Manager",
        languages: ["Thai","Vietnamese","Swedish"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "infinite.excursion.o@velarivoyages.com",
          contactNumber: "+1-924-994-6437"
        }
      }
    ],
    title: "Infinite Excursion of the City of Light",
    description: "Leave stress behind with this curated sojourn from Paris. Sail across the best of Northern Europe and explore treasures like St. Petersburg, Helsinki, Oslo, Stockholm with comfort and style.",
    rating: 4.6,
    tags: ["adventure","long-distance","tropical"]
  }
];
