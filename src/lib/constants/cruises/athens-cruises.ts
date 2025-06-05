import { Cruise } from "@/lib/interfaces/services/cruises";

export const athensCruises: Cruise[] = [
{
    basePrice: 8925,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Mykonos",
  "country": "Greece",
  "coordinates": {
    "latitude": 37.4467,
    "longitude": 25.3289
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  }
],
      description: "Your arcadia begins in Athens, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Florence to the historic streets of Lisbon, each stop in the Mediterranean will leave a lasting impression.",
      distance: "1127 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Athens to Florence"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Florence to Lisbon"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "James Hall",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "starlit.reflection.o@velarivoyages.com",
          contactNumber: "+1-475-187-5488"
        }
      }
    ],
    title: "Starlit Reflection of the Ruins and Radiance",
    description: "Your arcadia begins in Athens, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Florence to the historic streets of Lisbon, each stop in the Mediterranean will leave a lasting impression.",
    rating: 4.9,
    tags: ["exclusive","seasonal"]
  },
  {
    basePrice: 1623,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  },
  {
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Sail from Athens into a world of wonder. The Mediterranean beckons with unforgettable ports like Rome, Santorini, Barcelona, Lisbon, where every view is picture-perfect and every moment is priceless.",
      distance: "623 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Santorini to Barcelona"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Lisbon"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Mason Payne",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "verdant.renaissance.@velarivoyages.com",
          contactNumber: "+1-312-371-1994"
        }
      }
    ],
    title: "Verdant Renaissance of the Mythic Metropolis",
    description: "Sail from Athens into a world of wonder. The Mediterranean beckons with unforgettable ports like Rome, Santorini, Barcelona, Lisbon, where every view is picture-perfect and every moment is priceless.",
    rating: 4.4,
    tags: ["nature","relaxation","long-distance"]
  },
  {
    basePrice: 7076,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Your journey through the Mediterranean begins in Athens, where elegance meets adventure. Explore the shores of Mykonos, Rome, with curated excursions and luxurious onboard amenities.",
      distance: "1304 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nathan Hawkins",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "mythic.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-583-377-5281"
        }
      }
    ],
    title: "Mythic Sojourn of the Cradle of Civilization",
    description: "Your journey through the Mediterranean begins in Athens, where elegance meets adventure. Explore the shores of Mykonos, Rome, with curated excursions and luxurious onboard amenities.",
    rating: 5.0,
    tags: ["relaxation","culinary","adventure"]
  },
  {
    basePrice: 8251,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Mykonos",
  "country": "Greece",
  "coordinates": {
    "latitude": 37.4467,
    "longitude": 25.3289
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  }
],
      description: "Set sail from Athens on this panoramic haven through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Santorini and Mykonos, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1269 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Santorini to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "David Henderson",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
        contact: {
          contactEmail: "harmonic.whisper.of.@velarivoyages.com",
          contactNumber: "+1-569-964-2743"
        }
      }
    ],
    title: "Harmonic Whisper of the Ruins and Radiance",
    description: "Set sail from Athens on this panoramic haven through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Santorini and Mykonos, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 5.0,
    tags: ["adventure","wildlife"]
  },
  {
    basePrice: 3104,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Milan",
  "country": "Italy",
  "coordinates": {
    "latitude": 45.4642,
    "longitude": 9.19
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  }
],
      description: "Depart Athens on a relaxing symphony through the Mediterranean region. Highlights include the stunning coastlines of Dubrovnik, Milan, all while enjoying first-class amenities on board.",
      distance: "1012 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Athens to Dubrovnik"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Milan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Milan"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Victor Clark",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "transcendent.mythos.@velarivoyages.com",
          contactNumber: "+1-512-295-7520"
        }
      }
    ],
    title: "Transcendent Mythos of the Ruins and Radiance",
    description: "Depart Athens on a relaxing symphony through the Mediterranean region. Highlights include the stunning coastlines of Dubrovnik, Milan, all while enjoying first-class amenities on board.",
    rating: 4.4,
    tags: ["adventure","general","cruise-vacation"]
  },
  {
    basePrice: 8297,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "From bustling Athens to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Rome, Venice, Milan, Dubrovnik deliver a balanced blend of culture and comfort.",
      distance: "668 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Rome to Venice"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Venice to Milan"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Milan to Dubrovnik"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 16",
    "end": "Day 16",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ryan West",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "transcendent.panoram@velarivoyages.com",
          contactNumber: "+1-323-396-8643"
        }
      }
    ],
    title: "Transcendent Panorama of the Mythic Metropolis",
    description: "From bustling Athens to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Rome, Venice, Milan, Dubrovnik deliver a balanced blend of culture and comfort.",
    rating: 4.8,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 3415,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Let this ornate voyage redefine your idea of travel. From Athens, explore the Mediterranean in luxurious comfort, stopping at Lisbon, Barcelona, Venice where every port offers a new chapter.",
      distance: "574 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Athens to Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Lisbon to Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Venice"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Venice to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Jose Hunter",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "gilded.legacy.of.the@velarivoyages.com",
          contactNumber: "+1-255-300-4526"
        }
      }
    ],
    title: "Gilded Legacy of the Olive-Toned Legend",
    description: "Let this ornate voyage redefine your idea of travel. From Athens, explore the Mediterranean in luxurious comfort, stopping at Lisbon, Barcelona, Venice where every port offers a new chapter.",
    rating: 4.6,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 1843,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Enjoy seamless luxury on this idyllic pulse beginning in Athens. Visit breathtaking Mediterranean locales such as Venice, Mykonos on this unforgettable itinerary.",
      distance: "983 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Athens to Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Venice to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Joseph Marshall",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "secret.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-940-839-1349"
        }
      }
    ],
    title: "Secret Sojourn of the Legacy of Empires",
    description: "Enjoy seamless luxury on this idyllic pulse beginning in Athens. Visit breathtaking Mediterranean locales such as Venice, Mykonos on this unforgettable itinerary.",
    rating: 4.0,
    tags: ["tropical"]
  },
  {
    basePrice: 2600,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Launch into adventure from Athens and sail deep into the heart of the Mediterranean. With ports of call like Rome, Milan, Dubrovnik, Florence, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "726 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Rome to Milan"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Milan to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Florence"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Florence to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Johnny Russell",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "infinite.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-387-700-1089"
        }
      }
    ],
    title: "Infinite Odyssey of the Mediterranean Mosaics",
    description: "Launch into adventure from Athens and sail deep into the heart of the Mediterranean. With ports of call like Rome, Milan, Dubrovnik, Florence, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.6,
    tags: ["cruise-holiday","cruise-experience","fall-cruise"]
  },
  {
    basePrice: 3891,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Malta",
  "country": "Malta",
  "coordinates": {
    "latitude": 35.9375,
    "longitude": 14.3754
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Barcelona",
    "country": "Spain",
    "coordinates": {
      "latitude": 41.390205,
      "longitude": 2.154007
    }
  },
  {
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    }
  }
],
      description: "Start in the vibrant city of Athens and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Santorini, Mykonos, Barcelona, Malta.",
      distance: "1141 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Santorini to Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Barcelona"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Luis Mitchell",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "alluring.elevation.o@velarivoyages.com",
          contactNumber: "+1-624-106-6713"
        }
      }
    ],
    title: "Alluring Elevation of the Classical Crossroads",
    description: "Start in the vibrant city of Athens and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Santorini, Mykonos, Barcelona, Malta.",
    rating: 4.7,
    tags: ["themed-cruise"]
  },
  {
    basePrice: 3748,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Step aboard in Athens and begin a mythic journey through the scenic Mediterranean. From historic cities to coastal hideaways like Venice, Mykonos, Rome, every day is unforgettable.",
      distance: "1496 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Athens to Venice"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Venice to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Rome to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jeremy Palmer",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/51.jpg",
        contact: {
          contactEmail: "floating.passage.of.@velarivoyages.com",
          contactNumber: "+1-731-442-6979"
        }
      }
    ],
    title: "Floating Passage of the Classical Crossroads",
    description: "Step aboard in Athens and begin a mythic journey through the scenic Mediterranean. From historic cities to coastal hideaways like Venice, Mykonos, Rome, every day is unforgettable.",
    rating: 4.6,
    tags: ["cruise","cruise-holiday"]
  },
  {
    basePrice: 4704,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Malta",
  "country": "Malta",
  "coordinates": {
    "latitude": 35.9375,
    "longitude": 14.3754
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    }
  }
],
      description: "From the lively departure port of Athens, this curated serenade showcases the finest of Mediterranean. With visits to Milan, Lisbon, Rome, Malta, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1138 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Athens to Milan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Milan to Lisbon"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Rome to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Ralph Graham",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "hidden.drift.of.the.@velarivoyages.com",
          contactNumber: "+1-142-130-3687"
        }
      }
    ],
    title: "Hidden Drift of the Sunset Terraces",
    description: "From the lively departure port of Athens, this curated serenade showcases the finest of Mediterranean. With visits to Milan, Lisbon, Rome, Malta, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.9,
    tags: ["themed-cruise","cruise-ship"]
  },
  {
    basePrice: 1331,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Dubrovnik",
  "country": "Croatia",
  "coordinates": {
    "latitude": 42.6507,
    "longitude": 18.0944
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  }
],
      description: "This inspiring sojourn departs from Athens, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Mykonos, Dubrovnik.",
      distance: "694 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Vincent Mason",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "tidewashed.tide.of.t@velarivoyages.com",
          contactNumber: "+1-667-995-3712"
        }
      }
    ],
    title: "Tide-Washed Tide of the Mythic Metropolis",
    description: "This inspiring sojourn departs from Athens, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Mykonos, Dubrovnik.",
    rating: 4.4,
    tags: ["fall-cruise"]
  },
  {
    basePrice: 4589,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Cruise into cultural richness aboard this lavish tide departing Athens. Savor local cuisine and uncover regional beauty from Mykonos to Venice.",
      distance: "832 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Venice"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Venice to Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Dennis Hamilton",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "legendary.symphony.o@velarivoyages.com",
          contactNumber: "+1-143-838-4010"
        }
      }
    ],
    title: "Legendary Symphony of the Mosaic Harbors",
    description: "Cruise into cultural richness aboard this lavish tide departing Athens. Savor local cuisine and uncover regional beauty from Mykonos to Venice.",
    rating: 4.9,
    tags: ["cruise-ship"]
  },
  {
    basePrice: 3097,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "coordinates": {
    "latitude": 38.7169,
    "longitude": -9.1399
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "coordinates": {
      "latitude": 43.769562,
      "longitude": 11.255814
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  }
],
      description: "Set course from Athens for an inspiring starlit journey across Mediterranean. Whether exploring ancient ruins in Florence or soaking up coastal views in Venice, every day offers a perfect mix of discovery and relaxation.",
      distance: "1140 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Athens to Florence"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Florence to Venice"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Venice to Milan"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Milan to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  }
]
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Sebastian Carpenter",
        role: "Travel Advisor",
        languages: ["English","Portuguese","French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "legendary.mythos.of.@velarivoyages.com",
          contactNumber: "+1-834-112-1102"
        }
      }
    ],
    title: "Legendary Mythos of the Ruins and Radiance",
    description: "Set course from Athens for an inspiring starlit journey across Mediterranean. Whether exploring ancient ruins in Florence or soaking up coastal views in Venice, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.5,
    tags: ["relaxation","VIP","cruise-journey"]
  },
  {
    basePrice: 6410,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Malta",
  "country": "Malta",
  "coordinates": {
    "latitude": 35.9375,
    "longitude": 14.3754
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Milan",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4642,
      "longitude": 9.19
    }
  },
  {
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    }
  }
],
      description: "Embark on an unforgettable reflection from the vibrant port of Athens, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Rome, Venice, Milan, Malta, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1210 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Rome to Venice"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Venice to Milan"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Milan to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Malta"
  }
]
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Jane Reeves",
        role: "Corporate Concierge",
        languages: ["English","French","Portuguese","Dutch","Polish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "radiant.renaissance.@velarivoyages.com",
          contactNumber: "+1-134-555-9355"
        }
      }
    ],
    title: "Radiant Renaissance of the Sun-Drenched Riviera",
    description: "Embark on an unforgettable reflection from the vibrant port of Athens, where you'll discover hidden gems and iconic landmarks across the Mediterranean region. With stops at Rome, Venice, Milan, Malta, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.6,
    tags: ["glacier-cruise","cultural","cruise-vacation"]
  },
  {
    basePrice: 4069,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  },
  {
    "city": "Malta",
    "country": "Malta",
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Let this infinite voyage redefine your idea of travel. From Athens, explore the Mediterranean in luxurious comfort, stopping at Santorini, Malta, Rome where every port offers a new chapter.",
      distance: "1306 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Malta"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Malta to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Rome to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Spencer",
        role: "Corporate Concierge",
        languages: ["English","French","Portuguese","Dutch","Polish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/47.jpg",
        contact: {
          contactEmail: "exquisite.serenade.o@velarivoyages.com",
          contactNumber: "+1-864-237-1837"
        }
      }
    ],
    title: "Exquisite Serenade of the Timeless Coastlines",
    description: "Let this infinite voyage redefine your idea of travel. From Athens, explore the Mediterranean in luxurious comfort, stopping at Santorini, Malta, Rome where every port offers a new chapter.",
    rating: 4.4,
    tags: ["exclusive","general"]
  },
  {
    basePrice: 8778,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Santorini",
  "country": "Greece",
  "coordinates": {
    "latitude": 36.3932,
    "longitude": 25.4615
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Mykonos",
    "country": "Greece",
    "coordinates": {
      "latitude": 37.4467,
      "longitude": 25.3289
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  }
],
      description: "Begin a captivating enigma through the Mediterranean, departing Athens. With visits to Mykonos, Dubrovnik, Rome, Santorini, each day brings a new adventure and deeper connection to the region.",
      distance: "757 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Rome to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Santorini"
  }
]
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Ariana Graves",
        role: "Corporate Concierge",
        languages: ["English","French","Portuguese","Dutch","Polish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/49.jpg",
        contact: {
          contactEmail: "lavish.whisper.of.th@velarivoyages.com",
          contactNumber: "+1-396-844-3742"
        }
      }
    ],
    title: "Lavish Whisper of the Classical Crossroads",
    description: "Begin a captivating enigma through the Mediterranean, departing Athens. With visits to Mykonos, Dubrovnik, Rome, Santorini, each day brings a new adventure and deeper connection to the region.",
    rating: 4.3,
    tags: ["cruise-adventure","nature"]
  },
  {
    basePrice: 1944,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Santorini",
    "country": "Greece",
    "coordinates": {
      "latitude": 36.3932,
      "longitude": 25.4615
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Experience coastal elegance on this solstice from Athens, where the journey through Mediterranean includes stops in Santorini, Lisbon, each more enchanting than the last.",
      distance: "1498 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Athens to Santorini"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Santorini to Lisbon"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Margaret Cooper",
        role: "Corporate Concierge",
        languages: ["English","French","Portuguese","Dutch","Polish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "secluded.lullaby.of.@velarivoyages.com",
          contactNumber: "+1-728-601-4584"
        }
      }
    ],
    title: "Secluded Lullaby of the Classical Crossroads",
    description: "Experience coastal elegance on this solstice from Athens, where the journey through Mediterranean includes stops in Santorini, Lisbon, each more enchanting than the last.",
    rating: 4.2,
    tags: ["cruise-excursion"]
  },
  {
    basePrice: 6891,
    departureLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Greece",
  "region": "Mediterranean",
  "coordinates": {
    "latitude": 37.9838,
    "longitude": 23.7275
  }
},
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Croatia",
    "coordinates": {
      "latitude": 42.6507,
      "longitude": 18.0944
    }
  },
  {
    "city": "Venice",
    "country": "Italy",
    "coordinates": {
      "latitude": 45.4408,
      "longitude": 12.3155
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "coordinates": {
      "latitude": 38.7169,
      "longitude": -9.1399
    }
  },
  {
    "city": "Athens",
    "country": "Greece",
    "region": "Mediterranean",
    "coordinates": {
      "latitude": 37.9838,
      "longitude": 23.7275
    }
  }
],
      description: "Leave stress behind with this curated symphony from Athens. Sail across the best of Mediterranean and explore treasures like Dubrovnik, Venice, Rome, Lisbon with comfort and style.",
      distance: "1005 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Athens to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Venice"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Venice to Rome"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Sailing from Rome to Lisbon"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 20",
    "end": "Day 21",
    "duration": "2 days",
    "description": "Exploring Athens"
  }
]
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Sarah Morgan",
        role: "Corporate Concierge",
        languages: ["English","French","Portuguese","Dutch","Polish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
        contact: {
          contactEmail: "sublime.serenade.of.@velarivoyages.com",
          contactNumber: "+1-181-253-9140"
        }
      }
    ],
    title: "Sublime Serenade of the Olive-Toned Legend",
    description: "Leave stress behind with this curated symphony from Athens. Sail across the best of Mediterranean and explore treasures like Dubrovnik, Venice, Rome, Lisbon with comfort and style.",
    rating: 4.2,
    tags: ["expedition"]
  }
];
