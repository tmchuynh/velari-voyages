import { Cruise } from "@/lib/interfaces/services/cruises";

export const charlestonCruises: Cruise[] = [
  {
    basePrice: 1399,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "anniversary-cruise",
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
      ],
      description:
        "Escape into the calm waters of East Coast USA with this riveting journey from Charleston. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Lisbon, Santorini, Malta.",
      distance: "1237 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Charleston to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Santorini to Malta",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Fletcher",
        role: "Sales Consultant",
        languages: ["English", "Aymara", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "majestic.symphony.of@velarivoyages.com",
          contactNumber: "+1-823-140-4456",
        },
      },
    ],
    title: "Majestic Symphony of the Porch-Lined Dreams",
    description:
      "Escape into the calm waters of East Coast USA with this riveting journey from Charleston. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Lisbon, Santorini, Malta.",
    rating: 4.1,
    tags: ["culinary", "VIP"],
  },
  {
    basePrice: 5635,
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
    category: "glacier-cruise",
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
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
        "Set sail from Charleston for a voyage like no other. From the picturesque landscapes of Malta to the lively ambiance of Santorini, this breathtaking cruise will redefine your view of East Coast USA.",
      distance: "844 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Charleston to Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Malta to Santorini",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Santorini to Charleston",
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
          description: "Exploring Malta",
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
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amelia Watson",
        role: "Sales Consultant",
        languages: ["English", "Aymara", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "epic.escape.of.the.h@velarivoyages.com",
          contactNumber: "+1-468-614-1065",
        },
      },
    ],
    title: "Epic Escape of the Historic Harbors",
    description:
      "Set sail from Charleston for a voyage like no other. From the picturesque landscapes of Malta to the lively ambiance of Santorini, this breathtaking cruise will redefine your view of East Coast USA.",
    rating: 4.0,
    tags: ["cruise-journey", "anniversary-cruise", "repositioning"],
  },
  {
    basePrice: 3582,
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
    category: "fall-foliage-cruise",
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
        "Cruise into cultural richness aboard this sun-drenched oasis departing Charleston. Savor local cuisine and uncover regional beauty from Florence to Milan.",
      distance: "997 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Charleston to Florence",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Florence to Milan",
        },
        {
          start: "Day 7",
          end: "Day 8",
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
          description: "Exploring Florence",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Angela Dean",
        role: "Sales Consultant",
        languages: ["English", "Aymara", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "velvet.frontier.of.t@velarivoyages.com",
          contactNumber: "+1-347-917-8124",
        },
      },
    ],
    title: "Velvet Frontier of the Winds of Revolution",
    description:
      "Cruise into cultural richness aboard this sun-drenched oasis departing Charleston. Savor local cuisine and uncover regional beauty from Florence to Milan.",
    rating: 4.7,
    tags: ["luxury"],
  },
  {
    basePrice: 2240,
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
    category: "holiday-cruise",
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
        "Your journey through the East Coast USA begins in Charleston, where elegance meets adventure. Explore the shores of Mykonos, Malta, Rome, with curated excursions and luxurious onboard amenities.",
      distance: "1192 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Charleston to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Mykonos to Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Malta to Rome",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Rome to Charleston",
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
          description: "Exploring Mykonos",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Christine Campbell",
        role: "Sales Consultant",
        languages: ["English", "Aymara", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "crystalline.adventur@velarivoyages.com",
          contactNumber: "+1-365-357-1540",
        },
      },
    ],
    title: "Crystalline Adventure of the Founding Footsteps",
    description:
      "Your journey through the East Coast USA begins in Charleston, where elegance meets adventure. Explore the shores of Mykonos, Malta, Rome, with curated excursions and luxurious onboard amenities.",
    rating: 4.8,
    tags: ["luxury", "adventure"],
  },
  {
    basePrice: 4146,
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
    category: "holiday-cruise",
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
        "Depart from iconic Charleston and traverse the East Coast USA with visits to Lisbon, Rome, Santorini, Barcelona. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "840 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Charleston to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lisbon to Rome",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Rome to Santorini",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Santorini to Barcelona",
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
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Charleston",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aria Douglas",
        role: "Sales Consultant",
        languages: ["English", "Aymara", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/91.jpg",
        contact: {
          contactEmail: "floating.reunion.of.@velarivoyages.com",
          contactNumber: "+1-500-664-6828",
        },
      },
    ],
    title: "Floating Reunion of the Maritime Whisper",
    description:
      "Depart from iconic Charleston and traverse the East Coast USA with visits to Lisbon, Rome, Santorini, Barcelona. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.9,
    tags: ["short-getaway", "long-distance"],
  },
  {
    basePrice: 3510,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "Depart from Charleston on this thoughtfully designed exploration across the East Coast USA. Savor coastal charm, cultural treasures, and ocean views with stops at Malta, Lisbon.",
      distance: "1303 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Charleston to Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Malta to Lisbon",
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
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Zoe Warren",
        role: "Sales Consultant",
        languages: ["English", "Aymara", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "riveting.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-524-143-3833",
        },
      },
    ],
    title: "Riveting Odyssey of the Echoes of Elegance",
    description:
      "Depart from Charleston on this thoughtfully designed exploration across the East Coast USA. Savor coastal charm, cultural treasures, and ocean views with stops at Malta, Lisbon.",
    rating: 4.2,
    tags: ["glacier-cruise", "long-distance", "cruise-experience"],
  },
  {
    basePrice: 8652,
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
    category: "repositioning-cruise",
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
        "Depart Charleston on a relaxing realm through the East Coast USA region. Highlights include the stunning coastlines of Venice, Mykonos, Lisbon, all while enjoying first-class amenities on board.",
      distance: "777 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Charleston to Venice",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Venice to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 10",
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
          start: "Day 4",
          end: "Day 4",
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
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Lisbon",
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
        name: "Grace Fletcher",
        role: "Sales Consultant",
        languages: ["English", "Aymara", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
        contact: {
          contactEmail: "crystalline.mythos.o@velarivoyages.com",
          contactNumber: "+1-876-166-5126",
        },
      },
    ],
    title: "Crystalline Mythos of the Lighthouse Trails",
    description:
      "Depart Charleston on a relaxing realm through the East Coast USA region. Highlights include the stunning coastlines of Venice, Mykonos, Lisbon, all while enjoying first-class amenities on board.",
    rating: 4.3,
    tags: ["nature", "romantic"],
  },
  {
    basePrice: 4318,
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
    category: "anniversary-cruise",
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
        "Cruise into cultural richness aboard this verdant sojourn departing Charleston. Savor local cuisine and uncover regional beauty from Lisbon to Athens.",
      distance: "1404 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Charleston to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Lisbon to Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brenda Wells",
        role: "Sales Consultant",
        languages: ["English", "Aymara", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "horizonkissed.mystiq@velarivoyages.com",
          contactNumber: "+1-528-690-9600",
        },
      },
    ],
    title: "Horizon-Kissed Mystique of the Eastern Elegance",
    description:
      "Cruise into cultural richness aboard this verdant sojourn departing Charleston. Savor local cuisine and uncover regional beauty from Lisbon to Athens.",
    rating: 4.7,
    tags: ["cruise-line", "sightseeing"],
  },
  {
    basePrice: 2983,
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
    category: "fall-foliage-cruise",
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
        "Begin your journey in Charleston, where tradition meets travel. This immersive legacy reveals the finest of East Coast USA, from the beaches of Florence to the streets of Mykonos.",
      distance: "1301 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Charleston to Florence",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Florence to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Mykonos to Athens",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Athens to Lisbon",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Florence",
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
          description: "Exploring Athens",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sofia Hudson",
        role: "Sales Consultant",
        languages: ["English", "Aymara", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        contact: {
          contactEmail: "radiancedrenched.ecl@velarivoyages.com",
          contactNumber: "+1-359-343-3594",
        },
      },
    ],
    title: "Radiance-Drenched Eclipse of the Harbor-Lit Evenings",
    description:
      "Begin your journey in Charleston, where tradition meets travel. This immersive legacy reveals the finest of East Coast USA, from the beaches of Florence to the streets of Mykonos.",
    rating: 4.9,
    tags: ["themed-cruise", "relaxation"],
  },
  {
    basePrice: 8591,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
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
      ],
      description:
        "Sail into splendor from Charleston on a legendary voyage through East Coast USA. Let each stop—from Lisbon to Rome—reveal the unique flavors and colors of the region.",
      distance: "836 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Charleston to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lisbon to Rome",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Claire Dunn",
        role: "Sales Consultant",
        languages: ["English", "Aymara", "Guarani", "Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "exquisite.passage.of@velarivoyages.com",
          contactNumber: "+1-519-664-7331",
        },
      },
    ],
    title: "Exquisite Passage of the Maritime Whisper",
    description:
      "Sail into splendor from Charleston on a legendary voyage through East Coast USA. Let each stop—from Lisbon to Rome—reveal the unique flavors and colors of the region.",
    rating: 5.0,
    tags: ["themed-cruise"],
  },
];
