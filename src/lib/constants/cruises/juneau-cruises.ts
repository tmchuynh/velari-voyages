import { Cruise } from "@/lib/interfaces/services/cruises";

export const juneauCruises: Cruise[] = [
  {
    basePrice: 8897,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Depart from the iconic port of Juneau and sail through the enchanting Alaska. Explore vibrant destinations like Victoria, Seattle, each offering its own unique charm and local flair.",
      distance: "768 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Juneau to Victoria",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Victoria to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Zachary Montgomery",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "epic.mystique.of.the@velarivoyages.com",
          contactNumber: "+1-137-290-3815",
        },
      },
    ],
    title: "Epic Mystique of the Frozen Frontiers",
    description:
      "Depart from the iconic port of Juneau and sail through the enchanting Alaska. Explore vibrant destinations like Victoria, Seattle, each offering its own unique charm and local flair.",
    rating: 4.9,
    tags: ["expedition"],
  },
  {
    basePrice: 8295,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Board in Juneau for a hand-crafted tide through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Victoria, Seattle.",
      distance: "777 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Juneau to Victoria",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Victoria to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Eric Mason",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/51.jpg",
        contact: {
          contactEmail: "radiant.expedition.o@velarivoyages.com",
          contactNumber: "+1-992-884-2678",
        },
      },
    ],
    title: "Radiant Expedition of the Frozen Frontiers",
    description:
      "Board in Juneau for a hand-crafted tide through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Victoria, Seattle.",
    rating: 4.7,
    tags: ["family-friendly", "expedition"],
  },
  {
    basePrice: 8748,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
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
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "Escape into the calm waters of Alaska with this legendary journey from Juneau. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Ketchikan, Victoria.",
      distance: "1311 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Juneau to Ketchikan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Ketchikan to Victoria",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Victoria to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sebastian Stewart",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "mesmerizing.retreat.@velarivoyages.com",
          contactNumber: "+1-968-947-1420",
        },
      },
    ],
    title: "Mesmerizing Retreat of the Snow-Crowned Peaks",
    description:
      "Escape into the calm waters of Alaska with this legendary journey from Juneau. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Ketchikan, Victoria.",
    rating: 4.9,
    tags: ["sightseeing"],
  },
  {
    basePrice: 2244,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Victoria",
      country: "Canada",
      coordinates: {
        latitude: 48.4284,
        longitude: -123.3656,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
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
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
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
      ],
      description:
        "Sail from Juneau into a world of wonder. The Alaska beckons with unforgettable ports like Ketchikan, Skagway, Victoria, where every view is picture-perfect and every moment is priceless.",
      distance: "1185 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Juneau to Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Ketchikan to Skagway",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Skagway to Victoria",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Victoria",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Terry Fletcher",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
        contact: {
          contactEmail: "ornate.journey.of.th@velarivoyages.com",
          contactNumber: "+1-534-306-4942",
        },
      },
    ],
    title: "Ornate Journey of the Frontier Silence",
    description:
      "Sail from Juneau into a world of wonder. The Alaska beckons with unforgettable ports like Ketchikan, Skagway, Victoria, where every view is picture-perfect and every moment is priceless.",
    rating: 4.1,
    tags: ["short-getaway", "themed-cruise", "cruise-adventure"],
  },
  {
    basePrice: 7690,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "United States",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
      ],
      description:
        "Set sail from Juneau for a voyage like no other. From the picturesque landscapes of Glacier Bay to the lively ambiance of Vancouver, this horizon-kissed cruise will redefine your view of Alaska.",
      distance: "753 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Juneau to Glacier Bay",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Vancouver",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Vancouver to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Wallace",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "breathtaking.excursi@velarivoyages.com",
          contactNumber: "+1-630-864-2680",
        },
      },
    ],
    title: "Breathtaking Excursion of the Whale-Rich Waters",
    description:
      "Set sail from Juneau for a voyage like no other. From the picturesque landscapes of Glacier Bay to the lively ambiance of Vancouver, this horizon-kissed cruise will redefine your view of Alaska.",
    rating: 4.3,
    tags: ["general", "cruise-getaway", "sightseeing"],
  },
  {
    basePrice: 7608,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
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
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
      ],
      description:
        "Sail from Juneau into a world of wonder. The Alaska beckons with unforgettable ports like Ketchikan, Glacier Bay, Seattle, where every view is picture-perfect and every moment is priceless.",
      distance: "877 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Juneau to Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Ketchikan to Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Louis Douglas",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
        contact: {
          contactEmail: "golden.mystique.of.t@velarivoyages.com",
          contactNumber: "+1-911-693-7469",
        },
      },
    ],
    title: "Golden Mystique of the Northern Lights",
    description:
      "Sail from Juneau into a world of wonder. The Alaska beckons with unforgettable ports like Ketchikan, Glacier Bay, Seattle, where every view is picture-perfect and every moment is priceless.",
    rating: 4.0,
    tags: ["cultural", "expedition", "VIP"],
  },
  {
    basePrice: 1617,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
        "This golden cruise from Juneau is your ticket to the captivating charm of the Alaska. Discover the delights of Victoria, Glacier Bay, Skagway with enriching excursions and award-winning service.",
      distance: "870 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Juneau to Victoria",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Jacob Curtis",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "celestial.reflection@velarivoyages.com",
          contactNumber: "+1-213-826-1619",
        },
      },
    ],
    title: "Celestial Reflection of the The Last Frontier",
    description:
      "This golden cruise from Juneau is your ticket to the captivating charm of the Alaska. Discover the delights of Victoria, Glacier Bay, Skagway with enriching excursions and award-winning service.",
    rating: 4.1,
    tags: ["relaxation", "anniversary-cruise"],
  },
  {
    basePrice: 6647,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Begin your journey in Juneau, where tradition meets travel. This immersive pulse reveals the finest of Alaska, from the beaches of Victoria to the streets of Glacier Bay.",
      distance: "1195 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Juneau to Victoria",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Victoria",
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
        name: "Gabriel Graham",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
        contact: {
          contactEmail: "floating.drift.of.th@velarivoyages.com",
          contactNumber: "+1-365-146-9832",
        },
      },
    ],
    title: "Floating Drift of the Alpine Seascapes",
    description:
      "Begin your journey in Juneau, where tradition meets travel. This immersive pulse reveals the finest of Alaska, from the beaches of Victoria to the streets of Glacier Bay.",
    rating: 5.0,
    tags: ["cruise"],
  },
  {
    basePrice: 9722,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
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
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "Explore a new side of Alaska with this enchanting resonance starting in Juneau. Visit charming ports such as Ketchikan, Skagway, Vancouver, each offering its own unique rhythm.",
      distance: "1242 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Juneau to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Ketchikan to Skagway",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Skagway to Vancouver",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Vancouver to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joseph Jennings",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "tranquil.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-246-776-9453",
        },
      },
    ],
    title: "Tranquil Sojourn of the Snow-Crowned Peaks",
    description:
      "Explore a new side of Alaska with this enchanting resonance starting in Juneau. Visit charming ports such as Ketchikan, Skagway, Vancouver, each offering its own unique rhythm.",
    rating: 4.7,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 3987,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "This hand-selected verdant cruise offers a true taste of Alaska. Depart from Juneau and explore ports like Victoria, Glacier Bay, Sitka, each telling a story through food, music, and tradition.",
      distance: "668 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Juneau to Victoria",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Sitka",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Sitka to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brian Fisher",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
        contact: {
          contactEmail: "tidewashed.labyrinth@velarivoyages.com",
          contactNumber: "+1-203-546-5026",
        },
      },
    ],
    title: "Tide-Washed Labyrinth of the Wilderness Reaches",
    description:
      "This hand-selected verdant cruise offers a true taste of Alaska. Depart from Juneau and explore ports like Victoria, Glacier Bay, Sitka, each telling a story through food, music, and tradition.",
    rating: 4.4,
    tags: ["wildlife"],
  },
  {
    basePrice: 9300,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "Begin your labyrinth in Juneau, a gateway to the soul of Alaska. Enjoy days spent exploring Glacier Bay, Ketchikan, Victoria and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "837 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Juneau to Glacier Bay",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Ketchikan to Victoria",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Victoria to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Elijah Sutton",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "floating.resonance.o@velarivoyages.com",
          contactNumber: "+1-737-630-2030",
        },
      },
    ],
    title: "Floating Resonance of the Carved Ice Cathedrals",
    description:
      "Begin your labyrinth in Juneau, a gateway to the soul of Alaska. Enjoy days spent exploring Glacier Bay, Ketchikan, Victoria and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 5.0,
    tags: ["cruise-experience", "fall-cruise", "nature"],
  },
  {
    basePrice: 8365,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
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
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "This handpicked requiem begins in Juneau and travels through Alaska's iconic waterscapes. Discover Vancouver, Skagway, Victoria as each day brings new stories and every night offers elegant repose.",
      distance: "1027 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Juneau to Vancouver",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Vancouver to Skagway",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Skagway to Victoria",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Victoria to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Crawford",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "riveting.reflection.@velarivoyages.com",
          contactNumber: "+1-285-234-6798",
        },
      },
    ],
    title: "Riveting Reflection of the Carved Ice Cathedrals",
    description:
      "This handpicked requiem begins in Juneau and travels through Alaska's iconic waterscapes. Discover Vancouver, Skagway, Victoria as each day brings new stories and every night offers elegant repose.",
    rating: 4.6,
    tags: ["relaxation", "cruise-adventure", "cruise-journey"],
  },
  {
    basePrice: 1717,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
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
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "Escape the everyday with this extraordinary journey through Alaska, departing from Juneau. You'll visit Vancouver, Seattle, Skagway, where every stop is a new adventure.",
      distance: "1360 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Juneau to Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Vancouver to Seattle",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Seattle to Skagway",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Skagway to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Wallace",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
        contact: {
          contactEmail: "dreamlike.reunion.of@velarivoyages.com",
          contactNumber: "+1-872-312-5914",
        },
      },
    ],
    title: "Dreamlike Reunion of the Northern Lights",
    description:
      "Escape the everyday with this extraordinary journey through Alaska, departing from Juneau. You'll visit Vancouver, Seattle, Skagway, where every stop is a new adventure.",
    rating: 4.4,
    tags: ["VIP"],
  },
  {
    basePrice: 4250,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
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
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
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
      ],
      description:
        "Set course from Juneau for an inspiring lavish journey across Alaska. Whether exploring ancient ruins in Vancouver or soaking up coastal views in Glacier Bay, every day offers a perfect mix of discovery and relaxation.",
      distance: "785 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Juneau to Vancouver",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Vancouver to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Philip Graham",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "luminous.escape.of.t@velarivoyages.com",
          contactNumber: "+1-334-461-7505",
        },
      },
    ],
    title: "Luminous Escape of the Carved Ice Cathedrals",
    description:
      "Set course from Juneau for an inspiring lavish journey across Alaska. Whether exploring ancient ruins in Vancouver or soaking up coastal views in Glacier Bay, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.9,
    tags: ["seasonal", "cruise-holiday"],
  },
  {
    basePrice: 4321,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
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
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
      ],
      description:
        "Escape the everyday with this harmonic journey through Alaska, departing from Juneau. You'll visit Ketchikan, Skagway, where every stop is a new adventure.",
      distance: "1048 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Juneau to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Ketchikan to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Jesse Porter",
        role: "Group Booking Coordinator",
        languages: ["English", "German", "Spanish", "Japanese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "lavish.mystique.of.t@velarivoyages.com",
          contactNumber: "+1-838-194-2974",
        },
      },
    ],
    title: "Lavish Mystique of the Whale-Rich Waters",
    description:
      "Escape the everyday with this harmonic journey through Alaska, departing from Juneau. You'll visit Ketchikan, Skagway, where every stop is a new adventure.",
    rating: 4.5,
    tags: ["culinary", "anniversary-cruise"],
  },
  {
    basePrice: 5602,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "United States",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
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
      ],
      description:
        "Experience coastal elegance on this pulse from Juneau, where the journey through Alaska includes stops in Vancouver, Skagway, Victoria, Sitka, each more enchanting than the last.",
      distance: "1147 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Juneau to Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Vancouver to Skagway",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Skagway to Victoria",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Victoria to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Hannah Bennett",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "French", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "immersive.enigma.of.@velarivoyages.com",
          contactNumber: "+1-995-741-2620",
        },
      },
    ],
    title: "Immersive Enigma of the Echoes of Ice",
    description:
      "Experience coastal elegance on this pulse from Juneau, where the journey through Alaska includes stops in Vancouver, Skagway, Victoria, Sitka, each more enchanting than the last.",
    rating: 4.7,
    tags: ["romantic", "culinary"],
  },
  {
    basePrice: 3356,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Victoria",
      country: "Canada",
      coordinates: {
        latitude: 48.4284,
        longitude: -123.3656,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
      ],
      description:
        "Embark from Juneau and traverse the Alaska in style. Whether it’s the energy of Sitka or the calm of Vancouver, each destination reveals a new side of paradise.",
      distance: "1145 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Juneau to Sitka",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Sitka to Vancouver",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Vancouver to Ketchikan",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Ketchikan to Victoria",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Juneau",
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
          description: "Exploring Vancouver",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Victoria",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Ella Dunn",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "French", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "celestial.arcadia.of@velarivoyages.com",
          contactNumber: "+1-797-824-3976",
        },
      },
    ],
    title: "Celestial Arcadia of the Whale-Rich Waters",
    description:
      "Embark from Juneau and traverse the Alaska in style. Whether it’s the energy of Sitka or the calm of Vancouver, each destination reveals a new side of paradise.",
    rating: 4.7,
    tags: ["tropical"],
  },
  {
    basePrice: 8599,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
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
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this mystical symphony through Alaska, starting from the illustrious port of Juneau. From Vancouver, Seattle to Skagway, each destination offers its own story, culture, and breathtaking views.",
      distance: "906 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Juneau to Vancouver",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Vancouver to Seattle",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Seattle to Skagway",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Skagway to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Kimberly Palmer",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "French", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "sundrenched.mirage.o@velarivoyages.com",
          contactNumber: "+1-331-930-9231",
        },
      },
    ],
    title: "Sun-Drenched Mirage of the Tundra Tides",
    description:
      "Experience the elegance of the seas on this mystical symphony through Alaska, starting from the illustrious port of Juneau. From Vancouver, Seattle to Skagway, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.7,
    tags: ["cruise", "anniversary-cruise"],
  },
  {
    basePrice: 5289,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
      ],
      description:
        "Start in the vibrant city of Juneau and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Victoria, Sitka, Glacier Bay, Seattle.",
      distance: "515 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Juneau to Victoria",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Victoria to Sitka",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Sitka to Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Juneau",
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
          description: "Exploring Sitka",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jane Knight",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "French", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/91.jpg",
        contact: {
          contactEmail: "enchanting.mirage.of@velarivoyages.com",
          contactNumber: "+1-989-157-9945",
        },
      },
    ],
    title: "Enchanting Mirage of the Echoes of Ice",
    description:
      "Start in the vibrant city of Juneau and venture into the iconic Alaska. Discover authentic local cultures, cuisine, and coastal wonders in Victoria, Sitka, Glacier Bay, Seattle.",
    rating: 4.6,
    tags: ["relaxation"],
  },
  {
    basePrice: 8867,
    departureLocation: {
      city: "Juneau",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    arrivalLocation: {
      city: "Sitka",
      country: "United States",
      coordinates: {
        latitude: 57.0531,
        longitude: -135.3304,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Juneau",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
      ],
      description:
        "Sail away from Juneau into the beautiful expanse of Alaska. Along the way, enjoy rich cultural experiences in Seattle, Sitka, where history, nature, and cuisine collide.",
      distance: "1059 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Juneau to Seattle",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Seattle to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Emily Gardner",
        role: "Loyalty Program Representative",
        languages: ["English", "Portuguese", "French", "German", "Spanish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "dreamlike.discovery.@velarivoyages.com",
          contactNumber: "+1-530-232-7588",
        },
      },
    ],
    title: "Dreamlike Discovery of the Northern Lights",
    description:
      "Sail away from Juneau into the beautiful expanse of Alaska. Along the way, enjoy rich cultural experiences in Seattle, Sitka, where history, nature, and cuisine collide.",
    rating: 4.9,
    tags: ["cruise-getaway", "short-getaway"],
  },
];
