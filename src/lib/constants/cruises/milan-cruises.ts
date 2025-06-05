import { Cruise } from "@/lib/interfaces/services/cruises";

export const milanCruises: Cruise[] = [
  {
    basePrice: 5949,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Escape the everyday with this captivating journey through Mediterranean, departing from Milan. You'll visit Venice, Lisbon, Barcelona, where every stop is a new adventure.",
      distance: "1486 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Milan to Venice",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Venice to Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Lisbon to Barcelona",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Barcelona to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Patrick Russell",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "dreamlike.discovery.@velarivoyages.com",
          contactNumber: "+1-701-911-7312",
        },
      },
    ],
    title: "Dreamlike Discovery of the Design in Motion",
    description:
      "Escape the everyday with this captivating journey through Mediterranean, departing from Milan. You'll visit Venice, Lisbon, Barcelona, where every stop is a new adventure.",
    rating: 4.8,
    tags: ["expedition", "short-getaway"],
  },
  {
    basePrice: 5669,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Santorini",
      country: "Greece",
      coordinates: {
        latitude: 36.3932,
        longitude: 25.4615,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
        {
          city: "Florence",
          country: "Italy",
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
      ],
      description:
        "Sail away from Milan into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Mykonos, Florence, Santorini, where history, nature, and cuisine collide.",
      distance: "925 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Milan to Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Mykonos to Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Florence to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Raymond Graham",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "gilded.legacy.of.the@velarivoyages.com",
          contactNumber: "+1-415-599-4965",
        },
      },
    ],
    title: "Gilded Legacy of the Olive-Draped Hills",
    description:
      "Sail away from Milan into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Mykonos, Florence, Santorini, where history, nature, and cuisine collide.",
    rating: 4.7,
    tags: ["cultural", "sightseeing"],
  },
  {
    basePrice: 5817,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Board in Milan for a hand-crafted serenade through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Mykonos, Malta, Florence.",
      distance: "529 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Milan to Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Mykonos to Malta",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Malta to Florence",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Florence to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Florence",
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
        name: "Paul Fletcher",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "azure.sojourn.of.the@velarivoyages.com",
          contactNumber: "+1-708-996-3612",
        },
      },
    ],
    title: "Azure Sojourn of the Chic Fortress",
    description:
      "Board in Milan for a hand-crafted serenade through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Mykonos, Malta, Florence.",
    rating: 4.3,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 7437,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Step aboard in Milan and begin a sun-drenched journey through the scenic Mediterranean. From historic cities to coastal hideaways like Florence, Venice, Barcelona, every day is unforgettable.",
      distance: "564 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Milan to Florence",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Florence to Venice",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Venice to Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Barcelona to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
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
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jacob Sutton",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "riveting.saga.of.the@velarivoyages.com",
          contactNumber: "+1-957-784-5917",
        },
      },
    ],
    title: "Riveting Saga of the Olive-Draped Hills",
    description:
      "Step aboard in Milan and begin a sun-drenched journey through the scenic Mediterranean. From historic cities to coastal hideaways like Florence, Venice, Barcelona, every day is unforgettable.",
    rating: 4.6,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 3231,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "This luminous sanctuary begins in Milan and ventures deep into the heart of Mediterranean. Wander through colorful markets, historic streets, and serene coastlines at Lisbon, Santorini, Venice, Malta.",
      distance: "539 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Milan to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Santorini to Venice",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Venice to Malta",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Sailing from Malta to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Price",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/35.jpg",
        contact: {
          contactEmail: "verdant.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-668-247-1060",
        },
      },
    ],
    title: "Verdant Horizon of the Classical Crossroads",
    description:
      "This luminous sanctuary begins in Milan and ventures deep into the heart of Mediterranean. Wander through colorful markets, historic streets, and serene coastlines at Lisbon, Santorini, Venice, Malta.",
    rating: 4.6,
    tags: ["cruise-getaway", "fall-cruise"],
  },
  {
    basePrice: 1765,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
        "Let the waves lead you from Milan on this secluded embrace. Traverse the iconic waters of Mediterranean and discover the beauty of Malta, Dubrovnik, Barcelona.",
      distance: "1464 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Malta to Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Malta",
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
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ryan Collins",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "spectacular.mythos.o@velarivoyages.com",
          contactNumber: "+1-825-848-4071",
        },
      },
    ],
    title: "Spectacular Mythos of the Citadels by the Sea",
    description:
      "Let the waves lead you from Milan on this secluded embrace. Traverse the iconic waters of Mediterranean and discover the beauty of Malta, Dubrovnik, Barcelona.",
    rating: 4.6,
    tags: ["general", "cruise-experience"],
  },
  {
    basePrice: 4433,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "This inspiring labyrinth departs from Milan, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Santorini, Lisbon, Rome.",
      distance: "643 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Santorini to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Lisbon to Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rome to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Albert Dixon",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "enchanting.mythos.of@velarivoyages.com",
          contactNumber: "+1-898-584-6333",
        },
      },
    ],
    title: "Enchanting Mythos of the Threaded with Elegance",
    description:
      "This inspiring labyrinth departs from Milan, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Santorini, Lisbon, Rome.",
    rating: 4.2,
    tags: ["short-getaway", "cruise-journey", "repositioning"],
  },
  {
    basePrice: 8605,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this midnight currents departing Milan. Savor local cuisine and uncover regional beauty from Athens to Malta.",
      distance: "1388 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Milan to Athens",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Malta to Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Lisbon to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Brian Price",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "infinite.panorama.of@velarivoyages.com",
          contactNumber: "+1-668-666-2874",
        },
      },
    ],
    title: "Infinite Panorama of the Threaded with Elegance",
    description:
      "Cruise into cultural richness aboard this midnight currents departing Milan. Savor local cuisine and uncover regional beauty from Athens to Malta.",
    rating: 4.4,
    tags: ["general"],
  },
  {
    basePrice: 4216,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
      ],
      description:
        "This handpicked arcadia begins in Milan and travels through Mediterranean's iconic waterscapes. Discover Barcelona, Rome as each day brings new stories and every night offers elegant repose.",
      distance: "940 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Barcelona to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Peter Carpenter",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "dreamlike.panorama.o@velarivoyages.com",
          contactNumber: "+1-443-339-9387",
        },
      },
    ],
    title: "Dreamlike Panorama of the Threaded with Elegance",
    description:
      "This handpicked arcadia begins in Milan and travels through Mediterranean's iconic waterscapes. Discover Barcelona, Rome as each day brings new stories and every night offers elegant repose.",
    rating: 4.7,
    tags: ["anniversary-cruise", "weekend-cruise"],
  },
  {
    basePrice: 6155,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Set sail from Milan on this spectacular odyssey through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Venice and Dubrovnik and Florence and Rome, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1144 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Milan to Venice",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Venice to Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Florence to Rome",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Rome to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 18",
          end: "Day 18",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Michael Holloway",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "exquisite.excursion.@velarivoyages.com",
          contactNumber: "+1-338-645-3277",
        },
      },
    ],
    title: "Exquisite Excursion of the Threaded with Elegance",
    description:
      "Set sail from Milan on this spectacular odyssey through the heart of Mediterranean. Experience the perfect blend of relaxation and adventure as you explore Venice and Dubrovnik and Florence and Rome, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.8,
    tags: ["romantic"],
  },
  {
    basePrice: 5375,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Florence",
          country: "Italy",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Begin your enigma in Milan, a gateway to the soul of Mediterranean. Enjoy days spent exploring Barcelona, Florence, Athens, Lisbon and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1169 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Milan to Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Athens to Lisbon",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Lisbon to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joseph Cooper",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "enchanting.odyssey.o@velarivoyages.com",
          contactNumber: "+1-842-390-5543",
        },
      },
    ],
    title: "Enchanting Odyssey of the Design in Motion",
    description:
      "Begin your enigma in Milan, a gateway to the soul of Mediterranean. Enjoy days spent exploring Barcelona, Florence, Athens, Lisbon and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.0,
    tags: ["repositioning", "cruise-ship"],
  },
  {
    basePrice: 8786,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Florence",
          country: "Italy",
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Escape into the calm waters of Mediterranean with this idyllic journey from Milan. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Athens, Florence, Malta.",
      distance: "1168 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Milan to Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Athens to Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Malta to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Billy Montgomery",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "charming.pulse.of.th@velarivoyages.com",
          contactNumber: "+1-477-102-7183",
        },
      },
    ],
    title: "Charming Pulse of the Marble Cities",
    description:
      "Escape into the calm waters of Mediterranean with this idyllic journey from Milan. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Athens, Florence, Malta.",
    rating: 4.2,
    tags: ["general", "VIP"],
  },
  {
    basePrice: 1343,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Depart from iconic Milan and traverse the Mediterranean with visits to Santorini, Dubrovnik, Florence. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1312 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Santorini to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Florence to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Raymond Warren",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "refined.tranquility.@velarivoyages.com",
          contactNumber: "+1-229-205-9932",
        },
      },
    ],
    title: "Refined Tranquility of the Marble-Runway Realm",
    description:
      "Depart from iconic Milan and traverse the Mediterranean with visits to Santorini, Dubrovnik, Florence. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.9,
    tags: ["long-distance", "wildlife"],
  },
  {
    basePrice: 5857,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Begin a captivating haven through the Mediterranean, departing Milan. With visits to Athens, Malta, Santorini, Venice, each day brings a new adventure and deeper connection to the region.",
      distance: "891 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Milan to Athens",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Malta to Santorini",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Santorini to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Darrell Jennings",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "opulent.discovery.of@velarivoyages.com",
          contactNumber: "+1-649-686-1760",
        },
      },
    ],
    title: "Opulent Discovery of the Design in Motion",
    description:
      "Begin a captivating haven through the Mediterranean, departing Milan. With visits to Athens, Malta, Santorini, Venice, each day brings a new adventure and deeper connection to the region.",
    rating: 4.4,
    tags: ["cruise-adventure", "culinary", "cruise-experience"],
  },
  {
    basePrice: 4955,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Let this epic voyage redefine your idea of travel. From Milan, explore the Mediterranean in luxurious comfort, stopping at Santorini, Florence where every port offers a new chapter.",
      distance: "1271 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Milan to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Baker",
        role: "Reservations Agent",
        languages: ["English", "Russian", "French", "Czech", "Polish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "riveting.excursion.o@velarivoyages.com",
          contactNumber: "+1-424-479-9987",
        },
      },
    ],
    title: "Riveting Excursion of the Lombard Jewel",
    description:
      "Let this epic voyage redefine your idea of travel. From Milan, explore the Mediterranean in luxurious comfort, stopping at Santorini, Florence where every port offers a new chapter.",
    rating: 4.1,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 4102,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
      ],
      description:
        "Escape into the calm waters of Mediterranean with this sublime journey from Milan. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Venice, Barcelona, Malta, Athens.",
      distance: "984 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Milan to Venice",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Venice to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Barcelona to Malta",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Malta to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Brenda Henderson",
        role: "Group Booking Coordinator",
        languages: ["English", "Greek", "Danish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "sublime.embrace.of.t@velarivoyages.com",
          contactNumber: "+1-335-844-1092",
        },
      },
    ],
    title: "Sublime Embrace of the Chic Fortress",
    description:
      "Escape into the calm waters of Mediterranean with this sublime journey from Milan. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Venice, Barcelona, Malta, Athens.",
    rating: 4.5,
    tags: ["nature"],
  },
  {
    basePrice: 4053,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
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
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "This infinite cruise from Milan is your ticket to the captivating charm of the Mediterranean. Discover the delights of Athens, Barcelona with enriching excursions and award-winning service.",
      distance: "927 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Milan to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Barcelona to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
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
          description: "Exploring Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elena Wells",
        role: "Group Booking Coordinator",
        languages: ["English", "Greek", "Danish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "ornate.renaissance.o@velarivoyages.com",
          contactNumber: "+1-414-602-4120",
        },
      },
    ],
    title: "Ornate Renaissance of the Legacy of Empires",
    description:
      "This infinite cruise from Milan is your ticket to the captivating charm of the Mediterranean. Discover the delights of Athens, Barcelona with enriching excursions and award-winning service.",
    rating: 4.5,
    tags: ["historical", "cruise-getaway", "exclusive"],
  },
  {
    basePrice: 6891,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
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
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
      ],
      description:
        "Board in Milan for a hand-crafted reunion through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Lisbon, Malta, Venice.",
      distance: "1136 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Milan to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lisbon to Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Malta to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
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
          description: "Exploring Malta",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Nicole Curtis",
        role: "Group Booking Coordinator",
        languages: ["English", "Greek", "Danish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "extraordinary.elevat@velarivoyages.com",
          contactNumber: "+1-140-363-5299",
        },
      },
    ],
    title: "Extraordinary Elevation of the Chic Fortress",
    description:
      "Board in Milan for a hand-crafted reunion through the breathtaking Mediterranean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Lisbon, Malta, Venice.",
    rating: 4.0,
    tags: ["romantic"],
  },
  {
    basePrice: 9486,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Start in the vibrant city of Milan and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Malta, Venice.",
      distance: "617 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Malta to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Hannah Baker",
        role: "Group Booking Coordinator",
        languages: ["English", "Greek", "Danish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "mythic.drift.of.the.@velarivoyages.com",
          contactNumber: "+1-368-376-6134",
        },
      },
    ],
    title: "Mythic Drift of the Fashion Capital",
    description:
      "Start in the vibrant city of Milan and venture into the iconic Mediterranean. Discover authentic local cultures, cuisine, and coastal wonders in Malta, Venice.",
    rating: 4.1,
    tags: ["nature", "glacier-cruise"],
  },
  {
    basePrice: 2851,
    departureLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Milan",
          country: "Italy",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Let the waves lead you from Milan on this lavish exploration. Traverse the iconic waters of Mediterranean and discover the beauty of Malta, Rome, Athens.",
      distance: "1253 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Milan to Malta",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Malta to Rome",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Rome to Athens",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Athens to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Milan",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Susan Reed",
        role: "Group Booking Coordinator",
        languages: ["English", "Greek", "Danish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "moonlit.mystique.of.@velarivoyages.com",
          contactNumber: "+1-962-117-9951",
        },
      },
    ],
    title: "Moonlit Mystique of the Citadels by the Sea",
    description:
      "Let the waves lead you from Milan on this lavish exploration. Traverse the iconic waters of Mediterranean and discover the beauty of Malta, Rome, Athens.",
    rating: 4.4,
    tags: ["cruise-excursion"],
  },
];
