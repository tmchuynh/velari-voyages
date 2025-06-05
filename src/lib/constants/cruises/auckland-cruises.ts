import { Cruise } from "@/lib/interfaces/services/cruises";

export const aucklandCruises: Cruise[] = [
{
    basePrice: 2004,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Set sail from historic Auckland for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Ho Chi Minh City, Sydney.",
      distance: "1442 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Auckland to Ho Chi Minh City"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Sydney"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Sydney to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
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
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ella Coleman",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
        contact: {
          contactEmail: "eternal.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-191-208-1935"
        }
      }
    ],
    title: "Eternal Voyage of the Gateway to New Zealand",
    description: "Set sail from historic Auckland for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Ho Chi Minh City, Sydney.",
    rating: 4.6,
    tags: ["adventure","wildlife"]
  },
  {
    basePrice: 4059,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Depart from iconic Auckland and traverse the Asia Pacific with visits to Sydney, Shanghai, Bali, Ho Chi Minh City. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "518 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Auckland to Sydney"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Sydney to Shanghai"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Bali"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Bali to Ho Chi Minh City"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lily Cooper",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "moonlit.panorama.of.@velarivoyages.com",
          contactNumber: "+1-986-377-2532"
        }
      }
    ],
    title: "Moonlit Panorama of the City of Sails",
    description: "Depart from iconic Auckland and traverse the Asia Pacific with visits to Sydney, Shanghai, Bali, Ho Chi Minh City. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.6,
    tags: ["relaxation","expedition"]
  },
  {
    basePrice: 3148,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Begin a captivating escape through the Asia Pacific, departing Auckland. With visits to Singapore, Bali, Sydney, each day brings a new adventure and deeper connection to the region.",
      distance: "1107 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Auckland to Singapore"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Bali to Sydney"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Sydney to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
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
    "description": "Exploring Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Bella Henderson",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "starlit.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-922-631-5759"
        }
      }
    ],
    title: "Starlit Retreat of the Gateway to New Zealand",
    description: "Begin a captivating escape through the Asia Pacific, departing Auckland. With visits to Singapore, Bali, Sydney, each day brings a new adventure and deeper connection to the region.",
    rating: 4.1,
    tags: ["long-distance","luxury","general"]
  },
  {
    basePrice: 4143,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Begin a captivating arcadia through the Asia Pacific, departing Auckland. With visits to Shanghai, Singapore, each day brings a new adventure and deeper connection to the region.",
      distance: "1243 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Auckland to Shanghai"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Singapore"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Singapore to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Avery Dixon",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "epic.exploration.of.@velarivoyages.com",
          contactNumber: "+1-499-876-9394"
        }
      }
    ],
    title: "Epic Exploration of the Wind-Danced Waterfront",
    description: "Begin a captivating arcadia through the Asia Pacific, departing Auckland. With visits to Shanghai, Singapore, each day brings a new adventure and deeper connection to the region.",
    rating: 4.6,
    tags: ["cruise"]
  },
  {
    basePrice: 5868,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Set sail from Auckland on this mesmerizing elevation through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Shanghai and Sydney and Tokyo and Singapore, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1337 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Auckland to Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Sydney"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Sydney to Tokyo"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Singapore"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Singapore to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Catherine Warren",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "radiant.embrace.of.t@velarivoyages.com",
          contactNumber: "+1-653-496-9286"
        }
      }
    ],
    title: "Radiant Embrace of the Harbor Haven",
    description: "Set sail from Auckland on this mesmerizing elevation through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Shanghai and Sydney and Tokyo and Singapore, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.3,
    tags: ["general","wildlife","nature"]
  },
  {
    basePrice: 4305,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Let the spirit of exploration guide your floating journey from Auckland. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Ho Chi Minh City, Bali, Sydney, Tokyo.",
      distance: "593 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Auckland to Ho Chi Minh City"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Bali to Sydney"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Sydney to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kimberly Payne",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "extraordinary.oasis.@velarivoyages.com",
          contactNumber: "+1-212-815-6451"
        }
      }
    ],
    title: "Extraordinary Oasis of the Harbor Haven",
    description: "Let the spirit of exploration guide your floating journey from Auckland. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Ho Chi Minh City, Bali, Sydney, Tokyo.",
    rating: 4.7,
    tags: ["romantic","exclusive"]
  },
  {
    basePrice: 4244,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Set sail from historic Auckland for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Bali, Ho Chi Minh City, Singapore.",
      distance: "1448 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Auckland to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Bali to Ho Chi Minh City"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Sofia Porter",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "heavenly.sanctum.of.@velarivoyages.com",
          contactNumber: "+1-702-843-9069"
        }
      }
    ],
    title: "Heavenly Sanctum of the Gateway to New Zealand",
    description: "Set sail from historic Auckland for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Bali, Ho Chi Minh City, Singapore.",
    rating: 4.4,
    tags: ["cruise-ship","tropical"]
  },
  {
    basePrice: 2953,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Step into a world of elegance and exploration from Auckland. This voyage through the Asia Pacific unveils stunning stops including Shanghai, Bali, Sydney, Singapore, all with first-class service.",
      distance: "1303 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Auckland to Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Bali to Sydney"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Sydney to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
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
    "description": "Exploring Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lily Price",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
        contact: {
          contactEmail: "charming.voyage.of.t@velarivoyages.com",
          contactNumber: "+1-499-584-2875"
        }
      }
    ],
    title: "Charming Voyage of the Gateway to New Zealand",
    description: "Step into a world of elegance and exploration from Auckland. This voyage through the Asia Pacific unveils stunning stops including Shanghai, Bali, Sydney, Singapore, all with first-class service.",
    rating: 4.2,
    tags: ["long-distance","wildlife","culinary"]
  },
  {
    basePrice: 8249,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
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
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Join us in Auckland for a discovery of a lifetime. Sail across the serene waters of Asia Pacific, stopping at ports like Bali, Sydney, Tokyo, Singapore where timeless traditions meet modern luxuries.",
      distance: "896 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Auckland to Bali"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Bali to Sydney"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Sydney to Tokyo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Singapore"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Singapore to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Abigail Bennett",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/49.jpg",
        contact: {
          contactEmail: "mystical.solstice.of@velarivoyages.com",
          contactNumber: "+1-478-518-6644"
        }
      }
    ],
    title: "Mystical Solstice of the Wind-Danced Waterfront",
    description: "Join us in Auckland for a discovery of a lifetime. Sail across the serene waters of Asia Pacific, stopping at ports like Bali, Sydney, Tokyo, Singapore where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["adventure"]
  },
  {
    basePrice: 6654,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
      description: "This oceanic cruise from Auckland is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Bali, Shanghai, Sydney with enriching excursions and award-winning service.",
      distance: "1083 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Auckland to Bali"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Bali to Shanghai"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Susan West",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "riveting.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-433-606-4717"
        }
      }
    ],
    title: "Riveting Sanctuary of the City of Sails",
    description: "This oceanic cruise from Auckland is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Bali, Shanghai, Sydney with enriching excursions and award-winning service.",
    rating: 4.5,
    tags: ["general","adventure","cruise"]
  },
  {
    basePrice: 8721,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
  }
],
      description: "Discover the wonders of Asia Pacific aboard this captivating cruise departing from Auckland. Journey through crystal waters to explore the treasures of Bangkok, Tokyo, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "802 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Auckland to Bangkok"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Emma Douglas",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "luminous.resonance.o@velarivoyages.com",
          contactNumber: "+1-782-859-9073"
        }
      }
    ],
    title: "Luminous Resonance of the Harbor Haven",
    description: "Discover the wonders of Asia Pacific aboard this captivating cruise departing from Auckland. Journey through crystal waters to explore the treasures of Bangkok, Tokyo, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.1,
    tags: ["wellness","cruise-line"]
  },
  {
    basePrice: 6383,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail into splendor from Auckland on a mesmerizing voyage through Asia Pacific. Let each stop—from Bangkok to Singapore—reveal the unique flavors and colors of the region.",
      distance: "1353 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Auckland to Bangkok"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Singapore"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Singapore to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
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
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Isabella Porter",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "azure.requiem.of.the@velarivoyages.com",
          contactNumber: "+1-702-676-8533"
        }
      }
    ],
    title: "Azure Requiem of the Ocean-Bound Metropolis",
    description: "Sail into splendor from Auckland on a mesmerizing voyage through Asia Pacific. Let each stop—from Bangkok to Singapore—reveal the unique flavors and colors of the region.",
    rating: 4.7,
    tags: ["cruise","VIP","cruise-getaway"]
  },
  {
    basePrice: 9042,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Set sail from historic Auckland for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Tokyo, Singapore.",
      distance: "1325 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Auckland to Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Ella Campbell",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "azure.arcadia.of.the@velarivoyages.com",
          contactNumber: "+1-151-810-8147"
        }
      }
    ],
    title: "Azure Arcadia of the Ocean-Bound Metropolis",
    description: "Set sail from historic Auckland for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Tokyo, Singapore.",
    rating: 4.5,
    tags: ["nature"]
  },
  {
    basePrice: 1044,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
      description: "Enjoy seamless luxury on this celestial labyrinth beginning in Auckland. Visit breathtaking Asia Pacific locales such as Ho Chi Minh City, Singapore, Shanghai on this unforgettable itinerary.",
      distance: "1037 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Auckland to Ho Chi Minh City"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Singapore"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Singapore to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
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
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Brenda West",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "timeless.elevation.o@velarivoyages.com",
          contactNumber: "+1-486-469-4387"
        }
      }
    ],
    title: "Timeless Elevation of the Harbor Haven",
    description: "Enjoy seamless luxury on this celestial labyrinth beginning in Auckland. Visit breathtaking Asia Pacific locales such as Ho Chi Minh City, Singapore, Shanghai on this unforgettable itinerary.",
    rating: 4.7,
    tags: ["wellness","cruise-getaway","tropical"]
  },
  {
    basePrice: 4993,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
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
      description: "Set sail from historic Auckland for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Tokyo, Bali, Sydney, Ho Chi Minh City.",
      distance: "920 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Auckland to Tokyo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Bali to Sydney"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Sydney to Ho Chi Minh City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
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
    "description": "Exploring Ho Chi Minh City"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Barbara Graves",
        role: "Travel Advisor",
        languages: ["Mandarin"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "radiant.oasis.of.the@velarivoyages.com",
          contactNumber: "+1-666-943-3327"
        }
      }
    ],
    title: "Radiant Oasis of the Wind-Danced Waterfront",
    description: "Set sail from historic Auckland for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Tokyo, Bali, Sydney, Ho Chi Minh City.",
    rating: 4.3,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 2372,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Bali",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Your currents begins in Auckland, where every sunset on the Asia Pacific horizon promises another day of discovery—from Ho Chi Minh City, Tokyo, Bali to hidden ports of charm.",
      distance: "505 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Auckland to Ho Chi Minh City"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Tokyo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Bali"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Bali to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Gardner",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "riveting.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-285-877-9719"
        }
      }
    ],
    title: "Riveting Labyrinth of the Sapphire Mooring",
    description: "Your currents begins in Auckland, where every sunset on the Asia Pacific horizon promises another day of discovery—from Ho Chi Minh City, Tokyo, Bali to hidden ports of charm.",
    rating: 4.6,
    tags: ["cruise","family-friendly","long-distance"]
  },
  {
    basePrice: 9529,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
  }
],
      description: "Experience coastal elegance on this adventure from Auckland, where the journey through Asia Pacific includes stops in Bali, Singapore, Sydney, Shanghai, each more enchanting than the last.",
      distance: "693 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Auckland to Bali"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Bali to Singapore"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Singapore to Sydney"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Sydney to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samantha Curtis",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "majestic.awakening.o@velarivoyages.com",
          contactNumber: "+1-174-685-3473"
        }
      }
    ],
    title: "Majestic Awakening of the Sapphire Mooring",
    description: "Experience coastal elegance on this adventure from Auckland, where the journey through Asia Pacific includes stops in Bali, Singapore, Sydney, Shanghai, each more enchanting than the last.",
    rating: 4.8,
    tags: ["culinary","holiday-cruise"]
  },
  {
    basePrice: 1492,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Ho Chi Minh City",
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
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Leave stress behind with this curated labyrinth from Auckland. Sail across the best of Asia Pacific and explore treasures like Bangkok, Bali, Ho Chi Minh City, Singapore with comfort and style.",
      distance: "739 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Auckland to Bangkok"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Bali to Ho Chi Minh City"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Singapore"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Singapore to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amy Holloway",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "epic.excursion.of.th@velarivoyages.com",
          contactNumber: "+1-148-941-9357"
        }
      }
    ],
    title: "Epic Excursion of the Zen Shores",
    description: "Leave stress behind with this curated labyrinth from Auckland. Sail across the best of Asia Pacific and explore treasures like Bangkok, Bali, Ho Chi Minh City, Singapore with comfort and style.",
    rating: 4.1,
    tags: ["nature","themed-cruise","cruise-vacation"]
  },
  {
    basePrice: 9983,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Bangkok",
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
      description: "From the lively departure port of Auckland, this curated eclipse showcases the finest of Asia Pacific. With visits to Bali, Singapore, Bangkok, Sydney, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1215 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Auckland to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Bali to Singapore"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bangkok"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Margaret Morgan",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "moonlit.lullaby.of.t@velarivoyages.com",
          contactNumber: "+1-143-168-2231"
        }
      }
    ],
    title: "Moonlit Lullaby of the Wind-Danced Waterfront",
    description: "From the lively departure port of Auckland, this curated eclipse showcases the finest of Asia Pacific. With visits to Bali, Singapore, Bangkok, Sydney, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.8,
    tags: ["wildlife","culinary","anniversary-cruise"]
  },
  {
    basePrice: 4824,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Depart from iconic Auckland and traverse the Asia Pacific with visits to Singapore, Ho Chi Minh City, Sydney, Bangkok. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1409 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Auckland to Singapore"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Singapore to Ho Chi Minh City"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Sydney"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Sydney to Bangkok"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Margaret Griffin",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/71.jpg",
        contact: {
          contactEmail: "tidewashed.excursion@velarivoyages.com",
          contactNumber: "+1-324-553-3897"
        }
      }
    ],
    title: "Tide-Washed Excursion of the City of Sails",
    description: "Depart from iconic Auckland and traverse the Asia Pacific with visits to Singapore, Ho Chi Minh City, Sydney, Bangkok. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.5,
    tags: ["VIP"]
  },
  {
    basePrice: 8840,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Yokohama",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.4437,
      "longitude": 139.638
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
      description: "This hand-selected dreamlike cruise offers a true taste of Asia Pacific. Depart from Auckland and explore ports like Bali, Singapore, Yokohama, Shanghai, each telling a story through food, music, and tradition.",
      distance: "1206 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Auckland to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Bali to Singapore"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Singapore to Yokohama"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Yokohama to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
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
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Adeline Reeves",
        role: "Group Booking Coordinator",
        languages: ["Greek","German"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "golden.pilgrimage.of@velarivoyages.com",
          contactNumber: "+1-873-421-7166"
        }
      }
    ],
    title: "Golden Pilgrimage of the Lotus-Lined Waters",
    description: "This hand-selected dreamlike cruise offers a true taste of Asia Pacific. Depart from Auckland and explore ports like Bali, Singapore, Yokohama, Shanghai, each telling a story through food, music, and tradition.",
    rating: 4.2,
    tags: ["VIP"]
  },
  {
    basePrice: 9409,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  },
  {
    "city": "Melbourne",
    "country": "Australia",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
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
      description: "Sail away from Auckland into the beautiful expanse of Asia Pacific. Along the way, enjoy rich cultural experiences in Melbourne, Shanghai, Sydney, where history, nature, and cuisine collide.",
      distance: "1388 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Auckland to Melbourne"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Melbourne to Shanghai"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Melbourne"
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
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Mary Russell",
        role: "Group Booking Coordinator",
        languages: ["Greek","German"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/87.jpg",
        contact: {
          contactEmail: "unforgettable.passag@velarivoyages.com",
          contactNumber: "+1-898-619-6460"
        }
      }
    ],
    title: "Unforgettable Passage of the Sapphire Mooring",
    description: "Sail away from Auckland into the beautiful expanse of Asia Pacific. Along the way, enjoy rich cultural experiences in Melbourne, Shanghai, Sydney, where history, nature, and cuisine collide.",
    rating: 4.6,
    tags: ["glacier-cruise","cruise-getaway"]
  },
  {
    basePrice: 6863,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Depart Auckland on a relaxing frontier through the Asia Pacific region. Highlights include the stunning coastlines of Tokyo, Bangkok, all while enjoying first-class amenities on board.",
      distance: "1487 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Auckland to Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Bangkok"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Barbara Reed",
        role: "Group Booking Coordinator",
        languages: ["Greek","German"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "refined.elevation.of@velarivoyages.com",
          contactNumber: "+1-616-978-9146"
        }
      }
    ],
    title: "Refined Elevation of the Sapphire Mooring",
    description: "Depart Auckland on a relaxing frontier through the Asia Pacific region. Highlights include the stunning coastlines of Tokyo, Bangkok, all while enjoying first-class amenities on board.",
    rating: 4.2,
    tags: ["repositioning","wildlife"]
  },
  {
    basePrice: 1591,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Melbourne",
    "country": "Australia",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
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
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Begin your journey in Auckland, where tradition meets travel. This immersive elevation reveals the finest of Asia Pacific, from the beaches of Bali to the streets of Melbourne.",
      distance: "1444 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Auckland to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Bali to Melbourne"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Melbourne to Singapore"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Singapore to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nancy Hawkins",
        role: "Group Booking Coordinator",
        languages: ["Greek","German"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "tidewashed.sojourn.o@velarivoyages.com",
          contactNumber: "+1-281-413-8046"
        }
      }
    ],
    title: "Tide-Washed Sojourn of the Gateway to New Zealand",
    description: "Begin your journey in Auckland, where tradition meets travel. This immersive elevation reveals the finest of Asia Pacific, from the beaches of Bali to the streets of Melbourne.",
    rating: 4.2,
    tags: ["cruise-excursion"]
  },
  {
    basePrice: 3428,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
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
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Let this tranquil voyage redefine your idea of travel. From Auckland, explore the Asia Pacific in luxurious comfort, stopping at Ho Chi Minh City, Shanghai, Tokyo where every port offers a new chapter.",
      distance: "1333 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Auckland to Ho Chi Minh City"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Shanghai"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joan Montgomery",
        role: "Group Booking Coordinator",
        languages: ["Greek","German"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "moonlit.enigma.of.th@velarivoyages.com",
          contactNumber: "+1-897-422-2962"
        }
      }
    ],
    title: "Moonlit Enigma of the Wind-Danced Waterfront",
    description: "Let this tranquil voyage redefine your idea of travel. From Auckland, explore the Asia Pacific in luxurious comfort, stopping at Ho Chi Minh City, Shanghai, Tokyo where every port offers a new chapter.",
    rating: 4.2,
    tags: ["expedition","long-distance","repositioning"]
  }
];
