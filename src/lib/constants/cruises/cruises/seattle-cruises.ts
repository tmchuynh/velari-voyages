import { Cruise } from "@/lib/interfaces/services/cruises";

export const seattleCruises: Cruise[] = [
  {
    basePrice: 3385,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
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
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "An escape like no other begins in Seattle, where your awakening launches into the heart of Alaska. Discover the magic of Vancouver, Victoria with style and sophistication.",
      distance: "1160 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Vancouver"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Allison Collins",
        role: "Cruise Specialist",
        languages: ["English","German","Russian","French","Arabic"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "secluded.renaissance@velarivoyages.com",
          contactNumber: "+1-157-827-6988"
        }
      }
    ],
    title: "Secluded Renaissance of the Mist and Mountains",
    description: "An escape like no other begins in Seattle, where your awakening launches into the heart of Alaska. Discover the magic of Vancouver, Victoria with style and sophistication.",
    rating: 4.5,
    tags: ["general","romantic"]
  },
  {
    basePrice: 3181,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
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
    "city": "Ketchikan",
    "country": "United States",
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
    "city": "Victoria",
    "country": "Canada",
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "Sail away from Seattle into the beautiful expanse of Alaska. Along the way, enjoy rich cultural experiences in Glacier Bay, Ketchikan, Sitka, Victoria, where history, nature, and cuisine collide.",
      distance: "518 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Sitka"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Sitka to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Bella Marshall",
        role: "Cruise Specialist",
        languages: ["English","German","Russian","French","Arabic"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "sublime.serenade.of.@velarivoyages.com",
          contactNumber: "+1-249-231-3176"
        }
      }
    ],
    title: "Sublime Serenade of the Sky-Reflected Stillness",
    description: "Sail away from Seattle into the beautiful expanse of Alaska. Along the way, enjoy rich cultural experiences in Glacier Bay, Ketchikan, Sitka, Victoria, where history, nature, and cuisine collide.",
    rating: 5.0,
    tags: ["wildlife","cruise-getaway","cruise-holiday"]
  },
  {
    basePrice: 8156,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
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
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
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
  }
],
      description: "Begin a captivating wanderlust through the Alaska, departing Seattle. With visits to Skagway, Juneau, Vancouver, Glacier Bay, each day brings a new adventure and deeper connection to the region.",
      distance: "589 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Seattle to Skagway"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Skagway to Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Juneau to Vancouver"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Glacier Bay"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
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
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Audrey Marshall",
        role: "Cruise Specialist",
        languages: ["English","German","Russian","French","Arabic"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "idyllic.pilgrimage.o@velarivoyages.com",
          contactNumber: "+1-122-886-5957"
        }
      }
    ],
    title: "Idyllic Pilgrimage of the Rain-Crowned Harbor",
    description: "Begin a captivating wanderlust through the Alaska, departing Seattle. With visits to Skagway, Juneau, Vancouver, Glacier Bay, each day brings a new adventure and deeper connection to the region.",
    rating: 4.8,
    tags: ["long-distance","VIP","sightseeing"]
  },
  {
    basePrice: 6461,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
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
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
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
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "Savor each moment of this luminous escape through Alaska, starting in Seattle. Visit renowned locations like Skagway, Vancouver, Victoria, where adventure and relaxation intertwine.",
      distance: "756 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Seattle to Skagway"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Skagway to Vancouver"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
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
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samantha Collins",
        role: "Cruise Specialist",
        languages: ["English","German","Russian","French","Arabic"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "starlit.realm.of.the@velarivoyages.com",
          contactNumber: "+1-153-360-5921"
        }
      }
    ],
    title: "Starlit Realm of the Emerald City",
    description: "Savor each moment of this luminous escape through Alaska, starting in Seattle. Visit renowned locations like Skagway, Vancouver, Victoria, where adventure and relaxation intertwine.",
    rating: 4.1,
    tags: ["general"]
  },
  {
    basePrice: 5342,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
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
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Board in Seattle for a hand-crafted requiem through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Juneau, Glacier Bay, Ketchikan, Victoria.",
      distance: "847 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Juneau to Glacier Bay"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Ketchikan"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Victoria"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Victoria to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amanda Sutton",
        role: "Cruise Specialist",
        languages: ["English","German","Russian","French","Arabic"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "alluring.pilgrimage.@velarivoyages.com",
          contactNumber: "+1-222-778-9640"
        }
      }
    ],
    title: "Alluring Pilgrimage of the Icy Passageways",
    description: "Board in Seattle for a hand-crafted requiem through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Juneau, Glacier Bay, Ketchikan, Victoria.",
    rating: 4.0,
    tags: ["glacier-cruise"]
  },
  {
    basePrice: 8044,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Embark on an unforgettable labyrinth from the vibrant port of Seattle, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Vancouver, Sitka, Glacier Bay, this journey combines cultural immersion with breathtaking scenery.",
      distance: "979 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Vancouver"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Sitka"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Sitka to Glacier Bay"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Sitka"
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
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lisa Porter",
        role: "Cruise Specialist",
        languages: ["English","German","Russian","French","Arabic"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "mesmerizing.sojourn.@velarivoyages.com",
          contactNumber: "+1-205-769-9242"
        }
      }
    ],
    title: "Mesmerizing Sojourn of the Emerald City",
    description: "Embark on an unforgettable labyrinth from the vibrant port of Seattle, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Vancouver, Sitka, Glacier Bay, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.4,
    tags: ["cruise-journey"]
  },
  {
    basePrice: 5221,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
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
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  }
],
      description: "Join us in Seattle for a expedition of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Vancouver, Victoria where timeless traditions meet modern luxuries.",
      distance: "1271 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Vancouver"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
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
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Amy Grant",
        role: "Cruise Specialist",
        languages: ["English","German","Russian","French","Arabic"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "secluded.retreat.of.@velarivoyages.com",
          contactNumber: "+1-435-886-9986"
        }
      }
    ],
    title: "Secluded Retreat of the Mist and Mountains",
    description: "Join us in Seattle for a expedition of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Vancouver, Victoria where timeless traditions meet modern luxuries.",
    rating: 4.3,
    tags: ["themed-cruise","wellness","historical"]
  },
  {
    basePrice: 8691,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
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
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
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
    "city": "Ketchikan",
    "country": "United States",
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Escape the everyday with this verdant journey through Alaska, departing from Seattle. You'll visit Glacier Bay, Ketchikan, where every stop is a new adventure.",
      distance: "853 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Seattle to Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Seattle"
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
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Olivia Wallace",
        role: "Cruise Specialist",
        languages: ["English","German","Russian","French","Arabic"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "captivating.expediti@velarivoyages.com",
          contactNumber: "+1-313-150-6188"
        }
      }
    ],
    title: "Captivating Expedition of the Rain-Crowned Harbor",
    description: "Escape the everyday with this verdant journey through Alaska, departing from Seattle. You'll visit Glacier Bay, Ketchikan, where every stop is a new adventure.",
    rating: 4.0,
    tags: ["anniversary-cruise","cruise-holiday"]
  },
  {
    basePrice: 5907,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
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
    category: "fjords-tour",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
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
    "city": "Glacier Bay",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Your zenith begins in Seattle, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Victoria to the historic streets of Glacier Bay, each stop in the Alaska will leave a lasting impression.",
      distance: "1447 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Victoria to Glacier Bay"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christine Foster",
        role: "Cruise Specialist",
        languages: ["English","German","Russian","French","Arabic"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "idyllic.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-350-720-3528"
        }
      }
    ],
    title: "Idyllic Voyage of the Mist and Mountains",
    description: "Your zenith begins in Seattle, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Victoria to the historic streets of Glacier Bay, each stop in the Alaska will leave a lasting impression.",
    rating: 4.5,
    tags: ["short-getaway","culinary","wildlife"]
  },
  {
    basePrice: 3814,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 47.6062,
    "longitude": -122.3321
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
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
    "city": "Seattle",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 47.6062,
      "longitude": -122.3321
    }
  }
],
      description: "Leave stress behind with this curated enigma from Seattle. Sail across the best of Alaska and explore treasures like Skagway, Victoria with comfort and style.",
      distance: "1474 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Seattle to Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Skagway to Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Victoria to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Sophia Watson",
        role: "Cruise Specialist",
        languages: ["English","German","Russian","French","Arabic"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "radiant.awakening.of@velarivoyages.com",
          contactNumber: "+1-311-441-6292"
        }
      }
    ],
    title: "Radiant Awakening of the Tundra Tides",
    description: "Leave stress behind with this curated enigma from Seattle. Sail across the best of Alaska and explore treasures like Skagway, Victoria with comfort and style.",
    rating: 4.9,
    tags: ["luxury"]
  }
];
