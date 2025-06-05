import { Cruise } from "@/lib/interfaces/services/cruises";

export const charlestonCruises: Cruise[] = [
  {
    basePrice: 8580,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
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
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
      ],
      description:
        "Sail away from Charleston into the beautiful expanse of East Coast USA. Along the way, enjoy rich cultural experiences in Venice, Rome, where history, nature, and cuisine collide.",
      distance: "1193 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Charleston to Venice",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Venice to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Carlos Marshall",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "luxurious.expedition@velarivoyages.com",
          contactNumber: "+1-538-787-9311",
        },
      },
    ],
    title: "Luxurious Expedition of the Echoes of Elegance",
    description:
      "Sail away from Charleston into the beautiful expanse of East Coast USA. Along the way, enjoy rich cultural experiences in Venice, Rome, where history, nature, and cuisine collide.",
    rating: 4.2,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 4217,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
        "Let the winds of the East Coast USA carry you from Charleston to the most stunning ports in the region. With destinations like Rome, Santorini, Barcelona, this elevation redefines luxury travel.",
      distance: "1314 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Charleston to Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Rome to Santorini",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Santorini to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Ralph Russell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "whispering.arcadia.o@velarivoyages.com",
          contactNumber: "+1-730-470-2024",
        },
      },
    ],
    title: "Whispering Arcadia of the Echoes of Elegance",
    description:
      "Let the winds of the East Coast USA carry you from Charleston to the most stunning ports in the region. With destinations like Rome, Santorini, Barcelona, this elevation redefines luxury travel.",
    rating: 4.1,
    tags: ["nature", "anniversary-cruise", "holiday-cruise"],
  },
  {
    basePrice: 3117,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    arrivalLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
          },
        },
      ],
      description:
        "Your journey through the East Coast USA begins in Charleston, where elegance meets adventure. Explore the shores of Mykonos, Barcelona, Dubrovnik, Milan, with curated excursions and luxurious onboard amenities.",
      distance: "1423 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Charleston to Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Mykonos to Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Milan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Milan to Charleston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Barcelona",
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
          description: "Exploring Milan",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Albert Keller",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "majestic.mystique.of@velarivoyages.com",
          contactNumber: "+1-530-543-2857",
        },
      },
    ],
    title: "Majestic Mystique of the Porch-Lined Dreams",
    description:
      "Your journey through the East Coast USA begins in Charleston, where elegance meets adventure. Explore the shores of Mykonos, Barcelona, Dubrovnik, Milan, with curated excursions and luxurious onboard amenities.",
    rating: 4.9,
    tags: ["cruise-holiday", "relaxation"],
  },
  {
    basePrice: 1324,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    arrivalLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
          },
        },
      ],
      description:
        "Your expedition begins in Charleston, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Florence to the historic streets of Santorini, each stop in the East Coast USA will leave a lasting impression.",
      distance: "1105 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Charleston to Florence",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Florence to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santorini to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Mykonos to Barcelona",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Barcelona to Charleston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zachary Graham",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "secluded.elevation.o@velarivoyages.com",
          contactNumber: "+1-131-848-1666",
        },
      },
    ],
    title: "Secluded Elevation of the Southern Charm",
    description:
      "Your expedition begins in Charleston, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Florence to the historic streets of Santorini, each stop in the East Coast USA will leave a lasting impression.",
    rating: 4.3,
    tags: ["historical"],
  },
  {
    basePrice: 9613,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    arrivalLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Charleston on this majestic journey across East Coast USA. Uncover the beauty and history of Florence, Athens with curated excursions, world-class cuisine, and exceptional service.",
      distance: "792 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Charleston to Florence",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Florence to Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Athens to Charleston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "John Hayes",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "exquisite.sojourn.of@velarivoyages.com",
          contactNumber: "+1-745-107-5650",
        },
      },
    ],
    title: "Exquisite Sojourn of the Echoes of Elegance",
    description:
      "Sail away from the charming harbor of Charleston on this majestic journey across East Coast USA. Uncover the beauty and history of Florence, Athens with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.4,
    tags: ["tropical"],
  },
  {
    basePrice: 2216,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    arrivalLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
          },
        },
      ],
      description:
        "Set off on a whisper from Charleston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Athens, Barcelona, Florence, Lisbon.",
      distance: "946 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Charleston to Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Athens to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Florence to Lisbon",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Lisbon to Charleston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Juan Price",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "mythic.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-910-146-1816",
        },
      },
    ],
    title: "Mythic Odyssey of the Porch-Lined Dreams",
    description:
      "Set off on a whisper from Charleston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Athens, Barcelona, Florence, Lisbon.",
    rating: 4.6,
    tags: ["cruise-holiday", "cruise-line", "tropical"],
  },
  {
    basePrice: 4105,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this sublime pulse through East Coast USA, starting from the illustrious port of Charleston. From Rome to Florence, each destination offers its own story, culture, and breathtaking views.",
      distance: "1191 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Charleston to Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Rome to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Harry Fox",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "moonlit.serenade.of.@velarivoyages.com",
          contactNumber: "+1-890-161-6135",
        },
      },
    ],
    title: "Moonlit Serenade of the Echoes of Elegance",
    description:
      "Experience the elegance of the seas on this sublime pulse through East Coast USA, starting from the illustrious port of Charleston. From Rome to Florence, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.6,
    tags: ["cruise-journey", "long-distance"],
  },
  {
    basePrice: 6784,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    arrivalLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
          },
        },
      ],
      description:
        "From bustling Charleston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Santorini, Mykonos, Lisbon, Barcelona deliver a balanced blend of culture and comfort.",
      distance: "948 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Charleston to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Santorini to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Lisbon to Barcelona",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Barcelona to Charleston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thabo Murray",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "midnight.panorama.of@velarivoyages.com",
          contactNumber: "+1-871-606-5173",
        },
      },
    ],
    title: "Midnight Panorama of the Magnolia Veins",
    description:
      "From bustling Charleston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Santorini, Mykonos, Lisbon, Barcelona deliver a balanced blend of culture and comfort.",
    rating: 4.9,
    tags: ["relaxation", "nature", "fall-cruise"],
  },
  {
    basePrice: 7026,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
        "This hand-selected panoramic cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Rome, Santorini, Milan, each telling a story through food, music, and tradition.",
      distance: "1034 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Charleston to Rome",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Rome to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Santorini to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Lawson",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
        contact: {
          contactEmail: "ornate.excursion.of.@velarivoyages.com",
          contactNumber: "+1-850-226-9902",
        },
      },
    ],
    title: "Ornate Excursion of the Echoes of Elegance",
    description:
      "This hand-selected panoramic cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Rome, Santorini, Milan, each telling a story through food, music, and tradition.",
    rating: 4.5,
    tags: ["fall-cruise", "cruise-adventure"],
  },
  {
    basePrice: 3702,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    arrivalLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
          },
        },
      ],
      description:
        "Set sail from Charleston on this spectacular odyssey through the heart of East Coast USA. Experience the perfect blend of relaxation and adventure as you explore Santorini and Athens, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "765 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Charleston to Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Santorini to Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Athens to Charleston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Charleston",
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
          description: "Exploring Athens",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Juan Hamilton",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "aweinspiring.eclipse@velarivoyages.com",
          contactNumber: "+1-582-201-7330",
        },
      },
    ],
    title: "Awe-Inspiring Eclipse of the Maritime Whisper",
    description:
      "Set sail from Charleston on this spectacular odyssey through the heart of East Coast USA. Experience the perfect blend of relaxation and adventure as you explore Santorini and Athens, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.1,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 4838,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
        "Begin your whisper in Charleston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Santorini, Venice and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "810 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Charleston to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Santorini to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Aaron Clark",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "velvet.expedition.of@velarivoyages.com",
          contactNumber: "+1-816-639-5846",
        },
      },
    ],
    title: "Velvet Expedition of the Southern Charm",
    description:
      "Begin your whisper in Charleston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Santorini, Venice and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.8,
    tags: ["glacier-cruise", "romantic", "expedition"],
  },
  {
    basePrice: 8852,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Set off on a embrace from Charleston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Mykonos, Malta, Lisbon, Florence.",
      distance: "527 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Charleston to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Mykonos to Malta",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Malta to Lisbon",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Lisbon to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
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
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sebastian Spencer",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "forbidden.adventure.@velarivoyages.com",
          contactNumber: "+1-895-860-3693",
        },
      },
    ],
    title: "Forbidden Adventure of the Historic Waterfront",
    description:
      "Set off on a embrace from Charleston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Mykonos, Malta, Lisbon, Florence.",
    rating: 4.3,
    tags: ["cultural"],
  },
  {
    basePrice: 1153,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
      ],
      description:
        "Board in Charleston for a hand-crafted awakening through the breathtaking East Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Dubrovnik, Rome, Athens, Lisbon.",
      distance: "1444 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Charleston to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Rome to Athens",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Athens to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Tyler Fletcher",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "heavenly.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-967-154-5139",
        },
      },
    ],
    title: "Heavenly Mirage of the Seaboard Heritage",
    description:
      "Board in Charleston for a hand-crafted awakening through the breathtaking East Coast USA. Highlights include sun-drenched beaches, historic ports, and immersive culture in Dubrovnik, Rome, Athens, Lisbon.",
    rating: 4.8,
    tags: ["cruise-journey", "seasonal", "tropical"],
  },
  {
    basePrice: 3991,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    arrivalLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
          },
        },
      ],
      description:
        "Set off on a journey from Charleston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Malta, Mykonos.",
      distance: "633 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Charleston to Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Malta to Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Mykonos to Charleston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Charleston",
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
          description: "Exploring Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Justin Hawkins",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/0.jpg",
        contact: {
          contactEmail: "whispering.odyssey.o@velarivoyages.com",
          contactNumber: "+1-554-493-7467",
        },
      },
    ],
    title: "Whispering Odyssey of the Historic Harbors",
    description:
      "Set off on a journey from Charleston that captures the essence of East Coast USA. Discover cultural gems and culinary delights across Malta, Mykonos.",
    rating: 4.2,
    tags: ["relaxation", "cruise-vacation"],
  },
  {
    basePrice: 1691,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    arrivalLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
          },
        },
      ],
      description:
        "This extraordinary horizon from Charleston offers the ultimate East Coast USA exploration. Immerse yourself in the rich cultures and stunning landscapes of Milan and Dubrovnik, creating memories that will last a lifetime.",
      distance: "542 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Charleston to Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Milan to Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Charleston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brandon Knight",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Haitian", "Aymara"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "panoramic.odyssey.of@velarivoyages.com",
          contactNumber: "+1-724-642-5497",
        },
      },
    ],
    title: "Panoramic Odyssey of the Maritime Whisper",
    description:
      "This extraordinary horizon from Charleston offers the ultimate East Coast USA exploration. Immerse yourself in the rich cultures and stunning landscapes of Milan and Dubrovnik, creating memories that will last a lifetime.",
    rating: 4.3,
    tags: ["cruise-holiday", "wildlife", "family-friendly"],
  },
  {
    basePrice: 6816,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    arrivalLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Charleston. This passage through the East Coast USA unveils stunning stops including Rome, Athens, all with first-class service.",
      distance: "1096 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Charleston to Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Rome to Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Athens to Charleston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ashley Fox",
        role: "Group Booking Coordinator",
        languages: ["English", "Quechua", "Spanish", "Haitian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "secluded.requiem.of.@velarivoyages.com",
          contactNumber: "+1-394-236-7460",
        },
      },
    ],
    title: "Secluded Requiem of the Patriot Ports",
    description:
      "Step into a world of elegance and exploration from Charleston. This passage through the East Coast USA unveils stunning stops including Rome, Athens, all with first-class service.",
    rating: 4.5,
    tags: ["cruise"],
  },
  {
    basePrice: 1524,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    arrivalLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
          },
        },
      ],
      description:
        "Begin your symphony in Charleston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Rome, Malta and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1384 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Charleston to Rome",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Rome to Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Malta to Charleston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Jennifer Graves",
        role: "Group Booking Coordinator",
        languages: ["English", "Quechua", "Spanish", "Haitian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "radiant.tide.of.the.@velarivoyages.com",
          contactNumber: "+1-726-640-3848",
        },
      },
    ],
    title: "Radiant Tide of the Porch-Lined Dreams",
    description:
      "Begin your symphony in Charleston, a gateway to the soul of East Coast USA. Enjoy days spent exploring Rome, Malta and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.2,
    tags: ["historical", "family-friendly", "fall-cruise"],
  },
  {
    basePrice: 4056,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
        "Depart Charleston on a relaxing reunion through the East Coast USA region. Highlights include the stunning coastlines of Santorini, Florence, all while enjoying first-class amenities on board.",
      distance: "617 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Charleston to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Santorini to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Isabella Carpenter",
        role: "Group Booking Coordinator",
        languages: ["English", "Quechua", "Spanish", "Haitian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "moonlit.passage.of.t@velarivoyages.com",
          contactNumber: "+1-112-155-6858",
        },
      },
    ],
    title: "Moonlit Passage of the Echoes of Elegance",
    description:
      "Depart Charleston on a relaxing reunion through the East Coast USA region. Highlights include the stunning coastlines of Santorini, Florence, all while enjoying first-class amenities on board.",
    rating: 4.1,
    tags: ["fall-cruise", "cruise-journey"],
  },
  {
    basePrice: 7652,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
        "From bustling Charleston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Rome, Malta deliver a balanced blend of culture and comfort.",
      distance: "1245 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Charleston to Rome",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Rome to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Audrey Hamilton",
        role: "Group Booking Coordinator",
        languages: ["English", "Quechua", "Spanish", "Haitian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "opulent.zenith.of.th@velarivoyages.com",
          contactNumber: "+1-910-731-1288",
        },
      },
    ],
    title: "Opulent Zenith of the Magnolia Veins",
    description:
      "From bustling Charleston to serene East Coast USA shores, this cruise invites you to relax, explore, and indulge. Stops at Rome, Malta deliver a balanced blend of culture and comfort.",
    rating: 4.7,
    tags: ["expedition"],
  },
  {
    basePrice: 8004,
    departureLocation: {
      city: "Charleston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 32.77657,
        longitude: -79.93092,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Charleston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 32.77657,
            longitude: -79.93092,
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
      ],
      description:
        "Embark from Charleston and traverse the East Coast USA in style. Whether it’s the energy of Venice or the calm of Athens, each destination reveals a new side of paradise.",
      distance: "527 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Charleston to Venice",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Venice to Athens",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Athens to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Charleston",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Laura Mason",
        role: "Group Booking Coordinator",
        languages: ["English", "Quechua", "Spanish", "Haitian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/92.jpg",
        contact: {
          contactEmail: "tranquil.quest.of.th@velarivoyages.com",
          contactNumber: "+1-615-310-3221",
        },
      },
    ],
    title: "Tranquil Quest of the Eastern Elegance",
    description:
      "Embark from Charleston and traverse the East Coast USA in style. Whether it’s the energy of Venice or the calm of Athens, each destination reveals a new side of paradise.",
    rating: 4.1,
    tags: ["cultural", "culinary", "cruise-excursion"],
  },
];
