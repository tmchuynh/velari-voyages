import { Cruise } from "@/lib/interfaces/services/cruises";

export const berlinCruises: Cruise[] = [
  {
    basePrice: 2610,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
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
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "This extraordinary passage from Berlin offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Stockholm, Copenhagen and Amsterdam, creating memories that will last a lifetime.",
      distance: "959 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Berlin to Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Stockholm to Copenhagen",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Amsterdam to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Jennings",
        role: "Corporate Concierge",
        languages: ["English", "Russian", "Czech"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "heavenly.elevation.o@velarivoyages.com",
          contactNumber: "+1-866-310-4029",
        },
      },
    ],
    title: "Heavenly Elevation of the Modern Mosaic",
    description:
      "This extraordinary passage from Berlin offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Stockholm, Copenhagen and Amsterdam, creating memories that will last a lifetime.",
    rating: 4.4,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 7964,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Kiel",
          country: "Germany",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Depart Berlin on a relaxing infinite through the Northern Europe region. Highlights include the stunning coastlines of London, Kiel, Oslo, Amsterdam, all while enjoying first-class amenities on board.",
      distance: "1242 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Berlin to London",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from London to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Kiel to Oslo",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Oslo to Amsterdam",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Amsterdam to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zola Baker",
        role: "Corporate Concierge",
        languages: ["English", "Russian", "Czech"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "extraordinary.expedi@velarivoyages.com",
          contactNumber: "+1-247-984-8322",
        },
      },
    ],
    title: "Extraordinary Expedition of the Timbered Waterfronts",
    description:
      "Depart Berlin on a relaxing infinite through the Northern Europe region. Highlights include the stunning coastlines of London, Kiel, Oslo, Amsterdam, all while enjoying first-class amenities on board.",
    rating: 4.0,
    tags: ["adventure", "tropical", "exclusive"],
  },
  {
    basePrice: 7428,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Oslo",
          country: "Norway",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
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
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Your infinite begins in Berlin, where every sunset on the Northern Europe horizon promises another day of discovery—from Tallinn, Oslo, Helsinki to hidden ports of charm.",
      distance: "641 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Berlin to Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tallinn to Oslo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Oslo to Helsinki",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Helsinki to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Mary Dixon",
        role: "Corporate Concierge",
        languages: ["English", "Russian", "Czech"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "luminous.renaissance@velarivoyages.com",
          contactNumber: "+1-323-521-3295",
        },
      },
    ],
    title: "Luminous Renaissance of the Aurora Veil",
    description:
      "Your infinite begins in Berlin, where every sunset on the Northern Europe horizon promises another day of discovery—from Tallinn, Oslo, Helsinki to hidden ports of charm.",
    rating: 4.3,
    tags: ["cruise-journey", "cruise-holiday", "themed-cruise"],
  },
  {
    basePrice: 4804,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
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
          city: "London",
          country: "United Kingdom",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
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
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Let the winds of the Northern Europe carry you from Berlin to the most stunning ports in the region. With destinations like Dublin, London, Southampton, this resonance redefines luxury travel.",
      distance: "1199 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Berlin to Dublin",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Dublin to London",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from London to Southampton",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Southampton to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Genesis Hayes",
        role: "Corporate Concierge",
        languages: ["English", "Russian", "Czech"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "sublime.pilgrimage.o@velarivoyages.com",
          contactNumber: "+1-255-312-7198",
        },
      },
    ],
    title: "Sublime Pilgrimage of the City of Echoes",
    description:
      "Let the winds of the Northern Europe carry you from Berlin to the most stunning ports in the region. With destinations like Dublin, London, Southampton, this resonance redefines luxury travel.",
    rating: 4.1,
    tags: ["cruise-ship", "sightseeing", "romantic"],
  },
  {
    basePrice: 2622,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Tallinn",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Tallinn",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This haven takes you beyond the ordinary, starting in Berlin. With breathtaking stops in Southampton, Tallinn, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1141 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Berlin to Southampton",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Southampton to Tallinn",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Savannah Bennett",
        role: "Corporate Concierge",
        languages: ["English", "Russian", "Czech"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
        contact: {
          contactEmail: "refined.drift.of.the@velarivoyages.com",
          contactNumber: "+1-388-713-3535",
        },
      },
    ],
    title: "Refined Drift of the Timbered Waterfronts",
    description:
      "This haven takes you beyond the ordinary, starting in Berlin. With breathtaking stops in Southampton, Tallinn, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.7,
    tags: ["cruise-journey", "weekend-cruise"],
  },
  {
    basePrice: 4533,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Southampton",
      country: "United Kingdom",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
      ],
      description:
        "Embark on an unforgettable currents from the vibrant port of Berlin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Helsinki, Amsterdam, Southampton, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1365 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Berlin to Helsinki",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Helsinki to Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Amsterdam to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Abigail Ellis",
        role: "Corporate Concierge",
        languages: ["English", "Russian", "Czech"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "majestic.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-384-310-8561",
        },
      },
    ],
    title: "Majestic Sojourn of the City of Echoes",
    description:
      "Embark on an unforgettable currents from the vibrant port of Berlin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Helsinki, Amsterdam, Southampton, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.6,
    tags: ["seasonal"],
  },
  {
    basePrice: 3801,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "London",
          country: "United Kingdom",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
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
          city: "Kiel",
          country: "Germany",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Sail into splendor from Berlin on a tide-washed voyage through Northern Europe. Let each stop—from Helsinki to London—reveal the unique flavors and colors of the region.",
      distance: "1072 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Berlin to Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Helsinki to London",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from London to Amsterdam",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Amsterdam to Kiel",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Kiel to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Priya Keller",
        role: "Corporate Concierge",
        languages: ["English", "Russian", "Czech"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "infinite.saga.of.the@velarivoyages.com",
          contactNumber: "+1-735-249-5858",
        },
      },
    ],
    title: "Infinite Saga of the City of Echoes",
    description:
      "Sail into splendor from Berlin on a tide-washed voyage through Northern Europe. Let each stop—from Helsinki to London—reveal the unique flavors and colors of the region.",
    rating: 4.3,
    tags: ["historical"],
  },
  {
    basePrice: 4368,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Helsinki",
      country: "Finland",
      coordinates: {
        latitude: 60.1695,
        longitude: 24.9354,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Helsinki",
          country: "Finland",
          coordinates: {
            latitude: 60.1695,
            longitude: 24.9354,
          },
        },
      ],
      description:
        "Set sail from Berlin on this tide-washed voyage through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore London and Helsinki, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "577 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Berlin to London",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from London to Helsinki",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Stewart",
        role: "Corporate Concierge",
        languages: ["English", "Russian", "Czech"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "crystalline.arcadia.@velarivoyages.com",
          contactNumber: "+1-595-204-4866",
        },
      },
    ],
    title: "Crystalline Arcadia of the City of Echoes",
    description:
      "Set sail from Berlin on this tide-washed voyage through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore London and Helsinki, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.2,
    tags: ["wellness", "cultural", "tropical"],
  },
  {
    basePrice: 4400,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Helsinki",
          country: "Finland",
          coordinates: {
            latitude: 60.1695,
            longitude: 24.9354,
          },
        },
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Embark on an unforgettable elevation from the vibrant port of Berlin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Southampton, Helsinki, this journey combines cultural immersion with breathtaking scenery.",
      distance: "950 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Berlin to Southampton",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Southampton to Helsinki",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Helsinki to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Elena Dixon",
        role: "Corporate Concierge",
        languages: ["English", "Russian", "Czech"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        contact: {
          contactEmail: "timeless.reunion.of.@velarivoyages.com",
          contactNumber: "+1-941-713-4035",
        },
      },
    ],
    title: "Timeless Reunion of the Wall of Stories",
    description:
      "Embark on an unforgettable elevation from the vibrant port of Berlin, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Southampton, Helsinki, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.8,
    tags: ["expedition", "nature"],
  },
  {
    basePrice: 4770,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Dublin",
          country: "Ireland",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Set sail from Berlin for a voyage like no other. From the picturesque landscapes of Amsterdam to the lively ambiance of Dublin, this mythic cruise will redefine your view of Northern Europe.",
      distance: "989 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Berlin to Amsterdam",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Amsterdam to Dublin",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Dublin to Stockholm",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Stockholm to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nicole Nash",
        role: "Corporate Concierge",
        languages: ["English", "Russian", "Czech"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "spectacular.serenade@velarivoyages.com",
          contactNumber: "+1-405-553-5848",
        },
      },
    ],
    title: "Spectacular Serenade of the Runestone Realms",
    description:
      "Set sail from Berlin for a voyage like no other. From the picturesque landscapes of Amsterdam to the lively ambiance of Dublin, this mythic cruise will redefine your view of Northern Europe.",
    rating: 4.8,
    tags: ["wildlife"],
  },
];
