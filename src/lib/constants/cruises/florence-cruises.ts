import { Cruise } from "@/lib/interfaces/services/cruises";

export const florenceCruises: Cruise[] = [
  {
    basePrice: 9401,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "This infinite cruise from Florence is your ticket to the captivating charm of the Mediterranean. Discover the delights of Athens, Rome with enriching excursions and award-winning service.",
      distance: "1322 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Athens to Rome",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Rome to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Wei Reed",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "serene.pilgrimage.of@velarivoyages.com",
          contactNumber: "+1-621-969-4288",
        },
      },
    ],
    title: "Serene Pilgrimage of the Canvas of Civilization",
    description:
      "This infinite cruise from Florence is your ticket to the captivating charm of the Mediterranean. Discover the delights of Athens, Rome with enriching excursions and award-winning service.",
    rating: 4.2,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 5659,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
      ],
      description:
        "Escape to sea from Florence on a serene voyage exploring the magic of Mediterranean. Visit unforgettable locales like Rome, Milan, Athens, where each stop inspires awe.",
      distance: "607 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Florence to Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Rome to Milan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Milan to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Billy Warren",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "sublime.pulse.of.the@velarivoyages.com",
          contactNumber: "+1-314-982-2814",
        },
      },
    ],
    title: "Sublime Pulse of the Classical Crossroads",
    description:
      "Escape to sea from Florence on a serene voyage exploring the magic of Mediterranean. Visit unforgettable locales like Rome, Milan, Athens, where each stop inspires awe.",
    rating: 5.0,
    tags: ["glacier-cruise"],
  },
  {
    basePrice: 5399,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Experience coastal elegance on this odyssey from Florence, where the journey through Mediterranean includes stops in Santorini, Lisbon, Dubrovnik, Venice, each more enchanting than the last.",
      distance: "775 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Santorini to Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Lisbon to Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Venice",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Venice to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Dubrovnik",
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
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Luis Price",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "gilded.wanderlust.of@velarivoyages.com",
          contactNumber: "+1-259-359-3969",
        },
      },
    ],
    title: "Gilded Wanderlust of the Sunlit Fresco Realm",
    description:
      "Experience coastal elegance on this odyssey from Florence, where the journey through Mediterranean includes stops in Santorini, Lisbon, Dubrovnik, Venice, each more enchanting than the last.",
    rating: 4.2,
    tags: ["cruise-ship", "cultural"],
  },
  {
    basePrice: 4686,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
        "Your journey through the Mediterranean begins in Florence, where elegance meets adventure. Explore the shores of Barcelona, Mykonos, Venice, with curated excursions and luxurious onboard amenities.",
      distance: "1438 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Florence to Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Barcelona to Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Mykonos to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Terry Carpenter",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "extraordinary.eclips@velarivoyages.com",
          contactNumber: "+1-988-252-5816",
        },
      },
    ],
    title: "Extraordinary Eclipse of the Canvas of Civilization",
    description:
      "Your journey through the Mediterranean begins in Florence, where elegance meets adventure. Explore the shores of Barcelona, Mykonos, Venice, with curated excursions and luxurious onboard amenities.",
    rating: 4.6,
    tags: ["weekend-cruise", "glacier-cruise"],
  },
  {
    basePrice: 7238,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "Set course from Florence for an inspiring secluded journey across Mediterranean. Whether exploring ancient ruins in Malta or soaking up coastal views in Rome, every day offers a perfect mix of discovery and relaxation.",
      distance: "1279 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Malta to Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rome to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Hamilton",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "spectacular.pilgrima@velarivoyages.com",
          contactNumber: "+1-710-707-2037",
        },
      },
    ],
    title: "Spectacular Pilgrimage of the Cradle of the Renaissance",
    description:
      "Set course from Florence for an inspiring secluded journey across Mediterranean. Whether exploring ancient ruins in Malta or soaking up coastal views in Rome, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.7,
    tags: ["family-friendly", "exclusive", "cruise-experience"],
  },
  {
    basePrice: 3976,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
        "Set sail from Florence on this breathtaking exploration through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Dubrovnik and Milan and Malta and Rome, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1058 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Florence to Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Milan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Malta to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
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
          description: "Exploring Milan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Roger Foster",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "celestial.excursion.@velarivoyages.com",
          contactNumber: "+1-948-684-5125",
        },
      },
    ],
    title: "Celestial Excursion of the Marble Cities",
    description:
      "Set sail from Florence on this breathtaking exploration through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Dubrovnik and Milan and Malta and Rome, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.6,
    tags: ["seasonal"],
  },
  {
    basePrice: 8058,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Board in Florence for a hand-crafted reunion through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Santorini, Malta, Athens, Milan.",
      distance: "1029 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Florence to Santorini",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Santorini to Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Malta to Athens",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Athens to Milan",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Milan to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Willie Hawkins",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "panoramic.horizon.of@velarivoyages.com",
          contactNumber: "+1-707-471-9807",
        },
      },
    ],
    title: "Panoramic Horizon of the Tuscan Treasure",
    description:
      "Board in Florence for a hand-crafted reunion through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Santorini, Malta, Athens, Milan.",
    rating: 4.8,
    tags: ["holiday-cruise", "anniversary-cruise", "themed-cruise"],
  },
  {
    basePrice: 4274,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
      ],
      description:
        "This extraordinary adventure from Florence offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Malta, Santorini and Barcelona, creating memories that will last a lifetime.",
      distance: "1464 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Malta to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santorini to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mason Henderson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        contact: {
          contactEmail: "mystical.serenade.of@velarivoyages.com",
          contactNumber: "+1-550-923-7492",
        },
      },
    ],
    title: "Mystical Serenade of the Cradle of the Renaissance",
    description:
      "This extraordinary adventure from Florence offers the ultimate Mediterranean exploration. Immerse yourself in the rich cultures and stunning landscapes of Malta, Santorini and Barcelona, creating memories that will last a lifetime.",
    rating: 4.2,
    tags: ["wellness", "general", "cruise-getaway"],
  },
  {
    basePrice: 2388,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "This inspiring tide departs from Florence, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Mykonos, Venice, Rome.",
      distance: "1274 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Florence to Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Mykonos to Venice",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Venice to Rome",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Rome to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Albert Graham",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "tranquil.excursion.o@velarivoyages.com",
          contactNumber: "+1-247-170-4505",
        },
      },
    ],
    title: "Tranquil Excursion of the Sunlit Fresco Realm",
    description:
      "This inspiring tide departs from Florence, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Mykonos, Venice, Rome.",
    rating: 4.9,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 3767,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Florence. Discover the historical and natural richness of Mediterranean as you cruise to spectacular destinations like Lisbon, Athens.",
      distance: "1204 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lisbon to Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Athens to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Joseph Coleman",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "floating.saga.of.the@velarivoyages.com",
          contactNumber: "+1-577-738-4141",
        },
      },
    ],
    title: "Floating Saga of the Dreams in Terra Cotta",
    description:
      "A voyage of contrasts awaits from Florence. Discover the historical and natural richness of Mediterranean as you cruise to spectacular destinations like Lisbon, Athens.",
    rating: 4.6,
    tags: ["long-distance", "cruise-ship", "tropical"],
  },
  {
    basePrice: 4427,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "This radiant cruise from Florence is your ticket to the captivating charm of the Mediterranean. Discover the delights of Lisbon, Dubrovnik, Athens, Milan with enriching excursions and award-winning service.",
      distance: "894 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lisbon to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Athens",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Athens to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Harper",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "secret.eclipse.of.th@velarivoyages.com",
          contactNumber: "+1-787-255-3554",
        },
      },
    ],
    title: "Secret Eclipse of the Mediterranean Mosaics",
    description:
      "This radiant cruise from Florence is your ticket to the captivating charm of the Mediterranean. Discover the delights of Lisbon, Dubrovnik, Athens, Milan with enriching excursions and award-winning service.",
    rating: 4.3,
    tags: ["cultural"],
  },
  {
    basePrice: 7755,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Set sail from Florence on this spectacular tide through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Malta and Dubrovnik and Santorini, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1340 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Malta to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Santorini to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Henry Marshall",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "hidden.infinite.of.t@velarivoyages.com",
          contactNumber: "+1-142-494-9760",
        },
      },
    ],
    title: "Hidden Infinite of the Olive-Draped Hills",
    description:
      "Set sail from Florence on this spectacular tide through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Malta and Dubrovnik and Santorini, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.3,
    tags: ["cruise-journey", "wildlife", "holiday-cruise"],
  },
  {
    basePrice: 1667,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Begin a captivating excursion through the Mediterranean, departing Florence. With visits to Venice, Mykonos, Lisbon, each day brings a new adventure and deeper connection to the region.",
      distance: "1314 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Venice",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Venice to Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Lisbon to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Chen Clark",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "dreamlike.elevation.@velarivoyages.com",
          contactNumber: "+1-897-532-7422",
        },
      },
    ],
    title: "Dreamlike Elevation of the Mediterranean Mosaics",
    description:
      "Begin a captivating excursion through the Mediterranean, departing Florence. With visits to Venice, Mykonos, Lisbon, each day brings a new adventure and deeper connection to the region.",
    rating: 4.1,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 3512,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      coordinates: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
      ],
      description:
        "Escape the everyday with this lavish journey through Mediterranean, departing from Florence. You'll visit Dubrovnik, Athens, Lisbon, Barcelona, where every stop is a new adventure.",
      distance: "867 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Athens to Lisbon",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Lisbon to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joe Parker",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "hidden.sanctuary.of.@velarivoyages.com",
          contactNumber: "+1-178-946-3490",
        },
      },
    ],
    title: "Hidden Sanctuary of the Olive-Draped Hills",
    description:
      "Escape the everyday with this lavish journey through Mediterranean, departing from Florence. You'll visit Dubrovnik, Athens, Lisbon, Barcelona, where every stop is a new adventure.",
    rating: 4.8,
    tags: ["short-getaway", "wildlife"],
  },
  {
    basePrice: 1597,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "An escape like no other begins in Florence, where your legacy launches into the heart of Mediterranean. Discover the magic of Lisbon, Milan, Malta with style and sophistication.",
      distance: "1134 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lisbon to Milan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Malta to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Eugene Holloway",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Portuguese", "Spanish", "Danish", "Russian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
        contact: {
          contactEmail: "tidewashed.wanderlus@velarivoyages.com",
          contactNumber: "+1-385-259-6202",
        },
      },
    ],
    title: "Tide-Washed Wanderlust of the Wine-Soaked Villages",
    description:
      "An escape like no other begins in Florence, where your legacy launches into the heart of Mediterranean. Discover the magic of Lisbon, Milan, Malta with style and sophistication.",
    rating: 4.4,
    tags: ["general", "tropical"],
  },
  {
    basePrice: 3123,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Board in Florence for a hand-crafted oasis through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Malta, Lisbon, Dubrovnik.",
      distance: "841 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Malta to Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Lisbon to Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ashley Stewart",
        role: "Cruise Specialist",
        languages: ["English", "Norwegian", "Danish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "captivating.journey.@velarivoyages.com",
          contactNumber: "+1-434-103-5621",
        },
      },
    ],
    title: "Captivating Journey of the Crystalline Bays",
    description:
      "Board in Florence for a hand-crafted oasis through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Malta, Lisbon, Dubrovnik.",
    rating: 4.6,
    tags: ["romantic"],
  },
  {
    basePrice: 4952,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "Greece",
      coordinates: {
        latitude: 37.4467,
        longitude: 25.3289,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
      ],
      description:
        "Sail into splendor from Florence on a secret voyage through Mediterranean. Let each stop—from Malta to Venice—reveal the unique flavors and colors of the region.",
      distance: "548 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Malta to Venice",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Venice to Milan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Milan to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Alexa Russell",
        role: "Cruise Specialist",
        languages: ["English", "Norwegian", "Danish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "velvet.excursion.of.@velarivoyages.com",
          contactNumber: "+1-261-304-8346",
        },
      },
    ],
    title: "Velvet Excursion of the Classical Crossroads",
    description:
      "Sail into splendor from Florence on a secret voyage through Mediterranean. Let each stop—from Malta to Venice—reveal the unique flavors and colors of the region.",
    rating: 4.1,
    tags: ["anniversary-cruise", "cruise-experience", "luxury"],
  },
  {
    basePrice: 9132,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Begin a captivating oasis through the Mediterranean, departing Florence. With visits to Mykonos, Rome, Malta, Lisbon, each day brings a new adventure and deeper connection to the region.",
      distance: "612 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Florence to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Rome",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Rome to Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Malta to Lisbon",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Lisbon to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Amanda Gardner",
        role: "Cruise Specialist",
        languages: ["English", "Norwegian", "Danish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "hidden.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-675-382-4370",
        },
      },
    ],
    title: "Hidden Odyssey of the Marble & Muse",
    description:
      "Begin a captivating oasis through the Mediterranean, departing Florence. With visits to Mykonos, Rome, Malta, Lisbon, each day brings a new adventure and deeper connection to the region.",
    rating: 4.5,
    tags: ["cruise-getaway", "luxury", "adventure"],
  },
  {
    basePrice: 6956,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Florence. Discover the historical and natural richness of Mediterranean as you cruise to spectacular destinations like Milan, Santorini, Mykonos, Athens.",
      distance: "566 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Florence to Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Santorini to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Mykonos to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Claire Warren",
        role: "Cruise Specialist",
        languages: ["English", "Norwegian", "Danish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "moonlit.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-709-243-1654",
        },
      },
    ],
    title: "Moonlit Sojourn of the Tuscan Treasure",
    description:
      "A voyage of contrasts awaits from Florence. Discover the historical and natural richness of Mediterranean as you cruise to spectacular destinations like Milan, Santorini, Mykonos, Athens.",
    rating: 4.6,
    tags: ["exclusive", "historical"],
  },
  {
    basePrice: 2048,
    departureLocation: {
      city: "Florence",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
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
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Florence",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
        "Depart from the iconic port of Florence and sail through the enchanting Mediterranean. Explore vibrant destinations like Lisbon, Mykonos, Rome, each offering its own unique charm and local flair.",
      distance: "920 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Lisbon to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Mykonos to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Susan Graves",
        role: "Cruise Specialist",
        languages: ["English", "Norwegian", "Danish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "floating.frontier.of@velarivoyages.com",
          contactNumber: "+1-443-284-9012",
        },
      },
    ],
    title: "Floating Frontier of the Cradle of the Renaissance",
    description:
      "Depart from the iconic port of Florence and sail through the enchanting Mediterranean. Explore vibrant destinations like Lisbon, Mykonos, Rome, each offering its own unique charm and local flair.",
    rating: 4.7,
    tags: ["luxury", "holiday-cruise", "historical"],
  },
];
