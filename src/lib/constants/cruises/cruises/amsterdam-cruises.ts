import { Cruise } from "@/lib/interfaces/services/cruises";

export const amsterdamCruises: Cruise[] = [
  {
    basePrice: 3794,
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
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
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
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "An escape like no other begins in Amsterdam, where your sanctum launches into the heart of Northern Europe. Discover the magic of Helsinki, Tallinn, London with style and sophistication.",
      distance: "1411 nautical miles",
      totalDuration: "15 days",
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
    "description": "Sailing from Helsinki to Tallinn"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Tallinn to London"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from London to Amsterdam"
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
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Maya Keller",
        role: "Marketing Coordinator",
        languages: ["English","Polish","German","Dutch"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "unforgettable.curren@velarivoyages.com",
          contactNumber: "+1-780-691-3758"
        }
      }
    ],
    title: "Unforgettable Currents of the Mist-Wrapped Lattices",
    description: "An escape like no other begins in Amsterdam, where your sanctum launches into the heart of Northern Europe. Discover the magic of Helsinki, Tallinn, London with style and sophistication.",
    rating: 4.1,
    tags: ["luxury","expedition","cruise-ship"]
  },
  {
    basePrice: 1060,
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
    category: "holiday-cruise",
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
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Explore a new side of Northern Europe with this immersive reflection starting in Amsterdam. Visit charming ports such as London, Berlin, Dublin, Helsinki, each offering its own unique rhythm.",
      distance: "944 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to London"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from London to Berlin"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Berlin to Dublin"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Dublin to Helsinki"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Amsterdam"
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
    "description": "Exploring London"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Amelia Dixon",
        role: "Marketing Coordinator",
        languages: ["English","Polish","German","Dutch"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "breathtaking.renaiss@velarivoyages.com",
          contactNumber: "+1-138-678-5843"
        }
      }
    ],
    title: "Breathtaking Renaissance of the Snow-Kissed Harbors",
    description: "Explore a new side of Northern Europe with this immersive reflection starting in Amsterdam. Visit charming ports such as London, Berlin, Dublin, Helsinki, each offering its own unique rhythm.",
    rating: 4.8,
    tags: ["VIP","holiday-cruise"]
  },
  {
    basePrice: 9277,
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
    category: "vip-cruise",
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
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "An unforgettable mirage awaits as you cruise from Amsterdam across Northern Europe. Dive into history, flavor, and culture with stops including Tallinn, London, Berlin.",
      distance: "525 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Tallinn to London"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from London to Berlin"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Berlin to Amsterdam"
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
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Tallinn"
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
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Harper",
        role: "Marketing Coordinator",
        languages: ["English","Polish","German","Dutch"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "mythic.elevation.of.@velarivoyages.com",
          contactNumber: "+1-198-381-9799"
        }
      }
    ],
    title: "Mythic Elevation of the Frosted Kingdoms",
    description: "An unforgettable mirage awaits as you cruise from Amsterdam across Northern Europe. Dive into history, flavor, and culture with stops including Tallinn, London, Berlin.",
    rating: 4.0,
    tags: ["repositioning","cruise-excursion"]
  },
  {
    basePrice: 8865,
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
    hasPopularDestination: true,
    category: "holiday-cruise",
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
    "city": "Helsinki",
    "country": "Finland",
    "coordinates": {
      "latitude": 60.1695,
      "longitude": 24.9354
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
      description: "Embark on an unforgettable drift from the vibrant port of Amsterdam, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Tallinn, Southampton, Oslo, Helsinki, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1476 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Tallinn"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Southampton"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Southampton to Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Oslo to Helsinki"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Amsterdam"
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
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Dorothy Coleman",
        role: "Marketing Coordinator",
        languages: ["English","Polish","German","Dutch"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        contact: {
          contactEmail: "secret.embrace.of.th@velarivoyages.com",
          contactNumber: "+1-128-111-7266"
        }
      }
    ],
    title: "Secret Embrace of the Golden Age Haven",
    description: "Embark on an unforgettable drift from the vibrant port of Amsterdam, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Tallinn, Southampton, Oslo, Helsinki, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.4,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 6339,
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
    hasPopularDestination: false,
    category: "weekend-cruise",
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
    "city": "Tallinn",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Depart from iconic Amsterdam and traverse the Northern Europe with visits to Southampton, Berlin, Tallinn. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "995 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Southampton to Berlin"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Berlin to Tallinn"
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
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Olivia Fletcher",
        role: "Marketing Coordinator",
        languages: ["English","Polish","German","Dutch"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "epic.pilgrimage.of.t@velarivoyages.com",
          contactNumber: "+1-376-122-1203"
        }
      }
    ],
    title: "Epic Pilgrimage of the Nordic Waters",
    description: "Depart from iconic Amsterdam and traverse the Northern Europe with visits to Southampton, Berlin, Tallinn. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.0,
    tags: ["cruise-line","adventure","luxury"]
  },
  {
    basePrice: 8800,
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
    category: "fall-foliage-cruise",
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
    "city": "Dublin",
    "country": "Ireland",
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
      description: "From the lively departure port of Amsterdam, this curated requiem showcases the finest of Northern Europe. With visits to Dublin, Copenhagen, Helsinki, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1128 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to Dublin"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Dublin to Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Helsinki to Amsterdam"
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
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samantha Gardner",
        role: "Marketing Coordinator",
        languages: ["English","Polish","German","Dutch"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "unforgettable.arcadi@velarivoyages.com",
          contactNumber: "+1-300-714-7672"
        }
      }
    ],
    title: "Unforgettable Arcadia of the Golden Age Haven",
    description: "From the lively departure port of Amsterdam, this curated requiem showcases the finest of Northern Europe. With visits to Dublin, Copenhagen, Helsinki, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.1,
    tags: ["general","wildlife"]
  },
  {
    basePrice: 9031,
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
    category: "vip-cruise",
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
    "city": "Berlin",
    "country": "Germany",
    "coordinates": {
      "latitude": 52.520008,
      "longitude": 13.404954
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
      description: "Set sail from Amsterdam on this forbidden zenith through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Copenhagen and Berlin, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "641 nautical miles",
      totalDuration: "11 days",
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
    "description": "Sailing from Copenhagen to Berlin"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Berlin to Amsterdam"
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
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Barbara Dunn",
        role: "Marketing Coordinator",
        languages: ["English","Polish","German","Dutch"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "ornate.symphony.of.t@velarivoyages.com",
          contactNumber: "+1-323-126-6829"
        }
      }
    ],
    title: "Ornate Symphony of the Reflections of the Past",
    description: "Set sail from Amsterdam on this forbidden zenith through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Copenhagen and Berlin, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.1,
    tags: ["cruise-ship"]
  },
  {
    basePrice: 6573,
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
    category: "glacier-cruise",
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
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
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
      description: "Let the waves lead you from Amsterdam on this awe-inspiring exploration. Traverse the iconic waters of Northern Europe and discover the beauty of London, St. Petersburg.",
      distance: "532 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Amsterdam to London"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from London to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
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
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Olivia Palmer",
        role: "Marketing Coordinator",
        languages: ["English","Polish","German","Dutch"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "tidewashed.elevation@velarivoyages.com",
          contactNumber: "+1-140-494-7046"
        }
      }
    ],
    title: "Tide-Washed Elevation of the Snow-Kissed Harbors",
    description: "Let the waves lead you from Amsterdam on this awe-inspiring exploration. Traverse the iconic waters of Northern Europe and discover the beauty of London, St. Petersburg.",
    rating: 4.4,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 3059,
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
    category: "theme-cruise",
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
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Northern Europe",
    "coordinates": {
      "latitude": 52.377956,
      "longitude": 4.89707
    }
  }
],
      description: "Join us in Amsterdam for a reflection of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like Southampton, Helsinki, London, Copenhagen where timeless traditions meet modern luxuries.",
      distance: "753 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Southampton"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Southampton to Helsinki"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Helsinki to London"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from London to Copenhagen"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
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
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Helsinki"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Amsterdam"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Allison Curtis",
        role: "Marketing Coordinator",
        languages: ["English","Polish","German","Dutch"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "heavenly.tranquility@velarivoyages.com",
          contactNumber: "+1-672-764-6129"
        }
      }
    ],
    title: "Heavenly Tranquility of the Canal Crown",
    description: "Join us in Amsterdam for a reflection of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like Southampton, Helsinki, London, Copenhagen where timeless traditions meet modern luxuries.",
    rating: 4.2,
    tags: ["sightseeing"]
  },
  {
    basePrice: 5314,
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
  "city": "Kiel",
  "country": "Germany",
  "coordinates": {
    "latitude": 54.3233,
    "longitude": 10.1228
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
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
    "city": "Kiel",
    "country": "Germany",
    "coordinates": {
      "latitude": 54.3233,
      "longitude": 10.1228
    }
  }
],
      description: "Savor each moment of this transcendent escape through Northern Europe, starting in Amsterdam. Visit renowned locations like Copenhagen, London, Tallinn, Kiel, where adventure and relaxation intertwine.",
      distance: "902 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Amsterdam to Copenhagen"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Copenhagen to London"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from London to Tallinn"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Tallinn to Kiel"
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
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Kiel"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Avery Baker",
        role: "Marketing Coordinator",
        languages: ["English","Polish","German","Dutch"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        contact: {
          contactEmail: "majestic.renaissance@velarivoyages.com",
          contactNumber: "+1-598-422-9166"
        }
      }
    ],
    title: "Majestic Renaissance of the Golden Age Haven",
    description: "Savor each moment of this transcendent escape through Northern Europe, starting in Amsterdam. Visit renowned locations like Copenhagen, London, Tallinn, Kiel, where adventure and relaxation intertwine.",
    rating: 4.5,
    tags: ["cruise"]
  }
];
