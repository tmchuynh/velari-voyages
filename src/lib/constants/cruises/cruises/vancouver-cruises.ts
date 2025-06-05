import { Cruise } from "@/lib/interfaces/services/cruises";

export const vancouverCruises: Cruise[] = [
  {
    basePrice: 1267,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Ketchikan",
      country: "United States",
      coordinates: {
        latitude: 55.3422,
        longitude: -131.6476,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
      ],
      description:
        "Depart from Vancouver on this thoughtfully designed mystique across the Alaska. Savor coastal charm, cultural treasures, and ocean views with stops at Glacier Bay, Ketchikan.",
      distance: "1264 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Vancouver to Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Ella Graham",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Portuguese", "Arabic", "Spanish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "forbidden.drift.of.t@velarivoyages.com",
          contactNumber: "+1-292-208-6454",
        },
      },
    ],
    title: "Forbidden Drift of the Glacial Kingdom",
    description:
      "Depart from Vancouver on this thoughtfully designed mystique across the Alaska. Savor coastal charm, cultural treasures, and ocean views with stops at Glacier Bay, Ketchikan.",
    rating: 4.7,
    tags: ["tropical", "cruise-excursion", "cruise-holiday"],
  },
  {
    basePrice: 3594,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Experience coastal elegance on this panorama from Vancouver, where the journey through Alaska includes stops in Ketchikan, Glacier Bay, each more enchanting than the last.",
      distance: "578 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Vancouver to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Ketchikan to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Chloe Maxwell",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Portuguese", "Arabic", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "luxurious.reverie.of@velarivoyages.com",
          contactNumber: "+1-786-719-1006",
        },
      },
    ],
    title: "Luxurious Reverie of the Mountain-Edge Metropolis",
    description:
      "Experience coastal elegance on this panorama from Vancouver, where the journey through Alaska includes stops in Ketchikan, Glacier Bay, each more enchanting than the last.",
    rating: 4.4,
    tags: ["culinary"],
  },
  {
    basePrice: 8193,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "An unforgettable odyssey awaits as you cruise from Vancouver across Alaska. Dive into history, flavor, and culture with stops including Sitka, Skagway.",
      distance: "1476 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Vancouver to Sitka",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Sitka to Skagway",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Skagway to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Cynthia Russell",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Portuguese", "Arabic", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "pristine.pulse.of.th@velarivoyages.com",
          contactNumber: "+1-869-824-6463",
        },
      },
    ],
    title: "Pristine Pulse of the Misty Fjords",
    description:
      "An unforgettable odyssey awaits as you cruise from Vancouver across Alaska. Dive into history, flavor, and culture with stops including Sitka, Skagway.",
    rating: 4.2,
    tags: ["cruise-adventure", "family-friendly", "wellness"],
  },
  {
    basePrice: 7353,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "Depart Vancouver on a relaxing journey through the Alaska region. Highlights include the stunning coastlines of Juneau, Ketchikan, all while enjoying first-class amenities on board.",
      distance: "860 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Vancouver to Juneau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Juneau to Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Ketchikan to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Olivia Campbell",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Portuguese", "Arabic", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "starlit.panorama.of.@velarivoyages.com",
          contactNumber: "+1-358-846-2900",
        },
      },
    ],
    title: "Starlit Panorama of the Sea-Bound Solace",
    description:
      "Depart Vancouver on a relaxing journey through the Alaska region. Highlights include the stunning coastlines of Juneau, Ketchikan, all while enjoying first-class amenities on board.",
    rating: 4.5,
    tags: ["wellness", "family-friendly", "themed-cruise"],
  },
  {
    basePrice: 1060,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "Set sail from Vancouver on this luminous sanctum through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Seattle and Glacier Bay and Victoria and Juneau, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "679 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Vancouver to Seattle",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Seattle to Glacier Bay",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Victoria",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Victoria to Juneau",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Juneau to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Olivia Dunn",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Portuguese", "Arabic", "Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "golden.currents.of.t@velarivoyages.com",
          contactNumber: "+1-975-821-3696",
        },
      },
    ],
    title: "Golden Currents of the Mountain-Edge Metropolis",
    description:
      "Set sail from Vancouver on this luminous sanctum through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Seattle and Glacier Bay and Victoria and Juneau, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.4,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 1377,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "Begin your journey in Vancouver, where tradition meets travel. This immersive arcadia reveals the finest of Alaska, from the beaches of Ketchikan to the streets of Skagway.",
      distance: "1433 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Vancouver to Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Ketchikan to Skagway",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Skagway to Seattle",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Seattle to Glacier Bay",
        },
        {
          start: "Day 18",
          end: "Day 18",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 19",
          end: "Day 20",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Angela Reed",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Portuguese", "Arabic", "Spanish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/91.jpg",
        contact: {
          contactEmail: "spectacular.drift.of@velarivoyages.com",
          contactNumber: "+1-875-724-8469",
        },
      },
    ],
    title: "Spectacular Drift of the Echoes of Ice",
    description:
      "Begin your journey in Vancouver, where tradition meets travel. This immersive arcadia reveals the finest of Alaska, from the beaches of Ketchikan to the streets of Skagway.",
    rating: 4.0,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 2742,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "This zenith takes you beyond the ordinary, starting in Vancouver. With breathtaking stops in Skagway, Ketchikan, Victoria, Sitka, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "881 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Vancouver to Skagway",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Skagway to Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Ketchikan to Victoria",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Victoria to Sitka",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Sitka to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alexa Carpenter",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Portuguese", "Arabic", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "captivating.arcadia.@velarivoyages.com",
          contactNumber: "+1-249-493-1413",
        },
      },
    ],
    title: "Captivating Arcadia of the Glass and Fir",
    description:
      "This zenith takes you beyond the ordinary, starting in Vancouver. With breathtaking stops in Skagway, Ketchikan, Victoria, Sitka, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.8,
    tags: ["holiday-cruise", "tropical"],
  },
  {
    basePrice: 8201,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "United States",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
      ],
      description:
        "This hand-selected opulent cruise offers a true taste of Alaska. Depart from Vancouver and explore ports like Victoria, Ketchikan, Skagway, each telling a story through food, music, and tradition.",
      distance: "1442 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Vancouver to Victoria",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Victoria to Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Ketchikan to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Samantha Palmer",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Portuguese", "Arabic", "Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "infinite.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-118-620-8656",
        },
      },
    ],
    title: "Infinite Eclipse of the Harbor of Mist",
    description:
      "This hand-selected opulent cruise offers a true taste of Alaska. Depart from Vancouver and explore ports like Victoria, Ketchikan, Skagway, each telling a story through food, music, and tradition.",
    rating: 4.3,
    tags: ["glacier-cruise", "cruise-excursion", "cruise-adventure"],
  },
  {
    basePrice: 6997,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this alluring tranquility beginning in Vancouver. Visit breathtaking Alaska locales such as Sitka, Victoria, Skagway, Glacier Bay on this unforgettable itinerary.",
      distance: "980 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Vancouver to Sitka",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Sitka to Victoria",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Victoria to Skagway",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Skagway to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Sophia Mason",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Portuguese", "Arabic", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
        contact: {
          contactEmail: "moonlit.discovery.of@velarivoyages.com",
          contactNumber: "+1-497-711-4759",
        },
      },
    ],
    title: "Moonlit Discovery of the Wilderness Reaches",
    description:
      "Enjoy seamless luxury on this alluring tranquility beginning in Vancouver. Visit breathtaking Alaska locales such as Sitka, Victoria, Skagway, Glacier Bay on this unforgettable itinerary.",
    rating: 4.9,
    tags: ["tropical", "cruise-adventure", "cruise-getaway"],
  },
  {
    basePrice: 3997,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Ketchikan",
      country: "United States",
      coordinates: {
        latitude: 55.3422,
        longitude: -131.6476,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
      ],
      description:
        "An escape like no other begins in Vancouver, where your sojourn launches into the heart of Alaska. Discover the magic of Glacier Bay, Ketchikan with style and sophistication.",
      distance: "787 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Vancouver to Glacier Bay",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aria Marshall",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Portuguese", "Arabic", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "riveting.drift.of.th@velarivoyages.com",
          contactNumber: "+1-465-988-3670",
        },
      },
    ],
    title: "Riveting Drift of the Glass and Fir",
    description:
      "An escape like no other begins in Vancouver, where your sojourn launches into the heart of Alaska. Discover the magic of Glacier Bay, Ketchikan with style and sophistication.",
    rating: 4.3,
    tags: ["wildlife", "sightseeing", "repositioning"],
  },
];
