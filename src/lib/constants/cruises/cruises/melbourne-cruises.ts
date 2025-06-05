import { Cruise } from "@/lib/interfaces/services/cruises";

export const melbourneCruises: Cruise[] = [
  {
    basePrice: 3119,
    departureLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    arrivalLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
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
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  }
],
      description: "Let this ornate voyage redefine your idea of travel. From Melbourne, explore the Asia Pacific in luxurious comfort, stopping at Shanghai, Singapore, Tokyo, Sydney where every port offers a new chapter.",
      distance: "898 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Shanghai"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Singapore"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Singapore to Tokyo"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Sydney"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Sydney to Melbourne"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Shanghai"
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
    "description": "Exploring Tokyo"
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
    "description": "Exploring Melbourne"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lerato Spencer",
        role: "Sales Consultant",
        languages: ["Hindi","Thai","Vietnamese","Urdu","Korean"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "eternal.frontier.of.@velarivoyages.com",
          contactNumber: "+1-824-865-9055"
        }
      }
    ],
    title: "Eternal Frontier of the Zen Shores",
    description: "Let this ornate voyage redefine your idea of travel. From Melbourne, explore the Asia Pacific in luxurious comfort, stopping at Shanghai, Singapore, Tokyo, Sydney where every port offers a new chapter.",
    rating: 4.9,
    tags: ["cruise","romantic"]
  },
  {
    basePrice: 4365,
    departureLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    arrivalLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "city": "Ho Chi Minh City",
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  }
],
      description: "Set off on a wanderlust from Melbourne that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Sydney, Ho Chi Minh City, Kyoto, Auckland.",
      distance: "529 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Melbourne to Sydney"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Sydney to Ho Chi Minh City"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Kyoto"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Kyoto to Auckland"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Auckland to Melbourne"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nora Griffin",
        role: "Sales Consultant",
        languages: ["Hindi","Thai","Vietnamese","Urdu","Korean"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "mythic.realm.of.the.@velarivoyages.com",
          contactNumber: "+1-600-182-1171"
        }
      }
    ],
    title: "Mythic Realm of the Laneway Wonderland",
    description: "Set off on a wanderlust from Melbourne that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Sydney, Ho Chi Minh City, Kyoto, Auckland.",
    rating: 4.7,
    tags: ["general","wellness"]
  },
  {
    basePrice: 7060,
    departureLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    arrivalLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  }
],
      description: "Depart from the iconic port of Melbourne and sail through the enchanting Asia Pacific. Explore vibrant destinations like Auckland, Bali, Bangkok, each offering its own unique charm and local flair.",
      distance: "931 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Auckland to Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Bali to Bangkok"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Melbourne"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bali"
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
    "description": "Exploring Melbourne"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amina Chambers",
        role: "Sales Consultant",
        languages: ["Hindi","Thai","Vietnamese","Urdu","Korean"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/26.jpg",
        contact: {
          contactEmail: "legendary.excursion.@velarivoyages.com",
          contactNumber: "+1-762-848-6212"
        }
      }
    ],
    title: "Legendary Excursion of the Laneway Wonderland",
    description: "Depart from the iconic port of Melbourne and sail through the enchanting Asia Pacific. Explore vibrant destinations like Auckland, Bali, Bangkok, each offering its own unique charm and local flair.",
    rating: 4.8,
    tags: ["family-friendly"]
  },
  {
    basePrice: 6236,
    departureLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    arrivalLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  }
],
      description: "Depart Melbourne on a relaxing quest through the Asia Pacific region. Highlights include the stunning coastlines of Kyoto, Yokohama, Shanghai, all while enjoying first-class amenities on board.",
      distance: "1426 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Kyoto"
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
    "description": "Sailing from Yokohama to Shanghai"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Melbourne"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
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
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Savannah Hawkins",
        role: "Sales Consultant",
        languages: ["Hindi","Thai","Vietnamese","Urdu","Korean"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "mesmerizing.drift.of@velarivoyages.com",
          contactNumber: "+1-595-885-5663"
        }
      }
    ],
    title: "Mesmerizing Drift of the Laneway Wonderland",
    description: "Depart Melbourne on a relaxing quest through the Asia Pacific region. Highlights include the stunning coastlines of Kyoto, Yokohama, Shanghai, all while enjoying first-class amenities on board.",
    rating: 4.0,
    tags: ["cruise-adventure","expedition","repositioning"]
  },
  {
    basePrice: 2709,
    departureLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    arrivalLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  }
],
      description: "Set off on a odyssey from Melbourne that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Bangkok, Sydney, Singapore, Auckland.",
      distance: "1304 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Bangkok"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Sydney"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Sydney to Singapore"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Singapore to Auckland"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Auckland to Melbourne"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Melbourne"
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
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Linda Palmer",
        role: "Sales Consultant",
        languages: ["Hindi","Thai","Vietnamese","Urdu","Korean"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "opulent.renaissance.@velarivoyages.com",
          contactNumber: "+1-101-172-7975"
        }
      }
    ],
    title: "Opulent Renaissance of the Volcanic Outposts",
    description: "Set off on a odyssey from Melbourne that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Bangkok, Sydney, Singapore, Auckland.",
    rating: 4.3,
    tags: ["exclusive"]
  },
  {
    basePrice: 3492,
    departureLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    arrivalLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
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
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  }
],
      description: "Experience coastal elegance on this pulse from Melbourne, where the journey through Asia Pacific includes stops in Kyoto, Bangkok, each more enchanting than the last.",
      distance: "1244 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Kyoto"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Kyoto to Bangkok"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Melbourne"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Sarah Day",
        role: "Sales Consultant",
        languages: ["Hindi","Thai","Vietnamese","Urdu","Korean"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "sundrenched.explorat@velarivoyages.com",
          contactNumber: "+1-581-838-1542"
        }
      }
    ],
    title: "Sun-Drenched Exploration of the Volcanic Outposts",
    description: "Experience coastal elegance on this pulse from Melbourne, where the journey through Asia Pacific includes stops in Kyoto, Bangkok, each more enchanting than the last.",
    rating: 4.9,
    tags: ["family-friendly","romantic","anniversary-cruise"]
  },
  {
    basePrice: 8740,
    departureLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    arrivalLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  }
],
      description: "This extraordinary sojourn from Melbourne offers the ultimate Asia Pacific exploration. Immerse yourself in the rich cultures and stunning landscapes of Shanghai, Sydney and Bali, creating memories that will last a lifetime.",
      distance: "737 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Shanghai"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Sydney"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Sydney to Bali"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Bali to Melbourne"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Shanghai"
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
    "description": "Exploring Bali"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Sandra Palmer",
        role: "Sales Consultant",
        languages: ["Hindi","Thai","Vietnamese","Urdu","Korean"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "majestic.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-597-166-8327"
        }
      }
    ],
    title: "Majestic Sanctuary of the Zen Shores",
    description: "This extraordinary sojourn from Melbourne offers the ultimate Asia Pacific exploration. Immerse yourself in the rich cultures and stunning landscapes of Shanghai, Sydney and Bali, creating memories that will last a lifetime.",
    rating: 4.7,
    tags: ["seasonal","VIP"]
  },
  {
    basePrice: 5207,
    departureLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    arrivalLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  }
],
      description: "Let this refined voyage redefine your idea of travel. From Melbourne, explore the Asia Pacific in luxurious comfort, stopping at Ho Chi Minh City, Hong Kong, Bangkok where every port offers a new chapter.",
      distance: "1400 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Ho Chi Minh City"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Hong Kong"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Bangkok"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Melbourne"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Grace Russell",
        role: "Sales Consultant",
        languages: ["Hindi","Thai","Vietnamese","Urdu","Korean"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "celestial.reunion.of@velarivoyages.com",
          contactNumber: "+1-254-947-2624"
        }
      }
    ],
    title: "Celestial Reunion of the Jade Horizons",
    description: "Let this refined voyage redefine your idea of travel. From Melbourne, explore the Asia Pacific in luxurious comfort, stopping at Ho Chi Minh City, Hong Kong, Bangkok where every port offers a new chapter.",
    rating: 4.3,
    tags: ["short-getaway","cruise-adventure"]
  },
  {
    basePrice: 7030,
    departureLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
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
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
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
    "city": "Hong Kong",
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
      description: "Set off on a serenade from Melbourne that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Bangkok, Hong Kong, Singapore.",
      distance: "1375 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Bangkok"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Hong Kong"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Singapore"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Melbourne"
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
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Singapore"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Julie Hudson",
        role: "Sales Consultant",
        languages: ["Hindi","Thai","Vietnamese","Urdu","Korean"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
        contact: {
          contactEmail: "tidewashed.pulse.of.@velarivoyages.com",
          contactNumber: "+1-227-511-2522"
        }
      }
    ],
    title: "Tide-Washed Pulse of the Lotus-Lined Waters",
    description: "Set off on a serenade from Melbourne that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Bangkok, Hong Kong, Singapore.",
    rating: 4.0,
    tags: ["long-distance","fall-cruise","cultural"]
  },
  {
    basePrice: 9822,
    departureLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": -37.8136,
    "longitude": 144.9631
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
    category: "theme-cruise",
    itinerary: {
      route: [
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
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
    "city": "Shanghai",
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    }
  }
],
      description: "Launch into adventure from Melbourne and sail deep into the heart of the Asia Pacific. With ports of call like Auckland, Shanghai, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1241 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Auckland"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Auckland to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Linda Crawford",
        role: "Sales Consultant",
        languages: ["Hindi","Thai","Vietnamese","Urdu","Korean"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "luminous.infinite.of@velarivoyages.com",
          contactNumber: "+1-532-595-9353"
        }
      }
    ],
    title: "Luminous Infinite of the Sacred Shores",
    description: "Launch into adventure from Melbourne and sail deep into the heart of the Asia Pacific. With ports of call like Auckland, Shanghai, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.2,
    tags: ["romantic","glacier-cruise","culinary"]
  }
];
