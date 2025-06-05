import { Cruise } from "@/lib/interfaces/services/cruises";

export const lisbonCruises: Cruise[] = [
  {
    basePrice: 6433,
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    arrivalLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Lisbon",
          country: "Portugal",
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "This hand-selected mythic cruise offers a true taste of Mediterranean. Depart from Lisbon and explore ports like Santorini, Barcelona, Florence, each telling a story through food, music, and tradition.",
      distance: "590 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Barcelona to Florence",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Florence to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lisbon",
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
          description: "Exploring Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Aiden Ellis",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "velvet.legacy.of.the@velarivoyages.com",
          contactNumber: "+1-747-198-3342",
        },
      },
    ],
    title: "Velvet Legacy of the Riverside Reverie",
    description:
      "This hand-selected mythic cruise offers a true taste of Mediterranean. Depart from Lisbon and explore ports like Santorini, Barcelona, Florence, each telling a story through food, music, and tradition.",
    rating: 4.8,
    tags: ["tropical", "expedition"],
  },
  {
    basePrice: 2847,
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    arrivalLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Lisbon",
          country: "Portugal",
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "From the lively departure port of Lisbon, this curated quest showcases the finest of Mediterranean. With visits to Santorini, Rome, Malta, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "524 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Rome to Malta",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Malta to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lisbon",
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
          description: "Exploring Rome",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Brandon Foster",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
        contact: {
          contactEmail: "secret.embrace.of.th@velarivoyages.com",
          contactNumber: "+1-231-980-3132",
        },
      },
    ],
    title: "Secret Embrace of the Ancient Shores",
    description:
      "From the lively departure port of Lisbon, this curated quest showcases the finest of Mediterranean. With visits to Santorini, Rome, Malta, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.6,
    tags: ["short-getaway", "VIP"],
  },
  {
    basePrice: 1570,
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
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
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Lisbon",
          country: "Portugal",
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Depart from Lisbon on this thoughtfully designed adventure across the Mediterranean. Savor coastal charm, cultural treasures, and ocean views with stops at Malta, Florence.",
      distance: "1231 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Lisbon to Malta",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Malta to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "James Ellis",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/85.jpg",
        contact: {
          contactEmail: "harmonic.serenade.of@velarivoyages.com",
          contactNumber: "+1-885-165-2343",
        },
      },
    ],
    title: "Harmonic Serenade of the City of Seven Fados",
    description:
      "Depart from Lisbon on this thoughtfully designed adventure across the Mediterranean. Savor coastal charm, cultural treasures, and ocean views with stops at Malta, Florence.",
    rating: 4.3,
    tags: ["wellness", "seasonal"],
  },
  {
    basePrice: 9277,
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    arrivalLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
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
          city: "Lisbon",
          country: "Portugal",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "Set off on a currents from Lisbon that captures the essence of Mediterranean. Discover cultural gems and culinary delights across Rome, Florence.",
      distance: "533 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Lisbon to Rome",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Rome to Florence",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Florence to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Peter Stewart",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "velvet.passage.of.th@velarivoyages.com",
          contactNumber: "+1-764-167-9086",
        },
      },
    ],
    title: "Velvet Passage of the Citadels by the Sea",
    description:
      "Set off on a currents from Lisbon that captures the essence of Mediterranean. Discover cultural gems and culinary delights across Rome, Florence.",
    rating: 4.8,
    tags: ["fall-cruise", "sightseeing", "short-getaway"],
  },
  {
    basePrice: 6184,
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
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
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Lisbon",
          country: "Portugal",
          region: "Mediterranean",
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
      ],
      description:
        "Begin your sanctuary in Lisbon, a gateway to the soul of Mediterranean. Enjoy days spent exploring Rome, Milan, Malta and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1401 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Lisbon to Rome",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Rome to Milan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Milan to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lisbon",
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
          description: "Exploring Milan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jacob Douglas",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "exquisite.excursion.@velarivoyages.com",
          contactNumber: "+1-625-498-9126",
        },
      },
    ],
    title: "Exquisite Excursion of the City of Seven Fados",
    description:
      "Begin your sanctuary in Lisbon, a gateway to the soul of Mediterranean. Enjoy days spent exploring Rome, Milan, Malta and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.2,
    tags: ["family-friendly", "cruise-getaway", "exclusive"],
  },
  {
    basePrice: 1089,
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    arrivalLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Lisbon",
          country: "Portugal",
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
          city: "Lisbon",
          country: "Portugal",
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "Your journey through the Mediterranean begins in Lisbon, where elegance meets adventure. Explore the shores of Athens, Mykonos, Barcelona, Dubrovnik, with curated excursions and luxurious onboard amenities.",
      distance: "981 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Lisbon to Athens",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Athens to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Mykonos to Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Barcelona to Dubrovnik",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Noah Campbell",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "panoramic.excursion.@velarivoyages.com",
          contactNumber: "+1-877-332-8178",
        },
      },
    ],
    title: "Panoramic Excursion of the Sun-Drenched Riviera",
    description:
      "Your journey through the Mediterranean begins in Lisbon, where elegance meets adventure. Explore the shores of Athens, Mykonos, Barcelona, Dubrovnik, with curated excursions and luxurious onboard amenities.",
    rating: 4.6,
    tags: ["seasonal"],
  },
  {
    basePrice: 6527,
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
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
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Lisbon",
          country: "Portugal",
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let this radiance-drenched voyage redefine your idea of travel. From Lisbon, explore the Mediterranean in luxurious comfort, stopping at Athens, Malta where every port offers a new chapter.",
      distance: "1070 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Lisbon to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lisbon",
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
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Kyle Hawkins",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "serene.eclipse.of.th@velarivoyages.com",
          contactNumber: "+1-354-780-8555",
        },
      },
    ],
    title: "Serene Eclipse of the City of Seven Fados",
    description:
      "Let this radiance-drenched voyage redefine your idea of travel. From Lisbon, explore the Mediterranean in luxurious comfort, stopping at Athens, Malta where every port offers a new chapter.",
    rating: 4.3,
    tags: ["relaxation", "sightseeing", "short-getaway"],
  },
  {
    basePrice: 2593,
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    arrivalLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
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
          city: "Lisbon",
          country: "Portugal",
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "Leave stress behind with this curated sanctuary from Lisbon. Sail across the best of Mediterranean and explore treasures like Malta, Venice with comfort and style.",
      distance: "889 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Lisbon to Malta",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Malta to Venice",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Venice to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Lisbon",
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
          description: "Exploring Venice",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Henry Hayes",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "transcendent.infinit@velarivoyages.com",
          contactNumber: "+1-902-317-3805",
        },
      },
    ],
    title: "Transcendent Infinite of the Timeless Coastlines",
    description:
      "Leave stress behind with this curated sanctuary from Lisbon. Sail across the best of Mediterranean and explore treasures like Malta, Venice with comfort and style.",
    rating: 4.7,
    tags: ["themed-cruise", "cruise-holiday"],
  },
  {
    basePrice: 7173,
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    arrivalLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Lisbon",
          country: "Portugal",
          region: "Mediterranean",
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
          region: "Mediterranean",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
      ],
      description:
        "Join us in Lisbon for a resonance of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Florence, Mykonos where timeless traditions meet modern luxuries.",
      distance: "789 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Lisbon to Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Florence to Mykonos",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Noah Cooper",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/91.jpg",
        contact: {
          contactEmail: "lavish.excursion.of.@velarivoyages.com",
          contactNumber: "+1-830-574-6484",
        },
      },
    ],
    title: "Lavish Excursion of the Wine-Soaked Villages",
    description:
      "Join us in Lisbon for a resonance of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Florence, Mykonos where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 2257,
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Mediterranean",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
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
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Lisbon",
          country: "Portugal",
          region: "Mediterranean",
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
        "This inspiring reflection departs from Lisbon, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Florence, Milan.",
      distance: "1314 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Lisbon to Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Florence to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Lisbon",
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
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Harry Cooper",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Finnish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "pristine.renaissance@velarivoyages.com",
          contactNumber: "+1-965-823-3434",
        },
      },
    ],
    title: "Pristine Renaissance of the Timeless Coastlines",
    description:
      "This inspiring reflection departs from Lisbon, navigating the diverse landscapes and vibrant cities of Mediterranean. Must-see stops include Florence, Milan.",
    rating: 4.3,
    tags: ["nature", "weekend-cruise", "short-getaway"],
  },
];
