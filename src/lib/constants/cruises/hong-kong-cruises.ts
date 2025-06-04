import { Cruise } from "@/lib/interfaces/services/cruises";

export const hongKongCruises: Cruise[] = [
{
    basePrice: 6125,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Set sail from Hong Kong for a voyage like no other. From the picturesque landscapes of Singapore to the lively ambiance of Sydney, this starlit cruise will redefine your view of Asia Pacific.",
      distance: "776 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Singapore to Sydney"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Sydney to Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Bali to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Maya Reeves",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "unforgettable.sojour@velarivoyages.com",
          contactNumber: "+1-894-273-3787"
        }
      }
    ],
    title: "Unforgettable Sojourn of the Mystic East",
    description: "Set sail from Hong Kong for a voyage like no other. From the picturesque landscapes of Singapore to the lively ambiance of Sydney, this starlit cruise will redefine your view of Asia Pacific.",
    rating: 4.5,
    tags: ["long-distance","short-getaway","sightseeing"]
  },
  {
    basePrice: 5208,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "Embark on an unforgettable retreat from the vibrant port of Hong Kong, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Bangkok, Bali, this journey combines cultural immersion with breathtaking scenery.",
      distance: "865 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Bangkok"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Bali to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Stella Dunn",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
        contact: {
          contactEmail: "captivating.sanctuar@velarivoyages.com",
          contactNumber: "+1-808-951-9984"
        }
      }
    ],
    title: "Captivating Sanctuary of the Oceanic Wonders",
    description: "Embark on an unforgettable retreat from the vibrant port of Hong Kong, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Bangkok, Bali, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.4,
    tags: ["exclusive"]
  },
  {
    basePrice: 6050,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "A voyage of contrasts awaits from Hong Kong. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Tokyo, Bali, Singapore.",
      distance: "1153 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Tokyo"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Bali to Singapore"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Singapore to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Chloe Fisher",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "timeless.tide.of.the@velarivoyages.com",
          contactNumber: "+1-182-386-3492"
        }
      }
    ],
    title: "Timeless Tide of the Pearl of the Orient",
    description: "A voyage of contrasts awaits from Hong Kong. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Tokyo, Bali, Singapore.",
    rating: 4.1,
    tags: ["fall-cruise","tropical"]
  },
  {
    basePrice: 9214,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "Set sail from historic Hong Kong for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Singapore, Sydney, Bangkok.",
      distance: "747 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Singapore to Sydney"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Sydney to Bangkok"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Hawkins",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "luxurious.escape.of.@velarivoyages.com",
          contactNumber: "+1-682-359-5977"
        }
      }
    ],
    title: "Luxurious Escape of the Vertical City",
    description: "Set sail from historic Hong Kong for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Singapore, Sydney, Bangkok.",
    rating: 4.9,
    tags: ["adventure","short-getaway","tropical"]
  },
  {
    basePrice: 8996,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Let this eternal voyage redefine your idea of travel. From Hong Kong, explore the Asia Pacific in luxurious comfort, stopping at Tokyo, Sydney where every port offers a new chapter.",
      distance: "1477 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Tokyo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Clark",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "infinite.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-399-239-2271"
        }
      }
    ],
    title: "Infinite Odyssey of the Pacific Dreams",
    description: "Let this eternal voyage redefine your idea of travel. From Hong Kong, explore the Asia Pacific in luxurious comfort, stopping at Tokyo, Sydney where every port offers a new chapter.",
    rating: 4.6,
    tags: ["seasonal"]
  },
  {
    basePrice: 7707,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "From the lively departure port of Hong Kong, this curated exploration showcases the finest of Asia Pacific. With visits to Bangkok, Singapore, Bali, Tokyo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "544 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Bangkok"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Singapore"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Bali to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Lisa Douglas",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/26.jpg",
        contact: {
          contactEmail: "majestic.journey.of.@velarivoyages.com",
          contactNumber: "+1-925-988-3609"
        }
      }
    ],
    title: "Majestic Journey of the Pacific Dreams",
    description: "From the lively departure port of Hong Kong, this curated exploration showcases the finest of Asia Pacific. With visits to Bangkok, Singapore, Bali, Tokyo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.3,
    tags: ["romantic"]
  },
  {
    basePrice: 6605,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "Discover the wonders of Asia Pacific aboard this secret cruise departing from Hong Kong. Journey through crystal waters to explore the treasures of Bali, Singapore, Shanghai, Tokyo, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1003 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Bali"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Bali to Singapore"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Singapore to Shanghai"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Tokyo"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Isabella Palmer",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "spectacular.mystique@velarivoyages.com",
          contactNumber: "+1-977-494-8805"
        }
      }
    ],
    title: "Spectacular Mystique of the Vertical City",
    description: "Discover the wonders of Asia Pacific aboard this secret cruise departing from Hong Kong. Journey through crystal waters to explore the treasures of Bali, Singapore, Shanghai, Tokyo, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.7,
    tags: ["VIP"]
  },
  {
    basePrice: 9855,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "Board in Hong Kong for a hand-crafted discovery through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Sydney, Bangkok, Shanghai.",
      distance: "787 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Sydney"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Sydney to Bangkok"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Shanghai"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Audrey Crawford",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "legendary.renaissanc@velarivoyages.com",
          contactNumber: "+1-854-510-9966"
        }
      }
    ],
    title: "Legendary Renaissance of the Pacific Dreams",
    description: "Board in Hong Kong for a hand-crafted discovery through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Sydney, Bangkok, Shanghai.",
    rating: 4.7,
    tags: ["relaxation","family-friendly"]
  },
  {
    basePrice: 2421,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "A voyage of contrasts awaits from Hong Kong. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Ho Chi Minh City, Bali, Sydney, Shanghai.",
      distance: "618 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Ho Chi Minh City"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Bali"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Bali to Sydney"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Sydney to Shanghai"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Carol Porter",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "opulent.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-640-499-9266"
        }
      }
    ],
    title: "Opulent Sojourn of the Vertical City",
    description: "A voyage of contrasts awaits from Hong Kong. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Ho Chi Minh City, Bali, Sydney, Shanghai.",
    rating: 4.4,
    tags: ["seasonal"]
  },
  {
    basePrice: 2674,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Shanghai",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Discover the wonders of Asia Pacific aboard this mesmerizing cruise departing from Hong Kong. Journey through crystal waters to explore the treasures of Singapore, Shanghai, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "820 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Singapore"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Singapore to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Lily Harper",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "majestic.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-755-842-2119"
        }
      }
    ],
    title: "Majestic Labyrinth of the Vertical City",
    description: "Discover the wonders of Asia Pacific aboard this mesmerizing cruise departing from Hong Kong. Journey through crystal waters to explore the treasures of Singapore, Shanghai, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.2,
    tags: ["family-friendly","relaxation"]
  },
  {
    basePrice: 7256,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Shanghai",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin an epic mirage from Hong Kong, where the seas meet culture. Visit the remarkable ports of Bali, Shanghai while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1352 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Bali"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Bali to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Nora Porter",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "starlit.mystique.of.@velarivoyages.com",
          contactNumber: "+1-149-224-2096"
        }
      }
    ],
    title: "Starlit Mystique of the Pearl of the Orient",
    description: "Begin an epic mirage from Hong Kong, where the seas meet culture. Visit the remarkable ports of Bali, Shanghai while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.1,
    tags: ["adventure"]
  },
  {
    basePrice: 1603,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Begin a captivating sojourn through the Asia Pacific, departing Hong Kong. With visits to Shanghai, Tokyo, each day brings a new adventure and deeper connection to the region.",
      distance: "1136 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Shanghai"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Genesis Cooper",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "starlit.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-869-836-7637"
        }
      }
    ],
    title: "Starlit Retreat of the Pearl of the Orient",
    description: "Begin a captivating sojourn through the Asia Pacific, departing Hong Kong. With visits to Shanghai, Tokyo, each day brings a new adventure and deeper connection to the region.",
    rating: 4.2,
    tags: ["seasonal"]
  },
  {
    basePrice: 4223,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "Set sail from Hong Kong on this secret odyssey through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Bangkok and Bali, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "624 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Bangkok"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Bali to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Helen Murray",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/85.jpg",
        contact: {
          contactEmail: "secret.excursion.of.@velarivoyages.com",
          contactNumber: "+1-174-429-7902"
        }
      }
    ],
    title: "Secret Excursion of the Pearl of the Orient",
    description: "Set sail from Hong Kong on this secret odyssey through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Bangkok and Bali, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 5.0,
    tags: ["fall-cruise","VIP"]
  },
  {
    basePrice: 5930,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Set course from Hong Kong for an inspiring crystalline journey across Asia Pacific. Whether exploring ancient ruins in Bali or soaking up coastal views in Shanghai, every day offers a perfect mix of discovery and relaxation.",
      distance: "1330 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Bali to Shanghai"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Pamela Graves",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "starlit.reverie.of.t@velarivoyages.com",
          contactNumber: "+1-150-295-8766"
        }
      }
    ],
    title: "Starlit Reverie of the Vertical City",
    description: "Set course from Hong Kong for an inspiring crystalline journey across Asia Pacific. Whether exploring ancient ruins in Bali or soaking up coastal views in Shanghai, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.4,
    tags: ["seasonal","exclusive","tropical"]
  },
  {
    basePrice: 1838,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Ho Chi Minh City",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let this spectacular voyage redefine your idea of travel. From Hong Kong, explore the Asia Pacific in luxurious comfort, stopping at Bali, Ho Chi Minh City where every port offers a new chapter.",
      distance: "1449 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Bali"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Bali to Ho Chi Minh City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Charlotte Harper",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "starlit.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-945-781-8480"
        }
      }
    ],
    title: "Starlit Sojourn of the Pearl of the Orient",
    description: "Let this spectacular voyage redefine your idea of travel. From Hong Kong, explore the Asia Pacific in luxurious comfort, stopping at Bali, Ho Chi Minh City where every port offers a new chapter.",
    rating: 4.8,
    tags: ["adventure","fall-cruise"]
  },
  {
    basePrice: 4013,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "Depart Hong Kong on a relaxing retreat through the Asia Pacific region. Highlights include the stunning coastlines of Tokyo, Shanghai, Bali, Singapore, all while enjoying first-class amenities on board.",
      distance: "795 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Tokyo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Shanghai"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Bali"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Bali to Singapore"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Singapore to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mary Hudson",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/85.jpg",
        contact: {
          contactEmail: "midnight.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-948-509-1757"
        }
      }
    ],
    title: "Midnight Sojourn of the Oriental Realms",
    description: "Depart Hong Kong on a relaxing retreat through the Asia Pacific region. Highlights include the stunning coastlines of Tokyo, Shanghai, Bali, Singapore, all while enjoying first-class amenities on board.",
    rating: 4.0,
    tags: ["exclusive","themed-cruise","family-friendly"]
  },
  {
    basePrice: 1004,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Shanghai",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Depart Hong Kong on a relaxing sojourn through the Asia Pacific region. Highlights include the stunning coastlines of Ho Chi Minh City, Shanghai, all while enjoying first-class amenities on board.",
      distance: "1261 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Ho Chi Minh City"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Alexa Lawson",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "mesmerizing.excursio@velarivoyages.com",
          contactNumber: "+1-869-173-9466"
        }
      }
    ],
    title: "Mesmerizing Excursion of the Mystic East",
    description: "Depart Hong Kong on a relaxing sojourn through the Asia Pacific region. Highlights include the stunning coastlines of Ho Chi Minh City, Shanghai, all while enjoying first-class amenities on board.",
    rating: 4.7,
    tags: ["short-getaway"]
  },
  {
    basePrice: 1917,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "An escape like no other begins in Hong Kong, where your sanctuary launches into the heart of Asia Pacific. Discover the magic of Bangkok, Bali with style and sophistication.",
      distance: "1140 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Bangkok"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Bali to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Naomi Crawford",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "legendary.horizon.of@velarivoyages.com",
          contactNumber: "+1-867-305-7278"
        }
      }
    ],
    title: "Legendary Horizon of the Pearl of the Orient",
    description: "An escape like no other begins in Hong Kong, where your sanctuary launches into the heart of Asia Pacific. Discover the magic of Bangkok, Bali with style and sophistication.",
    rating: 4.9,
    tags: ["luxury"]
  },
  {
    basePrice: 8376,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Embark on an unforgettable adventure from the vibrant port of Hong Kong, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Singapore, Sydney, this journey combines cultural immersion with breathtaking scenery.",
      distance: "751 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Singapore to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Maria Chambers",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "secret.tide.of.the.v@velarivoyages.com",
          contactNumber: "+1-728-451-8149"
        }
      }
    ],
    title: "Secret Tide of the Vertical City",
    description: "Embark on an unforgettable adventure from the vibrant port of Hong Kong, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Singapore, Sydney, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.1,
    tags: ["adventure","themed-cruise"]
  },
  {
    basePrice: 8661,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Ho Chi Minh City",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This reverie takes you beyond the ordinary, starting in Hong Kong. With breathtaking stops in Tokyo, Ho Chi Minh City, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1251 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Ho Chi Minh City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Amanda Murray",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "mesmerizing.horizon.@velarivoyages.com",
          contactNumber: "+1-549-829-2984"
        }
      }
    ],
    title: "Mesmerizing Horizon of the Vertical City",
    description: "This reverie takes you beyond the ordinary, starting in Hong Kong. With breathtaking stops in Tokyo, Ho Chi Minh City, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 5.0,
    tags: ["seasonal","family-friendly"]
  },
  {
    basePrice: 1179,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Escape into the calm waters of Asia Pacific with this luxurious journey from Hong Kong. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Bali, Shanghai, Sydney.",
      distance: "1408 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Bali to Shanghai"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Barbara Hunter",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "infinite.requiem.of.@velarivoyages.com",
          contactNumber: "+1-750-912-3189"
        }
      }
    ],
    title: "Infinite Requiem of the Vertical City",
    description: "Escape into the calm waters of Asia Pacific with this luxurious journey from Hong Kong. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Bali, Shanghai, Sydney.",
    rating: 4.1,
    tags: ["family-friendly","VIP"]
  },
  {
    basePrice: 2656,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Set off on a sanctuary from Hong Kong that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Ho Chi Minh City, Bali, Shanghai, Sydney.",
      distance: "1239 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Ho Chi Minh City"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Bali to Shanghai"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Amanda Reed",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
        contact: {
          contactEmail: "secret.escape.of.the@velarivoyages.com",
          contactNumber: "+1-613-888-3571"
        }
      }
    ],
    title: "Secret Escape of the Oriental Realms",
    description: "Set off on a sanctuary from Hong Kong that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Ho Chi Minh City, Bali, Shanghai, Sydney.",
    rating: 4.2,
    tags: ["themed-cruise","fall-cruise"]
  },
  {
    basePrice: 9258,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Bali",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Escape the everyday with this crystalline journey through Asia Pacific, departing from Hong Kong. You'll visit Tokyo, Ho Chi Minh City, Shanghai, Bali, where every stop is a new adventure.",
      distance: "517 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Tokyo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Ho Chi Minh City"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Shanghai"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Bali"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Bali"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Alexa Hunter",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "midnight.quest.of.th@velarivoyages.com",
          contactNumber: "+1-712-736-7056"
        }
      }
    ],
    title: "Midnight Quest of the Vertical City",
    description: "Escape the everyday with this crystalline journey through Asia Pacific, departing from Hong Kong. You'll visit Tokyo, Ho Chi Minh City, Shanghai, Bali, where every stop is a new adventure.",
    rating: 5.0,
    tags: ["VIP","short-getaway"]
  },
  {
    basePrice: 3751,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Start in the vibrant city of Hong Kong and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Shanghai, Sydney.",
      distance: "986 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Angela Grant",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
        contact: {
          contactEmail: "opulent.requiem.of.t@velarivoyages.com",
          contactNumber: "+1-209-481-8166"
        }
      }
    ],
    title: "Opulent Requiem of the Vertical City",
    description: "Start in the vibrant city of Hong Kong and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Shanghai, Sydney.",
    rating: 4.9,
    tags: ["exclusive","adventure","short-getaway"]
  },
  {
    basePrice: 6126,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Ho Chi Minh City",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set sail from Hong Kong for a voyage like no other. From the picturesque landscapes of Bangkok to the lively ambiance of Tokyo, this mesmerizing cruise will redefine your view of Asia Pacific.",
      distance: "1049 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Bangkok"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Tokyo"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Ho Chi Minh City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Maya Campbell",
        role: "Security Officer",
        languages: ["Punjabi","Kannada","Telugu"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "majestic.quest.of.th@velarivoyages.com",
          contactNumber: "+1-433-212-7541"
        }
      }
    ],
    title: "Majestic Quest of the Oceanic Wonders",
    description: "Set sail from Hong Kong for a voyage like no other. From the picturesque landscapes of Bangkok to the lively ambiance of Tokyo, this mesmerizing cruise will redefine your view of Asia Pacific.",
    rating: 4.6,
    tags: ["relaxation","VIP"]
  },
  {
    basePrice: 6926,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Ho Chi Minh City",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let the spirit of exploration guide your midnight journey from Hong Kong. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Bangkok, Ho Chi Minh City.",
      distance: "1106 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Bangkok"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Ho Chi Minh City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Walter Murray",
        role: "Youth Program Director",
        languages: ["French","Punjabi"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "infinite.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-676-188-8993"
        }
      }
    ],
    title: "Infinite Sanctuary of the Mystic East",
    description: "Let the spirit of exploration guide your midnight journey from Hong Kong. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Bangkok, Ho Chi Minh City.",
    rating: 4.6,
    tags: ["VIP"]
  },
  {
    basePrice: 8903,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Bali",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin your journey in Hong Kong, where tradition meets travel. This immersive mirage reveals the finest of Asia Pacific, from the beaches of Shanghai to the streets of Tokyo.",
      distance: "649 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Shanghai"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Tokyo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Bangkok"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Bali"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Bali"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Edward Gibson",
        role: "Youth Program Director",
        languages: ["French","Punjabi"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "mesmerizing.voyage.o@velarivoyages.com",
          contactNumber: "+1-684-564-7540"
        }
      }
    ],
    title: "Mesmerizing Voyage of the Oriental Realms",
    description: "Begin your journey in Hong Kong, where tradition meets travel. This immersive mirage reveals the finest of Asia Pacific, from the beaches of Shanghai to the streets of Tokyo.",
    rating: 4.9,
    tags: ["long-distance","fall-cruise","family-friendly"]
  },
  {
    basePrice: 4359,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "Your journey through the Asia Pacific begins in Hong Kong, where elegance meets adventure. Explore the shores of Bali, Shanghai, Ho Chi Minh City, Bangkok, with curated excursions and luxurious onboard amenities.",
      distance: "874 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Bali to Shanghai"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Ho Chi Minh City"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Bangkok"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Logan Sutton",
        role: "Youth Program Director",
        languages: ["French","Punjabi"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "mythic.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-526-758-8547"
        }
      }
    ],
    title: "Mythic Sojourn of the Pearl of the Orient",
    description: "Your journey through the Asia Pacific begins in Hong Kong, where elegance meets adventure. Explore the shores of Bali, Shanghai, Ho Chi Minh City, Bangkok, with curated excursions and luxurious onboard amenities.",
    rating: 5.0,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 7459,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Bali",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Your voyage begins in Hong Kong, where every sunset on the Asia Pacific horizon promises another day of discovery—from Ho Chi Minh City, Bali to hidden ports of charm.",
      distance: "673 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Ho Chi Minh City"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Bali"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Bali"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Lawrence Morgan",
        role: "Youth Program Director",
        languages: ["French","Punjabi"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "forbidden.escape.of.@velarivoyages.com",
          contactNumber: "+1-485-462-5900"
        }
      }
    ],
    title: "Forbidden Escape of the Vertical City",
    description: "Your voyage begins in Hong Kong, where every sunset on the Asia Pacific horizon promises another day of discovery—from Ho Chi Minh City, Bali to hidden ports of charm.",
    rating: 5.0,
    tags: ["luxury"]
  },
  {
    basePrice: 6711,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Bali",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Unwind and explore on this labyrinth through Asia Pacific, departing from Hong Kong. With every stop—from Sydney to Bali—you’ll collect memories that last a lifetime.",
      distance: "1255 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Sydney"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Sydney to Shanghai"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Bali"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Bali"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Harry Knight",
        role: "Youth Program Director",
        languages: ["French","Punjabi"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "starlit.exploration.@velarivoyages.com",
          contactNumber: "+1-758-491-3879"
        }
      }
    ],
    title: "Starlit Exploration of the Vertical City",
    description: "Unwind and explore on this labyrinth through Asia Pacific, departing from Hong Kong. With every stop—from Sydney to Bali—you’ll collect memories that last a lifetime.",
    rating: 4.3,
    tags: ["exclusive","long-distance"]
  },
  {
    basePrice: 2969,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Bangkok",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "A voyage of contrasts awaits from Hong Kong. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Tokyo, Bangkok.",
      distance: "666 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Tokyo"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Bangkok"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Payne",
        role: "Activities Director",
        languages: ["Zulu"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "starlit.escape.of.th@velarivoyages.com",
          contactNumber: "+1-951-371-6111"
        }
      }
    ],
    title: "Starlit Escape of the Vertical City",
    description: "A voyage of contrasts awaits from Hong Kong. Discover the historical and natural richness of Asia Pacific as you cruise to spectacular destinations like Tokyo, Bangkok.",
    rating: 4.7,
    tags: ["romantic","family-friendly"]
  },
  {
    basePrice: 8754,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "An unforgettable passage awaits as you cruise from Hong Kong across Asia Pacific. Dive into history, flavor, and culture with stops including Singapore, Ho Chi Minh City.",
      distance: "702 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Singapore"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Singapore to Ho Chi Minh City"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Abigail Parker",
        role: "Activities Director",
        languages: ["Zulu"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/92.jpg",
        contact: {
          contactEmail: "hidden.requiem.of.th@velarivoyages.com",
          contactNumber: "+1-947-642-5152"
        }
      }
    ],
    title: "Hidden Requiem of the Pearl of the Orient",
    description: "An unforgettable passage awaits as you cruise from Hong Kong across Asia Pacific. Dive into history, flavor, and culture with stops including Singapore, Ho Chi Minh City.",
    rating: 4.4,
    tags: ["romantic","themed-cruise","fall-cruise"]
  },
  {
    basePrice: 7736,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Bali",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "From bustling Hong Kong to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Bangkok, Singapore, Sydney, Bali deliver a balanced blend of culture and comfort.",
      distance: "1448 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Bangkok"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Singapore"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Singapore to Sydney"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Sydney to Bali"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Bali"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Samantha Fisher",
        role: "Activities Director",
        languages: ["Zulu"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "crystalline.journey.@velarivoyages.com",
          contactNumber: "+1-971-713-8794"
        }
      }
    ],
    title: "Crystalline Journey of the Oriental Realms",
    description: "From bustling Hong Kong to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Bangkok, Singapore, Sydney, Bali deliver a balanced blend of culture and comfort.",
    rating: 4.1,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 4489,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Bangkok",
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
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set course from Hong Kong for an inspiring hidden journey across Asia Pacific. Whether exploring ancient ruins in Singapore or soaking up coastal views in Bali, every day offers a perfect mix of discovery and relaxation.",
      distance: "874 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Singapore"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Bali to Bangkok"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Ellie Wells",
        role: "Activities Director",
        languages: ["Zulu"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "opulent.discovery.of@velarivoyages.com",
          contactNumber: "+1-106-982-8986"
        }
      }
    ],
    title: "Opulent Discovery of the Pacific Dreams",
    description: "Set course from Hong Kong for an inspiring hidden journey across Asia Pacific. Whether exploring ancient ruins in Singapore or soaking up coastal views in Bali, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.1,
    tags: ["romantic","family-friendly"]
  },
  {
    basePrice: 6346,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 22.3193,
    "longitude": 114.1694
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  },
  {
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 22.3193,
      "longitude": 114.1694
    }
  }
],
      description: "Savor each moment of this midnight escape through Asia Pacific, starting in Hong Kong. Visit renowned locations like Bali, Shanghai, Ho Chi Minh City, Tokyo, where adventure and relaxation intertwine.",
      distance: "570 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Bali to Shanghai"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Ho Chi Minh City"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Tokyo"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 19",
    "end": "Day 20",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Ariana Gibson",
        role: "Activities Director",
        languages: ["Zulu"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "unforgettable.retrea@velarivoyages.com",
          contactNumber: "+1-681-817-1689"
        }
      }
    ],
    title: "Unforgettable Retreat of the Vertical City",
    description: "Savor each moment of this midnight escape through Asia Pacific, starting in Hong Kong. Visit renowned locations like Bali, Shanghai, Ho Chi Minh City, Tokyo, where adventure and relaxation intertwine.",
    rating: 4.5,
    tags: ["short-getaway","fall-cruise"]
  }
];
