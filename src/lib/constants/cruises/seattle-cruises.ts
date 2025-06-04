import { Cruise } from "@/lib/interfaces/services/cruises";

export const seattleCruises: Cruise[] = [
  {
    basePrice: 8496,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Sitka",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Experience coastal elegance on this odyssey from Seattle, where the journey through Alaska includes stops in Sitka, Skagway, Victoria, each more enchanting than the last.",
      distance: "711 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Seattle to Sitka"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Sitka to Skagway"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Skagway to Victoria"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Victoria to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Brooklyn Price",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
        contact: {
          contactEmail: "enchanting.sojourn.o@velarivoyages.com",
          contactNumber: "+1-220-751-5303"
        }
      }
    ],
    title: "Enchanting Sojourn of the Emerald City",
    description: "Experience coastal elegance on this odyssey from Seattle, where the journey through Alaska includes stops in Sitka, Skagway, Victoria, each more enchanting than the last.",
    rating: 4.2,
    tags: ["VIP"]
  },
  {
    basePrice: 6471,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "This inspiring expedition departs from Seattle, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Victoria, Skagway.",
      distance: "796 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Victoria to Skagway"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Skagway to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Aaliyah Bennett",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/91.jpg",
        contact: {
          contactEmail: "breathtaking.escape.@velarivoyages.com",
          contactNumber: "+1-167-569-7348"
        }
      }
    ],
    title: "Breathtaking Escape of the Glacial Kingdom",
    description: "This inspiring expedition departs from Seattle, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Victoria, Skagway.",
    rating: 4.5,
    tags: ["romantic","fall-cruise"]
  },
  {
    basePrice: 7818,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Let this starlit voyage redefine your idea of travel. From Seattle, explore the Alaska in luxurious comfort, stopping at Glacier Bay, Ketchikan where every port offers a new chapter.",
      distance: "901 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Grace Reeves",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "crystalline.expediti@velarivoyages.com",
          contactNumber: "+1-623-563-2254"
        }
      }
    ],
    title: "Crystalline Expedition of the Northern Lights",
    description: "Let this starlit voyage redefine your idea of travel. From Seattle, explore the Alaska in luxurious comfort, stopping at Glacier Bay, Ketchikan where every port offers a new chapter.",
    rating: 4.1,
    tags: ["VIP"]
  },
  {
    basePrice: 1085,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Sail away from Seattle into the beautiful expanse of Alaska. Along the way, enjoy rich cultural experiences in Glacier Bay, Juneau, where history, nature, and cuisine collide.",
      distance: "1282 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Juneau"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Juneau to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Janet Payne",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "mesmerizing.mirage.o@velarivoyages.com",
          contactNumber: "+1-708-517-4307"
        }
      }
    ],
    title: "Mesmerizing Mirage of the Rain-Crowned Harbor",
    description: "Sail away from Seattle into the beautiful expanse of Alaska. Along the way, enjoy rich cultural experiences in Glacier Bay, Juneau, where history, nature, and cuisine collide.",
    rating: 4.0,
    tags: ["exclusive","seasonal"]
  },
  {
    basePrice: 9227,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Victoria",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Your renaissance begins in Seattle, where every sunset on the Alaska horizon promises another day of discovery—from Skagway, Victoria to hidden ports of charm.",
      distance: "1410 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Skagway to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Emily Carpenter",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "mesmerizing.mirage.o@velarivoyages.com",
          contactNumber: "+1-979-349-4520"
        }
      }
    ],
    title: "Mesmerizing Mirage of the Northern Lights",
    description: "Your renaissance begins in Seattle, where every sunset on the Alaska horizon promises another day of discovery—from Skagway, Victoria to hidden ports of charm.",
    rating: 4.8,
    tags: ["relaxation","romantic","exclusive"]
  },
  {
    basePrice: 8285,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Savor each moment of this golden escape through Alaska, starting in Seattle. Visit renowned locations like Ketchikan, Victoria, Juneau, where adventure and relaxation intertwine.",
      distance: "798 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Victoria to Juneau"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Juneau to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Mason",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "majestic.expedition.@velarivoyages.com",
          contactNumber: "+1-836-544-8714"
        }
      }
    ],
    title: "Majestic Expedition of the Emerald City",
    description: "Savor each moment of this golden escape through Alaska, starting in Seattle. Visit renowned locations like Ketchikan, Victoria, Juneau, where adventure and relaxation intertwine.",
    rating: 4.6,
    tags: ["sightseeing","romantic","adventure"]
  },
  {
    basePrice: 9109,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Enjoy seamless luxury on this whispering quest beginning in Seattle. Visit breathtaking Alaska locales such as Skagway, Juneau, Ketchikan, Victoria on this unforgettable itinerary.",
      distance: "1369 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Skagway"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Skagway to Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Juneau to Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Victoria"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Victoria to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Spencer",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "mythic.journey.of.th@velarivoyages.com",
          contactNumber: "+1-887-765-4445"
        }
      }
    ],
    title: "Mythic Journey of the Emerald City",
    description: "Enjoy seamless luxury on this whispering quest beginning in Seattle. Visit breathtaking Alaska locales such as Skagway, Juneau, Ketchikan, Victoria on this unforgettable itinerary.",
    rating: 4.7,
    tags: ["short-getaway"]
  },
  {
    basePrice: 3769,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This escape takes you beyond the ordinary, starting in Seattle. With breathtaking stops in Juneau, Ketchikan, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "682 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Juneau to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Samantha Fox",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "eternal.exploration.@velarivoyages.com",
          contactNumber: "+1-700-884-6182"
        }
      }
    ],
    title: "Eternal Exploration of the Rain-Crowned Harbor",
    description: "This escape takes you beyond the ordinary, starting in Seattle. With breathtaking stops in Juneau, Ketchikan, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 5.0,
    tags: ["tropical","fall-cruise","luxury"]
  },
  {
    basePrice: 4608,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Board in Seattle for a hand-crafted mirage through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Glacier Bay, Victoria.",
      distance: "1431 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Victoria to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Hannah Hunter",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/26.jpg",
        contact: {
          contactEmail: "starlit.expedition.o@velarivoyages.com",
          contactNumber: "+1-142-858-3957"
        }
      }
    ],
    title: "Starlit Expedition of the Rain-Crowned Harbor",
    description: "Board in Seattle for a hand-crafted mirage through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Glacier Bay, Victoria.",
    rating: 5.0,
    tags: ["tropical"]
  },
  {
    basePrice: 1921,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Sitka",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Explore a new side of Alaska with this midnight escape starting in Seattle. Visit charming ports such as Glacier Bay, Sitka, each offering its own unique rhythm.",
      distance: "1240 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Sitka"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Sitka to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Julie Mitchell",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "golden.expedition.of@velarivoyages.com",
          contactNumber: "+1-298-965-1918"
        }
      }
    ],
    title: "Golden Expedition of the Rain-Crowned Harbor",
    description: "Explore a new side of Alaska with this midnight escape starting in Seattle. Visit charming ports such as Glacier Bay, Sitka, each offering its own unique rhythm.",
    rating: 4.6,
    tags: ["exclusive","luxury"]
  },
  {
    basePrice: 4680,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Glacier Bay",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin your journey in Seattle, where tradition meets travel. This immersive exploration reveals the finest of Alaska, from the beaches of Ketchikan to the streets of Skagway.",
      distance: "577 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Seattle to Ketchikan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Skagway"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Skagway to Glacier Bay"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Emily Day",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "mythic.tide.of.the.g@velarivoyages.com",
          contactNumber: "+1-195-328-9399"
        }
      }
    ],
    title: "Mythic Tide of the Glacial Kingdom",
    description: "Begin your journey in Seattle, where tradition meets travel. This immersive exploration reveals the finest of Alaska, from the beaches of Ketchikan to the streets of Skagway.",
    rating: 4.2,
    tags: ["exclusive"]
  },
  {
    basePrice: 1192,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Set off on a passage from Seattle that captures the essence of Alaska. Discover cultural gems and culinary delights across Skagway, Ketchikan, Glacier Bay, Victoria.",
      distance: "895 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Skagway to Ketchikan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Victoria"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Victoria to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Graham",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "hidden.horizon.of.th@velarivoyages.com",
          contactNumber: "+1-440-292-9181"
        }
      }
    ],
    title: "Hidden Horizon of the Emerald City",
    description: "Set off on a passage from Seattle that captures the essence of Alaska. Discover cultural gems and culinary delights across Skagway, Ketchikan, Glacier Bay, Victoria.",
    rating: 4.0,
    tags: ["long-distance"]
  },
  {
    basePrice: 4015,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Begin your excursion in Seattle, a gateway to the soul of Alaska. Enjoy days spent exploring Ketchikan, Skagway, Glacier Bay and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "899 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Seattle to Ketchikan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Skagway to Glacier Bay"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sophia Warren",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "breathtaking.tide.of@velarivoyages.com",
          contactNumber: "+1-869-338-7207"
        }
      }
    ],
    title: "Breathtaking Tide of the Emerald City",
    description: "Begin your excursion in Seattle, a gateway to the soul of Alaska. Enjoy days spent exploring Ketchikan, Skagway, Glacier Bay and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 5.0,
    tags: ["short-getaway"]
  },
  {
    basePrice: 2784,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Victoria",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin an epic realm from Seattle, where the seas meet culture. Visit the remarkable ports of Glacier Bay, Victoria while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "745 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Janet Sutton",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "starlit.escape.of.th@velarivoyages.com",
          contactNumber: "+1-221-996-9075"
        }
      }
    ],
    title: "Starlit Escape of the Rain-Crowned Harbor",
    description: "Begin an epic realm from Seattle, where the seas meet culture. Visit the remarkable ports of Glacier Bay, Victoria while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.0,
    tags: ["seasonal","romantic"]
  },
  {
    basePrice: 5640,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Sitka",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Your mystique begins in Seattle, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Victoria to the historic streets of Sitka, each stop in the Alaska will leave a lasting impression.",
      distance: "1011 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Victoria to Sitka"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Sitka to Juneau"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Juneau to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Leah Day",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "exquisite.journey.of@velarivoyages.com",
          contactNumber: "+1-936-396-1271"
        }
      }
    ],
    title: "Exquisite Journey of the Emerald City",
    description: "Your mystique begins in Seattle, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Victoria to the historic streets of Sitka, each stop in the Alaska will leave a lasting impression.",
    rating: 4.5,
    tags: ["long-distance","fall-cruise"]
  },
  {
    basePrice: 3432,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Sitka",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set sail from Seattle on this mythic sanctuary through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Glacier Bay and Sitka and Victoria and Ketchikan, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "570 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Sitka"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Sitka to Victoria"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Victoria to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Mary Day",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "celestial.retreat.of@velarivoyages.com",
          contactNumber: "+1-625-461-5636"
        }
      }
    ],
    title: "Celestial Retreat of the Rain-Crowned Harbor",
    description: "Set sail from Seattle on this mythic sanctuary through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Glacier Bay and Sitka and Victoria and Ketchikan, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.8,
    tags: ["family-friendly","long-distance"]
  },
  {
    basePrice: 8702,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set off on a journey from Seattle that captures the essence of Alaska. Discover cultural gems and culinary delights across Victoria, Ketchikan.",
      distance: "1188 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Victoria to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Russell",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "starlit.passage.of.t@velarivoyages.com",
          contactNumber: "+1-755-100-4251"
        }
      }
    ],
    title: "Starlit Passage of the Rain-Crowned Harbor",
    description: "Set off on a journey from Seattle that captures the essence of Alaska. Discover cultural gems and culinary delights across Victoria, Ketchikan.",
    rating: 4.6,
    tags: ["romantic"]
  },
  {
    basePrice: 4307,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Juneau",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This inspiring quest departs from Seattle, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Ketchikan, Glacier Bay, Skagway, Juneau.",
      distance: "1289 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Ketchikan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Skagway to Juneau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Juneau"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Emily Collins",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "mythic.labyrinth.of.@velarivoyages.com",
          contactNumber: "+1-735-225-3625"
        }
      }
    ],
    title: "Mythic Labyrinth of the Northern Lights",
    description: "This inspiring quest departs from Seattle, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Ketchikan, Glacier Bay, Skagway, Juneau.",
    rating: 5.0,
    tags: ["romantic","luxury"]
  },
  {
    basePrice: 2775,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Skagway",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Step aboard in Seattle and begin a unforgettable journey through the scenic Alaska. From historic cities to coastal hideaways like Glacier Bay, Ketchikan, Skagway, every day is unforgettable.",
      distance: "880 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Ketchikan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Skagway"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Maxwell",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "exquisite.quest.of.t@velarivoyages.com",
          contactNumber: "+1-954-673-3035"
        }
      }
    ],
    title: "Exquisite Quest of the Emerald City",
    description: "Step aboard in Seattle and begin a unforgettable journey through the scenic Alaska. From historic cities to coastal hideaways like Glacier Bay, Ketchikan, Skagway, every day is unforgettable.",
    rating: 4.4,
    tags: ["long-distance"]
  },
  {
    basePrice: 9872,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Sitka",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Begin your journey in Seattle, where tradition meets travel. This immersive escape reveals the finest of Alaska, from the beaches of Sitka to the streets of Juneau.",
      distance: "1186 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Sitka"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Sitka to Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Juneau to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Michelle Foster",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "midnight.exploration@velarivoyages.com",
          contactNumber: "+1-557-327-5638"
        }
      }
    ],
    title: "Midnight Exploration of the Emerald City",
    description: "Begin your journey in Seattle, where tradition meets travel. This immersive escape reveals the finest of Alaska, from the beaches of Sitka to the streets of Juneau.",
    rating: 4.3,
    tags: ["relaxation","long-distance"]
  },
  {
    basePrice: 1907,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Skagway",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Depart from Seattle on this thoughtfully designed requiem across the Alaska. Savor coastal charm, cultural treasures, and ocean views with stops at Victoria, Glacier Bay, Skagway.",
      distance: "1339 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Victoria to Glacier Bay"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Skagway"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Harper",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "enchanting.sojourn.o@velarivoyages.com",
          contactNumber: "+1-726-823-1738"
        }
      }
    ],
    title: "Enchanting Sojourn of the Emerald City",
    description: "Depart from Seattle on this thoughtfully designed requiem across the Alaska. Savor coastal charm, cultural treasures, and ocean views with stops at Victoria, Glacier Bay, Skagway.",
    rating: 4.6,
    tags: ["tropical"]
  },
  {
    basePrice: 8737,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Sitka",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Explore a new side of Alaska with this majestic sojourn starting in Seattle. Visit charming ports such as Juneau, Skagway, Sitka, each offering its own unique rhythm.",
      distance: "510 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Juneau to Skagway"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Skagway to Sitka"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Sitka to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amina Dean",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "celestial.saga.of.th@velarivoyages.com",
          contactNumber: "+1-803-885-6919"
        }
      }
    ],
    title: "Celestial Saga of the Emerald City",
    description: "Explore a new side of Alaska with this majestic sojourn starting in Seattle. Visit charming ports such as Juneau, Skagway, Sitka, each offering its own unique rhythm.",
    rating: 4.2,
    tags: ["exclusive","short-getaway","romantic"]
  },
  {
    basePrice: 5254,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Victoria",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin a captivating horizon through the Alaska, departing Seattle. With visits to Glacier Bay, Victoria, each day brings a new adventure and deeper connection to the region.",
      distance: "750 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jessica Parker",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "hidden.realm.of.the.@velarivoyages.com",
          contactNumber: "+1-984-952-5861"
        }
      }
    ],
    title: "Hidden Realm of the Icy Passageways",
    description: "Begin a captivating horizon through the Alaska, departing Seattle. With visits to Glacier Bay, Victoria, each day brings a new adventure and deeper connection to the region.",
    rating: 4.6,
    tags: ["long-distance"]
  },
  {
    basePrice: 1233,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Skagway",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Skagway",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set sail from Seattle for a voyage like no other. From the picturesque landscapes of Victoria to the lively ambiance of Ketchikan, this timeless cruise will redefine your view of Alaska.",
      distance: "1267 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Victoria to Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Skagway"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Ellie Sutton",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "legendary.voyage.of.@velarivoyages.com",
          contactNumber: "+1-152-283-8893"
        }
      }
    ],
    title: "Legendary Voyage of the Rain-Crowned Harbor",
    description: "Set sail from Seattle for a voyage like no other. From the picturesque landscapes of Victoria to the lively ambiance of Ketchikan, this timeless cruise will redefine your view of Alaska.",
    rating: 4.1,
    tags: ["long-distance","family-friendly"]
  },
  {
    basePrice: 4870,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Victoria",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Begin a captivating tide through the Alaska, departing Seattle. With visits to Juneau, Victoria, Ketchikan, each day brings a new adventure and deeper connection to the region.",
      distance: "1344 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Juneau to Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Victoria to Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sophia Gibson",
        role: "Family Activities Coordinator",
        languages: ["Russian"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "forbidden.discovery.@velarivoyages.com",
          contactNumber: "+1-930-640-7147"
        }
      }
    ],
    title: "Forbidden Discovery of the Rain-Crowned Harbor",
    description: "Begin a captivating tide through the Alaska, departing Seattle. With visits to Juneau, Victoria, Ketchikan, each day brings a new adventure and deeper connection to the region.",
    rating: 4.6,
    tags: ["relaxation","family-friendly"]
  }
];
