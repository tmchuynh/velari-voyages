import { Cruise } from "@/lib/interfaces/services/cruises";

export const bostonCruises: Cruise[] = [
  {
    basePrice: 9468,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "Savor each moment of this secret escape through East Coast USA, starting in Boston. Visit renowned locations like Florence, Milan, Venice, Barcelona, where adventure and relaxation intertwine.",
      distance: "1047 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Boston to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Milan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Milan to Venice",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Venice to Barcelona",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Barcelona to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kimberly Maxwell",
        role: "Marketing Coordinator",
        languages: ["English", "Guarani", "Portuguese", "French"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "eternal.quest.of.the@velarivoyages.com",
          contactNumber: "+1-565-916-7994",
        },
      },
    ],
    title: "Eternal Quest of the Revolutionary Port",
    description:
      "Savor each moment of this secret escape through East Coast USA, starting in Boston. Visit renowned locations like Florence, Milan, Venice, Barcelona, where adventure and relaxation intertwine.",
    rating: 4.9,
    tags: ["culinary"],
  },
  {
    basePrice: 2208,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
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
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
      ],
      description:
        "Depart Boston on a relaxing reunion through the East Coast USA region. Highlights include the stunning coastlines of Athens, Santorini, Rome, Malta, all while enjoying first-class amenities on board.",
      distance: "1438 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Boston to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Santorini to Rome",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Rome to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Catherine Palmer",
        role: "Marketing Coordinator",
        languages: ["English", "Guarani", "Portuguese", "French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "eternal.reverie.of.t@velarivoyages.com",
          contactNumber: "+1-399-729-7157",
        },
      },
    ],
    title: "Eternal Reverie of the Harbor of History",
    description:
      "Depart Boston on a relaxing reunion through the East Coast USA region. Highlights include the stunning coastlines of Athens, Santorini, Rome, Malta, all while enjoying first-class amenities on board.",
    rating: 4.6,
    tags: ["cruise-line", "relaxation"],
  },
  {
    basePrice: 2755,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "Step aboard in Boston and begin a tranquil journey through the scenic East Coast USA. From historic cities to coastal hideaways like Barcelona, Mykonos, Florence, Lisbon, every day is unforgettable.",
      distance: "505 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Boston to Barcelona",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Barcelona to Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Mykonos to Florence",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Lisbon to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Susan Foster",
        role: "Marketing Coordinator",
        languages: ["English", "Guarani", "Portuguese", "French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "sundrenched.odyssey.@velarivoyages.com",
          contactNumber: "+1-705-268-8939",
        },
      },
    ],
    title: "Sun-Drenched Odyssey of the Freedom’s Harbor",
    description:
      "Step aboard in Boston and begin a tranquil journey through the scenic East Coast USA. From historic cities to coastal hideaways like Barcelona, Mykonos, Florence, Lisbon, every day is unforgettable.",
    rating: 4.5,
    tags: ["cruise-adventure", "cruise-journey", "long-distance"],
  },
  {
    basePrice: 3450,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this exquisite sanctum beginning in Boston. Visit breathtaking East Coast USA locales such as Athens, Mykonos on this unforgettable itinerary.",
      distance: "1249 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Boston to Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Athens to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Mykonos to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Audrey Sutton",
        role: "Marketing Coordinator",
        languages: ["English", "Guarani", "Portuguese", "French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "panoramic.labyrinth.@velarivoyages.com",
          contactNumber: "+1-145-770-3822",
        },
      },
    ],
    title: "Panoramic Labyrinth of the Eastern Elegance",
    description:
      "Enjoy seamless luxury on this exquisite sanctum beginning in Boston. Visit breathtaking East Coast USA locales such as Athens, Mykonos on this unforgettable itinerary.",
    rating: 4.3,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 6416,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "From bustling Boston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Dubrovnik, Mykonos, Athens, Venice deliver a balanced blend of culture and comfort.",
      distance: "866 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Boston to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Mykonos to Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Venice to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Bennett",
        role: "Marketing Coordinator",
        languages: ["English", "Guarani", "Portuguese", "French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "sublime.oasis.of.the@velarivoyages.com",
          contactNumber: "+1-511-947-9694",
        },
      },
    ],
    title: "Sublime Oasis of the Harbor of History",
    description:
      "From bustling Boston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Dubrovnik, Mykonos, Athens, Venice deliver a balanced blend of culture and comfort.",
    rating: 4.4,
    tags: ["cruise-holiday", "cruise-vacation"],
  },
  {
    basePrice: 3783,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "This inspiring oasis departs from Boston, navigating the diverse landscapes and vibrant cities of East Coast USA. Must-see stops include Santorini, Venice.",
      distance: "759 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Boston to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Rachel Collins",
        role: "Marketing Coordinator",
        languages: ["English", "Guarani", "Portuguese", "French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "legendary.mystique.o@velarivoyages.com",
          contactNumber: "+1-500-234-1269",
        },
      },
    ],
    title: "Legendary Mystique of the Harbor of History",
    description:
      "This inspiring oasis departs from Boston, navigating the diverse landscapes and vibrant cities of East Coast USA. Must-see stops include Santorini, Venice.",
    rating: 4.9,
    tags: ["short-getaway", "romantic"],
  },
  {
    basePrice: 7099,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "Escape the everyday with this mesmerizing journey through East Coast USA, departing from Boston. You'll visit Santorini, Lisbon, Malta, where every stop is a new adventure.",
      distance: "1097 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Boston to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santorini to Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Lisbon to Malta",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Malta to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
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
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Laura Fisher",
        role: "Marketing Coordinator",
        languages: ["English", "Guarani", "Portuguese", "French"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
        contact: {
          contactEmail: "sublime.reverie.of.t@velarivoyages.com",
          contactNumber: "+1-937-180-1378",
        },
      },
    ],
    title: "Sublime Reverie of the Cradle of Resistance",
    description:
      "Escape the everyday with this mesmerizing journey through East Coast USA, departing from Boston. You'll visit Santorini, Lisbon, Malta, where every stop is a new adventure.",
    rating: 5.0,
    tags: ["short-getaway", "holiday-cruise"],
  },
  {
    basePrice: 8257,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "This labyrinth takes you beyond the ordinary, starting in Boston. With breathtaking stops in Milan, Barcelona, Rome, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1414 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Boston to Milan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Barcelona to Rome",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Rome to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Virginia Sutton",
        role: "Marketing Coordinator",
        languages: ["English", "Guarani", "Portuguese", "French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/91.jpg",
        contact: {
          contactEmail: "pristine.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-777-340-7915",
        },
      },
    ],
    title: "Pristine Sanctuary of the Seaboard Heritage",
    description:
      "This labyrinth takes you beyond the ordinary, starting in Boston. With breathtaking stops in Milan, Barcelona, Rome, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.6,
    tags: ["general", "family-friendly"],
  },
  {
    basePrice: 5647,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "From bustling Boston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Venice, Mykonos deliver a balanced blend of culture and comfort.",
      distance: "917 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Boston to Venice",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Venice to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Mykonos to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Day",
        role: "Marketing Coordinator",
        languages: ["English", "Guarani", "Portuguese", "French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "aweinspiring.excursi@velarivoyages.com",
          contactNumber: "+1-539-438-9993",
        },
      },
    ],
    title: "Awe-Inspiring Excursion of the Colonial Gateway",
    description:
      "From bustling Boston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Venice, Mykonos deliver a balanced blend of culture and comfort.",
    rating: 4.2,
    tags: ["relaxation", "cruise-adventure", "cruise-vacation"],
  },
  {
    basePrice: 8227,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
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
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "Begin your reverie in Boston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Florence, Venice, Santorini and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1276 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Boston to Florence",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Florence to Venice",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Venice to Santorini",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Santorini to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
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
          description: "Exploring Venice",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Naomi Griffin",
        role: "Marketing Coordinator",
        languages: ["English", "Guarani", "Portuguese", "French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
        contact: {
          contactEmail: "sundrenched.saga.of.@velarivoyages.com",
          contactNumber: "+1-244-698-7872",
        },
      },
    ],
    title: "Sun-Drenched Saga of the Harbor of History",
    description:
      "Begin your reverie in Boston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Florence, Venice, Santorini and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.3,
    tags: ["nature", "cultural", "anniversary-cruise"],
  },
];
