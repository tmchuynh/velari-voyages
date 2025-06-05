import { Cruise } from "@/lib/interfaces/services/cruises";

export const osloCruises: Cruise[] = [
  {
    basePrice: 5897,
    departureLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    arrivalLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
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
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
      ],
      description:
        "Join us in Oslo for a oasis of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like Kiel, Tallinn, Copenhagen where timeless traditions meet modern luxuries.",
      distance: "1208 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Oslo to Kiel",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Kiel to Tallinn",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Tallinn to Copenhagen",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Copenhagen to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Kiel",
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
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alice Gardner",
        role: "Travel Advisor",
        languages: ["English", "Italian", "Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "idyllic.enigma.of.th@velarivoyages.com",
          contactNumber: "+1-270-116-7631",
        },
      },
    ],
    title: "Idyllic Enigma of the Saga-Strewn Coastlines",
    description:
      "Join us in Oslo for a oasis of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like Kiel, Tallinn, Copenhagen where timeless traditions meet modern luxuries.",
    rating: 4.8,
    tags: ["repositioning", "cruise-experience", "seasonal"],
  },
  {
    basePrice: 2454,
    departureLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    arrivalLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
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
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
      ],
      description:
        "From bustling Oslo to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Kiel, Southampton, St. Petersburg deliver a balanced blend of culture and comfort.",
      distance: "1147 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Oslo to Kiel",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Kiel to Southampton",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Southampton to St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Joan Clark",
        role: "Travel Advisor",
        languages: ["English", "Italian", "Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "pristine.serenade.of@velarivoyages.com",
          contactNumber: "+1-618-250-2932",
        },
      },
    ],
    title: "Pristine Serenade of the Timbered Waterfronts",
    description:
      "From bustling Oslo to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Kiel, Southampton, St. Petersburg deliver a balanced blend of culture and comfort.",
    rating: 4.6,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 4141,
    departureLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
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
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
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
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Escape the everyday with this enchanting journey through Northern Europe, departing from Oslo. You'll visit Kiel, Tallinn, Helsinki, Copenhagen, where every stop is a new adventure.",
      distance: "1351 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Oslo to Kiel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Kiel to Tallinn",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Tallinn to Helsinki",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Helsinki to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Layla Douglas",
        role: "Travel Advisor",
        languages: ["English", "Italian", "Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/15.jpg",
        contact: {
          contactEmail: "horizonkissed.fronti@velarivoyages.com",
          contactNumber: "+1-101-364-2479",
        },
      },
    ],
    title: "Horizon-Kissed Frontier of the Saga-Strewn Coastlines",
    description:
      "Escape the everyday with this enchanting journey through Northern Europe, departing from Oslo. You'll visit Kiel, Tallinn, Helsinki, Copenhagen, where every stop is a new adventure.",
    rating: 4.7,
    tags: ["seasonal", "anniversary-cruise", "expedition"],
  },
  {
    basePrice: 4461,
    departureLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
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
          city: "Southampton",
          country: "United Kingdom",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "Unwind and explore on this resonance through Northern Europe, departing from Oslo. With every stop—from Stockholm to Southampton—you’ll collect memories that last a lifetime.",
      distance: "1111 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Oslo to Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Stockholm to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Brooklyn Griffin",
        role: "Travel Advisor",
        languages: ["English", "Italian", "Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "pristine.panorama.of@velarivoyages.com",
          contactNumber: "+1-244-476-5345",
        },
      },
    ],
    title: "Pristine Panorama of the Timbered Waterfronts",
    description:
      "Unwind and explore on this resonance through Northern Europe, departing from Oslo. With every stop—from Stockholm to Southampton—you’ll collect memories that last a lifetime.",
    rating: 4.2,
    tags: ["repositioning", "seasonal"],
  },
  {
    basePrice: 4202,
    departureLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
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
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Set off on a tide from Oslo that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Dublin, Helsinki, London, Copenhagen.",
      distance: "526 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Oslo to Dublin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Dublin to Helsinki",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Helsinki to London",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from London to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Katherine Hall",
        role: "Travel Advisor",
        languages: ["English", "Italian", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "eternal.expedition.o@velarivoyages.com",
          contactNumber: "+1-657-190-4455",
        },
      },
    ],
    title: "Eternal Expedition of the Iron Age Isles",
    description:
      "Set off on a tide from Oslo that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Dublin, Helsinki, London, Copenhagen.",
    rating: 4.2,
    tags: ["culinary", "relaxation"],
  },
  {
    basePrice: 6027,
    departureLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    arrivalLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
    itinerary: {
      route: [
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
      ],
      description:
        "Your journey through the Northern Europe begins in Oslo, where elegance meets adventure. Explore the shores of Stockholm, Kiel, with curated excursions and luxurious onboard amenities.",
      distance: "930 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Oslo to Stockholm",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Stockholm to Kiel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Kiel to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Kiel",
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
        name: "Rebecca Parker",
        role: "Travel Advisor",
        languages: ["English", "Italian", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "opulent.arcadia.of.t@velarivoyages.com",
          contactNumber: "+1-187-515-7371",
        },
      },
    ],
    title: "Opulent Arcadia of the Crown Jewel Capitals",
    description:
      "Your journey through the Northern Europe begins in Oslo, where elegance meets adventure. Explore the shores of Stockholm, Kiel, with curated excursions and luxurious onboard amenities.",
    rating: 4.3,
    tags: ["cruise-journey"],
  },
  {
    basePrice: 8608,
    departureLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
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
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
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
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "This extraordinary passage from Oslo offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Stockholm and Berlin, creating memories that will last a lifetime.",
      distance: "1250 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Oslo to Stockholm",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Stockholm to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Valentina Graves",
        role: "Travel Advisor",
        languages: ["English", "Italian", "Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "epic.enigma.of.the.r@velarivoyages.com",
          contactNumber: "+1-637-972-7498",
        },
      },
    ],
    title: "Epic Enigma of the Runestone Realms",
    description:
      "This extraordinary passage from Oslo offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Stockholm and Berlin, creating memories that will last a lifetime.",
    rating: 4.2,
    tags: ["fall-cruise", "historical"],
  },
  {
    basePrice: 8900,
    departureLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    arrivalLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
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
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
      ],
      description:
        "Board in Oslo for a hand-crafted frontier through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Amsterdam, Stockholm, Dublin, Southampton.",
      distance: "834 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Oslo to Amsterdam",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Amsterdam to Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Stockholm to Dublin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Dublin to Southampton",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Southampton to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Oslo",
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
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Virginia Grant",
        role: "Travel Advisor",
        languages: ["English", "Italian", "Spanish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/58.jpg",
        contact: {
          contactEmail: "mesmerizing.retreat.@velarivoyages.com",
          contactNumber: "+1-879-586-9045",
        },
      },
    ],
    title: "Mesmerizing Retreat of the Aurora Veil",
    description:
      "Board in Oslo for a hand-crafted frontier through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Amsterdam, Stockholm, Dublin, Southampton.",
    rating: 4.2,
    tags: ["luxury", "cruise-ship"],
  },
  {
    basePrice: 5330,
    departureLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    arrivalLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
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
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
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
          country: "Norway",
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
      ],
      description:
        "Begin an epic realm from Oslo, where the seas meet culture. Visit the remarkable ports of St. Petersburg, Southampton, Berlin while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1268 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Oslo to St. Petersburg",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Southampton",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Southampton to Berlin",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Berlin to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Carol Douglas",
        role: "Travel Advisor",
        languages: ["English", "Italian", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "secret.pilgrimage.of@velarivoyages.com",
          contactNumber: "+1-823-972-7292",
        },
      },
    ],
    title: "Secret Pilgrimage of the Crown Jewel Capitals",
    description:
      "Begin an epic realm from Oslo, where the seas meet culture. Visit the remarkable ports of St. Petersburg, Southampton, Berlin while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.7,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 6440,
    departureLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    arrivalLocation: {
      city: "Oslo",
      country: "Norway",
      region: "Northern Europe",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
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
          city: "Oslo",
          country: "Norway",
          region: "Northern Europe",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
      ],
      description:
        "Let the waves lead you from Oslo on this forbidden awakening. Traverse the iconic waters of Northern Europe and discover the beauty of Southampton, Amsterdam, Dublin.",
      distance: "1121 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Oslo to Southampton",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Southampton to Amsterdam",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Amsterdam to Dublin",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Dublin to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Oslo",
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
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Janet Chambers",
        role: "Travel Advisor",
        languages: ["English", "Italian", "Spanish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
        contact: {
          contactEmail: "starlit.quest.of.the@velarivoyages.com",
          contactNumber: "+1-598-988-5230",
        },
      },
    ],
    title: "Starlit Quest of the Snow-Kissed Harbors",
    description:
      "Let the waves lead you from Oslo on this forbidden awakening. Traverse the iconic waters of Northern Europe and discover the beauty of Southampton, Amsterdam, Dublin.",
    rating: 4.0,
    tags: ["cruise-getaway", "glacier-cruise"],
  },
];
