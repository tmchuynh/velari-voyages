import { Cruise } from "@/lib/interfaces/services/cruises";

export const osloCruises: Cruise[] = [
{
    basePrice: 3603,
    departureLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Malta",
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
    "city": "Oslo",
    "country": "",
    "region": "",
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
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "An escape like no other begins in Oslo, where your adventure launches into the heart of Oslo. Discover the magic of Athens, Malta with style and sophistication.",
      distance: "780 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Oslo to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Chen Bennett",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic","Lao","Vietnamese"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "extraordinary.renais@velarivoyages.com",
          contactNumber: "+1-855-299-2755"
        }
      }
    ],
    title: "Extraordinary Renaissance of the Exotic Realms",
    description: "An escape like no other begins in Oslo, where your adventure launches into the heart of Oslo. Discover the magic of Athens, Malta with style and sophistication.",
    rating: 4.1,
    tags: ["tropical","cruise-holiday"]
  },
  {
    basePrice: 4322,
    departureLocation: {
  "city": "Oslo",
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Oslo",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Athens",
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
      description: "Embark on an unforgettable symphony from the vibrant port of Oslo, where you'll discover hidden gems and iconic landmarks across the Oslo region. With stops at Lisbon, Athens, Milan, this journey combines cultural immersion with breathtaking scenery.",
      distance: "721 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Oslo to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Athens to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Lisbon"
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
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Jameson Marshall",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic","Lao","Vietnamese"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "legendary.reflection@velarivoyages.com",
          contactNumber: "+1-440-988-2580"
        }
      }
    ],
    title: "Legendary Reflection of the Exotic Realms",
    description: "Embark on an unforgettable symphony from the vibrant port of Oslo, where you'll discover hidden gems and iconic landmarks across the Oslo region. With stops at Lisbon, Athens, Milan, this journey combines cultural immersion with breathtaking scenery.",
    rating: 5.0,
    tags: ["luxury","wildlife"]
  },
  {
    basePrice: 9020,
    departureLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Oslo",
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
    "city": "Oslo",
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
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
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
    "city": "Oslo",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Leave ordinary behind as you sail from Oslo across the captivating Oslo. Discover the distinctive personality of each destination, from Barcelona, Rome, Santorini.",
      distance: "729 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Oslo to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Santorini to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gregory Wells",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic","Lao","Vietnamese"],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "exquisite.enigma.of.@velarivoyages.com",
          contactNumber: "+1-697-200-4252"
        }
      }
    ],
    title: "Exquisite Enigma of the Exotic Realms",
    description: "Leave ordinary behind as you sail from Oslo across the captivating Oslo. Discover the distinctive personality of each destination, from Barcelona, Rome, Santorini.",
    rating: 4.6,
    tags: ["short-getaway","cruise-adventure"]
  },
  {
    basePrice: 7430,
    departureLocation: {
  "city": "Oslo",
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Oslo",
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
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  }
],
      description: "Step into a world of elegance and exploration from Oslo. This exploration through the Oslo unveils stunning stops including Dubrovnik, Florence, all with first-class service.",
      distance: "1413 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Oslo to Dubrovnik"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Florence"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Florence"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Robert Henderson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic","Lao","Vietnamese"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "enchanting.elevation@velarivoyages.com",
          contactNumber: "+1-654-827-3688"
        }
      }
    ],
    title: "Enchanting Elevation of the Exotic Realms",
    description: "Step into a world of elegance and exploration from Oslo. This exploration through the Oslo unveils stunning stops including Dubrovnik, Florence, all with first-class service.",
    rating: 4.4,
    tags: ["wellness","nature"]
  },
  {
    basePrice: 3652,
    departureLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Malta",
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
    "city": "Oslo",
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
  },
  {
    "city": "Malta",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Savor each moment of this velvet escape through Oslo, starting in Oslo. Visit renowned locations like Florence, Dubrovnik, Milan, Malta, where adventure and relaxation intertwine.",
      distance: "948 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Oslo to Florence"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Florence to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Milan"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Milan to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Rajesh Collins",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic","Lao","Vietnamese"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/26.jpg",
        contact: {
          contactEmail: "heavenly.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-189-363-3189"
        }
      }
    ],
    title: "Heavenly Mirage of the Exotic Realms",
    description: "Savor each moment of this velvet escape through Oslo, starting in Oslo. Visit renowned locations like Florence, Dubrovnik, Milan, Malta, where adventure and relaxation intertwine.",
    rating: 4.8,
    tags: ["cruise-excursion","themed-cruise","short-getaway"]
  },
  {
    basePrice: 8241,
    departureLocation: {
  "city": "Oslo",
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Oslo",
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
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Escape into the calm waters of Oslo with this epic journey from Oslo. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Mykonos, Barcelona, Lisbon.",
      distance: "1049 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Oslo to Mykonos"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Eugene Stewart",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic","Lao","Vietnamese"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "ornate.adventure.of.@velarivoyages.com",
          contactNumber: "+1-617-984-8553"
        }
      }
    ],
    title: "Ornate Adventure of the Exotic Realms",
    description: "Escape into the calm waters of Oslo with this epic journey from Oslo. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Mykonos, Barcelona, Lisbon.",
    rating: 4.8,
    tags: ["expedition","general"]
  },
  {
    basePrice: 6282,
    departureLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Oslo",
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
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  },
  {
    "city": "Oslo",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Start in the vibrant city of Oslo and venture into the iconic Oslo. Discover authentic local cultures, cuisine, and coastal wonders in Rome, Florence.",
      distance: "565 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Oslo to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Florence"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Florence to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Austin Spencer",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic","Lao","Vietnamese"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "ornate.tranquility.o@velarivoyages.com",
          contactNumber: "+1-153-345-8836"
        }
      }
    ],
    title: "Ornate Tranquility of the Exotic Realms",
    description: "Start in the vibrant city of Oslo and venture into the iconic Oslo. Discover authentic local cultures, cuisine, and coastal wonders in Rome, Florence.",
    rating: 4.6,
    tags: ["cruise-adventure"]
  },
  {
    basePrice: 5801,
    departureLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
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
    "city": "Oslo",
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
  },
  {
    "city": "Oslo",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Leave ordinary behind as you sail from Oslo across the captivating Oslo. Discover the distinctive personality of each destination, from Milan, Lisbon.",
      distance: "628 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Oslo to Milan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Milan to Lisbon"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Louis Dixon",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic","Lao","Vietnamese"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "exquisite.sanctum.of@velarivoyages.com",
          contactNumber: "+1-270-910-2497"
        }
      }
    ],
    title: "Exquisite Sanctum of the Exotic Realms",
    description: "Leave ordinary behind as you sail from Oslo across the captivating Oslo. Discover the distinctive personality of each destination, from Milan, Lisbon.",
    rating: 4.7,
    tags: ["cruise-getaway"]
  },
  {
    basePrice: 3815,
    departureLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Oslo",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Oslo",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This panorama takes you beyond the ordinary, starting in Oslo. With breathtaking stops in Venice, Mykonos, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1443 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Oslo to Venice"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Venice to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Hudson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic","Lao","Vietnamese"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "exquisite.journey.of@velarivoyages.com",
          contactNumber: "+1-515-216-5958"
        }
      }
    ],
    title: "Exquisite Journey of the Exotic Realms",
    description: "This panorama takes you beyond the ordinary, starting in Oslo. With breathtaking stops in Venice, Mykonos, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.3,
    tags: ["culinary","cruise-excursion"]
  },
  {
    basePrice: 4524,
    departureLocation: {
  "city": "Oslo",
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
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Oslo",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
      description: "From the lively departure port of Oslo, this curated tide showcases the finest of Oslo. With visits to Venice, Florence, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "501 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Oslo to Venice"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Venice to Florence"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Florence"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Jack Holloway",
        role: "Guest Services Agent (Shoreside)",
        languages: ["Arabic","Lao","Vietnamese"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "celestial.drift.of.t@velarivoyages.com",
          contactNumber: "+1-788-541-2516"
        }
      }
    ],
    title: "Celestial Drift of the Exotic Realms",
    description: "From the lively departure port of Oslo, this curated tide showcases the finest of Oslo. With visits to Venice, Florence, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.3,
    tags: ["seasonal","cruise-excursion","VIP"]
  },
  {
    basePrice: 2994,
    departureLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Oslo",
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
    "city": "Oslo",
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
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
    "city": "Oslo",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set course from Oslo for an inspiring sun-drenched journey across Oslo. Whether exploring ancient ruins in Dubrovnik or soaking up coastal views in Barcelona, every day offers a perfect mix of discovery and relaxation.",
      distance: "1133 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Oslo to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Malta to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
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
    "description": "Exploring Malta"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Emily Clark",
        role: "Cruise Specialist",
        languages: ["Khmer","Swahili","Swahili"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "secluded.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-827-604-4751"
        }
      }
    ],
    title: "Secluded Mirage of the Exotic Realms",
    description: "Set course from Oslo for an inspiring sun-drenched journey across Oslo. Whether exploring ancient ruins in Dubrovnik or soaking up coastal views in Barcelona, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.9,
    tags: ["romantic","holiday-cruise"]
  },
  {
    basePrice: 6506,
    departureLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Santorini",
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
    "city": "Oslo",
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
    "city": "Dubrovnik",
    "country": "",
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
  }
],
      description: "Let the spirit of exploration guide your pristine journey from Oslo. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Mykonos, Dubrovnik, Santorini.",
      distance: "1477 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Oslo to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Oslo"
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
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Harper Fletcher",
        role: "Cruise Specialist",
        languages: ["Khmer","Swahili","Swahili"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "opulent.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-309-164-6026"
        }
      }
    ],
    title: "Opulent Odyssey of the Exotic Realms",
    description: "Let the spirit of exploration guide your pristine journey from Oslo. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Mykonos, Dubrovnik, Santorini.",
    rating: 4.2,
    tags: ["repositioning","historical","culinary"]
  },
  {
    basePrice: 1896,
    departureLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
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
    "city": "Oslo",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
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
    "city": "Oslo",
    "country": "",
    "region": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Launch into adventure from Oslo and sail deep into the heart of the Oslo. With ports of call like Venice, Florence, Lisbon, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "872 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Oslo to Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Venice to Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Florence to Lisbon"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jennifer Stewart",
        role: "Cruise Specialist",
        languages: ["Khmer","Swahili","Swahili"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "secluded.excursion.o@velarivoyages.com",
          contactNumber: "+1-275-224-1427"
        }
      }
    ],
    title: "Secluded Excursion of the Exotic Realms",
    description: "Launch into adventure from Oslo and sail deep into the heart of the Oslo. With ports of call like Venice, Florence, Lisbon, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.1,
    tags: ["exclusive","expedition","cruise-ship"]
  },
  {
    basePrice: 4602,
    departureLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "coordinates": {
    "latitude": 41.390205,
    "longitude": 2.154007
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Oslo",
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
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  }
],
      description: "Set sail from historic Oslo for a modern escape into the Oslo. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Florence, Barcelona.",
      distance: "653 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Oslo to Florence"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Florence to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Stella Dixon",
        role: "Cruise Specialist",
        languages: ["Khmer","Swahili","Swahili"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "horizonkissed.sanctu@velarivoyages.com",
          contactNumber: "+1-591-808-5934"
        }
      }
    ],
    title: "Horizon-Kissed Sanctuary of the Exotic Realms",
    description: "Set sail from historic Oslo for a modern escape into the Oslo. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Florence, Barcelona.",
    rating: 4.9,
    tags: ["expedition"]
  },
  {
    basePrice: 7710,
    departureLocation: {
  "city": "Oslo",
  "country": "",
  "region": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    arrivalLocation: {
  "city": "Venice",
  "country": "Italy",
  "coordinates": {
    "latitude": 45.4408,
    "longitude": 12.3155
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Oslo",
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
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Set sail from Oslo for a voyage like no other. From the picturesque landscapes of Malta to the lively ambiance of Venice, this extraordinary cruise will redefine your view of Oslo.",
      distance: "956 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Oslo to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nicole Lawson",
        role: "Cruise Specialist",
        languages: ["Khmer","Swahili","Swahili"],
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "extraordinary.eclips@velarivoyages.com",
          contactNumber: "+1-664-452-5731"
        }
      }
    ],
    title: "Extraordinary Eclipse of the Exotic Realms",
    description: "Set sail from Oslo for a voyage like no other. From the picturesque landscapes of Malta to the lively ambiance of Venice, this extraordinary cruise will redefine your view of Oslo.",
    rating: 4.6,
    tags: ["cruise-excursion"]
  }
];
