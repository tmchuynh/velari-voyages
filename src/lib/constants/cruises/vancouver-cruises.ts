import { Cruise } from "@/lib/interfaces/services/cruises";

export const vancouverCruises: Cruise[] = [
{
    basePrice: 3911,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
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
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Depart from iconic Vancouver and traverse the Alaska with visits to Skagway, Ketchikan, Juneau. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "956 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Skagway"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Skagway to Ketchikan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Juneau"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Juneau to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Vancouver"
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
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jason Curtis",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/26.jpg",
        contact: {
          contactEmail: "golden.retreat.of.th@velarivoyages.com",
          contactNumber: "+1-363-140-3150"
        }
      }
    ],
    title: "Golden Retreat of the Harbor of Mist",
    description: "Depart from iconic Vancouver and traverse the Alaska with visits to Skagway, Ketchikan, Juneau. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.8,
    tags: ["cruise-getaway","holiday-cruise"]
  },
  {
    basePrice: 4817,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
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
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
  }
],
      description: "Embark on an unforgettable pulse from the vibrant port of Vancouver, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Seattle, Victoria, this journey combines cultural immersion with breathtaking scenery.",
      distance: "522 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Seattle to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Dennis Price",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
        contact: {
          contactEmail: "majestic.adventure.o@velarivoyages.com",
          contactNumber: "+1-479-361-8050"
        }
      }
    ],
    title: "Majestic Adventure of the Harbor of Mist",
    description: "Embark on an unforgettable pulse from the vibrant port of Vancouver, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Seattle, Victoria, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.8,
    tags: ["sightseeing","cruise-ship","wildlife"]
  },
  {
    basePrice: 9195,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "An escape like no other begins in Vancouver, where your sanctuary launches into the heart of Alaska. Discover the magic of Seattle, Juneau with style and sophistication.",
      distance: "509 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Seattle"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Seattle to Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Juneau to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
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
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kyle Dunn",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "whispering.elevation@velarivoyages.com",
          contactNumber: "+1-316-567-1883"
        }
      }
    ],
    title: "Whispering Elevation of the Misty Fjords",
    description: "An escape like no other begins in Vancouver, where your sanctuary launches into the heart of Alaska. Discover the magic of Seattle, Juneau with style and sophistication.",
    rating: 4.5,
    tags: ["relaxation"]
  },
  {
    basePrice: 7160,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
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
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Join us in Vancouver for a expedition of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Seattle, Victoria, Ketchikan where timeless traditions meet modern luxuries.",
      distance: "749 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Victoria to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Nathan Griffin",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "refined.adventure.of@velarivoyages.com",
          contactNumber: "+1-872-399-5383"
        }
      }
    ],
    title: "Refined Adventure of the Mountain-Edge Metropolis",
    description: "Join us in Vancouver for a expedition of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Seattle, Victoria, Ketchikan where timeless traditions meet modern luxuries.",
    rating: 4.2,
    tags: ["cruise-vacation","themed-cruise"]
  },
  {
    basePrice: 1800,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
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
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "city": "Ketchikan",
    "country": "United States",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Begin an epic sojourn from Vancouver, where the seas meet culture. Visit the remarkable ports of Juneau, Ketchikan while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1293 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Juneau to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Steven Marshall",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "infinite.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-678-770-3875"
        }
      }
    ],
    title: "Infinite Eclipse of the Northern Lights",
    description: "Begin an epic sojourn from Vancouver, where the seas meet culture. Visit the remarkable ports of Juneau, Ketchikan while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.2,
    tags: ["cruise-journey","cruise","long-distance"]
  },
  {
    basePrice: 5161,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Set course from Vancouver for an inspiring awe-inspiring journey across Alaska. Whether exploring ancient ruins in Skagway or soaking up coastal views in Victoria, every day offers a perfect mix of discovery and relaxation.",
      distance: "885 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Skagway to Victoria"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Victoria to Sitka"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Sitka to Glacier Bay"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mark Marshall",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "exquisite.eclipse.of@velarivoyages.com",
          contactNumber: "+1-833-324-7916"
        }
      }
    ],
    title: "Exquisite Eclipse of the Glass and Fir",
    description: "Set course from Vancouver for an inspiring awe-inspiring journey across Alaska. Whether exploring ancient ruins in Skagway or soaking up coastal views in Victoria, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.6,
    tags: ["historical"]
  },
  {
    basePrice: 3030,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Sail into splendor from Vancouver on a midnight voyage through Alaska. Let each stop—from Sitka to Glacier Bay—reveal the unique flavors and colors of the region.",
      distance: "548 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Sitka"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Sitka to Glacier Bay"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joseph Palmer",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "velvet.arcadia.of.th@velarivoyages.com",
          contactNumber: "+1-281-871-3604"
        }
      }
    ],
    title: "Velvet Arcadia of the Mountain-Edge Metropolis",
    description: "Sail into splendor from Vancouver on a midnight voyage through Alaska. Let each stop—from Sitka to Glacier Bay—reveal the unique flavors and colors of the region.",
    rating: 4.1,
    tags: ["cruise-journey","romantic","cultural"]
  },
  {
    basePrice: 3191,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Cruise into cultural richness aboard this celestial sanctum departing Vancouver. Savor local cuisine and uncover regional beauty from Victoria to Seattle.",
      distance: "1434 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Victoria"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Victoria to Seattle"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Seattle to Sitka"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Sitka to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Matthew Murray",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "pearlescent.voyage.o@velarivoyages.com",
          contactNumber: "+1-345-578-6541"
        }
      }
    ],
    title: "Pearlescent Voyage of the Harbor of Mist",
    description: "Cruise into cultural richness aboard this celestial sanctum departing Vancouver. Savor local cuisine and uncover regional beauty from Victoria to Seattle.",
    rating: 4.1,
    tags: ["family-friendly","cruise-ship"]
  },
  {
    basePrice: 1149,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Let the spirit of exploration guide your mystical journey from Vancouver. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Seattle, Victoria.",
      distance: "1101 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Seattle"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Victoria to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "David Curtis",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "panoramic.oasis.of.t@velarivoyages.com",
          contactNumber: "+1-426-215-6596"
        }
      }
    ],
    title: "Panoramic Oasis of the The Last Frontier",
    description: "Let the spirit of exploration guide your mystical journey from Vancouver. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Seattle, Victoria.",
    rating: 4.2,
    tags: ["sightseeing","holiday-cruise","themed-cruise"]
  },
  {
    basePrice: 4612,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
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
  }
],
      description: "Depart Vancouver on a relaxing discovery through the Alaska region. Highlights include the stunning coastlines of Sitka, Glacier Bay, Seattle, all while enjoying first-class amenities on board.",
      distance: "1445 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Sitka"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Sitka to Glacier Bay"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
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
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Randy Collins",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "refined.discovery.of@velarivoyages.com",
          contactNumber: "+1-493-916-9361"
        }
      }
    ],
    title: "Refined Discovery of the Glass and Fir",
    description: "Depart Vancouver on a relaxing discovery through the Alaska region. Highlights include the stunning coastlines of Sitka, Glacier Bay, Seattle, all while enjoying first-class amenities on board.",
    rating: 4.7,
    tags: ["luxury","anniversary-cruise"]
  },
  {
    basePrice: 4584,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Start in the vibrant city of Vancouver and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Seattle, Skagway, Ketchikan, Glacier Bay.",
      distance: "1451 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Seattle to Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Skagway to Ketchikan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Randy Henderson",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "extraordinary.reflec@velarivoyages.com",
          contactNumber: "+1-125-843-6148"
        }
      }
    ],
    title: "Extraordinary Reflection of the Harbor of Mist",
    description: "Start in the vibrant city of Vancouver and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Seattle, Skagway, Ketchikan, Glacier Bay.",
    rating: 4.1,
    tags: ["cruise"]
  },
  {
    basePrice: 9987,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "city": "Seattle",
    "country": "United States",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  },
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Sail from Vancouver into a world of wonder. The Alaska beckons with unforgettable ports like Glacier Bay, Seattle, where every view is picture-perfect and every moment is priceless.",
      distance: "1415 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Seattle"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Seattle to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Vancouver"
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
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kenneth Hawkins",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/38.jpg",
        contact: {
          contactEmail: "heavenly.voyage.of.t@velarivoyages.com",
          contactNumber: "+1-457-765-5239"
        }
      }
    ],
    title: "Heavenly Voyage of the Icy Passageways",
    description: "Sail from Vancouver into a world of wonder. The Alaska beckons with unforgettable ports like Glacier Bay, Seattle, where every view is picture-perfect and every moment is priceless.",
    rating: 4.0,
    tags: ["cruise-line"]
  },
  {
    basePrice: 6684,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
  },
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Your journey begins in Vancouver, where every sunset on the Alaska horizon promises another day of discovery—from Juneau, Victoria, Skagway, Glacier Bay to hidden ports of charm.",
      distance: "1064 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Juneau to Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Victoria to Skagway"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Skagway to Glacier Bay"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
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
        name: "Oliver Nash",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "sundrenched.symphony@velarivoyages.com",
          contactNumber: "+1-322-400-3401"
        }
      }
    ],
    title: "Sun-Drenched Symphony of the Pacific Jewel",
    description: "Your journey begins in Vancouver, where every sunset on the Alaska horizon promises another day of discovery—from Juneau, Victoria, Skagway, Glacier Bay to hidden ports of charm.",
    rating: 4.3,
    tags: ["wellness"]
  },
  {
    basePrice: 7858,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Set off on a awakening from Vancouver that captures the essence of Alaska. Discover cultural gems and culinary delights across Ketchikan, Seattle, Sitka, Skagway.",
      distance: "1202 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Ketchikan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Seattle"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Seattle to Sitka"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Sitka to Skagway"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Skagway to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
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
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "James Mitchell",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "dreamlike.sanctuary.@velarivoyages.com",
          contactNumber: "+1-692-567-7791"
        }
      }
    ],
    title: "Dreamlike Sanctuary of the Pacific Jewel",
    description: "Set off on a awakening from Vancouver that captures the essence of Alaska. Discover cultural gems and culinary delights across Ketchikan, Seattle, Sitka, Skagway.",
    rating: 4.1,
    tags: ["general","expedition","cruise-line"]
  },
  {
    basePrice: 9944,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
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
  }
],
      description: "Escape the everyday with this midnight journey through Alaska, departing from Vancouver. You'll visit Sitka, Skagway, where every stop is a new adventure.",
      distance: "937 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Sitka"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Sitka to Skagway"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Skagway"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Liam Crawford",
        role: "Travel Advisor",
        languages: ["English","Japanese","Spanish","French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "radiant.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-552-636-9046"
        }
      }
    ],
    title: "Radiant Sojourn of the Glass and Fir",
    description: "Escape the everyday with this midnight journey through Alaska, departing from Vancouver. You'll visit Sitka, Skagway, where every stop is a new adventure.",
    rating: 5.0,
    tags: ["cruise-ship"]
  },
  {
    basePrice: 8936,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Escape the everyday with this heavenly journey through Alaska, departing from Vancouver. You'll visit Skagway, Ketchikan, Glacier Bay, where every stop is a new adventure.",
      distance: "1079 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Skagway to Ketchikan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
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
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Fox",
        role: "Customer Service Representative",
        languages: ["English","Japanese","German"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "legendary.adventure.@velarivoyages.com",
          contactNumber: "+1-272-341-2942"
        }
      }
    ],
    title: "Legendary Adventure of the Alpine Seascapes",
    description: "Escape the everyday with this heavenly journey through Alaska, departing from Vancouver. You'll visit Skagway, Ketchikan, Glacier Bay, where every stop is a new adventure.",
    rating: 4.9,
    tags: ["short-getaway"]
  },
  {
    basePrice: 6940,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
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
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
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
    "city": "Ketchikan",
    "country": "United States",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "This secluded cruise from Vancouver is your ticket to the captivating charm of the Alaska. Discover the delights of Sitka, Juneau, Victoria, Ketchikan with enriching excursions and award-winning service.",
      distance: "1155 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Sitka"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Sitka to Juneau"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Juneau to Victoria"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Victoria to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Cynthia Dixon",
        role: "Customer Service Representative",
        languages: ["English","Japanese","German"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "luxurious.sanctuary.@velarivoyages.com",
          contactNumber: "+1-204-235-2011"
        }
      }
    ],
    title: "Luxurious Sanctuary of the Glass and Fir",
    description: "This secluded cruise from Vancouver is your ticket to the captivating charm of the Alaska. Discover the delights of Sitka, Juneau, Victoria, Ketchikan with enriching excursions and award-winning service.",
    rating: 4.2,
    tags: ["cultural","relaxation"]
  },
  {
    basePrice: 1537,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Step aboard in Vancouver and begin a transcendent journey through the scenic Alaska. From historic cities to coastal hideaways like Glacier Bay, Victoria, every day is unforgettable.",
      distance: "1261 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Glacier Bay"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Victoria"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Victoria to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Vancouver"
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
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Lisa Gibson",
        role: "Customer Service Representative",
        languages: ["English","Japanese","German"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "harmonic.infinite.of@velarivoyages.com",
          contactNumber: "+1-938-801-7655"
        }
      }
    ],
    title: "Harmonic Infinite of the Harbor of Mist",
    description: "Step aboard in Vancouver and begin a transcendent journey through the scenic Alaska. From historic cities to coastal hideaways like Glacier Bay, Victoria, every day is unforgettable.",
    rating: 4.1,
    tags: ["fall-cruise","exclusive","nature"]
  },
  {
    basePrice: 3086,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Launch into adventure from Vancouver and sail deep into the heart of the Alaska. With ports of call like Juneau, Glacier Bay, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "888 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Juneau to Glacier Bay"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Hannah Ellis",
        role: "Customer Service Representative",
        languages: ["English","Japanese","German"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "riveting.horizon.of.@velarivoyages.com",
          contactNumber: "+1-518-629-5606"
        }
      }
    ],
    title: "Riveting Horizon of the Harbor of Mist",
    description: "Launch into adventure from Vancouver and sail deep into the heart of the Alaska. With ports of call like Juneau, Glacier Bay, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.9,
    tags: ["cruise","family-friendly","anniversary-cruise"]
  },
  {
    basePrice: 7012,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "Alaska",
  "coordinates": {
    "latitude": 49.2827,
    "longitude": -123.1207
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
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
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "Alaska",
    "coordinates": {
      "latitude": 49.2827,
      "longitude": -123.1207
    }
  }
],
      description: "Begin your journey in Vancouver, where tradition meets travel. This immersive awakening reveals the finest of Alaska, from the beaches of Seattle to the streets of Ketchikan.",
      distance: "626 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Seattle to Ketchikan"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Victoria"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Victoria to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Caroline Griffin",
        role: "Customer Service Representative",
        languages: ["English","Japanese","German"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "oceanic.tranquility.@velarivoyages.com",
          contactNumber: "+1-100-588-9610"
        }
      }
    ],
    title: "Oceanic Tranquility of the Sea-Bound Solace",
    description: "Begin your journey in Vancouver, where tradition meets travel. This immersive awakening reveals the finest of Alaska, from the beaches of Seattle to the streets of Ketchikan.",
    rating: 4.1,
    tags: ["cruise-journey"]
  }
];
