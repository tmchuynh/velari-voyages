import { Cruise } from "@/lib/interfaces/services/cruises";

export const ketchikanCruises: Cruise[] = [
  {
    basePrice: 3399,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
  },
  {
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Leave ordinary behind as you sail from Ketchikan across the captivating Alaska. Discover the distinctive personality of each destination, from Juneau, Glacier Bay, Sitka.",
      distance: "1254 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Juneau to Glacier Bay"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lisa Parker",
        role: "Cruise Specialist",
        languages: ["English","Arabic","Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "floating.tide.of.the@velarivoyages.com",
          contactNumber: "+1-963-914-7627"
        }
      }
    ],
    title: "Floating Tide of the Carved Ice Cathedrals",
    description: "Leave ordinary behind as you sail from Ketchikan across the captivating Alaska. Discover the distinctive personality of each destination, from Juneau, Glacier Bay, Sitka.",
    rating: 4.0,
    tags: ["cruise-experience","sightseeing"]
  },
  {
    basePrice: 9240,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
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
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "This handpicked oasis begins in Ketchikan and travels through Alaska's iconic waterscapes. Discover Glacier Bay, Sitka, Victoria as each day brings new stories and every night offers elegant repose.",
      distance: "1008 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Sitka"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Sitka to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
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
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Carol Campbell",
        role: "Cruise Specialist",
        languages: ["English","Arabic","Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "riveting.reverie.of.@velarivoyages.com",
          contactNumber: "+1-247-395-5575"
        }
      }
    ],
    title: "Riveting Reverie of the Wilderness Reaches",
    description: "This handpicked oasis begins in Ketchikan and travels through Alaska's iconic waterscapes. Discover Glacier Bay, Sitka, Victoria as each day brings new stories and every night offers elegant repose.",
    rating: 5.0,
    tags: ["seasonal","cruise-adventure"]
  },
  {
    basePrice: 4446,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Escape into the calm waters of Alaska with this lavish journey from Ketchikan. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Seattle, Vancouver.",
      distance: "1426 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Seattle to Vancouver"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Nicole Henderson",
        role: "Cruise Specialist",
        languages: ["English","Arabic","Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "radiant.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-775-961-4894"
        }
      }
    ],
    title: "Radiant Sojourn of the Echoes of Ice",
    description: "Escape into the calm waters of Alaska with this lavish journey from Ketchikan. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Seattle, Vancouver.",
    rating: 4.1,
    tags: ["short-getaway","anniversary-cruise"]
  },
  {
    basePrice: 6308,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
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
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "Let this infinite voyage redefine your idea of travel. From Ketchikan, explore the Alaska in luxurious comfort, stopping at Vancouver, Glacier Bay, Victoria where every port offers a new chapter.",
      distance: "832 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Vancouver"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Glacier Bay"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Caroline Carpenter",
        role: "Cruise Specialist",
        languages: ["English","Arabic","Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "infinite.exploration@velarivoyages.com",
          contactNumber: "+1-545-706-1083"
        }
      }
    ],
    title: "Infinite Exploration of the Whale-Rich Waters",
    description: "Let this infinite voyage redefine your idea of travel. From Ketchikan, explore the Alaska in luxurious comfort, stopping at Vancouver, Glacier Bay, Victoria where every port offers a new chapter.",
    rating: 4.6,
    tags: ["long-distance","cultural","fall-cruise"]
  },
  {
    basePrice: 7379,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
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
    category: "theme-cruise",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "city": "Skagway",
    "country": "United States",
    "coordinates": {
      "latitude": 59.4569,
      "longitude": -135.3123
    }
  }
],
      description: "Set course from Ketchikan for an inspiring horizon-kissed journey across Alaska. Whether exploring ancient ruins in Seattle or soaking up coastal views in Skagway, every day offers a perfect mix of discovery and relaxation.",
      distance: "1375 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Seattle"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Seattle to Skagway"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Virginia Henderson",
        role: "Cruise Specialist",
        languages: ["English","Arabic","Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "transcendent.escape.@velarivoyages.com",
          contactNumber: "+1-632-876-6238"
        }
      }
    ],
    title: "Transcendent Escape of the The Last Frontier",
    description: "Set course from Ketchikan for an inspiring horizon-kissed journey across Alaska. Whether exploring ancient ruins in Seattle or soaking up coastal views in Skagway, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.5,
    tags: ["weekend-cruise"]
  },
  {
    basePrice: 4463,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
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
  }
],
      description: "Let this gilded voyage redefine your idea of travel. From Ketchikan, explore the Alaska in luxurious comfort, stopping at Victoria, Seattle where every port offers a new chapter.",
      distance: "1271 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Victoria"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Victoria to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Palmer",
        role: "Cruise Specialist",
        languages: ["English","Arabic","Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "riveting.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-546-289-6942"
        }
      }
    ],
    title: "Riveting Mythos of the Icy Passageways",
    description: "Let this gilded voyage redefine your idea of travel. From Ketchikan, explore the Alaska in luxurious comfort, stopping at Victoria, Seattle where every port offers a new chapter.",
    rating: 4.6,
    tags: ["cruise-experience","cruise-holiday","family-friendly"]
  },
  {
    basePrice: 5647,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "repositioning-cruise",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "city": "Skagway",
    "country": "United States",
    "coordinates": {
      "latitude": 59.4569,
      "longitude": -135.3123
    }
  },
  {
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Let this timeless voyage redefine your idea of travel. From Ketchikan, explore the Alaska in luxurious comfort, stopping at Juneau, Skagway, Sitka where every port offers a new chapter.",
      distance: "1023 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Juneau"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Juneau to Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Skagway to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Juneau"
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
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carol Chambers",
        role: "Cruise Specialist",
        languages: ["English","Arabic","Spanish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
        contact: {
          contactEmail: "infinite.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-514-542-1065"
        }
      }
    ],
    title: "Infinite Eclipse of the Whale-Rich Waters",
    description: "Let this timeless voyage redefine your idea of travel. From Ketchikan, explore the Alaska in luxurious comfort, stopping at Juneau, Skagway, Sitka where every port offers a new chapter.",
    rating: 4.7,
    tags: ["adventure","general"]
  },
  {
    basePrice: 2562,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "city": "Juneau",
    "country": "United States",
    "coordinates": {
      "latitude": 58.3019,
      "longitude": -134.4197
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "Set course from Ketchikan for an inspiring secret journey across Alaska. Whether exploring ancient ruins in Skagway or soaking up coastal views in Juneau, every day offers a perfect mix of discovery and relaxation.",
      distance: "1115 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Skagway"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Skagway to Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Juneau to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Skylar Henderson",
        role: "Cruise Specialist",
        languages: ["English","Arabic","Spanish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "secret.journey.of.th@velarivoyages.com",
          contactNumber: "+1-586-824-3793"
        }
      }
    ],
    title: "Secret Journey of the Tundra Tides",
    description: "Set course from Ketchikan for an inspiring secret journey across Alaska. Whether exploring ancient ruins in Skagway or soaking up coastal views in Juneau, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.2,
    tags: ["sightseeing","tropical"]
  },
  {
    basePrice: 8925,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
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
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "city": "Skagway",
    "country": "United States",
    "coordinates": {
      "latitude": 59.4569,
      "longitude": -135.3123
    }
  }
],
      description: "Start in the vibrant city of Ketchikan and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Juneau, Seattle, Glacier Bay, Skagway.",
      distance: "832 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Juneau"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Juneau to Seattle"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Skagway"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Susan Reed",
        role: "Cruise Specialist",
        languages: ["English","Arabic","Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
        contact: {
          contactEmail: "lavish.passage.of.th@velarivoyages.com",
          contactNumber: "+1-155-904-9785"
        }
      }
    ],
    title: "Lavish Passage of the Northern Lights",
    description: "Start in the vibrant city of Ketchikan and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Juneau, Seattle, Glacier Bay, Skagway.",
    rating: 4.2,
    tags: ["cruise-holiday","wellness","cruise-getaway"]
  },
  {
    basePrice: 1428,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Set sail from Ketchikan on this floating discovery through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Juneau and Sitka and Seattle and Vancouver, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1382 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Juneau"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Juneau to Sitka"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Sitka to Seattle"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Seattle to Vancouver"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Caroline Nash",
        role: "Cruise Specialist",
        languages: ["English","Arabic","Spanish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/71.jpg",
        contact: {
          contactEmail: "tranquil.elevation.o@velarivoyages.com",
          contactNumber: "+1-939-342-9423"
        }
      }
    ],
    title: "Tranquil Elevation of the Tundra Tides",
    description: "Set sail from Ketchikan on this floating discovery through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Juneau and Sitka and Seattle and Vancouver, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.7,
    tags: ["weekend-cruise","cruise-experience"]
  }
];
