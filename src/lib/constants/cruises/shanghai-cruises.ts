import { Cruise } from "@/lib/interfaces/services/cruises";

export const shanghaiCruises: Cruise[] = [
{
    basePrice: 5963,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Dubrovnik",
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
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  },
  {
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Unwind and explore on this elevation through Shanghai, departing from Shanghai. With every stop—from Mykonos to Dubrovnik—you’ll collect memories that last a lifetime.",
      distance: "1195 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Florence to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Juan Gibson",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "spectacular.mythos.o@velarivoyages.com",
          contactNumber: "+1-132-611-1039"
        }
      }
    ],
    title: "Spectacular Mythos of the Exotic Realms",
    description: "Unwind and explore on this elevation through Shanghai, departing from Shanghai. With every stop—from Mykonos to Dubrovnik—you’ll collect memories that last a lifetime.",
    rating: 4.2,
    tags: ["expedition","historical","cruise-journey"]
  },
  {
    basePrice: 3827,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Florence",
  "country": "Italy",
  "coordinates": {
    "latitude": 43.769562,
    "longitude": 11.255814
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  }
],
      description: "Sail from Shanghai into a world of wonder. The Shanghai beckons with unforgettable ports like Milan, Athens, Florence, where every view is picture-perfect and every moment is priceless.",
      distance: "825 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Milan to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Athens to Florence"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Florence"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elijah Collins",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "eternal.saga.of.the.@velarivoyages.com",
          contactNumber: "+1-411-914-8664"
        }
      }
    ],
    title: "Eternal Saga of the Exotic Realms",
    description: "Sail from Shanghai into a world of wonder. The Shanghai beckons with unforgettable ports like Milan, Athens, Florence, where every view is picture-perfect and every moment is priceless.",
    rating: 4.9,
    tags: ["cultural"]
  },
  {
    basePrice: 3314,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
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
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail away from Shanghai into the beautiful expanse of Shanghai. Along the way, enjoy rich cultural experiences in Milan, Rome, Dubrovnik, where history, nature, and cuisine collide.",
      distance: "699 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Milan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Milan to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carter Montgomery",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/92.jpg",
        contact: {
          contactEmail: "idyllic.realm.of.the@velarivoyages.com",
          contactNumber: "+1-103-311-7252"
        }
      }
    ],
    title: "Idyllic Realm of the Exotic Realms",
    description: "Sail away from Shanghai into the beautiful expanse of Shanghai. Along the way, enjoy rich cultural experiences in Milan, Rome, Dubrovnik, where history, nature, and cuisine collide.",
    rating: 4.4,
    tags: ["short-getaway","cruise-holiday"]
  },
  {
    basePrice: 5265,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set sail from historic Shanghai for a modern escape into the Shanghai. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Milan, Dubrovnik, Athens.",
      distance: "753 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Milan to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Louis Dunn",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "golden.mirage.of.the@velarivoyages.com",
          contactNumber: "+1-422-648-2653"
        }
      }
    ],
    title: "Golden Mirage of the Exotic Realms",
    description: "Set sail from historic Shanghai for a modern escape into the Shanghai. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Milan, Dubrovnik, Athens.",
    rating: 4.7,
    tags: ["short-getaway","glacier-cruise"]
  },
  {
    basePrice: 3525,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
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
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Start in the vibrant city of Shanghai and venture into the iconic Shanghai. Discover authentic local cultures, cuisine, and coastal wonders in Florence, Lisbon.",
      distance: "887 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Florence"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Florence to Lisbon"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jerry Reeves",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "infinite.zenith.of.t@velarivoyages.com",
          contactNumber: "+1-831-777-7788"
        }
      }
    ],
    title: "Infinite Zenith of the Exotic Realms",
    description: "Start in the vibrant city of Shanghai and venture into the iconic Shanghai. Discover authentic local cultures, cuisine, and coastal wonders in Florence, Lisbon.",
    rating: 4.7,
    tags: ["short-getaway","nature","cruise-excursion"]
  },
  {
    basePrice: 3328,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
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
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Depart from Shanghai on this thoughtfully designed voyage across the Shanghai. Savor coastal charm, cultural treasures, and ocean views with stops at Barcelona, Florence, Rome.",
      distance: "951 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Florence to Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Rome to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Logan Clark",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "pearlescent.resonanc@velarivoyages.com",
          contactNumber: "+1-796-968-3150"
        }
      }
    ],
    title: "Pearlescent Resonance of the Exotic Realms",
    description: "Depart from Shanghai on this thoughtfully designed voyage across the Shanghai. Savor coastal charm, cultural treasures, and ocean views with stops at Barcelona, Florence, Rome.",
    rating: 4.1,
    tags: ["themed-cruise","historical"]
  },
  {
    basePrice: 3762,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
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
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Escape the everyday with this enchanting journey through Shanghai, departing from Shanghai. You'll visit Santorini, Florence, Milan, where every stop is a new adventure.",
      distance: "1453 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Florence to Milan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Milan to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ethan Payne",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
        contact: {
          contactEmail: "captivating.passage.@velarivoyages.com",
          contactNumber: "+1-637-430-9745"
        }
      }
    ],
    title: "Captivating Passage of the Exotic Realms",
    description: "Escape the everyday with this enchanting journey through Shanghai, departing from Shanghai. You'll visit Santorini, Florence, Milan, where every stop is a new adventure.",
    rating: 4.3,
    tags: ["long-distance","exclusive"]
  },
  {
    basePrice: 7534,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This pearlescent cruise from Shanghai is your ticket to the captivating charm of the Shanghai. Discover the delights of Mykonos, Rome with enriching excursions and award-winning service.",
      distance: "709 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Rome to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Daniel Harper",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "mythic.elevation.of.@velarivoyages.com",
          contactNumber: "+1-434-778-8904"
        }
      }
    ],
    title: "Mythic Elevation of the Exotic Realms",
    description: "This pearlescent cruise from Shanghai is your ticket to the captivating charm of the Shanghai. Discover the delights of Mykonos, Rome with enriching excursions and award-winning service.",
    rating: 4.6,
    tags: ["glacier-cruise"]
  },
  {
    basePrice: 5328,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
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
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Start in the vibrant city of Shanghai and venture into the iconic Shanghai. Discover authentic local cultures, cuisine, and coastal wonders in Milan, Santorini.",
      distance: "1144 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Milan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Milan to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Albert Keller",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "oceanic.drift.of.the@velarivoyages.com",
          contactNumber: "+1-667-108-3359"
        }
      }
    ],
    title: "Oceanic Drift of the Exotic Realms",
    description: "Start in the vibrant city of Shanghai and venture into the iconic Shanghai. Discover authentic local cultures, cuisine, and coastal wonders in Milan, Santorini.",
    rating: 4.7,
    tags: ["anniversary-cruise"]
  },
  {
    basePrice: 2999,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
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
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Santorini",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Athens",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin an epic enigma from Shanghai, where the seas meet culture. Visit the remarkable ports of Santorini, Athens while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "661 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Athens to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Grayson Curtis",
        role: "Travel Advisor",
        languages: ["Malay"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/25.jpg",
        contact: {
          contactEmail: "immersive.tide.of.th@velarivoyages.com",
          contactNumber: "+1-175-857-1779"
        }
      }
    ],
    title: "Immersive Tide of the Exotic Realms",
    description: "Begin an epic enigma from Shanghai, where the seas meet culture. Visit the remarkable ports of Santorini, Athens while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.4,
    tags: ["anniversary-cruise","short-getaway","seasonal"]
  },
  {
    basePrice: 2635,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Milan",
  "country": "Italy",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "Unwind and explore on this zenith through Shanghai, departing from Shanghai. With every stop—from Dubrovnik to Milan—you’ll collect memories that last a lifetime.",
      distance: "855 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Margaret Mitchell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Spanish","Portuguese","Mandarin"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
        contact: {
          contactEmail: "radiancedrenched.ele@velarivoyages.com",
          contactNumber: "+1-506-269-7382"
        }
      }
    ],
    title: "Radiance-Drenched Elevation of the Exotic Realms",
    description: "Unwind and explore on this zenith through Shanghai, departing from Shanghai. With every stop—from Dubrovnik to Milan—you’ll collect memories that last a lifetime.",
    rating: 4.3,
    tags: ["cruise-getaway","romantic","luxury"]
  },
  {
    basePrice: 9257,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Begin your serenade in Shanghai, a gateway to the soul of Shanghai. Enjoy days spent exploring Milan, Lisbon and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1211 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Milan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Milan to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jessica Jennings",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Spanish","Portuguese","Mandarin"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "exquisite.eclipse.of@velarivoyages.com",
          contactNumber: "+1-503-389-6537"
        }
      }
    ],
    title: "Exquisite Eclipse of the Exotic Realms",
    description: "Begin your serenade in Shanghai, a gateway to the soul of Shanghai. Enjoy days spent exploring Milan, Lisbon and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.1,
    tags: ["glacier-cruise","cruise","weekend-cruise"]
  },
  {
    basePrice: 9449,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
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
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Dubrovnik",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Savor each moment of this idyllic escape through Shanghai, starting in Shanghai. Visit renowned locations like Rome, Dubrovnik, Malta, where adventure and relaxation intertwine.",
      distance: "1036 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Malta to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Ellis",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Spanish","Portuguese","Mandarin"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "idyllic.arcadia.of.t@velarivoyages.com",
          contactNumber: "+1-740-573-3433"
        }
      }
    ],
    title: "Idyllic Arcadia of the Exotic Realms",
    description: "Savor each moment of this idyllic escape through Shanghai, starting in Shanghai. Visit renowned locations like Rome, Dubrovnik, Malta, where adventure and relaxation intertwine.",
    rating: 4.2,
    tags: ["adventure"]
  },
  {
    basePrice: 8178,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
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
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Mykonos",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Start in the vibrant city of Shanghai and venture into the iconic Shanghai. Discover authentic local cultures, cuisine, and coastal wonders in Mykonos, Barcelona.",
      distance: "596 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ella Dean",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Spanish","Portuguese","Mandarin"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "velvet.labyrinth.of.@velarivoyages.com",
          contactNumber: "+1-809-669-6513"
        }
      }
    ],
    title: "Velvet Labyrinth of the Exotic Realms",
    description: "Start in the vibrant city of Shanghai and venture into the iconic Shanghai. Discover authentic local cultures, cuisine, and coastal wonders in Mykonos, Barcelona.",
    rating: 4.7,
    tags: ["cultural","family-friendly","general"]
  },
  {
    basePrice: 1022,
    departureLocation: {
  "city": "Shanghai",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Florence",
  "country": "Italy",
  "coordinates": {
    "latitude": 43.769562,
    "longitude": 11.255814
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Shanghai",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  }
],
      description: "Depart Shanghai on a relaxing haven through the Shanghai region. Highlights include the stunning coastlines of Malta, Florence, all while enjoying first-class amenities on board.",
      distance: "1013 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Malta to Florence"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Florence"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Naomi Morgan",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Spanish","Portuguese","Mandarin"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "extraordinary.tranqu@velarivoyages.com",
          contactNumber: "+1-175-999-4077"
        }
      }
    ],
    title: "Extraordinary Tranquility of the Exotic Realms",
    description: "Depart Shanghai on a relaxing haven through the Shanghai region. Highlights include the stunning coastlines of Malta, Florence, all while enjoying first-class amenities on board.",
    rating: 4.7,
    tags: ["long-distance","expedition","cruise-getaway"]
  }
];
