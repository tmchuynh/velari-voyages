import { Cruise } from "@/lib/interfaces/services/cruises";

export const berlinCruises: Cruise[] = [
  {
    basePrice: 7864,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
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
      description: "Set sail from Berlin for a voyage like no other. From the picturesque landscapes of Oslo to the lively ambiance of Helsinki, this whispering cruise will redefine your view of Northern Europe.",
      distance: "1433 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Berlin to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
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
    "description": "Sailing from Stockholm to St. Petersburg"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
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
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Allison Fletcher",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "luxurious.renaissanc@velarivoyages.com",
          contactNumber: "+1-876-652-1700"
        }
      }
    ],
    title: "Luxurious Renaissance of the Cultural Capital",
    description: "Set sail from Berlin for a voyage like no other. From the picturesque landscapes of Oslo to the lively ambiance of Helsinki, this whispering cruise will redefine your view of Northern Europe.",
    rating: 4.6,
    tags: ["luxury","short-getaway"]
  },
  {
    basePrice: 6506,
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
      description: "Begin a captivating excursion through the Northern Europe, departing Berlin. With visits to Tallinn, Oslo, each day brings a new adventure and deeper connection to the region.",
      distance: "687 nautical miles",
      totalDuration: "9 days",
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
    "description": "Sailing from Tallinn to Oslo"
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
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Elena Coleman",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "infinite.horizon.of.@velarivoyages.com",
          contactNumber: "+1-447-105-7926"
        }
      }
    ],
    title: "Infinite Horizon of the Wall of Stories",
    description: "Begin a captivating excursion through the Northern Europe, departing Berlin. With visits to Tallinn, Oslo, each day brings a new adventure and deeper connection to the region.",
    rating: 4.8,
    tags: ["adventure","short-getaway"]
  },
  {
    basePrice: 6101,
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
    category: "ultra-luxury",
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
      description: "Unwind and explore on this labyrinth through Northern Europe, departing from Berlin. With every stop—from St. Petersburg to Tallinn—you’ll collect memories that last a lifetime.",
      distance: "699 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Berlin to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
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
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Skylar Payne",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "mesmerizing.journey.@velarivoyages.com",
          contactNumber: "+1-682-110-5660"
        }
      }
    ],
    title: "Mesmerizing Journey of the Baltic Echoes",
    description: "Unwind and explore on this labyrinth through Northern Europe, departing from Berlin. With every stop—from St. Petersburg to Tallinn—you’ll collect memories that last a lifetime.",
    rating: 4.2,
    tags: ["luxury"]
  },
  {
    basePrice: 6496,
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Embark from Berlin and traverse the Northern Europe in style. Whether it’s the energy of St. Petersburg or the calm of Copenhagen, each destination reveals a new side of paradise.",
      distance: "757 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
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
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Berlin"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Grace Curtis",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "legendary.odyssey.of@velarivoyages.com",
          contactNumber: "+1-309-916-9460"
        }
      }
    ],
    title: "Legendary Odyssey of the Wall of Stories",
    description: "Embark from Berlin and traverse the Northern Europe in style. Whether it’s the energy of St. Petersburg or the calm of Copenhagen, each destination reveals a new side of paradise.",
    rating: 4.7,
    tags: ["relaxation","luxury"]
  },
  {
    basePrice: 8551,
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
    category: "ultra-luxury",
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Escape into the calm waters of Northern Europe with this majestic journey from Berlin. Explore vibrant markets, sun-soaked beaches, and architectural marvels at St. Petersburg, Tallinn, Stockholm, Copenhagen.",
      distance: "555 nautical miles",
      totalDuration: "18 days",
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
    "description": "Sailing from St. Petersburg to Tallinn"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Copenhagen"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Berlin"
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
    "description": "Exploring Tallinn"
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
        name: "Kinsley Collins",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "captivating.sojourn.@velarivoyages.com",
          contactNumber: "+1-589-615-2487"
        }
      }
    ],
    title: "Captivating Sojourn of the Wall of Stories",
    description: "Escape into the calm waters of Northern Europe with this majestic journey from Berlin. Explore vibrant markets, sun-soaked beaches, and architectural marvels at St. Petersburg, Tallinn, Stockholm, Copenhagen.",
    rating: 4.4,
    tags: ["relaxation","fall-cruise"]
  },
  {
    basePrice: 8158,
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
    category: "ultra-luxury",
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Set sail from Berlin on this golden requiem through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Oslo and Copenhagen and St. Petersburg, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1178 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Berlin to Oslo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Oslo to Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Berlin"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sophia Baker",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
        contact: {
          contactEmail: "majestic.exploration@velarivoyages.com",
          contactNumber: "+1-658-693-4903"
        }
      }
    ],
    title: "Majestic Exploration of the Cultural Capital",
    description: "Set sail from Berlin on this golden requiem through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Oslo and Copenhagen and St. Petersburg, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 5.0,
    tags: ["sightseeing"]
  },
  {
    basePrice: 9907,
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
      description: "This hand-selected epic cruise offers a true taste of Northern Europe. Depart from Berlin and explore ports like Copenhagen, Oslo, each telling a story through food, music, and tradition.",
      distance: "928 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Berlin to Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Oslo"
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
        name: "Maya Payne",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "hidden.voyage.of.the@velarivoyages.com",
          contactNumber: "+1-242-918-2127"
        }
      }
    ],
    title: "Hidden Voyage of the Runestone Realms",
    description: "This hand-selected epic cruise offers a true taste of Northern Europe. Depart from Berlin and explore ports like Copenhagen, Oslo, each telling a story through food, music, and tradition.",
    rating: 4.8,
    tags: ["adventure","exclusive"]
  },
  {
    basePrice: 7963,
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Embark on an unforgettable escape from the vibrant port of Berlin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Tallinn, St. Petersburg, Oslo, Stockholm, this journey combines cultural immersion with breathtaking scenery.",
      distance: "756 nautical miles",
      totalDuration: "16 days",
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
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
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
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Katherine Sutton",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "midnight.reverie.of.@velarivoyages.com",
          contactNumber: "+1-720-608-4564"
        }
      }
    ],
    title: "Midnight Reverie of the Cultural Capital",
    description: "Embark on an unforgettable escape from the vibrant port of Berlin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Tallinn, St. Petersburg, Oslo, Stockholm, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.6,
    tags: ["luxury","relaxation"]
  },
  {
    basePrice: 6173,
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "An unforgettable expedition awaits as you cruise from Berlin across Northern Europe. Dive into history, flavor, and culture with stops including Oslo, St. Petersburg.",
      distance: "761 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Berlin to Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Caroline Russell",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "legendary.renaissanc@velarivoyages.com",
          contactNumber: "+1-129-319-4604"
        }
      }
    ],
    title: "Legendary Renaissance of the Cultural Capital",
    description: "An unforgettable expedition awaits as you cruise from Berlin across Northern Europe. Dive into history, flavor, and culture with stops including Oslo, St. Petersburg.",
    rating: 4.9,
    tags: ["tropical"]
  },
  {
    basePrice: 7420,
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
      description: "Embark on an unforgettable mystique from the vibrant port of Berlin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Copenhagen, Oslo, this journey combines cultural immersion with breathtaking scenery.",
      distance: "862 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Berlin to Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
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
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sophia Foster",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "spectacular.escape.o@velarivoyages.com",
          contactNumber: "+1-310-553-1167"
        }
      }
    ],
    title: "Spectacular Escape of the Cultural Capital",
    description: "Embark on an unforgettable mystique from the vibrant port of Berlin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Copenhagen, Oslo, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.5,
    tags: ["tropical"]
  },
  {
    basePrice: 7273,
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
  }
],
      description: "Set sail from historic Berlin for a modern escape into the Northern Europe. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Oslo, Stockholm.",
      distance: "1152 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Berlin to Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Bella Crawford",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "majestic.mystique.of@velarivoyages.com",
          contactNumber: "+1-745-592-6665"
        }
      }
    ],
    title: "Majestic Mystique of the Cultural Capital",
    description: "Set sail from historic Berlin for a modern escape into the Northern Europe. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Oslo, Stockholm.",
    rating: 4.2,
    tags: ["family-friendly","sightseeing","exclusive"]
  },
  {
    basePrice: 1309,
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Leave stress behind with this curated sojourn from Berlin. Sail across the best of Northern Europe and explore treasures like Copenhagen, St. Petersburg with comfort and style.",
      distance: "953 nautical miles",
      totalDuration: "10 days",
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
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Berlin"
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
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Amina Maxwell",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "golden.excursion.of.@velarivoyages.com",
          contactNumber: "+1-751-327-6165"
        }
      }
    ],
    title: "Golden Excursion of the Wall of Stories",
    description: "Leave stress behind with this curated sojourn from Berlin. Sail across the best of Northern Europe and explore treasures like Copenhagen, St. Petersburg with comfort and style.",
    rating: 4.3,
    tags: ["VIP","exclusive"]
  },
  {
    basePrice: 7410,
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Depart from Berlin on this thoughtfully designed requiem across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at St. Petersburg, Oslo, Copenhagen.",
      distance: "1087 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Berlin to St. Petersburg"
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
    "description": "Sailing from Oslo to Copenhagen"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Berlin"
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
    "description": "Exploring Copenhagen"
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
        name: "Angela Mitchell",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "celestial.reverie.of@velarivoyages.com",
          contactNumber: "+1-678-757-6068"
        }
      }
    ],
    title: "Celestial Reverie of the Wall of Stories",
    description: "Depart from Berlin on this thoughtfully designed requiem across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at St. Petersburg, Oslo, Copenhagen.",
    rating: 4.1,
    tags: ["romantic","sightseeing"]
  },
  {
    basePrice: 9551,
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Set sail from Berlin for a voyage like no other. From the picturesque landscapes of Copenhagen to the lively ambiance of Stockholm, this mythic cruise will redefine your view of Northern Europe.",
      distance: "1201 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Berlin to Copenhagen"
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
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Oslo to Helsinki"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Berlin"
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
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
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
  },
  {
    "start": "Day 19",
    "end": "Day 20",
    "duration": "2 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Abigail Wells",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "extraordinary.sojour@velarivoyages.com",
          contactNumber: "+1-927-107-7462"
        }
      }
    ],
    title: "Extraordinary Sojourn of the Wall of Stories",
    description: "Set sail from Berlin for a voyage like no other. From the picturesque landscapes of Copenhagen to the lively ambiance of Stockholm, this mythic cruise will redefine your view of Northern Europe.",
    rating: 4.0,
    tags: ["seasonal","VIP"]
  },
  {
    basePrice: 6378,
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
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
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
      description: "Launch into adventure from Berlin and sail deep into the heart of the Northern Europe. With ports of call like Stockholm, Tallinn, Copenhagen, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "964 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Berlin to Stockholm"
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
    "description": "Sailing from Tallinn to Copenhagen"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Berlin"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Hannah Payne",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "golden.adventure.of.@velarivoyages.com",
          contactNumber: "+1-676-389-5533"
        }
      }
    ],
    title: "Golden Adventure of the Runestone Realms",
    description: "Launch into adventure from Berlin and sail deep into the heart of the Northern Europe. With ports of call like Stockholm, Tallinn, Copenhagen, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.4,
    tags: ["adventure","family-friendly","short-getaway"]
  },
  {
    basePrice: 1416,
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
      description: "Escape the everyday with this whispering journey through Northern Europe, departing from Berlin. You'll visit Helsinki, Oslo, where every stop is a new adventure.",
      distance: "953 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Berlin to Helsinki"
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
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Amanda Graves",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "enchanting.discovery@velarivoyages.com",
          contactNumber: "+1-607-580-7921"
        }
      }
    ],
    title: "Enchanting Discovery of the Nordic Waters",
    description: "Escape the everyday with this whispering journey through Northern Europe, departing from Berlin. You'll visit Helsinki, Oslo, where every stop is a new adventure.",
    rating: 5.0,
    tags: ["tropical","fall-cruise","romantic"]
  },
  {
    basePrice: 3611,
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
      description: "Begin a captivating voyage through the Northern Europe, departing Berlin. With visits to St. Petersburg, Tallinn, each day brings a new adventure and deeper connection to the region.",
      distance: "1149 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Berlin to St. Petersburg"
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
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
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
        name: "Jennifer Palmer",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/85.jpg",
        contact: {
          contactEmail: "velvet.reverie.of.th@velarivoyages.com",
          contactNumber: "+1-141-434-4704"
        }
      }
    ],
    title: "Velvet Reverie of the Wall of Stories",
    description: "Begin a captivating voyage through the Northern Europe, departing Berlin. With visits to St. Petersburg, Tallinn, each day brings a new adventure and deeper connection to the region.",
    rating: 4.4,
    tags: ["adventure","themed-cruise","VIP"]
  },
  {
    basePrice: 5547,
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
      description: "Let the winds of the Northern Europe carry you from Berlin to the most stunning ports in the region. With destinations like Copenhagen, Oslo, this mirage redefines luxury travel.",
      distance: "1326 nautical miles",
      totalDuration: "11 days",
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
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
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
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
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
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Kimberly Maxwell",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "captivating.labyrint@velarivoyages.com",
          contactNumber: "+1-764-142-9413"
        }
      }
    ],
    title: "Captivating Labyrinth of the Wall of Stories",
    description: "Let the winds of the Northern Europe carry you from Berlin to the most stunning ports in the region. With destinations like Copenhagen, Oslo, this mirage redefines luxury travel.",
    rating: 4.1,
    tags: ["short-getaway","fall-cruise"]
  },
  {
    basePrice: 6334,
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
  }
],
      description: "Set sail from Berlin on this mesmerizing sojourn through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Oslo and Tallinn, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1412 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Berlin to Oslo"
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
        name: "Helen Maxwell",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "legendary.escape.of.@velarivoyages.com",
          contactNumber: "+1-349-182-4803"
        }
      }
    ],
    title: "Legendary Escape of the Cultural Capital",
    description: "Set sail from Berlin on this mesmerizing sojourn through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Oslo and Tallinn, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.9,
    tags: ["long-distance","themed-cruise"]
  },
  {
    basePrice: 7277,
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "An escape like no other begins in Berlin, where your excursion launches into the heart of Northern Europe. Discover the magic of Tallinn, Oslo, Copenhagen with style and sophistication.",
      distance: "674 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Berlin to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Oslo to Copenhagen"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Berlin"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Oslo"
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
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Linda Hall",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/47.jpg",
        contact: {
          contactEmail: "whispering.odyssey.o@velarivoyages.com",
          contactNumber: "+1-870-747-7913"
        }
      }
    ],
    title: "Whispering Odyssey of the Runestone Realms",
    description: "An escape like no other begins in Berlin, where your excursion launches into the heart of Northern Europe. Discover the magic of Tallinn, Oslo, Copenhagen with style and sophistication.",
    rating: 4.5,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 8523,
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
    "city": "Berlin",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Escape into the calm waters of Northern Europe with this spectacular journey from Berlin. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Stockholm, Helsinki.",
      distance: "605 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Berlin to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Berlin"
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
    "description": "Exploring Stockholm"
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
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Angela Day",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "infinite.requiem.of.@velarivoyages.com",
          contactNumber: "+1-272-958-7486"
        }
      }
    ],
    title: "Infinite Requiem of the Runestone Realms",
    description: "Escape into the calm waters of Northern Europe with this spectacular journey from Berlin. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Stockholm, Helsinki.",
    rating: 4.8,
    tags: ["long-distance","seasonal"]
  },
  {
    basePrice: 2916,
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
      description: "Your journey through the Northern Europe begins in Berlin, where elegance meets adventure. Explore the shores of Stockholm, Tallinn, with curated excursions and luxurious onboard amenities.",
      distance: "773 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Berlin to Stockholm"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
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
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Janet Hudson",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "spectacular.odyssey.@velarivoyages.com",
          contactNumber: "+1-795-162-7441"
        }
      }
    ],
    title: "Spectacular Odyssey of the Cultural Capital",
    description: "Your journey through the Northern Europe begins in Berlin, where elegance meets adventure. Explore the shores of Stockholm, Tallinn, with curated excursions and luxurious onboard amenities.",
    rating: 5.0,
    tags: ["tropical","seasonal","VIP"]
  },
  {
    basePrice: 2679,
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
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This hand-selected secret cruise offers a true taste of Northern Europe. Depart from Berlin and explore ports like St. Petersburg, Copenhagen, Oslo, Helsinki, each telling a story through food, music, and tradition.",
      distance: "745 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Berlin to St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
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
    "description": "Sailing from Oslo to Helsinki"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
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
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Betty Gibson",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/26.jpg",
        contact: {
          contactEmail: "majestic.discovery.o@velarivoyages.com",
          contactNumber: "+1-146-384-3314"
        }
      }
    ],
    title: "Majestic Discovery of the Wall of Stories",
    description: "This hand-selected secret cruise offers a true taste of Northern Europe. Depart from Berlin and explore ports like St. Petersburg, Copenhagen, Oslo, Helsinki, each telling a story through food, music, and tradition.",
    rating: 4.7,
    tags: ["seasonal","exclusive"]
  },
  {
    basePrice: 4854,
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
      description: "Begin your journey in Berlin, where tradition meets travel. This immersive retreat reveals the finest of Northern Europe, from the beaches of Helsinki to the streets of Oslo.",
      distance: "1126 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Berlin to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Oslo to Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
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
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Dean",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "celestial.renaissanc@velarivoyages.com",
          contactNumber: "+1-431-942-3643"
        }
      }
    ],
    title: "Celestial Renaissance of the Nordic Waters",
    description: "Begin your journey in Berlin, where tradition meets travel. This immersive retreat reveals the finest of Northern Europe, from the beaches of Helsinki to the streets of Oslo.",
    rating: 4.1,
    tags: ["themed-cruise","exclusive","family-friendly"]
  },
  {
    basePrice: 4725,
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
  }
],
      description: "An unforgettable horizon awaits as you cruise from Berlin across Northern Europe. Dive into history, flavor, and culture with stops including Copenhagen, Tallinn, Oslo, Helsinki.",
      distance: "717 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Berlin to Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
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
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Betty Collins",
        role: "Logistics Coordinator",
        languages: ["Tamil","English","Arabic"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "midnight.reverie.of.@velarivoyages.com",
          contactNumber: "+1-579-835-2967"
        }
      }
    ],
    title: "Midnight Reverie of the Cultural Capital",
    description: "An unforgettable horizon awaits as you cruise from Berlin across Northern Europe. Dive into history, flavor, and culture with stops including Copenhagen, Tallinn, Oslo, Helsinki.",
    rating: 4.3,
    tags: ["VIP","short-getaway"]
  }
];
