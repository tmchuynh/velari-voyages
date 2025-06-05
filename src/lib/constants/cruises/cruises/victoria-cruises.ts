import { Cruise } from "@/lib/interfaces/services/cruises";

export const victoriaCruises: Cruise[] = [
  {
    basePrice: 6089,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  },
  {
    "city": "Skagway",
    "country": "United States",
    "coordinates": {
      "latitude": 59.4569,
      "longitude": -135.3123
    }
  },
  {
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
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
      description: "Begin a captivating odyssey through the Alaska, departing Victoria. With visits to Sitka, Skagway, Vancouver, Glacier Bay, each day brings a new adventure and deeper connection to the region.",
      distance: "1060 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Victoria to Sitka"
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
    "description": "Sailing from Skagway to Vancouver"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Glacier Bay"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
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
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Stella Harper",
        role: "Sales Consultant",
        languages: ["English","Chinese","Russian","French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "mystical.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-186-574-2854"
        }
      }
    ],
    title: "Mystical Odyssey of the Snow-Crowned Peaks",
    description: "Begin a captivating odyssey through the Alaska, departing Victoria. With visits to Sitka, Skagway, Vancouver, Glacier Bay, each day brings a new adventure and deeper connection to the region.",
    rating: 4.1,
    tags: ["romantic","long-distance","cruise-holiday"]
  },
  {
    basePrice: 2752,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
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
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Set sail from Victoria for a voyage like no other. From the picturesque landscapes of Sitka to the lively ambiance of Seattle, this breathtaking cruise will redefine your view of Alaska.",
      distance: "782 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Victoria to Sitka"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Sitka to Seattle"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Price",
        role: "Sales Consultant",
        languages: ["English","Chinese","Russian","French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "idyllic.passage.of.t@velarivoyages.com",
          contactNumber: "+1-657-857-9743"
        }
      }
    ],
    title: "Idyllic Passage of the Misty Fjords",
    description: "Set sail from Victoria for a voyage like no other. From the picturesque landscapes of Sitka to the lively ambiance of Seattle, this breathtaking cruise will redefine your view of Alaska.",
    rating: 4.8,
    tags: ["glacier-cruise"]
  },
  {
    basePrice: 2545,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Skagway",
  "country": "United States",
  "coordinates": {
    "latitude": 59.4569,
    "longitude": -135.3123
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "country": "United States",
    "coordinates": {
      "latitude": 59.4569,
      "longitude": -135.3123
    }
  }
],
      description: "Let the winds of the Alaska carry you from Victoria to the most stunning ports in the region. With destinations like Sitka, Ketchikan, Glacier Bay, Skagway, this mirage redefines luxury travel.",
      distance: "510 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Victoria to Sitka"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Sitka to Ketchikan"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Skagway"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
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
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Susan Campbell",
        role: "Sales Consultant",
        languages: ["English","Chinese","Russian","French"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
        contact: {
          contactEmail: "riveting.awakening.o@velarivoyages.com",
          contactNumber: "+1-616-659-7143"
        }
      }
    ],
    title: "Riveting Awakening of the Whale-Rich Waters",
    description: "Let the winds of the Alaska carry you from Victoria to the most stunning ports in the region. With destinations like Sitka, Ketchikan, Glacier Bay, Skagway, this mirage redefines luxury travel.",
    rating: 4.1,
    tags: ["exclusive","cruise-holiday","VIP"]
  },
  {
    basePrice: 2557,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  },
  {
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  },
  {
    "city": "Skagway",
    "country": "United States",
    "coordinates": {
      "latitude": 59.4569,
      "longitude": -135.3123
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "An escape like no other begins in Victoria, where your eclipse launches into the heart of Alaska. Discover the magic of Ketchikan, Sitka, Skagway, Seattle with style and sophistication.",
      distance: "674 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Victoria to Ketchikan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Sitka"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Sitka to Skagway"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Skagway to Seattle"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Seattle to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
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
    "description": "Exploring Sitka"
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
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Stella Gardner",
        role: "Sales Consultant",
        languages: ["English","Chinese","Russian","French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "opulent.mirage.of.th@velarivoyages.com",
          contactNumber: "+1-494-155-5245"
        }
      }
    ],
    title: "Opulent Mirage of the Tundra Tides",
    description: "An escape like no other begins in Victoria, where your eclipse launches into the heart of Alaska. Discover the magic of Ketchikan, Sitka, Skagway, Seattle with style and sophistication.",
    rating: 4.4,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 1583,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  },
  {
    "city": "Juneau",
    "country": "United States",
    "coordinates": {
      "latitude": 58.3019,
      "longitude": -134.4197
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
      description: "Begin an epic horizon from Victoria, where the seas meet culture. Visit the remarkable ports of Sitka, Juneau, Glacier Bay while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "694 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Victoria to Sitka"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Sitka to Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Juneau to Glacier Bay"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
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
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Samantha Curtis",
        role: "Sales Consultant",
        languages: ["English","Chinese","Russian","French"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "crystalline.journey.@velarivoyages.com",
          contactNumber: "+1-436-300-7576"
        }
      }
    ],
    title: "Crystalline Journey of the Carved Ice Cathedrals",
    description: "Begin an epic horizon from Victoria, where the seas meet culture. Visit the remarkable ports of Sitka, Juneau, Glacier Bay while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.6,
    tags: ["VIP","cruise-excursion","family-friendly"]
  },
  {
    basePrice: 8794,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  },
  {
    "city": "Skagway",
    "country": "United States",
    "coordinates": {
      "latitude": 59.4569,
      "longitude": -135.3123
    }
  },
  {
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Join us in Victoria for a mystique of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Glacier Bay, Sitka, Skagway, Vancouver where timeless traditions meet modern luxuries.",
      distance: "1113 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Victoria to Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Sitka"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Sitka to Skagway"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Skagway to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
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
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Priya Dean",
        role: "Sales Consultant",
        languages: ["English","Chinese","Russian","French"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "lavish.frontier.of.t@velarivoyages.com",
          contactNumber: "+1-116-239-6894"
        }
      }
    ],
    title: "Lavish Frontier of the Echoes of Ice",
    description: "Join us in Victoria for a mystique of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Glacier Bay, Sitka, Skagway, Vancouver where timeless traditions meet modern luxuries.",
    rating: 4.3,
    tags: ["cruise-excursion","VIP"]
  },
  {
    basePrice: 8165,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Juneau",
  "country": "United States",
  "coordinates": {
    "latitude": 58.3019,
    "longitude": -134.4197
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
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
    "country": "United States",
    "coordinates": {
      "latitude": 58.3019,
      "longitude": -134.4197
    }
  }
],
      description: "Escape to sea from Victoria on a captivating voyage exploring the magic of Alaska. Visit unforgettable locales like Seattle, Sitka, Glacier Bay, Juneau, where each stop inspires awe.",
      distance: "1311 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Victoria to Seattle"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Seattle to Sitka"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Sitka to Glacier Bay"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Juneau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Juneau"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Caroline Henderson",
        role: "Sales Consultant",
        languages: ["English","Chinese","Russian","French"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "refined.enigma.of.th@velarivoyages.com",
          contactNumber: "+1-171-751-9327"
        }
      }
    ],
    title: "Refined Enigma of the Frozen Frontiers",
    description: "Escape to sea from Victoria on a captivating voyage exploring the magic of Alaska. Visit unforgettable locales like Seattle, Sitka, Glacier Bay, Juneau, where each stop inspires awe.",
    rating: 4.8,
    tags: ["holiday-cruise"]
  },
  {
    basePrice: 6214,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  },
  {
    "city": "Juneau",
    "country": "United States",
    "coordinates": {
      "latitude": 58.3019,
      "longitude": -134.4197
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
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
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "Depart from Victoria on this thoughtfully designed voyage across the Alaska. Savor coastal charm, cultural treasures, and ocean views with stops at Vancouver, Juneau, Seattle, Glacier Bay.",
      distance: "1312 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Victoria to Vancouver"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Juneau to Seattle"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amanda Gardner",
        role: "Sales Consultant",
        languages: ["English","Chinese","Russian","French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "charming.symphony.of@velarivoyages.com",
          contactNumber: "+1-486-684-2608"
        }
      }
    ],
    title: "Charming Symphony of the Icy Passageways",
    description: "Depart from Victoria on this thoughtfully designed voyage across the Alaska. Savor coastal charm, cultural treasures, and ocean views with stops at Vancouver, Juneau, Seattle, Glacier Bay.",
    rating: 4.5,
    tags: ["seasonal","nature"]
  },
  {
    basePrice: 8704,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Depart from iconic Victoria and traverse the Alaska with visits to Glacier Bay, Vancouver. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "834 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Victoria to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Hawkins",
        role: "Sales Consultant",
        languages: ["English","Chinese","Russian","French"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "secluded.requiem.of.@velarivoyages.com",
          contactNumber: "+1-502-846-2027"
        }
      }
    ],
    title: "Secluded Requiem of the Echoes of Ice",
    description: "Depart from iconic Victoria and traverse the Alaska with visits to Glacier Bay, Vancouver. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.5,
    tags: ["weekend-cruise","cruise-adventure"]
  },
  {
    basePrice: 1770,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "country": "United States",
    "coordinates": {
      "latitude": 59.4569,
      "longitude": -135.3123
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  },
  {
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "This mesmerizing reverie begins in Victoria and ventures deep into the heart of Alaska. Wander through colorful markets, historic streets, and serene coastlines at Glacier Bay, Skagway, Ketchikan, Vancouver.",
      distance: "836 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Victoria to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Skagway to Ketchikan"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Valentina Mason",
        role: "Sales Consultant",
        languages: ["English","Chinese","Russian","French"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "mesmerizing.elevatio@velarivoyages.com",
          contactNumber: "+1-401-725-2902"
        }
      }
    ],
    title: "Mesmerizing Elevation of the Echoes of Ice",
    description: "This mesmerizing reverie begins in Victoria and ventures deep into the heart of Alaska. Wander through colorful markets, historic streets, and serene coastlines at Glacier Bay, Skagway, Ketchikan, Vancouver.",
    rating: 4.9,
    tags: ["cruise-journey"]
  }
];
