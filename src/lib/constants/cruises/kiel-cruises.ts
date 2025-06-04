import { Cruise } from "@/lib/interfaces/services/cruises";

export const kielCruises: Cruise[] = [
{
    basePrice: 3303,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Sail into splendor from Kiel on a charming voyage through Northern Europe. Let each stop—from Oslo to Stockholm—reveal the unique flavors and colors of the region.",
      distance: "661 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Kiel to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Kiel"
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
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Ellie Russell",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/47.jpg",
        contact: {
          contactEmail: "luxurious.adventure.@velarivoyages.com",
          contactNumber: "+1-778-457-9364"
        }
      }
    ],
    title: "Luxurious Adventure of the Snow-Kissed Harbors",
    description: "Sail into splendor from Kiel on a charming voyage through Northern Europe. Let each stop—from Oslo to Stockholm—reveal the unique flavors and colors of the region.",
    rating: 4.4,
    tags: ["tropical","adventure"]
  },
  {
    basePrice: 7331,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "This handpicked sanctuary begins in Kiel and travels through Northern Europe's iconic waterscapes. Discover St. Petersburg, Copenhagen as each day brings new stories and every night offers elegant repose.",
      distance: "1476 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Kiel to St. Petersburg"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Grace Keller",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/73.jpg",
        contact: {
          contactEmail: "mystical.escape.of.t@velarivoyages.com",
          contactNumber: "+1-778-887-2757"
        }
      }
    ],
    title: "Mystical Escape of the Nordic Waters",
    description: "This handpicked sanctuary begins in Kiel and travels through Northern Europe's iconic waterscapes. Discover St. Petersburg, Copenhagen as each day brings new stories and every night offers elegant repose.",
    rating: 4.2,
    tags: ["wildlife"]
  },
  {
    basePrice: 7750,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Board in Kiel for a hand-crafted resonance through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Stockholm, Copenhagen, St. Petersburg, Oslo.",
      distance: "761 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Kiel to Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Copenhagen"
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
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Sailing from Oslo to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Kiel"
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
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 19",
    "end": "Day 19",
    "duration": "1 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Priya Wells",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "radiancedrenched.fro@velarivoyages.com",
          contactNumber: "+1-957-994-6196"
        }
      }
    ],
    title: "Radiance-Drenched Frontier of the Waves of Memory",
    description: "Board in Kiel for a hand-crafted resonance through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Stockholm, Copenhagen, St. Petersburg, Oslo.",
    rating: 4.9,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 5896,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
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
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Begin your whisper in Kiel, a gateway to the soul of Northern Europe. Enjoy days spent exploring Copenhagen, Tallinn, Helsinki and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "625 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Kiel to Copenhagen"
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
    "description": "Sailing from Tallinn to Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Kiel"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Harper Griffin",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "moonlit.escape.of.th@velarivoyages.com",
          contactNumber: "+1-489-241-2786"
        }
      }
    ],
    title: "Moonlit Escape of the Nordic Waters",
    description: "Begin your whisper in Kiel, a gateway to the soul of Northern Europe. Enjoy days spent exploring Copenhagen, Tallinn, Helsinki and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.2,
    tags: ["anniversary-cruise"]
  },
  {
    basePrice: 5636,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
      description: "Set sail from Kiel on this starlit renaissance through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore St. Petersburg and Stockholm and Tallinn, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "551 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Kiel to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Kiel"
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
    "description": "Exploring Stockholm"
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
        name: "Lily Hall",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "crystalline.tide.of.@velarivoyages.com",
          contactNumber: "+1-663-759-4039"
        }
      }
    ],
    title: "Crystalline Tide of the Canal Whisper Port",
    description: "Set sail from Kiel on this starlit renaissance through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore St. Petersburg and Stockholm and Tallinn, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.6,
    tags: ["tropical","glacier-cruise"]
  },
  {
    basePrice: 7146,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
      description: "Set off on a embrace from Kiel that captures the essence of Northern Europe. Discover cultural gems and culinary delights across St. Petersburg, Stockholm, Tallinn, Oslo.",
      distance: "1175 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Kiel to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Kiel"
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
    "description": "Exploring Stockholm"
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
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Linda Keller",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "idyllic.escape.of.th@velarivoyages.com",
          contactNumber: "+1-184-358-5423"
        }
      }
    ],
    title: "Idyllic Escape of the Waves of Memory",
    description: "Set off on a embrace from Kiel that captures the essence of Northern Europe. Discover cultural gems and culinary delights across St. Petersburg, Stockholm, Tallinn, Oslo.",
    rating: 4.9,
    tags: ["adventure","cruise-vacation","repositioning"]
  },
  {
    basePrice: 4378,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Your haven begins in Kiel, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Tallinn to the historic streets of Stockholm, each stop in the Northern Europe will leave a lasting impression.",
      distance: "783 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Kiel to Tallinn"
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
    "description": "Sailing from Stockholm to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Kiel"
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
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jessica Keller",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "lavish.solstice.of.t@velarivoyages.com",
          contactNumber: "+1-704-963-3456"
        }
      }
    ],
    title: "Lavish Solstice of the Fairy Tale Villages",
    description: "Your haven begins in Kiel, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Tallinn to the historic streets of Stockholm, each stop in the Northern Europe will leave a lasting impression.",
    rating: 4.4,
    tags: ["wellness"]
  },
  {
    basePrice: 3303,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "From bustling Kiel to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Oslo, Tallinn, Helsinki deliver a balanced blend of culture and comfort.",
      distance: "1033 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Kiel to Oslo"
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
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
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
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Clark",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "radiant.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-706-493-4799"
        }
      }
    ],
    title: "Radiant Odyssey of the Gateway to the Baltic",
    description: "From bustling Kiel to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Oslo, Tallinn, Helsinki deliver a balanced blend of culture and comfort.",
    rating: 4.3,
    tags: ["seasonal","luxury","cruise-getaway"]
  },
  {
    basePrice: 9290,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Enjoy seamless luxury on this floating saga beginning in Kiel. Visit breathtaking Northern Europe locales such as Tallinn, Copenhagen on this unforgettable itinerary.",
      distance: "986 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Kiel to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Kiel"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Zoe Gardner",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
        contact: {
          contactEmail: "ornate.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-621-848-5105"
        }
      }
    ],
    title: "Ornate Odyssey of the Gateway to the Baltic",
    description: "Enjoy seamless luxury on this floating saga beginning in Kiel. Visit breathtaking Northern Europe locales such as Tallinn, Copenhagen on this unforgettable itinerary.",
    rating: 4.8,
    tags: ["adventure","wellness"]
  },
  {
    basePrice: 2814,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
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
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Start in the vibrant city of Kiel and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Helsinki, Tallinn, Stockholm.",
      distance: "1032 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Kiel to Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Stockholm"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Kiel"
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
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Priya Henderson",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "captivating.sanctum.@velarivoyages.com",
          contactNumber: "+1-369-929-8714"
        }
      }
    ],
    title: "Captivating Sanctum of the Gateway to the Baltic",
    description: "Start in the vibrant city of Kiel and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Helsinki, Tallinn, Stockholm.",
    rating: 4.9,
    tags: ["cultural","anniversary-cruise"]
  },
  {
    basePrice: 1235,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Discover the wonders of Northern Europe aboard this charming cruise departing from Kiel. Journey through crystal waters to explore the treasures of Helsinki, Stockholm, Oslo, St. Petersburg, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1344 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Kiel to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Stockholm"
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
    "description": "Sailing from Oslo to St. Petersburg"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Helsinki"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Virginia Hayes",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "epic.quest.of.the.wa@velarivoyages.com",
          contactNumber: "+1-620-317-6932"
        }
      }
    ],
    title: "Epic Quest of the Waves of Memory",
    description: "Discover the wonders of Northern Europe aboard this charming cruise departing from Kiel. Journey through crystal waters to explore the treasures of Helsinki, Stockholm, Oslo, St. Petersburg, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.5,
    tags: ["short-getaway"]
  },
  {
    basePrice: 2172,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
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
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
      description: "Sail away from the charming harbor of Kiel on this tide-washed journey across Northern Europe. Uncover the beauty and history of Tallinn, Helsinki, Copenhagen, Stockholm with curated excursions, world-class cuisine, and exceptional service.",
      distance: "892 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Kiel to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
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
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Maya Murray",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "majestic.serenade.of@velarivoyages.com",
          contactNumber: "+1-383-217-7871"
        }
      }
    ],
    title: "Majestic Serenade of the German Maritime Hub",
    description: "Sail away from the charming harbor of Kiel on this tide-washed journey across Northern Europe. Uncover the beauty and history of Tallinn, Helsinki, Copenhagen, Stockholm with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.7,
    tags: ["fall-cruise","cruise-getaway"]
  },
  {
    basePrice: 9401,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Start in the vibrant city of Kiel and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Copenhagen, St. Petersburg.",
      distance: "1171 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Kiel to Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Kiel"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Zola Hall",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/91.jpg",
        contact: {
          contactEmail: "charming.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-806-369-5614"
        }
      }
    ],
    title: "Charming Sanctuary of the Canal Whisper Port",
    description: "Start in the vibrant city of Kiel and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Copenhagen, St. Petersburg.",
    rating: 4.7,
    tags: ["adventure","expedition"]
  },
  {
    basePrice: 1989,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
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
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Depart Kiel on a relaxing legacy through the Northern Europe region. Highlights include the stunning coastlines of Copenhagen, Tallinn, all while enjoying first-class amenities on board.",
      distance: "962 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Kiel to Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Ariana Keller",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "epic.resonance.of.th@velarivoyages.com",
          contactNumber: "+1-698-754-2291"
        }
      }
    ],
    title: "Epic Resonance of the Frosted Kingdoms",
    description: "Depart Kiel on a relaxing legacy through the Northern Europe region. Highlights include the stunning coastlines of Copenhagen, Tallinn, all while enjoying first-class amenities on board.",
    rating: 4.6,
    tags: ["cruise-experience","seasonal","anniversary-cruise"]
  },
  {
    basePrice: 2157,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
  }
],
      description: "Discover the wonders of Northern Europe aboard this unforgettable cruise departing from Kiel. Journey through crystal waters to explore the treasures of Tallinn, Copenhagen, Helsinki, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1273 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Kiel to Tallinn"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Tallinn"
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
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Janet Wallace",
        role: "Customer Service Representative",
        languages: ["Japanese"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/92.jpg",
        contact: {
          contactEmail: "hidden.elevation.of.@velarivoyages.com",
          contactNumber: "+1-462-300-1465"
        }
      }
    ],
    title: "Hidden Elevation of the Aurora Veil",
    description: "Discover the wonders of Northern Europe aboard this unforgettable cruise departing from Kiel. Journey through crystal waters to explore the treasures of Tallinn, Copenhagen, Helsinki, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.1,
    tags: ["weekend-cruise","culinary"]
  },
  {
    basePrice: 7784,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "An escape like no other begins in Kiel, where your eclipse launches into the heart of Northern Europe. Discover the magic of Helsinki, Tallinn, St. Petersburg, Oslo with style and sophistication.",
      distance: "1080 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Kiel to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Tallinn"
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
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Fisher",
        role: "Travel Advisor",
        languages: ["Greek","Malayalam"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "mystical.discovery.o@velarivoyages.com",
          contactNumber: "+1-338-889-7456"
        }
      }
    ],
    title: "Mystical Discovery of the Frost-Lit Dock",
    description: "An escape like no other begins in Kiel, where your eclipse launches into the heart of Northern Europe. Discover the magic of Helsinki, Tallinn, St. Petersburg, Oslo with style and sophistication.",
    rating: 4.6,
    tags: ["wildlife","expedition"]
  },
  {
    basePrice: 9257,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
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
    "city": "Kiel",
    "country": "Germany",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail into splendor from Kiel on a captivating voyage through Northern Europe. Let each stop—from Stockholm to Copenhagen—reveal the unique flavors and colors of the region.",
      distance: "837 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Kiel to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Oslo to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Kiel"
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
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Graham",
        role: "Travel Advisor",
        languages: ["Greek","Malayalam"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "luxurious.resonance.@velarivoyages.com",
          contactNumber: "+1-362-687-5580"
        }
      }
    ],
    title: "Luxurious Resonance of the Steel and Salt Artery",
    description: "Sail into splendor from Kiel on a captivating voyage through Northern Europe. Let each stop—from Stockholm to Copenhagen—reveal the unique flavors and colors of the region.",
    rating: 5.0,
    tags: ["VIP"]
  }
];
