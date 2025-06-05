import { Cruise } from "@/lib/interfaces/services/cruises";

export const amsterdamCruises: Cruise[] = [
  {
    basePrice: 5631,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
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
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "Board in Amsterdam for a hand-crafted exploration through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Southampton, St. Petersburg, Kiel, London.",
      distance: "1190 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Amsterdam to Southampton",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Southampton to St. Petersburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Kiel",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Kiel to London",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from London to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thabo Henderson",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "charming.saga.of.the@velarivoyages.com",
          contactNumber: "+1-534-306-8411",
        },
      },
    ],
    title: "Charming Saga of the Dutch Jewel",
    description:
      "Board in Amsterdam for a hand-crafted exploration through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Southampton, St. Petersburg, Kiel, London.",
    rating: 4.9,
    tags: ["seasonal", "cruise-vacation"],
  },
  {
    basePrice: 4536,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
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
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
        "Depart from Amsterdam on this thoughtfully designed enigma across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Tallinn, Berlin.",
      distance: "1398 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Amsterdam to Tallinn",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Tallinn to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Mason Campbell",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "extraordinary.fronti@velarivoyages.com",
          contactNumber: "+1-377-667-5988",
        },
      },
    ],
    title: "Extraordinary Frontier of the Mist-Wrapped Lattices",
    description:
      "Depart from Amsterdam on this thoughtfully designed enigma across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Tallinn, Berlin.",
    rating: 4.3,
    tags: ["nature", "general"],
  },
  {
    basePrice: 1123,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "Sail into splendor from Amsterdam on a charming voyage through Northern Europe. Let each stop—from Helsinki to London—reveal the unique flavors and colors of the region.",
      distance: "862 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Amsterdam to Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Helsinki to London",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from London to Dublin",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Dublin to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Robert Lawson",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "luxurious.oasis.of.t@velarivoyages.com",
          contactNumber: "+1-224-206-1453",
        },
      },
    ],
    title: "Luxurious Oasis of the Canal Crown",
    description:
      "Sail into splendor from Amsterdam on a charming voyage through Northern Europe. Let each stop—from Helsinki to London—reveal the unique flavors and colors of the region.",
    rating: 4.5,
    tags: ["seasonal", "cruise-getaway"],
  },
  {
    basePrice: 5037,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Dublin",
      country: "Ireland",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
          city: "Southampton",
          country: "United Kingdom",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
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
      ],
      description:
        "Cruise into cultural richness aboard this eternal escape departing Amsterdam. Savor local cuisine and uncover regional beauty from Oslo to Southampton.",
      distance: "1463 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Amsterdam to Oslo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Oslo to Southampton",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Southampton to Dublin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Dublin",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Robert Baker",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/26.jpg",
        contact: {
          contactEmail: "tidewashed.serenade.@velarivoyages.com",
          contactNumber: "+1-140-157-6389",
        },
      },
    ],
    title: "Tide-Washed Serenade of the Waterborne Enigma",
    description:
      "Cruise into cultural richness aboard this eternal escape departing Amsterdam. Savor local cuisine and uncover regional beauty from Oslo to Southampton.",
    rating: 4.7,
    tags: ["weekend-cruise", "historical"],
  },
  {
    basePrice: 1152,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Dublin",
      country: "Ireland",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
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
      ],
      description:
        "Set course from Amsterdam for an inspiring extraordinary journey across Northern Europe. Whether exploring ancient ruins in Helsinki or soaking up coastal views in London, every day offers a perfect mix of discovery and relaxation.",
      distance: "1382 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Amsterdam to Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Helsinki to London",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from London to Dublin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Dublin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jeffrey Hudson",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "captivating.odyssey.@velarivoyages.com",
          contactNumber: "+1-688-550-2417",
        },
      },
    ],
    title: "Captivating Odyssey of the Timbered Waterfronts",
    description:
      "Set course from Amsterdam for an inspiring extraordinary journey across Northern Europe. Whether exploring ancient ruins in Helsinki or soaking up coastal views in London, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.1,
    tags: ["historical", "cruise-experience"],
  },
  {
    basePrice: 9884,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
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
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "Set sail from Amsterdam for a voyage like no other. From the picturesque landscapes of Berlin to the lively ambiance of London, this forbidden cruise will redefine your view of Northern Europe.",
      distance: "880 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Amsterdam to Berlin",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Berlin to London",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from London to Stockholm",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Stockholm to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Amsterdam",
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
          description: "Exploring London",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Darrell Griffin",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "luxurious.realm.of.t@velarivoyages.com",
          contactNumber: "+1-553-222-5355",
        },
      },
    ],
    title: "Luxurious Realm of the Fairy Tale Villages",
    description:
      "Set sail from Amsterdam for a voyage like no other. From the picturesque landscapes of Berlin to the lively ambiance of London, this forbidden cruise will redefine your view of Northern Europe.",
    rating: 4.1,
    tags: ["cruise-line", "short-getaway", "wellness"],
  },
  {
    basePrice: 8394,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
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
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
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
          city: "Southampton",
          country: "United Kingdom",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Amsterdam. This reflection through the Northern Europe unveils stunning stops including St. Petersburg, Southampton, all with first-class service.",
      distance: "865 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Amsterdam to St. Petersburg",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Amsterdam",
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
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Mateo Hunter",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "serene.saga.of.the.m@velarivoyages.com",
          contactNumber: "+1-675-188-5357",
        },
      },
    ],
    title: "Serene Saga of the Mist-Wrapped Lattices",
    description:
      "Step into a world of elegance and exploration from Amsterdam. This reflection through the Northern Europe unveils stunning stops including St. Petersburg, Southampton, all with first-class service.",
    rating: 4.7,
    tags: ["expedition"],
  },
  {
    basePrice: 6593,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
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
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "This handpicked reflection begins in Amsterdam and travels through Northern Europe's iconic waterscapes. Discover Tallinn, Copenhagen, Berlin as each day brings new stories and every night offers elegant repose.",
      distance: "782 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Amsterdam to Tallinn",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Tallinn to Copenhagen",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Copenhagen to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Amsterdam",
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
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joseph Lawson",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "heavenly.horizon.of.@velarivoyages.com",
          contactNumber: "+1-617-730-7472",
        },
      },
    ],
    title: "Heavenly Horizon of the Waterborne Enigma",
    description:
      "This handpicked reflection begins in Amsterdam and travels through Northern Europe's iconic waterscapes. Discover Tallinn, Copenhagen, Berlin as each day brings new stories and every night offers elegant repose.",
    rating: 4.3,
    tags: ["long-distance", "wildlife", "cruise-line"],
  },
  {
    basePrice: 8478,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "From bustling Amsterdam to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Tallinn, London deliver a balanced blend of culture and comfort.",
      distance: "1253 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Amsterdam to Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tallinn to London",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from London to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Hunter",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "pristine.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-853-846-3115",
        },
      },
    ],
    title: "Pristine Odyssey of the Canal Crown",
    description:
      "From bustling Amsterdam to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Tallinn, London deliver a balanced blend of culture and comfort.",
    rating: 4.9,
    tags: ["general"],
  },
  {
    basePrice: 8329,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "Depart from the iconic port of Amsterdam and sail through the enchanting Northern Europe. Explore vibrant destinations like Tallinn, Berlin, Southampton, Helsinki, each offering its own unique charm and local flair.",
      distance: "1256 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Amsterdam to Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tallinn to Berlin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Berlin to Southampton",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Southampton to Helsinki",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Sailing from Helsinki to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tallinn",
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
          description: "Exploring Southampton",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 19",
          end: "Day 19",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mason Keller",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "pearlescent.odyssey.@velarivoyages.com",
          contactNumber: "+1-572-946-3530",
        },
      },
    ],
    title: "Pearlescent Odyssey of the Saga-Strewn Coastlines",
    description:
      "Depart from the iconic port of Amsterdam and sail through the enchanting Northern Europe. Explore vibrant destinations like Tallinn, Berlin, Southampton, Helsinki, each offering its own unique charm and local flair.",
    rating: 5.0,
    tags: ["relaxation"],
  },
  {
    basePrice: 7574,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
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
        {
          city: "Dublin",
          country: "Ireland",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "Set sail from Amsterdam for a voyage like no other. From the picturesque landscapes of Southampton to the lively ambiance of Dublin, this transcendent cruise will redefine your view of Northern Europe.",
      distance: "802 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Amsterdam to Southampton",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Southampton to Dublin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Dublin to Berlin",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Berlin to Oslo",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Oslo to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Christopher Dixon",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "luminous.realm.of.th@velarivoyages.com",
          contactNumber: "+1-840-603-9684",
        },
      },
    ],
    title: "Luminous Realm of the Mist-Wrapped Lattices",
    description:
      "Set sail from Amsterdam for a voyage like no other. From the picturesque landscapes of Southampton to the lively ambiance of Dublin, this transcendent cruise will redefine your view of Northern Europe.",
    rating: 4.8,
    tags: ["holiday-cruise", "cruise-excursion"],
  },
  {
    basePrice: 5544,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
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
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this sun-drenched serenade through Northern Europe, starting from the illustrious port of Amsterdam. From Stockholm, Tallinn, Dublin to Copenhagen, each destination offers its own story, culture, and breathtaking views.",
      distance: "768 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Amsterdam to Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Stockholm to Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Tallinn to Dublin",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Dublin to Copenhagen",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Amsterdam",
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
          description: "Exploring Tallinn",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Peter Griffin",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        contact: {
          contactEmail: "starlit.adventure.of@velarivoyages.com",
          contactNumber: "+1-347-619-2778",
        },
      },
    ],
    title: "Starlit Adventure of the Mist-Wrapped Lattices",
    description:
      "Experience the elegance of the seas on this sun-drenched serenade through Northern Europe, starting from the illustrious port of Amsterdam. From Stockholm, Tallinn, Dublin to Copenhagen, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.6,
    tags: ["VIP", "repositioning"],
  },
  {
    basePrice: 7123,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
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
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
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
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "Sail from Amsterdam into a world of wonder. The Northern Europe beckons with unforgettable ports like Helsinki, Copenhagen, Southampton, Dublin, where every view is picture-perfect and every moment is priceless.",
      distance: "1157 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Amsterdam to Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Helsinki to Copenhagen",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Copenhagen to Southampton",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Southampton to Dublin",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Dublin to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Harry Grant",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
        contact: {
          contactEmail: "majestic.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-574-120-4787",
        },
      },
    ],
    title: "Majestic Mythos of the Dutch Jewel",
    description:
      "Sail from Amsterdam into a world of wonder. The Northern Europe beckons with unforgettable ports like Helsinki, Copenhagen, Southampton, Dublin, where every view is picture-perfect and every moment is priceless.",
    rating: 4.3,
    tags: ["cruise-ship"],
  },
  {
    basePrice: 3211,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
          country: "Finland",
          coordinates: {
            latitude: 60.1695,
            longitude: 24.9354,
          },
        },
      ],
      description:
        "Your journey through the Northern Europe begins in Amsterdam, where elegance meets adventure. Explore the shores of Copenhagen, Tallinn, Helsinki, with curated excursions and luxurious onboard amenities.",
      distance: "1407 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Amsterdam to Copenhagen",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Copenhagen to Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Tallinn to Helsinki",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Joseph Henderson",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "gilded.mystique.of.t@velarivoyages.com",
          contactNumber: "+1-709-553-9386",
        },
      },
    ],
    title: "Gilded Mystique of the Dutch Jewel",
    description:
      "Your journey through the Northern Europe begins in Amsterdam, where elegance meets adventure. Explore the shores of Copenhagen, Tallinn, Helsinki, with curated excursions and luxurious onboard amenities.",
    rating: 5.0,
    tags: ["nature"],
  },
  {
    basePrice: 1395,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
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
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "This extraordinary serenade from Amsterdam offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Tallinn, Helsinki, London and Copenhagen, creating memories that will last a lifetime.",
      distance: "1201 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Amsterdam to Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Tallinn to Helsinki",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Helsinki to London",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from London to Copenhagen",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Amsterdam",
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
          description: "Exploring Helsinki",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 20",
          end: "Day 20",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Aaron Sutton",
        role: "Cruise Specialist",
        languages: ["English", "Russian", "Norwegian", "Italian", "Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "dreamlike.oasis.of.t@velarivoyages.com",
          contactNumber: "+1-880-431-1821",
        },
      },
    ],
    title: "Dreamlike Oasis of the Dutch Jewel",
    description:
      "This extraordinary serenade from Amsterdam offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Tallinn, Helsinki, London and Copenhagen, creating memories that will last a lifetime.",
    rating: 4.6,
    tags: ["culinary", "weekend-cruise"],
  },
  {
    basePrice: 3335,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
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
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
          city: "Tallinn",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Escape to sea from Amsterdam on a exquisite voyage exploring the magic of Northern Europe. Visit unforgettable locales like London, Tallinn, where each stop inspires awe.",
      distance: "1151 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Amsterdam to London",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from London to Tallinn",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Dean",
        role: "Sales Consultant",
        languages: ["English", "Norwegian", "Finnish", "Italian", "Swedish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "majestic.journey.of.@velarivoyages.com",
          contactNumber: "+1-601-265-7803",
        },
      },
    ],
    title: "Majestic Journey of the Saga-Strewn Coastlines",
    description:
      "Escape to sea from Amsterdam on a exquisite voyage exploring the magic of Northern Europe. Visit unforgettable locales like London, Tallinn, where each stop inspires awe.",
    rating: 4.3,
    tags: ["weekend-cruise", "repositioning"],
  },
  {
    basePrice: 6928,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Stockholm",
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
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
          city: "Stockholm",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Savor each moment of this riveting escape through Northern Europe, starting in Amsterdam. Visit renowned locations like London, Dublin, Stockholm, where adventure and relaxation intertwine.",
      distance: "785 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Amsterdam to London",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from London to Dublin",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Dublin to Stockholm",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Virginia Porter",
        role: "Sales Consultant",
        languages: ["English", "Norwegian", "Finnish", "Italian", "Swedish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
        contact: {
          contactEmail: "majestic.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-712-834-8153",
        },
      },
    ],
    title: "Majestic Labyrinth of the Windswept Elegance",
    description:
      "Savor each moment of this riveting escape through Northern Europe, starting in Amsterdam. Visit renowned locations like London, Dublin, Stockholm, where adventure and relaxation intertwine.",
    rating: 4.2,
    tags: ["general"],
  },
  {
    basePrice: 6785,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
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
          city: "Helsinki",
          country: "Finland",
          coordinates: {
            latitude: 60.1695,
            longitude: 24.9354,
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
        "Enjoy seamless luxury on this spectacular pulse beginning in Amsterdam. Visit breathtaking Northern Europe locales such as Kiel, Helsinki, Southampton on this unforgettable itinerary.",
      distance: "669 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Amsterdam to Kiel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Kiel to Helsinki",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Helsinki to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Kiel",
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
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nancy Spencer",
        role: "Sales Consultant",
        languages: ["English", "Norwegian", "Finnish", "Italian", "Swedish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "golden.frontier.of.t@velarivoyages.com",
          contactNumber: "+1-522-665-2430",
        },
      },
    ],
    title: "Golden Frontier of the Waterborne Enigma",
    description:
      "Enjoy seamless luxury on this spectacular pulse beginning in Amsterdam. Visit breathtaking Northern Europe locales such as Kiel, Helsinki, Southampton on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["cruise-excursion", "cruise", "cultural"],
  },
  {
    basePrice: 9723,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Dublin",
      country: "Ireland",
      coordinates: {
        latitude: 53.349805,
        longitude: -6.26031,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
      ],
      description:
        "Leave stress behind with this curated renaissance from Amsterdam. Sail across the best of Northern Europe and explore treasures like Copenhagen, Berlin, Dublin with comfort and style.",
      distance: "684 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Amsterdam to Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Copenhagen to Berlin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Berlin to Dublin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Dublin",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Abigail Dunn",
        role: "Sales Consultant",
        languages: ["English", "Norwegian", "Finnish", "Italian", "Swedish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "dreamlike.escape.of.@velarivoyages.com",
          contactNumber: "+1-536-964-2768",
        },
      },
    ],
    title: "Dreamlike Escape of the Mist-Wrapped Lattices",
    description:
      "Leave stress behind with this curated renaissance from Amsterdam. Sail across the best of Northern Europe and explore treasures like Copenhagen, Berlin, Dublin with comfort and style.",
    rating: 4.8,
    tags: ["romantic", "cruise-getaway", "cultural"],
  },
  {
    basePrice: 2775,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "This luminous mythos begins in Amsterdam and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Dublin, Southampton.",
      distance: "696 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Amsterdam to Dublin",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Dublin to Southampton",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Southampton to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Emily Morgan",
        role: "Sales Consultant",
        languages: ["English", "Norwegian", "Finnish", "Italian", "Swedish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "charming.awakening.o@velarivoyages.com",
          contactNumber: "+1-827-132-9420",
        },
      },
    ],
    title: "Charming Awakening of the Mist-Wrapped Lattices",
    description:
      "This luminous mythos begins in Amsterdam and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Dublin, Southampton.",
    rating: 5.0,
    tags: ["cultural"],
  },
];
