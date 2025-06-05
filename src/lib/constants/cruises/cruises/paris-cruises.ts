import { Cruise } from "@/lib/interfaces/services/cruises";

export const parisCruises: Cruise[] = [
  {
    basePrice: 2476,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Southampton",
          country: "United Kingdom",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
        {
          city: "London",
          country: "United Kingdom",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
        {
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "This hand-selected midnight cruise offers a true taste of Northern Europe. Depart from Paris and explore ports like Southampton, London, Berlin, Copenhagen, each telling a story through food, music, and tradition.",
      distance: "1315 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Paris to Southampton",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Southampton to London",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from London to Berlin",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Berlin to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Nash",
        role: "Corporate Concierge",
        languages: ["English", "Italian", "Russian", "French", "Greek"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "lavish.pulse.of.the.@velarivoyages.com",
          contactNumber: "+1-290-261-7731",
        },
      },
    ],
    title: "Lavish Pulse of the Rosé-Washed Dreams",
    description:
      "This hand-selected midnight cruise offers a true taste of Northern Europe. Depart from Paris and explore ports like Southampton, London, Berlin, Copenhagen, each telling a story through food, music, and tradition.",
    rating: 4.7,
    tags: ["family-friendly"],
  },
  {
    basePrice: 4096,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Helsinki",
          country: "Finland",
          coordinates: {
            latitude: 60.1695,
            longitude: 24.9354,
          },
        },
        {
          city: "Kiel",
          country: "Germany",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
        {
          city: "Tallinn",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
      ],
      description:
        "Start in the vibrant city of Paris and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Helsinki, Kiel, Tallinn.",
      distance: "786 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Paris to Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Helsinki to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Kiel to Tallinn",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tallinn to Paris",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Paris",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Catherine Wells",
        role: "Corporate Concierge",
        languages: ["English", "Italian", "Russian", "French", "Greek"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "transcendent.voyage.@velarivoyages.com",
          contactNumber: "+1-730-456-5432",
        },
      },
    ],
    title: "Transcendent Voyage of the Midnight Louvre",
    description:
      "Start in the vibrant city of Paris and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Helsinki, Kiel, Tallinn.",
    rating: 4.9,
    tags: ["culinary", "glacier-cruise"],
  },
  {
    basePrice: 4422,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Oslo",
      country: "Norway",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Stockholm",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Oslo",
          country: "Norway",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
      ],
      description:
        "Experience coastal elegance on this odyssey from Paris, where the journey through Northern Europe includes stops in Stockholm, Oslo, each more enchanting than the last.",
      distance: "1351 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Paris to Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Stockholm to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samantha Holloway",
        role: "Corporate Concierge",
        languages: ["English", "Italian", "Russian", "French", "Greek"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "pearlescent.frontier@velarivoyages.com",
          contactNumber: "+1-854-898-1027",
        },
      },
    ],
    title: "Pearlescent Frontier of the City of Light",
    description:
      "Experience coastal elegance on this odyssey from Paris, where the journey through Northern Europe includes stops in Stockholm, Oslo, each more enchanting than the last.",
    rating: 4.9,
    tags: ["culinary"],
  },
  {
    basePrice: 1546,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Step aboard in Paris and begin a spectacular journey through the scenic Northern Europe. From historic cities to coastal hideaways like Berlin, Copenhagen, every day is unforgettable.",
      distance: "503 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to Berlin",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Berlin to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Layla West",
        role: "Corporate Concierge",
        languages: ["English", "Italian", "Russian", "French", "Greek"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "infinite.panorama.of@velarivoyages.com",
          contactNumber: "+1-519-154-6661",
        },
      },
    ],
    title: "Infinite Panorama of the Velvet Shadows",
    description:
      "Step aboard in Paris and begin a spectacular journey through the scenic Northern Europe. From historic cities to coastal hideaways like Berlin, Copenhagen, every day is unforgettable.",
    rating: 4.3,
    tags: ["sightseeing"],
  },
  {
    basePrice: 2018,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Stockholm",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Southampton",
          country: "United Kingdom",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
        {
          city: "Oslo",
          country: "Norway",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
      ],
      description:
        "This escape takes you beyond the ordinary, starting in Paris. With breathtaking stops in Stockholm, Southampton, Oslo, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1431 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Paris to Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Stockholm to Southampton",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Southampton to Oslo",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Oslo to Paris",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Paris",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Isabella Morgan",
        role: "Corporate Concierge",
        languages: ["English", "Italian", "Russian", "French", "Greek"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "gilded.sanctum.of.th@velarivoyages.com",
          contactNumber: "+1-570-269-4602",
        },
      },
    ],
    title: "Gilded Sanctum of the Cathedral Echoes",
    description:
      "This escape takes you beyond the ordinary, starting in Paris. With breathtaking stops in Stockholm, Southampton, Oslo, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.3,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 5118,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tallinn",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
        {
          city: "London",
          country: "United Kingdom",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
      ],
      description:
        "Set sail from Paris on this majestic realm through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore St. Petersburg and Tallinn and Copenhagen and London, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "598 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Paris to St. Petersburg",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Tallinn",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Tallinn to Copenhagen",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Copenhagen to London",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from London to Paris",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Paris",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adeline Porter",
        role: "Corporate Concierge",
        languages: ["English", "Italian", "Russian", "French", "Greek"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "extraordinary.lullab@velarivoyages.com",
          contactNumber: "+1-367-105-7603",
        },
      },
    ],
    title: "Extraordinary Lullaby of the Timbered Waterfronts",
    description:
      "Set sail from Paris on this majestic realm through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore St. Petersburg and Tallinn and Copenhagen and London, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.2,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 8097,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Helsinki",
          country: "Finland",
          coordinates: {
            latitude: 60.1695,
            longitude: 24.9354,
          },
        },
        {
          city: "Kiel",
          country: "Germany",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
        {
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
      ],
      description:
        "Sail from Paris into a world of wonder. The Northern Europe beckons with unforgettable ports like Helsinki, Kiel, St. Petersburg, where every view is picture-perfect and every moment is priceless.",
      distance: "1406 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Paris to Helsinki",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Helsinki to Kiel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Kiel to St. Petersburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Paris",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Paris",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Alexa Hall",
        role: "Corporate Concierge",
        languages: ["English", "Italian", "Russian", "French", "Greek"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "enchanting.tide.of.t@velarivoyages.com",
          contactNumber: "+1-311-157-7434",
        },
      },
    ],
    title: "Enchanting Tide of the Twilight Fjords",
    description:
      "Sail from Paris into a world of wonder. The Northern Europe beckons with unforgettable ports like Helsinki, Kiel, St. Petersburg, where every view is picture-perfect and every moment is priceless.",
    rating: 4.1,
    tags: ["cruise-adventure"],
  },
  {
    basePrice: 5684,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
        {
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
      ],
      description:
        "Escape into the calm waters of Northern Europe with this whispering journey from Paris. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Amsterdam, St. Petersburg.",
      distance: "1268 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to Amsterdam",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Amsterdam to St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Paris",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Paris",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Virginia Fox",
        role: "Corporate Concierge",
        languages: ["English", "Italian", "Russian", "French", "Greek"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "majestic.arcadia.of.@velarivoyages.com",
          contactNumber: "+1-281-519-3339",
        },
      },
    ],
    title: "Majestic Arcadia of the Romantic Capital",
    description:
      "Escape into the calm waters of Northern Europe with this whispering journey from Paris. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Amsterdam, St. Petersburg.",
    rating: 4.6,
    tags: ["cultural", "repositioning", "long-distance"],
  },
  {
    basePrice: 3887,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "St. Petersburg",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
        {
          city: "Dublin",
          country: "Ireland",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
          },
        },
        {
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Depart Paris on a relaxing excursion through the Northern Europe region. Highlights include the stunning coastlines of Berlin, Dublin, St. Petersburg, all while enjoying first-class amenities on board.",
      distance: "1186 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Paris to Berlin",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Berlin to Dublin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Dublin to St. Petersburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Emily Palmer",
        role: "Corporate Concierge",
        languages: ["English", "Italian", "Russian", "French", "Greek"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/85.jpg",
        contact: {
          contactEmail: "luxurious.frontier.o@velarivoyages.com",
          contactNumber: "+1-157-471-9763",
        },
      },
    ],
    title: "Luxurious Frontier of the City of Light",
    description:
      "Depart Paris on a relaxing excursion through the Northern Europe region. Highlights include the stunning coastlines of Berlin, Dublin, St. Petersburg, all while enjoying first-class amenities on board.",
    rating: 4.4,
    tags: ["weekend-cruise", "long-distance"],
  },
  {
    basePrice: 2480,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Tallinn",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "London",
          country: "United Kingdom",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Unwind and explore on this drift through Northern Europe, departing from Paris. With every stop—from Tallinn to London—you’ll collect memories that last a lifetime.",
      distance: "878 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tallinn to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Adeline Coleman",
        role: "Corporate Concierge",
        languages: ["English", "Italian", "Russian", "French", "Greek"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "tranquil.adventure.o@velarivoyages.com",
          contactNumber: "+1-190-734-4587",
        },
      },
    ],
    title: "Tranquil Adventure of the Cathedral Echoes",
    description:
      "Unwind and explore on this drift through Northern Europe, departing from Paris. With every stop—from Tallinn to London—you’ll collect memories that last a lifetime.",
    rating: 5.0,
    tags: ["fall-cruise", "cruise-experience", "cruise-vacation"],
  },
];
