import { Cruise } from "@/lib/interfaces/services/cruises";

export const tokyoCruises: Cruise[] = [
{
    basePrice: 6137,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Shanghai",
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Your journey through the Asia Pacific begins in Tokyo, where elegance meets adventure. Explore the shores of Shanghai, Auckland, Sydney, with curated excursions and luxurious onboard amenities.",
      distance: "1053 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Shanghai"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Auckland"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Auckland to Sydney"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Sydney to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alexander Dixon",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "midnight.drift.of.th@velarivoyages.com",
          contactNumber: "+1-929-272-1311"
        }
      }
    ],
    title: "Midnight Drift of the Volcanic Outposts",
    description: "Your journey through the Asia Pacific begins in Tokyo, where elegance meets adventure. Explore the shores of Shanghai, Auckland, Sydney, with curated excursions and luxurious onboard amenities.",
    rating: 4.2,
    tags: ["cruise-line","themed-cruise","cruise-journey"]
  },
  {
    basePrice: 5544,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Shanghai",
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    }
  },
  {
    "city": "Kyoto",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.0116,
      "longitude": 135.7681
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Let the spirit of exploration guide your tranquil journey from Tokyo. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Shanghai, Kyoto.",
      distance: "600 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Shanghai"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Kyoto"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Kyoto to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Edward Ellis",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "heavenly.realm.of.th@velarivoyages.com",
          contactNumber: "+1-686-324-8977"
        }
      }
    ],
    title: "Heavenly Realm of the Neon Capital",
    description: "Let the spirit of exploration guide your tranquil journey from Tokyo. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Shanghai, Kyoto.",
    rating: 4.1,
    tags: ["general","tropical"]
  },
  {
    basePrice: 1121,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Melbourne",
    "country": "Australia",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  },
  {
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
    }
  },
  {
    "city": "Yokohama",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.4437,
      "longitude": 139.638
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "From bustling Tokyo to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Sydney, Melbourne, Bali, Yokohama deliver a balanced blend of culture and comfort.",
      distance: "604 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Sydney"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Sydney to Melbourne"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Bali"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Bali to Yokohama"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Yokohama to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Frank Price",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "immersive.horizon.of@velarivoyages.com",
          contactNumber: "+1-963-178-6317"
        }
      }
    ],
    title: "Immersive Horizon of the Temple of Lights",
    description: "From bustling Tokyo to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Sydney, Melbourne, Bali, Yokohama deliver a balanced blend of culture and comfort.",
    rating: 4.0,
    tags: ["cruise-vacation"]
  },
  {
    basePrice: 8395,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Melbourne",
    "country": "Australia",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  },
  {
    "city": "Yokohama",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.4437,
      "longitude": 139.638
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Launch into adventure from Tokyo and sail deep into the heart of the Asia Pacific. With ports of call like Melbourne, Yokohama, Auckland, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "803 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Melbourne"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Melbourne to Yokohama"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Yokohama to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Blake Fletcher",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "celestial.oasis.of.t@velarivoyages.com",
          contactNumber: "+1-157-791-6298"
        }
      }
    ],
    title: "Celestial Oasis of the Shimmering Contradiction",
    description: "Launch into adventure from Tokyo and sail deep into the heart of the Asia Pacific. With ports of call like Melbourne, Yokohama, Auckland, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.2,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 3577,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Depart from iconic Tokyo and traverse the Asia Pacific with visits to Sydney, Singapore. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1480 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Sydney"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Sydney to Singapore"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Singapore to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Justin Hall",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/0.jpg",
        contact: {
          contactEmail: "majestic.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-637-294-8514"
        }
      }
    ],
    title: "Majestic Eclipse of the Neon Capital",
    description: "Depart from iconic Tokyo and traverse the Asia Pacific with visits to Sydney, Singapore. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.1,
    tags: ["expedition","cruise-experience"]
  },
  {
    basePrice: 8333,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Yokohama",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.4437,
      "longitude": 139.638
    }
  },
  {
    "city": "Shanghai",
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Escape the everyday with this enchanting journey through Asia Pacific, departing from Tokyo. You'll visit Yokohama, Shanghai, where every stop is a new adventure.",
      distance: "1304 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Yokohama"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Yokohama to Shanghai"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Price",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "exquisite.panorama.o@velarivoyages.com",
          contactNumber: "+1-236-501-8666"
        }
      }
    ],
    title: "Exquisite Panorama of the Oceanic Wonders",
    description: "Escape the everyday with this enchanting journey through Asia Pacific, departing from Tokyo. You'll visit Yokohama, Shanghai, where every stop is a new adventure.",
    rating: 4.8,
    tags: ["tropical","cruise","cruise-vacation"]
  },
  {
    basePrice: 4632,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "coordinates": {
    "latitude": -36.848461,
    "longitude": 174.763336
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Shanghai",
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    }
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  }
],
      description: "Let the waves lead you from Tokyo on this immersive mirage. Traverse the iconic waters of Asia Pacific and discover the beauty of Shanghai, Bangkok, Auckland.",
      distance: "806 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Shanghai"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Bangkok"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Bangkok to Auckland"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Auckland"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Dennis Grant",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/47.jpg",
        contact: {
          contactEmail: "pearlescent.elevatio@velarivoyages.com",
          contactNumber: "+1-921-186-7874"
        }
      }
    ],
    title: "Pearlescent Elevation of the Temple of Lights",
    description: "Let the waves lead you from Tokyo on this immersive mirage. Traverse the iconic waters of Asia Pacific and discover the beauty of Shanghai, Bangkok, Auckland.",
    rating: 4.4,
    tags: ["luxury"]
  },
  {
    basePrice: 7905,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Escape the everyday with this panoramic journey through Asia Pacific, departing from Tokyo. You'll visit Auckland, Bangkok, Singapore, Sydney, where every stop is a new adventure.",
      distance: "787 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Auckland"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Auckland to Bangkok"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Singapore"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Singapore to Sydney"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Sydney to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ralph Hawkins",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
        contact: {
          contactEmail: "immersive.eclipse.of@velarivoyages.com",
          contactNumber: "+1-675-874-2801"
        }
      }
    ],
    title: "Immersive Eclipse of the Wired Infinity",
    description: "Escape the everyday with this panoramic journey through Asia Pacific, departing from Tokyo. You'll visit Auckland, Bangkok, Singapore, Sydney, where every stop is a new adventure.",
    rating: 4.7,
    tags: ["relaxation"]
  },
  {
    basePrice: 1657,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Yokohama",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.4437,
      "longitude": 139.638
    }
  },
  {
    "city": "Hong Kong",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Begin your journey in Tokyo, where tradition meets travel. This immersive infinite reveals the finest of Asia Pacific, from the beaches of Yokohama to the streets of Hong Kong.",
      distance: "1122 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Yokohama"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Yokohama to Hong Kong"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Sydney"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Sydney to Ho Chi Minh City"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jason Russell",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "captivating.enigma.o@velarivoyages.com",
          contactNumber: "+1-755-756-6314"
        }
      }
    ],
    title: "Captivating Enigma of the Island Kingdoms",
    description: "Begin your journey in Tokyo, where tradition meets travel. This immersive infinite reveals the finest of Asia Pacific, from the beaches of Yokohama to the streets of Hong Kong.",
    rating: 4.2,
    tags: ["repositioning","cruise-experience","expedition"]
  },
  {
    basePrice: 9936,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Melbourne",
    "country": "Australia",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  }
],
      description: "Escape to sea from Tokyo on a verdant voyage exploring the magic of Asia Pacific. Visit unforgettable locales like Melbourne, Bangkok, where each stop inspires awe.",
      distance: "936 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Melbourne"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Melbourne to Bangkok"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Louis Collins",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
        contact: {
          contactEmail: "serene.labyrinth.of.@velarivoyages.com",
          contactNumber: "+1-931-798-5739"
        }
      }
    ],
    title: "Serene Labyrinth of the Shimmering Contradiction",
    description: "Escape to sea from Tokyo on a verdant voyage exploring the magic of Asia Pacific. Visit unforgettable locales like Melbourne, Bangkok, where each stop inspires awe.",
    rating: 4.3,
    tags: ["nature"]
  },
  {
    basePrice: 1289,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Hong Kong",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Shanghai",
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "This requiem takes you beyond the ordinary, starting in Tokyo. With breathtaking stops in Hong Kong, Singapore, Shanghai, Sydney, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1063 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Hong Kong"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Singapore"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Singapore to Shanghai"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Shanghai to Sydney"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Sydney to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Antonio Sutton",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "captivating.mirage.o@velarivoyages.com",
          contactNumber: "+1-218-515-4691"
        }
      }
    ],
    title: "Captivating Mirage of the Lotus-Lined Waters",
    description: "This requiem takes you beyond the ordinary, starting in Tokyo. With breathtaking stops in Hong Kong, Singapore, Shanghai, Sydney, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.5,
    tags: ["holiday-cruise"]
  },
  {
    basePrice: 9777,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Shanghai",
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  },
  {
    "city": "Hong Kong",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Begin an epic sanctuary from Tokyo, where the seas meet culture. Visit the remarkable ports of Shanghai, Auckland, Hong Kong while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1139 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Shanghai"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Auckland"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Auckland to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Lawrence Douglas",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
        contact: {
          contactEmail: "sundrenched.whisper.@velarivoyages.com",
          contactNumber: "+1-905-352-7591"
        }
      }
    ],
    title: "Sun-Drenched Whisper of the Shimmering Contradiction",
    description: "Begin an epic sanctuary from Tokyo, where the seas meet culture. Visit the remarkable ports of Shanghai, Auckland, Hong Kong while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.9,
    tags: ["cruise-journey"]
  },
  {
    basePrice: 6873,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  },
  {
    "city": "Hong Kong",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Savor each moment of this infinite escape through Asia Pacific, starting in Tokyo. Visit renowned locations like Sydney, Bangkok, Hong Kong, where adventure and relaxation intertwine.",
      distance: "739 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Sydney"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Sydney to Bangkok"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Bangkok to Hong Kong"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Bangkok"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Dunn",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
        contact: {
          contactEmail: "whispering.realm.of.@velarivoyages.com",
          contactNumber: "+1-206-932-7449"
        }
      }
    ],
    title: "Whispering Realm of the Wired Infinity",
    description: "Savor each moment of this infinite escape through Asia Pacific, starting in Tokyo. Visit renowned locations like Sydney, Bangkok, Hong Kong, where adventure and relaxation intertwine.",
    rating: 4.0,
    tags: ["long-distance","VIP","anniversary-cruise"]
  },
  {
    basePrice: 4480,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
    }
  },
  {
    "city": "Yokohama",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.4437,
      "longitude": 139.638
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "This hand-selected charming cruise offers a true taste of Asia Pacific. Depart from Tokyo and explore ports like Bali, Yokohama, Auckland, each telling a story through food, music, and tradition.",
      distance: "879 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Bali"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Bali to Yokohama"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Yokohama to Auckland"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Auckland to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Jose Henderson",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
        contact: {
          contactEmail: "infinite.mystique.of@velarivoyages.com",
          contactNumber: "+1-667-499-9561"
        }
      }
    ],
    title: "Infinite Mystique of the Lotus-Lined Waters",
    description: "This hand-selected charming cruise offers a true taste of Asia Pacific. Depart from Tokyo and explore ports like Bali, Yokohama, Auckland, each telling a story through food, music, and tradition.",
    rating: 4.1,
    tags: ["cruise-experience","cruise-getaway","anniversary-cruise"]
  },
  {
    basePrice: 8280,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Bangkok",
  "country": "Thailand",
  "coordinates": {
    "latitude": 13.7563,
    "longitude": 100.5018
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "coordinates": {
      "latitude": 1.3521,
      "longitude": 103.8198
    }
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "coordinates": {
      "latitude": 13.7563,
      "longitude": 100.5018
    }
  }
],
      description: "This hand-selected mythic cruise offers a true taste of Asia Pacific. Depart from Tokyo and explore ports like Singapore, Bangkok, each telling a story through food, music, and tradition.",
      distance: "957 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Singapore to Bangkok"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Bangkok"
  }
]
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Michael Jennings",
        role: "Loyalty Program Representative",
        languages: ["Tagalog","Malay","Chinese","Bengali"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "golden.arcadia.of.th@velarivoyages.com",
          contactNumber: "+1-312-729-3933"
        }
      }
    ],
    title: "Golden Arcadia of the Volcanic Outposts",
    description: "This hand-selected mythic cruise offers a true taste of Asia Pacific. Depart from Tokyo and explore ports like Singapore, Bangkok, each telling a story through food, music, and tradition.",
    rating: 4.1,
    tags: ["cruise-holiday"]
  },
  {
    basePrice: 5003,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  },
  {
    "city": "Hong Kong",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "This discovery takes you beyond the ordinary, starting in Tokyo. With breathtaking stops in Auckland, Hong Kong, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "599 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Auckland"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Auckland to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Savannah Fox",
        role: "Marketing Coordinator",
        languages: ["Indonesian","Tagalog","Hindi"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "moonlit.drift.of.the@velarivoyages.com",
          contactNumber: "+1-586-211-9981"
        }
      }
    ],
    title: "Moonlit Drift of the Zen Shores",
    description: "This discovery takes you beyond the ordinary, starting in Tokyo. With breathtaking stops in Auckland, Hong Kong, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.8,
    tags: ["wellness"]
  },
  {
    basePrice: 9144,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Bali",
  "country": "Indonesia",
  "coordinates": {
    "latitude": -8.409518,
    "longitude": 115.188919
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
    }
  }
],
      description: "Set course from Tokyo for an inspiring sun-drenched journey across Asia Pacific. Whether exploring ancient ruins in Sydney or soaking up coastal views in Bali, every day offers a perfect mix of discovery and relaxation.",
      distance: "1167 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Sydney"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Sydney to Bali"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Bali"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Leah Maxwell",
        role: "Marketing Coordinator",
        languages: ["Indonesian","Tagalog","Hindi"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "pearlescent.pilgrima@velarivoyages.com",
          contactNumber: "+1-894-164-5781"
        }
      }
    ],
    title: "Pearlescent Pilgrimage of the Neon Capital",
    description: "Set course from Tokyo for an inspiring sun-drenched journey across Asia Pacific. Whether exploring ancient ruins in Sydney or soaking up coastal views in Bali, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.2,
    tags: ["repositioning","wellness","family-friendly"]
  },
  {
    basePrice: 9554,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "coordinates": {
      "latitude": -36.848461,
      "longitude": 174.763336
    }
  },
  {
    "city": "Melbourne",
    "country": "Australia",
    "coordinates": {
      "latitude": -37.8136,
      "longitude": 144.9631
    }
  },
  {
    "city": "Hong Kong",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Begin your drift in Tokyo, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Sydney, Auckland, Melbourne, Hong Kong and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1110 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Tokyo to Sydney"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Sydney to Auckland"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Auckland to Melbourne"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Hong Kong"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Olivia Jennings",
        role: "Marketing Coordinator",
        languages: ["Indonesian","Tagalog","Hindi"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "verdant.pulse.of.the@velarivoyages.com",
          contactNumber: "+1-775-261-9756"
        }
      }
    ],
    title: "Verdant Pulse of the Oriental Realms",
    description: "Begin your drift in Tokyo, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Sydney, Auckland, Melbourne, Hong Kong and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.7,
    tags: ["culinary"]
  },
  {
    basePrice: 9922,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Hong Kong",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Yokohama",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.4437,
      "longitude": 139.638
    }
  },
  {
    "city": "Bali",
    "country": "Indonesia",
    "coordinates": {
      "latitude": -8.409518,
      "longitude": 115.188919
    }
  },
  {
    "city": "Kyoto",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.0116,
      "longitude": 135.7681
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  }
],
      description: "Depart Tokyo on a relaxing mystique through the Asia Pacific region. Highlights include the stunning coastlines of Hong Kong, Yokohama, Bali, Kyoto, all while enjoying first-class amenities on board.",
      distance: "1213 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Hong Kong"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Hong Kong to Yokohama"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Yokohama to Bali"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Bali to Kyoto"
  },
  {
    "start": "Day 17",
    "end": "Day 18",
    "duration": "2 days",
    "description": "Sailing from Kyoto to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 19",
    "end": "Day 20",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Abigail Gibson",
        role: "Marketing Coordinator",
        languages: ["Indonesian","Tagalog","Hindi"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/74.jpg",
        contact: {
          contactEmail: "eternal.adventure.of@velarivoyages.com",
          contactNumber: "+1-900-176-4710"
        }
      }
    ],
    title: "Eternal Adventure of the Neon Capital",
    description: "Depart Tokyo on a relaxing mystique through the Asia Pacific region. Highlights include the stunning coastlines of Hong Kong, Yokohama, Bali, Kyoto, all while enjoying first-class amenities on board.",
    rating: 4.2,
    tags: ["historical","cruise-journey"]
  },
  {
    basePrice: 6455,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Asia Pacific",
  "coordinates": {
    "latitude": 35.6895,
    "longitude": 139.6917
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia Pacific",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "city": "Hong Kong",
    "country": "",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
      description: "Leave stress behind with this curated zenith from Tokyo. Sail across the best of Asia Pacific and explore treasures like Ho Chi Minh City, Hong Kong with comfort and style.",
      distance: "1288 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Ho Chi Minh City"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Ho Chi Minh City to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
  }
]
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Audrey Wallace",
        role: "Marketing Coordinator",
        languages: ["Indonesian","Tagalog","Hindi"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        contact: {
          contactEmail: "radiancedrenched.req@velarivoyages.com",
          contactNumber: "+1-111-639-5874"
        }
      }
    ],
    title: "Radiance-Drenched Requiem of the Shimmering Contradiction",
    description: "Leave stress behind with this curated zenith from Tokyo. Sail across the best of Asia Pacific and explore treasures like Ho Chi Minh City, Hong Kong with comfort and style.",
    rating: 4.0,
    tags: ["long-distance","weekend-cruise"]
  }
];
