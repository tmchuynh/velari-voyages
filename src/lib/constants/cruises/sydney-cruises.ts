import { Cruise } from "@/lib/interfaces/services/cruises";

export const sydneyCruises: Cruise[] = [
{
    basePrice: 7114,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
      description: "Depart from Sydney on this thoughtfully designed escape across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Bali, Singapore, Tokyo.",
      distance: "672 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Sydney to Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Bali to Singapore"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Singapore to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Hawkins",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "radiant.elevation.of@velarivoyages.com",
          contactNumber: "+1-314-371-9072"
        }
      }
    ],
    title: "Radiant Elevation of the Seafront Radiance",
    description: "Depart from Sydney on this thoughtfully designed escape across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Bali, Singapore, Tokyo.",
    rating: 4.8,
    tags: ["cruise-getaway","long-distance"]
  },
  {
    basePrice: 2723,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "This inspiring horizon departs from Sydney, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Shanghai, Ho Chi Minh City.",
      distance: "1454 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Sydney to Shanghai"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Ho Chi Minh City"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Shanghai"
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
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Hannah Cooper",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "midnight.elevation.o@velarivoyages.com",
          contactNumber: "+1-633-755-9114"
        }
      }
    ],
    title: "Midnight Elevation of the Seafront Radiance",
    description: "This inspiring horizon departs from Sydney, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Shanghai, Ho Chi Minh City.",
    rating: 4.1,
    tags: ["long-distance","VIP","nature"]
  },
  {
    basePrice: 3358,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Depart from the iconic port of Sydney and sail through the enchanting Asia Pacific. Explore vibrant destinations like Bali, Bangkok, Shanghai, Ho Chi Minh City, each offering its own unique charm and local flair.",
      distance: "1222 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Sydney to Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Bali to Bangkok"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Shanghai"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Ho Chi Minh City"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bangkok"
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
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Allison Campbell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "transcendent.symphon@velarivoyages.com",
          contactNumber: "+1-851-604-6744"
        }
      }
    ],
    title: "Transcendent Symphony of the Seafront Radiance",
    description: "Depart from the iconic port of Sydney and sail through the enchanting Asia Pacific. Explore vibrant destinations like Bali, Bangkok, Shanghai, Ho Chi Minh City, each offering its own unique charm and local flair.",
    rating: 4.7,
    tags: ["nature","historical","cruise-experience"]
  },
  {
    basePrice: 6757,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Your legacy begins in Sydney, where every sunset on the Asia Pacific horizon promises another day of discovery—from Bangkok, Tokyo to hidden ports of charm.",
      distance: "1140 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Sydney to Bangkok"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Tokyo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Skylar Douglas",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "pearlescent.discover@velarivoyages.com",
          contactNumber: "+1-151-855-4517"
        }
      }
    ],
    title: "Pearlescent Discovery of the Mystic East",
    description: "Your legacy begins in Sydney, where every sunset on the Asia Pacific horizon promises another day of discovery—from Bangkok, Tokyo to hidden ports of charm.",
    rating: 4.1,
    tags: ["weekend-cruise","short-getaway"]
  },
  {
    basePrice: 1914,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
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
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "An escape like no other begins in Sydney, where your reunion launches into the heart of Asia Pacific. Discover the magic of Shanghai, Ho Chi Minh City with style and sophistication.",
      distance: "1259 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Sydney to Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Ho Chi Minh City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sydney"
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
    "description": "Exploring Ho Chi Minh City"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Susan Wells",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/73.jpg",
        contact: {
          contactEmail: "charming.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-739-759-5292"
        }
      }
    ],
    title: "Charming Odyssey of the Opera-Lit Skies",
    description: "An escape like no other begins in Sydney, where your reunion launches into the heart of Asia Pacific. Discover the magic of Shanghai, Ho Chi Minh City with style and sophistication.",
    rating: 4.6,
    tags: ["romantic"]
  },
  {
    basePrice: 8877,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
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
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Leave stress behind with this curated drift from Sydney. Sail across the best of Asia Pacific and explore treasures like Singapore, Ho Chi Minh City, Tokyo, Bali with comfort and style.",
      distance: "553 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sydney to Singapore"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Singapore to Ho Chi Minh City"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Tokyo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Bali"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Bali to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
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
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Rachel Nash",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "spectacular.oasis.of@velarivoyages.com",
          contactNumber: "+1-513-125-8871"
        }
      }
    ],
    title: "Spectacular Oasis of the Sun-Kissed Capital",
    description: "Leave stress behind with this curated drift from Sydney. Sail across the best of Asia Pacific and explore treasures like Singapore, Ho Chi Minh City, Tokyo, Bali with comfort and style.",
    rating: 4.9,
    tags: ["romantic","wildlife","glacier-cruise"]
  },
  {
    basePrice: 1527,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
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
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
      description: "From the lively departure port of Sydney, this curated pulse showcases the finest of Asia Pacific. With visits to Singapore, Tokyo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "844 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sydney to Singapore"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Singapore to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Madison Reed",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "luxurious.excursion.@velarivoyages.com",
          contactNumber: "+1-836-779-5310"
        }
      }
    ],
    title: "Luxurious Excursion of the Zen Shores",
    description: "From the lively departure port of Sydney, this curated pulse showcases the finest of Asia Pacific. With visits to Singapore, Tokyo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.4,
    tags: ["cultural","fall-cruise","cruise"]
  },
  {
    basePrice: 3145,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "city": "Bangkok",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Start in the vibrant city of Sydney and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Tokyo, Shanghai, Bali, Bangkok.",
      distance: "1241 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Sydney to Tokyo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Shanghai"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Bali"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Bali to Bangkok"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Wells",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "exquisite.reunion.of@velarivoyages.com",
          contactNumber: "+1-936-299-6545"
        }
      }
    ],
    title: "Exquisite Reunion of the Crescent Bay Beauty",
    description: "Start in the vibrant city of Sydney and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Tokyo, Shanghai, Bali, Bangkok.",
    rating: 5.0,
    tags: ["weekend-cruise"]
  },
  {
    basePrice: 7042,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
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
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Savor each moment of this mythic escape through Asia Pacific, starting in Sydney. Visit renowned locations like Bali, Tokyo, where adventure and relaxation intertwine.",
      distance: "831 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Sydney to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Bali to Tokyo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Barbara Hunter",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "velvet.exploration.o@velarivoyages.com",
          contactNumber: "+1-292-360-5643"
        }
      }
    ],
    title: "Velvet Exploration of the Seafront Radiance",
    description: "Savor each moment of this mythic escape through Asia Pacific, starting in Sydney. Visit renowned locations like Bali, Tokyo, where adventure and relaxation intertwine.",
    rating: 4.0,
    tags: ["expedition","glacier-cruise","family-friendly"]
  },
  {
    basePrice: 4902,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
      description: "Your sojourn begins in Sydney, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Tokyo to the historic streets of Bali, each stop in the Asia Pacific will leave a lasting impression.",
      distance: "516 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Sydney to Tokyo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Bali"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Bali to Ho Chi Minh City"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sydney"
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
    "description": "Exploring Bali"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
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
        name: "Ella Griffin",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "epic.zenith.of.the.m@velarivoyages.com",
          contactNumber: "+1-157-481-4082"
        }
      }
    ],
    title: "Epic Zenith of the Mystic East",
    description: "Your sojourn begins in Sydney, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Tokyo to the historic streets of Bali, each stop in the Asia Pacific will leave a lasting impression.",
    rating: 4.7,
    tags: ["sightseeing","short-getaway","cruise-ship"]
  },
  {
    basePrice: 9250,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
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
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Experience the elegance of the seas on this extraordinary voyage through Asia Pacific, starting from the illustrious port of Sydney. From Ho Chi Minh City to Bali, each destination offers its own story, culture, and breathtaking views.",
      distance: "1467 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Sydney to Ho Chi Minh City"
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
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sydney"
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
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Emily Henderson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "refined.tide.of.the.@velarivoyages.com",
          contactNumber: "+1-945-270-3795"
        }
      }
    ],
    title: "Refined Tide of the Seafront Radiance",
    description: "Experience the elegance of the seas on this extraordinary voyage through Asia Pacific, starting from the illustrious port of Sydney. From Ho Chi Minh City to Bali, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.8,
    tags: ["cruise-vacation"]
  },
  {
    basePrice: 1276,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
      description: "Begin your awakening in Sydney, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Singapore, Bali and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1248 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Sydney to Singapore"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Singapore to Bali"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bali"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Collins",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "spectacular.expediti@velarivoyages.com",
          contactNumber: "+1-174-622-9161"
        }
      }
    ],
    title: "Spectacular Expedition of the Sun-Kissed Capital",
    description: "Begin your awakening in Sydney, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Singapore, Bali and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.9,
    tags: ["wellness","exclusive"]
  },
  {
    basePrice: 1043,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "This crystalline quest begins in Sydney and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Ho Chi Minh City, Bali.",
      distance: "1343 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sydney to Ho Chi Minh City"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Bali to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sydney"
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
    "description": "Exploring Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Zoe Lawson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "forbidden.passage.of@velarivoyages.com",
          contactNumber: "+1-512-432-4276"
        }
      }
    ],
    title: "Forbidden Passage of the Lotus-Lined Waters",
    description: "This crystalline quest begins in Sydney and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Ho Chi Minh City, Bali.",
    rating: 4.5,
    tags: ["glacier-cruise","wildlife","cruise-line"]
  },
  {
    basePrice: 6174,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
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
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
  }
],
      description: "Escape the everyday with this transcendent journey through Asia Pacific, departing from Sydney. You'll visit Tokyo, Shanghai, Bali, Ho Chi Minh City, where every stop is a new adventure.",
      distance: "817 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sydney to Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
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
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Bali to Ho Chi Minh City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sydney"
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
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Cooper",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/91.jpg",
        contact: {
          contactEmail: "timeless.resonance.o@velarivoyages.com",
          contactNumber: "+1-714-880-2889"
        }
      }
    ],
    title: "Timeless Resonance of the Southern Cross City",
    description: "Escape the everyday with this transcendent journey through Asia Pacific, departing from Sydney. You'll visit Tokyo, Shanghai, Bali, Ho Chi Minh City, where every stop is a new adventure.",
    rating: 4.1,
    tags: ["romantic","adventure"]
  },
  {
    basePrice: 9636,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
      description: "Sail from Sydney into a world of wonder. The Asia Pacific beckons with unforgettable ports like Ho Chi Minh City, Singapore, Bali, Bangkok, where every view is picture-perfect and every moment is priceless.",
      distance: "1045 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Sydney to Ho Chi Minh City"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Singapore"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Bali to Bangkok"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Carol Sutton",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Japanese"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "luxurious.resonance.@velarivoyages.com",
          contactNumber: "+1-768-545-9743"
        }
      }
    ],
    title: "Luxurious Resonance of the Jade Horizons",
    description: "Sail from Sydney into a world of wonder. The Asia Pacific beckons with unforgettable ports like Ho Chi Minh City, Singapore, Bali, Bangkok, where every view is picture-perfect and every moment is priceless.",
    rating: 4.8,
    tags: ["cruise-adventure","long-distance","expedition"]
  },
  {
    basePrice: 7215,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
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
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
      description: "Depart from Sydney on this thoughtfully designed expedition across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Singapore, Bali, Bangkok, Ho Chi Minh City.",
      distance: "892 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Sydney to Singapore"
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
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Ho Chi Minh City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
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
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Riley Hawkins",
        role: "Loyalty Program Representative",
        languages: ["Swahili","Bengali","Dutch"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
        contact: {
          contactEmail: "azure.awakening.of.t@velarivoyages.com",
          contactNumber: "+1-188-663-7318"
        }
      }
    ],
    title: "Azure Awakening of the Southern Cross City",
    description: "Depart from Sydney on this thoughtfully designed expedition across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Singapore, Bali, Bangkok, Ho Chi Minh City.",
    rating: 4.6,
    tags: ["sightseeing","cruise-vacation","holiday-cruise"]
  },
  {
    basePrice: 6588,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Depart from Sydney on this thoughtfully designed reunion across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Singapore, Bali, Ho Chi Minh City, Shanghai.",
      distance: "1080 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Sydney to Singapore"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Bali to Ho Chi Minh City"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Shanghai"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sydney"
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
    "description": "Exploring Bali"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lily Spencer",
        role: "Loyalty Program Representative",
        languages: ["Swahili","Bengali","Dutch"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "dreamlike.solstice.o@velarivoyages.com",
          contactNumber: "+1-111-537-8138"
        }
      }
    ],
    title: "Dreamlike Solstice of the Lotus-Lined Waters",
    description: "Depart from Sydney on this thoughtfully designed reunion across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Singapore, Bali, Ho Chi Minh City, Shanghai.",
    rating: 4.2,
    tags: ["cruise-adventure"]
  },
  {
    basePrice: 9100,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
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
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Begin your journey in Sydney, where tradition meets travel. This immersive sanctum reveals the finest of Asia Pacific, from the beaches of Bali to the streets of Singapore.",
      distance: "1204 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Sydney to Bali"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Bali to Singapore"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Singapore to Tokyo"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Tokyo"
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
        name: "Lily Jennings",
        role: "Loyalty Program Representative",
        languages: ["Swahili","Bengali","Dutch"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "forbidden.infinite.o@velarivoyages.com",
          contactNumber: "+1-787-471-8667"
        }
      }
    ],
    title: "Forbidden Infinite of the Crescent Bay Beauty",
    description: "Begin your journey in Sydney, where tradition meets travel. This immersive sanctum reveals the finest of Asia Pacific, from the beaches of Bali to the streets of Singapore.",
    rating: 4.0,
    tags: ["short-getaway","cruise-getaway"]
  },
  {
    basePrice: 9121,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -33.8688,
    "longitude": 151.2093
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "city": "Shanghai",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This infinite cruise from Sydney is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Bangkok, Tokyo, Singapore, Shanghai with enriching excursions and award-winning service.",
      distance: "728 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Sydney to Bangkok"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Tokyo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Singapore"
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
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
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
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Avery Jennings",
        role: "Loyalty Program Representative",
        languages: ["Swahili","Bengali","Dutch"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "infinite.zenith.of.t@velarivoyages.com",
          contactNumber: "+1-624-915-6623"
        }
      }
    ],
    title: "Infinite Zenith of the Mystic East",
    description: "This infinite cruise from Sydney is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Bangkok, Tokyo, Singapore, Shanghai with enriching excursions and award-winning service.",
    rating: 4.8,
    tags: ["glacier-cruise"]
  }
];
