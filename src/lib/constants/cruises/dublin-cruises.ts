import { Cruise } from "@/lib/interfaces/services/cruises";

export const dublinCruises: Cruise[] = [
{
    basePrice: 1162,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Begin a captivating whisper through the Northern Europe, departing Dublin. With visits to Stockholm, Amsterdam, Kiel, each day brings a new adventure and deeper connection to the region.",
      distance: "1363 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Dublin to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Amsterdam"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Miguel Morgan",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/61.jpg",
        contact: {
          contactEmail: "verdant.frontier.of.@velarivoyages.com",
          contactNumber: "+1-383-664-1107"
        }
      }
    ],
    title: "Verdant Frontier of the Literary Capital",
    description: "Begin a captivating whisper through the Northern Europe, departing Dublin. With visits to Stockholm, Amsterdam, Kiel, each day brings a new adventure and deeper connection to the region.",
    rating: 4.1,
    tags: ["adventure"]
  },
  {
    basePrice: 6704,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "coordinates": {
    "latitude": 55.6761,
    "longitude": 12.5683
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  },
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Savor each moment of this timeless escape through Northern Europe, starting in Dublin. Visit renowned locations like Berlin, Copenhagen, where adventure and relaxation intertwine.",
      distance: "1142 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Dublin to Berlin"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Berlin to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Javier Morgan",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "harmonic.tranquility@velarivoyages.com",
          contactNumber: "+1-169-234-2212"
        }
      }
    ],
    title: "Harmonic Tranquility of the Frosted Kingdoms",
    description: "Savor each moment of this timeless escape through Northern Europe, starting in Dublin. Visit renowned locations like Berlin, Copenhagen, where adventure and relaxation intertwine.",
    rating: 4.4,
    tags: ["long-distance","weekend-cruise","cruise-ship"]
  },
  {
    basePrice: 6309,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "Step into a world of elegance and exploration from Dublin. This oasis through the Northern Europe unveils stunning stops including Copenhagen, Helsinki, all with first-class service.",
      distance: "1033 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dublin to Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Logan Sutton",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "whispering.enigma.of@velarivoyages.com",
          contactNumber: "+1-437-415-8050"
        }
      }
    ],
    title: "Whispering Enigma of the Runestone Realms",
    description: "Step into a world of elegance and exploration from Dublin. This oasis through the Northern Europe unveils stunning stops including Copenhagen, Helsinki, all with first-class service.",
    rating: 4.1,
    tags: ["VIP"]
  },
  {
    basePrice: 7482,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "Sail from Dublin into a world of wonder. The Northern Europe beckons with unforgettable ports like London, Helsinki, where every view is picture-perfect and every moment is priceless.",
      distance: "638 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dublin to London"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from London to Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Wayne Payne",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "hidden.solstice.of.t@velarivoyages.com",
          contactNumber: "+1-242-597-9239"
        }
      }
    ],
    title: "Hidden Solstice of the Emerald Gateway",
    description: "Sail from Dublin into a world of wonder. The Northern Europe beckons with unforgettable ports like London, Helsinki, where every view is picture-perfect and every moment is priceless.",
    rating: 4.9,
    tags: ["cruise-adventure","wellness","exclusive"]
  },
  {
    basePrice: 9240,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Oslo",
    "country": "Norway",
    "coordinates": {
      "latitude": 59.9139,
      "longitude": 10.7522
    }
  },
  {
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "Set sail from Dublin on this sun-drenched escape through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Oslo and Tallinn and Kiel, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1295 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Dublin to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Kiel"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Kiel to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Noah Baker",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "midnight.symphony.of@velarivoyages.com",
          contactNumber: "+1-949-873-7460"
        }
      }
    ],
    title: "Midnight Symphony of the Frosted Kingdoms",
    description: "Set sail from Dublin on this sun-drenched escape through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Oslo and Tallinn and Kiel, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.5,
    tags: ["family-friendly","adventure","wellness"]
  },
  {
    basePrice: 2397,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  },
  {
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "From the lively departure port of Dublin, this curated legacy showcases the finest of Northern Europe. With visits to Southampton, Helsinki, Stockholm, Berlin, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "873 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dublin to Southampton"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Southampton to Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Berlin"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Berlin to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sebastian Reed",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "mythic.passage.of.th@velarivoyages.com",
          contactNumber: "+1-249-423-3770"
        }
      }
    ],
    title: "Mythic Passage of the Story-Woven Streets",
    description: "From the lively departure port of Dublin, this curated legacy showcases the finest of Northern Europe. With visits to Southampton, Helsinki, Stockholm, Berlin, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.2,
    tags: ["wildlife","anniversary-cruise","general"]
  },
  {
    basePrice: 2249,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Southampton",
  "country": "United Kingdom",
  "coordinates": {
    "latitude": 50.9097,
    "longitude": -1.4044
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
    }
  }
],
      description: "Step into a world of elegance and exploration from Dublin. This wanderlust through the Northern Europe unveils stunning stops including Amsterdam, Stockholm, Southampton, all with first-class service.",
      distance: "1440 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Dublin to Amsterdam"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Southampton"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Southampton"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Eugene Wallace",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "radiant.sanctum.of.t@velarivoyages.com",
          contactNumber: "+1-179-797-4684"
        }
      }
    ],
    title: "Radiant Sanctum of the Emerald Gateway",
    description: "Step into a world of elegance and exploration from Dublin. This wanderlust through the Northern Europe unveils stunning stops including Amsterdam, Stockholm, Southampton, all with first-class service.",
    rating: 4.3,
    tags: ["culinary","cruise-adventure"]
  },
  {
    basePrice: 4713,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Set sail from Dublin on this midnight currents through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Southampton and Kiel, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1157 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Dublin to Southampton"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Southampton to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Logan Collins",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "dreamlike.sanctum.of@velarivoyages.com",
          contactNumber: "+1-630-807-4885"
        }
      }
    ],
    title: "Dreamlike Sanctum of the Emerald Gateway",
    description: "Set sail from Dublin on this midnight currents through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Southampton and Kiel, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 5.0,
    tags: ["adventure","seasonal"]
  },
  {
    basePrice: 8743,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Berlin",
  "country": "Germany",
  "coordinates": {
    "latitude": 52.520008,
    "longitude": 13.404954
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  },
  {
    "city": "Oslo",
    "country": "Norway",
    "coordinates": {
      "latitude": 59.9139,
      "longitude": 10.7522
    }
  },
  {
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  }
],
      description: "Set sail from Dublin for a voyage like no other. From the picturesque landscapes of Copenhagen to the lively ambiance of Oslo, this oceanic cruise will redefine your view of Northern Europe.",
      distance: "561 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Dublin to Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Berlin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Berlin"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Dean",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/51.jpg",
        contact: {
          contactEmail: "crystalline.passage.@velarivoyages.com",
          contactNumber: "+1-542-678-1869"
        }
      }
    ],
    title: "Crystalline Passage of the Story-Woven Streets",
    description: "Set sail from Dublin for a voyage like no other. From the picturesque landscapes of Copenhagen to the lively ambiance of Oslo, this oceanic cruise will redefine your view of Northern Europe.",
    rating: 4.9,
    tags: ["glacier-cruise","wildlife","sightseeing"]
  },
  {
    basePrice: 2386,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "Leave ordinary behind as you sail from Dublin across the captivating Northern Europe. Discover the distinctive personality of each destination, from Tallinn, Berlin.",
      distance: "1432 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Dublin to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Berlin"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Berlin to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "John Fox",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "hidden.elevation.of.@velarivoyages.com",
          contactNumber: "+1-840-461-2768"
        }
      }
    ],
    title: "Hidden Elevation of the Saga-Strewn Coastlines",
    description: "Leave ordinary behind as you sail from Dublin across the captivating Northern Europe. Discover the distinctive personality of each destination, from Tallinn, Berlin.",
    rating: 4.1,
    tags: ["luxury"]
  },
  {
    basePrice: 7940,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Oslo",
  "country": "Norway",
  "coordinates": {
    "latitude": 59.9139,
    "longitude": 10.7522
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
    }
  },
  {
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Oslo",
    "country": "Norway",
    "coordinates": {
      "latitude": 59.9139,
      "longitude": 10.7522
    }
  }
],
      description: "Unwind and explore on this embrace through Northern Europe, departing from Dublin. With every stop—from Southampton to Oslo—you’ll collect memories that last a lifetime.",
      distance: "1192 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dublin to Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Southampton to St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Larry Foster",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "floating.haven.of.th@velarivoyages.com",
          contactNumber: "+1-525-989-2867"
        }
      }
    ],
    title: "Floating Haven of the City of Quiet Fire",
    description: "Unwind and explore on this embrace through Northern Europe, departing from Dublin. With every stop—from Southampton to Oslo—you’ll collect memories that last a lifetime.",
    rating: 4.7,
    tags: ["holiday-cruise","luxury","repositioning"]
  },
  {
    basePrice: 7872,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Finland",
  "coordinates": {
    "latitude": 60.1695,
    "longitude": 24.9354
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  }
],
      description: "This captivating cruise from Dublin is your ticket to the captivating charm of the Northern Europe. Discover the delights of St. Petersburg, Helsinki with enriching excursions and award-winning service.",
      distance: "1138 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Dublin to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Nathan Fisher",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "riveting.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-374-539-2884"
        }
      }
    ],
    title: "Riveting Odyssey of the City of Quiet Fire",
    description: "This captivating cruise from Dublin is your ticket to the captivating charm of the Northern Europe. Discover the delights of St. Petersburg, Helsinki with enriching excursions and award-winning service.",
    rating: 4.9,
    tags: ["cruise-ship","themed-cruise","weekend-cruise"]
  },
  {
    basePrice: 5807,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "Experience the elegance of the seas on this riveting zenith through Northern Europe, starting from the illustrious port of Dublin. From Tallinn, Kiel to Berlin, each destination offers its own story, culture, and breathtaking views.",
      distance: "514 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dublin to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Kiel"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Kiel to Berlin"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Berlin to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Harold Graves",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/85.jpg",
        contact: {
          contactEmail: "celestial.solstice.o@velarivoyages.com",
          contactNumber: "+1-680-570-5915"
        }
      }
    ],
    title: "Celestial Solstice of the Runestone Realms",
    description: "Experience the elegance of the seas on this riveting zenith through Northern Europe, starting from the illustrious port of Dublin. From Tallinn, Kiel to Berlin, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.9,
    tags: ["holiday-cruise","VIP"]
  },
  {
    basePrice: 5452,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
    }
  },
  {
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "This extraordinary odyssey from Dublin offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Helsinki, Tallinn and Amsterdam, creating memories that will last a lifetime.",
      distance: "692 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dublin to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Tallinn"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Amsterdam"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thomas Hall",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "secret.oasis.of.the.@velarivoyages.com",
          contactNumber: "+1-960-152-8621"
        }
      }
    ],
    title: "Secret Oasis of the Emerald Gateway",
    description: "This extraordinary odyssey from Dublin offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Helsinki, Tallinn and Amsterdam, creating memories that will last a lifetime.",
    rating: 4.4,
    tags: ["cruise-getaway"]
  },
  {
    basePrice: 6564,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  },
  {
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "Your journey through the Northern Europe begins in Dublin, where elegance meets adventure. Explore the shores of St. Petersburg, London, Tallinn, with curated excursions and luxurious onboard amenities.",
      distance: "747 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Dublin to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to London"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from London to Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "John Keller",
        role: "Group Booking Coordinator",
        languages: ["English","Spanish","Swedish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "hidden.mythos.of.the@velarivoyages.com",
          contactNumber: "+1-528-841-4768"
        }
      }
    ],
    title: "Hidden Mythos of the Nordic Waters",
    description: "Your journey through the Northern Europe begins in Dublin, where elegance meets adventure. Explore the shores of St. Petersburg, London, Tallinn, with curated excursions and luxurious onboard amenities.",
    rating: 4.9,
    tags: ["weekend-cruise"]
  },
  {
    basePrice: 3986,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "Your discovery begins in Dublin, where every sunset on the Northern Europe horizon promises another day of discovery—from St. Petersburg, Amsterdam, Tallinn, Kiel to hidden ports of charm.",
      distance: "741 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Dublin to St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Amsterdam"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Kiel"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Sailing from Kiel to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 19",
    "end": "Day 20",
    "duration": "2 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Montgomery",
        role: "Sales Consultant",
        languages: ["English","Swedish","German","Danish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/78.jpg",
        contact: {
          contactEmail: "luxurious.eclipse.of@velarivoyages.com",
          contactNumber: "+1-588-738-9645"
        }
      }
    ],
    title: "Luxurious Eclipse of the City of Quiet Fire",
    description: "Your discovery begins in Dublin, where every sunset on the Northern Europe horizon promises another day of discovery—from St. Petersburg, Amsterdam, Tallinn, Kiel to hidden ports of charm.",
    rating: 4.6,
    tags: ["sightseeing","holiday-cruise","themed-cruise"]
  },
  {
    basePrice: 2866,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  },
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  },
  {
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "Start in the vibrant city of Dublin and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Berlin, Copenhagen, Southampton.",
      distance: "553 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Dublin to Berlin"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Berlin to Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Southampton"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Southampton to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Chambers",
        role: "Sales Consultant",
        languages: ["English","Swedish","German","Danish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/85.jpg",
        contact: {
          contactEmail: "moonlit.reverie.of.t@velarivoyages.com",
          contactNumber: "+1-237-432-7676"
        }
      }
    ],
    title: "Moonlit Reverie of the City of Quiet Fire",
    description: "Start in the vibrant city of Dublin and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Berlin, Copenhagen, Southampton.",
    rating: 4.9,
    tags: ["cruise-line","exclusive"]
  },
  {
    basePrice: 3500,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
    }
  },
  {
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "This handpicked enigma begins in Dublin and travels through Northern Europe's iconic waterscapes. Discover Berlin, Southampton, London, Amsterdam as each day brings new stories and every night offers elegant repose.",
      distance: "1400 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dublin to Berlin"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Berlin to Southampton"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Southampton to London"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from London to Amsterdam"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Genesis Hayes",
        role: "Sales Consultant",
        languages: ["English","Swedish","German","Danish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/49.jpg",
        contact: {
          contactEmail: "secret.drift.of.the.@velarivoyages.com",
          contactNumber: "+1-160-121-7123"
        }
      }
    ],
    title: "Secret Drift of the City of Quiet Fire",
    description: "This handpicked enigma begins in Dublin and travels through Northern Europe's iconic waterscapes. Discover Berlin, Southampton, London, Amsterdam as each day brings new stories and every night offers elegant repose.",
    rating: 4.6,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 3676,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Southampton",
  "country": "United Kingdom",
  "coordinates": {
    "latitude": 50.9097,
    "longitude": -1.4044
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
    }
  }
],
      description: "Sail from Dublin into a world of wonder. The Northern Europe beckons with unforgettable ports like Amsterdam, Southampton, where every view is picture-perfect and every moment is priceless.",
      distance: "1083 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Dublin to Amsterdam"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Southampton"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Southampton"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Palmer",
        role: "Sales Consultant",
        languages: ["English","Swedish","German","Danish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "sundrenched.explorat@velarivoyages.com",
          contactNumber: "+1-200-349-5014"
        }
      }
    ],
    title: "Sun-Drenched Exploration of the City of Quiet Fire",
    description: "Sail from Dublin into a world of wonder. The Northern Europe beckons with unforgettable ports like Amsterdam, Southampton, where every view is picture-perfect and every moment is priceless.",
    rating: 4.4,
    tags: ["historical"]
  },
  {
    basePrice: 7816,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    arrivalLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 53.349805,
    "longitude": -6.26031
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  },
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "From the lively departure port of Dublin, this curated sanctum showcases the finest of Northern Europe. With visits to London, Copenhagen, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "595 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Dublin to London"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from London to Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Dublin"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Mia Jennings",
        role: "Sales Consultant",
        languages: ["English","Swedish","German","Danish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "forbidden.arcadia.of@velarivoyages.com",
          contactNumber: "+1-300-335-5541"
        }
      }
    ],
    title: "Forbidden Arcadia of the Literary Capital",
    description: "From the lively departure port of Dublin, this curated sanctum showcases the finest of Northern Europe. With visits to London, Copenhagen, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.5,
    tags: ["cruise-holiday","cruise-vacation"]
  }
];
