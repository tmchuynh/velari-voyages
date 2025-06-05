import { Cruise } from "@/lib/interfaces/services/cruises";

export const dublinCruises: Cruise[] = [
  {
    basePrice: 3522,
    departureLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    arrivalLocation: {
      city: "Helsinki",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
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
          city: "Helsinki",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Step aboard in Dublin and begin a legendary journey through the scenic Northern Europe. From historic cities to coastal hideaways like London, Helsinki, every day is unforgettable.",
      distance: "649 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Dublin to London",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from London to Helsinki",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Nash",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Italian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "majestic.discovery.o@velarivoyages.com",
          contactNumber: "+1-732-980-8814",
        },
      },
    ],
    title: "Majestic Discovery of the Timbered Waterfronts",
    description:
      "Step aboard in Dublin and begin a legendary journey through the scenic Northern Europe. From historic cities to coastal hideaways like London, Helsinki, every day is unforgettable.",
    rating: 4.1,
    tags: ["relaxation", "anniversary-cruise"],
  },
  {
    basePrice: 3868,
    departureLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
          city: "Stockholm",
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
      ],
      description:
        "Begin an epic mystique from Dublin, where the seas meet culture. Visit the remarkable ports of Oslo, Stockholm, Tallinn while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1489 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dublin to Oslo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Oslo to Stockholm",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Stockholm to Tallinn",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "John Jennings",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Italian"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "forbidden.mystique.o@velarivoyages.com",
          contactNumber: "+1-668-299-4552",
        },
      },
    ],
    title: "Forbidden Mystique of the Crown Jewel Capitals",
    description:
      "Begin an epic mystique from Dublin, where the seas meet culture. Visit the remarkable ports of Oslo, Stockholm, Tallinn while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.4,
    tags: ["family-friendly"],
  },
  {
    basePrice: 8995,
    departureLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    arrivalLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
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
          city: "Stockholm",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this hidden tranquility departing Dublin. Savor local cuisine and uncover regional beauty from London to Stockholm.",
      distance: "1151 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dublin to London",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from London to Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Stockholm to Dublin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Dublin",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Morgan",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Italian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "hidden.exploration.o@velarivoyages.com",
          contactNumber: "+1-132-386-8202",
        },
      },
    ],
    title: "Hidden Exploration of the Emerald Gateway",
    description:
      "Cruise into cultural richness aboard this hidden tranquility departing Dublin. Savor local cuisine and uncover regional beauty from London to Stockholm.",
    rating: 5.0,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 4699,
    departureLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    arrivalLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
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
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your mythic journey from Dublin. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like London, Helsinki, Kiel, St. Petersburg.",
      distance: "1335 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Dublin to London",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from London to Helsinki",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Helsinki to Kiel",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Kiel to St. Petersburg",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Dublin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Dublin",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Parker",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Italian"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "harmonic.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-994-924-5231",
        },
      },
    ],
    title: "Harmonic Labyrinth of the Emerald Gateway",
    description:
      "Let the spirit of exploration guide your mythic journey from Dublin. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like London, Helsinki, Kiel, St. Petersburg.",
    rating: 4.6,
    tags: ["repositioning"],
  },
  {
    basePrice: 8355,
    departureLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
        {
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "This panoramic mythos begins in Dublin and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Kiel, Southampton, Tallinn, Berlin.",
      distance: "1011 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Dublin to Kiel",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Kiel to Southampton",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Southampton to Tallinn",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tallinn to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Southampton",
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
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Logan Reed",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Italian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "mesmerizing.whisper.@velarivoyages.com",
          contactNumber: "+1-161-102-9982",
        },
      },
    ],
    title: "Mesmerizing Whisper of the Literary Capital",
    description:
      "This panoramic mythos begins in Dublin and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Kiel, Southampton, Tallinn, Berlin.",
    rating: 4.8,
    tags: ["short-getaway", "VIP"],
  },
  {
    basePrice: 1310,
    departureLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "This drift takes you beyond the ordinary, starting in Dublin. With breathtaking stops in Helsinki, Copenhagen, London, Berlin, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1318 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Dublin to Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Helsinki to Copenhagen",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Copenhagen to London",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from London to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joseph Porter",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Italian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "sublime.serenade.of.@velarivoyages.com",
          contactNumber: "+1-752-430-6523",
        },
      },
    ],
    title: "Sublime Serenade of the Emerald Gateway",
    description:
      "This drift takes you beyond the ordinary, starting in Dublin. With breathtaking stops in Helsinki, Copenhagen, London, Berlin, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.1,
    tags: ["wildlife", "exclusive"],
  },
  {
    basePrice: 1824,
    departureLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    arrivalLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
          },
        },
      ],
      description:
        "Escape the everyday with this majestic journey through Northern Europe, departing from Dublin. You'll visit Kiel, Oslo, where every stop is a new adventure.",
      distance: "1379 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Dublin to Kiel",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Kiel to Oslo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Oslo to Dublin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Kiel",
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
          description: "Exploring Dublin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Dean",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Italian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
        contact: {
          contactEmail: "luxurious.sanctuary.@velarivoyages.com",
          contactNumber: "+1-727-510-7165",
        },
      },
    ],
    title: "Luxurious Sanctuary of the City of Quiet Fire",
    description:
      "Escape the everyday with this majestic journey through Northern Europe, departing from Dublin. You'll visit Kiel, Oslo, where every stop is a new adventure.",
    rating: 4.5,
    tags: ["culinary", "cruise-journey"],
  },
  {
    basePrice: 1297,
    departureLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    arrivalLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
          },
        },
      ],
      description:
        "Depart Dublin on a relaxing reunion through the Northern Europe region. Highlights include the stunning coastlines of Oslo, St. Petersburg, Berlin, Copenhagen, all while enjoying first-class amenities on board.",
      distance: "588 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Dublin to Oslo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Oslo to St. Petersburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Berlin",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Berlin to Copenhagen",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Copenhagen to Dublin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Dublin",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Eugene Murray",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Italian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "starlit.zenith.of.th@velarivoyages.com",
          contactNumber: "+1-612-564-4430",
        },
      },
    ],
    title: "Starlit Zenith of the Nordic Waters",
    description:
      "Depart Dublin on a relaxing reunion through the Northern Europe region. Highlights include the stunning coastlines of Oslo, St. Petersburg, Berlin, Copenhagen, all while enjoying first-class amenities on board.",
    rating: 4.5,
    tags: ["nature"],
  },
  {
    basePrice: 8238,
    departureLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    arrivalLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
          city: "Stockholm",
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
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
          },
        },
      ],
      description:
        "Sail away from Dublin into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Oslo, Stockholm, Tallinn, where history, nature, and cuisine collide.",
      distance: "1013 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Dublin to Oslo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Oslo to Stockholm",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Stockholm to Tallinn",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tallinn to Dublin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Dublin",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Joe Stewart",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Italian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "pearlescent.journey.@velarivoyages.com",
          contactNumber: "+1-228-372-7970",
        },
      },
    ],
    title: "Pearlescent Journey of the Snow-Kissed Harbors",
    description:
      "Sail away from Dublin into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Oslo, Stockholm, Tallinn, where history, nature, and cuisine collide.",
    rating: 5.0,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 1942,
    departureLocation: {
      city: "Dublin",
      country: "Ireland",
      region: "Northern Europe",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    arrivalLocation: {
      city: "Helsinki",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Dublin",
          country: "Ireland",
          region: "Northern Europe",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
      ],
      description:
        "This inspiring mirage departs from Dublin, navigating the diverse landscapes and vibrant cities of Northern Europe. Must-see stops include Tallinn, Helsinki.",
      distance: "1197 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Dublin to Tallinn",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Tallinn to Helsinki",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Eric Campbell",
        role: "Loyalty Program Representative",
        languages: ["English", "Finnish", "Italian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "gilded.wanderlust.of@velarivoyages.com",
          contactNumber: "+1-353-284-1506",
        },
      },
    ],
    title: "Gilded Wanderlust of the Runestone Realms",
    description:
      "This inspiring mirage departs from Dublin, navigating the diverse landscapes and vibrant cities of Northern Europe. Must-see stops include Tallinn, Helsinki.",
    rating: 4.3,
    tags: ["cruise-experience"],
  },
];
