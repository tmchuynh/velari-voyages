import { Cruise } from "@/lib/interfaces/services/cruises";

export const singaporeCruises: Cruise[] = [
{
    basePrice: 1599,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Shanghai",
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    }
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  }
],
      description: "Set sail from Singapore on this tide-washed requiem through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Shanghai and Bangkok, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1100 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Singapore to Shanghai"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Bangkok"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Singapore"
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
    "description": "Exploring Bangkok"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Griffin",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/62.jpg",
        contact: {
          contactEmail: "velvet.exploration.o@velarivoyages.com",
          contactNumber: "+1-564-872-1971"
        }
      }
    ],
    title: "Velvet Exploration of the Arcology Nexus",
    description: "Set sail from Singapore on this tide-washed requiem through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Shanghai and Bangkok, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.3,
    tags: ["glacier-cruise"]
  },
  {
    basePrice: 4802,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Yokohama",
  "country": "Japan",
  "coordinates": {
    "latitude": 35.4437,
    "longitude": 139.638
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
    }
  },
  {
    "city": "Yokohama",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.4437,
      "longitude": 139.638
    }
  }
],
      description: "Start in the vibrant city of Singapore and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Bali, Yokohama.",
      distance: "1052 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Bali to Yokohama"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Singapore"
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
    "description": "Exploring Yokohama"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Mateo Harper",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "serene.panorama.of.t@velarivoyages.com",
          contactNumber: "+1-333-624-2361"
        }
      }
    ],
    title: "Serene Panorama of the Jungle of Light",
    description: "Start in the vibrant city of Singapore and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Bali, Yokohama.",
    rating: 4.5,
    tags: ["seasonal"]
  },
  {
    basePrice: 3374,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Board in Singapore for a hand-crafted mystique through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Auckland, Yokohama, Tokyo, Bangkok.",
      distance: "527 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Singapore to Auckland"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Auckland to Yokohama"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Yokohama to Tokyo"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Bangkok"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Juan Watson",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "ornate.enigma.of.the@velarivoyages.com",
          contactNumber: "+1-935-914-2179"
        }
      }
    ],
    title: "Ornate Enigma of the Neon Tropics",
    description: "Board in Singapore for a hand-crafted mystique through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Auckland, Yokohama, Tokyo, Bangkok.",
    rating: 4.8,
    tags: ["weekend-cruise","seasonal","cruise-line"]
  },
  {
    basePrice: 6479,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
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
    "city": "Yokohama",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.4437,
      "longitude": 139.638
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "This inspiring oasis departs from Singapore, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Tokyo, Sydney, Yokohama.",
      distance: "567 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Singapore to Tokyo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Sydney"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Sydney to Yokohama"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Yokohama to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jonathan West",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "floating.panorama.of@velarivoyages.com",
          contactNumber: "+1-802-765-2205"
        }
      }
    ],
    title: "Floating Panorama of the Neon Tropics",
    description: "This inspiring oasis departs from Singapore, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Tokyo, Sydney, Yokohama.",
    rating: 4.4,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 9382,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Hong Kong",
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
  }
],
      description: "An unforgettable oasis awaits as you cruise from Singapore across Asia Pacific. Dive into history, flavor, and culture with stops including Hong Kong, Melbourne.",
      distance: "932 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Singapore to Hong Kong"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Melbourne"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Henry Gardner",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
        contact: {
          contactEmail: "alluring.retreat.of.@velarivoyages.com",
          contactNumber: "+1-342-571-3284"
        }
      }
    ],
    title: "Alluring Retreat of the Glass and Garden",
    description: "An unforgettable oasis awaits as you cruise from Singapore across Asia Pacific. Dive into history, flavor, and culture with stops including Hong Kong, Melbourne.",
    rating: 4.8,
    tags: ["holiday-cruise","luxury"]
  },
  {
    basePrice: 6740,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
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
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
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
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "This inspiring passage departs from Singapore, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Yokohama, Shanghai, Ho Chi Minh City.",
      distance: "638 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Singapore to Yokohama"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Yokohama to Shanghai"
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
    "description": "Sailing from Ho Chi Minh City to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Yokohama"
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
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Tyler Hamilton",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "harmonic.awakening.o@velarivoyages.com",
          contactNumber: "+1-126-523-9811"
        }
      }
    ],
    title: "Harmonic Awakening of the Neon Tropics",
    description: "This inspiring passage departs from Singapore, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Yokohama, Shanghai, Ho Chi Minh City.",
    rating: 4.3,
    tags: ["expedition"]
  },
  {
    basePrice: 4020,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
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
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
    }
  },
  {
    "city": "Kyoto",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.0116,
      "longitude": 135.7681
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Begin your realm in Singapore, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Ho Chi Minh City, Bali, Kyoto and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "584 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Singapore to Ho Chi Minh City"
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
    "description": "Sailing from Bali to Kyoto"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Kyoto to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
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
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Eugene Hudson",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "mystical.tranquility@velarivoyages.com",
          contactNumber: "+1-790-290-4729"
        }
      }
    ],
    title: "Mystical Tranquility of the Neon Tropics",
    description: "Begin your realm in Singapore, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Ho Chi Minh City, Bali, Kyoto and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.2,
    tags: ["VIP","general"]
  },
  {
    basePrice: 4578,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Enjoy seamless luxury on this ornate reverie beginning in Singapore. Visit breathtaking Asia Pacific locales such as Bangkok, Melbourne on this unforgettable itinerary.",
      distance: "1289 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bangkok"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Melbourne"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Melbourne to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Singapore"
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
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Wei Griffin",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "majestic.realm.of.th@velarivoyages.com",
          contactNumber: "+1-536-130-8429"
        }
      }
    ],
    title: "Majestic Realm of the Futuristic Haven",
    description: "Enjoy seamless luxury on this ornate reverie beginning in Singapore. Visit breathtaking Asia Pacific locales such as Bangkok, Melbourne on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["themed-cruise","tropical"]
  },
  {
    basePrice: 6722,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
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
  },
  {
    "city": "Hong Kong",
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Launch into adventure from Singapore and sail deep into the heart of the Asia Pacific. With ports of call like Tokyo, Hong Kong, Melbourne, Sydney, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "586 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Singapore to Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Hong Kong"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Melbourne"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Sydney"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Sydney to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mason Mason",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "pristine.enigma.of.t@velarivoyages.com",
          contactNumber: "+1-646-357-9709"
        }
      }
    ],
    title: "Pristine Enigma of the Futuristic Haven",
    description: "Launch into adventure from Singapore and sail deep into the heart of the Asia Pacific. With ports of call like Tokyo, Hong Kong, Melbourne, Sydney, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.3,
    tags: ["cruise-line"]
  },
  {
    basePrice: 7190,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
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
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail away from the charming harbor of Singapore on this hidden journey across Asia Pacific. Uncover the beauty and history of Auckland, Yokohama, Ho Chi Minh City with curated excursions, world-class cuisine, and exceptional service.",
      distance: "898 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Singapore to Auckland"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Auckland to Yokohama"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Yokohama to Ho Chi Minh City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Joel Mitchell",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "whispering.resonance@velarivoyages.com",
          contactNumber: "+1-518-819-8322"
        }
      }
    ],
    title: "Whispering Resonance of the Dynastic Dreams",
    description: "Sail away from the charming harbor of Singapore on this hidden journey across Asia Pacific. Uncover the beauty and history of Auckland, Yokohama, Ho Chi Minh City with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.9,
    tags: ["tropical","sightseeing","glacier-cruise"]
  },
  {
    basePrice: 1790,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
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
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Escape the everyday with this immersive journey through Asia Pacific, departing from Singapore. You'll visit Auckland, Melbourne, where every stop is a new adventure.",
      distance: "1329 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Singapore to Auckland"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Auckland to Melbourne"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Melbourne to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christopher Crawford",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "ornate.currents.of.t@velarivoyages.com",
          contactNumber: "+1-334-546-6775"
        }
      }
    ],
    title: "Ornate Currents of the Arcology Nexus",
    description: "Escape the everyday with this immersive journey through Asia Pacific, departing from Singapore. You'll visit Auckland, Melbourne, where every stop is a new adventure.",
    rating: 4.6,
    tags: ["culinary","historical"]
  },
  {
    basePrice: 6987,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  },
  {
    "city": "Kyoto",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.0116,
      "longitude": 135.7681
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "An escape like no other begins in Singapore, where your retreat launches into the heart of Asia Pacific. Discover the magic of Bali, Auckland, Bangkok, Kyoto with style and sophistication.",
      distance: "882 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Bali to Auckland"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Auckland to Bangkok"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Kyoto"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Kyoto to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Victor Graves",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "azure.labyrinth.of.t@velarivoyages.com",
          contactNumber: "+1-811-256-6549"
        }
      }
    ],
    title: "Azure Labyrinth of the Glass and Garden",
    description: "An escape like no other begins in Singapore, where your retreat launches into the heart of Asia Pacific. Discover the magic of Bali, Auckland, Bangkok, Kyoto with style and sophistication.",
    rating: 4.8,
    tags: ["luxury","adventure"]
  },
  {
    basePrice: 7606,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
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
    "city": "Yokohama",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.4437,
      "longitude": 139.638
    }
  },
  {
    "city": "Shanghai",
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Your sanctuary begins in Singapore, where every sunset on the Asia Pacific horizon promises another day of discovery—from Melbourne, Yokohama, Shanghai, Sydney to hidden ports of charm.",
      distance: "1076 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Singapore to Melbourne"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Yokohama"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Yokohama to Shanghai"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Sydney"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Sydney to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Logan Dixon",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/47.jpg",
        contact: {
          contactEmail: "extraordinary.sanctu@velarivoyages.com",
          contactNumber: "+1-173-866-7914"
        }
      }
    ],
    title: "Extraordinary Sanctum of the Glass and Garden",
    description: "Your sanctuary begins in Singapore, where every sunset on the Asia Pacific horizon promises another day of discovery—from Melbourne, Yokohama, Shanghai, Sydney to hidden ports of charm.",
    rating: 4.0,
    tags: ["general","relaxation"]
  },
  {
    basePrice: 9395,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
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
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
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
    "city": "Kyoto",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.0116,
      "longitude": 135.7681
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Experience the elegance of the seas on this exquisite resonance through Asia Pacific, starting from the illustrious port of Singapore. From Bali, Melbourne to Kyoto, each destination offers its own story, culture, and breathtaking views.",
      distance: "1210 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Bali to Melbourne"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Kyoto"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Kyoto to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Jordan Parker",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "midnight.resonance.o@velarivoyages.com",
          contactNumber: "+1-255-749-6467"
        }
      }
    ],
    title: "Midnight Resonance of the Arcology Nexus",
    description: "Experience the elegance of the seas on this exquisite resonance through Asia Pacific, starting from the illustrious port of Singapore. From Bali, Melbourne to Kyoto, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.3,
    tags: ["tropical","fall-cruise"]
  },
  {
    basePrice: 8098,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
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
    "city": "Kyoto",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.0116,
      "longitude": 135.7681
    }
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Set course from Singapore for an inspiring starlit journey across Asia Pacific. Whether exploring ancient ruins in Melbourne or soaking up coastal views in Kyoto, every day offers a perfect mix of discovery and relaxation.",
      distance: "1298 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Singapore to Melbourne"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Kyoto"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Kyoto to Bangkok"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Adam Curtis",
        role: "Corporate Concierge",
        languages: ["Malay","Tagalog","Thai","Indonesian","Vietnamese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/51.jpg",
        contact: {
          contactEmail: "captivating.frontier@velarivoyages.com",
          contactNumber: "+1-181-996-9319"
        }
      }
    ],
    title: "Captivating Frontier of the Glass and Garden",
    description: "Set course from Singapore for an inspiring starlit journey across Asia Pacific. Whether exploring ancient ruins in Melbourne or soaking up coastal views in Kyoto, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.3,
    tags: ["themed-cruise","long-distance"]
  },
  {
    basePrice: 3777,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Hong Kong",
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
    "city": "Kyoto",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.0116,
      "longitude": 135.7681
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Explore a new side of Asia Pacific with this golden journey starting in Singapore. Visit charming ports such as Hong Kong, Melbourne, Kyoto, each offering its own unique rhythm.",
      distance: "669 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Singapore to Hong Kong"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Melbourne"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Melbourne to Kyoto"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Kyoto to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Donna Porter",
        role: "Reservations Agent",
        languages: ["Tagalog","Korean","Hindi","Urdu"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
        contact: {
          contactEmail: "infinite.reflection.@velarivoyages.com",
          contactNumber: "+1-329-155-2311"
        }
      }
    ],
    title: "Infinite Reflection of the Glass and Garden",
    description: "Explore a new side of Asia Pacific with this golden journey starting in Singapore. Visit charming ports such as Hong Kong, Melbourne, Kyoto, each offering its own unique rhythm.",
    rating: 4.7,
    tags: ["tropical","wellness"]
  },
  {
    basePrice: 3154,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
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
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
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
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "This verdant reflection begins in Singapore and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Bali, Tokyo, Bangkok.",
      distance: "896 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Bali to Tokyo"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Bangkok"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Deborah Henderson",
        role: "Reservations Agent",
        languages: ["Tagalog","Korean","Hindi","Urdu"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
        contact: {
          contactEmail: "dreamlike.resonance.@velarivoyages.com",
          contactNumber: "+1-523-546-9803"
        }
      }
    ],
    title: "Dreamlike Resonance of the Lion City",
    description: "This verdant reflection begins in Singapore and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Bali, Tokyo, Bangkok.",
    rating: 4.9,
    tags: ["cultural"]
  },
  {
    basePrice: 7526,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Shanghai",
  "country": "China",
  "coordinates": {
    "latitude": 31.2304,
    "longitude": 121.4737
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
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
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    }
  }
],
      description: "Sail from Singapore into a world of wonder. The Asia Pacific beckons with unforgettable ports like Bangkok, Tokyo, Shanghai, where every view is picture-perfect and every moment is priceless.",
      distance: "641 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bangkok"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Tokyo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Zoe Marshall",
        role: "Reservations Agent",
        languages: ["Tagalog","Korean","Hindi","Urdu"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/73.jpg",
        contact: {
          contactEmail: "exquisite.panorama.o@velarivoyages.com",
          contactNumber: "+1-640-600-4149"
        }
      }
    ],
    title: "Exquisite Panorama of the Tea-Laced Traditions",
    description: "Sail from Singapore into a world of wonder. The Asia Pacific beckons with unforgettable ports like Bangkok, Tokyo, Shanghai, where every view is picture-perfect and every moment is priceless.",
    rating: 4.0,
    tags: ["glacier-cruise","general"]
  },
  {
    basePrice: 8439,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
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
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  }
],
      description: "Start in the vibrant city of Singapore and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Melbourne, Bali, Ho Chi Minh City.",
      distance: "1072 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Singapore to Melbourne"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Melbourne to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Bali to Ho Chi Minh City"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Melbourne"
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
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Palmer",
        role: "Reservations Agent",
        languages: ["Tagalog","Korean","Hindi","Urdu"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/73.jpg",
        contact: {
          contactEmail: "whispering.sanctuary@velarivoyages.com",
          contactNumber: "+1-711-353-9221"
        }
      }
    ],
    title: "Whispering Sanctuary of the Jungle of Light",
    description: "Start in the vibrant city of Singapore and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Melbourne, Bali, Ho Chi Minh City.",
    rating: 5.0,
    tags: ["sightseeing"]
  },
  {
    basePrice: 9301,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 1.3521,
    "longitude": 103.8198
  }
},
    arrivalLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
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
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  },
  {
    "city": "Melbourne",
    "country": "Australia",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  }
],
      description: "This mythic cruise from Singapore is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Bali, Tokyo, Bangkok, Melbourne with enriching excursions and award-winning service.",
      distance: "891 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Bali to Tokyo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Bangkok"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Melbourne"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Singapore"
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
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Isabella Stewart",
        role: "Reservations Agent",
        languages: ["Tagalog","Korean","Hindi","Urdu"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "sublime.quest.of.the@velarivoyages.com",
          contactNumber: "+1-760-386-4402"
        }
      }
    ],
    title: "Sublime Quest of the Lotus-Lined Waters",
    description: "This mythic cruise from Singapore is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Bali, Tokyo, Bangkok, Melbourne with enriching excursions and award-winning service.",
    rating: 4.2,
    tags: ["cruise-line","romantic"]
  }
];
