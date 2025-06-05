import { Cruise } from "@/lib/interfaces/services/cruises";

export const torontoCruises: Cruise[] = [
  {
    basePrice: 9398,
    departureLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
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
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
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
        "Leave ordinary behind as you sail from Toronto across the captivating East Coast Canada. Discover the distinctive personality of each destination, from Florence, Malta, Lisbon, Barcelona.",
      distance: "1144 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Toronto to Florence",
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
          description: "Sailing from Malta to Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Lisbon to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Toronto",
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
          description: "Exploring Malta",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Bobby Fletcher",
        role: "Travel Advisor",
        languages: ["English", "Haitian", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
        contact: {
          contactEmail: "ornate.renaissance.o@velarivoyages.com",
          contactNumber: "+1-826-140-5956",
        },
      },
    ],
    title: "Ornate Renaissance of the Lobster Isles",
    description:
      "Leave ordinary behind as you sail from Toronto across the captivating East Coast Canada. Discover the distinctive personality of each destination, from Florence, Malta, Lisbon, Barcelona.",
    rating: 4.6,
    tags: ["tropical"],
  },
  {
    basePrice: 4775,
    departureLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    arrivalLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
          },
        },
      ],
      description:
        "Let the waves lead you from Toronto on this serene journey. Traverse the iconic waters of East Coast Canada and discover the beauty of Florence, Rome, Barcelona.",
      distance: "508 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Toronto to Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Florence to Rome",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Rome to Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Barcelona to Toronto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Toronto",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Florence",
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
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Toronto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lucas Cooper",
        role: "Travel Advisor",
        languages: ["English", "Haitian", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/91.jpg",
        contact: {
          contactEmail: "velvet.serenade.of.t@velarivoyages.com",
          contactNumber: "+1-223-305-2526",
        },
      },
    ],
    title: "Velvet Serenade of the Urban Mosaic",
    description:
      "Let the waves lead you from Toronto on this serene journey. Traverse the iconic waters of East Coast Canada and discover the beauty of Florence, Rome, Barcelona.",
    rating: 4.5,
    tags: ["holiday-cruise", "relaxation", "repositioning"],
  },
  {
    basePrice: 8973,
    departureLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    arrivalLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
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
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Toronto on this spectacular journey across East Coast Canada. Uncover the beauty and history of Rome, Malta, Lisbon, Dubrovnik with curated excursions, world-class cuisine, and exceptional service.",
      distance: "813 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Toronto to Rome",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Rome to Malta",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Malta to Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Lisbon to Dubrovnik",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Toronto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Toronto",
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
          description: "Exploring Malta",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Toronto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Juan Chambers",
        role: "Travel Advisor",
        languages: ["English", "Haitian", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "infinite.tranquility@velarivoyages.com",
          contactNumber: "+1-917-573-9048",
        },
      },
    ],
    title: "Infinite Tranquility of the Fog-Kissed Ports",
    description:
      "Sail away from the charming harbor of Toronto on this spectacular journey across East Coast Canada. Uncover the beauty and history of Rome, Malta, Lisbon, Dubrovnik with curated excursions, world-class cuisine, and exceptional service.",
    rating: 5.0,
    tags: ["nature"],
  },
  {
    basePrice: 2907,
    departureLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    arrivalLocation: {
      city: "Malta",
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
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
      ],
      description:
        "Experience coastal elegance on this frontier from Toronto, where the journey through East Coast Canada includes stops in Florence, Dubrovnik, Malta, each more enchanting than the last.",
      distance: "1445 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Toronto to Florence",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Florence to Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Toronto",
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
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jerry Graves",
        role: "Travel Advisor",
        languages: ["English", "Haitian", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "pristine.reflection.@velarivoyages.com",
          contactNumber: "+1-440-130-2810",
        },
      },
    ],
    title: "Pristine Reflection of the North Star City",
    description:
      "Experience coastal elegance on this frontier from Toronto, where the journey through East Coast Canada includes stops in Florence, Dubrovnik, Malta, each more enchanting than the last.",
    rating: 4.1,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 7100,
    departureLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    arrivalLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
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
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
          },
        },
      ],
      description:
        "Let the winds of the East Coast Canada carry you from Toronto to the most stunning ports in the region. With destinations like Santorini, Florence, Venice, this tranquility redefines luxury travel.",
      distance: "1415 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Toronto to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santorini to Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Florence to Venice",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Venice to Toronto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Toronto",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Toronto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Noah Price",
        role: "Travel Advisor",
        languages: ["English", "Haitian", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
        contact: {
          contactEmail: "azure.sanctuary.of.t@velarivoyages.com",
          contactNumber: "+1-226-437-7059",
        },
      },
    ],
    title: "Azure Sanctuary of the Maple-Lit Majesty",
    description:
      "Let the winds of the East Coast Canada carry you from Toronto to the most stunning ports in the region. With destinations like Santorini, Florence, Venice, this tranquility redefines luxury travel.",
    rating: 4.5,
    tags: ["seasonal", "anniversary-cruise", "repositioning"],
  },
  {
    basePrice: 6217,
    departureLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    arrivalLocation: {
      city: "Mykonos",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
      ],
      description:
        "Your renaissance begins in Toronto, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Rome to the historic streets of Lisbon, each stop in the East Coast Canada will leave a lasting impression.",
      distance: "1150 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Toronto to Rome",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Rome to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Lisbon to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Toronto",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Lucas Fox",
        role: "Travel Advisor",
        languages: ["English", "Haitian", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "tidewashed.enigma.of@velarivoyages.com",
          contactNumber: "+1-437-710-4765",
        },
      },
    ],
    title: "Tide-Washed Enigma of the Towered Threshold",
    description:
      "Your renaissance begins in Toronto, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Rome to the historic streets of Lisbon, each stop in the East Coast Canada will leave a lasting impression.",
    rating: 4.9,
    tags: ["anniversary-cruise", "luxury"],
  },
  {
    basePrice: 5247,
    departureLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    arrivalLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
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
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
          },
        },
      ],
      description:
        "Launch into adventure from Toronto and sail deep into the heart of the East Coast Canada. With ports of call like Venice, Lisbon, Mykonos, Barcelona, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "791 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Toronto to Venice",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Venice to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Lisbon to Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Mykonos to Barcelona",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Barcelona to Toronto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Toronto",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Toronto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Albert Baker",
        role: "Travel Advisor",
        languages: ["English", "Haitian", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
        contact: {
          contactEmail: "luminous.serenade.of@velarivoyages.com",
          contactNumber: "+1-279-510-6714",
        },
      },
    ],
    title: "Luminous Serenade of the Towered Threshold",
    description:
      "Launch into adventure from Toronto and sail deep into the heart of the East Coast Canada. With ports of call like Venice, Lisbon, Mykonos, Barcelona, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.7,
    tags: ["cruise-line", "sightseeing"],
  },
  {
    basePrice: 2012,
    departureLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
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
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "Unwind and explore on this pulse through East Coast Canada, departing from Toronto. With every stop—from Mykonos to Lisbon—you’ll collect memories that last a lifetime.",
      distance: "1307 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Toronto to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Mykonos to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Toronto",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Graham",
        role: "Travel Advisor",
        languages: ["English", "Haitian", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/91.jpg",
        contact: {
          contactEmail: "velvet.lullaby.of.th@velarivoyages.com",
          contactNumber: "+1-420-466-5534",
        },
      },
    ],
    title: "Velvet Lullaby of the North Star City",
    description:
      "Unwind and explore on this pulse through East Coast Canada, departing from Toronto. With every stop—from Mykonos to Lisbon—you’ll collect memories that last a lifetime.",
    rating: 4.8,
    tags: ["family-friendly", "cruise-vacation", "tropical"],
  },
  {
    basePrice: 3349,
    departureLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "An unforgettable realm awaits as you cruise from Toronto across East Coast Canada. Dive into history, flavor, and culture with stops including Venice, Mykonos, Lisbon.",
      distance: "714 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Toronto to Venice",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Venice to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Mykonos to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Toronto",
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
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Eric Crawford",
        role: "Travel Advisor",
        languages: ["English", "Haitian", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "mystical.reverie.of.@velarivoyages.com",
          contactNumber: "+1-648-301-8003",
        },
      },
    ],
    title: "Mystical Reverie of the Great Lakes Metropolis",
    description:
      "An unforgettable realm awaits as you cruise from Toronto across East Coast Canada. Dive into history, flavor, and culture with stops including Venice, Mykonos, Lisbon.",
    rating: 4.8,
    tags: ["holiday-cruise", "cruise-vacation", "cruise-getaway"],
  },
  {
    basePrice: 2566,
    departureLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    arrivalLocation: {
      city: "Toronto",
      country: "Canada",
      region: "East Coast Canada",
      coordinates: {
        latitude: 43.6532,
        longitude: -79.3832,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
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
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Toronto",
          country: "Canada",
          region: "East Coast Canada",
          coordinates: {
            latitude: 43.6532,
            longitude: -79.3832,
          },
        },
      ],
      description:
        "Unwind and explore on this elevation through East Coast Canada, departing from Toronto. With every stop—from Dubrovnik to Mykonos—you’ll collect memories that last a lifetime.",
      distance: "542 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Toronto to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Barcelona to Venice",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Venice to Mykonos",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Sailing from Mykonos to Toronto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Toronto",
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
          description: "Exploring Barcelona",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 20",
          end: "Day 21",
          duration: "2 days",
          description: "Exploring Toronto",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Carl Collins",
        role: "Travel Advisor",
        languages: ["English", "Haitian", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "verdant.serenade.of.@velarivoyages.com",
          contactNumber: "+1-873-310-8248",
        },
      },
    ],
    title: "Verdant Serenade of the Fiddle & Salt Air",
    description:
      "Unwind and explore on this elevation through East Coast Canada, departing from Toronto. With every stop—from Dubrovnik to Mykonos—you’ll collect memories that last a lifetime.",
    rating: 4.1,
    tags: ["relaxation", "cruise-adventure"],
  },
];
