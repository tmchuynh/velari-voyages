import { Cruise } from "@/lib/interfaces/services/cruises";

export const ketchikanCruises: Cruise[] = [
{
    basePrice: 9782,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Step into a world of elegance and exploration from Ketchikan. This embrace through the Alaska unveils stunning stops including Juneau, Skagway, Glacier Bay, Vancouver, all with first-class service.",
      distance: "1104 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Juneau"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Juneau to Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Skagway to Glacier Bay"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Vancouver"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Skagway"
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
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Blake Sutton",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/26.jpg",
        contact: {
          contactEmail: "luxurious.exploratio@velarivoyages.com",
          contactNumber: "+1-315-551-9057"
        }
      }
    ],
    title: "Luxurious Exploration of the Carved Ice Cathedrals",
    description: "Step into a world of elegance and exploration from Ketchikan. This embrace through the Alaska unveils stunning stops including Juneau, Skagway, Glacier Bay, Vancouver, all with first-class service.",
    rating: 4.6,
    tags: ["cruise-ship"]
  },
  {
    basePrice: 9033,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Victoria",
  "country": "Canada",
  "coordinates": {
    "latitude": 48.4284,
    "longitude": -123.3656
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "city": "Victoria",
    "country": "Canada",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "Sail into splendor from Ketchikan on a enchanting voyage through Alaska. Let each stop—from Glacier Bay to Skagway—reveal the unique flavors and colors of the region.",
      distance: "564 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Skagway to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
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
        name: "Steven Curtis",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "opulent.tide.of.the.@velarivoyages.com",
          contactNumber: "+1-290-104-6732"
        }
      }
    ],
    title: "Opulent Tide of the Frontier Silence",
    description: "Sail into splendor from Ketchikan on a enchanting voyage through Alaska. Let each stop—from Glacier Bay to Skagway—reveal the unique flavors and colors of the region.",
    rating: 4.3,
    tags: ["expedition"]
  },
  {
    basePrice: 3658,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
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
      description: "Set sail from historic Ketchikan for a modern escape into the Alaska. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Skagway, Seattle.",
      distance: "1318 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Skagway"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Skagway to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Christian Fisher",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
        contact: {
          contactEmail: "floating.tranquility@velarivoyages.com",
          contactNumber: "+1-849-468-1685"
        }
      }
    ],
    title: "Floating Tranquility of the Frozen Frontiers",
    description: "Set sail from historic Ketchikan for a modern escape into the Alaska. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Skagway, Seattle.",
    rating: 4.8,
    tags: ["fall-cruise","cultural","themed-cruise"]
  },
  {
    basePrice: 5731,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "city": "Seattle",
    "country": "United States",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Unwind and explore on this arcadia through Alaska, departing from Ketchikan. With every stop—from Juneau to Victoria—you’ll collect memories that last a lifetime.",
      distance: "1349 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Juneau to Seattle"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Victoria to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Victoria"
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
        name: "Bruce Hunter",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "sublime.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-250-113-5081"
        }
      }
    ],
    title: "Sublime Voyage of the Snow-Crowned Peaks",
    description: "Unwind and explore on this arcadia through Alaska, departing from Ketchikan. With every stop—from Juneau to Victoria—you’ll collect memories that last a lifetime.",
    rating: 4.2,
    tags: ["cruise-journey"]
  },
  {
    basePrice: 4719,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Embark on an unforgettable adventure from the vibrant port of Ketchikan, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Victoria, Vancouver, this journey combines cultural immersion with breathtaking scenery.",
      distance: "532 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Victoria to Vancouver"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
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
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Lawrence Hamilton",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "mythic.reunion.of.th@velarivoyages.com",
          contactNumber: "+1-762-317-9672"
        }
      }
    ],
    title: "Mythic Reunion of the Glacial Kingdom",
    description: "Embark on an unforgettable adventure from the vibrant port of Ketchikan, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Victoria, Vancouver, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.2,
    tags: ["cruise-vacation","anniversary-cruise"]
  },
  {
    basePrice: 4600,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "country": "United States",
    "coordinates": {
      "latitude": 58.3019,
      "longitude": -134.4197
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
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
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Embark on an unforgettable reverie from the vibrant port of Ketchikan, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Glacier Bay, Juneau, Victoria, Seattle, this journey combines cultural immersion with breathtaking scenery.",
      distance: "889 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Juneau to Victoria"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Victoria to Seattle"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Seattle to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
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
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Bruce Price",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "velvet.legacy.of.the@velarivoyages.com",
          contactNumber: "+1-540-385-5639"
        }
      }
    ],
    title: "Velvet Legacy of the The Last Frontier",
    description: "Embark on an unforgettable reverie from the vibrant port of Ketchikan, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Glacier Bay, Juneau, Victoria, Seattle, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.4,
    tags: ["culinary"]
  },
  {
    basePrice: 8323,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
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
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
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
    "city": "Victoria",
    "country": "Canada",
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
  }
],
      description: "Unwind and explore on this eclipse through Alaska, departing from Ketchikan. With every stop—from Seattle to Vancouver—you’ll collect memories that last a lifetime.",
      distance: "1063 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Victoria to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Christopher Hayes",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "lavish.frontier.of.t@velarivoyages.com",
          contactNumber: "+1-188-914-8543"
        }
      }
    ],
    title: "Lavish Frontier of the Whale-Rich Waters",
    description: "Unwind and explore on this eclipse through Alaska, departing from Ketchikan. With every stop—from Seattle to Vancouver—you’ll collect memories that last a lifetime.",
    rating: 4.2,
    tags: ["tropical"]
  },
  {
    basePrice: 5901,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Join us in Ketchikan for a sanctuary of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Sitka, Skagway where timeless traditions meet modern luxuries.",
      distance: "635 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Sitka"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Sitka to Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Skagway to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jeremy Graham",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
        contact: {
          contactEmail: "idyllic.requiem.of.t@velarivoyages.com",
          contactNumber: "+1-928-512-3467"
        }
      }
    ],
    title: "Idyllic Requiem of the Whale-Rich Waters",
    description: "Join us in Ketchikan for a sanctuary of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Sitka, Skagway where timeless traditions meet modern luxuries.",
    rating: 4.9,
    tags: ["wildlife","culinary"]
  },
  {
    basePrice: 4139,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
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
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Embark from Ketchikan and traverse the Alaska in style. Whether it’s the energy of Glacier Bay or the calm of Seattle, each destination reveals a new side of paradise.",
      distance: "680 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Seattle"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Seattle to Sitka"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Sitka to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Scott Coleman",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "starlit.resonance.of@velarivoyages.com",
          contactNumber: "+1-268-915-9933"
        }
      }
    ],
    title: "Starlit Resonance of the Carved Ice Cathedrals",
    description: "Embark from Ketchikan and traverse the Alaska in style. Whether it’s the energy of Glacier Bay or the calm of Seattle, each destination reveals a new side of paradise.",
    rating: 5.0,
    tags: ["historical","family-friendly"]
  },
  {
    basePrice: 9354,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
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
    "city": "Victoria",
    "country": "Canada",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Sail from Ketchikan into a world of wonder. The Alaska beckons with unforgettable ports like Vancouver, Seattle, Victoria, where every view is picture-perfect and every moment is priceless.",
      distance: "873 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Vancouver"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Seattle"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Victoria to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
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
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Jesse Russell",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
        contact: {
          contactEmail: "pearlescent.zenith.o@velarivoyages.com",
          contactNumber: "+1-681-767-4513"
        }
      }
    ],
    title: "Pearlescent Zenith of the Whale-Rich Waters",
    description: "Sail from Ketchikan into a world of wonder. The Alaska beckons with unforgettable ports like Vancouver, Seattle, Victoria, where every view is picture-perfect and every moment is priceless.",
    rating: 4.0,
    tags: ["themed-cruise","cruise-line","general"]
  },
  {
    basePrice: 2207,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Let the winds of the Alaska carry you from Ketchikan to the most stunning ports in the region. With destinations like Sitka, Vancouver, this wanderlust redefines luxury travel.",
      distance: "1218 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Sitka"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Sitka to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carl Curtis",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "harmonic.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-948-946-1275"
        }
      }
    ],
    title: "Harmonic Eclipse of the Carved Ice Cathedrals",
    description: "Let the winds of the Alaska carry you from Ketchikan to the most stunning ports in the region. With destinations like Sitka, Vancouver, this wanderlust redefines luxury travel.",
    rating: 4.7,
    tags: ["cruise-adventure","adventure"]
  },
  {
    basePrice: 3025,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "country": "Canada",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Leave stress behind with this curated panorama from Ketchikan. Sail across the best of Alaska and explore treasures like Glacier Bay, Victoria, Vancouver with comfort and style.",
      distance: "1205 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Victoria to Vancouver"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kyle Gardner",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
        contact: {
          contactEmail: "legendary.symphony.o@velarivoyages.com",
          contactNumber: "+1-210-174-6112"
        }
      }
    ],
    title: "Legendary Symphony of the Snow-Crowned Peaks",
    description: "Leave stress behind with this curated panorama from Ketchikan. Sail across the best of Alaska and explore treasures like Glacier Bay, Victoria, Vancouver with comfort and style.",
    rating: 4.9,
    tags: ["cruise-ship"]
  },
  {
    basePrice: 6487,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
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
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Your embrace begins in Ketchikan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Victoria to the historic streets of Sitka, each stop in the Alaska will leave a lasting impression.",
      distance: "908 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Victoria to Sitka"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Sitka to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Tyler Dixon",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "celestial.labyrinth.@velarivoyages.com",
          contactNumber: "+1-112-541-6485"
        }
      }
    ],
    title: "Celestial Labyrinth of the Whale-Rich Waters",
    description: "Your embrace begins in Ketchikan, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Victoria to the historic streets of Sitka, each stop in the Alaska will leave a lasting impression.",
    rating: 4.3,
    tags: ["general"]
  },
  {
    basePrice: 9568,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "country": "Canada",
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
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Set sail from historic Ketchikan for a modern escape into the Alaska. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Glacier Bay, Victoria, Juneau, Sitka.",
      distance: "1448 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Victoria"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Victoria to Juneau"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Juneau to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Victoria"
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
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Blake Collins",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
        contact: {
          contactEmail: "oceanic.oasis.of.the@velarivoyages.com",
          contactNumber: "+1-775-713-7221"
        }
      }
    ],
    title: "Oceanic Oasis of the Misty Fjords",
    description: "Set sail from historic Ketchikan for a modern escape into the Alaska. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Glacier Bay, Victoria, Juneau, Sitka.",
    rating: 4.1,
    tags: ["nature"]
  },
  {
    basePrice: 1853,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
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
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Experience the elegance of the seas on this luminous mystique through Alaska, starting from the illustrious port of Ketchikan. From Seattle, Skagway to Victoria, each destination offers its own story, culture, and breathtaking views.",
      distance: "697 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Seattle to Skagway"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Skagway to Victoria"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Victoria to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Frank Reed",
        role: "Customer Service Representative",
        languages: ["English","Spanish","German","Arabic","Chinese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "timeless.embrace.of.@velarivoyages.com",
          contactNumber: "+1-619-894-8328"
        }
      }
    ],
    title: "Timeless Embrace of the Wilderness Reaches",
    description: "Experience the elegance of the seas on this luminous mystique through Alaska, starting from the illustrious port of Ketchikan. From Seattle, Skagway to Victoria, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.4,
    tags: ["historical","cruise-ship","culinary"]
  },
  {
    basePrice: 2728,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "city": "Vancouver",
    "country": "Canada",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Embark from Ketchikan and traverse the Alaska in style. Whether it’s the energy of Juneau or the calm of Vancouver, each destination reveals a new side of paradise.",
      distance: "1352 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Juneau"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Juneau to Vancouver"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Glacier Bay"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Virginia Wallace",
        role: "Group Booking Coordinator",
        languages: ["English","Italian","Russian","Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "refined.passage.of.t@velarivoyages.com",
          contactNumber: "+1-903-867-9270"
        }
      }
    ],
    title: "Refined Passage of the Misty Fjords",
    description: "Embark from Ketchikan and traverse the Alaska in style. Whether it’s the energy of Juneau or the calm of Vancouver, each destination reveals a new side of paradise.",
    rating: 4.1,
    tags: ["cruise-holiday","weekend-cruise","cruise-getaway"]
  },
  {
    basePrice: 9650,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
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
      description: "Sail from Ketchikan into a world of wonder. The Alaska beckons with unforgettable ports like Skagway, Sitka, where every view is picture-perfect and every moment is priceless.",
      distance: "554 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Skagway"
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
    "description": "Exploring Ketchikan"
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
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Riley Grant",
        role: "Group Booking Coordinator",
        languages: ["English","Italian","Russian","Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/91.jpg",
        contact: {
          contactEmail: "tidewashed.drift.of.@velarivoyages.com",
          contactNumber: "+1-559-665-7798"
        }
      }
    ],
    title: "Tide-Washed Drift of the Tundra Tides",
    description: "Sail from Ketchikan into a world of wonder. The Alaska beckons with unforgettable ports like Skagway, Sitka, where every view is picture-perfect and every moment is priceless.",
    rating: 4.2,
    tags: ["cruise-getaway","wildlife","cruise-vacation"]
  },
  {
    basePrice: 1335,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
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
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
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
    "city": "Sitka",
    "country": "United States",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Your sanctum begins in Ketchikan, where every sunset on the Alaska horizon promises another day of discovery—from Victoria, Juneau, Sitka to hidden ports of charm.",
      distance: "672 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Victoria"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Victoria to Juneau"
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
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Naomi Knight",
        role: "Group Booking Coordinator",
        languages: ["English","Italian","Russian","Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "radiant.currents.of.@velarivoyages.com",
          contactNumber: "+1-954-251-7504"
        }
      }
    ],
    title: "Radiant Currents of the Echoes of Ice",
    description: "Your sanctum begins in Ketchikan, where every sunset on the Alaska horizon promises another day of discovery—from Victoria, Juneau, Sitka to hidden ports of charm.",
    rating: 4.8,
    tags: ["wildlife","weekend-cruise","themed-cruise"]
  },
  {
    basePrice: 6877,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Victoria",
    "country": "Canada",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "This escape takes you beyond the ordinary, starting in Ketchikan. With breathtaking stops in Glacier Bay, Seattle, Victoria, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "516 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Seattle"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Victoria to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sandra Dixon",
        role: "Group Booking Coordinator",
        languages: ["English","Italian","Russian","Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "oceanic.labyrinth.of@velarivoyages.com",
          contactNumber: "+1-256-403-1347"
        }
      }
    ],
    title: "Oceanic Labyrinth of the Echoes of Ice",
    description: "This escape takes you beyond the ordinary, starting in Ketchikan. With breathtaking stops in Glacier Bay, Seattle, Victoria, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.1,
    tags: ["historical"]
  },
  {
    basePrice: 3057,
    departureLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    arrivalLocation: {
  "city": "Ketchikan",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 55.3422,
    "longitude": -131.6476
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Ketchikan",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Begin your arcadia in Ketchikan, a gateway to the soul of Alaska. Enjoy days spent exploring Sitka, Skagway, Victoria, Juneau and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "812 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Sitka"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Sitka to Skagway"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Skagway to Victoria"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Victoria to Juneau"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Juneau to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Nicole Mitchell",
        role: "Group Booking Coordinator",
        languages: ["English","Italian","Russian","Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
        contact: {
          contactEmail: "riveting.zenith.of.t@velarivoyages.com",
          contactNumber: "+1-284-908-4430"
        }
      }
    ],
    title: "Riveting Zenith of the Alpine Seascapes",
    description: "Begin your arcadia in Ketchikan, a gateway to the soul of Alaska. Enjoy days spent exploring Sitka, Skagway, Victoria, Juneau and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.2,
    tags: ["culinary"]
  }
];
