import { Cruise } from "@/lib/interfaces/services/cruises";

export const charlestonCruises: Cruise[] = [
  {
    basePrice: 8354,
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
    hasPopularDestination: false,
    category: "ultra-luxury",
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "Let the waves lead you from Charleston on this velvet arcadia. Traverse the iconic waters of East Coast USA and discover the beauty of Lisbon, Athens, Malta, Venice.",
      distance: "1420 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Charleston to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Lisbon to Athens",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Malta to Venice",
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
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Malta",
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
        name: "Daniel Grant",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Spanish", "French", "Portuguese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
        contact: {
          contactEmail: "transcendent.requiem@velarivoyages.com",
          contactNumber: "+1-114-993-7072",
        },
      },
    ],
    title: "Transcendent Requiem of the Cobbled Seaside Towns",
    description:
      "Let the waves lead you from Charleston on this velvet arcadia. Traverse the iconic waters of East Coast USA and discover the beauty of Lisbon, Athens, Malta, Venice.",
    rating: 4.6,
    tags: ["cruise-ship"],
  },
  {
    basePrice: 6791,
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
        "Escape into the calm waters of East Coast USA with this idyllic journey from Charleston. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Lisbon, Rome.",
      distance: "1323 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Charleston to Lisbon",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Lisbon to Rome",
        },
        {
          start: "Day 9",
          end: "Day 9",
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
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Peter Fox",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Spanish", "French", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "azure.passage.of.the@velarivoyages.com",
          contactNumber: "+1-184-392-1561",
        },
      },
    ],
    title: "Azure Passage of the Magnolia Veins",
    description:
      "Escape into the calm waters of East Coast USA with this idyllic journey from Charleston. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Lisbon, Rome.",
    rating: 4.4,
    tags: ["cruise-getaway", "cruise-vacation", "repositioning"],
  },
  {
    basePrice: 9994,
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
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
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
        "Explore a new side of East Coast USA with this panoramic haven starting in Charleston. Visit charming ports such as Dubrovnik, Venice, Malta, each offering its own unique rhythm.",
      distance: "1026 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Charleston to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Venice",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Venice to Malta",
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
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Daniel Curtis",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Spanish", "French", "Portuguese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "idyllic.discovery.of@velarivoyages.com",
          contactNumber: "+1-419-709-5337",
        },
      },
    ],
    title: "Idyllic Discovery of the Echoes of Elegance",
    description:
      "Explore a new side of East Coast USA with this panoramic haven starting in Charleston. Visit charming ports such as Dubrovnik, Venice, Malta, each offering its own unique rhythm.",
    rating: 4.9,
    tags: ["fall-cruise", "family-friendly"],
  },
  {
    basePrice: 9297,
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
          city: "Dubrovnik",
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
        "Set sail from Charleston on this horizon-kissed odyssey through the heart of East Coast USA. Experience the perfect blend of relaxation and adventure as you explore Venice and Dubrovnik and Rome, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1306 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Charleston to Venice",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Venice to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Rome",
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
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Russell Marshall",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Spanish", "French", "Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "azure.escape.of.the.@velarivoyages.com",
          contactNumber: "+1-181-448-2922",
        },
      },
    ],
    title: "Azure Escape of the Patriot Ports",
    description:
      "Set sail from Charleston on this horizon-kissed odyssey through the heart of East Coast USA. Experience the perfect blend of relaxation and adventure as you explore Venice and Dubrovnik and Rome, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.4,
    tags: ["VIP", "culinary", "sightseeing"],
  },
  {
    basePrice: 8879,
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
          city: "Athens",
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
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
        "Launch into adventure from Charleston and sail deep into the heart of the East Coast USA. With ports of call like Athens, Barcelona, Malta, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1296 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Charleston to Athens",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Athens to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Barcelona to Malta",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Malta to Charleston",
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
          description: "Exploring Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Antonio Reed",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Spanish", "French", "Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "azure.adventure.of.t@velarivoyages.com",
          contactNumber: "+1-592-559-6011",
        },
      },
    ],
    title: "Azure Adventure of the Winds of Revolution",
    description:
      "Launch into adventure from Charleston and sail deep into the heart of the East Coast USA. With ports of call like Athens, Barcelona, Malta, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.1,
    tags: ["historical", "cruise-experience"],
  },
  {
    basePrice: 8446,
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
    category: "ultra-luxury",
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
        "Let the spirit of exploration guide your panoramic journey from Charleston. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Dubrovnik, Florence.",
      distance: "685 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Charleston to Dubrovnik",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Florence",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Florence to Charleston",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Ronald Henderson",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Spanish", "French", "Portuguese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
        contact: {
          contactEmail: "floating.arcadia.of.@velarivoyages.com",
          contactNumber: "+1-293-643-1275",
        },
      },
    ],
    title: "Floating Arcadia of the Southern Charm",
    description:
      "Let the spirit of exploration guide your panoramic journey from Charleston. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Dubrovnik, Florence.",
    rating: 4.3,
    tags: ["wildlife", "VIP"],
  },
  {
    basePrice: 9055,
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
        "Set sail from Charleston on this floating haven through the heart of East Coast USA. Experience the perfect blend of relaxation and adventure as you explore Lisbon and Rome, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1310 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Charleston to Lisbon",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Lisbon to Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Rome to Charleston",
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
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Rome",
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
        name: "Jeremy Marshall",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Spanish", "French", "Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
        contact: {
          contactEmail: "hidden.retreat.of.th@velarivoyages.com",
          contactNumber: "+1-375-241-8637",
        },
      },
    ],
    title: "Hidden Retreat of the Maritime Whisper",
    description:
      "Set sail from Charleston on this floating haven through the heart of East Coast USA. Experience the perfect blend of relaxation and adventure as you explore Lisbon and Rome, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.1,
    tags: ["relaxation"],
  },
  {
    basePrice: 8710,
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
    isPopular: true, // Make fewer cruises "popular"
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
      ],
      description:
        "This hand-selected gilded cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Rome, Santorini, Florence, each telling a story through food, music, and tradition.",
      distance: "744 nautical miles",
      totalDuration: "9 days",
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
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
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
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Rome",
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
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Harold Day",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Spanish", "French", "Portuguese"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/91.jpg",
        contact: {
          contactEmail: "forbidden.realm.of.t@velarivoyages.com",
          contactNumber: "+1-288-623-9732",
        },
      },
    ],
    title: "Forbidden Realm of the Maritime Whisper",
    description:
      "This hand-selected gilded cruise offers a true taste of East Coast USA. Depart from Charleston and explore ports like Rome, Santorini, Florence, each telling a story through food, music, and tradition.",
    rating: 4.1,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 6296,
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
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
        "Begin an epic quest from Charleston, where the seas meet culture. Visit the remarkable ports of Barcelona, Mykonos, Florence while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1478 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Charleston to Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Barcelona to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Mykonos to Florence",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Florence to Charleston",
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
          description: "Exploring Barcelona",
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
          description: "Exploring Florence",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Charleston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Darrell Price",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Spanish", "French", "Portuguese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/98.jpg",
        contact: {
          contactEmail: "golden.tide.of.the.c@velarivoyages.com",
          contactNumber: "+1-343-295-2221",
        },
      },
    ],
    title: "Golden Tide of the Colonial Shores",
    description:
      "Begin an epic quest from Charleston, where the seas meet culture. Visit the remarkable ports of Barcelona, Mykonos, Florence while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.2,
    tags: ["wellness"],
  },
  {
    basePrice: 5253,
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
      city: "Mykonos",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
          city: "Malta",
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
        "Begin a captivating zenith through the East Coast USA, departing Charleston. With visits to Malta, Mykonos, each day brings a new adventure and deeper connection to the region.",
      distance: "654 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Charleston to Malta",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Malta to Mykonos",
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
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Patrick Campbell",
        role: "Corporate Concierge",
        languages: ["English", "Guarani", "Spanish", "French", "Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "breathtaking.expedit@velarivoyages.com",
          contactNumber: "+1-901-366-4788",
        },
      },
    ],
    title: "Breathtaking Expedition of the Historic Waterfront",
    description:
      "Begin a captivating zenith through the East Coast USA, departing Charleston. With visits to Malta, Mykonos, each day brings a new adventure and deeper connection to the region.",
    rating: 4.7,
    tags: ["tropical"],
  },
];
