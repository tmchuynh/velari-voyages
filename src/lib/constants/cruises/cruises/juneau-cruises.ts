import { Cruise } from "@/lib/interfaces/services/cruises";

export const juneauCruises: Cruise[] = [
  {
    basePrice: 9725,
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
    hasPopularDestination: false,
    category: "weekend-cruise",
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
        "Depart from the iconic port of Juneau and sail through the enchanting Alaska. Explore vibrant destinations like Victoria, Seattle, each offering its own unique charm and local flair.",
      distance: "891 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Juneau to Victoria",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Victoria to Seattle",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Seattle to Juneau",
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
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Emma Bennett",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Italian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "mythic.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-318-389-7742",
        },
      },
    ],
    title: "Mythic Odyssey of the Frozen Frontiers",
    description:
      "Depart from the iconic port of Juneau and sail through the enchanting Alaska. Explore vibrant destinations like Victoria, Seattle, each offering its own unique charm and local flair.",
    rating: 4.5,
    tags: ["short-getaway", "seasonal"],
  },
  {
    basePrice: 2726,
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
    category: "fjords-tour",
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
        "This inspiring legacy departs from Juneau, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Victoria, Glacier Bay, Vancouver, Sitka.",
      distance: "938 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Juneau to Victoria",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Vancouver",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Vancouver to Sitka",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
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
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Glacier Bay",
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
          description: "Exploring Sitka",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Helen Reed",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Italian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "mythic.tide.of.the.f@velarivoyages.com",
          contactNumber: "+1-589-948-4778",
        },
      },
    ],
    title: "Mythic Tide of the Frozen Frontiers",
    description:
      "This inspiring legacy departs from Juneau, navigating the diverse landscapes and vibrant cities of Alaska. Must-see stops include Victoria, Glacier Bay, Vancouver, Sitka.",
    rating: 4.4,
    tags: ["cruise-line", "general"],
  },
  {
    basePrice: 9599,
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
      city: "Vancouver",
      country: "Canada",
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
          city: "Vancouver",
          country: "Canada",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "Step aboard in Juneau and begin a hidden journey through the scenic Alaska. From historic cities to coastal hideaways like Victoria, Vancouver, every day is unforgettable.",
      distance: "1331 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Juneau to Victoria",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Victoria to Vancouver",
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
          description: "Exploring Victoria",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Campbell",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Italian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "floating.horizon.of.@velarivoyages.com",
          contactNumber: "+1-697-598-1744",
        },
      },
    ],
    title: "Floating Horizon of the Glacial Kingdom",
    description:
      "Step aboard in Juneau and begin a hidden journey through the scenic Alaska. From historic cities to coastal hideaways like Victoria, Vancouver, every day is unforgettable.",
    rating: 4.4,
    tags: ["exclusive"],
  },
  {
    basePrice: 3031,
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
      city: "Vancouver",
      country: "Canada",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
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
      ],
      description:
        "Escape the everyday with this harmonic journey through Alaska, departing from Juneau. You'll visit Sitka, Glacier Bay, Vancouver, where every stop is a new adventure.",
      distance: "907 nautical miles",
      totalDuration: "10 days",
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
          description: "Sailing from Sitka to Glacier Bay",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Vancouver",
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
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Glacier Bay",
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
        name: "Samantha Fox",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Italian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "sublime.pilgrimage.o@velarivoyages.com",
          contactNumber: "+1-586-229-8896",
        },
      },
    ],
    title: "Sublime Pilgrimage of the Frozen Frontiers",
    description:
      "Escape the everyday with this harmonic journey through Alaska, departing from Juneau. You'll visit Sitka, Glacier Bay, Vancouver, where every stop is a new adventure.",
    rating: 4.3,
    tags: ["sightseeing"],
  },
  {
    basePrice: 4115,
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
    category: "vip-cruise",
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
        "Embark from Juneau and traverse the Alaska in style. Whether it’s the energy of Skagway or the calm of Victoria, each destination reveals a new side of paradise.",
      distance: "668 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Juneau to Skagway",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Skagway to Victoria",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Victoria to Vancouver",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Vancouver to Sitka",
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
          description: "Exploring Skagway",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sarah Baker",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Italian"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "heavenly.enigma.of.t@velarivoyages.com",
          contactNumber: "+1-140-826-2635",
        },
      },
    ],
    title: "Heavenly Enigma of the Echoes of Ice",
    description:
      "Embark from Juneau and traverse the Alaska in style. Whether it’s the energy of Skagway or the calm of Victoria, each destination reveals a new side of paradise.",
    rating: 4.4,
    tags: ["glacier-cruise"],
  },
  {
    basePrice: 7714,
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
    category: "expedition-cruise",
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
        "Embark on an unforgettable labyrinth from the vibrant port of Juneau, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Seattle, Skagway, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1137 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Juneau to Seattle",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Seattle to Skagway",
        },
        {
          start: "Day 8",
          end: "Day 9",
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
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
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
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kinsley Sutton",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Italian"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "luminous.infinite.of@velarivoyages.com",
          contactNumber: "+1-591-538-5482",
        },
      },
    ],
    title: "Luminous Infinite of the Wilderness Reaches",
    description:
      "Embark on an unforgettable labyrinth from the vibrant port of Juneau, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Seattle, Skagway, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.5,
    tags: ["family-friendly"],
  },
  {
    basePrice: 8975,
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
      city: "Ketchikan",
      country: "United States",
      coordinates: {
        latitude: 55.3422,
        longitude: -131.6476,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "repositioning-cruise",
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
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
      ],
      description:
        "Sail into splendor from Juneau on a hidden voyage through Alaska. Let each stop—from Victoria to Vancouver—reveal the unique flavors and colors of the region.",
      distance: "1114 nautical miles",
      totalDuration: "15 days",
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
          description: "Sailing from Victoria to Vancouver",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Vancouver to Skagway",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Skagway to Ketchikan",
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
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Nicole Baker",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Italian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "ornate.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-459-592-9178",
        },
      },
    ],
    title: "Ornate Odyssey of the Snow-Crowned Peaks",
    description:
      "Sail into splendor from Juneau on a hidden voyage through Alaska. Let each stop—from Victoria to Vancouver—reveal the unique flavors and colors of the region.",
    rating: 4.9,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 1639,
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
    category: "glacier-cruise",
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
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
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
        "This currents takes you beyond the ordinary, starting in Juneau. With breathtaking stops in Sitka, Ketchikan, Seattle, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "661 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Juneau to Sitka",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Sitka to Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Ketchikan to Seattle",
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
          description: "Exploring Sitka",
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
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Ellis",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Italian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "legendary.arcadia.of@velarivoyages.com",
          contactNumber: "+1-130-544-4907",
        },
      },
    ],
    title: "Legendary Arcadia of the Misty Fjords",
    description:
      "This currents takes you beyond the ordinary, starting in Juneau. With breathtaking stops in Sitka, Ketchikan, Seattle, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.4,
    tags: ["cruise-line"],
  },
  {
    basePrice: 4248,
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
    hasPopularDestination: false,
    category: "glacier-cruise",
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
        "Step into a world of elegance and exploration from Juneau. This saga through the Alaska unveils stunning stops including Seattle, Glacier Bay, Vancouver, all with first-class service.",
      distance: "1092 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Juneau to Seattle",
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
          description: "Sailing from Glacier Bay to Vancouver",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Vancouver to Juneau",
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
          description: "Exploring Vancouver",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Janet Dixon",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Italian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "luminous.saga.of.the@velarivoyages.com",
          contactNumber: "+1-512-747-2153",
        },
      },
    ],
    title: "Luminous Saga of the Frontier Silence",
    description:
      "Step into a world of elegance and exploration from Juneau. This saga through the Alaska unveils stunning stops including Seattle, Glacier Bay, Vancouver, all with first-class service.",
    rating: 4.5,
    tags: ["relaxation", "cruise-getaway"],
  },
  {
    basePrice: 6879,
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
    category: "repositioning-cruise",
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
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
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
        "Your pulse begins in Juneau, where every sunset on the Alaska horizon promises another day of discovery—from Glacier Bay, Seattle, Vancouver to hidden ports of charm.",
      distance: "697 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Juneau to Glacier Bay",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Seattle to Vancouver",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Stella Fisher",
        role: "Reservations Agent",
        languages: ["English", "German", "French", "Italian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "infinite.arcadia.of.@velarivoyages.com",
          contactNumber: "+1-920-530-8796",
        },
      },
    ],
    title: "Infinite Arcadia of the Northern Lights",
    description:
      "Your pulse begins in Juneau, where every sunset on the Alaska horizon promises another day of discovery—from Glacier Bay, Seattle, Vancouver to hidden ports of charm.",
    rating: 4.1,
    tags: ["luxury"],
  },
];
