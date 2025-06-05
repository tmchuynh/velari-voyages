import { Cruise } from "@/lib/interfaces/services/cruises";

export const southamptonCruises: Cruise[] = [
  {
    basePrice: 9223,
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
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
          city: "Dublin",
          country: "Ireland",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
      ],
      description:
        "Depart from iconic Southampton and traverse the Northern Europe with visits to London, Dublin, Amsterdam. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "854 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Southampton to London",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from London to Dublin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Dublin to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Southampton",
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
          description: "Exploring Dublin",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Elijah Chambers",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Polish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "ornate.solstice.of.t@velarivoyages.com",
          contactNumber: "+1-521-444-4021",
        },
      },
    ],
    title: "Ornate Solstice of the Iron Age Isles",
    description:
      "Depart from iconic Southampton and traverse the Northern Europe with visits to London, Dublin, Amsterdam. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.7,
    tags: ["tropical", "repositioning", "short-getaway"],
  },
  {
    basePrice: 5017,
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    arrivalLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
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
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "Sail away from Southampton into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Amsterdam, Oslo, London, Kiel, where history, nature, and cuisine collide.",
      distance: "712 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Southampton to Amsterdam",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Amsterdam to Oslo",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Oslo to London",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from London to Kiel",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Kiel to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Robert Hudson",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Polish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "azure.elevation.of.t@velarivoyages.com",
          contactNumber: "+1-837-871-5949",
        },
      },
    ],
    title: "Azure Elevation of the Timbered Waterfronts",
    description:
      "Sail away from Southampton into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Amsterdam, Oslo, London, Kiel, where history, nature, and cuisine collide.",
    rating: 4.7,
    tags: ["holiday-cruise", "cruise-ship", "nature"],
  },
  {
    basePrice: 7687,
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
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
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This handpicked whisper begins in Southampton and travels through Northern Europe's iconic waterscapes. Discover Oslo, Copenhagen, Amsterdam, St. Petersburg as each day brings new stories and every night offers elegant repose.",
      distance: "1445 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Southampton to Oslo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Oslo to Copenhagen",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Amsterdam to St. Petersburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
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
          end: "Day 14",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Roger Curtis",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Polish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
        contact: {
          contactEmail: "dreamlike.adventure.@velarivoyages.com",
          contactNumber: "+1-885-267-2772",
        },
      },
    ],
    title: "Dreamlike Adventure of the Windswept Elegance",
    description:
      "This handpicked whisper begins in Southampton and travels through Northern Europe's iconic waterscapes. Discover Oslo, Copenhagen, Amsterdam, St. Petersburg as each day brings new stories and every night offers elegant repose.",
    rating: 4.6,
    tags: ["cruise", "anniversary-cruise"],
  },
  {
    basePrice: 5717,
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    arrivalLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
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
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "Leave ordinary behind as you sail from Southampton across the captivating Northern Europe. Discover the distinctive personality of each destination, from Kiel, Copenhagen.",
      distance: "726 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Southampton to Kiel",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Kiel to Copenhagen",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Copenhagen to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Kyle Graves",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Polish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "tranquil.reverie.of.@velarivoyages.com",
          contactNumber: "+1-987-317-1256",
        },
      },
    ],
    title: "Tranquil Reverie of the Fairy Tale Villages",
    description:
      "Leave ordinary behind as you sail from Southampton across the captivating Northern Europe. Discover the distinctive personality of each destination, from Kiel, Copenhagen.",
    rating: 4.8,
    tags: ["short-getaway", "romantic", "luxury"],
  },
  {
    basePrice: 4652,
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    arrivalLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
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
        {
          city: "Dublin",
          country: "Ireland",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "Let the winds of the Northern Europe carry you from Southampton to the most stunning ports in the region. With destinations like Copenhagen, Dublin, Kiel, this excursion redefines luxury travel.",
      distance: "852 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Southampton to Copenhagen",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Copenhagen to Dublin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Dublin to Kiel",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Kiel to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Philip Warren",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Polish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "riveting.arcadia.of.@velarivoyages.com",
          contactNumber: "+1-210-399-2590",
        },
      },
    ],
    title: "Riveting Arcadia of the Twilight Fjords",
    description:
      "Let the winds of the Northern Europe carry you from Southampton to the most stunning ports in the region. With destinations like Copenhagen, Dublin, Kiel, this excursion redefines luxury travel.",
    rating: 4.3,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 6033,
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    arrivalLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
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
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "An unforgettable frontier awaits as you cruise from Southampton across Northern Europe. Dive into history, flavor, and culture with stops including Stockholm, St. Petersburg.",
      distance: "963 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Southampton to Stockholm",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Stockholm to St. Petersburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Victor Porter",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Polish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        contact: {
          contactEmail: "majestic.resonance.o@velarivoyages.com",
          contactNumber: "+1-141-774-4889",
        },
      },
    ],
    title: "Majestic Resonance of the Titanic Port",
    description:
      "An unforgettable frontier awaits as you cruise from Southampton across Northern Europe. Dive into history, flavor, and culture with stops including Stockholm, St. Petersburg.",
    rating: 4.9,
    tags: ["short-getaway", "general"],
  },
  {
    basePrice: 5231,
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
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
      ],
      description:
        "Begin your journey in Southampton, where tradition meets travel. This immersive oasis reveals the finest of Northern Europe, from the beaches of Tallinn to the streets of Oslo.",
      distance: "584 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Southampton to Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tallinn to Oslo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Oslo to St. Petersburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Willie Warren",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Polish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
        contact: {
          contactEmail: "whispering.embrace.o@velarivoyages.com",
          contactNumber: "+1-956-916-2500",
        },
      },
    ],
    title: "Whispering Embrace of the Maritime Crossroads",
    description:
      "Begin your journey in Southampton, where tradition meets travel. This immersive oasis reveals the finest of Northern Europe, from the beaches of Tallinn to the streets of Oslo.",
    rating: 5.0,
    tags: ["luxury", "wildlife", "cruise-holiday"],
  },
  {
    basePrice: 3991,
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    arrivalLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
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
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "Escape to sea from Southampton on a velvet voyage exploring the magic of Northern Europe. Visit unforgettable locales like Stockholm, Helsinki, Copenhagen, where each stop inspires awe.",
      distance: "1037 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Southampton to Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Stockholm to Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Helsinki to Copenhagen",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Copenhagen to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Lawrence Chambers",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Polish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "golden.frontier.of.t@velarivoyages.com",
          contactNumber: "+1-902-154-6592",
        },
      },
    ],
    title: "Golden Frontier of the Titanic Port",
    description:
      "Escape to sea from Southampton on a velvet voyage exploring the magic of Northern Europe. Visit unforgettable locales like Stockholm, Helsinki, Copenhagen, where each stop inspires awe.",
    rating: 4.8,
    tags: ["nature"],
  },
  {
    basePrice: 7743,
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    arrivalLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "Sail into splendor from Southampton on a radiant voyage through Northern Europe. Let each stop—from Kiel to Stockholm—reveal the unique flavors and colors of the region.",
      distance: "500 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Southampton to Kiel",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Kiel to Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Stockholm to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Mateo Dunn",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Polish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
        contact: {
          contactEmail: "radiancedrenched.tid@velarivoyages.com",
          contactNumber: "+1-700-973-9093",
        },
      },
    ],
    title: "Radiance-Drenched Tide of the Fog-Bound Gateway",
    description:
      "Sail into splendor from Southampton on a radiant voyage through Northern Europe. Let each stop—from Kiel to Stockholm—reveal the unique flavors and colors of the region.",
    rating: 4.5,
    tags: ["seasonal", "adventure"],
  },
  {
    basePrice: 4177,
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 50.9097,
        longitude: -1.4044,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Southampton",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
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
      ],
      description:
        "Sail away from Southampton into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Kiel, Berlin, Amsterdam, where history, nature, and cuisine collide.",
      distance: "502 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Southampton to Kiel",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Kiel to Berlin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Berlin to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Southampton",
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
          description: "Exploring Berlin",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Darrell Crawford",
        role: "Marketing Coordinator",
        languages: ["English", "Portuguese", "Polish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        contact: {
          contactEmail: "floating.retreat.of.@velarivoyages.com",
          contactNumber: "+1-324-194-6919",
        },
      },
    ],
    title: "Floating Retreat of the Echoes of Steam",
    description:
      "Sail away from Southampton into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Kiel, Berlin, Amsterdam, where history, nature, and cuisine collide.",
    rating: 4.3,
    tags: ["short-getaway", "cruise-vacation"],
  },
];
