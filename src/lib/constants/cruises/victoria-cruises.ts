import { Cruise } from "@/lib/interfaces/services/cruises";

export const victoriaCruises: Cruise[] = [
{
    basePrice: 2004,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
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
      description: "Experience coastal elegance on this serenade from Victoria, where the journey through Alaska includes stops in Seattle, Skagway, each more enchanting than the last.",
      distance: "1044 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Victoria to Seattle"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Seattle to Skagway"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stephen Fletcher",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "ornate.reflection.of@velarivoyages.com",
          contactNumber: "+1-195-547-5094"
        }
      }
    ],
    title: "Ornate Reflection of the Frontier Silence",
    description: "Experience coastal elegance on this serenade from Victoria, where the journey through Alaska includes stops in Seattle, Skagway, each more enchanting than the last.",
    rating: 4.4,
    tags: ["sightseeing"]
  },
  {
    basePrice: 9717,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "Unwind and explore on this panorama through Alaska, departing from Victoria. With every stop—from Glacier Bay to Vancouver—you’ll collect memories that last a lifetime.",
      distance: "703 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Victoria to Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Vancouver"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Gregory Coleman",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "eternal.currents.of.@velarivoyages.com",
          contactNumber: "+1-510-671-5207"
        }
      }
    ],
    title: "Eternal Currents of the Northern Lights",
    description: "Unwind and explore on this panorama through Alaska, departing from Victoria. With every stop—from Glacier Bay to Vancouver—you’ll collect memories that last a lifetime.",
    rating: 4.3,
    tags: ["cruise-line","expedition","cruise"]
  },
  {
    basePrice: 5458,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "city": "Skagway",
    "country": "United States",
    "coordinates": {
      "latitude": 59.4569,
      "longitude": -135.3123
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "Escape the everyday with this celestial journey through Alaska, departing from Victoria. You'll visit Vancouver, Skagway, Ketchikan, where every stop is a new adventure.",
      distance: "1117 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Victoria to Vancouver"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Skagway to Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Vancouver"
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
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Daniel Warren",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "alluring.symphony.of@velarivoyages.com",
          contactNumber: "+1-435-129-2349"
        }
      }
    ],
    title: "Alluring Symphony of the Alpine Seascapes",
    description: "Escape the everyday with this celestial journey through Alaska, departing from Victoria. You'll visit Vancouver, Skagway, Ketchikan, where every stop is a new adventure.",
    rating: 4.7,
    tags: ["short-getaway","seasonal"]
  },
  {
    basePrice: 1576,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
  },
  {
    "city": "Ketchikan",
    "country": "United States",
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
  }
],
      description: "Begin a captivating legacy through the Alaska, departing Victoria. With visits to Glacier Bay, Skagway, Ketchikan, Vancouver, each day brings a new adventure and deeper connection to the region.",
      distance: "770 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Victoria to Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Skagway to Ketchikan"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
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
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Wei Parker",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "opulent.quest.of.the@velarivoyages.com",
          contactNumber: "+1-355-550-5412"
        }
      }
    ],
    title: "Opulent Quest of the Tundra Tides",
    description: "Begin a captivating legacy through the Alaska, departing Victoria. With visits to Glacier Bay, Skagway, Ketchikan, Vancouver, each day brings a new adventure and deeper connection to the region.",
    rating: 4.0,
    tags: ["wildlife","short-getaway","repositioning"]
  },
  {
    basePrice: 8568,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
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
      description: "Board in Victoria for a hand-crafted escape through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Ketchikan, Seattle, Skagway.",
      distance: "558 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Victoria to Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Seattle"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Seattle to Skagway"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joshua Dixon",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "starlit.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-512-582-8396"
        }
      }
    ],
    title: "Starlit Odyssey of the Frontier Silence",
    description: "Board in Victoria for a hand-crafted escape through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Ketchikan, Seattle, Skagway.",
    rating: 4.3,
    tags: ["general"]
  },
  {
    basePrice: 3961,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "city": "Ketchikan",
    "country": "United States",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Embark on an unforgettable mystique from the vibrant port of Victoria, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Skagway, Ketchikan, this journey combines cultural immersion with breathtaking scenery.",
      distance: "797 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Victoria to Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Skagway to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Johnny Parker",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "majestic.exploration@velarivoyages.com",
          contactNumber: "+1-344-629-3565"
        }
      }
    ],
    title: "Majestic Exploration of the Northern Lights",
    description: "Embark on an unforgettable mystique from the vibrant port of Victoria, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Skagway, Ketchikan, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.7,
    tags: ["cultural","luxury"]
  },
  {
    basePrice: 4373,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Board in Victoria for a hand-crafted expedition through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Skagway, Glacier Bay.",
      distance: "823 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Victoria to Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Skagway to Glacier Bay"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jerry Foster",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "luxurious.odyssey.of@velarivoyages.com",
          contactNumber: "+1-269-938-7901"
        }
      }
    ],
    title: "Luxurious Odyssey of the Whale-Rich Waters",
    description: "Board in Victoria for a hand-crafted expedition through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Skagway, Glacier Bay.",
    rating: 4.8,
    tags: ["nature"]
  },
  {
    basePrice: 5059,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
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
  }
],
      description: "Experience the elegance of the seas on this refined tranquility through Alaska, starting from the illustrious port of Victoria. From Ketchikan to Skagway, each destination offers its own story, culture, and breathtaking views.",
      distance: "966 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Victoria to Ketchikan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Skagway"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
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
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Harry Watson",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "spectacular.adventur@velarivoyages.com",
          contactNumber: "+1-434-281-1578"
        }
      }
    ],
    title: "Spectacular Adventure of the Frozen Frontiers",
    description: "Experience the elegance of the seas on this refined tranquility through Alaska, starting from the illustrious port of Victoria. From Ketchikan to Skagway, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.6,
    tags: ["anniversary-cruise"]
  },
  {
    basePrice: 4920,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "This starlit cruise from Victoria is your ticket to the captivating charm of the Alaska. Discover the delights of Vancouver, Ketchikan with enriching excursions and award-winning service.",
      distance: "677 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Victoria to Vancouver"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Ketchikan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "George Hamilton",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "alluring.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-584-797-9961"
        }
      }
    ],
    title: "Alluring Odyssey of the The Last Frontier",
    description: "This starlit cruise from Victoria is your ticket to the captivating charm of the Alaska. Discover the delights of Vancouver, Ketchikan with enriching excursions and award-winning service.",
    rating: 4.7,
    tags: ["long-distance","sightseeing"]
  },
  {
    basePrice: 5326,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Start in the vibrant city of Victoria and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Skagway, Juneau, Sitka.",
      distance: "868 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Victoria to Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Skagway to Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Juneau to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nicholas Parker",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "panoramic.labyrinth.@velarivoyages.com",
          contactNumber: "+1-389-684-8130"
        }
      }
    ],
    title: "Panoramic Labyrinth of the Carved Ice Cathedrals",
    description: "Start in the vibrant city of Victoria and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Skagway, Juneau, Sitka.",
    rating: 4.3,
    tags: ["short-getaway"]
  },
  {
    basePrice: 9276,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "city": "Skagway",
    "country": "United States",
    "coordinates": {
      "latitude": 59.4569,
      "longitude": -135.3123
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "Depart from the iconic port of Victoria and sail through the enchanting Alaska. Explore vibrant destinations like Sitka, Skagway, each offering its own unique charm and local flair.",
      distance: "734 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Victoria to Sitka"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Sitka to Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Skagway to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Austin West",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/51.jpg",
        contact: {
          contactEmail: "dreamlike.sojourn.of@velarivoyages.com",
          contactNumber: "+1-777-952-4904"
        }
      }
    ],
    title: "Dreamlike Sojourn of the Wilderness Reaches",
    description: "Depart from the iconic port of Victoria and sail through the enchanting Alaska. Explore vibrant destinations like Sitka, Skagway, each offering its own unique charm and local flair.",
    rating: 4.3,
    tags: ["cruise-vacation","general"]
  },
  {
    basePrice: 5337,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "This alluring cruise from Victoria is your ticket to the captivating charm of the Alaska. Discover the delights of Vancouver, Juneau with enriching excursions and award-winning service.",
      distance: "799 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Victoria to Vancouver"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Juneau"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Juneau to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Ronald Stewart",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "tranquil.renaissance@velarivoyages.com",
          contactNumber: "+1-803-219-3263"
        }
      }
    ],
    title: "Tranquil Renaissance of the Whale-Rich Waters",
    description: "This alluring cruise from Victoria is your ticket to the captivating charm of the Alaska. Discover the delights of Vancouver, Juneau with enriching excursions and award-winning service.",
    rating: 4.1,
    tags: ["VIP","cruise-ship","themed-cruise"]
  },
  {
    basePrice: 4617,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "city": "Ketchikan",
    "country": "United States",
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
  }
],
      description: "Your quest begins in Victoria, where every sunset on the Alaska horizon promises another day of discovery—from Juneau, Ketchikan, Seattle to hidden ports of charm.",
      distance: "928 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Victoria to Juneau"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Juneau to Ketchikan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
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
        name: "Ralph Cooper",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/25.jpg",
        contact: {
          contactEmail: "ornate.frontier.of.t@velarivoyages.com",
          contactNumber: "+1-798-648-3560"
        }
      }
    ],
    title: "Ornate Frontier of the Frontier Silence",
    description: "Your quest begins in Victoria, where every sunset on the Alaska horizon promises another day of discovery—from Juneau, Ketchikan, Seattle to hidden ports of charm.",
    rating: 4.4,
    tags: ["short-getaway","cruise-holiday","family-friendly"]
  },
  {
    basePrice: 5147,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "This inspiring quest departs from Victoria, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Skagway, Vancouver.",
      distance: "1379 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Victoria to Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Skagway to Vancouver"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Victor Crawford",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "harmonic.renaissance@velarivoyages.com",
          contactNumber: "+1-305-219-2733"
        }
      }
    ],
    title: "Harmonic Renaissance of the Frozen Frontiers",
    description: "This inspiring quest departs from Victoria, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Skagway, Vancouver.",
    rating: 4.3,
    tags: ["cruise"]
  },
  {
    basePrice: 3661,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
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
      description: "From the lively departure port of Victoria, this curated expedition showcases the finest of Alaska. With visits to Seattle, Glacier Bay, Sitka, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1450 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Victoria to Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Justin Mason",
        role: "Cruise Specialist",
        languages: ["English","Italian","Chinese","Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "luxurious.wanderlust@velarivoyages.com",
          contactNumber: "+1-110-590-7801"
        }
      }
    ],
    title: "Luxurious Wanderlust of the Carved Ice Cathedrals",
    description: "From the lively departure port of Victoria, this curated expedition showcases the finest of Alaska. With visits to Seattle, Glacier Bay, Sitka, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.8,
    tags: ["seasonal","expedition"]
  },
  {
    basePrice: 7793,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "city": "Seattle",
    "country": "United States",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Depart Victoria on a relaxing whisper through the Alaska region. Highlights include the stunning coastlines of Skagway, Seattle, all while enjoying first-class amenities on board.",
      distance: "1468 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Victoria to Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Skagway to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jane Fox",
        role: "Cruise Specialist",
        languages: ["English","Spanish","German"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/85.jpg",
        contact: {
          contactEmail: "golden.enigma.of.the@velarivoyages.com",
          contactNumber: "+1-237-644-7772"
        }
      }
    ],
    title: "Golden Enigma of the Misty Fjords",
    description: "Depart Victoria on a relaxing whisper through the Alaska region. Highlights include the stunning coastlines of Skagway, Seattle, all while enjoying first-class amenities on board.",
    rating: 4.5,
    tags: ["cruise-excursion","historical","nature"]
  },
  {
    basePrice: 7951,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "city": "Skagway",
    "country": "United States",
    "coordinates": {
      "latitude": 59.4569,
      "longitude": -135.3123
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
      description: "Escape to sea from Victoria on a transcendent voyage exploring the magic of Alaska. Visit unforgettable locales like Vancouver, Skagway, Seattle, where each stop inspires awe.",
      distance: "1157 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Victoria to Vancouver"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Skagway"
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
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Katherine Crawford",
        role: "Cruise Specialist",
        languages: ["English","Spanish","German"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "ornate.panorama.of.t@velarivoyages.com",
          contactNumber: "+1-826-836-1065"
        }
      }
    ],
    title: "Ornate Panorama of the Frozen Frontiers",
    description: "Escape to sea from Victoria on a transcendent voyage exploring the magic of Alaska. Visit unforgettable locales like Vancouver, Skagway, Seattle, where each stop inspires awe.",
    rating: 4.8,
    tags: ["tropical","wellness","general"]
  },
  {
    basePrice: 7924,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
      description: "An unforgettable saga awaits as you cruise from Victoria across Alaska. Dive into history, flavor, and culture with stops including Glacier Bay, Skagway.",
      distance: "878 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Victoria to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Skagway"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
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
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Joan Crawford",
        role: "Cruise Specialist",
        languages: ["English","Spanish","German"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "alluring.pilgrimage.@velarivoyages.com",
          contactNumber: "+1-984-599-5292"
        }
      }
    ],
    title: "Alluring Pilgrimage of the Frontier Silence",
    description: "An unforgettable saga awaits as you cruise from Victoria across Alaska. Dive into history, flavor, and culture with stops including Glacier Bay, Skagway.",
    rating: 4.3,
    tags: ["sightseeing","fall-cruise","cruise-journey"]
  },
  {
    basePrice: 5649,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
      description: "Leave stress behind with this curated zenith from Victoria. Sail across the best of Alaska and explore treasures like Glacier Bay, Skagway, Sitka with comfort and style.",
      distance: "1048 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Victoria to Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Skagway"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Skagway to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Lerato Hayes",
        role: "Cruise Specialist",
        languages: ["English","Spanish","German"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "majestic.renaissance@velarivoyages.com",
          contactNumber: "+1-844-517-8920"
        }
      }
    ],
    title: "Majestic Renaissance of the Icy Passageways",
    description: "Leave stress behind with this curated zenith from Victoria. Sail across the best of Alaska and explore treasures like Glacier Bay, Skagway, Sitka with comfort and style.",
    rating: 4.3,
    tags: ["tropical","seasonal"]
  },
  {
    basePrice: 8568,
    departureLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
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
    "country": "United States",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "Step into a world of elegance and exploration from Victoria. This expedition through the Alaska unveils stunning stops including Glacier Bay, Ketchikan, all with first-class service.",
      distance: "556 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Victoria to Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Ketchikan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Victoria"
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
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Maya Grant",
        role: "Cruise Specialist",
        languages: ["English","Spanish","German"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "legendary.excursion.@velarivoyages.com",
          contactNumber: "+1-494-788-1966"
        }
      }
    ],
    title: "Legendary Excursion of the Frontier Silence",
    description: "Step into a world of elegance and exploration from Victoria. This expedition through the Alaska unveils stunning stops including Glacier Bay, Ketchikan, all with first-class service.",
    rating: 4.4,
    tags: ["cruise-journey","wildlife"]
  }
];
