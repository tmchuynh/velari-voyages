import { Cruise } from "@/lib/interfaces/services/cruises";

export const dublinCruises: Cruise[] = [
  {
    basePrice: 7349,
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
    hasPopularDestination: false,
    category: "fjords-tour",
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
      description: "Leave stress behind with this curated embrace from Dublin. Sail across the best of Northern Europe and explore treasures like Southampton, Berlin, Copenhagen with comfort and style.",
      distance: "938 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Dublin to Southampton"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Southampton to Berlin"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
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
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Emily Dixon",
        role: "Travel Advisor",
        languages: ["English","German","Greek","Russian","Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
        contact: {
          contactEmail: "riveting.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-505-846-1965"
        }
      }
    ],
    title: "Riveting Mythos of the Twilight in Stone",
    description: "Leave stress behind with this curated embrace from Dublin. Sail across the best of Northern Europe and explore treasures like Southampton, Berlin, Copenhagen with comfort and style.",
    rating: 4.7,
    tags: ["general","fall-cruise","VIP"]
  },
  {
    basePrice: 1081,
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
    category: "repositioning-cruise",
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
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
      description: "Launch into adventure from Dublin and sail deep into the heart of the Northern Europe. With ports of call like Kiel, Copenhagen, London, Amsterdam, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1061 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Dublin to Kiel"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Kiel to Copenhagen"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to London"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from London to Amsterdam"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Dublin"
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
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Angela Clark",
        role: "Travel Advisor",
        languages: ["English","German","Greek","Russian","Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "serene.retreat.of.th@velarivoyages.com",
          contactNumber: "+1-637-295-1784"
        }
      }
    ],
    title: "Serene Retreat of the Saga-Strewn Coastlines",
    description: "Launch into adventure from Dublin and sail deep into the heart of the Northern Europe. With ports of call like Kiel, Copenhagen, London, Amsterdam, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 5.0,
    tags: ["cultural","seasonal","cruise-excursion"]
  },
  {
    basePrice: 5382,
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
    category: "glacier-cruise",
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
    "city": "Stockholm",
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
      description: "Depart from iconic Dublin and traverse the Northern Europe with visits to Oslo, Tallinn, Stockholm, Helsinki. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "902 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Dublin to Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Dublin"
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
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Helsinki"
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
        name: "Eleanor Dean",
        role: "Travel Advisor",
        languages: ["English","German","Greek","Russian","Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "serene.zenith.of.the@velarivoyages.com",
          contactNumber: "+1-922-231-6468"
        }
      }
    ],
    title: "Serene Zenith of the Saga-Strewn Coastlines",
    description: "Depart from iconic Dublin and traverse the Northern Europe with visits to Oslo, Tallinn, Stockholm, Helsinki. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.4,
    tags: ["cruise","cruise-journey"]
  },
  {
    basePrice: 5495,
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
    category: "luxury-cruise",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
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
      description: "Let this sublime voyage redefine your idea of travel. From Dublin, explore the Northern Europe in luxurious comfort, stopping at Helsinki, Copenhagen, Kiel where every port offers a new chapter.",
      distance: "1385 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Dublin to Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Kiel"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
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
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Jennings",
        role: "Travel Advisor",
        languages: ["English","German","Greek","Russian","Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "lavish.quest.of.the.@velarivoyages.com",
          contactNumber: "+1-254-374-8646"
        }
      }
    ],
    title: "Lavish Quest of the Twilight in Stone",
    description: "Let this sublime voyage redefine your idea of travel. From Dublin, explore the Northern Europe in luxurious comfort, stopping at Helsinki, Copenhagen, Kiel where every port offers a new chapter.",
    rating: 4.9,
    tags: ["tropical","weekend-cruise"]
  },
  {
    basePrice: 2231,
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
  "city": "Stockholm",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set off on a tranquility from Dublin that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Berlin, Stockholm.",
      distance: "1085 nautical miles",
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
    "description": "Sailing from Berlin to Stockholm"
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
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Kinsley Keller",
        role: "Travel Advisor",
        languages: ["English","German","Greek","Russian","Portuguese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "opulent.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-502-834-7071"
        }
      }
    ],
    title: "Opulent Retreat of the Snow-Kissed Harbors",
    description: "Set off on a tranquility from Dublin that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Berlin, Stockholm.",
    rating: 5.0,
    tags: ["cruise-line","seasonal"]
  },
  {
    basePrice: 8744,
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
    category: "weekend-cruise",
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
    "city": "Southampton",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 50.9097,
      "longitude": -1.4044
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
      description: "Experience coastal elegance on this requiem from Dublin, where the journey through Northern Europe includes stops in Oslo, Southampton, Copenhagen, each more enchanting than the last.",
      distance: "1132 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dublin to Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Oslo to Southampton"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Southampton to Copenhagen"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Dublin"
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
    "description": "Exploring Oslo"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Skylar Lawson",
        role: "Travel Advisor",
        languages: ["English","German","Greek","Russian","Portuguese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "sublime.mirage.of.th@velarivoyages.com",
          contactNumber: "+1-209-378-7091"
        }
      }
    ],
    title: "Sublime Mirage of the Story-Woven Streets",
    description: "Experience coastal elegance on this requiem from Dublin, where the journey through Northern Europe includes stops in Oslo, Southampton, Copenhagen, each more enchanting than the last.",
    rating: 4.6,
    tags: ["cultural"]
  },
  {
    basePrice: 9972,
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
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
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
    "city": "Helsinki",
    "country": "Finland",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
      description: "Step into a world of elegance and exploration from Dublin. This expedition through the Northern Europe unveils stunning stops including Amsterdam, Helsinki, Berlin, Kiel, all with first-class service.",
      distance: "1094 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dublin to Amsterdam"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Berlin"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Berlin to Kiel"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
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
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 18",
    "end": "Day 18",
    "duration": "1 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Harper Day",
        role: "Travel Advisor",
        languages: ["English","German","Greek","Russian","Portuguese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "hidden.enigma.of.the@velarivoyages.com",
          contactNumber: "+1-207-164-8770"
        }
      }
    ],
    title: "Hidden Enigma of the Frosted Kingdoms",
    description: "Step into a world of elegance and exploration from Dublin. This expedition through the Northern Europe unveils stunning stops including Amsterdam, Helsinki, Berlin, Kiel, all with first-class service.",
    rating: 4.8,
    tags: ["VIP","cruise-vacation","cruise-getaway"]
  },
  {
    basePrice: 5439,
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
    category: "holiday-cruise",
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
    "city": "Oslo",
    "country": "Norway",
    "coordinates": {
      "latitude": 59.9139,
      "longitude": 10.7522
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
      description: "Let this majestic voyage redefine your idea of travel. From Dublin, explore the Northern Europe in luxurious comfort, stopping at Southampton, Oslo where every port offers a new chapter.",
      distance: "905 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Dublin to Southampton"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Southampton to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Oslo to Dublin"
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
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samantha Ellis",
        role: "Travel Advisor",
        languages: ["English","German","Greek","Russian","Portuguese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "mythic.serenade.of.t@velarivoyages.com",
          contactNumber: "+1-115-977-8585"
        }
      }
    ],
    title: "Mythic Serenade of the Emerald Gateway",
    description: "Let this majestic voyage redefine your idea of travel. From Dublin, explore the Northern Europe in luxurious comfort, stopping at Southampton, Oslo where every port offers a new chapter.",
    rating: 4.7,
    tags: ["long-distance"]
  },
  {
    basePrice: 6215,
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
    hasPopularDestination: true,
    category: "anniversary-cruise",
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
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
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
    "city": "Dublin",
    "country": "Ireland",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 53.349805,
      "longitude": -6.26031
    }
  }
],
      description: "Your embrace begins in Dublin, where the spirit of exploration meets modern luxury. From the sun-drenched shores of St. Petersburg to the historic streets of London, each stop in the Northern Europe will leave a lasting impression.",
      distance: "585 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Dublin to St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to London"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from London to Kiel"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Kiel to Stockholm"
  },
  {
    "start": "Day 19",
    "end": "Day 19",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Dublin"
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
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 20",
    "end": "Day 20",
    "duration": "1 days",
    "description": "Exploring Dublin"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Isabella Hayes",
        role: "Travel Advisor",
        languages: ["English","German","Greek","Russian","Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "pristine.infinite.of@velarivoyages.com",
          contactNumber: "+1-809-565-2016"
        }
      }
    ],
    title: "Pristine Infinite of the Twilight in Stone",
    description: "Your embrace begins in Dublin, where the spirit of exploration meets modern luxury. From the sun-drenched shores of St. Petersburg to the historic streets of London, each stop in the Northern Europe will leave a lasting impression.",
    rating: 4.4,
    tags: ["tropical"]
  },
  {
    basePrice: 9400,
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
  "city": "Stockholm",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Embark on an unforgettable journey from the vibrant port of Dublin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at London, Stockholm, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1407 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dublin to London"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from London to Stockholm"
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
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lisa Curtis",
        role: "Travel Advisor",
        languages: ["English","German","Greek","Russian","Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "breathtaking.pulse.o@velarivoyages.com",
          contactNumber: "+1-606-435-8368"
        }
      }
    ],
    title: "Breathtaking Pulse of the Literary Capital",
    description: "Embark on an unforgettable journey from the vibrant port of Dublin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at London, Stockholm, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.4,
    tags: ["exclusive"]
  }
];
