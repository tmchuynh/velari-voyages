import { Cruise } from "@/lib/interfaces/services/cruises";

export const seattleCruises: Cruise[] = [
{
    basePrice: 4548,
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
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Your journey through the Alaska begins in Seattle, where elegance meets adventure. Explore the shores of Skagway, Glacier Bay, with curated excursions and luxurious onboard amenities.",
      distance: "662 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Skagway"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Skagway to Glacier Bay"
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
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Mason",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "extraordinary.mythos@velarivoyages.com",
          contactNumber: "+1-808-549-2290"
        }
      }
    ],
    title: "Extraordinary Mythos of the Sky-Reflected Stillness",
    description: "Your journey through the Alaska begins in Seattle, where elegance meets adventure. Explore the shores of Skagway, Glacier Bay, with curated excursions and luxurious onboard amenities.",
    rating: 4.9,
    tags: ["nature"]
  },
  {
    basePrice: 6016,
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
      description: "Set sail from Seattle for a voyage like no other. From the picturesque landscapes of Ketchikan to the lively ambiance of Victoria, this tide-washed cruise will redefine your view of Alaska.",
      distance: "922 nautical miles",
      totalDuration: "15 days",
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
    "description": "Sailing from Ketchikan to Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Victoria to Glacier Bay"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Juneau"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
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
    "start": "Day 4",
    "end": "Day 4",
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
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Juneau"
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
        name: "Samantha Payne",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "aweinspiring.whisper@velarivoyages.com",
          contactNumber: "+1-427-875-8982"
        }
      }
    ],
    title: "Awe-Inspiring Whisper of the Emerald City",
    description: "Set sail from Seattle for a voyage like no other. From the picturesque landscapes of Ketchikan to the lively ambiance of Victoria, this tide-washed cruise will redefine your view of Alaska.",
    rating: 4.9,
    tags: ["holiday-cruise","cruise-getaway","cruise-adventure"]
  },
  {
    basePrice: 4227,
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
  "city": "Sitka",
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
  }
],
      description: "Embark from Seattle and traverse the Alaska in style. Whether it’s the energy of Skagway or the calm of Sitka, each destination reveals a new side of paradise.",
      distance: "1210 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Skagway"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Skagway to Sitka"
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
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Janet Wallace",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "refined.mystique.of.@velarivoyages.com",
          contactNumber: "+1-913-673-7973"
        }
      }
    ],
    title: "Refined Mystique of the Forest by the Sea",
    description: "Embark from Seattle and traverse the Alaska in style. Whether it’s the energy of Skagway or the calm of Sitka, each destination reveals a new side of paradise.",
    rating: 4.8,
    tags: ["romantic"]
  },
  {
    basePrice: 6355,
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
    hasPopularDestination: false,
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
      description: "Sail away from the charming harbor of Seattle on this pristine journey across Alaska. Uncover the beauty and history of Skagway, Victoria with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1171 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Skagway"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
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
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sofia Spencer",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "exquisite.infinite.o@velarivoyages.com",
          contactNumber: "+1-268-258-2289"
        }
      }
    ],
    title: "Exquisite Infinite of the Sky-Reflected Stillness",
    description: "Sail away from the charming harbor of Seattle on this pristine journey across Alaska. Uncover the beauty and history of Skagway, Victoria with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.3,
    tags: ["cruise-ship","adventure"]
  },
  {
    basePrice: 3504,
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
  }
],
      description: "This awakening takes you beyond the ordinary, starting in Seattle. With breathtaking stops in Glacier Bay, Skagway, Juneau, Ketchikan, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "727 nautical miles",
      totalDuration: "14 days",
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
    "description": "Sailing from Glacier Bay to Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Skagway to Juneau"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
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
    "start": "Day 5",
    "end": "Day 6",
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
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Zoe Chambers",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "secluded.frontier.of@velarivoyages.com",
          contactNumber: "+1-640-449-3285"
        }
      }
    ],
    title: "Secluded Frontier of the Sky-Reflected Stillness",
    description: "This awakening takes you beyond the ordinary, starting in Seattle. With breathtaking stops in Glacier Bay, Skagway, Juneau, Ketchikan, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 5.0,
    tags: ["family-friendly","relaxation"]
  },
  {
    basePrice: 1455,
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
    "city": "Ketchikan",
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
      description: "Let the spirit of exploration guide your harmonic journey from Seattle. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Ketchikan, Juneau, Victoria.",
      distance: "1297 nautical miles",
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
    "description": "Sailing from Ketchikan to Juneau"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Juneau to Victoria"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
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
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Mia Marshall",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "forbidden.drift.of.t@velarivoyages.com",
          contactNumber: "+1-990-405-5686"
        }
      }
    ],
    title: "Forbidden Drift of the Sound of Silence",
    description: "Let the spirit of exploration guide your harmonic journey from Seattle. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Ketchikan, Juneau, Victoria.",
    rating: 5.0,
    tags: ["nature","cruise"]
  },
  {
    basePrice: 9458,
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
  "city": "Sitka",
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
  }
],
      description: "Begin an epic passage from Seattle, where the seas meet culture. Visit the remarkable ports of Juneau, Victoria, Skagway, Sitka while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "761 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Juneau"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Juneau to Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Victoria to Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Skagway to Sitka"
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
    "description": "Exploring Juneau"
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
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Virginia Montgomery",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "radiancedrenched.ser@velarivoyages.com",
          contactNumber: "+1-514-705-3598"
        }
      }
    ],
    title: "Radiance-Drenched Serenade of the Rain-Crowned Harbor",
    description: "Begin an epic passage from Seattle, where the seas meet culture. Visit the remarkable ports of Juneau, Victoria, Skagway, Sitka while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.1,
    tags: ["cruise-ship"]
  },
  {
    basePrice: 8523,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
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
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail away from the charming harbor of Seattle on this awe-inspiring journey across Alaska. Uncover the beauty and history of Ketchikan, Glacier Bay, Juneau with curated excursions, world-class cuisine, and exceptional service.",
      distance: "505 nautical miles",
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
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Juneau"
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
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Juneau"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Wells",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/87.jpg",
        contact: {
          contactEmail: "gilded.realm.of.the.@velarivoyages.com",
          contactNumber: "+1-988-533-4546"
        }
      }
    ],
    title: "Gilded Realm of the Rain-Crowned Harbor",
    description: "Sail away from the charming harbor of Seattle on this awe-inspiring journey across Alaska. Uncover the beauty and history of Ketchikan, Glacier Bay, Juneau with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.7,
    tags: ["family-friendly"]
  },
  {
    basePrice: 7586,
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
      description: "An escape like no other begins in Seattle, where your sanctuary launches into the heart of Alaska. Discover the magic of Glacier Bay, Skagway with style and sophistication.",
      distance: "702 nautical miles",
      totalDuration: "10 days",
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
    "description": "Sailing from Glacier Bay to Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
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
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Grace Coleman",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "transcendent.pilgrim@velarivoyages.com",
          contactNumber: "+1-122-544-8026"
        }
      }
    ],
    title: "Transcendent Pilgrimage of the Frontier Silence",
    description: "An escape like no other begins in Seattle, where your sanctuary launches into the heart of Alaska. Discover the magic of Glacier Bay, Skagway with style and sophistication.",
    rating: 4.8,
    tags: ["themed-cruise","family-friendly"]
  },
  {
    basePrice: 8370,
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
      description: "Depart from iconic Seattle and traverse the Alaska with visits to Ketchikan, Glacier Bay. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1061 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
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
    "start": "Day 9",
    "end": "Day 9",
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
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
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
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elena Mitchell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "whispering.lullaby.o@velarivoyages.com",
          contactNumber: "+1-779-149-6607"
        }
      }
    ],
    title: "Whispering Lullaby of the Sky-Reflected Stillness",
    description: "Depart from iconic Seattle and traverse the Alaska with visits to Ketchikan, Glacier Bay. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.2,
    tags: ["family-friendly","cultural","holiday-cruise"]
  },
  {
    basePrice: 3290,
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
      description: "Experience the elegance of the seas on this radiance-drenched elevation through Alaska, starting from the illustrious port of Seattle. From Sitka, Skagway, Victoria to Ketchikan, each destination offers its own story, culture, and breathtaking views.",
      distance: "712 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
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
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Victoria to Ketchikan"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Seattle"
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
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Laura Henderson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "transcendent.saga.of@velarivoyages.com",
          contactNumber: "+1-474-271-3336"
        }
      }
    ],
    title: "Transcendent Saga of the Rain-Crowned Harbor",
    description: "Experience the elegance of the seas on this radiance-drenched elevation through Alaska, starting from the illustrious port of Seattle. From Sitka, Skagway, Victoria to Ketchikan, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.5,
    tags: ["cruise-excursion","cruise","adventure"]
  },
  {
    basePrice: 3547,
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
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "From the lively departure port of Seattle, this curated elevation showcases the finest of Alaska. With visits to Glacier Bay, Sitka, Juneau, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "525 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Sitka"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Sitka to Juneau"
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
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Juneau"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ava Gardner",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "epic.retreat.of.the.@velarivoyages.com",
          contactNumber: "+1-175-647-4789"
        }
      }
    ],
    title: "Epic Retreat of the Sky-Reflected Stillness",
    description: "From the lively departure port of Seattle, this curated elevation showcases the finest of Alaska. With visits to Glacier Bay, Sitka, Juneau, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.8,
    tags: ["relaxation"]
  },
  {
    basePrice: 4598,
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
      description: "This exquisite awakening begins in Seattle and ventures deep into the heart of Alaska. Wander through colorful markets, historic streets, and serene coastlines at Glacier Bay, Skagway, Juneau.",
      distance: "1008 nautical miles",
      totalDuration: "15 days",
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
    "description": "Sailing from Glacier Bay to Skagway"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Skagway to Juneau"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
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
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
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
    "description": "Exploring Juneau"
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
        name: "Christine Wallace",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "enchanting.legacy.of@velarivoyages.com",
          contactNumber: "+1-141-302-4636"
        }
      }
    ],
    title: "Enchanting Legacy of the Rain-Crowned Harbor",
    description: "This exquisite awakening begins in Seattle and ventures deep into the heart of Alaska. Wander through colorful markets, historic streets, and serene coastlines at Glacier Bay, Skagway, Juneau.",
    rating: 4.3,
    tags: ["wildlife","seasonal"]
  },
  {
    basePrice: 3122,
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
    hasPopularDestination: true,
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
      description: "Begin your journey in Seattle, where tradition meets travel. This immersive zenith reveals the finest of Alaska, from the beaches of Juneau to the streets of Ketchikan.",
      distance: "882 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Juneau"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
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
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Skylar Fox",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "secret.lullaby.of.th@velarivoyages.com",
          contactNumber: "+1-846-195-9231"
        }
      }
    ],
    title: "Secret Lullaby of the Forest by the Sea",
    description: "Begin your journey in Seattle, where tradition meets travel. This immersive zenith reveals the finest of Alaska, from the beaches of Juneau to the streets of Ketchikan.",
    rating: 4.4,
    tags: ["long-distance","luxury"]
  },
  {
    basePrice: 3147,
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
    "city": "Juneau",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Escape the everyday with this dreamlike journey through Alaska, departing from Seattle. You'll visit Victoria, Glacier Bay, Juneau, where every stop is a new adventure.",
      distance: "520 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Victoria to Glacier Bay"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Juneau"
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
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Juneau"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brenda Knight",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Hindi"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
        contact: {
          contactEmail: "sublime.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-413-789-6699"
        }
      }
    ],
    title: "Sublime Horizon of the Tundra Tides",
    description: "Escape the everyday with this dreamlike journey through Alaska, departing from Seattle. You'll visit Victoria, Glacier Bay, Juneau, where every stop is a new adventure.",
    rating: 4.0,
    tags: ["cruise-excursion","cruise-vacation","cruise-adventure"]
  },
  {
    basePrice: 4202,
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
    "city": "Juneau",
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
      description: "Let the spirit of exploration guide your charming journey from Seattle. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Juneau, Sitka.",
      distance: "1245 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Juneau"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Juneau to Sitka"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Sitka to Seattle"
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
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carter Lawson",
        role: "Corporate Concierge",
        languages: ["Hindi","Marathi"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "mystical.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-591-667-3416"
        }
      }
    ],
    title: "Mystical Mirage of the Forest by the Sea",
    description: "Let the spirit of exploration guide your charming journey from Seattle. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Juneau, Sitka.",
    rating: 4.6,
    tags: ["exclusive","cruise-journey","cruise"]
  },
  {
    basePrice: 7949,
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
    "city": "Ketchikan",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Your journey through the Alaska begins in Seattle, where elegance meets adventure. Explore the shores of Glacier Bay, Ketchikan, with curated excursions and luxurious onboard amenities.",
      distance: "613 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Ketchikan"
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
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Walter Mason",
        role: "Corporate Concierge",
        languages: ["Hindi","Marathi"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        contact: {
          contactEmail: "golden.escape.of.the@velarivoyages.com",
          contactNumber: "+1-519-625-2818"
        }
      }
    ],
    title: "Golden Escape of the Sound of Silence",
    description: "Your journey through the Alaska begins in Seattle, where elegance meets adventure. Explore the shores of Glacier Bay, Ketchikan, with curated excursions and luxurious onboard amenities.",
    rating: 4.8,
    tags: ["cruise-journey"]
  },
  {
    basePrice: 1028,
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
  }
],
      description: "Let the spirit of exploration guide your timeless journey from Seattle. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Victoria, Juneau, Skagway.",
      distance: "1314 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Victoria to Juneau"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Juneau to Skagway"
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
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kenneth Sutton",
        role: "Corporate Concierge",
        languages: ["Hindi","Marathi"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
        contact: {
          contactEmail: "opulent.pulse.of.the@velarivoyages.com",
          contactNumber: "+1-730-289-6371"
        }
      }
    ],
    title: "Opulent Pulse of the Emerald City",
    description: "Let the spirit of exploration guide your timeless journey from Seattle. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Victoria, Juneau, Skagway.",
    rating: 4.0,
    tags: ["cruise","general","adventure"]
  },
  {
    basePrice: 4816,
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
    "city": "Ketchikan",
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
      description: "This handpicked escape begins in Seattle and travels through Alaska's iconic waterscapes. Discover Ketchikan, Juneau, Glacier Bay, Victoria as each day brings new stories and every night offers elegant repose.",
      distance: "538 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Ketchikan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Juneau to Glacier Bay"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Victoria"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
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
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Victoria"
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
        name: "Louis Gibson",
        role: "Corporate Concierge",
        languages: ["Hindi","Marathi"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "mystical.passage.of.@velarivoyages.com",
          contactNumber: "+1-948-613-9964"
        }
      }
    ],
    title: "Mystical Passage of the Sound of Silence",
    description: "This handpicked escape begins in Seattle and travels through Alaska's iconic waterscapes. Discover Ketchikan, Juneau, Glacier Bay, Victoria as each day brings new stories and every night offers elegant repose.",
    rating: 4.6,
    tags: ["long-distance","culinary","romantic"]
  },
  {
    basePrice: 8136,
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
    "city": "Sitka",
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
      description: "Let the winds of the Alaska carry you from Seattle to the most stunning ports in the region. With destinations like Sitka, Ketchikan, Skagway, this lullaby redefines luxury travel.",
      distance: "1109 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Sitka"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Sitka to Ketchikan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Skagway to Seattle"
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
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Jesse Coleman",
        role: "Corporate Concierge",
        languages: ["Hindi","Marathi"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "sublime.discovery.of@velarivoyages.com",
          contactNumber: "+1-248-830-9137"
        }
      }
    ],
    title: "Sublime Discovery of the Forest by the Sea",
    description: "Let the winds of the Alaska carry you from Seattle to the most stunning ports in the region. With destinations like Sitka, Ketchikan, Skagway, this lullaby redefines luxury travel.",
    rating: 4.4,
    tags: ["luxury"]
  },
  {
    basePrice: 1179,
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
  }
],
      description: "Board in Seattle for a hand-crafted embrace through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Juneau, Victoria, Ketchikan.",
      distance: "1344 nautical miles",
      totalDuration: "10 days",
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
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Frank Montgomery",
        role: "Corporate Concierge",
        languages: ["Hindi","Marathi"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "harmonic.realm.of.th@velarivoyages.com",
          contactNumber: "+1-721-558-7231"
        }
      }
    ],
    title: "Harmonic Realm of the Tundra Tides",
    description: "Board in Seattle for a hand-crafted embrace through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Juneau, Victoria, Ketchikan.",
    rating: 4.8,
    tags: ["fall-cruise","historical","cruise-vacation"]
  },
  {
    basePrice: 1043,
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
      description: "An escape like no other begins in Seattle, where your voyage launches into the heart of Alaska. Discover the magic of Glacier Bay, Ketchikan, Skagway with style and sophistication.",
      distance: "771 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Skagway"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
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
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Andrew West",
        role: "Corporate Concierge",
        languages: ["Hindi","Marathi"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "aweinspiring.escape.@velarivoyages.com",
          contactNumber: "+1-297-790-5045"
        }
      }
    ],
    title: "Awe-Inspiring Escape of the Tundra Tides",
    description: "An escape like no other begins in Seattle, where your voyage launches into the heart of Alaska. Discover the magic of Glacier Bay, Ketchikan, Skagway with style and sophistication.",
    rating: 4.4,
    tags: ["expedition","glacier-cruise"]
  }
];
