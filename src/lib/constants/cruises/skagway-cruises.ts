import { Cruise } from "@/lib/interfaces/services/cruises";

export const skagwayCruises: Cruise[] = [
  {
    basePrice: 4096,
    departureLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "",
          region: "",
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
        {
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Skagway",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "From the lively departure port of Skagway, this curated reverie showcases the finest of Skagway. With visits to Athens, Dubrovnik, Malta, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1300 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Skagway to Athens",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Athens to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Malta",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Malta to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Dubrovnik",
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
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Murray",
        role: "Sales Consultant",
        languages: ["English", "Arabic", "Italian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "timeless.arcadia.of.@velarivoyages.com",
          contactNumber: "+1-725-464-5696",
        },
      },
    ],
    title: "Timeless Arcadia of the Exotic Realms",
    description:
      "From the lively departure port of Skagway, this curated reverie showcases the finest of Skagway. With visits to Athens, Dubrovnik, Malta, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.6,
    tags: ["family-friendly", "adventure", "VIP"],
  },
  {
    basePrice: 4122,
    departureLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "",
          region: "",
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Skagway",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the waves lead you from Skagway on this moonlit journey. Traverse the iconic waters of Skagway and discover the beauty of Mykonos, Venice.",
      distance: "527 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Skagway to Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Mykonos to Venice",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Venice to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Mykonos",
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
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Philip Foster",
        role: "Sales Consultant",
        languages: ["English", "Arabic", "Italian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "extraordinary.escape@velarivoyages.com",
          contactNumber: "+1-220-380-8763",
        },
      },
    ],
    title: "Extraordinary Escape of the Exotic Realms",
    description:
      "Let the waves lead you from Skagway on this moonlit journey. Traverse the iconic waters of Skagway and discover the beauty of Mykonos, Venice.",
    rating: 4.9,
    tags: ["long-distance", "weekend-cruise", "themed-cruise"],
  },
  {
    basePrice: 7182,
    departureLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "",
          region: "",
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
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Skagway. Discover the historical and natural richness of Skagway as you cruise to spectacular destinations like Milan, Lisbon, Mykonos, Malta.",
      distance: "1208 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Skagway to Milan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Milan to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Lisbon to Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Mykonos to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
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
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Diego Carpenter",
        role: "Sales Consultant",
        languages: ["English", "Arabic", "Italian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "exquisite.retreat.of@velarivoyages.com",
          contactNumber: "+1-378-794-8584",
        },
      },
    ],
    title: "Exquisite Retreat of the Exotic Realms",
    description:
      "A voyage of contrasts awaits from Skagway. Discover the historical and natural richness of Skagway as you cruise to spectacular destinations like Milan, Lisbon, Mykonos, Malta.",
    rating: 4.2,
    tags: ["general", "luxury", "cruise-excursion"],
  },
  {
    basePrice: 6307,
    departureLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "",
          region: "",
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
          city: "Dubrovnik",
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
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail from Skagway into a world of wonder. The Skagway beckons with unforgettable ports like Florence, Dubrovnik, Santorini, Mykonos, where every view is picture-perfect and every moment is priceless.",
      distance: "1155 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Skagway to Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Florence to Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Santorini",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Santorini to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Robert Hall",
        role: "Sales Consultant",
        languages: ["English", "Arabic", "Italian"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "transcendent.infinit@velarivoyages.com",
          contactNumber: "+1-132-767-6909",
        },
      },
    ],
    title: "Transcendent Infinite of the Exotic Realms",
    description:
      "Sail from Skagway into a world of wonder. The Skagway beckons with unforgettable ports like Florence, Dubrovnik, Santorini, Mykonos, where every view is picture-perfect and every moment is priceless.",
    rating: 4.5,
    tags: ["general"],
  },
  {
    basePrice: 5189,
    departureLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "",
          region: "",
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Skagway",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail from Skagway into a world of wonder. The Skagway beckons with unforgettable ports like Barcelona, Santorini, Lisbon, Rome, where every view is picture-perfect and every moment is priceless.",
      distance: "1089 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Skagway to Barcelona",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Barcelona to Santorini",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Santorini to Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Lisbon to Rome",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Rome to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
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
          description: "Exploring Santorini",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Edward Russell",
        role: "Sales Consultant",
        languages: ["English", "Arabic", "Italian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "majestic.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-314-302-4871",
        },
      },
    ],
    title: "Majestic Eclipse of the Exotic Realms",
    description:
      "Sail from Skagway into a world of wonder. The Skagway beckons with unforgettable ports like Barcelona, Santorini, Lisbon, Rome, where every view is picture-perfect and every moment is priceless.",
    rating: 4.9,
    tags: ["anniversary-cruise", "cruise-line"],
  },
  {
    basePrice: 6181,
    departureLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "",
          region: "",
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
      ],
      description:
        "This ornate cruise from Skagway is your ticket to the captivating charm of the Skagway. Discover the delights of Lisbon, Barcelona, Venice, Mykonos with enriching excursions and award-winning service.",
      distance: "1061 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Skagway to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Lisbon to Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Barcelona to Venice",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Venice to Mykonos",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joshua Holloway",
        role: "Sales Consultant",
        languages: ["English", "Arabic", "Italian"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "radiant.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-100-263-5301",
        },
      },
    ],
    title: "Radiant Eclipse of the Exotic Realms",
    description:
      "This ornate cruise from Skagway is your ticket to the captivating charm of the Skagway. Discover the delights of Lisbon, Barcelona, Venice, Mykonos with enriching excursions and award-winning service.",
    rating: 4.8,
    tags: ["cruise-adventure", "cruise"],
  },
  {
    basePrice: 8024,
    departureLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "",
          region: "",
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
          city: "Mykonos",
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
          city: "Skagway",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail away from Skagway into the beautiful expanse of Skagway. Along the way, enjoy rich cultural experiences in Florence, Mykonos, Venice, where history, nature, and cuisine collide.",
      distance: "559 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Skagway to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Mykonos to Venice",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Venice to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
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
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Johnny Coleman",
        role: "Sales Consultant",
        languages: ["English", "Arabic", "Italian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "secret.expedition.of@velarivoyages.com",
          contactNumber: "+1-146-295-5066",
        },
      },
    ],
    title: "Secret Expedition of the Exotic Realms",
    description:
      "Sail away from Skagway into the beautiful expanse of Skagway. Along the way, enjoy rich cultural experiences in Florence, Mykonos, Venice, where history, nature, and cuisine collide.",
    rating: 5.0,
    tags: ["long-distance", "exclusive"],
  },
  {
    basePrice: 5217,
    departureLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "",
          region: "",
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
        "Sail away from Skagway into the beautiful expanse of Skagway. Along the way, enjoy rich cultural experiences in Santorini, Malta, Florence, where history, nature, and cuisine collide.",
      distance: "1317 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Skagway to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Santorini to Malta",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Malta to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Thomas Knight",
        role: "Sales Consultant",
        languages: ["English", "Arabic", "Italian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "lavish.pulse.of.the.@velarivoyages.com",
          contactNumber: "+1-600-615-7449",
        },
      },
    ],
    title: "Lavish Pulse of the Exotic Realms",
    description:
      "Sail away from Skagway into the beautiful expanse of Skagway. Along the way, enjoy rich cultural experiences in Santorini, Malta, Florence, where history, nature, and cuisine collide.",
    rating: 4.7,
    tags: ["family-friendly", "expedition", "tropical"],
  },
  {
    basePrice: 2254,
    departureLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
          city: "Skagway",
          country: "",
          region: "",
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
        "Join us in Skagway for a resonance of a lifetime. Sail across the serene waters of Skagway, stopping at ports like Mykonos, Dubrovnik, Venice where timeless traditions meet modern luxuries.",
      distance: "1387 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Skagway to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Skagway",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Patrick Collins",
        role: "Sales Consultant",
        languages: ["English", "Arabic", "Italian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "radiant.mirage.of.th@velarivoyages.com",
          contactNumber: "+1-650-478-9330",
        },
      },
    ],
    title: "Radiant Mirage of the Exotic Realms",
    description:
      "Join us in Skagway for a resonance of a lifetime. Sail across the serene waters of Skagway, stopping at ports like Mykonos, Dubrovnik, Venice where timeless traditions meet modern luxuries.",
    rating: 4.3,
    tags: ["cruise-experience", "tropical"],
  },
  {
    basePrice: 8182,
    departureLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Skagway",
          country: "",
          region: "",
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
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Skagway",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Your odyssey begins in Skagway, where every sunset on the Skagway horizon promises another day of discovery—from Lisbon, Santorini to hidden ports of charm.",
      distance: "1334 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Skagway to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Santorini to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Skagway",
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
          description: "Exploring Santorini",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Diego Price",
        role: "Sales Consultant",
        languages: ["English", "Arabic", "Italian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "sundrenched.symphony@velarivoyages.com",
          contactNumber: "+1-969-347-6274",
        },
      },
    ],
    title: "Sun-Drenched Symphony of the Exotic Realms",
    description:
      "Your odyssey begins in Skagway, where every sunset on the Skagway horizon promises another day of discovery—from Lisbon, Santorini to hidden ports of charm.",
    rating: 4.9,
    tags: ["fall-cruise", "tropical"],
  },
];
