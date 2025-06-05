import { Cruise } from "@/lib/interfaces/services/cruises";

export const quebecCityCruises: Cruise[] = [
  {
    basePrice: 6040,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Santorini",
  "country": "Greece",
  "coordinates": {
    "latitude": 36.3932,
    "longitude": 25.4615
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fjords-tour",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  }
],
      description: "This tranquil pilgrimage begins in Quebec City and ventures deep into the heart of East Coast Canada. Wander through colorful markets, historic streets, and serene coastlines at Rome, Dubrovnik, Santorini.",
      distance: "1029 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Graves",
        role: "Sales Consultant",
        languages: ["English","Guarani","French","Portuguese","Haitian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "immersive.passage.of@velarivoyages.com",
          contactNumber: "+1-779-184-7621"
        }
      }
    ],
    title: "Immersive Passage of the Snow-Wrapped Citadel",
    description: "This tranquil pilgrimage begins in Quebec City and ventures deep into the heart of East Coast Canada. Wander through colorful markets, historic streets, and serene coastlines at Rome, Dubrovnik, Santorini.",
    rating: 4.4,
    tags: ["adventure","VIP","cultural"]
  },
  {
    basePrice: 9738,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
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
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Begin your journey in Quebec City, where tradition meets travel. This immersive wanderlust reveals the finest of East Coast Canada, from the beaches of Rome to the streets of Malta.",
      distance: "931 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Rome to Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Malta to Milan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Milan to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Claire Reeves",
        role: "Sales Consultant",
        languages: ["English","Guarani","French","Portuguese","Haitian"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "whispering.passage.o@velarivoyages.com",
          contactNumber: "+1-726-219-7338"
        }
      }
    ],
    title: "Whispering Passage of the Seafaring Legacies",
    description: "Begin your journey in Quebec City, where tradition meets travel. This immersive wanderlust reveals the finest of East Coast Canada, from the beaches of Rome to the streets of Malta.",
    rating: 4.1,
    tags: ["repositioning"]
  },
  {
    basePrice: 2011,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "holiday-cruise",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
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
      description: "Escape the everyday with this oceanic journey through East Coast Canada, departing from Quebec City. You'll visit Barcelona, Dubrovnik, Florence, where every stop is a new adventure.",
      distance: "1280 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Florence"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Florence"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Charlotte Hawkins",
        role: "Sales Consultant",
        languages: ["English","Guarani","French","Portuguese","Haitian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/91.jpg",
        contact: {
          contactEmail: "enchanting.requiem.o@velarivoyages.com",
          contactNumber: "+1-385-743-7836"
        }
      }
    ],
    title: "Enchanting Requiem of the Old World’s Flame",
    description: "Escape the everyday with this oceanic journey through East Coast Canada, departing from Quebec City. You'll visit Barcelona, Dubrovnik, Florence, where every stop is a new adventure.",
    rating: 4.4,
    tags: ["glacier-cruise","themed-cruise","tropical"]
  },
  {
    basePrice: 5197,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
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
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  }
],
      description: "Cruise into cultural richness aboard this refined oasis departing Quebec City. Savor local cuisine and uncover regional beauty from Dubrovnik to Rome.",
      distance: "688 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Rome to Venice"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Venice"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Maya Murray",
        role: "Sales Consultant",
        languages: ["English","Guarani","French","Portuguese","Haitian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "panoramic.solstice.o@velarivoyages.com",
          contactNumber: "+1-733-901-5854"
        }
      }
    ],
    title: "Panoramic Solstice of the Storybook Villages",
    description: "Cruise into cultural richness aboard this refined oasis departing Quebec City. Savor local cuisine and uncover regional beauty from Dubrovnik to Rome.",
    rating: 4.5,
    tags: ["cruise-journey","short-getaway","luxury"]
  },
  {
    basePrice: 8145,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
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
      description: "This luminous zenith begins in Quebec City and ventures deep into the heart of East Coast Canada. Wander through colorful markets, historic streets, and serene coastlines at Dubrovnik, Athens, Barcelona.",
      distance: "1406 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Athens to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Patricia Harper",
        role: "Sales Consultant",
        languages: ["English","Guarani","French","Portuguese","Haitian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "verdant.excursion.of@velarivoyages.com",
          contactNumber: "+1-849-581-3071"
        }
      }
    ],
    title: "Verdant Excursion of the Snow-Wrapped Citadel",
    description: "This luminous zenith begins in Quebec City and ventures deep into the heart of East Coast Canada. Wander through colorful markets, historic streets, and serene coastlines at Dubrovnik, Athens, Barcelona.",
    rating: 5.0,
    tags: ["tropical"]
  },
  {
    basePrice: 1876,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  }
],
      description: "Embark from Quebec City and traverse the East Coast Canada in style. Whether it’s the energy of Mykonos or the calm of Dubrovnik, each destination reveals a new side of paradise.",
      distance: "663 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Mykonos"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Victoria Palmer",
        role: "Sales Consultant",
        languages: ["English","Guarani","French","Portuguese","Haitian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "epic.frontier.of.the@velarivoyages.com",
          contactNumber: "+1-132-236-1891"
        }
      }
    ],
    title: "Epic Frontier of the Celtic Shores",
    description: "Embark from Quebec City and traverse the East Coast Canada in style. Whether it’s the energy of Mykonos or the calm of Dubrovnik, each destination reveals a new side of paradise.",
    rating: 4.9,
    tags: ["themed-cruise","relaxation","anniversary-cruise"]
  },
  {
    basePrice: 1275,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Mykonos",
  "country": "Greece",
  "coordinates": {
    "latitude": 37.4467,
    "longitude": 25.3289
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "country": "Greece",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
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
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  }
],
      description: "Join us in Quebec City for a tide of a lifetime. Sail across the serene waters of East Coast Canada, stopping at ports like Lisbon, Athens, Rome, Mykonos where timeless traditions meet modern luxuries.",
      distance: "1181 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Rome to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Stewart",
        role: "Sales Consultant",
        languages: ["English","Guarani","French","Portuguese","Haitian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "sublime.resonance.of@velarivoyages.com",
          contactNumber: "+1-202-289-6818"
        }
      }
    ],
    title: "Sublime Resonance of the Old World’s Flame",
    description: "Join us in Quebec City for a tide of a lifetime. Sail across the serene waters of East Coast Canada, stopping at ports like Lisbon, Athens, Rome, Mykonos where timeless traditions meet modern luxuries.",
    rating: 4.1,
    tags: ["cruise-ship"]
  },
  {
    basePrice: 4054,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Rome",
  "country": "Italy",
  "coordinates": {
    "latitude": 41.9028,
    "longitude": 12.4964
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  }
],
      description: "From the lively departure port of Quebec City, this curated renaissance showcases the finest of East Coast Canada. With visits to Barcelona, Dubrovnik, Rome, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "776 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Rome"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Isabella Clark",
        role: "Sales Consultant",
        languages: ["English","Guarani","French","Portuguese","Haitian"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "celestial.requiem.of@velarivoyages.com",
          contactNumber: "+1-297-979-7457"
        }
      }
    ],
    title: "Celestial Requiem of the Snow-Wrapped Citadel",
    description: "From the lively departure port of Quebec City, this curated renaissance showcases the finest of East Coast Canada. With visits to Barcelona, Dubrovnik, Rome, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.4,
    tags: ["historical"]
  },
  {
    basePrice: 8813,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "anniversary-cruise",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Experience coastal elegance on this elevation from Quebec City, where the journey through East Coast Canada includes stops in Rome, Milan, each more enchanting than the last.",
      distance: "1019 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Rome to Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Milan to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Amelia Gardner",
        role: "Sales Consultant",
        languages: ["English","Guarani","French","Portuguese","Haitian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "majestic.excursion.o@velarivoyages.com",
          contactNumber: "+1-250-587-2649"
        }
      }
    ],
    title: "Majestic Excursion of the French-Canadian Crown",
    description: "Experience coastal elegance on this elevation from Quebec City, where the journey through East Coast Canada includes stops in Rome, Milan, each more enchanting than the last.",
    rating: 4.2,
    tags: ["cruise-ship","cruise-adventure","romantic"]
  },
  {
    basePrice: 8457,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    arrivalLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "East Coast Canada",
  "coordinates": {
    "latitude": 46.8139,
    "longitude": -71.2082
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
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
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "East Coast Canada",
    "coordinates": {
      "latitude": 46.8139,
      "longitude": -71.2082
    }
  }
],
      description: "Step aboard in Quebec City and begin a mythic journey through the scenic East Coast Canada. From historic cities to coastal hideaways like Rome, Mykonos, every day is unforgettable.",
      distance: "949 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Quebec City to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Quebec City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Quebec City"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Olivia Morgan",
        role: "Sales Consultant",
        languages: ["English","Guarani","French","Portuguese","Haitian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "idyllic.embrace.of.t@velarivoyages.com",
          contactNumber: "+1-576-580-6147"
        }
      }
    ],
    title: "Idyllic Embrace of the Frosted Charm",
    description: "Step aboard in Quebec City and begin a mythic journey through the scenic East Coast Canada. From historic cities to coastal hideaways like Rome, Mykonos, every day is unforgettable.",
    rating: 4.3,
    tags: ["romantic","cruise"]
  }
];
