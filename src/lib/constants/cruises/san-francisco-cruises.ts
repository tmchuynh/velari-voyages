import { Cruise } from "@/lib/interfaces/services/cruises";

export const sanFranciscoCruises: Cruise[] = [
  {
    basePrice: 4456,
    departureLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    arrivalLocation: {
      city: "Athens",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your velvet journey from San Francisco. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Milan, Barcelona, Venice, Athens.",
      distance: "971 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Francisco to Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Barcelona to Venice",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Venice to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Edward Gardner",
        role: "Reservations Agent",
        languages: ["English", "Aymara", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "luxurious.enigma.of.@velarivoyages.com",
          contactNumber: "+1-885-496-6070",
        },
      },
    ],
    title: "Luxurious Enigma of the Coastal Giants",
    description:
      "Let the spirit of exploration guide your velvet journey from San Francisco. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Milan, Barcelona, Venice, Athens.",
    rating: 4.7,
    tags: ["repositioning", "exclusive", "tropical"],
  },
  {
    basePrice: 7854,
    departureLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    arrivalLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
      ],
      description:
        "Your pulse begins in San Francisco, where every sunset on the West Coast USA horizon promises another day of discovery—from Mykonos, Santorini, Milan to hidden ports of charm.",
      distance: "717 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Francisco to Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Mykonos to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Santorini to Milan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Milan to San Francisco",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Juan Carpenter",
        role: "Reservations Agent",
        languages: ["English", "Aymara", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "opulent.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-530-101-6774",
        },
      },
    ],
    title: "Opulent Voyage of the Fog-Draped Haven",
    description:
      "Your pulse begins in San Francisco, where every sunset on the West Coast USA horizon promises another day of discovery—from Mykonos, Santorini, Milan to hidden ports of charm.",
    rating: 4.0,
    tags: ["expedition"],
  },
  {
    basePrice: 2878,
    departureLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    arrivalLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
      ],
      description:
        "Begin a captivating labyrinth through the West Coast USA, departing San Francisco. With visits to Venice, Rome, each day brings a new adventure and deeper connection to the region.",
      distance: "901 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Francisco to Venice",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Venice to Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rome to San Francisco",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Oliver Nash",
        role: "Reservations Agent",
        languages: ["English", "Aymara", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "moonlit.embrace.of.t@velarivoyages.com",
          contactNumber: "+1-130-477-1043",
        },
      },
    ],
    title: "Moonlit Embrace of the Golden Gateway",
    description:
      "Begin a captivating labyrinth through the West Coast USA, departing San Francisco. With visits to Venice, Rome, each day brings a new adventure and deeper connection to the region.",
    rating: 4.8,
    tags: ["cruise", "cruise-experience", "exclusive"],
  },
  {
    basePrice: 4860,
    departureLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
        {
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Your eclipse begins in San Francisco, where every sunset on the West Coast USA horizon promises another day of discovery—from Malta, Rome, Venice to hidden ports of charm.",
      distance: "1268 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Francisco to Malta",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Malta to Rome",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Rome to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Miguel Crawford",
        role: "Reservations Agent",
        languages: ["English", "Aymara", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "transcendent.pilgrim@velarivoyages.com",
          contactNumber: "+1-992-980-2771",
        },
      },
    ],
    title: "Transcendent Pilgrimage of the Golden Gate Voyage",
    description:
      "Your eclipse begins in San Francisco, where every sunset on the West Coast USA horizon promises another day of discovery—from Malta, Rome, Venice to hidden ports of charm.",
    rating: 5.0,
    tags: ["cruise-ship", "short-getaway"],
  },
  {
    basePrice: 6758,
    departureLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Sail away from San Francisco into the beautiful expanse of West Coast USA. Along the way, enjoy rich cultural experiences in Florence, Milan, where history, nature, and cuisine collide.",
      distance: "1381 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Francisco to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Terry Hunter",
        role: "Reservations Agent",
        languages: ["English", "Aymara", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "harmonic.requiem.of.@velarivoyages.com",
          contactNumber: "+1-638-713-1674",
        },
      },
    ],
    title: "Harmonic Requiem of the Crimson Bridge Dream",
    description:
      "Sail away from San Francisco into the beautiful expanse of West Coast USA. Along the way, enjoy rich cultural experiences in Florence, Milan, where history, nature, and cuisine collide.",
    rating: 4.1,
    tags: ["family-friendly", "cruise-ship"],
  },
  {
    basePrice: 8391,
    departureLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    arrivalLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from San Francisco. Discover the historical and natural richness of West Coast USA as you cruise to spectacular destinations like Athens, Milan.",
      distance: "743 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Francisco to Athens",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Athens to Milan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Milan to San Francisco",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ryan Montgomery",
        role: "Reservations Agent",
        languages: ["English", "Aymara", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "enchanting.voyage.of@velarivoyages.com",
          contactNumber: "+1-445-408-6783",
        },
      },
    ],
    title: "Enchanting Voyage of the Golden Gateway",
    description:
      "A voyage of contrasts awaits from San Francisco. Discover the historical and natural richness of West Coast USA as you cruise to spectacular destinations like Athens, Milan.",
    rating: 4.7,
    tags: ["short-getaway", "cruise-adventure"],
  },
  {
    basePrice: 9083,
    departureLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Embark on an unforgettable reverie from the vibrant port of San Francisco, where you'll discover hidden gems and iconic landmarks across the West Coast USA region. With stops at Florence, Malta, Athens, Dubrovnik, this journey combines cultural immersion with breathtaking scenery.",
      distance: "997 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Francisco to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Malta to Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Athens to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Javier Hudson",
        role: "Reservations Agent",
        languages: ["English", "Aymara", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/38.jpg",
        contact: {
          contactEmail: "infinite.realm.of.th@velarivoyages.com",
          contactNumber: "+1-435-100-7203",
        },
      },
    ],
    title: "Infinite Realm of the Pacific Edge",
    description:
      "Embark on an unforgettable reverie from the vibrant port of San Francisco, where you'll discover hidden gems and iconic landmarks across the West Coast USA region. With stops at Florence, Malta, Athens, Dubrovnik, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.2,
    tags: ["historical"],
  },
  {
    basePrice: 7578,
    departureLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
        {
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the waves lead you from San Francisco on this golden frontier. Traverse the iconic waters of West Coast USA and discover the beauty of Lisbon, Barcelona, Dubrovnik.",
      distance: "607 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Francisco to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Lisbon to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Stephen Sutton",
        role: "Reservations Agent",
        languages: ["English", "Aymara", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
        contact: {
          contactEmail: "opulent.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-953-241-2940",
        },
      },
    ],
    title: "Opulent Odyssey of the Golden Gateway",
    description:
      "Let the waves lead you from San Francisco on this golden frontier. Traverse the iconic waters of West Coast USA and discover the beauty of Lisbon, Barcelona, Dubrovnik.",
    rating: 4.5,
    tags: ["anniversary-cruise", "cruise-excursion", "cultural"],
  },
  {
    basePrice: 9814,
    departureLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Begin an epic mirage from San Francisco, where the seas meet culture. Visit the remarkable ports of Santorini, Venice while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "959 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Francisco to Santorini",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Santorini to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gerald Grant",
        role: "Reservations Agent",
        languages: ["English", "Aymara", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "velvet.voyage.of.the@velarivoyages.com",
          contactNumber: "+1-424-335-5205",
        },
      },
    ],
    title: "Velvet Voyage of the Harbor of Horizons",
    description:
      "Begin an epic mirage from San Francisco, where the seas meet culture. Visit the remarkable ports of Santorini, Venice while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.8,
    tags: ["historical", "repositioning", "anniversary-cruise"],
  },
  {
    basePrice: 1948,
    departureLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    arrivalLocation: {
      city: "San Francisco",
      country: "United States",
      region: "West Coast USA",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "San Francisco",
          country: "United States",
          region: "West Coast USA",
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
      ],
      description:
        "Depart from iconic San Francisco and traverse the West Coast USA with visits to Milan, Florence. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "943 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Francisco to Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Milan to Florence",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Florence to San Francisco",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Samuel Campbell",
        role: "Reservations Agent",
        languages: ["English", "Aymara", "Haitian", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "oceanic.quest.of.the@velarivoyages.com",
          contactNumber: "+1-990-887-4755",
        },
      },
    ],
    title: "Oceanic Quest of the Pacific Edge",
    description:
      "Depart from iconic San Francisco and traverse the West Coast USA with visits to Milan, Florence. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.1,
    tags: ["tropical", "relaxation"],
  },
];
