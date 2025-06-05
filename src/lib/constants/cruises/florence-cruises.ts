import { Cruise } from "@/lib/interfaces/services/cruises";

export const florenceCruises: Cruise[] = [
  {
    basePrice: 8259,
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
          city: "Athens",
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
        "An escape like no other begins in Florence, where your haven launches into the heart of Mediterranean. Discover the magic of Athens, Santorini, Rome, Barcelona with style and sophistication.",
      distance: "725 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Santorini",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Santorini to Rome",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Rome to Barcelona",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Barcelona to Florence",
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
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Jeremy Price",
        role: "Cruise Specialist",
        languages: ["English", "Swedish", "Danish", "Italian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/92.jpg",
        contact: {
          contactEmail: "exquisite.arcadia.of@velarivoyages.com",
          contactNumber: "+1-494-403-6179",
        },
      },
    ],
    title: "Exquisite Arcadia of the Cradle of the Renaissance",
    description:
      "An escape like no other begins in Florence, where your haven launches into the heart of Mediterranean. Discover the magic of Athens, Santorini, Rome, Barcelona with style and sophistication.",
    rating: 4.7,
    tags: ["VIP", "culinary", "romantic"],
  },
  {
    basePrice: 7063,
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
      city: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
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
      ],
      description:
        "Sail from Florence into a world of wonder. The Mediterranean beckons with unforgettable ports like Barcelona, Lisbon, where every view is picture-perfect and every moment is priceless.",
      distance: "756 nautical miles",
      totalDuration: "6 days",
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
          description: "Sailing from Barcelona to Lisbon",
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
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Adam Russell",
        role: "Cruise Specialist",
        languages: ["English", "Swedish", "Danish", "Italian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "infinite.solstice.of@velarivoyages.com",
          contactNumber: "+1-645-349-7207",
        },
      },
    ],
    title: "Infinite Solstice of the Canvas of Civilization",
    description:
      "Sail from Florence into a world of wonder. The Mediterranean beckons with unforgettable ports like Barcelona, Lisbon, where every view is picture-perfect and every moment is priceless.",
    rating: 4.7,
    tags: ["short-getaway", "cruise-ship", "nature"],
  },
  {
    basePrice: 9378,
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
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
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
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail into splendor from Florence on a exquisite voyage through Mediterranean. Let each stop—from Milan to Athens—reveal the unique flavors and colors of the region.",
      distance: "1240 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Florence to Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
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
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Walter Price",
        role: "Cruise Specialist",
        languages: ["English", "Swedish", "Danish", "Italian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "radiancedrenched.ret@velarivoyages.com",
          contactNumber: "+1-571-219-7229",
        },
      },
    ],
    title: "Radiance-Drenched Retreat of the Cradle of the Renaissance",
    description:
      "Sail into splendor from Florence on a exquisite voyage through Mediterranean. Let each stop—from Milan to Athens—reveal the unique flavors and colors of the region.",
    rating: 5.0,
    tags: ["cruise-line"],
  },
  {
    basePrice: 7309,
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
        "Set off on a mystique from Florence that captures the essence of Mediterranean. Discover cultural gems and culinary delights across Lisbon, Venice.",
      distance: "1189 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Lisbon to Venice",
        },
        {
          start: "Day 10",
          end: "Day 10",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christopher Parker",
        role: "Cruise Specialist",
        languages: ["English", "Swedish", "Danish", "Italian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
        contact: {
          contactEmail: "panoramic.odyssey.of@velarivoyages.com",
          contactNumber: "+1-813-277-7787",
        },
      },
    ],
    title: "Panoramic Odyssey of the Cradle of the Renaissance",
    description:
      "Set off on a mystique from Florence that captures the essence of Mediterranean. Discover cultural gems and culinary delights across Lisbon, Venice.",
    rating: 4.7,
    tags: ["cruise-journey", "holiday-cruise", "cruise-excursion"],
  },
  {
    basePrice: 3353,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
        "An unforgettable renaissance awaits as you cruise from Florence across Mediterranean. Dive into history, flavor, and culture with stops including Venice, Mykonos, Santorini, Lisbon.",
      distance: "1388 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Florence to Venice",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Venice to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Mykonos to Santorini",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Santorini to Lisbon",
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
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Lisbon",
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
        name: "Darrell Foster",
        role: "Cruise Specialist",
        languages: ["English", "Swedish", "Danish", "Italian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "radiant.currents.of.@velarivoyages.com",
          contactNumber: "+1-589-335-5042",
        },
      },
    ],
    title: "Radiant Currents of the Sunlit Fresco Realm",
    description:
      "An unforgettable renaissance awaits as you cruise from Florence across Mediterranean. Dive into history, flavor, and culture with stops including Venice, Mykonos, Santorini, Lisbon.",
    rating: 4.7,
    tags: ["nature", "cruise-ship", "sightseeing"],
  },
  {
    basePrice: 2128,
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
    hasPopularDestination: false,
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
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
        "This pilgrimage takes you beyond the ordinary, starting in Florence. With breathtaking stops in Mykonos, Barcelona, Dubrovnik, Venice, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "533 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Mykonos to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Venice",
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
          description: "Exploring Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Spencer",
        role: "Cruise Specialist",
        languages: ["English", "Swedish", "Danish", "Italian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/96.jpg",
        contact: {
          contactEmail: "mesmerizing.adventur@velarivoyages.com",
          contactNumber: "+1-943-807-5846",
        },
      },
    ],
    title: "Mesmerizing Adventure of the Wine-Soaked Villages",
    description:
      "This pilgrimage takes you beyond the ordinary, starting in Florence. With breathtaking stops in Mykonos, Barcelona, Dubrovnik, Venice, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.6,
    tags: ["long-distance", "cruise-vacation"],
  },
  {
    basePrice: 7528,
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
      city: "Santorini",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Experience coastal elegance on this voyage from Florence, where the journey through Mediterranean includes stops in Barcelona, Milan, Santorini, each more enchanting than the last.",
      distance: "1403 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Florence to Barcelona",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Barcelona to Milan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Milan to Santorini",
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
          description: "Exploring Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "David Wells",
        role: "Cruise Specialist",
        languages: ["English", "Swedish", "Danish", "Italian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "starlit.sanctum.of.t@velarivoyages.com",
          contactNumber: "+1-463-685-6604",
        },
      },
    ],
    title: "Starlit Sanctum of the Dreams in Terra Cotta",
    description:
      "Experience coastal elegance on this voyage from Florence, where the journey through Mediterranean includes stops in Barcelona, Milan, Santorini, each more enchanting than the last.",
    rating: 4.2,
    tags: ["cruise-getaway", "exclusive"],
  },
  {
    basePrice: 4807,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
        "Leave stress behind with this curated odyssey from Florence. Sail across the best of Mediterranean and explore treasures like Milan, Malta with comfort and style.",
      distance: "723 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Malta to Florence",
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
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Russell Henderson",
        role: "Cruise Specialist",
        languages: ["English", "Swedish", "Danish", "Italian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "dreamlike.solstice.o@velarivoyages.com",
          contactNumber: "+1-512-456-5250",
        },
      },
    ],
    title: "Dreamlike Solstice of the Marble Cities",
    description:
      "Leave stress behind with this curated odyssey from Florence. Sail across the best of Mediterranean and explore treasures like Milan, Malta with comfort and style.",
    rating: 4.1,
    tags: ["cruise-journey"],
  },
  {
    basePrice: 6405,
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
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your floating journey from Florence. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Mykonos, Santorini, Dubrovnik.",
      distance: "1004 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Florence to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santorini to Dubrovnik",
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
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Douglas Russell",
        role: "Cruise Specialist",
        languages: ["English", "Swedish", "Danish", "Italian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "majestic.escape.of.t@velarivoyages.com",
          contactNumber: "+1-339-157-3579",
        },
      },
    ],
    title: "Majestic Escape of the Marble & Muse",
    description:
      "Let the spirit of exploration guide your floating journey from Florence. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Mykonos, Santorini, Dubrovnik.",
    rating: 4.9,
    tags: ["luxury", "culinary"],
  },
  {
    basePrice: 5412,
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
        "Step aboard in Florence and begin a sun-drenched journey through the scenic Mediterranean. From historic cities to coastal hideaways like Milan, Mykonos, Rome, Santorini, every day is unforgettable.",
      distance: "885 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Florence to Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Milan to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Mykonos to Rome",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Rome to Santorini",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Santorini to Florence",
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
          description: "Exploring Milan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 18",
          end: "Day 18",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Arthur Hayes",
        role: "Cruise Specialist",
        languages: ["English", "Swedish", "Danish", "Italian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "enchanting.mystique.@velarivoyages.com",
          contactNumber: "+1-865-381-9239",
        },
      },
    ],
    title: "Enchanting Mystique of the Canvas of Civilization",
    description:
      "Step aboard in Florence and begin a sun-drenched journey through the scenic Mediterranean. From historic cities to coastal hideaways like Milan, Mykonos, Rome, Santorini, every day is unforgettable.",
    rating: 4.8,
    tags: ["weekend-cruise"],
  },
];
