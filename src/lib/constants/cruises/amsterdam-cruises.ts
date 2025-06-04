import { Cruise } from "@/lib/interfaces/services/cruises";

export const amsterdamCruises: Cruise[] = [
{
    basePrice: 2333,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Begin an epic zenith from Amsterdam, where the seas meet culture. Visit the remarkable ports of Stockholm, Oslo, Copenhagen while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1207 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Oslo to Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bella Cooper",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "velvet.drift.of.the.@velarivoyages.com",
          contactNumber: "+1-882-346-4790"
        }
      }
    ],
    title: "Velvet Drift of the Iron Age Isles",
    description: "Begin an epic zenith from Amsterdam, where the seas meet culture. Visit the remarkable ports of Stockholm, Oslo, Copenhagen while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.1,
    tags: ["general"]
  },
  {
    basePrice: 9133,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Oslo",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Set sail from Amsterdam on this tranquil enigma through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Stockholm and Oslo, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1106 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Emma Chambers",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "sublime.currents.of.@velarivoyages.com",
          contactNumber: "+1-801-917-9527"
        }
      }
    ],
    title: "Sublime Currents of the Reflections of the Past",
    description: "Set sail from Amsterdam on this tranquil enigma through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Stockholm and Oslo, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.8,
    tags: ["tropical"]
  },
  {
    basePrice: 7154,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Set sail from Amsterdam for a voyage like no other. From the picturesque landscapes of Helsinki to the lively ambiance of Oslo, this breathtaking cruise will redefine your view of Northern Europe.",
      distance: "858 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Allison Gardner",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
        contact: {
          contactEmail: "midnight.reunion.of.@velarivoyages.com",
          contactNumber: "+1-298-177-9247"
        }
      }
    ],
    title: "Midnight Reunion of the Reflections of the Past",
    description: "Set sail from Amsterdam for a voyage like no other. From the picturesque landscapes of Helsinki to the lively ambiance of Oslo, this breathtaking cruise will redefine your view of Northern Europe.",
    rating: 5.0,
    tags: ["seasonal","luxury","holiday-cruise"]
  },
  {
    basePrice: 9594,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "A voyage of contrasts awaits from Amsterdam. Discover the historical and natural richness of Northern Europe as you cruise to spectacular destinations like Tallinn, Oslo, Helsinki, Copenhagen.",
      distance: "696 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Oslo to Helsinki"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Copenhagen"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Grace Carpenter",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/56.jpg",
        contact: {
          contactEmail: "unforgettable.mythos@velarivoyages.com",
          contactNumber: "+1-251-774-8706"
        }
      }
    ],
    title: "Unforgettable Mythos of the Mist-Wrapped Lattices",
    description: "A voyage of contrasts awaits from Amsterdam. Discover the historical and natural richness of Northern Europe as you cruise to spectacular destinations like Tallinn, Oslo, Helsinki, Copenhagen.",
    rating: 4.4,
    tags: ["exclusive","tropical"]
  },
  {
    basePrice: 1529,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Helsinki",
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  },
  {
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Let this ornate voyage redefine your idea of travel. From Amsterdam, explore the Northern Europe in luxurious comfort, stopping at Helsinki, Stockholm, Copenhagen, Oslo where every port offers a new chapter.",
      distance: "509 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Oslo to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
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
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Ellie Grant",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "dreamlike.arcadia.of@velarivoyages.com",
          contactNumber: "+1-556-781-4815"
        }
      }
    ],
    title: "Dreamlike Arcadia of the Golden Age Haven",
    description: "Let this ornate voyage redefine your idea of travel. From Amsterdam, explore the Northern Europe in luxurious comfort, stopping at Helsinki, Stockholm, Copenhagen, Oslo where every port offers a new chapter.",
    rating: 4.6,
    tags: ["cruise-journey","tropical","luxury"]
  },
  {
    basePrice: 7239,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Experience coastal elegance on this quest from Amsterdam, where the journey through Northern Europe includes stops in Tallinn, Oslo, each more enchanting than the last.",
      distance: "1355 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Oslo to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Montgomery",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "verdant.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-519-950-9433"
        }
      }
    ],
    title: "Verdant Horizon of the Fairy Tale Villages",
    description: "Experience coastal elegance on this quest from Amsterdam, where the journey through Northern Europe includes stops in Tallinn, Oslo, each more enchanting than the last.",
    rating: 4.4,
    tags: ["general"]
  },
  {
    basePrice: 8445,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Start in the vibrant city of Amsterdam and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Stockholm, Oslo, Copenhagen.",
      distance: "952 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Oslo to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nancy Collins",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "majestic.zenith.of.t@velarivoyages.com",
          contactNumber: "+1-912-542-2836"
        }
      }
    ],
    title: "Majestic Zenith of the Reflections of the Past",
    description: "Start in the vibrant city of Amsterdam and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Stockholm, Oslo, Copenhagen.",
    rating: 4.4,
    tags: ["exclusive"]
  },
  {
    basePrice: 4748,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "",
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
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Explore a new side of Northern Europe with this extraordinary requiem starting in Amsterdam. Visit charming ports such as St. Petersburg, Helsinki, each offering its own unique rhythm.",
      distance: "1465 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Olivia Graham",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "radiancedrenched.jou@velarivoyages.com",
          contactNumber: "+1-380-147-7429"
        }
      }
    ],
    title: "Radiance-Drenched Journey of the Reflections of the Past",
    description: "Explore a new side of Northern Europe with this extraordinary requiem starting in Amsterdam. Visit charming ports such as St. Petersburg, Helsinki, each offering its own unique rhythm.",
    rating: 4.9,
    tags: ["nature","cruise-holiday","glacier-cruise"]
  },
  {
    basePrice: 8878,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
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
    "city": "Copenhagen",
    "country": "Denmark",
    "coordinates": {
      "latitude": 55.6761,
      "longitude": 12.5683
    }
  }
],
      description: "Launch into adventure from Amsterdam and sail deep into the heart of the Northern Europe. With ports of call like St. Petersburg, Copenhagen, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "664 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sarah Reeves",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "pristine.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-294-280-6049"
        }
      }
    ],
    title: "Pristine Odyssey of the Frosted Kingdoms",
    description: "Launch into adventure from Amsterdam and sail deep into the heart of the Northern Europe. With ports of call like St. Petersburg, Copenhagen, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 5.0,
    tags: ["nature"]
  },
  {
    basePrice: 1214,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Sail away from Amsterdam into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in St. Petersburg, Oslo, Stockholm, Helsinki, where history, nature, and cuisine collide.",
      distance: "709 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to St. Petersburg"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Emily Montgomery",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "radiancedrenched.oas@velarivoyages.com",
          contactNumber: "+1-902-542-8265"
        }
      }
    ],
    title: "Radiance-Drenched Oasis of the Golden Age Haven",
    description: "Sail away from Amsterdam into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in St. Petersburg, Oslo, Stockholm, Helsinki, where history, nature, and cuisine collide.",
    rating: 4.3,
    tags: ["cruise-vacation","cruise-adventure","sightseeing"]
  },
  {
    basePrice: 4843,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Oslo",
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
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
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
    "city": "St. Petersburg",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Embark on an unforgettable sanctuary from the vibrant port of Amsterdam, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Copenhagen, St. Petersburg, Oslo, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1342 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Oslo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Oslo"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Hannah Fox",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/92.jpg",
        contact: {
          contactEmail: "exquisite.exploratio@velarivoyages.com",
          contactNumber: "+1-824-595-8566"
        }
      }
    ],
    title: "Exquisite Exploration of the Snow-Kissed Harbors",
    description: "Embark on an unforgettable sanctuary from the vibrant port of Amsterdam, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Copenhagen, St. Petersburg, Oslo, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.8,
    tags: ["cruise-adventure"]
  },
  {
    basePrice: 2250,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
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
    "city": "Helsinki",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
      description: "Explore a new side of Northern Europe with this moonlit infinite starting in Amsterdam. Visit charming ports such as Stockholm, Helsinki, Copenhagen, each offering its own unique rhythm.",
      distance: "925 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Copenhagen"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Catherine Reeves",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "moonlit.reflection.o@velarivoyages.com",
          contactNumber: "+1-336-990-3647"
        }
      }
    ],
    title: "Moonlit Reflection of the Runestone Realms",
    description: "Explore a new side of Northern Europe with this moonlit infinite starting in Amsterdam. Visit charming ports such as Stockholm, Helsinki, Copenhagen, each offering its own unique rhythm.",
    rating: 4.2,
    tags: ["themed-cruise","cruise-line","VIP"]
  },
  {
    basePrice: 4597,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Helsinki",
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
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Experience the elegance of the seas on this riveting quest through Northern Europe, starting from the illustrious port of Amsterdam. From Helsinki to Stockholm, each destination offers its own story, culture, and breathtaking views.",
      distance: "1022 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Helsinki"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Chloe Dunn",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "infinite.haven.of.th@velarivoyages.com",
          contactNumber: "+1-524-726-5090"
        }
      }
    ],
    title: "Infinite Haven of the Waterborne Enigma",
    description: "Experience the elegance of the seas on this riveting quest through Northern Europe, starting from the illustrious port of Amsterdam. From Helsinki to Stockholm, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.5,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 1715,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
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
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Discover the wonders of Northern Europe aboard this golden cruise departing from Amsterdam. Journey through crystal waters to explore the treasures of Copenhagen, Oslo, Stockholm, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "701 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Copenhagen"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Oslo to Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Oslo"
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
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Ella Wells",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
        contact: {
          contactEmail: "pearlescent.resonanc@velarivoyages.com",
          contactNumber: "+1-616-187-3321"
        }
      }
    ],
    title: "Pearlescent Resonance of the Aurora Veil",
    description: "Discover the wonders of Northern Europe aboard this golden cruise departing from Amsterdam. Journey through crystal waters to explore the treasures of Copenhagen, Oslo, Stockholm, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.5,
    tags: ["cruise-excursion","cruise-holiday","glacier-cruise"]
  },
  {
    basePrice: 8664,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
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
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
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
    "city": "Stockholm",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Leave ordinary behind as you sail from Amsterdam across the captivating Northern Europe. Discover the distinctive personality of each destination, from Tallinn, Stockholm.",
      distance: "1056 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Stockholm"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Brenda Campbell",
        role: "Cruise Specialist",
        languages: ["Norwegian","French"],
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "infinite.quest.of.th@velarivoyages.com",
          contactNumber: "+1-123-788-7032"
        }
      }
    ],
    title: "Infinite Quest of the Crown Jewel Capitals",
    description: "Leave ordinary behind as you sail from Amsterdam across the captivating Northern Europe. Discover the distinctive personality of each destination, from Tallinn, Stockholm.",
    rating: 4.8,
    tags: ["exclusive","culinary","holiday-cruise"]
  },
  {
    basePrice: 7274,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Tallinn",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Cruise into cultural richness aboard this starlit symphony departing Amsterdam. Savor local cuisine and uncover regional beauty from Stockholm to Oslo.",
      distance: "864 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Stockholm"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Oslo to Tallinn"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Reeves",
        role: "Sales Consultant",
        languages: ["Bengali","Marathi"],
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "mesmerizing.embrace.@velarivoyages.com",
          contactNumber: "+1-820-643-3773"
        }
      }
    ],
    title: "Mesmerizing Embrace of the Snow-Kissed Harbors",
    description: "Cruise into cultural richness aboard this starlit symphony departing Amsterdam. Savor local cuisine and uncover regional beauty from Stockholm to Oslo.",
    rating: 4.1,
    tags: ["themed-cruise","seasonal"]
  },
  {
    basePrice: 1990,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
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
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Launch into adventure from Amsterdam and sail deep into the heart of the Northern Europe. With ports of call like St. Petersburg, Oslo, Copenhagen, Stockholm, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "985 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to St. Petersburg"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Oslo to Copenhagen"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Stockholm"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Stockholm to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Anna Porter",
        role: "Sales Consultant",
        languages: ["Bengali","Marathi"],
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "infinite.pulse.of.th@velarivoyages.com",
          contactNumber: "+1-821-435-8661"
        }
      }
    ],
    title: "Infinite Pulse of the Windswept Elegance",
    description: "Launch into adventure from Amsterdam and sail deep into the heart of the Northern Europe. With ports of call like St. Petersburg, Oslo, Copenhagen, Stockholm, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.1,
    tags: ["cultural","cruise-experience"]
  },
  {
    basePrice: 8696,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Begin your journey in Amsterdam, where tradition meets travel. This immersive pulse reveals the finest of Northern Europe, from the beaches of Copenhagen to the streets of Tallinn.",
      distance: "984 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Tallinn to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nora Dunn",
        role: "Sales Consultant",
        languages: ["Bengali","Marathi"],
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "epic.passage.of.the.@velarivoyages.com",
          contactNumber: "+1-280-995-4232"
        }
      }
    ],
    title: "Epic Passage of the Dutch Jewel",
    description: "Begin your journey in Amsterdam, where tradition meets travel. This immersive pulse reveals the finest of Northern Europe, from the beaches of Copenhagen to the streets of Tallinn.",
    rating: 4.0,
    tags: ["cultural","wellness"]
  },
  {
    basePrice: 4081,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  },
  {
    "city": "Helsinki",
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
    "city": "Oslo",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Escape to sea from Amsterdam on a epic voyage exploring the magic of Northern Europe. Visit unforgettable locales like Helsinki, Stockholm, Oslo, St. Petersburg, where each stop inspires awe.",
      distance: "1102 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Helsinki"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Oslo"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Oslo to St. Petersburg"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 20",
    "end": "Day 21",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Avery Curtis",
        role: "Sales Consultant",
        languages: ["Bengali","Marathi"],
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "harmonic.zenith.of.t@velarivoyages.com",
          contactNumber: "+1-693-118-3335"
        }
      }
    ],
    title: "Harmonic Zenith of the Mist-Wrapped Lattices",
    description: "Escape to sea from Amsterdam on a epic voyage exploring the magic of Northern Europe. Visit unforgettable locales like Helsinki, Stockholm, Oslo, St. Petersburg, where each stop inspires awe.",
    rating: 4.8,
    tags: ["cruise","holiday-cruise"]
  },
  {
    basePrice: 7792,
    departureLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    arrivalLocation: {
  "city": "Amsterdam",
  "country": "Netherlands",
  "region": "Northern Europe",
  "coordinates": {
    "latitude": 52.377956,
    "longitude": 4.89707
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
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
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Savor each moment of this majestic escape through Northern Europe, starting in Amsterdam. Visit renowned locations like St. Petersburg, Helsinki, Stockholm, where adventure and relaxation intertwine.",
      distance: "1014 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to St. Petersburg"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Helsinki"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Helsinki to Stockholm"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Stockholm to Amsterdam"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Stockholm"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Donna Douglas",
        role: "Sales Consultant",
        languages: ["Bengali","Marathi"],
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "whispering.journey.o@velarivoyages.com",
          contactNumber: "+1-247-768-6614"
        }
      }
    ],
    title: "Whispering Journey of the Golden Age Haven",
    description: "Savor each moment of this majestic escape through Northern Europe, starting in Amsterdam. Visit renowned locations like St. Petersburg, Helsinki, Stockholm, where adventure and relaxation intertwine.",
    rating: 4.4,
    tags: ["culinary","weekend-cruise"]
  }
];
