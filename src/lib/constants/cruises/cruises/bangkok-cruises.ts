import { Cruise } from "@/lib/interfaces/services/cruises";

export const bangkokCruises: Cruise[] = [
  {
    basePrice: 5547,
    departureLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
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
    category: "theme-cruise",
    itinerary: {
      route: [
  {
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
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
  }
],
      description: "Begin your legacy in Bangkok, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Singapore, Bali, Tokyo and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1033 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Singapore"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Bali to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Singapore"
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
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Rachel Sutton",
        role: "Customer Service Representative",
        languages: ["Malay","Chinese","Vietnamese","Tagalog"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "timeless.elevation.o@velarivoyages.com",
          contactNumber: "+1-294-322-1699"
        }
      }
    ],
    title: "Timeless Elevation of the Oceanic Wonders",
    description: "Begin your legacy in Bangkok, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Singapore, Bali, Tokyo and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.1,
    tags: ["sightseeing","luxury"]
  },
  {
    basePrice: 5790,
    departureLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
  }
},
    arrivalLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
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
    "city": "Hong Kong",
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  }
],
      description: "Set sail from Bangkok on this unforgettable elevation through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Yokohama and Hong Kong and Tokyo and Shanghai, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "679 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Yokohama"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Yokohama to Hong Kong"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Tokyo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Shanghai"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Bangkok"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bangkok"
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
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Elena Henderson",
        role: "Customer Service Representative",
        languages: ["Malay","Chinese","Vietnamese","Tagalog"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "celestial.zenith.of.@velarivoyages.com",
          contactNumber: "+1-731-274-6457"
        }
      }
    ],
    title: "Celestial Zenith of the Pagoda-Silhouetted Skylines",
    description: "Set sail from Bangkok on this unforgettable elevation through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Yokohama and Hong Kong and Tokyo and Shanghai, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.0,
    tags: ["cruise-holiday","exclusive"]
  },
  {
    basePrice: 2179,
    departureLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
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
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
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
    "city": "Kyoto",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.0116,
      "longitude": 135.7681
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
      description: "This extraordinary adventure from Bangkok offers the ultimate Asia Pacific exploration. Immerse yourself in the rich cultures and stunning landscapes of Auckland, Kyoto and Sydney, creating memories that will last a lifetime.",
      distance: "1337 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Auckland"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Auckland to Kyoto"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Kyoto to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Warren",
        role: "Customer Service Representative",
        languages: ["Malay","Chinese","Vietnamese","Tagalog"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "midnight.journey.of.@velarivoyages.com",
          contactNumber: "+1-651-995-6502"
        }
      }
    ],
    title: "Midnight Journey of the Bamboo Shores",
    description: "This extraordinary adventure from Bangkok offers the ultimate Asia Pacific exploration. Immerse yourself in the rich cultures and stunning landscapes of Auckland, Kyoto and Sydney, creating memories that will last a lifetime.",
    rating: 4.5,
    tags: ["tropical"]
  },
  {
    basePrice: 9130,
    departureLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
  }
},
    arrivalLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
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
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  }
],
      description: "Start in the vibrant city of Bangkok and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Hong Kong, Shanghai, Ho Chi Minh City.",
      distance: "1031 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Hong Kong"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Shanghai"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Ho Chi Minh City"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Bangkok"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brooklyn Hawkins",
        role: "Customer Service Representative",
        languages: ["Malay","Chinese","Vietnamese","Tagalog"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "sublime.mirage.of.th@velarivoyages.com",
          contactNumber: "+1-609-189-2385"
        }
      }
    ],
    title: "Sublime Mirage of the Tea-Laced Traditions",
    description: "Start in the vibrant city of Bangkok and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Hong Kong, Shanghai, Ho Chi Minh City.",
    rating: 4.4,
    tags: ["short-getaway","cruise-holiday","cruise-adventure"]
  },
  {
    basePrice: 6168,
    departureLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
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
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
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
    "city": "Kyoto",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.0116,
      "longitude": 135.7681
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
      description: "Cruise into cultural richness aboard this mystical odyssey departing Bangkok. Savor local cuisine and uncover regional beauty from Hong Kong to Kyoto.",
      distance: "970 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Hong Kong"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Kyoto"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Kyoto to Ho Chi Minh City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Linda Dunn",
        role: "Customer Service Representative",
        languages: ["Malay","Chinese","Vietnamese","Tagalog"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "floating.reunion.of.@velarivoyages.com",
          contactNumber: "+1-111-511-6214"
        }
      }
    ],
    title: "Floating Reunion of the Oceanic Wonders",
    description: "Cruise into cultural richness aboard this mystical odyssey departing Bangkok. Savor local cuisine and uncover regional beauty from Hong Kong to Kyoto.",
    rating: 5.0,
    tags: ["cruise-vacation","family-friendly"]
  },
  {
    basePrice: 6886,
    departureLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
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
    category: "repositioning-cruise",
    itinerary: {
      route: [
  {
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
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
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  }
],
      description: "Set sail from Bangkok for a voyage like no other. From the picturesque landscapes of Shanghai to the lively ambiance of Ho Chi Minh City, this refined cruise will redefine your view of Asia Pacific.",
      distance: "1211 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Ho Chi Minh City"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Sydney"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Patricia Nash",
        role: "Customer Service Representative",
        languages: ["Malay","Chinese","Vietnamese","Tagalog"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/93.jpg",
        contact: {
          contactEmail: "extraordinary.escape@velarivoyages.com",
          contactNumber: "+1-628-148-9452"
        }
      }
    ],
    title: "Extraordinary Escape of the Jade Horizons",
    description: "Set sail from Bangkok for a voyage like no other. From the picturesque landscapes of Shanghai to the lively ambiance of Ho Chi Minh City, this refined cruise will redefine your view of Asia Pacific.",
    rating: 4.7,
    tags: ["luxury"]
  },
  {
    basePrice: 4603,
    departureLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
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
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
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
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
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
      description: "From the lively departure port of Bangkok, this curated quest showcases the finest of Asia Pacific. With visits to Auckland, Bali, Shanghai, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1125 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Auckland to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Bali to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Lerato Montgomery",
        role: "Customer Service Representative",
        languages: ["Malay","Chinese","Vietnamese","Tagalog"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "unforgettable.requie@velarivoyages.com",
          contactNumber: "+1-462-265-2914"
        }
      }
    ],
    title: "Unforgettable Requiem of the Jade Horizons",
    description: "From the lively departure port of Bangkok, this curated quest showcases the finest of Asia Pacific. With visits to Auckland, Bali, Shanghai, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.6,
    tags: ["adventure","weekend-cruise"]
  },
  {
    basePrice: 2269,
    departureLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
  }
},
    arrivalLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
    itinerary: {
      route: [
  {
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
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
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  }
],
      description: "From bustling Bangkok to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Shanghai, Bali, Melbourne deliver a balanced blend of culture and comfort.",
      distance: "535 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Shanghai"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Bali to Melbourne"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Bangkok"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Price",
        role: "Customer Service Representative",
        languages: ["Malay","Chinese","Vietnamese","Tagalog"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "heavenly.saga.of.the@velarivoyages.com",
          contactNumber: "+1-686-291-4656"
        }
      }
    ],
    title: "Heavenly Saga of the Zen Shores",
    description: "From bustling Bangkok to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Shanghai, Bali, Melbourne deliver a balanced blend of culture and comfort.",
    rating: 4.7,
    tags: ["short-getaway","romantic"]
  },
  {
    basePrice: 5218,
    departureLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
  }
},
    arrivalLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
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
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
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
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  }
],
      description: "Depart from Bangkok on this thoughtfully designed mirage across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Singapore, Shanghai, Melbourne.",
      distance: "1387 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Singapore to Shanghai"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Melbourne"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Melbourne to Bangkok"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Chambers",
        role: "Customer Service Representative",
        languages: ["Malay","Chinese","Vietnamese","Tagalog"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "moonlit.exploration.@velarivoyages.com",
          contactNumber: "+1-766-378-5760"
        }
      }
    ],
    title: "Moonlit Exploration of the Sacred Shores",
    description: "Depart from Bangkok on this thoughtfully designed mirage across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Singapore, Shanghai, Melbourne.",
    rating: 4.7,
    tags: ["cruise-excursion","wildlife"]
  },
  {
    basePrice: 3340,
    departureLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
    itinerary: {
      route: [
  {
    "city": "Bangkok",
    "country": "Thailand",
    "region": "Asia Pacific",
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
    "city": "Yokohama",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.4437,
      "longitude": 139.638
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
    "city": "Shanghai",
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    }
  }
],
      description: "This panorama takes you beyond the ordinary, starting in Bangkok. With breathtaking stops in Kyoto, Yokohama, Bali, Shanghai, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1476 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Kyoto"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Kyoto to Yokohama"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Yokohama to Bali"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Bali to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Allison Wells",
        role: "Customer Service Representative",
        languages: ["Malay","Chinese","Vietnamese","Tagalog"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "breathtaking.expedit@velarivoyages.com",
          contactNumber: "+1-888-928-8396"
        }
      }
    ],
    title: "Breathtaking Expedition of the Bamboo Shores",
    description: "This panorama takes you beyond the ordinary, starting in Bangkok. With breathtaking stops in Kyoto, Yokohama, Bali, Shanghai, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.0,
    tags: ["VIP"]
  }
];
