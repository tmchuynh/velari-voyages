import { Cruise } from "@/lib/interfaces/services/cruises";

export const copenhagenCruises: Cruise[] = [
  {
    basePrice: 1949,
    departureLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
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
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Sail into splendor from Copenhagen on a harmonic voyage through Northern Europe. Let each stop—from Dublin to Kiel—reveal the unique flavors and colors of the region.",
      distance: "647 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Copenhagen to Dublin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Dublin to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Kiel to Amsterdam",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Amsterdam to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Dublin",
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
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Henderson",
        role: "Group Booking Coordinator",
        languages: ["English", "Norwegian", "Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "heavenly.realm.of.th@velarivoyages.com",
          contactNumber: "+1-399-672-7226",
        },
      },
    ],
    title: "Heavenly Realm of the Frosted Serenity",
    description:
      "Sail into splendor from Copenhagen on a harmonic voyage through Northern Europe. Let each stop—from Dublin to Kiel—reveal the unique flavors and colors of the region.",
    rating: 4.1,
    tags: ["culinary", "cruise-holiday", "themed-cruise"],
  },
  {
    basePrice: 3217,
    departureLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Begin an epic serenade from Copenhagen, where the seas meet culture. Visit the remarkable ports of Amsterdam, Stockholm while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1386 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Amsterdam to Stockholm",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Stockholm to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sophia Mitchell",
        role: "Group Booking Coordinator",
        languages: ["English", "Norwegian", "Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "horizonkissed.embrac@velarivoyages.com",
          contactNumber: "+1-829-462-4128",
        },
      },
    ],
    title: "Horizon-Kissed Embrace of the Frosted Kingdoms",
    description:
      "Begin an epic serenade from Copenhagen, where the seas meet culture. Visit the remarkable ports of Amsterdam, Stockholm while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.3,
    tags: ["relaxation", "nature", "expedition"],
  },
  {
    basePrice: 1754,
    departureLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
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
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
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
      ],
      description:
        "Sail away from the charming harbor of Copenhagen on this tide-washed journey across Northern Europe. Uncover the beauty and history of Helsinki, Tallinn, Oslo with curated excursions, world-class cuisine, and exceptional service.",
      distance: "861 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Copenhagen to Helsinki",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Helsinki to Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Tallinn to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Copenhagen",
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
          description: "Exploring Tallinn",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Montgomery",
        role: "Group Booking Coordinator",
        languages: ["English", "Norwegian", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
        contact: {
          contactEmail: "sundrenched.mirage.o@velarivoyages.com",
          contactNumber: "+1-409-531-2619",
        },
      },
    ],
    title: "Sun-Drenched Mirage of the Harbor of Hygge",
    description:
      "Sail away from the charming harbor of Copenhagen on this tide-washed journey across Northern Europe. Uncover the beauty and history of Helsinki, Tallinn, Oslo with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.1,
    tags: ["exclusive", "cruise-line", "family-friendly"],
  },
  {
    basePrice: 4043,
    departureLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
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
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Begin an epic awakening from Copenhagen, where the seas meet culture. Visit the remarkable ports of Tallinn, Oslo, Helsinki while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "597 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Copenhagen to Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Tallinn to Oslo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Oslo to Helsinki",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Helsinki to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Zoe Keller",
        role: "Group Booking Coordinator",
        languages: ["English", "Norwegian", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
        contact: {
          contactEmail: "verdant.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-223-679-1144",
        },
      },
    ],
    title: "Verdant Sojourn of the Runestone Realms",
    description:
      "Begin an epic awakening from Copenhagen, where the seas meet culture. Visit the remarkable ports of Tallinn, Oslo, Helsinki while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.2,
    tags: ["expedition"],
  },
  {
    basePrice: 9707,
    departureLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Start in the vibrant city of Copenhagen and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Dublin, Stockholm.",
      distance: "1332 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Copenhagen to Dublin",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Dublin to Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Stockholm to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Abigail Bennett",
        role: "Group Booking Coordinator",
        languages: ["English", "Norwegian", "Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "aweinspiring.journey@velarivoyages.com",
          contactNumber: "+1-710-415-8664",
        },
      },
    ],
    title: "Awe-Inspiring Journey of the Scandinavian Pearl",
    description:
      "Start in the vibrant city of Copenhagen and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Dublin, Stockholm.",
    rating: 4.6,
    tags: ["historical", "seasonal", "long-distance"],
  },
  {
    basePrice: 9760,
    departureLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "This handpicked adventure begins in Copenhagen and travels through Northern Europe's iconic waterscapes. Discover Oslo, Tallinn as each day brings new stories and every night offers elegant repose.",
      distance: "655 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to Oslo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Oslo to Tallinn",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Tallinn to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Copenhagen",
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
          description: "Exploring Tallinn",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Olivia Hayes",
        role: "Group Booking Coordinator",
        languages: ["English", "Norwegian", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "luxurious.lullaby.of@velarivoyages.com",
          contactNumber: "+1-531-753-9645",
        },
      },
    ],
    title: "Luxurious Lullaby of the Glacial Reflections",
    description:
      "This handpicked adventure begins in Copenhagen and travels through Northern Europe's iconic waterscapes. Discover Oslo, Tallinn as each day brings new stories and every night offers elegant repose.",
    rating: 4.9,
    tags: ["seasonal", "nature", "cruise-ship"],
  },
  {
    basePrice: 3427,
    departureLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
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
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
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
      ],
      description:
        "Escape to sea from Copenhagen on a ornate voyage exploring the magic of Northern Europe. Visit unforgettable locales like Kiel, Tallinn, where each stop inspires awe.",
      distance: "1089 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Copenhagen to Kiel",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Kiel to Tallinn",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Rachel Fletcher",
        role: "Group Booking Coordinator",
        languages: ["English", "Norwegian", "Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "crystalline.oasis.of@velarivoyages.com",
          contactNumber: "+1-776-973-7823",
        },
      },
    ],
    title: "Crystalline Oasis of the Runestone Realms",
    description:
      "Escape to sea from Copenhagen on a ornate voyage exploring the magic of Northern Europe. Visit unforgettable locales like Kiel, Tallinn, where each stop inspires awe.",
    rating: 4.4,
    tags: ["culinary", "historical"],
  },
  {
    basePrice: 6929,
    departureLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
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
          city: "Stockholm",
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
          city: "Helsinki",
          country: "Finland",
          coordinates: {
            latitude: 60.1695,
            longitude: 24.9354,
          },
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this spectacular labyrinth beginning in Copenhagen. Visit breathtaking Northern Europe locales such as Oslo, Stockholm, London, Helsinki on this unforgettable itinerary.",
      distance: "1420 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to Oslo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Oslo to Stockholm",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Stockholm to London",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from London to Helsinki",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Helsinki to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sarah Wallace",
        role: "Group Booking Coordinator",
        languages: ["English", "Norwegian", "Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/87.jpg",
        contact: {
          contactEmail: "sundrenched.serenade@velarivoyages.com",
          contactNumber: "+1-313-287-4157",
        },
      },
    ],
    title: "Sun-Drenched Serenade of the Scandinavian Pearl",
    description:
      "Enjoy seamless luxury on this spectacular labyrinth beginning in Copenhagen. Visit breathtaking Northern Europe locales such as Oslo, Stockholm, London, Helsinki on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["culinary"],
  },
  {
    basePrice: 6868,
    departureLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
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
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
        "An unforgettable adventure awaits as you cruise from Copenhagen across Northern Europe. Dive into history, flavor, and culture with stops including Amsterdam, Helsinki, Berlin, St. Petersburg.",
      distance: "1239 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Amsterdam to Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Helsinki to Berlin",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Berlin to St. Petersburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Amsterdam",
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
          description: "Exploring Berlin",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Dunn",
        role: "Group Booking Coordinator",
        languages: ["English", "Norwegian", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "radiant.frontier.of.@velarivoyages.com",
          contactNumber: "+1-747-940-7361",
        },
      },
    ],
    title: "Radiant Frontier of the Frosted Kingdoms",
    description:
      "An unforgettable adventure awaits as you cruise from Copenhagen across Northern Europe. Dive into history, flavor, and culture with stops including Amsterdam, Helsinki, Berlin, St. Petersburg.",
    rating: 4.8,
    tags: ["anniversary-cruise", "glacier-cruise", "tropical"],
  },
  {
    basePrice: 8064,
    departureLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Northern Europe",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
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
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Step aboard in Copenhagen and begin a heavenly journey through the scenic Northern Europe. From historic cities to coastal hideaways like London, Amsterdam, every day is unforgettable.",
      distance: "1250 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Copenhagen to London",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from London to Amsterdam",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Amsterdam to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adeline Foster",
        role: "Group Booking Coordinator",
        languages: ["English", "Norwegian", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "floating.lullaby.of.@velarivoyages.com",
          contactNumber: "+1-856-386-5433",
        },
      },
    ],
    title: "Floating Lullaby of the Scandinavian Pearl",
    description:
      "Step aboard in Copenhagen and begin a heavenly journey through the scenic Northern Europe. From historic cities to coastal hideaways like London, Amsterdam, every day is unforgettable.",
    rating: 4.9,
    tags: ["expedition", "fall-cruise", "repositioning"],
  },
];
