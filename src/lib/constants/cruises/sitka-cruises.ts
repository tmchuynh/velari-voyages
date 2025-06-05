import { Cruise } from "@/lib/interfaces/services/cruises";

export const sitkaCruises: Cruise[] = [
{
    basePrice: 7654,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Your journey through the Alaska begins in Sitka, where elegance meets adventure. Explore the shores of Skagway, Vancouver, Seattle, with curated excursions and luxurious onboard amenities.",
      distance: "979 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Sitka to Skagway"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Skagway to Vancouver"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Seattle"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Seattle to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sitka"
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
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Javier Wells",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "celestial.labyrinth.@velarivoyages.com",
          contactNumber: "+1-405-318-7285"
        }
      }
    ],
    title: "Celestial Labyrinth of the Alpine Seascapes",
    description: "Your journey through the Alaska begins in Sitka, where elegance meets adventure. Explore the shores of Skagway, Vancouver, Seattle, with curated excursions and luxurious onboard amenities.",
    rating: 4.3,
    tags: ["nature"]
  },
  {
    basePrice: 3459,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Board in Sitka for a hand-crafted sanctuary through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Vancouver, Seattle, Victoria, Juneau.",
      distance: "1059 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Sitka to Vancouver"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Seattle"
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
    "description": "Sailing from Victoria to Juneau"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Juneau to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Vancouver"
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
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Andrew Morgan",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "verdant.requiem.of.t@velarivoyages.com",
          contactNumber: "+1-688-763-8097"
        }
      }
    ],
    title: "Verdant Requiem of the Snow-Crowned Peaks",
    description: "Board in Sitka for a hand-crafted sanctuary through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Vancouver, Seattle, Victoria, Juneau.",
    rating: 4.1,
    tags: ["cruise-experience"]
  },
  {
    basePrice: 4831,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
  },
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Join us in Sitka for a sanctuary of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Glacier Bay, Seattle where timeless traditions meet modern luxuries.",
      distance: "1132 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Sitka to Glacier Bay"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Seattle"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Seattle to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sitka"
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
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Noah Fletcher",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "mythic.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-534-930-1779"
        }
      }
    ],
    title: "Mythic Odyssey of the Wilderness Reaches",
    description: "Join us in Sitka for a sanctuary of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Glacier Bay, Seattle where timeless traditions meet modern luxuries.",
    rating: 4.3,
    tags: ["family-friendly"]
  },
  {
    basePrice: 4760,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
  },
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Begin your journey in Sitka, where tradition meets travel. This immersive requiem reveals the finest of Alaska, from the beaches of Vancouver to the streets of Victoria.",
      distance: "838 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sitka to Vancouver"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Victoria"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Victoria to Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Vancouver"
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
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Larry Price",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
        contact: {
          contactEmail: "radiancedrenched.arc@velarivoyages.com",
          contactNumber: "+1-534-690-9442"
        }
      }
    ],
    title: "Radiance-Drenched Arcadia of the Misty Fjords",
    description: "Begin your journey in Sitka, where tradition meets travel. This immersive requiem reveals the finest of Alaska, from the beaches of Vancouver to the streets of Victoria.",
    rating: 4.0,
    tags: ["fall-cruise","sightseeing"]
  },
  {
    basePrice: 4793,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "An escape like no other begins in Sitka, where your labyrinth launches into the heart of Alaska. Discover the magic of Glacier Bay, Seattle, Vancouver, Skagway with style and sophistication.",
      distance: "951 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Sitka to Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Seattle"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Seattle to Vancouver"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Skagway"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Skagway to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Skagway"
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
        name: "Joe Mason",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "horizonkissed.realm.@velarivoyages.com",
          contactNumber: "+1-291-544-2124"
        }
      }
    ],
    title: "Horizon-Kissed Realm of the Frozen Frontiers",
    description: "An escape like no other begins in Sitka, where your labyrinth launches into the heart of Alaska. Discover the magic of Glacier Bay, Seattle, Vancouver, Skagway with style and sophistication.",
    rating: 4.9,
    tags: ["nature"]
  },
  {
    basePrice: 7631,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
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
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
  },
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Begin a captivating elevation through the Alaska, departing Sitka. With visits to Victoria, Skagway, Seattle, each day brings a new adventure and deeper connection to the region.",
      distance: "860 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sitka to Victoria"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Victoria to Skagway"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Skagway to Seattle"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Seattle to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Willie Clark",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        contact: {
          contactEmail: "golden.haven.of.the.@velarivoyages.com",
          contactNumber: "+1-553-885-1598"
        }
      }
    ],
    title: "Golden Haven of the Misty Fjords",
    description: "Begin a captivating elevation through the Alaska, departing Sitka. With visits to Victoria, Skagway, Seattle, each day brings a new adventure and deeper connection to the region.",
    rating: 4.9,
    tags: ["cruise-excursion","themed-cruise"]
  },
  {
    basePrice: 7426,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
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
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
  }
],
      description: "Enjoy seamless luxury on this crystalline arcadia beginning in Sitka. Visit breathtaking Alaska locales such as Victoria, Skagway, Ketchikan, Glacier Bay on this unforgettable itinerary.",
      distance: "1455 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Sitka to Victoria"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Victoria to Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Skagway to Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Glacier Bay"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Victoria"
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
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Vincent Mitchell",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "eternal.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-140-521-1458"
        }
      }
    ],
    title: "Eternal Voyage of the Wilderness Reaches",
    description: "Enjoy seamless luxury on this crystalline arcadia beginning in Sitka. Visit breathtaking Alaska locales such as Victoria, Skagway, Ketchikan, Glacier Bay on this unforgettable itinerary.",
    rating: 4.4,
    tags: ["cultural"]
  },
  {
    basePrice: 4768,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
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
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Set sail from Sitka on this immersive voyage through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Vancouver and Skagway and Glacier Bay and Victoria, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "847 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sitka to Vancouver"
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
    "description": "Sailing from Skagway to Glacier Bay"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Victoria"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Victoria to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
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
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Harry Cooper",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "transcendent.infinit@velarivoyages.com",
          contactNumber: "+1-606-394-6042"
        }
      }
    ],
    title: "Transcendent Infinite of the Glacial Kingdom",
    description: "Set sail from Sitka on this immersive voyage through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Vancouver and Skagway and Glacier Bay and Victoria, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.7,
    tags: ["sightseeing"]
  },
  {
    basePrice: 1324,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "This inspiring journey departs from Sitka, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Juneau, Vancouver.",
      distance: "877 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Sitka to Juneau"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Juneau to Vancouver"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Nathan Hawkins",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "floating.reflection.@velarivoyages.com",
          contactNumber: "+1-257-100-9475"
        }
      }
    ],
    title: "Floating Reflection of the Carved Ice Cathedrals",
    description: "This inspiring journey departs from Sitka, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Juneau, Vancouver.",
    rating: 4.9,
    tags: ["cruise-journey","glacier-cruise"]
  },
  {
    basePrice: 2619,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
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
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
      description: "A voyage of contrasts awaits from Sitka. Discover the historical and natural richness of Alaska as you cruise to spectacular destinations like Juneau, Ketchikan, Seattle.",
      distance: "669 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Sitka to Juneau"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Juneau to Ketchikan"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Walter Curtis",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/96.jpg",
        contact: {
          contactEmail: "majestic.saga.of.the@velarivoyages.com",
          contactNumber: "+1-550-657-2935"
        }
      }
    ],
    title: "Majestic Saga of the Carved Ice Cathedrals",
    description: "A voyage of contrasts awaits from Sitka. Discover the historical and natural richness of Alaska as you cruise to spectacular destinations like Juneau, Ketchikan, Seattle.",
    rating: 4.2,
    tags: ["cruise-adventure","fall-cruise"]
  },
  {
    basePrice: 6656,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Your sojourn begins in Sitka, where every sunset on the Alaska horizon promises another day of discovery—from Skagway, Victoria, Seattle to hidden ports of charm.",
      distance: "1418 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Sitka to Skagway"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Skagway to Victoria"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Victoria to Seattle"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Seattle to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sebastian Hamilton",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
        contact: {
          contactEmail: "luxurious.mirage.of.@velarivoyages.com",
          contactNumber: "+1-917-850-6700"
        }
      }
    ],
    title: "Luxurious Mirage of the Northern Lights",
    description: "Your sojourn begins in Sitka, where every sunset on the Alaska horizon promises another day of discovery—from Skagway, Victoria, Seattle to hidden ports of charm.",
    rating: 4.7,
    tags: ["fall-cruise","nature","cruise-ship"]
  },
  {
    basePrice: 3271,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
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
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
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
  },
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Set off on a reflection from Sitka that captures the essence of Alaska. Discover cultural gems and culinary delights across Seattle, Glacier Bay, Ketchikan, Skagway.",
      distance: "710 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sitka to Seattle"
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
    "description": "Sailing from Glacier Bay to Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Skagway"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Skagway to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
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
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Victor West",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        contact: {
          contactEmail: "eternal.exploration.@velarivoyages.com",
          contactNumber: "+1-641-949-3913"
        }
      }
    ],
    title: "Eternal Exploration of the Frontier Silence",
    description: "Set off on a reflection from Sitka that captures the essence of Alaska. Discover cultural gems and culinary delights across Seattle, Glacier Bay, Ketchikan, Skagway.",
    rating: 4.5,
    tags: ["cruise-getaway","short-getaway"]
  },
  {
    basePrice: 9930,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
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
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
      description: "Sail from Sitka into a world of wonder. The Alaska beckons with unforgettable ports like Glacier Bay, Seattle, where every view is picture-perfect and every moment is priceless.",
      distance: "889 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sitka to Glacier Bay"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
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
    "description": "Exploring Seattle"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Mark Dunn",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        contact: {
          contactEmail: "luminous.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-262-731-9713"
        }
      }
    ],
    title: "Luminous Odyssey of the Echoes of Ice",
    description: "Sail from Sitka into a world of wonder. The Alaska beckons with unforgettable ports like Glacier Bay, Seattle, where every view is picture-perfect and every moment is priceless.",
    rating: 4.3,
    tags: ["cruise-excursion","themed-cruise"]
  },
  {
    basePrice: 4981,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
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
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
      description: "Your journey through the Alaska begins in Sitka, where elegance meets adventure. Explore the shores of Vancouver, Glacier Bay, Skagway, Victoria, with curated excursions and luxurious onboard amenities.",
      distance: "721 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Sitka to Vancouver"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Vancouver to Glacier Bay"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Skagway"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Skagway to Victoria"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Victoria"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Wayne Baker",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "luxurious.embrace.of@velarivoyages.com",
          contactNumber: "+1-987-214-5152"
        }
      }
    ],
    title: "Luxurious Embrace of the Frontier Silence",
    description: "Your journey through the Alaska begins in Sitka, where elegance meets adventure. Explore the shores of Vancouver, Glacier Bay, Skagway, Victoria, with curated excursions and luxurious onboard amenities.",
    rating: 4.7,
    tags: ["seasonal","culinary","cruise-excursion"]
  },
  {
    basePrice: 7733,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
    "coordinates": {
      "latitude": 48.4284,
      "longitude": -123.3656
    }
  },
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Join us in Sitka for a tide of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Juneau, Skagway, Ketchikan, Victoria where timeless traditions meet modern luxuries.",
      distance: "672 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sitka to Juneau"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Juneau to Skagway"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Skagway to Ketchikan"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Victoria"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Victoria to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Bobby Fisher",
        role: "Reservations Agent",
        languages: ["English","Arabic","Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
        contact: {
          contactEmail: "ornate.adventure.of.@velarivoyages.com",
          contactNumber: "+1-490-144-8158"
        }
      }
    ],
    title: "Ornate Adventure of the Glacial Kingdom",
    description: "Join us in Sitka for a tide of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Juneau, Skagway, Ketchikan, Victoria where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["cruise-getaway","cruise-holiday","tropical"]
  },
  {
    basePrice: 8946,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
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
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
    "coordinates": {
      "latitude": 55.3422,
      "longitude": -131.6476
    }
  }
],
      description: "Begin your pulse in Sitka, a gateway to the soul of Alaska. Enjoy days spent exploring Skagway, Ketchikan and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1101 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sitka to Skagway"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Skagway to Ketchikan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
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
    "description": "Exploring Ketchikan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Dunn",
        role: "Loyalty Program Representative",
        languages: ["English","Chinese","Italian","French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
        contact: {
          contactEmail: "pearlescent.saga.of.@velarivoyages.com",
          contactNumber: "+1-261-566-3454"
        }
      }
    ],
    title: "Pearlescent Saga of the Glacial Kingdom",
    description: "Begin your pulse in Sitka, a gateway to the soul of Alaska. Enjoy days spent exploring Skagway, Ketchikan and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.9,
    tags: ["cultural","cruise-excursion"]
  },
  {
    basePrice: 7930,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
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
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
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
      description: "Depart from the iconic port of Sitka and sail through the enchanting Alaska. Explore vibrant destinations like Ketchikan, Seattle, Victoria, Glacier Bay, each offering its own unique charm and local flair.",
      distance: "682 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Sitka to Ketchikan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Seattle"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Seattle to Victoria"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Victoria to Glacier Bay"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
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
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Aaliyah Day",
        role: "Loyalty Program Representative",
        languages: ["English","Chinese","Italian","French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/73.jpg",
        contact: {
          contactEmail: "extraordinary.retrea@velarivoyages.com",
          contactNumber: "+1-834-951-5097"
        }
      }
    ],
    title: "Extraordinary Retreat of the The Last Frontier",
    description: "Depart from the iconic port of Sitka and sail through the enchanting Alaska. Explore vibrant destinations like Ketchikan, Seattle, Victoria, Glacier Bay, each offering its own unique charm and local flair.",
    rating: 4.5,
    tags: ["cruise"]
  },
  {
    basePrice: 8742,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Juneau",
  "country": "United States",
  "coordinates": {
    "latitude": 58.3019,
    "longitude": -134.4197
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
    "city": "Juneau",
    "country": "United States",
    "coordinates": {
      "latitude": 58.3019,
      "longitude": -134.4197
    }
  }
],
      description: "An unforgettable resonance awaits as you cruise from Sitka across Alaska. Dive into history, flavor, and culture with stops including Glacier Bay, Vancouver, Ketchikan, Juneau.",
      distance: "1487 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Sitka to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Vancouver"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Ketchikan"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Ketchikan to Juneau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sitka"
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
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Juneau"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joan Stewart",
        role: "Loyalty Program Representative",
        languages: ["English","Chinese","Italian","French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
        contact: {
          contactEmail: "hidden.horizon.of.th@velarivoyages.com",
          contactNumber: "+1-832-721-4678"
        }
      }
    ],
    title: "Hidden Horizon of the Tundra Tides",
    description: "An unforgettable resonance awaits as you cruise from Sitka across Alaska. Dive into history, flavor, and culture with stops including Glacier Bay, Vancouver, Ketchikan, Juneau.",
    rating: 4.2,
    tags: ["romantic","cruise","cruise-adventure"]
  },
  {
    basePrice: 3137,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
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
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "This oceanic mythos begins in Sitka and ventures deep into the heart of Alaska. Wander through colorful markets, historic streets, and serene coastlines at Glacier Bay, Juneau, Victoria.",
      distance: "1442 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Sitka to Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Juneau"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Juneau to Victoria"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Victoria to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
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
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Victoria"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Sitka"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Abigail Wells",
        role: "Loyalty Program Representative",
        languages: ["English","Chinese","Italian","French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
        contact: {
          contactEmail: "captivating.reflecti@velarivoyages.com",
          contactNumber: "+1-540-236-5185"
        }
      }
    ],
    title: "Captivating Reflection of the Wilderness Reaches",
    description: "This oceanic mythos begins in Sitka and ventures deep into the heart of Alaska. Wander through colorful markets, historic streets, and serene coastlines at Glacier Bay, Juneau, Victoria.",
    rating: 4.4,
    tags: ["family-friendly","glacier-cruise"]
  },
  {
    basePrice: 2300,
    departureLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    arrivalLocation: {
  "city": "Sitka",
  "country": "United States",
  "region": "Alaska",
  "coordinates": {
    "latitude": 57.0531,
    "longitude": -135.3304
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Sitka",
    "country": "United States",
    "region": "Alaska",
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
    "region": "Alaska",
    "coordinates": {
      "latitude": 57.0531,
      "longitude": -135.3304
    }
  }
],
      description: "Savor each moment of this spectacular escape through Alaska, starting in Sitka. Visit renowned locations like Glacier Bay, Skagway, where adventure and relaxation intertwine.",
      distance: "992 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Sitka to Glacier Bay"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Glacier Bay to Skagway"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Skagway to Sitka"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Sitka"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
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
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Harper",
        role: "Loyalty Program Representative",
        languages: ["English","Chinese","Italian","French"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/85.jpg",
        contact: {
          contactEmail: "radiancedrenched.sym@velarivoyages.com",
          contactNumber: "+1-136-168-2997"
        }
      }
    ],
    title: "Radiance-Drenched Symphony of the Carved Ice Cathedrals",
    description: "Savor each moment of this spectacular escape through Alaska, starting in Sitka. Visit renowned locations like Glacier Bay, Skagway, where adventure and relaxation intertwine.",
    rating: 4.9,
    tags: ["repositioning","cruise","long-distance"]
  }
];
