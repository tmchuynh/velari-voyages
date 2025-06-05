import { Cruise } from "@/lib/interfaces/services/cruises";

export const sanFranciscoCruises: Cruise[] = [
  {
    basePrice: 9485,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
        "Embark on an unforgettable elevation from the vibrant port of San Francisco, where you'll discover hidden gems and iconic landmarks across the West Coast USA region. With stops at Milan, Athens, Dubrovnik, Florence, this journey combines cultural immersion with breathtaking scenery.",
      distance: "914 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Francisco to Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Milan to Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Athens to Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
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
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ralph Murray",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/62.jpg",
        contact: {
          contactEmail: "secret.retreat.of.th@velarivoyages.com",
          contactNumber: "+1-648-714-5815",
        },
      },
    ],
    title: "Secret Retreat of the Bay City",
    description:
      "Embark on an unforgettable elevation from the vibrant port of San Francisco, where you'll discover hidden gems and iconic landmarks across the West Coast USA region. With stops at Milan, Athens, Dubrovnik, Florence, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.8,
    tags: ["cultural"],
  },
  {
    basePrice: 7675,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
        "Sail from San Francisco into a world of wonder. The West Coast USA beckons with unforgettable ports like Lisbon, Venice, Dubrovnik, Santorini, where every view is picture-perfect and every moment is priceless.",
      distance: "1414 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Francisco to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Lisbon to Venice",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Venice to Dubrovnik",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Santorini to San Francisco",
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
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Eugene Crawford",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "sublime.zenith.of.th@velarivoyages.com",
          contactNumber: "+1-719-949-6625",
        },
      },
    ],
    title: "Sublime Zenith of the Golden Gateway",
    description:
      "Sail from San Francisco into a world of wonder. The West Coast USA beckons with unforgettable ports like Lisbon, Venice, Dubrovnik, Santorini, where every view is picture-perfect and every moment is priceless.",
    rating: 4.1,
    tags: ["wellness", "nature", "romantic"],
  },
  {
    basePrice: 1869,
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
        "From bustling San Francisco to serene West Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Dubrovnik, Rome deliver a balanced blend of culture and comfort.",
      distance: "1135 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Francisco to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
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
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Keith Fisher",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        contact: {
          contactEmail: "charming.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-928-571-7641",
        },
      },
    ],
    title: "Charming Mythos of the Golden Gate Voyage",
    description:
      "From bustling San Francisco to serene West Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Dubrovnik, Rome deliver a balanced blend of culture and comfort.",
    rating: 4.4,
    tags: ["cruise-getaway", "cruise-vacation", "cruise-holiday"],
  },
  {
    basePrice: 1889,
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
      city: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "Launch into adventure from San Francisco and sail deep into the heart of the West Coast USA. With ports of call like Dubrovnik, Florence, Lisbon, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1268 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Francisco to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Florence to Lisbon",
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
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Richard Coleman",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/38.jpg",
        contact: {
          contactEmail: "aweinspiring.arcadia@velarivoyages.com",
          contactNumber: "+1-447-468-6638",
        },
      },
    ],
    title: "Awe-Inspiring Arcadia of the Golden Gateway",
    description:
      "Launch into adventure from San Francisco and sail deep into the heart of the West Coast USA. With ports of call like Dubrovnik, Florence, Lisbon, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.1,
    tags: ["anniversary-cruise", "weekend-cruise", "themed-cruise"],
  },
  {
    basePrice: 8367,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
        "Cruise into cultural richness aboard this luxurious panorama departing San Francisco. Savor local cuisine and uncover regional beauty from Lisbon to Athens.",
      distance: "1453 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Francisco to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lisbon to Athens",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Athens to Santorini",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Santorini to San Francisco",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Louis Collins",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "refined.renaissance.@velarivoyages.com",
          contactNumber: "+1-130-378-3817",
        },
      },
    ],
    title: "Refined Renaissance of the Harbor of Horizons",
    description:
      "Cruise into cultural richness aboard this luxurious panorama departing San Francisco. Savor local cuisine and uncover regional beauty from Lisbon to Athens.",
    rating: 4.5,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 4908,
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
    category: "expedition",
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
        "Let the spirit of exploration guide your majestic journey from San Francisco. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Milan, Barcelona.",
      distance: "548 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Francisco to Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Barcelona to San Francisco",
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
          description: "Exploring Milan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Barcelona",
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
        name: "Albert Curtis",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "eternal.mythos.of.th@velarivoyages.com",
          contactNumber: "+1-796-528-6667",
        },
      },
    ],
    title: "Eternal Mythos of the Cable-Laced Wonder",
    description:
      "Let the spirit of exploration guide your majestic journey from San Francisco. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Milan, Barcelona.",
    rating: 4.7,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 6930,
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
    hasPopularDestination: true,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
        "Leave ordinary behind as you sail from San Francisco across the captivating West Coast USA. Discover the distinctive personality of each destination, from Venice, Florence, Lisbon.",
      distance: "1381 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Francisco to Venice",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Venice to Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Lisbon to San Francisco",
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
          description: "Exploring Venice",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thabo Harper",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "celestial.panorama.o@velarivoyages.com",
          contactNumber: "+1-226-599-8795",
        },
      },
    ],
    title: "Celestial Panorama of the Pacific Panoramas",
    description:
      "Leave ordinary behind as you sail from San Francisco across the captivating West Coast USA. Discover the distinctive personality of each destination, from Venice, Florence, Lisbon.",
    rating: 4.5,
    tags: ["cultural", "romantic", "long-distance"],
  },
  {
    basePrice: 2800,
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
    category: "expedition",
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
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
        "This hand-selected alluring cruise offers a true taste of West Coast USA. Depart from San Francisco and explore ports like Santorini, Mykonos, each telling a story through food, music, and tradition.",
      distance: "690 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Francisco to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Santorini to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Mykonos to San Francisco",
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
          description: "Exploring Santorini",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Raymond Fisher",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "refined.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-223-658-5039",
        },
      },
    ],
    title: "Refined Eclipse of the Golden Gateway",
    description:
      "This hand-selected alluring cruise offers a true taste of West Coast USA. Depart from San Francisco and explore ports like Santorini, Mykonos, each telling a story through food, music, and tradition.",
    rating: 4.8,
    tags: ["themed-cruise", "cruise-holiday"],
  },
  {
    basePrice: 7309,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
        "This mythic cruise from San Francisco is your ticket to the captivating charm of the West Coast USA. Discover the delights of Milan, Venice, Barcelona with enriching excursions and award-winning service.",
      distance: "641 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Francisco to Milan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Milan to Venice",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Venice to Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Barcelona to San Francisco",
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
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Larry Marshall",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "sublime.requiem.of.t@velarivoyages.com",
          contactNumber: "+1-611-575-3551",
        },
      },
    ],
    title: "Sublime Requiem of the Golden Shores",
    description:
      "This mythic cruise from San Francisco is your ticket to the captivating charm of the West Coast USA. Discover the delights of Milan, Venice, Barcelona with enriching excursions and award-winning service.",
    rating: 4.0,
    tags: ["adventure", "themed-cruise", "expedition"],
  },
  {
    basePrice: 8356,
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
      country: "Croatia",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Board in San Francisco for a hand-crafted journey through the breathtaking West Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Florence, Dubrovnik.",
      distance: "1456 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Francisco to Florence",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Florence to Dubrovnik",
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
          description: "Exploring Florence",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bruce Hamilton",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "tranquil.expedition.@velarivoyages.com",
          contactNumber: "+1-342-415-3815",
        },
      },
    ],
    title: "Tranquil Expedition of the Crimson Bridge Dream",
    description:
      "Board in San Francisco for a hand-crafted journey through the breathtaking West Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Florence, Dubrovnik.",
    rating: 4.7,
    tags: ["historical", "cruise-ship"],
  },
  {
    basePrice: 8729,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
        "Your journey begins in San Francisco, where every sunset on the West Coast USA horizon promises another day of discovery—from Venice, Malta, Dubrovnik, Athens to hidden ports of charm.",
      distance: "1114 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Francisco to Venice",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Venice to Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Malta to Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Athens",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Athens to San Francisco",
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
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Patrick Foster",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/25.jpg",
        contact: {
          contactEmail: "radiancedrenched.exp@velarivoyages.com",
          contactNumber: "+1-124-596-6140",
        },
      },
    ],
    title: "Radiance-Drenched Expedition of the Pacific Panoramas",
    description:
      "Your journey begins in San Francisco, where every sunset on the West Coast USA horizon promises another day of discovery—from Venice, Malta, Dubrovnik, Athens to hidden ports of charm.",
    rating: 4.3,
    tags: ["wildlife", "cruise-excursion", "cruise-vacation"],
  },
  {
    basePrice: 2472,
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
        "Let this opulent voyage redefine your idea of travel. From San Francisco, explore the West Coast USA in luxurious comfort, stopping at Mykonos, Malta, Barcelona where every port offers a new chapter.",
      distance: "1183 nautical miles",
      totalDuration: "11 days",
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
          description: "Sailing from Mykonos to Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Malta to Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Barcelona to San Francisco",
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
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Barcelona",
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
        name: "Eric Jennings",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "tidewashed.sanctuary@velarivoyages.com",
          contactNumber: "+1-532-885-5583",
        },
      },
    ],
    title: "Tide-Washed Sanctuary of the Pacific Edge",
    description:
      "Let this opulent voyage redefine your idea of travel. From San Francisco, explore the West Coast USA in luxurious comfort, stopping at Mykonos, Malta, Barcelona where every port offers a new chapter.",
    rating: 4.1,
    tags: ["romantic"],
  },
  {
    basePrice: 4669,
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
        "Step into a world of elegance and exploration from San Francisco. This discovery through the West Coast USA unveils stunning stops including Dubrovnik, Malta, Lisbon, Santorini, all with first-class service.",
      distance: "1144 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Francisco to Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Malta",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Malta to Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Santorini to San Francisco",
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
          description: "Exploring Dubrovnik",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Harold Wells",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/61.jpg",
        contact: {
          contactEmail: "infinite.tranquility@velarivoyages.com",
          contactNumber: "+1-590-165-2807",
        },
      },
    ],
    title: "Infinite Tranquility of the Crimson Bridge Dream",
    description:
      "Step into a world of elegance and exploration from San Francisco. This discovery through the West Coast USA unveils stunning stops including Dubrovnik, Malta, Lisbon, Santorini, all with first-class service.",
    rating: 4.9,
    tags: ["VIP", "culinary", "fall-cruise"],
  },
  {
    basePrice: 3981,
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
      city: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
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
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "Begin your drift in San Francisco, a gateway to the soul of West Coast USA. Enjoy days spent exploring Malta, Milan, Lisbon and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1412 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Francisco to Malta",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Malta to Milan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Milan to Lisbon",
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
          description: "Exploring Malta",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Aiden West",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "immersive.infinite.o@velarivoyages.com",
          contactNumber: "+1-348-907-7365",
        },
      },
    ],
    title: "Immersive Infinite of the Golden Gateway",
    description:
      "Begin your drift in San Francisco, a gateway to the soul of West Coast USA. Enjoy days spent exploring Malta, Milan, Lisbon and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.3,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 3654,
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
      city: "Malta",
      country: "Malta",
      coordinates: {
        latitude: 35.9375,
        longitude: 14.3754,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
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
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
      ],
      description:
        "From the lively departure port of San Francisco, this curated resonance showcases the finest of West Coast USA. With visits to Santorini, Dubrovnik, Malta, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "597 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Francisco to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Malta",
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
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Nicholas Watson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "French", "Aymara", "Quechua", "Portuguese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "velvet.reflection.of@velarivoyages.com",
          contactNumber: "+1-232-119-7179",
        },
      },
    ],
    title: "Velvet Reflection of the Fog-Draped Haven",
    description:
      "From the lively departure port of San Francisco, this curated resonance showcases the finest of West Coast USA. With visits to Santorini, Dubrovnik, Malta, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.3,
    tags: ["cruise-excursion", "seasonal", "adventure"],
  },
  {
    basePrice: 6510,
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
      city: "Rome",
      country: "Italy",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
      ],
      description:
        "Depart from the iconic port of San Francisco and sail through the enchanting West Coast USA. Explore vibrant destinations like Dubrovnik, Venice, Malta, Rome, each offering its own unique charm and local flair.",
      distance: "1180 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Francisco to Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Venice",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Venice to Malta",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Malta to Rome",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Melissa Stewart",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "opulent.quest.of.the@velarivoyages.com",
          contactNumber: "+1-495-254-6006",
        },
      },
    ],
    title: "Opulent Quest of the Harbor of Horizons",
    description:
      "Depart from the iconic port of San Francisco and sail through the enchanting West Coast USA. Explore vibrant destinations like Dubrovnik, Venice, Malta, Rome, each offering its own unique charm and local flair.",
    rating: 4.9,
    tags: ["VIP", "culinary"],
  },
  {
    basePrice: 9071,
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
    category: "expedition",
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
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
        "Your journey through the West Coast USA begins in San Francisco, where elegance meets adventure. Explore the shores of Santorini, Lisbon, Milan, Venice, with curated excursions and luxurious onboard amenities.",
      distance: "1226 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Francisco to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santorini to Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Lisbon to Milan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Milan to Venice",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Venice to San Francisco",
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
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring San Francisco",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Griffin",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "enchanting.tranquili@velarivoyages.com",
          contactNumber: "+1-330-138-9076",
        },
      },
    ],
    title: "Enchanting Tranquility of the Crimson Bridge Dream",
    description:
      "Your journey through the West Coast USA begins in San Francisco, where elegance meets adventure. Explore the shores of Santorini, Lisbon, Milan, Venice, with curated excursions and luxurious onboard amenities.",
    rating: 4.3,
    tags: ["sightseeing"],
  },
  {
    basePrice: 6430,
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
      city: "Rome",
      country: "Italy",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
      ],
      description:
        "An unforgettable drift awaits as you cruise from San Francisco across West Coast USA. Dive into history, flavor, and culture with stops including Mykonos, Dubrovnik, Athens, Rome.",
      distance: "739 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Francisco to Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Athens",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Athens to Rome",
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
          description: "Exploring Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Isabella Parker",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/98.jpg",
        contact: {
          contactEmail: "starlit.exploration.@velarivoyages.com",
          contactNumber: "+1-242-378-7019",
        },
      },
    ],
    title: "Starlit Exploration of the Cascading Cliffs",
    description:
      "An unforgettable drift awaits as you cruise from San Francisco across West Coast USA. Dive into history, flavor, and culture with stops including Mykonos, Dubrovnik, Athens, Rome.",
    rating: 4.1,
    tags: ["VIP", "wellness"],
  },
  {
    basePrice: 2842,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
        "Set course from San Francisco for an inspiring sublime journey across West Coast USA. Whether exploring ancient ruins in Lisbon or soaking up coastal views in Milan, every day offers a perfect mix of discovery and relaxation.",
      distance: "658 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Francisco to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lisbon to Milan",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christine Parker",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "legendary.reflection@velarivoyages.com",
          contactNumber: "+1-442-660-1092",
        },
      },
    ],
    title: "Legendary Reflection of the Maritime Metropolises",
    description:
      "Set course from San Francisco for an inspiring sublime journey across West Coast USA. Whether exploring ancient ruins in Lisbon or soaking up coastal views in Milan, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.6,
    tags: ["short-getaway"],
  },
  {
    basePrice: 5181,
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
      country: "Greece",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
      ],
      description:
        "Depart San Francisco on a relaxing embrace through the West Coast USA region. Highlights include the stunning coastlines of Barcelona, Lisbon, Athens, all while enjoying first-class amenities on board.",
      distance: "1446 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Francisco to Barcelona",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Barcelona to Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Lisbon to Athens",
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
          description: "Exploring Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Amanda Reeves",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Aymara"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "tranquil.arcadia.of.@velarivoyages.com",
          contactNumber: "+1-846-398-5815",
        },
      },
    ],
    title: "Tranquil Arcadia of the Golden Gateway",
    description:
      "Depart San Francisco on a relaxing embrace through the West Coast USA region. Highlights include the stunning coastlines of Barcelona, Lisbon, Athens, all while enjoying first-class amenities on board.",
    rating: 4.3,
    tags: ["cultural", "cruise-vacation"],
  },
];
