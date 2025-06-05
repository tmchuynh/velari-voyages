import { Cruise } from "@/lib/interfaces/services/cruises";

export const kielCruises: Cruise[] = [
  {
    basePrice: 6319,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Begin your labyrinth in Kiel, a gateway to the soul of Northern Europe. Enjoy days spent exploring Amsterdam, Stockholm, Southampton, Copenhagen and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1085 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kiel to Amsterdam",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Amsterdam to Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Stockholm to Southampton",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Southampton to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Amsterdam",
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
          description: "Exploring Southampton",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Aiden Gibson",
        role: "Loyalty Program Representative",
        languages: ["English", "Polish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
        contact: {
          contactEmail: "horizonkissed.realm.@velarivoyages.com",
          contactNumber: "+1-713-552-1938",
        },
      },
    ],
    title: "Horizon-Kissed Realm of the Gateway to the Baltic",
    description:
      "Begin your labyrinth in Kiel, a gateway to the soul of Northern Europe. Enjoy days spent exploring Amsterdam, Stockholm, Southampton, Copenhagen and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.2,
    tags: ["cruise-adventure"],
  },
  {
    basePrice: 6714,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
          city: "Oslo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your refined journey from Kiel. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Amsterdam, Oslo.",
      distance: "1361 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kiel to Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Amsterdam to Oslo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Oslo to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Darrell West",
        role: "Loyalty Program Representative",
        languages: ["English", "Polish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "dreamlike.odyssey.of@velarivoyages.com",
          contactNumber: "+1-767-326-4091",
        },
      },
    ],
    title: "Dreamlike Odyssey of the Twilight Fjords",
    description:
      "Let the spirit of exploration guide your refined journey from Kiel. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Amsterdam, Oslo.",
    rating: 4.1,
    tags: ["general", "cruise-experience", "themed-cruise"],
  },
  {
    basePrice: 3366,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
        {
          city: "Oslo",
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
          city: "Tallinn",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Helsinki",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "This extraordinary reverie from Kiel offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Oslo, Copenhagen, Tallinn and Helsinki, creating memories that will last a lifetime.",
      distance: "633 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kiel to Oslo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Oslo to Copenhagen",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Copenhagen to Tallinn",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Tallinn to Helsinki",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Helsinki to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joseph Nash",
        role: "Loyalty Program Representative",
        languages: ["English", "Polish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "extraordinary.sympho@velarivoyages.com",
          contactNumber: "+1-866-291-3898",
        },
      },
    ],
    title: "Extraordinary Symphony of the Baltic Echoes",
    description:
      "This extraordinary reverie from Kiel offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Oslo, Copenhagen, Tallinn and Helsinki, creating memories that will last a lifetime.",
    rating: 4.6,
    tags: ["nature", "holiday-cruise", "relaxation"],
  },
  {
    basePrice: 2999,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
        {
          city: "Oslo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this secluded odyssey through Northern Europe, starting from the illustrious port of Kiel. From Amsterdam, Berlin to Oslo, each destination offers its own story, culture, and breathtaking views.",
      distance: "739 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kiel to Amsterdam",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Amsterdam to Berlin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Berlin to Oslo",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Oslo to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Wei West",
        role: "Loyalty Program Representative",
        languages: ["English", "Polish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/96.jpg",
        contact: {
          contactEmail: "whispering.enigma.of@velarivoyages.com",
          contactNumber: "+1-623-175-3605",
        },
      },
    ],
    title: "Whispering Enigma of the Waves of Memory",
    description:
      "Experience the elegance of the seas on this secluded odyssey through Northern Europe, starting from the illustrious port of Kiel. From Amsterdam, Berlin to Oslo, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.1,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 1103,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
        {
          city: "Helsinki",
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
      ],
      description:
        "Set sail from Kiel for a voyage like no other. From the picturesque landscapes of Helsinki to the lively ambiance of Southampton, this idyllic cruise will redefine your view of Northern Europe.",
      distance: "1385 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kiel to Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Helsinki to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
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
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joseph Gibson",
        role: "Loyalty Program Representative",
        languages: ["English", "Polish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
        contact: {
          contactEmail: "extraordinary.sojour@velarivoyages.com",
          contactNumber: "+1-994-580-3498",
        },
      },
    ],
    title: "Extraordinary Sojourn of the Timbered Waterfronts",
    description:
      "Set sail from Kiel for a voyage like no other. From the picturesque landscapes of Helsinki to the lively ambiance of Southampton, this idyllic cruise will redefine your view of Northern Europe.",
    rating: 4.4,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 5098,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "An escape like no other begins in Kiel, where your zenith launches into the heart of Northern Europe. Discover the magic of Southampton, London, St. Petersburg with style and sophistication.",
      distance: "1038 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kiel to Southampton",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Southampton to London",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Jason Baker",
        role: "Loyalty Program Representative",
        languages: ["English", "Polish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "breathtaking.elevati@velarivoyages.com",
          contactNumber: "+1-445-807-5332",
        },
      },
    ],
    title: "Breathtaking Elevation of the Canal Whisper Port",
    description:
      "An escape like no other begins in Kiel, where your zenith launches into the heart of Northern Europe. Discover the magic of Southampton, London, St. Petersburg with style and sophistication.",
    rating: 4.8,
    tags: ["wildlife", "adventure", "luxury"],
  },
  {
    basePrice: 3819,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Let the waves lead you from Kiel on this breathtaking realm. Traverse the iconic waters of Northern Europe and discover the beauty of Southampton, Helsinki, Berlin.",
      distance: "623 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kiel to Southampton",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Southampton to Helsinki",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Helsinki to Berlin",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Berlin to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Helsinki",
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
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Willie Wallace",
        role: "Loyalty Program Representative",
        languages: ["English", "Polish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "midnight.reflection.@velarivoyages.com",
          contactNumber: "+1-903-111-1888",
        },
      },
    ],
    title: "Midnight Reflection of the Canal Whisper Port",
    description:
      "Let the waves lead you from Kiel on this breathtaking realm. Traverse the iconic waters of Northern Europe and discover the beauty of Southampton, Helsinki, Berlin.",
    rating: 4.8,
    tags: ["long-distance", "family-friendly", "wellness"],
  },
  {
    basePrice: 6182,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Oslo",
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
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
        {
          city: "Helsinki",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Oslo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Escape into the calm waters of Northern Europe with this transcendent journey from Kiel. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Helsinki, Amsterdam, Oslo.",
      distance: "1434 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kiel to Helsinki",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Helsinki to Amsterdam",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Amsterdam to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Peter Knight",
        role: "Loyalty Program Representative",
        languages: ["English", "Polish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "majestic.zenith.of.t@velarivoyages.com",
          contactNumber: "+1-749-507-9884",
        },
      },
    ],
    title: "Majestic Zenith of the Frost-Lit Dock",
    description:
      "Escape into the calm waters of Northern Europe with this transcendent journey from Kiel. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Helsinki, Amsterdam, Oslo.",
    rating: 4.3,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 9558,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
          city: "Berlin",
          country: "Germany",
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
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Depart Kiel on a relaxing frontier through the Northern Europe region. Highlights include the stunning coastlines of St. Petersburg, Berlin, Southampton, all while enjoying first-class amenities on board.",
      distance: "1281 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Kiel to St. Petersburg",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Berlin",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Berlin to Southampton",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Southampton to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Keith Holloway",
        role: "Loyalty Program Representative",
        languages: ["English", "Polish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "infinite.expedition.@velarivoyages.com",
          contactNumber: "+1-414-105-6868",
        },
      },
    ],
    title: "Infinite Expedition of the German Maritime Hub",
    description:
      "Depart Kiel on a relaxing frontier through the Northern Europe region. Highlights include the stunning coastlines of St. Petersburg, Berlin, Southampton, all while enjoying first-class amenities on board.",
    rating: 4.3,
    tags: ["cruise"],
  },
  {
    basePrice: 1520,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
        "Let the spirit of exploration guide your sublime journey from Kiel. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Southampton, Oslo, London.",
      distance: "1065 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kiel to Southampton",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Southampton to Oslo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Oslo to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
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
          description: "Exploring Oslo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Scott Campbell",
        role: "Loyalty Program Representative",
        languages: ["English", "Polish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "midnight.symphony.of@velarivoyages.com",
          contactNumber: "+1-545-963-5544",
        },
      },
    ],
    title: "Midnight Symphony of the Aurora Veil",
    description:
      "Let the spirit of exploration guide your sublime journey from Kiel. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Southampton, Oslo, London.",
    rating: 4.3,
    tags: ["holiday-cruise", "sightseeing"],
  },
];
